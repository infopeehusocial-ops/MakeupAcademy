import Image from "next/image";

export default function Courses() {
  const courses = [
    {
      title: "Bridal Makeup Course",
      category: "Professional Mastery",
      description: "Learn complete bridal makeup techniques including Assamese, Bengali, and North Indian bridal styles. Get hands-on training in draping, skin prep, and client handling.",
      image: "https://i.pinimg.com/736x/22/2c/0d/222c0d99123e603e32d2b38bb7636e7b.jpg",
      side: "left"
    },
    {
      title: "HD Airbrush Course",
      category: "Cinematic Excellence",
      description: "Master HD and airbrush makeup used in weddings, fashion shoots, and media. Learn to create flawless, camera-ready looks for real-world excellence.",
      image: "https://i.pinimg.com/736x/66/cf/79/66cf7979a9db72bf4b78884c3f8238b8.jpg",
      side: "right"
    },
    {
      title: "Fashion & Editorial Makeup",
      category: "Creative Vision",
      description: "Explore creative and high-end makeup styles for fashion shoots, runway shows, and media projects. Master textures and high-concept aesthetics.",
      image: "https://i.pinimg.com/1200x/f4/da/cf/f4dacfc00eb330441b096f28b4f0d9a2.jpg",
      side: "left"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-primary selection:text-black pt-20 md:pt-32 lowercase-disabled">
      {/* Header */}
      <header className="px-6 md:px-8 max-w-7xl mx-auto py-12 md:py-20 text-center">
        <div className="fade-up">
          <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-6 block">Professional Training</span>
          <h1 className="font-headline text-4xl md:text-8xl font-bold tracking-tight mb-8">
            Makeup Courses <br /><span className="gold-shimmer italic font-light lowercase pr-4">in Guwahati</span>
          </h1>
          <p className="font-body text-base md:text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
            At Peehu Deka Makeup Academy, we help you turn your passion into a professional career with industry-focused curriculums.
          </p>
        </div>
      </header>

      {/* Courses List */}
      <section className="px-6 md:px-8 max-w-[1920px] mx-auto pb-24 lg:pb-48">
        <div className="space-y-24 lg:space-y-48">
          {courses.map((course, i) => (
            <div key={i} className={`flex flex-col ${course.side === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-32 fade-up`}>
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-[4/5] lg:aspect-[16/10] relative overflow-hidden luxury-card border border-white/5 bg-[#141414]">
                  <Image 
                    alt={course.title} 
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]" 
                    src={course.image}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 border border-primary/20 backdrop-blur-3xl hidden lg:flex items-center justify-center p-6 pulse-ring">
                   <p className="text-[10px] uppercase font-bold tracking-widest text-primary text-center">Module 0{i+1}</p>
                </div>
              </div>
              
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <span className="font-label text-xs tracking-[0.3em] text-primary uppercase mb-6 block">{course.category}</span>
                <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tighter text-white">
                  {course.title.split(' ')[0]} <br />
                  <span className="text-white/40">{course.title.split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className="font-body text-base md:text-lg text-white/50 leading-relaxed mb-10 md:mb-12">
                  {course.description}
                </p>
                <a className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 border border-primary/30 text-primary font-bold tracking-[0.2em] uppercase text-xs hover:bg-primary hover:text-black transition-all duration-500 gold-button-glow" href="/admissions">
                  Enroll in course
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-24 lg:py-40 bg-[#0e0e0e] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="fade-up text-center lg:text-left">
              <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-6 block">The Result</span>
              <h2 className="font-headline text-3xl md:text-7xl font-bold uppercase mb-10 leading-[1.1]">
                What <br />
                <span className="gold-shimmer italic font-light pr-4">Certificate Will <br /> You Earn?</span>
              </h2>
            </div>
            <div className="fade-up transition-delay-300">
               <div className="luxury-card bg-[#141414] p-12 border border-white/5">
                 <h3 className="font-headline text-2xl font-bold text-white mb-6 uppercase tracking-widest">Industry-Leading Certification</h3>
                 <p className="font-body text-lg text-white/50 leading-relaxed">
                   Upon completion, you&apos;ll receive a Dual-Certified Professional Credential that meets both Global Quality Standards and National Business Excellence criteria. 
                 </p>
                 <p className="font-body text-lg text-white/50 leading-relaxed mt-6">
                   It&apos;s not just a piece of paper, it&apos;s the official key to unlocking high-end career opportunities and female-led entrepreneurship.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 lg:py-40 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-24 fade-up text-center md:text-left">
            <div>
              <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-4 block">The Experience</span>
              <h2 className="font-headline text-3xl md:text-6xl font-bold uppercase">Course <span className="gold-shimmer italic font-light pr-4">Highlights.</span></h2>
            </div>
            <p className="font-body text-white/40 max-w-xs mt-6 md:mt-0 text-sm italic">Designed for real-world mastery and career growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "HD & Airbrush Techniques",
              "Bridal & Party Hair Styling",
              "International Makeup Techniques",
              "Saree Draping",
              "Self Grooming & Product Expertise",
              "Marketing Skills To Building Your Brand",
              "Professional Portfolio Shoot Included"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-8 border border-white/5 bg-[#141414]/50 fade-up" style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="material-symbols-outlined text-primary text-2xl opacity-40">verified</span>
                <span className="font-label text-xs uppercase tracking-[0.15em] text-white/70">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-20 font-body text-center text-primary/60 italic fade-up">Receive Nationally Trusted and Globally Recognized certification upon completion</p>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 lg:py-24 bg-[#141414] border-t border-white/5">
         <div className="max-w-4xl mx-auto px-6 md:px-8 text-center fade-up">
            <h2 className="font-headline text-2xl md:text-5xl font-bold mb-10 text-white uppercase italic pr-4">Ready to master the craft?</h2>
            <p className="font-body text-white/40 mb-10 md:mb-12 text-base md:text-lg">Personalized training, hands-on experience, and complete career guidance.</p>
            <a className="w-full sm:w-auto px-10 py-5 bg-primary text-black font-bold tracking-[0.2em] uppercase text-xs gold-button-glow pulse-ring inline-block" href="/admissions">Secure your spot</a>
         </div>
      </section>
    </div>
  );
}
