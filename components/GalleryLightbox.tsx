'use client';

import { useState } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { GALLERY_PROJECTS, GalleryProject } from '@/lib/detailing-data';

interface GalleryLightboxProps {
  onBookService: (serviceName: string) => void;
}

export default function GalleryLightbox({ onBookService }: GalleryLightboxProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const filteredProjects =
    activeCategory === 'all'
      ? GALLERY_PROJECTS
      : GALLERY_PROJECTS.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ceramic', label: 'Ceramic Coating' },
    { id: 'auto', label: 'Exotics & Cars' },
    { id: 'marine', label: 'Watercraft & Boats' },
    { id: 'aircraft', label: 'Aircraft' },
    { id: 'rv', label: 'RV & Campers' },
    { id: 'motorcycle', label: 'Motorcycles' },
  ];

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  };

  return (
    <section id="gallery" className="relative py-20 lg:py-28 bg-[#08090c] overflow-hidden">
      {/* Background Weave */}
      <div className="absolute inset-0 bg-carbon opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00f0ff]">
            <span>Portfolio of Finished Work</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>20 Years in Coastal NC</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black italic tracking-tight font-display uppercase text-chrome">
            Real Craftsmanship Gallery
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-wrap-balance">
            Every vehicle below was treated with multi-stage paint de-swirling, high-density Si02 ceramic coating,
            or marine gelcoat restoration right in Holly Ridge, Surf City, Topsail Island, and coastal NC.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#ff007f] text-white shadow-[0_0_12px_rgba(255,0,127,0.4)]'
                    : 'bg-[#12141d] text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl bg-[#11131b] border border-slate-800 hover:border-slate-600 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Visual Showcase Block with Simulated Specular Reflections */}
              <div
                className="relative aspect-[16/10] w-full overflow-hidden flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle at 60% 40%, ${project.accentColor}25 0%, #0d0f16 60%, #06070a 100%)`,
                }}
              >
                {/* Carbon Overlay */}
                <div className="absolute inset-0 bg-carbon-dense opacity-50 pointer-events-none" />

                {/* Diagonal Specular Reflection */}
                <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent rotate-45 pointer-events-none group-hover:translate-x-12 transition-transform duration-700" />

                {/* Vector Silhouette Artwork matching project category */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2 border transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${project.accentColor}15`,
                      borderColor: `${project.accentColor}50`,
                      color: project.accentColor,
                      boxShadow: `0 0 20px ${project.glowColor}`,
                    }}
                  >
                    <Sparkles className="w-7 h-7" />
                  </div>

                  <span className="font-mono text-[10px] tracking-widest uppercase text-slate-400 font-bold">
                    {project.categoryLabel}
                  </span>
                  <span className="text-sm font-bold text-white max-w-[85%] mt-1 leading-snug font-display">
                    {project.vehicle}
                  </span>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 z-20 flex gap-2">
                  {project.beforeAfter && (
                    <span className="text-[10px] font-mono font-bold uppercase bg-black/80 border border-[#00f0ff]/50 text-[#00f0ff] px-2 py-0.5 rounded backdrop-blur-sm">
                      Before & After Verified
                    </span>
                  )}
                </div>

                <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-bold text-white bg-black/80 border border-slate-700 px-2.5 py-1 rounded flex items-center gap-1.5 backdrop-blur-sm">
                    <Maximize2 className="w-3.5 h-3.5 text-[#00f0ff]" />
                    Inspect Details
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-3 bg-[#11131b]">
                <h3 className="text-base font-bold text-white font-display group-hover:text-[#00f0ff] transition-colors line-clamp-1">
                  {project.title}
                </h3>

                <div className="text-xs text-slate-400 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#ff007f] shrink-0" />
                    <span className="text-slate-300 font-medium truncate">{project.service}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-3xl rounded-2xl bg-[#0e1017] border border-slate-700 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-lg bg-black/60 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/70 text-white border border-slate-700 hover:border-[#00f0ff] transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/70 text-white border border-slate-700 hover:border-[#00f0ff] transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Lightbox Visual Stage */}
              <div
                className="relative aspect-video w-full flex items-center justify-center p-8 overflow-hidden"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${selectedProject.accentColor}30 0%, #0d0f16 65%, #050608 100%)`,
                }}
              >
                <div className="absolute inset-0 bg-carbon opacity-60" />

                {/* Center High-Gloss Display Iconography */}
                <div className="relative z-10 text-center space-y-3">
                  <div
                    className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center border shadow-2xl"
                    style={{
                      backgroundColor: `${selectedProject.accentColor}20`,
                      borderColor: selectedProject.accentColor,
                      color: selectedProject.accentColor,
                      boxShadow: `0 0 30px ${selectedProject.glowColor}`,
                    }}
                  >
                    <Sparkles className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black italic tracking-tight font-display text-white">
                    {selectedProject.vehicle}
                  </h4>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#00f0ff]">
                    {selectedProject.categoryLabel} Showcase · {selectedProject.location}
                  </div>
                </div>
              </div>

              {/* Lightbox Details Drawer */}
              <div className="p-6 sm:p-8 space-y-4 bg-[#0e1017]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Completed on-site with Dun-Rite Mobile Detailing rig.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onBookService(selectedProject.service);
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-[#ff007f] to-[#e60067] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_15px_rgba(255,0,127,0.4)] hover:brightness-110 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Request Quote for This Service
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Service Provided:</span>
                    <span className="font-semibold text-slate-200">{selectedProject.service}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Duration:</span>
                    <span className="font-mono font-semibold text-white">{selectedProject.duration}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Location:</span>
                    <span className="font-semibold text-[#00f0ff]">{selectedProject.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
