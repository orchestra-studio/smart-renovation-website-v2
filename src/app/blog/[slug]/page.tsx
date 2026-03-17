import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { articles, getArticleBySlug } from "@/data/articles";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.metaDescription,
    openGraph: { images: [{ url: article.coverImage }] },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end">
        <Image src={article.coverImage} alt={article.title} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-sr-dark via-sr-dark/60 to-sr-dark/30" />
        <div className="relative z-10 mx-auto max-w-4xl w-full px-6 pb-16 pt-40 lg:px-8">
          <Link href="/blog" className="flex items-center gap-2 text-xs text-sr-text-muted hover:text-sr-cream mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className="rounded-full border border-sr-gold/30 px-3 py-1 text-xs text-sr-gold">{article.category}</span>
          <h1 className="mt-4 text-display text-sr-cream">{article.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-sr-text-muted">
            <span className="flex items-center gap-1"><User className="h-3 w-3" />{article.author.name}</span>
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-sr-dark py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <p className="text-lg leading-relaxed text-sr-text-secondary">
            {article.excerpt}
          </p>
          <div className="luxury-divider my-12" />
          <p className="text-base leading-relaxed text-sr-text-muted">
            This is a preview of the full article. Contact us to learn more about {article.title.toLowerCase()}.
          </p>
          <div className="mt-12 rounded-2xl border border-sr-dark-border bg-sr-dark-surface p-8 text-center">
            <h3 className="font-heading text-xl text-sr-cream">Want expert guidance?</h3>
            <p className="mt-2 text-sm text-sr-text-muted">
              Schedule a free consultation to discuss your project with our team.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-sr-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-sr-dark transition-all hover:bg-sr-gold-hover"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {otherArticles.length > 0 && (
        <section className="bg-sr-dark-surface py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-light text-sr-cream mb-10">More Insights</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {otherArticles.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="group block overflow-hidden rounded-xl border border-sr-dark-border transition-all hover:border-sr-gold/30">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={a.coverImage} alt={a.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="33vw" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-sr-gold">{a.category}</p>
                    <h3 className="mt-1 font-heading text-base text-sr-cream line-clamp-2">{a.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
