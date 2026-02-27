"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--gray-200)] bg-white/97 shadow-sm backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.a
            href="#"
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? "text-[var(--accent)]" : "text-white"
            }`}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            Goldman{" "}
            <span className="text-[var(--primary)]">Financial</span>
          </motion.a>
          <div className="hidden items-center gap-8 md:flex">
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
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`rounded-lg p-2 transition-colors md:hidden ${
              scrolled
                ? "text-[var(--gray-600)] hover:bg-[var(--gray-100)]"
                : "text-gray-300 hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
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
        className="fixed top-[65px] z-40 w-full overflow-hidden border-b border-[var(--gray-200)] bg-white/98 backdrop-blur-lg md:hidden"
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-[var(--gray-600)] transition-colors hover:bg-[var(--gray-50)] hover:text-[var(--primary)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
