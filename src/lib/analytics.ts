export const CONSENT_STORAGE_KEY = "sr_cookie_consent_v1";
export const CONSENT_UPDATED_EVENT = "sr:consent-updated";

export type AnalyticsConsentPreferences = {
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

function isBrowser() {
  return typeof window !== "undefined";
}

function ensureDataLayer() {
  if (!isBrowser()) return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }
}

export function getConsentPreferences(): AnalyticsConsentPreferences | null {
  if (!isBrowser()) return null;
  const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed.analytics !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setConsentPreferences(prefs: { analytics: boolean; marketing: boolean }) {
  const next = { ...prefs, updatedAt: new Date().toISOString() };
  if (isBrowser()) {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: next }));
  }
  return next;
}

export function applyConsentToTrackers(consent: AnalyticsConsentPreferences) {
  if (!isBrowser()) return;
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: consent.analytics ? "granted" : "denied",
      ad_storage: consent.marketing ? "granted" : "denied",
    });
  }
  if (typeof window.fbq === "function") {
    window.fbq("consent", consent.marketing ? "grant" : "revoke");
  }
}

function hasConsent(type: "analytics" | "marketing") {
  return getConsentPreferences()?.[type] ?? false;
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!isBrowser() || !hasConsent("analytics")) return;
  ensureDataLayer();
  window.gtag?.("event", name, params);
}

export function trackPageView(path: string) {
  trackEvent("page_view", { page_path: path });
}

export function trackLeadFormStart() {
  trackEvent("lead_form_start", { form_id: "website_contact_form" });
}

export function trackLeadFormSubmit(params: Record<string, unknown> = {}) {
  trackEvent("lead_form_submit", params);
  if (isBrowser() && hasConsent("marketing") && typeof window.fbq === "function") {
    window.fbq("track", "Lead", { conversion_type: "lead_form" });
  }
}
