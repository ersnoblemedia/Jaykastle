'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, CheckCircle2, Building2, Anchor, ArrowRight, Sparkles } from 'lucide-react';

interface AboutProps {
  onOpenContact: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'integrity' | 'localContent'>('profile');

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-[#060a14] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-widest"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>CORPORATE PROFILE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight"
          >
            Engineering the Future of <br className="hidden sm:inline" />
            <span className="text-emerald-gradient">Industrial Growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-300 font-light leading-relaxed"
          >
            Incorporated on June 12, 2014, JAYKASTLE NIGERIA LIMITED was founded with the strategic mission to power industrialization through world-class engineering, marine logistics, and procurement solutions.
          </motion.p>
        </div>

        {/* Content Split: Left Interactive Card & Right Detailed Narrative */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Visual Banner & Key Registration Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 p-8 shadow-2xl space-y-6">
              
              {/* Badge & Official Stamp */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                <div>
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">
                    REGISTRATION DETAILS
                  </div>
                  <div className="text-2xl font-serif font-bold text-slate-100 mt-1">
                    RC 1197099
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              {/* Quick Profile Points */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-200 font-semibold block">Incorporation Date</span>
                    <span className="text-slate-400 font-mono">June 12, 2014 • Federal Republic of Nigeria</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <Anchor className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-200 font-semibold block">Primary Operational Base</span>
                    <span className="text-slate-400">NTA Ozuoba Road, Port Harcourt, Rivers State, Nigeria</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <Award className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-200 font-semibold block">Core Sector Specialization</span>
                    <span className="text-slate-400">Oil &amp; Gas EPC, Offshore Support, Specialized Marine Dredging</span>
                  </div>
                </div>
              </div>

              {/* CTA Overlay */}
              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-brand-gradient hover:bg-emerald-brand-hover text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all border border-emerald-400/20"
                >
                  <span>Request Corporate Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </motion.div>

          {/* Right Detailed Narrative & Interactive Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Interactive Tab Controls */}
            <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'profile'
                    ? 'bg-emerald-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Overview</span>
              </button>

              <button
                onClick={() => setActiveTab('integrity')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'integrity'
                    ? 'bg-emerald-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Integrity &amp; Quality</span>
              </button>

              <button
                onClick={() => setActiveTab('localContent')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 ${
                  activeTab === 'localContent'
                    ? 'bg-emerald-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Local Content Integration</span>
              </button>
            </div>

            {/* Tab Panel Content */}
            <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-4 backdrop-blur-md min-h-[260px] flex flex-col justify-between">
              
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-emerald-300">
                    A Decade of Operational Precision
                  </h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    We combine technical precision, continuous investment in specialized human capital, and robust operational execution to deliver high-capacity infrastructure projects across Nigeria’s energy corridors.
                  </p>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    From deepwater logistics and specialized dredging to complex mechanical, electrical, and civil construction, JAYKASTLE NIGERIA LIMITED serves as a dependable partner to major oil &amp; gas operators and industrial developers.
                  </p>
                </div>
              )}

              {activeTab === 'integrity' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-emerald-300">
                    Sustaining Industry-Grade Excellence
                  </h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    Integrity and Quality form the cornerstone of every project we undertake. We enforce rigid safety protocols, zero-tolerance for environmental hazards, and strict adherence to international maritime and engineering codes.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300 font-mono">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Strict HSE &amp; Zero LTI Protocols</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Continuous Asset Integrity Audits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>ISO Quality System Standards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span>Rigorous Procurement Vetting</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'localContent' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-emerald-300">
                    Indigenous Capacity • Global Best Practices
                  </h3>
                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    Maximizing indigenous technical capacity alongside international best practices. We are proud to foster local engineering talent, train young Nigerian mariners, and create sustainable socio-economic impact across host communities in the Niger Delta region.
                  </p>
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 leading-relaxed font-mono">
                    &ldquo;Empowering local expertise while operating at international maritime and technical standards.&rdquo;
                  </div>
                </div>
              )}

              {/* Bottom Info Bar */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>RC 1197099 • Jaykastle Nigeria Limited</span>
                <span className="text-emerald-400 font-mono font-semibold">ISO &amp; NOGICD Aligned</span>
              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

