import { Icon } from "./Icon";

const capabilities = ["Vulnerability management", "Data encryption & SSL/TLS", "Cybersecurity awareness", "Network infrastructure", "Software testing & QA", "Compliance & security"];

export function Capabilities() {
  return <section className="capability-band shell"><div className="capability-heading"><p className="eyebrow">/ What we solve</p><h2>Confidence in<br /><em>every layer.</em></h2></div><div className="capability-list">{capabilities.map((capability, index) => <div className="capability" key={capability}><span>0{index + 1}</span><strong>{capability}</strong><span><Icon name="arrow" size={16} /></span></div>)}</div></section>;
}
