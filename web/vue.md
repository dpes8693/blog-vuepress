# <i class="fas fa-meteor"></i>  Vue.js練功

## 入門1個月要認識?
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
### JS
[如果再寫for迴圈，我就錘自己了](https://www.gushiciku.cn/pl/ghps/zh-tw)

[Object.keys() & Object.values() & Object.entries()](https://titangene.github.io/article/javascript-object-keys-values-entries.html)

[事件冒泡-DOM事件傳遞](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)

::: details [展開圖]EventFlow
![EventFlow](https://i.imgur.com/W25OoWR.png)
:::

[不想再看到undefined的TypeError](https://ithelp.ithome.com.tw/articles/10230756)

::: details [展開圖]

```js
const response = {
  rows: [
    {
      "name": "John",
      "age": 28,
      "vehicles": {
         "car": "Suzuki",
         "bike": "Ubike",
         "airlines":{
            "UNI AIR" : "Air123",
            "Mandarin" : "Brt707"
         }
      }
    }
  ]
}

if (response.rows?.[0]?.vehicles?.airlines?.Mandarin === 'Brt707') console.log('Get Brt707')

//語法記憶 a.b有嗎?.c有嗎?
//a.b?.c?
```

:::

### 採坑

::: tip vue template 根節點
    Vue template裡面只能有一個根節點
    The template root requires exactly one element.

:::

::: tip JSON 格式語法
JSON 格式和js寫物件不同 {"裡面":"要用雙引號"}
https://youtu.be/R8GL5y49iJc

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


### 練習Vue
1. vue cli mixin
2. ES6
Destructuring
variables in string
Arrow Function
3. import{}及exportimport{}及export
4. vue 傳值