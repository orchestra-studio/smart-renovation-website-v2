import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Design-Build Expertise",
  description: "Comprehensive renovation services across Dubai — villas, apartments, kitchens, bathrooms, landscaping, and commercial fit-outs.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-fg-grey text-fg-white pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="px-6 lg:px-10">
          <p className="section-title text-label-lg text-fg-text-secondary mb-6">Our Services</p>
          <h1 className="text-hero max-w-[56rem]">
            Integrated design-build expertise for every kind of space
          </h1>
          <div className="divider mt-12 lg:mt-16" />

          {/* Intro */}
          <div className="lg:grid lg:grid-cols-24 lg:gap-5 mt-6">
            <div className="lg:col-start-16 lg:col-span-9">
              <p className="text-body text-fg-text-secondary">
                Each service is backed by the same disciplined process: discovery, design, build, deliver. One team, full accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service list */}
      <section className="bg-fg-cream text-fg-text-dark py-10 lg:py-16">
        <div className="px-6 lg:px-10">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block border-b border-[rgba(33,35,37,0.1)] py-8 lg:py-12 lg:grid lg:grid-cols-24 lg:gap-5 items-start hover:border-[rgba(33,35,37,0.6)] transition-colors"
            >
              {/* Number */}
              <div className="lg:col-span-2">
                <p className="text-label text-[rgba(33,35,37,0.4)]">{String(i + 1).padStart(2, "0")}</p>
              </div>

              {/* Title + teaser */}
              <div className="lg:col-span-10 mt-2 lg:mt-0">
                <h2 className="text-subheading text-fg-text-dark group-hover:opacity-70 transition-opacity">
                  {service.name}
                </h2>
                <p className="text-body text-fg-text-dark-secondary mt-2">{service.teaser}</p>
              </div>

              {/* Image preview */}
              <div className="lg:col-start-15 lg:col-span-8 mt-4 lg:mt-0">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 35vw"
                  />
                </div>
              </div>

              {/* Arrow */}
              <div className="lg:col-start-24 lg:col-span-1 flex items-center justify-end mt-4 lg:mt-0">
                <svg width="15" height="11" viewBox="0 0 14 11" fill="none" className="opacity-30 group-hover:opacity-100 transition-opacity">
                  <path d="M8.5 0.5L13 5.5L8.5 10.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M0 5.5H13" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
