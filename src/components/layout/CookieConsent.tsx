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
    <div className="fixed bottom-4 right-4 z-[60] max-w-sm glass-nav p-6 animate-fade-up">
      <p className="text-sm text-fg-text-secondary leading-relaxed">
        We use cookies to improve your experience and measure site performance.
      </p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={() => accept(true, true)}
          className="text-label bg-fg-white text-fg-grey px-5 py-2.5 transition-opacity hover:opacity-90"
        >
          Accept All
        </button>
        <button
          onClick={() => accept(false, false)}
          className="text-label border border-fg-border px-5 py-2.5 text-fg-text-secondary transition-colors hover:border-fg-text-muted hover:text-fg-white"
        >
          Essential Only
        </button>
      </div>
    </div>
  );
}
