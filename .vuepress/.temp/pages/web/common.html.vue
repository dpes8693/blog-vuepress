<template><h1 id="小常識"><a class="header-anchor" href="#小常識">#</a> 小常識</h1>
<h2 id="網頁架構"><a class="header-anchor" href="#網頁架構">#</a> 網頁架構</h2>
<p>說到網頁不得不提DOM BOM
![BOM](https://i.imgur.com/n9FjFpv.png =500x)
Browser Object Model
https://ithelp.ithome.com.tw/upload/images/20171214/20065504EIG4UYcuGE.png</p>
<p>![DOM](https://i.imgur.com/uJwKmCq.png =500x)
Document Object Model
https://www.javadrive.jp/javascript/dom/index1.html</p>
<h2 id="web三本柱"><a class="header-anchor" href="#web三本柱">#</a> Web三本柱</h2>
<h3 id="git"><a class="header-anchor" href="#git">#</a> Git</h3>
<p>雖然Git用下指令才能發揮威力，但降低門檻從圖形化介面入門也沒不好。
https://progressbar.tw/posts/49</p>
<p>常見的五個開源專案授權條款，使用軟體更自由
https://noob.tw/open-source-licenses/</p>
<p>git ignore
https://gitbook.tw/chapters/using-git/ignore.html</p>
<h3 id="語言-language"><a class="header-anchor" href="#語言-language">#</a> 語言 Language</h3>
<p><img src="https://i.imgur.com/9DX9OuA.png" alt="靜態型別-必須宣告資料"></p>
<h3 id="多國語系-localization"><a class="header-anchor" href="#多國語系-localization">#</a> 多國語系 Localization</h3>
<p>zh或zh-tw, zh-cn是什麼的縮寫？
https://english.bruceli.net/2011/11/zhzh-tw-zh-cn.html</p>
<h3 id="html"><a class="header-anchor" href="#html">#</a> html</h3>
<p>從0開始的網頁生活！30天從網頁新手到網頁入門
https://ithelp.ithome.com.tw/users/20111948/ironman/1776</p>
<p>| HTML TAG | Eng. |
| -------- | -------- | -------- |
| var     | variable     | Text     |
| q     | quotation     | Text     |
| em     | emphasized     | Text     |
| b     | bold     | Text     |
| i     | italic     | Text     |
| br     | break     | Text     |
| u     | underlined     | Text     |
| s     | strikethrough     | Text     |
| span     | span     | 範圍     |
| ol     | ordered list     | Text     |
| ul     | unordered list     | Text     |
| li     | list item     | ***     |
| h1     | header 1    | ***      |
| p     | paragraph    | 段落     |
| hr    | horizontal rule    | 段落     |
| rel    | relations   | 关联到一个stylesheet（样式表单)     |</p>
<h3 id="js"><a class="header-anchor" href="#js">#</a> JS</h3>
<p>重新認識 JavaScript: Day 01 前言
2018鐵人賽 javascript
Kuro Hsu
https://ithelp.ithome.com.tw/articles/10190633</p>
<p>從ES6開始的JavaScript學習生活
https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/</p>
<p>JavaScript初心者ノ研究日記
https://ithelp.ithome.com.tw/users/20129506/ironman/3700?page=1</p>
<p>ES6
https://ithelp.ithome.com.tw/articles/10223406</p>
<p>JavaScript
jQuery 這個 JavaScript 函式庫
初衷是用來簡化 HTML 與 JavaScript 之間的溝通與操作</p>
 <!-- 将<script type="text/javascript"></script>
 修改为<script type="module"></script> -->
<h3 id="api"><a class="header-anchor" href="#api">#</a> API</h3>
<p>Application Programming Interface
RESTful API
https://ithelp.ithome.com.tw/users/20107247/ironman/1312?page=1</p>
<h2 id="all"><a class="header-anchor" href="#all">#</a> ALL</h2>
<p><img src="https://i.imgur.com/QPYZIfa.png" alt=""></p>
<p>1.妹子教學
https://ithelp.ithome.com.tw/users/20121212/ironman/3578
2.初心者的前端路線學習指南
https://medium.com/i-am-mike/%E5%88%9D%E5%BF%83%E8%80%85%E7%9A%84%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%B7%9A%E5%AD%B8%E7%BF%92%E6%8C%87%E5%8D%97-895de088257f</p>
<ol start="3">
<li></li>
</ol>
<p>https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E4%BB%80%E9%BA%BC%E6%98%AF%E5%88%87%E7%89%88-%E5%88%87%E7%89%88%E7%B7%B4%E7%BF%92%E7%9A%84%E6%96%B9%E5%BC%8F%E8%88%87%E5%B7%A5%E5%85%B7-7069b2dbf742</p>
<h3 id="dom-vs-js-jquery"><a class="header-anchor" href="#dom-vs-js-jquery">#</a> DOM vs JS =&gt; jQuery</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span>
test<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Hello World'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#test'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">alert</span><span class="token punctuation">(</span>'Hello World
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>頁面讀取: 白話來說 就是DOM建立好就執行function 和 等圖片等DOM載入完成才執行function</p>
<p>$(document).ready(callback)
當頁面內的 DOM 都準備好開始讀取就會執行 callback 內的 function ，亦可簡寫成 $(() =&gt; {})</p>
<p>window.onload = callback
當頁面內的 DOM 已經開始讀取才會執行 callback 內的 function 。</p>
<p>CSS選擇器</p>
<h3 id="ajax-axios-jquery-fetch"><a class="header-anchor" href="#ajax-axios-jquery-fetch">#</a> AJAX: axios | jQuery | fetch</h3>
<p>前端與後端溝通的橋樑
非同步</p>
<p>早期:
XMLHttpRequest</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> xhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 當readyState改變就會呼叫此function</span>
xhttp<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// readyState === 4 代表 DONE、status === 200 代表成功收到資料</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
xhttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span> <span class="token string">"url"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>jQuery 的 AJAX API</p>
<hr>
<h3 id="http-method"><a class="header-anchor" href="#http-method">#</a> http method</h3>
<p>GET 的請求應用於從後端取得資料。</p>
<p>POST 的請求用於提交資料至後端。</p>
<p>PATCH 的請求用於套用資料至後端修改。</p>
<p>DELETE 的請求用於刪除後端指定資料</p>
<hr>
<p>2XX系列
2XX系列代表 server 端有成功接受到請求。</p>
<p>200 OK
請求已成功，且馬上回傳資料。</p>
<p>3XX系列
3XX系列代表重新導向，這類的 status code 需要 client 端進行更進一步的操作才能完成請求，譬如登入後會重新導向至首頁之類的操作。</p>
<p>4XX系列
4XX系列代表 client 端有錯誤。</p>
<p>404 Not Found
這個 status code 想必大家應該都看過吧XD
只要頁面不存在通常都會顯示這段文字</p>
<p>5XX系列
5XX系列代表 server 端在處理請求的過程中有錯誤，看到這類代表不用檢查自己程式碼是否有寫錯，趕快跟後端工程師反應吧XD</p>
</template>