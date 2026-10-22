"use client";

import { ChevronDown, Clock3, LayoutTemplate, Paperclip, Send, Users, X } from "lucide-react";
import { FormEvent, KeyboardEvent, useEffect, useMemo, useState } from "react";

export type Sender = { email: string; label: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const recentKey = "x-buc-mail-recent";
const maxFiles = 5;
const maxFileBytes = 10 * 1024 * 1024;
const maxTotalBytes = 25 * 1024 * 1024;

export type ReplyDraft = { to: string; subject: string; message: string };
type Attachment = { file: File; content: string };

const templates = [
  { id: "blank", label: "Blank message", subject: "", message: "" },
  {
    id: "follow-up",
    label: "Follow-up",
    subject: "Following up on our conversation",
    message: "Hi,\n\nThank you for your time earlier. I'm following up on our conversation and the next steps we discussed.\n\nPlease let me know a convenient time to continue.\n\nBest regards,\nX-BUC TECH",
  },
  {
    id: "proposal",
    label: "Proposal",
    subject: "X-BUC TECH proposal",
    message: "Hi,\n\nPlease find our proposal outlining the scope, timeline and investment for your project.\n\nWe're happy to walk you through it on a short call.\n\nBest regards,\nX-BUC TECH",
  },
  {
    id: "meeting",
    label: "Meeting request",
    subject: "Request to schedule a meeting",
    message: "Hi,\n\nI'd like to schedule a short meeting to discuss how X-BUC TECH can support your team.\n\nWould any of the following times work for you?\n- \n- \n\nBest regards,\nX-BUC TECH",
  },
  {
    id: "support",
    label: "Support reply",
    subject: "Re: Your support request",
    message: "Hi,\n\nThanks for reaching out. Our team has received your request and is looking into it.\n\nWe'll update you as soon as we have more information.\n\nBest regards,\nX-BUC TECH Support",
  },
  {
    id: "thanks",
    label: "Thank you",
    subject: "Thank you",
    message: "Hi,\n\nThank you for choosing X-BUC TECH. We appreciate your trust and look forward to working with you.\n\nBest regards,\nX-BUC TECH",
  },
];

function loadRecent(): string[] {
  try {
    return JSON.parse(localStorage.getItem(recentKey) || "[]");
  } catch {
    return [];
  }
}

function saveRecent(emails: string[]) {
  try {
    const merged = [...new Set([...emails, ...loadRecent()])].slice(0, 12);
    localStorage.setItem(recentKey, JSON.stringify(merged));
    return merged;
  } catch {
    return emails;
  }
}

function RecipientInput({ label, value, onChange, suggestions, autoFocus }: { label: string; value: string[]; onChange: (next: string[]) => void; suggestions: string[]; autoFocus?: boolean }) {
  const [draft, setDraft] = useState("");
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState("");

  function add(raw: string) {
    const emails = raw.split(/[,;\s]+/).map((item) => item.trim().toLowerCase()).filter(Boolean);
    const invalid = emails.find((email) => !emailPattern.test(email));
    if (invalid) {
      setError(`"${invalid}" is not a valid email address.`);
      return;
    }
    setError("");
    onChange([...new Set([...value, ...emails])]);
    setDraft("");
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (["Enter", ",", ";", "Tab"].includes(event.key) && draft.trim()) {
      event.preventDefault();
      add(draft);
    } else if (event.key === "Backspace" && !draft && value.length) {
      onChange(value.slice(0, -1));
    }
  }

  const matches = suggestions.filter((email) => !value.includes(email) && email.includes(draft.toLowerCase())).slice(0, 6);

  return (
    <div className="relative grid gap-2 text-sm font-medium text-[#52627a]">
      <span>{label}</span>
      <div className="flex min-h-[50px] flex-wrap items-center gap-2 rounded-lg border border-[#dfe5ed] px-3 py-2 focus-within:border-[#1E6FFF]">
        {value.map((email) => (
          <span key={email} className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ff] py-1 pl-3 pr-1.5 text-xs font-semibold text-[#1E6FFF]">
            {email}
            <button type="button" aria-label={`Remove ${email}`} onClick={() => onChange(value.filter((item) => item !== email))} className="rounded-full p-0.5 hover:bg-[#1E6FFF]/15"><X size={12} /></button>
          </span>
        ))}
        <input
          type="email"
          value={draft}
          autoFocus={autoFocus}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={onKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); if (draft.trim()) add(draft); }}
          placeholder={value.length ? "Add another…" : "Type any email and press Enter"}
          className="min-w-[180px] flex-1 bg-transparent py-1 text-[#071A3D] outline-none placeholder:text-[#a3aebd]"
        />
      </div>
      {focused && matches.length ? (
        <ul className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-lg border border-[#dfe5ed] bg-white shadow-lg">
          {matches.map((email) => (
            <li key={email}>
              <button type="button" onMouseDown={(event) => { event.preventDefault(); add(email); }} className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-[#071A3D] hover:bg-[#f3f6f9]"><Clock3 size={14} className="text-[#8a96a8]" />{email}</button>
            </li>
          ))}
        </ul>
      ) : null}
      {error ? <p className="text-xs text-red-500">{error}</p> : null}
    </div>
  );
}

function Select({ label, icon, value, onChange, children }: { label: string; icon?: React.ReactNode; value: string; onChange: (value: string) => void; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-[#52627a]">
      <span className="flex items-center gap-1.5">{icon}{label}</span>
      <span className="relative">
        <select value={value} onChange={(event) => onChange(event.target.value)} className="w-full appearance-none rounded-lg border border-[#dfe5ed] bg-white px-4 py-3 pr-10 text-[#071A3D] outline-none focus:border-[#1E6FFF]">{children}</select>
        <ChevronDown size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8a96a8]" />
      </span>
    </label>
  );
}

export default function Composer({ accessKey, senders, reply }: { accessKey: string; senders: Sender[]; reply?: ReplyDraft | null }) {
  const [from, setFrom] = useState(senders[0]?.email ?? "");
  const [to, setTo] = useState<string[]>([]);
  const [cc, setCc] = useState<string[]>([]);
  const [bcc, setBcc] = useState<string[]>([]);
  const [showCopies, setShowCopies] = useState(false);
  const [template, setTemplate] = useState("blank");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [recent, setRecent] = useState<string[]>(loadRecent);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{ tone: "ok" | "error"; text: string } | null>(null);

  useEffect(() => {
    if (!reply) return;
    setTo([reply.to]);
    setSubject(reply.subject);
    setMessage(reply.message);
    setTemplate("blank");
  }, [reply]);

  const suggestions = useMemo(() => [...new Set([...recent, ...senders.map((sender) => sender.email)])], [recent, senders]);
  const quickPicks = suggestions.filter((email) => !to.includes(email)).slice(0, 6);

  function applyTemplate(id: string) {
    setTemplate(id);
    const picked = templates.find((item) => item.id === id);
    if (!picked) return;
    setSubject(picked.subject);
    setMessage(picked.message);
  }

  function addFiles(event: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files || []);
    event.target.value = "";
    if (!files.length) return;
    const currentBytes = attachments.reduce((total, item) => total + item.file.size, 0);
    if (attachments.length + files.length > maxFiles || currentBytes + files.reduce((total, file) => total + file.size, 0) > maxTotalBytes || files.some((file) => file.size > maxFileBytes)) {
      setStatus({ tone: "error", text: "Choose up to 5 files, 10 MB each, and 25 MB total." });
      return;
    }
    Promise.all(files.map(async (file) => {
      const buffer = await file.arrayBuffer();
      const bytes = new Uint8Array(buffer);
      let binary = "";
      for (let index = 0; index < bytes.length; index += 1) binary += String.fromCharCode(bytes[index]);
      return { file, content: btoa(binary) };
    })).then((next) => setAttachments((current) => [...current, ...next])).catch(() => setStatus({ tone: "error", text: "Unable to read one of the selected files." }));
  }

  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!to.length) {
      setStatus({ tone: "error", text: "Add at least one recipient." });
      return;
    }
    setIsSending(true);
    setStatus(null);
    try {
      const response = await fetch("/api/mail/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ accessKey, from, to, cc, bcc, subject, message, attachments: attachments.map(({ file, content }) => ({ filename: file.name, content, contentType: file.type || undefined })) }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Resend could not deliver the email.");
      setRecent(saveRecent([...to, ...cc, ...bcc]));
      setStatus({ tone: "ok", text: `Sent to ${to.length + cc.length + bcc.length} recipient${to.length + cc.length + bcc.length === 1 ? "" : "s"}.` });
      setTo([]); setCc([]); setBcc([]); setSubject(""); setMessage(""); setAttachments([]); setTemplate("blank");
    } catch (error) {
      setStatus({ tone: "error", text: error instanceof Error ? error.message : "Unable to send the message." });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form onSubmit={send} className="mt-8 rounded-2xl border border-[#dfe5ed] bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-[#e8edf2] px-5 py-4 sm:px-7">
        <div><h2 className="font-semibold text-[#071A3D]">New Message</h2><p className="mt-1 text-xs text-[#8a96a8]">Send from your verified X-BUC TECH domain to any address</p></div>
        <span className="flex items-center gap-2 text-xs font-semibold text-[#36C36A]"><span className="h-2 w-2 rounded-full bg-[#36C36A]" />Resend Live</span>
      </div>
      <div className="grid gap-5 p-5 sm:p-7">
        <div className="grid gap-5 sm:grid-cols-2">
          <Select label="From" value={from} onChange={setFrom}>
            {senders.map((sender) => <option key={sender.email} value={sender.email}>{sender.label} — {sender.email}</option>)}
          </Select>
          <Select label="Template" icon={<LayoutTemplate size={14} />} value={template} onChange={applyTemplate}>
            {templates.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
          </Select>
        </div>

        <div className="grid gap-3">
          <RecipientInput label="To" value={to} onChange={setTo} suggestions={suggestions} autoFocus />
          {quickPicks.length ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1 text-xs font-semibold text-[#8a96a8]"><Users size={13} />Quick add</span>
              {quickPicks.map((email) => (
                <button key={email} type="button" onClick={() => setTo([...to, email])} className="rounded-full border border-[#dfe5ed] px-3 py-1 text-xs text-[#52627a] transition hover:border-[#1E6FFF] hover:text-[#1E6FFF]">+ {email}</button>
              ))}
            </div>
          ) : null}
          {!showCopies ? <button type="button" onClick={() => setShowCopies(true)} className="w-fit text-xs font-semibold text-[#1E6FFF] hover:underline">Add Cc / Bcc</button> : null}
        </div>

        {showCopies ? (
          <div className="grid gap-5 sm:grid-cols-2">
            <RecipientInput label="Cc" value={cc} onChange={setCc} suggestions={suggestions} />
            <RecipientInput label="Bcc" value={bcc} onChange={setBcc} suggestions={suggestions} />
          </div>
        ) : null}

        <label className="grid gap-2 text-sm font-medium text-[#52627a]">Subject<input required value={subject} onChange={(event) => setSubject(event.target.value)} maxLength={160} className="rounded-lg border border-[#dfe5ed] px-4 py-3 text-[#071A3D] outline-none focus:border-[#1E6FFF]" /></label>
        <label className="grid gap-2 text-sm font-medium text-[#52627a]">
          <span className="flex justify-between">Message<span className="text-xs font-normal text-[#a3aebd]">{message.length.toLocaleString()} / 10,000</span></span>
          <textarea required value={message} onChange={(event) => setMessage(event.target.value)} rows={10} maxLength={10000} className="resize-y rounded-lg border border-[#dfe5ed] px-4 py-3 text-[#071A3D] outline-none focus:border-[#1E6FFF]" />
        </label>
        <div className="grid gap-2 text-sm font-medium text-[#52627a]">
          <span>Attachments</span>
          <div className="flex flex-wrap items-center gap-2">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#dfe5ed] px-3 py-2 text-xs font-semibold text-[#52627a] hover:border-[#1E6FFF] hover:text-[#1E6FFF]">
              <Paperclip size={14} /> Add files
              <input type="file" multiple onChange={addFiles} className="sr-only" />
            </label>
            <span className="text-xs font-normal text-[#8a96a8]">Up to 5 files, 10 MB each</span>
          </div>
          {attachments.length ? <ul className="grid gap-2 sm:grid-cols-2">{attachments.map(({ file }, index) => <li key={`${file.name}-${file.lastModified}`} className="flex items-center justify-between gap-2 rounded-lg bg-[#f5f8fc] px-3 py-2 text-xs text-[#52627a]"><span className="min-w-0 truncate">{file.name}</span><button type="button" aria-label={`Remove ${file.name}`} onClick={() => setAttachments((current) => current.filter((_, itemIndex) => itemIndex !== index))} className="rounded-full p-1 hover:bg-[#eaf1ff] hover:text-[#1E6FFF]"><X size={13} /></button></li>)}</ul> : null}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button disabled={isSending} type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[#36C36A] px-5 py-3 text-sm font-bold text-[#071A3D] hover:bg-[#4bd77d] disabled:opacity-60">{isSending ? "Sending..." : "Send Message"}<Send size={16} /></button>
          {status ? <p aria-live="polite" className={`text-sm ${status.tone === "ok" ? "text-[#2a9d55]" : "text-red-500"}`}>{status.text}</p> : null}
        </div>
      </div>
    </form>
  );
}
