import React, { useState } from 'react';
import { REFORESTATION_EVENTS, ReforestationEvent } from '../data/events';
import { Calendar, Clock, MapPin, Users, ArrowUpRight, CheckCircle2, Sparkles, Filter } from 'lucide-react';

interface EventsSectionProps {
  onRegisterEvent: (event: ReforestationEvent) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ onRegisterEvent }) => {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Live Now' | 'Completed'>('All');

  const filteredEvents = REFORESTATION_EVENTS.filter((e) => {
    if (filter === 'All') return true;
    return e.status === filter;
  });

  return (
    <section id="events" className="py-24 px-4 lg:px-8 bg-forest-950 relative border-b border-emerald-900/30">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block mb-2">
              02 // On-The-Ground Plantation Drives
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
              REFORESTATION EVENTS.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {(['All', 'Live Now', 'Upcoming', 'Completed'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  filter === tab
                    ? 'bg-emerald-500 text-forest-950 border-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : 'bg-forest-900 text-emerald-300 border-emerald-900/40 hover:border-emerald-500/40'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event) => {
            const progress = event.targetTrees > 0 ? Math.min(100, (event.plantedTrees / event.targetTrees) * 100) : 100;

            return (
              <div
                key={event.id}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-300"
              >
                {/* Event Image Banner */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-bold border backdrop-blur-md ${
                        event.status === 'Live Now'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 animate-pulse'
                          : event.status === 'Upcoming'
                          ? 'bg-teal-500/20 text-teal-300 border-teal-400'
                          : 'bg-forest-850/80 text-emerald-100/60 border-forest-700'
                      }`}
                    >
                      {event.status === 'Live Now' && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />}
                      {event.status}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-forest-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-900/40 text-emerald-400 font-mono text-xs">
                    {event.category}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-emerald-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-emerald-100/70 text-xs sm:text-sm leading-relaxed">
                      {event.description}
                    </p>

                    {/* Metadata items */}
                    <div className="space-y-2 font-mono text-xs text-emerald-300/80 pt-2 border-t border-forest-850">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{event.date} • {event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Organized by {event.organizer}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1.5 pt-2">
                      <div className="flex justify-between font-mono text-[11px] text-emerald-400">
                        <span>Trees Planted Target</span>
                        <span>{event.plantedTrees.toLocaleString()} / {event.targetTrees.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-forest-850 overflow-hidden border border-emerald-900/30">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-300 rounded-full transition-all duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Register Button */}
                  <div>
                    {event.status === 'Completed' ? (
                      <div className="w-full py-3 rounded-xl bg-forest-900 text-emerald-100/50 font-mono text-xs flex items-center justify-center gap-2 border border-forest-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Drive Concluded Successfully</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => onRegisterEvent(event)}
                        className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-display font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 shadow-md hover:scale-[1.01]"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Register For Event</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
