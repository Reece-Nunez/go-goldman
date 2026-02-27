"use client";

import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  BanknotesIcon,
  StarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";

const whyUs = [
  {
    title: "Tailored Financial Solutions",
    description:
      "Every business is unique. We craft financial strategies specifically designed around your goals and industry.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Competitive Rates",
    description:
      "We work to get you the most favorable terms and rates in the market so you can maximize returns.",
    icon: BanknotesIcon,
  },
  {
    title: "Expert Financial Advisors",
    description:
      "Our seasoned professionals bring years of experience and deep industry knowledge to every engagement.",
    icon: StarIcon,
  },
  {
    title: "Fast And Easy Application",
    description:
      "Streamlined process from application to funding. Get the capital you need without the hassle.",
    icon: ClockIcon,
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            Why Goldman Financial
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--accent)] md:text-4xl">
            Why Choose Us?
          </h2>
        </AnimatedSection>
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.25 },
              }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--gray-200)] p-8 transition-shadow hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)]/10 transition-transform group-hover:scale-110">
                  <item.icon className="h-7 w-7 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--accent)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--gray-500)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
