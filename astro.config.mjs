// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import node from '@astrojs/node';

export default defineConfig({
  // ...
  integrations: [tailwind(), react()],

  adapter: node({
    mode: 'standalone'
  })
});