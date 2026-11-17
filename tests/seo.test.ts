import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { Route as SitemapRoute } from "@/routes/sitemap[.]xml";
import { newRouter } from "./render";

const SITE = "https://premp.in";
const read = (path: string) => readFileSync(resolve(process.cwd(), path), "utf8");

type Tag = Record<string, string | undefined>;
type Head = { meta?: Tag[]; links?: Tag[] };

/** Every route that renders a page (not the sitemap handler or the root shell). */
function pageRoutes() {
  const router = newRouter();
  return Object.entries(router.routesByPath)
    .filter(([, route]) => route.options.component)
    .map(([path, route]) => ({
      path: path === "/" ? "/" : path.replace(/\/$/, ""),
      head: (route.options.head as (() => Head) | undefined)?.() ?? {},
    }));
}

async function sitemapPaths() {
  const handlers = SitemapRoute.options.server!.handlers as {
    GET: () => Promise<Response>;
  };
  const res = await handlers.GET();
  expect(res.headers.get("content-type")).toBe("application/xml");
  const doc = new DOMParser().parseFromString(await res.text(), "application/xml");
  expect(doc.querySelector("parsererror")).toBeNull();
  return [...doc.querySelectorAll("url > loc")].map((loc) => loc.textContent!.replace(SITE, ""));
}

describe("search and share metadata", () => {
  it.each(pageRoutes().map((r) => [r.path, r] as const))(
    "%s has a title, description and canonical URL",
    (path, { head }) => {
      const meta = (key: string) =>
        head.meta?.find((m) => m.name === key || m.property === key)?.content;
      expect(head.meta?.find((m) => m.title)?.title).toBeTruthy();
      expect(meta("description")).toBeTruthy();
      expect(meta("og:url")).toBe(`${SITE}${path}`);
      expect(head.links?.find((l) => l.rel === "canonical")?.href).toBe(`${SITE}${path}`);
    },
  );

  it("sitemap.xml lists every page, plus llms.txt, and nothing else", async () => {
    const expected = [...pageRoutes().map((r) => r.path), "/llms.txt"].sort();
    expect((await sitemapPaths()).sort()).toEqual(expected);
  });

  it("robots.txt points crawlers at the sitemap", () => {
    expect(read("public/robots.txt")).toContain(`Sitemap: ${SITE}/sitemap.xml`);
  });

  it("legacy Hugo redirects land on pages that exist", async () => {
    const live = new Set([...pageRoutes().map((r) => r.path), "/sitemap.xml"]);
    const targets = [...read("netlify.toml").matchAll(/^\s*to\s*=\s*"([^"]+)"/gm)].map((m) => m[1]);
    expect(targets.length).toBeGreaterThan(0);
    for (const to of targets) expect(live, `redirect target ${to}`).toContain(to);
  });
});
