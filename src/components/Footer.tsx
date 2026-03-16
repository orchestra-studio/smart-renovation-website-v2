const quickLinks = [
  { label: "About us", href: "#about-us" },
  { label: "Our work", href: "#our-work" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border-dark bg-dark">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 py-10 md:flex-row md:items-start md:justify-between">
          <a href="/" className="inline-flex items-center gap-4 text-light">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-mid text-sm font-semibold">
              SR
            </span>
            <span className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.22em] text-light/55">
                Dubai
              </span>
              <span className="text-lg font-semibold tracking-[-0.02em]">
                Smart Renovation
              </span>
            </span>
          </a>

          <div className="md:text-right">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-light/55">
              Quick links
            </p>
            <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-light-alt transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-border-dark py-6 text-center text-sm text-light/65">
          © 2026 Smart Renovation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
