"use client";

import { motion } from "framer-motion";
import { ComponentType } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  index: number;
  variant?: "outline" | "filled";
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  index,
  variant = "outline",
}: ServiceCardProps) {
  if (variant === "filled") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        whileHover={{ y: -6, transition: { duration: 0.25 } }}
        className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)] transition-transform group-hover:scale-110">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-[var(--accent)]">
            {title}
          </h3>
          <p className="mt-3 leading-relaxed text-[var(--gray-500)]">
            {description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative overflow-hidden rounded-2xl border border-[var(--gray-200)] p-8 transition-all hover:border-[var(--primary)]/30 hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 transition-transform group-hover:scale-110">
          <Icon className="h-6 w-6 text-[var(--primary)]" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-[var(--accent)]">
          {title}
        </h3>
        <p className="mt-3 leading-relaxed text-[var(--gray-500)]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
