"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-sr-dark py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/projects/penthouse-20.jpg"
                alt="Smart Renovation interior design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sr-dark/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-8 py-6 lg:-right-10">
              <p className="font-heading text-4xl font-light text-sr-cream">14<span className="text-sr-gold">+</span></p>
              <p className="mt-1 text-xs text-sr-text-muted">Years in Dubai</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-overline text-sr-gold mb-4">Who We Are</p>
            <h2 className="text-section-title text-sr-cream">
              The Fashion House
              <br />
              <span className="text-gradient-gold">of Renovation</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-sr-text-secondary">
              Smart Renovation is Dubai&apos;s premier design-build studio. We bring European design
              sensibility and meticulous craftsmanship to every project — from intimate bathroom
              suites to comprehensive villa transformations.
            </p>
            <p className="mt-4 text-base leading-relaxed text-sr-text-muted">
              Our integrated team of architects, interior designers, and project managers delivers
              one cohesive experience. No fragmented contractors. No communication gaps. Just exceptional
              spaces, delivered with certainty.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full border border-sr-dark-border px-7 py-3 text-sm font-medium uppercase tracking-wider text-sr-cream transition-all duration-300 hover:border-sr-gold hover:text-sr-gold"
              >
                Our Story
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-sr-gold transition-colors hover:text-sr-gold-hover flex items-center gap-2 px-2 py-3"
              >
                Explore Services
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
