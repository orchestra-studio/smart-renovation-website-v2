import type { Metadata } from "next";
import { LeadForm } from "@/components/sections/LeadForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Request a Consultation",
  description: "Start your renovation project with Smart Renovation Dubai. Request a consultation and our team will respond within 15 minutes.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-fg-grey text-fg-white pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="px-6 lg:px-10">
          <p className="section-title text-label-lg text-fg-text-secondary mb-6">Get in Touch</p>
          <h1 className="text-hero max-w-[56rem]">
            Let&apos;s discuss your renovation project
          </h1>
          <div className="divider mt-12 lg:mt-16" />

          {/* Contact info */}
          <div className="lg:grid lg:grid-cols-24 lg:gap-5 mt-8">
            <div className="lg:col-span-8">
              <p className="text-label text-fg-text-secondary mb-2">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="text-body text-fg-white hover-underline pb-0.5 inline-block">
                {siteConfig.email}
              </a>
            </div>
            <div className="lg:col-start-10 lg:col-span-8 mt-6 lg:mt-0">
              <p className="text-label text-fg-text-secondary mb-2">Phone</p>
              <a href={`tel:${siteConfig.phoneRaw}`} className="text-body text-fg-white hover-underline pb-0.5 inline-block">
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <div className="lg:col-start-19 lg:col-span-6 mt-6 lg:mt-0">
              <p className="text-label text-fg-text-secondary mb-2">Studio</p>
              <p className="text-body text-fg-text-secondary">
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.country}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <LeadForm />
    </>
  );
}
