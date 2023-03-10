import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://github.com/kelvinmburu/astro-crowdin',
	base: '/astro-crowdin',
	integrations: [mdx(), sitemap()],
});
