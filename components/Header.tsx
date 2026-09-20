"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="/"
          aria-label="X-BUC Tech home"
          className="flex items-center gap-2 text-white"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="text-base font-semibold tracking-tight">
            X-BUC{" "}
            <span className="text-xs font-medium tracking-widest text-indigo-400">
              TECH
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative text-sm font-medium transition-colors ${
                link.href === "/"
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {link.label}
              {link.href === "/" && (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-indigo-500" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 md:flex">
          <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Systems ready
          </span>
          <a
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-950 transition-transform hover:scale-[1.03]"
          >
            Book a call
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu-panel"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu-panel"
        className={`overflow-hidden border-t border-white/10 bg-neutral-950 transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-1 px-4 py-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-300 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950"
          >
            Book a call
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}