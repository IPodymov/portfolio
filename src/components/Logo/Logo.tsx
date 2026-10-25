import { profile, sectionIds } from "@/content";
import "./Logo.css";

export function Logo() {
  return (
    <a href={`#${sectionIds.home}`} className="logo" aria-label="На главную">
      <span className="logo-mark" aria-hidden="true">
        {profile.firstName[0]}
        {profile.lastName[0]}
      </span>
      <span className="logo-text">
        {profile.firstName.toUpperCase()}{" "}
        <b>{profile.lastName.toUpperCase()}</b>
      </span>
    </a>
  );
}
