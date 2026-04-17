"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, course: formData.subject }),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-white antialiased min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://i.pinimg.com/1200x/bf/f9/be/bff9bea01c35711b3ce8707acab2089c.jpg" 
          alt="Studio Background" 
          fill 
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
      </div>

      <main className="relative z-10 px-8 lg:px-24 pt-48 pb-32 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        {/* Left Content */}
        <div className="lg:col-span-5 fade-up">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 block">Admissions Open</span>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-10">
            Begin Your <br />
            <span className="gold-shimmer italic font-light">Transformation.</span>
          </h1>
          <p className="font-body text-xl text-white/50 leading-relaxed max-w-lg mb-12">
            Step into the world of high-end editorial and bridal artistry. Our intensive programs are designed to turn raw passion into undeniable professional authority. Secure your place.
          </p>
          
          <div className="hidden lg:block aspect-square relative max-w-sm grayscale opacity-30 border border-white/5 luxury-card">
            <Image 
              src="https://i.pinimg.com/736x/22/2c/0d/222c0d99123e603e32d2b38bb7636e7b.jpg" 
              alt="Artistry Sample" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Inquire Now Form */}
        <div className="lg:col-span-7">
          {submitted ? (
             <div className="bg-[#141414]/40 backdrop-blur-3xl p-16 lg:p-24 border border-white/5 text-center flex flex-col items-center justify-center min-h-[600px] fade-up luxury-card">
                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-10 pulse-ring">
                  <span className="material-symbols-outlined text-4xl text-primary">mark_email_read</span>
                </div>
                <h2 className="font-headline text-4xl font-bold mb-6 gold-shimmer uppercase tracking-widest">Inquiry Received</h2>
                <p className="font-body text-white/40 max-w-sm mx-auto mb-16 leading-relaxed">Our admissions director will connect with you within 24 hours.</p>
                <button 
                  onClick={() => { setSubmitted(false); setCurrentStep(0); }}
                  className="px-12 py-5 border border-primary/30 text-primary font-bold text-xs uppercase tracking-[0.2em] gold-button-glow"
                >
                  New inquiry
                </button>
             </div>
          ) : (
            <div className="bg-[#141414]/30 backdrop-blur-3xl p-10 lg:p-20 border border-white/5 luxury-card relative overflow-hidden fade-up">
               <div className="mb-16">
                  <h2 className="font-headline text-4xl font-bold tracking-tight text-white mb-4">Inquire Now</h2>
                  <p className="font-body text-white/40 uppercase text-[10px] tracking-[0.2em]">Leave your details. Our admissions director will connect with you.</p>
               </div>

               <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Full Name</label>
                      <input name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-4 text-xl outline-none transition-all placeholder:text-white/5" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Phone Number</label>
                      <input name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-4 text-xl outline-none transition-all placeholder:text-white/5" placeholder="+91 00000 00000" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Program of Interest</label>
                    <select name="subject" required value={formData.subject} onChange={handleInputChange} className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-4 text-xl outline-none transition-all appearance-none cursor-pointer">
                      <option value="" disabled className="bg-[#0a0a0a]">Select a program</option>
                      <option value="bridal" className="bg-[#0a0a0a]">Advanced Bridal Mastery</option>
                      <option value="airbrush" className="bg-[#0a0a0a]">HD Airbrush Pro</option>
                      <option value="fashion" className="bg-[#0a0a0a]">Editorial & Fashion</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Your Vision (Optional)</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-4 text-xl outline-none transition-all resize-none placeholder:text-white/5" rows={2} placeholder="Tell us about your goals" />
                  </div>

                  <button type="submit" className="w-full bg-primary text-black py-5 text-[10px] font-bold uppercase tracking-[0.2em] gold-button-glow pulse-ring transition-all">Submit Enrollment</button>
               </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
