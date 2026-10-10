import Link from "next/link";
import { Capabilities } from "@/components/Capabilities";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { WhyUs } from "@/components/WhyUs";
import { ServiceHighlights } from "@/components/ServiceHighlights";
import { HowWeWork } from "@/components/HowWeWork";
import { PricingSection } from "@/components/PricingSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <section className="border-b border-white/10 bg-neutral-950" id="about">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              <span className="h-px w-6 bg-indigo-400" />
              About us
            </p>
            <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              IT and security,<br />
              <em className="not-italic text-indigo-400">handled together.</em>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-md text-base leading-7 text-neutral-300 mb-4">
              X-BUC TECH is an IT and cybersecurity company serving organizations of different sizes. We treat security as the foundation of every technology decision, not an add-on.
            </p>
            <p className="max-w-md text-base leading-7 text-neutral-300 mb-6">
              We combine managed IT, cybersecurity, cloud, and network expertise to help you protect your technology, reduce risk, and keep operations reliable.
            </p>
            <Link className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1" href="/about">
              About X-BUC TECH <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Approach />
      <WhyUs />
      <ServiceHighlights />
      <HowWeWork />
      <Capabilities />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}