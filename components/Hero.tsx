"use client";

import { ArrowUpRight, ArrowDown, ShieldCheck, Radio } from "lucide-react";

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

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Copy */}
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            Secure. Manage. Innovate.
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Securing business.
            <br />
            <em className="not-italic text-indigo-400">Powering</em> performance.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-400 sm:text-lg">
            X-BUC TECH helps businesses protect their technology, manage
            their IT environments, and build reliable, secure
            infrastructure.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-transform hover:scale-[1.03]"
            >
              Get a free consultation
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Explore our services
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Visual */}
        <div
          aria-hidden="true"
          className="relative mx-auto flex h-80 w-80 items-center justify-center sm:h-96 sm:w-96"
        >
          <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-white/10" />
          <div className="absolute inset-8 animate-[spin_24s_linear_infinite_reverse] rounded-full border border-white/10" />

          <div className="relative flex h-40 w-40 flex-col items-center justify-center gap-1 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-center shadow-[0_0_60px_-10px] shadow-indigo-600/60">
            <ShieldCheck size={22} className="mb-1 text-white/90" />
            <span className="text-xs font-medium tracking-widest text-white/70">
              01
            </span>
            <strong className="text-sm font-semibold leading-tight tracking-wide text-white">
              SECURE
              <br />
              SYSTEMS
            </strong>
          </div>

          <span className="absolute -right-2 top-6 rounded-full border border-white/10 bg-neutral-900/80 px-3 py-1 text-[10px] font-medium tracking-wide text-neutral-300 backdrop-blur">
            ENCRYPTED / 24.7
          </span>
          <span className="absolute -left-2 bottom-8 flex items-center gap-1.5 rounded-full border border-white/10 bg-neutral-900/80 px-3 py-1 text-[10px] font-medium tracking-wide text-neutral-300 backdrop-blur">
            <Radio size={11} className="text-emerald-400" />
            NETWORK ONLINE
          </span>
        </div>
      </div>
    </section>
  );
}