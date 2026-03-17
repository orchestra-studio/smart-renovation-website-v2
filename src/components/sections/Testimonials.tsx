"use client";

import { useState, useCallback } from "react";
import { testimonials } from "@/data/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Testimonials() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [activeIdx, setActiveIdx] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setActiveIdx((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActiveIdx((i) => (i - 1 + total) % total), [total]);

  const active = testimonials[activeIdx];

  return (
    <section ref={ref} className="bg-fg-cream text-fg-text-dark py-20 lg:py-40">
      <div className="px-6 lg:px-10">
        {/* Header */}
        <div className="border-t border-fg-border-light pt-4 lg:pt-5">
          <div className="flex items-start justify-between">
            <p className="section-title text-label-lg text-fg-text-dark-secondary">Client Reviews</p>

            {/* Indicator */}
            <p className="hidden lg:block text-label-lg text-fg-text-dark-secondary absolute left-[24rem]">
              {String(activeIdx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>

            {/* Arrow navigation */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous review"
                className="w-12 h-12 border border-fg-border-light flex items-center justify-center transition-colors hover:bg-fg-grey hover:text-fg-white hover:border-fg-grey"
              >
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" className="rotate-180">
                  <path d="M9 0.5L13.5 4.5L9 8.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M0 4.5H13.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next review"
                className="w-12 h-12 border border-fg-border-light flex items-center justify-center transition-colors hover:bg-fg-grey hover:text-fg-white hover:border-fg-grey"
              >
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                  <path d="M9 0.5L13.5 4.5L9 8.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M0 4.5H13.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial content */}
        <div className="lg:grid lg:grid-cols-24 lg:gap-5 mt-14 lg:mt-20 relative">
          {/* Quote icon */}
          <div className="lg:col-start-7 lg:col-span-1 mb-6 lg:mb-0">
            <svg width="27" height="20" viewBox="0 0 27 20" fill="none" className="text-fg-text-dark-secondary">
              <path d="M0 20V12.5C0 4.167 4.5.833 13.5 0l1 2.5C9 3.333 6.667 5.833 6 10h6v10H0zm15 0V12.5C15 4.167 19.5.833 27 0l1 2.5C22.5 3.333 21.667 5.833 21 10h6v10H15z" fill="currentColor" />
            </svg>
          </div>

          {/* Quote text */}
          <div className="lg:col-start-7 lg:col-span-16">
            <blockquote
              className={`text-heading text-fg-text-dark leading-tight transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              key={activeIdx}
            >
              &ldquo;{active.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center mt-10 lg:mt-14">
              {/* Avatar placeholder */}
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-fg-taupe mr-4 lg:mr-6 flex-shrink-0" />
              <div>
                <p className="text-subheading text-fg-text-dark">{active.name}</p>
                <p className="text-label text-fg-text-dark-secondary mt-1">{active.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Google reviews rating */}
        <div className="mt-10 lg:mt-16 border-t border-fg-border-light pt-6 lg:hidden">
          <div className="flex items-center gap-3 text-label text-fg-text-dark-secondary">
            <svg width="20" height="20" viewBox="0 0 48 48" className="text-fg-text-dark">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
              <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
            </svg>
            <span className="underline underline-offset-2">4.9 stars on Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
