import { useState } from "react";
import { principles, profile } from "@/content";
import { Icon } from "@/shared/icons";
import { cx } from "@/shared/lib/cx";
import { Card, SectionHeading } from "@/shared/ui";

export function Principles() {
  const [index, setIndex] = useState(0);
  const count = principles.length;
  const current = principles[index];
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <div className="principles">
      <SectionHeading eyebrow="Подход" title="Как я работаю" />
      <div className="carousel">
        <button
          type="button"
          className="carousel-btn carousel-btn-prev"
          aria-label="Предыдущий"
          onClick={() => go(-1)}
        >
          <Icon name="chevron" />
        </button>
        <Card as="figure" className="quote">
          <Icon name="quote" className="quote-mark" />
          <blockquote aria-live="polite">{current.text}</blockquote>
          <figcaption>
            <img src={profile.avatar} alt="" width={40} height={40} />
            <span>
              <strong>{current.title}</strong>
              <small>
                Принцип {index + 1} из {count}
              </small>
            </span>
          </figcaption>
        </Card>
        <button
          type="button"
          className="carousel-btn"
          aria-label="Следующий"
          onClick={() => go(1)}
        >
          <Icon name="chevron" />
        </button>
      </div>
      <div className="dots">
        {principles.map((p, i) => (
          <button
            key={p.title}
            type="button"
            className={cx(i === index && "active")}
            aria-label={p.title}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
