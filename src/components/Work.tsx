"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Villa Palm Jumeirah",
    description:
      "A 5-bedroom beachfront villa blending Mediterranean warmth with Dubai luxury, finished with Italian marble, walnut joinery, and bespoke detailing throughout.",
    tags: ["Full Villa", "6 months"],
    quote:
      "Smart Renovation transformed our villa beyond what we imagined.",
    author: "Alexandra M.",
  },
  {
    title: "Penthouse Downtown Dubai",
    description:
      "A 4,200 sq ft penthouse overlooking Burj Khalifa, reimagined with a minimalist palette, an Italian kitchen, and tailored hospitality-level finishes.",
    tags: ["Apartment Fit-out", "4 months"],
    quote:
      "The process was seamless. The quality of workmanship is world-class.",
    author: "James & Sarah T.",
  },
  {
    title: "Modern Kitchen — Emirates Hills",
    description:
      "A refined kitchen transformation featuring Gaggenau appliances, a Calacatta marble island, and bronze hardware designed to become the heart of the home.",
    tags: ["Kitchen", "8 weeks"],
    quote: "Our kitchen is now the heart of our home.",
    author: "Fatima A.",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-light py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-border-light bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-muted">
            Our work
          </span>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-dark md:text-5xl">
            Get inspired by our work
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
            Discover signature renovations shaped by craftsmanship, premium
            materials, and a meticulous attention to detail from concept to
            completion.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className={`flex flex-col overflow-hidden rounded-2xl bg-light-alt ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="lg:w-1/2">
                <div className="flex aspect-[4/3] h-full items-center justify-center bg-mid/10 px-6 text-center">
                  <div className="space-y-2">
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted">
                      Project image
                    </p>
                    <p className="text-lg font-medium text-dark">
                      {project.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex lg:w-1/2">
                <div className="flex w-full flex-col justify-between p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border-light px-4 py-1.5 text-[13px] font-medium text-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl font-semibold tracking-[-0.03em] text-dark">
                        {project.title}
                      </h3>
                      <p className="text-base leading-8 text-muted">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 space-y-5">
                    <div className="flex gap-3">
                      <span className="text-2xl leading-none text-muted">❝</span>
                      <p className="text-lg italic leading-8 text-muted">
                        {project.quote}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-mid/20" />
                      <span className="text-sm font-medium text-dark">
                        {project.author}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
