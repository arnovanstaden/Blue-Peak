import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },
  prefetch: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // path to your scss variables
          additionalData: '@import "src/styles/variables.scss"; @import "src/styles/mixins.scss";'
        }
      }
    }
  },
  site: 'https://www.blue-peak.co.za',
  integrations: [react(), sitemap()]
});