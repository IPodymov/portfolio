import { sectionIds, services } from "@/content";
import { Section, SectionHeading } from "@/shared/ui";
import { ServiceCard } from "./ServiceCard";
import "./Services.css";

export function Services() {
  return (
    <Section id={sectionIds.services} className="services">
      <SectionHeading
        eyebrow="Чем я занимаюсь"
        title="Что я предлагаю"
        align="center"
        className="services-heading"
      />
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  );
}
