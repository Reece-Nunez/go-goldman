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
    <section id="services" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            What We Offer
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--accent)] md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--gray-500)]">
            Our mission is to build lasting relationships and foster financial
            success for all our clients.
          </p>
        </AnimatedSection>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
