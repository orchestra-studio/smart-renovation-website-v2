"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "Which areas of Dubai do you serve?",
    answer:
      "We work across all major Dubai communities, including Palm Jumeirah, Downtown Dubai, Dubai Marina, Emirates Hills, Arabian Ranches, Jumeirah Golf Estates, and Al Barsha.",
  },
  {
    question: "How long does a typical renovation take?",
    answer:
      "Timelines depend on scope. A bathroom renovation typically takes 4–6 weeks, a kitchen renovation usually takes 6–8 weeks, and a full villa renovation generally runs between 4–6 months.",
  },
  {
    question: "Do you handle permits and approvals?",
    answer:
      "Yes. We manage the full approval process, including NOCs, municipality permits, and building management approvals, so your project moves forward without unnecessary friction.",
  },
  {
    question: "Can I track my project remotely?",
    answer:
      "Absolutely. You will have access to a digital project portal with progress updates, site photos, milestones, and a central communication thread for your team.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "Our payment structure is milestone-based, with each payment tied to clearly defined project phases so you always have visibility on progress and deliverables.",
  },
  {
    question: "Do you provide a warranty?",
    answer:
      "Yes. We provide a 10-year structural warranty, a 5-year warranty on MEP works, and a 2-year warranty on finishes.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can get started via WhatsApp, phone, or our contact form. We begin with a free consultation, then prepare a tailored proposal within 5 business days.",
  },
] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faqs" className="bg-light py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-border-light bg-light-alt px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            FAQs
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-dark md:text-5xl">
            Answering your questions
          </h2>

          <p className="mt-5 text-base leading-7 text-muted md:text-lg">
            From timelines and approvals to warranties and remote project tracking,
            here is what clients most often ask before starting a renovation in
            Dubai.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-dark px-6 py-3 text-sm font-medium text-light transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span>Get in touch</span>
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mx-auto mt-16 max-w-[800px] space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl bg-light-alt shadow-[0_16px_40px_rgba(16,16,20,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7 md:py-6"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="text-lg font-medium leading-7 text-dark">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-light bg-light text-dark"
                    aria-hidden
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-base leading-7 text-muted md:px-7">
                        {faq.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
