import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cx } from "@/shared/lib/cx";
import { isExternalUrl } from "@/shared/lib/url";
import "./Button.css";

type BaseProps = {
  variant?: "primary" | "outline";
  block?: boolean;
  children: ReactNode;
};

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

/** Renders <a> when `href` is passed (external links open in a new tab), <button> otherwise. */
export function Button({
  variant = "primary",
  block = false,
  className,
  ...props
}: LinkProps | NativeButtonProps) {
  const classes = cx("btn", `btn-${variant}`, block && "btn-block", className);

  if (props.href !== undefined) {
    const external = isExternalUrl(props.href)
      ? { target: "_blank", rel: "noreferrer" }
      : {};
    return <a className={classes} {...external} {...(props as LinkProps)} />;
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as NativeButtonProps)}
    />
  );
}
