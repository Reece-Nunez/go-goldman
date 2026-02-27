import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CountingStats from "./components/CountingStats";
import Services from "./components/Services";
import Payments from "./components/Payments";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CountingStats />
      <Services />

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--gray-200)] to-transparent" />
      </div>

      <Payments />
      <WhyUs />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-[var(--gray-200)] bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="text-xl font-bold text-[var(--accent)]">
                Goldman{" "}
                <span className="text-[var(--primary)]">Financial</span>
              </p>
              <p className="mt-1 text-sm text-[var(--gray-500)]">
                Empowering Your Business with Tailored Financial Solutions
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-[var(--gray-500)]">
              <a
                href="https://gogoldman.com/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--primary)]"
              >
                Privacy Policy
              </a>
              <a
                href="https://gogoldman.com/terms-conditions/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--primary)]"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-[var(--gray-200)] pt-8 text-center text-sm text-[var(--gray-400)]">
            &copy; {new Date().getFullYear()} Goldman Financial. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
