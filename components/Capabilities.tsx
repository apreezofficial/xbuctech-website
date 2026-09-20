import { ArrowUpRight } from "lucide-react";

const capabilities = [
  { label: "Vulnerability management", href: "/services/cybersecurity" },
  { label: "Data encryption & SSL/TLS", href: "/services/cybersecurity" },
  { label: "Cybersecurity awareness", href: "/services/cybersecurity" },
  { label: "Network infrastructure", href: "/services/cloud-infrastructure" },
  { label: "Software testing & QA", href: "/services/software-testing" },
  { label: "Compliance & security", href: "/services/compliance-security" },
];

export function Capabilities() {
  return (
    <section className="border-t border-white/10 bg-neutral-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            What we solve
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Confidence in
            <br />
            <em className="not-italic text-indigo-400">every layer.</em>
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-t border-white/10">
          {capabilities.map((capability, index) => (
            <a
              key={capability.label}
              href={capability.href}
              className="group flex cursor-pointer items-center gap-4 py-5 transition-colors hover:bg-white/[0.02] sm:gap-6"
            >
              <span className="text-xs font-semibold tracking-widest text-neutral-600">
                0{index + 1}
              </span>
              <strong className="flex-1 text-base font-medium text-white sm:text-lg">
                {capability.label}
              </strong>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-neutral-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-400"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}