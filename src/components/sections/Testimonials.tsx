"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  // Double for infinite ticker
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];

  return (
    <section ref={ref} className="relative bg-sr-dark py-32 lg:py-40 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <p className="text-overline text-sr-gold mb-4">Client Voices</p>
        <h2 className="text-section-title text-sr-cream">
          Trusted by Dubai&apos;s Most Discerning
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-sr-text-secondary">
          4.9★ average from 120+ verified client reviews
        </p>
      </motion.div>

      {/* Ticker Row 1 */}
      <div className="mt-16 overflow-hidden">
        <div className="animate-ticker flex gap-6" style={{ width: "max-content" }}>
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Ticker Row 2 */}
      <div className="mt-6 overflow-hidden">
        <div className="animate-ticker-reverse flex gap-6" style={{ width: "max-content" }}>
          {row2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div className="w-[380px] shrink-0 rounded-2xl border border-sr-dark-border bg-sr-dark-surface p-8">
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-sr-gold text-sr-gold" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-sr-text-secondary italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sr-dark-border text-sm font-medium text-sr-cream">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium text-sr-cream">{testimonial.name}</p>
          <p className="text-xs text-sr-text-muted">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
