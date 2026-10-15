'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Shield, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenQuote?: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#08090c]/90 backdrop-blur-md border-b border-slate-800/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
        {/* Zone 1: Single text wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007f] rounded-lg"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1b1e28] to-[#0c0d12] border border-[#ff007f]/40 flex items-center justify-center shadow-[0_0_15px_rgba(255,0,127,0.3)] group-hover:border-[#00f0ff]/60 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all duration-300">
            <span className="text-sm font-black italic tracking-tighter text-[#00f0ff] font-display">
              DR
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black italic tracking-wider text-chrome uppercase font-display leading-none">
              DUN-RITE
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#00f0ff] uppercase">
              Auto Detailing NC
            </span>
          </div>
        </Link>

        {/* Zone 2: 4-5 single-line clean text links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('ceramic-coating')}
            className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 flex items-center gap-1.5"
          >
            <Shield className="w-3.5 h-3.5 text-[#ff007f]" />
            10-Yr Ceramic
          </button>
          <button
            onClick={() => scrollToSection('quote-estimator')}
            className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
            Instant Quote
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('service-area')}
            className="hover:text-[#00f0ff] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
          >
            Service Area
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href="tel:9103308045"
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#00f0ff] hover:text-white px-3 py-2 rounded-lg border border-[#00f0ff]/30 hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-200 whitespace-nowrap shrink-0"
            title="Call Troy at Dun-Rite Auto Detailing"
          >
            <Phone className="w-4 h-4 text-[#00f0ff]" />
            <span>910-330-8045</span>
          </a>

          <button
            onClick={() => {
              if (onOpenQuote) {
                onOpenQuote();
              } else {
                scrollToSection('quote-estimator');
              }
            }}
            className="relative px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#ff007f] to-[#d6006b] rounded-lg hover:brightness-110 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(255,0,127,0.4)] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get Free Quote
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="tel:9103308045"
            className="p-2 text-[#00f0ff] rounded-lg border border-[#00f0ff]/30 bg-[#00f0ff]/5"
            aria-label="Call 910-330-8045"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0d12] border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 text-base font-medium text-slate-200 hover:text-[#00f0ff]"
            >
              Services & Pricing
            </button>
            <button
              onClick={() => scrollToSection('ceramic-coating')}
              className="text-left py-2 text-base font-medium text-slate-200 hover:text-[#00f0ff] flex items-center justify-between"
            >
              <span>10-Year Ceramic Coating</span>
              <span className="text-xs text-[#ff007f] font-bold">10-YR GUARANTEE</span>
            </button>
            <button
              onClick={() => scrollToSection('quote-estimator')}
              className="text-left py-2 text-base font-medium text-[#00f0ff] flex items-center justify-between"
            >
              <span>Instant Quote Calculator</span>
              <span className="text-xs bg-[#00f0ff]/10 text-[#00f0ff] px-2 py-0.5 rounded">LIVE</span>
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-left py-2 text-base font-medium text-slate-200 hover:text-[#00f0ff]"
            >
              Before & After Gallery
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-left py-2 text-base font-medium text-slate-200 hover:text-[#00f0ff]"
            >
              Customer Reviews (5.0 ★)
            </button>
            <button
              onClick={() => scrollToSection('service-area')}
              className="text-left py-2 text-base font-medium text-slate-200 hover:text-[#00f0ff]"
            >
              Service Area & Location
            </button>
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <a
              href="tel:9103308045"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-[#00f0ff]/50 text-[#00f0ff] font-semibold text-sm bg-[#00f0ff]/5 active:bg-[#00f0ff]/20"
            >
              <Phone className="w-4 h-4" />
              Call Troy: 910-330-8045
            </a>
            <button
              onClick={() => {
                scrollToSection('quote-estimator');
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#ff007f] to-[#d6006b] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(255,0,127,0.4)]"
            >
              Calculate Quote & Book
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
