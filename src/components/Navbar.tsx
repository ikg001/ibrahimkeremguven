'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, Terminal, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Felsefe', href: '#felsefe' },
    { label: 'Mimari Lab', href: '#mimari-lab' },
    { label: 'Projeler', href: '#projeler' },
    { label: 'Zanaat', href: '#zanaat' },
    { label: 'Yolculuk', href: '#yolculuk' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#07090E]/85 backdrop-blur-md border-b border-white/5 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-white tracking-tight hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-semibold text-sm tracking-wider uppercase text-zinc-200">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-500 border border-zinc-800 rounded px-1.5 py-0.5">
            Full-Stack
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/40 p-1.5 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-zinc-400 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/5 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Status */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Müsait</span>
          </div>

          <a
            href="#iletisim"
            className="flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 hover:bg-emerald-400 hover:text-black transition-all duration-200 shadow-sm"
          >
            <span>İletişime Geç</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900/60 border border-zinc-800"
          aria-label="Menüyü aç/kapat"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0d14] border-b border-zinc-800 px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-zinc-300 hover:text-emerald-400 py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
            <span className="text-xs text-emerald-400 font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Projeler için müsait
            </span>
            <a
              href="#iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs bg-emerald-500 text-black px-3.5 py-1.5 rounded-md font-medium"
            >
              Mesaj Gönder
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
