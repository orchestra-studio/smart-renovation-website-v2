import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { siteConfig } from "@/data/site";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "Contact — Start Your Project",
  description: "Get in touch with Smart Renovation for a free consultation. WhatsApp, phone, or visit our Dubai showroom.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-sr-dark pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-overline text-sr-gold mb-4">Get In Touch</p>
              <h1 className="text-display text-sr-cream">
                Let&apos;s Discuss
                <br />
                <span className="text-gradient-gold">Your Vision</span>
              </h1>
              <p className="mt-6 text-lg text-sr-text-secondary">
                Every exceptional space begins with a conversation. Reach out and a senior
                consultant will respond within 15 minutes during business hours.
              </p>

              <div className="mt-12 space-y-6">
                <ContactItem
                  icon={<Phone className="h-5 w-5" />}
                  label="Call Us"
                  value={siteConfig.phoneDisplay}
                  href={`tel:${siteConfig.phoneRaw}`}
                />
                <ContactItem
                  icon={<MessageCircle className="h-5 w-5" />}
                  label="WhatsApp"
                  value="Chat with us directly"
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello, I'd like to discuss a renovation project.")}`}
                  external
                />
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={siteConfig.email}
                  href={`mailto:${siteConfig.email}`}
                />
                <ContactItem
                  icon={<MapPin className="h-5 w-5" />}
                  label="Showroom"
                  value={`${siteConfig.address.street}, ${siteConfig.address.city}`}
                  href="https://maps.google.com/?q=Business+Bay+Dubai"
                  external
                />
                <ContactItem
                  icon={<Clock className="h-5 w-5" />}
                  label="Hours"
                  value="Sun–Thu: 9AM–6PM"
                />
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-sr-dark-border lg:aspect-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.915!2d55.265!3d25.185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d0e0f7b5f1%3A0x8c0e2e0e0e0e0e0e!2sBusiness%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Smart Renovation Dubai Office Location"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <LeadForm />
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sr-dark-border text-sr-gold transition-colors group-hover:border-sr-gold/50">
        {icon}
      </div>
      <div>
        <p className="text-xs text-sr-text-muted">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-sr-cream">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="block transition-colors"
      >
        {content}
      </a>
    );
  }

  return content;
}
