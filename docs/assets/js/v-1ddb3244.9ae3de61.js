(self.webpackChunkblog_vuepress=self.webpackChunkblog_vuepress||[]).push([[545],{1184:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-1ddb3244",path:"/guide/regex.html",title:"Regex @@",lang:"zh-tw",frontmatter:{},excerpt:"",headers:[],filePathRelative:"guide/regex.md",git:{updatedTime:165881962e4,contributors:[{name:"Richard Lin",email:"33016870+dpes8693@users.noreply.github.com",commits:2}]}}},6915:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="regex"><a class="header-anchor" href="#regex">#</a> Regex @@</h1><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> pattern flag </span>\n符號\n\n/^\\d{3}$/g\n特色都被斜線包住的叫做 pattern //\n尾部叫做flag\n\n^\\d{3}$ 是 pattern\ng 是 flag\n<span class="token title important"><span class="token punctuation">##</span> 危險</span>\n已經發展20幾年了 用不好會造成部分機器卡住(無窮迴圈)，記憶體塞滿\n\n<span class="token title important"><span class="token punctuation">##</span> 字元種類</span>\n\n```js\n首先先介紹 陣列符號 \n    <span class="token code keyword">`單選的下拉式選單`</span>\n/[abc]/  \n    abc 只有匹配a\n/[^abc]/ \n    abcde 只有匹配d\n.\n接下來介紹 插入符號 錢符號\n    <span class="token code keyword">`頭部^ 尾部$`</span>\n/^1/ \n    123451 只有匹配第一個1\n/1$/ \n    123451 只有匹配尾部1\n/^123$/ ...\n.\n接下來介紹 加號 \n    <span class="token code keyword">`1~無限`</span>\n/a+/ \n    aaabcbaa 匹配前面aaa\n.\n接下來介紹 星號\n    <span class="token code keyword">`0~無限`</span>\n/a+/ ...    \n.\n接下來介紹 問號\n    <span class="token code keyword">`可有可無 若有只會匹配一次`</span>\n/ab?/\n    abb 匹配前面ab\n    aaa 匹配前面a\n.\n接下來介紹 花刮號{}\n    <span class="token code keyword">`出現次數`</span>\n/ab{3}/\n    abbbbb 匹配前面abbb\n/ab{3,4}/\n    abbbbb 匹配前面abbbb\n/ab{3,}/\n    abbbbb 匹配前面abbbbb 無限b\n.\n接下來介紹 or符號|\n    <span class="token code keyword">`2選1`</span>\n/a|b/\n    cba 匹配b   \n    cab 匹配a        \n.\n接下來介紹 反斜線\n就是逃脫字元\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div><p>. 所有不包含換行 \\w word字母和數字還有_底線 \\W w相反 有包換行 <code>小心特殊符號</code> \\d digit數字 \\D d相反 有包換行 <code>小心</code> \\s 空白和換行和tab和各式各樣空白 \\S s相反</p><hr><p>/.../ 不寫 第一個就返回 且 是單行模式 /.../g global <code>匹配到不能匹配為止</code> /.../m multiline <code>多行模式</code> /.../i case insensitive <code>忽略大小寫</code> /.../s single line <code>都當一行</code></p><p>\\p{L} <code>屬於letter的字</code></p><p>正則.test(文字) 文字.match(正則)</p><hr><p>正則 預設式 *貪婪greedy *?懶惰lazy</p><p>let str = titanic let regxGreedy = /t[a-z]<em>i/ let regxLazy = /t[a-z]</em>?i/</p><p>貪婪我都要符合 [&quot;titani&quot;] 懶惰大概就好 [&quot;ti&quot;]</p><p>注意不要拿來比對HTML元素</p><p>/&lt;.*?&gt;/gi 意思是 角括號裡面隨便啦</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>介紹<span class="token constant">UTF</span><span class="token operator">-</span><span class="token number">8</span>八進制 \n    \\<span class="token number">127</span>\n<span class="token function">parsInt</span><span class="token punctuation">(</span><span class="token string">&#39;101&#39;</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">//65</span>\n<span class="token punctuation">(</span><span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">//A的碼是65(10)，101(8)</span>\n    <span class="token operator">/</span>\\<span class="token number">101</span><span class="token operator">/</span> 可以找到 <span class="token string">&#39;A&#39;</span>\n\n介紹<span class="token constant">UTF</span><span class="token operator">-</span><span class="token number">8</span>十六進制 \n    \\x57 可以找到 <span class="token string">&#39;W&#39;</span>\n介紹十六進制 <span class="token constant">C</span><span class="token operator">/</span><span class="token constant">C</span><span class="token operator">++</span><span class="token operator">/</span>Java source code \n    \\u0057 可以找到 <span class="token string">&#39;W&#39;</span>\n\n    \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>先行斷言 () capturing group ?: is for non capturing group</p><pre><code>?=  is for positive look ahead\n?!  is for negative look ahead\n\n?&lt;= is for positive look behind\n?&lt;! is for negative look behind\n</code></pre><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code></code></pre><div class="line-numbers"></div></div>',17),p={render:function(n,s){return e}}}}]);