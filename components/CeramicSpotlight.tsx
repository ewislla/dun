'use client';

import { useState, useRef, useCallback } from 'react';
import {
  ShieldCheck,
  Droplets,
  Sun,
  Sparkles,
  Layers,
  ArrowRight,
  MoveHorizontal,
  Flame,
} from 'lucide-react';

interface CeramicSpotlightProps {
  onQuoteClick: () => void;
}

export default function CeramicSpotlight({ onQuoteClick }: CeramicSpotlightProps) {
  // Slider position percentage (0 to 100)
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activePreset, setActivePreset] = useState<'paint' | 'marine'>('paint');
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const benefits = [
    {
      icon: ShieldCheck,
      title: '10-Year Transferable Warranty',
      desc: 'Officially certified application backed by a full decade of guaranteed clearcoat protection against bubbling, oxidation, and clearcoat failure.',
    },
    {
      icon: Droplets,
      title: 'Extreme Hydrophobic Self-Cleaning',
      desc: 'Water contact angle exceeding 115°. Dirt, road grime, and rainwater bead up into spherical drops that roll right off, taking surface filth with them.',
    },
    {
      icon: Sun,
      title: 'Coastal Salt Air & UV Armor',
      desc: 'Formulated specifically to neutralize harsh North Carolina salt brine, intense beach UV radiation, bug splatter, and corrosive bird droppings.',
    },
    {
      icon: Sparkles,
      title: 'Permanent Showroom Wet Gloss',
      desc: 'Cures into an ultra-dense 9H+ diamond crystal layer with deep optical clarity, producing an intense candy-coat liquid reflection that never fades.',
    },
  ];

  return (
    <section id="ceramic-coating" className="relative py-20 lg:py-28 bg-[#0b0c11] overflow-hidden">
      {/* Carbon and Neon Background Accents */}
      <div className="absolute inset-0 bg-carbon opacity-35 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff007f]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff007f]">
            <span>Certified Installer</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Military-Grade Si02 Nano-Ceramic</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-display uppercase text-chrome">
            10-Year Ceramic Coating Spotlight
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-wrap-balance">
            Never wax your vehicle again. Our multi-stage paint correction eliminates micro-scratches
            before bonding a permanent glass shield that locks in showroom gloss for up to ten years.
          </p>
        </div>

        {/* Interactive Before & After Comparison Showcase */}
        <div className="mb-16">
          {/* Preset Selector */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <button
              onClick={() => setActivePreset('paint')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activePreset === 'paint'
                  ? 'bg-[#ff007f] text-white shadow-[0_0_15px_rgba(255,0,127,0.4)]'
                  : 'bg-[#14161f] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Automotive Paint Correction
            </button>
            <button
              onClick={() => setActivePreset('marine')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activePreset === 'marine'
                  ? 'bg-[#00f0ff] text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'bg-[#14161f] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Marine Gelcoat Oxidation Cut
            </button>
          </div>

          {/* Slider Card */}
          <div className="max-w-4xl mx-auto rounded-2xl border-2 border-slate-800 overflow-hidden bg-[#0d0f15] shadow-2xl relative">
            {/* Top Indicator Header */}
            <div className="flex items-center justify-between px-6 py-3 bg-[#11131a] border-b border-slate-800 text-xs font-mono">
              <span className="text-slate-400">
                <span className="text-rose-400 font-bold">LEFT:</span> Before Correction (Swirls & Salt Chalk)
              </span>
              <span className="text-slate-400">
                <span className="text-[#00f0ff] font-bold">RIGHT:</span> After 10-Yr Ceramic (Wet Mirror Gloss)
              </span>
            </div>

            {/* Slider Visual Container */}
            <div
              ref={containerRef}
              onMouseDown={() => (isDragging.current = true)}
              onMouseUp={() => (isDragging.current = false)}
              onMouseLeave={() => (isDragging.current = false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-72 sm:h-96 md:h-[420px] select-none cursor-ew-resize overflow-hidden"
            >
              {/* "AFTER" (Ceramic Coated) Full Background */}
              <div
                className="absolute inset-0 w-full h-full flex items-center justify-center"
                style={{
                  background:
                    activePreset === 'paint'
                      ? 'radial-gradient(circle at 65% 45%, #1e1b2e 0%, #0c0b14 55%, #050508 100%)'
                      : 'radial-gradient(circle at 65% 45%, #0d2636 0%, #091722 55%, #04090e 100%)',
                }}
              >
                {/* Visual Simulation of Flawless Ceramic Mirror Gloss */}
                <div className="relative w-full h-full p-8 flex flex-col justify-center items-center">
                  {/* Studio Light Reflection Strip */}
                  <div className="w-full max-w-xl h-24 sm:h-32 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm rotate-6" />

                  {/* High Gloss Hydrophobic Droplets Graphic */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 500 300" className="w-full h-full opacity-90">
                      <defs>
                        <linearGradient id="afterGlossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                          <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#ff007f" stopOpacity="0.4" />
                        </linearGradient>
                      </defs>

                      {/* Mirror Reflection lines */}
                      <path
                        d="M 50 180 Q 250 100 450 140"
                        stroke="url(#afterGlossGrad)"
                        strokeWidth="5"
                        fill="none"
                        filter="drop-shadow(0 0 10px rgba(0,240,255,0.7))"
                      />
                      <path
                        d="M 80 200 Q 250 120 420 160"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeOpacity="0.7"
                        fill="none"
                      />

                      {/* Beads of Water */}
                      <circle cx="340" cy="110" r="10" fill="#00f0ff" fillOpacity="0.8" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="370" cy="130" r="14" fill="#00f0ff" fillOpacity="0.9" stroke="#ffffff" strokeWidth="2" />
                      <circle cx="410" cy="120" r="8" fill="#00f0ff" fillOpacity="0.8" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="390" cy="160" r="12" fill="#00f0ff" fillOpacity="0.9" stroke="#ffffff" strokeWidth="2" />
                    </svg>
                  </div>

                  <div className="absolute right-6 bottom-6 bg-[#08090c]/85 border border-[#00f0ff]/50 px-4 py-2 rounded-lg text-right">
                    <div className="text-[11px] font-mono text-[#00f0ff] uppercase font-bold">Dun-Rite 10-Yr Ceramic</div>
                    <div className="text-xs text-slate-300">Flawless 9H+ Depth · Hydrophobic Beads</div>
                  </div>
                </div>
              </div>

              {/* "BEFORE" (Swirled & Oxidized) Clipped Layer */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  background:
                    activePreset === 'paint'
                      ? 'radial-gradient(circle at 35% 45%, #242220 0%, #151413 55%, #0e0d0c 100%)'
                      : 'radial-gradient(circle at 35% 45%, #2b3036 0%, #1a1e24 55%, #101317 100%)',
                }}
              >
                {/* Swirl Mark Webbing Simulation */}
                <div className="relative w-full h-full flex flex-col justify-center items-center">
                  <svg viewBox="0 0 500 300" className="w-full h-full opacity-60">
                    {/* Spider web swirls */}
                    <circle cx="200" cy="150" r="60" stroke="#887766" strokeWidth="1" fill="none" strokeDasharray="4 6" opacity="0.8" />
                    <circle cx="200" cy="150" r="100" stroke="#887766" strokeWidth="1" fill="none" strokeDasharray="3 5" opacity="0.6" />
                    <circle cx="200" cy="150" r="140" stroke="#887766" strokeWidth="0.8" fill="none" strokeDasharray="2 7" opacity="0.5" />
                    <path d="M 120 100 Q 200 160 280 120" stroke="#aaaaaa" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
                    <path d="M 110 180 Q 200 130 290 190" stroke="#aaaaaa" strokeWidth="1.2" strokeOpacity="0.4" fill="none" />
                    <path d="M 150 90 Q 180 180 230 210" stroke="#aaaaaa" strokeWidth="1" strokeOpacity="0.3" fill="none" />
                    {/* Hazy sun swirl */}
                    <circle cx="200" cy="150" r="12" fill="#ffd199" fillOpacity="0.4" filter="blur(8px)" />
                  </svg>

                  <div className="absolute left-6 bottom-6 bg-[#08090c]/85 border border-rose-500/40 px-4 py-2 rounded-lg text-left">
                    <div className="text-[11px] font-mono text-rose-400 uppercase font-bold">Unprotected Clearcoat</div>
                    <div className="text-xs text-slate-400">Micro-Swirls · Sun Fade · Salt Chalk</div>
                  </div>
                </div>
              </div>

              {/* Dividing Slider Line & Draggable Handle */}
              <div
                className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.7)] cursor-ew-resize active:scale-110 transition-transform">
                  <MoveHorizontal className="w-5 h-5 text-[#00f0ff]" />
                </div>
              </div>
            </div>

            {/* Slider Drag Instruction Footer */}
            <div className="px-6 py-3 bg-[#0d0f15] border-t border-slate-800 text-center text-xs text-slate-400">
              <span className="font-medium text-slate-300">Drag or swipe the center divider</span> to inspect the optical difference between unprotected paint and Dun-Rite 10-Year Ceramic Coating.
            </div>
          </div>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#12141d]/80 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-[#ff007f]/10 border border-[#ff007f]/30 flex items-center justify-center text-[#ff007f] mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table: Wax vs Sealant vs Dun-Rite 10-Yr Ceramic */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#10121a] border border-slate-800 overflow-x-auto">
          <h3 className="text-lg font-bold text-white mb-4 font-display flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#00f0ff]" />
            Protection Durability Comparison
          </h3>

          <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[550px]">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono">
                <th className="py-3 pr-4 font-semibold">Protection Type</th>
                <th className="py-3 px-4 font-semibold">Durability</th>
                <th className="py-3 px-4 font-semibold">Scratch Hardness</th>
                <th className="py-3 px-4 font-semibold">Chemical / Salt Resistance</th>
                <th className="py-3 pl-4 font-semibold text-right">Maintenance Frequency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-3.5 pr-4 font-medium text-slate-400">Traditional Carnauba Wax</td>
                <td className="py-3.5 px-4 font-mono">4 – 8 Weeks</td>
                <td className="py-3.5 px-4 text-slate-400">Soft (~1H)</td>
                <td className="py-3.5 px-4 text-rose-400">Low (Melts in NC Summer)</td>
                <td className="py-3.5 pl-4 text-right text-slate-400">Every 2 Months</td>
              </tr>
              <tr>
                <td className="py-3.5 pr-4 font-medium text-slate-400">Synthetic Polymer Sealant</td>
                <td className="py-3.5 px-4 font-mono">4 – 6 Months</td>
                <td className="py-3.5 px-4 text-slate-400">Moderate (~2H)</td>
                <td className="py-3.5 px-4 text-amber-400">Moderate</td>
                <td className="py-3.5 pl-4 text-right text-slate-400">Twice a Year</td>
              </tr>
              <tr className="bg-[#ff007f]/5 font-semibold text-white">
                <td className="py-3.5 pr-4 flex items-center gap-2 text-[#00f0ff]">
                  <Sparkles className="w-4 h-4 text-[#ff007f]" />
                  <span>Dun-Rite 10-Year Nano-Ceramic</span>
                </td>
                <td className="py-3.5 px-4 font-mono text-[#00f0ff] font-bold">10 Full Years</td>
                <td className="py-3.5 px-4 text-[#ff007f] font-bold">9H+ Diamond Hard</td>
                <td className="py-3.5 px-4 text-[#00f0ff]">Impervious to Salt, UV & Acid</td>
                <td className="py-3.5 pl-4 text-right text-[#00f0ff]">Annual Inspection Only</td>
              </tr>
            </tbody>
          </table>

          {/* CTA Row */}
          <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Every ceramic application includes full chemical wash, iron fallout decontamination, and machine paint correction.
            </p>
            <button
              onClick={onQuoteClick}
              className="px-6 py-3 bg-gradient-to-r from-[#ff007f] to-[#e60067] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl hover:brightness-110 active:scale-95 shadow-[0_0_15px_rgba(255,0,127,0.4)] flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Get 10-Yr Ceramic Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
