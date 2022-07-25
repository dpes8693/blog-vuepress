export const data = {
  "key": "v-1f585632",
  "path": "/web/vue.html",
  "title": "Vue.js練功筆記",
  "lang": "zh-tw",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "入門1個月要認識的名詞?",
      "slug": "入門1個月要認識的名詞",
      "children": []
    },
    {
      "level": 2,
      "title": "特殊",
      "slug": "特殊",
      "children": [
        {
          "level": 3,
          "title": "為什麼畫面沒有刷新(但資料是對的?)",
          "slug": "為什麼畫面沒有刷新-但資料是對的",
          "children": []
        },
        {
          "level": 3,
          "title": "名詞",
          "slug": "名詞",
          "children": []
        },
        {
          "level": 3,
          "title": "採坑",
          "slug": "採坑",
          "children": []
        },
        {
          "level": 3,
          "title": "學Vue也要知道ES6語法，否則都看不懂",
          "slug": "學vue也要知道es6語法-否則都看不懂",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "系列",
      "slug": "系列",
      "children": []
    }
  ],
  "filePathRelative": "web/vue.md",
  "git": {
    "updatedTime": 1655138037000,
    "contributors": [
      {
        "name": "Richard",
        "email": "dpes8693@gmail.com",
        "commits": 14
      },
      {
        "name": "Richard Lin",
        "email": "33016870+dpes8693@users.noreply.github.com",
        "commits": 6
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
