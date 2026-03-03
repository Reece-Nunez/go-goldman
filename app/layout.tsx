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
    "business financing Miami",
    "small business loans Florida",
  ],
  authors: [{ name: "Goldman Financial" }],
  creator: "Goldman Financial",
  publisher: "Goldman Financial",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Goldman Financial – Business Loans & Payment Processing Solutions",
    description:
      "Tailored financial solutions for your business. Lines of credit, SBA loans, equipment financing, real estate loans, and full-service ACH/eCheck payment processing.",
    url: "https://gogoldman.com",
    siteName: "Goldman Financial",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/goldman-black-logo.png",
        width: 4167,
        height: 1085,
        alt: "Goldman Financial - Business Financial Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Goldman Financial – Tailored Financial Solutions",
    description:
      "Business financing and payment processing solutions. Fast funding, flexible terms, and high-risk merchant support.",
    images: ["/goldman-black-logo.png"],
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
  logo: "https://gogoldman.com/goldman-black-logo.png",
  image: "https://gogoldman.com/goldman-black-logo.png",
  description:
    "Goldman Financial provides tailored business financing solutions including lines of credit, SBA loans, equipment financing, real estate loans, and payment processing services.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "777 Brickell Ave, Suite 500",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33131",
    addressCountry: "US",
  },
  telephone: "+1-888-959-0331",
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
  priceRange: "$$",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of business loans does Goldman Financial offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Goldman Financial offers business loans, lines of credit, working capital financing, SBA loans, term loans, and equipment financing tailored to your business needs.",
      },
    },
    {
      "@type": "Question",
      name: "Does Goldman Financial provide payment processing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Goldman Financial provides full-service payment processing including bank account verifications, ACH processing, e-commerce payments, and eCheck processing.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Goldman Financial located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Goldman Financial is located at 777 Brickell Ave, Suite 500, Miami, FL 33131. You can reach us at +888-959-0331.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0F172A" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  );
}
