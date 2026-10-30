'use client';

import { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');

  const categories = ['Tümü', 'Full-Stack', 'Backend & Cloud', 'Frontend', 'AI & Data'];

  const filteredProjects = activeCategory === 'Tümü'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projeler" className="py-24 relative bg-[#080B11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="editorial-tag">
              <span>Seçilmiş Çalışmalar & Vaka İncelemeleri</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Sadece kod değil;{' '}
              <span className="text-zinc-400 font-light block">çözülen gerçek problemler.</span>
            </h2>
            <p className="text-zinc-400 text-base">
              Her proje bir mimari meydan okumayla başlar. Problem, geliştirilen strateji ve somut sonuçlar:
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all border ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-black font-semibold border-emerald-400 shadow-sm'
                    : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6 group relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="space-y-6">
                {/* Meta header */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                        aria-label="GitHub deposu"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-zinc-400 hover:text-emerald-400 rounded-lg hover:bg-white/5 transition-colors"
                        aria-label="Canlı önizleme"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-1">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Problem & Solution Accordion-style layout */}
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-900/30 text-xs text-zinc-300 space-y-1">
                    <span className="flex items-center gap-1.5 text-red-400 font-semibold uppercase tracking-wider text-[10px]">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Meydan Okuma & Problem
                    </span>
                    <p>{project.problem}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-xs text-zinc-300 space-y-1">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold uppercase tracking-wider text-[10px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Uygulanan Mimari & Çözüm
                    </span>
                    <p>{project.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                    Kritik Başarı Metrikleri
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-black/60 border border-white/5 text-zinc-200"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies footer */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
