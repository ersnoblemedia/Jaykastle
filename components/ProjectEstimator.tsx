'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, FileText, CheckCircle2, ChevronRight, Anchor, Cpu, Layers, RefreshCw, Send, ShieldCheck } from 'lucide-react';
import { JaykastleLogo } from './JaykastleLogo';

interface ProjectEstimatorProps {
  preselectedServiceId?: string;
  onSendEstimateToContact: (estimateData: {
    sector: string;
    timeline: string;
    scale: string;
    refCode: string;
    notes: string;
  }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  preselectedServiceId,
  onSendEstimateToContact,
}) => {
  const [sector, setSector] = useState(preselectedServiceId || 'marine');
  const [timeline, setTimeline] = useState('q1q2');
  const [scale, setScale] = useState('medium');
  const [includeSurvey, setIncludeSurvey] = useState(true);
  const [includeMaintenance, setIncludeMaintenance] = useState(false);
  const [notes, setNotes] = useState('');

  const [lastPreselectedServiceId, setLastPreselectedServiceId] = useState(preselectedServiceId);

  if (preselectedServiceId !== lastPreselectedServiceId) {
    setLastPreselectedServiceId(preselectedServiceId);
    if (preselectedServiceId) {
      setSector(preselectedServiceId);
    }
  }

  const sectorOptions = [
    { id: 'marine', label: 'Marine & Dredging Logistics', icon: Anchor, code: 'MAR' },
    { id: 'engineering', label: 'Electrical, Mechanical & Civil EPC', icon: Cpu, code: 'EPC' },
    { id: 'procurement', label: 'Strategic Heavy Machinery Procurement', icon: Layers, code: 'PROC' },
    { id: 'maintenance', label: 'Plant & Asset Maintenance Management', icon: RefreshCw, code: 'MNT' },
  ];

  const timelineOptions = [
    { id: 'immediate', label: 'Immediate / Emergency (1 - 14 Days)' },
    { id: 'q1q2', label: 'Standard Campaign (1 - 3 Months)' },
    { id: 'longterm', label: 'Multi-Year Framework Contract' },
  ];

  const scaleOptions = [
    { id: 'small', label: 'Targeted Field Task / Sourcing' },
    { id: 'medium', label: 'Regional Offshore / EPC Deployment' },
    { id: 'large', label: 'Turnkey High-Capacity Infrastructure' },
  ];

  const currentSectorObj = sectorOptions.find((s) => s.id === sector) || sectorOptions[0];
  
  // Deterministic Reference Code
  const refCode = `JAY-2026-${currentSectorObj.code}-${sector === 'marine' ? '9182' : sector === 'engineering' ? '4820' : sector === 'procurement' ? '7310' : '2209'}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendEstimateToContact({
      sector: currentSectorObj.label,
      timeline: timelineOptions.find((t) => t.id === timeline)?.label || timeline,
      scale: scaleOptions.find((s) => s.id === scale)?.label || scale,
      refCode,
      notes,
    });
  };

  return (
    <section id="estimator" className="relative py-20 bg-[#04070f] border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="flex justify-center mb-2">
            <JaykastleLogo size="lg" theme="dark" />
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE TENDER ESTIMATOR</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Configure Your Project Scope &amp; <br />
            <span className="text-emerald-gradient">Receive Tender Estimation</span>
          </h2>
          <p className="text-sm text-slate-300 font-light">
            Select your operational parameters below to generate an instant scope specification code and submit directly to our Port Harcourt engineering team.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Configuration Column */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            
            {/* Step 1: Select Operational Sector */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                01. Primary Operational Sector
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sectorOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = sector === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSector(opt.id)}
                      className={`p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                        isSelected
                          ? 'bg-emerald-500/10 border-emerald-500 text-emerald-300 shadow-md'
                          : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold leading-tight">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Deployment Horizon */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                02. Operational Horizon / Schedule
              </label>
              <div className="space-y-2">
                {timelineOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer text-xs transition-all ${
                      timeline === opt.id
                        ? 'bg-emerald-500/10 border-emerald-500 text-emerald-200 font-semibold'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="timeline"
                        value={opt.id}
                        checked={timeline === opt.id}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="accent-emerald-500"
                      />
                      <span>{opt.label}</span>
                    </div>
                    {timeline === opt.id && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  </label>
                ))}
              </div>
            </div>

            {/* Step 3: Project Scale */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                03. Expected Project Scale &amp; Capacity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {scaleOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setScale(opt.id)}
                    className={`p-3 rounded-xl border text-center text-xs font-medium transition-all ${
                      scale === opt.id
                        ? 'bg-emerald-600 text-white font-bold border-emerald-400 shadow-md'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Additional Options */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                04. Technical Provisions
              </label>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <label className="flex items-center gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeSurvey}
                    onChange={(e) => setIncludeSurvey(e.target.checked)}
                    className="rounded accent-emerald-500"
                  />
                  <span className="text-slate-300">Hydrographic &amp; Bathymetric Survey</span>
                </label>
                <label className="flex items-center gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeMaintenance}
                    onChange={(e) => setIncludeMaintenance(e.target.checked)}
                    className="rounded accent-emerald-500"
                  />
                  <span className="text-slate-300">Post-Commissioning Maintenance SLA</span>
                </label>
              </div>
            </div>

            {/* Optional Notes */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 block">
                Additional Technical Requirements / Location Details (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Channel dredging depth 8 meters in Bonny River corridor, 500m flowline fabrication..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
              />
            </div>

          </div>

          {/* Generated Specification Preview & Submit Column */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 bg-gradient-to-b from-slate-900 to-[#060a14] border border-emerald-500/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                    SPECIFICATION REFERENCE
                  </div>
                  <div className="text-xl font-mono font-bold text-slate-100 mt-0.5">
                    {refCode}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              {/* Summary Items */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Target Sector:</span>
                  <span className="text-emerald-300 font-bold">{currentSectorObj.label}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Schedule Horizon:</span>
                  <span className="text-slate-200">{timelineOptions.find(t => t.id === timeline)?.label}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Operational Scale:</span>
                  <span className="text-slate-200">{scaleOptions.find(s => s.id === scale)?.label}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Survey Included:</span>
                  <span className="text-slate-200">{includeSurvey ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Maintenance SLA:</span>
                  <span className="text-slate-200">{includeMaintenance ? 'Yes' : 'No'}</span>
                </div>
              </div>

              {/* Dispatch Action */}
              <button
                onClick={handleSubmit}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-brand-gradient hover:bg-emerald-brand-hover text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/50 hover:scale-[1.02] active:scale-[0.98] transition-all border border-emerald-400/20"
              >
                <Send className="w-4 h-4" />
                <span>Submit Tender Inquiry With Ref Code</span>
              </button>

              <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                Submitting will populate your quote details into our direct inquiry dispatch modal for Jaykastle Nigeria Limited (RC 1197099).
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
