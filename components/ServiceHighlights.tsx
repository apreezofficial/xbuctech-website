import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const highlights = [
  {
    number: "01",
    title: "Vulnerability management",
    headline: "Identify. Prioritize. Remediate.",
    text: "We help organizations identify, prioritize, and remediate security vulnerabilities across IT infrastructure, cloud environments, and applications through automated scanning, expert analysis, and risk-based prioritization.",
    href: "/services/cybersecurity",
  },
  {
    number: "02",
    title: "Data encryption & SSL/TLS",
    headline: "Protect applications and data in transit.",
    text: "We install, configure, and manage SSL/TLS certificates for websites and web applications to protect sensitive information and establish trusted encrypted connections.",
    href: "/services/cybersecurity",
  },
  {
    number: "03",
    title: "Cybersecurity awareness & training",
    headline: "Make people your strongest line of defense.",
    text: "We develop customized awareness and training content that helps employees recognize common cyber threats, adopt safer practices, and contribute to a stronger security culture.",
    href: "/services/cybersecurity",
  },
  {
    number: "04",
    title: "Network infrastructure & visibility",
    headline: "Improve visibility. Reduce blind spots.",
    text: "We help organizations improve network visibility through expert configuration and optimization of Gigamon and Keysight/Ixia Network Packet Brokers.",
    href: "/services/cloud-infrastructure",
  },
  {
    number: "05",
    title: "Software testing & QA",
    headline: "Ship with confidence.",
    text: "We improve software quality through manual and automated testing, functional validation, regression testing, and structured defect reporting.",
    href: "/services/software-testing",
  },
  {
    number: "06",
    title: "Compliance & security",
    headline: "Turn requirements into stronger controls.",
    text: "We help organizations identify security gaps, strengthen controls, and support initiatives aligned with HIPAA, PCI DSS, NIST, FISMA/NIST RMF, and ISO 27001.",
    href: "/services/compliance-security",
  },
];

export function ServiceHighlights() {
  return (
    <section className="border-t border-white/10 bg-neutral-900/60 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            Service focus
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Smart IT &amp; cybersecurity solutions, <em className="not-italic text-indigo-400">tailored for you.</em>
          </h2>
          <p className="mt-5 text-base leading-7 text-neutral-400">
            Explore the practical work behind our core services. Each area can stand alone or fit into a broader security and technology program.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.number} as="article" delay={index * 70} className="group flex flex-col bg-neutral-950 p-7 transition-colors hover:bg-[#071A3D]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-indigo-300">{item.number}</span>
                <ArrowUpRight size={18} className="text-neutral-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300" />
              </div>
              <h3 className="mt-10 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm font-medium leading-6 text-indigo-200">{item.headline}</p>
              <p className="mt-4 flex-1 text-base leading-7 text-neutral-400">{item.text}</p>
              <a href={item.href} className="mt-7 inline-flex w-fit cursor-pointer items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-white">
                Explore service
                <ArrowUpRight size={16} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
