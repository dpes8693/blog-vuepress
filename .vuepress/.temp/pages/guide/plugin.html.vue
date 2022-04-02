<template><h1 id="blog-修改的地方-plugin"><a class="header-anchor" href="#blog-修改的地方-plugin">#</a> Blog 修改的地方 Plugin</h1>
<ol>
<li>修改 scrollbar</li>
</ol>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>
<span class="token selector">&lt;style>
html</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> -moz-hidden-unscrollable<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body::-webkit-scrollbar</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">-ms-overflow-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vw + 18px<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ol start="2">
<li>引用 fontawesome 4</li>
</ol>
<p><a href="https://www.codesprogram.com/icons/font-awesome-4" target="_blank" rel="noopener noreferrer">https://www.codesprogram.com/icons/font-awesome-4<OutboundLink/></a></p>
<p><a href="https://www.codesprogram.com/icons/Font-awesome-meteor-icon" target="_blank" rel="noopener noreferrer">https://www.codesprogram.com/icons/Font-awesome-meteor-icon<OutboundLink/></a></p>
</template>