"use client";

import { useEffect, useState } from "react";

export default function HeroParticles() {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    const newParticles = [...Array(12)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${5 + Math.random() * 5}s`,
      delay: `${Math.random() * 5}s`
    }));
    setParticles(newParticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p, i) => (
        <div 
          key={i} 
          className="particle" 
          style={{
            left: p.left,
            top: p.top,
            animation: `float-particle ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay
          }}
        />
      ))}
    </div>
  );
}
