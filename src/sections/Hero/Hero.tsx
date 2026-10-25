import { SocialLinks } from "@/components";
import { hero, profile, sectionIds } from "@/content";
import { Icon } from "@/shared/icons";
import { Button } from "@/shared/ui";
import "./Hero.css";

export function Hero() {
  return (
    <section id={sectionIds.home} className="hero">
      <pre className="hero-code" aria-hidden="true">
        {hero.code}
      </pre>
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-hello">
            <span aria-hidden="true">👋</span> {hero.greeting}
          </p>
          <h1 className="hero-name">
            {profile.firstName.toUpperCase()}{" "}
            <span>{profile.lastName.toUpperCase()}</span>
          </h1>
          <p className="hero-role">
            {profile.role.toUpperCase()}
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="hero-lead">{profile.tagline}</p>
          <div className="hero-actions">
            <Button href={`#${sectionIds.projects}`}>
              Мои проекты <Icon name="arrowRight" />
            </Button>
            <Button variant="outline" href={profile.github}>
              Профиль GitHub <Icon name="github" />
            </Button>
          </div>
          <div className="hero-find">
            <span>Я в сети</span>
            <SocialLinks />
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-slash" aria-hidden="true" />
          <div className="hero-dots" aria-hidden="true" />
          <img
            className="hero-photo"
            src={profile.avatar}
            alt={profile.fullName}
            width={420}
            height={420}
          />
          <div className="hero-badge">
            <strong>{hero.badge.value}</strong>
            <span>
              {hero.badge.label[0]}
              <br />
              {hero.badge.label[1]}
            </span>
            <Icon name="code" />
          </div>
        </div>
      </div>
    </section>
  );
}
