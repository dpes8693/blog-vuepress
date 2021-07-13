# 深入的學習link
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
 ## 關於前端發展
1. web前端入坑系列
    ![web前端入坑系列](https://i.imgur.com/lwKwPXJ.png)
    [web前端入坑系列](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/36936/)

 ## 資料處理
0. API RESTful JSON範例
    [generated API reference.](https://course-ec-api.hexschool.io/document?javascript#frontend-login)

1. request的方式？ajax & fetch & axios
    ![ajax & fetch & axios](https://i.imgur.com/47fsWV8.png)
    [ajax & fetch & axios](https://ithelp.ithome.com.tw/articles/10244631)
    
2. JavaScript基本功修練：Day29 - axios基本語法與練習(GET、POST請求)
    ![基本功](https://i.imgur.com/w1INAgp.png)
    [axios基本語法與練習](https://ithelp.ithome.com.tw/articles/10253259)

3. Axios介紹(使用+作用)<br>
    ![Axios介紹(使用+作用)](https://i.imgur.com/LrF5Lrd.png)<br>
    [Axios介紹(使用+作用)](https://www.cnblogs.com/yuanjili666/articles/11299759.html)

  ### 登入
    1. 登入練習 六角學院
        [六角學院 AJAX 練習](https://github.com/hexschool/nodejs_ajax_tutorial)

---

 ## JS
```js
ES6普及了 Chrome完全支援ES7 持續努力
Hoisting
undefined
coercion 扣兒二宣->強迫
precedence 優先級

陳述式(Statement) 不會回傳結果。 
    var a =1
*表達式(Expression) return
    1
    true
    return 2
```
1. 
    [JS中函式的參數(parameter),arguments和展開運算子(spread)](https://pjchender.blogspot.com/2016/04/javascriptparameterargumentsspread.html)

    中文 爭論,論證;白話來說就是 裡面得參數用很像陣列的方式表示
    ```js
        function argu(帶入的參數1,參數2){
            console.log(arguments)
        }
        //斜體的 [] (array-like)
        argu();// []
        argu("87");// ["87"]
        argu("54","87");// ["54","87"]

    ```
2. 
    [JS中coercion的實際使用--建立函式預設值(default value)](https://pjchender.blogspot.com/2016/01/javascriptcoercion-default-value.html)
    舉個例子
    ```js
        dialogDelete(val) {
        val || this.closeDelete()
        
        }

        function greet(name){
            name = nme || '8787'
            console.log(name)
        }

    ```
3. 
    [箭頭函式ES6](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)


---

 ## Vue
1. 勇者鬥Vue龍 2019
[勇者鬥Vue龍 2019](https://ithelp.ithome.com.tw/users/20107789/ironman/1710) 
2. 前端史萊姆
[前端史萊姆與Vue的三十天時光冒險](https://ithelp.ithome.com.tw/users/20120426/ironman/2505)
3. 從0開始vue.js
[從0開始vue.js的30天學習日誌](https://ithelp.ithome.com.tw/users/20108224/ironman/1796)
4. 用範例理解 Vue.js 系列
[用範例理解 Vue.js 系列](https://ithelp.ithome.com.tw/users/20107107/ironman/1243)

 #####  nextTick()
    1. nextTick()方法,白話來說就是 等函數執行完成才渲染啦,不用徒勞作渲染
        ```js
        Vue.nextTick()
        ```
