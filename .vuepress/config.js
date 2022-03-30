module.exports = {
  lang: "zh-tw",
  title: "Richard's Blog",
  head: [
    [ "link", 
      { 
        rel: "icon", href: "/blog-vuepress/images/icon.png",
 
      }
    ],
    ["script",
      { 
        src: "https://kit.fontawesome.com/e6a339ae70.js",crossorigin: "anonymous",
      }
    ]
    // ["style",{ src: "/blog-vuepress/style/base.css"}]
  ],
  dest: "docs",
  base: "/blog-vuepress/",
  description: "用Vupress架Blog",
//

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
        isGroup: true,
        text: 'Home',
        link: '/',
        // children: [
        //   {
        //     text: "github原始碼",
        //     link: "https://github.com/dpes8693/blog-vuepress",
        //     children: [],
        //   },
        // ],
      },
      {
        isGroup: true,
        text: "Guide",
        children: ["/guide/buildBlog.md"], //會去抓#的名稱
      },
      {
        isGroup: true,
        text: "工具",
        children: ["/tools/vscode.md","/tools/url.md"], //會去抓#的名稱
      },
      {
        isGroup: true,
        text: "Web",
        children: ["/web/common.md", "/web/vue.md", "/web/vscode.md" , "/web/resource.md"], //會去抓#的名稱
      },
      {
        isGroup: true,
        text: "Windows",
        children: ["/others/bashCommonSyntax.md"], //會去抓#的名稱
      },
      {
        isGroup: true,
        text: "Proper Noun",
        children: ["/web/noun.md",], //會去抓#的名稱
      },
      {
        isGroup: true,
        text: "Portfolio",
        children: ["/portfolio/driveUrl.md","/portfolio/gameListTranslater.md"], //會去抓#的名稱        
      }
    ],
  },
};
