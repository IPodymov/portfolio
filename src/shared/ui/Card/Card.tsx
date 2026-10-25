import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/shared/lib/cx";
import "./Card.css";

type CardProps = {
  as?: "article" | "div" | "figure";
  interactive?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Card({
  as: Tag = "div",
  interactive = false,
  className,
  ...props
}: CardProps) {
  return (
    <Tag
      className={cx("card", interactive && "card-interactive", className)}
      {...props}
    />
  );
}
