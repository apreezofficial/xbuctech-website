import { Icon } from "./Icon";

export function Header() {
  return (
    <header className="nav shell">
      <a className="brand" href="#top" aria-label="X-BUC Tech home"><span className="brand-mark">X</span><span>X-BUC <small>TECH</small></span></a>
      <nav className="nav-links" aria-label="Main navigation"><a className="active" href="#top">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
      <a className="nav-cta" href="#contact">Free service consultation <Icon name="arrow" size={16} /></a>
      <a className="mobile-menu" href="#contact" aria-label="Open contact"><Icon name="menu" size={20} /></a>
    </header>
  );
}
