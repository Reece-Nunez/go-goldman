"use client";

import {
  BanknotesIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  BuildingOffice2Icon,
  CreditCardIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import ServiceCard from "./ServiceCard";
import AnimatedSection from "./AnimatedSection";

const lendingServices = [
  {
    title: "Business Loans",
    description: "Flexible loan options to meet various business needs.",
    icon: BanknotesIcon,
  },
  {
    title: "Line of Credit",
    description:
      "Access funds when you need them with a revolving line of credit.",
    icon: ArrowTrendingUpIcon,
  },
  {
    title: "Working Capital",
    description: "Financing to maintain and grow your day-to-day operations.",
    icon: ClockIcon,
  },
  {
    title: "SBA Loans",
    description: "Government-backed loans with favorable terms.",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Term Loans",
    description: "Fixed-term financing with predictable payments.",
    icon: CreditCardIcon,
  },
  {
    title: "Equipment Financing",
    description: "Loans to purchase or lease business equipment.",
    icon: WrenchScrewdriverIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-16 sm:py-20 md:py-28" aria-label="Lending services">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <AnimatedSection className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] sm:text-sm">
            What We Offer
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--accent)] sm:text-3xl md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-[var(--gray-500)] sm:mt-4 sm:text-lg">
            Our mission is to build lasting relationships and foster financial
            success for all our clients.
          </p>
        </AnimatedSection>
        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {lendingServices.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={i}
              variant="outline"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
