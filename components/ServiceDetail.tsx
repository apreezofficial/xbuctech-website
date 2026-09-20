import type { Service } from "@/lib/services";
import { ServiceLink } from "./ServiceLink";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

export function ServiceDetail({ service }: { service: Service }) {
  const accentStyle = { "--service-accent": service.accent } as React.CSSProperties;

  return (
    <main className="bg-neutral-950" style={accentStyle}>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
          <a href="/services" className="transition-colors hover:text-white">
            Services
          </a>
          <span className="text-neutral-700">/</span>
          <span className="text-neutral-300">{service.shortTitle}</span>
        </div>
      </div>

      {/* Header layout */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8 lg:py-24">
        <div>
          <p
            className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--service-accent)" }}
          >
            <span
              className="h-px w-6"
              style={{ backgroundColor: "var(--service-accent)" }}
            />
            {service.eyebrow}
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            {service.title}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-400 sm:text-lg">
            {service.description}
          </p>

          <ServiceLink
            href={`/contact?service=${service.slug}`}
            className="site-button group mt-9"
            style={{ backgroundColor: "var(--service-accent)" }}
          >
            Talk to an expert
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </ServiceLink>
        </div>

        {/* Marker card */}
        <div
          className="relative flex aspect-square w-full max-w-xs flex-col justify-between rounded-2xl border border-white/10 p-6"
          style={{
            background:
              "linear-gradient(160deg, color-mix(in srgb, var(--service-accent) 18%, transparent), transparent 60%)",
          }}
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-neutral-950"
            style={{ backgroundColor: "var(--service-accent)" }}
          >
            XB
          </span>
          <strong className="text-2xl font-semibold leading-tight tracking-tight text-white">
            BUILT
            <br />
            AROUND
            <br />
            <em className="not-italic" style={{ color: "var(--service-accent)" }}>
              YOU.
            </em>
          </strong>
        </div>
      </div>

      {/* Content */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 border-t border-white/10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8 lg:py-24">
        <div>
          <p
            className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--service-accent)" }}
          >
            <Sparkles size={13} />
            The work
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Clarity before
            <br />
            <em className="not-italic text-neutral-500">complexity.</em>
          </h2>
        </div>

        <div>
          <p className="max-w-xl text-base leading-relaxed text-neutral-400">
            {service.detail}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-500">
            Each workstream below represents a practical area where we can help
            strengthen, manage, or validate your technology environment. Select
            the area closest to your current priority to start a focused
            conversation with the X-BUC Tech team.
          </p>

          <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
            {service.capabilities.map((capability, index) => (
              <a
                key={capability}
                href={`/contact?service=${service.slug}&focus=${encodeURIComponent(capability)}`}
                className="group flex cursor-pointer items-center gap-4 py-4 transition-colors hover:bg-white/[0.02]"
              >
                <span
                  className="text-xs font-semibold tabular-nums"
                  style={{ color: "var(--service-accent)" }}
                >
                  0{index + 1}
                </span>
                <strong className="flex-1 text-sm font-medium text-white sm:text-base">
                  {capability}
                </strong>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-neutral-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-4 py-20 text-center sm:px-6 lg:px-8">
        <p
          className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: "var(--service-accent)" }}
        >
          <span
            className="h-px w-6"
            style={{ backgroundColor: "var(--service-accent)" }}
          />
          Ready when you are
        </p>
        <h2 className="mx-auto max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          Make your next
          <br />
          <em className="not-italic" style={{ color: "var(--service-accent)" }}>
            move secure.
          </em>
        </h2>

        <ServiceLink
          href={`/contact?service=${service.slug}`}
          className="site-button group mx-auto mt-9"
          style={{ backgroundColor: "var(--service-accent)" }}
        >
          Schedule a consultation
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </ServiceLink>
      </section>
    </main>
  );
}