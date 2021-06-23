<template><h1 id="用-vupress-架-blog"><a class="header-anchor" href="#用-vupress-架-blog">#</a> 用 Vupress 架 Blog</h1>
<h2 id="_0-名詞"><a class="header-anchor" href="#_0-名詞">#</a> 0.名詞</h2>
<div class="custom-container tip"><p class="custom-container-title">先看一些名詞~~</p>
<br>
</div>
<CodeGroup>
<CodeGroupItem title="1.程式語言">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">MD</span><span class="token operator">:</span>
Markdown<span class="token punctuation">,</span>一種標記語法<span class="token punctuation">,</span><span class="token function">用文字就能呈現出各種效果</span><span class="token punctuation">(</span>ex插入圖片<span class="token punctuation">,</span>表格<span class="token punctuation">)</span><span class="token punctuation">,</span>達到很好搬移的效果

<span class="token constant">HTML</span><span class="token operator">:</span>
HyperText Markup Language<span class="token punctuation">,</span>負責<span class="token operator">-</span>網站的架構、資訊

<span class="token constant">JS</span><span class="token operator">:</span>
JavaScript<span class="token punctuation">,</span>負責<span class="token operator">-</span>網站的邏輯、功能

<span class="token constant">CSS</span><span class="token operator">:</span>
Cascading Style Sheets<span class="token punctuation">,</span>負責控制樣式、外觀

<span class="token constant">JSON</span><span class="token operator">:</span>
JavaScript Object Notation<span class="token punctuation">,</span><span class="token string">'JS物件'</span>的標準格式

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="2.框架">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'Vuepress'</span><span class="token operator">:</span>
一個前端框架<span class="token punctuation">,</span>可以快速建立一頁式靜態網站

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="3.軟體">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'Github Desktop'</span><span class="token operator">:</span>
https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">desktop.github.com</span><span class="token regex-delimiter">/</span></span>
不用打指令<span class="token punctuation">,</span><span class="token function">動一動手指頭就能上傳程式碼到Github</span><span class="token punctuation">(</span>網頁平台<span class="token punctuation">)</span>並且快速部屬到網路上

<span class="token string">'Git'</span><span class="token operator">:</span>
https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">git-scm.com</span><span class="token regex-delimiter">/</span></span>
是協助程式版本控管的工具<span class="token punctuation">,</span>方便工程師們合作開發

<span class="token string">'Node.js'</span><span class="token operator">:</span>
https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>nodejs<span class="token punctuation">.</span>org<span class="token operator">/</span>zh<span class="token operator">-</span>tw<span class="token operator">/</span>download<span class="token operator">/</span>
白話來說是讓我們可以在本地端執行<span class="token constant">JS</span>的軟體，因為<span class="token constant">JS</span><span class="token function">需要依賴</span><span class="token punctuation">(</span>瀏覽器<span class="token punctuation">)</span>才能執行

<span class="token string">'VScode'</span><span class="token operator">:</span>
https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">code.visualstudio.com</span><span class="token regex-delimiter">/</span></span>
一套用來寫程式的編譯器<span class="token punctuation">,</span><span class="token function">上面有非常多插件</span><span class="token punctuation">(</span>ex自動排版<span class="token punctuation">,</span>替括號上色等等<span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="4.套件管理程式">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'npm'</span><span class="token operator">:</span>
Node Package Manager<span class="token punctuation">,</span>套件管理程式
網路上神人那麼多套件太多了<span class="token punctuation">,</span>只要有<span class="token string">'node.js環境'</span><span class="token function">就可以在終端機</span><span class="token punctuation">(</span>cmd<span class="token punctuation">)</span>快速安裝套件

<span class="token string">'yarn'</span><span class="token operator">:</span>
Facebook開發，一種比較快的套件管理程式
需要先透過npm安裝<span class="token string">"npm install --global yarn"</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="_1-架構"><a class="header-anchor" href="#_1-架構">#</a> 1.架構</h2>
<p>利用 Vupress 快速生成靜態頁面
使用 markdown 寫文章
部屬網頁到 Github(免費)</p>
<h2 id="_2-準備"><a class="header-anchor" href="#_2-準備">#</a> 2.準備</h2>
<ul>
<li>有一個寫程式的編譯器: VScode</li>
<li>註冊 Github 帳號</li>
<li>下載 Github Desktop</li>
<li>安裝 node js</li>
<li>安裝 yarn</li>
</ul>
<p>C:\Users&quot;你的使用者名稱&quot;\Documents\GitHub 底下會出現新的資料夾</p>
<ul>
<li>使用 Github Desktop 開一個新的專案(repository)
<img src="https://i.imgur.com/KTCnirQ.png" alt="01-github-desktop"></li>
<li>VScode 開啟那個專案-安裝 vuepress-2.0
(最早是 0-&gt;1-&gt;2)
yarn init -y</li>
</ul>
<h2 id="_3-vuepress"><a class="header-anchor" href="#_3-vuepress">#</a> 3.vuepress</h2>
<h3 id="開始裝-vuepress"><a class="header-anchor" href="#開始裝-vuepress">#</a> 開始裝 vuepress</h3>
<p><a href="https://v2.vuepress.vuejs.org/guide/getting-started.html#manual-installation" target="_blank" rel="noopener noreferrer">官方文件<OutboundLink/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#ctrl + ~ 開啟終端機</span>
<span class="token function">yarn</span> <span class="token function">add</span> -D vuepress@next
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="新建一个-markdown-文件"><a class="header-anchor" href="#新建一个-markdown-文件">#</a> 新建一个 markdown 文件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">'# Hello VuePress'</span> <span class="token operator">></span> README.md
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>資料夾看起來會像這樣
<img src="https://i.imgur.com/j7ae9U6.png" alt="05-page"></p>
<h3 id="執行"><a class="header-anchor" href="#執行">#</a> 執行</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#ctrl + ~ 開啟終端機</span>
<span class="token function">yarn</span> vuepress dev
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="到瀏覽器"><a class="header-anchor" href="#到瀏覽器">#</a> 到瀏覽器</h3>
<p>預設是 http://localhost:8080/
也許會看到亂碼</p>
<p>是編碼問題 用 Notepad++把'Readme'改成 Unicode 編碼</p>
<h3 id="休息一下"><a class="header-anchor" href="#休息一下">#</a> 休息一下~</h3>
<p><img src="https://i.imgur.com/eRVS5qg.jpg" alt="CAT"></p>
<h2 id="_4-調整參數"><a class="header-anchor" href="#_4-調整參數">#</a> 4.調整參數</h2>
<h3 id="package-json"><a class="header-anchor" href="#package-json">#</a> package.json</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">//最外層 package.json 添加</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"serve"</span><span class="token operator">:</span> <span class="token string">"vuepress dev"</span><span class="token punctuation">,</span>
    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vuepress build"</span>
  <span class="token punctuation">}</span>
<span class="token comment">// 以後只要打yarn serve 就會執行編譯(開發)</span>
<span class="token comment">// 以後只要打yarn build 就會執行壓縮打包(部屬用)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="https://i.imgur.com/AE0HMU3.png" alt="02-file-tree"></p>
<h3 id="vupress-config-js-要自己新增-更改"><a class="header-anchor" href="#vupress-config-js-要自己新增-更改">#</a> .vupress/config.js 要自己新增&amp;更改</h3>
<div class="custom-container tip"><p class="custom-container-title">這邊要注意 /位置/需要自己更改</p>
</div>
<ul>
<li>'dest' 是 build 打包時 資料夾名稱,因為部屬到 Github 要用 docs</li>
<li>'head' 後面連結是 icon 的位置 需要自己建立/.vuepress/public/images</li>
<li>'base' 是你專案的名稱</li>
<li>'navbar' 右上導覽</li>
<li>'sidebar' 左邊導覽</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// .vupress/config.js 要自己新增</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  lang<span class="token operator">:</span> <span class="token string">"zh-tw"</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">"Richard"</span><span class="token punctuation">,</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"link"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> rel<span class="token operator">:</span> <span class="token string">"icon"</span><span class="token punctuation">,</span> href<span class="token operator">:</span> <span class="token string">"/blog-vuepress/images/icon.png"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  dest<span class="token operator">:</span> <span class="token string">"docs"</span><span class="token punctuation">,</span>
  base<span class="token operator">:</span> <span class="token string">"/blog-vuepress/"</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">"歡迎"</span><span class="token punctuation">,</span>

  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//logo: 'https://vuejs.org/images/logo.png',</span>

    navbar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// NavbarItem</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">"guide"</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">"/guide/1.md"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// NavbarGroup</span>
      <span class="token comment">// {</span>
      <span class="token comment">//   text: 'Group',</span>
      <span class="token comment">//   children: ['/group/foo.md', '/group/bar.md'],</span>
      <span class="token comment">// },</span>

      <span class="token comment">//'/guide/1.md',</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    sidebar<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// SidebarItem</span>
      <span class="token punctuation">{</span>
        text<span class="token operator">:</span> <span class="token string">"Guide"</span><span class="token punctuation">,</span>
        link<span class="token operator">:</span> <span class="token string">"/guide/1.md"</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// SidebarItem</span>
          <span class="token punctuation">{</span>
            text<span class="token operator">:</span> <span class="token string">"github原始碼"</span><span class="token punctuation">,</span>
            link<span class="token operator">:</span> <span class="token string">"https://github.com/dpes8693/blog-vuepress"</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">// 字符串 - 页面文件路径</span>
          <span class="token comment">//'/guide/1.md',</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// SidebarGroup</span>
      <span class="token comment">// {</span>
      <span class="token comment">//   isGroup: true,</span>
      <span class="token comment">//   text: 'Group',</span>
      <span class="token comment">//   children: ['/group/foo.md', '/group/bar.md'],</span>
      <span class="token comment">// },</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h3 id="小結論"><a class="header-anchor" href="#小結論">#</a> 小結論</h3>
<ul>
<li>好的總之我們了解了 package 是整包專案的設定 不太會動到<br></li>
<li>而 config.js 和我們網頁的介面很有關聯，若有更改需要打包後才會 show 出來<br></li>
</ul>
<h2 id="_5-寫第一篇文章"><a class="header-anchor" href="#_5-寫第一篇文章">#</a> 5.寫第一篇文章</h2>
<ul>
<li>寫之前我們再看一下專案資料夾架構</li>
</ul>
<p><img src="https://i.imgur.com/VFWVbXF.png" alt="06"></p>
<p>要自己建立</p>
<ul>
<li>.vuepress/public</li>
<li>.vuepress/public/images</li>
<li>guide/1.md</li>
</ul>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token comment">&lt;!-- 編輯1.md --></span>

<span class="token title important"><span class="token punctuation">#</span> 我的第一個文章</span>

<span class="token title important"><span class="token punctuation">##</span> Hello</span>

<span class="token url"><span class="token operator">!</span>[<span class="token content">CAT</span>](<span class="token url">https://i.imgur.com/eRVS5qg.jpg</span>)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="執行-1"><a class="header-anchor" href="#執行-1">#</a> 執行</h2>
<p>還記得我們有在 package.json 設定快捷鍵嗎?</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span>  serve
<span class="token comment"># 看看有沒有成功 去 http://localhost:8080/你專案名稱/guide/1.html</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_6-部屬到-github"><a class="header-anchor" href="#_6-部屬到-github">#</a> 6.部屬到 Github</h2>
<p>md 檔案在打包時會自動根據路徑變成 html 網頁檔
最後我們來打包吧</p>
<h2 id="打包"><a class="header-anchor" href="#打包">#</a> 打包</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span>  build
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>完成會看到:
<img src="https://i.imgur.com/BguMtTp.png" alt="08-build"></p>
<h2 id="github-desktop-上傳程式碼"><a class="header-anchor" href="#github-desktop-上傳程式碼">#</a> Github Desktop 上傳程式碼</h2>
<p>開 Github Desktop 會發現左邊有變更<br></p>
<ul>
<li>
<p>輸入版本號&gt;&gt;commit 提交&gt;&gt;push 發布
<img src="https://i.imgur.com/cL8s1vr.png" alt="09"></p>
</li>
<li>
<p>登入 Github 到剛剛的專案&gt;&gt;Settings&gt;&gt;Pages
<img src="https://i.imgur.com/6tGd9MY.png" alt="03-script"></p>
</li>
<li>
<p>修改位置: main/docs &gt;&gt;Save 儲存
<img src="https://i.imgur.com/RmBwJnm.png" alt="04-gitlab"></p>
</li>
<li>
<p>等到綠色提示就可以去看成果囉~
<img src="https://i.imgur.com/j81ypn2.png" alt="10"></p>
</li>
</ul>
<h1 id="_7-總結"><a class="header-anchor" href="#_7-總結">#</a> 7.總結</h1>
<p>我終於了解網路上大家都不那麼詳細的原因了 要截圖真的很花時間 R<br>
這篇閱讀完可能只花 15 分鐘,剛接觸實作就要好幾個小時!💯
以上 有問題慢慢補充</p>
</template>