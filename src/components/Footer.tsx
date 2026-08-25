import React from 'react';
import { Trees, Heart, Github, Twitter, Instagram, Globe, Activity } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 py-16 px-4 lg:px-8 border-t border-emerald-900/30 text-emerald-100/70 font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-forest-950 flex items-center justify-center font-bold">
                <Trees className="w-5 h-5" />
              </div>
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">ARBORIA</span>
            </div>
            <p className="text-emerald-100/60 max-w-sm leading-relaxed">
              Accelerating global ecosystem recovery through community tree planting, native seed preservation, and satellite canopy monitoring.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-emerald-500/20 text-[11px] text-emerald-400">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Express API Server: Online</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-white font-bold uppercase tracking-wider block">Navigation</span>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-emerald-300 transition-colors">01. About Mission</a></li>
              <li><a href="#canopy" className="hover:text-emerald-300 transition-colors">02. Species Carousel</a></li>
              <li><a href="#events" className="hover:text-emerald-300 transition-colors">03. Plantation Drives</a></li>
              <li><a href="#contact" className="hover:text-emerald-300 transition-colors">04. Contact & Formspree</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-white font-bold uppercase tracking-wider block">Social Network</span>
            <p className="text-emerald-100/60 text-[11px]">Follow our live planting drives and drone imagery across social channels:</p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-xl bg-forest-900 border border-emerald-900/40 flex items-center justify-center hover:bg-emerald-500 hover:text-forest-950 text-emerald-400 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-forest-900 border border-emerald-900/40 flex items-center justify-center hover:bg-emerald-500 hover:text-forest-950 text-emerald-400 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-forest-900 border border-emerald-900/40 flex items-center justify-center hover:bg-emerald-500 hover:text-forest-950 text-emerald-400 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-forest-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-emerald-100/40">
          <p>© 2026 ARBORIA TREE PLANTATION INITIATIVE. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
            <span>for Earth Ecosystems</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
