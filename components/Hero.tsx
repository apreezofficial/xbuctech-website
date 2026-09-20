import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy"><p className="eyebrow">/ Secure. Manage. Innovate.</p><h1>Securing business.<br /><em>Powering</em> performance.</h1><p className="lede">X-BUC TECH helps businesses protect their technology, manage their IT environments, and build reliable, secure infrastructure.</p><div className="hero-actions"><a className="button button-light" href="#contact">Get a free consultation <Icon name="arrow" size={16} /></a><a className="button button-quiet" href="#services">Explore our services <span>↓</span></a></div></div>
      <div className="hero-visual" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core"><span>01</span><strong>SECURE<br />SYSTEMS</strong></div><div className="signal signal-one">ENCRYPTED / 24.7</div><div className="signal signal-two">● NETWORK ONLINE</div></div>
    </section>
  );
}
