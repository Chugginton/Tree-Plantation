import React, { useState } from 'react';
import { Trees, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  treesCount: number;
  onOpenPlantModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ treesCount, onOpenPlantModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 lg:px-8 py-4 bg-forest-950/80 backdrop-blur-xl border-b border-emerald-900/30">
      {/* Corner pixel crosses */}
      <div className="pixel-cross top-2 left-4" />
      <div className="pixel-cross top-2 right-4" />

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-forest-950 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Trees className="w-5 h-5" />
          </div>
          <div>
            <span className="font-display font-extrabold text-xl tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              ARBORIA
            </span>
            <span className="block text-[9px] font-mono uppercase tracking-widest text-emerald-500 -mt-1">
              Tree Canopy Network
            </span>
          </div>
        </a>

        {/* Live Tree Counter Badge */}
        <div className="hidden md:flex items-center gap-2 bg-forest-900 border border-emerald-500/25 rounded-full px-4 py-1.5 text-xs font-mono text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 font-bold">{treesCount.toLocaleString()}</span>
          <span className="text-emerald-100/60">Trees Planted</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-emerald-100/80">
          <a href="#about" className="hover:text-emerald-300 transition-colors relative py-1 group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#canopy" className="hover:text-emerald-300 transition-colors relative py-1 group">
            Canopy Carousel
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#events" className="hover:text-emerald-300 transition-colors relative py-1 group">
            Events
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#contact" className="hover:text-emerald-300 transition-colors relative py-1 group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenPlantModal}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-display font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Plant A Tree</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-emerald-400 hover:text-white transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-emerald-900/40 space-y-3 pb-4 animate-in slide-in-from-top duration-300">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-mono uppercase tracking-wider text-emerald-100 hover:text-emerald-300 py-1"
          >
            01. About
          </a>
          <a
            href="#canopy"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-mono uppercase tracking-wider text-emerald-100 hover:text-emerald-300 py-1"
          >
            02. Canopy Carousel
          </a>
          <a
            href="#events"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-mono uppercase tracking-wider text-emerald-100 hover:text-emerald-300 py-1"
          >
            03. Reforestation Events
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-mono uppercase tracking-wider text-emerald-100 hover:text-emerald-300 py-1"
          >
            04. Contact Us
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPlantModal();
            }}
            className="w-full mt-2 flex items-center justify-center gap-2 bg-emerald-500 text-forest-950 font-bold py-2.5 rounded-lg text-xs uppercase"
          >
            <Sparkles className="w-4 h-4" />
            <span>Plant A Tree Now</span>
          </button>
        </div>
      )}
    </header>
  );
};
