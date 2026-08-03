// @ts-check
import { defineConfig } from 'astro/config';
import mcp from 'astro-mcp';
import tailwind from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://getmicrotools.com',
  redirects: {
    '/engagement-rate-calculator': {
      status: 301,
      destination: '/instagram-engagement-rate-calculator'
    }
  },
  integrations: [mcp(), sitemap()],

  vite: {
    plugins: [tailwind()],
  },

  adapter: cloudflare()
});