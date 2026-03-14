export const profile = {
  name: "Danila Lonski",
  title: "Backend Engineer · Node.js / NestJS / TypeScript",
  location: "Minsk, Belarus",
  email: "daanicccch@gmail.com",
  telegram: "@daanicccch",
  github: "daanicccch",
  phone: "+375 29 622-13-52",
  linkedin: "daanicccch",
  resumeUrl:
    "https://docs.google.com/document/d/1TSsOeZJvwGnppQqiHrcBS-igNkrjenPgfkHZBr2-0G0/edit?tab=t.0",
  summary:
    "Backend engineer with 2+ years in production. Built 8+ systems from 0 to launch — payments, blockchain, highload gaming (50k+ users, up to 10k tx/day). Led backend teams of 4–6, owned architecture and infra end-to-end. Stack: Node.js / NestJS / TypeScript, microservices, event-driven. Open to remote.",
  about: [
    "Backend engineer based in Minsk, Belarus — open to remote or relocation. I specialize in building production-ready systems from scratch: microservice architectures, event-driven pipelines, and high-load APIs.",
    "2+ years of commercial experience across gaming, fintech, and SaaS — shipped 8+ systems to production. Led backend teams of 4–6, owned architecture and infra end-to-end.",
    "Core stack: Node.js / NestJS / TypeScript, microservices with RabbitMQ and Kafka, PostgreSQL + Redis, Docker. I care about clean architecture, DDD, and systems that scale.",
  ],
} as const;

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  subLogos?: { name: string; logo: string }[];
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    role: "Backend Lead & Co-Founder",
    company: "linki.top",
    companyUrl: "https://linki.top",
    logo: "/logos/linki.jpg",
    period: "Nov 2024 — Present",
    description: "Telegram Mini App constructor platform — co-founder and backend lead, fully owned backend architecture and development",
    bullets: [
      "Co-founded and built the entire backend solo in ~2–3 months (0→1): NestJS microservices, DDD, Clean Architecture — from API design to production deployment on Docker (AWS/GCP)",
      "Scaled the platform to 10+ active clubs with ~800 users and recurring subscriptions via CloudPayments (webhooks, refunds, billing cycles)",
      "Led backend team as project scaled: task decomposition, code review, onboarding of 4–6 developers",
      "Built Telegram Mini App with InitData auth and full Bot API integration",
    ],
    tags: ["NestJS", "TypeScript", "DDD", "Docker", "CloudPayments", "Telegram Bot API", "AWS/GCP"],
  },
  {
    role: "Backend Developer",
    company: "Beton (via teleport.top)",
    companyUrl: "https://t.me/betonproject_bot",
    logo: "/logos/beton.jpg",
    period: "Sep 2024 — Present",
    description: "Highload Telegram gaming platform, Asian market",
    bullets: [
      "Backend lead on a high-load platform — 50k+ users, 1k–10k transactions/day",
      "Integrated TON blockchain (TONAPI, TONCenter) and wrote smart contracts — transaction processing, wallet interactions, on-chain data",
      "Built real-time infrastructure: WebSocket connections, live game data feeds, external API integrations",
      "Optimized PostgreSQL + Redis for production load; configured automated backups and migration workflows",
      "Built auth system: 2FA, OAuth2, password recovery, rate limiting",
      "Implemented localization system for Asian market; set up Sentry and MixPanel for monitoring and analytics",
      "Owned full infrastructure: Docker, Nginx, CI/CD pipelines",
    ],
    tags: ["NestJS", "TypeScript", "TON Blockchain", "WebSocket", "PostgreSQL", "Redis", "Docker"],
  },
  {
    role: "Backend Developer",
    company: "teleport.top",
    companyUrl: "https://teleport.top",
    logo: "/logos/teleport.jpg",
    subLogos: [
      { name: "Priority Motion", logo: "/logos/priority_motion.png" },
      { name: "Raketa", logo: "/logos/raketa.png" },
      { name: "Eventor", logo: "/logos/eventor.jpg" },
    ],
    period: "Oct 2024 — Present",
    description: "Backend lead across 10+ Telegram-based and web products",
    bullets: [
      "Priority Motion: built loyalty and rewards platform for a multi-location business network (30+ locations, 10k+ users); implemented points engine, payment integrations, and cross-location data architecture from 0 to production",
      "Raketa & Fizika: Backend lead — designed and built event management platform with ticketing, QR check-in, and RBAC from scratch; 10k+ tickets processed, deployed for 2 B2B clients",
      "Eventor: built API and real-time infrastructure for a cross-platform event app (web + multiple messengers); implemented WebSocket, push notifications, and broadcast messaging via message queues to large audiences",
      "Delivered 3 production backends within ~6 months",
    ],
    tags: ["NestJS", "TypeScript", "WebSocket", "RabbitMQ", "PostgreSQL", "Redis", "Telegram"],
  },
  {
    role: "Backend Developer",
    company: "artu.studio",
    companyUrl: "https://artu.studio",
    logo: "/logos/artu.jpg",
    period: "Sep 2023 — Oct 2024",
    description: "Product company — Telegram Mini App platforms and web products development",
    bullets: [
      "Designed microservice architecture on NestJS + TypeScript from scratch — DDD, Clean Architecture, event-driven communication via RabbitMQ and Kafka",
      "Owned the full data layer: PostgreSQL and MySQL schema design, complex query optimization, Redis",
      "Built and owned full infrastructure (Docker, Nginx, CI/CD) — reduced deploy time from manual to ~5 min automated pipeline",
      "Integrated multiple payment providers (Stripe, CloudPayments, T-Kassa) with webhook handling, refunds and recurring billing; built Telegram Mini App and Bot with InitData authentication",
      "Implemented security layer: JWT, OAuth2, 2FA/OTP, Helmet, CORS, rate limiting; maintained Swagger/OpenAPI docs and S3-compatible file storage",
    ],
    tags: ["NestJS", "TypeScript", "RabbitMQ", "Kafka", "PostgreSQL", "MySQL", "Redis", "Stripe", "Docker"],
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    icon: "code",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "NestJS", level: 92 },
      { name: "TypeScript", level: 90 },
      { name: "Express", level: 80 },
      { name: "REST API / WebSocket", level: 88 },
    ],
  },
  {
    title: "Databases & Messaging",
    icon: "database",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "RabbitMQ / Kafka", level: 78 },
      { name: "Prisma / Sequelize", level: 80 },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    icon: "devops",
    skills: [
      { name: "Docker / Compose", level: 90 },
      { name: "Nginx", level: 82 },
      { name: "GitHub Actions / GitLab CI", level: 82 },
      { name: "Kubernetes", level: 68 },
      { name: "S3 / AWS / GCP", level: 75 },
    ],
  },
  {
    title: "Blockchain & Security",
    icon: "practices",
    skills: [
      { name: "TON / TONAPI / TONCenter", level: 80 },
      { name: "Smart Contracts (TON)", level: 72 },
      { name: "JWT / OAuth2 / 2FA", level: 88 },
      { name: "Telegram InitData Auth", level: 90 },
      { name: "DDD / Clean Architecture", level: 85 },
    ],
  },
];

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor's Degree — IT Systems and Technologies",
    school: "Belarusian National Technical University (BNTU)",
    period: "July 2022 — Present (Expected July 2026)",
    description: "Minsk, Belarus. Focus on IT systems, software engineering, and technologies.",
  },
];
