# Portfolio — Иван Подымов

Сайт-визитка fullstack-разработчика. React 19 + TypeScript + Vite, без UI-библиотек: стили на чистом CSS с дизайн-токенами.

```sh
npm install
npm run dev           # dev-сервер
npm run build         # проверка типов + прод-сборка в dist/
npm run lint          # ESLint
npm run format        # Prettier
```

## Архитектура

```
src/
├── main.tsx              точка входа: глобальные стили → <App />
├── app/App.tsx           композиция страницы (порядок секций)
├── styles/               глобальный CSS
│   ├── tokens.css        цвета, шрифты, радиусы, брейкпоинты
│   ├── base.css          reset и базовые стили элементов
│   └── utilities.css     .container, .sr-only
├── content/              ВСЕ данные сайта, типизированные
│   ├── types.ts          типы Profile, Project, Service…
│   ├── profile.ts        контакты, соцсети, факты «Обо мне»
│   ├── navigation.ts     id секций и пункты меню
│   ├── hero.ts, services.ts, stack.ts, projects.ts, stats.ts, principles.ts
│   └── index.ts
├── shared/               переиспользуемое, НЕ знает о контенте
│   ├── ui/               Button, Card, IconBadge, Section, SectionHeading, ExternalLink
│   ├── icons/            SVG-иконки + реестр имён (<Icon name="github" />)
│   ├── hooks/            useActiveSection
│   └── lib/              cx, buildMailto, isExternalUrl
├── components/           общие блоки, завязанные на контент: Logo, SocialLinks
├── layout/               Header, Footer
└── sections/             секции страницы: Hero, About, Services, Skills, Projects, Stats, Contact
```

### Слои и правило зависимостей

Импорт разрешён только «вниз» по списку:

```
app → sections / layout → components → content → shared
```

- `shared` ничего не импортирует из проекта (кроме самого `shared`): его можно перенести в другой проект.
- `content` — только данные и типы, без JSX. Ссылается на иконки по имени (`IconName`).
- Секции не импортируют друг друга. Общее между ними поднимается в `components` или `shared/ui`.

### Соглашения

- **Компонент = папка**: `Name.tsx` + `Name.css` + `index.ts`. Подкомпоненты, нужные только одной секции, лежат рядом (`Projects/ProjectCard.tsx`).
- **Импорты** через алиас `@/` (`@/shared/ui`, `@/content`) и через `index.ts` папки.
- **CSS**: обычные глобальные классы с префиксом компонента (`.hero-*`, `.project-*`), значения — только из `tokens.css`. Медиа-запросы пишутся в CSS самого компонента; брейкпоинты: 1100 / 960 / 640px.
- **Якоря** берутся из `sectionIds` (`content/navigation.ts`), строковые id в разметке не пишем.

## Как расширять

| Задача                                     | Где менять                                                                                                                    |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Добавить проект, услугу, технологию, цифру | соответствующий файл в `content/`                                                                                             |
| Сменить фото, контакты, соцсети            | `content/profile.ts`                                                                                                          |
| Поменять цвета / шрифты                    | `styles/tokens.css` (шрифты подключены в `index.html`)                                                                        |
| Новая иконка                               | нарисовать в `shared/icons/icons.tsx`, зарегистрировать в `registry.ts`                                                       |
| Новая секция                               | `sections/Name/` → экспорт в `sections/index.ts` → добавить в `app/App.tsx`; для пункта меню — id в `sectionIds` и `navItems` |

### Возможные следующие шаги

- **Несколько страниц** (блог, страница проекта): добавить роутер и папку `src/pages/`; текущая страница станет `pages/Home`, секции останутся переиспользуемыми.
- **Мультиязычность**: тексты заголовков секций перенести в `content/`, затем разложить `content/` по локалям (`content/ru`, `content/en`).
- **Данные с GitHub API** (число репозиториев, звёзды): заменить статичные значения в `content/stats.ts` на загрузку в хуке из `shared/hooks`.
- **Отправка формы без почтового клиента**: заменить `buildMailto` в `ContactForm` запросом к serverless-функции или форм-сервису.
- **Тесты**: Vitest + Testing Library, файлы `Name.test.tsx` рядом с компонентом.
