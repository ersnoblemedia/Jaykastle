'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Anchor, ShieldCheck, Phone, Mail, Menu, X, ChevronRight, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { JaykastleLogo } from './JaykastleLogo';

interface NavbarProps {
  onOpenContact: (defaultService?: string) => void;
  onOpenEstimator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onOpenEstimator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Capabilities', href: '/services' },
    { name: 'Policy & Strategy', href: '/strategy' },
    { name: 'Human Capital', href: '/careers' },
    { name: 'Estimator', href: '/estimator' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Corporate Utility Bar */}
      <div className="bg-[#04070f] text-xs text-slate-400 border-b border-slate-800/80 py-2 px-4 sm:px-8 hidden md:block z-50 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-emerald-400 font-mono tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>RC 1197099</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 hover:text-slate-200 transition-colors">
              <Anchor className="w-3.5 h-3.5 text-emerald-500" />
              <span>PORT HARCOURT, NIGERIA</span>
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:+2348038852720" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+234 803 885 2720</span>
            </a>
            <span className="text-slate-600">|</span>
            <a href="mailto:jaykastlejaykastle@gmail.com" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>jaykastlejaykastle@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Header */}
      <header
        className={`fixed top-0 md:top-[33px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#060a14]/95 backdrop-blur-md shadow-2xl border-b border-emerald-500/20 py-3'
            : 'bg-gradient-to-b from-[#060a14]/90 via-[#060a14]/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group py-1 hover:opacity-95 transition-opacity">
            <JaykastleLogo size="md" theme="dark" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 bg-slate-900/80 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800/80'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/estimator"
              className="text-xs font-semibold text-slate-300 hover:text-emerald-300 px-3.5 py-2 rounded-lg border border-slate-700/80 hover:border-emerald-500/50 bg-slate-900/40 hover:bg-slate-800/80 transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tender Estimator</span>
            </Link>
            <Link
              href="/contact"
              className="text-xs font-bold bg-emerald-brand-gradient hover:bg-emerald-brand-hover text-white px-4 py-2 rounded-lg shadow-lg shadow-emerald-900/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 border border-emerald-400/20"
            >
              <span>Partner With Us</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#060a14]/98 border-b border-emerald-500/20 backdrop-blur-xl lg:hidden p-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              <div className="text-xs font-mono text-emerald-400 font-bold tracking-widest uppercase mb-2 border-b border-slate-800 pb-2">
                Navigation • RC 1197099
              </div>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-medium py-2 border-b border-slate-800/50 flex items-center justify-between ${
                      isActive ? 'text-emerald-400 font-bold' : 'text-slate-200 hover:text-emerald-400'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </Link>
                );
              })}
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/estimator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-xs font-semibold py-3 px-4 rounded-lg border border-slate-700 bg-slate-900/80 text-emerald-300 flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>Interactive Tender Estimator</span>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-xs font-bold py-3 px-4 rounded-lg bg-emerald-brand-gradient text-white flex items-center justify-center gap-2"
                >
                  <span>Partner With Us</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="pt-2 text-[11px] text-slate-500 space-y-1">
                <p>Port Harcourt, Rivers State, Nigeria</p>
                <p>+234 803 885 2720 | jaykastlejaykastle@gmail.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
