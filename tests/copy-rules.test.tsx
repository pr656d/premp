// Prem's hard copy rules (premp AGENTS.md → "Copy rules"), checked on what a
// visitor actually sees, so a Lovable edit that breaks one fails the check.
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { PAGES } from "@/components/notebook/PageNav";
import { renderAt } from "./render";

const PATHS = ["/", "/index-page", ...PAGES.map((p) => p.to)];
const PHONE = /\+91[\s-]?\d|\b\d{5}[\s-]?\d{5}\b|\b\d{3}[\s.-]\d{3}[\s.-]\d{4}\b/;
const publicFile = (name: string) => resolve(process.cwd(), "public", name);

describe("copy rules", () => {
  it.each(PATHS)("%s has no phone number, 'OSS' or 'Twitter'", async (path) => {
    await renderAt(path);
    const text = document.body.textContent ?? "";
    expect(text).not.toMatch(PHONE);
    expect(text).not.toMatch(/\bOSS\b/);
    expect(text).not.toMatch(/\bTwitter\b/i);
  });

  it("llms.txt follows the same rules", () => {
    const text = readFileSync(publicFile("llms.txt"), "utf8");
    expect(text).not.toMatch(PHONE);
    expect(text).not.toMatch(/\bOSS\b/);
    expect(text).not.toMatch(/\bTwitter\b/i);
  });

  it("the cover carries no job title and shows the email", async () => {
    await renderAt("/");
    const cover = screen.getByRole("button", { name: "Open notebook" });
    expect(cover.textContent).not.toMatch(/engineer|developer|\blead\b/i);
    expect(cover.querySelector('a[href="mailto:hello@premp.in"]')).not.toBeNull();
  });

  it("contact lists the five brand links, all @pr656d", async () => {
    await renderAt("/contact");
    for (const email of screen.getAllByRole("link", { name: "hello@premp.in" })) {
      expect(email.getAttribute("href")).toBe("mailto:hello@premp.in");
    }
    for (const label of ["GitHub", "LinkedIn", "Mastodon", "X", "LeetCode"]) {
      expect(screen.getByRole("link", { name: label }).getAttribute("href")).toContain("pr656d");
    }
  });

  it("the resume page links to a real PDF", async () => {
    await renderAt("/resume");
    const hrefs = screen.getAllByRole("link").map((a) => a.getAttribute("href"));
    expect(hrefs).toContain("/prem-patel-resume.pdf");
    expect(existsSync(publicFile("prem-patel-resume.pdf"))).toBe(true);
    expect(readFileSync(publicFile("prem-patel-resume.pdf")).subarray(0, 5).toString()).toBe(
      "%PDF-",
    );
  });
});
