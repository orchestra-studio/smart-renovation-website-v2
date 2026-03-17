"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { featuredProjects } from "@/data/projects";

export function Portfolio() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative bg-sr-dark py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-overline text-sr-gold mb-4">Selected Work</p>
            <h2 className="text-section-title text-sr-cream">
              Transformations That Speak
            </h2>
          </div>
          <Link
            href="/projects"
            className="rounded-full border border-sr-dark-border px-6 py-3 text-xs font-medium uppercase tracking-wider text-sr-cream transition-all duration-300 hover:border-sr-gold hover:text-sr-gold"
          >
            View All Projects →
          </Link>
        </motion.div>

        {/* Project Grid — asymmetric editorial layout */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1 }}
              className={i === 0 ? "md:row-span-2" : ""}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block overflow-hidden rounded-2xl"
              >
                <div className={`relative overflow-hidden ${i === 0 ? "aspect-[3/4]" : "aspect-[16/10]"}`}>
                  <Image
                    src={project.gallery[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 50vw"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sr-dark/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                </div>

                {/* Overlay Info */}
                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                  <div className="flex items-center gap-3 text-xs text-sr-text-muted">
                    <span className="rounded-full border border-sr-cream/20 px-3 py-1 text-sr-cream/80">
                      {project.type}
                    </span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="mt-3 font-heading text-2xl font-light text-sr-cream lg:text-3xl">
                    {project.shortLabel}
                  </h3>
                  <p className="mt-2 text-sm text-sr-text-secondary line-clamp-2 max-w-md">
                    {project.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-sr-gold opacity-0 transition-all duration-300 group-hover:opacity-100">
                    View Project <span>→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
