import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { processSteps } from "@/data/site";

export const metadata: Metadata = {
  title: "Services — Design-Build Excellence",
  description: "Comprehensive renovation services in Dubai: villa renovation, apartment fit-out, kitchen and bathroom redesign, landscape, and commercial office fit-out.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-sr-dark pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-overline text-sr-gold mb-4">Our Services</p>
          <h1 className="text-display text-sr-cream max-w-3xl">
            Crafted for
            <br />
            <span className="text-gradient-gold">Every Space</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-sr-text-secondary">
            From intimate kitchen redesigns to comprehensive villa transformations,
            our design-build approach delivers certainty at every scale.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-sr-dark pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-sr-dark-border bg-sr-dark-surface transition-all duration-500 hover:border-sr-gold/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sr-dark via-sr-dark/40 to-transparent" />
                </div>
                <div className="relative -mt-14 px-6 pb-8 z-10">
                  <span className="text-3xl">{service.icon}</span>
                  <h2 className="mt-3 font-heading text-2xl font-light text-sr-cream">{service.name}</h2>
                  <p className="mt-2 text-sm text-sr-text-muted leading-relaxed">{service.teaser}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-sr-gold transition-all duration-300 group-hover:gap-3">
                    Learn More <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-sr-dark-surface py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-overline text-sr-gold mb-4">Our Process</p>
            <h2 className="text-section-title text-sr-cream">
              How We Deliver Excellence
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-2xl border border-sr-dark-border bg-sr-dark p-8">
                <span className="font-heading text-5xl font-light text-sr-gold/20">{step.step}</span>
                <h3 className="mt-4 font-heading text-xl font-light text-sr-cream">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sr-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sr-dark py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-light text-sr-cream">
            Ready to discuss your project?
          </h2>
          <p className="mt-4 text-sr-text-secondary">
            Book a free consultation and let&apos;s explore what&apos;s possible.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-sr-gold px-10 py-4 text-sm font-semibold uppercase tracking-widest text-sr-dark transition-all hover:bg-sr-gold-hover"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
