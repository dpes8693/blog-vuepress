module.exports = {
    lang: 'zh-tw',
    title: 'Richard',
    head: [['link', { rel: 'icon', href: '/blog-vuepress/images/icon.png' }]],
    dest: 'docs',
    base: "/blog-vuepress/",
    description: '歡迎',
  
    themeConfig: {
      //logo: 'https://vuejs.org/images/logo.png',
      
      navbar: [
        // NavbarItem
        // {
        //   text: 'guide',
        //   link: '/guide/1.md',
        // },
        // NavbarGroup
        // {
        //   text: 'Group',
        //   children: ['/group/foo.md', '/group/bar.md'],
        // },
        
        //'/guide/1.md',
      ],

      sidebar: [
        
        {
          // text: 'Guide',
          // link: '/guide/1.md',
          children: [
            {
              text: 'github原始碼',
              link: 'https://github.com/dpes8693/blog-vuepress',
              children: [],
            },
          ],
        },
        {
          isGroup: true,
          text: 'Guide',
          children: ['/guide/1.md', '/guide/plugin.md' ], //會去抓#的名稱
        },
        {
          isGroup: true,
          text: 'Web',
          children: ['/web/common.md', '/web/vue.md', '/web/vscode.md' ], //會去抓#的名稱
        },
      ],
    },
  }