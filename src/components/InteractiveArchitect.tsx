'use client';

import { useState } from 'react';
import { ARCHITECTURE_PRESETS } from '@/data/portfolioData';
import { Send, Check, Sparkles, Layers, Activity, ShoppingBag, Cpu, ShieldAlert, Zap, Globe2 } from 'lucide-react';

export default function InteractiveArchitect() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(ARCHITECTURE_PRESETS[0].id);
  const [selectedPriority, setSelectedPriority] = useState<string>('Düşük Gecikme (<50ms)');
  const [copied, setCopied] = useState(false);

  const priorities = [
    { label: 'Düşük Gecikme (<50ms)', icon: Zap },
    { label: 'Yüksek Eşzamanlılık (100k+)', icon: Activity },
    { label: 'Üst Düzey Güvenlik & Gizlilik', icon: ShieldAlert },
    { label: 'Küresel CDN & SEO Odaklı', icon: Globe2 },
  ];

  const currentPreset = ARCHITECTURE_PRESETS.find(p => p.id === selectedPresetId) || ARCHITECTURE_PRESETS[0];

  const formulateMessage = () => {
    return `Merhaba İbrahim, ${currentPreset.name} projemiz için ${selectedPriority} öncelikli bir mimari kurgulamak istiyoruz. Süreci birlikte değerlendirebilir miyiz?`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formulateMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(formulateMessage());
    window.open(`https://wa.me/905000000000?text=${text}`, '_blank');
  };

  const getPresetIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'Activity': return Activity;
      case 'ShoppingBag': return ShoppingBag;
      case 'Cpu': return Cpu;
      default: return Sparkles;
    }
  };

  return (
    <section id="mimari-lab" className="py-24 relative bg-[#07090E] border-t border-white/5 overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="editorial-tag">
            <span>İnteraktif Mimari Stüdyosu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Neye ihtiyacınız olduğunu söyleyin,{' '}
            <span className="text-emerald-400 block">mimariyi birlikte kuralım.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Proje tipinizi ve kritik önceliğinizi seçin. Sistem bileşenlerinin nasıl birbirine bağlandığını 
            görün ve doğrudan projeye özel bir yol haritası oluşturun.
          </p>
        </div>

        {/* 2-Step Selector Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Step 1: Proje Tipi */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[11px]">1</span>
                <span>Proje Tipini Belirleyin</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ARCHITECTURE_PRESETS.map((preset) => {
                  const Icon = getPresetIcon(preset.icon);
                  const isSelected = selectedPresetId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => setSelectedPresetId(preset.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-200 ${
                        isSelected
                          ? 'bg-emerald-500/10 border-emerald-500/50 text-white shadow-[0_0_20px_-8px_rgba(16,185,129,0.3)]'
                          : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800/40 hover:text-zinc-200'
                      }`}
                    >
                      <Icon className={`w-4 h-4 mb-2 ${isSelected ? 'text-emerald-400' : 'text-zinc-500'}`} />
                      <div className="text-xs font-semibold">{preset.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Kritik Öncelik */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[11px]">2</span>
                <span>Kritik Önceliği Seçin</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {priorities.map((p) => {
                  const Icon = p.icon;
                  const isSelected = selectedPriority === p.label;
                  return (
                    <button
                      key={p.label}
                      onClick={() => setSelectedPriority(p.label)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs flex items-center gap-2.5 ${
                        isSelected
                          ? 'bg-indigo-500/10 border-indigo-500/50 text-white shadow-md'
                          : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:bg-zinc-800/40'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-indigo-400' : 'text-zinc-500'}`} />
                      <span className="truncate">{p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message Generator & Direct WhatsApp Trigger */}
            <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-zinc-400">Oluşturulan İstek Mesajı</span>
                <span className="text-emerald-400 text-[11px] font-mono">● Hazır</span>
              </div>
              <p className="text-xs font-mono text-zinc-300 bg-black/60 p-3.5 rounded-lg border border-zinc-850 leading-relaxed italic">
                &ldquo;{formulateMessage()}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>WhatsApp ile İlet</span>
                </button>
                <button
                  onClick={handleCopy}
                  className="py-2.5 px-4 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : null}
                  <span>{copied ? 'Kopyalandı' : 'Metni Kopyala'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Blueprint & Circuit Interactive Visual Column */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-white font-medium">
                  {currentPreset.name} Devre Şeması
                </span>
              </div>
              <div className="text-[11px] font-mono text-zinc-400">
                Hedef: <strong className="text-emerald-400">{currentPreset.latency}</strong>
              </div>
            </div>

            {/* SVG Data Pipeline Visualization */}
            <div className="p-4 rounded-xl bg-[#03060a] border border-zinc-800/80 relative overflow-hidden">
              <svg className="w-full h-44" viewBox="0 0 600 160" fill="none">
                {/* Circuit Grid lines */}
                <path d="M 0 80 H 600" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 120 20 V 140" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 300 20 V 140" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 480 20 V 140" stroke="#1f2937" strokeWidth="1" strokeDasharray="4 4" />

                {/* Animated Flowing Line */}
                <path
                  d="M 60 80 L 180 80 L 300 80 L 420 80 L 540 80"
                  stroke="#10B981"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="animate-pulse"
                />

                {/* Node 1: Client / UI */}
                <g transform="translate(60, 80)">
                  <circle r="22" fill="#0D1620" stroke="#10B981" strokeWidth="2" />
                  <circle r="6" fill="#10B981" />
                  <text y="38" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontFamily="monospace">
                    İstemci / UI
                  </text>
                </g>

                {/* Node 2: Gateway */}
                <g transform="translate(180, 80)">
                  <circle r="18" fill="#0D1620" stroke="#6366F1" strokeWidth="2" />
                  <circle r="5" fill="#6366F1" />
                  <text y="36" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontFamily="monospace">
                    API Edge
                  </text>
                </g>

                {/* Node 3: Core Service */}
                <g transform="translate(300, 80)">
                  <circle r="24" fill="#0D1620" stroke="#10B981" strokeWidth="2" />
                  <circle r="7" fill="#10B981" />
                  <text y="40" textAnchor="middle" fill="#34D399" fontSize="11" fontFamily="monospace" fontWeight="bold">
                    İş Çekirdeği
                  </text>
                </g>

                {/* Node 4: Cache & DB */}
                <g transform="translate(420, 80)">
                  <circle r="18" fill="#0D1620" stroke="#F59E0B" strokeWidth="2" />
                  <circle r="5" fill="#F59E0B" />
                  <text y="36" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontFamily="monospace">
                    DB & Cache
                  </text>
                </g>

                {/* Node 5: Cloud Infra */}
                <g transform="translate(540, 80)">
                  <circle r="22" fill="#0D1620" stroke="#38BDF8" strokeWidth="2" />
                  <circle r="6" fill="#38BDF8" />
                  <text y="38" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontFamily="monospace">
                    Dağıtık Cloud
                  </text>
                </g>
              </svg>
            </div>

            {/* Generated Tech Stack Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  Ön Yüz Mimarisi
                </span>
                <span className="text-xs font-semibold text-white block">
                  {currentPreset.frontend}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  Arka Plan & Sunucu
                </span>
                <span className="text-xs font-semibold text-white block">
                  {currentPreset.backend}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  Veritabanı & Önbellek
                </span>
                <span className="text-xs font-semibold text-white block">
                  {currentPreset.database}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                  Altyapı & Dağıtım
                </span>
                <span className="text-xs font-semibold text-white block">
                  {currentPreset.infra}
                </span>
              </div>
            </div>

            {/* Summary Stat */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
              <span className="font-mono">Kapasite Hedefi: {currentPreset.scale}</span>
              <span className="text-emerald-400 font-mono font-medium">Uçtan Uca Tip Güvenliği</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
