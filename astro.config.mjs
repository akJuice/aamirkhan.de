import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://aamirkhan.de', integrations: [sitemap()], redirects: { '/about': '/#about', '/impressum': '/legal#impressum', '/datenschutz': '/legal#datenschutz' } });
