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
    <div className="bg-[#0a0a0a] text-white selection:bg-primary selection:text-black pt-32 lowercase-disabled">
      {/* Header */}
      <header className="px-8 max-w-7xl mx-auto py-24 text-center">
        <div className="fade-up">
          <span className="font-label text-xs tracking-[0.4em] text-primary uppercase mb-6 block">Professional Training</span>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tight mb-8">
            Makeup Courses <br /><span className="gold-shimmer italic font-light lowercase">in Guwahati</span>
          </h1>
          <p className="font-body text-lg text-white/50 leading-relaxed max-w-2xl mx-auto">
            At Peehu Deka Makeup Academy, we help you turn your passion into a professional career with industry-focused curriculums.
          </p>
        </div>
      </header>

      {/* Courses List */}
      <section className="px-8 max-w-[1920px] mx-auto pb-48">
        <div className="space-y-48">
          {courses.map((course, i) => (
            <div key={i} className={`flex flex-col ${course.side === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20 lg:gap-32 fade-up`}>
              <div className="w-full lg:w-1/2 relative group">
                <div className="aspect-[4/5] lg:aspect-[16/10] relative overflow-hidden luxury-card border border-white/5 bg-[#141414]">
                  <Image 
                    alt={course.title} 
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s]" 
                    src={course.image}
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 border border-primary/20 backdrop-blur-3xl hidden lg:flex items-center justify-center p-6 pulse-ring">
                   <p className="text-[10px] uppercase font-bold tracking-widest text-primary text-center">Module 0{i+1}</p>
                </div>
              </div>
              
              <div className="w-full lg:w-1/3">
                <span className="font-label text-xs tracking-[0.3em] text-primary uppercase mb-6 block">{course.category}</span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 uppercase tracking-tighter text-white">
                  {course.title.split(' ')[0]} <br />
                  <span className="text-white/40">{course.title.split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className="font-body text-lg text-white/50 leading-relaxed mb-12">
                  {course.description}
                </p>
                <a className="inline-flex items-center justify-center px-10 py-5 border border-primary/30 text-primary font-bold tracking-[0.2em] uppercase text-xs hover:bg-primary hover:text-black transition-all duration-500 gold-button-glow" href="/admissions">
                  Enroll in course
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-[#141414] border-t border-white/5">
         <div className="max-w-4xl mx-auto px-8 text-center fade-up">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-10 text-white uppercase italic">Ready to master the craft?</h2>
            <p className="font-body text-white/40 mb-12 text-lg">Personalized training, hands-on experience, and complete career guidance.</p>
            <a className="px-10 py-5 bg-primary text-black font-bold tracking-[0.2em] uppercase text-xs gold-button-glow pulse-ring" href="/admissions">Secure your spot</a>
         </div>
      </section>
    </div>
  );
}
