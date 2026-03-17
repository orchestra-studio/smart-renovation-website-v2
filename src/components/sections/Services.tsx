"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Services() {
  const { ref, isVisible } = useScrollReveal(0.1);

  // Take first 4 services for the grid
  const featured = services.slice(0, 4);

  return (
    <section ref={ref} className="bg-fg-cream text-fg-text-dark py-20 lg:py-40">
      <div className="px-6 lg:px-10">
        {/* Header with border */}
        <div className="border-t border-fg-border-light pt-4 lg:pt-5">
          <p className="section-title text-label-lg text-fg-text-dark-secondary">Our Services</p>
        </div>

        {/* Content row */}
        <div className="lg:grid lg:grid-cols-24 lg:gap-5 mt-4 lg:mt-0">
          {/* Heading */}
          <div className="lg:col-span-14">
            <h2
              className={`text-heading text-fg-text-dark mt-6 lg:mt-10 mb-8 lg:mb-16 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Comprehensive design-build expertise for every space in your home
            </h2>
          </div>

          {/* Description */}
          <div className="lg:col-start-16 lg:col-span-9 lg:pt-10">
            <p className="text-body text-fg-text-dark-secondary mb-10 lg:mb-16">
              From full villa renovations to bespoke kitchens and commercial fit-outs,
              we deliver integrated design, construction management, and quality craftsmanship.
            </p>
            <Link
              href="/services"
              className="text-label inline-flex items-center gap-3 text-fg-text-dark bg-fg-black text-fg-white px-6 py-3 transition-opacity hover:opacity-80"
            >
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none" className="-translate-y-px">
                <path d="M8.5 0.5L13 5.5L8.5 10.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M0 5.5H13" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              View All Services
            </Link>
          </div>
        </div>

        {/* Service grid — fluid.glass staggered layout */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-24 gap-4 lg:gap-5 mt-16 lg:mt-20 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {featured.map((service, i) => {
            const colStarts = [
              "lg:col-start-8 lg:col-span-7",
              "lg:col-start-18 lg:col-span-6 lg:mt-72",
              "lg:col-start-1 lg:col-span-6 lg:mt-8",
              "lg:col-start-12 lg:col-span-5 lg:-mt-44",
            ];

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group relative aspect-[500/617] overflow-hidden flex items-center justify-center ${
                  colStarts[i] || ""
                } ${i === 1 ? "mt-16 lg:mt-72" : ""} ${i === 2 ? "-mt-16 lg:mt-8" : ""}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <Image
                  src={service.heroImage}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Title overlay */}
                <span className="relative z-10 text-subheading text-fg-white text-center px-4 drop-shadow-lg">
                  {service.name}
                </span>
                {/* Darken on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
