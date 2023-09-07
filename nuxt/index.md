# 筆記

## JS 引擎

https://zh.wikipedia.org/wiki/JavaScript%E5%BC%95%E6%93%8E

```md
JavaScript 引擎：JavaScript 引擎负责解释和执行网页的 JavaScript 代码。它将 JavaScript 代码转换为计算机能理解的指令，从而实现用户的指定操作以及网页的动态交互。常见的 JavaScript 引擎包括：

V8（Google Chrome、Microsoft Edge） (iOS 8) [UIWebView => WKWebView]
SpiderMonkey（Mozilla Firefox）
Nitro，也叫做 JavaScriptCore（Apple Safari）
Trident（Internet Explorer（但 IE 浏览器已经无了））

渲染引擎：渲染引擎负责解析和呈现网页内容。它将 HTML、CSS 和 JavaScript 等网页元素转换为用户可见的界面。常见的渲染引擎包括：

Blink（Google Chrome、Microsoft Edge、Chromium 项目（新版 Opera 就是基于 Chromium 项目的））
WebKit（Apple Safari、老版本的 Chrome）
Gecko（Mozilla Firefox）
Trident（Internet Explorer（但 IE 浏览器已经无了））

作者：z\_
链接：https://juejin.cn/post/7271282907112849463
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

## Nuxt

### 中文文件

https://nuxt.com.cn/docs/api/components/client-only

### MySQL

https://stackoverflow.com/questions/75726788/fetch-data-from-mysql-database-in-nuxt-js-3

### Modules

Nuxt 模組與 Nuxt 插件的差異在於，模組載入執行的時間點更早，意思是 Nuxt 在啟動伺服器後，首先會依序的載入模組並執行，接續建立 Nuxt 的環境 (Context) 與 Vue 的實例 (Instance)，最後才開始執行 Nuxt 的插件。

https://nuxt.com/modules

### 調用 client

```js
// https://stackoverflow.com/questions/46058544/document-is-not-defined-in-nuxt-js
<template>
  <div>
    <client-only placeholder="loading...">
      <your-component>
    </client-only>
  </div>
</template>
```

### 路由生成

加 \_ 前綴代表動態路由(帶 params 的路徑)

```js
pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue



router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}
```

## 一些名詞

`JAMstack`
而 JAMstack 的 JAM 就是 JavaScript、API 和 Markup 的簡稱。

`複合式搜尋`
https://search.google.com/test/rich-results?hl=zh-tw
複合式搜尋結果是一種會出現在各項 Google 產品 (例如搜尋) 中的體驗。除了標準的藍色連結之外，也包含其他形式的內容，例如輪轉介面、圖片或其他非文字 UI 元素。

除了 SEO 還有`SMO`

`unjs`
Agnostic Excellence: JavaScript Libraries, Tools, and Utilities, Crafted to Elevate Your Coding Journey.

`nuxi`
NUXT nuxi
VueCLI vue--xx

## LINK

https://stephenlaichaowen.medium.com/nuxtjs-%E8%B6%85%E5%85%A5%E9%96%80-762d17f7302b

## SSR SPA

https://stephenlaichaowen.medium.com/nuxtjs-%E8%B6%85%E5%85%A5%E9%96%80-762d17f7302b
