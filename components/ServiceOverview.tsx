import type { Service } from "@/lib/services";
import { ServiceLink } from "./ServiceLink";

export function ServiceOverview({ service, index }: { service: Service; index: number }) {
  return <article className="service-overview" style={{ "--service-accent": service.accent } as React.CSSProperties}><div className="service-overview-top"><span>0{index + 1}</span><span>{service.eyebrow.split(" / ")[1]}</span></div><div className="service-overview-body"><div><h2>{service.shortTitle}</h2><p>{service.description}</p></div><div className="service-overview-list">{service.capabilities.slice(0, 4).map((capability) => <span key={capability}>{capability}</span>)}</div></div><ServiceLink href={`/services/${service.slug}`}>Explore service</ServiceLink></article>;
}
