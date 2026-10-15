'use client';

import { FileText, Truck, Sparkles, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onQuoteClick: () => void;
}

export default function ProcessSection({ onQuoteClick }: ProcessSectionProps) {
  const steps = [
    {
      step: '01',
      icon: FileText,
      title: 'Request a Quote',
      tagline: 'Instant estimate or a quick phone call.',
      description:
        'Pick your vehicle and service on our site to get a live transparent price range in 60 seconds, or call Troy directly at 910-330-8045. We confirm your date and arrive on time.',
      accent: '#00f0ff',
      glow: 'rgba(0, 240, 255, 0.4)',
    },
    {
      step: '02',
      icon: Truck,
      title: 'We Come To You',
      tagline: '100% self-sufficient mobile detailing.',
      description:
        'Our custom mobile rig pulls up right to your driveway, marina slip, or aircraft hangar. We bring our own pure deionized spot-free water, commercial quiet generator, and high-end rotary gear.',
      accent: '#ff007f',
      glow: 'rgba(255, 0, 127, 0.4)',
    },
    {
      step: '03',
      icon: Sparkles,
      title: 'Drive Away Glossy',
      tagline: 'Flawless showroom depth that lasts years.',
      description:
        'Troy performs a meticulous walk-around with you under LED inspection lights. For ceramic coatings, we register your 10-year warranty on the spot. Cleaner. Shinier. Longer.',
      accent: '#00f0ff',
      glow: 'rgba(0, 240, 255, 0.4)',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#0b0c11] overflow-hidden border-t border-slate-800/80">
      {/* Background Weave */}
      <div className="absolute inset-0 bg-carbon opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff007f]">
            <span>Simple · Hassle-Free · 100% Mobile</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-display uppercase text-chrome">
            How Dun-Rite Works
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-wrap-balance">
            No dropping your car off for days or arranging rides. We handle everything on-site while you relax at home or work.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-stretch">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-[#11131c] border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Carbon Overlay */}
                <div className="absolute inset-0 bg-carbon-dense opacity-30 rounded-2xl pointer-events-none" />

                <div className="relative z-10 space-y-5">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-3xl font-black italic tracking-wider"
                      style={{ color: item.accent }}
                    >
                      {item.step}
                    </span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${item.accent}12`,
                        borderColor: `${item.accent}40`,
                        color: item.accent,
                        boxShadow: `0 0 15px ${item.glow}`,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-display mb-1">
                      {item.title}
                    </h3>
                    <div
                      className="text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{ color: item.accent }}
                    >
                      {item.tagline}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-6 border-t border-slate-800/80">
                  <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accent }} />
                    <span>20 Years Trusted Experience</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 text-center">
          <button
            onClick={onQuoteClick}
            className="px-8 py-4 bg-gradient-to-r from-[#ff007f] to-[#e60067] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(255,0,127,0.4)] hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Ready for Showroom Gloss? Get Your Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
