module.exports = {
  base: '/',
  title: 'Dawn of Resdayn',
  description: 'A serious ES III Morrowind RP Server',

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
      },
      {
        text: 'TES3MP',
        link: 'https://tes3mp.com'
      }
    ],
    sidebar: {
      '/staff/': [
        {
          title: 'Information',
          collapsable: true,
          children: [
            '/staff/info/info.md',
          ]
        },
        {
          title: 'In-Game',
          collapsable: true,
          children: [
            '/staff/ingame/commands.md',
          ]
        },
      ],
      '/': [
        {
          title: 'Information',
          collapsable: false,
          children: [
            '/project/intro.md',
            '/project/rules.md',
            '/project/about.md',
            '/project/credits.md',
            '/project/updates.md',
            '/project/privacy.md',
          ]
        },
        {
          title: 'Guides',
          collapsable: false,
          children: [
            '/guides/installing.md',
            '/guides/faq.md',
            '/guides/kudos.md',
          ]
        },
        {
          title: 'In-Game',
          collapsable: false,
          children: [
            '/ingame/commands.md',
            '/ingame/rolls.md',
            '/ingame/rpr.md',
            '/ingame/time.md',
          ]
        },
      ],
    }
  },
}
