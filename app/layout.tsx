import type { Metadata, Viewport } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Phoenix Atlas — Premium Digital Brands for Consultants",
    template: "%s | Phoenix Atlas",
  },
  description:
    "Phoenix Atlas builds high-converting websites and brand identities for independent consultants in Nigeria. Win corporate clients at ₦2M+ retainers with a brand that commands authority.",
  keywords: [
    "consultant website Nigeria",
    "brand identity Lagos",
    "digital brand for consultants",
    "consultant website Abuja",
    "Phoenix Atlas",
  ],
  authors: [
    { name: "Phoenix Atlas", url: "https://buildwithphoenixatlas.com" },
  ],
  creator: "Phoenix Atlas",
  metadataBase: new URL("https://buildwithphoenixatlas.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://buildwithphoenixatlas.com",
    siteName: "Phoenix Atlas",
    title: "Phoenix Atlas — Premium Digital Brands for Consultants",
    description:
      "Premium websites and brand identities for independent consultants in Nigeria.",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Phoenix Atlas" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Atlas — Premium Digital Brands for Consultants",
    description:
      "Corporate clients decide in 60 seconds. Make sure your brand wins.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://buildwithphoenixatlas.com" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080706" },
    { media: "(prefers-color-scheme: light)", color: "#FDFAF3" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HH7JBCNW98"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HH7JBCNW98');
          `}
        </Script>
      </body>
    </html>
  );
}
