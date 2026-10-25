import type { SubmitEvent } from "react";
import { profile } from "@/content";
import { Icon } from "@/shared/icons";
import { buildMailto } from "@/shared/lib/mailto";
import { Button } from "@/shared/ui";

/**
 * Opens the visitor's mail client with a pre-filled letter.
 * To send from the page instead, replace buildMailto with a request to a backend/form service.
 */
export function ContactForm() {
  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name"));
    window.location.href = buildMailto(profile.email, {
      subject: `Сообщение с сайта от ${name}`,
      body: `${data.get("message")}\n\n— ${name}, ${data.get("email")}`,
    });
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        <span className="sr-only">Ваше имя</span>
        <input
          name="name"
          placeholder="Ваше имя"
          required
          autoComplete="name"
        />
      </label>
      <label>
        <span className="sr-only">Ваш email</span>
        <input
          name="email"
          type="email"
          placeholder="Ваш email"
          required
          autoComplete="email"
        />
      </label>
      <label>
        <span className="sr-only">Сообщение</span>
        <textarea name="message" placeholder="Сообщение" rows={4} required />
      </label>
      <Button type="submit" block>
        Отправить <Icon name="send" />
      </Button>
    </form>
  );
}
