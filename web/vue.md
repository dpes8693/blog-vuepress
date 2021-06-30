# <i class="fas fa-meteor"></i>  Vue.js
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
## 目前大略進度
``` js
html DOM節點傳遞
JavaScript ES5 ES6 jQuery語法
解構賦值 箭頭函數 let const,Template Literals,Destructuring Assignment,promise
CSS+Sass(Scss語法) Prepros or Watch Sass
網站架構 MVC/MVP/MVVM SPA/SSR理解
cdnjs liveserver vetur插件
fontawesome + bootstrap
webpack+babel package.json熟悉
名詞理解(snow pack/vite/eslint/e2e test/circleCI/alias/swagger
/vuex/vuerouter/nuxt/axios/i18n/polyfill)
模板測試:D2Project,VueElementTemplate,Vuetify
vue-cli熟悉
vuepress
vue架構
vue(語法 directive指令,once事件,鍵盤滑鼠修飾子,判斷,迴圈)
v-bind:,v-model,v-text-v-html,v-pre
.lazy,.trim.number
v-on:@
stop,prevent,capture,self,once,passive
@keydown.enter.exact,.meta
@click.right,.middle
v-if,v-show,v-else,v-else-if
v-for
$nectTick()
``` 

## 督促自己學習-記錄
### 2021.06
#### 0629
[polyfill 是甚麼?](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/29473/)用於實現瀏覽器並不支援的原生API的程式碼
##### JS
[事件冒泡-DOM事件傳遞](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)

::: details [展開圖]EventFlow
![EventFlow](https://i.imgur.com/W25OoWR.png)
:::

##### Vue
看
    .stop
    .prevent
    .capture
    .self
    .once
    .passive

::: tip 採坑
    Vue template裡面只能有一個根節點
    The template root requires exactly one element.

:::

#### 0630
##### Vue
實作 component拆分