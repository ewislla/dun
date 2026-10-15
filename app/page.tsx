'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import ServicesSection from '@/components/ServicesSection';
import CeramicSpotlight from '@/components/CeramicSpotlight';
import InstantQuoteBooking from '@/components/InstantQuoteBooking';
import GalleryLightbox from '@/components/GalleryLightbox';
import ProcessSection from '@/components/ProcessSection';
import ReviewsSection from '@/components/ReviewsSection';
import ServiceAreaContact from '@/components/ServiceAreaContact';
import Footer from '@/components/Footer';
import StickyMobileBar from '@/components/StickyMobileBar';

export default function Home() {
  const [selectedVehicleForQuote, setSelectedVehicleForQuote] = useState('car');
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('ceramic');

  const scrollToQuote = (vehicleId?: string, serviceId?: string) => {
    if (vehicleId) {
      if (vehicleId === 'watercraft') setSelectedVehicleForQuote('watercraft');
      else if (vehicleId === 'aircraft') setSelectedVehicleForQuote('aircraft');
      else if (vehicleId === 'rv-motorhome') setSelectedVehicleForQuote('rv');
      else if (vehicleId === 'motorcycles') setSelectedVehicleForQuote('motorcycle');
      else setSelectedVehicleForQuote('car');
    }

    if (serviceId) {
      if (serviceId === 'ceramic-coating') setSelectedServiceForQuote('ceramic');
      else if (serviceId === 'auto-detailing') setSelectedServiceForQuote('full-detail');
      else setSelectedServiceForQuote('ceramic');
    }

    const el = document.getElementById('quote-estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08090c] text-slate-100 selection:bg-[#ff007f] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenQuote={() => scrollToQuote()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onQuoteClick={() => scrollToQuote()} />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Services Grid (Ceramic Coating Dominant) */}
        <ServicesSection
          onSelectService={(serviceId) => {
            scrollToQuote(serviceId, serviceId);
          }}
        />

        {/* 4. Ceramic Coating Spotlight with Interactive Before/After Slider */}
        <CeramicSpotlight onQuoteClick={() => scrollToQuote('car', 'ceramic-coating')} />

        {/* 5. Instant Quote and Booking (The Centerpiece) */}
        <InstantQuoteBooking
          initialVehicle={selectedVehicleForQuote}
          initialService={selectedServiceForQuote}
        />

        {/* 6. Gallery with Lightbox */}
        <GalleryLightbox
          onBookService={(serviceName) => {
            scrollToQuote('car', 'ceramic-coating');
          }}
        />

        {/* 7. Process: 3 Steps */}
        <ProcessSection onQuoteClick={() => scrollToQuote()} />

        {/* 8. Reviews */}
        <ReviewsSection />

        {/* 9. Service Area & Contact */}
        <ServiceAreaContact onQuoteClick={() => scrollToQuote()} />
      </main>

      {/* 10. Footer */}
      <Footer onQuoteClick={() => scrollToQuote()} />

      {/* Mobile Sticky Action Bar */}
      <StickyMobileBar onQuoteClick={() => scrollToQuote()} />
    </div>
  );
}
