'use client';

import React from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { JaykastleLogo } from './JaykastleLogo';

export const HomeEstimatorTeaser: React.FC = () => {
  return (
    <section className="relative py-16 bg-[#04070f] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-slate-900 via-[#060a14] to-slate-900 border border-emerald-500/30 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <JaykastleLogo size="sm" theme="dark" />
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>INTERACTIVE TENDER ESTIMATOR</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
                Configure Project Parameters &amp; <span className="text-emerald-gradient">Receive Ref Code</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-2xl leading-relaxed">
                Need an immediate tender estimation code for marine dredging, substation civil engineering, or heavy OEM procurement? Use our interactive scope calculator to build your reference dossier in seconds.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Instant Specification Generation</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Port Harcourt Engineering Desk Route</span>
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <Link
                href="/estimator"
                className="w-full sm:w-auto py-4 px-8 rounded-xl bg-emerald-brand-gradient hover:bg-emerald-brand-hover text-white text-xs font-bold transition-all shadow-xl shadow-emerald-950/50 flex items-center justify-center gap-2 border border-emerald-400/20 hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4" />
                <span>Launch Interactive Estimator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
