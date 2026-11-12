'use client';

import { MILESTONES } from '@/data/portfolioData';
import { Calendar, GitCommit } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section id="yolculuk" className="py-24 relative bg-[#080B11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="editorial-tag">
            <span>Hakkımda & Yolculuk</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Öğrencilik, staj ve topluluk.{' '}
            <span className="text-zinc-400 font-light block">İçerikle birlikte süren bir yol.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Fırat Üniversitesi&apos;nde 4. sınıf öğrencisiyim. Staj, topluluk, TÜBİTAK başvuruları
            ve Türkçe içerik üretimi sürüyor.
          </p>
        </div>

        {/* Narrative Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {MILESTONES.map((m, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-500 group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mx-auto mt-0.5" />
              </div>

              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
                  {m.year ? (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-mono font-bold text-white tracking-wider">
                        {m.year}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm font-mono text-zinc-500">Yıl belirtilmedi</span>
                  )}
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 w-fit">
                    {m.role}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {m.phase}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    {m.highlight}
                  </p>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {m.story}
                </p>

                {m.technologies && m.technologies.length > 0 && (
                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-2">
                    {m.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-zinc-400 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800 flex items-center gap-1"
                      >
                        <GitCommit className="w-3 h-3 text-zinc-500" />
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
