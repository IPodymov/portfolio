import type { NavItem } from "./types";

/** Single source of truth for anchor ids: sections and menu both read from here. */
export const sectionIds = {
  home: "home",
  about: "about",
  services: "services",
  skills: "skills",
  projects: "projects",
  contact: "contact",
} as const;

export const navItems: NavItem[] = [
  { id: sectionIds.home, label: "Главная" },
  { id: sectionIds.about, label: "Обо мне" },
  { id: sectionIds.services, label: "Услуги" },
  { id: sectionIds.skills, label: "Стек" },
  { id: sectionIds.projects, label: "Проекты" },
  { id: sectionIds.contact, label: "Контакты" },
];
