"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Portfolio() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="bg-fg-cream text-fg-text-dark py-20 lg:py-40">
      <div className="px-6 lg:px-10">
        {/* Header */}
        <div className="border-t border-fg-border-light pt-4 lg:pt-5">
          <div className="lg:grid lg:grid-cols-24 lg:gap-5">
            <div className="lg:col-span-10">
              <p className="section-title text-label-lg text-fg-text-dark-secondary">Featured Projects</p>
            </div>
            <div className="lg:col-start-11 lg:col-span-14">
              <h2
                className={`text-heading text-fg-text-dark mt-3 lg:mt-1 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Selected work from premium residential and commercial renovations
              </h2>
            </div>
          </div>
        </div>

        {/* Project list — fluid.glass style */}
        <div
          ref={listRef}
          className={`mt-12 lg:mt-24 border-t border-fg-border-light transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {featuredProjects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative flex items-center border-b border-[rgba(33,35,37,0.1)] py-5 lg:py-6 transition-colors hover:border-[rgba(33,35,37,0.6)]"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Title */}
              <span
                className={`text-subheading transition-opacity duration-500 lg:w-[40rem] ${
                  hoveredIdx !== null && hoveredIdx !== i ? "opacity-40" : "opacity-100"
                }`}
              >
                {project.title}
              </span>

              {/* Tags */}
              <div className="hidden lg:flex items-center gap-3 ml-8">
                <span
                  className={`text-label border border-[rgba(33,35,37,0.2)] rounded-full px-3 py-1 transition-opacity duration-500 ${
                    hoveredIdx !== null && hoveredIdx !== i ? "opacity-40" : "opacity-100"
                  }`}
                >
                  {project.type}
                </span>
                <span
                  className={`text-label border border-[rgba(33,35,37,0.2)] rounded-full px-3 py-1 transition-opacity duration-500 ${
                    hoveredIdx !== null && hoveredIdx !== i ? "opacity-40" : "opacity-100"
                  }`}
                >
                  {project.location}
                </span>
              </div>

              {/* Arrow */}
              <svg
                width="15"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                className={`ml-auto transition-opacity duration-500 ${
                  hoveredIdx !== null && hoveredIdx !== i ? "opacity-20" : "opacity-40 group-hover:opacity-100"
                }`}
              >
                <path d="M8.5 0.5L13 5.5L8.5 10.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M0 5.5H13" stroke="currentColor" strokeWidth="1.2" />
              </svg>

              {/* Hover image preview (desktop) */}
              {hoveredIdx === i && (
                <div className="hidden lg:block absolute left-[18.5rem] -top-8 w-[14.75rem] h-[18.5rem] overflow-hidden pointer-events-none z-10 animate-fade-in">
                  <Image
                    src={project.gallery[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-8">
          <Link
            href="/projects"
            className="text-label inline-flex items-center gap-3 text-fg-text-dark bg-fg-grey text-fg-white px-6 py-3 transition-opacity hover:opacity-80"
          >
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" className="-translate-y-px">
              <path d="M8.5 0.5L13 5.5L8.5 10.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M0 5.5H13" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
