'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Award, CheckCircle2, History } from 'lucide-react';
import { JaykastleLogo } from './JaykastleLogo';

export const HomeAboutHighlight: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#060a14] overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 p-1 bg-gradient-to-b from-emerald-500/20 via-slate-800 to-slate-900 shadow-2xl">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105 opacity-60 mix-blend-luminosity"
                  style={{
                    backgroundImage: `url('/images/engineering_nigerian.jpg')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-2 p-2 px-3 rounded-full bg-slate-950/90 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold backdrop-blur-md">
                    <History className="w-3.5 h-3.5 text-emerald-400" />
                    <span>INCORPORATED JUNE 12, 2014</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-10 space-y-2">
                  <JaykastleLogo size="sm" theme="dark" />
                  <div className="text-xs text-slate-300 font-mono">
                    REGISTRATION NO: <span className="text-emerald-400 font-bold">RC 1197099</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>CORPORATE PROFILE &amp; IDENTITY</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Powering Industrial Growth Through <span className="text-emerald-gradient">Engineering Precision</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Founded with the strategic mission to redefine energy infrastructure across Nigeria, JAYKASTLE NIGERIA LIMITED combines technical rigor, continuous human capital investment, and robust operational execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Integrity &amp; Governance</span>
                </div>
                <p className="text-[11px] text-slate-400 font-light leading-snug">
                  Uncompromising safety, environmental compliance, and ethical contracting.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Local Content First</span>
                </div>
                <p className="text-[11px] text-slate-400 font-light leading-snug">
                  100% indigenous technical capacity aligned with international standards.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-emerald-200 bg-slate-900 border border-emerald-500/40 hover:border-emerald-400 px-6 py-3 rounded-xl transition-all shadow-lg"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
