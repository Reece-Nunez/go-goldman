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
      "Instant verification for secure, reliable transactions.",
    icon: DocumentCheckIcon,
  },
  {
    title: "ACH Processing",
    description: "Streamlined ACH transfers for fast, cost-effective payments.",
    icon: BanknotesIcon,
  },
  {
    title: "E-commerce Payments",
    description: "Full-stack payment solutions for online merchants.",
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
      "Goldman Financial is a full-service eCheck payment processing platform.",
    icon: CheckCircleIcon,
  },
];

export default function Payments() {
  return (
    <section
      id="payments"
      className="scroll-mt-20 bg-[var(--gray-50)] py-16 sm:py-20 md:py-28"
      aria-label="Payment processing services"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <AnimatedSection className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] sm:text-sm">
            Payment Processing
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[var(--accent)] sm:text-3xl md:text-4xl">
            Seamless Payment Solutions
          </h2>
        </AnimatedSection>
        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
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
        <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 md:mt-8 md:grid-cols-2 md:gap-8">
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
