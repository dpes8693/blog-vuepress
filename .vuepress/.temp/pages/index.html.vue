<template><h1 id="about-me"><a class="header-anchor" href="#about-me">#</a> About Me</h1>
<p><a href="https://home.gamer.com.tw/creation.php?owner=dpes5407" target="_blank" rel="noopener noreferrer">巴哈<OutboundLink/></a></p>
<p><a href="https://dpes5407.medium.com/" target="_blank" rel="noopener noreferrer">Medium<OutboundLink/></a></p>
<h2 id="markdown-語法"><a class="header-anchor" href="#markdown-語法">#</a> Markdown 語法</h2>
<!--  -->
<p><img src="https://i.imgur.com/8K8J9lX.png" alt=""></p>
<CodeGroup>
<CodeGroupItem title="FOO">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="BAR">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">'bar'</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
</CodeGroup>
<!--  -->
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">VuePress Logo</span>](<span class="token url">/blog-vuepress/images/cat.jpg</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><img src="/blog-vuepress/images/cat.jpg" alt="VuePress Logo"></p>
<!--  -->
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>:tada: 
:100:
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>🎉</p>
<p>💯</p>
<!--  -->
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: tip
This is a tip
:::
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This is a tip</p>
</div>
<!--  -->
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
<!--  -->
<p><a href="https://v2.vuepress.vuejs.org/reference/default-theme/config.html#basic-config" target="_blank" rel="noopener noreferrer"># 文件~~~<OutboundLink/></a>)</p>
<!--  -->
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>::: details [展開]
```js
console.log('Hello, VuePress!')
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><details class="custom-container details"><summary>[展開]</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello, VuePress!'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details>
</template>