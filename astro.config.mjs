import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gvalero.github.io',
  base: '/cakish-copilot',
  vite: {
    css: { devSourcemap: true },
  },
});
