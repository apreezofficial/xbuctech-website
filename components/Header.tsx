"use client";

import { useState } from "react";
import { Icon } from "./Icon";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="nav">
      <div className="nav-inner shell">
        <a className="brand" href="/" aria-label="X-BUC Tech home">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-mark-dot" />
          </span>
          <span className="brand-name">X-BUC <small>TECH</small></span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.label} className={link.href === "/" ? "active" : ""} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <span className="nav-status"><i /> Systems ready</span>
          <a className="nav-cta" href="/contact">Dashboard</a>
        </div>

        <button
          type="button"
          className="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "✕" : <Icon name="menu" size={20} />}
        </button>
      </div>

      <div className={`mobile-panel ${isOpen ? "is-open" : ""}`} id="mobile-menu-panel">
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="mobile-cta" href="/contact" onClick={() => setIsOpen(false)}>Dashboard</a>
      </div>
    </header>
  );
}
