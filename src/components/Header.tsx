"use client";
// updated for deployment
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const handleScroll = () => {
      if (isMounted) {
        setIsScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position
    return () => {
      isMounted = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent py-6"
          }`}
      >
        <div className="flex justify-between items-center px-6 md:px-12 w-full max-w-[1920px] mx-auto">
          <Link className="flex items-center gap-3 group transition-transform hover:scale-105" href="/">
            <Image
              src="/logo.png"
              alt="Peehu's Makeover Logo"
              width={180}
              height={50}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                className="nav-link font-headline tracking-[0.1em] text-xs font-semibold text-white/70 hover:text-primary transition-colors duration-500 uppercase"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <Link
              className="hidden md:inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-black font-headline uppercase tracking-widest text-xs font-bold gold-button-glow hover:opacity-90 transition-opacity duration-300"
              href="/admissions"
            >
              Enroll Now
            </Link>

            <button
              className="md:hidden text-primary p-2"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-black transition-transform duration-700 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-20">
            <Image src="/logo.png" alt="Logo" width={140} height={40} className="h-10 w-auto object-contain" />
            <button
              className="text-primary p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-4xl font-headline font-bold text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pb-12">
            <Link
              href="/admissions"
              className="w-full py-5 bg-primary text-black font-bold uppercase tracking-widest text-center block"
              onClick={() => setIsMenuOpen(false)}
            >
              Enroll Today
            </Link>
            <div className="flex gap-6 mt-12 justify-center">
              <span className="text-white/40 text-xs tracking-widest uppercase">Guwahati, India</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
