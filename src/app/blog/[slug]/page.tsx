import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/data/articles";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.seoTitle, description: article.metaDescription };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60svh] bg-fg-grey text-fg-white overflow-hidden">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.7)]" />

        <div className="relative z-10 px-6 lg:px-10 min-h-[60svh] flex flex-col justify-end pb-16 lg:pb-24">
          <p className="text-label text-fg-text-secondary mb-4">
            {article.category} · {article.readTime}
          </p>
          <h1 className="text-hero max-w-[50rem]">{article.title}</h1>
        </div>
      </section>

      {/* Article content */}
      <section className="bg-fg-cream text-fg-text-dark py-16 lg:py-24">
        <div className="px-6 lg:px-10 lg:grid lg:grid-cols-24 lg:gap-5">
          {/* Author sidebar */}
          <div className="lg:col-span-6 mb-8 lg:mb-0">
            <div className="border-t border-fg-border-light pt-6">
              <p className="text-label text-fg-text-dark-secondary mb-2">Written by</p>
              <p className="text-body text-fg-text-dark font-medium">{article.author.name}</p>
              <p className="text-label text-fg-text-dark-secondary mt-1">{article.author.role}</p>

              <p className="text-label text-fg-text-dark-secondary mt-6 mb-2">Published</p>
              <p className="text-body text-fg-text-dark">
                {new Date(article.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-start-9 lg:col-span-14">
            <div className="border-t border-fg-border-light pt-8">
              <p className="text-body text-fg-text-dark leading-relaxed text-lg lg:text-xl mb-8">
                {article.excerpt}
              </p>

              {/* Placeholder paragraphs — in production, this would come from CMS */}
              <div className="space-y-6">
                <p className="text-body text-fg-text-dark-secondary leading-relaxed">
                  This article provides comprehensive insights into modern renovation practices in Dubai.
                  Whether you&apos;re planning a villa transformation or a targeted kitchen upgrade, understanding
                  the fundamentals of design-build delivery ensures better outcomes, fewer surprises, and
                  greater satisfaction with the finished result.
                </p>
                <p className="text-body text-fg-text-dark-secondary leading-relaxed">
                  The Dubai renovation market demands specific expertise — from municipality compliance and
                  building management coordination to climate-appropriate material selection and international
                  quality benchmarks. A disciplined process, transparent communication, and experienced project
                  management are non-negotiable.
                </p>
                <p className="text-body text-fg-text-dark-secondary leading-relaxed">
                  At Smart Renovation, every project follows the same four-phase structure: Discovery, Design,
                  Build, and Deliver. This consistency ensures that regardless of project scale or complexity,
                  clients receive the same level of attention, accountability, and craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="px-6 lg:px-10 mt-20 lg:mt-32">
            <div className="border-t border-fg-border-light pt-6 mb-10">
              <p className="section-title text-label-lg text-fg-text-dark-secondary">Related Articles</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {related.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="group">
                  <div className="aspect-[16/10] relative overflow-hidden mb-4">
                    <Image
                      src={a.coverImage}
                      alt={a.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="50vw"
                    />
                  </div>
                  <p className="text-label text-fg-text-dark-secondary mb-2">{a.category} · {a.readTime}</p>
                  <h3 className="text-subheading text-fg-text-dark group-hover:opacity-70 transition-opacity">
                    {a.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
