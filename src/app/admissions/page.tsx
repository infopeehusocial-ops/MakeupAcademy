"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Admissions() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: '',
    vision: '',
    callback: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, '').slice(-10));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> | { target: { name: string, value: any, type?: string, checked?: boolean } }) => {
    const target = e.target;
    const name = target.name;
    let value = 'type' in target && target.type === 'checkbox' ? (target as any).checked : (target as any).value;
    
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
      value = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 0) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = "Enter a valid 10-digit mobile number";
      }
    } else if (step === 1) {
      if (!formData.program) newErrors.program = "Please select a program";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 2) setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // Allow enter to go to next step, but only submit if on final step
      if (currentStep < 2) {
        e.preventDefault();
        nextStep();
      }
      // If currentStep === 2, let the natural form submission happen
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent submission if not on final step
    if (currentStep < 2) {
      nextStep();
      return;
    }

    if (!validateStep(0) || !validateStep(1)) {
      setCurrentStep(0);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const result = await response.json();
        const regId = result.lead?.regId || '';
        router.push(`/thank-you?name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}&program=${encodeURIComponent(formData.program)}&regId=${encodeURIComponent(regId)}`);
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
    <div className="bg-[#0a0a0a] text-white antialiased min-h-screen pt-20 md:pt-32">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 py-12 md:py-24">
        {/* Left Column: context */}
        <div className="lg:col-span-5 fade-up visible">
          <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-6 block">Admissions 2026</span>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight mb-8">
            The Next <br />
            <span className="gold-shimmer italic font-light">Generation.</span>
          </h1>
          <p className="font-body text-lg text-white/50 leading-relaxed mb-12 max-w-lg">
            Our enrollment process is designed to identify passion and potential. Limited seats are available for our upcoming high-end editorial and bridal cohorts.
          </p>
          
          <div className="space-y-10 border-l border-white/5 pl-10 mt-16">
            <div className="fade-up visible transition-delay-200">
              <h4 className="font-headline text-sm font-bold text-primary uppercase tracking-widest mb-1">Personal Mentorship</h4>
              <p className="text-xs text-white/40">Direct training from Peehu Deka herself.</p>
            </div>
            <div className="fade-up visible transition-delay-400">
              <h4 className="font-headline text-sm font-bold text-primary uppercase tracking-widest mb-1">Industry Kit</h4>
              <p className="text-xs text-white/40">Professional products included in curriculum.</p>
            </div>
            <div className="fade-up visible transition-delay-600">
              <h4 className="font-headline text-sm font-bold text-primary uppercase tracking-widest mb-1">Placement Aid</h4>
              <p className="text-xs text-white/40">Direct pipeline to top fashion brands.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Multi-step form */}
        <div className="lg:col-span-7">
          {submitted ? (
             <div className="bg-[#141414] p-8 md:p-16 lg:p-24 border border-white/5 text-center flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] fade-up visible luxury-card">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 md:mb-10 pulse-ring">
                   <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">check_circle</span>
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 gold-shimmer uppercase tracking-widest px-4">Inquiry Received</h2>
                <p className="font-body text-sm md:text-base text-white/40 max-w-sm mx-auto mb-12 md:mb-16 leading-relaxed">Our admissions director will contact you within 24 hours to schedule your portfolio review.</p>
                <button 
                  onClick={() => { setSubmitted(false); setCurrentStep(0); setFormData({ name: '', phone: '', program: '', vision: '', callback: false }); setErrors({}); }}
                  className="w-full sm:w-auto px-12 py-5 border border-primary/30 text-primary font-bold text-xs uppercase tracking-[0.2em] gold-button-glow transition-all"
                >
                  New inquiry
                </button>
             </div>
          ) : (
            <div className="bg-[#141414] p-6 md:p-10 lg:p-16 border border-white/5 luxury-card relative overflow-hidden fade-up visible">
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-16 border-b border-white/5 pb-8 md:pb-10 gap-6">
                  <div>
                    <h2 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-widest text-white">Academy Inquiry</h2>
                    <p className="text-[9px] md:text-[10px] text-white/30 mt-2 uppercase tracking-[0.2em]">Step {currentStep + 1} of 03</p>
                  </div>
                  <div className="flex gap-1.5 md:gap-2 w-full sm:w-auto">
                    {[0,1,2].map(s => (
                       <div key={s} className={`h-1 flex-1 sm:w-16 transition-all duration-700 ${s <= currentStep ? 'bg-primary' : 'bg-white/5'}`}></div>
                    ))}
                  </div>
               </div>

               <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="min-h-[350px] flex flex-col justify-between">
                  <div className="overflow-hidden relative flex-1">
                    {/* Step 1 */}
                     <div className={`space-y-8 md:space-y-12 transition-all duration-700 w-full ${currentStep === 0 ? 'opacity-100 translate-x-0 relative z-10' : 'opacity-0 absolute inset-0 -translate-x-full pointer-events-none z-0'}`}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        <div className="space-y-3 md:space-y-4">
                          <div className="flex justify-between items-end">
                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Your Name</label>
                            {errors.name && <span className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.name}</span>}
                          </div>
                          <input name="name" required value={formData.name} onChange={handleInputChange} className={`w-full bg-transparent border-b ${errors.name ? 'border-red-500/50' : 'border-white/10'} focus:border-primary px-0 py-3 md:py-4 text-lg md:text-xl outline-none transition-all placeholder:text-white/10`} placeholder="Full name" />
                        </div>
                        <div className="space-y-3 md:space-y-4">
                          <div className="flex justify-between items-end">
                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Contact Number</label>
                            {errors.phone && <span className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.phone}</span>}
                          </div>
                          <input name="phone" required value={formData.phone} onChange={handleInputChange} className={`w-full bg-transparent border-b ${errors.phone ? 'border-red-500/50' : 'border-white/10'} focus:border-primary px-0 py-3 md:py-4 text-lg md:text-xl outline-none transition-all placeholder:text-white/10`} placeholder="10-digit number" />
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                     <div className={`space-y-8 md:space-y-12 transition-all duration-700 w-full ${currentStep === 1 ? 'opacity-100 translate-x-0 relative z-10' : `opacity-0 absolute inset-0 ${currentStep < 1 ? 'translate-x-full' : '-translate-x-full'} pointer-events-none z-0`}`}>
                      <div className="space-y-3 md:space-y-4">
                        <div className="flex justify-between items-end">
                          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Select Program</label>
                          {errors.program && <span className="text-[9px] text-red-500 uppercase tracking-widest font-bold">{errors.program}</span>}
                        </div>
                        <select name="program" required value={formData.program} onChange={handleInputChange} className={`w-full bg-transparent border-b ${errors.program ? 'border-red-500/50' : 'border-white/10'} focus:border-primary px-0 py-3 md:py-4 text-lg md:text-xl outline-none transition-all appearance-none cursor-pointer`}>
                          <option value="" disabled className="bg-[#141414]">Focus of study</option>
                          <option value="bridal" className="bg-[#141414]">Advanced Bridal (12 Weeks)</option>
                          <option value="airbrush" className="bg-[#141414]">HD Airbrush Mastery (8 Weeks)</option>
                          <option value="fashion" className="bg-[#141414]">Fashion & Editorial (16 Weeks)</option>
                        </select>
                      </div>
                    </div>

                    {/* Step 3 */}
                     <div className={`space-y-8 md:space-y-12 transition-all duration-700 w-full ${currentStep === 2 ? 'opacity-100 translate-x-0 relative z-10' : 'opacity-0 absolute inset-0 translate-x-full pointer-events-none z-0'}`}>
                      <div className="space-y-3 md:space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Artistic Vision / Background</label>
                        <textarea name="vision" value={formData.vision} onChange={handleInputChange} className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-3 md:py-4 text-lg md:text-xl outline-none transition-all resize-none placeholder:text-white/10" rows={2} placeholder="Share your experience or goals" />
                      </div>
                      <div className="flex items-center gap-4 group cursor-pointer" onClick={() => handleInputChange({ target: { name: 'callback', value: !formData.callback, type: 'checkbox', checked: !formData.callback } })}>
                         <div className={`w-5 h-5 border flex items-center justify-center transition-all ${formData.callback ? 'bg-primary border-primary' : 'border-white/20'}`}>
                            {formData.callback && <span className="material-symbols-outlined text-black text-sm font-bold">check</span>}
                         </div>
                         <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/50 cursor-pointer">Request immediate callback</label>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-16 md:mt-20">
                    {currentStep > 0 && (
                      <button key="prev-btn" onClick={prevStep} type="button" className="w-full sm:w-auto px-10 py-5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-all">Previous</button>
                    )}
                    {currentStep < 2 ? (
                      <button key="next-btn" onClick={nextStep} type="button" className="w-full flex-1 bg-primary text-black py-5 text-[10px] font-bold uppercase tracking-[0.2em] gold-button-glow transition-all">Continue</button>
                    ) : (
                      <button key="submit-btn" type="submit" disabled={isSubmitting} className="w-full flex-1 bg-primary text-black py-5 text-[10px] font-bold uppercase tracking-[0.2em] gold-button-glow pulse-ring transition-all disabled:opacity-50">
                        {isSubmitting ? "Processing..." : "Submit Enrollment"}
                      </button>
                    )}
                  </div>
               </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

