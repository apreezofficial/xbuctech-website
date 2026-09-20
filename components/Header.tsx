import { Icon } from "./Icon";

export function Header() {
  return (
    <header className="nav shell">
      <a className="brand" href="/" aria-label="X-BUC Tech home"><span className="brand-mark">X</span><span className="brand-name">X-BUC <small>TECH</small></span></a>
      <div className="nav-center"><span className="nav-kicker">IT / CYBERSECURITY / INFRASTRUCTURE</span><nav className="nav-links" aria-label="Main navigation"><a className="active" href="/">Home</a><a href="/#about">About</a><a href="/services">Services</a><a href="/#contact">Contact</a></nav></div>
      <div className="nav-actions"><span className="nav-status"><i /> Systems ready</span><a className="nav-cta" href="/contact">Free consultation <Icon name="arrow" size={16} /></a></div>
      <a className="mobile-menu" href="/#contact" aria-label="Open contact"><Icon name="menu" size={20} /></a>
    </header>
  );
}
