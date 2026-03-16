"use client";

import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  author: string;
  location: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "The team was professional from start to finish, and every detail was handled with real care.",
    author: "Mark R.",
    location: "Palm Jumeirah",
  },
  {
    quote:
      "Smart Renovation understood our vision from day one and translated it into a space that feels both elegant and personal.",
    author: "Layla K.",
    location: "Dubai Marina",
  },
  {
    quote:
      "We've renovated with two other companies before, and this was by far the most organized and polished experience.",
    author: "David & Emma P.",
    location: "Arabian Ranches",
  },
  {
    quote:
      "Every corner of our apartment feels considered, calm, and beautifully finished. The result exceeded our expectations.",
    author: "Ahmad S.",
    location: "Downtown Dubai",
  },
  {
    quote:
      "From design to delivery, the experience was exceptional and the final result feels truly premium.",
    author: "Sophie L.",
    location: "Jumeirah Golf Estates",
  },
  {
    quote:
      "They managed a complex villa renovation with 12 subcontractors and made the entire process feel remarkably smooth.",
    author: "Richard & Nadia H.",
    location: "Emirates Hills",
  },
];

const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3, 6);
const copies = 3;

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-light py-24 md:py-32"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-border-light bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-muted">
            Testimonials
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-dark md:text-5xl">
            Hear from our clients
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            Homeowners across Dubai trust us to deliver premium renovations with
            clarity, care, and uncompromising execution.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {[
            { items: firstRow, animation: "animate-ticker" },
            { items: secondRow, animation: "animate-ticker-reverse" },
          ].map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <div className={`flex w-max gap-4 ${row.animation}`}>
                {Array.from({ length: copies }).flatMap((_, copyIndex) =>
                  row.items.map((testimonial) => (
                    <TestimonialCard
                      key={`${rowIndex}-${copyIndex}-${testimonial.author}`}
                      testimonial={testimonial}
                      ariaHidden={copyIndex > 0}
                    />
                  )),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type TestimonialCardProps = {
  testimonial: Testimonial;
  ariaHidden?: boolean;
};

function TestimonialCard({
  testimonial,
  ariaHidden = false,
}: TestimonialCardProps) {
  return (
    <article
      aria-hidden={ariaHidden}
      className="w-[350px] shrink-0 rounded-2xl border border-border-light bg-white p-6 sm:w-[400px]"
    >
      <div className="mb-4 flex gap-1 text-star">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="text-lg leading-none">
            ★
          </span>
        ))}
      </div>

      <p className="text-base leading-7 text-muted">{testimonial.quote}</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-mid/20" />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-dark">
            {testimonial.author}
          </span>
          <span className="text-sm text-muted">{testimonial.location}</span>
        </div>
      </div>
    </article>
  );
}
