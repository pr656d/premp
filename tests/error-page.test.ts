// When SSR breaks, visitors must get the notebook's error page, not a JSON 500.
import { beforeEach, describe, expect, it, vi } from "vitest";

const upstream = vi.hoisted(() => ({ fetch: vi.fn<() => Promise<Response>>() }));
vi.mock("@tanstack/react-start/server-entry", () => ({ default: upstream }));

const { default: server } = await import("@/server");
const get = () => server.fetch(new Request("https://premp.in/about"), {}, {});

describe("server error fallback", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("passes healthy pages through untouched", async () => {
    upstream.fetch.mockResolvedValue(new Response("<html>ok</html>", { status: 200 }));
    const res = await get();
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("<html>ok</html>");
  });

  it("turns a swallowed SSR error into the HTML error page", async () => {
    upstream.fetch.mockResolvedValue(
      Response.json({ unhandled: true, message: "HTTPError" }, { status: 500 }),
    );
    const res = await get();
    expect(res.status).toBe(500);
    expect(res.headers.get("content-type")).toContain("text/html");
    expect(await res.text()).toMatch(/<html/i);
  });

  it("serves the error page when the server entry throws", async () => {
    upstream.fetch.mockRejectedValue(new Error("boom"));
    const res = await get();
    expect(res.status).toBe(500);
    expect(res.headers.get("content-type")).toContain("text/html");
  });
});
