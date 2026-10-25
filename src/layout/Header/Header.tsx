import { useState } from "react";
import { Logo } from "@/components";
import { navItems, profile } from "@/content";
import { useActiveSection } from "@/shared/hooks/useActiveSection";
import { Icon } from "@/shared/icons";
import { cx } from "@/shared/lib/cx";
import { Button } from "@/shared/ui";
import "./Header.css";

const navIds = navItems.map(({ id }) => id);

export function Header() {
  const active = useActiveSection(navIds);
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Logo />
        <nav
          className={cx("nav", open && "open")}
          aria-label="Основная навигация"
        >
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={cx(active === id && "active")}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <Button
          variant="outline"
          className="header-cta"
          href={profile.telegram.url}
        >
          Написать <Icon name="send" />
        </Button>
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
