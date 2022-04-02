<template><h1 id="about-me"><a class="header-anchor" href="#about-me">#</a> About Me</h1>
<p><a href="https://home.gamer.com.tw/creation.php?owner=dpes5407" target="_blank" rel="noopener noreferrer"> #巴哈<OutboundLink/></a>
<a href="https://dpes8693.github.io/blog-vuepress/" target="_blank" rel="noopener noreferrer"> #Blog<OutboundLink/></a>
<a href="https://dpes5407.medium.com/" target="_blank" rel="noopener noreferrer"> #Medium<OutboundLink/></a><br>
<a href="https://v2.vuepress.vuejs.org/reference/default-theme/config.html#basic-config" target="_blank" rel="noopener noreferrer"># 文件~~~<OutboundLink/></a></p>
<h2 id="markdown-語法"><a class="header-anchor" href="#markdown-語法">#</a> Markdown 語法</h2>
<hr>
<h3 id="table-of-content"><a class="header-anchor" href="#table-of-content">#</a> Table of Content</h3>
<!-- toc -->
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>[[toc]]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><nav class="table-of-contents"><ul><li><RouterLink to="#markdown-語法">Markdown 語法</RouterLink><ul><li><RouterLink to="#table-of-content">Table of Content</RouterLink></li><li><RouterLink to="#強調">強調</RouterLink></li><li><RouterLink to="#code-分隔">Code 分隔</RouterLink></li><li><RouterLink to="#youtube">YouTube</RouterLink></li><li><RouterLink to="#項目符號">項目符號+-</RouterLink></li><li><RouterLink to="#引用">引用&gt;</RouterLink></li><li><RouterLink to="#pic">pic</RouterLink></li><li><RouterLink to="#emoji">emoji</RouterLink></li><li><RouterLink to="#tip-warning-danger">tip warning danger</RouterLink></li><li><RouterLink to="#table">table</RouterLink></li><li><RouterLink to="#展開">展開</RouterLink></li><li><RouterLink to="#收合">收合</RouterLink></li><li><RouterLink to="#插入語法補充">插入語法補充</RouterLink></li></ul></li></ul></nav>
<!-- end toc -->
<h3 id="強調"><a class="header-anchor" href="#強調">#</a> <code>強調</code></h3>
<!-- code -->
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token code keyword">`我被框起來了`</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>我被框起來了</code></p>
<!-- end code -->
<hr>
<h3 id="code-分隔"><a class="header-anchor" href="#code-分隔">#</a> Code 分隔</h3>
<!-- 分隔 -->
<iframe height=370 width=100% src="/blog-vuepress/demo/EmbedTest.html"></iframe>
<CodeGroup>
<CodeGroupItem title="FOO">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="BAR">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">'bar'</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
<hr>
<!-- end 分隔 -->
<h3 id="youtube"><a class="header-anchor" href="#youtube">#</a> YouTube</h3>
<!-- embed -->
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>Youtube
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>315<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.youtube.com/embed/7tdsTRV2b58<span class="token punctuation">"</span></span> 
<span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YouTube video player<span class="token punctuation">"</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">allow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture<span class="token punctuation">"</span></span> <span class="token attr-name">allowfullscreen</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><iframe width="100%" height="315" src="https://www.youtube.com/embed/7tdsTRV2b58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<!-- end embed -->
<h3 id="項目符號"><a class="header-anchor" href="#項目符號">#</a> 項目符號+-</h3>
<!-- +- -->
<hr>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token list punctuation">+</span> a
<span class="token list punctuation">+</span> b
  <span class="token list punctuation">1.</span> OuO
  <span class="token list punctuation">2.</span> QuQ
  <span class="token list punctuation">-</span> 123

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li>a</li>
<li>b
<ol>
<li>OuO</li>
<li>QuQ</li>
</ol>
<ul>
<li>123</li>
</ul>
</li>
</ul>
<!-- end +- -->  
<h3 id="引用"><a class="header-anchor" href="#引用">#</a> 引用&gt;</h3>
<!-- > -->
<hr>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token blockquote punctuation">></span> The more I learn, the more I realize how much I don't know.  
<span class="token blockquote punctuation">></span> --- Albert Einstein
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>The more I learn, the more I realize how much I don't know.<br>
--- Albert Einstein</p>
</blockquote>
<!-- end > -->
<h3 id="pic"><a class="header-anchor" href="#pic">#</a> pic</h3>
<!-- pic -->
<hr>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">CAT</span>](<span class="token url">/blog-vuepress/images/cat.jpg</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://i.imgur.com/eRVS5qg.jpg" alt="CAT"></p>
<!-- end pic -->
<h3 id="emoji"><a class="header-anchor" href="#emoji">#</a> emoji</h3>
<!-- emoji -->
<hr>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>:tada: 

:100:
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>🎉</p>
<p>💯</p>
<!-- end emoji -->
<h3 id="tip-warning-danger"><a class="header-anchor" href="#tip-warning-danger">#</a> tip warning danger</h3>
<!-- tip -->
<hr>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: tip This is a tip 
456<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
<span class="token list punctuation">+</span> 123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">This is a tip</p>
<p>456<br></p>
<ul>
<li>123<br></li>
</ul>
</div>
<!-- end tip -->
<h3 id="table"><a class="header-anchor" href="#table">#</a> table</h3>
<!-- table -->
<hr>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> Tables        </span><span class="token punctuation">|</span><span class="token table-header important"> Are           </span><span class="token punctuation">|</span><span class="token table-header important"> Cool  </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">-------------</span> <span class="token punctuation">|</span><span class="token punctuation">-------------</span><span class="token punctuation">|</span> <span class="token punctuation">-----</span><span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> col 3 is      </span><span class="token punctuation">|</span><span class="token table-data"> right-aligned </span><span class="token punctuation">|</span><span class="token table-data"> $1600 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> col 2 is      </span><span class="token punctuation">|</span><span class="token table-data"> centered      </span><span class="token punctuation">|</span><span class="token table-data">   $12 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> zebra stripes </span><span class="token punctuation">|</span><span class="token table-data"> are neat      </span><span class="token punctuation">|</span><span class="token table-data">    $1 </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table>
<thead>
<tr>
<th>Tables</th>
<th>Are</th>
<th>Cool</th>
</tr>
</thead>
<tbody>
<tr>
<td>col 3 is</td>
<td>right-aligned</td>
<td>$1600</td>
</tr>
<tr>
<td>col 2 is</td>
<td>centered</td>
<td>$12</td>
</tr>
<tr>
<td>zebra stripes</td>
<td>are neat</td>
<td>$1</td>
</tr>
</tbody>
</table>
<!-- end table -->
<h3 id="展開"><a class="header-anchor" href="#展開">#</a> 展開</h3>
<!-- 展開 -->
<hr>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>
::: details [展開]
```js
console.log('Hello, VuePress!')
:::

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><details class="custom-container details"><summary>[展開]</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, VuePress!'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details>
<!-- end 展開 -->
<h3 id="收合"><a class="header-anchor" href="#收合">#</a> 收合</h3>
<!-- 收合 -->
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span> <span class="token attr-name">open</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span>html tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>
記得空一行 

open預設展開 若要收合刪掉即可
<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> HTML TAG </span><span class="token punctuation">|</span><span class="token table-header important"> Eng.            </span><span class="token punctuation">|</span><span class="token table-header important"> X</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">--------</span> <span class="token punctuation">|</span> <span class="token punctuation">---------------</span> <span class="token punctuation">|</span> <span class="token punctuation">------------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> var      </span><span class="token punctuation">|</span><span class="token table-data"> variable        </span><span class="token punctuation">|</span><span class="token table-data"> Text         </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> q        </span><span class="token punctuation">|</span><span class="token table-data"> quotation       </span><span class="token punctuation">|</span><span class="token table-data"> Text         </span><span class="token punctuation">|</span>
</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><details open>
  <summary>html tag</summary>
<p>記得空一行</p>
<p>open預設展開 若要收合刪掉即可</p>
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
</tbody>
</table>
</details>
<!-- end 收合 -->
<h3 id="插入語法補充"><a class="header-anchor" href="#插入語法補充">#</a> 插入語法補充</h3>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>





高亮{1,3-5}
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-markdown ext-md"><pre v-pre class="language-markdown"><code>取消行數:no-line-numbers
</code></pre></div></template>