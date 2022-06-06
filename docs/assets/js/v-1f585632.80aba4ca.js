(self.webpackChunkblog_vuepress=self.webpackChunkblog_vuepress||[]).push([[6],{7461:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-1f585632",path:"/web/vue.html",title:"Vue.js練功",lang:"zh-tw",frontmatter:{},excerpt:"",headers:[{level:2,title:"入門1個月要認識?",slug:"入門1個月要認識",children:[]},{level:2,title:"特殊",slug:"特殊",children:[{level:3,title:"為什麼畫面沒有刷新(但資料是對的?)",slug:"為什麼畫面沒有刷新-但資料是對的",children:[]},{level:3,title:"名詞",slug:"名詞",children:[]},{level:3,title:"JS",slug:"js",children:[]},{level:3,title:"採坑",slug:"採坑",children:[]},{level:3,title:"學Vue也要知道ES6語法，否則都看不懂",slug:"學vue也要知道es6語法-否則都看不懂",children:[]}]}],filePathRelative:"web/vue.md",git:{updatedTime:1654417752e3,contributors:[{name:"Richard",email:"dpes8693@gmail.com",commits:14},{name:"Richard Lin",email:"33016870+dpes8693@users.noreply.github.com",commits:5}]}}},2422:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>V});var p=a(6252);const e=(0,p.uE)('<h1 id="vue-js練功"><a class="header-anchor" href="#vue-js練功">#</a> <i class="fas fa-meteor"></i> Vue.js練功</h1><h2 id="入門1個月要認識"><a class="header-anchor" href="#入門1個月要認識">#</a> 入門1個月要認識?</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>html <span class="token constant">DOM</span>節點傳遞\nJavaScript <span class="token constant">ES5</span> <span class="token constant">ES6</span> jQuery語法\n解構賦值 箭頭函數 <span class="token keyword">let</span> <span class="token keyword">const</span><span class="token punctuation">,</span>Template Literals<span class="token punctuation">,</span>Destructuring Assignment<span class="token punctuation">,</span>promise\n<span class="token constant">CSS</span><span class="token operator">+</span><span class="token function">Sass</span><span class="token punctuation">(</span>Scss語法<span class="token punctuation">)</span> Prepros or Watch Sass\n網站架構 <span class="token constant">MVC</span><span class="token operator">/</span><span class="token constant">MVP</span><span class="token operator">/</span><span class="token constant">MVVM</span> <span class="token constant">SPA</span><span class="token operator">/</span><span class="token constant">SSR</span>理解\ncdnjs liveserver vetur插件\nfontawesome <span class="token operator">+</span> bootstrap\nwebpack<span class="token operator">+</span>babel <span class="token keyword">package</span><span class="token punctuation">.</span>json熟悉\n\n模板測試<span class="token operator">:</span>D2Project<span class="token punctuation">,</span>VueElementTemplate<span class="token punctuation">,</span>Vuetify\nvue<span class="token operator">-</span>cli熟悉\nvuepress\nvue架構\n<span class="token function">vue</span><span class="token punctuation">(</span>語法 directive指令<span class="token punctuation">,</span>once事件<span class="token punctuation">,</span>鍵盤滑鼠修飾子<span class="token punctuation">,</span>判斷<span class="token punctuation">,</span>迴圈<span class="token punctuation">)</span>\nv<span class="token operator">-</span>bind<span class="token operator">:</span><span class="token punctuation">,</span>v<span class="token operator">-</span>model<span class="token punctuation">,</span>v<span class="token operator">-</span>text<span class="token operator">-</span>v<span class="token operator">-</span>html<span class="token punctuation">,</span>v<span class="token operator">-</span>pre\n<span class="token punctuation">.</span>lazy<span class="token punctuation">,</span><span class="token punctuation">.</span>trim<span class="token punctuation">.</span>number\nv<span class="token operator">-</span>on<span class="token operator">:</span>@\nstop<span class="token punctuation">,</span>prevent<span class="token punctuation">,</span>capture<span class="token punctuation">,</span>self<span class="token punctuation">,</span>once<span class="token punctuation">,</span>passive\n@keydown<span class="token punctuation">.</span>enter<span class="token punctuation">.</span>exact<span class="token punctuation">,</span><span class="token punctuation">.</span>meta\n@click<span class="token punctuation">.</span>right<span class="token punctuation">,</span><span class="token punctuation">.</span>middle\nv<span class="token operator">-</span><span class="token keyword">if</span><span class="token punctuation">,</span>v<span class="token operator">-</span>show<span class="token punctuation">,</span>v<span class="token operator">-</span><span class="token keyword">else</span><span class="token punctuation">,</span>v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span>\nv<span class="token operator">-</span><span class="token keyword">for</span>\n<span class="token function">$nectTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="特殊"><a class="header-anchor" href="#特殊">#</a> 特殊</h2><h3 id="為什麼畫面沒有刷新-但資料是對的"><a class="header-anchor" href="#為什麼畫面沒有刷新-但資料是對的">#</a> 為什麼畫面沒有刷新(但資料是對的?)</h3>',5),t={href:"https://pjchender.blogspot.com/2017/05/vue-vue-reactivity.html",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("Vue 響應式原理"),c=(0,p.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$forceUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="名詞"><a class="header-anchor" href="#名詞">#</a> 名詞</h3>',2),l={href:"https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/29473/",target:"_blank",rel:"noopener noreferrer"},r=(0,p.Uk)("polyfill 是甚麼?"),u=(0,p.Uk)("用於實現瀏覽器並不支援的原生API的程式碼"),i=(0,p.Wm)("h3",{id:"js"},[(0,p.Wm)("a",{class:"header-anchor",href:"#js"},"#"),(0,p.Uk)(" JS")],-1),k={href:"https://www.gushiciku.cn/pl/ghps/zh-tw",target:"_blank",rel:"noopener noreferrer"},m=(0,p.Uk)("如果再寫for迴圈，我就錘自己了"),b={href:"https://titangene.github.io/article/javascript-object-keys-values-entries.html",target:"_blank",rel:"noopener noreferrer"},d=(0,p.Uk)("Object.keys() & Object.values() & Object.entries()"),h={href:"https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/",target:"_blank",rel:"noopener noreferrer"},v=(0,p.Uk)("事件冒泡-DOM事件傳遞"),g=(0,p.Wm)("details",{class:"custom-container details"},[(0,p.Wm)("summary",null,"[展開圖]EventFlow"),(0,p.Wm)("p",null,[(0,p.Wm)("img",{src:"https://i.imgur.com/W25OoWR.png",alt:"EventFlow"})])],-1),f={href:"https://ithelp.ithome.com.tw/articles/10230756",target:"_blank",rel:"noopener noreferrer"},w=(0,p.Uk)("不想再看到undefined的TypeError"),y=(0,p.uE)('<details class="custom-container details"><summary>[展開圖]</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token punctuation">{</span>\n  rows<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;vehicles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n         <span class="token string">&quot;car&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Suzuki&quot;</span><span class="token punctuation">,</span>\n         <span class="token string">&quot;bike&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ubike&quot;</span><span class="token punctuation">,</span>\n         <span class="token string">&quot;airlines&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n            <span class="token string">&quot;UNI AIR&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Air123&quot;</span><span class="token punctuation">,</span>\n            <span class="token string">&quot;Mandarin&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Brt707&quot;</span>\n         <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>rows<span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>vehicles<span class="token operator">?.</span>airlines<span class="token operator">?.</span>Mandarin <span class="token operator">===</span> <span class="token string">&#39;Brt707&#39;</span><span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Get Brt707&#39;</span><span class="token punctuation">)</span>\n\n<span class="token comment">//語法記憶 a.b有嗎?.c有嗎?</span>\n<span class="token comment">//a.b?.c?</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></details><h3 id="採坑"><a class="header-anchor" href="#採坑">#</a> 採坑</h3><div class="custom-container tip"><p class="custom-container-title">vue template 根節點</p><pre><code>Vue template裡面只能有一個根節點\nThe template root requires exactly one element.\n</code></pre></div>',3),W={class:"custom-container tip"},j=(0,p.Wm)("p",{class:"custom-container-title"},"JSON 格式語法",-1),q=(0,p.Wm)("p",null,'JSON 格式和js寫物件不同 {"裡面":"要用雙引號"}',-1),x=(0,p.Uk)("感謝Alex大大"),S={href:"https://youtu.be/R8GL5y49iJc",target:"_blank",rel:"noopener noreferrer"},E=(0,p.Uk)("教學影片"),U=(0,p.uE)('<details class="custom-container details"><summary>[舉個例子]</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">1</span>\n    <span class="token keyword">var</span> elements <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;Hydrogen&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;Helium&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;Lithium&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;Beryllium&#39;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 這段函式會輸出[8, 6, 7, 9]這個陣列</span>\n    elements<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> element<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">function</span> 變成箭頭 塞到中間\n\n    <span class="token comment">//1 上方這種一般的函式，可以被改寫成下方的箭頭函式</span>\n    elements<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> element<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [8, 6, 7, 9]</span>\n\n    <span class="token comment">//2 如果輸入的參數只有一個，我們可以移除掉外面的括號</span>\n    elements<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> element<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [8, 6, 7, 9]</span>\n\n    <span class="token comment">//3 當箭頭函式裡的內容只有&#39;return&#39;的時候，我們可以拿掉return+外面的大括號</span>\n    elements<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  element<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [8, 6, 7, 9]</span>\n    elements<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  element<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [8, 6, 7, 9]</span>\n\n    <span class="token operator">--</span><span class="token operator">-</span>\n\n    <span class="token comment">//範例2--</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token comment">//多行 自己加return</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> <span class="token number">1</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> <span class="token number">1</span>\n\n\n    <span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token comment">//匿名的函式</span>\n\n    <span class="token operator">--</span><span class="token operator">-</span>\n    <span class="token comment">//容易搞-混範例3</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">funcA</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">//2</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">funcB</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> x <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token comment">//undefined</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div></details><h3 id="學vue也要知道es6語法-否則都看不懂"><a class="header-anchor" href="#學vue也要知道es6語法-否則都看不懂">#</a> 學Vue也要知道ES6語法，否則都看不懂</h3><ol><li>vue cli mixin</li><li>ES6 Destructuring variables in string Arrow Function</li><li><code>import{}</code>及<code>exportimport{}</code>及<code>export</code></li><li>vue 傳值</li></ol>',3),V={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,(0,p.Wm)("p",null,[(0,p.Wm)("a",t,[o,(0,p.Wm)(a)])]),c,(0,p.Wm)("p",null,[(0,p.Wm)("a",l,[r,(0,p.Wm)(a)]),u]),i,(0,p.Wm)("p",null,[(0,p.Wm)("a",k,[m,(0,p.Wm)(a)])]),(0,p.Wm)("p",null,[(0,p.Wm)("a",b,[d,(0,p.Wm)(a)])]),(0,p.Wm)("p",null,[(0,p.Wm)("a",h,[v,(0,p.Wm)(a)])]),g,(0,p.Wm)("p",null,[(0,p.Wm)("a",f,[w,(0,p.Wm)(a)])]),y,(0,p.Wm)("div",W,[j,q,(0,p.Wm)("p",null,[x,(0,p.Wm)("a",S,[E,(0,p.Wm)(a)])])]),U],64)}}}}]);