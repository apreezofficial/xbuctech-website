import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact XBUC TECH",
  description:
    "Talk with XBUC TECH about managed IT, cybersecurity, cloud infrastructure, compliance, and software testing for your business.",
  alternates: { canonical: "/contact" },
};

const serviceLabels: Record<string, string> = {
  cybersecurity: "Cybersecurity Consultation",
  "managed-it": "Managed IT Support",
  "cloud-infrastructure": "Cloud & Network Services",
  "compliance-security": "Compliance & Security",
  "software-testing": "Software Testing & QA",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; focus?: string }>;
}) {
  const params = await searchParams;
  const selectedService = params.service
    ? serviceLabels[params.service] || params.service
    : undefined;

  return (
    <>
      <Header />
      <main className="bg-neutral-950 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Intro */}
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              <span className="h-px w-6 bg-indigo-400" />
              Contact us
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Let&apos;s discuss your
              <br />
              <em className="not-italic text-indigo-400">
                IT &amp; security needs.
              </em>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-400 sm:text-lg">
              Tell us what you are building, protecting, or trying to
              untangle. We&apos;ll bring a practical point of view and a
              clear next step.
            </p>
            {params.focus ? (
              <p className="mt-5 max-w-md border-l border-indigo-400/60 pl-4 text-sm leading-relaxed text-indigo-200">
                You&apos;re reaching out about <strong>{params.focus}</strong>.
                Include any relevant context in your message and we&apos;ll shape
                the conversation around that specific need.
              </p>
            ) : null}

            <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8">
              <a
                href="mailto:info@xbuctech.com"
                className="group flex items-start gap-3 text-sm text-neutral-300 transition-colors hover:text-white"
              >
                <Mail size={16} className="mt-0.5 shrink-0 text-indigo-400" />
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-neutral-600">
                    Email address
                  </span>
                  info@xbuctech.com
                </span>
              </a>
              <a
                href="tel:+15125846924"
                className="group flex items-start gap-3 text-sm text-neutral-300 transition-colors hover:text-white"
              >
                <Phone size={16} className="mt-0.5 shrink-0 text-indigo-400" />
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-neutral-600">
                    Phone number
                  </span>
                  512-584-6924
                </span>
              </a>
              <span className="flex items-start gap-3 text-sm text-neutral-300">
                <MapPin size={16} className="mt-0.5 shrink-0 text-indigo-400" />
                <span className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-neutral-600">
                    Office
                  </span>
                  14205 N Mopac Expy #500
                  <br />
                  Austin, TX 78731
                </span>
              </span>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
              <iframe
                title="XBUC TECH office map"
                src="https://www.google.com/maps?q=14205%20N%20Mopac%20Expy%20%23500%2C%20Austin%2C%20TX%2078731&output=embed"
                className="h-52 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-widest text-indigo-400">
                  01
                </span>
                <p className="text-sm font-medium text-white">
                  Schedule a strategy call
                </p>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                <ShieldCheck size={13} />
                Secure inquiry
              </span>
            </div>
            <ContactForm selectedService={selectedService} focus={params.focus} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}