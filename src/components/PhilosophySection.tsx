'use client';

import { useState } from 'react';
import { Layers, CheckCircle2, XCircle, ArrowRight, Server, Database, Globe, Shield } from 'lucide-react';

export default function PhilosophySection() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      title: "1. Katman: Görsel Deneyim & Hissiyat",
      icon: Globe,
      role: "Frontend & UI/UX",
      accent: "from-emerald-500 to-teal-400",
      description: "Bir web uygulaması sadece iyi görünmemeli; parmak ucunda yağ gibi kaymalı, gecikme hissettirmemeli ve kullanıcıyla konuşmalıdır.",
      tenets: [
        "Hızlı ilk içerik ve akıcı gezinme",
        "Erişilebilirlik (A11y) ve sezgisel gezinme",
        "Durum yönetiminde (State) öngörülebilirlik ve hız"
      ]
    },
    {
      title: "2. Katman: Çekirdek İş Mantığı & Servisler",
      icon: Server,
      role: "Backend & APIs",
      accent: "from-indigo-500 to-violet-400",
      description: "Arayüzün arkasındaki görünmez motor. Doğru yetkilendirme, veri doğrulama ve eşzamanlı istekleri yöneten dayanıklı API omurgası.",
      tenets: [
        "Tip güvenli sözleşmeler (Type-safe contracts)",
        "Gevşek bağlı (loosely-coupled) modüler servisler",
        "Hata toleransı ve dayanıklı kuyruk mekanizmaları"
      ]
    },
    {
      title: "3. Katman: Veri & Bellek Mimarisi",
      icon: Database,
      role: "Databases & Caching",
      accent: "from-amber-500 to-orange-400",
      description: "Veri bir ürünün en kıymetli varlığıdır. İlişkisel tutarlılık, akıllı indeksleme ve çok katmanlı önbellek stratejisiyle yönetilir.",
      tenets: [
        "ACID prensipleriyle kritik işlem garantisi",
        "Redis ile önbellek katmanı",
        "Ölçeklendikçe tıkanmayan akıllı indeksleme"
      ]
    },
    {
      title: "4. Katman: Dağıtım & Süreklilik",
      icon: Shield,
      role: "DevOps & Cloud",
      accent: "from-cyan-500 to-blue-400",
      description: "Kodunuz sadece yerel makinenizde değil; dünyanın her yerinde kesintisiz, izlenebilir ve otomatik olarak çalışmalıdır.",
      tenets: [
        "Konteynerleştirme (Docker) ile deterministik ortamlar",
        "Otomatik CI/CD test ve dağıtım boru hatları",
        "Gerçek zamanlı sağlık kontrolü ve telemetri izleme"
      ]
    }
  ];

  return (
    <section id="felsefe" className="py-24 relative border-t border-white/5 bg-[#080B11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="editorial-tag">
            <span>Felsefe & Zihniyet</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Yalnızca kod yazmak değil;{' '}
            <span className="text-zinc-400 font-light block">yaşayan bir sistem inşa etmek.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            Neolife Malatya sayfasında da gördüğümüz gibi: Fark, sadece bir görevi yerine getirmekte değil; 
            probleme hangi gözle baktığınızda ve süreci nasıl sahiplendiğinizde yatar.
          </p>
        </div>

        {/* Narrative Comparison: Conventional vs. Craft */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Card 1: Conventional */}
          <div className="p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Geleneksel Yaklaşım</span>
              <XCircle className="w-5 h-5 text-zinc-500" />
            </div>
            <h3 className="text-xl font-bold text-zinc-300">
              &quot;Çalışsın Yeter&quot; Anlayışı
            </h3>
            <ul className="space-y-3.5 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="text-red-400/80 font-mono text-xs mt-1">01</span>
                <span>Yalnızca anlık çıktıyı hedefler, 6 ay sonra bakım maliyeti katlanır.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400/80 font-mono text-xs mt-1">02</span>
                <span>Kullanıcı deneyimi ikincil plana atılır; yavaşlık ve gecikmeler kanıksanır.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400/80 font-mono text-xs mt-1">03</span>
                <span>Veritabanı ve sunucu planlanmaz, ilk yüksek trafikte sistem kilitlenir.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Engineering Craft */}
          <div className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-6 relative overflow-hidden shadow-[0_0_40px_-15px_rgba(16,185,129,0.2)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">Benim Yaklaşımım</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white">
              Zanaatkâr Mühendislik & Sürdürülebilirlik
            </h3>
            <ul className="space-y-3.5 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-mono text-xs mt-1">01</span>
                <span>Her modül, yarın başka bir geliştirici veya ölçekleme ihtiyacı için temiz ve tip güvenli yazılır.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-mono text-xs mt-1">02</span>
                <span>Performans bir sonradan ekleme değil, ilk günden itibaren birincil tasarım metriğidir.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400 font-mono text-xs mt-1">03</span>
                <span>Piksellerden veritabanı kilitlerine kadar her katmanın birbiriyle konuşması sağlanır.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Interactive System Layers */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Sistemin 4 Temel Katmanı</h3>
              <p className="text-sm text-zinc-400">Katmanlara tıklayarak teknik vizyonu inceleyin.</p>
            </div>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Seçili: Katman {activeLayer + 1} / 4</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Layer Selector Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {layers.map((layer, index) => {
                const IconComponent = layer.icon;
                const isSelected = activeLayer === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveLayer(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-center justify-between ${
                      isSelected
                        ? 'bg-zinc-800/90 border-emerald-500/50 shadow-lg text-white'
                        : 'bg-zinc-900/40 border-zinc-800/60 hover:bg-zinc-800/40 text-zinc-400'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                          isSelected
                            ? 'bg-emerald-500 text-black'
                            : 'bg-zinc-800 text-zinc-400'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{layer.title}</div>
                        <div className="text-xs font-mono text-zinc-500">{layer.role}</div>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-emerald-400 translate-x-1' : 'text-zinc-600'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Layer Details Card */}
            <div className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                    Derinlemesine İnceleme
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {layers[activeLayer].role}
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-white">
                  {layers[activeLayer].title}
                </h4>

                <p className="text-zinc-300 leading-relaxed text-base">
                  {layers[activeLayer].description}
                </p>

                <div className="pt-4 border-t border-white/5 space-y-3">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    Temel İlkeler & Standartlar:
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {layers[activeLayer].tenets.map((tenet, tIndex) => (
                      <div
                        key={tIndex}
                        className="flex items-center gap-3 p-3 rounded-lg bg-black/40 border border-white/5 text-sm text-zinc-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{tenet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>0-Latency Stratejisi</span>
                <span>%100 Tip Güvenliği</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
