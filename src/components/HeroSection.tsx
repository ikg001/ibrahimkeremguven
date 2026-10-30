'use client';

import { ArrowDown, Code2, Sparkles, Cpu, ShieldCheck, GitBranch } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Radial Atmospheric Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Editorial Subtitle / Tag */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-8 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-medium tracking-wider uppercase">Mimari Zanaat & Full-Stack Mühendislik</span>
        </div>

        {/* Narrative Headline */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Fikirler ham karmaşadır.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
              Kod, onları yaşayan sistemlere dönüştürür.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl font-normal">
            Ben <strong className="text-zinc-200 font-semibold">{PERSONAL_INFO.name}</strong>. 
            Arayüzün en hassas pikselinden, arka plan servislerinin alt-saniye veri akışlarına kadar 
            ölçeklenebilir, dayanıklı ve hikayesi olan web uygulamaları inşa ediyorum.
          </p>
        </div>

        {/* Interactive CTA & Meta */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#mimari-lab"
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 text-black font-semibold text-sm hover:bg-emerald-400 transition-all duration-200 shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]"
          >
            <Cpu className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
            <span>İnteraktif Mimariyi Dene</span>
          </a>

          <a
            href="#projeler"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-700/80 text-zinc-200 text-sm font-medium hover:bg-zinc-800 hover:border-zinc-500 transition-all"
          >
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span>Vaka İncelemeleri</span>
          </a>

          <a
            href="#yolculuk"
            className="flex items-center gap-2 px-5 py-3.5 text-zinc-400 text-sm font-medium hover:text-white transition-colors"
          >
            <span>Hikayeyi Oku</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>

        {/* Live Architecture Teaser Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-zinc-500 ml-2">system-core // pipeline-active</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> Güvenli Katman
              </span>
              <span className="flex items-center gap-1.5 text-indigo-400">
                <GitBranch className="w-4 h-4" /> Dağıtık Yapı
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <Sparkles className="w-4 h-4" /> Optimize
              </span>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-zinc-300">{stat.label}</div>
                <div className="text-[11px] text-zinc-500">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
