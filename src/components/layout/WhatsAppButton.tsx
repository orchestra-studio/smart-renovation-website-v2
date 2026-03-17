"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello Smart Renovation, I would like to discuss my project.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sr-success text-white shadow-[0_20px_40px_-15px_rgba(37,211,102,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(37,211,102,0.7)] animate-fade-up"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
