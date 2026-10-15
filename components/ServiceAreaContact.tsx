'use client';

import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Send,
  CheckCircle2,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { SERVICE_AREAS } from '@/lib/detailing-data';

interface ServiceAreaContactProps {
  onQuoteClick: () => void;
}

export default function ServiceAreaContact({ onQuoteClick }: ServiceAreaContactProps) {
  const [zipInput, setZipInput] = useState('');
  const [zipResult, setZipResult] = useState<string | null>(null);

  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [sentMessage, setSentMessage] = useState(false);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = zipInput.trim().toLowerCase();
    const found = SERVICE_AREAS.some(
      (s) => s.zip.includes(cleaned) || s.name.toLowerCase().includes(cleaned)
    );

    if (found || cleaned === '28445' || cleaned === '28460' || cleaned === '28443' || cleaned === '28540' || cleaned === '28411') {
      setZipResult('Great news! Your area is within our primary mobile detailing service zone.');
    } else if (cleaned.length > 0) {
      setZipResult('We frequently travel outside our primary zone for multi-vehicle details, boats, aircraft, and ceramic coatings! Give Troy a call at 910-330-8045.');
    }
  };

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;
    setSentMessage(true);
  };

  return (
    <section id="service-area" className="relative py-20 lg:py-28 bg-[#0b0c11] overflow-hidden border-t border-slate-800/80">
      {/* Background Weave */}
      <div className="absolute inset-0 bg-carbon opacity-35 pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#ff007f]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
            <span>Mobile Detailing Coverage</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Coastal North Carolina</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-display uppercase text-chrome">
            Service Area & Contact
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-wrap-balance">
            Based in Holly Ridge, NC, Dun-Rite brings full water, power, and detailing craftsmanship right to
            your driveway, boat marina, or private airstrip.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Radius Check */}
          <div className="lg:col-span-6 space-y-6">
            {/* Direct Contact Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#11131c] border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white font-display uppercase tracking-tight flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#ff007f]" />
                Get in Touch with Owner Troy Woodard
              </h3>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <a
                  href="tel:9103308045"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#141620] border border-slate-800 hover:border-[#00f0ff] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono uppercase">Direct Call / Text</span>
                    <span className="text-lg font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                      910-330-8045
                    </span>
                    <span className="text-xs text-slate-400 block">Fastest response for quotes & immediate scheduling</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:troywoodard41@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#141620] border border-slate-800 hover:border-[#ff007f] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ff007f]/10 border border-[#ff007f]/30 flex items-center justify-center text-[#ff007f] shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono uppercase">Email Address</span>
                    <span className="text-base font-bold text-white group-hover:text-[#ff007f] transition-colors">
                      troywoodard41@gmail.com
                    </span>
                    <span className="text-xs text-slate-400 block">Fleet, aircraft, and marine project proposals</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#141620] border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono uppercase">Shop & Dispatch Base</span>
                    <span className="text-base font-bold text-white">
                      790 Hwy 50, Holly Ridge, NC 28445
                    </span>
                    <span className="text-xs text-slate-400 block">Hours: Open Always / 24-7 Quotes</span>
                  </div>
                </div>
              </div>

              {/* Service Radius Zip Checker */}
              <div className="p-4 rounded-xl bg-[#090a0e] border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Check Your Location for Free Mobile Dispatch
                </div>
                <form onSubmit={handleZipCheck} className="flex gap-2">
                  <input
                    type="text"
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                    placeholder="Enter Zip Code or Town (e.g. 28445 or Surf City)"
                    className="flex-1 px-3 py-2 rounded-lg bg-[#141620] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#00f0ff]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#00f0ff] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg hover:brightness-110 cursor-pointer"
                  >
                    Check
                  </button>
                </form>
                {zipResult && (
                  <div className="text-xs text-emerald-400 flex items-start gap-1.5 pt-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                    <span>{zipResult}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Service Areas Badges */}
            <div className="p-6 rounded-2xl bg-[#11131c] border border-slate-800">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 font-display">
                Primary Mobile Service Corridors
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                {SERVICE_AREAS.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                    <span className="font-medium text-slate-200">{area.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map & Quick Message */}
          <div className="lg:col-span-6 space-y-6">
            {/* Map Card */}
            <div className="rounded-2xl bg-[#11131c] border border-slate-800 overflow-hidden shadow-2xl">
              <div className="p-4 bg-[#141620] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#ff007f]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Holly Ridge & Coastal NC Map
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=790+Hwy+50+Holly+Ridge+NC+28445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#00f0ff] hover:underline flex items-center gap-1 font-semibold"
                >
                  Open in Google Maps ↗
                </a>
              </div>

              {/* Styled Map Container */}
              <div className="relative aspect-[16/10] w-full bg-[#0d0f16]">
                <iframe
                  title="Dun-Rite Auto Detailing Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52674.55018625298!2d-77.5898863625471!3d34.49380061141705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a97121cf3e0b75%3A0x6b3d95ef54580221!2s790%20NC-50%2C%20Holly%20Ridge%2C%20NC%2028445!5e0!3m2!1sen!2sus!4v1713000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(105%)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>

              <div className="p-4 bg-[#141620] text-xs text-slate-400 flex items-center justify-between">
                <span>Dispatch Base: 790 Hwy 50, Holly Ridge, NC 28445</span>
                <span className="font-mono text-[#00f0ff]">35-Mile Radius</span>
              </div>
            </div>

            {/* Direct Quick Query Form */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#11131c] border border-slate-800">
              <h3 className="text-lg font-bold text-white font-display uppercase tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Have a special request or custom project? Leave your info and Troy will call or text you shortly.
              </p>

              {sentMessage ? (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Message sent! Troy will respond within a couple of hours.</span>
                </div>
              ) : (
                <form onSubmit={handleQuickContact} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required
                      className="px-3 py-2.5 rounded-lg bg-[#141620] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#00f0ff]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      required
                      className="px-3 py-2.5 rounded-lg bg-[#141620] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#00f0ff]"
                    />
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Tell Troy about your vehicle, boat, or coating project..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#141620] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#00f0ff]"
                  />
                  <div className="flex justify-between items-center pt-1">
                    <button
                      type="button"
                      onClick={onQuoteClick}
                      className="text-xs text-[#00f0ff] hover:underline"
                    >
                      Or use the Instant Quote Calculator →
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-[#ff007f] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:brightness-110 flex items-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(255,0,127,0.3)]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
