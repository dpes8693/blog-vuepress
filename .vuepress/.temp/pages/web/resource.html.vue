<template><h1 id="深入的學習link"><a class="header-anchor" href="#深入的學習link">#</a> 深入的學習link</h1>
<h2 id="關於前端發展"><a class="header-anchor" href="#關於前端發展">#</a> 關於前端發展</h2>
<ol>
<li>web前端入坑系列
<img src="https://i.imgur.com/lwKwPXJ.png" alt="web前端入坑系列">
<a href="https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/36936/" target="_blank" rel="noopener noreferrer">web前端入坑系列<OutboundLink/></a></li>
</ol>
<h2 id="資料處理"><a class="header-anchor" href="#資料處理">#</a> 資料處理</h2>
<ol start="0">
<li>
<p>API RESTful JSON範例
<a href="https://course-ec-api.hexschool.io/document?javascript#frontend-login" target="_blank" rel="noopener noreferrer">generated API reference.<OutboundLink/></a></p>
</li>
<li>
<p>request的方式？ajax &amp; fetch &amp; axios
<img src="https://i.imgur.com/47fsWV8.png" alt="ajax &amp; fetch &amp; axios">
<a href="https://ithelp.ithome.com.tw/articles/10244631" target="_blank" rel="noopener noreferrer">ajax &amp; fetch &amp; axios<OutboundLink/></a></p>
</li>
<li>
<p>JavaScript基本功修練：Day29 - axios基本語法與練習(GET、POST請求)
<img src="https://i.imgur.com/w1INAgp.png" alt="基本功">
<a href="https://ithelp.ithome.com.tw/articles/10253259" target="_blank" rel="noopener noreferrer">axios基本語法與練習<OutboundLink/></a></p>
</li>
<li>
<p>Axios介紹(使用+作用)<br>
<img src="https://i.imgur.com/LrF5Lrd.png" alt="Axios介紹(使用+作用)"><br>
<a href="https://www.cnblogs.com/yuanjili666/articles/11299759.html" target="_blank" rel="noopener noreferrer">Axios介紹(使用+作用)<OutboundLink/></a></p>
</li>
</ol>
<h3 id="登入"><a class="header-anchor" href="#登入">#</a> 登入</h3>
<pre><code>1. 登入練習 六角學院
    [六角學院 AJAX 練習](https://github.com/hexschool/nodejs_ajax_tutorial)
</code></pre>
<hr>
<h2 id="js"><a class="header-anchor" href="#js">#</a> JS</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">ES6</span>普及了 Chrome完全支援<span class="token constant">ES7</span> 持續努力
Hoisting
<span class="token keyword">undefined</span>
coercion 扣兒二宣<span class="token operator">-</span><span class="token operator">></span>強迫
precedence 優先級

<span class="token function">陳述式</span><span class="token punctuation">(</span>Statement<span class="token punctuation">)</span> 不會回傳結果。 
    <span class="token keyword">var</span> a <span class="token operator">=</span><span class="token number">1</span>
<span class="token operator">*</span><span class="token function">表達式</span><span class="token punctuation">(</span>Expression<span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token number">1</span>
    <span class="token boolean">true</span>
    <span class="token keyword">return</span> <span class="token number">2</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol>
<li>
<p><a href="https://pjchender.blogspot.com/2016/04/javascriptparameterargumentsspread.html" target="_blank" rel="noopener noreferrer">JS中函式的參數(parameter),arguments和展開運算子(spread)<OutboundLink/></a></p>
<p>中文 爭論,論證;白話來說就是 裡面得參數用很像陣列的方式表示</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">argu</span><span class="token punctuation">(</span><span class="token parameter">帶入的參數<span class="token number">1</span><span class="token punctuation">,</span>參數<span class="token number">2</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//斜體的 [] (array-like)</span>
    <span class="token function">argu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// []</span>
    <span class="token function">argu</span><span class="token punctuation">(</span><span class="token string">"87"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// ["87"]</span>
    <span class="token function">argu</span><span class="token punctuation">(</span><span class="token string">"54"</span><span class="token punctuation">,</span><span class="token string">"87"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// ["54","87"]</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li>
<li>
<p><a href="https://pjchender.blogspot.com/2016/01/javascriptcoercion-default-value.html" target="_blank" rel="noopener noreferrer">JS中coercion的實際使用--建立函式預設值(default value)<OutboundLink/></a>
舉個例子</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">dialogDelete</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    val <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">closeDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        name <span class="token operator">=</span> nme <span class="token operator">||</span> <span class="token string">'8787'</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li>
<li>
<p><a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions" target="_blank" rel="noopener noreferrer">箭頭函式ES6<OutboundLink/></a></p>
</li>
</ol>
<hr>
<h2 id="vue"><a class="header-anchor" href="#vue">#</a> Vue</h2>
<ol>
<li>勇者鬥Vue龍 2019
<a href="https://ithelp.ithome.com.tw/users/20107789/ironman/1710" target="_blank" rel="noopener noreferrer">勇者鬥Vue龍 2019<OutboundLink/></a></li>
<li>前端史萊姆
<a href="https://ithelp.ithome.com.tw/users/20120426/ironman/2505" target="_blank" rel="noopener noreferrer">前端史萊姆與Vue的三十天時光冒險<OutboundLink/></a></li>
<li>從0開始vue.js
<a href="https://ithelp.ithome.com.tw/users/20108224/ironman/1796" target="_blank" rel="noopener noreferrer">從0開始vue.js的30天學習日誌<OutboundLink/></a></li>
<li>用範例理解 Vue.js 系列
<a href="https://ithelp.ithome.com.tw/users/20107107/ironman/1243" target="_blank" rel="noopener noreferrer">用範例理解 Vue.js 系列<OutboundLink/></a></li>
</ol>
<h5 id="nexttick"><a class="header-anchor" href="#nexttick">#</a> nextTick()</h5>
<pre><code>1. nextTick()方法,白話來說就是 等函數執行完成才渲染啦,不用徒勞作渲染
    ```js
    Vue.nextTick()
    ```
</code></pre>
<h2 id="css"><a class="header-anchor" href="#css">#</a> CSS</h2>
<p>權重
<a href="https://ithelp.ithome.com.tw/articles/10196454" target="_blank" rel="noopener noreferrer">權重<OutboundLink/></a>
<a href="https://ithelp.ithome.com.tw/articles/10240444" target="_blank" rel="noopener noreferrer">Specificity<OutboundLink/></a></p>
</template>