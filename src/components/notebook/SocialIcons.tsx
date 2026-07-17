import type { SVGProps } from "react";

const base = "h-5 w-5";

export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props} className={props.className ?? base}>
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.2 9.13 7.64 10.61.56.1.77-.24.77-.54v-1.9c-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.54 0-1.22.44-2.22 1.15-3.01-.11-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.79 1.15 1.79 1.15 3.01 0 4.31-2.62 5.25-5.11 5.53.4.34.76 1.02.76 2.06v3.05c0 .3.2.65.78.54 4.43-1.48 7.63-5.67 7.63-10.61C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props} className={props.className ?? base}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H17.6v-5.35c0-1.28-.02-2.93-1.78-2.93-1.78 0-2.05 1.4-2.05 2.84V21H10V9Z" />
    </svg>
  );
}

export function MastodonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props} className={props.className ?? base}>
      <path d="M21.58 8.28c0-4.4-2.88-5.7-2.88-5.7-1.45-.67-3.94-.95-6.53-.97h-.06c-2.59.02-5.08.3-6.53.97 0 0-2.88 1.3-2.88 5.7 0 1.01-.02 2.21.01 3.48.1 4.29.79 8.53 4.76 9.58 1.83.49 3.4.59 4.67.52 2.3-.13 3.59-.82 3.59-.82l-.08-1.67s-1.64.52-3.49.46c-1.83-.06-3.76-.2-4.06-2.44a4.6 4.6 0 0 1-.04-.62s1.79.44 4.07.54c1.39.07 2.7-.08 4.02-.24 2.54-.3 4.76-1.87 5.04-3.31.44-2.27.41-5.55.41-5.55Zm-3.05 5.08h-1.9V8.7c0-.98-.41-1.48-1.24-1.48-.92 0-1.38.6-1.38 1.78v2.58h-1.89V9c0-1.18-.46-1.78-1.38-1.78-.82 0-1.24.5-1.24 1.48v4.66h-1.9V8.56c0-.98.25-1.76.75-2.34.52-.58 1.2-.87 2.04-.87 1 0 1.76.39 2.24 1.16l.47.8.47-.8c.48-.77 1.24-1.16 2.24-1.16.84 0 1.52.29 2.04.87.5.58.75 1.36.75 2.34v4.8Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props} className={props.className ?? base}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/pr656d", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pr656d", Icon: LinkedInIcon },
  { label: "Mastodon", href: "https://mastodon.social/@pr656d", Icon: MastodonIcon },
  { label: "X", href: "https://x.com/pr656d", Icon: XIcon },
] as const;
