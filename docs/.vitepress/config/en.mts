import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  lang: "en-us",
  description: "Audrey Grant's Daily Bridge Column",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Bridge Problem Set",

    nav: [
      {
        text: 'Mode',
        items: [
          { text: 'Learning', link: '/en/learning' },
          { text: 'Practice', link: '/en/practice' }
        ]
      }
    ],

    sidebar: {
      '/en/learning': [
        {
          text: 'Learning Mode',
          items: [
            {
              text: '2024',
              collapsed: true,
              items: [
                { text: 'August', link: '/en/learning/calendar/2024/08' },
                { text: 'September', link: '/en/learning/calendar/2024/09' },
                { text: 'October', link: '/en/learning/calendar/2024/10' },
                { text: 'November', link: '/en/learning/calendar/2024/11' },
                { text: 'December', link: '/en/learning/calendar/2024/12' }
              ]
            },
            {
              text: '2025',
              collapsed: true,
              items: [
                { text: 'January', link: '/en/learning/calendar/2025/01' },
                { text: 'February', link: '/en/learning/calendar/2025/02' },
                { text: 'March', link: '/en/learning/calendar/2025/03' }
              ]
            }
          ]
        }
      ],

      '/en/practice': [
        {
          text: 'Practice Mode',
          items: [
            {
              text: '2024',
              collapsed: true,
              items: [
                { text: 'August', link: '/en/practice/calendar/2024/08' },
                { text: 'September', link: '/en/practice/calendar/2024/09' },
                { text: 'October', link: '/en/practice/calendar/2024/10' },
                { text: 'November', link: '/en/practice/calendar/2024/11' },
                { text: 'December', link: '/en/practice/calendar/2024/12' }
              ]
            },
            {
              text: '2025',
              collapsed: true,
              items: [
                { text: 'January', link: '/en/practice/calendar/2025/01' },
                { text: 'February', link: '/en/practice/calendar/2025/02' },
                { text: 'March', link: '/en/practice/calendar/2025/03' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.yanty.top' }
    ]
  }
})
