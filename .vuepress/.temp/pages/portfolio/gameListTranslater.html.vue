<template><h1 id="steam-遊戲列表-to-markdown-表格語法"><a class="header-anchor" href="#steam-遊戲列表-to-markdown-表格語法">#</a> Steam 遊戲列表 to markdown 表格語法</h1>
<p><RouterLink to="/portfolio/"><i class="fa fa-arrow-left"></i>返回列表</RouterLink></p>
<h3>作品</h3>
<div class="custom-container tip"><p class="custom-container-title">解說</p>
<p>Markdown 是一種易讀易寫的標記式語言，可以快速產生文檔。</p>
<p>目前巴哈的哈啦區可以從 Hackmd 複製表格到回復區(寄信和小屋文章不能)。</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">巴哈哈啦區有一些 bug</p>
<ul>
<li>
<p>1.複製轉換時有一些特殊符號會導致出錯，例如: <code>'</code></p>
</li>
<li>
<p>2.文末會多一段文字<code>選擇repo</code>，需要以編輯文章的方式用空白消除。若直接刪除會導致表格一起不見。</p>
</li>
<li>
<p>3.demo 請見下面</p>
</li>
</ul>
</div>
<iframe width="100%" height="500" src="//jsfiddle.net/dpes5407/pcd82euq/17/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
<!-- <iframe width="100%" height="500" src="//jsfiddle.net/dpes5407/pcd82euq/3/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe> -->
<h2 id="功能統整"><a class="header-anchor" href="#功能統整">#</a> 功能統整</h2>
<ul>
<li>輸入:
<ul>
<li>表格名稱，巴哈 id，遊戲列表</li>
</ul>
</li>
<li>核取方塊
<ul>
<li>是否開啟自動 Steam 加入超連結</li>
</ul>
</li>
<li>轉換:
<ul>
<li>將遊戲列表從一列轉成三攔式表格，並且加上 Steam 搜尋的連結</li>
</ul>
</li>
<li>複製 (目前提示文字已經拿掉了):
<ul>
<li>複製轉換後的文字，之後可以貼到 Hackmd 轉成網頁表格</li>
<li>最後複製網頁表格貼在巴哈姆特哈拉區</li>
</ul>
</li>
</ul>
<h2 id="demo"><a class="header-anchor" href="#demo">#</a> DEMO</h2>
<p><img src="https://drive.google.com/uc?export=download&amp;id=19FSsqNrBGUNZZh21vXkZDa2xASShB4L1" alt="DEMO"></p>
<p><img src="https://drive.google.com/uc?export=download&amp;id=1xT-PRxE36V769VJOt9D44aWbO3GdTDqL" alt="editArticle"></p>
<p><img src="https://drive.google.com/uc?export=download&amp;id=19j8XMXcqffbOnL8yDXuWkrruZQj1AIUY" alt="article"></p>
<h2 id="實作中練了什麼"><a class="header-anchor" href="#實作中練了什麼">#</a> 實作中練了什麼</h2>
<ul>
<li>熟悉 js 語法怎麼用迴圈實現符合 markdown 語法，有練習到找規律</li>
<li>Vuetify 框架語法</li>
<li>了解 Steam URL 規則</li>
</ul>
<p><RouterLink to="/portfolio/"><i class="fa fa-arrow-left"></i>返回列表</RouterLink></p>
</template>