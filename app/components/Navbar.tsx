"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Payments", href: "#payments" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--gray-200)] bg-white/97 shadow-sm backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
          <motion.a
            href="#"
            aria-label="Goldman Financial - Home"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="relative"
          >
            {/* White logo for dark (unscrolled) state — black logo with invert */}
            <Image
              src="/goldman-black-logo.png"
              alt="Goldman Financial"
              width={160}
              height={160}
              priority
              className={`h-11 w-auto transition-opacity duration-300 brightness-0 invert sm:h-14 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Black logo for light (scrolled) state */}
            <Image
              src="/goldman-black-logo.png"
              alt="Goldman Financial"
              width={160}
              height={160}
              priority
              className={`absolute top-0 left-0 h-11 w-auto transition-opacity duration-300 sm:h-14 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.a>
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-[var(--primary)] ${
                  scrolled
                    ? "text-[var(--gray-600)]"
                    : "text-gray-300 hover:text-white"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ y: -1 }}
              >
                {link.label}
              </motion.a>
            ))}
            <a
              href="tel:+18889590331"
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                scrolled
                  ? "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]"
                  : "border border-white/20 text-white hover:bg-white/10"
              }`}
            >
              Get Started
            </a>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`rounded-lg p-2 transition-colors md:hidden ${
              scrolled
                ? "text-[var(--gray-600)] hover:bg-[var(--gray-100)]"
                : "text-gray-300 hover:bg-white/10"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={
          mobileOpen
            ? { opacity: 1, height: "auto", pointerEvents: "auto" as const }
            : { opacity: 0, height: 0, pointerEvents: "none" as const }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-[55px] z-40 w-full overflow-hidden border-b border-[var(--gray-200)] bg-white/98 backdrop-blur-lg sm:top-[65px] md:hidden"
        role="menu"
      >
        <div className="flex flex-col gap-1 px-5 py-3 sm:px-6 sm:py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              role="menuitem"
              className="rounded-lg px-4 py-3 text-sm font-medium text-[var(--gray-600)] transition-colors hover:bg-[var(--gray-50)] hover:text-[var(--primary)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+18889590331"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-lg bg-[var(--primary)] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-dark)]"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </>
  );
}
