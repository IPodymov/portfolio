import { useState, type SubmitEvent } from "react";
import { contactForm } from "@/content";
import { Icon } from "@/shared/icons";
import { cx } from "@/shared/lib/cx";
import { buildMailto } from "@/shared/lib/mailto";
import { Button } from "@/shared/ui";
import { buildContactLetterBody } from "./contactLetter";
import { messengers, type MessengerId } from "./messengers";

/**
 * Opens the visitor's mail client with a letter already addressed to `contactForm.recipient`.
 * To send from the page instead, replace buildMailto with a request to a backend/form service.
 */
export function ContactForm() {
  const [messengerId, setMessengerId] = useState<MessengerId>("telegram");
  const messenger = messengers.find(({ id }) => id === messengerId)!;

  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name")).trim();

    window.location.href = buildMailto(contactForm.recipient, {
      subject: `${contactForm.subject}: ${name}`,
      body: buildContactLetterBody({
        name,
        email: String(data.get("email")).trim(),
        message: String(data.get("message")),
        messenger,
        messengerValue: String(data.get("messenger")),
      }),
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
        <span className="sr-only">Email для ответа</span>
        <input
          name="email"
          type="email"
          placeholder="Email для ответа"
          required
          autoComplete="email"
        />
      </label>
      <fieldset className="messenger-field">
        <legend className="sr-only">
          Telegram или WhatsApp для связи (необязательно)
        </legend>
        <div className="messenger-switch">
          {messengers.map(({ id, label, icon }) => (
            <label
              key={id}
              className={cx(id === messengerId && "active")}
              title={label}
            >
              <input
                type="radio"
                name="messengerType"
                value={id}
                className="sr-only"
                checked={id === messengerId}
                onChange={() => setMessengerId(id)}
              />
              <Icon name={icon} />
              <span className="sr-only">{label}</span>
            </label>
          ))}
        </div>
        <label className="messenger-input">
          <span className="sr-only">{messenger.hint}</span>
          <input
            name="messenger"
            placeholder={messenger.placeholder}
            inputMode={messenger.inputMode}
            autoComplete={messenger.autoComplete}
            pattern={messenger.pattern}
            title={messenger.hint}
          />
        </label>
      </fieldset>
      <label>
        <span className="sr-only">Сообщение</span>
        <textarea name="message" placeholder="Сообщение" rows={4} required />
      </label>
      <Button type="submit" block>
        Отправить <Icon name="send" />
      </Button>
      <p className="contact-form-note">
        Письмо откроется в вашем почтовом приложении — адрес{" "}
        <a href={`mailto:${contactForm.recipient}`}>{contactForm.recipient}</a>{" "}
        уже подставлен.
      </p>
    </form>
  );
}
