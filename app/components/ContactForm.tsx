"use client";

import { motion } from "framer-motion";
import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { PaperAirplaneIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [flying, setFlying] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const formLoadedAt = useRef(Date.now());

  function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(e.target.value));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check — bots will fill in the hidden field
    if (formData.get("website")) {
      // Silently "succeed" so bots think it worked
      setSubmitted(true);
      return;
    }

    // Time-based check — reject if submitted in under 3 seconds (likely a bot)
    const elapsed = Date.now() - formLoadedAt.current;
    if (elapsed < 3000) {
      setError("Please take a moment to fill out the form.");
      return;
    }

    // Trigger fly-off animation, then start loading
    setFlying(true);
    await new Promise((r) => setTimeout(r, 600));
    setFlying(false);
    setLoading(true);
    // Simulate submission — replace with actual API endpoint
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-sm sm:p-14"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20">
          <CheckCircleIcon className="h-8 w-8 text-green-400" />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">Message Sent!</h3>
        <p className="mt-2 text-sm text-gray-400 sm:text-base">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setPhone("");
            formLoadedAt.current = Date.now();
          }}
          className="mt-6 text-sm font-medium text-[#5BA8F5] transition-colors hover:text-white"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
    >
      <h3 className="text-lg font-semibold text-white sm:text-xl">
        Send Us a Message
      </h3>
      <p className="mt-1 text-sm text-gray-400">
        Fill out the form and we&apos;ll be in touch within 24 hours.
      </p>

      {/* Honeypot — hidden from real users, bots will fill it in */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300">
            Full Name <span className="text-[#5BA8F5]">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="John Smith"
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#5BA8F5]/50 focus:ring-1 focus:ring-[#5BA8F5]/50 sm:text-base"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300">
            Email <span className="text-[#5BA8F5]">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="john@company.com"
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#5BA8F5]/50 focus:ring-1 focus:ring-[#5BA8F5]/50 sm:text-base"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-300">
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={14}
            pattern="\(\d{3}\) \d{3}-\d{4}"
            title="Please enter a valid 10-digit phone number"
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#5BA8F5]/50 focus:ring-1 focus:ring-[#5BA8F5]/50 sm:text-base"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-gray-300">
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your Business Inc."
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#5BA8F5]/50 focus:ring-1 focus:ring-[#5BA8F5]/50 sm:text-base"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-service" className="block text-sm font-medium text-gray-300">
          Service Interested In
        </label>
        <select
          id="contact-service"
          name="service"
          defaultValue=""
          className="mt-1.5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-[#5BA8F5]/50 focus:ring-1 focus:ring-[#5BA8F5]/50 sm:text-base [&>option]:bg-[var(--accent)] [&>option]:text-white"
        >
          <option value="" disabled className="text-gray-500">Select a service</option>
          <option value="business-loans">Business Loans</option>
          <option value="line-of-credit">Line of Credit</option>
          <option value="working-capital">Working Capital</option>
          <option value="sba-loans">SBA Loans</option>
          <option value="equipment-financing">Equipment Financing</option>
          <option value="real-estate">Real Estate Financing</option>
          <option value="ach-processing">ACH Processing</option>
          <option value="echeck">e-Checks</option>
          <option value="ecommerce">E-commerce Payments</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300">
          Message <span className="text-[#5BA8F5]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your business needs..."
          className="mt-1.5 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-[#5BA8F5]/50 focus:ring-1 focus:ring-[#5BA8F5]/50 sm:text-base"
        />
      </div>

      <button
        type="submit"
        disabled={loading || flying}
        className="relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[var(--primary)]/20 transition-all hover:bg-[var(--primary-dark)] hover:shadow-xl hover:shadow-[var(--primary)]/30 disabled:opacity-60 sm:text-base"
      >
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2"
            >
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              className="inline-flex items-center gap-2"
            >
              Send Message
              <motion.span
                animate={
                  flying
                    ? { x: [0, 8, 200], y: [0, -4, -40], rotate: [0, -10, -25], opacity: [1, 1, 0], scale: [1, 1.2, 0.6] }
                    : { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }
                }
                transition={
                  flying
                    ? { duration: 0.55, ease: [0.2, 0.8, 0.4, 1] }
                    : { duration: 0.3 }
                }
                className="inline-block"
              >
                <PaperAirplaneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.span>
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </motion.form>
  );
}
