module.exports = {
  base: '/',
  title: 'Dawn of Resdayn',
  description: 'A ES III Morrowind serious RP server.',

  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['vuepress-plugin-container', {
      type: 'warning',
    }],
    ['vuepress-plugin-container', {
      type: 'tip',
    }],
    ['vuepress-plugin-container', {
      type: 'danger',
    }],
  ],

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/icon-16x16.png', sizes: '16x16' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icon-32x32.png', sizes: '32x32' }],
    ['link', { rel: 'shortcut icon', href: '/icon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  themeConfig: {
    repo: 'https://github.com/Dawn-of-Resdayn',
    docsRepo: 'Dawn-of-Resdayn/Dawn-of-Resdayn.github.io',
    editLinks: true,
    editLinkText: 'Help us improve this page.',
    lastUpdated: true,
    logo: '/icon.png',
    nav: [
      {
        text: 'Documentation',
        link: '/project/intro.md',
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/XG8r27R'
      },
      {
        text: 'Forums',
        link: 'https://resdayn.boards.net/'
      }
    ],
    sidebar: {
      '/': [
        {
          title: 'Information',
          collapsable: false,
          children: [
            '/project/intro.md',
            '/project/about.md',
            '/project/credits.md',
            '/project/updates.md',
          ]
        },
        {
          title: 'Guides',
          collapsable: false,
          children: [
            '/guides/installing.md',
          ]
        },
      ],
    }
  },
}
