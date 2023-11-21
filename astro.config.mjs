import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://musical-pegasus-487492.netlify.app/",
  integrations: [react()]
});