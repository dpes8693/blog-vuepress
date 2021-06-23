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

## Web 三本柱

### Git

+ 雖然 Git 用下指令才能發揮威力，但降低門檻從圖形化介面入門也沒不好。<br>
https://progressbar.tw/posts/49

+ 常見的五個開源專案授權條款，使用軟體更自由<br>
https://noob.tw/open-source-licenses/

+ Git ignore<br>
https://gitbook.tw/chapters/using-git/ignore.html

### 語言 Language

![靜態型別-必須宣告資料](https://i.imgur.com/9DX9OuA.png)

### 多國語系 Localization

+ zh 或 zh-tw, zh-cn 是什麼的縮寫？<br>
https://english.bruceli.net/2011/11/zhzh-tw-zh-cn.html

### html

+ 從 0 開始的網頁生活！30 天從網頁新手到網頁入門<br>
https://ithelp.ithome.com.tw/users/20111948/ironman/1776

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
| rel      | relations       | 关联到一个 stylesheet（样式表单) |

### JS

重新認識 JavaScript: Day 01 前言
2018 鐵人賽 javascript
+ Kuro Hsu<br>
https://ithelp.ithome.com.tw/articles/10190633

+ 從 ES6 開始的 JavaScript 學習生活<br>
https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/

+ JavaScript 初心者ノ研究日記<br>
https://ithelp.ithome.com.tw/users/20129506/ironman/3700?page=1

+ ES6<br>
https://ithelp.ithome.com.tw/articles/10223406

JavaScript
jQuery 這個 JavaScript 函式庫
初衷是用來簡化 HTML 與 JavaScript 之間的溝通與操作

 <!-- 将<script type="text/javascript"></script>
 修改为<script type="module"></script> -->

### API

+ Application Programming Interface
+ RESTful API<br>
https://ithelp.ithome.com.tw/users/20107247/ironman/1312?page=1

## ALL

![](https://i.imgur.com/QPYZIfa.png)

1. [正妹教學](https://ithelp.ithome.com.tw/users/20121212/ironman/3578)

2. [初心者的前端路線學習指南](https://medium.com/i-am-mike/%E5%88%9D%E5%BF%83%E8%80%85%E7%9A%84%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%B7%9A%E5%AD%B8%E7%BF%92%E6%8C%87%E5%8D%97-895de088257f)

3.  [什麼是切版？切版練習的方式與工具](https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E4%BB%80%E9%BA%BC%E6%98%AF%E5%88%87%E7%89%88-%E5%88%87%E7%89%88%E7%B7%B4%E7%BF%92%E7%9A%84%E6%96%B9%E5%BC%8F%E8%88%87%E5%B7%A5%E5%85%B7-7069b2dbf742)

### DOM vs JS => jQuery

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

### AJAX: axios | jQuery | fetch

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

### http method

GET 的請求應用於從後端取得資料。

POST 的請求用於提交資料至後端。

PATCH 的請求用於套用資料至後端修改。

DELETE 的請求用於刪除後端指定資料

---

2XX 系列
2XX 系列代表 server 端有成功接受到請求。

200 OK
請求已成功，且馬上回傳資料。

3XX 系列
3XX 系列代表重新導向，這類的 status code 需要 client 端進行更進一步的操作才能完成請求，譬如登入後會重新導向至首頁之類的操作。

4XX 系列
4XX 系列代表 client 端有錯誤。

404 Not Found
這個 status code 想必大家應該都看過吧 XD
只要頁面不存在通常都會顯示這段文字

5XX 系列
5XX 系列代表 server 端在處理請求的過程中有錯誤，看到這類代表不用檢查自己程式碼是否有寫錯，趕快跟後端工程師反應吧 XD

