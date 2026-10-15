'use client';

import { Phone, Mail, MapPin, ShieldCheck, Award, Heart } from 'lucide-react';

interface FooterProps {
  onQuoteClick: () => void;
}

export default function Footer({ onQuoteClick }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#06070a] border-t border-slate-800 text-slate-400 py-16 pb-28 sm:pb-20 overflow-hidden">
      {/* Background Weave */}
      <div className="absolute inset-0 bg-carbon opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1e2230] to-[#0c0d12] border border-[#ff007f]/50 flex items-center justify-center shadow-[0_0_15px_rgba(255,0,127,0.3)]">
                <span className="text-sm font-black italic tracking-tighter text-[#00f0ff] font-display">
                  DR
                </span>
              </div>
              <div>
                <span className="text-2xl font-black italic tracking-wider text-chrome uppercase font-display block leading-none">
                  DUN-RITE
                </span>
                <span className="text-[11px] font-bold tracking-widest text-[#00f0ff] uppercase block">
                  Auto Detailing NC
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-medium italic">
              &ldquo;Cleaner. Shinier. Longer.&rdquo;
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Owned and operated by Troy Woodard for 20 years. Mobile detailing and certified 10-year ceramic
              coating installation for automobiles, watercraft, aircraft, and RVs throughout Holly Ridge, Topsail Island,
              and coastal North Carolina.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Award className="w-4 h-4 text-[#00f0ff]" />
                20 Years in Business
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#ff007f]" />
                Certified Installer
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('services')}
                  className="hover:text-[#00f0ff] transition-colors cursor-pointer"
                >
                  Detailing Services & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('ceramic-coating')}
                  className="hover:text-[#00f0ff] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>10-Year Ceramic Coating</span>
                  <span className="text-[10px] text-[#ff007f] font-mono">★</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onQuoteClick}
                  className="hover:text-[#00f0ff] transition-colors cursor-pointer"
                >
                  Instant Quote Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('gallery')}
                  className="hover:text-[#00f0ff] transition-colors cursor-pointer"
                >
                  Finished Projects & Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('reviews')}
                  className="hover:text-[#00f0ff] transition-colors cursor-pointer"
                >
                  Customer Testimonials (5.0 ★)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('service-area')}
                  className="hover:text-[#00f0ff] transition-colors cursor-pointer"
                >
                  Service Corridors & Maps
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href="tel:9103308045"
                className="flex items-center gap-2 text-slate-300 hover:text-[#00f0ff] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#00f0ff] group-hover:scale-110 transition-transform" />
                <span className="font-mono font-semibold">910-330-8045 (Call / Text)</span>
              </a>

              <a
                href="mailto:troywoodard41@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-[#ff007f] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#ff007f] group-hover:scale-110 transition-transform" />
                <span>troywoodard41@gmail.com</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>790 Hwy 50, Holly Ridge, NC 28445</span>
              </div>

              <div className="pt-2 text-slate-400 text-[11px] leading-relaxed">
                <span className="text-emerald-400 font-semibold">Open Always</span> · 24/7 online quotes & mobile appointment dispatch.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Dun-Rite Auto Detailing NC. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Licensed & Insured Mobile Rig</span>
            <span aria-hidden="true">·</span>
            <span>Holly Ridge · Topsail · Surf City</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
