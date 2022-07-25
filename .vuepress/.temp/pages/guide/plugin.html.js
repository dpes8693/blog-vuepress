export const data = {
  "key": "v-1d14d5cc",
  "path": "/guide/plugin.html",
  "title": "Blog 修改的地方 Plugin",
  "lang": "zh-tw",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "guide/plugin.md",
  "git": {
    "updatedTime": 1648895464000,
    "contributors": [
      {
        "name": "Richard",
        "email": "dpes8693@gmail.com",
        "commits": 3
      },
      {
        "name": "Richard Lin",
        "email": "33016870+dpes8693@users.noreply.github.com",
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
