import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-neutral-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            Start a conversation
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your business deserves
            <br />
            <em className="not-italic text-indigo-400">better backup.</em>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-base leading-relaxed text-neutral-400 sm:text-lg">
            Tell us where you want to go. We&apos;ll help you build the
            secure, reliable technology foundation to get there.
          </p>

          <a
            href="/contact"
            className="site-button site-button--dark group"
          >
            Talk to an IT consultant
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-neutral-400">
            <a
              href="mailto:info@xbuctech.com"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <Mail size={16} className="text-indigo-400" />
              info@xbuctech.com
            </a>
            <a
              href="tel:+15125846924"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <Phone size={16} className="text-indigo-400" />
              512-584-6924
            </a>
            <span className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-indigo-400" />
              14205 N Mopac Expy #500
              <br />
              Austin, TX 78731
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}