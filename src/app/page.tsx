import Image from "next/image";

export default function Home() {
  return (
    <div className="lowercase-disabled">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float-particle ${5 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 z-0">
          <Image 
            alt="Peehu's Makeover - High Fashion Artistry" 
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity" 
            src="https://i.pinimg.com/736x/97/98/80/979880aca9bde71cbf1b2dd90ce89701.jpg"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
          <div className="lg:col-span-10 lg:col-start-1">
            <div className="fade-up">
              <div className="flex items-center gap-4 mb-10">
                <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-10 h-10 object-contain" />
                <span className="w-12 h-[1px] bg-primary/30"></span>
                <p className="font-label text-xs uppercase tracking-[0.4em] text-primary">Experience Artistry</p>
              </div>
              <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-[-0.03em] leading-[1.1] mb-10 text-on-surface">
                Peehu Deka <br />
                <span className="gold-shimmer">Makeup Academy</span>
              </h1>
              <p className="font-headline text-xl md:text-3xl text-primary/80 mb-8 italic font-light tracking-wide">
                Best Makeup Academy in Guwahati
              </p>
            </div>
            
            <p className="fade-up font-body text-lg md:text-xl text-white/50 mb-12 max-w-3xl leading-[1.8] transition-delay-200">
              Looking for the best makeup academy in Guwahati? At Peehu Deka Makeup Academy, we help you turn your passion into a professional career. Learn professional makeup artistry with expert guidance and hands-on training.
            </p>
            
            <div className="fade-up flex flex-col sm:flex-row gap-8 transition-delay-400">
              <a className="px-10 py-5 bg-gradient-to-r from-primary to-primary-dark text-black font-bold tracking-[0.2em] uppercase text-xs text-center gold-button-glow pulse-ring transition-all" href="/admissions">
                Enroll Today & Start Your Career
              </a>
              <a className="px-10 py-5 border border-primary/30 text-primary font-bold tracking-[0.2em] uppercase text-xs text-center hover:bg-primary hover:text-black transition-all duration-500" href="/courses">
                View Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee modules */}
      <div className="w-full py-8 overflow-hidden bg-primary relative z-20">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-12 px-6 text-sm tracking-[0.4em] uppercase font-bold text-black whitespace-nowrap">
              ✦ Bridal Mastery ✦ HD Airbrush ✦ Editorial Training ✦ Fashion Week Ready ✦ SFX Artistry ✦ Pro Certification ✦ Hands-on Experience ✦ Internship Support ✦
            </span>
          ))}
        </div>
      </div>

      {/* About Section on Home */}
      <section className="py-40 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="fade-up">
              <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-6 block">Our Legacy</span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight uppercase">
                About Peehu Deka <br /><span className="gold-shimmer italic font-light">Makeup Academy</span>
              </h2>
              <div className="space-y-8 font-body text-lg text-white/40 leading-relaxed max-w-xl">
                <p>
                  Peehu Deka Makeup Academy is a leading makeup academy in Guwahati, dedicated to training aspiring makeup artists with practical, industry-focused knowledge.
                </p>
                <p>
                  We combine traditional Indian beauty techniques with modern trends to prepare students for real-world opportunities in bridal, fashion, and media industries.
                </p>
                <p className="border-l border-primary/30 pl-8 text-white/60 italic">
                  "Our approach is simple – personalized training, hands-on experience, and complete career guidance."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 fade-up transition-delay-400">
               <div className="bg-[#141414] p-10 border border-white/5 luxury-card">
                  <h3 className="gold-shimmer text-5xl font-bold mb-2">10+</h3>
                  <p className="font-label text-[10px] uppercase tracking-widest text-white/30">Years</p>
               </div>
               <div className="bg-[#141414] p-10 border border-white/5 luxury-card mt-12">
                  <h3 className="gold-shimmer text-5xl font-bold mb-2">500+</h3>
                  <p className="font-label text-[10px] uppercase tracking-widest text-white/30">Trained</p>
               </div>
               <div className="bg-[#141414] p-10 border border-white/5 luxury-card">
                  <h3 className="gold-shimmer text-5xl font-bold mb-2">95%</h3>
                  <p className="font-label text-[10px] uppercase tracking-widest text-white/30">Placements</p>
               </div>
               <div className="bg-[#141414] p-10 border border-white/5 luxury-card mt-12">
                  <h3 className="gold-shimmer text-5xl font-bold mb-2">Elite</h3>
                  <p className="font-label text-[10px] uppercase tracking-widest text-white/30">Artistry</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-40 bg-[#0e0e0e] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-32 text-center fade-up">
            <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-6 block">Professional Training</span>
            <h2 className="font-headline text-4xl md:text-7xl font-bold mb-10 text-white uppercase tracking-tighter">
              Makeup Courses <span className="gold-shimmer italic font-light lowercase">in Guwahati</span>
            </h2>
            <p className="font-body text-white/40 max-w-2xl mx-auto text-lg">From bridal makeup to advanced techniques, our courses are designed to build real skills and confidence.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Bridal Mastery",
                desc: "Learn complete techniques including Assamese, Bengali, and North Indian bridal styles. Hands-on training in draping, skin prep, and client handling.",
                img: "https://i.pinimg.com/736x/22/2c/0d/222c0d99123e603e32d2b38bb7636e7b.jpg"
              },
              {
                title: "HD Airbrush Pro",
                desc: "Master HD and airbrush makeup used in weddings, fashion shoots, and media. Learn to create flawless, camera-ready looks for real-world excellence.",
                img: "https://i.pinimg.com/736x/66/cf/79/66cf7979a9db72bf4b78884c3f8238b8.jpg"
              },
              {
                title: "Fashion & Editorial",
                desc: "Explore creative and high-end makeup styles for fashion shoots, runway shows, and media projects. Master textures and high-concept aesthetics.",
                img: "https://i.pinimg.com/1200x/f4/da/cf/f4dacfc00eb330441b096f28b4f0d9a2.jpg"
              }
            ].map((course, i) => (
              <div key={i} className="luxury-card bg-[#141414] p-8 border border-white/5 fade-up" style={{ transitionDelay: `${i * 0.2}s` }}>
                <div className="aspect-[4/5] mb-8 overflow-hidden bg-[#0a0a0a] relative group">
                  <Image alt={course.title} className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110" src={course.img} fill />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white mb-6 uppercase tracking-widest">{course.title}</h3>
                <p className="font-body text-white/40 mb-10 text-sm leading-relaxed">{course.desc}</p>
                <a className="inline-flex items-center text-primary font-bold text-[10px] uppercase tracking-[0.2em] group" href="/courses">
                  Explore Module <span className="material-symbols-outlined ml-3 text-lg transition-transform group-hover:translate-x-2">arrow_forward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Testimonials (The Legacy) */}
      <section className="py-40 relative overflow-hidden bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-24 fade-up">
            <h2 className="font-headline text-4xl font-bold mb-6 text-white uppercase tracking-tight">Student <span className="gold-shimmer">Success</span></h2>
            <p className="font-body text-white/40 max-w-2xl mx-auto leading-relaxed">Join 500+ artists who launched their beauty careers with us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="fade-up luxury-card bg-white/5 backdrop-blur-3xl p-12 border border-white/10">
              <span className="material-symbols-outlined text-primary text-5xl mb-8 opacity-40">format_quote</span>
              <p className="font-body text-white/60 mb-10 text-lg leading-relaxed italic">"The attention to detail transformed my understanding. The HD Airbrush module is unmatched in the region."</p>
              <div>
                <p className="font-headline text-sm font-bold text-white tracking-widest uppercase">Ananya S.</p>
                <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary mt-1">Lead MUA, Vogue India</p>
              </div>
            </div>
            
            <div className="fade-up luxury-card bg-white/5 backdrop-blur-3xl p-12 border border-white/10 lg:translate-y-12">
              <span className="material-symbols-outlined text-primary text-5xl mb-8 opacity-40">format_quote</span>
              <p className="font-body text-white/60 mb-10 text-lg leading-relaxed italic">"More than techniques, I learned the business of beauty. The placement support launched my career instantly."</p>
              <div>
                <p className="font-headline text-sm font-bold text-white tracking-widest uppercase">Priya R.</p>
                <p className="font-label text-[10px] uppercase tracking-[0.2em] text-primary mt-1">Independent Artist</p>
              </div>
            </div>
            
            <div className="fade-up luxury-card bg-gradient-to-br from-[#141414] to-[#0a0a0a] p-12 flex flex-col justify-center items-center text-center border border-white/10">
              <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center mb-8 pulse-ring">
                <span className="material-symbols-outlined text-4xl text-primary">workspace_premium</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-white mb-4 uppercase tracking-wider">Internationally Certified</h3>
              <p className="font-body text-white/40 text-sm leading-relaxed">Our curriculum aligns with global standards, ensuring your certification holds weight worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 bg-gradient-to-b from-[#0a0a0a] to-[#0e0e0e] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10 fade-up">
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-10 text-white uppercase tracking-tighter leading-tight italic">
            Ready to <span className="gold-shimmer not-italic">Enroll?</span>
          </h2>
          <p className="font-body text-white/40 text-lg mb-12 max-w-2xl mx-auto">
            Join Peehu Deka Makeup Academy in Guwahati and start your career in makeup artistry. Call or WhatsApp to enroll today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-12">
            <a className="px-12 py-5 bg-gradient-to-r from-primary to-primary-dark text-black font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 gold-button-glow pulse-ring transition-all" href="tel:+919678000000">
              <span className="material-symbols-outlined text-xl">call</span> CALL TO ENROLL
            </a>
            <a className="px-12 py-5 border border-primary/40 text-primary font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 hover:bg-primary/5 transition-all duration-500" href="https://wa.me/919678000000">
              <span className="material-symbols-outlined text-xl">chat</span> WHATSAPP NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
