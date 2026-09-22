import { Clipboard, LockKeyhole, Settings2, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { title: "Assess", text: "We understand your technology environment, challenges, and security requirements.", icon: Clipboard },
  { title: "Protect", text: "We implement practical security and technology solutions designed to reduce risk.", icon: LockKeyhole },
  { title: "Manage", text: "We help maintain your systems, infrastructure, and technology environment.", icon: Settings2 },
  { title: "Optimize", text: "We continuously identify opportunities to improve performance, reliability, and security.", icon: Sparkles },
];

export function HowWeWork() {
  return (
    <section className="border-t border-white/10 bg-neutral-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            How we work
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            How XBUC TECH
            <br />
            <em className="not-italic text-indigo-400">secures your business.</em>
          </h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-neutral-400">
            We identify risks, implement practical solutions, and continuously improve your IT and cybersecurity environment, helping your business stay secure, reliable, and ready for what&apos;s next.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map(({ title, text, icon: Icon }, index) => (
            <Reveal key={title} as="article" delay={index * 80} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-indigo-300">0{index + 1}</span>
                <Icon size={20} className="text-indigo-300" />
              </div>
              <h3 className="mt-10 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-base leading-7 text-neutral-400">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
