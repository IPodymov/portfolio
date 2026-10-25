import type { ReactNode } from "react";
import { cx } from "@/shared/lib/cx";
import "./Section.css";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  "aria-label"?: string;
  children: ReactNode;
};

/** Page section with the standard vertical rhythm, top border and centered container. */
export function Section({
  id,
  className,
  containerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <section id={id} className={cx("section", className)} {...rest}>
      <div className={cx("container", containerClassName)}>{children}</div>
    </section>
  );
}
