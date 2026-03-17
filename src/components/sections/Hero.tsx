"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, trustStats } from "@/data/site";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] text-fg-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-fg-grey">
        <Image
          src="/images/projects/penthouse-1.jpg"
          alt="Luxury interior by Smart Renovation"
          fill
          priority
          className={`object-cover object-center transition-all duration-[2s] ease-out ${
            loaded ? "opacity-80 scale-100" : "opacity-0 scale-105"
          }`}
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.5)] opacity-50 pointer-events-none z-[1]" />
      </div>

      {/* Content */}
      <div className="relative z-[2] px-6 lg:px-10">
        {/* Main hero text — centered at bottom like fluid.glass */}
        <div className="min-h-[100svh] flex flex-col items-center justify-end pb-24 lg:pb-32">
          {/* Heading */}
          <h1
            className={`text-hero text-center max-w-[64rem] transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Award-winning design-build studio for premium renovations in Dubai
          </h1>

          {/* Scroll indicator */}
          <p
            className={`text-label text-fg-text-muted mt-10 lg:hidden transition-all duration-700 delay-700 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          >
            Scroll to explore
          </p>
        </div>

        {/* Info row below fold — fluid.glass style with border top */}
        <div className="border-t border-fg-border pt-4 lg:pt-5 pb-12 lg:pb-52">
          <div className="lg:grid lg:grid-cols-24 lg:gap-5">
            {/* Section label */}
            <div className="lg:col-span-10">
              <p
                className={`section-title text-label-lg text-fg-text-secondary mb-4 lg:mb-0 transition-all duration-700 delay-500 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                The Fashion House of Renovation
              </p>
            </div>

            {/* Description text */}
            <div className="lg:col-start-20 lg:col-span-5">
              <p
                className={`text-body text-fg-text-secondary leading-relaxed transition-all duration-700 delay-600 ${
                  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {siteConfig.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
