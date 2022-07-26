(self.webpackChunkblog_vuepress=self.webpackChunkblog_vuepress||[]).push([[760],{394:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-383ea93e",path:"/web/keycode.html",title:"關於鍵盤事件棄用 資訊整理",lang:"zh-tw",frontmatter:{},excerpt:"",headers:[{level:2,title:"keydown, keypress, keyup 的差異",slug:"keydown-keypress-keyup-的差異",children:[]},{level:2,title:"基本",slug:"基本",children:[]},{level:2,title:"關於棄用",slug:"關於棄用",children:[]},{level:2,title:"參考資料",slug:"參考資料",children:[]}],filePathRelative:"web/keycode.md",git:{updatedTime:1658817814e3,contributors:[{name:"Richard Lin",email:"33016870+dpes8693@users.noreply.github.com",commits:1}]}}},2513:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>r});var t=a(6252);const e=(0,t.uE)('<h1 id="關於鍵盤事件棄用-資訊整理"><a class="header-anchor" href="#關於鍵盤事件棄用-資訊整理">#</a> 關於鍵盤事件棄用 資訊整理</h1><p>相信大家對於鍵盤事件(KeyboardEvent.keyCode)一定不陌生</p><ul><li>事件都會包在 window 底下 window.event</li><li>keydown → keypress → keyup</li></ul><h2 id="keydown-keypress-keyup-的差異"><a class="header-anchor" href="#keydown-keypress-keyup-的差異">#</a> keydown, keypress, keyup 的差異</h2><p>懶人包: 除非是判斷鍵盤放開否則全部都用 <code>keydown</code></p><table><thead><tr><th>名稱</th><th>可否連續觸發</th><th>組合鍵偵測</th><th>補充</th></tr></thead><tbody><tr><td>keydown</td><td>o</td><td>o</td><td></td></tr><tr><td>keypress</td><td>o (僅可打出文字符號的按鍵有效)</td><td>x</td><td>被棄用，不推薦使用</td></tr><tr><td>keyup</td><td>x</td><td>x</td><td></td></tr></tbody></table><h2 id="基本"><a class="header-anchor" href="#基本">#</a> 基本</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 寫法1</span>\nwindow<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>\n  <span class="token string">&quot;keydown&quot;</span><span class="token punctuation">,</span>\n  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token boolean">false</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 寫法2</span>\nwindow<span class="token punctuation">.</span><span class="token function-variable function">onkeydown</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">常用的</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 以下是常常在網路上看到的寫法</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">//   下面兩個在後面會補充不推薦使用的原因</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>which<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 印出e 發現一堆屬性</span>\n<span class="token comment">// {</span>\n<span class="token comment">//     isTrusted: true,</span>\n<span class="token comment">//     altKey: false,</span>\n<span class="token comment">//     bubbles: true,</span>\n<span class="token comment">//     cancelBubble: false,</span>\n<span class="token comment">//     cancelable: true,</span>\n<span class="token comment">//     charCode: 0,</span>\n<span class="token comment">//     code: &quot;KeyA&quot;,</span>\n<span class="token comment">//     composed: true,</span>\n<span class="token comment">//     ctrlKey: false,</span>\n<span class="token comment">//     currentTarget: null,</span>\n<span class="token comment">//     defaultPrevented: false,</span>\n<span class="token comment">//     detail: 0,</span>\n<span class="token comment">//     eventPhase: 0,</span>\n<span class="token comment">//     isComposing: false,</span>\n<span class="token comment">//     key: &quot;a&quot;,</span>\n<span class="token comment">//     keyCode: 65,</span>\n<span class="token comment">//     location: 0,</span>\n<span class="token comment">//     metaKey: false,</span>\n<span class="token comment">//     path: (4) [body.vsc-initialized, html, document, Window],</span>\n<span class="token comment">//     repeat: false,</span>\n<span class="token comment">//     returnValue: true,</span>\n<span class="token comment">//     shiftKey: false,</span>\n<span class="token comment">//     sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false},</span>\n<span class="token comment">//     srcElement: body.vsc-initialized,</span>\n<span class="token comment">//     target: body.vsc-initialized,</span>\n<span class="token comment">//     timeStamp: 150224.5,</span>\n<span class="token comment">//     type: &quot;keydown&quot;,</span>\n<span class="token comment">//     view: Window {window: Window, self: Window, document: document, name: &#39;&#39;, location: Location, …},</span>\n<span class="token comment">//     which: 65,</span>\n<span class="token comment">// };</span>\n\n<span class="token comment">// 複製他發現只會複製到 isTrusted</span>\ne2 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  isTrusted<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h2 id="關於棄用"><a class="header-anchor" href="#關於棄用">#</a> 關於棄用</h2><ul><li>key 系列滿多是不推薦使用的 <ul><li>鍵盤 event.which</li><li>鍵盤 event.keyCode (2016 年後建議用 event.key 或是 event.code 取代)</li><li>onkeypress 事件</li></ul></li></ul>',10),p=(0,t.Uk)("感謝"),o={href:"https://www.zhangxinxu.com/wordpress/2021/01/js-keycode-deprecated/",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("zhangxinxu 前輩的好文章"),l=(0,t.uE)('<p>至於不推薦<code>keyCode</code>的原因是因為只抓鍵盤不知道用戶到底是打哪個字，例如鍵盤上的<code>.</code>和<code>&gt;</code>都是同一個<code>keyCode</code>，如果是全形的鍵盤數字鍵那邊的<code>.</code>keyCode 居然不一樣，這對於開發者是很不友好的，當時候用是因為要支援 IE，既然 IE 被淘汰了就用心的取代吧!</p><ul><li>常見的 keyCode</li></ul><table><thead><tr><th>按鍵名稱</th><th>event.key</th><th>event.keyCode</th></tr></thead><tbody><tr><td>enter</td><td>Enter</td><td>13</td></tr><tr><td>delete</td><td>Delete</td><td>46</td></tr><tr><td>backspace</td><td>Backspace</td><td>8</td></tr><tr><td>esc</td><td>Escape</td><td>27</td></tr><tr><td>tab</td><td>Tab</td><td>9</td></tr><tr><td>上</td><td>ArrowUp</td><td>38</td></tr><tr><td>下</td><td>ArrowDown</td><td>40</td></tr><tr><td>左</td><td>ArrowLeft</td><td>37</td></tr><tr><td>右</td><td>ArrowRight</td><td>39</td></tr><tr><td>pageDown 下一頁</td><td>PageDown</td><td>34</td></tr><tr><td>pageUp 上一頁</td><td>PageUp</td><td>33</td></tr><tr><td>home</td><td>Home</td><td>36</td></tr><tr><td>end</td><td>End</td><td>35</td></tr><tr><td>shift</td><td>Shift</td><td>16</td></tr><tr><td>control</td><td>Control</td><td>17</td></tr><tr><td>alt</td><td>Alt</td><td>18</td></tr></tbody></table><ul><li>需要注意的 event.code (會有左右之分)</li></ul><table><thead><tr><th>名稱</th><th>event.code</th></tr></thead><tbody><tr><td>shift</td><td>ShiftLeft/ShiftRight</td></tr><tr><td>control</td><td>ControlLeft/ControlRight</td></tr><tr><td>alt</td><td>AltLeft/AltRight</td></tr></tbody></table><h2 id="參考資料"><a class="header-anchor" href="#參考資料">#</a> 參考資料</h2><p>https://www.zhangxinxu.com/wordpress/2021/01/js-keycode-deprecated/</p><p>https://medium.com/@yitailin/%E6%AF%94%E8%BC%83-keydown-keypress-keyup-%E7%9A%84%E5%B7%AE%E7%95%B0-4e873ba17e81</p><p>https://www.w3schools.com/jsref/event_key_key.asp</p><p>https://www.w3schools.com/jsref/event_key_keycode.asp</p><p>https://www.toptal.com/developers/keycode</p>',11),r={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[e,(0,t.Wm)("p",null,[p,(0,t.Wm)("a",o,[c,(0,t.Wm)(a)])]),l],64)}}}}]);