import { cx } from "@/shared/lib/cx";
import "./SectionHeading.css";

type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cx("section-heading", `section-heading-${align}`, className)}
    >
      <p className="eyebrow">{eyebrow}</p>
      {title && <h2 className="title">{title}</h2>}
    </div>
  );
}
