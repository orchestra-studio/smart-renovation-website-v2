"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our work", href: "#work" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setIsMobileOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled ? "rgba(250, 250, 250, 0.94)" : "rgba(250, 250, 250, 0)",
        borderColor: isScrolled ? "rgba(230, 230, 230, 0.8)" : "rgba(230, 230, 230, 0)",
        boxShadow: isScrolled
          ? "0 12px 40px rgba(16, 16, 20, 0.08)"
          : "0 0 0 rgba(16, 16, 20, 0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className={`text-lg font-semibold tracking-[-0.03em] transition-colors duration-300 ${
            isScrolled ? "text-dark" : "text-light"
          }`}
        >
          SmartRenovation
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-dark ${
                isScrolled ? "text-text-muted" : "text-light/80 hover:text-light"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
              isScrolled
                ? "bg-dark text-light hover:bg-mid"
                : "bg-light text-dark hover:bg-light-alt"
            }`}
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((open) => !open)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 md:hidden ${
            isScrolled
              ? "border-border-light bg-light text-dark"
              : "border-white/15 bg-white/5 text-light"
          }`}
        >
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-border-light bg-light/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 sm:px-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-dark transition-colors hover:bg-light-alt"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-dark px-5 py-3 text-sm font-semibold text-light transition-colors hover:bg-mid"
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
