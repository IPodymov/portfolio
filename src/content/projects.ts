import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "blog-api",
    title: "Blog REST API",
    description:
      "Модульный монолит на Go: PostgreSQL, chi, pgx, slog. Контракт OpenAPI, Swagger UI, деплой на Vercel + Neon.",
    tags: ["Go", "PostgreSQL", "OpenAPI"],
    repo: "https://github.com/IPodymov/blog-api",
    demo: "https://blog-api-zeta-green.vercel.app",
    accent: "#00add8",
  },
  {
    slug: "visualiser",
    title: "Curricula Visualiser",
    description:
      "Визуализация учебных планов: монорепозиторий с backend на Node.js + Prisma и frontend на Vite, тесты на Vitest.",
    tags: ["TypeScript", "Prisma", "Vitest"],
    repo: "https://github.com/IPodymov/visualiser",
    demo: "https://eplans.vercel.app/",
    accent: "#3178c6",
  },
  {
    slug: "lms-system-medical",
    title: "МедЛМС",
    description:
      "LMS для медицинского университета: Django SSR, REST API, realtime-чат на Channels, Redis и Celery в Docker.",
    tags: ["Django", "Channels", "Celery"],
    repo: "https://github.com/IPodymov/lms-system-medical",
    demo: "https://lms-system-medical.vercel.app",
    accent: "#44b78b",
  },
  {
    slug: "pd-projects-platform",
    title: "Инженеры будущего",
    description:
      "Образовательная платформа: Vue 3 + Pinia + PrimeVue, Django + DRF, PostgreSQL, Celery и приватное S3-хранилище.",
    tags: ["Vue 3", "DRF", "S3"],
    repo: "https://github.com/IPodymov/pd-projects-platform",
    accent: "#42b883",
  },
  {
    slug: "music-bot",
    title: "Telegram Music Resolver",
    description:
      "Бот сопоставляет треки из Spotify, Apple Music, Deezer и др. по ISRC и metadata; PostgreSQL, Redis, BullMQ.",
    tags: ["TypeScript", "grammY", "BullMQ"],
    repo: "https://github.com/IPodymov/music-bot",
    accent: "#1db954",
  },
  {
    slug: "med-app-helper",
    title: "МедИИ",
    description:
      "Локальный ИИ-ассистент по симптомам: потоковые ответы модели Ollama в Docker, адаптивный интерфейс.",
    tags: ["JavaScript", "Ollama", "Docker"],
    repo: "https://github.com/IPodymov/med-app-helper",
    accent: "#ff5a1f",
  },
];
