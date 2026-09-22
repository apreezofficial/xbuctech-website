import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function PricingSection() {
  return (
    <section className="border-t border-white/10 bg-[#0b1c3a] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
        <Reveal>
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
            <span className="h-px w-6 bg-indigo-300" />
            Flexible solutions
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            IT and cybersecurity support shaped around your business.
          </h2>
        </Reveal>

        <Reveal delay={120} className="flex flex-col items-start gap-7">
          <p className="max-w-xl text-base leading-7 text-neutral-300">
            Every business has different technology, security, and operational requirements. XBUC TECH provides customized solutions based on your environment, business objectives, and level of support needed. Whether you need ongoing managed IT support, cybersecurity services, infrastructure assistance, or a specialized technology project, we can tailor our services to your business requirements.
          </p>
          <a href="/contact" className="site-button group">
            Talk to an IT &amp; cybersecurity consultant
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
