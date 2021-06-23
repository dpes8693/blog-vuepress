export const siteData = {
  "base": "/blog-vuepress/",
  "lang": "zh-tw",
  "title": "Richard's Blog",
  "description": "用Vupress架Blog",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/blog-vuepress/images/icon.png"
      }
    ],
    [
      "script",
      {
        "src": "https://kit.fontawesome.com/e6a339ae70.js",
        "crossorigin": "anonymous"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
