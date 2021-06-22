export const data = {
  "key": "v-780380ef",
  "path": "/web/common%20sense.html",
  "title": "小常識",
  "lang": "zh-tw",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "網頁架構",
      "slug": "網頁架構",
      "children": []
    },
    {
      "level": 2,
      "title": "Web三本柱",
      "slug": "web三本柱",
      "children": [
        {
          "level": 3,
          "title": "Git",
          "slug": "git",
          "children": []
        },
        {
          "level": 3,
          "title": "語言 Language",
          "slug": "語言-language",
          "children": []
        },
        {
          "level": 3,
          "title": "多國語系 Localization",
          "slug": "多國語系-localization",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "web/common sense.md",
  "git": {
    "updatedTime": null,
    "contributors": []
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
