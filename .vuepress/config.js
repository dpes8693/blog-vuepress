module.exports = {
    lang: 'zh-tw',
    title: 'Richard',

    
    
    description: '歡迎',
  
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',

      navbar: [
        // NavbarItem
        {
          text: 'Foo',
          link: '/foo/',
        },
        // NavbarGroup
        {
          text: 'Group',
          children: ['/group/foo.md', '/group/bar.md'],
        },
        // 字符串 - 页面文件路径
        '/bar/README.md',
      ],

      sidebar: [
        // SidebarItem
        {
          text: 'Foo',
          link: '/foo/',
          children: [
            // SidebarItem
            {
              text: 'github',
              link: 'https://github.com',
              children: [],
            },
            // 字符串 - 页面文件路径
            '/foo/bar.md',
          ],
        },
        // SidebarGroup
        {
          isGroup: true,
          text: 'Group',
          children: ['/group/foo.md', '/group/bar.md'],
        },
        // 字符串 - 页面文件路径
        '/bar/README.md',
      ],
    },


  }