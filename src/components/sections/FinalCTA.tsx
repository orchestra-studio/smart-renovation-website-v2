"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { siteConfig } from "@/data/site";

export function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-sr-dark py-32 lg:py-40">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sr-dark via-sr-dark-surface to-sr-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-sr-gold/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-overline text-sr-gold mb-6">Join 240+ Dubai Homeowners</p>
          <h2 className="text-display text-sr-cream">
            Your Space Deserves
            <br />
            <span className="text-gradient-gold">Extraordinary</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-sr-text-secondary">
            Begin with a conversation. No commitments, no pressure — just a focused
            consultation to understand your vision.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-sr-gold px-10 py-4 text-sm font-semibold uppercase tracking-widest text-sr-dark transition-all duration-500 hover:bg-sr-gold-hover hover:shadow-[0_0_50px_rgba(197,165,114,0.4)]"
            >
              Start Your Project
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello, I'd like to discuss a renovation project.")}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-sr-dark-border px-10 py-4 text-sm font-medium uppercase tracking-wider text-sr-cream transition-all duration-300 hover:border-sr-gold hover:text-sr-gold"
            >
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-8 text-xs text-sr-text-muted">
            Response within 15 minutes during business hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
