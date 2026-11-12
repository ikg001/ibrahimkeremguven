export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend & Cloud' | 'AI & Data';
  description: string;
  problem: string;
  solution: string;
  metrics: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  tagline: string;
  skills: {
    name: string;
    level: string;
    context: string;
    icon?: string;
  }[];
}

export interface Milestone {
  year?: string;
  phase: string;
  role: string;
  highlight: string;
  story: string;
  technologies?: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  status: string;
  location: string;
  email: string;
  github?: string;
  linkedin?: string;
  youtube?: string;
  whatsapp?: string;
  stats: { label: string; value: string; detail: string }[];
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "İbrahim Kerem Güven",
  title: "Yazılım Mühendisliği Öğrencisi",
  tagline: "Kaostan Mimariye, Piksellerden Çekirdeğe.",
  bio: "Fırat Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisi. Edict'te stajyer; FUTURE öğrenci topluluğunun kurucusu ve başkanı. TÜBİTAK proje başvuruları sürüyor. YouTube'da İKG kanalında ve Instagram'da yazilim.dev.io hesabında Türkçe yapay zekâ kodlama ajanları içeriği üretiyor.",
  status: "Yeni Projeler ve İş Birlikleri İçin Müsait",
  location: "Türkiye · Remote / Hibrit",
  email: "iletisim@ibrahimkeremguven.dev",
  github: "https://github.com/ikg001",
  linkedin: "https://www.linkedin.com/in/ibrahim-kerem-g%C3%BCven-875531295/",
  youtube: "https://www.youtube.com/@ikg001",
  stats: [
    { value: "Yazılım Müh. 4. sınıf", label: "Fırat Üniversitesi", detail: "Lisans öğrencisi" },
    { value: "Edict stajyeri", label: "Staj", detail: "Devam ediyor" },
    { value: "FUTURE kurucusu", label: "Öğrenci topluluğu", detail: "Kurucu ve başkan" },
    { value: "AI ajan içerikleri", label: "Türkçe içerik", detail: "YouTube · İKG · yazilim.dev.io" },
  ]
};

export function contactHref(konu: string, mesaj?: string) {
  const params = new URLSearchParams();
  params.set("konu", konu);
  if (mesaj) params.set("mesaj", mesaj);
  return `/?${params.toString()}#iletisim`;
}

export const PROJECTS: Project[] = [
  {
    id: "sentinel-core",
    title: "Sentinel Real-Time Data Engine",
    subtitle: "Yüksek Frekanslı Olay & Telemetri İşleme Platformu",
    category: "Backend & Cloud",
    description: "IoT ve uygulama sinyallerini kayıpsız toplayıp gerçek zamanlı görselleştirmeyi hedefleyen dağıtık akış denemesi.",
    problem: "Klasik ilişkisel veritabanları eş zamanlı yoğun yazma altında kilitlenebiliyor ve analiz gecikebiliyor.",
    solution: "Hedef kurgu: Kafka ve Redis Streams tabanlı bir tampon katman, TimescaleDB hiper-tabloları ve webhook ile gRPC üzerinden anlık izleme paneli.",
    metrics: [
      "hedef: yüksek olay işleme kapasitesi",
      "hedef: düşük uçtan uca gecikme",
      "hedef: altyapı maliyetini düşürmek",
    ],
    technologies: ["Go", "Node.js", "Redis Streams", "TimescaleDB", "Docker", "Tailwind CSS"],
    featured: true,
    accentColor: "#10B981"
  },
  {
    id: "aurora-studio",
    title: "Aurora Creative SaaS & AI Orchestrator",
    subtitle: "Yeni Nesil İçerik Üretim ve İş Akışı Otomasyonu",
    category: "Full-Stack",
    description: "Kullanıcıların karmaşık çok adımlı AI iş akışlarını düğüm tabanlı (node-based) bir kanvas üzerinde görsel olarak tasarlayıp çalıştırabildiği SaaS denemesi.",
    problem: "Kullanıcılar birden fazla LLM servisi arasında manuel kopyala-yapıştır yapıyor ve durum takibini yönetemiyordu.",
    solution: "Hedef kurgu: Next.js App Router üzerinde React Flow kanvası, Server-Sent Events (SSE) ile yanıt akışı ve çoklu kiracı abonelik modeli.",
    metrics: [
      "hedef: anlaşılır iş akışı",
      "hedef: daha kısa üretim adımı",
      "hedef: düşük gecikmeli kanvas",
    ],
    technologies: ["Next.js", "TypeScript", "React Flow", "PostgreSQL", "Prisma", "Tailwind CSS"],
    featured: true,
    accentColor: "#6366F1"
  },
  {
    id: "hyperion-commerce",
    title: "Hyperion Headless Commerce",
    subtitle: "Ultra Hızlı, Küresel Ölçekte E-Ticaret Deneyimi",
    category: "Frontend",
    description: "Geniş bir ürün kataloğunda anlık filtreleme, çevrimdışı sepet ve hızlı sayfa geçişlerini hedefleyen headless mağaza denemesi.",
    problem: "Geleneksel monolit e-ticaret altyapılarında sayfa yükü uzayabiliyor ve mobilde sepet terk oranı yükselebiliyor.",
    solution: "Hedef kurgu: edge üzerinde ISR, bir arama katmanı ve hızlı katalog gezintisi.",
    metrics: [
      "hedef: yüksek Lighthouse puanı",
      "hedef: hızlı ilk içerik",
      "hedef: daha az sepet terki",
    ],
    technologies: ["Next.js", "React 19", "Tailwind CSS", "Stripe API", "Zustand", "Framer Motion"],
    featured: true,
    accentColor: "#F59E0B"
  },
  {
    id: "synthex-bi",
    title: "Synthex BI & Predictive Analytics",
    subtitle: "Veri Odaklı Karar Destek ve Tahminleme Arayüzü",
    category: "AI & Data",
    description: "İşletmelerin finansal ve operasyonel verilerini tahmin modelleriyle buluşturmayı hedefleyen, interaktif grafik motoruna sahip analitik kokpit denemesi.",
    problem: "Excel tablolarına boğulmuş karar vericiler, haftalık raporları beklerken trendleri kaçırıyordu.",
    solution: "Hedef kurgu: Python tabanlı tahminleme mikroservisleri ile bir React kokpiti ve doğal dille veri sorgulama.",
    metrics: [
      "hedef: daha hızlı raporlama",
      "hedef: doğal dille veri sorgulama",
      "hedef: interaktif grafikler",
    ],
    technologies: ["FastAPI", "Python", "TypeScript", "Next.js", "Tailwind CSS", "ECharts"],
    featured: false,
    accentColor: "#EC4899"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Arayüz & Kullanıcı Deneyimi",
    tagline: "Gözü yormayan, akıcı tepki veren pürüzsüz arayüzler.",
    skills: [
      { name: "React / Next.js", level: "Uzman", context: "App Router, Server Components, SSR & ISR" },
      { name: "TypeScript", level: "İleri Düzey", context: "Tip güvenliği, jenerikler ve sağlam mimari" },
      { name: "Tailwind CSS", level: "Uzman", context: "Design token'ları, özel animasyonlar, dark mode" },
      { name: "Framer Motion & WebGL", level: "Yetkin", context: "Akıcı scrollytelling ve mikro etkileşimler" },
      { name: "State Management", level: "İleri Düzey", context: "Zustand, TanStack Query, Redux Toolkit" },
    ]
  },
  {
    title: "Sunucu & Çekirdek Sistemler",
    tagline: "Kırılmaz iş mantığı, yüksek eşzamanlılık ve temiz API katmanları.",
    skills: [
      { name: "Node.js & Express / NestJS", level: "İleri Düzey", context: "Mikroservisler, REST & GraphQL mimarisi" },
      { name: "Go (Golang)", level: "Yetkin", context: "Düşük gecikmeli arka plan işleri ve CLI araçları" },
      { name: "Python / FastAPI", level: "Yetkin", context: "Veri işleme servisleri ve AI entegrasyonları" },
      { name: "WebSocket & SSE", level: "İleri Düzey", context: "Çift yönlü anlık iletişim ve olay akışları" },
      { name: "Authentication & Güvenlik", level: "İleri Düzey", context: "OAuth2, JWT, RBAC ve API Gateway" },
    ]
  },
  {
    title: "Veri & Altyapı",
    tagline: "Verinin kalıcı, güvenli ve erişilebilir olması.",
    skills: [
      { name: "PostgreSQL & Prisma / Drizzle", level: "İleri Düzey", context: "İndeksleme, karmaşık ilişkiler ve optimizasyon" },
      { name: "Redis", level: "İleri Düzey", context: "Önbellekleme, Pub/Sub ve rate-limiting" },
      { name: "MongoDB & NoSQL", level: "Yetkin", context: "Esnek şema ve doküman odaklı depolama" },
      { name: "Docker & CI/CD", level: "İleri Düzey", context: "Konteynerleştirme, GitHub Actions, otomatik dağıtım" },
      { name: "Cloud & Edge", level: "Yetkin", context: "AWS, Vercel, Cloudflare Workers, Supabase" },
    ]
  }
];

export const MILESTONES: Milestone[] = [
  {
    year: "günümüz",
    phase: "Fırat Üniversitesi",
    role: "Yazılım Mühendisliği · 4. sınıf",
    highlight: "Lisans öğrencisi",
    story: "Fırat Üniversitesi Yazılım Mühendisliği bölümünde 4. sınıf öğrencisiyim.",
  },
  {
    year: "günümüz",
    phase: "Edict",
    role: "Stajyer",
    highlight: "Staj devam ediyor",
    story: "Edict'te stajyerim. Staj sürüyor.",
  },
  {
    year: "günümüz",
    phase: "FUTURE",
    role: "Kurucu ve başkan",
    highlight: "Öğrenci topluluğu",
    story: "FUTURE öğrenci topluluğunun kurucusu ve başkanıyım.",
  },
  {
    year: "günümüz",
    phase: "TÜBİTAK",
    role: "Proje başvuruları",
    highlight: "Başvurular devam ediyor",
    story: "TÜBİTAK proje başvuruları üzerinde çalışıyorum. Süreç devam ediyor.",
  },
  {
    year: "günümüz",
    phase: "Türkçe yapay zekâ içerikleri",
    role: "İçerik üreticisi",
    highlight: "YouTube · İKG · yazilim.dev.io",
    story: "YouTube'da İKG kanalında ve Instagram'da yazilim.dev.io hesabında Türkçe yapay zekâ kodlama ajanları içeriği üretiyorum.",
  },
];

export const ARCHITECTURE_PRESETS = [
  {
    id: "saas",
    name: "Modern SaaS Platformu",
    icon: "Layers",
    description: "Çok kiracılı (multi-tenant), abonelik yönetimli ve anlık güncellemeli platform.",
    frontend: "Next.js 16 + Tailwind CSS + React Flow",
    backend: "Node.js / TypeScript + Server Actions",
    database: "PostgreSQL + Prisma ORM + Redis Cache",
    infra: "Docker + Vercel + AWS S3",
    latency: "< 85ms",
    scale: "100k+ Aktif Kullanıcı",
    sampleMsg: "Merhaba İbrahim, ölçeklenebilir ve modern bir SaaS platformu geliştirmek istiyoruz. Mimari kurgu ve geliştirme süreci için görüşmek isterim."
  },
  {
    id: "realtime",
    name: "Gerçek Zamanlı Veri & Analitik",
    icon: "Activity",
    description: "Yoğun telemetri sinyali işlemeyi hedefleyen yüksek hızlı akış motoru.",
    frontend: "React + TanStack Query + ECharts",
    backend: "Go (Golang) + WebSockets / gRPC",
    database: "TimescaleDB + Redis Streams",
    infra: "Kubernetes + Kafka + Prometheus",
    latency: "< 15ms",
    scale: "50k Sinyal / sn",
    sampleMsg: "Merhaba İbrahim, gerçek zamanlı veri akışı ve anlık dashboard içeren yüksek performanslı bir sistem ihtiyacımız var. Detayları değerlendirebilir miyiz?"
  },
  {
    id: "ecommerce",
    name: "Headless E-Ticaret & Katalog",
    icon: "ShoppingBag",
    description: "Hızlı açılış süresini hedefleyen, dönüşüm odaklı bir mağaza kurgusu.",
    frontend: "Next.js App Router + Framer Motion + Edge Cache",
    backend: "NestJS / GraphQL API + Stripe Engine",
    database: "PostgreSQL + Algolia Search + Redis",
    infra: "Cloudflare Edge + Docker Swarm",
    latency: "< 120ms (Küresel CDN)",
    scale: "500k+ Aylık Ziyaretçi",
    sampleMsg: "Merhaba İbrahim, ultra hızlı ve modern tasarımlı headless bir e-ticaret altyapısı kurmak istiyoruz. Projemiz için bir araya gelebilir miyiz?"
  },
  {
    id: "ai-tool",
    name: "AI Orkestrasyon & Ajan Sistemi",
    icon: "Cpu",
    description: "LLM modelleri, vektör arama ve iş akışı otomasyonu içeren akıllı ajanlar.",
    frontend: "Next.js + Vercel AI SDK + Markdown Renderer",
    backend: "FastAPI (Python) + LangChain / LlamaIndex",
    database: "pgvector (PostgreSQL) + Pinecone + Redis",
    infra: "Modal / RunPod + Docker + GitHub Actions",
    latency: "Anlık token akışı",
    scale: "İş parçacığı hedefi senaryoya göre",
    sampleMsg: "Merhaba İbrahim, LLM ve vektör arama entegrasyonlu bir yapay zeka ürünü geliştirmeyi planlıyoruz. Teknik mimari ve danışmanlık için iletişime geçmek istedim."
  }
];

export const SERVICES = [
  {
    id: "yapay-zeka-asistani",
    title: "Yapay zekâ asistanı",
    description: "İşletmeye özel sohbet ve randevu asistanı. Soruları yanıtlayan, randevu talebini toplayan bir asistan için kapsam birlikte netleştirilir.",
    konu: "Yapay zekâ asistanı",
  },
  {
    id: "is-akisi-otomasyonu",
    title: "İş akışı otomasyonu",
    description: "Tekrarlayan adımları birbirine bağlayan otomasyon: form, bildirim ve takip aynı akışta toplansın diye konuşulur.",
    konu: "İş akışı otomasyonu",
  },
  {
    id: "web-sitesi",
    title: "Web sitesi / web uygulaması",
    description: "Tanıtım sitesi ya da günlük işi taşıyan bir web uygulaması. Kapsam ve teslim biçimi iletişimde belirlenir.",
    konu: "Web sitesi / web uygulaması",
  },
];
