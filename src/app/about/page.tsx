import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { trustStats, aboutValues, leadershipTeam, companyMilestones, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Our Studio",
  description: "Learn about Smart Renovation — over 14 years of design-build excellence in Dubai.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-fg-grey text-fg-white pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="px-6 lg:px-10">
          <p className="section-title text-label-lg text-fg-text-secondary mb-6">About Us</p>
          <h1 className="text-hero max-w-[56rem]">
            One studio. Design, build, and deliver — with total accountability
          </h1>
          <div className="divider mt-12 lg:mt-16" />

          <div className="lg:grid lg:grid-cols-24 lg:gap-5 mt-6">
            <div className="lg:col-start-16 lg:col-span-9">
              <p className="text-body text-fg-text-secondary">
                {siteConfig.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Duo images */}
      <section className="bg-fg-grey text-fg-white pb-16 lg:pb-24">
        <div className="px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-24 gap-4 lg:gap-5">
          <div className="lg:col-start-1 lg:col-span-14 aspect-[16/10] relative overflow-hidden">
            <Image
              src="/images/projects/penthouse-20.jpg"
              alt="Smart Renovation studio"
              fill
              className="object-cover"
              sizes="60vw"
            />
          </div>
          <div className="lg:col-start-15 lg:col-span-10 aspect-[3/4] relative overflow-hidden">
            <Image
              src="/images/projects/penthouse-6.jpg"
              alt="Craftsmanship detail"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-fg-cream text-fg-text-dark py-20 lg:py-40">
        <div className="px-6 lg:px-10">
          <div className="border-t border-fg-border-light pt-4 lg:pt-5 mb-12 lg:mb-20">
            <p className="section-title text-label-lg text-fg-text-dark-secondary">Our Values</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">
            {aboutValues.map((value, i) => (
              <div key={i}>
                <p className="text-label text-fg-text-dark-secondary mb-3">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-subheading text-fg-text-dark mb-3">{value.title}</h3>
                <p className="text-body text-fg-text-dark-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-fg-grey text-fg-white py-20 lg:py-32">
        <div className="px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-hero text-fg-white mb-2">
                  {stat.decimals ? stat.value.toFixed(stat.decimals) : stat.value}
                  <span className="text-fg-text-muted">{stat.suffix}</span>
                </p>
                <p className="text-label text-fg-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-fg-cream text-fg-text-dark py-20 lg:py-40">
        <div className="px-6 lg:px-10">
          <div className="border-t border-fg-border-light pt-4 lg:pt-5 mb-12 lg:mb-20">
            <p className="section-title text-label-lg text-fg-text-dark-secondary">Leadership</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {leadershipTeam.map((person) => (
              <div key={person.name} className="border-t border-fg-border-light pt-6">
                <h3 className="text-subheading text-fg-text-dark">{person.name}</h3>
                <p className="text-label text-fg-text-dark-secondary mt-1 mb-4">{person.title}</p>
                <p className="text-body text-fg-text-dark-secondary">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-fg-grey text-fg-white py-20 lg:py-40">
        <div className="px-6 lg:px-10">
          <div className="border-t border-fg-border pt-4 lg:pt-5 mb-12 lg:mb-20">
            <p className="section-title text-label-lg text-fg-text-secondary">Milestones</p>
          </div>

          <div className="space-y-6">
            {companyMilestones.map((milestone) => (
              <div key={milestone.year} className="flex items-baseline gap-8 border-b border-fg-border pb-6">
                <span className="text-label text-fg-text-muted w-16 flex-shrink-0">{milestone.year}</span>
                <span className="text-body text-fg-text-secondary">{milestone.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-fg-cream text-fg-text-dark py-20 lg:py-32">
        <div className="px-6 lg:px-10">
          <h2 className="text-heading text-fg-text-dark max-w-[44rem] mb-8">
            Ready to start your project?
          </h2>
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
      </section>
    </>
  );
}
