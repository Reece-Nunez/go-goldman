"use client";

import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-[var(--accent)] py-20 md:py-28"
    >
      {/* Animated background orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] opacity-[0.06] blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#5BA8F5]">
            Get In Touch
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
            Ready to take the next step? Reach out to our team today.
          </p>
        </AnimatedSection>
        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-stretch justify-center gap-6 md:flex-row md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="flex flex-1 items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#5BA8F5]/20">
              <MapPinIcon className="h-6 w-6 text-[#5BA8F5]" />
            </div>
            <div>
              <p className="font-semibold text-white">Address</p>
              <p className="mt-2 leading-relaxed text-gray-300">
                777 Brickell Ave
                <br />
                Suite 500
                <br />
                Miami, FL 33131
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="flex flex-1 items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#5BA8F5]/20">
              <PhoneIcon className="h-6 w-6 text-[#5BA8F5]" />
            </div>
            <div>
              <p className="font-semibold text-white">Phone</p>
              <a
                href="tel:+18889590331"
                className="mt-2 block text-lg text-gray-300 transition-colors hover:text-white"
              >
                +888-959-0331
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
