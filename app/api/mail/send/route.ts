import { NextResponse } from "next/server";
import { companyEmailPattern, isAuthorized, parseRecipients, resend } from "@/lib/mail";

const maxBodyLength = 10_000;
const maxAttachments = 5;
const maxAttachmentBytes = 10 * 1024 * 1024;
const maxTotalAttachmentBytes = 25 * 1024 * 1024;

function isValidText(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

type MailAttachment = { filename: string; content: string; contentType?: string };

function parseAttachments(value: unknown): MailAttachment[] | null {
  if (value === undefined) return [];
  if (!Array.isArray(value) || value.length > maxAttachments) return null;

  let totalBytes = 0;
  const attachments: MailAttachment[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object") return null;
    const attachment = item as Partial<MailAttachment>;
    if (!isValidText(attachment.filename, 180) || !isValidText(attachment.content, maxAttachmentBytes * 2)) return null;
    if (!/^[a-zA-Z0-9+/]*={0,2}$/.test(attachment.content) || attachment.content.length % 4 !== 0) return null;
    const bytes = Math.floor((attachment.content.length * 3) / 4) - (attachment.content.endsWith("==") ? 2 : attachment.content.endsWith("=") ? 1 : 0);
    if (bytes > maxAttachmentBytes) return null;
    totalBytes += bytes;
    if (totalBytes > maxTotalAttachmentBytes) return null;
    attachments.push({ filename: attachment.filename, content: attachment.content, ...(attachment.contentType ? { contentType: attachment.contentType.slice(0, 120) } : {}) });
  }
  return attachments;
}

export async function POST(request: Request) {
  const fromName = process.env.RESEND_FROM_NAME || "X-BUC TECH";

  if (!process.env.RESEND_API_KEY || !process.env.MAIL_ACCESS_KEY) {
    return NextResponse.json({ error: "Mail service is not configured." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { accessKey, from, subject, message } = body;
  if (!isAuthorized(accessKey)) {
    return NextResponse.json({ error: "Invalid mail access key." }, { status: 401 });
  }
  if (!isValidText(from, 320) || !companyEmailPattern.test(from)) {
    return NextResponse.json({ error: "The sender must use an @xbuctech.com address." }, { status: 400 });
  }

  const to = parseRecipients(body.to);
  const cc = parseRecipients(body.cc ?? []);
  const bcc = parseRecipients(body.bcc ?? []);
  if (!to?.length) {
    return NextResponse.json({ error: "Add at least one valid recipient." }, { status: 400 });
  }
  if (!cc || !bcc) {
    return NextResponse.json({ error: "One of the Cc/Bcc addresses is invalid." }, { status: 400 });
  }
  if (!isValidText(subject, 160) || !isValidText(message, maxBodyLength)) {
    return NextResponse.json({ error: "Subject and message are required." }, { status: 400 });
  }
  const attachments = parseAttachments(body.attachments);
  if (!attachments) {
    return NextResponse.json({ error: "Attachments must be valid files, up to 5 files and 25 MB total." }, { status: 400 });
  }

  const resendResponse = await resend("/emails", {
    method: "POST",
    body: JSON.stringify({
      from: `${fromName} <${from}>`,
      to,
      ...(cc.length ? { cc } : {}),
      ...(bcc.length ? { bcc } : {}),
      subject,
      text: message,
      reply_to: from,
      ...(attachments.length ? { attachments } : {}),
    }),
  });

  const result = await resendResponse.json().catch(() => ({}));
  if (!resendResponse.ok) {
    return NextResponse.json({ error: result.message || "Resend could not deliver the email." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id: result.id });
}
