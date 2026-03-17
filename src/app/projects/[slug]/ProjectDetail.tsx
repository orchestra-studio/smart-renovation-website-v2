"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const related = projects.filter((p) => p.slug !== project.slug && p.type === project.type).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80svh] bg-fg-grey text-fg-white overflow-hidden">
        <Image
          src={project.gallery[0]}
          alt={project.title}
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]" />

        <div className="relative z-10 px-6 lg:px-10 min-h-[80svh] flex flex-col justify-end pb-16 lg:pb-24">
          <p className="text-label text-fg-text-secondary mb-4">
            {project.location} — {project.type}
          </p>
          <h1 className="text-hero max-w-[50rem]">{project.title}</h1>
        </div>
      </section>

      {/* Details */}
      <section className="bg-fg-cream text-fg-text-dark py-16 lg:py-24">
        <div className="px-6 lg:px-10">
          {/* Info row */}
          <div className="border-t border-fg-border-light pt-6 lg:grid lg:grid-cols-24 lg:gap-5 mb-16 lg:mb-24">
            <div className="lg:col-span-8">
              <p className="text-label text-fg-text-dark-secondary mb-2">Style</p>
              <p className="text-body text-fg-text-dark mb-6">{project.style}</p>

              <p className="text-label text-fg-text-dark-secondary mb-2">Investment</p>
              <p className="text-body text-fg-text-dark mb-6">{project.budgetRange}</p>

              <p className="text-label text-fg-text-dark-secondary mb-2">Timeline</p>
              <p className="text-body text-fg-text-dark">{project.timeline}</p>
            </div>

            <div className="lg:col-start-11 lg:col-span-14 mt-8 lg:mt-0">
              <p className="text-body text-fg-text-dark leading-relaxed text-lg lg:text-xl mb-8">
                {project.summary}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-label text-fg-text-dark-secondary mb-3">Challenge</p>
                  <p className="text-body text-fg-text-dark-secondary">{project.challenge}</p>
                </div>
                <div>
                  <p className="text-label text-fg-text-dark-secondary mb-3">Solution</p>
                  <p className="text-body text-fg-text-dark-secondary">{project.solution}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scope */}
          <div className="mb-16 lg:mb-24">
            <p className="text-label text-fg-text-dark-secondary mb-6">Scope of Work</p>
            <div className="flex flex-wrap gap-3">
              {project.scope.map((item) => (
                <span
                  key={item}
                  className="text-label border border-fg-border-light px-5 py-2.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-24 gap-4 lg:gap-5 mb-16 lg:mb-24">
            {project.gallery.map((src, i) => {
              const spans = [
                "lg:col-start-1 lg:col-span-14",
                "lg:col-start-15 lg:col-span-10",
                "lg:col-start-5 lg:col-span-16",
              ];
              return (
                <div
                  key={i}
                  className={`aspect-[16/10] relative overflow-hidden ${spans[i % spans.length]}`}
                >
                  <Image
                    src={src}
                    alt={`${project.title} view ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
              );
            })}
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div>
              <div className="border-t border-fg-border-light pt-6 mb-10">
                <p className="section-title text-label-lg text-fg-text-dark-secondary">Related Projects</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {related.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
                    <div className="aspect-[16/10] relative overflow-hidden mb-4">
                      <Image
                        src={p.gallery[0]}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="50vw"
                      />
                    </div>
                    <h3 className="text-subheading text-fg-text-dark group-hover:opacity-70 transition-opacity">
                      {p.title}
                    </h3>
                    <p className="text-label text-fg-text-dark-secondary mt-1">{p.location}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="border-t border-fg-border-light mt-16 lg:mt-24 pt-10">
            <h2 className="text-heading text-fg-text-dark mb-6">Start your project</h2>
            <Link
              href="/contact"
              className="text-label bg-fg-grey text-fg-white px-6 py-3 inline-flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none" className="-translate-y-px">
                <path d="M8.5 0.5L13 5.5L8.5 10.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M0 5.5H13" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
