import type { IconName } from "@/shared/icons";

export type MessengerId = "telegram" | "whatsapp";

export type Messenger = {
  id: MessengerId;
  label: string;
  icon: IconName;
  placeholder: string;
  inputMode: "text" | "tel";
  autoComplete: string;
  /** HTML `pattern`; escaped so it also compiles under the `v` regex flag browsers use. */
  pattern: string;
  hint: string;
  /** Turns raw input into a readable handle and a clickable link. */
  toContact: (value: string) => { display: string; href: string };
};

export const messengers: Messenger[] = [
  {
    id: "telegram",
    label: "Telegram",
    icon: "telegram",
    placeholder: "Telegram: @username",
    inputMode: "text",
    autoComplete: "off",
    pattern: "(https?://)?(t\\.me/)?@?[A-Za-z0-9_]{5,32}",
    hint: "Username Telegram: 5–32 символа, латиница, цифры и _",
    toContact: (value) => {
      const username = value.trim().replace(/^(https?:\/\/)?(t\.me\/)?@?/, "");
      return { display: `@${username}`, href: `https://t.me/${username}` };
    },
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: "whatsapp",
    placeholder: "WhatsApp: +7 999 123-45-67",
    inputMode: "tel",
    autoComplete: "tel",
    pattern: "\\+?[0-9\\s\\(\\)\\-]{10,20}",
    hint: "Номер телефона с кодом страны, например +7 999 123-45-67",
    toContact: (value) => {
      let digits = value.replace(/\D/g, "");
      // Russian numbers are often typed with a leading 8 instead of +7.
      if (digits.length === 11 && digits.startsWith("8")) {
        digits = `7${digits.slice(1)}`;
      }
      return { display: `+${digits}`, href: `https://wa.me/${digits}` };
    },
  },
];
