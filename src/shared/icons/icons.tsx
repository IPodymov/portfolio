import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function Svg(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden="true"
      {...props}
    />
  );
}

export const GithubIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"
    />
  </Svg>
);

export const TelegramIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      d="M21.94 4.3 18.7 19.56c-.24 1.08-.88 1.34-1.78.84l-4.92-3.63-2.37 2.29c-.26.26-.48.48-.99.48l.35-5.02 9.14-8.26c.4-.35-.09-.55-.62-.2L6.2 13.17l-4.86-1.52c-1.06-.33-1.08-1.06.22-1.57L20.55 2.8c.88-.32 1.65.2 1.39 1.5Z"
    />
  </Svg>
);

export const YoutubeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.57A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.13c1.88.57 9.38.57 9.38.57s7.5 0 9.38-.57a3 3 0 0 0 2.12-2.13A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.24 3.6-6.24 3.6Z"
    />
  </Svg>
);

export const WhatsappIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 20.5 4.8 16.4A8.5 8.5 0 1 1 8 19.6l-4.5.9Z" {...stroke} />
    <path
      fill="currentColor"
      d="M9.3 7.6c.3-.3.8-.3 1 .1l.8 1.8c.1.3 0 .6-.2.8l-.6.6c.6 1.2 1.6 2.2 2.8 2.8l.6-.6c.2-.2.5-.3.8-.2l1.8.8c.4.2.4.7.1 1l-.9.9c-.5.5-1.3.6-2 .3-2.3-1-4.1-2.8-5.1-5.1-.3-.7-.2-1.5.3-2l.6-.6Z"
    />
  </Svg>
);

export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" {...stroke} />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" {...stroke} />
  </Svg>
);

export const UserIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="4" {...stroke} />
    <path d="M4 21a8 8 0 0 1 16 0" {...stroke} />
  </Svg>
);

export const BriefcaseIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2" {...stroke} />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" {...stroke} />
  </Svg>
);

export const PinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" {...stroke} />
    <circle cx="12" cy="9" r="2.5" {...stroke} />
  </Svg>
);

export const GlobeIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" {...stroke} />
    <path
      d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z"
      {...stroke}
    />
  </Svg>
);

export const SendIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z" {...stroke} />
  </Svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" {...stroke} />
  </Svg>
);

export const ExternalIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
      {...stroke}
    />
  </Svg>
);

export const ChevronIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m9 5 7 7-7 7" {...stroke} />
  </Svg>
);

export const CodeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" {...stroke} />
  </Svg>
);

export const ServerIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="7" rx="1.5" {...stroke} />
    <rect x="3" y="13" width="18" height="7" rx="1.5" {...stroke} />
    <path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6" {...stroke} />
  </Svg>
);

export const LayoutIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" {...stroke} />
    <path d="M3 9h18M9 9v11" {...stroke} />
  </Svg>
);

export const BotIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="8" width="16" height="12" rx="3" {...stroke} />
    <path d="M12 4v4M9 13v1.5M15 13v1.5M2 13v3M22 13v3" {...stroke} />
    <circle cx="12" cy="3.5" r="1" {...stroke} />
  </Svg>
);

export const RocketIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      d="M5 15c-1.5 1.3-2 4-2 6 2 0 4.7-.5 6-2M9 18l-3-3c1.5-6 6-11 14-12-1 8-6 12.5-12 14Z"
      {...stroke}
    />
    <circle cx="15" cy="9" r="1.8" {...stroke} />
  </Svg>
);

export const RepoIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 4a2 2 0 0 1 2-2h12v16H7a2 2 0 0 0-2 2V4Z" {...stroke} />
    <path d="M5 20a2 2 0 0 0 2 2h12v-4M9 6h6" {...stroke} />
  </Svg>
);

export const CloudIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      d="M7 18h10a4.5 4.5 0 0 0 .6-8.96A6 6 0 0 0 6.2 10.1 4 4 0 0 0 7 18Z"
      {...stroke}
    />
  </Svg>
);

export const LayersIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" {...stroke} />
    <path d="m3 13 9 5 9-5M3 17.5l9 5 9-5" {...stroke} />
  </Svg>
);

export const QuoteIcon = (p: IconProps) => (
  <Svg {...p}>
    <path
      fill="currentColor"
      d="M4 19v-6.5C4 8 6.4 5.2 10 4.5l.8 1.8C8.6 7 7.5 8.7 7.4 11H10v8H4Zm10 0v-6.5c0-4.5 2.4-7.3 6-8l.8 1.8C18.6 7 17.5 8.7 17.4 11H20v8h-6Z"
    />
  </Svg>
);

export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" {...stroke} />
  </Svg>
);

export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" {...stroke} />
  </Svg>
);
