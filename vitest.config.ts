// Test config is separate from vite.config.ts: the Lovable wrapper there adds
// TanStack Start, Nitro and dev-server plugins that tests don't need.
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  test: {
    environment: "jsdom",
    include: ["tests/**/*.test.{ts,tsx}"],
    setupFiles: ["tests/setup.ts"],
    restoreMocks: true,
  },
});
