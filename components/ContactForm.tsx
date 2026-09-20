import { ArrowUpRight, ShieldCheck } from "lucide-react";

const inquiryTypes = [
  "Managed IT Support",
  "Cybersecurity Consultation",
  "Cloud & Network Services",
  "Compliance & Security",
  "Software Testing & QA",
  "General Inquiry",
  "Partnership / Business Opportunity",
];

const fieldClass =
  "rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors focus:border-indigo-400/60 focus:bg-white/[0.07]";

const labelClass = "flex flex-col gap-2 text-sm font-medium text-neutral-300";

type ContactFormProps = { selectedService?: string };

export function ContactForm({ selectedService }: ContactFormProps) {
  const endpoint =
    process.env.NEXT_PUBLIC_PROFORMS_ENDPOINT || "https://proforms.top";

  return (
    <form
      action={endpoint}
      method="post"
      className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-neutral-900/40 p-6 sm:p-8"
    >
      <input type="hidden" name="source" value="xbuctech.com" />
      <input
        type="hidden"
        name="_subject"
        value="New X-BUC Tech consultation request"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Name
          <input
            required
            name="name"
            type="text"
            placeholder="Your name"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Email address
          <input
            required
            name="email"
            type="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Company / organization
          <input
            name="company"
            type="text"
            placeholder="Company name"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Job title
          <input
            name="job_title"
            type="text"
            placeholder="Your role"
            className={fieldClass}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Phone number
          <input
            name="phone"
            type="tel"
            placeholder="512-584-6924"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Subject / inquiry type
          <select
            name="inquiry_type"
            defaultValue={selectedService || "General Inquiry"}
            className={`${fieldClass} appearance-none`}
          >
            <option disabled value="">
              Select a reason
            </option>
            {inquiryTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>

      <label className={labelClass}>
        Message
        <textarea
          required
          name="message"
          rows={6}
          placeholder="Tell us what you are working through..."
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-transform hover:scale-[1.03]"
      >
        Start the conversation
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>

      <p className="flex items-start gap-2 text-xs leading-relaxed text-neutral-500">
        <ShieldCheck size={14} className="mt-0.5 shrink-0 text-indigo-400" />
        Your message is routed securely through ProForms. We&apos;ll get back
        to you as soon as possible.
      </p>
    </form>
  );
}