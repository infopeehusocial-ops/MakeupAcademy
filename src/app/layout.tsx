import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import AnimationProvider from "@/components/AnimationProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Peehu's Makeover & Academy - Best Makeup Academy in Guwahati",
  description: "Learn professional makeup artistry in Guwahati with expert guidance and hands-on training. Professional courses in Bridal, HD Airbrush, and Editorial makeup.",
  keywords: "Best Makeup Academy in Guwahati, Makeup Courses in Guwahati, Bridal Makeup Training Guwahati, Peehu Deka, Peehu's Makeover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className={`${manrope.variable} antialiased bg-[#0a0a0a] text-[#f5f0e8] selection:bg-primary selection:text-black`}>
        <AnimationProvider />
        {/* Navigation */}
        <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
          <div className="flex justify-between items-center px-8 py-6 w-full max-w-[1920px] mx-auto">
            <a className="flex items-center gap-3 group transition-transform hover:scale-105" href="/">
              <Image src="/logo.png" alt="Peehu's Makeover Logo" width={180} height={50} className="h-12 w-auto object-contain" priority />
            </a>
            <nav className="hidden md:flex space-x-12">
              <a className="nav-link font-headline tracking-[0.1em] text-xs font-semibold text-white/70 hover:text-primary transition-colors duration-500 uppercase" href="/about">Academy</a>
              <a className="nav-link font-headline tracking-[0.1em] text-xs font-semibold text-white/70 hover:text-primary transition-colors duration-500 uppercase" href="/courses">Courses</a>
              <a className="nav-link font-headline tracking-[0.1em] text-xs font-semibold text-white/70 hover:text-primary transition-colors duration-500 uppercase" href="/portfolio">Portfolio</a>
              <a className="nav-link font-headline tracking-[0.1em] text-xs font-semibold text-white/70 hover:text-primary transition-colors duration-500 uppercase" href="/contact">Contact</a>
            </nav>
            <div className="flex items-center space-x-6">
              <a className="hidden md:inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-black font-headline uppercase tracking-widest text-xs font-bold gold-button-glow hover:opacity-90 transition-opacity duration-300" href="/admissions">Enroll Now</a>
              <button className="md:hidden text-primary">
                <span className="material-symbols-outlined text-3xl">menu</span>
              </button>
            </div>
          </div>
        </header>

        <main className="pt-24 min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#0e0e0e] w-full pt-20 pb-10 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 max-w-7xl mx-auto mb-16">
            <div className="fade-up">
              <a className="mb-6 block" href="/">
                <Image src="/logo.png" alt="Peehu's Makeover Logo" width={200} height={60} className="h-14 w-auto object-contain" />
              </a>
              <p className="font-body leading-relaxed text-sm text-white/50 max-w-xs">Elevating the standard of makeup artistry through uncompromising education and visionary technique.</p>
            </div>
            <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
              <h4 className="font-headline leading-relaxed text-sm font-bold text-[#c9a84c] mb-6 uppercase tracking-widest">Connect</h4>
              <ul className="space-y-4">
                <li><a className="nav-link w-fit font-body leading-relaxed text-sm text-white/50 hover:text-white transition-all duration-300" href="#">Instagram</a></li>
                <li><a className="nav-link w-fit font-body leading-relaxed text-sm text-white/50 hover:text-white transition-all duration-300" href="#">Facebook</a></li>
              </ul>
            </div>
            <div className="fade-up" style={{ transitionDelay: '0.4s' }}>
              <h4 className="font-headline leading-relaxed text-sm font-bold text-[#c9a84c] mb-6 uppercase tracking-widest">Legal</h4>
              <ul className="space-y-4">
                <li><a className="nav-link w-fit font-body leading-relaxed text-sm text-white/50 hover:text-white transition-all duration-300" href="/privacy">Privacy Policy</a></li>
                <li><a className="nav-link w-fit font-body leading-relaxed text-sm text-white/50 hover:text-white transition-all duration-300" href="/terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="px-12 max-w-7xl mx-auto border-t border-white/5 pt-8">
            <p className="font-body leading-relaxed text-sm text-white/20">© 2024 Peehu Deka Makeup Academy. Guwahati, India.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
