import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gogoldman.com"),
  title: {
    default:
      "Goldman Financial – Business Loans, Payment Processing & Financial Solutions",
    template: "%s | Goldman Financial",
  },
  description:
    "Goldman Financial provides business lines of credit, working capital funding, SBA loans, equipment financing, real estate loans, and ACH/eCheck payment processing for businesses of all types including high-risk merchants.",
  keywords: [
    "business loans",
    "business line of credit",
    "working capital funding",
    "SBA business loans",
    "equipment financing",
    "real estate financing",
    "payment processing",
    "ACH payments",
    "eCheck processing",
    "high-risk merchant account",
    "ecommerce payment processing",
    "business term loans",
    "Goldman Financial",
  ],
  authors: [{ name: "Goldman Financial" }],
  creator: "Goldman Financial",
  publisher: "Goldman Financial",
  openGraph: {
    title: "Goldman Financial – Business Loans & Payment Processing Solutions",
    description:
      "Tailored financial solutions for your business. Lines of credit, SBA loans, equipment financing, real estate loans, and full-service ACH/eCheck payment processing.",
    url: "https://gogoldman.com",
    siteName: "Goldman Financial",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goldman Financial – Tailored Financial Solutions",
    description:
      "Business financing and payment processing solutions. Fast funding, flexible terms, and high-risk merchant support.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://gogoldman.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Goldman Financial",
  url: "https://gogoldman.com",
  description:
    "Goldman Financial provides tailored business financing solutions including lines of credit, SBA loans, equipment financing, real estate loans, and payment processing services.",
  areaServed: "US",
  serviceType: [
    "Business Line of Credit",
    "Working Capital Funding",
    "SBA Business Loans",
    "Business Term Loans",
    "Equipment Financing",
    "Real Estate Financing",
    "ACH Payment Processing",
    "eCheck Payment Processing",
    "eCommerce Payment Processing",
  ],
  knowsAbout: [
    "Business Financing",
    "Payment Processing",
    "High-Risk Merchant Services",
  ],
  slogan: "Empowering Your Business with Tailored Financial Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  );
}
