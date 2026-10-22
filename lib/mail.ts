import { createHmac, timingSafeEqual } from "node:crypto";

export const RESEND_API = "https://api.resend.com";
export const companyEmailPattern = /^[^\s@]+@x-?buctech\.com$/i;
export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type Sender = { email: string; label: string };

const defaultSenders: Sender[] = [
  { email: "hello@xbuctech.com", label: "Hello" },
  { email: "info@xbuctech.com", label: "Info" },
  { email: "support@xbuctech.com", label: "Support" },
  { email: "admin@xbuctech.com", label: "Admin" },
  { email: "noreply@xbuctech.com", label: "No Reply" },
];

const defaultNotificationRecipients = ["apreezofficial@gmail.com", "xbuctech@gmail.com"];

// MAIL_SENDERS="Hello:hello@xbuctech.com,Support:support@xbuctech.com" overrides the defaults.
export function getSenders(): Sender[] {
  const raw = process.env.MAIL_SENDERS;
  if (!raw) return defaultSenders;
  const senders = raw
    .split(",")
    .map((entry) => {
      const [label, email] = entry.includes(":") ? entry.split(":") : [entry.split("@")[0], entry];
      return { label: label.trim(), email: email.trim() };
    })
    .filter((sender) => companyEmailPattern.test(sender.email));
  return senders.length ? senders : defaultSenders;
}

export function isAuthorized(key: unknown) {
  const expected = process.env.MAIL_ACCESS_KEY;
  if (!expected || typeof key !== "string" || key.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(key), Buffer.from(expected));
}

export function parseRecipients(value: unknown): string[] | null {
  const list = Array.isArray(value) ? value : typeof value === "string" ? value.split(/[,;\s]+/) : [];
  const recipients = [...new Set(list.map((item) => String(item).trim().toLowerCase()).filter(Boolean))];
  if (recipients.length > 50 || recipients.some((email) => email.length > 320 || !emailPattern.test(email))) return null;
  return recipients;
}

// MAIL_NOTIFICATION_TO may override the default inbound-mail notification list.
export function getNotificationRecipients(): string[] {
  const configured = process.env.MAIL_NOTIFICATION_TO;
  const recipients = parseRecipients(configured || defaultNotificationRecipients);
  return recipients?.length ? recipients : defaultNotificationRecipients;
}

export async function resend(path: string, init?: RequestInit) {
  return fetch(`${RESEND_API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      ...init?.headers,
    },
    cache: "no-store",
  });
}

// Resend signs webhooks with Svix: HMAC-SHA256 over "id.timestamp.body" using the base64 secret after "whsec_".
export function verifyWebhook(body: string, headers: Headers, secret: string) {
  const id = headers.get("svix-id");
  const timestamp = headers.get("svix-timestamp");
  const signatures = headers.get("svix-signature");
  if (!id || !timestamp || !signatures) return false;
  if (Math.abs(Date.now() / 1000 - Number(timestamp)) > 300) return false;

  const key = Buffer.from(secret.replace(/^whsec_/, ""), "base64");
  const expected = createHmac("sha256", key).update(`${id}.${timestamp}.${body}`).digest();
  return signatures.split(" ").some((entry) => {
    const [, signature] = entry.split(",");
    if (!signature) return false;
    const received = Buffer.from(signature, "base64");
    return received.length === expected.length && timingSafeEqual(received, expected);
  });
}

export type WebhookEvent = {
  id: string;
  type: string;
  createdAt: string;
  emailId?: string;
  from?: string;
  to?: string[];
  subject?: string;
};

// Kept in memory, so the feed resets on redeploy and is per server instance. Inbox/Sent read from Resend directly.
const store = globalThis as typeof globalThis & { __mailEvents?: WebhookEvent[] };
export const webhookEvents = (store.__mailEvents ??= []);

export function recordEvent(event: WebhookEvent) {
  webhookEvents.unshift(event);
  webhookEvents.splice(50);
}
