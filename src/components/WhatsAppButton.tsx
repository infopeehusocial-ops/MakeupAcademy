"use client";

import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = "919678000000"; // Replace with actual number if provided
  const message = "Hi! I'm interested in joining Peehu Deka Makeup Academy. Could you please share more details?";

  // Always render to allow CSS transitions

  return (
    <a 
      id="whatsapp-floating-button"
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-[9999] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white shadow-2xl transition-all duration-700 hover:scale-110 active:scale-95 group border border-white/20 ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10'}`}
      style={{
        boxShadow: "0 10px 40px rgba(37, 211, 102, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.2)",
        animation: isVisible ? "float 3s ease-in-out infinite" : "none"
      }}
      aria-label="Contact on WhatsApp"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        #whatsapp-floating-button {
          position: fixed !important;
          bottom: 32px !important;
          right: 32px !important;
          left: auto !important;
          z-index: 99999 !important;
          border-radius: 50% !important;
          overflow: hidden !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        @media (max-width: 768px) {
          #whatsapp-floating-button {
            bottom: 20px !important;
            right: 20px !important;
            width: 56px !important;
            height: 56px !important;
          }
        }
      `}} />
      {/* Animated Outer Pulse */}
      <div className="absolute -inset-2 rounded-full border-2 border-[#25D366]/50 animate-ping opacity-30"></div>
      <div className="absolute -inset-4 rounded-full border border-[#25D366]/20 animate-pulse opacity-10"></div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-4 py-2 bg-white text-[#25D366] text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block rounded-full shadow-xl border border-black/5">
        Chat with us
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
      </div>

      <svg 
        viewBox="0 0 24 24" 
        className="w-8 h-8 md:w-10 md:h-10 fill-current drop-shadow-md relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  );
}
