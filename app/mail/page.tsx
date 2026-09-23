"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function MailPage() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/mail/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send the email.");
      }

      form.reset();
      setStatus("Email sent successfully.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to send the email.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#071A3D] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-sm text-[#D9DDE3] hover:text-white">
          XBUC TECH
        </Link>
        <div className="mt-12 border-b border-white/10 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#36C36A]">
            Internal mail
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Compose an email
          </h1>
          <p className="mt-4 max-w-xl leading-7 text-[#D9DDE3]">
            Send from an approved XBUC TECH address to an XBUC TECH inbox through Resend.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-5">
          <label className="grid gap-2 text-sm font-medium text-[#D9DDE3]">
            Mail access key
            <input required name="accessKey" type="password" className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#1E6FFF]" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-[#D9DDE3]">
            From address
            <input required name="from" type="email" placeholder="name@xbuctech.com" pattern="[^@\\s]+@xbuctech\\.com" className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#1E6FFF]" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-[#D9DDE3]">
            To address
            <input required name="to" type="email" placeholder="team@xbuctech.com" pattern="[^@\\s]+@xbuctech\\.com" className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#1E6FFF]" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-[#D9DDE3]">
            Subject
            <input required name="subject" type="text" maxLength={160} className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#1E6FFF]" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-[#D9DDE3]">
            Message
            <textarea required name="message" rows={10} maxLength={10000} className="resize-y rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#1E6FFF]" />
          </label>
          <button disabled={isSending} type="submit" className="w-fit rounded-full bg-[#36C36A] px-6 py-3 font-semibold text-[#071A3D] disabled:cursor-not-allowed disabled:opacity-60">
            {isSending ? "Sending..." : "Send email"}
          </button>
          {status ? <p aria-live="polite" className="text-sm text-[#D9DDE3]">{status}</p> : null}
        </form>
      </div>
    </main>
  );
}
