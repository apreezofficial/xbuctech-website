import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.8fr_1.5fr] lg:px-10">
        <div className="flex flex-col items-start gap-4">
          <a href="#top" aria-label="XBUC TECH home" className="flex items-center gap-2 text-white">
            <img
              src="https://cdn.prod.website-files.com/6a7eeaf0a1bb653f6729ecbb/6a8042a1ee0d4bf4bd8931f7_image-removebg-preview-p-500.png"
              alt="XBUC TECH logo"
              className="h-9 w-auto object-contain"
            />
          </a>
          <p className="max-w-xs text-sm leading-6 text-neutral-400">
            Engineered security. Trusted performance.
          </p>
        </div>

        <nav className="flex flex-col items-start gap-3 text-sm font-medium text-neutral-400" aria-label="Footer navigation">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Explore</p>
          <Link href="/about" className="transition-colors hover:text-white">
            About
          </Link>
          <Link href="/services" className="transition-colors hover:text-white">
            Services
          </Link>
          <Link href="/faq" className="transition-colors hover:text-white">
            FAQ
          </Link>
          <Link href="/contact" className="transition-colors hover:text-white">
            Contact
          </Link>
        </nav>

        <div className="flex flex-col items-start gap-3 text-sm font-medium text-neutral-400">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Connect</p>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">Facebook</a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">X</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">Instagram</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
        </div>

        <div className="flex flex-col items-start gap-3 text-sm text-neutral-400">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">Contact</p>
          <a href="mailto:info@xbuctech.com" className="transition-colors hover:text-white">
            info@xbuctech.com
          </a>
          <a href="tel:+15125846924" className="transition-colors hover:text-white">
            512-584-6924
          </a>
          <span className="max-w-xs leading-6 text-neutral-500">14205 N Mopac Expy #500, Austin, TX 78731</span>
        </div>

        <div className="border-t border-white/10 pt-5 text-xs text-neutral-600 md:col-span-2 lg:col-span-4">
          <span>© 2026 XBUC TECH</span>
        </div>
      </div>
    </footer>
  );
}