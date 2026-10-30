'use client';

import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Wrench, Terminal, Cpu } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="zanaat" className="py-24 relative bg-[#07090E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="editorial-tag">
            <span>Teknoloji & Zanaat</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Araçlar geçicidir,{' '}
            <span className="text-zinc-400 font-light block">mühendislik prensipleri kalıcı.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Hangi aracın nerede, neden ve hangi maliyetle seçilmesi gerektiğini bilmek; 
            bir projeyi başarıya ulaştıran en kritik zanaattır.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    Bölüm 0{idx + 1}
                  </span>
                  {idx === 0 ? (
                    <Terminal className="w-4 h-4 text-emerald-400" />
                  ) : idx === 1 ? (
                    <Cpu className="w-4 h-4 text-indigo-400" />
                  ) : (
                    <Wrench className="w-4 h-4 text-amber-400" />
                  )}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {cat.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {cat.tagline}
                </p>

                <div className="space-y-3 pt-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-850 hover:border-zinc-700 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-zinc-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-emerald-400">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 font-mono">
                        {skill.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500">
                Sürekli Güncel Standartlar
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
