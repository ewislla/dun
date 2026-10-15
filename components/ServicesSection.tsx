'use client';

import {
  ShieldCheck,
  Car,
  Anchor,
  Plane,
  Truck,
  Flame,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react';
import { SERVICES, ServiceItem } from '@/lib/detailing-data';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Car':
        return Car;
      case 'Anchor':
        return Anchor;
      case 'Plane':
        return Plane;
      case 'Truck':
        return Truck;
      case 'Flame':
        return Flame;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-[#08090c] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-carbon opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-[#ff007f]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
            <span>Precision Mobile Detailing</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>All Vehicle Categories</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-display uppercase text-chrome">
            Craftsman Detailing Services
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-wrap-balance">
            Whether it’s your daily driver, tournament fishing boat, private aircraft, or cross-country RV,
            Troy brings 20 years of hands-on perfection straight to your door in Holly Ridge and coastal NC.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SERVICES.map((service: ServiceItem) => {
            const Icon = getIcon(service.icon);
            const isFeatured = service.featured;

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-2xl transition-all duration-300 p-6 sm:p-8 ${
                  isFeatured
                    ? 'lg:col-span-2 bg-gradient-to-br from-[#1b1222] via-[#12141c] to-[#0d0f17] border-2 border-[#ff007f]/80 shadow-[0_0_35px_rgba(255,0,127,0.25)] hover:shadow-[0_0_50px_rgba(255,0,127,0.4)]'
                    : 'bg-[#10121a]/80 border border-slate-800 hover:border-slate-700 hover:bg-[#131622] hover:-translate-y-1'
                }`}
              >
                {/* Subtle Carbon Interior Overlay */}
                <div className="absolute inset-0 bg-carbon-dense opacity-40 rounded-2xl pointer-events-none" />

                {/* Top Corner Specular Reflection */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/[0.03] to-transparent pointer-events-none rounded-tr-2xl" />

                <div className="relative z-10">
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                        isFeatured
                          ? 'bg-[#ff007f]/20 border-[#ff007f]/60 text-[#ff007f] shadow-[0_0_20px_rgba(255,0,127,0.4)]'
                          : 'bg-[#00f0ff]/10 border-[#00f0ff]/30 text-[#00f0ff] group-hover:border-[#00f0ff]'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="text-right">
                      {isFeatured && (
                        <span className="inline-block text-[10px] font-black tracking-widest uppercase bg-[#ff007f] text-white px-2.5 py-1 rounded shadow-[0_0_12px_rgba(255,0,127,0.6)] mb-1">
                          ★ FLAGSHIP COATING
                        </span>
                      )}
                      <div className="text-xs text-slate-400">Starting from</div>
                      <div className="font-mono text-xl font-bold text-white tabular-nums">
                        {service.startingPrice}
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3
                    className={`text-2xl font-bold italic tracking-tight font-display mb-3 ${
                      isFeatured ? 'text-chrome' : 'text-white group-hover:text-[#00f0ff] transition-colors'
                    }`}
                  >
                    {service.name}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Feature Bullets */}
                  <div
                    className={`grid gap-2.5 mb-8 ${
                      isFeatured ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                    }`}
                  >
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isFeatured ? 'text-[#ff007f]' : 'text-[#00f0ff]'
                          }`}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="relative z-10 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className={`w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-[#ff007f] to-[#e60067] text-white hover:brightness-110 shadow-[0_0_20px_rgba(255,0,127,0.4)]'
                        : 'border border-[#00f0ff]/40 text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] hover:text-white'
                    }`}
                  >
                    <span>Get a Quote for {service.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Detail Direct Reassurance Strip */}
        <div className="mt-12 p-6 rounded-xl bg-[#0f1118] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-display">
              Have a multi-vehicle fleet, yacht, or custom aircraft project?
            </h4>
            <p className="text-xs text-slate-400">
              Troy provides on-site commercial evaluations throughout Onslow & Pender counties.
            </p>
          </div>
          <a
            href="tel:9103308045"
            className="px-5 py-2.5 rounded-lg border border-[#00f0ff] text-[#00f0ff] text-xs font-bold uppercase tracking-wider hover:bg-[#00f0ff] hover:text-black transition-all whitespace-nowrap shrink-0"
          >
            Direct Call: 910-330-8045
          </a>
        </div>
      </div>
    </section>
  );
}
