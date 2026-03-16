"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Kitchen Renovation",
    description:
      "Italian marble, smart storage, European appliances, and bespoke cabinetry brought together for a kitchen that feels both elevated and effortless.",
  },
  {
    title: "Bathroom Renovation",
    description:
      "A spa retreat with premium European fixtures, natural stone surfaces, and custom glass details crafted for daily comfort and timeless elegance.",
  },
  {
    title: "Full Villa Renovation",
    description:
      "Complete transformation services including structural work, MEP coordination, flooring, and joinery executed with seamless end-to-end management.",
  },
  {
    title: "Apartment Fit-out",
    description:
      "Layout reconfiguration, custom millwork, and premium finishes designed to maximize every square metre with sophistication and precision.",
  },
  {
    title: "Painting & Decorating",
    description:
      "Premium paints, meticulous preparation, and flawless execution that refine the atmosphere of each room with a polished final finish.",
  },
  {
    title: "Swimming Pool & Landscaping",
    description:
      "Outdoor oasis design featuring pool renovation, tailored garden layouts, and luxury exterior details that extend the living experience beyond the walls.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-dark px-4 py-1.5 text-[13px] font-medium text-white">
            Services
          </span>
          <h2 className="mt-6 text-[36px] font-medium tracking-[-0.03em] text-dark md:text-[42px] md:leading-[1.05]">
            Our expertise
          </h2>
          <p className="mt-5 text-base leading-8 text-text-muted md:text-lg">
            From signature kitchens to complete villa transformations, we deliver renovation services defined by precision, premium materials, and meticulous execution.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              className="rounded-2xl bg-light-alt p-8"
            >
              <h3 className="text-[22px] font-medium tracking-[-0.02em] text-dark">
                {service.title}
              </h3>
              <p className="mt-4 text-[16px] leading-7 text-text-muted">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
