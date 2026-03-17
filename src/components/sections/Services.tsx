"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { services } from "@/data/services";

const homeServices = services.slice(0, 6);

export function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative bg-sr-dark-surface py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-overline text-sr-gold mb-4">What We Do</p>
          <h2 className="text-section-title text-sr-cream">
            Crafted for Every Space
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-sr-text-secondary">
            From intimate kitchen redesigns to comprehensive villa transformations, our design-build
            approach delivers certainty at every scale.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-sr-dark-border bg-sr-dark transition-all duration-500 hover:border-sr-gold/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sr-dark via-sr-dark/40 to-transparent" />
                </div>
                <div className="relative px-6 pb-6 -mt-16 z-10">
                  <span className="text-2xl">{service.icon}</span>
                  <h3 className="mt-3 font-heading text-xl font-light text-sr-cream">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-sr-text-muted line-clamp-2">
                    {service.teaser}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-sr-gold transition-all duration-300 group-hover:gap-3">
                    Explore <span>→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-sr-dark-border px-8 py-3 text-sm font-medium uppercase tracking-wider text-sr-cream transition-all duration-300 hover:border-sr-gold hover:text-sr-gold"
          >
            View All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
