import { profile, projects, sectionIds } from "@/content";
import { Icon } from "@/shared/icons";
import { ExternalLink, Section, SectionHeading } from "@/shared/ui";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

const githubHost = new URL(profile.github);

export function Projects() {
  return (
    <Section id={sectionIds.projects} className="projects">
      <header className="projects-head">
        <SectionHeading eyebrow="Избранные проекты" title="Мои работы" />
        <ExternalLink
          className="link-arrow"
          href={`${profile.github}?tab=repositories`}
        >
          Все репозитории <Icon name="arrowRight" />
        </ExternalLink>
      </header>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            fallbackHost={`${githubHost.host}${githubHost.pathname}/${project.slug}`}
          />
        ))}
      </div>
    </Section>
  );
}
