# 小常識
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

## 網頁架構

說到網頁不得不提 DOM BOM
![BOM](https://i.imgur.com/n9FjFpv.png)
Browser Object Model
[](https://ithelp.ithome.com.tw/upload/images/20171214/20065504EIG4UYcuGE.png)

![DOM](https://i.imgur.com/uJwKmCq.png)
Document Object Model
[](https://www.javadrive.jp/javascript/dom/index1.html)

DOM 是網頁開發的基礎
![Web架構](https://i.imgur.com/VDoI7q5.png)


::: tip 來源
[S](https://ithelp.ithome.com.tw/articles/10191765)
:::

## Web 三本柱

##### Git

+ [雖然 Git 用下指令才能發揮威力，但降低門檻從圖形化介面入門也沒不好](https://progressbar.tw/posts/49)
+ [常見的五個開源專案授權條款，使用軟體更自由](https://noob.tw/open-source-licenses/)
+ [Git ignore](https://gitbook.tw/chapters/using-git/ignore.html)

---
##### 語言 Language

![靜態型別-必須宣告資料](https://i.imgur.com/9DX9OuA.png)

---
##### 多國語系 Localization

[zh 或 zh-tw, zh-cn 是什麼的縮寫？](https://english.bruceli.net/2011/11/zhzh-tw-zh-cn.html)


---
### html
<details>
  <summary>html tag</summary>

| HTML TAG | Eng.            | X
| -------- | --------------- | -------------------------------- |
| var      | variable        | Text                             |
| q        | quotation       | Text                             |
| em       | emphasized      | Text                             |
| b        | bold            | Text                             |
| i        | italic          | Text                             |
| br       | break           | Text                             |
| u        | underlined      | Text                             |
| s        | strikethrough   | Text                             |
| span     | span            | 範圍                             |
| ol       | ordered list    | Text                             |
| ul       | unordered list  | Text                             |
| li       | list item       | \*\*\*                           |
| h1       | header 1        | \*\*\*                           |
| p        | paragraph       | 段落                             |
| hr       | horizontal rule | 段落                             |
| rel      | relations       | 关联到一个 stylesheet（样式表单)  |

</details>

---
### JS
重新認識 JavaScript: Day 01 前言
2018 鐵人賽 javascript
+ [Kuro Hsu](https://ithelp.ithome.com.tw/articles/10190633)
+ [從 ES6 開始的 JavaScript學習生活](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/)
+ [JavaScript 初心者ノ研究日記](https://ithelp.ithome.com.tw/users/20129506/ironman/3700?page=1)
+ [ES6](https://ithelp.ithome.com.tw/articles/10223406)

來認識for...in for...of
in  ES6 key 

for ES5 value 

```js
// 試著讓 Array 繼承一些屬性或方法
Array.prototype.test="test12";
var items=["a", "b"];
for(let prop in items)
{
    if(items.hasOwnProperty(prop))//檢查這是否為非繼承的屬性
        console.log("index:"+prop+"__"+items[prop]);
}
// index:0__a
// index:1__b
```

##### API (Application Programming Interface)

+ RESTful API<br>
https://ithelp.ithome.com.tw/users/20107247/ironman/1312?page=1

---
### CSS
0. 權重
!important > inline style > ID > Class > Element > *
1. [新手也可以輕鬆玩轉 SASS - @mixin  @include](https://5xruby.tw/posts/play-sass-mixin-and-include)
::: tip 白話
@mixin 抽取 <br>
@include 召喚使用
:::

::: details [範例]
```scss
/* 範例 1*/
  @mixin rounded-border {
    border: 2px #333 solid;
    border-radius: 5px;
  }

  @mixin shadow {
    box-shadow: 1px 2px 2px #666;
  }

  .article {
    @include rounded-border;
  }

  .button {
    @include rounded-border;
    @include shadow;
  }
/* 範例 2*/
  @mixin cover($opacity_value) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: $opacity_value; // opacity 的值由傳進來的參數決定
  }

  .avatar {
    @include cover(0.9); // 呼叫的時候帶入數值
  }

  .product-image {
    @include cover(0.8); // 呼叫的時候帶入數值
  }
```
:::

2. 常見問題
+ 常見CSS框架的grid system螢幕大小怎麼分?
```
A: |xs|sm|md|lg|xl|, 600~960~1264~1904~px
```

+ CSS有哪些單位?
```
A: px(pixel 1像素),
em(=html字體大小 16px),
rem(root em根元素16px),
vw(viewport width畫面比例'寬度'百分比),
vh(viewport height畫面比例'高度'百分比),
%(根元素),
calc(計算未知動態大小)
```
[source](https://ithelp.ithome.com.tw/articles/10222932)


+ CSS 口決上右下左?
```
A:設定padding或margin時 常用的方式:
上右下左 {padding: 5 5 5 5} 
上下 左右{padding: 5 5}
```

+ margin & padding 差異?
```
A: 有一個正方形:{邊線:border,面積:content}
 調整內:border和content是padding
 調整外:border外

```

+ RWD AWD?
```
A: RWD(esponsive Web Design)響應式,AWD(Adaptive Web Design)自適應 
[來源](https://start-up123.blogspot.com/2019/04/Difference-between-RWD-and-AWD.html)
```

+ 線上測試工具推薦?
[六角洧杰開發](https://w3c.hexschool.com/flexbox/2186a786)
---
### ALL 文章

![](https://i.imgur.com/QPYZIfa.png)

1. [正妹教學](https://ithelp.ithome.com.tw/users/20121212/ironman/3578)

2. [初心者的前端路線學習指南](https://medium.com/i-am-mike/%E5%88%9D%E5%BF%83%E8%80%85%E7%9A%84%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%B7%9A%E5%AD%B8%E7%BF%92%E6%8C%87%E5%8D%97-895de088257f)

3.  [什麼是切版？切版練習的方式與工具](https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E4%BB%80%E9%BA%BC%E6%98%AF%E5%88%87%E7%89%88-%E5%88%87%E7%89%88%E7%B7%B4%E7%BF%92%E7%9A%84%E6%96%B9%E5%BC%8F%E8%88%87%E5%B7%A5%E5%85%B7-7069b2dbf742)

4. [從 0 開始的網頁生活！30 天從網頁新手到網頁入門](https://ithelp.ithome.com.tw/users/20111948/ironman/1776)

---

##### DOM vs JS => jQuery

```javascript=
const element = document.getElementById('test')
test.addEventListener('click', () => alert('Hello World'), false)
```

```javascript=
$('#test').click(() => alert('Hello World
```

頁面讀取: 白話來說 就是 DOM 建立好就執行 function 和 等圖片等 DOM 載入完成才執行 function

$(document).ready(callback)<br>
當頁面內的 DOM 都準備好開始讀取就會執行 callback 內的 function ，亦可簡寫成 $(() => {})

window.onload = callback<br>
當頁面內的 DOM 已經開始讀取才會執行 callback 內的 function 。

CSS 選擇器

---

##### AJAX: axios | jQuery | fetch

前端與後端溝通的橋樑
非同步

早期:
XMLHttpRequest

```javascript
var xhttp = new XMLHttpRequest();
// 當readyState改變就會呼叫此function
xhttp.onreadystatechange = function () {
  // readyState === 4 代表 DONE、status === 200 代表成功收到資料
  if (this.readyState === 4 && this.status === 200) {
    // do something
  }
};
xhttp.open("GET", "url", true);
xhttp.send();
```

jQuery 的 AJAX API

---
##### http method

+ POST 的請求用於提交資料至後端
+ DELETE 的請求用於刪除後端指定資料
+ GET 的請求應用於從後端取得資料
+ PATCH 的請求用於套用資料至後端修改
+ PUT 如果已經存在就替換，沒有就新增(被取代)

[PUT PATCH 差異](https://ihower.tw/blog/archives/6483)


---

>2XX 系列
>>2XX 系列代表 server 端有成功接受到請求。

>200 OK
>>請求已成功，且馬上回傳資料。

>3XX 系列
>>3XX 系列代表重新導向，這類的 status code 需要 client 端進行更進一步的操作才能完成請求，
譬如登入後會重新導向至首頁之類的操作。

>4XX 系列
>>4XX 系列代表 client 端有錯誤。
>>404 Not Found

>5XX 系列
>>5XX 系列代表 server 端在處理請求的過程中有錯誤，看到這類代表不用檢查自己程式碼是否有寫錯

---
常用 https://ithelp.ithome.com.tw/articles/10240440

```sh
有的套件，會要求npm的最低版本，可以用npm -v 查看目前的版本是多少
npm -v

安裝package.json紀錄的所有套件
npm install 

在整台電腦上，安裝或移除特定的第三方套件，並記錄至Package.json (通常用在，所有專案都會用到的CLI工具)
npm install -g　套件名稱  #npm install --global
npm uninstall -g　套件名稱 

在某個專案資料夾底下，安裝特定的第三方套件，並記錄至Package.json (通常用在，某個專案的函式庫或框架)
npm install -s　套件名稱 #npm install --save
npm uninstall s　套件名稱

在某個專案資料夾底下，安裝特定的第三方套件，用於開發環境
npm install -D 套件名稱 #npm install --save-dev
npm uninstall -D 套件名稱
```