// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 👇 サイトのURLは、この「波カッコ」の中に書きます！
  site: 'https://misaki-ikokka.pages.dev',
  
  // 👇 サイトマップの機能をONにする設定です
  integrations: [sitemap()]
});