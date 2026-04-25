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
    category: "Bridal Mastery",
    title: "Celestial Glow",
    image: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/08C087E8-179D-49AD-AD02-10FAA16A8346.jpg",
  },
  {
    id: 2,
    category: "Editorial & Fashion",
    title: "Vogue Elegance",
    image: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/52040396-70A8-40B6-A807-8CEF0D498AF5.jpg",
  },
  {
    id: 3,
    category: "Bridal Mastery",
    title: "Ethereal Bride",
    image: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/709B79A6-F684-4A11-A6BF-EF286AE1B4CC.jpg",
  },
  {
    id: 4,
    category: "Editorial & Fashion",
    title: "High Fashion Muse",
    image: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/949FA1C8-DB70-4C85-B6FD-11FFAA7469F1.jpg",
  },
  {
    id: 6,
    category: "Bridal Mastery",
    title: "Royal Portraits",
    image: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/IMG_2855.jpg",
  },
  {
    id: 7,
    category: "Avant-Garde",
    title: "Velvet Sculpt",
    image: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/IMG_7842.jpg",
  },
  {
    id: 8,
    category: "Editorial & Fashion",
    title: "Gilded Vision",
    image: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/IMG_7843.jpg",
  },
  {
    id: 9,
    category: "Student Showcases",
    title: "Student Artistry I",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=A783FC6A-6762-4FA4-B641-5CBADD878D76_z8cfun",
    type: "video",
  },
  {
    id: 10,
    category: "Student Showcases",
    title: "Student Artistry II",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=DAB31740-2664-401B-A470-50EF821890C3_klw3gb",
    type: "video",
  },
  {
    id: 11,
    category: "Student Showcases",
    title: "Student Artistry III",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=924F844E-A42B-4E74-91F0-E9AE71A78871_jhizcx",
    type: "video",
  },
  {
    id: 12,
    category: "Student Showcases",
    title: "Academy Life",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=Academy_b7uumu",
    type: "video",
  },
  {
    id: 13,
    category: "Student Showcases",
    title: "Student Artistry IV",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=22E0A3EB-B39B-4E60-9DDC-E5DB72F1B9B4_obpink",
    type: "video",
  },
  {
    id: 14,
    category: "Student Showcases",
    title: "Student Artistry V",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=9BABA188-C86B-4169-8FE5-265EA8F30C5A_zp69az",
    type: "video",
  },
  {
    id: 15,
    category: "Student Showcases",
    title: "Transformation Story",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=656198ED-D7F5-4400-8DC8-F6DCEA1CE894_igamgx",
    type: "video",
  },
  {
    id: 16,
    category: "Student Showcases",
    title: "Student Artistry VI",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=BEAT_Mar-Je_jah0pv",
    type: "video",
  },
  {
    id: 17,
    category: "Student Showcases",
    title: "Masterclass Work",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=5F778F2D-6982-4B02-AE43-0D02B2424640_sedjhu",
    type: "video",
  },
  {
    id: 18,
    category: "Student Showcases",
    title: "Student Artistry VII",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=1DA7748E-8D55-4588-BD73-3865FC1069AA_gvwnwo",
    type: "video",
  },
  {
    id: 19,
    category: "Bridal Mastery",
    title: "Signature Bride",
    image: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/hop7knnb6uwfludhjydq.webp",
  },
  {
    id: 20,
    category: "Editorial & Fashion",
    title: "Runway Noir",
    image: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/en8kwd2ubohkbljanlgu.webp",
  },
  {
    id: 21,
    category: "Avant-Garde",
    title: "Cosmic Art",
    image: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/canvos6xq0jhkftnccvp.webp",
  },
  {
    id: 22,
    category: "Bridal Mastery",
    title: "Heritage Look",
    image: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/k2fd3rinaaasathxjvuv.webp",
  },
  {
    id: 23,
    category: "Editorial & Fashion",
    title: "Vogue Studio",
    image: "https://asffo800kc6xioqb.public.blob.vercel-storage.com/u65hdcauburo6s9pktzl.webp",
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
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
            src="https://asffo800kc6xioqb.public.blob.vercel-storage.com/u65hdcauburo6s9pktzl.webp"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
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
      <section className="w-full bg-[#0a0a0a] border-b border-white/5 sticky top-[96px] z-40">
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

      {/* Masonry Gallery Grid */}
      <section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className={`gallery-item break-inside-avoid luxury-card group cursor-pointer overflow-hidden relative rounded-sm fade-up`}
            >
              <div className="w-full bg-[#1a1a1a] overflow-hidden relative">
                {item.type === 'video' ? (
                  <div className="relative aspect-[9/16] w-full">
                    <iframe
                      src={item.videoUrl}
                      className="w-full h-full absolute inset-0"
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                    ></iframe>
                  </div>
                ) : (
                  <div className="relative w-full">
                    <img 
                      alt={item.title} 
                      className="w-full h-auto object-contain transition-transform duration-[1.5s] grayscale group-hover:grayscale-0 group-hover:scale-105" 
                      src={item.image || ""}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <span className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-3">{item.category}</span>
                      <h3 className="font-headline text-xl font-bold text-white tracking-widest uppercase">{item.title}</h3>
                    </div>
                  </div>
                )}
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
