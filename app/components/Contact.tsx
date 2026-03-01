"use client";

import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import AnimatedSection from "./AnimatedSection";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-[var(--accent)] py-16 sm:py-20 md:py-28"
      aria-label="Contact information"
    >
      {/* Animated background orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)] opacity-[0.06] blur-[100px] sm:h-[600px] sm:w-[600px]"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <AnimatedSection className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5BA8F5] sm:text-sm">
            Get In Touch
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Contact Us
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-gray-400 sm:mt-4 sm:text-lg">
            Ready to take the next step? Reach out to our team today.
          </p>
        </AnimatedSection>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:mt-14 md:gap-8 lg:grid-cols-5">
          {/* Contact info cards - left column */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:col-span-2">
            <motion.address
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="flex flex-1 items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 not-italic backdrop-blur-sm sm:p-8"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5BA8F5]/20 sm:h-12 sm:w-12">
                <MapPinIcon className="h-5 w-5 text-[#5BA8F5] sm:h-6 sm:w-6" />
              </div>
              <div>
                <p className="font-semibold text-white">Address</p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-300 sm:mt-2 sm:text-base">
                  777 Brickell Ave
                  <br />
                  Suite 500
                  <br />
                  Miami, FL 33131
                </p>
              </div>
            </motion.address>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="flex flex-1 items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#5BA8F5]/20 sm:h-12 sm:w-12">
                <PhoneIcon className="h-5 w-5 text-[#5BA8F5] sm:h-6 sm:w-6" />
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a
                  href="tel:+18889590331"
                  className="mt-1.5 block text-base text-gray-300 transition-colors hover:text-white sm:mt-2 sm:text-lg"
                >
                  +888-959-0331
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact form - right column */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
