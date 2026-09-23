"use client";

import Link from "next/link";
import {
  Archive,
  FileText,
  Inbox,
  LockKeyhole,
  Mail,
  Menu,
  PenLine,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";

type MailView = "compose" | "inbox" | "sent" | "starred" | "drafts";

const views: { id: MailView; label: string; icon: typeof Inbox; count?: number }[] = [
  { id: "compose", label: "Compose", icon: PenLine },
  { id: "inbox", label: "Inbox", icon: Inbox },
  { id: "sent", label: "Sent Messages", icon: Send, count: 0 },
  { id: "starred", label: "Starred", icon: Star },
  { id: "drafts", label: "Drafts", icon: FileText },
];

function EmptyMailbox({ view }: { view: Exclude<MailView, "compose"> }) {
  const labels = { inbox: "inbox", sent: "sent messages", starred: "starred messages", drafts: "drafts" };
  return (
    <div className="flex min-h-[430px] flex-col items-center justify-center border-t border-[#e3e8ef] px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#1E6FFF]"><Mail size={24} /></div>
      <h2 className="mt-5 text-lg font-semibold text-[#071A3D]">No messages found in this folder.</h2>
      <p className="mt-2 max-w-sm text-sm leading-6 text-[#68758a]">Your {labels[view]} will appear here when Resend delivers or records them.</p>
    </div>
  );
}

export default function MailPage() {
  const [accessKey, setAccessKey] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [authError, setAuthError] = useState("");
  const [view, setView] = useState<MailView>("compose");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  async function unlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsChecking(true);
    setAuthError("");
    try {
      const response = await fetch("/api/mail/auth", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ accessKey }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to unlock admin access.");
      setIsUnlocked(true);
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : "Unable to unlock admin access.");
    } finally {
      setIsChecking(false);
    }
  }

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/mail/send", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...payload, accessKey }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Resend could not deliver the email.");
      form.reset();
      setStatus("Message sent through Resend.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to send the message.");
    } finally {
      setIsSending(false);
    }
  }

  if (!isUnlocked) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#071A3D] px-4 py-12 text-white">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#36C36A] text-[#071A3D]"><ShieldCheck size={23} /></div><div><p className="text-sm font-semibold tracking-wide">XBUC TECH</p><p className="text-xs text-[#D9DDE3]">Resend Integration Gateway</p></div></div>
          <section className="rounded-2xl border border-white/15 bg-white/[0.06] p-7 shadow-2xl shadow-black/20 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E6FFF]/15 text-[#1E6FFF]"><LockKeyhole size={23} /></div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#36C36A]">Administrator Password</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight">Unlock Admin Access</h1>
            <p className="mt-3 text-sm leading-6 text-[#D9DDE3]">Access the XBUC TECH mail administration portal and Resend composer.</p>
            <form onSubmit={unlock} className="mt-7 grid gap-4">
              <input required autoFocus type="password" value={accessKey} onChange={(event) => setAccessKey(event.target.value)} placeholder="Enter administrator password" className="rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3.5 text-sm text-white outline-none placeholder:text-[#9caac0] focus:border-[#1E6FFF]" />
              <button disabled={isChecking} type="submit" className="rounded-xl bg-[#36C36A] px-4 py-3.5 text-sm font-bold text-[#071A3D] transition hover:bg-[#4bd77d] disabled:opacity-60">{isChecking ? "Checking access..." : "Unlock Admin Access"}</button>
              {authError ? <p className="text-sm text-red-300" role="alert">{authError}</p> : null}
            </form>
          </section>
          <Link href="/" className="mt-6 block text-center text-sm text-[#D9DDE3] hover:text-white">Return to XBUC TECH home</Link>
        </div>
      </main>
    );
  }

  const selectedView = views.find((item) => item.id === view);
  return (
    <main className="min-h-screen bg-[#f5f7fa] text-[#071A3D]">
      <header className="flex h-[72px] items-center justify-between border-b border-[#dfe5ed] bg-white px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3"><button type="button" className="rounded-lg p-2 text-[#52627a] hover:bg-[#f0f4f8] lg:hidden" onClick={() => setMobileNavOpen((open) => !open)} aria-label="Toggle mail navigation">{mobileNavOpen ? <X size={20} /> : <Menu size={20} />}</button><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#071A3D] text-[#36C36A]"><ShieldCheck size={19} /></div><div><p className="text-sm font-bold tracking-wide">XBUC TECH</p><p className="text-[11px] text-[#748197]">Resend Integration Gateway</p></div></div>
        <div className="flex items-center gap-4"><div className="hidden items-center gap-2 text-xs text-[#52627a] sm:flex"><span className="h-2 w-2 rounded-full bg-[#36C36A]" />Resend Live</div><button type="button" onClick={() => { setIsUnlocked(false); setAccessKey(""); }} className="rounded-lg border border-[#dfe5ed] px-3 py-2 text-xs font-semibold text-[#52627a] hover:border-[#1E6FFF] hover:text-[#1E6FFF]">Lock portal</button></div>
      </header>
      <div className="mx-auto flex max-w-[1600px]">
        <aside className={`${mobileNavOpen ? "block" : "hidden"} absolute z-20 min-h-[calc(100vh-72px)] w-64 border-r border-[#dfe5ed] bg-white p-4 lg:relative lg:block`}>
          <p className="px-3 pt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a96a8]">Workspace</p>
          <nav className="mt-3 grid gap-1">
            {views.map((item) => { const Icon = item.icon; return <button key={item.id} type="button" onClick={() => { setView(item.id); setMobileNavOpen(false); }} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium transition ${view === item.id ? "bg-[#eaf1ff] text-[#1E6FFF]" : "text-[#52627a] hover:bg-[#f3f6f9]"}`}><Icon size={17} /><span className="flex-1">{item.label}</span>{item.count !== undefined ? <span className="text-xs text-[#8a96a8]">{item.count}</span> : null}</button>; })}
          </nav>
          <div className="mt-8 border-t border-[#e8edf2] pt-6"><p className="px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8a96a8]">System</p><div className="mt-3 grid gap-1"><div className="flex items-center gap-3 px-3 py-3 text-sm text-[#52627a]"><Settings2 size={17} />Settings</div><div className="flex items-center gap-3 px-3 py-3 text-sm text-[#52627a]"><Archive size={17} />Resend Webhook</div></div></div>
          <div className="absolute bottom-6 left-4 right-4 rounded-xl bg-[#f5f8fc] p-3"><div className="flex items-center gap-2 text-xs font-semibold text-[#52627a]"><span className="h-2 w-2 rounded-full bg-[#36C36A]" />Webhook Status <span className="ml-auto text-[#36C36A]">Active</span></div></div>
        </aside>
        <section className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E6FFF]">{selectedView?.id === "compose" ? "Resend Webhook" : "Mailbox"}</p><h1 className="mt-2 text-3xl font-bold tracking-tight text-[#071A3D]">{selectedView?.label}</h1></div><div className="flex items-center gap-2 rounded-lg border border-[#dfe5ed] bg-white px-3 py-2 text-sm text-[#68758a]"><Search size={16} /><span>Search mail</span></div></div>
            {view === "compose" ? <form onSubmit={sendMessage} className="mt-8 rounded-2xl border border-[#dfe5ed] bg-white shadow-sm"><div className="flex items-center justify-between border-b border-[#e8edf2] px-5 py-4 sm:px-7"><div><h2 className="font-semibold text-[#071A3D]">New Message</h2><p className="mt-1 text-xs text-[#8a96a8]">Send through your verified XBUC TECH domain</p></div><span className="flex items-center gap-2 text-xs font-semibold text-[#36C36A]"><span className="h-2 w-2 rounded-full bg-[#36C36A]" />Resend Live</span></div><div className="grid gap-5 p-5 sm:p-7"><label className="grid gap-2 text-sm font-medium text-[#52627a]">From<input required name="from" type="email" pattern="[^@\s]+@xbuctech\.com" placeholder="name@xbuctech.com" className="rounded-lg border border-[#dfe5ed] px-4 py-3 text-[#071A3D] outline-none focus:border-[#1E6FFF]" /></label><label className="grid gap-2 text-sm font-medium text-[#52627a]">To<input required name="to" type="email" pattern="[^@\s]+@xbuctech\.com" placeholder="recipient@xbuctech.com" className="rounded-lg border border-[#dfe5ed] px-4 py-3 text-[#071A3D] outline-none focus:border-[#1E6FFF]" /></label><label className="grid gap-2 text-sm font-medium text-[#52627a]">Subject<input required name="subject" maxLength={160} className="rounded-lg border border-[#dfe5ed] px-4 py-3 text-[#071A3D] outline-none focus:border-[#1E6FFF]" /></label><label className="grid gap-2 text-sm font-medium text-[#52627a]">Message<textarea required name="message" rows={9} maxLength={10000} className="resize-y rounded-lg border border-[#dfe5ed] px-4 py-3 text-[#071A3D] outline-none focus:border-[#1E6FFF]" /></label><div className="flex flex-wrap items-center gap-4"><button disabled={isSending} type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#36C36A] px-5 py-3 text-sm font-bold text-[#071A3D] hover:bg-[#4bd77d] disabled:opacity-60">{isSending ? "Sending..." : "Send Message"}<Send size={16} /></button>{status ? <p aria-live="polite" className="text-sm text-[#52627a]">{status}</p> : null}</div></div></form> : <div className="mt-8 overflow-hidden rounded-2xl border border-[#dfe5ed] bg-white shadow-sm"><div className="flex items-center justify-between border-b border-[#e8edf2] px-5 py-4"><p className="text-sm font-semibold text-[#52627a]">{selectedView?.label}</p><span className="text-xs text-[#8a96a8]">0 messages</span></div><EmptyMailbox view={view as Exclude<MailView, "compose">} /></div>}
            {view !== "compose" ? <div className="mt-5 hidden min-h-36 rounded-2xl border border-dashed border-[#ccd5e1] bg-white p-6 text-sm text-[#8a96a8] lg:flex lg:items-center lg:justify-center">Select a message from the middle list to view its full content.</div> : null}
          </div>
        </section>
      </div>
    </main>
  );
}
