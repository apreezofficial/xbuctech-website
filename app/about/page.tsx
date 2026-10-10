import { ArrowRight, ShieldCheck, ServerCog, ChartNoAxesCombined, Eye, Target } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CONSULTATION_CTA } from "@/lib/services";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn who X-BUC TECH works with, how we approach IT and cybersecurity engagements, and what guides our work.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    icon: ShieldCheck,
    title: "Secure",
    text: "Identify risks, strengthen security controls, and help protect systems, applications, networks, and data.",
    inPractice:
      "In an engagement: we start with an assessment and give you findings ranked by risk, not a list of everything.",
  },
  {
    icon: ServerCog,
    title: "Manage",
    text: "Keep IT environments reliable, efficient, properly configured, and supported so businesses can focus on their operations.",
    inPractice:
      "In an engagement: we agree what we support and how, then keep systems patched, documented, and maintained.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Innovate",
    text: "Apply modern technology, automation, cloud solutions, and practical improvements to help organizations adapt and grow.",
    inPractice:
      "In an engagement: we recommend improvements that fit your environment and budget, rather than change for its own sake.",
  },
];

const audiences = [
  "Organizations of different sizes, including small and medium-sized businesses",
  "Teams without a dedicated IT or security function",
  "Organizations with an existing IT team that need specialist support",
  "Organizations working toward requirements such as HIPAA, PCI DSS, or ISO 27001",
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-neutral-950 text-white">
        <section className="border-b border-white/10">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              <span className="h-px w-6 bg-indigo-400" />
                About X-BUC TECH
              </p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Secure. Manage. Innovate.
              </h1>
            </div>

            <div className="flex items-end">
              <p className="max-w-md text-base leading-7 text-neutral-300">
                X-BUC TECH is an IT and cybersecurity company based in Austin,
                Texas. We help organizations protect their technology, keep
                their IT environments running well, and build reliable, secure
                infrastructure.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              <span className="h-px w-6 bg-indigo-400" />
                Who we work with
              </p>
              <h2 className="max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Problems we are built to solve.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-neutral-400">
                Cyber threats, system vulnerabilities, growing technology
                complexity, and compliance requirements are hard to manage
                alongside running a business. We take on that work with
                practical, security-focused solutions designed around your
                environment.
              </p>
            </div>
            <ul className="flex flex-col divide-y divide-white/10 border-y border-white/10">
              {audiences.map((item) => (
                <li key={item} className="py-4 text-base leading-7 text-neutral-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-20 border-t border-white/10 pt-12">
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              <span className="h-px w-6 bg-indigo-400" />
              Our approach
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Effective technology management and cybersecurity should work
              together.
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text, inPractice }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-300">
                  <Icon size={20} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
                <p className="text-sm leading-6 text-neutral-300">{text}</p>
                <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-neutral-400">
                  {inPractice}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <Target size={22} className="mb-6 text-indigo-300" />
              <h3 className="mb-3 text-xl font-semibold text-white">Mission</h3>
              <p className="text-base leading-7 text-neutral-400">
                To deliver managed IT services, cybersecurity, cloud, and
                infrastructure solutions that help organizations operate
                securely, efficiently, and confidently in today&apos;s digital
                world.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <Eye size={22} className="mb-6 text-indigo-300" />
              <h3 className="mb-3 text-xl font-semibold text-white">Vision</h3>
              <p className="text-base leading-7 text-neutral-400">
                To empower businesses with secure, reliable, and innovative
                technology solutions that enable growth, resilience, and
                digital transformation.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-neutral-900/70">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              <span className="h-px w-6 bg-indigo-400" />
                Our experience
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Practical expertise for technology that matters.
              </h2>
            </div>

            <div className="space-y-6 text-neutral-300">
              <p className="text-base leading-7">
                Our team combines hands-on IT experience with cybersecurity
                knowledge. That experience spans enterprise IT environments,
                systems administration, network infrastructure, cybersecurity
                operations, vulnerability management, cloud technologies,
                software testing, and security frameworks.
              </p>
              <p className="text-base leading-7">
                We do not apply a one-size-fits-all package. We learn how each
                organization operates, agree on priorities, and recommend
                solutions that support security, reliability, and performance.
              </p>
              <h2 className="pt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Let&apos;s Secure What Matters.
              </h2>
              <p className="text-base leading-7">
                Tell us whether you need to strengthen cybersecurity, manage
                IT infrastructure, improve network visibility, secure cloud
                environments, test software, or prepare for compliance
                requirements.
              </p>
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <Link
                  href="/contact"
                  className="site-button site-button--dark group"
                >
                  {CONSULTATION_CTA}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold text-indigo-300 transition-colors hover:text-white"
                >
                  Explore our services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
