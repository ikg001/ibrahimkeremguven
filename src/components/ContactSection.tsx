'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, ArrowUpRight, Send, Clock, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formMsg) return;
    
    // Create mailto fallback or custom action
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `İş Birliği / Proje Görüşmesi: ${formName}`
    )}&body=${encodeURIComponent(
      `Gönderen: ${formName} (${formEmail})\n\nMesaj:\n${formMsg}`
    )}`;
    window.location.href = mailtoLink;
    setSentSuccess(true);
  };

  return (
    <section id="iletisim" className="py-24 relative bg-[#07090E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="editorial-tag">
                <span>İletişim & Başlangıç</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Yeni bir fikri{' '}
                <span className="text-emerald-400 block">birlikte inşa edelim.</span>
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed">
                İster sıfırdan bir SaaS ürünü, ister yüksek trafikli bir backend mimarisi olsun; 
                teknik vizyonunuzu hayata geçirmek için bir kahve mesafesindeyim.
              </p>
            </div>

            {/* Direct Connect Pills */}
            <div className="space-y-3">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-between p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-emerald-500/50 transition-colors text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-zinc-500">Doğrudan E-Posta</div>
                    <div className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Kopyala</span>
                    </>
                  )}
                </div>
              </button>

              <a
                href="https://wa.me/905000000000"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-emerald-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-zinc-500">Hızlı Yanıt</div>
                    <div className="text-xs sm:text-sm font-medium text-zinc-200 group-hover:text-white">
                      WhatsApp Üzerinden Mesaj
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>

            {/* Availability details */}
            <div className="p-4 rounded-xl bg-zinc-950/40 border border-white/5 space-y-2 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{PERSONAL_INFO.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                <span>Yanıt süresi: Genellikle &lt; 24 saat</span>
              </div>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">
              Projenizi Anlatın
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Aşağıdaki formu doldurarak doğrudan e-posta istemciniz üzerinden teklif veya görüşme talebi iletebilirsiniz.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-300">İsminiz / Şirketiniz *</label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-300">E-Posta Adresiniz</label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="ornek@sirket.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-300">Proje Detayları & İhtiyaçlarınız *</label>
                <textarea
                  rows={4}
                  required
                  value={formMsg}
                  onChange={(e) => setFormMsg(e.target.value)}
                  placeholder="Geliştirmek istediğiniz ürün, hedeflenen süre, beklenen özellikler..."
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]"
              >
                <Send className="w-4 h-4" />
                <span>Görüşme Talebini Gönder</span>
              </button>

              {sentSuccess && (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-400 text-center font-mono">
                  ✓ Talebiniz hazırlandı ve e-posta istemcinize aktarıldı!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
