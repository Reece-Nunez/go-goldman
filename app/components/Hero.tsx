"use client";

import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--accent)] pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)] via-[#162033] to-[var(--primary-dark)] opacity-90" />

      {/* Floating orbs */}
      <motion.div
        className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[var(--primary)] opacity-[0.07] blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#5BA8F5] opacity-[0.05] blur-3xl"
        animate={{
          x: [0, -20, 30, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] opacity-[0.04] blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-semibold uppercase tracking-widest text-[#5BA8F5]"
          >
            Here To Serve
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl md:leading-[1.1]"
          >
            Empowering Your Business with{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-[#5BA8F5] to-[#93C5FD] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              Tailored Financial
            </motion.span>{" "}
            Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            At Goldman Financial, we are dedicated to providing exceptional
            financial services that empower individuals and businesses to
            achieve their financial goals. With a commitment to integrity,
            expertise, and personalized attention, our team of seasoned
            professionals works diligently to deliver innovative solutions
            tailored to each client&apos;s unique needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10"
          >
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[var(--primary-dark)] hover:shadow-lg hover:shadow-[var(--primary)]/25"
            >
              Explore Services
              <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
