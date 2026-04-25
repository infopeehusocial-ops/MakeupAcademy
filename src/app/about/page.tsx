import Image from "next/image";

export default function About() {
  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-primary selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-40 pb-12 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="fade-up text-center lg:text-left">
              <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-6 block">The Visionary</span>
              <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-[-0.03em] leading-tight mb-8">
                The Artist Behind <br />
                <span className="gold-shimmer italic font-light pr-4">The Canvas.</span>
              </h1>
              <p className="font-body text-lg text-white/50 leading-relaxed max-w-xl">
                Peehu is a professional makeup artist and certified makeup educator known for her precision and clean, high-end finish. She trained under renowned celebrity makeup artist Parul Garg and further refined her skills at the London Academy of Freelance Makeup.
              </p>
            </div>
            <div className="relative fade-up transition-delay-300">
              <div className="aspect-[4/5] relative overflow-hidden border border-white/10 luxury-card group">
                <Image 
                  alt="Peehu Deka - Founder & Principal Educator" 
                  className="w-full h-full object-cover bw-reveal-image" 
                  src="https://asffo800kc6xioqb.public.blob.vercel-storage.com/Peehu%E2%80%99s%20single%20photos%20%281%29.jpg"
                  fill
                   priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
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

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32 relative bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative fade-up order-2 lg:order-1">
              <div className="aspect-square relative overflow-hidden border border-white/5 luxury-card group">
                <Image 
                  src="https://asffo800kc6xioqb.public.blob.vercel-storage.com/Peehu%E2%80%99s%20single%20photos%20%281%29.jpeg" 
                  alt="Artistic Philosophy" 
                  fill 
                  className="object-cover bw-reveal-image"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              </div>
            </div>
            <div className="fade-up order-1 lg:order-2 text-center lg:text-left">
              <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-6 block">The Approach</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold uppercase mb-8 md:mb-10 leading-tight">Modern Trends. <br /><span className="gold-shimmer italic font-light pr-4">Timeless Aesthetics.</span></h2>
              <div className="space-y-6">
                <p className="font-body text-lg text-white/60 leading-relaxed">
                  She specialises in bridal makeup, professional makeup courses, and advanced beauty training. Her style brings together global makeup trends and Indian aesthetics to create looks that feel modern, polished, and timeless.
                </p>
                <p className="font-body text-lg text-white/60 leading-relaxed">
                  Her approach focuses on skin-first makeup, luxury beauty standards, and practical techniques that work in real client scenarios. Her work blends strong technical knowledge with international makeup techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="py-20 lg:py-24 bg-[#141414] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          <div className="md:col-span-2 luxury-card bg-[#1a1a1a] p-8 md:p-12 border border-white/5 flex flex-col justify-between h-[220px] md:h-[300px] fade-up relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
               <Image alt="Texture" src="https://i.pinimg.com/1200x/bf/f9/be/bff9bea01c35711b3ce8707acab2089c.jpg" fill className="object-cover" sizes="(max-width: 1200px) 100vw, 50vw" />
            </div>
            <span className="material-symbols-outlined text-primary text-3xl md:text-4xl opacity-40 relative z-10">school</span>
            <div className="relative z-10">
              <h3 className="gold-shimmer text-4xl md:text-5xl font-bold mb-2">12+</h3>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-white/40">Professional Modules</p>
            </div>
          </div>
          <div className="luxury-card bg-[#1a1a1a] p-8 md:p-12 border border-white/5 flex flex-col justify-between h-[250px] md:h-[300px] fade-up transition-delay-200">
            <span className="material-symbols-outlined text-primary text-3xl md:text-4xl opacity-40">verified_user</span>
            <div>
              <h3 className="gold-shimmer text-3xl md:text-4xl font-bold mb-2">100%</h3>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-white/40">Certification</p>
            </div>
          </div>
          <div className="luxury-card bg-[#1a1a1a] p-8 md:p-12 border border-white/5 flex flex-col justify-between h-[250px] md:h-[300px] fade-up transition-delay-400">
            <span className="material-symbols-outlined text-primary text-3xl md:text-4xl opacity-40">history_edu</span>
            <div>
              <h3 className="gold-shimmer text-3xl md:text-4xl font-bold mb-2">Legacy</h3>
              <p className="font-label text-[10px] uppercase tracking-[0.2em] text-white/40">Guwahati&apos;s First</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Portraits Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 fade-up text-center md:text-left">
            <div>
              <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-4 block">Archive</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold uppercase">The Artist <span className="gold-shimmer italic font-light pr-4">In Focus.</span></h2>
            </div>
            <p className="font-body text-white/40 max-w-xs mt-6 md:mt-0 text-sm md:text-base">A glimpse into the professional presence and artistic persona of Peehu Deka.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group luxury-card bg-[#1a1a1a] aspect-[3/4] relative overflow-hidden fade-up">
              <Image 
                src="https://asffo800kc6xioqb.public.blob.vercel-storage.com/Peehu%E2%80%99s%20single%20photos%20%281%29.jpg"
                alt="Peehu Deka Portrait Collection 1"
                fill
                className="object-cover bw-reveal-image"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="group luxury-card bg-[#1a1a1a] aspect-[3/4] relative overflow-hidden fade-up transition-delay-200 lg:translate-y-12">
              <Image 
                src="https://asffo800kc6xioqb.public.blob.vercel-storage.com/Peehu%E2%80%99s%20single%20photos%20%282%29.jpeg"
                alt="Peehu Deka Portrait Collection 2"
                fill
                className="object-cover bw-reveal-image"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="group luxury-card bg-[#1a1a1a] aspect-[3/4] relative overflow-hidden fade-up transition-delay-400 lg:translate-y-24">
              <Image 
                src="https://asffo800kc6xioqb.public.blob.vercel-storage.com/Peehu%E2%80%99s%20single%20photos%20%283%29.jpeg"
                alt="Peehu Deka Portrait Collection 3"
                fill
                className="object-cover bw-reveal-image"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-40 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center fade-up">
           <span className="material-symbols-outlined text-primary text-5xl md:text-6xl mb-10 md:mb-12 opacity-30">brush</span>
           <h2 className="font-headline text-2xl md:text-5xl font-bold mb-10 md:mb-12 uppercase tracking-tight leading-tight italic px-4 pr-6">
             Cultivating the next <br /><span className="gold-shimmer not-italic">Elite Generation.</span>
           </h2>
           <p className="font-body text-base md:text-lg text-white/60 leading-relaxed mb-12 md:mb-16">
             At Peehu Deka Makeup Academy, the focus is on hands-on learning, portfolio building, and understanding how to attract and work with clients. The training is designed to help aspiring artists build real skills, gain confidence, and grow into professional makeup artists with a strong foundation and global perspective.
           </p>
           <div className="flex justify-center flex-wrap gap-8 md:gap-12 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              <span className="font-headline text-lg md:text-xl font-bold tracking-[0.4em] uppercase">Vogue</span>
              <span className="font-headline text-lg md:text-xl font-bold tracking-[0.4em] uppercase">Bazaar</span>
              <span className="font-headline text-lg md:text-xl font-bold tracking-[0.4em] uppercase">Elle</span>
           </div>
        </div>
      </section>
    </div>
  );
}
