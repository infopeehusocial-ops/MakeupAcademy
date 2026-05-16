"use client";
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-32 pb-24 lowercase-disabled">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <header className="mb-20 fade-up visible">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 block">Legal Documentation</span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Terms of <br />
            <span className="gold-shimmer italic font-light">Service.</span>
          </h1>
          <p className="text-white/40 text-sm tracking-widest uppercase font-bold">Last Updated: May 2026</p>
        </header>

        <div className="space-y-16 font-body text-lg leading-relaxed text-white/70">
          <section className="fade-up visible transition-delay-200">
            <h2 className="font-headline text-2xl font-bold text-white mb-6 uppercase tracking-widest">1. Admission & Enrollment</h2>
            <p className="mb-6">
              Admission to Peehu Deka Makeup Academy is selective and based on portfolio review or interview. Your enrollment is confirmed only after:
            </p>
            <ul className="list-none space-y-4 pl-0">
              <li className="flex gap-4">
                <span className="text-primary font-bold">/</span>
                <span>Submission of the official enrollment form.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">/</span>
                <span>Payment of the required admission fee.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">/</span>
                <span>Verification of candidate eligibility.</span>
              </li>
            </ul>
          </section>

          <section className="fade-up visible transition-delay-400">
            <h2 className="font-headline text-2xl font-bold text-white mb-6 uppercase tracking-widest">2. Fee Structure & Refunds</h2>
            <p className="mb-6">
              To maintain the high standard of our academy and secure limited seating:
            </p>
            <ul className="list-none space-y-4 pl-0">
              <li className="flex gap-4">
                <span className="text-primary font-bold">/</span>
                <span>All course fees must be paid as per the agreed schedule.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">/</span>
                <span>Admission fees are non-refundable and non-transferable.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">/</span>
                <span>Academy kits provided are part of the curriculum and cannot be returned for cash.</span>
              </li>
            </ul>
          </section>

          <section className="fade-up visible">
            <h2 className="font-headline text-2xl font-bold text-white mb-6 uppercase tracking-widest">3. Code of Conduct</h2>
            <p>
              Students are expected to maintain professional standards during their time at the academy. Any conduct that is deemed unprofessional, disruptive, or harmful to the academy's reputation may result in immediate dismissal without a refund.
            </p>
          </section>

          <section className="fade-up visible">
            <h2 className="font-headline text-2xl font-bold text-white mb-6 uppercase tracking-widest">4. Intellectual Property</h2>
            <p>
              All curriculum materials, techniques, and educational content provided by Peehu Deka Makeup Academy are protected by copyright. Students may not replicate or distribute academy materials for commercial use or external training purposes.
            </p>
          </section>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex justify-between items-center fade-up visible">
          <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Return Home
          </Link>
          <Link href="/privacy" className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:opacity-70 transition-opacity">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
