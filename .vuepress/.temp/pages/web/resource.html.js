export const data = {
  "key": "v-2ca18037",
  "path": "/web/resource.html",
  "title": "深入的學習link",
  "lang": "zh-tw",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "關於前端發展",
      "slug": "關於前端發展",
      "children": []
    },
    {
      "level": 2,
      "title": "資料處理",
      "slug": "資料處理",
      "children": [
        {
          "level": 3,
          "title": "登入",
          "slug": "登入",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "JS",
      "slug": "js",
      "children": []
    },
    {
      "level": 2,
      "title": "Vue",
      "slug": "vue",
      "children": []
    },
    {
      "level": 2,
      "title": "CSS",
      "slug": "css",
      "children": []
    }
  ],
  "filePathRelative": "web/resource.md",
  "git": {
    "updatedTime": 1626276289000,
    "contributors": [
      {
        "name": "Richard",
        "email": "dpes8693@gmail.com",
        "commits": 3
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
