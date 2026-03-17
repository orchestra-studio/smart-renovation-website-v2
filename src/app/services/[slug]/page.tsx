import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: { images: [{ url: service.heroImage }] },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = projects.filter((p) =>
    p.relatedServiceSlugs.includes(service.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end">
        <Image src={service.heroImage} alt={service.name} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-sr-dark via-sr-dark/50 to-sr-dark/20" />
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pb-16 pt-40 lg:px-8">
          <Link href="/services" className="flex items-center gap-2 text-xs text-sr-text-muted hover:text-sr-cream mb-8">
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <span className="text-4xl mb-4 block">{service.icon}</span>
          <h1 className="text-display text-sr-cream max-w-3xl">{service.heroTitle}</h1>
          <p className="mt-6 max-w-xl text-lg text-sr-text-secondary">{service.intro}</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-sr-dark py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-overline text-sr-gold mb-4">About This Service</p>
              <p className="text-lg leading-relaxed text-sr-text-secondary">{service.description}</p>
              <h3 className="mt-10 text-sm font-medium uppercase tracking-wider text-sr-cream mb-4">Key Outcomes</h3>
              <ul className="space-y-3">
                {service.keyOutcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-sm text-sr-text-secondary">
                    <Check className="h-4 w-4 shrink-0 text-sr-gold mt-0.5" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-overline text-sr-gold mb-4">Our Process</p>
              <div className="space-y-6">
                {service.process.map((step, i) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sr-dark-border text-sm font-medium text-sr-gold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-sr-cream">{step.title}</h4>
                      <p className="mt-1 text-sm text-sr-text-muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-sr-dark-surface py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="text-overline text-sr-gold mb-4">Related Projects</p>
            <h2 className="font-heading text-2xl font-light text-sr-cream mb-10">
              See This Service in Action
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.slice(0, 3).map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-xl border border-sr-dark-border transition-all hover:border-sr-gold/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.gallery[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg text-sr-cream">{project.shortLabel}</h3>
                    <p className="mt-1 text-xs text-sr-text-muted">{project.location} · {project.timeline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-sr-dark py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-light text-sr-cream">
            Ready to start your {service.name.toLowerCase()} project?
          </h2>
          <p className="mt-4 text-sr-text-secondary">
            Book a free consultation to discuss your vision with our expert team.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-sr-gold px-10 py-4 text-sm font-semibold uppercase tracking-widest text-sr-dark transition-all hover:bg-sr-gold-hover"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
