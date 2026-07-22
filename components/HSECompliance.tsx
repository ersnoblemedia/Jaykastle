'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Lock, FileCheck2, HeartHandshake, Sparkles } from 'lucide-react';

export const HSECompliance: React.FC = () => {
  const standards = [
    { title: 'NUPRC / DPR Registered', desc: 'Permit for Oil & Gas Industry Services in Nigeria', icon: ShieldCheck },
    { title: 'NCMDB Local Content', desc: 'Full compliance with Nigerian Oil & Gas Industry Content Act', icon: FileCheck2 },
    { title: 'ISO 9001 / 14001 / 45001', desc: 'Quality, Environmental & Occupational Safety Framework', icon: Award },
    { title: 'NIMASA Maritime Rules', desc: 'Regulated Vessel Registration & Seafarer Safety Standards', icon: Lock },
  ];

  return (
    <section className="relative py-16 bg-[#040711] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-emerald-500/20 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                <span>RIGID HSE &amp; STATUTORY COMPLIANCE</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-100">
                Zero Harm, Uncompromised Safety Standards
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                Jaykastle Nigeria Limited maintains statutory permits, safety certifications, and environmental audits to guarantee seamless compliance across onshore and offshore deployments.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {standards.map((st) => {
                const Icon = st.icon;
                return (
                  <div
                    key={st.title}
                    className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-200 font-serif">{st.title}</h4>
                      <p className="text-[11px] text-slate-400 font-light mt-0.5">{st.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
