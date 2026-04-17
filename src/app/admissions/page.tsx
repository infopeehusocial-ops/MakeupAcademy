"use client";
import { useState } from 'react';

export default function Admissions() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: '',
    vision: '',
    callback: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
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
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-white antialiased min-h-screen pt-32 lowercase-disabled">
      <div className="max-w-[1920px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-20 py-24">
        {/* Left Column: context */}
        <div className="lg:col-span-5 fade-up">
          <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-6 block">Admissions 2024</span>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight mb-8">
            The Next <br />
            <span className="gold-shimmer italic font-light">Generation.</span>
          </h1>
          <p className="font-body text-lg text-white/50 leading-relaxed mb-12 max-w-lg">
            Our enrollment process is designed to identify passion and potential. Limited seats are available for our upcoming high-end editorial and bridal cohorts.
          </p>
          
          <div className="space-y-10 border-l border-white/5 pl-10 mt-16">
            <div className="fade-up transition-delay-200">
              <h4 className="font-headline text-sm font-bold text-primary uppercase tracking-widest mb-1">Personal Mentorship</h4>
              <p className="text-xs text-white/40">Direct training from Peehu Deka herself.</p>
            </div>
            <div className="fade-up transition-delay-400">
              <h4 className="font-headline text-sm font-bold text-primary uppercase tracking-widest mb-1">Industry Kit</h4>
              <p className="text-xs text-white/40">Professional products included in curriculum.</p>
            </div>
            <div className="fade-up transition-delay-600">
              <h4 className="font-headline text-sm font-bold text-primary uppercase tracking-widest mb-1">Placement Aid</h4>
              <p className="text-xs text-white/40">Direct pipeline to top fashion brands.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Multi-step form */}
        <div className="lg:col-span-7">
          {submitted ? (
             <div className="bg-[#141414] p-16 lg:p-24 border border-white/5 text-center flex flex-col items-center justify-center min-h-[600px] fade-up luxury-card">
                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-10 pulse-ring">
                  <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
                </div>
                <h2 className="font-headline text-4xl font-bold mb-6 gold-shimmer uppercase tracking-widest">Inquiry Received</h2>
                <p className="font-body text-white/40 max-w-sm mx-auto mb-16 leading-relaxed">Our admissions director will contact you within 24 hours to schedule your portfolio review.</p>
                <button 
                  onClick={() => { setSubmitted(false); setCurrentStep(0); }}
                  className="px-12 py-5 border border-primary/30 text-primary font-bold text-xs uppercase tracking-[0.2em] gold-button-glow transition-all"
                >
                  New inquiry
                </button>
             </div>
          ) : (
            <div className="bg-[#141414] p-10 lg:p-16 border border-white/5 luxury-card relative overflow-hidden fade-up">
               <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-10">
                  <div>
                    <h2 className="font-headline text-2xl font-bold uppercase tracking-widest text-white">Academy Inquiry</h2>
                    <p className="text-[10px] text-white/30 mt-2 uppercase tracking-[0.2em]">Step {currentStep + 1} of 03</p>
                  </div>
                  <div className="flex gap-2">
                    {[0,1,2].map(s => (
                       <div key={s} className={`h-1 w-8 sm:w-16 transition-all duration-700 ${s <= currentStep ? 'bg-primary' : 'bg-white/5'}`}></div>
                    ))}
                  </div>
               </div>

               <form onSubmit={handleSubmit} className="min-h-[350px] flex flex-col justify-between">
                  <div className="overflow-hidden relative">
                    {/* Step 1 */}
                    <div className={`space-y-12 transition-all duration-700 ${currentStep === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 -translate-x-full pointer-events-none'}`}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Your Name</label>
                          <input name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-4 text-xl outline-none transition-all placeholder:text-white/10" placeholder="Full name" />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Contact Number</label>
                          <input name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-4 text-xl outline-none transition-all placeholder:text-white/10" placeholder="+91" />
                        </div>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className={`space-y-12 transition-all duration-700 ${currentStep === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 translate-x-full pointer-events-none'}`}>
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Select Program</label>
                        <select name="program" required value={formData.program} onChange={handleInputChange} className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-4 text-xl outline-none transition-all appearance-none cursor-pointer">
                          <option value="" disabled className="bg-[#141414]">Focus of study</option>
                          <option value="bridal" className="bg-[#141414]">Advanced Bridal (12 Weeks)</option>
                          <option value="airbrush" className="bg-[#141414]">HD Airbrush Mastery (8 Weeks)</option>
                          <option value="fashion" className="bg-[#141414]">Fashion & Editorial (16 Weeks)</option>
                        </select>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className={`space-y-12 transition-all duration-700 ${currentStep === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 translate-x-full pointer-events-none'}`}>
                      <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Artistic Vision / Background</label>
                        <textarea name="vision" value={formData.vision} onChange={handleInputChange} className="w-full bg-transparent border-b border-white/10 focus:border-primary px-0 py-4 text-xl outline-none transition-all resize-none placeholder:text-white/10" rows={2} placeholder="Share your experience or goals" />
                      </div>
                      <div className="flex items-center gap-4 group cursor-pointer" onClick={() => handleInputChange({ target: { name: 'callback', value: !formData.callback, type: 'checkbox', checked: !formData.callback } } as any)}>
                         <div className={`w-5 h-5 border flex items-center justify-center transition-all ${formData.callback ? 'bg-primary border-primary' : 'border-white/20'}`}>
                            {formData.callback && <span className="material-symbols-outlined text-black text-sm font-bold">check</span>}
                         </div>
                         <label className="text-[10px] uppercase tracking-[0.2em] text-white/50 cursor-pointer">Request immediate callback</label>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6 mt-20">
                    {currentStep > 0 && (
                      <button onClick={prevStep} type="button" className="px-10 py-5 border border-white/10 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-all">Previous</button>
                    )}
                    {currentStep < 2 ? (
                      <button onClick={nextStep} type="button" className="flex-1 bg-primary text-black py-5 text-[10px] font-bold uppercase tracking-[0.2em] gold-button-glow transition-all">Continue</button>
                    ) : (
                      <button type="submit" className="flex-1 bg-primary text-black py-5 text-[10px] font-bold uppercase tracking-[0.2em] gold-button-glow pulse-ring transition-all">Submit Enrollment</button>
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
