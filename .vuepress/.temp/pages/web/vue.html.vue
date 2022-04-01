<template><h1 id="vue-js練功"><a class="header-anchor" href="#vue-js練功">#</a> <i class="fas fa-meteor"></i>  Vue.js練功</h1>
<h2 id="入門1個月要認識"><a class="header-anchor" href="#入門1個月要認識">#</a> 入門1個月要認識?</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>html <span class="token constant">DOM</span>節點傳遞
JavaScript <span class="token constant">ES5</span> <span class="token constant">ES6</span> jQuery語法
解構賦值 箭頭函數 <span class="token keyword">let</span> <span class="token keyword">const</span><span class="token punctuation">,</span>Template Literals<span class="token punctuation">,</span>Destructuring Assignment<span class="token punctuation">,</span>promise
<span class="token constant">CSS</span><span class="token operator">+</span><span class="token function">Sass</span><span class="token punctuation">(</span>Scss語法<span class="token punctuation">)</span> Prepros or Watch Sass
網站架構 <span class="token constant">MVC</span><span class="token operator">/</span><span class="token constant">MVP</span><span class="token operator">/</span><span class="token constant">MVVM</span> <span class="token constant">SPA</span><span class="token operator">/</span><span class="token constant">SSR</span>理解
cdnjs liveserver vetur插件
fontawesome <span class="token operator">+</span> bootstrap
webpack<span class="token operator">+</span>babel <span class="token keyword">package</span><span class="token punctuation">.</span>json熟悉

模板測試<span class="token operator">:</span>D2Project<span class="token punctuation">,</span>VueElementTemplate<span class="token punctuation">,</span>Vuetify
vue<span class="token operator">-</span>cli熟悉
vuepress
vue架構
<span class="token function">vue</span><span class="token punctuation">(</span>語法 directive指令<span class="token punctuation">,</span>once事件<span class="token punctuation">,</span>鍵盤滑鼠修飾子<span class="token punctuation">,</span>判斷<span class="token punctuation">,</span>迴圈<span class="token punctuation">)</span>
v<span class="token operator">-</span>bind<span class="token operator">:</span><span class="token punctuation">,</span>v<span class="token operator">-</span>model<span class="token punctuation">,</span>v<span class="token operator">-</span>text<span class="token operator">-</span>v<span class="token operator">-</span>html<span class="token punctuation">,</span>v<span class="token operator">-</span>pre
<span class="token punctuation">.</span>lazy<span class="token punctuation">,</span><span class="token punctuation">.</span>trim<span class="token punctuation">.</span>number
v<span class="token operator">-</span>on<span class="token operator">:</span>@
stop<span class="token punctuation">,</span>prevent<span class="token punctuation">,</span>capture<span class="token punctuation">,</span>self<span class="token punctuation">,</span>once<span class="token punctuation">,</span>passive
@keydown<span class="token punctuation">.</span>enter<span class="token punctuation">.</span>exact<span class="token punctuation">,</span><span class="token punctuation">.</span>meta
@click<span class="token punctuation">.</span>right<span class="token punctuation">,</span><span class="token punctuation">.</span>middle
v<span class="token operator">-</span><span class="token keyword">if</span><span class="token punctuation">,</span>v<span class="token operator">-</span>show<span class="token punctuation">,</span>v<span class="token operator">-</span><span class="token keyword">else</span><span class="token punctuation">,</span>v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span>
v<span class="token operator">-</span><span class="token keyword">for</span>
<span class="token function">$nectTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="特殊"><a class="header-anchor" href="#特殊">#</a> 特殊</h2>
<h3 id="為什麼畫面沒有刷新-但資料是對的"><a class="header-anchor" href="#為什麼畫面沒有刷新-但資料是對的">#</a> 為什麼畫面沒有刷新(但資料是對的?)</h3>
<p><a href="https://pjchender.blogspot.com/2017/05/vue-vue-reactivity.html" target="_blank" rel="noopener noreferrer">Vue 響應式原理<OutboundLink/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="名詞"><a class="header-anchor" href="#名詞">#</a> 名詞</h3>
<p><a href="https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/29473/" target="_blank" rel="noopener noreferrer">polyfill 是甚麼?<OutboundLink/></a>用於實現瀏覽器並不支援的原生API的程式碼</p>
<h3 id="js"><a class="header-anchor" href="#js">#</a> JS</h3>
<p><a href="https://www.gushiciku.cn/pl/ghps/zh-tw" target="_blank" rel="noopener noreferrer">如果再寫for迴圈，我就錘自己了<OutboundLink/></a></p>
<p><a href="https://titangene.github.io/article/javascript-object-keys-values-entries.html" target="_blank" rel="noopener noreferrer">Object.keys() &amp; Object.values() &amp; Object.entries()<OutboundLink/></a></p>
<p><a href="https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/" target="_blank" rel="noopener noreferrer">事件冒泡-DOM事件傳遞<OutboundLink/></a></p>
<details class="custom-container details"><summary>[展開圖]EventFlow</summary>
<p><img src="https://i.imgur.com/W25OoWR.png" alt="EventFlow"></p>
</details>
<p><a href="https://ithelp.ithome.com.tw/articles/10230756" target="_blank" rel="noopener noreferrer">不想再看到undefined的TypeError<OutboundLink/></a></p>
<details class="custom-container details"><summary>[展開圖]</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token punctuation">{</span>
  rows<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
      <span class="token string">"age"</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
      <span class="token string">"vehicles"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token string">"car"</span><span class="token operator">:</span> <span class="token string">"Suzuki"</span><span class="token punctuation">,</span>
         <span class="token string">"bike"</span><span class="token operator">:</span> <span class="token string">"Ubike"</span><span class="token punctuation">,</span>
         <span class="token string">"airlines"</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string">"UNI AIR"</span> <span class="token operator">:</span> <span class="token string">"Air123"</span><span class="token punctuation">,</span>
            <span class="token string">"Mandarin"</span> <span class="token operator">:</span> <span class="token string">"Brt707"</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>rows<span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>vehicles<span class="token operator">?.</span>airlines<span class="token operator">?.</span>Mandarin <span class="token operator">===</span> <span class="token string">'Brt707'</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Get Brt707'</span><span class="token punctuation">)</span>

<span class="token comment">//語法記憶 a.b有嗎?.c有嗎?</span>
<span class="token comment">//a.b?.c?</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></details>
<h3 id="採坑"><a class="header-anchor" href="#採坑">#</a> 採坑</h3>
<div class="custom-container tip"><p class="custom-container-title">vue template 根節點</p>
<pre><code>Vue template裡面只能有一個根節點
The template root requires exactly one element.
</code></pre>
</div>
<div class="custom-container tip"><p class="custom-container-title">JSON 格式語法</p>
<p>JSON 格式和js寫物件不同 {&quot;裡面&quot;:&quot;要用雙引號&quot;}
https://youtu.be/R8GL5y49iJc</p>
</div>
<details class="custom-container details"><summary>[舉個例子]</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">var</span> elements <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">'Hydrogen'</span><span class="token punctuation">,</span>
    <span class="token string">'Helium'</span><span class="token punctuation">,</span>
    <span class="token string">'Lithium'</span><span class="token punctuation">,</span>
    <span class="token string">'Beryllium'</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// 這段函式會輸出[8, 6, 7, 9]這個陣列</span>
    elements<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> element<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> 變成箭頭 塞到中間

    <span class="token comment">//1 上方這種一般的函式，可以被改寫成下方的箭頭函式</span>
    elements<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> element<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [8, 6, 7, 9]</span>

    <span class="token comment">//2 如果輸入的參數只有一個，我們可以移除掉外面的括號</span>
    elements<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> element<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [8, 6, 7, 9]</span>

    <span class="token comment">//3 當箭頭函式裡的內容只有'return'的時候，我們可以拿掉return+外面的大括號</span>
    elements<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=></span>  element<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [8, 6, 7, 9]</span>
    elements<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=></span>  element<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [8, 6, 7, 9]</span>

    <span class="token operator">--</span><span class="token operator">-</span>

    <span class="token comment">//範例2--</span>
    <span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token comment">//多行 自己加return</span>
    <span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">+</span> <span class="token number">1</span>


    <span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token comment">//匿名的函式</span>

    <span class="token operator">--</span><span class="token operator">-</span>
    <span class="token comment">//容易搞-混範例3</span>
    <span class="token keyword">const</span> <span class="token function-variable function">funcA</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">//2</span>
    <span class="token keyword">const</span> <span class="token function-variable function">funcB</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> <span class="token punctuation">{</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token comment">//undefined</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div></details>
<h3 id="練習vue"><a class="header-anchor" href="#練習vue">#</a> 練習Vue</h3>
<ol>
<li>vue cli mixin</li>
<li>ES6
Destructuring
variables in string
Arrow Function</li>
<li>import{}及exportimport{}及export</li>
<li>vue 傳值</li>
</ol>
</template>