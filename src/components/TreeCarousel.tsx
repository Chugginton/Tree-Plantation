import React, { useState } from 'react';
import { TREE_SPECIES, TreeSpecies } from '../data/treeSpecies';
import { ChevronLeft, ChevronRight, Trees, Leaf, Shield, Sparkles, Wind, Clock, Award } from 'lucide-react';

interface TreeCarouselProps {
  onSelectTree: (tree: TreeSpecies) => void;
}

export const TreeCarousel: React.FC<TreeCarouselProps> = ({ onSelectTree }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TREE_SPECIES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TREE_SPECIES.length - 1 ? 0 : prev + 1));
  };

  const currentTree = TREE_SPECIES[currentIndex];

  return (
    <section id="canopy" className="py-24 px-4 lg:px-8 bg-forest-900/40 relative overflow-hidden border-b border-emerald-900/30">
      {/* Corner Crosses */}
      <div className="pixel-cross top-4 left-4" />
      <div className="pixel-cross top-4 right-4" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest mb-3">
              <Leaf className="w-3.5 h-3.5" />
              <span>Interactive Canopy Species Explorer</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
              CANOPY CAROUSEL.
            </h2>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-forest-850 border border-emerald-500/30 flex items-center justify-center text-emerald-300 hover:bg-emerald-500 hover:text-forest-950 transition-all duration-300 shadow-lg hover:scale-105"
              aria-label="Previous Tree Species"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="font-mono text-xs text-emerald-400 px-2">
              0{currentIndex + 1} / 0{TREE_SPECIES.length}
            </span>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-forest-850 border border-emerald-500/30 flex items-center justify-center text-emerald-300 hover:bg-emerald-500 hover:text-forest-950 transition-all duration-300 shadow-lg hover:scale-105"
              aria-label="Next Tree Species"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 3D Main Spotlight Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card p-6 sm:p-10 rounded-3xl relative overflow-hidden">
          {/* Tree Image Container */}
          <div className="lg:col-span-6 relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden group">
            <img
              src={currentTree.image}
              alt={currentTree.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 font-mono text-xs">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>{currentTree.badge}</span>
            </div>

            {/* Scientific Name Tag */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-forest-950/80 backdrop-blur-md border border-emerald-900/40">
              <p className="font-mono text-xs text-emerald-400 italic">
                {currentTree.scientificName}
              </p>
              <p className="text-white font-bold text-lg">{currentTree.category}</p>
            </div>
          </div>

          {/* Tree Details & Statistics */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                {currentTree.name}
              </h3>
              <p className="mt-3 text-emerald-100/70 text-sm leading-relaxed">
                {currentTree.description}
              </p>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-forest-850/60 border border-emerald-900/40">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs mb-1">
                  <Wind className="w-4 h-4" />
                  <span>CO₂ Offset</span>
                </div>
                <span className="font-bold text-lg text-white">{currentTree.co2Absorption}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-forest-850/60 border border-emerald-900/40">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Lifespan</span>
                </div>
                <span className="font-bold text-lg text-white">{currentTree.lifespan}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-forest-850/60 border border-emerald-900/40">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs mb-1">
                  <Shield className="w-4 h-4" />
                  <span>Survival Rate</span>
                </div>
                <span className="font-bold text-lg text-emerald-300">{currentTree.survivalRate}%</span>
              </div>

              <div className="p-3.5 rounded-xl bg-forest-850/60 border border-emerald-900/40">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs mb-1">
                  <Trees className="w-4 h-4" />
                  <span>Max Height</span>
                </div>
                <span className="font-bold text-lg text-white">{currentTree.height}</span>
              </div>
            </div>

            {/* Ecological Benefit Box */}
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs font-mono text-emerald-300">
              <span className="font-bold text-emerald-400 uppercase tracking-wider block mb-1">Ecological Impact:</span>
              {currentTree.ecologicalBenefit}
            </div>

            {/* Plant Action */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onSelectTree(currentTree)}
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-display font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl transition-all duration-300 shadow-lg hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Plant {currentTree.name} Sapling</span>
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Ribbon */}
        <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-3">
          {TREE_SPECIES.map((tree, idx) => (
            <button
              key={tree.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-2 rounded-xl text-left transition-all duration-300 border ${
                currentIndex === idx
                  ? 'bg-forest-850 border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                  : 'bg-forest-950/60 border-emerald-900/30 hover:border-emerald-500/40 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="h-16 rounded-lg overflow-hidden mb-2">
                <img src={tree.image} alt={tree.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-bold text-xs text-white truncate">{tree.name}</p>
              <p className="font-mono text-[10px] text-emerald-400 truncate">{tree.co2Absorption}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
