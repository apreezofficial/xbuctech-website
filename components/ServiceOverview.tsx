import type { Service } from "@/lib/services";
import { ServiceLink } from "./ServiceLink";

export function ServiceOverview({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const accentStyle = { "--service-accent": service.accent } as React.CSSProperties;

  return (
    <article
      className="group flex flex-col gap-6 rounded-2xl border border-white/10 p-7 transition-colors hover:border-white/20"
      style={accentStyle}
    >
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
        <span className="text-[var(--service-accent)]">0{index + 1}</span>
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-neutral-500">
          {service.eyebrow.split(" / ")[1]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          {service.shortTitle}
        </h2>
        <p className="text-sm leading-relaxed text-neutral-400">
          {service.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {service.capabilities.slice(0, 4).map((capability) => (
          <span
            key={capability}
            className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-neutral-400"
          >
            {capability}
          </span>
        ))}
      </div>

      <ServiceLink
        href={`/services/${service.slug}`}
        className="mt-1 text-sm font-semibold text-[var(--service-accent)] transition-transform group-hover:translate-x-0.5"
      >
        Explore service
      </ServiceLink>
    </article>
  );
}