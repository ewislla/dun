'use client';

import { useState, useId } from 'react';
import {
  Car,
  Anchor,
  Plane,
  Truck,
  Flame,
  ShieldCheck,
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  User,
  Upload,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';

interface InstantQuoteBookingProps {
  initialVehicle?: string;
  initialService?: string;
}

export default function InstantQuoteBooking({
  initialVehicle = 'car',
  initialService = 'ceramic',
}: InstantQuoteBookingProps) {
  const formId = useId();

  // Step state
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form inputs
  const [vehicleType, setVehicleType] = useState<string>(initialVehicle);
  const [vehicleSize, setVehicleSize] = useState<'standard' | 'large'>('standard');
  const [boatLength, setBoatLength] = useState<number>(24);
  const [rvLength, setRvLength] = useState<number>(32);

  const [serviceTier, setServiceTier] = useState<string>(initialService);

  const [vehicleYear, setVehicleYear] = useState<string>('2023');
  const [vehicleMakeModel, setVehicleMakeModel] = useState<string>('');
  const [paintCondition, setPaintCondition] = useState<'good' | 'moderate' | 'heavy'>('moderate');

  // Add-ons
  const [addonWheels, setAddonWheels] = useState<boolean>(false);
  const [addonGlass, setAddonGlass] = useState<boolean>(false);
  const [addonEngine, setAddonEngine] = useState<boolean>(false);
  const [addonHeadlights, setAddonHeadlights] = useState<boolean>(false);

  // Date and location
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('morning');
  const [serviceAddress, setServiceAddress] = useState<string>('');

  // Contact
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);

  // Submission state
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedQuote, setCopiedQuote] = useState<boolean>(false);

  // Calculate live price estimate
  const calculatePrice = () => {
    let low = 185;
    let high = 245;
    let estHours = '2.5 - 3.5 hrs';

    if (vehicleType === 'watercraft') {
      if (serviceTier === 'ceramic') {
        low = boatLength * 45;
        high = boatLength * 60;
        estHours = '1 - 2 Days';
      } else if (serviceTier === 'correction') {
        low = boatLength * 30;
        high = boatLength * 40;
        estHours = '6 - 8 hrs';
      } else {
        low = boatLength * 22;
        high = boatLength * 28;
        estHours = '4 - 6 hrs';
      }
    } else if (vehicleType === 'rv') {
      if (serviceTier === 'ceramic') {
        low = rvLength * 50;
        high = rvLength * 65;
        estHours = '2 Days';
      } else if (serviceTier === 'correction') {
        low = rvLength * 32;
        high = rvLength * 42;
        estHours = '8 - 12 hrs';
      } else {
        low = rvLength * 25;
        high = rvLength * 32;
        estHours = '5 - 7 hrs';
      }
    } else if (vehicleType === 'aircraft') {
      if (serviceTier === 'ceramic') {
        low = 1450;
        high = 2200;
        estHours = '2 - 3 Days';
      } else if (serviceTier === 'correction') {
        low = 850;
        high = 1250;
        estHours = '8 - 10 hrs';
      } else {
        low = 450;
        high = 650;
        estHours = '4 - 6 hrs';
      }
    } else if (vehicleType === 'motorcycle') {
      if (serviceTier === 'ceramic') {
        low = 485;
        high = 650;
        estHours = '5 - 6 hrs';
      } else if (serviceTier === 'correction') {
        low = 285;
        high = 385;
        estHours = '3 - 4 hrs';
      } else {
        low = 165;
        high = 225;
        estHours = '2 - 3 hrs';
      }
    } else {
      // Car / Truck
      const sizeMultiplier = vehicleSize === 'large' ? 1.25 : 1.0;
      if (serviceTier === 'ceramic') {
        low = Math.round(895 * sizeMultiplier);
        high = Math.round(1150 * sizeMultiplier);
        estHours = '7 - 9 hrs (Full Day)';
      } else if (serviceTier === 'correction') {
        low = Math.round(450 * sizeMultiplier);
        high = Math.round(595 * sizeMultiplier);
        estHours = '5 - 6 hrs';
      } else if (serviceTier === 'full-detail') {
        low = Math.round(245 * sizeMultiplier);
        high = Math.round(315 * sizeMultiplier);
        estHours = '3.5 - 4.5 hrs';
      } else {
        // Express wash & seal
        low = Math.round(145 * sizeMultiplier);
        high = Math.round(185 * sizeMultiplier);
        estHours = '2 - 2.5 hrs';
      }
    }

    // Condition adjustment
    if (paintCondition === 'moderate') {
      low += 50;
      high += 75;
    } else if (paintCondition === 'heavy') {
      low += 120;
      high += 180;
    }

    // Addons
    if (addonWheels) {
      low += 140;
      high += 160;
    }
    if (addonGlass) {
      low += 75;
      high += 95;
    }
    if (addonEngine) {
      low += 65;
      high += 80;
    }
    if (addonHeadlights) {
      low += 80;
      high += 100;
    }

    return { low, high, estHours };
  };

  const { low, high, estHours } = calculatePrice();

  const handleSimulatedPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setUploadedPhotos((prev) => [...prev, ...names].slice(0, 4));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      alert('Please provide your name and phone number so Troy can reach out with your quote.');
      return;
    }
    setSubmitted(true);
  };

  const getVehicleLabel = () => {
    switch (vehicleType) {
      case 'car':
        return vehicleSize === 'large' ? 'SUV / Truck / Van' : 'Coupe / Sedan';
      case 'watercraft':
        return `${boatLength}ft Boat / Watercraft`;
      case 'aircraft':
        return 'Aircraft';
      case 'rv':
        return `${rvLength}ft RV / Motorcoach`;
      case 'motorcycle':
        return 'Motorcycle / Powersports';
      default:
        return 'Automobile';
    }
  };

  const getServiceLabel = () => {
    switch (serviceTier) {
      case 'ceramic':
        return '10-Year Certified Ceramic Coating (Si02)';
      case 'correction':
        return 'Multi-Stage Paint Correction & Polish';
      case 'full-detail':
        return 'Complete Interior Steam & Exterior Detail';
      case 'wash-seal':
        return 'Deionized Wash & Hydrophobic Sealant';
      default:
        return '10-Year Ceramic Coating';
    }
  };

  const copySummaryToClipboard = () => {
    const text = `Dun-Rite Detailing Quote Inquiry:
Vehicle: ${getVehicleLabel()} (${vehicleYear} ${vehicleMakeModel || 'Unspecified'})
Service: ${getServiceLabel()}
Condition: ${paintCondition}
Add-ons: ${[addonWheels && 'Ceramic Wheels', addonGlass && 'Glass Coating', addonEngine && 'Engine Detail', addonHeadlights && 'Headlight Restore'].filter(Boolean).join(', ') || 'None'}
Estimate: $${low} - $${high}
Customer: ${clientName} (${clientPhone})
Address: ${serviceAddress || 'Holly Ridge / Coastal NC'}`;
    navigator.clipboard.writeText(text);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  return (
    <section id="quote-estimator" className="relative py-20 lg:py-28 bg-[#090a0e] overflow-hidden">
      {/* Background Weave */}
      <div className="absolute inset-0 bg-carbon opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff007f]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
            <span>Fast · Transparent · Mobile Service</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Direct to Craftsman</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-display uppercase text-chrome">
            Instant Quote & Booking Engine
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-wrap-balance">
            Select your vehicle category and service package to see an instant real-time price estimate.
            Troy brings everything needed directly to your location.
          </p>
        </div>

        {/* The Multi-Step Engine Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form Area */}
          <div className="lg:col-span-8 bg-[#10121a] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
            {/* Step Progress Indicators */}
            <div className="mb-8 border-b border-slate-800/80 pb-6">
              <div className="flex items-center justify-between text-xs font-semibold">
                {[
                  { step: 1, label: 'Vehicle' },
                  { step: 2, label: 'Service' },
                  { step: 3, label: 'Specs & Add-ons' },
                  { step: 4, label: 'Date & Contact' },
                ].map((s) => (
                  <button
                    key={s.step}
                    onClick={() => setCurrentStep(s.step)}
                    className={`flex items-center gap-2 transition-colors cursor-pointer ${
                      currentStep === s.step
                        ? 'text-[#00f0ff]'
                        : currentStep > s.step
                        ? 'text-slate-200'
                        : 'text-slate-500'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${
                        currentStep === s.step
                          ? 'bg-[#00f0ff] text-slate-950 font-black shadow-[0_0_10px_#00f0ff]'
                          : currentStep > s.step
                          ? 'bg-slate-700 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {currentStep > s.step ? '✓' : s.step}
                    </span>
                    <span className="hidden sm:inline font-mono uppercase">{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submission Confirmation Card */}
            {submitted ? (
              <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#00f0ff]/15 border-2 border-[#00f0ff] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                  <CheckCircle2 className="w-10 h-10 text-[#00f0ff]" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-black italic tracking-tight font-display text-white uppercase">
                    Quote Request Received!
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Thank you, <span className="text-[#00f0ff] font-semibold">{clientName}</span>.
                    Troy has received your details for your{' '}
                    <span className="text-white font-semibold">{getVehicleLabel()}</span>.
                    He will review your condition notes and call or text you at{' '}
                    <span className="text-white font-mono font-semibold">{clientPhone}</span> to confirm your appointment.
                  </p>
                </div>

                {/* Estimate Summary Box */}
                <div className="p-5 rounded-xl bg-[#141620] border border-slate-700 max-w-md mx-auto text-left space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>Estimated Range:</span>
                    <span className="font-mono text-lg font-black text-[#00f0ff]">
                      ${low} – ${high}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>Selected Service:</span>
                    <span className="text-slate-200 font-semibold">{getServiceLabel()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>Est. Time on Site:</span>
                    <span className="text-slate-200 font-mono">{estHours}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href="tel:9103308045"
                    className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#ff007f] to-[#e60067] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-[0_0_15px_rgba(255,0,127,0.4)] flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Troy Directly (910-330-8045)</span>
                  </a>

                  <button
                    onClick={copySummaryToClipboard}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {copiedQuote ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedQuote ? 'Summary Copied!' : 'Copy Quote Text'}</span>
                  </button>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-slate-200 underline pt-4"
                >
                  Modify or calculate another quote
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* STEP 1: VEHICLE TYPE */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="text-lg font-bold text-white font-display uppercase tracking-tight mb-1">
                        Step 1: Select Vehicle Category
                      </h3>
                      <p className="text-xs text-slate-400">
                        Dun-Rite is fully equipped to detail any vehicle directly on-site.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'car', name: 'Car / Truck', icon: Car, hint: 'Sedan, Coupe, SUV, Truck' },
                        { id: 'watercraft', name: 'Watercraft', icon: Anchor, hint: 'Boats, Center Consoles, Yachts' },
                        { id: 'aircraft', name: 'Aircraft', icon: Plane, hint: 'Singles, Twins, Turboprops' },
                        { id: 'rv', name: 'RV & Camper', icon: Truck, hint: 'Class A, B, C & Fifth Wheels' },
                        { id: 'motorcycle', name: 'Motorcycle', icon: Flame, hint: 'Cruisers, Harley, Sportbikes' },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSelected = vehicleType === item.id;
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setVehicleType(item.id)}
                            className={`p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-[#ff007f]/10 border-[#ff007f] shadow-[0_0_15px_rgba(255,0,127,0.3)]'
                                : 'bg-[#141620] border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <Icon
                                className={`w-6 h-6 ${
                                  isSelected ? 'text-[#ff007f]' : 'text-slate-400'
                                }`}
                              />
                              {isSelected && (
                                <span className="w-2 h-2 rounded-full bg-[#ff007f] shadow-[0_0_6px_#ff007f]" />
                              )}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-white font-display">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                                {item.hint}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Sub-selector for Cars: Size */}
                    {vehicleType === 'car' && (
                      <div className="p-4 rounded-xl bg-[#141620] border border-slate-800 space-y-3">
                        <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                          Vehicle Body Size
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setVehicleSize('standard')}
                            className={`py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider border text-center transition-all cursor-pointer ${
                              vehicleSize === 'standard'
                                ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-[#00f0ff]'
                                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                            }`}
                          >
                            Coupe / Sedan / Compact SUV
                          </button>
                          <button
                            type="button"
                            onClick={() => setVehicleSize('large')}
                            className={`py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider border text-center transition-all cursor-pointer ${
                              vehicleSize === 'large'
                                ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-[#00f0ff]'
                                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
                            }`}
                          >
                            Full-Size Truck / 3-Row SUV / Van
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Sub-selector for Boats: Length Slider */}
                    {vehicleType === 'watercraft' && (
                      <div className="p-4 rounded-xl bg-[#141620] border border-slate-800 space-y-3">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                            Boat Hull Length (Feet)
                          </label>
                          <span className="font-mono text-base font-bold text-[#00f0ff]">
                            {boatLength} Feet
                          </span>
                        </div>
                        <input
                          type="range"
                          min="16"
                          max="50"
                          step="1"
                          value={boatLength}
                          onChange={(e) => setBoatLength(parseInt(e.target.value))}
                          className="w-full accent-[#00f0ff] cursor-pointer"
                        />
                        <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                          <span>16ft Skiff</span>
                          <span>26ft Center Console</span>
                          <span>38ft Offshore</span>
                          <span>50ft+ Yacht</span>
                        </div>
                      </div>
                    )}

                    {/* Sub-selector for RVs: Length Slider */}
                    {vehicleType === 'rv' && (
                      <div className="p-4 rounded-xl bg-[#141620] border border-slate-800 space-y-3">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                            RV / Motorhome Length (Feet)
                          </label>
                          <span className="font-mono text-base font-bold text-[#ff007f]">
                            {rvLength} Feet
                          </span>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="45"
                          step="1"
                          value={rvLength}
                          onChange={(e) => setRvLength(parseInt(e.target.value))}
                          className="w-full accent-[#ff007f] cursor-pointer"
                        />
                        <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                          <span>20ft Class B / Trailer</span>
                          <span>32ft Class C</span>
                          <span>45ft Class A Bus</span>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-end pt-2">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="px-6 py-3 bg-[#ff007f] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:brightness-110 flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,0,127,0.4)]"
                      >
                        <span>Next: Select Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: SERVICE TIER */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="text-lg font-bold text-white font-display uppercase tracking-tight mb-1">
                        Step 2: Choose Service Package
                      </h3>
                      <p className="text-xs text-slate-400">
                        All packages are executed with professional rotary polishers and spot-free water.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        {
                          id: 'ceramic',
                          name: '10-Year Certified Ceramic Coating',
                          tag: 'MOST POPULAR · 10-YR WARRANTY',
                          desc: 'Full chemical decontamination, multi-stage machine paint correction, and military-grade 9H+ Si02 nano-crystal coating.',
                          badgeColor: '#ff007f',
                        },
                        {
                          id: 'correction',
                          name: 'Multi-Stage Paint Correction & Polish',
                          tag: 'SWIRL REMOVAL',
                          desc: 'Rotary cutting compound and dual-action fine polish to permanently remove 80-95% of swirl marks, followed by synthetic sealant.',
                          badgeColor: '#00f0ff',
                        },
                        {
                          id: 'full-detail',
                          name: 'Full Interior Steam & Exterior Detail',
                          tag: 'COMPLETE RESET',
                          desc: 'Deionized hand wash, clay bar, carpet steam extraction, leather deep cleaning & conditioning, and UV interior barrier.',
                          badgeColor: '#38bdf8',
                        },
                        {
                          id: 'wash-seal',
                          name: 'Mobile Wash & Hydrophobic Sealant',
                          tag: 'MAINTENANCE',
                          desc: 'Spot-free foam wash, wheels & barrels deep scrub, tire dressing, interior vacuum, wipe down, and 3-month spray ceramic.',
                          badgeColor: '#a855f7',
                        },
                      ].map((item) => {
                        const isSelected = serviceTier === item.id;
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setServiceTier(item.id)}
                            className={`w-full p-4 rounded-xl text-left border transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer ${
                              isSelected
                                ? 'bg-[#ff007f]/10 border-[#ff007f] shadow-[0_0_15px_rgba(255,0,127,0.25)]'
                                : 'bg-[#141620] border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-white font-display">
                                  {item.name}
                                </span>
                                <span
                                  className="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded border"
                                  style={{
                                    color: item.badgeColor,
                                    borderColor: `${item.badgeColor}40`,
                                    backgroundColor: `${item.badgeColor}10`,
                                  }}
                                >
                                  {item.tag}
                                </span>
                              </div>
                              <p className="text-xs text-slate-300 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                            <div className="shrink-0 flex items-center gap-2">
                              {isSelected ? (
                                <span className="w-5 h-5 rounded-full bg-[#ff007f] flex items-center justify-center text-white text-xs">
                                  ✓
                                </span>
                              ) : (
                                <span className="w-5 h-5 rounded-full border border-slate-600" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="px-5 py-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="px-6 py-3 bg-[#ff007f] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:brightness-110 flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,0,127,0.4)]"
                      >
                        <span>Next: Specs & Add-ons</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: SPECS & ADD-ONS */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="text-lg font-bold text-white font-display uppercase tracking-tight mb-1">
                        Step 3: Vehicle Specs & Add-Ons
                      </h3>
                      <p className="text-xs text-slate-400">
                        Help Troy gauge product requirements and prep time.
                      </p>
                    </div>

                    {/* Year / Make / Model */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                          Year
                        </label>
                        <input
                          type="text"
                          value={vehicleYear}
                          onChange={(e) => setVehicleYear(e.target.value)}
                          placeholder="e.g. 2023"
                          className="w-full px-3 py-2.5 rounded-lg bg-[#141620] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#00f0ff]"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                          Make & Model / Vessel Name
                        </label>
                        <input
                          type="text"
                          value={vehicleMakeModel}
                          onChange={(e) => setVehicleMakeModel(e.target.value)}
                          placeholder="e.g. Ford F-250 Super Duty, Corvette Z06, Contender 32"
                          className="w-full px-3 py-2.5 rounded-lg bg-[#141620] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#00f0ff]"
                        />
                      </div>
                    </div>

                    {/* Paint / Surface Condition */}
                    <div>
                      <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                        Current Clearcoat / Gelcoat Condition
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { id: 'good', label: 'Like New / Minor', desc: 'Minimal swirls, good shine' },
                          { id: 'moderate', label: 'Moderate Swirls', desc: 'Spider-webs, light water spots' },
                          { id: 'heavy', label: 'Heavy Oxidation', desc: 'Chalky gelcoat, deep scratches' },
                        ].map((c) => (
                          <button
                            type="button"
                            key={c.id}
                            onClick={() => setPaintCondition(c.id as any)}
                            className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                              paintCondition === c.id
                                ? 'bg-[#00f0ff]/15 border-[#00f0ff] text-white'
                                : 'bg-[#141620] border-slate-800 text-slate-400 hover:text-white'
                            }`}
                          >
                            <div className="text-xs font-bold text-white">{c.label}</div>
                            <div className="text-[10px] text-slate-400 mt-0.5">{c.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Popular Ceramic & Detailing Add-ons */}
                    <div>
                      <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                        Optional Protection Upgrades
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label className="flex items-center gap-3 p-3 rounded-lg bg-[#141620] border border-slate-800 hover:border-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={addonWheels}
                            onChange={(e) => setAddonWheels(e.target.checked)}
                            className="w-4 h-4 rounded text-[#ff007f] accent-[#ff007f]"
                          />
                          <div className="text-xs">
                            <span className="font-bold text-white block">Wheel Ceramic Coating (+$150)</span>
                            <span className="text-[11px] text-slate-400">Protects faces & barrels from brake dust bake-on</span>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-3 rounded-lg bg-[#141620] border border-slate-800 hover:border-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={addonGlass}
                            onChange={(e) => setAddonGlass(e.target.checked)}
                            className="w-4 h-4 rounded text-[#ff007f] accent-[#ff007f]"
                          />
                          <div className="text-xs">
                            <span className="font-bold text-white block">Glass Rain Repellent Barrier (+$75)</span>
                            <span className="text-[11px] text-slate-400">Windshield ceramic rain bead up at 35+ mph</span>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-3 rounded-lg bg-[#141620] border border-slate-800 hover:border-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={addonEngine}
                            onChange={(e) => setAddonEngine(e.target.checked)}
                            className="w-4 h-4 rounded text-[#ff007f] accent-[#ff007f]"
                          />
                          <div className="text-xs">
                            <span className="font-bold text-white block">Engine Bay Deep Revival (+$65)</span>
                            <span className="text-[11px] text-slate-400">Steam degreased & satin UV dressed</span>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-3 rounded-lg bg-[#141620] border border-slate-800 hover:border-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={addonHeadlights}
                            onChange={(e) => setAddonHeadlights(e.target.checked)}
                            className="w-4 h-4 rounded text-[#ff007f] accent-[#ff007f]"
                          />
                          <div className="text-xs">
                            <span className="font-bold text-white block">Headlight Clarity Restoration (+$80)</span>
                            <span className="text-[11px] text-slate-400">Wet-sanded yellow lens de-clouding + UV coat</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Optional Photo Upload */}
                    <div className="p-4 rounded-xl bg-[#141620] border border-dashed border-slate-700 text-center space-y-2">
                      <Upload className="w-6 h-6 text-[#00f0ff] mx-auto" />
                      <div className="text-xs text-slate-300 font-medium">
                        Upload Condition Photos (Optional)
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Take a quick photo of your paint, boat gelcoat, or interior so Troy can inspect beforehand.
                      </p>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleSimulatedPhotoUpload}
                        className="text-xs text-slate-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#00f0ff]/20 file:text-[#00f0ff] hover:file:bg-[#00f0ff]/30 cursor-pointer"
                      />
                      {uploadedPhotos.length > 0 && (
                        <div className="flex flex-wrap gap-2 justify-center pt-2">
                          {uploadedPhotos.map((p, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-1 rounded"
                            >
                              ✓ {p}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="px-5 py-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(4)}
                        className="px-6 py-3 bg-[#ff007f] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:brightness-110 flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,0,127,0.4)]"
                      >
                        <span>Next: Date & Location</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: DATE, LOCATION & CONTACT */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="text-lg font-bold text-white font-display uppercase tracking-tight mb-1">
                        Step 4: Scheduling & Contact Details
                      </h3>
                      <p className="text-xs text-slate-400">
                        Dun-Rite is 100% mobile. Troy will arrive on-site with water and power.
                      </p>
                    </div>

                    {/* Schedule Date & Preferred Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                          Preferred Service Date
                        </label>
                        <input
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg bg-[#141620] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#00f0ff]"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                          Arrival Window
                        </label>
                        <select
                          value={timeSlot}
                          onChange={(e) => setTimeSlot(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg bg-[#141620] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#00f0ff]"
                        >
                          <option value="morning">Morning (8:00 AM – 11:00 AM)</option>
                          <option value="midday">Midday (11:00 AM – 2:00 PM)</option>
                          <option value="afternoon">Afternoon (2:00 PM – 5:00 PM)</option>
                          <option value="weekend">Weekend / Flexible Special Time</option>
                        </select>
                      </div>
                    </div>

                    {/* Service Address */}
                    <div>
                      <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                        Mobile Service Address (Driveway, Marina, Dock, Hangar)
                      </label>
                      <input
                        type="text"
                        value={serviceAddress}
                        onChange={(e) => setServiceAddress(e.target.value)}
                        placeholder="e.g. 124 Ocean Blvd, Surf City, NC or Driveway in Holly Ridge"
                        className="w-full px-3 py-2.5 rounded-lg bg-[#141620] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#00f0ff]"
                        required
                      />
                    </div>

                    {/* Customer Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Troy customer"
                          className="w-full px-3 py-2.5 rounded-lg bg-[#141620] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#00f0ff]"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                          Phone Number (for call/text confirmation) *
                        </label>
                        <input
                          type="tel"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="(910) 555-0199"
                          className="w-full px-3 py-2.5 rounded-lg bg-[#141620] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#00f0ff]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                        Email Address (for official quote record)
                      </label>
                      <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="youremail@gmail.com"
                        className="w-full px-3 py-2.5 rounded-lg bg-[#141620] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#00f0ff]"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                        Special Requests / Access Instructions
                      </label>
                      <textarea
                        rows={2}
                        value={clientNotes}
                        onChange={(e) => setClientNotes(e.target.value)}
                        placeholder="e.g. Gated community code, slip number at marina, dog in yard, specific scratches to inspect..."
                        className="w-full px-3 py-2 rounded-lg bg-[#141620] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#00f0ff]"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ff007f] to-[#e60067] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(255,0,127,0.5)] hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Lock In Estimated Quote & Book</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Sticky Live Price Estimate & Breakdown Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-[#12141e] rounded-2xl border border-slate-800 p-6 shadow-2xl relative overflow-hidden">
              {/* Carbon overlay */}
              <div className="absolute inset-0 bg-carbon-dense opacity-40 pointer-events-none" />

              <div className="relative z-10 space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Live Calculation
                  </span>
                  <span className="text-[10px] font-bold uppercase bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 px-2 py-0.5 rounded">
                    MOBILE SERVICE
                  </span>
                </div>

                {/* Big Price Display */}
                <div className="text-center py-2">
                  <div className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">
                    Estimated Range
                  </div>
                  <div className="font-mono text-3xl sm:text-4xl font-black text-white tabular-nums tracking-tight">
                    <span className="text-[#00f0ff]">${low}</span>
                    <span className="text-slate-600 mx-2">–</span>
                    <span className="text-[#ff007f]">${high}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Estimated on-site duration: <span className="font-mono text-slate-200">{estHours}</span>
                  </div>
                </div>

                {/* Selected Breakdown */}
                <div className="space-y-2.5 text-xs border-t border-slate-800 pt-4">
                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Category:</span>
                    <span className="font-semibold text-white">{getVehicleLabel()}</span>
                  </div>

                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Package:</span>
                    <span className="font-semibold text-[#00f0ff] text-right max-w-[60%]">
                      {serviceTier === 'ceramic'
                        ? '10-Yr Ceramic Coating'
                        : serviceTier === 'correction'
                        ? 'Paint Correction & Seal'
                        : serviceTier === 'full-detail'
                        ? 'Full Detail Elite'
                        : 'Wash & Spray Ceramic'}
                    </span>
                  </div>

                  <div className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Surface State:</span>
                    <span className="capitalize text-slate-200">{paintCondition}</span>
                  </div>

                  {(addonWheels || addonGlass || addonEngine || addonHeadlights) && (
                    <div className="flex justify-between text-slate-300 pt-1 border-t border-slate-800/60">
                      <span className="text-slate-400">Add-ons:</span>
                      <span className="text-right text-[#ff007f] font-mono text-[11px]">
                        {[
                          addonWheels && 'Wheels',
                          addonGlass && 'Glass',
                          addonEngine && 'Engine',
                          addonHeadlights && 'Lights',
                        ]
                          .filter(Boolean)
                          .join(', ')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Guarantee Banner */}
                <div className="p-3 rounded-xl bg-[#090a0e] border border-slate-800/80 text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#00f0ff] font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Dun-Rite Guarantee</span>
                  </div>
                  <p className="text-slate-400 leading-normal">
                    No hidden trip fees for Holly Ridge, Surf City, Topsail Island, Sneads Ferry & Jacksonville.
                    Spot-free deionized water included.
                  </p>
                </div>

                {/* Fast Contact */}
                <div className="pt-2 text-center">
                  <div className="text-[11px] text-slate-400">Prefer talking directly to Troy?</div>
                  <a
                    href="tel:9103308045"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00f0ff] hover:underline mt-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>(910) 330-8045</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
