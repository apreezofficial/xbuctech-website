import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <a href="#top" aria-label="XBUC TECH home" className="flex items-center gap-2 text-white">
            <img
              src="https://cdn.prod.website-files.com/6a7eeaf0a1bb653f6729ecbb/6a8042a1ee0d4bf4bd8931f7_image-removebg-preview-p-500.png"
              alt="XBUC TECH logo"
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
          <Link href="/services" className="transition-colors hover:text-white">
            Services
          </Link>
          <a href="/faq" className="transition-colors hover:text-white">
            FAQ
          </a>
          <a href="/contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4 text-xs font-medium text-neutral-500">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">Facebook</a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">X</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">Instagram</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
        </div>

        <div className="flex flex-col items-center gap-2 text-xs text-neutral-600 sm:items-end">
          <span>© 2026 XBUC TECH</span>
          <a href="mailto:info@xbuctech.com" className="transition-colors hover:text-white">
            info@xbuctech.com
          </a>
          <a href="tel:+15125846924" className="transition-colors hover:text-white">
            512-584-6924
          </a>
          <span>14205 N Mopac Expy #500, Austin, TX 78731</span>
        </div>
      </div>
    </footer>
  );
}