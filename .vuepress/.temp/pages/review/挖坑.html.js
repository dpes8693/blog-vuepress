export const data = {
  "key": "v-1b629b01",
  "path": "/review/%E6%8C%96%E5%9D%91.html",
  "title": "主題列表",
  "lang": "zh-tw",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "阿醇規則",
      "slug": "阿醇規則",
      "children": []
    },
    {
      "level": 2,
      "title": "前端面試題庫",
      "slug": "前端面試題庫",
      "children": [
        {
          "level": 3,
          "title": "DDD大王",
          "slug": "ddd大王",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "review/挖坑.md",
  "git": {
    "updatedTime": 1650988290000,
    "contributors": [
      {
        "name": "Richard Lin",
        "email": "33016870+dpes8693@users.noreply.github.com",
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
