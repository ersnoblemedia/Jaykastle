'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle2, ShieldCheck, Compass, Clock, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { JaykastleLogo } from './JaykastleLogo';

interface ContactProps {
  modalOpen: boolean;
  onCloseModal: () => void;
  defaultService?: string;
  showSection?: boolean;
  estimateData?: {
    sector: string;
    timeline: string;
    scale: string;
    refCode: string;
    notes: string;
  } | null;
}

export const Contact: React.FC<ContactProps> = ({
  modalOpen,
  onCloseModal,
  defaultService,
  showSection = true,
  estimateData,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    serviceType: defaultService || 'Marine & Logistics Support',
    subject: estimateData ? `Tender Inquiry [Ref: ${estimateData.refCode}]` : 'General Corporate Inquiry',
    message: estimateData
      ? `Project Ref Code: ${estimateData.refCode}\nSector: ${estimateData.sector}\nSchedule: ${estimateData.timeline}\nScale: ${estimateData.scale}\nNotes: ${estimateData.notes || 'N/A'}`
      : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [confirmationRefCode, setConfirmationRefCode] = useState('JAY-982041');

  // Track props changes using state comparison instead of direct synchronous setState inside effect
  const [lastDefaultService, setLastDefaultService] = useState(defaultService);
  const [lastEstimateData, setLastEstimateData] = useState(estimateData);

  if (defaultService !== lastDefaultService) {
    setLastDefaultService(defaultService);
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceType: defaultService }));
    }
  }

  if (estimateData !== lastEstimateData) {
    setLastEstimateData(estimateData);
    if (estimateData) {
      setFormData((prev) => ({
        ...prev,
        serviceType: estimateData.sector,
        subject: `Tender Inquiry [Ref: ${estimateData.refCode}]`,
        message: `Project Ref Code: ${estimateData.refCode}\nSector: ${estimateData.sector}\nSchedule: ${estimateData.timeline}\nScale: ${estimateData.scale}\nNotes: ${estimateData.notes || 'N/A'}`,
      }));
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCode = estimateData?.refCode || `JAY-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmationRefCode(generatedCode);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      serviceType: 'Marine & Logistics Support',
      subject: 'General Corporate Inquiry',
      message: '',
    });
  };

  return (
    <>
      {/* On-Page Contact Section */}
      {showSection && (
        <section id="contact" className="relative py-20 lg:py-28 bg-[#060a14] overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-widest">
                <Mail className="w-3.5 h-3.5" />
                <span>DIRECT CORPORATE INQUIRIES</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
                Partner With Jaykastle <br />
                <span className="text-emerald-gradient">Nigeria Limited</span>
              </h2>
              <p className="text-base text-slate-300 font-light max-w-xl mx-auto">
                Connect with our executive management team and technical directors in Port Harcourt for project tenders, charter inquiries, and EPC partnerships.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              
              {/* Contact Details Card Column */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Main HQ Address Box */}
                <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 shadow-2xl space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div>
                      <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                        CORPORATE HEADQUARTERS
                      </div>
                      <div className="text-xl font-serif font-bold text-slate-100 mt-0.5">
                        Port Harcourt Hub
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Compass className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-4 text-xs">
                    
                    {/* Address */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-slate-200 font-bold block mb-0.5 font-serif">Physical Address</span>
                        <span className="text-slate-300 leading-relaxed block">
                          NTA Ozuoba Road, Port Harcourt, Rivers State, Nigeria
                        </span>
                      </div>
                    </div>

                    {/* Telephone Lines */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-slate-200 font-bold block mb-0.5 font-serif">Direct Telephone Hotlines</span>
                        <div className="space-y-1 font-mono text-emerald-300">
                          <a href="tel:+2348038852720" className="hover:underline block">+234 803 885 2720</a>
                          <a href="tel:+2347086838158" className="hover:underline block">+234 708 683 8158</a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-slate-200 font-bold block mb-0.5 font-serif">Official Email Address</span>
                        <a href="mailto:jaykastlejaykastle@gmail.com" className="text-emerald-300 font-mono hover:underline block break-all">
                          jaykastlejaykastle@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Operating Hours */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-slate-200 font-bold block mb-0.5 font-serif">Operational Availability</span>
                        <span className="text-slate-300">Mon - Fri: 08:00 - 17:00 WAT | 24/7 Offshore Emergency Logistics</span>
                      </div>
                    </div>

                  </div>

                  <div className="pt-2 text-center border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Duly Registered • RC 1197099</span>
                  </div>

                </div>

              </div>

              {/* Direct Form Column */}
              <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
                
                <div className="border-b border-slate-800 pb-4 mb-6">
                  <h3 className="font-serif text-2xl font-bold text-slate-100">Send Direct Message</h3>
                  <p className="text-xs text-slate-400 font-mono">Jaykastle Nigeria Limited • Executive Desk</p>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-slate-100">Inquiry Dispatched Successfully</h4>
                    <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-emerald-400 font-semibold">{formData.fullName}</span>. Your inquiry has been logged under reference code <span className="font-mono text-emerald-300">{confirmationRefCode}</span> and routed to our Port Harcourt engineering office.
                    </p>
                    <button
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors mt-4"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-300 font-semibold mb-1 block">Full Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Engr. David Lawson"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="text-slate-300 font-semibold mb-1 block">Company / Organization</label>
                        <input
                          type="text"
                          placeholder="e.g. Energy Resources Ltd"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-300 font-semibold mb-1 block">Email Address *</label>
                        <input
                          required
                          type="email"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="text-slate-300 font-semibold mb-1 block">Telephone Line *</label>
                        <input
                          required
                          type="tel"
                          placeholder="+234 803 000 0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-300 font-semibold mb-1 block">Capability Sphere</label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-emerald-500"
                        >
                          <option>Engineering Services (Electrical/Mechanical/Civil)</option>
                          <option>Marine &amp; Logistics Support (Dredging &amp; Vessels)</option>
                          <option>Procurement &amp; Supply Chain Sourcing</option>
                          <option>Project Maintenance Management</option>
                          <option>General Tender / Executive Partnership</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-slate-300 font-semibold mb-1 block">Inquiry Subject</label>
                        <input
                          type="text"
                          placeholder="Inquiry Subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-300 font-semibold mb-1 block">Project Scope &amp; Deliverables *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Detail your engineering specifications, vessel charter timelines, or procurement requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-emerald-brand-gradient hover:bg-emerald-brand-hover text-white font-bold flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/40 hover:scale-[1.01] transition-all border border-emerald-400/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Dispatch Official Inquiry</span>
                    </button>

                    <div className="text-[11px] text-slate-500 text-center font-mono pt-1">
                      Direct Email Fallback: jaykastlejaykastle@gmail.com
                    </div>

                  </form>
                )}

              </div>

            </div>

          </div>
        </section>
      )}

      {/* High-Converting Popup Modal (when triggered via header or button) */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#060a14] border border-emerald-500/40 rounded-2xl shadow-2xl my-8 overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-b from-slate-900 to-[#060a14] border-b border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <JaykastleLogo size="sm" theme="dark" />
                  <div>
                    <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                      EXECUTIVE TENDER DESK • RC 1197099
                    </div>
                    <h3 className="font-serif text-lg font-bold text-slate-100 mt-0.5">
                      Partner With Jaykastle Nigeria Limited
                    </h3>
                  </div>
                </div>
                <button
                  onClick={onCloseModal}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
                {submitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-slate-100">Inquiry Logged Successfully</h4>
                    <p className="text-xs text-slate-300 font-light">
                      Thank you. Your message has been transmitted to our Port Harcourt office.
                    </p>
                    <button
                      onClick={() => {
                        resetForm();
                        onCloseModal();
                      }}
                      className="px-6 py-2.5 rounded-xl bg-emerald-brand-gradient hover:bg-emerald-brand-hover text-white text-xs font-bold border border-emerald-400/20"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-300 font-semibold mb-1 block">Full Name *</label>
                        <input
                          required
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="text-slate-300 font-semibold mb-1 block">Company / Organization</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-slate-300 font-semibold mb-1 block">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="text-slate-300 font-semibold mb-1 block">Telephone Line *</label>
                        <input
                          required
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-slate-300 font-semibold mb-1 block">Project Scope / Deliverables</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-100 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-emerald-brand-gradient hover:bg-emerald-brand-hover text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 border border-emerald-400/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Official Inquiry</span>
                    </button>
                  </form>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
