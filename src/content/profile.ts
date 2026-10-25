import type { Fact, Profile, SocialLink } from "./types";

export const profile: Profile = {
  firstName: "Ivan",
  lastName: "Podymov",
  fullName: "Иван Подымов",
  role: "Fullstack Developer",
  tagline:
    "Создаю веб-приложения целиком: от схемы базы данных и контракта API до интерфейса и деплоя.",
  location: "Москва, Россия",
  email: "podymovv55@gmail.com",
  telegram: { url: "https://t.me/ipodymov", handle: "@ipodymov" },
  youtube: "https://www.youtube.com/@ipodymov",
  github: "https://github.com/IPodymov",
  avatar: "https://avatars.githubusercontent.com/u/245177356?v=4",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "Telegram", href: profile.telegram.url, icon: "telegram" },
  { label: "YouTube", href: profile.youtube, icon: "youtube" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const aboutFacts: Fact[] = [
  { label: "Имя", value: profile.fullName, icon: "user" },
  { label: "Специализация", value: "Fullstack", icon: "briefcase" },
  {
    label: "Email",
    value: profile.email,
    icon: "mail",
    href: `mailto:${profile.email}`,
  },
  { label: "Локация", value: profile.location, icon: "pin" },
  { label: "Статус", value: "Открыт к предложениям", icon: "globe" },
  {
    label: "Telegram",
    value: profile.telegram.handle,
    icon: "telegram",
    href: profile.telegram.url,
  },
];
