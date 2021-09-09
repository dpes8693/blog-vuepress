<template><h1 id="名詞學習與整理"><a class="header-anchor" href="#名詞學習與整理">#</a> 名詞學習與整理</h1>
<h3 id="縮寫-補充-階層關係"><a class="header-anchor" href="#縮寫-補充-階層關係">#</a> (縮寫) //補充 {階層關係}</h3>
<br>
<!-- <details open>
  <summary>API相關名詞</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details> -->
<details open>
  <summary>Web基本名詞</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>大分類<span class="token punctuation">{</span>
    <span class="token function">frontend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//前端 畫面和邏輯</span>
    <span class="token function">backend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//後端 操作資料庫</span>
<span class="token punctuation">}</span>

網路<span class="token punctuation">{</span>
    <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//向後端請求</span>
    <span class="token function">query</span><span class="token punctuation">(</span>ex<span class="token operator">:</span><span class="token string">'https://home.gamer.com.tw/creation.php'</span><span class="token operator">+</span> <span class="token operator">?</span>owner<span class="token operator">=</span>dpes5407<span class="token punctuation">)</span><span class="token comment">//請求攜帶參數</span>

    <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//後端回應</span>
    <span class="token function">status_code</span><span class="token punctuation">(</span>ex<span class="token operator">:</span><span class="token number">404</span><span class="token punctuation">)</span><span class="token comment">//回應的狀態碼</span>

    <span class="token constant">API</span><span class="token punctuation">(</span><span class="token parameter">Application Programming Interface</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        廣義<span class="token comment">//使用別人開發的產品方式</span>
        狹義<span class="token comment">//對某個address請求資料  下圖</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

網頁<span class="token punctuation">{</span>
    <span class="token constant">SEO</span><span class="token punctuation">(</span>Search Engine Optimization<span class="token punctuation">)</span><span class="token comment">//搜尋引擎最佳化 搜尋排名高在第一頁</span>
    <span class="token constant">RWD</span><span class="token punctuation">(</span>Responsive Web Design<span class="token punctuation">)</span><span class="token comment">//響應式網頁 自動排版手機體驗好</span>

    進階<span class="token punctuation">{</span>
        <span class="token constant">SPA</span><span class="token punctuation">(</span>Single Page Application<span class="token punctuation">)</span><span class="token comment">//單頁式應用 不刷新體驗好</span>
        <span class="token constant">SSR</span><span class="token punctuation">(</span>Server<span class="token operator">-</span>Side Rendering<span class="token punctuation">)</span><span class="token comment">//伺服器端渲染 加載速度快 SEO佳</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><img src="https://drive.google.com/uc?export=download&amp;id=1Q9TW06Xf7AzS_d0MmdMbRcRyRelK_vfk" alt="api"></p>
</details>
<details open>
  <summary>API相關名詞</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">AJAX</span><span class="token punctuation">(</span><span class="token parameter">Asynchronous JavaScript and <span class="token constant">XML</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">// ajax技術出現解決了很早期和伺服器要資料要重新整理的問題</span>

    <span class="token constant">XHR</span><span class="token punctuation">(</span>XMLHttpRequest<span class="token punctuation">)</span><span class="token comment">//最早做法</span>

    $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//中期 jQuery作法</span>

    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//</span>

    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// ES6 js原生操做api方法</span>

    <span class="token function">RESTful</span><span class="token punctuation">(</span><span class="token parameter">Representational State Transfer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">get</span> post put patch <span class="token keyword">delete</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></details>
<ul>
<li>Core-js</li>
<li>react/vue/angular，webpack、babel、core-js</li>
<li>crypto-js 加密</li>
<li>nodejs dotenv 套件 環境變數</li>
<li><a href="https://dwatow.github.io/2019/01-26-node-with-env-first/" target="_blank" rel="noopener noreferrer">env<OutboundLink/></a></li>
<li>popper js 提示 alert 輕量級的套件</li>
<li>sweetalert2 漂亮的 alert 自訂</li>
<li>uuid 不重複</li>
<li>velocity.js 動畫 vs GSAP</li>
<li>vue-axios</li>
<li>vue-router</li>
<li>vuex</li>
<li><a href="https://ithelp.ithome.com.tw/articles/10208995" target="_blank" rel="noopener noreferrer">moment.js 時間<OutboundLink/></a></li>
<li><a href="https://medium.com/itsems-frontend/javascript-lodash-9e6833cb1158" target="_blank" rel="noopener noreferrer">Lo-Dash 函式庫<OutboundLink/></a></li>
</ul>
<hr>
<ul>
<li><a href="https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/29473/" target="_blank" rel="noopener noreferrer">Polyfill 實現瀏覽器並不支援的原生API的程式碼<OutboundLink/></a></li>
</ul>
<!-- JavaScript
jQuery(JavaScript 函式庫)
初衷是用來簡化 HTML 與 JavaScript 之間的溝通與操作 -->
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers"></div></div></template>

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
