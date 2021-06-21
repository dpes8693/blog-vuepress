module.exports = {
    lang: 'zh-tw',
    title: 'Richard',
    head: [['link', { rel: 'icon', href: '/blog-vuepress/images/icon.png' }]],
    dest: 'docs',
    base: "/blog-vuepress/",

    
    description: '歡迎',
  
    themeConfig: {
      //logo: 'https://vuejs.org/images/logo.png',
      logo: '/blog-vuepress/images/cat.jpg',

      navbar: [
        // NavbarItem
        {
          text: 'guide',
          link: '/guide/1.md',
        },
        // NavbarGroup
        // {
        //   text: 'Group',
        //   children: ['/group/foo.md', '/group/bar.md'],
        // },
        
        //'/guide/1.md',
      ],

      sidebar: [
        // SidebarItem
        {
          text: 'Guide',
          link: '/guide/1.md',
          children: [
            // SidebarItem
            {
              text: 'github',
              link: 'https://github.com',
              children: [],
            },
            // 字符串 - 页面文件路径
            //'/guide/1.md',
          ],
        },
        // SidebarGroup
        // {
        //   isGroup: true,
        //   text: 'Group',
        //   children: ['/group/foo.md', '/group/bar.md'],
        // },
        
      ],
    },



  }