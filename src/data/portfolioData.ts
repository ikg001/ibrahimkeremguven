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
  year: string;
  phase: string;
  role: string;
  highlight: string;
  story: string;
  technologies: string[];
}

export const PERSONAL_INFO = {
  name: "İbrahim Kerem Güven",
  title: "Full-Stack Yazılım Geliştirici & Sistem Mimarı",
  tagline: "Kaostan Mimariye, Piksellerden Çekirdeğe.",
  bio: "Kullanıcı deneyiminin en hassas detayından, dağıtık veritabanlarının derin sorgularına kadar; modern, dayanıklı ve hikayesi olan dijital sistemler tasarlıyorum.",
  status: "Yeni Projeler ve İş Birlikleri İçin Müsait",
  location: "Türkiye · Remote / Hibrit",
  email: "iletisim@ibrahimkeremguven.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  stats: [
    { label: "Mühendislik Deneyimi", value: "4+ Yıl", detail: "Sürekli öğrenme ve üretim" },
    { label: "Tamamlanan Proje", value: "25+", detail: "Uçtan uca dijital mimari" },
    { label: "Uptime & Performans", value: "%99.9", detail: "Ölçeklenebilir mikroservisler" },
    { label: "Sub-100ms", value: "<100ms", detail: "Ortalama API yanıt süresi" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "sentinel-core",
    title: "Sentinel Real-Time Data Engine",
    subtitle: "Yüksek Frekanslı Olay & Telemetri İşleme Platformu",
    category: "Backend & Cloud",
    description: "Saniyede on binlerce IoT ve uygulama sinyalini sıfır veri kaybıyla toplayıp gerçek zamanlı görselleştiren dağıtık akış motoru.",
    problem: "Klasik ilişkisel veritabanları eş zamanlı yoğun veri yazma operasyonlarında kilitleniyor ve analiz gecikmesi 4-5 saniyeyi buluyordu.",
    solution: "Kafka ve Redis Streams tabanlı bir tampon katmanı kurularak TimescaleDB üzerinde optimize edilmiş hiper-tablolar oluşturuldu. Webhook ve gRPC servisleriyle anlık izleme paneli geliştirildi.",
    metrics: ["15.000+ Olay/sn Kapasite", "12ms Uçtan Uca Gecikme", "%40 Altyapı Maliyet Tasarrufu"],
    technologies: ["Go", "Node.js", "Redis Streams", "TimescaleDB", "Docker", "Tailwind CSS"],
    liveUrl: "https://example.com/sentinel",
    githubUrl: "https://github.com/example/sentinel",
    featured: true,
    accentColor: "#10B981"
  },
  {
    id: "aurora-studio",
    title: "Aurora Creative SaaS & AI Orchestrator",
    subtitle: "Yeni Nesil İçerik Üretim ve İş Akışı Otomasyonu",
    category: "Full-Stack",
    description: "Kullanıcıların karmaşık çok adımlı AI iş akışlarını düğüm tabanlı (node-based) bir kanvas üzerinde görsel olarak tasarlayıp çalıştırabildiği SaaS platformu.",
    problem: "Kullanıcılar birden fazla LLM servisi (OpenAI, Claude, yerel modeller) arasında manuel kopyala-yapıştır yapıyor ve durum takibini yönetemiyordu.",
    solution: "Next.js App Router üzerinde React Flow ile interaktif bir kanvas inşa edildi. Server-Sent Events (SSE) ile anlık yanıt akışı sağlandı ve güvenli çoklu kiracı (multi-tenant) abonelik sistemi entegre edildi.",
    metrics: ["%98.4 Kullanıcı Memnuniyeti", "3.2x Daha Hızlı İş Akışı", "Zero-Latency Canvas"],
    technologies: ["Next.js", "TypeScript", "React Flow", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveUrl: "https://example.com/aurora",
    githubUrl: "https://github.com/example/aurora",
    featured: true,
    accentColor: "#6366F1"
  },
  {
    id: "hyperion-commerce",
    title: "Hyperion Headless Commerce",
    subtitle: "Ultra Hızlı, Küresel Ölçekte E-Ticaret Deneyimi",
    category: "Frontend",
    description: "100.000+ ürün kataloğunu anlık filtreleme, çevrimdışı sepet desteği ve alt-saniye sayfa geçişleriyle sunan headless mağaza deneyimi.",
    problem: "Geleneksel monolit e-ticaret altyapılarında sayfa yükleme süreleri 3 saniyenin üzerindeydi ve mobilde yüksek sepet terk oranları yaşanıyordu.",
    solution: "Edge computing mimarisi, ISR (Incremental Static Regeneration) ve özel optimizasyonlu algolia arama motoru ile 99+ Lighthouse puanı elde edildi.",
    metrics: ["100/100 Lighthouse Puanı", "350ms FCP Süresi", "%28 Artan Dönüşüm Oranı"],
    technologies: ["Next.js", "React 19", "Tailwind CSS", "Stripe API", "Zustand", "Framer Motion"],
    liveUrl: "https://example.com/hyperion",
    githubUrl: "https://github.com/example/hyperion",
    featured: true,
    accentColor: "#F59E0B"
  },
  {
    id: "synthex-bi",
    title: "Synthex BI & Predictive Analytics",
    subtitle: "Veri Odaklı Karar Destek ve Tahminleme Arayüzü",
    category: "AI & Data",
    description: "İşletmelerin finansal ve operasyonel verilerini akıllı tahmin modelleriyle buluşturan, interaktif grafik motoruna sahip analitik kokpiti.",
    problem: "Excel tablolarına boğulmuş karar vericiler, haftalık raporları beklerken trendleri kaçırıyordu.",
    solution: "Python tabanlı tahminleme mikroservisleri ile modern React dashboard mimarisi entegre edildi. Kullanıcılar doğal dille veri sorgulayabilir hale geldi.",
    metrics: ["12 Kat Hızlı Raporlama", "Doğal Dil Veri Sorgulama", "İnteraktif Canvas Grafikleri"],
    technologies: ["FastAPI", "Python", "TypeScript", "Next.js", "Tailwind CSS", "ECharts"],
    liveUrl: "https://example.com/synthex",
    githubUrl: "https://github.com/example/synthex",
    featured: false,
    accentColor: "#EC4899"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Arayüz & Kullanıcı Deneyimi",
    tagline: "Gözü yormayan, mikrosaniye hızında tepki veren pürüzsüz arayüzler.",
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
    tagline: "Verinin kalıcı, güvenli ve milisaniyeler içinde erişilebilir olması.",
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
    year: "2024 — Günümüz",
    phase: "Mimari Zanaat & Bağımsız Çözümler",
    role: "Kıdemli Full-Stack Geliştirici",
    highlight: "Ölçeklenebilir SaaS mimarileri ve AI destekli ürün geliştirme.",
    story: "Karmaşık iş problemlerini modern web standartlarıyla birleştirerek yüksek performanslı, uçtan uca dijital ürünler geliştirmeye odaklandım. Sistem mimarisini sadece kod bazında değil, iş modeli ve kullanıcı deneyimi bütünlüğü içinde ele alıyorum.",
    technologies: ["Next.js", "TypeScript", "Go", "Docker", "PostgreSQL", "Kafka"]
  },
  {
    year: "2022 — 2024",
    phase: "Derinleşme & Dağıtık Sistemler",
    role: "Full-Stack Web Mühendisi",
    highlight: "Gerçek zamanlı veri akışları ve mikroservis dönüşümleri.",
    story: "Büyük veri kümeleriyle çalışan analitik platformlarında yer aldım. Monolitik yapıların mikroservislere ayrıştırılması, API gateway tasarımları ve alt-saniye veri yanıtlama optimizasyonlarında kritik sorumluluklar üstlendim.",
    technologies: ["React", "Node.js", "Redis", "Docker", "Prisma", "Tailwind CSS"]
  },
  {
    year: "2020 — 2022",
    phase: "Temel Taşlar & Keşif",
    role: "Frontend & Web Geliştirici",
    highlight: "Piksellerin, tarayıcı motorlarının ve temiz kodun felsefesi.",
    story: "Yazılım dünyasına tutkulu bir adımla başladım. Tarayıcı render döngüleri, JavaScript motorlarının çalışma prensipleri ve kusursuz responsive arayüzler geliştirerek sağlam bir temel inşa ettim.",
    technologies: ["JavaScript (ES6+)", "TypeScript", "React", "CSS3 / Sass", "REST APIs"]
  }
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
    description: "Saniyede binlerce telemetri sinyali işleyen yüksek hızlı akış motoru.",
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
    description: "Yüksek dönüşüm odaklı, alt-saniye açılış süresine sahip küresel mağaza.",
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
    latency: "Streaming Anlık Token Akışı",
    scale: "Sınırsız İş Parçacığı",
    sampleMsg: "Merhaba İbrahim, LLM ve vektör arama entegrasyonlu bir yapay zeka ürünü geliştirmeyi planlıyoruz. Teknik mimari ve danışmanlık için iletişime geçmek istedim."
  }
];
