import { ArrowRight, ShieldCheck, ServerCog, ChartNoAxesCombined, Users } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "About | X-BUC Tech",
  description:
    "Learn how X-BUC Tech helps businesses secure operations, strengthen infrastructure, and scale with confidence.",
};

const principles = [
  {
    icon: ShieldCheck,
    title: "Security-first thinking",
    text: "Every recommendation is built to reduce risk, improve resilience, and keep teams protected across the full technology environment.",
  },
  {
    icon: ServerCog,
    title: "Reliable operations",
    text: "We help businesses stabilize systems, optimize infrastructure, and protect uptime without adding friction to day-to-day work.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Business-focused execution",
    text: "Technology decisions are aligned to performance, cost control, and the practical realities of running a modern operation.",
  },
  {
    icon: Users,
    title: "Human-centered support",
    text: "We work closely with teams to understand their environment, priorities, and goals before recommending the right next move.",
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
                About X-BUC Tech
              </p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Technology that keeps your business moving.
              </h1>
            </div>

            <div className="flex items-end">
              <p className="max-w-md text-base leading-7 text-neutral-300">
                X-BUC Tech partners with businesses to secure their systems, manage their IT environments, and build resilient infrastructure that supports growth with confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                Why we exist
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Better systems. Safer operations. Smarter growth.
              </h2>
            </div>

            <div className="space-y-6 text-neutral-300">
              <p className="text-base leading-7">
                We help organizations simplify complexity. Whether the goal is stronger cybersecurity, better-managed IT, improved cloud performance, or stronger compliance posture, our work is designed to reduce friction and increase confidence.
              </p>
              <p className="text-base leading-7">
                With a practical, business-first approach, X-BUC Tech supports teams that need dependable technology without unnecessary complexity, delays, or reactive firefighting.
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition-colors hover:text-white"
              >
                Talk to an expert
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
