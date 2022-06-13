# <i class="fas fa-meteor"></i>  Vue.js練功筆記

## 入門1個月要認識的名詞?
``` js
html DOM節點傳遞
JavaScript ES5 ES6 jQuery語法
解構賦值 箭頭函數 let const,Template Literals,Destructuring Assignment,promise
CSS+Sass(Scss語法) Prepros or Watch Sass
網站架構 MVC/MVP/MVVM SPA/SSR理解
cdnjs liveserver vetur插件
fontawesome + bootstrap
webpack+babel package.json熟悉

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

## 特殊

### 為什麼畫面沒有刷新(但資料是對的?)
[Vue 響應式原理](https://pjchender.blogspot.com/2017/05/vue-vue-reactivity.html)
```js
$forceUpdate()
```


### 名詞
[polyfill 是甚麼?](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/29473/)用於實現瀏覽器並不支援的原生API的程式碼


### 採坑

::: tip vue template 根節點
    Vue template裡面只能有一個根節點
    The template root requires exactly one element.

:::

::: tip JSON 格式語法
JSON 格式和js寫物件不同 {"裡面":"要用雙引號"}

感謝Alex大大[教學影片](https://youtu.be/R8GL5y49iJc)

:::

::: details [舉個例子]
```js
    let number = 1
    var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
    ];

    // 這段函式會輸出[8, 6, 7, 9]這個陣列
    elements.map(function(element) {
    return element.length;
    });

    function 變成箭頭 塞到中間

    //1 上方這種一般的函式，可以被改寫成下方的箭頭函式
    elements.map((element) => {
    return element.length;
    }); // [8, 6, 7, 9]

    //2 如果輸入的參數只有一個，我們可以移除掉外面的括號
    elements.map(element => {
    return element.length;
    }); // [8, 6, 7, 9]

    //3 當箭頭函式裡的內容只有'return'的時候，我們可以拿掉return+外面的大括號
    elements.map((element) =>  element.length); // [8, 6, 7, 9]
    elements.map(element) =>  element.length); // [8, 6, 7, 9]

    ---

    //範例2--
    const func = (x) => { return x + 1 } //多行 自己加return
    const func = (x) => x + 1
    const func = x => x + 1


    const func = function (x) { return x + 1 } //匿名的函式

    ---
    //容易搞-混範例3
    const funcA = x => x + 1 //2
    const funcB = x => { x + 1 } //undefined
```
:::


### 學Vue也要知道ES6語法，否則都看不懂
1. vue cli mixin
2. ES6
Destructuring
variables in string
Arrow Function
3. `import{}`及`exportimport{}`及`export`
4. vue 傳值

## 系列

1. 勇者鬥 Vue 龍 2019
   [勇者鬥 Vue 龍 2019](https://ithelp.ithome.com.tw/users/20107789/ironman/1710)
2. 前端史萊姆
   [前端史萊姆與 Vue 的三十天時光冒險](https://ithelp.ithome.com.tw/users/20120426/ironman/2505)
3. 從 0 開始 vue.js
   [從 0 開始 vue.js 的 30 天學習日誌](https://ithelp.ithome.com.tw/users/20108224/ironman/1796)
4. 用範例理解 Vue.js 系列
   [用範例理解 Vue.js 系列](https://ithelp.ithome.com.tw/users/20107107/ironman/1243)

##### API 補充

[nextTick()方法](https://segmentfault.com/q/1010000011384320)