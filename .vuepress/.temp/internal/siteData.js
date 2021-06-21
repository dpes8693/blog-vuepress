export const siteData = {
  "base": "/blog-vuepress/",
  "lang": "zh-tw",
  "title": "Richard",
  "description": "歡迎",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/blog-vuepress/images/icon.png"
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
