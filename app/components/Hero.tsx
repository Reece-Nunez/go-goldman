"use client";

import { motion } from "framer-motion";
import { ChevronRightIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-label="Goldman Financial hero"
      className="relative overflow-hidden bg-[var(--accent)]"
    >
      {/* Main hero content area */}
      <div className="relative pt-28 pb-24 sm:pt-36 sm:pb-28 md:pt-44 md:pb-36 lg:pt-48 lg:pb-40">
        {/* Subtle radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(4,107,210,0.15),transparent)]" />

        {/* Floating orbs - refined */}
        <motion.div
          className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-[var(--primary)] opacity-[0.06] blur-[100px]"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#5BA8F5] opacity-[0.04] blur-[120px]"
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Geometric dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Diagonal accent lines */}
        <div className="absolute top-0 right-0 hidden h-full w-1/2 lg:block">
          <svg
            className="absolute top-0 right-0 h-full w-full opacity-[0.03]"
            viewBox="0 0 500 800"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="0" y1="800" x2="500" y2="0" stroke="white" strokeWidth="1" />
            <line x1="100" y1="800" x2="500" y2="100" stroke="white" strokeWidth="0.5" />
            <line x1="0" y1="600" x2="400" y2="0" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#5BA8F5] backdrop-blur-sm sm:text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5BA8F5] animate-pulse" />
                Trusted Financial Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1]"
            >
              Empowering Your Business with{" "}
              <span className="text-gradient-blue">
                Tailored Financial
              </span>{" "}
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-gray-400 sm:mt-6 sm:text-lg md:text-xl md:leading-relaxed"
            >
              Goldman Financial delivers exceptional financial services that
              empower businesses to achieve their goals. Our seasoned
              professionals provide innovative, personalized solutions for
              every client.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
            >
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/20 transition-all hover:bg-[var(--primary-dark)] hover:shadow-xl hover:shadow-[var(--primary)]/30 sm:px-8 sm:py-4 sm:text-base"
              >
                Explore Services
                <ChevronRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </a>
              <a
                href="tel:+18889590331"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base"
              >
                <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                Call Us Today
              </a>
            </motion.div>

          </div>

          {/* Floating logo watermark on right side for large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 lg:block xl:-right-8"
          >
            <Image
              src="/goldman-black-logo.png"
              alt=""
              width={320}
              height={320}
              className="h-auto w-48 opacity-[0.08] brightness-0 invert xl:w-64"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>

      {/* Clean angled divider instead of gradient */}
      <div className="relative h-16 bg-white sm:h-20 md:h-24">
        <svg
          className="absolute -top-px left-0 w-full text-white"
          viewBox="0 0 1440 60"
          fill="currentColor"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 60L1440 60L1440 0Q1080 50 720 55Q360 60 0 40Z" />
        </svg>
      </div>
    </section>
  );
}
