'use client';

import { ShieldCheck, Award, Truck, Sparkles, Clock, Check } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    {
      icon: Award,
      title: '20 Years in Business',
      desc: 'Same craftsman owner since 2004. Proven reliability across coastal North Carolina.',
      highlight: 'EST. 2004',
      color: '#ff007f',
    },
    {
      icon: ShieldCheck,
      title: '10-Year Ceramic Coating',
      desc: 'Certified nano-ceramic installation with official transferable warranty protection.',
      highlight: 'CERTIFIED',
      color: '#00f0ff',
    },
    {
      icon: Truck,
      title: 'We Come To You',
      desc: 'Self-sufficient mobile rigs with deionized spot-free water, power generators, and professional gear.',
      highlight: '100% MOBILE',
      color: '#ff007f',
    },
    {
      icon: Clock,
      title: 'Open Always & Flexible',
      desc: '24/7 instant quotes, weekend appointments, and flexible scheduling at your home, dock, or hangar.',
      highlight: 'CONVENIENT',
      color: '#00f0ff',
    },
  ];

  return (
    <section className="relative bg-[#0d0f14] border-y border-slate-800/80 py-8 lg:py-12 overflow-hidden">
      {/* Background Carbon Weave */}
      <div className="absolute inset-0 bg-carbon-dense opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col p-6 rounded-xl bg-[#12151d]/70 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Subtle top indicator bar */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] transition-all duration-300 opacity-60 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                  }}
                />

                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-300"
                    style={{
                      backgroundColor: `${item.color}10`,
                      borderColor: `${item.color}35`,
                    }}
                  >
                    <IconComponent
                      className="w-6 h-6 transition-transform group-hover:scale-110"
                      style={{ color: item.color }}
                    />
                  </div>
                  <span
                    className="font-mono text-[10px] font-bold tracking-widest uppercase py-0.5 px-2 rounded border"
                    style={{
                      color: item.color,
                      borderColor: `${item.color}30`,
                      backgroundColor: `${item.color}08`,
                    }}
                  >
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2 font-display">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
