import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Journal — Renovation Insights",
  description: "Expert guides, design trends, and renovation insights from the Smart Renovation team.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-fg-grey text-fg-white pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="px-6 lg:px-10">
          <p className="section-title text-label-lg text-fg-text-secondary mb-6">Journal</p>
          <h1 className="text-hero max-w-[50rem]">
            Insights on design, renovation, and premium living in Dubai
          </h1>
          <div className="divider mt-12 lg:mt-16" />
        </div>
      </section>

      {/* Articles */}
      <section className="bg-fg-cream text-fg-text-dark py-10 lg:py-16">
        <div className="px-6 lg:px-10">
          {/* Featured */}
          {articles.filter(a => a.featured).slice(0, 1).map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block lg:grid lg:grid-cols-24 lg:gap-5 mb-12 lg:mb-20 pb-12 lg:pb-20 border-b border-fg-border-light"
            >
              <div className="lg:col-span-14 aspect-[16/10] relative overflow-hidden mb-6 lg:mb-0">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="60vw"
                />
              </div>
              <div className="lg:col-start-16 lg:col-span-9 flex flex-col justify-center">
                <p className="text-label text-fg-text-dark-secondary mb-3">
                  {article.category} · {article.readTime}
                </p>
                <h2 className="text-heading text-fg-text-dark group-hover:opacity-70 transition-opacity mb-4">
                  {article.title}
                </h2>
                <p className="text-body text-fg-text-dark-secondary">{article.excerpt}</p>
              </div>
            </Link>
          ))}

          {/* All articles */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {articles.filter(a => !a.featured).concat(articles.filter(a => a.featured).slice(1)).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group"
              >
                <div className="aspect-[16/10] relative overflow-hidden mb-4">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="33vw"
                  />
                </div>
                <p className="text-label text-fg-text-dark-secondary mb-2">
                  {article.category} · {article.readTime}
                </p>
                <h3 className="text-subheading text-fg-text-dark group-hover:opacity-70 transition-opacity">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
