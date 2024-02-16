import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },
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
  integrations: [react()],
});