"use client";

import { processSteps } from "@/data/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Process() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="bg-fg-grey text-fg-white py-20 lg:py-40 relative overflow-hidden">
      {/* Sticky showroom-style section — dark background */}
      <div className="px-6 lg:px-10">
        {/* Top border + label */}
        <div className="border-t border-fg-border pt-4 lg:pt-5">
          <p className="section-title text-label-lg text-fg-text-secondary">How We Work</p>
        </div>

        {/* Two-column layout */}
        <div className="lg:flex lg:justify-between lg:items-start mt-8 lg:mt-16">
          {/* Left column */}
          <div className="lg:w-[45rem] mb-12 lg:mb-0">
            <h2
              className={`text-heading text-fg-white transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              One team. One process.
              <br />
              Total accountability.
            </h2>
          </div>

          {/* Right column — address style like fluid.glass showroom */}
          <div className="lg:text-right">
            <p className="text-label text-fg-text-secondary mb-2">Timeline</p>
            <p className="text-body text-fg-text-secondary">
              Discovery to handover<br />
              8–12 months typical villa<br />
              7–14 weeks partial scope
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-16 lg:my-24" />

        {/* Process steps */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-10">
          {processSteps.map((step, i) => (
            <div
              key={step.step}
              className={`mb-10 lg:mb-0 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Step number */}
              <p className="text-label text-fg-text-muted mb-3">{step.step}</p>

              {/* Title */}
              <h3 className="text-subheading text-fg-white mb-3">{step.title}</h3>

              {/* Description */}
              <p className="text-body text-fg-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background video area like fluid.glass showroom */}
      <div className="relative mt-20 lg:mt-32 mx-6 lg:mx-10 aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-fg-surface" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url(/images/projects/penthouse-20.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <p className="text-label text-fg-text-muted mb-4">Design-Build Studio</p>
            <p className="text-subheading text-fg-white max-w-lg mx-auto">
              Visit our Dubai studio to explore materials, review your project, and meet the team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
