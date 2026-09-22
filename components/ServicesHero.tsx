export function ServicesHero() {
  return (
    <section className="border-b border-white/10 bg-neutral-950 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            <span className="h-px w-6 bg-indigo-400" />
            Services
          </p>
          <span className="text-sm leading-snug text-neutral-500">
            Built for the systems
            <br className="hidden sm:block" /> behind your business
          </span>
        </div>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Explore XBUC TECH
          <br />
          <em className="not-italic text-indigo-400">Tech solutions.</em>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
          From managed IT and cybersecurity to cloud infrastructure, network
          security, software testing, and compliance, discover technology
          solutions designed to support and protect your business.
        </p>
      </div>
    </section>
  );
}