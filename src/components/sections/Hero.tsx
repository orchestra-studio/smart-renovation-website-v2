"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { trustStats } from "@/data/site";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/projects/penthouse-1.jpg"
          alt="Luxury interior by Smart Renovation Dubai"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sr-dark/80 via-sr-dark/60 to-sr-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-sr-dark/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          {mounted && (
            <>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-overline text-sr-gold mb-6"
              >
                Premium Renovations in Dubai
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-hero text-sr-cream"
              >
                Where Vision
                <br />
                <span className="text-gradient-gold">Becomes Space</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 max-w-xl text-lg leading-relaxed text-sr-text-secondary"
              >
                Bespoke interior transformations for Dubai&apos;s most discerning residents.
                Design-build excellence from concept to completion.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="group relative overflow-hidden rounded-full bg-sr-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-sr-dark transition-all duration-500 hover:shadow-[0_0_40px_rgba(197,165,114,0.4)]"
                >
                  <span className="relative z-10">Begin Your Transformation</span>
                  <div className="absolute inset-0 bg-sr-gold-hover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </Link>
                <Link
                  href="/projects"
                  className="rounded-full border border-sr-cream/20 px-8 py-4 text-sm font-medium uppercase tracking-widest text-sr-cream transition-all duration-300 hover:border-sr-cream/40 hover:bg-white/5"
                >
                  View Our Work
                </Link>
              </motion.div>
            </>
          )}
        </div>

        {/* Stats Bar */}
        {mounted && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:mt-28"
          >
            {trustStats.map((stat) => (
              <div key={stat.label} className="glass rounded-xl px-6 py-5">
                <p className="font-heading text-3xl font-light text-sr-cream">
                  {stat.decimals ? stat.value.toFixed(stat.decimals) : stat.value}
                  <span className="text-sr-gold">{stat.suffix}</span>
                </p>
                <p className="mt-1 text-xs text-sr-text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-sr-text-muted">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-sr-text-muted to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
