<template><h1 id="vscode"><a class="header-anchor" href="#vscode">#</a> VScode</h1>
<p><a href="https://dpes5407.medium.com/vscode-terminal-tips-%E7%B5%82%E7%AB%AF%E6%A9%9F-%E6%8A%80%E5%B7%A7-99e284b81be4" target="_blank" rel="noopener noreferrer">VScode 終端機技巧<OutboundLink/></a></p>
<div class="custom-container tip"><p class="custom-container-title">重點</p>
<p><code>ctrl G</code> 輸入數字可以快速前往某一行程式碼</p>
<p>對著變數用<code>F2</code>可以將該檔案變數全部編輯!</p>
<p>VScode新增檔案時名稱帶入階層會自動創建資料夾
<code>a/b.html</code> 會自動創建 a資料夾和 b.html</p>
</div>
<h2 id="vscode-快捷鍵"><a class="header-anchor" href="#vscode-快捷鍵">#</a> VScode 快捷鍵</h2>
<CodeGroup>
<CodeGroupItem title="最基本">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ctrl  c</span><span class="token template-punctuation string">`</span></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ctrl  v</span><span class="token template-punctuation string">`</span></span> 
<span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ctrl  z</span><span class="token template-punctuation string">`</span></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ctrl  y</span><span class="token template-punctuation string">`</span></span> 
<span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ctrl  f</span><span class="token template-punctuation string">`</span></span> 
<span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ctrl  s</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="分頁相關">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ctrl  w</span><span class="token template-punctuation string">`</span></span> 關閉分頁
<span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">ctrl  n</span><span class="token template-punctuation string">`</span></span> 開分頁
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="實用">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">-</span> 挪上<span class="token operator">/</span>下
  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Alt + ↑</span><span class="token template-punctuation string">`</span></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Alt + ↓</span><span class="token template-punctuation string">`</span></span>
<span class="token operator">-</span> <span class="token function">快速複製</span> <span class="token punctuation">(</span>可多選<span class="token punctuation">)</span>
  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Alt + Shift + ↓</span><span class="token template-punctuation string">`</span></span>
<span class="token operator">-</span> 註解或取消註解
  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Ctrl + /</span><span class="token template-punctuation string">`</span></span>
<span class="token operator">-</span> 插件 自動排版code
  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Alt + Shift + F</span><span class="token template-punctuation string">`</span></span>
<span class="token operator">-</span> 向下選取相同字
  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Ctrl + D </span><span class="token template-punctuation string">`</span></span>
<span class="token operator">-</span> 選取的文字跳到該上層定義
  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">F12</span><span class="token template-punctuation string">`</span></span>
<span class="token operator">-</span> 刪除整行code
  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Ctrl + Shift + K</span><span class="token template-punctuation string">`</span></span>
<span class="token operator">-</span> 跳到頁首 頁末
  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Ctrl + Home</span><span class="token template-punctuation string">`</span></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Ctrl + End</span><span class="token template-punctuation string">`</span></span>
<span class="token operator">-</span> 跳到指定行數
  <span class="token operator">-</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Ctrl + G</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="進階">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Ctrl + R</span><span class="token template-punctuation string">`</span></span>：切換工作區		
<span class="token punctuation">.</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Ctrl + P</span><span class="token template-punctuation string">`</span></span>：開啟選單輸入檔案名稱直接開啟檔案
<span class="token punctuation">.</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Alt + Shift + 滑鼠左鍵</span><span class="token template-punctuation string">`</span></span>：直欄選取
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="vscode-設定"><a class="header-anchor" href="#vscode-設定">#</a> VScode 設定</h2>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>
<span class="token code keyword">	檔案 → 喜好設定 → 設定 → 文字編輯器 → 字型 → Font Size</span>

<span class="token code keyword">	檔案 → 喜好設定 → 設定 → 工作台 → 外觀 → Tree:Indent </span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="好用套件"><a class="header-anchor" href="#好用套件">#</a> 好用套件</h2>
<h3 id="watch-sass"><a class="header-anchor" href="#watch-sass">#</a> Watch Sass</h3>
<p><a href="https://medium.com/@enshenghuang/%E4%BD%BF%E7%94%A8vscode%E5%A4%96%E6%8E%9B%E8%87%AA%E5%8B%95%E7%B7%A8%E8%AD%AFsass-scss-9ff768d23b48" target="_blank" rel="noopener noreferrer">Watch Sass<OutboundLink/></a> ###　 Bracket Pair Colorizer
彩虹括號 方便辨認
<img src="https://i.imgur.com/lHRSUa5.png" alt="Bracket Pair Colorizer"></p>
<p>###　 cdnjs
F1&gt;&gt;可以輸入不同插件&gt;&gt;直接插入 html
<img src="https://i.imgur.com/xK3kQl9.png" alt="cdnjs"></p>
<p>###　 Code Spell Checker
自動辨識錯字
<img src="https://i.imgur.com/Xi23q29.png" alt="Code Spell Checker"></p>
<p>###　 indent-rainbow
彩虹縮排 方便辨認
<img src="https://i.imgur.com/1cCgMCH.png" alt="indent-rainbow"></p>
<p>###　 Vetur
開發 Vue 專有名詞會變色
<img src="https://i.imgur.com/w7RtcuJ.png" alt="Vetur"></p>
<h2 id="內建-emmet"><a class="header-anchor" href="#內建-emmet">#</a> 內建 Emmet</h2>
<p>VScode 內建 Emmet 語法可以快速生成 html 預設值</p>
<ol>
<li>新建立一個 html</li>
<li>打驚嘆號<code>!</code>馬上按<code>Enter</code></li>
</ol>
<p>其他語法可以參考:</p>
<p><a href="https://code.z01.com/emmet/" target="_blank" rel="noopener noreferrer">https://code.z01.com/emmet/<OutboundLink/></a></p>
</template>