"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "14", label: "Years of experience" },
  { value: "350+", label: "Projects completed" },
  { value: "45", label: "Expert craftspeople" },
  { value: "96%", label: "Client satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="bg-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="lg:w-[55%]"
          >
            <span className="inline-flex rounded-full bg-dark px-4 py-1.5 text-[13px] font-medium text-white">
              About us
            </span>

            <h2 className="mt-6 max-w-3xl text-[36px] font-medium tracking-[-0.03em] text-dark md:text-[42px] md:leading-[1.05]">
              Where craftsmanship meets luxury
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-text-muted md:text-lg">
              <p>
                Since 2018, Smart Renovation has been transforming Dubai&apos;s finest residences into bespoke living spaces. From Palm Jumeirah villas to Downtown penthouses, every project is guided by a simple philosophy: uncompromising quality, transparent process, and designs that reflect the way you live.
              </p>
              <p>
                Our team of architects, designers, and master craftspeople bring together European precision and local expertise to deliver renovations that exceed expectations — on time, on budget, and beyond imagination.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="mt-12 lg:mt-0 lg:w-[45%]"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-light-alt">
              <div className="flex h-full items-center justify-center text-center text-lg font-medium tracking-[0.08em] text-dark/70 uppercase">
                Smart Renovation
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
                },
              }}
              className="rounded-2xl bg-light-alt p-8"
            >
              <div className="text-[48px] font-light leading-none tracking-[-0.04em] text-dark md:text-[56px]">
                {stat.value}
              </div>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
