import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://starlight.astro.build/reference/configuration
export default defineConfig({
  site: 'https://sh1zicus.github.io',
  base: '/dots-hyprland-wiki',
	integrations: [
		starlight({
			title: 'sh1zicus/dots-hyprland',
			social: {
				github: 'https://github.com/sh1zicus/dots-hyprland',
			},
      editLink: {
          baseUrl: 'https://github.com/sh1zicus/dots-hyprland-wiki/tree/main',
      },
      customCss: ['./src/styles/custom.css'],
      tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 2, },
      favicon: './favicon.ico',
      lastUpdated: true,
      defaultLocale: 'en',
      // English docs in `src/content/docs/en/`
      // Other lang docs in `src/content/docs/<lang>/`
      // See also https://github.com/CloudCannon/pagefind/tree/main/pagefind_ui/translations
      locales: {
        'en': {
          label: 'English', // Engligh
          lang: 'en',
        },
        // 'fr': {
        //   label: 'French', //French
        //   lang: 'fr',
        // },
        // 'ja': {
        //   label: 'Japanese', //Japanese
        //   lang: 'ja',
        // },
        // 'pl': {
        //   label: 'Polish', //Polish
        //   lang: 'pl',
        // },
        'ru': {
          label: 'Russian', //Russian
          lang: 'ru',
        },
        // 'tr': {
        //   label: 'Turkish', //Turkish
        //   lang: 'tr',
        // },
        'vi': {
          label: 'Tiếng Việt', // Vietnamese
          lang: 'vi',
        },
        'zh-cn': {
          label: '简体中文', //Simplified Chinese
          lang: 'zh-CN',
        },
      },
      sidebar: [
        {
          label: 'General',
          translations: {
            'vi': 'Chung',
            'zh-CN': '通用',
          },
          autogenerate: { directory: 'general' },
        },
        {
          label: 'Illogical Impulse',
          // idk how to translate badge for group label, guess just a "New" should be ok to everyone though.
          badge: { text: 'New', variant: 'success' },
          // idk why but it won't work when using `illogical-impulse'
					autogenerate: { directory: 'i-i' },
				},
				{
					label: 'Dev Notes',
          collapsed: true,
          badge: { text: 'Dev' },
          translations: {
            'vi': 'Ghi chú cho dev',
            'zh-CN': '开发者笔记',
          },
					autogenerate: { directory: 'dev' },
				},
				{
					label: 'Translate this wiki',
          collapsed: true,
          badge: { text: 'Help wanted', variant: 'note' },
          translations: {
            'zh-CN': '翻译此文档',
          },
          link: '/dev/doc-site-contrib',
				},
			],
		}),
	],
});
