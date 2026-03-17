import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { aboutValues, leadershipTeam, companyMilestones, processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Our Story",
  description: "Smart Renovation is Dubai's premier design-build studio. European design sensibility meets meticulous craftsmanship in every project.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-sr-dark pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-overline text-sr-gold mb-4">Our Story</p>
              <h1 className="text-display text-sr-cream">
                The Fashion House
                <br />
                <span className="text-gradient-gold">of Renovation</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-sr-text-secondary">
                Founded in 2012, Smart Renovation brings European design sensibility and meticulous
                craftsmanship to Dubai&apos;s most discerning homeowners and businesses.
              </p>
              <p className="mt-4 text-base leading-relaxed text-sr-text-muted">
                Our integrated design-build approach means one team owns your project from concept
                to completion. No fragmented contractors. No communication gaps. Just exceptional spaces
                delivered with certainty.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/projects/penthouse-18.jpg"
                alt="Smart Renovation team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sr-dark-surface py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-overline text-sr-gold mb-4">What Drives Us</p>
            <h2 className="text-section-title text-sr-cream">Our Values</h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {aboutValues.map((value) => (
              <div key={value.title} className="rounded-2xl border border-sr-dark-border bg-sr-dark p-8 transition-all duration-500 hover:border-sr-gold/30">
                <h3 className="font-heading text-xl font-light text-sr-cream">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sr-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-sr-dark py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-overline text-sr-gold mb-4">Leadership</p>
            <h2 className="text-section-title text-sr-cream">Our Team</h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {leadershipTeam.map((member) => (
              <div key={member.name} className="rounded-2xl border border-sr-dark-border bg-sr-dark-surface p-8 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sr-dark-border text-2xl font-heading text-sr-cream">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-6 font-heading text-xl font-light text-sr-cream">{member.name}</h3>
                <p className="mt-1 text-xs text-sr-gold">{member.title}</p>
                <p className="mt-3 text-sm text-sr-text-muted">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-sr-dark-surface py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-overline text-sr-gold mb-4">Our Journey</p>
            <h2 className="text-section-title text-sr-cream">Milestones</h2>
          </div>
          <div className="mt-16 space-y-0">
            {companyMilestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 pb-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sr-gold/30 bg-sr-dark text-sm font-heading text-sr-gold">
                    {m.year}
                  </div>
                  {i < companyMilestones.length - 1 && (
                    <div className="w-px flex-1 bg-sr-dark-border mt-2" />
                  )}
                </div>
                <p className="pt-3 text-sm text-sr-text-secondary">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-sr-dark py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-overline text-sr-gold mb-4">How We Work</p>
            <h2 className="text-section-title text-sr-cream">Our Process</h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-2xl border border-sr-dark-border bg-sr-dark-surface p-8">
                <span className="font-heading text-5xl font-light text-sr-gold/20">{step.step}</span>
                <h3 className="mt-4 font-heading text-xl font-light text-sr-cream">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sr-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sr-dark-surface py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-light text-sr-cream">
            Let&apos;s Build Something Extraordinary
          </h2>
          <p className="mt-4 text-sr-text-secondary">
            Schedule a free consultation and experience the Smart Renovation difference.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-sr-gold px-10 py-4 text-sm font-semibold uppercase tracking-widest text-sr-dark transition-all hover:bg-sr-gold-hover"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
