# 名詞學習與整理

<style>
html {
    overflow: -moz-hidden-unscrollable;
    height: 100%;
}

body::-webkit-scrollbar {
    display: none;
}

body {
    -ms-overflow-style: none;
    height: 100%;
	width: calc(100vw + 18px);
	overflow: auto;
}
</style>

### (縮寫) //補充 {階層關係}

<br>
<!-- <details open>
  <summary>API相關名詞</summary>

```js

```

</details> -->

<details open>
  <summary>Web基本名詞</summary>

```js
大分類{
    frontend()//前端 畫面和邏輯
    backend()//後端 操作資料庫
}

網路{
    request()//向後端請求
    query(ex:'https://home.gamer.com.tw/creation.php'+ ?owner=dpes5407)//請求攜帶參數

    response()//後端回應
    status_code(ex:404)//回應的狀態碼

    API(Application Programming Interface){
        廣義//使用別人開發的產品方式
        狹義//對某個address請求資料  下圖
    }
}

網頁{
    SEO(Search Engine Optimization)//搜尋引擎最佳化 搜尋排名高在第一頁
    RWD(Responsive Web Design)//響應式網頁 自動排版手機體驗好

    進階{
        SPA(Single Page Application)//單頁式應用 不刷新體驗好
        SSR(Server-Side Rendering)//伺服器端渲染 加載速度快 SEO佳
    }
}

```


![api](https://drive.google.com/uc?export=download&id=1Q9TW06Xf7AzS_d0MmdMbRcRyRelK_vfk)

</details>

<details open>
  <summary>API相關名詞</summary>
  
```js
AJAX(Asynchronous JavaScript and XML){
// ajax技術出現解決了很早期和伺服器要資料要重新整理的問題

    XHR(XMLHttpRequest)//最早做法

    $.ajax()//中期 jQuery作法

    axios()//

    fetch()// ES6 js原生操做api方法

    RESTful(Representational State Transfer){
        get post put patch delete
    }

}

```
</details>

+ Core-js
+ react/vue/angular，webpack、babel、core-js
+ crypto-js 加密
+ nodejs dotenv 套件 環境變數
+ [env](https://dwatow.github.io/2019/01-26-node-with-env-first/)
+ popper js 提示 alert 輕量級的套件
+ sweetalert2 漂亮的 alert 自訂
+ uuid 不重複
+ velocity.js 動畫 vs GSAP
+ vue-axios
+ vue-router
+ vuex
+ [moment.js 時間](https://ithelp.ithome.com.tw/articles/10208995)
+ [Lo-Dash 函式庫](https://medium.com/itsems-frontend/javascript-lodash-9e6833cb1158)

---

+ [Polyfill 實現瀏覽器並不支援的原生API的程式碼](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/29473/)

<!-- JavaScript
jQuery(JavaScript 函式庫)
初衷是用來簡化 HTML 與 JavaScript 之間的溝通與操作 -->
```
