import type { IconName } from "@/shared/icons";

export type Profile = {
  firstName: string;
  lastName: string;
  fullName: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  telegram: { url: string; handle: string };
  youtube: string;
  github: string;
  avatar: string;
};

export type NavItem = { id: string; label: string };

export type SocialLink = { label: string; href: string; icon: IconName };

export type Fact = {
  label: string;
  value: string;
  icon: IconName;
  href?: string;
};

export type Service = { title: string; text: string; icon: IconName };

/** `id` is a skillicons.dev slug: https://github.com/tandpfun/skill-icons#icons-list */
export type Technology = { id: string; name: string };

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
  /** Tints the generated cover. */
  accent: string;
};

export type Stat = { value: string; label: string; icon: IconName };

export type Principle = { title: string; text: string };

export type ContactFormConfig = {
  /** Where letters from the form are addressed. */
  recipient: string;
  subject: string;
};
