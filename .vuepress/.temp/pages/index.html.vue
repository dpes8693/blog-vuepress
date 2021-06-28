<template><h1 id="about-me"><a class="header-anchor" href="#about-me">#</a> About Me</h1>
<p><a href="https://home.gamer.com.tw/creation.php?owner=dpes5407" target="_blank" rel="noopener noreferrer"> #巴哈<OutboundLink/></a>
<a href="https://dpes8693.github.io/blog-vuepress/" target="_blank" rel="noopener noreferrer"> #Blog<OutboundLink/></a>
<a href="https://dpes5407.medium.com/" target="_blank" rel="noopener noreferrer"> #Medium<OutboundLink/></a><br>
<a href="https://v2.vuepress.vuejs.org/reference/default-theme/config.html#basic-config" target="_blank" rel="noopener noreferrer"># 文件~~~<OutboundLink/></a></p>
<h2 id="markdown-語法"><a class="header-anchor" href="#markdown-語法">#</a> Markdown 語法</h2>
<!--  -->
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
<!--  -->
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>Youtube
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>315<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.youtube.com/embed/7tdsTRV2b58<span class="token punctuation">"</span></span> 
<span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>YouTube video player<span class="token punctuation">"</span></span> <span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">allow</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture<span class="token punctuation">"</span></span> <span class="token attr-name">allowfullscreen</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><iframe width="100%" height="315" src="https://www.youtube.com/embed/7tdsTRV2b58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
<!-- > -->
<hr>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token blockquote punctuation">></span> The more I learn, the more I realize how much I don't know.  
<span class="token blockquote punctuation">></span> --- Albert Einstein
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote>
<p>The more I learn, the more I realize how much I don't know.<br>
--- Albert Einstein</p>
</blockquote>
<!-- pic -->
<hr>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">CAT</span>](<span class="token url">/blog-vuepress/images/cat.jpg</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="https://i.imgur.com/eRVS5qg.jpg" alt="CAT"></p>
<!-- emoji -->
<hr>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>:tada: 

:100:
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>🎉</p>
<p>💯</p>
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
<!-- table -->
<hr>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> Tables        </span><span class="token punctuation">|</span><span class="token table-header important"> Are           </span><span class="token punctuation">|</span><span class="token table-header important"> Cool  </span><span class="token punctuation">|</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">-------------</span> <span class="token punctuation">|</span><span class="token punctuation">:-------------:</span><span class="token punctuation">|</span> <span class="token punctuation">-----:</span><span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> col 3 is      </span><span class="token punctuation">|</span><span class="token table-data"> right-aligned </span><span class="token punctuation">|</span><span class="token table-data"> $1600 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> col 2 is      </span><span class="token punctuation">|</span><span class="token table-data"> centered      </span><span class="token punctuation">|</span><span class="token table-data">   $12 </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> zebra stripes </span><span class="token punctuation">|</span><span class="token table-data"> are neat      </span><span class="token punctuation">|</span><span class="token table-data">    $1 </span><span class="token punctuation">|</span>
</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table>
<thead>
<tr>
<th>Tables</th>
<th style="text-align:center">Are</th>
<th style="text-align:right">Cool</th>
</tr>
</thead>
<tbody>
<tr>
<td>col 3 is</td>
<td style="text-align:center">right-aligned</td>
<td style="text-align:right">$1600</td>
</tr>
<tr>
<td>col 2 is</td>
<td style="text-align:center">centered</td>
<td style="text-align:right">$12</td>
</tr>
<tr>
<td>zebra stripes</td>
<td style="text-align:center">are neat</td>
<td style="text-align:right">$1</td>
</tr>
</tbody>
</table>
<!-- 展開 -->
<hr>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: details [展開]
```js
console.log('Hello, VuePress!')
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><details class="custom-container details"><summary>[展開]</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, VuePress!'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details>
<!-- 收合2 -->
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>summary上下要空
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span>html tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>

<span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important"> HTML TAG </span><span class="token punctuation">|</span><span class="token table-header important"> Eng.            </span><span class="token punctuation">|</span><span class="token table-header important"> X</span>
</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">--------</span> <span class="token punctuation">|</span> <span class="token punctuation">---------------</span> <span class="token punctuation">|</span> <span class="token punctuation">--------------------------------</span> <span class="token punctuation">|</span>
</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> var      </span><span class="token punctuation">|</span><span class="token table-data"> variable        </span><span class="token punctuation">|</span><span class="token table-data"> Text                             </span><span class="token punctuation">|</span>
<span class="token punctuation">|</span><span class="token table-data"> q        </span><span class="token punctuation">|</span><span class="token table-data"> quotation       </span><span class="token punctuation">|</span><span class="token table-data"> Text                             </span><span class="token punctuation">|</span>
</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><details>
  <summary>html tag</summary>
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
</template>