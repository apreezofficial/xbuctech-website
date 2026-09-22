import { services } from "@/lib/services";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { ShieldCheck, Network, Sparkles, ArrowUpRight } from "lucide-react";

const icons = [ShieldCheck, Network, Sparkles];

export function Services() {
  return (
    <section id="services" className="bg-neutral-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-4 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              <span className="h-px w-6 bg-indigo-400" />
              Our services
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Built for the <em className="not-italic text-indigo-400">next move.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
            Focused expertise for the systems your business depends on every
            day.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => {
            const ServiceIcon = icons[index] ?? Sparkles;
            return (
              <Reveal
                as="article"
                key={service.slug}
                delay={index * 100}
                className="group relative flex flex-col gap-5 rounded-2xl border border-white/10 p-7 transition-colors hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest text-neutral-600">
                    0{index + 1}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <ServiceIcon size={20} />
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {service.description}
                  </p>
                </div>

                <a
                  href={`/services/${service.slug}`}
                  aria-label={`Learn more about ${service.shortTitle}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all group-hover:border-white/30 group-hover:text-white"
                >
                  <ArrowUpRight size={16} />
                </a>
              </Reveal>
            );
          })}
        </div>

        <Link
          href="/services"
          className="site-button site-button--dark group mt-10"
        >
          View all services
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </section>
  );
}