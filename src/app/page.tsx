import Image from "next/image";
import Script from "next/script";
import StudentVideoCard from "@/components/StudentVideoCard";
import HeroParticles from "@/components/HeroParticles";


export default function Home() {
  return (
    <div className="lowercase-disabled">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Floating Particles */}
        <HeroParticles />

        <div className="absolute inset-0 z-0 fade-up">
          <Image 
            alt="Peehu's Makeover - High Fashion Artistry" 
            className="w-full h-full object-cover object-[50%_25%] opacity-40 bw-reveal-image scale-110 translate-x-8 md:translate-x-16" 
            src="https://asffo800kc6xioqb.public.blob.vercel-storage.com/08C087E8-179D-49AD-AD02-10FAA16A8346.jpg"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-24 lg:pt-20 pb-24 lg:pb-32">
          <div className="lg:col-span-6 lg:col-start-1 text-center lg:text-left relative z-10">
            <div className="fade-up">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 md:mb-10">
                <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                <span className="w-8 md:w-12 h-[1px] bg-primary/30"></span>
                <p className="font-label text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary">Experience Artistry</p>
              </div>
              <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-[-0.03em] leading-[1.1] mb-10 text-on-surface">
                Peehu Deka <br />
                <span className="gold-shimmer">Makeup Academy</span>
              </h1>
              <p className="font-headline text-xl md:text-3xl text-primary/80 mb-8 italic font-light tracking-wide pr-4">
                Best Makeup Academy in Guwahati
              </p>
            </div>
            
            <p className="fade-up font-body text-lg md:text-xl text-white/50 mb-12 max-w-3xl leading-[1.8] transition-delay-200">
              Looking for the best makeup academy in Guwahati? At Peehu Deka Makeup Academy, we help you turn your passion into a professional career. Learn professional makeup artistry with expert guidance and hands-on training.
            </p>
            
            <div className="fade-up flex flex-col sm:flex-row items-center lg:items-start gap-6 md:gap-8 transition-delay-400">
              <a className="w-full sm:w-auto px-8 md:px-10 py-5 bg-gradient-to-r from-primary to-primary-dark text-black font-bold tracking-[0.2em] uppercase text-xs text-center gold-button-glow pulse-ring transition-all" href="/admissions">
                Enroll Today
              </a>
              <a className="w-full sm:w-auto px-8 md:px-10 py-5 border border-primary/30 text-primary font-bold tracking-[0.2em] uppercase text-xs text-center hover:bg-primary hover:text-black transition-all duration-500" href="/courses">
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
      <section className="py-16 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="fade-up text-center lg:text-left">
              <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-6 block">Our Legacy</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold mb-8 md:mb-10 tracking-tight leading-tight uppercase">
                About Peehu Deka <br /><span className="gold-shimmer italic font-light pr-4">Makeup Academy</span>
              </h2>
              <div className="space-y-6 md:space-y-8 font-body text-base md:text-lg text-white/40 leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                   Peehu Deka Makeup Academy is a leading makeup academy in Guwahati, dedicated to training aspiring makeup artists with practical, industry-focused knowledge.
                </p>
                <p>
                  We combine traditional Indian beauty techniques with modern trends to prepare students for real-world opportunities in bridal, fashion, and media industries.
                </p>
                <p className="border-l border-primary/30 pl-6 md:pl-8 text-white/60 italic text-left pr-4">
                  "Our approach is simple – personalized training, hands-on experience, and complete career guidance."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-8 fade-up transition-delay-400">
               <div className="bg-[#141414] p-6 md:p-10 border border-white/5 luxury-card">
                  <h3 className="gold-shimmer text-4xl md:text-5xl font-bold mb-2">10+</h3>
                  <p className="font-label text-[10px] uppercase tracking-widest text-white/30">Years</p>
               </div>
               <div className="bg-[#141414] p-6 md:p-10 border border-white/5 luxury-card mt-8 md:mt-12">
                  <h3 className="gold-shimmer text-4xl md:text-5xl font-bold mb-2">500+</h3>
                  <p className="font-label text-[10px] uppercase tracking-widest text-white/30">Trained</p>
               </div>
               <div className="bg-[#141414] p-6 md:p-10 border border-white/5 luxury-card">
                  <h3 className="gold-shimmer text-4xl md:text-5xl font-bold mb-2">100%</h3>
                  <p className="font-label text-[10px] uppercase tracking-widest text-white/30">Industry Ready</p>
               </div>
               <div className="bg-[#141414] p-6 md:p-10 border border-white/5 luxury-card mt-8 md:mt-12">
                  <h3 className="gold-shimmer text-4xl md:text-5xl font-bold mb-2 text-3xl sm:text-4xl md:text-5xl">Elite</h3>
                  <p className="font-label text-[10px] uppercase tracking-widest text-white/30">Artistry</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-32 bg-[#0e0e0e] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-16 md:mb-32 text-center fade-up">
            <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-6 block">Professional Training</span>
            <h2 className="font-headline text-4xl md:text-7xl font-bold mb-10 text-white uppercase tracking-tighter">
              Makeup Courses <span className="gold-shimmer italic font-light lowercase pr-4">in Guwahati</span>
            </h2>
            <p className="font-body text-white/40 max-w-2xl mx-auto text-lg">From bridal makeup to advanced techniques, our courses are designed to build real skills and confidence.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Bridal Mastery",
                desc: "Learn complete techniques including Assamese, Bengali, and North Indian bridal styles. Hands-on training in draping, skin prep, and client handling.",
                img: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/k2fd3rinaaasathxjvuv.webp",
                objPos: "object-top"
              },
              {
                title: "HD Airbrush Pro",
                desc: "Master HD and airbrush makeup used in weddings, fashion shoots, and media. Learn to create flawless, camera-ready looks for real-world excellence.",
                img: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/709B79A6-F684-4A11-A6BF-EF286AE1B4CC.jpg",
                objPos: "object-top"
              },
              {
                title: "Fashion & Editorial",
                desc: "Explore creative and high-end makeup styles for fashion shoots, runway shows, and media projects. Master textures and high-concept aesthetics.",
                img: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/canvos6xq0jhkftnccvp.webp",
                objPos: "object-top"
              }
            ].map((course, i) => (
              <div key={i} className="luxury-card bg-[#141414] p-8 border border-white/5 fade-up" style={{ transitionDelay: `${i * 0.2}s` }}>
                <div className="aspect-[4/5] mb-8 overflow-hidden bg-[#0a0a0a] relative group">
                  <Image 
                    alt={course.title} 
                    className={`w-full h-full object-cover ${course.objPos} bw-reveal-image transition-transform duration-1000 group-hover:scale-110`} 
                    src={course.img} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
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


      {/* Student Video Reviews */}
      <section className="py-16 md:py-32 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-32 fade-up">
            <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-6 block">Student Testimonials</span>
            <h2 className="font-headline text-4xl md:text-7xl font-bold mb-10 text-white uppercase tracking-tighter">
              Student <span className="gold-shimmer italic font-light pr-4">Reviews</span>
            </h2>
            <p className="font-body text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
              Watch the journeys of our graduates and see how they transformed their passion into professional artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            <StudentVideoCard 
              videoUrl="https://asffo800kc6xioqb.public.blob.vercel-storage.com/67DA1573-1D3A-46D5-A7B5-BBBD0A6A9889.mov"
              title="Featured Success Story"
              delay="0.1s"
            />
            <StudentVideoCard 
              videoUrl="https://asffo800kc6xioqb.public.blob.vercel-storage.com/video-output-3A16389F-C9E9-46B3-A0FE-B143DB4AFDB8-1.mov"
              title="Student Journey"
              delay="0.2s"
            />
            <StudentVideoCard 
              videoUrl="https://asffo800kc6xioqb.public.blob.vercel-storage.com/video-output-3BC8ADD5-CFE1-41B8-8F8A-CFC15986FFAC-1.mov"
              title="Artist Transformation"
              delay="0.3s"
            />
            <StudentVideoCard 
              videoUrl="https://asffo800kc6xioqb.public.blob.vercel-storage.com/video-output-41CD5073-C8FC-418E-A45C-6188EDC1DA0C-1.mov"
              title="Career Launch"
              delay="0.4s"
            />
          </div>

        </div>
        <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
      </section>


      {/* Final CTA Section */}
      <section className="py-16 md:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#0e0e0e] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10 fade-up">
          <h2 className="font-headline text-4xl md:text-6xl font-bold mb-10 text-white uppercase tracking-tighter leading-tight italic pr-4">
            Ready to <span className="gold-shimmer not-italic">Enroll?</span>
          </h2>
          <p className="font-body text-white/40 text-lg mb-12 max-w-2xl mx-auto">
            Join Peehu Deka Makeup Academy in Guwahati and start your career in makeup artistry. Call or WhatsApp to enroll today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 mt-12">
            <a className="px-12 py-5 bg-gradient-to-r from-primary to-primary-dark text-black font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 gold-button-glow pulse-ring transition-all" href="tel:9181032456">
              <span className="material-symbols-outlined text-xl">call</span> CALL TO ENROLL
            </a>
            <a className="px-12 py-5 border border-primary/40 text-primary font-bold tracking-[0.2em] uppercase text-xs flex items-center justify-center gap-3 hover:bg-primary/5 transition-all duration-500" href="https://wa.me/9181032456">
              <span className="material-symbols-outlined text-xl">chat</span> WHATSAPP NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
