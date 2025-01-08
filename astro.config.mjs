import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://bitcoinbeachtravemuende.github.io",
  base: "/website",
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
  },
});
