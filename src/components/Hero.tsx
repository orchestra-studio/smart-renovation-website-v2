"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stats = [
  { value: "14+", label: "Years of expertise" },
  { value: "350+", label: "Projects delivered" },
  { value: "45", label: "Specialists & craftsmen" },
  { value: "96%", label: "Client satisfaction" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark px-5 pt-28 text-light sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.16),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.08),_transparent_35%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex w-full max-w-6xl flex-col items-center text-center"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-text-light"
        >
          Premium Renovations in Dubai
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-5xl text-[clamp(3.5rem,7vw,4.5rem)] font-light leading-[0.95] tracking-[-0.05em] text-light"
        >
          Luxury renovation crafted for Dubai living
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-7 text-text-light-alt sm:text-lg"
        >
          Bespoke interiors, seamless project delivery, and refined execution for villas,
          apartments, and commercial spaces designed to elevate everyday life.
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-light px-6 py-3.5 text-sm font-semibold text-dark transition-all duration-300 hover:bg-light-alt"
          >
            Start Your Project
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-dark text-light transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-4 rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:grid-cols-4 sm:p-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/6 bg-white/5 px-4 py-5 sm:px-5"
            >
              <div className="text-3xl font-light tracking-[-0.04em] text-light sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm leading-6 text-text-light-alt">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
