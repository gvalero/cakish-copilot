import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cakish.ie',
  vite: {
    css: { devSourcemap: true },
  },
});
