<template><h1 id="小常識"><a class="header-anchor" href="#小常識">#</a> 小常識</h1>
<h2 id="網頁架構"><a class="header-anchor" href="#網頁架構">#</a> 網頁架構</h2>
<p>說到網頁不得不提 DOM BOM
<img src="https://i.imgur.com/n9FjFpv.png" alt="BOM">
Browser Object Model
<a href="https://ithelp.ithome.com.tw/upload/images/20171214/20065504EIG4UYcuGE.png" target="_blank" rel="noopener noreferrer"><OutboundLink/></a></p>
<p><img src="https://i.imgur.com/uJwKmCq.png" alt="DOM">
Document Object Model
<a href="https://www.javadrive.jp/javascript/dom/index1.html" target="_blank" rel="noopener noreferrer"><OutboundLink/></a></p>
<p>DOM 是網頁開發的基礎
<img src="https://i.imgur.com/VDoI7q5.png" alt="Web架構"></p>
<div class="custom-container tip"><p class="custom-container-title">來源</p>
<p><a href="https://ithelp.ithome.com.tw/articles/10191765" target="_blank" rel="noopener noreferrer">S<OutboundLink/></a></p>
</div>
<h2 id="web-三本柱"><a class="header-anchor" href="#web-三本柱">#</a> Web 三本柱</h2>
<h5 id="git"><a class="header-anchor" href="#git">#</a> Git</h5>
<ul>
<li><a href="https://progressbar.tw/posts/49" target="_blank" rel="noopener noreferrer">雖然 Git 用下指令才能發揮威力，但降低門檻從圖形化介面入門也沒不好<OutboundLink/></a></li>
<li><a href="https://noob.tw/open-source-licenses/" target="_blank" rel="noopener noreferrer">常見的五個開源專案授權條款，使用軟體更自由<OutboundLink/></a></li>
<li><a href="https://gitbook.tw/chapters/using-git/ignore.html" target="_blank" rel="noopener noreferrer">Git ignore<OutboundLink/></a></li>
</ul>
<hr>
<h5 id="語言-language"><a class="header-anchor" href="#語言-language">#</a> 語言 Language</h5>
<p><img src="https://i.imgur.com/9DX9OuA.png" alt="靜態型別-必須宣告資料"></p>
<hr>
<h5 id="多國語系-localization"><a class="header-anchor" href="#多國語系-localization">#</a> 多國語系 Localization</h5>
<p><a href="https://english.bruceli.net/2011/11/zhzh-tw-zh-cn.html" target="_blank" rel="noopener noreferrer">zh 或 zh-tw, zh-cn 是什麼的縮寫？<OutboundLink/></a></p>
<hr>
<h3 id="html"><a class="header-anchor" href="#html">#</a> html</h3>
<details>
  <summary>html tag</summary>
<table>
<thead>
<tr>
<th>HTML TAG</th>
<th>Eng.</th>
<th>X</th>
</tr>
</thead>
<tbody>
<tr>
<td>var</td>
<td>variable</td>
<td>Text</td>
</tr>
<tr>
<td>q</td>
<td>quotation</td>
<td>Text</td>
</tr>
<tr>
<td>em</td>
<td>emphasized</td>
<td>Text</td>
</tr>
<tr>
<td>b</td>
<td>bold</td>
<td>Text</td>
</tr>
<tr>
<td>i</td>
<td>italic</td>
<td>Text</td>
</tr>
<tr>
<td>br</td>
<td>break</td>
<td>Text</td>
</tr>
<tr>
<td>u</td>
<td>underlined</td>
<td>Text</td>
</tr>
<tr>
<td>s</td>
<td>strikethrough</td>
<td>Text</td>
</tr>
<tr>
<td>span</td>
<td>span</td>
<td>範圍</td>
</tr>
<tr>
<td>ol</td>
<td>ordered list</td>
<td>Text</td>
</tr>
<tr>
<td>ul</td>
<td>unordered list</td>
<td>Text</td>
</tr>
<tr>
<td>li</td>
<td>list item</td>
<td>***</td>
</tr>
<tr>
<td>h1</td>
<td>header 1</td>
<td>***</td>
</tr>
<tr>
<td>p</td>
<td>paragraph</td>
<td>段落</td>
</tr>
<tr>
<td>hr</td>
<td>horizontal rule</td>
<td>段落</td>
</tr>
<tr>
<td>rel</td>
<td>relations</td>
<td>关联到一个 stylesheet（样式表单)</td>
</tr>
</tbody>
</table>
</details>
<hr>
<h3 id="js"><a class="header-anchor" href="#js">#</a> JS</h3>
<p>重新認識 JavaScript: Day 01 前言
2018 鐵人賽 javascript</p>
<ul>
<li><a href="https://ithelp.ithome.com.tw/articles/10190633" target="_blank" rel="noopener noreferrer">Kuro Hsu<OutboundLink/></a></li>
<li><a href="https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/" target="_blank" rel="noopener noreferrer">從 ES6 開始的 JavaScript學習生活<OutboundLink/></a></li>
<li><a href="https://ithelp.ithome.com.tw/users/20129506/ironman/3700?page=1" target="_blank" rel="noopener noreferrer">JavaScript 初心者ノ研究日記<OutboundLink/></a></li>
<li><a href="https://ithelp.ithome.com.tw/articles/10223406" target="_blank" rel="noopener noreferrer">ES6<OutboundLink/></a></li>
</ul>
<p>來認識for...in for...of
in  ES6 key</p>
<p>for ES5 value</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 試著讓 Array 繼承一些屬性或方法</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>test<span class="token operator">=</span><span class="token string">"test12"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> items<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> prop <span class="token keyword">in</span> items<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>items<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//檢查這是否為非繼承的屬性</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"index:"</span><span class="token operator">+</span>prop<span class="token operator">+</span><span class="token string">"__"</span><span class="token operator">+</span>items<span class="token punctuation">[</span>prop<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// index:0__a</span>
<span class="token comment">// index:1__b</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h5 id="api-application-programming-interface"><a class="header-anchor" href="#api-application-programming-interface">#</a> API (Application Programming Interface)</h5>
<ul>
<li>RESTful API<br>
https://ithelp.ithome.com.tw/users/20107247/ironman/1312?page=1</li>
</ul>
<hr>
<h3 id="css"><a class="header-anchor" href="#css">#</a> CSS</h3>
<ol start="0">
<li>權重
!important &gt; inline style &gt; ID &gt; Class &gt; Element &gt; *</li>
<li><a href="https://5xruby.tw/posts/play-sass-mixin-and-include" target="_blank" rel="noopener noreferrer">新手也可以輕鬆玩轉 SASS - @mixin  @include<OutboundLink/></a></li>
</ol>
<div class="custom-container tip"><p class="custom-container-title">白話</p>
<p>@mixin 抽取 <br>
@include 召喚使用</p>
</div>
<details class="custom-container details"><summary>[範例]</summary>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token comment">/* 範例 1*/</span>
  <span class="token keyword">@mixin</span> <span class="token selector">rounded-border </span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 2px #333 solid<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">@mixin</span> <span class="token selector">shadow </span><span class="token punctuation">{</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 1px 2px 2px #666<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.article </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> rounded-border<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.button </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> rounded-border<span class="token punctuation">;</span>
    <span class="token keyword">@include</span> shadow<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token comment">/* 範例 2*/</span>
  <span class="token keyword">@mixin</span> <span class="token function">cover</span><span class="token punctuation">(</span><span class="token variable">$opacity_value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> <span class="token variable">$opacity_value</span><span class="token punctuation">;</span> <span class="token comment">// opacity 的值由傳進來的參數決定</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.avatar </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">cover</span><span class="token punctuation">(</span>0.9<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 呼叫的時候帶入數值</span>
  <span class="token punctuation">}</span>

  <span class="token selector">.product-image </span><span class="token punctuation">{</span>
    <span class="token keyword">@include</span> <span class="token function">cover</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 呼叫的時候帶入數值</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div></details>
<hr>
<h3 id="all-文章"><a class="header-anchor" href="#all-文章">#</a> ALL 文章</h3>
<p><img src="https://i.imgur.com/QPYZIfa.png" alt=""></p>
<ol>
<li>
<p><a href="https://ithelp.ithome.com.tw/users/20121212/ironman/3578" target="_blank" rel="noopener noreferrer">正妹教學<OutboundLink/></a></p>
</li>
<li>
<p><a href="https://medium.com/i-am-mike/%E5%88%9D%E5%BF%83%E8%80%85%E7%9A%84%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%B7%9A%E5%AD%B8%E7%BF%92%E6%8C%87%E5%8D%97-895de088257f" target="_blank" rel="noopener noreferrer">初心者的前端路線學習指南<OutboundLink/></a></p>
</li>
<li>
<p><a href="https://medium.com/%E9%BA%A5%E5%85%8B%E7%9A%84%E5%8D%8A%E8%B7%AF%E5%87%BA%E5%AE%B6%E7%AD%86%E8%A8%98/%E4%BB%80%E9%BA%BC%E6%98%AF%E5%88%87%E7%89%88-%E5%88%87%E7%89%88%E7%B7%B4%E7%BF%92%E7%9A%84%E6%96%B9%E5%BC%8F%E8%88%87%E5%B7%A5%E5%85%B7-7069b2dbf742" target="_blank" rel="noopener noreferrer">什麼是切版？切版練習的方式與工具<OutboundLink/></a></p>
</li>
<li>
<p><a href="https://ithelp.ithome.com.tw/users/20111948/ironman/1776" target="_blank" rel="noopener noreferrer">從 0 開始的網頁生活！30 天從網頁新手到網頁入門<OutboundLink/></a></p>
</li>
</ol>
<hr>
<h5 id="dom-vs-js-jquery"><a class="header-anchor" href="#dom-vs-js-jquery">#</a> DOM vs JS =&gt; jQuery</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">)</span>
test<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Hello World'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#test'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">alert</span><span class="token punctuation">(</span>'Hello World
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>頁面讀取: 白話來說 就是 DOM 建立好就執行 function 和 等圖片等 DOM 載入完成才執行 function</p>
<p>$(document).ready(callback)<br>
當頁面內的 DOM 都準備好開始讀取就會執行 callback 內的 function ，亦可簡寫成 $(() =&gt; {})</p>
<p>window.onload = callback<br>
當頁面內的 DOM 已經開始讀取才會執行 callback 內的 function 。</p>
<p>CSS 選擇器</p>
<hr>
<h5 id="ajax-axios-jquery-fetch"><a class="header-anchor" href="#ajax-axios-jquery-fetch">#</a> AJAX: axios | jQuery | fetch</h5>
<p>前端與後端溝通的橋樑
非同步</p>
<p>早期:
XMLHttpRequest</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> xhttp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 當readyState改變就會呼叫此function</span>
xhttp<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// readyState === 4 代表 DONE、status === 200 代表成功收到資料</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
xhttp<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span> <span class="token string">"url"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhttp<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>jQuery 的 AJAX API</p>
<hr>
<h5 id="http-method"><a class="header-anchor" href="#http-method">#</a> http method</h5>
<ul>
<li>POST 的請求用於提交資料至後端</li>
<li>DELETE 的請求用於刪除後端指定資料</li>
<li>GET 的請求應用於從後端取得資料</li>
<li>PATCH 的請求用於套用資料至後端修改</li>
<li>PUT 如果已經存在就替換，沒有就新增(被取代)</li>
</ul>
<p><a href="https://ihower.tw/blog/archives/6483" target="_blank" rel="noopener noreferrer">PUT PATCH 差異<OutboundLink/></a></p>
<hr>
<blockquote>
<p>2XX 系列</p>
<blockquote>
<p>2XX 系列代表 server 端有成功接受到請求。</p>
</blockquote>
</blockquote>
<blockquote>
<p>200 OK</p>
<blockquote>
<p>請求已成功，且馬上回傳資料。</p>
</blockquote>
</blockquote>
<blockquote>
<p>3XX 系列</p>
<blockquote>
<p>3XX 系列代表重新導向，這類的 status code 需要 client 端進行更進一步的操作才能完成請求，
譬如登入後會重新導向至首頁之類的操作。</p>
</blockquote>
</blockquote>
<blockquote>
<p>4XX 系列</p>
<blockquote>
<p>4XX 系列代表 client 端有錯誤。
404 Not Found</p>
</blockquote>
</blockquote>
<blockquote>
<p>5XX 系列</p>
<blockquote>
<p>5XX 系列代表 server 端在處理請求的過程中有錯誤，看到這類代表不用檢查自己程式碼是否有寫錯</p>
</blockquote>
</blockquote>
<p>---常用 https://ithelp.ithome.com.tw/articles/10240440
有的套件，會要求npm的最低版本，可以用npm -v 查看目前的版本是多少
npm -v</p>
<p>安裝package.json紀錄的所有套件
npm install</p>
<p>在整台電腦上，安裝或移除特定的第三方套件，並記錄至Package.json (通常用在，所有專案都會用到的CLI工具)
npm install -g　套件名稱  #npm install --global
npm uninstall -g　套件名稱</p>
<p>在某個專案資料夾底下，安裝特定的第三方套件，並記錄至Package.json (通常用在，某個專案的函式庫或框架)
npm install -s　套件名稱 #npm install --save
npm uninstall s　套件名稱</p>
<p>在某個專案資料夾底下，安裝特定的第三方套件，用於開發環境
npm install -D 套件名稱 #npm install --save-dev
npm uninstall -D 套件名稱</p>
</template>

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
