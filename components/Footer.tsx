export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <a href="#top" className="flex items-center gap-2 text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold">
              X
            </span>
            <span className="text-base font-semibold tracking-tight">
              X-BUC{" "}
              <span className="text-xs font-medium tracking-widest text-indigo-400">
                TECH
              </span>
            </span>
          </a>
          <p className="text-sm text-neutral-500">
            Engineered security. Trusted performance.
          </p>
        </div>

        <nav className="flex items-center gap-6 text-sm font-medium text-neutral-400">
          <a href="#about" className="transition-colors hover:text-white">
            About
          </a>
          <a href="#services" className="transition-colors hover:text-white">
            Services
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </nav>

        <span className="text-xs text-neutral-600">© 2026 X-BUC Tech</span>
      </div>
    </footer>
  );
}