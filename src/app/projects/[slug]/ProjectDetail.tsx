"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Ruler, Palette } from "lucide-react";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { BeforeAfter } from "@/components/sections/BeforeAfter";

export function ProjectDetail({ project }: { project: Project }) {
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end">
        <Image
          src={project.gallery[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sr-dark via-sr-dark/40 to-sr-dark/20" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-16 pt-40 lg:px-8">
          <Link href="/projects" className="flex items-center gap-2 text-xs text-sr-text-muted transition-colors hover:text-sr-cream mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-wrap gap-3 text-xs text-sr-text-muted mb-4">
              <span className="rounded-full border border-sr-cream/20 px-3 py-1 text-sr-cream/80">{project.type}</span>
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{project.location}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{project.timeline}</span>
              <span className="flex items-center gap-1"><Palette className="h-3 w-3" />{project.style}</span>
            </div>
            <h1 className="text-display text-sr-cream max-w-3xl">{project.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-sr-dark py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-overline text-sr-gold mb-4">The Brief</p>
              <p className="text-lg leading-relaxed text-sr-text-secondary">{project.summary}</p>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-sr-cream mb-2">Challenge</h3>
                  <p className="text-sm leading-relaxed text-sr-text-muted">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-sr-cream mb-2">Solution</h3>
                  <p className="text-sm leading-relaxed text-sr-text-muted">{project.solution}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-overline text-sr-gold mb-4">Project Scope</p>
              <ul className="space-y-3">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-sr-text-secondary">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sr-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-sr-dark-border p-5">
                  <p className="text-xs text-sr-text-muted">Timeline</p>
                  <p className="mt-1 font-heading text-xl text-sr-cream">{project.timeline}</p>
                </div>
                <div className="rounded-xl border border-sr-dark-border p-5">
                  <p className="text-xs text-sr-text-muted">Budget Range</p>
                  <p className="mt-1 font-heading text-xl text-sr-cream">{project.budgetRange}</p>
                </div>
                <div className="rounded-xl border border-sr-dark-border p-5">
                  <p className="text-xs text-sr-text-muted">Completed</p>
                  <p className="mt-1 font-heading text-xl text-sr-cream">{project.completionYear}</p>
                </div>
                <div className="rounded-xl border border-sr-dark-border p-5">
                  <p className="text-xs text-sr-text-muted">Style</p>
                  <p className="mt-1 font-heading text-xl text-sr-cream">{project.style}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <BeforeAfter
        beforeImage={project.beforeImage}
        afterImage={project.afterImage}
        label={`${project.shortLabel} — ${project.location}`}
      />

      {/* Gallery */}
      <section className="bg-sr-dark py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-overline text-sr-gold mb-8">Gallery</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={img}
                  alt={`${project.title} - Image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sr-dark-surface py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-light text-sr-cream">
            Inspired by this transformation?
          </h2>
          <p className="mt-4 text-sr-text-secondary">Let&apos;s discuss how we can bring similar excellence to your space.</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-sr-gold px-10 py-4 text-sm font-semibold uppercase tracking-widest text-sr-dark transition-all hover:bg-sr-gold-hover hover:shadow-[0_0_40px_rgba(197,165,114,0.3)]"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Next Project */}
      <section className="bg-sr-dark">
        <Link href={`/projects/${nextProject.slug}`} className="group block">
          <div className="relative h-[40vh] overflow-hidden">
            <Image
              src={nextProject.gallery[0]}
              alt={nextProject.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-sr-dark/60 transition-colors group-hover:bg-sr-dark/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-overline text-sr-text-muted mb-2">Next Project</p>
              <h3 className="font-heading text-3xl font-light text-sr-cream">{nextProject.shortLabel}</h3>
              <p className="mt-2 text-sm text-sr-text-secondary">{nextProject.location}</p>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
