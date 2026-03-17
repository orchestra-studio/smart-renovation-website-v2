"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { siteConfig } from "@/data/site";
import { publicPost, type LeadCaptureResponse } from "@/lib/public-api";
import { trackLeadFormStart, trackLeadFormSubmit } from "@/lib/analytics";

const projectTypes = [
  { value: "full_renovation", label: "Full Renovation", icon: "🏠" },
  { value: "kitchen", label: "Kitchen", icon: "🍳" },
  { value: "bathroom", label: "Bathroom", icon: "🛁" },
  { value: "other", label: "Office / Commercial", icon: "💼" },
];

const timelines = [
  { value: "urgent", label: "As Soon as Possible" },
  { value: "1_3_months", label: "1–3 Months" },
  { value: "3_6_months", label: "3–6 Months" },
  { value: "flexible", label: "Just Exploring" },
];

const budgets = [
  { value: "under_50k", label: "Under AED 50K" },
  { value: "50k_100k", label: "AED 50K – 100K" },
  { value: "100k_200k", label: "AED 100K – 200K" },
  { value: "200k_500k", label: "AED 200K – 500K" },
  { value: "over_500k", label: "AED 500K+" },
];

interface FormData {
  projectType: string;
  timeline: string;
  budget: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

export function LeadForm() {
  const { ref, isVisible } = useScrollReveal();
  const [step, setStep] = useState(0);
  const [formStarted, setFormStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState<LeadCaptureResponse | null>(null);
  const [data, setData] = useState<FormData>({
    projectType: "",
    timeline: "",
    budget: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const totalSteps = 4;

  function startForm() {
    if (!formStarted) {
      setFormStarted(true);
      trackLeadFormStart();
    }
  }

  function updateData(key: keyof FormData, value: string) {
    startForm();
    setData((d) => ({ ...d, [key]: value }));
  }

  function nextStep() {
    if (step < totalSteps - 1) setStep((s) => s + 1);
  }

  function prevStep() {
    if (step > 0) setStep((s) => s - 1);
  }

  async function handleSubmit() {
    if (!data.name || !data.phone) {
      setError("Please provide your name and phone number.");
      return;
    }
    setError("");
    setSubmitting(true);

    try {
      const [firstName = "", ...rest] = data.name.trim().split(/\s+/);
      const payload = {
        org_slug: siteConfig.orgSlug,
        first_name: firstName,
        last_name: rest.join(" ") || undefined,
        email: data.email || undefined,
        phone: data.phone,
        whatsapp: data.phone,
        project_type: data.projectType || "full_renovation",
        budget_range: data.budget || "100k_200k",
        timeline: data.timeline || "flexible",
        additional_notes: data.message || undefined,
        whatsapp_opt_in: true,
        email_opt_in: true,
        website: "",
        form_started_at: new Date().toISOString(),
      };

      const result = await publicPost<LeadCaptureResponse>("/public/leads/capture", payload);
      trackLeadFormSubmit({
        project_type: data.projectType,
        budget_range: data.budget,
        timeline: data.timeline,
      });
      setResponse(result);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted && response) {
    return (
      <section ref={ref} className="relative bg-sr-dark-surface py-32 lg:py-40" id="contact">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
            <CheckCircle2 className="mx-auto h-16 w-16 text-sr-gold" />
            <h2 className="mt-8 font-heading text-3xl font-light text-sr-cream">Thank You</h2>
            <p className="mt-4 text-sr-text-secondary">
              A senior consultant will reach out within 15 minutes during business hours.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi, I just submitted a consultation request on your website.")}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-sr-success px-8 py-3 text-sm font-medium text-white transition-all hover:shadow-lg"
            >
              Or Chat on WhatsApp Now
            </a>
            <p className="mt-4 text-xs text-sr-text-muted">Reference: {response.lead_id}</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-sr-dark-surface py-32 lg:py-40" id="contact">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-overline text-sr-gold mb-4">Get Started</p>
          <h2 className="text-section-title text-sr-cream">
            Ready to Transform Your Space?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-sr-text-secondary">
            Tell us about your vision. It takes less than a minute.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mx-auto mt-12 max-w-md">
          <div className="flex items-center justify-between text-xs text-sr-text-muted">
            <span>Step {step + 1} of {totalSteps}</span>
            <span>{Math.round(((step + 1) / totalSteps) * 100)}%</span>
          </div>
          <div className="mt-2 h-1 rounded-full bg-sr-dark-border">
            <div
              className="h-1 rounded-full bg-sr-gold transition-all duration-500"
              style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Steps */}
        <div className="mx-auto mt-10 max-w-xl">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <StepWrapper key="s0">
                <p className="mb-6 text-center font-heading text-xl text-sr-cream">
                  What type of project are you envisioning?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {projectTypes.map((pt) => (
                    <button
                      key={pt.value}
                      onClick={() => { updateData("projectType", pt.value); nextStep(); }}
                      className={`rounded-xl border p-6 text-left transition-all duration-300 ${
                        data.projectType === pt.value
                          ? "border-sr-gold bg-sr-gold/10"
                          : "border-sr-dark-border hover:border-sr-text-muted"
                      }`}
                    >
                      <span className="text-2xl">{pt.icon}</span>
                      <p className="mt-2 text-sm font-medium text-sr-cream">{pt.label}</p>
                    </button>
                  ))}
                </div>
              </StepWrapper>
            )}

            {step === 1 && (
              <StepWrapper key="s1">
                <p className="mb-6 text-center font-heading text-xl text-sr-cream">
                  When are you looking to start?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {timelines.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => { updateData("timeline", t.value); nextStep(); }}
                      className={`rounded-xl border p-5 text-left transition-all duration-300 ${
                        data.timeline === t.value
                          ? "border-sr-gold bg-sr-gold/10"
                          : "border-sr-dark-border hover:border-sr-text-muted"
                      }`}
                    >
                      <p className="text-sm font-medium text-sr-cream">{t.label}</p>
                    </button>
                  ))}
                </div>
              </StepWrapper>
            )}

            {step === 2 && (
              <StepWrapper key="s2">
                <p className="mb-6 text-center font-heading text-xl text-sr-cream">
                  What&apos;s your investment range?
                </p>
                <div className="space-y-3">
                  {budgets.map((b) => (
                    <button
                      key={b.value}
                      onClick={() => { updateData("budget", b.value); nextStep(); }}
                      className={`w-full rounded-xl border p-4 text-left transition-all duration-300 ${
                        data.budget === b.value
                          ? "border-sr-gold bg-sr-gold/10"
                          : "border-sr-dark-border hover:border-sr-text-muted"
                      }`}
                    >
                      <p className="text-sm font-medium text-sr-cream">{b.label}</p>
                    </button>
                  ))}
                </div>
              </StepWrapper>
            )}

            {step === 3 && (
              <StepWrapper key="s3">
                <p className="mb-6 text-center font-heading text-xl text-sr-cream">
                  Let&apos;s connect
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your name *"
                    value={data.name}
                    onChange={(e) => updateData("name", e.target.value)}
                    className="w-full rounded-xl border border-sr-dark-border bg-sr-dark px-5 py-4 text-sm text-sr-cream placeholder:text-sr-text-muted focus:border-sr-gold focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp * (+971...)"
                    value={data.phone}
                    onChange={(e) => updateData("phone", e.target.value)}
                    className="w-full rounded-xl border border-sr-dark-border bg-sr-dark px-5 py-4 text-sm text-sr-cream placeholder:text-sr-text-muted focus:border-sr-gold focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email (optional)"
                    value={data.email}
                    onChange={(e) => updateData("email", e.target.value)}
                    className="w-full rounded-xl border border-sr-dark-border bg-sr-dark px-5 py-4 text-sm text-sr-cream placeholder:text-sr-text-muted focus:border-sr-gold focus:outline-none transition-colors"
                  />
                  <textarea
                    placeholder="Tell us about your vision (optional)"
                    value={data.message}
                    onChange={(e) => updateData("message", e.target.value)}
                    rows={3}
                    className="w-full rounded-xl border border-sr-dark-border bg-sr-dark px-5 py-4 text-sm text-sr-cream placeholder:text-sr-text-muted focus:border-sr-gold focus:outline-none resize-none transition-colors"
                  />

                  {error && <p className="text-sm text-red-400">{error}</p>}

                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full rounded-full bg-sr-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-sr-dark transition-all hover:bg-sr-gold-hover hover:shadow-[0_0_40px_rgba(197,165,114,0.3)] disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      "Schedule a Consultation"
                    )}
                  </button>

                  <p className="text-center text-xs text-sr-text-muted">
                    Or message us on{" "}
                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sr-gold underline"
                    >
                      WhatsApp
                    </a>
                  </p>
                </div>
              </StepWrapper>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            {step > 0 ? (
              <button onClick={prevStep} className="flex items-center gap-2 text-sm text-sr-text-muted transition-colors hover:text-sr-cream">
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            ) : <div />}
            {step < totalSteps - 1 && step > 0 && (
              <button onClick={nextStep} className="flex items-center gap-2 text-sm text-sr-gold transition-colors hover:text-sr-gold-hover">
                Skip <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
