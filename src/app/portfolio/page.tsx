"use client";
import { useState } from 'react';
import Image from "next/image";

const categories = [
  "All Work",
  "Bridal Mastery",
  "Editorial & Fashion",
  "Student Showcases",
  "Avant-Garde"
];

const portfolioItems = [
  {
    id: 1,
    category: "Editorial & Fashion",
    title: "Vogue Crimson",
    image: "https://i.pinimg.com/736x/86/87/9c/86879c401e8248877e6a6f3065c08118.jpg",
    span: "md:col-span-8",
    height: "h-[600px]"
  },
  {
    id: 2,
    category: "Bridal Mastery",
    title: "Subtle Radiance",
    image: "https://i.pinimg.com/736x/22/2c/0d/222c0d99123e603e32d2b38bb7636e7b.jpg",
    span: "md:col-span-4",
    height: "h-[600px]"
  },
  {
    id: 3,
    category: "Avant-Garde",
    title: "Gilded Form",
    image: "https://i.pinimg.com/736x/66/cf/79/66cf7979a9db72bf4b78884c3f8238b8.jpg",
    span: "md:col-span-4",
    height: "h-[400px]"
  },
  {
    id: 4,
    category: "Student Showcases",
    title: "Pro Artistry 24",
    image: "https://i.pinimg.com/1200x/bf/f9/be/bff9bea01c35711b3ce8707acab2089c.jpg",
    span: "md:col-span-8",
    height: "h-[400px]"
  },
  {
    id: 5,
    category: "Editorial & Fashion",
    title: "Structural Muse",
    image: "https://i.pinimg.com/1200x/e5/ff/5e/e5ff5eb998eeca2afeca6125adcffe7a.jpg",
    span: "md:col-span-12", // Making this a big hero image in the middle
    height: "h-[500px]",
    extraClass: "mt-12"
  },
  {
    id: 6,
    category: "Bridal Mastery",
    title: "The Final Touch",
    image: "https://i.pinimg.com/1200x/f4/da/cf/f4dacfc00eb330441b096f28b4f0d9a2.jpg",
    span: "md:col-span-6",
    height: "h-[500px]",
  },
  {
    id: 7,
    category: "Avant-Garde",
    title: "Obsidian Textures",
    image: "https://i.pinimg.com/736x/98/02/9d/98029db86788a3e720a8a1a403e4bc9d.jpg",
    span: "md:col-span-6",
    height: "h-[500px]",
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Work");

  const filteredItems = portfolioItems.filter(item => 
    activeFilter === "All Work" || item.category === activeFilter
  );

  return (
    <div className="bg-[#0a0a0a] text-white antialiased min-h-screen selection:bg-primary selection:text-black">
      {/* Hero Section */}
      <section className="relative w-full min-h-[700px] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            alt="Portfolio Mastery" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity" 
            src="https://i.pinimg.com/1200x/e5/ff/5e/e5ff5eb998eeca2afeca6125adcffe7a.jpg"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20 fade-up">
          <span className="block font-label text-xs tracking-[0.4em] text-primary uppercase mb-6">The Gallery</span>
          <h1 className="font-headline text-5xl md:text-8xl font-bold text-white tracking-tight leading-tight mb-8">
            The Art of <br />
            <span className="gold-shimmer italic font-light pr-4">Transformation</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            A curated exhibition of masterful artistry. From bridal elegance to avant-garde editorial, explore the definitive portfolio of Peehu Deka.
          </p>
        </div>
      </section>

      {/* Filtering & Navigation */}
      <section className="w-full bg-[#0a0a0a] border-b border-white/5 sticky top-[80px] z-40">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-12 min-w-max">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`nav-link font-label text-xs tracking-[0.2em] uppercase transition-colors relative pb-1 ${
                  activeFilter === cat ? 'text-primary font-bold' : 'text-white/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetrical Gallery Grid */}
      <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className={`gallery-item luxury-card group cursor-pointer overflow-hidden relative ${item.span} ${item.height} ${item.extraClass || ''} fade-up`}
            >
              <div className="w-full h-full bg-[#1a1a1a] overflow-hidden relative">
                <Image 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] grayscale group-hover:grayscale-0 group-hover:scale-105" 
                  src={item.image}
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <span className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">{item.category}</span>
                  <h3 className="font-headline text-2xl font-bold text-white tracking-widest uppercase">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center fade-up">
          <button className="group inline-flex items-center space-x-4 text-primary hover:text-white transition-all duration-300">
            <span className="font-label text-sm tracking-[0.2em] uppercase font-bold">Explore Archives</span>
            <span className="material-symbols-outlined transition-transform duration-500 group-hover:translate-y-2">arrow_downward</span>
          </button>
        </div>
      </section>
    </div>
  );
}
