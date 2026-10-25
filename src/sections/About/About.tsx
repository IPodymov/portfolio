import { aboutFacts, profile, sectionIds } from "@/content";
import { ExternalLink, IconBadge, Section, SectionHeading } from "@/shared/ui";
import "./About.css";

export function About() {
  return (
    <Section
      id={sectionIds.about}
      className="about"
      containerClassName="about-inner"
    >
      <div className="about-text">
        <SectionHeading
          eyebrow="Обо мне"
          title="Разработчик, который доводит продукт от идеи до продакшена."
        />
        <p>
          Fullstack-разработчик из Москвы. Строю модульные монолиты с чёткими
          границами слоёв, пишу тесты на реальной базе данных и упаковываю всё в
          Docker, чтобы проект запускался одной командой.
        </p>
        <p className="signature">
          {profile.firstName} {profile.lastName}
        </p>
      </div>
      <ul className="facts">
        {aboutFacts.map(({ icon, label, value, href }) => (
          <li key={label}>
            <IconBadge icon={icon} />
            <span className="fact-body">
              <small>{label}</small>
              {href ? (
                <ExternalLink href={href}>{value}</ExternalLink>
              ) : (
                <span>{value}</span>
              )}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
