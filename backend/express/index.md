# Express code example

## 寫這系列的動機

Nodejs 2009 年到現在也有一定年紀了，經歷了 ES6 導致網路上出現新舊範例混合這個問題!

我剛學的時候也很頭痛，到底哪個寫法比較好?哪些是套件語法?哪些是 express 內建語法?

因為有這個痛點，所以花了很多時間爬文和整理，希望有幫助到剛入坑的人!

## 學 Express 前你需要具備的知識

- 知道 Nodejs 和 JS 的差異
- 知道 npm 是甚麼和 npm 指令
- var const let 差異
- ES6 新的語法相關知識

- 前端送給後端的[編碼格式](https://notfalse.net/40/http-representation#Content-Encoding)
  - 預設 header`application/x-www-form-urlencoded` body 長這樣 `"key1=value1&key2=value2"`
  - `application/json` body 長這樣 `{"id":1,"name":cat}`
  - `multipart/form-data` body 長這樣 `key1=value1key2=value2`
  - `text/plain` body 長這樣 `<b>hello world</b>`

[入坑 Nodejs 文章](https://dpes5407.medium.com/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B%E5%AF%AB%E5%BE%8C%E7%AB%AF-%E7%B4%80%E9%8C%84-29689432f9f8)

沒有這些會非常辛苦!

## Github 有整理了我寫的範例

[Express example](https://github.com/todomonster/template-code-example/tree/main/express/express4)

## 知識補充

[如何預防使用者串改副檔名? 交給 file-type](/blog-vuepress/backend/express/file-type.html)

## body-parser 新舊程式碼 PK

```js
// body-parser 簡單來說就是編碼轉換的套件，Express 4.16已經合併進來，不用另外安裝
// 強力建議看完這篇 https://ithelp.ithome.com.tw/articles/10241083

// 為什麼urlencoded要繼承? 因為他引用了其他套件;2個要選一個

// json data => postman 格式選 raw/json
// form data => postman 格式選 x-www-form-urlencoded

// ============================== 現代版，箭頭函數，編碼轉換丟第二個參數
const express = require("express");
const app = express();

app.post("/json", express.json(), (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
});

app.post("/urlencoded", express.urlencoded({ extended: true }), (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3011, () => console.log("http://localhost:3011/"));
```

```js
// ============================== 以前的版本
var express = require("express");
var app = express();

var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();
app.post("/json", jsonParser, function (req, res) {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
});

var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.post("/urlencoded", urlencodedParser, function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3011, () => console.log("http://localhost:3011/"));
```

```js
//你也可能在網路上看到這種的，這樣不大好是因為不一定格是都為json
const express = require("express");
const app = express();
// 白話就是前端給的資料全部幫我轉成json格式啦
app.use(express.json());

app.post("/json", (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
});

app.listen(3011, () => console.log("http://localhost:3011/"));
```
