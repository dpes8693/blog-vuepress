export const data = {
  "key": "v-2e4c18c0",
  "path": "/portfolio/",
  "title": "作品列表",
  "lang": "zh-tw",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "作品",
      "slug": "作品",
      "children": []
    },
    {
      "level": 2,
      "title": "小品 | 工具",
      "slug": "小品-工具",
      "children": []
    }
  ],
  "filePathRelative": "portfolio/index.md",
  "git": {
    "updatedTime": 1655138037000,
    "contributors": [
      {
        "name": "Richard Lin",
        "email": "33016870+dpes8693@users.noreply.github.com",
        "commits": 7
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
