"use client";

import Link from "next/link";
import { Inbox, LockKeyhole, Menu, PenLine, Send, ShieldCheck, Webhook, X } from "lucide-react";
import { FormEvent, useState } from "react";
import Composer, { type ReplyDraft, type Sender } from "./Composer";
import Mailbox from "./Mailbox";
import WebhookPanel from "./WebhookPanel";

type MailView = "compose" | "inbox" | "sent" | "webhook";

const views: { id: MailView; label: string; eyebrow: string; icon: typeof Inbox }[] = [
  { id: "compose", label: "Compose", eyebrow: "New message", icon: PenLine },
  { id: "inbox", label: "Inbox", eyebrow: "Mailbox", icon: Inbox },
  { id: "sent", label: "Sent Messages", eyebrow: "Mailbox", icon: Send },
  { id: "webhook", label: "Resend Webhook", eyebrow: "Integration", icon: Webhook },
];

type Config = { senders: Sender[]; webhookConfigured: boolean; forwardTo: string | null };

export default function MailPage() {
  const [accessKey, setAccessKey] = useState("");
  const [config, setConfig] = useState<Config | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [authError, setAuthError] = useState("");
  const [view, setView] = useState<MailView>("compose");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [replyDraft, setReplyDraft] = useState<ReplyDraft | null>(null);

  async function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsChecking(true);
    setAuthError("");
    try {
      const response = await fetch("/api/mail/auth", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ accessKey }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to unlock admin access.");
      setConfig(result);
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : "Unable to unlock admin access.");
    } finally {
      setIsChecking(false);
    }
  }

  if (!config) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#071A3D] px-4 py-12 text-white">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#36C36A] text-[#071A3D]"><ShieldCheck size={23} /></div><div><p className="text-sm font-semibold tracking-wide">X-BUC TECH</p><p className="text-xs text-[#D9DDE3]">Resend Integration Gateway</p></div></div>
          <section className="rounded-2xl border border-white/15 bg-white/[0.06] p-7 shadow-2xl shadow-black/20 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E6FFF]/15 text-[#1E6FFF]"><LockKeyhole size={23} /></div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#36C36A]">Administrator Password</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight">Unlock Admin Access</h1>
            <p className="mt-3 text-sm leading-6 text-[#D9DDE3]">Access the X-BUC TECH mail administration portal and Resend composer.</p>
            <form onSubmit={unlock} className="mt-7 grid gap-4">
              <input required autoFocus type="password" value={accessKey} onChange={(event) => setAccessKey(event.target.value)} placeholder="Enter administrator password" className="rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3.5 text-sm text-white outline-none placeholder:text-[#9caac0] focus:border-[#1E6FFF]" />
              <button disabled={isChecking} type="submit" className="rounded-xl bg-[#36C36A] px-4 py-3.5 text-sm font-bold text-[#071A3D] transition hover:bg-[#4bd77d] disabled:opacity-60">{isChecking ? "Checking access..." : "Unlock Admin Access"}</button>
              {authError ? <p className="text-sm text-red-300" role="alert">{authError}</p> : null}
            </form>
          </section>
          <Link href="/" className="mt-6 block text-center text-sm text-[#D9DDE3] hover:text-white">Return to X-BUC TECH home</Link>
        </div>
      </main>
    );
  }

  const selectedView = views.find((item) => item.id === view)!;
  return (
    <main className="min-h-screen bg-[#f5f7fa] text-[#071A3D]">
      <header className="flex h-[72px] items-center justify-between border-b border-[#dfe5ed] bg-white px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3"><button type="button" className="rounded-lg p-2 text-[#52627a] hover:bg-[#f0f4f8] lg:hidden" onClick={() => setMobileNavOpen((open) => !open)} aria-label="Toggle mail navigation">{mobileNavOpen ? <X size={20} /> : <Menu size={20} />}</button><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#071A3D] text-[#36C36A]"><ShieldCheck size={19} /></div><div><p className="text-sm font-bold tracking-wide">X-BUC TECH</p><p className="text-[11px] text-[#748197]">Resend Integration Gateway</p></div></div>
        <div className="flex items-center gap-4"><div className="hidden items-center gap-2 text-xs text-[#52627a] sm:flex"><span className="h-2 w-2 rounded-full bg-[#36C36A]" />Resend Live</div><button type="button" onClick={() => { setConfig(null); setAccessKey(""); }} className="rounded-lg border border-[#dfe5ed] px-3 py-2 text-xs font-semibold text-[#52627a] hover:border-[#1E6FFF] hover:text-[#1E6FFF]">Lock portal</button></div>
      </header>
      <div className="mx-auto flex max-w-[1600px]">
        <aside className={`${mobileNavOpen ? "block" : "hidden"} absolute z-20 min-h-[calc(100vh-72px)] w-64 border-r border-[#dfe5ed] bg-white p-4 lg:relative lg:block`}>
          <p className="px-3 pt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a96a8]">Workspace</p>
          <nav className="mt-3 grid gap-1">
            {views.map((item) => { const Icon = item.icon; return <button key={item.id} type="button" onClick={() => { setView(item.id); setMobileNavOpen(false); }} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${view === item.id ? "bg-[#eaf1ff] text-[#1E6FFF]" : "text-[#52627a] hover:bg-[#f3f6f9]"}`}><Icon size={17} /><span className="flex-1">{item.label}</span></button>; })}
          </nav>
          <button type="button" onClick={() => setView("webhook")} className="absolute bottom-6 left-4 right-4 rounded-xl bg-[#f5f8fc] p-3 text-left"><div className="flex items-center gap-2 text-xs font-semibold text-[#52627a]"><span className={`h-2 w-2 rounded-full ${config.webhookConfigured ? "bg-[#36C36A]" : "bg-amber-400"}`} />Webhook Status <span className={`ml-auto ${config.webhookConfigured ? "text-[#36C36A]" : "text-amber-500"}`}>{config.webhookConfigured ? "Active" : "Setup needed"}</span></div></button>
        </aside>
        <section className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E6FFF]">{selectedView.eyebrow}</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#071A3D]">{selectedView.label}</h1>
            {view === "compose" ? <Composer accessKey={accessKey} senders={config.senders} reply={replyDraft} /> : null}
            {view === "inbox" || view === "sent" ? <Mailbox key={view} accessKey={accessKey} folder={view} onReply={(draft) => { setReplyDraft(draft); setView("compose"); }} /> : null}
            {view === "webhook" ? <WebhookPanel accessKey={accessKey} configured={config.webhookConfigured} forwardTo={config.forwardTo} /> : null}
          </div>
        </section>
      </div>
    </main>
  );
}
