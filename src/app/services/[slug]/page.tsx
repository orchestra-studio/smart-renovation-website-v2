import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { services, getServiceBySlug } from "@/data/services";
import { projects } from "@/data/projects";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.seoTitle, description: service.seoDescription };
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = projects.filter((p) => service.relatedProjectSlugs.includes(p.slug));

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70svh] bg-fg-grey text-fg-white overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.name}
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]" />

        <div className="relative z-10 px-6 lg:px-10 min-h-[70svh] flex flex-col justify-end pb-16 lg:pb-24">
          <p className="text-label text-fg-text-secondary mb-4">Service</p>
          <h1 className="text-hero max-w-[50rem]">{service.heroTitle}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-fg-cream text-fg-text-dark py-16 lg:py-24">
        <div className="px-6 lg:px-10">
          {/* Intro */}
          <div className="border-t border-fg-border-light pt-6 lg:grid lg:grid-cols-24 lg:gap-5 mb-16 lg:mb-24">
            <div className="lg:col-span-10">
              <p className="text-body text-fg-text-dark leading-relaxed text-lg lg:text-xl">
                {service.intro}
              </p>
            </div>
            <div className="lg:col-start-14 lg:col-span-11 mt-6 lg:mt-0">
              <p className="text-body text-fg-text-dark-secondary">{service.description}</p>
            </div>
          </div>

          {/* Key outcomes */}
          <div className="mb-16 lg:mb-24">
            <p className="text-label text-fg-text-dark-secondary mb-6">Key Outcomes</p>
            <div className="flex flex-wrap gap-3">
              {service.keyOutcomes.map((outcome) => (
                <span key={outcome} className="text-label border border-fg-border-light px-5 py-2.5">
                  {outcome}
                </span>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="border-t border-fg-border-light pt-6 mb-16 lg:mb-24">
            <p className="section-title text-label-lg text-fg-text-dark-secondary mb-10">Process</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">
              {service.process.map((step, i) => (
                <div key={i}>
                  <p className="text-label text-fg-text-dark-secondary mb-3">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-subheading text-fg-text-dark mb-2">{step.title}</h3>
                  <p className="text-body text-fg-text-dark-secondary">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related projects */}
          {relatedProjects.length > 0 && (
            <div className="border-t border-fg-border-light pt-6 mb-16 lg:mb-24">
              <p className="section-title text-label-lg text-fg-text-dark-secondary mb-10">Related Projects</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {relatedProjects.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
                    <div className="aspect-[16/10] relative overflow-hidden mb-4">
                      <Image
                        src={p.gallery[0]}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="50vw"
                      />
                    </div>
                    <h3 className="text-subheading text-fg-text-dark group-hover:opacity-70 transition-opacity">
                      {p.title}
                    </h3>
                    <p className="text-label text-fg-text-dark-secondary mt-1">{p.location}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="border-t border-fg-border-light pt-10">
            <h2 className="text-heading text-fg-text-dark mb-6">Discuss your {service.name.toLowerCase()} project</h2>
            <Link
              href="/contact"
              className="text-label bg-fg-grey text-fg-white px-6 py-3 inline-flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none" className="-translate-y-px">
                <path d="M8.5 0.5L13 5.5L8.5 10.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M0 5.5H13" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
