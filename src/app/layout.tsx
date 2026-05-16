import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import AnimationProvider from "@/components/AnimationProvider";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

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
        <Header />

        <main className="pt-24 min-h-screen">
          {children}
        </main>

        <WhatsAppButton />

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
                <li><a className="nav-link w-fit font-body leading-relaxed text-sm text-white/50 hover:text-white transition-all duration-300" href="https://www.instagram.com/peehudekamakeupstudioandacdemy?igsh=NW04OXRkNnR4YW9i" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a className="nav-link w-fit font-body leading-relaxed text-sm text-white/50 hover:text-white transition-all duration-300" href="https://www.facebook.com/profile.php?id=61586366545995" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              </ul>
            </div>
            <div className="fade-up" style={{ transitionDelay: '0.4s' }}>
              <h4 className="font-headline leading-relaxed text-sm font-bold text-[#c9a84c] mb-6 uppercase tracking-widest">Legal</h4>
              <ul className="space-y-4">
                <li><Link className="nav-link w-fit font-body leading-relaxed text-sm text-white/50 hover:text-white transition-all duration-300" href="/privacy">Privacy Policy</Link></li>
                <li><Link className="nav-link w-fit font-body leading-relaxed text-sm text-white/50 hover:text-white transition-all duration-300" href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="px-12 max-w-7xl mx-auto border-t border-white/5 pt-8">
            <p className="font-body leading-relaxed text-sm text-white/20">© 2026 Peehu Deka Makeup Academy. Guwahati, India.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
