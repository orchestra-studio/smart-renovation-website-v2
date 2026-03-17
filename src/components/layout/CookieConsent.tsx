"use client";

import { useEffect, useState } from "react";
import { getConsentPreferences, setConsentPreferences, applyConsentToTrackers } from "@/lib/analytics";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsentPreferences()) setVisible(true);
    else applyConsentToTrackers(getConsentPreferences()!);
  }, []);

  function accept(analytics: boolean, marketing: boolean) {
    const consent = setConsentPreferences({ analytics, marketing });
    applyConsentToTrackers(consent);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-2xl rounded-2xl border border-sr-dark-border bg-sr-dark-surface/95 p-5 shadow-2xl backdrop-blur-xl">
      <p className="text-sm text-sr-text-secondary">
        We use cookies to improve your experience and measure site performance.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={() => accept(true, true)}
          className="rounded-full bg-sr-gold px-5 py-2 text-xs font-semibold uppercase tracking-wider text-sr-dark transition-colors hover:bg-sr-gold-hover"
        >
          Accept All
        </button>
        <button
          onClick={() => accept(false, false)}
          className="rounded-full border border-sr-dark-border px-5 py-2 text-xs font-semibold uppercase tracking-wider text-sr-text-secondary transition-colors hover:border-sr-text-muted"
        >
          Essential Only
        </button>
      </div>
    </div>
  );
}
