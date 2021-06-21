export const data = {
  "key": "v-6e0d8f34",
  "path": "/guide/1.html",
  "title": "1",
  "lang": "zh-tw",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/1.md",
  "git": {
    "updatedTime": 1624256114000,
    "contributors": [
      {
        "name": "Richard",
        "email": "dpes8693@gmail.com",
        "commits": 2
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
