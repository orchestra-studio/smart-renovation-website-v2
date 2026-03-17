import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Blog — Renovation Insights",
  description: "Expert insights on luxury renovation in Dubai. Design trends, renovation guides, and practical advice from Smart Renovation's team.",
};

export default function BlogPage() {
  const featured = articles.filter((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-sr-dark pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-overline text-sr-gold mb-4">Insights</p>
          <h1 className="text-display text-sr-cream max-w-3xl">
            Renovation
            <br />
            <span className="text-gradient-gold">Intelligence</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-sr-text-secondary">
            Expert perspectives on design, renovation strategy, and luxury living in Dubai.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="bg-sr-dark pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {featured.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-sr-dark-border transition-all duration-500 hover:border-sr-gold/30"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sr-dark/80 to-transparent" />
                  </div>
                  <div className="relative -mt-20 p-6 z-10">
                    <div className="flex items-center gap-3 text-xs text-sr-text-muted">
                      <span className="rounded-full border border-sr-cream/20 px-2.5 py-0.5 text-sr-gold">{article.category}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h2 className="mt-3 font-heading text-2xl font-light text-sr-cream">{article.title}</h2>
                    <p className="mt-2 text-sm text-sr-text-muted line-clamp-2">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="bg-sr-dark pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="luxury-divider mb-12" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block overflow-hidden rounded-xl border border-sr-dark-border transition-all duration-500 hover:border-sr-gold/30"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-sr-text-muted">
                    <span className="text-sr-gold">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mt-2 font-heading text-lg text-sr-cream">{article.title}</h3>
                  <p className="mt-1 text-xs text-sr-text-muted line-clamp-2">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
