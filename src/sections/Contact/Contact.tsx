import { profile, sectionIds } from "@/content";
import { Icon } from "@/shared/icons";
import { ExternalLink, Section, SectionHeading } from "@/shared/ui";
import { ContactForm } from "./ContactForm";
import { Principles } from "./Principles";
import "./Contact.css";

export function Contact() {
  return (
    <Section id={sectionIds.contact} containerClassName="contact-inner">
      <Principles />
      <div className="contact-main">
        <div className="contact-info">
          <SectionHeading
            eyebrow="Давайте работать вместе"
            title="Связаться со мной"
          />
          <p>
            Есть проект или идея? Напишите — отвечу и обсудим, как её
            реализовать.
          </p>
          <ul>
            <li>
              <Icon name="mail" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Icon name="telegram" />
              <ExternalLink href={profile.telegram.url}>
                {profile.telegram.handle}
              </ExternalLink>
            </li>
            <li>
              <Icon name="pin" />
              {profile.location}
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
