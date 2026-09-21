import { Eye, Target } from "lucide-react";
import { Reveal } from "./Reveal";

export function MissionVision() {
  return (
    <section className="border-t border-white/10 bg-neutral-900/60 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            Our direction
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Built for secure,
            <br />
            <em className="not-italic text-indigo-400">confident growth.</em>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal as="article" delay={100} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <Target size={22} className="mb-8 text-indigo-300" />
            <h3 className="mb-3 text-xl font-semibold text-white">Mission</h3>
            <p className="text-base leading-7 text-neutral-400">
              To deliver managed IT services, cybersecurity, cloud, and infrastructure solutions that help organizations operate securely, efficiently, and confidently in today&apos;s digital world.
            </p>
          </Reveal>
          <Reveal as="article" delay={180} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
            <Eye size={22} className="mb-8 text-indigo-300" />
            <h3 className="mb-3 text-xl font-semibold text-white">Vision</h3>
            <p className="text-base leading-7 text-neutral-400">
              To empower businesses with secure, reliable, and innovative technology solutions that enable growth, resilience, and digital transformation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
