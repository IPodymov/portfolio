import { socialLinks } from "@/content";
import { Icon } from "@/shared/icons";
import { ExternalLink } from "@/shared/ui";
import "./SocialLinks.css";

export function SocialLinks() {
  return (
    <ul className="social-links">
      {socialLinks.map(({ label, href, icon }) => (
        <li key={label}>
          <ExternalLink href={href} aria-label={label}>
            <Icon name={icon} />
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}
