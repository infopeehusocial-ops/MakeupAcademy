'use client';

import { useState, useRef } from 'react';

interface StudentVideoCardProps {
  videoUrl: string;
  title: string;
  delay?: string;
}

export default function StudentVideoCard({ videoUrl, title, delay }: StudentVideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div 
      className="fade-up luxury-card bg-[#141414] border border-white/10 rounded-sm overflow-hidden group shadow-2xl relative w-full h-full" 
      style={{ transitionDelay: delay }}
    >
      <div className={`relative w-full aspect-[9/16] bg-black`}>
        {!isPlaying ? (
          <div 
            className="absolute inset-0 cursor-pointer flex items-center justify-center group/play z-20"
            onClick={handlePlay}
          >
            {/* Preview Video for First Frame */}
            <video 
              src={`${videoUrl}#t=0.001`} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/play:opacity-80 transition-all duration-700 pointer-events-none"
              muted
              playsInline
              preload="metadata"
            />
            
            {/* Play Button Overlay */}
            <div className="relative z-30 w-16 h-16 md:w-20 md:h-20 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover/play:scale-110 group-hover/play:bg-primary/20 group-hover/play:border-primary/40 group-hover/play:shadow-[0_0_30px_rgba(201,168,76,0.3)]">
              <span className="material-symbols-outlined text-white text-4xl ml-1 group-hover/play:text-primary transition-colors">play_arrow</span>
            </div>
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent transform translate-y-2 group-hover/play:translate-y-0 transition-transform duration-500">
               <p className="font-headline text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-1">{title}</p>
               <p className="text-white/40 text-[9px] uppercase tracking-[0.1em]">Click to watch journey</p>
            </div>
          </div>
        ) : (
          <video 
            ref={videoRef}
            src={videoUrl} 
            className="absolute inset-0 w-full h-full object-cover z-10"
            controls
            autoPlay
            playsInline
          />
        )}
      </div>
    </div>
  );
}
