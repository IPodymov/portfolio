import type { Service } from "./types";

export const services: Service[] = [
  {
    icon: "server",
    title: "Backend-разработка",
    text: "API на Go (chi, pgx, Gin) и Python (Django, DRF, Celery): модульные монолиты с чёткими границами слоёв.",
  },
  {
    icon: "layout",
    title: "Frontend-разработка",
    text: "Интерфейсы на React, Next.js и Vue 3 с типизированным клиентом, сгенерированным из OpenAPI.",
  },
  {
    icon: "bot",
    title: "Telegram-боты",
    text: "Боты на grammY и aiogram с очередями (BullMQ, Taskiq), Redis, PostgreSQL и rate limiting.",
  },
  {
    icon: "rocket",
    title: "DevOps и деплой",
    text: "Docker Compose, GitHub Actions, CodeQL; выкладка на Vercel, Railway и Neon с воспроизводимым окружением.",
  },
];
