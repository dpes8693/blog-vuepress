(self.webpackChunkblog_vuepress=self.webpackChunkblog_vuepress||[]).push([[6],{7461:(s,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>e});const e={key:"v-1f585632",path:"/web/vue.html",title:"Vue.js",lang:"zh-tw",frontmatter:{},excerpt:"",headers:[{level:2,title:"目前大略進度",slug:"目前大略進度",children:[]},{level:2,title:"督促自己學習-記錄",slug:"督促自己學習-記錄",children:[{level:3,title:"2021.06",slug:"_2021-06",children:[]},{level:3,title:"2021.07",slug:"_2021-07",children:[]}]}],filePathRelative:"web/vue.md",git:{updatedTime:1625651858e3,contributors:[{name:"Richard",email:"dpes8693@gmail.com",commits:9}]}}},6104:(s,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>k});var e=a(6252);const p=(0,e.uE)('<h1 id="vue-js"><a class="header-anchor" href="#vue-js">#</a> <i class="fas fa-meteor"></i> Vue.js</h1><h2 id="目前大略進度"><a class="header-anchor" href="#目前大略進度">#</a> 目前大略進度</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>html <span class="token constant">DOM</span>節點傳遞\nJavaScript <span class="token constant">ES5</span> <span class="token constant">ES6</span> jQuery語法\n解構賦值 箭頭函數 <span class="token keyword">let</span> <span class="token keyword">const</span><span class="token punctuation">,</span>Template Literals<span class="token punctuation">,</span>Destructuring Assignment<span class="token punctuation">,</span>promise\n<span class="token constant">CSS</span><span class="token operator">+</span><span class="token function">Sass</span><span class="token punctuation">(</span>Scss語法<span class="token punctuation">)</span> Prepros or Watch Sass\n網站架構 <span class="token constant">MVC</span><span class="token operator">/</span><span class="token constant">MVP</span><span class="token operator">/</span><span class="token constant">MVVM</span> <span class="token constant">SPA</span><span class="token operator">/</span><span class="token constant">SSR</span>理解\ncdnjs liveserver vetur插件\nfontawesome <span class="token operator">+</span> bootstrap\nwebpack<span class="token operator">+</span>babel <span class="token keyword">package</span><span class="token punctuation">.</span>json熟悉\n<span class="token function">名詞理解</span><span class="token punctuation">(</span>snow pack<span class="token operator">/</span>vite<span class="token operator">/</span>eslint<span class="token operator">/</span>e2e test<span class="token operator">/</span>circleCI<span class="token operator">/</span>alias<span class="token operator">/</span>swagger\n<span class="token operator">/</span>vuex<span class="token operator">/</span>vuerouter<span class="token operator">/</span>nuxt<span class="token operator">/</span>axios<span class="token operator">/</span>i18n<span class="token operator">/</span>polyfill<span class="token punctuation">)</span>\n模板測試<span class="token operator">:</span>D2Project<span class="token punctuation">,</span>VueElementTemplate<span class="token punctuation">,</span>Vuetify\nvue<span class="token operator">-</span>cli熟悉\nvuepress\nvue架構\n<span class="token function">vue</span><span class="token punctuation">(</span>語法 directive指令<span class="token punctuation">,</span>once事件<span class="token punctuation">,</span>鍵盤滑鼠修飾子<span class="token punctuation">,</span>判斷<span class="token punctuation">,</span>迴圈<span class="token punctuation">)</span>\nv<span class="token operator">-</span>bind<span class="token operator">:</span><span class="token punctuation">,</span>v<span class="token operator">-</span>model<span class="token punctuation">,</span>v<span class="token operator">-</span>text<span class="token operator">-</span>v<span class="token operator">-</span>html<span class="token punctuation">,</span>v<span class="token operator">-</span>pre\n<span class="token punctuation">.</span>lazy<span class="token punctuation">,</span><span class="token punctuation">.</span>trim<span class="token punctuation">.</span>number\nv<span class="token operator">-</span>on<span class="token operator">:</span>@\nstop<span class="token punctuation">,</span>prevent<span class="token punctuation">,</span>capture<span class="token punctuation">,</span>self<span class="token punctuation">,</span>once<span class="token punctuation">,</span>passive\n@keydown<span class="token punctuation">.</span>enter<span class="token punctuation">.</span>exact<span class="token punctuation">,</span><span class="token punctuation">.</span>meta\n@click<span class="token punctuation">.</span>right<span class="token punctuation">,</span><span class="token punctuation">.</span>middle\nv<span class="token operator">-</span><span class="token keyword">if</span><span class="token punctuation">,</span>v<span class="token operator">-</span>show<span class="token punctuation">,</span>v<span class="token operator">-</span><span class="token keyword">else</span><span class="token punctuation">,</span>v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span>\nv<span class="token operator">-</span><span class="token keyword">for</span>\n<span class="token function">$nectTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="督促自己學習-記錄"><a class="header-anchor" href="#督促自己學習-記錄">#</a> 督促自己學習-記錄</h2><h3 id="_2021-06"><a class="header-anchor" href="#_2021-06">#</a> 2021.06</h3><h5 id="名詞"><a class="header-anchor" href="#名詞">#</a> 名詞</h5>',6),t={href:"https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/29473/",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("polyfill 是甚麼?"),c=(0,e.Uk)("用於實現瀏覽器並不支援的原生API的程式碼"),r=(0,e.Wm)("h5",{id:"js"},[(0,e.Wm)("a",{class:"header-anchor",href:"#js"},"#"),(0,e.Uk)(" JS")],-1),l={href:"https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("事件冒泡-DOM事件傳遞"),i=(0,e.uE)('<details class="custom-container details"><summary>[展開圖]EventFlow</summary><p><img src="https://i.imgur.com/W25OoWR.png" alt="EventFlow"></p></details><h5 id="vue"><a class="header-anchor" href="#vue">#</a> Vue</h5><p>看 .stop .prevent .capture .self .once .passive</p><div class="custom-container tip"><p class="custom-container-title">採坑</p><pre><code>Vue template裡面只能有一個根節點\nThe template root requires exactly one element.\n</code></pre></div><h3 id="_2021-07"><a class="header-anchor" href="#_2021-07">#</a> 2021.07</h3><h5 id="vue-1"><a class="header-anchor" href="#vue-1">#</a> Vue</h5><p>SPA Single Page Application 單頁應用 App.vue 進入點 因此只有一個html</p><p>通過main.js操作 new Vue new Vuex實體出來 調用store 裡面的API mapAction mapGetter mapState 包一包Object</p><p>最後透過webpack打包 build dist/index.html+css+js component拆分</p><h4 id="_7月第一週"><a class="header-anchor" href="#_7月第一週">#</a> 7月第一週</h4><p>JSON 格式和js寫物件不同 {&quot;裡面&quot;:&quot;要用雙引號&quot;} https://youtu.be/R8GL5y49iJc</p><p>JSON.stringify(); JSON.parse(); 操作資料庫用POSTMAN VScode使用 cdnjs+live-server擴充 node js-&gt;npm json server 實作RESTful API</p><p>https://medium.com/@debbyji/%E7%94%A8-json-server-%E6%A8%A1%E6%93%AC-restful-api-f07abda3927c</p><p>學了 vue slot功能 (元件內容可以重複使用) table vuetify很新 學習了</p>',14),k={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("p",null,[(0,e.Wm)("a",t,[o,(0,e.Wm)(a)]),c]),r,(0,e.Wm)("p",null,[(0,e.Wm)("a",l,[u,(0,e.Wm)(a)])]),i],64)}}}}]);