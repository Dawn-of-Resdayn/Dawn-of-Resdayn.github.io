module.exports = {
  base: '/',
  title: 'Dawn of Resdayn',
  description: 'A TES3MP serious RP server.',

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
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: 'https://github.com/Dawn-of-Resdayn',
    docsRepo: 'Dawn-of-Resdayn/Dawn-of-Resdayn.github.io',
    editLinks: true,
    editLinkText: 'Help us improve this page.',
    lastUpdated: true,
    //logo: '/pterodactyl-flat.png',
    nav: [
      {
        text: 'Documentation',
        link: '/project/intro.md',
      },
      {
        text: 'Get Help',
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
