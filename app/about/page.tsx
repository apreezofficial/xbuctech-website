import { ArrowRight, ShieldCheck, ServerCog, ChartNoAxesCombined } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About XBUC TECH",
  description:
    "Learn how XBUC TECH combines managed IT, cybersecurity, cloud, and infrastructure expertise to help businesses operate securely and reliably.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: ShieldCheck,
    title: "Secure",
    text: "Identify risks, strengthen security controls, and help protect systems, applications, networks, and data.",
  },
  {
    icon: ServerCog,
    title: "Manage",
    text: "Keep IT environments reliable, efficient, properly configured, and supported so businesses can focus on their operations.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Innovate",
    text: "Apply modern technology, automation, cloud solutions, and practical improvements to help organizations adapt and grow.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-neutral-950 text-white">
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
                About XBUC TECH
              </p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Secure. Manage. Innovate.
              </h1>
            </div>

            <div className="flex items-end">
              <p className="max-w-md text-base leading-7 text-neutral-300">
                XBUC TECH is an IT and cybersecurity solutions company focused
                on helping businesses protect their technology, manage their IT
                environments, and build reliable, secure infrastructure.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-5 text-sm leading-7 text-neutral-300 sm:text-base">
              Today&apos;s businesses depend on technology for nearly every
              aspect of their operations. At the same time, cyber threats,
              system vulnerabilities, evolving technology, and compliance
              requirements continue to create new challenges. XBUC TECH helps
              organizations address these challenges with practical,
              security-focused solutions designed around their unique
              technology environments and business needs.
            </p>
            <p className="text-sm leading-7 text-neutral-400 sm:text-base">
              Our services span cybersecurity, managed IT and systems, network
              infrastructure and visibility, cloud and infrastructure,
              software testing and quality assurance, and compliance and
              security support. We work to identify risks, improve visibility,
              strengthen security controls, resolve technical challenges, and
              help organizations maintain reliable technology operations.
            </p>
          </div>

          <div className="mt-16 border-t border-white/10 pt-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
              Our approach
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Effective technology management and cybersecurity should work
              together.
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                  <Icon size={20} />
                </div>
                <h2 className="mb-3 text-xl font-semibold text-white">{title}</h2>
                <p className="text-sm leading-6 text-neutral-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-neutral-900/70">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400">
                Why XBUC TECH
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Practical expertise for technology that matters.
              </h2>
            </div>

            <div className="space-y-6 text-neutral-300">
              <p className="text-base leading-7">
                We combine hands-on IT experience with cybersecurity knowledge
                to provide solutions that are both technically sound and
                business-focused. Our experience includes enterprise IT
                environments, systems administration, network infrastructure,
                cybersecurity operations, vulnerability management, cloud
                technologies, software testing, and security frameworks.
              </p>
              <p className="text-base leading-7">
                Rather than taking a one-size-fits-all approach, we work with
                each organization to understand its environment, identify
                priorities, and develop practical solutions that support
                security, reliability, performance, and long-term growth.
              </p>
              <h2 className="pt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Let&apos;s Secure What Matters.
              </h2>
              <p className="text-base leading-7">
                Whether you need help strengthening cybersecurity, managing IT
                infrastructure, improving network visibility, securing cloud
                environments, testing software, or preparing for compliance
                requirements, XBUC TECH is ready to help.
              </p>
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <Link
                  href="/contact"
                  className="site-button site-button--dark group"
                >
                  Talk to an expert
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300">
                  Secure • Manage • Innovate
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
