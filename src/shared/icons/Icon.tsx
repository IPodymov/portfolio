import type { SVGProps } from "react";
import { iconRegistry, type IconName } from "./registry";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

export function Icon({ name, ...props }: IconProps) {
  const Component = iconRegistry[name];
  return <Component {...props} />;
}
