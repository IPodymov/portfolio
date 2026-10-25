import { Logo, SocialLinks } from "@/components";
import { navItems, profile } from "@/content";
import { Icon } from "@/shared/icons";
import { Button } from "@/shared/ui";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>Строю веб от базы данных до интерфейса.</p>
        </div>
        <div>
          <h4>Навигация</h4>
          <ul className="footer-links">
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Я в сети</h4>
          <SocialLinks />
          <p className="footer-accent">
            Открыт к предложениям о работе.
            <br />
            Давайте создадим что-то крутое!
          </p>
        </div>
        <div>
          <h4>YouTube-канал</h4>
          <p>Рассказываю о разработке и проектах на своём канале.</p>
          <Button href={profile.youtube}>
            Смотреть <Icon name="youtube" />
          </Button>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.fullName}. Все права защищены.
        </span>
        <span>Сделано на React + Vite</span>
      </div>
    </footer>
  );
}
