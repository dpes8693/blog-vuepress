<template><h1 id="名詞學習與整理"><a class="header-anchor" href="#名詞學習與整理">#</a> 名詞學習與整理</h1>
<ul>
<li>(縮寫) //補充 {階層關係}</li>
</ul>
<br>
<details open>
  <summary>Web基本名詞</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
大分類<span class="token punctuation">{</span>
    <span class="token function">frontend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//前端 畫面和邏輯</span>
    <span class="token punctuation">{</span>
        框架<span class="token punctuation">{</span>
            <span class="token function">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                vue<span class="token operator">-</span>axios
                vue<span class="token operator">-</span>router
                vuex
            <span class="token punctuation">}</span>
            <span class="token function">React</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">Angular</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        套件<span class="token punctuation">{</span>
            <span class="token function">打包</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                webpack
                babel
            <span class="token punctuation">}</span>
            <span class="token function">動畫</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                velocity<span class="token punctuation">.</span>js
                <span class="token constant">GSAP</span>
            <span class="token punctuation">}</span>
            <span class="token function">彈窗提示</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                popper js <span class="token comment">//alert 輕量級的套件</span>
                sweetalert2 <span class="token comment">//漂亮的 alert 自訂</span>
            <span class="token punctuation">}</span>
            <span class="token function">時間</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                moment<span class="token punctuation">.</span>js <span class="token comment">//https://ithelp.ithome.com.tw/articles/10208995</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
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
    <span class="token constant">DOM</span><span class="token punctuation">(</span>Document Object Model<span class="token punctuation">)</span><span class="token comment">//文件物件模型 html樹狀節點-結構</span>
    <span class="token constant">SEO</span><span class="token punctuation">(</span>Search Engine Optimization<span class="token punctuation">)</span><span class="token comment">//搜尋引擎最佳化 搜尋排名高在第一頁</span>
    <span class="token constant">RWD</span><span class="token punctuation">(</span>Responsive Web Design<span class="token punctuation">)</span><span class="token comment">//響應式網頁 自動排版手機體驗好</span>

    進階<span class="token punctuation">{</span>
        <span class="token constant">SPA</span><span class="token punctuation">(</span>Single Page Application<span class="token punctuation">)</span><span class="token comment">//單頁式應用 不刷新體驗好</span>
        <span class="token constant">SSR</span><span class="token punctuation">(</span>Server<span class="token operator">-</span>Side Rendering<span class="token punctuation">)</span><span class="token comment">//伺服器端渲染 加載速度快 SEO佳</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p><img src="https://drive.google.com/uc?export=download&amp;id=1Q9TW06Xf7AzS_d0MmdMbRcRyRelK_vfk" alt="api"></p>
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
<p>其他慢慢整理</p>
<ul>
<li>Core-js</li>
<li>crypto-js 加密</li>
<li>nodejs dotenv 套件 環境變數</li>
<li><a href="https://dwatow.github.io/2019/01-26-node-with-env-first/" target="_blank" rel="noopener noreferrer">env<OutboundLink/></a></li>
<li>uuid 不重複</li>
<li><a href="https://medium.com/itsems-frontend/javascript-lodash-9e6833cb1158" target="_blank" rel="noopener noreferrer">Lo-Dash 函式庫<OutboundLink/></a></li>
<li><a href="https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/29473/" target="_blank" rel="noopener noreferrer">Polyfill 實現瀏覽器並不支援的原生API的程式碼<OutboundLink/></a></li>
<li>Regex //正則表達</li>
<li>SKU //單品 最小單位</li>
<li>ORM // 物件關聯映射</li>
<li>ngrok //轉址 後端開發</li>
<li>jQuery</li>
<li></li>
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
