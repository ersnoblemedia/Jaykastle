'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Anchor, Cpu, Layers, Settings, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const HomeVisualCapabilities: React.FC = () => {
  const visualCapabilities = [
    {
      id: 'marine',
      title: 'Marine Logistics & Specialized Dredging',
      badge: 'OFFSHORE FLEET',
      shortDesc: 'River channel cutter suction dredging, vessel chartering, and offshore supply support across the Bonny and Escravos waterways.',
      icon: Anchor,
      stat: '800 TPH Capacity',
      image: '/images/marine_dredging_nigerian.jpg',
      equipment: ['Cutter Suction Dredgers (CSD)', 'Anchor Handling Tugs (AHTS)', 'Fast Crew Boats'],
    },
    {
      id: 'engineering',
      title: 'EPC Engineering Design & Construction',
      badge: 'CIVIL & ELECTRICAL',
      shortDesc: 'Substation engineering, structural steel fabrication, high-voltage transformer installations, and flowline trenching.',
      icon: Cpu,
      stat: '220kV Substation EPC',
      image: '/images/engineering_nigerian.jpg',
      equipment: ['Heavy Hydraulic Cranes', 'Automated Orbital Welders', '3D Geospatial Laser Scanners'],
    },
    {
      id: 'procurement',
      title: 'Strategic OEM Procurement & Supply',
      badge: 'GLOBAL SUPPLY CHAIN',
      shortDesc: 'High-precision heavy machinery sourcing, certified technical spare parts acquisition, and custom commissioning.',
      icon: Layers,
      stat: 'Certified OEM Direct',
      image: '/images/procurement_nigerian.jpg',
      equipment: ['Heavy Turbine Components', 'Offshore Valves & Flanges', 'Instrumentation Assemblies'],
    },
    {
      id: 'maintenance',
      title: 'Asset Lifecycle & Facility Maintenance',
      badge: '24/7 SLA SUPPORT',
      shortDesc: 'Preventive lifecycle maintenance, corrosion protection, turbine servicing, and emergency offshore repair dispatch.',
      icon: Settings,
      stat: '99.8% Operational Uptime',
      image: '/images/maintenance_nigerian.jpg',
      equipment: ['Hydro-blasting Rigs', 'Non-Destructive Testing (NDT)', 'Vibration Analyzers'],
    },
  ];

  return (
    <section className="relative py-20 bg-[#040711] overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CORE CAPABILITY SPHERES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Engineering &amp; Offshore <span className="text-emerald-gradient">Capabilities</span>
            </h2>
          </div>
          
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 bg-slate-900 border border-slate-800 hover:border-emerald-500/40 px-5 py-2.5 rounded-xl transition-all self-start md:self-auto shadow-sm"
          >
            <span>View All Detailed Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Visual Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visualCapabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/50 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-2xl"
              >
                {/* Visual Header Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-slate-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] font-bold uppercase px-3 py-1 rounded-full backdrop-blur-md">
                      {item.badge}
                    </span>
                    <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md">
                      {item.stat}
                    </span>
                  </div>

                  {/* Icon floating */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-slate-950/90 border border-emerald-500/40 flex items-center justify-center text-emerald-400 backdrop-blur-md shadow-xl group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light mt-2 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Key Equipment Ticker */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      FEATURED ASSETS &amp; RIGS
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.equipment.map((eq) => (
                        <span
                          key={eq}
                          className="text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-lg"
                        >
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="pt-2">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors"
                    >
                      <span>Explore Capability Specs</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
