'use client';

import { Star, ShieldCheck, ThumbsUp, MapPin, Quote } from 'lucide-react';
import { REVIEWS, ReviewItem } from '@/lib/detailing-data';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-20 lg:py-28 bg-[#08090c] overflow-hidden">
      {/* Background Weave */}
      <div className="absolute inset-0 bg-carbon opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
            <span>Verified Customer Reviews</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>5.0 Star Local Reputation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-display uppercase text-chrome">
            Built on 20 Years of Trust
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-wrap-balance">
            Hear from local boat captains, truck owners, and daily commuters across Holly Ridge, Surf City,
            Topsail Island, and Jacksonville who trust Troy with their prized investments.
          </p>

          {/* Social Proof Aggregate Badge */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">5.0 / 5.0 Average Rating</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300">Over 200+ Coastal NC Vehicles Detailed</span>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {REVIEWS.map((review: ReviewItem) => (
            <div
              key={review.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-[#11131b] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between shadow-lg group"
            >
              <div className="space-y-4">
                {/* Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author & Vehicle Info */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white font-display flex items-center gap-2">
                    <span>{review.name}</span>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-[#00f0ff] font-sans font-semibold">
                        <ShieldCheck className="w-3 h-3 text-[#00f0ff]" />
                        Verified Job
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{review.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-mono text-[#ff007f] font-semibold block">
                    {review.vehicle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on real reviews */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Showing representative customer feedback from 20 years of continuous operation in coastal North Carolina.
        </div>
      </div>
    </section>
  );
}
