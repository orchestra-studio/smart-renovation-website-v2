"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const filters = ["All", "Residential", "Commercial"];

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.type === activeFilter);

  return (
    <section className="bg-sr-dark pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filters */}
        <div className="flex gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                activeFilter === f
                  ? "bg-sr-gold text-sr-dark"
                  : "border border-sr-dark-border text-sr-text-secondary hover:border-sr-text-muted"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-sr-dark-border transition-all duration-500 hover:border-sr-gold/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.gallery[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sr-dark/80 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                </div>
                <div className="relative -mt-20 p-6 z-10">
                  <div className="flex items-center gap-2 text-xs text-sr-text-muted">
                    <span className="rounded-full border border-sr-cream/20 px-2.5 py-0.5 text-sr-cream/80">{project.type}</span>
                    <span>{project.location}</span>
                    <span>·</span>
                    <span>{project.timeline}</span>
                  </div>
                  <h3 className="mt-3 font-heading text-xl font-light text-sr-cream">{project.shortLabel}</h3>
                  <p className="mt-1 text-xs text-sr-text-muted line-clamp-1">{project.style}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
