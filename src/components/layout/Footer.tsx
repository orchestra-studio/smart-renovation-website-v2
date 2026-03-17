"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Footer() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <footer ref={ref} className="relative bg-fg-black text-fg-white min-h-screen overflow-hidden">
      {/* Background wordmark mask with image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: "url(/images/projects/penthouse-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 40'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36' font-weight='700' font-family='Inter,sans-serif'%3ESR%3C/text%3E%3C/svg%3E")`,
            maskSize: "clamp(40rem, 80vw, 100rem) auto",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 40'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='36' font-weight='700' font-family='Inter,sans-serif'%3ESR%3C/text%3E%3C/svg%3E")`,
            WebkitMaskSize: "clamp(40rem, 80vw, 100rem) auto",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-fg-black)] via-transparent to-transparent pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-[3] flex flex-col min-h-screen">
        {/* Logo at top */}
        <div
          className={`flex justify-center pt-8 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link href="/" aria-label="Back to top">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="opacity-60 hover:opacity-100 transition-opacity">
              <path d="M12 2L22 7v10l-10 5L2 17V7l10-5z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 7l5 2.5v5L12 17l-5-2.5v-5L12 7z" stroke="currentColor" strokeWidth="1" />
            </svg>
          </Link>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Nav links - center */}
        <nav className="flex flex-col items-center gap-6 mb-12 lg:mb-16">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg text-fg-text-secondary hover:text-fg-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="px-6 lg:px-10 pb-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-fg-text-secondary">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}</p>

          <div className="flex items-center gap-6">
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover-underline pb-0.5 hover:text-fg-white transition-colors">Instagram</a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="hover-underline pb-0.5 hover:text-fg-white transition-colors">LinkedIn</a>
            <a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" className="hover-underline pb-0.5 hover:text-fg-white transition-colors">WhatsApp</a>
          </div>

          <p className="text-fg-text-muted text-xs">
            {siteConfig.address.street}, {siteConfig.address.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
