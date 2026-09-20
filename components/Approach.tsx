import { Reveal } from "./Reveal";

const approachItems = [
  {
    title: "Secure",
    image:
      "https://cdn.prod.website-files.com/6a7eeaf0a1bb653f6729ecbb/6aa705c67b55c753b189a9d3_image-removebg-preview.png",
    alt: "Shield with padlock",
    text: "Identify risks, strengthen security controls, and help protect systems, applications, networks, and data.",
  },
  {
    title: "Manage",
    image:
      "https://cdn.prod.website-files.com/6a7eeaf0a1bb653f6729ecbb/6aa706d714616b12a17984ef__25B02E4F-3E06-4EFC-AAB8-46878E997A13_-removebg-preview.png",
    alt: "Alarm clock",
    text: "Keep IT environments reliable, efficient, properly configured, and supported so businesses can focus on operations.",
  },
  {
    title: "Innovate",
    image:
      "https://cdn.prod.website-files.com/6a7eeaf0a1bb653f6729ecbb/6aa7068037175f386ffa162a__7E2703AC-C48D-43DB-B3D4-F6BE87E687B6_-removebg-preview.png",
    alt: "Trophy with star",
    text: "Apply modern technology, automation, cloud solutions, and practical improvements to help organizations adapt and grow.",
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="border-t border-white/10 bg-neutral-950 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            Our approach
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Because your
            <br />
            <em className="not-italic text-indigo-400">technology matters.</em>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-400">
            Effective technology management and cybersecurity should work
            together, not operate as separate functions.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {approachItems.map((item, index) => (
            <Reveal
              as="article"
              key={item.title}
              delay={index * 100}
              className="flex flex-col gap-5 rounded-2xl border border-white/10 p-7 transition-colors hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-neutral-600">
                  0{index + 1}
                </span>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 p-2.5">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}