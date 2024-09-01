import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://elishamutang.netlify.app/",
  integrations: [preact()],
});
