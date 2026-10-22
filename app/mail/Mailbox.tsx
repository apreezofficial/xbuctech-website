"use client";

import { Mail, RefreshCw, Reply, Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type Folder = "inbox" | "sent";
type Summary = { id: string; from?: string; to?: string[]; subject?: string; created_at: string; last_event?: string };
type Detail = Summary & { text?: string; html?: string };
export type ReplyDraft = { to: string; subject: string; message: string };

function formatDate(value: string) {
  const date = new Date(value);
  return date.toDateString() === new Date().toDateString()
    ? date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : date.toLocaleDateString([], { month: "short", day: "numeric" });
}

export default function Mailbox({ accessKey, folder, onReply }: { accessKey: string; folder: Folder; onReply?: (draft: ReplyDraft) => void }) {
  const [messages, setMessages] = useState<Summary[]>([]);
  const [selected, setSelected] = useState<Detail | null>(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(
    () =>
      fetch(`/api/mail/messages?folder=${folder}`, { headers: { "x-mail-key": accessKey } })
        .then(async (response) => {
          const result = await response.json();
          if (!response.ok) throw new Error(result.error);
          setMessages(result.messages);
          setError("");
        })
        .catch((err) => setError(err instanceof Error && err.message ? err.message : "Could not load messages."))
        .finally(() => setLoading(false)),
    [accessKey, folder],
  );

  useEffect(() => {
    load();
  }, [load]);

  async function open(message: Summary) {
    setSelected(message);
    const response = await fetch(`/api/mail/messages?folder=${folder}&id=${message.id}`, { headers: { "x-mail-key": accessKey } });
    if (response.ok) setSelected((await response.json()).message);
  }

  const needle = query.toLowerCase();
  const visible = messages.filter((message) => [message.subject, message.from, ...(message.to ?? [])].some((field) => field?.toLowerCase().includes(needle)));

  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,380px)_1fr]">
      <div className="overflow-hidden rounded-2xl border border-[#dfe5ed] bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-[#e8edf2] px-4 py-3">
          <Search size={16} className="text-[#8a96a8]" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search mail" className="flex-1 bg-transparent text-sm outline-none" />
          <button type="button" onClick={() => { setLoading(true); load(); }} aria-label="Refresh" className="rounded-lg p-1.5 text-[#52627a] hover:bg-[#f0f4f8]"><RefreshCw size={15} className={loading ? "animate-spin" : ""} /></button>
        </div>
        {error ? <p className="p-6 text-sm text-red-500">{error}</p> : null}
        {!loading && !error && !visible.length ? (
          <div className="flex min-h-[360px] flex-col items-center justify-center px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#1E6FFF]"><Mail size={24} /></div>
            <h2 className="mt-5 text-lg font-semibold text-[#071A3D]">No messages found.</h2>
            <p className="mt-2 max-w-xs text-sm leading-6 text-[#68758a]">{folder === "inbox" ? "Inbound mail appears here once receiving is enabled on your Resend domain." : "Messages you send will appear here."}</p>
          </div>
        ) : null}
        <ul className="max-h-[620px] divide-y divide-[#eef2f6] overflow-y-auto">
          {visible.map((message) => (
            <li key={message.id}>
              <button type="button" onClick={() => open(message)} className={`grid w-full gap-1 px-4 py-3.5 text-left transition ${selected?.id === message.id ? "bg-[#eaf1ff]" : "hover:bg-[#f7f9fb]"}`}>
                <span className="flex items-center justify-between gap-3">
                  <span className="truncate text-sm font-semibold text-[#071A3D]">{folder === "inbox" ? message.from : message.to?.join(", ")}</span>
                  <span className="shrink-0 text-xs text-[#8a96a8]">{formatDate(message.created_at)}</span>
                </span>
                <span className="flex items-center justify-between gap-3">
                  <span className="truncate text-sm text-[#52627a]">{message.subject || "(no subject)"}</span>
                  {message.last_event ? <span className="shrink-0 rounded-full bg-[#eaf8ef] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#2a9d55]">{message.last_event}</span> : null}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="min-h-[300px] rounded-2xl border border-[#dfe5ed] bg-white p-6 shadow-sm">
        {selected ? (
          <article>
            <h2 className="text-xl font-semibold text-[#071A3D]">{selected.subject || "(no subject)"}</h2>
            <dl className="mt-4 grid gap-1 border-b border-[#eef2f6] pb-4 text-sm text-[#52627a]">
              <div><dt className="inline font-semibold">From: </dt><dd className="inline">{selected.from}</dd></div>
              <div><dt className="inline font-semibold">To: </dt><dd className="inline">{selected.to?.join(", ")}</dd></div>
              <div><dt className="inline font-semibold">Date: </dt><dd className="inline">{new Date(selected.created_at).toLocaleString()}</dd></div>
            </dl>
            {folder === "inbox" && selected.from && onReply ? <button type="button" onClick={() => onReply({ to: selected.from!, subject: selected.subject?.toLowerCase().startsWith("re:") ? selected.subject : `Re: ${selected.subject || "(no subject)"}`, message: `\n\n--- Original message ---\nFrom: ${selected.from}\nDate: ${new Date(selected.created_at).toLocaleString()}\n\n${selected.text || ""}` })} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#071A3D] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0d2a5e]"><Reply size={15} /> Reply</button> : null}
            {selected.html ? (
              <iframe title="Message body" sandbox="" srcDoc={selected.html} className="mt-4 h-[480px] w-full rounded-lg border border-[#eef2f6]" />
            ) : (
              <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-6 text-[#071A3D]">{selected.text ?? "Loading…"}</pre>
            )}
          </article>
        ) : (
          <div className="flex h-full min-h-[260px] items-center justify-center text-sm text-[#8a96a8]">Select a message to view its full content.</div>
        )}
      </div>
    </div>
  );
}
