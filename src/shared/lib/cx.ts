/** Joins class names, skipping falsy values: cx("btn", isActive && "active"). */
export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
