import { NextResponse } from "next/server";

const companyEmailPattern = /^[^\s@]+@xbuctech\.com$/i;
const maxBodyLength = 10_000;

function isValidText(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const accessKey = process.env.MAIL_ACCESS_KEY;
  const fromName = process.env.RESEND_FROM_NAME || "XBUC TECH";

  if (!apiKey || !accessKey) {
    return NextResponse.json({ error: "Mail service is not configured." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { accessKey: submittedAccessKey, from, to, subject, message } = body;
  if (submittedAccessKey !== accessKey) {
    return NextResponse.json({ error: "Invalid mail access key." }, { status: 401 });
  }
  if (!isValidText(from, 320) || !companyEmailPattern.test(from)) {
    return NextResponse.json({ error: "The sender must use an @xbuctech.com address." }, { status: 400 });
  }
  if (!isValidText(to, 320) || !companyEmailPattern.test(to)) {
    return NextResponse.json({ error: "The recipient must use an @xbuctech.com address." }, { status: 400 });
  }
  if (!isValidText(subject, 160) || !isValidText(message, maxBodyLength)) {
    return NextResponse.json({ error: "Subject and message are required." }, { status: 400 });
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${fromName} <${from}>`,
      to: [to],
      subject,
      text: message,
      reply_to: from,
    }),
  });

  if (!resendResponse.ok) {
    return NextResponse.json({ error: "Resend could not deliver the email." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
