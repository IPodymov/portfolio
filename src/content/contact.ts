import { profile } from "./profile";
import type { ContactFormConfig } from "./types";

export const contactForm: ContactFormConfig = {
  recipient: profile.email,
  subject: "Сообщение с сайта-портфолио",
};
