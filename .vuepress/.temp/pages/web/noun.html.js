export const data = {
  "key": "v-7dc11caa",
  "path": "/web/noun.html",
  "title": "名詞學習與整理",
  "lang": "zh-tw",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "(縮寫) //補充 {階層關係}",
      "slug": "縮寫-補充-階層關係",
      "children": []
    }
  ],
  "filePathRelative": "web/noun.md",
  "git": {
    "updatedTime": 1631156158000,
    "contributors": [
      {
        "name": "林原醇",
        "email": "richard_lin@tangram.tw",
        "commits": 3
      },
      {
        "name": "Richard",
        "email": "dpes8693@gmail.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
