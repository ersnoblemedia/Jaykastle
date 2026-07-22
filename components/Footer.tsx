'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, ShieldCheck, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';
import { JaykastleLogo } from './JaykastleLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040711] text-slate-400 text-xs border-t border-slate-800 relative z-20 overflow-hidden">
      
      {/* Top Emerald Green Gradient Highlight */}
      <div className="h-0.5 bg-gradient-to-r from-emerald-500/10 via-emerald-500/60 to-emerald-500/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Corporate ID */}
          <div className="space-y-4">
            <JaykastleLogo size="md" theme="dark" />
            
            <p className="text-slate-400 leading-relaxed text-xs">
              Incorporated on June 12, 2014, Jaykastle Nigeria Limited powers industrialization through world-class engineering, marine logistics, specialized dredging, and strategic procurement.
            </p>

            <div className="inline-flex items-center gap-2 p-2 px-3 rounded-lg bg-slate-900 border border-slate-800 font-mono text-[11px] text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>REGISTRATION NO: RC 1197099</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-slate-200 uppercase tracking-wider border-b border-slate-800 pb-2">
              Corporate Map
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Corporate Overview', href: '/' },
                { name: 'About Us & Profile', href: '/about' },
                { name: 'Core Capabilities', href: '/services' },
                { name: 'Policy & Strategy', href: '/strategy' },
                { name: 'Human Capital', href: '/careers' },
                { name: 'Tender Estimator', href: '/estimator' },
                { name: 'Direct Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capability Spheres */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-slate-200 uppercase tracking-wider border-b border-slate-800 pb-2">
              Capabilities
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Electrical &amp; Civil EPC</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Dredging &amp; Marine Vessels</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Strategic OEM Procurement</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Asset Lifecycle Maintenance</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Offshore Support Logistics</span>
              </li>
            </ul>
          </div>

          {/* Direct Address & Contacts */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-slate-200 uppercase tracking-wider border-b border-slate-800 pb-2">
              Headquarters
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-tight">NTA Ozuoba Road, Port Harcourt, Rivers State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-emerald-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+234 803 885 2720</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-emerald-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+234 708 683 8158</span>
              </div>
              <div className="flex items-center gap-2 font-mono break-all text-emerald-300">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>jaykastlejaykastle@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} JAYKASTLE NIGERIA LIMITED. All Rights Reserved. RC 1197099.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">Offshore Infrastructure • Marine • Procurement</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 transition-colors flex items-center gap-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
