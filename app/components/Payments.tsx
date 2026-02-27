"use client";

import {
  DocumentCheckIcon,
  BanknotesIcon,
  ComputerDesktopIcon,
  HomeModernIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import ServiceCard from "./ServiceCard";
import AnimatedSection from "./AnimatedSection";

const paymentServices = [
  {
    title: "Bank Account Verifications",
    description:
      "Financing to maintain and grow your day-to-day operations.",
    icon: DocumentCheckIcon,
  },
  {
    title: "ACH Processing",
    description: "Fixed-term financing with predictable payments.",
    icon: BanknotesIcon,
  },
  {
    title: "E-commerce Payments",
    description: "Loans to purchase or lease business equipment.",
    icon: ComputerDesktopIcon,
  },
];

const specialtyServices = [
  {
    title: "Real Estate Financing",
    description:
      "Short Term, Ground Up, and Long Term real estate financing solutions.",
    icon: HomeModernIcon,
  },
  {
    title: "e-Checks",
    description:
      "Goldman is a full-service eCheck payment processing platform.",
    icon: CheckCircleIcon,
  },
];

export default function Payments() {
  return (
    <section
      id="payments"
      className="scroll-mt-20 bg-[var(--gray-50)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            Payment Processing
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--accent)] md:text-4xl">
            Seamless Payment Solutions
          </h2>
        </AnimatedSection>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {paymentServices.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={i}
              variant="filled"
            />
          ))}
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {specialtyServices.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={i + 3}
              variant="filled"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
