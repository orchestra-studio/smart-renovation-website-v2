"use client";

import { useState } from "react";
import { faqs } from "@/data/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function FAQ() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section ref={ref} className="bg-fg-cream text-fg-text-dark py-20 lg:py-40">
      <div className="px-6 lg:px-10">
        {/* Header */}
        <div className="border-t border-fg-border-light pt-4 lg:pt-5">
          <p className="section-title text-label-lg text-fg-text-dark-secondary">Frequently Asked</p>
        </div>

        <div className="lg:grid lg:grid-cols-24 lg:gap-5 mt-6 lg:mt-10">
          {/* Heading */}
          <div className="lg:col-span-10 mb-10 lg:mb-0">
            <h2
              className={`text-heading text-fg-text-dark transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Questions we hear most
            </h2>
          </div>

          {/* FAQ list */}
          <div className="lg:col-start-12 lg:col-span-13">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-t border-fg-border-light"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-start justify-between py-5 lg:py-6 text-left group"
                  aria-expanded={openIdx === i}
                >
                  <span className="text-body font-medium text-fg-text-dark pr-8 group-hover:opacity-70 transition-opacity">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-300 ${
                      openIdx === i ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIdx === i ? "max-h-80 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-body text-fg-text-dark-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
            {/* Bottom border */}
            <div className="border-t border-fg-border-light" />
          </div>
        </div>
      </div>
    </section>
  );
}
