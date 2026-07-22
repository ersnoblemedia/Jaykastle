'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MapPin, Anchor, Navigation, ShieldCheck, ChevronRight, Compass } from 'lucide-react';

export const HomeOperationalMap: React.FC = () => {
  const [activeZone, setActiveZone] = useState('phc');

  const zones = [
    {
      id: 'phc',
      name: 'Port Harcourt Executive HQ',
      type: 'Headquarters & Engineering Base',
      coordinates: 'NTA Ozuoba Corridor',
      desc: 'Central corporate engineering office, technical dispatch team, procurement logistics warehouse, and executive tender management.',
      status: 'OPERATIONAL 24/7',
      image: '/images/engineering_nigerian.jpg',
    },
    {
      id: 'bonny',
      name: 'Bonny River & Onne Marine Hub',
      type: 'Dredging & Vessel Berth Zone',
      coordinates: 'Rivers State Waterways',
      desc: 'Channel maintenance, Cutter Suction Dredging (CSD), supply vessel berthing, offshore platform supply runs, and mooring support.',
      status: 'ACTIVE DREDGING',
      image: '/images/marine_dredging_nigerian.jpg',
    },
    {
      id: 'escravos',
      name: 'Escravos & Forcados Corridors',
      type: 'Shallow Water & Pipeline Zone',
      coordinates: 'Western Niger Delta',
      desc: 'Pipeline trenching, flowline civil construction, swamp barge chartering, and structural maintenance for oil majors.',
      status: 'ACTIVE FIELD OPERATIONS',
      image: '/images/hero_offshore_nigerian.jpg',
    },
  ];

  const currentZone = zones.find((z) => z.id === activeZone) || zones[0];

  return (
    <section className="relative py-20 bg-[#060a14] overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>NIGERIA OPERATIONAL FOOTPRINT</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Strategic Offshore &amp; Onshore <span className="text-emerald-gradient">Deployment Corridors</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-light max-w-2xl mx-auto">
            Positioned strategically in Port Harcourt with active operational presence across key energy waterways and industrial corridors in Nigeria.
          </p>
        </div>

        {/* Interactive Zone Selector Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Zone Controls */}
          <div className="lg:col-span-5 space-y-3">
            {zones.map((zone) => {
              const isSelected = zone.id === activeZone;
              return (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone.id)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500 shadow-xl shadow-emerald-950/40 text-slate-100'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">{zone.coordinates}</span>
                      <span className="text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full">{zone.status}</span>
                    </div>
                    <h3 className="font-serif text-base font-bold leading-tight">{zone.name}</h3>
                    <p className="text-xs text-slate-400 font-light line-clamp-2">{zone.type}</p>
                  </div>
                </button>
              );
            })}

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between font-mono">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>COREN &amp; NIMASA CERTIFIED</span>
              </span>
              <span className="text-emerald-400 font-bold">RC 1197099</span>
            </div>
          </div>

          {/* Right Visual Spotlight Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={currentZone.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6"
            >
              {/* Image Preview Overlay */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105 opacity-60 mix-blend-luminosity"
                  style={{ backgroundImage: `url('${currentZone.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="bg-slate-950/90 border border-slate-800 text-slate-200 text-xs font-mono font-bold px-3 py-1.5 rounded-lg backdrop-blur-md">
                    {currentZone.coordinates}
                  </div>
                  <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold px-3 py-1.5 rounded-lg backdrop-blur-md">
                    {currentZone.status}
                  </div>
                </div>
              </div>

              {/* Detailed Zone Description */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">{currentZone.type}</div>
                <h3 className="font-serif text-2xl font-bold text-slate-100">{currentZone.name}</h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {currentZone.desc}
                </p>
              </div>

              {/* CTA Link */}
              <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                <span className="text-xs text-slate-400 font-mono">Port Harcourt Operational Hub</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <span>Connect With Hub Director</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
