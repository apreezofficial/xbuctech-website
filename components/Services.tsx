import { Icon } from "./Icon";

const services = [
  { number: "01", title: "Protect", text: "Cybersecurity built around your people, systems, and risk profile.", icon: "shield" as const },
  { number: "02", title: "Manage", text: "Managed IT that keeps your operation reliable, visible, and moving.", icon: "network" as const },
  { number: "03", title: "Innovate", text: "Cloud and infrastructure solutions that turn complexity into momentum.", icon: "spark" as const },
];

export function Services() {
  return <section className="service-section shell" id="services"><div className="section-heading"><div><p className="eyebrow">/ Our services</p><h2>Built for the <em>next move.</em></h2></div><p>Focused expertise for the systems your business depends on every day.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="card-top"><span className="card-number">{service.number}</span><span className="card-icon"><Icon name={service.icon} size={27} /></span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Learn more about ${service.title}`}><Icon name="arrow" size={21} /></a></article>)}</div></section>;
}
