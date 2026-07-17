import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { PaperCanvas } from "../components/notebook/PaperCanvas";
import { ThemeToggle } from "../components/notebook/ThemeToggle";

function TornPage() {
  return (
    <svg
      viewBox="0 0 400 20"
      preserveAspectRatio="none"
      className="h-4 w-full"
      aria-hidden="true"
    >
      <path
        d="M0,0 L20,12 L40,4 L60,14 L80,6 L100,15 L120,3 L140,13 L160,5 L180,14 L200,4 L220,12 L240,6 L260,15 L280,4 L300,13 L320,5 L340,14 L360,4 L380,12 L400,6 L400,0 Z"
        fill="var(--paper)"
        stroke="var(--rule)"
        strokeWidth="1"
      />
    </svg>
  );
}

function NotFoundComponent() {
  return (
    <PaperCanvas>
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16">
        <div className="w-full overflow-hidden rounded-md border border-[var(--rule)] bg-[var(--paper)] shadow-sm">
          <TornPage />
          <div className="px-8 py-12 text-center">
            <p className="ink-hand text-5xl text-[var(--ink)]">404</p>
            <p className="ink-hand mt-2 text-2xl text-[var(--ink-muted)]">
              this page was torn out
            </p>
            <p className="mt-4 text-sm text-[var(--ink-muted)]">
              The corner is missing. Nothing left to read here.
            </p>
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)] px-5 py-2 text-sm text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
              >
                ← Back to cover
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PaperCanvas>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <PaperCanvas>
      <div className="mx-auto flex min-h-screen max-w-xl items-center justify-center px-6">
        <div className="w-full rounded-md border border-[var(--rule)] bg-[var(--paper)] p-8 text-center shadow-sm">
          <p className="ink-hand text-3xl text-[var(--ink)]">a smudge on the page</p>
          <p className="mt-3 text-sm text-[var(--ink-muted)]">
            Something didn't render. Try again or head back.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => { router.invalidate(); reset(); }}
              className="rounded-full border border-[var(--ink)] px-4 py-2 text-sm hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
            >
              Try again
            </button>
            <a href="/" className="rounded-full border border-[var(--rule)] px-4 py-2 text-sm text-[var(--ink-muted)] hover:text-[var(--ink)]">Go home</a>
          </div>
        </div>
      </div>
    </PaperCanvas>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Prem Patel — Lead Android Engineer" },
      { name: "description", content: "Notebook portfolio of Prem Patel — Lead Android Engineer, BLE & offline maps specialist, DevOps and self-hosting enthusiast based in Ahmedabad." },
      { name: "author", content: "Prem Patel" },
      { property: "og:title", content: "Prem Patel — Lead Android Engineer" },
      { property: "og:description", content: "A dot-grid notebook portfolio: Android, BLE, self-hosted infra." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@pr656d" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Caveat:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}}catch(e){}`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeToggle />
      <Outlet />
    </QueryClientProvider>
  );
}
