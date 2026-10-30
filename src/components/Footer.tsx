'use client';

import { Terminal, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#05070B] border-t border-white/5 relative text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-sm text-white tracking-wider">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-zinc-600 font-mono">/</span>
            <span className="text-zinc-500 font-mono">{PERSONAL_INFO.tagline}</span>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Twitter / X"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 text-zinc-400 hover:text-emerald-400 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1 font-mono text-[11px]"
              aria-label="Yukarı çık"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Başa Dön</span>
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 font-mono text-[11px]">
          <div>
            © 2026 {PERSONAL_INFO.name}. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Next.js 16 + Tailwind CSS v4 + TypeScript ile inşa edildi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
