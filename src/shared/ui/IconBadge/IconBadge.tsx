import { Icon, type IconName } from "@/shared/icons";
import { cx } from "@/shared/lib/cx";
import "./IconBadge.css";

type IconBadgeProps = {
  icon: IconName;
  shape?: "round" | "square";
};

export function IconBadge({ icon, shape = "round" }: IconBadgeProps) {
  return (
    <span className={cx("icon-badge", `icon-badge-${shape}`)}>
      <Icon name={icon} />
    </span>
  );
}
