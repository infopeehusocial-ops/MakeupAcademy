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
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289000/08C087E8-179D-49AD-AD02-10FAA16A8346_jlrpwf.jpg",
  },
  {
    id: 2,
    category: "Editorial & Fashion",
    title: "Vogue Elegance",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289001/52040396-70A8-40B6-A807-8CEF0D498AF5_a4yvor.jpg",
  },
  {
    id: 3,
    category: "Bridal Mastery",
    title: "Ethereal Bride",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289001/709B79A6-F684-4A11-A6BF-EF286AE1B4CC_eghefs.jpg",
  },
  {
    id: 4,
    category: "Editorial & Fashion",
    title: "High Fashion Muse",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289002/949FA1C8-DB70-4C85-B6FD-11FFAA7469F1_xwoccc.jpg",
  },
  {
    id: 6,
    category: "Bridal Mastery",
    title: "Royal Portraits",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289002/E9A2472A-618D-4652-8503-F916B27B18F3_yccdo2.jpg",
  },
  {
    id: 7,
    category: "Avant-Garde",
    title: "Velvet Sculpt",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289107/IMG_7842_bwsegg.jpg",
  },
  {
    id: 8,
    category: "Editorial & Fashion",
    title: "Gilded Vision",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289117/IMG_7843_jqu06e.jpg",
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
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1777139068/hop7knnb6uwfludhjydq_jxeaki.webp",
  },
  {
    id: 20,
    category: "Editorial & Fashion",
    title: "Runway Noir",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1777139069/en8kwd2ubohkbljanlgu_xjeazu.webp",
  },
  {
    id: 21,
    category: "Avant-Garde",
    title: "Cosmic Art",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1777139067/canvos6xq0jhkftnccvp_u3xlwp.webp",
  },
  {
    id: 22,
    category: "Bridal Mastery",
    title: "Heritage Look",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1777139070/k2fd3rinaaasathxjvuv_sxvvrg.webp",
  },
  {
    id: 23,
    category: "Editorial & Fashion",
    title: "Vogue Studio",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1777139069/u65hdcauburo6s9pktzl_cc0sel.webp",
  },
  // --- NEW PORTFOLIO PHOTOS (HEIC auto-converted to web format via Cloudinary f_auto!) ---
  {
    id: 24,
    category: "Bridal Mastery",
    title: "Gilded Glamour",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289107/Facetune_28-03-2026-13-26-25_r5uak8.jpg",
  },
  {
    id: 25,
    category: "Editorial & Fashion",
    title: "Avant-Garde Queen",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289104/Facetune_21-03-2026-19-29-01_afjqiu.jpg",
  },
  {
    id: 26,
    category: "Bridal Mastery",
    title: "Royal Bride",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289104/Facetune_20-04-2026-12-33-25_lblk4u.jpg",
  },
  {
    id: 27,
    category: "Bridal Mastery",
    title: "Classic Elegance",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289103/Facetune_20-04-2026-12-21-40_uyfgdy.jpg",
  },
  {
    id: 28,
    category: "Editorial & Fashion",
    title: "Modern Muse",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289103/Facetune_20-04-2026-12-23-14_uwhscm.jpg",
  },
  {
    id: 29,
    category: "Editorial & Fashion",
    title: "Sultry Charm",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289058/Facetune_20-04-2026-12-20-53_nxc4ya.jpg",
  },
  {
    id: 30,
    category: "Avant-Garde",
    title: "Velvet Majesty",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289038/Facetune_20-04-2026-12-19-44_eapuj0.jpg",
  },
  {
    id: 31,
    category: "Avant-Garde",
    title: "Golden Aura",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289038/Facetune_20-04-2026-12-16-43_tpllcu.jpg",
  },
  {
    id: 32,
    category: "Bridal Mastery",
    title: "Signature Glow",
    image: "https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1779289022/Facetune_09-03-2026-13-18-28_d5rspt.jpg",
  },
  // --- NEW PORTFOLIO VIDEOS ---
  {
    id: 33,
    category: "Student Showcases",
    title: "Student Creation VIII",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=924F844E-A42B-4E74-91F0-E9AE71A78871_unfwtb",
    type: "video",
  },
  {
    id: 34,
    category: "Student Showcases",
    title: "Student Creation IX",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=8ED5FF07-77EC-4CA8-9CCD-866135E9BA81_mt5ccm",
    type: "video",
  },
  {
    id: 35,
    category: "Student Showcases",
    title: "Student Creation X",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=656198ED-D7F5-4400-8DC8-F6DCEA1CE894_urbjcs",
    type: "video",
  },
  {
    id: 36,
    category: "Student Showcases",
    title: "Student Creation XI",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=84239CC2-94F7-485E-8EB9-E3ED676995C3_brgdzl",
    type: "video",
  },
  {
    id: 37,
    category: "Student Showcases",
    title: "Student Creation XII",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=22E0A3EB-B39B-4E60-9DDC-E5DB72F1B9B4_pbv73a",
    type: "video",
  },
  {
    id: 38,
    category: "Student Showcases",
    title: "Student Creation XIII",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=5F778F2D-6982-4B02-AE43-0D02B2424640_wqtwbb",
    type: "video",
  },
  {
    id: 39,
    category: "Student Showcases",
    title: "Student Creation XIV",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=1DA7748E-8D55-4588-BD73-3865FC1069AA_pmzfi2",
    type: "video",
  },
  {
    id: 40,
    category: "Student Showcases",
    title: "Student Creation XV",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=07504EFA-2B98-4A4C-B0CD-1BFD946BB4DA_eei1im",
    type: "video",
  },
  // --- Peehu's Professional Makeovers & Transformations ---
  {
    id: 41,
    category: "Bridal Mastery",
    title: "Celestial Bridal Artistry",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=67DA1573-1D3A-46D5-A7B5-BBBD0A6A9889_xhjx5i",
    type: "video",
  },
  {
    id: 42,
    category: "Bridal Mastery",
    title: "Ethereal Transformation",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=video-output-3BC8ADD5-CFE1-41B8-8F8A-CFC15986FFAC-1_1_mqsimw",
    type: "video",
  },
  {
    id: 43,
    category: "Editorial & Fashion",
    title: "Luxury Dior Editorial",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=do77xdmz2&public_id=video-output-41CD5073-C8FC-418E-A45C-6188EDC1DA0C-1_1_1_b0a8fx",
    type: "video",
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
        <div className="absolute inset-0 z-0 fade-up">
          <Image 
            alt="Portfolio Mastery" 
            className="w-full h-full object-cover opacity-40 bw-reveal-image" 
            src="https://res.cloudinary.com/do77xdmz2/image/upload/f_auto,q_auto/v1777139069/u65hdcauburo6s9pktzl_cc0sel.webp"
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
                      className="w-full h-auto object-contain transition-transform duration-[1.5s] bw-reveal-image group-hover:scale-105" 
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
