module.exports = {
    lang: 'zh-CN',
    title: 'Richard',
    dest: 'docs',
    base: /blog-vuepress/,
    
    
    description: '这是我的第一个 VuePress 站点',
  
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