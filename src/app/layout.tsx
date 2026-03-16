import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smart Renovation | Premium Luxury Renovations in Dubai",
  description:
    "Award-winning design-build studio delivering premium residential and commercial renovations across Dubai with precision, craftsmanship, and full accountability.",
  openGraph: {
    title: "Smart Renovation | Premium Luxury Renovations in Dubai",
    description:
      "Transform your Dubai home with Smart Renovation. Premium villa renovations, kitchen design, and interior fit-outs. 14+ years of excellence.",
    url: "https://smartrenovation.ae",
    siteName: "Smart Renovation",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Renovation | Premium Luxury Renovations in Dubai",
    description:
      "Transform your Dubai home with Smart Renovation. Premium villa renovations, kitchen design, and interior fit-outs.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Smart Renovation",
              description:
                "Premium luxury renovations in Dubai. Villa renovations, kitchen design, and interior fit-outs.",
              url: "https://smartrenovation.ae",
              telephone: "+971508506500",
              email: "info@smartrenovation.ae",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Business Bay",
                addressRegion: "Dubai",
                addressCountry: "AE",
              },
              areaServed: "Dubai, UAE",
            }),
          }}
        />
      </head>
      <body className={`${manrope.variable} font-[family-name:var(--font-manrope)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
