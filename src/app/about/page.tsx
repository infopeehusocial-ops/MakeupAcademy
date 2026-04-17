import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-primary selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="fade-up">
              <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-6 block">The Visionary</span>
              <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-[-0.03em] leading-tight mb-8">
                The Artist Behind <br />
                <span className="gold-shimmer italic font-light">The Canvas.</span>
              </h1>
              <p className="font-body text-lg text-white/50 leading-relaxed max-w-xl">
                Founded by Peehu Deka, our academy represents a decade of excellence in professional makeup artistry. We don&apos;t just teach techniques; we cultivate artistic vision.
              </p>
            </div>
            <div className="relative fade-up transition-delay-300">
              <div className="aspect-[4/5] relative overflow-hidden border border-white/10 luxury-card group">
                <Image 
                  alt="Peehu Deka - Founder & Principal Educator" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s]" 
                  src="https://i.pinimg.com/1200x/8e/89/35/8e893585507670976a37fb3461364bd5.jpg"
                  fill
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10">
                  <p className="font-headline text-2xl font-bold text-white tracking-widest uppercase">Peehu Deka</p>
                  <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mt-2">Director & Lead Educator</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 border border-primary/20 backdrop-blur-3xl flex items-center justify-center p-8 hidden lg:flex pulse-ring">
                 <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary text-center leading-loose">Accredited by Elite Beauty Council</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="py-24 bg-[#141414] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 luxury-card bg-[#1a1a1a] p-12 border border-white/5 flex flex-col justify-between h-[300px] fade-up relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
               <Image alt="Texture" src="https://i.pinimg.com/1200x/bf/f9/be/bff9bea01c35711b3ce8707acab2089c.jpg" fill className="object-cover" />
            </div>
            <span className="material-symbols-outlined text-primary text-4xl opacity-40 relative z-10">school</span>
            <div className="relative z-10">
              <h3 className="gold-shimmer text-5xl font-bold mb-2">12+</h3>
              <p className="font-label text-xs uppercase tracking-[0.2em] text-white/40">Professional Modules</p>
            </div>
          </div>
          <div className="luxury-card bg-[#1a1a1a] p-12 border border-white/5 flex flex-col justify-between h-[300px] fade-up transition-delay-200">
            <span className="material-symbols-outlined text-primary text-4xl opacity-40">verified_user</span>
            <div>
              <h3 className="gold-shimmer text-4xl font-bold mb-2">100%</h3>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-white/40">Certification</p>
            </div>
          </div>
          <div className="luxury-card bg-[#1a1a1a] p-12 border border-white/5 flex flex-col justify-between h-[300px] fade-up transition-delay-400">
            <span className="material-symbols-outlined text-primary text-4xl opacity-40">history_edu</span>
            <div>
              <h3 className="gold-shimmer text-4xl font-bold mb-2">Legacy</h3>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-white/40">Guwahati&apos;s First</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-40 relative">
        <div className="max-w-4xl mx-auto px-8 text-center fade-up">
           <span className="material-symbols-outlined text-primary text-6xl mb-12 opacity-30">brush</span>
           <h2 className="font-headline text-3xl md:text-5xl font-bold mb-12 uppercase tracking-tight leading-tight italic">
             Defining Artistry through <br /><span className="gold-shimmer not-italic">Rigorous Discipline.</span>
           </h2>
           <p className="font-body text-lg text-white/60 leading-relaxed mb-16">
             Our mission is to bridge the gap between passion and professional industry standards. We provide our students with the technical mastery, professional ethics, and confidence to succeed in the competitive world of high-fashion and bridal makeup.
           </p>
           <div className="flex justify-center flex-wrap gap-12 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              <span className="font-headline text-xl font-bold tracking-[0.4em] uppercase">Vogue</span>
              <span className="font-headline text-xl font-bold tracking-[0.4em] uppercase">Bazaar</span>
              <span className="font-headline text-xl font-bold tracking-[0.4em] uppercase">Elle</span>
           </div>
        </div>
      </section>
    </div>
  );
}
