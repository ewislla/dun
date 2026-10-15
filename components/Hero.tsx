'use client';

import { Phone, ArrowRight, ShieldCheck, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onQuoteClick: () => void;
}

export default function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#08090c] pt-8 pb-16 lg:py-24">
      {/* Background Carbon Fiber Weave & Ambient Neon Glow Orbs */}
      <div className="absolute inset-0 bg-carbon opacity-35 pointer-events-none" />

      {/* Atmospheric Neon Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#ff007f]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#00f0ff]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#ff007f]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* LED Overhead Strip Light Simulation */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff]/60 to-transparent blur-[1px]" />
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1/2 max-w-2xl h-12 bg-[#00f0ff]/5 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 space-y-6">
            {/* Editorial Kicker without pill badge sandwich */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase">
              <span className="text-[#00f0ff] font-bold">20 Years of Craftsmanship</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Holly Ridge & Coastal NC</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-[#ff007f]">We Come To You</span>
            </div>

            {/* Main Headline: Bold, Italic, Chrome Display */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black italic tracking-tight font-display uppercase leading-[1.05] text-wrap-balance">
              <span className="text-chrome block">Cleaner.</span>
              <span className="text-chrome block">Shinier.</span>
              <span className="bg-gradient-to-r from-[#ff007f] via-[#ff4d94] to-[#00f0ff] bg-clip-text text-transparent block">
                Longer.
              </span>
            </h1>

            {/* One-Line Value Proposition */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Holly Ridge’s premier mobile detailer brings 20 years of master precision
              right to your driveway, dock, marina, or hangar. Certified 10-year ceramic
              coating installer for cars, watercraft, aircraft, and RVs.
            </p>

            {/* Trust Bulletpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300 w-full">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Certified 10-Year Ceramic Coating Installer</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ff007f] shrink-0" />
                <span>100% Mobile: Spot-Free DI Water & Power Onboard</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
                <span>Auto, Watercraft, Aircraft & RV Specialists</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ff007f] shrink-0" />
                <span>Direct Craftsman Communication: Call Troy</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onQuoteClick}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#ff007f] to-[#e60067] text-white font-bold text-base uppercase tracking-wider rounded-xl transition-all duration-300 hover:brightness-110 active:scale-95 glow-magenta flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:9103308045"
                className="px-7 py-4 rounded-xl border border-[#00f0ff]/70 text-[#00f0ff] font-bold text-base uppercase tracking-wider transition-all duration-300 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] hover:text-white glow-cyan-sm flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5 text-[#00f0ff]" />
                <span>Call 910-330-8045</span>
              </a>
            </div>

            {/* Fast reassurance note */}
            <p className="text-xs text-slate-400 flex items-center gap-2 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>Based at 790 Hwy 50, Holly Ridge, NC 28445 · Serving all Topsail & Onslow Coast</span>
            </p>
          </div>

          {/* Right Column: Visual Showroom Focal Carrier */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Decorative Showroom Specular Card */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square max-w-lg rounded-2xl bg-gradient-to-b from-[#14161f] via-[#0d0f14] to-[#08090c] border border-slate-800 p-4 sm:p-6 overflow-hidden shadow-2xl group">
              {/* Subtle Carbon Interior Weave */}
              <div className="absolute inset-0 bg-carbon opacity-60 pointer-events-none" />

              {/* Specular Diagonal Reflection */}
              <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent rotate-45 pointer-events-none group-hover:translate-x-12 transition-transform duration-1000" />

              {/* Neon Border Rim Glow */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff007f] to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-80" />

              {/* Center Automotive Showpiece Graphic Canvas */}
              <div className="relative w-full h-full flex flex-col justify-between z-10">
                {/* Header status in card */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />
                    <span className="font-semibold text-slate-300">10-YEAR CERAMIC SPEC</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#ff007f]">9H+ HARDNESS</span>
                </div>

                {/* Vector Silhouette with Wet Paint Reflection & LED Light Bars */}
                <div className="relative my-auto py-4 flex items-center justify-center">
                  <svg
                    viewBox="0 0 600 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto max-h-52 drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
                  >
                    <defs>
                      <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e222d" />
                        <stop offset="45%" stopColor="#0c0d12" />
                        <stop offset="70%" stopColor="#141822" />
                        <stop offset="100%" stopColor="#050608" />
                      </linearGradient>

                      <linearGradient id="hoodGloss" x1="0%" y1="0%" x2="100%" y2="50%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                        <stop offset="30%" stopColor="#00f0ff" stopOpacity="0.6" />
                        <stop offset="70%" stopColor="#ff007f" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>

                      <linearGradient id="rimGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00f0ff" />
                        <stop offset="100%" stopColor="#ff007f" />
                      </linearGradient>

                      <radialGradient id="specularBurst" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                        <stop offset="40%" stopColor="#00f0ff" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="transparent" />
                      </radialGradient>
                    </defs>

                    {/* Wet Studio Floor Reflection Shadow */}
                    <ellipse cx="300" cy="205" rx="260" ry="24" fill="#030406" />
                    <ellipse cx="300" cy="202" rx="220" ry="12" fill="url(#carBodyGrad)" opacity="0.5" />

                    {/* Sleek Exotic Sports Car Body Silhouette */}
                    <path
                      d="M60 175 C80 175 110 170 145 160 C170 140 210 110 260 98 C320 84 390 88 440 108 C470 120 510 145 540 162 C555 170 565 174 570 178 C550 188 520 190 470 190 C465 170 445 155 420 155 C395 155 375 170 370 190 L220 190 C215 170 195 155 170 155 C145 155 125 170 120 190 C90 190 70 185 60 175 Z"
                      fill="url(#carBodyGrad)"
                      stroke="#2d3345"
                      strokeWidth="2"
                    />

                    {/* Cabin Glass & Roofline */}
                    <path
                      d="M245 106 C280 88 340 82 390 90 C425 96 440 110 450 125 C420 124 350 124 280 128 C255 125 248 116 245 106 Z"
                      fill="#07090e"
                      stroke="#00f0ff"
                      strokeWidth="1.5"
                      strokeOpacity="0.5"
                    />

                    {/* Ceramic High-Gloss Hood & Beltline Specular Streak */}
                    <path
                      d="M100 165 C150 152 230 112 320 100 C410 88 480 120 540 160"
                      stroke="url(#hoodGloss)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Front Headlight Laser Flare */}
                    <path
                      d="M525 152 Q550 156 565 166"
                      stroke="#00f0ff"
                      strokeWidth="4"
                      strokeLinecap="round"
                      filter="drop-shadow(0 0 6px #00f0ff)"
                    />

                    {/* Rear Taillight Blade */}
                    <path
                      d="M65 170 Q80 168 105 164"
                      stroke="#ff007f"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      filter="drop-shadow(0 0 6px #ff007f)"
                    />

                    {/* Front Wheel & Performance Caliper */}
                    <g transform="translate(420, 190)">
                      <circle cx="0" cy="0" r="32" fill="#0c0d12" stroke="#252a38" strokeWidth="3" />
                      <circle cx="0" cy="0" r="23" fill="#12151d" stroke="#3b4256" strokeWidth="2" />
                      <circle cx="0" cy="0" r="10" fill="#08090c" stroke="url(#rimGlow)" strokeWidth="2" />
                      {/* Caliper */}
                      <path d="M-8 -18 A20 20 0 0 1 12 -18" stroke="#ff007f" strokeWidth="4" strokeLinecap="round" />
                    </g>

                    {/* Rear Wheel & Performance Caliper */}
                    <g transform="translate(170, 190)">
                      <circle cx="0" cy="0" r="32" fill="#0c0d12" stroke="#252a38" strokeWidth="3" />
                      <circle cx="0" cy="0" r="23" fill="#12151d" stroke="#3b4256" strokeWidth="2" />
                      <circle cx="0" cy="0" r="10" fill="#08090c" stroke="url(#rimGlow)" strokeWidth="2" />
                      {/* Caliper */}
                      <path d="M-8 -18 A20 20 0 0 1 12 -18" stroke="#00f0ff" strokeWidth="4" strokeLinecap="round" />
                    </g>

                    {/* Diamond Specular Sparkle on Peak Paint Reflection */}
                    <circle cx="310" cy="98" r="8" fill="url(#specularBurst)" />
                    <line x1="310" y1="84" x2="310" y2="112" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="296" y1="98" x2="324" y2="98" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Bottom Stats Grid in Card */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800/80">
                  <div className="text-center">
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold">Warranty</span>
                    <span className="font-mono text-sm sm:text-base font-bold text-white tabular-nums">10 Years</span>
                  </div>
                  <div className="text-center border-x border-slate-800/80">
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold">Contact Angle</span>
                    <span className="font-mono text-sm sm:text-base font-bold text-[#00f0ff] tabular-nums">&gt; 115°</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-[10px] text-slate-400 uppercase font-semibold">Mobile Radius</span>
                    <span className="font-mono text-sm sm:text-base font-bold text-[#ff007f] tabular-nums">35+ Mi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
