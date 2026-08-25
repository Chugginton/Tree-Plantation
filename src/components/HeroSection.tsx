import React from 'react';
import { AudioPlayer } from './AudioPlayer';
import { ArrowDownRight, Trees, Sparkles, Globe, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  treesCount: number;
  onOpenPlantModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ treesCount, onOpenPlantModal }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 px-4 lg:px-8 flex flex-col justify-between overflow-hidden border-b border-emerald-900/30 noise-bg">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b9810a_1px,transparent_1px),linear-gradient(to_bottom,#10b9810a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Hero Meta Row */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 z-10">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
            Global Reforestation Initiative 2026
          </span>
        </div>

        {/* Integrated RunRobRun style Audio Player */}
        <AudioPlayer />
      </div>

      {/* Main Kinetic Typography Hero Title */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 z-10">
        <div className="space-y-2">
          {/* Subheading tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
            <Globe className="w-3.5 h-3.5" />
            <span>Interactive Eco-Canopy Engine</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-9xl tracking-tight text-white leading-[0.95]">
            PLANT A SEED. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">
              GROW A FOREST.
            </span>
          </h1>
        </div>

        {/* Hero Description & Call to Actions */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-7 text-emerald-100/70 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Arboria combines community-driven tree planting with real-time satellite carbon monitoring. 
            Adopting a native tree sapling shields vulnerable biomes, purifies local air basins, and accelerates planetary climate restoration.
          </p>

          <div className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end">
            <button
              onClick={onOpenPlantModal}
              className="flex-1 sm:flex-none flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-display font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>Plant A Tree Today</span>
            </button>

            <a
              href="#canopy"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-forest-900/90 hover:bg-forest-850 text-emerald-300 font-mono text-xs uppercase tracking-wider px-6 py-4 rounded-xl border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
            >
              <span>Explore Species</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Ticker (RunRobRun Style) */}
      <div className="w-full overflow-hidden border-y border-emerald-900/40 py-3 bg-forest-900/40 z-10">
        <div className="marquee-track animate-marquee font-mono text-xs uppercase tracking-widest text-emerald-400/80 flex items-center gap-8 whitespace-nowrap">
          <span>🌱 142,850+ Saplings Planted</span>
          <span>•</span>
          <span>🌍 3,570+ Tons CO₂ Absorbed</span>
          <span>•</span>
          <span>🌳 420+ Hectares Reforested</span>
          <span>•</span>
          <span>🤝 8,940 Active Earth Guardians</span>
          <span>•</span>
          <span>🌱 142,850+ Saplings Planted</span>
          <span>•</span>
          <span>🌍 3,570+ Tons CO₂ Absorbed</span>
          <span>•</span>
          <span>🌳 420+ Hectares Reforested</span>
          <span>•</span>
          <span>🤝 8,940 Active Earth Guardians</span>
        </div>
      </div>
    </section>
  );
};
