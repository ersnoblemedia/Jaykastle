'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Anchor, Award, MapPin } from 'lucide-react';

export const Stats: React.FC = () => {
  const metrics = [
    {
      id: 'rc',
      label: 'RC NUMBER',
      value: 'RC 1197099',
      subtitle: 'Incorporated June 12, 2014',
      description: 'Duly registered under the Corporate Affairs Commission of Nigeria.',
      icon: ShieldCheck,
      color: 'from-emerald-400 to-emerald-600',
    },
    {
      id: 'pillars',
      label: 'CORE CAPABILITIES',
      value: '03 SECTORS',
      subtitle: 'Integrated Operational Execution',
      description: 'Marine Logistics • Engineering Design • Strategic Procurement.',
      icon: Anchor,
      color: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'focus',
      label: 'OPERATIONAL FOCUS',
      value: 'ONSHORE & OFFSHORE',
      subtitle: 'Energy Corridors Across Nigeria',
      description: 'Port Harcourt HQ with capabilities expanding across Niger Delta & coastal waters.',
      icon: MapPin,
      color: 'from-emerald-500 to-emerald-700',
    },
    {
      id: 'safety',
      label: 'SAFETY & COMPLIANCE',
      value: '100% COMPLIANT',
      subtitle: 'Rigid Environmental & HSE Standards',
      description: 'Zero Lost Time Injury (LTI) target with full statutory compliance.',
      icon: Award,
      color: 'from-red-500 to-red-700',
    },
  ];

  return (
    <section className="relative py-12 bg-[#04070f] border-y border-slate-800/80 overflow-hidden">
      {/* Background Subtlety */}
      <div className="absolute inset-0 bg-grid-pattern-dense opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-xl hover:shadow-emerald-500/10 overflow-hidden"
              >
                {/* Top Glowing Shimmer Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/0 group-hover:via-emerald-400/80 to-transparent transition-all duration-500" />
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
                    {item.label}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                    <Icon className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-100 tracking-tight">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-emerald-400 font-mono">
                    {item.subtitle}
                  </div>
                </div>

                <p className="mt-3 text-xs text-slate-400 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Corner accent glow */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/15 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

