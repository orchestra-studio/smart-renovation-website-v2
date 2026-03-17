import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-sr-dark-border bg-sr-black">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo-white.png" alt="Smart Renovation" width={32} height={32} className="h-8 w-auto" />
              <span className="font-heading text-lg font-light text-sr-cream">Smart Renovation</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-sr-text-muted">
              The fashion house of renovation. Award-winning design-build studio delivering premium transformations across Dubai.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-overline text-sr-text-secondary mb-4">Explore</h4>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-sr-text-muted transition-colors hover:text-sr-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-overline text-sr-text-secondary mb-4">Services</h4>
            <ul className="space-y-3">
              {["Villa Renovation", "Apartment Renovation", "Kitchen & Bathroom", "Landscape & Outdoor", "Office Fit-Out"].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-sr-text-muted transition-colors hover:text-sr-cream">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-overline text-sr-text-secondary mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-sr-text-muted">
              <li>
                <a href={`tel:${siteConfig.phoneRaw}`} className="transition-colors hover:text-sr-cream">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-sr-cream">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello Smart Renovation, I would like to discuss my project.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-sr-cream"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="pt-2 text-sr-text-muted">
                {siteConfig.address.street}, {siteConfig.address.city}
              </li>
            </ul>

            <div className="mt-6 flex gap-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-sr-text-muted transition-colors hover:text-sr-cream">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-sr-text-muted transition-colors hover:text-sr-cream">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="luxury-divider mt-16 mb-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-sr-text-muted">
            © {new Date().getFullYear()} Smart Renovation. Premium Renovations in Dubai.
          </p>
          <div className="flex gap-6 text-xs text-sr-text-muted">
            <Link href="/contact" className="transition-colors hover:text-sr-cream">Privacy</Link>
            <Link href="/contact" className="transition-colors hover:text-sr-cream">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
