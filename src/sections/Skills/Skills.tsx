import { sectionIds, stack } from "@/content";
import { Section, SectionHeading } from "@/shared/ui";
import "./Skills.css";

const iconUrl = (id: string) => `https://skillicons.dev/icons?i=${id}`;

export function Skills() {
  return (
    <Section id={sectionIds.skills} className="skills">
      <SectionHeading eyebrow="Технологический стек" />
      <ul className="stack">
        {stack.map(({ id, name }) => (
          <li key={id}>
            <img
              src={iconUrl(id)}
              alt=""
              width={48}
              height={48}
              loading="lazy"
            />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
