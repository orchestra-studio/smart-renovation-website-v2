"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  label?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfter({
  beforeImage,
  afterImage,
  label = "Palm Jumeirah Villa Transformation",
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterProps) {
  const { ref, isVisible } = useScrollReveal();
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handleMouseDown = useCallback(() => setIsDragging(true), []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  return (
    <section ref={ref} className="relative bg-sr-dark py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-overline text-sr-gold mb-4">The Transformation</p>
          <h2 className="text-section-title text-sr-cream">
            Before & After
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <div
            ref={containerRef}
            className="relative aspect-[16/9] overflow-hidden rounded-2xl cursor-col-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After (full background) */}
            <Image
              src={afterImage}
              alt="After renovation"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />

            {/* Before (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src={beforeImage}
                alt="Before renovation"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 z-10 -ml-px w-0.5 bg-sr-cream"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-sr-cream bg-sr-dark/80 backdrop-blur-sm">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-sr-cream">
                  <path d="M6 10L2 10M2 10L5 7M2 10L5 13M14 10L18 10M18 10L15 7M18 10L15 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 z-10 rounded-full bg-sr-dark/70 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-sr-cream backdrop-blur-sm">
              {beforeLabel}
            </div>
            <div className="absolute top-4 right-4 z-10 rounded-full bg-sr-dark/70 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-sr-cream backdrop-blur-sm">
              {afterLabel}
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-sr-text-muted">{label}</p>
        </motion.div>
      </div>
    </section>
  );
}
