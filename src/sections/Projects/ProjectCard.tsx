import type { CSSProperties } from "react";
import type { Project } from "@/content";
import { Icon } from "@/shared/icons";
import { Card, ExternalLink } from "@/shared/ui";

type ProjectCardProps = {
  project: Project;
  /** Shown in the fake address bar when the project has no demo. */
  fallbackHost: string;
};

export function ProjectCard({ project, fallbackHost }: ProjectCardProps) {
  const { title, description, tags, repo, demo, accent } = project;
  const address = demo ? new URL(demo).host : fallbackHost;

  return (
    <Card
      as="article"
      interactive
      className="project-card"
      style={{ "--project-accent": accent } as CSSProperties}
    >
      <div className="project-cover">
        <div className="window-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>{address}</span>
        </div>
        <div className="project-cover-body">
          <strong>{title}</strong>
          <ul className="tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="project-body">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="project-links">
          <ExternalLink href={repo} aria-label={`Код ${title} на GitHub`}>
            <Icon name="github" />
          </ExternalLink>
          {demo && (
            <ExternalLink href={demo} aria-label={`Открыть демо ${title}`}>
              <Icon name="external" />
            </ExternalLink>
          )}
        </div>
      </div>
    </Card>
  );
}
