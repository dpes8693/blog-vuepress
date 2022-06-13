# 學習資源2
<!-- resource -->

## 關於前端發展

1. web 前端入坑系列
<p>
  第一篇：&nbsp;<a
    href="https://mp.weixin.qq.com/s?__biz=MzI5ODM3MjcxNQ==&amp;mid=2247483703&amp;idx=1&amp;sn=173038906c6c86346fc14670af7cfb27&amp;scene=21#wechat_redirect"
    >web 前端入坑第一篇：web前端到底是什麼？有前途嗎</a
  ><br />第二篇：&nbsp;<a
    href="https://mp.weixin.qq.com/s?__biz=MzI5ODM3MjcxNQ==&amp;mid=2247483840&amp;idx=2&amp;sn=0ff8bb94c24f0fd4bb9a044a9ff9251d&amp;scene=21#wechat_redirect"
    >web前端入坑第二篇：web前端到底怎麼學？乾貨資料！</a
  ><br />第三篇：&nbsp;<a
    href="https://mp.weixin.qq.com/s?__biz=MzI5ODM3MjcxNQ==&amp;mid=2247483750&amp;idx=1&amp;sn=5dbb5b0e57ca0a1625a2e62b6f4eaf32&amp;scene=21#wechat_redirect"
    >web前端入坑第三篇：&nbsp;</a
  ><a
    href="https://mp.weixin.qq.com/s?__biz=MzI5ODM3MjcxNQ==&amp;mid=2247483840&amp;idx=2&amp;sn=0ff8bb94c24f0fd4bb9a044a9ff9251d&amp;scene=21#wechat_redirect"
    >web前端| 一條“不歸路” – 學習路線！</a><br />第四篇：&nbsp;<a
    href="https://mp.weixin.qq.com/s?__biz=MzI5ODM3MjcxNQ==&amp;mid=2247483750&amp;idx=1&amp;sn=5dbb5b0e57ca0a1625a2e62b6f4eaf32&amp;scene=21#wechat_redirect"
    >web前端入坑第四篇：&nbsp;</a
  ><a
    href="https://mp.weixin.qq.com/s?__biz=MzI5ODM3MjcxNQ==&amp;mid=2247483840&amp;idx=2&amp;sn=0ff8bb94c24f0fd4bb9a044a9ff9251d&amp;scene=21#wechat_redirect"
  >web前端 | 你還在用jQuery？</a><br />第五篇：&nbsp;<a
    href="https://mp.weixin.qq.com/s?__biz=MzI5ODM3MjcxNQ==&amp;mid=2247483943&amp;idx=1&amp;sn=d2b019ae41d8bd63d42f5abd0df64173&amp;chksm=eca79923dbd01035b4038e8c513075ed5dcf201659cfca291125f45b4491fa96cf8b6f023a50&amp;scene=21#wechat_redirect"
    >秒懂Vuejs、Angular、React原理和前端發展歷史</a
  ><a
    href="https://mp.weixin.qq.com/s?__biz=MzI5ODM3MjcxNQ==&amp;mid=2247483943&amp;idx=1&amp;sn=d2b019ae41d8bd63d42f5abd0df64173&amp;chksm=eca79923dbd01035b4038e8c513075ed5dcf201659cfca291125f45b4491fa96cf8b6f023a50&amp;scene=21#wechat_redirect"
    >！</a
  ><br />番外篇：&nbsp;<a
    href="https://mp.weixin.qq.com/s?__biz=MzI5ODM3MjcxNQ==&amp;mid=2247483777&amp;idx=1&amp;sn=b958ee69a06bd5b775623e0cb23a526c&amp;scene=21#wechat_redirect"
    >web前端&nbsp;|&nbsp;如何選擇擼碼神器</a
  >
</p>

## 資料處理

0. API RESTful JSON 範例
   [generated API reference.](https://course-ec-api.hexschool.io/document?javascript#frontend-login)

1. request 的方式？ajax & fetch & axios
   ![ajax & fetch & axios](https://i.imgur.com/47fsWV8.png)
   [ajax & fetch & axios](https://ithelp.ithome.com.tw/articles/10244631)
2. JavaScript 基本功修練：Day29 - axios 基本語法與練習(GET、POST 請求)
   ![基本功](https://i.imgur.com/w1INAgp.png)
   [axios 基本語法與練習](https://ithelp.ithome.com.tw/articles/10253259)

3. Axios 介紹(使用+作用)<br>
   ![Axios介紹(使用+作用)](https://i.imgur.com/LrF5Lrd.png)<br>
   [Axios 介紹(使用+作用)](https://www.cnblogs.com/yuanjili666/articles/11299759.html)

### 登入

    1. 登入練習 六角學院
        [六角學院 AJAX 練習](https://github.com/hexschool/nodejs_ajax_tutorial)

---

## JS

```js
// 兩個單字先背
// coercion 發音:扣兒二宣->強迫轉型別
// precedence 優先級

陳述式(Statement); //不會回傳結果
var a = 1 * 表達式(Expression); //會回傳結果
1;
true;
return 2;
```

1.  [JS 中函式的參數(parameter),arguments 和展開運算子(spread)](https://pjchender.blogspot.com/2016/04/javascriptparameterargumentsspread.html)

    中文 爭論,論證;白話來說就是 裡面得參數用很像陣列的方式表示

    ```js
    function argu(帶入的參數1, 參數2) {
      console.log(arguments);
    }
    //斜體的 [] (array-like)
    argu(); // []
    argu("87"); // ["87"]
    argu("54", "87"); // ["54","87"]
    ```

2.  [JS 中 coercion 的實際使用--建立函式預設值(default value)](https://pjchender.blogspot.com/2016/01/javascriptcoercion-default-value.html)

    ```js
    function greet(name) {
      // || precedence高
      name = name || "yoyo8787"; // undefined被轉成false
      console.log(name);
    }
    ```

3.  [箭頭函式 ES6](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

4.  大推 [for 迴圈大亂逗](https://www.gushiciku.cn/pl/ghps/zh-tw)

5.  [Object.keys() & Object.values() & Object.entries()](https://titangene.github.io/article/javascript-object-keys-values-entries.html)

6.  [事件冒泡-DOM 事件傳遞](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)

::: details [展開/收合]EventFlow
![EventFlow](https://i.imgur.com/W25OoWR.png)
:::

7. [Optional chaining operator](https://ithelp.ithome.com.tw/articles/10230756)

::: details [展開/收合]

```js
const response = {
  rows: [
    {
      name: "John",
      age: 28,
      vehicles: {
        car: "Suzuki",
        bike: "Ubike",
        airlines: {
          "UNI AIR": "Air123",
          Mandarin: "Brt707",
        },
      },
    },
  ],
};

if (response.rows?.[0]?.vehicles?.airlines?.Mandarin === "Brt707")
  console.log("Get Brt707");

//語法記憶 a.b有嗎?.c有嗎?
//a.b?.c?
```

:::

## CSS

[權重](https://ithelp.ithome.com.tw/articles/10196454)

[Specificity](https://ithelp.ithome.com.tw/articles/10240444)
