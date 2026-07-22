'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Compass, Target, Shield, Award, CheckCircle, HeartHandshake, Eye, Sparkles } from 'lucide-react';

export const Strategy: React.FC = () => {
  const coreValues = [
    {
      title: 'Integrity',
      desc: 'Sustaining unyielding ethical standards, transparent contractual governance, and uncompromising honesty across all marine and engineering deployments.',
      icon: Shield,
    },
    {
      title: 'Credibility',
      desc: 'Building enduring trust with national oil companies, international operators, and regulatory agencies through consistent project delivery.',
      icon: Award,
    },
    {
      title: 'Discipline',
      desc: 'Rigorous adherence to engineering codes, schedule milestones, risk mitigation matrices, and precise budget execution.',
      icon: Target,
    },
    {
      title: 'Uncompromised Quality',
      desc: 'Deploying international-standard equipment, certified personnel, and ISO-aligned processes across every operational workflow.',
      icon: Sparkles,
    },
    {
      title: 'Esteem',
      desc: 'Valuing our workforce, respecting community stakeholders in the Niger Delta, and preserving marine ecosystems.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="strategy" className="relative py-20 lg:py-28 bg-[#060a14] overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-widest"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>STRATEGY &amp; CORPORATE POLICY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight"
          >
            Guided By Vision, Driven By <br className="hidden sm:inline" />
            <span className="text-emerald-gradient">Unwavering Core Values</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-300 font-light leading-relaxed"
          >
            Our strategic policy framework anchors every vessel charter, engineering design, and procurement deployment to ensure long-term value for Nigeria’s energy sector.
          </motion.p>
        </div>

        {/* Vision & Mission Split Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 shadow-2xl space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Eye className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                CORPORATE VISION
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-100">
              The Premier Project Partner
            </h3>

            <p className="text-sm text-slate-300 font-light leading-relaxed">
              To be the premier and most sought-after project execution partner in our sector through relentless commitment to quality and client satisfaction.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Benchmark for Offshore Engineering Excellence</span>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 shadow-2xl space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Target className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                CORPORATE MISSION
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-slate-100">
              Superior Engineering Value
            </h3>

            <p className="text-sm text-slate-300 font-light leading-relaxed">
              To deliver superior engineering value through safety, leadership, innovation, and adaptive project execution frameworks.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Safety • Leadership • Innovation • Execution</span>
            </div>
          </motion.div>

        </div>

        {/* Core Values Grid */}
        <div className="space-y-6">
          <div className="text-center font-mono text-xs text-emerald-400 font-bold tracking-widest uppercase">
            THE 5 PILLARS OF OUR CORPORATE ETHOS
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700/80 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-slate-100 mb-2 group-hover:text-emerald-300 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
