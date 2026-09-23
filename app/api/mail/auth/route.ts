import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const expectedAccessKey = process.env.MAIL_ACCESS_KEY;

  if (!expectedAccessKey) {
    return NextResponse.json({ error: "Mail service is not configured." }, { status: 503 });
  }

  let body: { accessKey?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.accessKey !== expectedAccessKey) {
    return NextResponse.json({ error: "Incorrect administrator password." }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
