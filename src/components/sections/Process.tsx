"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { processSteps } from "@/data/site";

export function Process() {
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
          <p className="text-overline text-sr-gold mb-4">How We Work</p>
          <h2 className="text-section-title text-sr-cream">
            Your Renovation Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-sr-text-secondary">
            A structured, transparent process that turns ambitious visions into exceptional spaces
            — with clarity at every stage.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group relative"
            >
              {/* Connector line */}
              {i < processSteps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-sr-dark-border lg:block" />
              )}

              <div className="relative rounded-2xl border border-sr-dark-border bg-sr-dark p-8 transition-all duration-500 hover:border-sr-gold/30">
                <span className="font-heading text-5xl font-light text-sr-gold/20 transition-colors duration-500 group-hover:text-sr-gold/40">
                  {step.step}
                </span>
                <h3 className="mt-4 font-heading text-xl font-light text-sr-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sr-text-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
