"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { publicPost, type LeadCaptureResponse } from "@/lib/public-api";
import { siteConfig } from "@/data/site";
import { trackLeadFormStart, trackLeadFormSubmit } from "@/lib/analytics";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const schema = z.object({
  full_name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  property_type: z.string().optional(),
  budget_range: z.string().optional(),
  message: z.string().optional(),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

const propertyTypes = ["Villa", "Apartment", "Penthouse", "Office", "Retail"];
const budgetRanges = ["Under AED 200K", "AED 200K–500K", "AED 500K–1M", "AED 1M–2M", "AED 2M+"];

export function LeadForm() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    if (data.honeypot) return;
    setSubmitting(true);
    trackLeadFormStart();

    try {
      const result = await publicPost<LeadCaptureResponse>(
        `/public/${siteConfig.orgSlug}/leads`,
        {
          full_name: data.full_name,
          email: data.email,
          phone: data.phone || null,
          property_type: data.property_type || null,
          budget_range: data.budget_range || null,
          message: data.message || null,
          source: "website_v2",
          utm_source: new URLSearchParams(window.location.search).get("utm_source") || null,
          utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || null,
          utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || null,
        }
      );
      trackLeadFormSubmit({ lead_id: result.lead_id, tier: result.tier });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section className="bg-fg-cream text-fg-text-dark py-20 lg:py-40">
        <div className="px-6 lg:px-10 max-w-[40rem]">
          <p className="text-heading text-fg-text-dark">
            Thank you. A senior consultant will be in touch within 15 minutes during business hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="bg-fg-cream text-fg-text-dark py-20 lg:py-40">
      <div className="px-6 lg:px-10">
        {/* Header */}
        <div className="lg:grid lg:grid-cols-24 lg:gap-5">
          <div className="lg:col-span-14">
            <h2
              className={`text-heading text-fg-text-dark mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Request a Consultation
            </h2>
          </div>
          <div className="lg:col-start-16 lg:col-span-9">
            <p className="text-body text-fg-text-dark-secondary mb-10">
              Tell us about your project and a senior consultant will be in touch within 15 minutes.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="lg:grid lg:grid-cols-24 lg:gap-5 mt-8">
          <div className="lg:col-start-1 lg:col-span-10">
            {/* Property type buttons */}
            <div className="mb-8">
              <p className="text-label text-fg-text-dark-secondary mb-4">Property Type</p>
              <div className="flex flex-wrap gap-2">
                {propertyTypes.map((type) => (
                  <label
                    key={type}
                    className="cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={type}
                      {...register("property_type")}
                      className="peer sr-only"
                    />
                    <span className="text-label border border-fg-border-light px-5 py-2.5 inline-block transition-colors peer-checked:bg-fg-grey peer-checked:text-fg-white peer-checked:border-fg-grey hover:bg-fg-grey hover:text-fg-white hover:border-fg-grey">
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget range buttons */}
            <div className="mb-8">
              <p className="text-label text-fg-text-dark-secondary mb-4">Investment Range</p>
              <div className="flex flex-wrap gap-2">
                {budgetRanges.map((range) => (
                  <label
                    key={range}
                    className="cursor-pointer"
                  >
                    <input
                      type="radio"
                      value={range}
                      {...register("budget_range")}
                      className="peer sr-only"
                    />
                    <span className="text-label border border-fg-border-light px-5 py-2.5 inline-block whitespace-nowrap transition-colors peer-checked:bg-fg-grey peer-checked:text-fg-white peer-checked:border-fg-grey hover:bg-fg-grey hover:text-fg-white hover:border-fg-grey">
                      {range}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <textarea
                {...register("message")}
                placeholder="Tell us about your project (optional)"
                rows={5}
                className="w-full border border-fg-border-light bg-transparent px-4 py-3 text-body text-fg-text-dark placeholder:text-fg-text-dark-secondary resize-none focus:outline-none focus:border-fg-grey transition-colors"
              />
            </div>
          </div>

          {/* Right column — contact fields */}
          <div className="lg:col-start-14 lg:col-span-11">
            {/* Name */}
            <div className="relative mb-4">
              <label className="text-label text-fg-text-dark-secondary absolute left-4 top-3 pointer-events-none">Name *</label>
              <input
                {...register("full_name")}
                type="text"
                className="w-full border border-fg-border-light bg-transparent h-20 px-4 pt-10 pb-3 text-body text-fg-text-dark focus:outline-none focus:border-fg-grey transition-colors"
              />
              {errors.full_name && <p className="text-label text-red-600 mt-1">{errors.full_name.message}</p>}
            </div>

            {/* Email */}
            <div className="relative mb-4">
              <label className="text-label text-fg-text-dark-secondary absolute left-4 top-3 pointer-events-none">Email *</label>
              <input
                {...register("email")}
                type="email"
                className="w-full border border-fg-border-light bg-transparent h-20 px-4 pt-10 pb-3 text-body text-fg-text-dark focus:outline-none focus:border-fg-grey transition-colors"
              />
              {errors.email && <p className="text-label text-red-600 mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div className="relative mb-8">
              <label className="text-label text-fg-text-dark-secondary absolute left-4 top-3 pointer-events-none">Phone</label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full border border-fg-border-light bg-transparent h-20 px-4 pt-10 pb-3 text-body text-fg-text-dark focus:outline-none focus:border-fg-grey transition-colors"
              />
            </div>

            {/* Honeypot */}
            <input {...register("honeypot")} type="text" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="text-label bg-fg-black text-fg-white h-11 px-6 transition-opacity hover:opacity-80 disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Submit Request"}
            </button>

            <p className="text-label text-fg-text-dark-secondary mt-4 max-w-sm">
              Your information is confidential and only used to prepare your consultation.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
