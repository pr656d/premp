// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Allow the deploy target's Nitro preset to be selected via NITRO_PRESET
  // (e.g. Netlify branch deploys set NITRO_PRESET=netlify in netlify.toml).
  // Inside the Lovable sandbox NITRO_PRESET is unset, so this stays undefined
  // and the wrapper's default Cloudflare behavior is preserved.
  nitro: process.env.NITRO_PRESET
    ? { preset: process.env.NITRO_PRESET }
    : undefined,
});
