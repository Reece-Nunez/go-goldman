"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountingNumberProps {
  value: number;
  suffix: string;
  label: string;
}

function CountingNumber({ value, suffix, label }: CountingNumberProps) {
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
      <div className="flex items-baseline justify-center gap-1">
        <motion.span className="text-5xl font-bold text-[var(--primary)] md:text-6xl">
          {rounded}
        </motion.span>
        <span className="text-2xl font-semibold text-[var(--primary)] md:text-3xl">
          {suffix}
        </span>
      </div>
      <p className="mt-3 text-sm font-medium uppercase tracking-wider text-[var(--gray-500)]">
        {label}
      </p>
    </div>
  );
}

const stats = [
  { label: "Businesses Served", value: 1000, suffix: "+" },
  { label: "Total Funding Provided", value: 70, suffix: "M+" },
  { label: "Customer Satisfaction", value: 95, suffix: "%" },
];

export default function CountingStats() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-[var(--gray-200)] bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
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
            >
              <CountingNumber
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
