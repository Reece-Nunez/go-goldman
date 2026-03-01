"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountingNumberProps {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
}

function CountingNumber({ value, prefix = "", suffix, label, description }: CountingNumberProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => {
    if (value >= 1000) return Math.round(v).toLocaleString();
    return Math.round(v).toString();
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate(motionValue, value, {
            duration: 2,
            ease: [0.22, 0.61, 0.36, 1],
          });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [motionValue, value, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-0.5">
        {prefix && (
          <span className="text-3xl font-bold text-[var(--primary)] sm:text-4xl md:text-5xl">
            {prefix}
          </span>
        )}
        <motion.span className="text-3xl font-bold text-[var(--primary)] sm:text-4xl md:text-5xl">
          {rounded}
        </motion.span>
        <span className="text-xl font-semibold text-[var(--primary)] sm:text-2xl md:text-3xl">
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-[var(--accent)] sm:text-base">
        {label}
      </p>
      <p className="mt-1 text-xs text-[var(--gray-500)] sm:text-sm">
        {description}
      </p>
    </div>
  );
}

const stats = [
  { label: "Businesses Served", value: 1000, prefix: "", suffix: "+", description: "Nationwide partnerships" },
  { label: "Funding Provided", value: 70, prefix: "$", suffix: "M+", description: "In capital deployed" },
  { label: "Client Satisfaction", value: 95, prefix: "", suffix: "%", description: "Happy customers" },
];

export default function CountingStats() {
  return (
    <section
      id="about"
      aria-label="Company statistics"
      className="scroll-mt-20 bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              className="relative"
            >
              <CountingNumber
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
              />
              {i < stats.length - 1 && (
                <div className="mx-auto mt-8 h-px w-16 bg-[var(--gray-200)] md:hidden" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
