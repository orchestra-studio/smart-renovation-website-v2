"use client";

import Image from "next/image";
import Link from "next/link";
import { trustStats } from "@/data/site";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="bg-fg-grey text-fg-white py-20 lg:py-40">
      <div className="px-6 lg:px-10">
        {/* Header */}
        <div className="border-t border-fg-border pt-4 lg:pt-5">
          <p className="section-title text-label-lg text-fg-text-secondary">About Smart Renovation</p>
        </div>

        {/* Heading + description */}
        <div className="lg:grid lg:grid-cols-24 lg:gap-5 mt-6 lg:mt-10">
          <div className="lg:col-span-14">
            <h2
              className={`text-heading transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Over fourteen years delivering design-build excellence across Dubai
            </h2>
          </div>
        </div>

        {/* Duo images — fluid.glass style */}
        <div className="grid grid-cols-2 lg:grid-cols-24 gap-4 lg:gap-5 mt-12 lg:mt-20">
          <div className="lg:col-start-3 lg:col-span-12 aspect-[4/3] relative overflow-hidden">
            <Image
              src="/images/projects/penthouse-15.jpg"
              alt="Smart Renovation Dubai studio"
              fill
              className={`object-cover transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              sizes="(max-width: 768px) 50vw, 50vw"
            />
          </div>
          <div className="lg:col-start-15 lg:col-span-8 aspect-[3/4] relative overflow-hidden">
            <Image
              src="/images/projects/penthouse-18.jpg"
              alt="Renovation craftsmanship"
              fill
              className={`object-cover transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
              sizes="(max-width: 768px) 50vw, 35vw"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mt-16 lg:mt-24 border-t border-fg-border pt-8">
          {trustStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="text-hero text-fg-white mb-2">
                {stat.decimals ? stat.value.toFixed(stat.decimals) : stat.value}
                <span className="text-fg-text-muted">{stat.suffix}</span>
              </p>
              <p className="text-label text-fg-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/about"
            className="text-label glass-button px-6 py-3 text-fg-white transition-opacity hover:opacity-80 inline-flex items-center gap-3"
          >
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" className="-translate-y-px">
              <path d="M8.5 0.5L13 5.5L8.5 10.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M0 5.5H13" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            Learn About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
