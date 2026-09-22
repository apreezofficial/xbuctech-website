"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-neutral-950 py-24 sm:py-32"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Copy */}
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-5 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            Secure. Manage. Innovate.
          </p>

          <h1 className="mx-auto max-w-6xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Technology built for
            <br />
            <em className="not-italic text-indigo-400">secure future.</em>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            XBUC TECH helps businesses protect their technology, reduce cyber
            risk, and improve operational efficiency through enterprise-grade
            IT and cybersecurity solutions.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="site-button group"
            >
              Get a free consultation
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#services"
              className="site-button site-button--dark group"
            >
              Explore our services
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}