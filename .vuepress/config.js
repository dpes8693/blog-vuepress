module.exports = {
  contributors: false,
  lang: "zh-tw",
  title: "Richard's Blog",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/blog-vuepress/images/icon.png",
      },
    ],
    [
      "script",
      {
        src: "https://kit.fontawesome.com/e6a339ae70.js",
        crossorigin: "anonymous",
      },
    ],
  ],
  dest: "docs",
  base: "/blog-vuepress/",
  description: "用Vupress架Blog",

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
    //會去抓#的名稱
    sidebar: [
      {
        isGroup: true,
        text: "Home",
        link: "/",
      },
      {
        isGroup: true,
        text: "Guide",
        children: [
          "/guide/buildBlog.md",
          "/guide/markdown.md",
          "/guide/getll.md",
          "/guide/regex.md",//未完成
          "/guide/pattern.md",//未完成
        ],
      },
      {
        isGroup: true,
        text: "Tool",
        children: ["/tools/vscode.md", "/tools/url.md"],
      },
      {
        isGroup: true,
        text: "Web",
        children: [
          "/web/common.md",
          "/web/resource.md",
          "/vue/vue.md",
          "/react/react.md",
          "/web/keycode.md",//0726完成
          "/web/[JS]new.md",//未完成
        ],
      },
      {
        isGroup: true,
        text: "Backend",
        children: [
          "/backend/noun.md",
          "/backend/express/index.md",
          "/backend/normalization.md",
        ],
      },
      {
        isGroup: true,
        text: "Windows",
        children: ["/others/bashCommonSyntax.md"],
      },
      {
        isGroup: true,
        text: "Proper Noun",
        children: ["/web/noun.md"],
      },
      {
        isGroup: true,
        text: "Portfolio",
        children: ["/portfolio/index.md"],
      },
    ],
  },
};
