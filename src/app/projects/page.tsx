import type { Metadata } from "next";
import { ProjectsGrid } from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects — Our Portfolio",
  description: "Explore Smart Renovation's portfolio of luxury residential and commercial renovation projects across Dubai.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-sr-dark pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-overline text-sr-gold mb-4">Our Portfolio</p>
          <h1 className="text-display text-sr-cream max-w-3xl">
            Transformations That
            <br />
            <span className="text-gradient-gold">Define Luxury</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-sr-text-secondary">
            Every project is a testament to precision, vision, and unwavering commitment to excellence.
          </p>
        </div>
      </section>
      <ProjectsGrid />
    </>
  );
}
