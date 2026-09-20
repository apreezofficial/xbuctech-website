import { Icon } from "./Icon";
import { services } from "@/lib/services";
import { Reveal } from "./Reveal";

export function Services() {
  return <section className="service-section shell" id="services"><Reveal className="section-heading"><div><p className="eyebrow">/ Our services</p><h2>Built for the <em>next move.</em></h2></div><p>Focused expertise for the systems your business depends on every day.</p></Reveal><div className="service-grid">{services.slice(0, 3).map((service, index) => <Reveal as="article" className="service-card" delay={index * 100} key={service.slug}><div className="card-top"><span className="card-number">0{index + 1}</span><span className="card-icon"><Icon name={index === 0 ? "shield" : index === 1 ? "network" : "spark"} size={27} /></span></div><h3>{service.shortTitle}</h3><p>{service.description}</p><a href={`/services/${service.slug}`} aria-label={`Learn more about ${service.shortTitle}`}><Icon name="arrow" size={21} /></a></Reveal>)}</div><a className="all-services-link" href="/services">View all services <Icon name="arrow" size={17} /></a></section>;
}
