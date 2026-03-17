"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  return (
    <>
      {/* Top page header — logo + CTA */}
      <header
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between h-16 px-6 lg:px-10"
        style={{ color: "var(--color-fg-white)" }}
      >
        <Link href="/" className="flex items-center gap-2" aria-label="Smart Renovation Home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-fg-white">
            <path d="M12 2L22 7v10l-10 5L2 17V7l10-5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M12 7l5 2.5v5L12 17l-5-2.5v-5L12 7z" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
          <span className="text-label tracking-[0.15em] hidden sm:inline">Smart Renovation</span>
        </Link>

        <Link
          href="/contact"
          className="text-label glass-button px-5 py-2.5 transition-opacity hover:opacity-80"
        >
          Get a Quote
        </Link>
      </header>

      {/* Bottom navigation bar — fluid.glass style */}
      <nav
        className={`fixed bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center h-[3.125rem] transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ width: "17.25rem" }}
      >
        <div className="absolute inset-0 glass-nav rounded-none" />

        {/* Logo */}
        <Link href="/" className="relative flex items-center justify-center w-[3.125rem] h-[3.125rem]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L22 7v10l-10 5L2 17V7l10-5z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 7l5 2.5v5L12 17l-5-2.5v-5L12 7z" stroke="currentColor" strokeWidth="1" />
          </svg>
        </Link>

        {/* Current section title */}
        <div className="relative flex-1 flex items-center justify-center h-full overflow-hidden">
          <span className="text-label text-[0.7rem] whitespace-nowrap">
            {getPageTitle(pathname)}
          </span>
        </div>

        {/* Burger */}
        <button
          onClick={toggleMenu}
          className="relative flex items-center justify-center w-[3.125rem] h-[3.125rem]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="relative w-5 h-3 flex flex-col justify-between">
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[5.5px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[5.5px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-700 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[color:color-mix(in_srgb,var(--color-fg-black)_90%,transparent)]"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`fixed bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 z-50 glass-nav p-10 lg:p-12 transition-all duration-500 ${
            menuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{ width: "min(90vw, 25rem)" }}
        >
          {/* Main nav */}
          <p className="text-label text-fg-text-secondary mb-6">Navigation</p>
          <ul className="space-y-1">
            {[
              { label: "Home", href: "/" },
              ...siteConfig.nav,
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block text-[2rem] font-normal leading-tight py-1 transition-colors duration-300 ${
                    pathname === item.href
                      ? "text-fg-white"
                      : "text-fg-text-muted hover:text-fg-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="flex items-center gap-3">
                    {pathname === item.href && (
                      <span className="inline-block w-1.5 h-1.5 bg-current rotate-45 opacity-60" />
                    )}
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Social links */}
          <div className="mt-8 pt-6 border-t border-fg-border">
            <p className="text-label text-fg-text-secondary mb-3">Connect</p>
            <div className="flex gap-6 text-sm text-fg-text-secondary">
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover-underline pb-0.5 hover:text-fg-white transition-colors">Instagram</a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="hover-underline pb-0.5 hover:text-fg-white transition-colors">LinkedIn</a>
              <a href={`tel:${siteConfig.phoneRaw}`} className="hover-underline pb-0.5 hover:text-fg-white transition-colors">Call</a>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Link
              href="/contact"
              className="block w-full text-center text-label bg-fg-white text-fg-grey py-3 transition-opacity hover:opacity-90"
              onClick={() => setMenuOpen(false)}
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function getPageTitle(pathname: string): string {
  const map: Record<string, string> = {
    "/": "The Fashion House of Renovation",
    "/projects": "Selected Projects",
    "/services": "Our Services",
    "/about": "About Us",
    "/blog": "Journal",
    "/contact": "Get in Touch",
  };
  return map[pathname] || "Smart Renovation";
}
