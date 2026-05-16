"use client";
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen pt-32 pb-24 lowercase-disabled">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <header className="mb-20 fade-up visible">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 block">Legal Documentation</span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Privacy <br />
            <span className="gold-shimmer italic font-light">Policy.</span>
          </h1>
          <p className="text-white/40 text-sm tracking-widest uppercase font-bold">Last Updated: May 2026</p>
        </header>

        <div className="space-y-16 font-body text-lg leading-relaxed text-white/70">
          <section className="fade-up visible transition-delay-200">
            <h2 className="font-headline text-2xl font-bold text-white mb-6 uppercase tracking-widest">1. Information We Collect</h2>
            <p className="mb-6">
              Peehu Deka Makeup Academy collects information that you provide directly to us through our inquiry and enrollment forms. This includes:
            </p>
            <ul className="list-none space-y-4 pl-0">
              <li className="flex gap-4">
                <span className="text-primary font-bold">/</span>
                <span>Full Name and Contact Details (Phone Number)</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">/</span>
                <span>Course Interests and Career Goals</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">/</span>
                <span>Artistic Vision and Background Information</span>
              </li>
            </ul>
          </section>

          <section className="fade-up visible transition-delay-400">
            <h2 className="font-headline text-2xl font-bold text-white mb-6 uppercase tracking-widest">2. How We Use Your Data</h2>
            <p className="mb-6">
              Your information is used exclusively for academy-related purposes:
            </p>
            <ul className="list-none space-y-4 pl-0">
              <li className="flex gap-4">
                <span className="text-primary font-bold">/</span>
                <span>Processing admissions and scheduling portfolio reviews.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">/</span>
                <span>Communicating course updates via WhatsApp or phone call.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold">/</span>
                <span>Personalizing your educational journey at our academy.</span>
              </li>
            </ul>
          </section>

          <section className="fade-up visible">
            <h2 className="font-headline text-2xl font-bold text-white mb-6 uppercase tracking-widest">3. Data Protection</h2>
            <p>
              We implement industry-standard security measures to protect your personal data. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Your privacy is a cornerstone of the trust we build with our students.
            </p>
          </section>

          <section className="fade-up visible">
            <h2 className="font-headline text-2xl font-bold text-white mb-6 uppercase tracking-widest">4. Contact Us</h2>
            <p className="mb-8">
              If you have any questions regarding this privacy policy, you may contact us using the information below:
            </p>
            <div className="bg-[#141414] border border-white/5 p-8 luxury-card">
              <p className="text-white font-bold mb-2">Peehu Deka Makeup Academy</p>
              <p className="text-white/40 mb-4 text-sm">Guwahati, Assam, India</p>
              <p className="text-primary font-bold tracking-widest text-sm uppercase">admin@peehudeka.com</p>
            </div>
          </section>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex justify-between items-center fade-up visible">
          <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 hover:text-primary transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Return Home
          </Link>
          <Link href="/terms" className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary hover:opacity-70 transition-opacity">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
