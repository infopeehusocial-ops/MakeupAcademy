"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Contact() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, '').slice(-10));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let finalValue = value;

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    // Restrict phone to numbers only
    if (name === 'phone') {
      finalValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData(prev => ({ ...prev, [name]: finalValue }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
    }
    if (!formData.subject) newErrors.subject = "Please select a program";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, course: formData.subject }),
      });
      if (response.ok) {
        const result = await response.json();
        const regId = result.lead?.regId || '';
        router.push(`/thank-you?name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}&program=${encodeURIComponent(formData.subject)}&regId=${encodeURIComponent(regId)}`);
      } else {
        const error = await response.json();
        alert(error.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="bg-[#0a0a0a] text-white antialiased min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://asffo800kc6xioqb.public.blob.vercel-storage.com/IMG_7843.jpg" 
          alt="Studio Background" 
          fill 
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
      </div>

      <main className="relative z-10 px-8 lg:px-24 pt-48 pb-32 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 fade-up visible">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 block">Admissions Open</span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-10">
            Begin Your <br />
            <span className="gold-shimmer italic font-light">Transformation.</span>
          </h1>
          <p className="font-body text-xl text-white/50 leading-relaxed max-w-lg mb-12">
            Step into the world of high-end editorial and bridal artistry. Our intensive programs are designed to turn raw passion into undeniable professional authority. Secure your place.
          </p>
          
          <div className="hidden lg:block aspect-square relative max-w-sm border border-white/5 luxury-card overflow-hidden">
            <Image 
              src="https://asffo800kc6xioqb.public.blob.vercel-storage.com/52040396-70A8-40B6-A807-8CEF0D498AF5.jpg" 
              alt="Artistry Sample" 
              fill 
              className="object-cover bw-reveal-image"
            />
          </div>
        </div>

        {/* Right: Inquire Now Form */}
        <div className="lg:col-span-6">
          {submitted ? (
             <div className="bg-[#141414]/40 backdrop-blur-3xl p-16 lg:p-24 border border-white/5 text-center flex flex-col items-center justify-center min-h-[600px] fade-up visible luxury-card">
                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-10 pulse-ring">
                   <span className="material-symbols-outlined text-4xl text-primary">mark_email_read</span>
                </div>
                <h2 className="font-headline text-4xl font-bold mb-6 gold-shimmer uppercase tracking-widest text-white">Inquiry Received</h2>
                <p className="font-body text-white/40 max-w-sm mx-auto mb-16 leading-relaxed">Our admissions director will connect with you within 24 hours.</p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', subject: '', message: '' }); setErrors({}); }}
                  className="px-12 py-5 border border-primary/30 text-primary font-bold text-xs uppercase tracking-[0.2em] gold-button-glow"
                >
                  New inquiry
                </button>
             </div>
          ) : (
            <div className="bg-[#141414]/30 backdrop-blur-3xl p-10 lg:p-20 border border-white/5 luxury-card relative overflow-hidden fade-up visible">
               <div className="mb-16">
                  <h2 className="font-headline text-4xl font-bold tracking-tight text-white mb-4">Inquire Now</h2>
                  <p className="font-body text-white/40 uppercase text-[10px] tracking-[0.2em]">Leave your details. Our admissions director will connect with you.</p>
               </div>

               <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Full Name</label>
                        {errors.name && <span className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.name}</span>}
                      </div>
                      <input name="name" required value={formData.name} onChange={handleInputChange} className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500/50' : 'border-white/20'} focus:border-primary px-0 py-4 text-xl text-white outline-none transition-all placeholder:text-white/30`} placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Phone Number</label>
                        {errors.phone && <span className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.phone}</span>}
                      </div>
                      <input name="phone" required value={formData.phone} onChange={handleInputChange} className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-500/50' : 'border-white/20'} focus:border-primary px-0 py-4 text-xl text-white outline-none transition-all placeholder:text-white/30`} placeholder="10-digit number" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Program of Interest</label>
                      {errors.subject && <span className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.subject}</span>}
                    </div>
                    <select name="subject" required value={formData.subject} onChange={handleInputChange} className={`w-full bg-transparent border-b ${errors.subject ? 'border-red-500/50' : 'border-white/20'} focus:border-primary px-0 py-4 text-xl text-white outline-none transition-all appearance-none cursor-pointer`}>
                      <option value="" disabled className="bg-[#0a0a0a]">Select a program</option>
                      <option value="bridal" className="bg-[#0a0a0a]">Advanced Bridal Mastery</option>
                      <option value="airbrush" className="bg-[#0a0a0a]">HD Airbrush Pro</option>
                      <option value="fashion" className="bg-[#0a0a0a]">Editorial & Fashion</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Your Vision (Optional)</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} className="w-full bg-transparent border-b border-white/20 focus:border-primary px-0 py-4 text-xl text-white outline-none transition-all resize-none placeholder:text-white/30" rows={2} placeholder="Tell us about your goals" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-black py-5 text-[10px] font-bold uppercase tracking-[0.2em] gold-button-glow pulse-ring transition-all disabled:opacity-50">
                    {isSubmitting ? "Processing..." : "Submit Enrollment"}
                  </button>
               </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
