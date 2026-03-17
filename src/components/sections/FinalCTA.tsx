"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FinalCTA() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="bg-fg-cream text-fg-text-dark py-6 lg:py-10">
      <div className="mx-6 lg:mx-10 border border-fg-border-light relative overflow-hidden">
        <div className="px-6 lg:px-10 py-20 lg:py-36">
          {/* Label */}
          <p className="section-title text-label-lg text-fg-text-dark-secondary mb-6">
            Start Your Project
          </p>

          {/* Heading */}
          <h2
            className={`text-heading text-fg-text-dark max-w-[44rem] mb-8 lg:mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Let&apos;s discuss your renovation — from first idea to final handover
          </h2>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="text-label inline-flex items-center gap-3 bg-fg-grey text-fg-white px-6 py-3 transition-opacity hover:opacity-80"
            >
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none" className="-translate-y-px">
                <path d="M8.5 0.5L13 5.5L8.5 10.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M0 5.5H13" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              Request a Consultation
            </Link>
            <Link
              href="/projects"
              className="text-label text-fg-text-dark py-3 hover-underline pb-0.5"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Decorative geometric — fluid.glass style */}
        <svg
          viewBox="0 0 428 610"
          fill="none"
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[26.75rem] h-[38rem] text-fg-border-light"
        >
          <path d="M0 0L428 0L428 610L0 610L0 0Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0 305L428 0" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 305L428 610" stroke="currentColor" strokeWidth="0.5" />
          <path d="M214 0L214 610" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 0L428 610" stroke="currentColor" strokeWidth="0.3" />
          <path d="M428 0L0 610" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </div>
    </section>
  );
}
