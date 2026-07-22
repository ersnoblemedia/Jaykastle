'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, GraduationCap, Award, Compass, Send, CheckCircle2, Briefcase, X, ArrowUpRight } from 'lucide-react';

interface CareersProps {
  onOpenContact?: () => void;
}

export const Careers: React.FC<CareersProps> = ({ onOpenContact }) => {
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialty: 'Marine & Dredging Engineering',
    experience: '3 - 5 Years',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCareerModalOpen(false);
      setFormState({
        fullName: '',
        email: '',
        phone: '',
        specialty: 'Marine & Dredging Engineering',
        experience: '3 - 5 Years',
        message: '',
      });
    }, 2500);
  };

  const careerRoles = [
    { title: 'Offshore Marine Master / Dredge Captain', dept: 'Marine Operations', loc: 'Port Harcourt / Offshore' },
    { title: 'Senior Mechanical & Electrical EPC Engineer', dept: 'Engineering Services', loc: 'Port Harcourt HQ' },
    { title: 'Procurement & Supply Chain Specialist', dept: 'Logistics', loc: 'Port Harcourt' },
    { title: 'Offshore HSE Officer', dept: 'Quality & Safety', loc: 'Niger Delta Waterways' },
  ];

  return (
    <section id="careers" className="relative py-20 lg:py-28 bg-[#060a14] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" />
            <span>HUMAN CAPITAL &amp; CAREERS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Driven by Talent, Accelerated <br className="hidden sm:inline" />
            <span className="text-emerald-gradient">by Innovation</span>
          </h2>

          <p className="text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Our workforce is our most valuable asset. We invest continuously in international-standard training, mentorship, and continuous growth to foster high-performance teams capable of solving complex operational challenges.
          </p>
        </div>

        {/* 3 Pillars of Talent Development */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-100">Continuous Mentorship</h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              International-standard technical training modules, safety drills, and specialized offshore certifications for every mariner and engineer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-100">Indigenous Talent Empowerment</h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Maximizing local content integration by fostering Nigerian engineers and mariners to lead high-capacity offshore projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-100">High-Performance Culture</h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              A collaborative, zero-harm operational environment where safety, precision, and technical problem-solving are rewarded.
            </p>
          </motion.div>
        </div>

        {/* Featured Open Positions Grid */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-100">Talent Acquisition &amp; Roster</h3>
              <p className="text-xs text-slate-400 font-mono">Jaykastle Engineering Talent Pool • Port Harcourt</p>
            </div>
            <button
              onClick={() => setCareerModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-emerald-brand-gradient hover:bg-emerald-brand-hover text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 border border-emerald-400/20"
            >
              <Briefcase className="w-4 h-4" />
              <span>Submit General CV Application</span>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {careerRoles.map((role) => (
              <div
                key={role.title}
                className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-emerald-500/30 transition-all flex items-start justify-between gap-4 group"
              >
                <div>
                  <h4 className="font-serif text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                    {role.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-1 text-xs text-slate-400 font-mono">
                    <span>{role.dept}</span>
                    <span>•</span>
                    <span className="text-emerald-400">{role.loc}</span>
                  </div>
                </div>
                <button
                  onClick={() => setCareerModalOpen(true)}
                  className="p-2 rounded-lg bg-slate-900 group-hover:bg-emerald-600 group-hover:text-white text-slate-400 transition-all shrink-0"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Career Application Modal */}
      <AnimatePresence>
        {careerModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-[#060a14] border border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
            >
              <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <div>
                  <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                    CAREER DOSSIER SUBMISSION
                  </div>
                  <h3 className="font-serif text-xl font-bold text-slate-100 mt-0.5">
                    Join Jaykastle Nigeria Limited
                  </h3>
                </div>
                <button
                  onClick={() => setCareerModalOpen(false)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-slate-100">Application Received</h4>
                  <p className="text-xs text-slate-300 font-light">
                    Your profile has been dispatched to Jaykastle HR team in Port Harcourt. We will contact you upon review.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="text-slate-300 font-semibold mb-1 block">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Engr. Chidi Okafor"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-300 font-semibold mb-1 block">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="email@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-slate-300 font-semibold mb-1 block">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+234..."
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-300 font-semibold mb-1 block">Primary Technical Discipline</label>
                    <select
                      value={formState.specialty}
                      onChange={(e) => setFormState({ ...formState, specialty: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-emerald-500"
                    >
                      <option>Marine &amp; Dredging Engineering</option>
                      <option>Electrical / Substation Engineering</option>
                      <option>Mechanical &amp; Piping Construction</option>
                      <option>Strategic Procurement &amp; Supply Chain</option>
                      <option>HSE Inspection &amp; Compliance</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-300 font-semibold mb-1 block">Key Experience Summary / Certifications</label>
                    <textarea
                      rows={3}
                      placeholder="Specify COREN, NIMASA, STCW, or relevant offshore certifications..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-brand-gradient hover:bg-emerald-brand-hover text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 border border-emerald-400/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Career Application</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
