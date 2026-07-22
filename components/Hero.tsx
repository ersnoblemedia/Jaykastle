'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, Shield, Anchor, Layers, Cpu, CheckCircle2, FileText, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-24 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 overflow-hidden bg-[#060a14]">
      {/* Dark Luxury Ambient Grid & Glow Lights */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-900/15 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Decorative Emerald Line Frame Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Tagline & Operational Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex flex-wrap items-center gap-2 sm:gap-3 bg-slate-900/90 border border-emerald-500/30 rounded-full p-1.5 pr-4 text-xs backdrop-blur-md shadow-xl"
            >
              <span className="bg-crimson-brand-gradient text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider text-[10px] shadow-sm">
                RC 1197099
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300 font-mono text-[11px] font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>EXCELLENCE IN ENGINEERING, MARINE &amp; LOGISTICS</span>
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15]"
            >
              Redefining <br className="hidden sm:inline" />
              <span className="text-emerald-gradient drop-shadow-sm">
                Offshore Infrastructure
              </span>{' '}
              &amp; Marine Engineering
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed"
            >
              Integrated technical expertise, marine operations, and procurement management engineered for Nigeria’s oil, gas, and energy corridors.
            </motion.p>

            {/* Quick Key Pillars Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1"
            >
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-lg p-2.5">
                <Anchor className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">Marine Logistics &amp; Dredging</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-lg p-2.5">
                <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">EPC Engineering Design</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-lg p-2.5">
                <Layers className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-200 font-medium">Strategic Procurement</span>
              </div>
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 px-6 py-3.5 rounded-xl text-sm font-semibold shadow-lg hover:shadow-emerald-500/10 transition-all group"
              >
                <span>Explore Our Capabilities</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-emerald-brand-gradient hover:bg-emerald-brand-hover text-white px-7 py-3.5 rounded-xl text-sm font-bold shadow-xl shadow-emerald-950/50 hover:scale-[1.02] active:scale-[0.98] transition-all border border-emerald-400/20"
              >
                <span>Partner With Us</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <Link
                href="/estimator"
                className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-emerald-300 underline underline-offset-4 pt-2 sm:pt-0 sm:ml-2 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>Build Project Scope Quote</span>
              </Link>
            </motion.div>

            {/* Verification Ticker Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Incorporated June 12, 2014</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-red-500" />
                <span>100% Indigenous Content Integration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Anchor className="w-3.5 h-3.5 text-emerald-400" />
                <span>Port Harcourt HQ Operations</span>
              </div>
            </motion.div>

          </div>

          {/* Right Visual Graphic Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Offshore / Engineering Graphic Card Frame */}
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-emerald-500/30 via-slate-800/50 to-slate-900 border border-emerald-500/30 shadow-2xl overflow-hidden group">
              <div className="relative rounded-xl overflow-hidden bg-[#060a14] aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] flex flex-col justify-between p-6">
                
                {/* Background Offshore Asset Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 mix-blend-luminosity"
                  style={{
                    backgroundImage: `url('/images/hero_offshore_nigerian.jpg')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] via-[#060a14]/60 to-transparent" />

                {/* Card Top Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] uppercase font-bold tracking-widest backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>NIGER DELTA CORRIDOR ACTIVE</span>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-slate-400">RC 1197099</div>
                    <div className="text-xs font-mono font-bold text-emerald-400">PORT HARCOURT</div>
                  </div>
                </div>

                {/* Card Bottom Operational Specs Summary */}
                <div className="relative z-10 space-y-3 pt-12">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 backdrop-blur-md space-y-2">
                    <div className="flex justify-between items-center text-xs border-b border-slate-800/80 pb-2">
                      <span className="text-slate-400 font-mono">PRIMARY SECTOR</span>
                      <span className="font-semibold text-slate-200">Marine &amp; EPC Infrastructure</span>
                    </div>
                    <div className="flex justify-between items-center text-xs border-b border-slate-800/80 pb-2">
                      <span className="text-slate-400 font-mono">DREDGING DEPLOYMENT</span>
                      <span className="font-mono text-emerald-400 font-bold">CSD &amp; OSV FLEET</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-mono">STATUTORY COMPLIANCE</span>
                      <span className="font-mono text-slate-200">NIMASA • DPR • NOGICD</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-bold">
                      100% Indigenous
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
                      Zero LTI Safety SLA
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
