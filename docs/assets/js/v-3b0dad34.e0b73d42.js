(self.webpackChunkblog_vuepress=self.webpackChunkblog_vuepress||[]).push([[473],{6952:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-3b0dad34",path:"/web/%5BJS%5Dnew.html",title:"How many new Object? @@",lang:"zh-tw",frontmatter:{},excerpt:"",headers:[{level:3,title:"Primitive Wrapper",slug:"primitive-wrapper",children:[]}],filePathRelative:"web/[JS]new.md",git:{updatedTime:1658819726e3,contributors:[{name:"Richard Lin",email:"33016870+dpes8693@users.noreply.github.com",commits:3}]}}},9772:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>c});var p=a(6252);const t=(0,p.uE)('<h1 id="how-many-new-object"><a class="header-anchor" href="#how-many-new-object">#</a> How many new Object? @@</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//Math</span>\n<span class="token comment">//BigInt</span>\n<span class="token comment">//Symbol</span>\n<span class="token keyword">let</span> array <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> adder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;return a + b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//unsafe-eval</span>\n<span class="token keyword">let</span> object <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正確完成的回傳方法</span>\n  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 失敗的回傳方法</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;Whoops!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">try</span> <span class="token punctuation">{</span>\n  <span class="token keyword">throw</span> error<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 构造函数;</span>\n<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> audio <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Audio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DOMparser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> speech <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">webkitSpeechRecognition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//webkit</span>\n<span class="token comment">//Blob物件</span>\n<span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//Proxy物件</span>\n<span class="token keyword">const</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//16</span>\n<span class="token comment">// new RangeError([message[, fileName[, lineNumber]]])</span>\n<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// new URL(&lt;url&gt;, &lt;base&gt;);</span>\n<span class="token comment">// 建立 URL 物件</span>\n<span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.google.com/foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// https://www.google.com/foo</span>\n<span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;https://www.google.com/foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// https://www.google.com/bar</span>\n\n<span class="token comment">// 建立 Hash Tag</span>\n<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">&quot;https://example.com/path?foo=1&amp;bar=2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nurl<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token string">&quot;hashTag&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 取得 url 資訊</span>\nurl<span class="token punctuation">.</span>href<span class="token punctuation">;</span> <span class="token comment">// &quot;https://example.com/path?foo=1&amp;bar=2&quot;</span>\nurl<span class="token punctuation">.</span>hostname<span class="token punctuation">;</span> <span class="token comment">// &quot;example.com&quot;</span>\nurl<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span> <span class="token comment">// &quot;/path&quot;</span>\nurl<span class="token punctuation">.</span>search<span class="token punctuation">;</span> <span class="token comment">// &quot;?foo=1&amp;bar=2&quot;</span>\nurl<span class="token punctuation">.</span>protocol<span class="token punctuation">;</span> <span class="token comment">// &quot;https:&quot;</span>\n\n<span class="token comment">// 可以用的方法</span>\nurl<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;https://example.com/path?foo=1&amp;bar=2&quot;</span>\n\n<span class="token keyword">new</span> <span class="token class-name">XMLSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> userName <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// userNo1</span>\n<span class="token keyword">const</span> password <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.password&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123456aaa</span>\nparams<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> userName<span class="token punctuation">)</span><span class="token punctuation">;</span>\nparams<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;passward&quot;</span><span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 0726</span>\n<span class="token keyword">var</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyboardEvent</span><span class="token punctuation">(</span><span class="token string">&quot;keydown&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> key<span class="token operator">:</span> <span class="token string">&quot;g&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//NEW 起來</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br></div></div><h3 id="primitive-wrapper"><a class="header-anchor" href="#primitive-wrapper">#</a> Primitive Wrapper</h3>',3),e={href:"https://ithelp.ithome.com.tw/articles/10193902",target:"_blank",rel:"noopener noreferrer"},o=(0,p.Uk)("https://ithelp.ithome.com.tw/articles/10193902"),c={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("p",null,[(0,p.Wm)("a",e,[o,(0,p.Wm)(a)])])],64)}}}}]);