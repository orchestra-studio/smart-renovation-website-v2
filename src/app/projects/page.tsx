import type { Metadata } from "next";
import { ProjectsGrid } from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects — Selected Work",
  description: "Explore our portfolio of premium villa, apartment, and office renovations across Dubai.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero header */}
      <section className="bg-fg-grey text-fg-white pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="px-6 lg:px-10">
          <p className="section-title text-label-lg text-fg-text-secondary mb-6">Selected Projects</p>
          <h1 className="text-hero max-w-[50rem]">
            Every project tells the story of a space transformed
          </h1>
          <div className="divider mt-12 lg:mt-16" />
        </div>
      </section>

      <ProjectsGrid />
    </>
  );
}
