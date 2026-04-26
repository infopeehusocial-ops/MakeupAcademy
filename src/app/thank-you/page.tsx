"use client";
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Luxury confirmation page for lead submissions

function ThankYouContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const name = searchParams.get('name') || 'Artist';
  const program = searchParams.get('program') || 'our program';
  const phone = searchParams.get('phone') || '';
  const regId = searchParams.get('regId') || '...';
  
  const getProgramName = (id: string) => {
    switch (id) {
      case 'bridal': return 'Advanced Bridal Mastery';
      case 'airbrush': return 'HD Airbrush Pro';
      case 'fashion': return 'Editorial & Fashion';
      default: return id;
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen relative overflow-hidden flex flex-col items-center justify-center pt-20 px-6">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Image 
          src="https://i.pinimg.com/1200x/bf/f9/be/bff9bea01c35711b3ce8707acab2089c.jpg" 
          alt="Luxury background" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      </div>

      <div className="max-w-2xl w-full bg-[#141414] border border-white/5 p-8 md:p-16 lg:p-20 text-center relative z-10 luxury-card fade-up visible">
        <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-10 mx-auto pulse-ring">
           <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
        </div>

        <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6 gold-shimmer tracking-tight">
          Thank You, <br />
          <span className="italic font-light">{name}!</span>
        </h1>

        <p className="font-body text-white/50 text-lg mb-12 leading-relaxed">
          Your inquiry for <span className="text-primary font-bold">{getProgramName(program)}</span> has been successfully received. 
          Our admissions director will contact you at <span className="text-white/80">{phone}</span> within 24 hours to schedule your interview.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <div className="p-6 border border-white/5 bg-white/[0.02] text-left">
            <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-2">Registration ID</span>
            <span className="font-headline text-sm font-bold text-white tracking-widest uppercase">
              {regId.startsWith('PD-') ? regId : `PD-${regId}`}
            </span>
          </div>
          <div className="p-6 border border-white/5 bg-white/[0.02] text-left">
            <span className="text-[10px] uppercase tracking-widest text-white/30 block mb-2">Priority Status</span>
            <span className="font-headline text-sm font-bold text-primary tracking-widest uppercase">High Potential</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link 
            href="/portfolio" 
            className="px-10 py-5 bg-primary text-black font-bold uppercase tracking-widest text-[10px] gold-button-glow transition-all"
          >
            Explore Portfolio
          </Link>
          <Link 
            href="/" 
            className="px-10 py-5 border border-white/10 text-white/50 font-bold uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Decorative Particles */}
      <div className="mt-20 opacity-20 flex gap-12">
        <Image src="/logo.png" alt="Logo" width={120} height={40} className="h-8 w-auto grayscale" />
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="bg-[#0a0a0a] min-h-screen"></div>}>
      <ThankYouContent />
    </Suspense>
  );
}
