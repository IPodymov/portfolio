import type { Messenger } from "./messengers";

export type ContactLetterFields = {
  name: string;
  email: string;
  message: string;
  messenger: Messenger;
  messengerValue: string;
};

/** Letter body: the visitor's message followed by a block of their contact details. */
export function buildContactLetterBody({
  name,
  email,
  message,
  messenger,
  messengerValue,
}: ContactLetterFields) {
  const contacts = [`Имя: ${name}`, `Email для ответа: ${email}`];

  if (messengerValue.trim()) {
    const { display, href } = messenger.toContact(messengerValue);
    contacts.push(`${messenger.label}: ${display} — ${href}`);
  }

  return [message.trim(), "", "—", "Контакты для связи:", ...contacts].join(
    "\n",
  );
}
