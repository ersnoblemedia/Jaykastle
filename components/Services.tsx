'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Anchor, Layers, Settings, ArrowRight, Shield, CheckCircle2, ChevronRight, FileText, X, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForEstimate: (serviceId: string) => void;
  onOpenContact: (defaultService?: string) => void;
}

export interface CapabilityDetail {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ElementType;
  keyOfferings: string[];
  equipmentList: string[];
  compliance: string;
  image: string;
}

export const capabilityData: CapabilityDetail[] = [
  {
    id: 'engineering',
    number: '01',
    title: 'Engineering Services',
    shortDesc: 'Comprehensive Electrical, Mechanical, and Civil Engineering design, construction, and execution.',
    fullDesc: 'Jaykastle delivers end-to-end engineering design, structural fabrication, pipeline civil engineering, and high-voltage power integration. Our engineering team combines CAD modeling, finite element analysis, and field execution to build resilient industrial assets across energy corridors.',
    icon: Cpu,
    keyOfferings: [
      'High-voltage Electrical Substation & Transformer Installation',
      'Offshore & Onshore Structural Steel Fabrication',
      'Pipeline Routing, Trenching, & Flowline Construction',
      'Civil Foundation Engineering for Heavy Turbines & Plant Units',
      'HVAC & Instrumentation Calibration for Offshore Platforms',
    ],
    equipmentList: [
      '500 kVA Mobile Diesel Power Generators',
      'Heavy-duty Hydraulic Crane Rigs & Boom Lifts',
      'Automated Orbital Welding & Non-Destructive Testing (NDT) Rigs',
      '3D Geospatial Laser Scanners & Total Stations',
    ],
    compliance: 'ASME, IEEE, API 1104, & Nigerian Society of Engineers (NSE)',
    image: '/images/engineering_nigerian.jpg',
  },
  {
    id: 'marine',
    number: '02',
    title: 'Marine & Logistics Support',
    shortDesc: 'Full-scale dredging, vessel management, and offshore support infrastructure tailored for oil & gas operators.',
    fullDesc: 'Our marine logistics division operates Cutter Suction Dredgers (CSD), Anchor Handling Tug Supply (AHTS) vessels, fast crew supply boats, and barge chartering services. We maintain navigable channels, support offshore drilling campaigns, and execute deepwater supply runs with zero downtime.',
    icon: Anchor,
    keyOfferings: [
      'Cutter Suction & Trailing Suction Dredging for River Channels',
      'Offshore Supply Vessel (OSV) & Tugboat Fleet Operations',
      'Platform Supply & Crew Transport Logistics',
      'Anchor Handling & Mooring Infrastructure Installation',
      'Marine Emergency Spill Response & Salvage Support',
    ],
    equipmentList: [
      'Heavy-Duty Cutter Suction Dredgers (18-inch to 24-inch discharge)',
      'Flat-top Ballast Barges (1000 - 3000 Ton capacity)',
      'Twin-Screw Offshore Tugboats & Workboats',
      'Hydrographic Survey Echo Sounders & GPS Positioning Rigs',
    ],
    compliance: 'IMO, MARPOL, NIMASA, & SOLAS International Maritime Rules',
    image: '/images/marine_dredging_nigerian.jpg',
  },
  {
    id: 'procurement',
    number: '03',
    title: 'Procurement & Supply Chain',
    shortDesc: 'High-precision machinery acquisition, technical spare parts sourcing, installation, and commissioning.',
    fullDesc: 'Jaykastle bridges global OEM manufacturers and local energy operations. We specialize in sourcing critical specialized valves, heavy pumps, turbine spare parts, marine engines, and electrical gear with streamlined customs clearance and port logistics in Port Harcourt.',
    icon: Layers,
    keyOfferings: [
      'OEM Valve, Compressor & Pump Procurement',
      'Marine Engine & Vessel Spare Parts Logistics',
      'Heavy-duty Piping, Flanges & High-pressure Fittings',
      'Customs Clearance & Port Harbor Forwarding',
      'Technical Factory Acceptance Testing (FAT) & Site Commissioning',
    ],
    equipmentList: [
      'Temperature-Controlled Heavy Warehousing in Port Harcourt',
      'Certified Material Test Report (CMTR) Verification Systems',
      'Custom-built Heavy Transport Flatbeds & Lowbeds',
    ],
    compliance: 'ISO 9001:2015 Quality Management & NCMDB Statutory Guidelines',
    image: '/images/procurement_nigerian.jpg',
  },
  {
    id: 'maintenance',
    number: '04',
    title: 'Project Maintenance Management',
    shortDesc: 'Sustainable asset lifecycle management, operational optimization, and technical maintenance routines.',
    fullDesc: 'We maximize uptime and extend the operational lifespan of onshore processing plants and offshore marine assets. Through predictive maintenance, turnarounds, corrosion control, and hydro-testing, Jaykastle ensures continuous asset reliability.',
    icon: Settings,
    keyOfferings: [
      'Plant Turnaround Maintenance & Shutdown Management',
      'Offshore Platform Integrity & Corrosion Protection (Blasting & Coating)',
      'Non-Destructive Testing (NDT: UT, MPI, Radiography)',
      'Rotating Equipment Overhaul & Dynamic Balancing',
      'Hydrostatic Pressure Testing for Offshore Pipelines',
    ],
    equipmentList: [
      'Automated Sandblasting & Airless Spray Coating Units',
      'Ultrasonic Thickness Gauges & Phased Array NDT Scanners',
      'High-pressure Pipeline Hydro-Testing Pumps (up to 15,000 PSI)',
    ],
    compliance: 'NACE International, API 510/570, & ISO 14001 Environmental Standard',
    image: '/images/maintenance_nigerian.jpg',
  },
];

export const Services: React.FC<ServicesProps> = ({
  onSelectServiceForEstimate,
  onOpenContact,
}) => {
  const [selectedCapability, setSelectedCapability] = useState<CapabilityDetail | null>(null);

  return (
    <section id="capabilities" className="relative py-20 lg:py-28 bg-[#04070f] overflow-hidden">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-800 pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE CAPABILITIES &amp; SERVICES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              Engineering Precision Across <br />
              <span className="text-emerald-gradient">4 Key Operational Spheres</span>
            </h2>
          </div>
          <div className="text-slate-400 text-sm max-w-sm font-light leading-relaxed">
            Integrated technical solutions tailored for oil, gas, and energy infrastructure developers across Nigeria.
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilityData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 hover:border-emerald-500/50 p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col justify-between"
              >
                {/* Top Numbering & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 group-hover:border-emerald-500/50 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {item.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                    {item.keyOfferings.slice(0, 3).map((offering, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{offering}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Controls */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedCapability(item)}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 group/btn"
                  >
                    <span>View Full Specs &amp; Equipment</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => {
                      onSelectServiceForEstimate(item.id);
                    }}
                    className="text-xs font-semibold text-slate-300 hover:text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/40 px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Estimate Quote</span>
                  </button>
                </div>

                {/* Subtle Hover Shimmer Effect */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/0 group-hover:via-emerald-400/80 to-transparent transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Detail Specification Modal Overlay */}
      <AnimatePresence>
        {selectedCapability && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#060a14] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden my-8"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 bg-gradient-to-b from-slate-900 to-[#060a14] border-b border-slate-800 flex justify-between items-start">
                <div className="space-y-1 pr-6">
                  <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    TECHNICAL CAPABILITY DOSSIER • {selectedCapability.number}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-100">
                    {selectedCapability.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCapability(null)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {selectedCapability.fullDesc}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-widest flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Key Technical Deliverables</span>
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs">
                    {selectedCapability.keyOfferings.map((offering, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{offering}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Heavy Equipment List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-widest flex items-center gap-2">
                    <Anchor className="w-3.5 h-3.5" />
                    <span>Specialized Equipment &amp; Machinery Fleet</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedCapability.equipmentList.map((equip, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 font-mono flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{equip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compliance Badge */}
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-emerald-300 block font-mono">
                      Regulatory &amp; Statutory Compliance
                    </span>
                    <span className="text-xs text-slate-300 font-light">
                      {selectedCapability.compliance}
                    </span>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-mono">
                  Jaykastle Nigeria Limited • RC 1197099
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const id = selectedCapability.id;
                      setSelectedCapability(null);
                      onSelectServiceForEstimate(id);
                    }}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700"
                  >
                    Configure Estimate
                  </button>
                  <button
                    onClick={() => {
                      const name = selectedCapability.title;
                      setSelectedCapability(null);
                      onOpenContact(name);
                    }}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-emerald-brand-gradient hover:bg-emerald-brand-hover text-white text-xs font-bold shadow-lg shadow-emerald-950/40 border border-emerald-400/20"
                  >
                    Direct Tender Inquiry
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
