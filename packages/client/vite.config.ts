import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.test.ts"],
    coverage: {
      provider: "v8",
      thresholds: {
        lines: 80,
      },
    },
  },
});
