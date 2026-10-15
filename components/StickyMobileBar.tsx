'use client';

import { Phone, Sparkles } from 'lucide-react';

interface StickyMobileBarProps {
  onQuoteClick: () => void;
}

export default function StickyMobileBar({ onQuoteClick }: StickyMobileBarProps) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#08090c]/95 backdrop-blur-lg border-t border-slate-800/90 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-5px_25px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Quick Call Button (Cyan) */}
        <a
          href="tel:9103308045"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-[#00f0ff]/60 bg-[#00f0ff]/10 text-[#00f0ff] font-bold text-xs uppercase tracking-wider active:bg-[#00f0ff]/25 transition-all shadow-[0_0_12px_rgba(0,240,255,0.2)]"
        >
          <Phone className="w-4 h-4 text-[#00f0ff] shrink-0" />
          <span className="truncate">Call 910-330-8045</span>
        </a>

        {/* Quick Quote Button (Magenta) */}
        <button
          onClick={onQuoteClick}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-[#ff007f] to-[#e60067] text-white font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-[0_0_15px_rgba(255,0,127,0.4)] cursor-pointer"
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span className="truncate">Get Free Quote</span>
        </button>
      </div>
    </div>
  );
}
