"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  const isCurrentPath = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="XBUC TECH home" className="flex items-center gap-3 text-white">
          <img
            src="https://cdn.prod.website-files.com/6a7eeaf0a1bb653f6729ecbb/6a8042a1ee0d4bf4bd8931f7_image-removebg-preview-p-500.png"
            alt="XBUC TECH logo"
            className="h-8 w-auto object-contain md:h-9"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isCurrentPath(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  active ? "text-white" : "text-neutral-400 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                {active && <span className="absolute -bottom-2 left-0 h-px w-full bg-indigo-500" />}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center md:flex">
          <a
            href="/contact"
            className="site-button group"
          >
            Book a call
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

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

      <div
        id="mobile-menu-panel"
        className={`overflow-hidden border-t border-white/10 bg-neutral-950 transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => {
            const active = isCurrentPath(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  active ? "bg-white/5 text-white" : "text-neutral-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="site-button group mt-2"
          >
            Book a call
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}