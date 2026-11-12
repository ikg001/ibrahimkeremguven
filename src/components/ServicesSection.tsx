import Link from 'next/link';
import { Bot, Workflow, AppWindow, ArrowRight } from 'lucide-react';
import { SERVICES, contactHref } from '@/data/portfolioData';

const ICONS = [Bot, Workflow, AppWindow];

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="py-24 relative bg-[#07090E] border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="editorial-tag">
            <span>Hizmetler</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Birlikte konuşabileceğimiz{' '}
            <span className="text-zinc-400 font-light block">üç iş.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Kapsam ve süre, iletişimde netleşir. Seçtiğiniz konu forma yazılır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = ICONS[idx] ?? Bot;
            return (
              <article
                key={service.id}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between gap-8"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
                </div>
                <Link
                  href={contactHref(service.konu)}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-colors"
                >
                  <span>Bu konuyla iletişime geç</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
