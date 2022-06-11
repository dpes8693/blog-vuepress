<template><h1 id="將-googledrive-分享連結-to-圖片連結"><a class="header-anchor" href="#將-googledrive-分享連結-to-圖片連結">#</a> 將 GoogleDrive 分享連結 to 圖片連結</h1>
<p><RouterLink to="/portfolio/"><i class="fa fa-arrow-left"></i>返回列表</RouterLink></p>
<ul>
<li>範例輸入格式</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://drive.google.com/file/d/1FgTcxp2FPxXZD9FxlYgMABWGEYPIT3k4/view?usp=sharing
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul>
<li>範例輸出格式</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://drive.google.com/uc?export=download&amp;id=1FgTcxp2FPxXZD9FxlYgMABWGEYPIT3k4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3>作品</h3>
<iframe width="100%" height="300" src="//jsfiddle.net/dpes5407/63rxdc42/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<!-- <iframe width="100%" height="200" src="//jsfiddle.net/dpes5407/63rxdc42/185/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe> -->
<h3>操作方式</h3>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>1.點輸入框, 貼上連結

2.點產生圖片 URL 的按鈕

3.點複製按鈕複製結果(連結) => 拿去貼上做使用
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><!-- <h3>小按鈕</h3>

![小按鈕](https://drive.google.com/uc?export=download&id=1MdMm41gsiYi4vwzAb88MBqRVIBBJ1F6a) -->
<h2 id="圖片使用教學"><a class="header-anchor" href="#圖片使用教學">#</a> 圖片使用教學</h2>
<p><a href="https://home.gamer.com.tw/artwork.php?sn=5259952" target="_blank" rel="noopener noreferrer">巴哈文章<OutboundLink/></a></p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">小米</span>](<span class="token url">https://drive.google.com/uc?export=download&amp;id=1FgTcxp2FPxXZD9FxlYgMABWGEYPIT3k4</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50px<span class="token punctuation">"</span></span>
  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://drive.google.com/uc?export=download&amp;id=1FgTcxp2FPxXZD9FxlYgMABWGEYPIT3k4<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>成果圖</p>
<p><img src="https://drive.google.com/uc?export=download&amp;id=1FgTcxp2FPxXZD9FxlYgMABWGEYPIT3k4" alt="成果"></p>
<h2 id="參考資料"><a class="header-anchor" href="#參考資料">#</a> 參考資料</h2>
<p><a href="https://ithelp.ithome.com.tw/articles/10271977?sc=iThomeR" target="_blank" rel="noopener noreferrer">那些被忽略但很好用的 Web API / Clipboard<OutboundLink/></a></p>
<p><a href="https://www.w3schools.com/howto/howto_js_copy_clipboard.asp" target="_blank" rel="noopener noreferrer">How TO - Copy Text to Clipboard<OutboundLink/></a></p>
<h2 id="我學到什麼"><a class="header-anchor" href="#我學到什麼">#</a> 我學到什麼</h2>
<h4 id="複習了"><a class="header-anchor" href="#複習了">#</a> 複習了</h4>
<ul>
<li>HTMLInputElement.select(); //可以選擇文字</li>
<li>HTMLInputElement.focus() //可以 focus 在輸入框</li>
</ul>
<h4 id="第一次知道了"><a class="header-anchor" href="#第一次知道了">#</a> 第一次知道了</h4>
<ul>
<li>Document.execCommand()語法 <a href="https://developer.mozilla.org/zh-TW/docs/Web/API/Document/execCommand" target="_blank" rel="noopener noreferrer">mdn<OutboundLink/></a></li>
</ul>
<p>文件說這個是已經過時的語法，我覺得好處是不用請求使用者同意(但有資安疑慮)，比較現代的寫法是用<code>Clipboard</code>API</p>
<ul>
<li>HTMLInputElement.setSelectionRange() //可以從被 focused 的 input 元素選取特定範圍</li>
</ul>
<p><RouterLink to="/portfolio/"><i class="fa fa-arrow-left"></i>返回列表</RouterLink></p>
</template>