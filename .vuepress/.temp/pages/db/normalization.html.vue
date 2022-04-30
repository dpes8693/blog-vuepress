<template><h1 id="資料庫正規化"><a class="header-anchor" href="#資料庫正規化">#</a> 資料庫正規化</h1>
<p>可參考這篇<a href="http://cc.cust.edu.tw/~ccchen/doc/db_04.pdf" target="_blank" rel="noopener noreferrer">PPT<OutboundLink/></a>，若讀起來很吃力就先往下看吧~</p>
<ul>
<li>資料庫正規化(Database Normalization)</li>
</ul>
<p>這篇主要是面相給初學者，所以覺得很冗長是正常的!我認為這塊用逆向思維來學比較容易記住。</p>
<ul>
<li>Normal Form 簡稱 NF</li>
</ul>
<p>一些課本開頭都說正規化有什麼好處 blablabla，但對於第一次學的人沒什麼感覺(心理 OS: 喔是喔~然後下個月就忘記了)</p>
<h2 id="我們換個方式來學習"><a class="header-anchor" href="#我們換個方式來學習">#</a> 我們換個方式來學習</h2>
<ul>
<li>這邊有一個表格共 4 筆資料，請試著幫我將 PHP 學分改成<code>3學分</code></li>
</ul>
<table>
<thead>
<tr>
<th>學號</th>
<th>姓名</th>
<th>性別</th>
<th>課程名稱</th>
<th>學分</th>
<th>必選修</th>
<th>成績</th>
<th>老師姓名</th>
</tr>
</thead>
<tbody>
<tr>
<td>S3A517001</td>
<td>Gura</td>
<td>女</td>
<td>PHP</td>
<td>2</td>
<td>必修</td>
<td>74</td>
<td>阿錢</td>
</tr>
<tr>
<td>S3A517001</td>
<td>Gura</td>
<td>女</td>
<td>JS</td>
<td>3</td>
<td>必修</td>
<td>59</td>
<td>阿許</td>
</tr>
<tr>
<td>S3A517002</td>
<td>Ina</td>
<td>女</td>
<td>PHP</td>
<td>2</td>
<td>必修</td>
<td>88</td>
<td>阿錢</td>
</tr>
<tr>
<td>S3A517002</td>
<td>Ina</td>
<td>女</td>
<td>UI/UX</td>
<td>2</td>
<td>選修</td>
<td>80</td>
<td>阿陳</td>
</tr>
</tbody>
</table>
<blockquote>
<p>You: 這很簡單啊 改 2 筆就好</p>
</blockquote>
<ul>
<li>
<p>那如果今天有 300 筆呢?1000 筆呢?改起來要花幾分鐘呢?</p>
</li>
<li>
<p>再換一個問題幫我新增一個課程 <code>jQuery 2學分 必修</code></p>
</li>
</ul>
<blockquote>
<p>You: 好了!</p>
</blockquote>
<table>
<thead>
<tr>
<th>學號</th>
<th>姓名</th>
<th>性別</th>
<th>課程名稱</th>
<th>學分</th>
<th>必選修</th>
<th>成績</th>
<th>老師姓名</th>
</tr>
</thead>
<tbody>
<tr>
<td>NULL</td>
<td>NULL</td>
<td>NULL</td>
<td>jQuery</td>
<td>2</td>
<td>必修</td>
<td>NULL</td>
<td>NULL</td>
</tr>
</tbody>
</table>
<p><s>沒給我學生和其他資料 新增個毛線阿</s> 這看起來很奇怪對吧!因為資料都黏在一起(耦合太強)。</p>
<hr>
<h2 id="工程師很懶的"><a class="header-anchor" href="#工程師很懶的">#</a> 工程師很懶的</h2>
<p>我們想設計好維護的表(Table)透過上面的例子應該會發現一件事--那就是應該分類!</p>
<p>若將表拆成很細，最後透過電腦組合起來就好了，這也是正規化在做的事情。</p>
<p>不要死記，用理解的，痛過才會花時間找方法精進。</p>
<hr>
<h2 id="_1nf-一階正規化"><a class="header-anchor" href="#_1nf-一階正規化">#</a> 1NF 一階正規化</h2>
<ul>
<li>單欄位不能有 2 筆以上的資料，即單一值(Atomic)</li>
<li>每筆資料不能重複(完全一樣)</li>
<li>資料要有主鍵(PK)</li>
</ul>
<h3 id="解釋-pk-fk-相依來相依去"><a class="header-anchor" href="#解釋-pk-fk-相依來相依去">#</a> 解釋 PK FK 相依來相依去?</h3>
<ul>
<li>PK (Primary Key) 中文:主鍵
<ul>
<li>就是唯一值例如身分證字號，學號都只會有一個，這樣就不會找錯人</li>
</ul>
</li>
<li>FK (Foreign Key) 中文:外鍵
<ul>
<li>可以記成一個代號，例如:我說<code>五月天成員</code>=&gt;可以關連到<code>瑪莎、怪獸、冠佑、阿信、石頭</code></li>
</ul>
</li>
</ul>
<table>
<thead>
<tr>
<th>學號</th>
<th>姓名</th>
<th>性別</th>
<th>課程名稱</th>
</tr>
</thead>
<tbody>
<tr>
<td>NULL</td>
<td>NULL</td>
<td>NULL</td>
<td>jQuery</td>
</tr>
</tbody>
</table>
<ul>
<li>完全相依</li>
<li>部分相依</li>
<li>遞移相依(間接相依)</li>
</ul>
<p>很暴力的解說[相依]: 沒有它就廢掉了，因為無法辨別...
怎麼說呢?</p>
<p>EX:
ID | NAME | TEL.
01 | JACK | 0911111111
02 | JACK | 0922222222
請你把 ID 這列遮起來，告訴我 JACK 的電話是幾號
無法辨別 因為有 2 個人 所以需要 PK</p>
<p>FK</p>
<h2 id="_2nf-二階正規化"><a class="header-anchor" href="#_2nf-二階正規化">#</a> 2NF 二階正規化</h2>
<ul>
<li>符合 1NF</li>
<li>將部分相依的資料拆分出去</li>
</ul>
<h2 id="解釋-異常狀況-anomaly"><a class="header-anchor" href="#解釋-異常狀況-anomaly">#</a> 解釋 異常狀況(Anomaly)</h2>
<p>資料冗於
更新異常
插入異常
刪除異常</p>
<h2 id="_3nf-三階正規化"><a class="header-anchor" href="#_3nf-三階正規化">#</a> 3NF 三階正規化</h2>
<ul>
<li>符合 2NF</li>
<li>各欄位與 PK 沒有遞移相依</li>
</ul>
<h2 id="其他正規化-有興趣可以搜尋"><a class="header-anchor" href="#其他正規化-有興趣可以搜尋">#</a> 其他正規化 有興趣可以搜尋</h2>
<ul>
<li>4NF</li>
<li>5NF</li>
<li>BCNF</li>
</ul>
<h2 id="參考資料"><a class="header-anchor" href="#參考資料">#</a> 參考資料</h2>
<p><a href="https://stackoverflow.com/questions/48191228/is-erd-considered-a-kind-of-uml-diagram" target="_blank" rel="noopener noreferrer">Is ERD considered a kind of UML diagram?<OutboundLink/></a></p>
</template>