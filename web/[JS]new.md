# How many new Object? @@

```js
//Math
//BigInt
//Symbol
let array = new Array(1, 2, 3);
let number = new Number(0);
let string = new String("string");
let adder = new Function("a", "b", "return a + b"); //unsafe-eval
let object = new Object({ id: 1 });
let boolean = new Boolean();

new RegExp();
new Map();
new Set();

const date = new Date();
const promise = new Promise((resolve, reject) => {
  resolve(); // 正確完成的回傳方法
  reject(); // 失敗的回傳方法
});
const error = new Error("Whoops!");
try {
  throw error;
} catch (e) {
  console.log(e.name + ": " + e.message);
}
// 构造函数;
const text = new Text();
const img = new Image();
const audio = new Audio();

const http = new XMLHttpRequest();
const parser = new DOMparser();

let file = new File();
let reader = new FileReader();

let speech = new webkitSpeechRecognition(); //webkit
//Blob物件
new Blob();

//Proxy物件
const buffer = new ArrayBuffer(8); //16
// new RangeError([message[, fileName[, lineNumber]]])
let a = new Proxy({ id: 1 }, function () {});

// new URL(<url>, <base>);
// 建立 URL 物件
new URL("https://www.google.com/foo"); // https://www.google.com/foo
new URL("bar", "https://www.google.com/foo"); // https://www.google.com/bar

// 建立 Hash Tag
var url = new URL("https://example.com/path?foo=1&bar=2");
url.hash = "hashTag";

// 取得 url 資訊
url.href; // "https://example.com/path?foo=1&bar=2"
url.hostname; // "example.com"
url.pathname; // "/path"
url.search; // "?foo=1&bar=2"
url.protocol; // "https:"

// 可以用的方法
url.toString(); // "https://example.com/path?foo=1&bar=2"

new XMLSerializer();

var data = new FormData();

let params = new URLSearchParams();
const userName = document.querySelector(".username"); // userNo1
const password = document.querySelector(".password"); // 123456aaa
params.append("username", userName);
params.append("passward", password);

// 0726
var e = new KeyboardEvent("keydown", { key: "g" });
```

---

NEW 起來
Primitive Wrapper
https://ithelp.ithome.com.tw/articles/10193902
