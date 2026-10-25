import type { Service } from "@/content";
import { Card, IconBadge } from "@/shared/ui";

export function ServiceCard({ icon, title, text }: Service) {
  return (
    <Card as="article" interactive className="service-card">
      <IconBadge icon={icon} shape="square" />
      <h3>{title}</h3>
      <p>{text}</p>
    </Card>
  );
}
