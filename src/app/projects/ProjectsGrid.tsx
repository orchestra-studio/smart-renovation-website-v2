"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

const types = ["All", "Residential", "Commercial"] as const;

export function ProjectsGrid() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.type === filter);

  return (
    <section className="bg-fg-cream text-fg-text-dark py-10 lg:py-16">
      <div className="px-6 lg:px-10">
        {/* Filter bar */}
        <div className="flex gap-3 mb-10 lg:mb-16">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`text-label border px-5 py-2.5 transition-colors ${
                filter === t
                  ? "bg-fg-grey text-fg-white border-fg-grey"
                  : "border-fg-border-light text-fg-text-dark-secondary hover:bg-fg-grey hover:text-fg-white hover:border-fg-grey"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-24 lg:gap-5">
          {filtered.map((project, i) => {
            // Staggered column placement like fluid.glass
            const layouts = [
              "lg:col-start-1 lg:col-span-12",
              "lg:col-start-14 lg:col-span-10 lg:mt-24",
              "lg:col-start-3 lg:col-span-10",
              "lg:col-start-15 lg:col-span-9 lg:-mt-16",
              "lg:col-start-1 lg:col-span-11",
              "lg:col-start-13 lg:col-span-11 lg:mt-20",
              "lg:col-start-2 lg:col-span-10",
              "lg:col-start-14 lg:col-span-10 lg:-mt-12",
            ];

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`group block mb-8 lg:mb-12 ${layouts[i % layouts.length]}`}
              >
                <div className="aspect-[4/3] relative overflow-hidden mb-4">
                  <Image
                    src={project.gallery[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-subheading text-fg-text-dark group-hover:opacity-70 transition-opacity">
                      {project.title}
                    </h3>
                    <p className="text-label text-fg-text-dark-secondary mt-2">
                      {project.location} — {project.type}
                    </p>
                  </div>
                  <svg width="15" height="11" viewBox="0 0 14 11" fill="none" className="opacity-30 group-hover:opacity-100 transition-opacity mt-2 flex-shrink-0">
                    <path d="M8.5 0.5L13 5.5L8.5 10.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M0 5.5H13" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
