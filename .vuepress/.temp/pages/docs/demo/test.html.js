export const data = {
  "key": "v-6d829d16",
  "path": "/docs/demo/test.html",
  "title": "",
  "lang": "zh-tw",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "docs/demo/test.md",
  "git": {
    "updatedTime": 1624338377000,
    "contributors": [
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
