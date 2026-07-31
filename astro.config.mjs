import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://orenneumann.github.io",
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
      wrap: true,
    },
  },
});
