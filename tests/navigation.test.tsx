import { describe, expect, it } from "vitest";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { PAGES } from "@/components/notebook/PageNav";
import { renderAt } from "./render";

const at = (router: Awaited<ReturnType<typeof renderAt>>["router"]) =>
  router.state.location.pathname;

describe("notebook navigation", () => {
  it("opens the cover into the contents page", async () => {
    const { router } = await renderAt("/");
    fireEvent.click(screen.getByRole("button", { name: "Open notebook" }));
    await waitFor(() => expect(at(router)).toBe("/index-page"));
    expect(await screen.findByRole("heading", { level: 1, name: "Contents" })).toBeTruthy();
  });

  it("lists every page on the contents page", async () => {
    await renderAt("/index-page");
    for (const page of PAGES) {
      const link = screen.getByRole("link", { name: new RegExp(page.label) });
      expect(link.getAttribute("href")).toBe(page.to);
    }
  });

  it.each(PAGES.map((page, i) => [page.to, page, PAGES[i - 1], PAGES[i + 1]] as const))(
    "%s renders its page with prev/next links in book order",
    async (_path, page, prev, next) => {
      await renderAt(page.to);
      expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(page.label);
      expect(screen.queryByText("a smudge on the page")).toBeNull();

      const back = screen.getByRole("link", { name: `← ${prev?.label ?? "Index"}` });
      expect(back.getAttribute("href")).toBe(prev?.to ?? "/index-page");
      if (next) {
        const fwd = screen.getByRole("link", { name: `${next.label} →` });
        expect(fwd.getAttribute("href")).toBe(next.to);
      } else {
        expect(screen.queryByRole("link", { name: /→$/ })).toBeNull();
      }
    },
  );

  it("turns pages with the arrow keys", async () => {
    const { router } = await renderAt("/about");
    fireEvent.keyDown(window, { key: "ArrowRight" });
    await waitFor(() => expect(at(router)).toBe("/experience"));
    fireEvent.keyDown(window, { key: "ArrowLeft" });
    await waitFor(() => expect(at(router)).toBe("/about"));
    fireEvent.keyDown(window, { key: "ArrowLeft" });
    await waitFor(() => expect(at(router)).toBe("/index-page"));
  });

  it("turns pages by tapping the page's outer edges", async () => {
    const { router } = await renderAt("/experience");
    const surface = screen.getByRole("heading", { level: 1 }).closest(".page-scroll")!
      .parentElement!;
    surface.getBoundingClientRect = () => ({ left: 0, width: 1000 }) as DOMRect;

    fireEvent.click(surface, { clientX: 900 });
    await waitFor(() => expect(at(router)).toBe("/projects"));
  });

  it("shows the torn-page 404 for unknown paths", async () => {
    await renderAt("/no-such-page");
    expect(await screen.findByText("this page was torn out")).toBeTruthy();
    expect(screen.getByRole("link", { name: /Back to cover/ }).getAttribute("href")).toBe("/");
  });
});
