export const data = {
  "key": "v-7dc11caa",
  "path": "/web/noun.html",
  "title": "名詞學習與整理",
  "lang": "zh-tw",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "web/noun.md",
  "git": {
    "updatedTime": 1648819197000,
    "contributors": [
      {
        "name": "Richard Lin",
        "email": "33016870+dpes8693@users.noreply.github.com",
        "commits": 10
      },
      {
        "name": "林原醇",
        "email": "richard_lin@tangram.tw",
        "commits": 4
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
