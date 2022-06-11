<template><h1 id="反省"><a class="header-anchor" href="#反省">#</a> 反省?</h1>
<!-- 英文，程式
語法>>function>>{}>>框架模組套件的選擇
{
Design Pattern: SOLID
物件導向
}
CI/CD yml shellscript
docker
cloud service -->
<nav class="table-of-contents"><ul><li><RouterLink to="#聊聊-寫-js-code">聊聊 寫 JS Code</RouterLink><ul><li><RouterLink to="#function-題目-我拿到-2-個數-請印出他們相加的答案">[function]題目:我拿到 2 個數 請印出他們相加的答案</RouterLink></li><li><RouterLink to="#四大-function-函數-式-方法-遞迴-建構子-式-和-class">[四大 function()]函數(式)，方法，遞迴，建構子(式)和 class</RouterLink></li></ul></li><li><RouterLink to="#如何成為好的工程師-好的工程師有哪些特色">如何成為好的工程師，好的工程師有哪些特色</RouterLink></li></ul></nav>
<!-- ## 聊聊 讀書學習方式 -->
<h2 id="聊聊-寫-js-code"><a class="header-anchor" href="#聊聊-寫-js-code">#</a> 聊聊 寫 JS Code</h2>
<p>思考-<code>變數</code>為什麼會誕生呢? 去除重複，簡化，重複利用。最好的例子: CSS 的 style，可以寫 inline|放在 head|抽到外面資料夾。</p>
<p>思考-<code>函數</code>為什麼會誕生呢? 重複使用，方便維護。試著想想你複製 100 次到 100 個檔案時，當需求改變時你要改到死...</p>
<ul>
<li>variable 變數</li>
<li>function 函數</li>
<li>function 四大類</li>
<li>nest 巢狀</li>
<li>Object-oriented programming 物件導向程式設計</li>
<li>拆 function</li>
</ul>
<h3 id="function-題目-我拿到-2-個數-請印出他們相加的答案"><a class="header-anchor" href="#function-題目-我拿到-2-個數-請印出他們相加的答案">#</a> [function]題目:我拿到 2 個數 請印出他們相加的答案</h3>
<details open>
  <summary>收合</summary>
<CodeGroup>
<CodeGroupItem title="Lv.0">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//等級0</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="Lv.1">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//等級1 使用 function</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="Lv.2">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//等級2 重視命名</span>
<span class="token keyword">let</span> firstNum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> secondNum <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">printAccumulator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//accumulator = 累加器</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>firstNum <span class="token operator">+</span> secondNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">printAccumulator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="Lv.3">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//等級3 正確使用 function帶入參數</span>
<span class="token comment">//只做該方法名稱的事情</span>
<span class="token keyword">let</span> firstNum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> secondNum <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">accumulator</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token function">accumulator</span><span class="token punctuation">(</span>firstNum<span class="token punctuation">,</span> secondNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="Lv.4">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//等級4 使用ECMAScript新的語法 箭頭函數</span>
<span class="token keyword">let</span> firstNum <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> secondNum <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">ans</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=></span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">ans</span><span class="token punctuation">(</span>firstNum<span class="token punctuation">,</span> secondNum<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<h3 id="四大-function-函數-式-方法-遞迴-建構子-式-和-class"><a class="header-anchor" href="#四大-function-函數-式-方法-遞迴-建構子-式-和-class">#</a> [四大 function()]函數(式)，方法，遞迴，建構子(式)和 class</h3>
<details open>
<summary>收合</summary>
<p>前端最起碼要知道前三個</p>
<ul>
<li>function
<ul>
<li>共用的程式碼</li>
</ul>
</li>
<li>method
<ul>
<li>物件下專用的方法</li>
</ul>
</li>
<li>recursive
<ul>
<li>函數呼叫自己 ex:費氏數列</li>
</ul>
</li>
<li>constructor 首字大寫
<ul>
<li>思考一個問題 有 10 個人請印出他們的名字</li>
<li>物件導向</li>
<li>懶人包 極致抽出共用=&gt;很會抽，抽爆</li>
</ul>
</li>
</ul>
<CodeGroup>
<CodeGroupItem title="js">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">first<span class="token punctuation">,</span> last<span class="token punctuation">,</span> age<span class="token punctuation">,</span> eye</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> first<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> last<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>eyeColor <span class="token operator">=</span> eye<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> myFather <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"John"</span><span class="token punctuation">,</span> <span class="token string">"Doe"</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">"blue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> myMother <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"Sally"</span><span class="token punctuation">,</span> <span class="token string">"Rally"</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">,</span> <span class="token string">"green"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"爸爸"</span><span class="token punctuation">,</span> myFather<span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token string">"歲"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"媽媽"</span><span class="token punctuation">,</span> myMother<span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token string">"歲"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="輸出">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>爸爸 <span class="token number">50</span> 歲
媽媽 <span class="token number">48</span> 歲
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
</details>
<!-- ### [巢狀判斷] -->
<!-- ### [OO] -->
<h2 id="如何成為好的工程師-好的工程師有哪些特色"><a class="header-anchor" href="#如何成為好的工程師-好的工程師有哪些特色">#</a> 如何成為好的工程師，好的工程師有哪些特色</h2>
<p>可以參考 Rafeni 寫的這篇是我看過最清楚的文章</p>
<p>https://ithelp.ithome.com.tw/articles/10251846</p>
</template>