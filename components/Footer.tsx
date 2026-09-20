export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <a href="#top" aria-label="X-BUC Tech home" className="flex items-center gap-2 text-white">
            <img
              src="https://cdn.prod.website-files.com/6a7eeaf0a1bb653f6729ecbb/6a8042a1ee0d4bf4bd8931f7_image-removebg-preview-p-500.png"
              alt="X-BUC Tech logo"
              className="h-9 w-auto object-contain"
            />
          </a>
          <p className="text-sm text-neutral-500">
            Engineered security. Trusted performance.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-neutral-400">
          <a href="/about" className="transition-colors hover:text-white">
            About
          </a>
          <a href="/services" className="transition-colors hover:text-white">
            Services
          </a>
          <a href="/faq" className="transition-colors hover:text-white">
            FAQ
          </a>
          <a href="/contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </nav>

        <span className="text-xs text-neutral-600">© 2026 X-BUC Tech</span>
      </div>
    </footer>
  );
}