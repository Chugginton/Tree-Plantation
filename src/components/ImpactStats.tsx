import React from 'react';
import { Trees, Globe, Shield, Users, Activity } from 'lucide-react';

interface ImpactStatsProps {
  stats: {
    treesPlanted: number;
    co2OffsetKg: number;
    hectaresRestored: number;
    volunteers: number;
    recentPlantings?: Array<{ id: number; name: string; tree: string; location: string; timestamp: string }>;
  };
}

export const ImpactStats: React.FC<ImpactStatsProps> = ({ stats }) => {
  return (
    <section id="about" className="py-24 px-4 lg:px-8 relative border-b border-emerald-900/30 noise-bg">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* About Mission Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block">
              01 // Architectural Mission & Science
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              MEASURABLE CLIMATE ACTION THROUGH DECENTRALIZED REFORESTATION.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-emerald-100/70 text-sm sm:text-base font-light leading-relaxed">
              We leverage satellite remote sensing, geo-tagged sapling tracking, and indigenous seed bank preservation to ensure 
              a 90%+ sapling survival rate across deforested river basins, degraded farmlands, and urban heat islands.
            </p>
          </div>
        </div>

        {/* Counter Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-forest-950 transition-colors">
              <Trees className="w-5 h-5" />
            </div>
            <p className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              {stats.treesPlanted.toLocaleString()}
            </p>
            <p className="font-mono text-xs text-emerald-400 uppercase tracking-wider mt-1">Total Saplings Planted</p>
            <p className="text-emerald-100/50 text-xs mt-2">Verified via satellite GPS tags</p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-forest-950 transition-colors">
              <Globe className="w-5 h-5" />
            </div>
            <p className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              {(stats.co2OffsetKg / 1000).toLocaleString(undefined, { maximumFractionDigits: 1 })} Tons
            </p>
            <p className="font-mono text-xs text-emerald-400 uppercase tracking-wider mt-1">Est. CO₂ Sequestration</p>
            <p className="text-emerald-100/50 text-xs mt-2">Calculated over 25-year lifecycle</p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-forest-950 transition-colors">
              <Shield className="w-5 h-5" />
            </div>
            <p className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              {stats.hectaresRestored} Hectares
            </p>
            <p className="font-mono text-xs text-emerald-400 uppercase tracking-wider mt-1">Land Area Canopy</p>
            <p className="text-emerald-100/50 text-xs mt-2">Restored degraded ecosystems</p>
          </div>

          {/* Card 4 */}
          <div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500 group-hover:text-forest-950 transition-colors">
              <Users className="w-5 h-5" />
            </div>
            <p className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              {stats.volunteers.toLocaleString()}
            </p>
            <p className="font-mono text-xs text-emerald-400 uppercase tracking-wider mt-1">Earth Guardians</p>
            <p className="text-emerald-100/50 text-xs mt-2">Volunteers & active partners</p>
          </div>
        </div>

        {/* Live Planting Activity Stream */}
        {stats.recentPlantings && stats.recentPlantings.length > 0 && (
          <div className="p-6 rounded-2xl bg-forest-900/60 border border-emerald-500/20">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-300 font-bold">
                Live Community Planting Stream
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.recentPlantings.slice(0, 3).map((item) => (
                <div key={item.id} className="p-3 rounded-xl bg-forest-850/80 border border-emerald-900/40 text-xs">
                  <div className="flex items-center justify-between text-emerald-400 font-mono mb-1">
                    <span className="font-bold">{item.name}</span>
                    <span className="text-[10px] opacity-70">{item.timestamp}</span>
                  </div>
                  <p className="text-white font-medium">Planted {item.tree}</p>
                  <p className="text-emerald-100/50 text-[11px]">Location: {item.location}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
