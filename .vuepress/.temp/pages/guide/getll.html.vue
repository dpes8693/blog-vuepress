<template><h1 id="將台灣地址轉換成經緯度"><a class="header-anchor" href="#將台灣地址轉換成經緯度">#</a> 將台灣地址轉換成經緯度</h1>
<div class="custom-container tip"><p class="custom-container-title">如果有更好的歡迎推薦~</p>
<p><code>dpes8693@gmail.com</code></p>
</div>
<p>根據需求不同分成 3x2 種情況</p>
<ul>
<li>
<p>不同筆數</p>
<ul>
<li>只要查 1 筆</li>
<li>50 筆以內</li>
<li>超過 50 筆</li>
</ul>
</li>
<li>
<p>根據不同格式</p>
<ul>
<li>json</li>
<li>csv(excel)</li>
</ul>
</li>
</ul>
<h2 id="只要查一筆"><a class="header-anchor" href="#只要查一筆">#</a> 只要查一筆</h2>
<ul>
<li>
<p>方法 1
非常簡單 google 搜尋 <code>address to longitude and latitude</code>就很多了網站可以線上找
ex: <a href="https://www.latlong.net/convert-address-to-lat-long.html" target="_blank" rel="noopener noreferrer">Get Lat Long from Address<OutboundLink/></a></p>
</li>
<li>
<p>方法 2
去 <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">google map<OutboundLink/></a> 搜尋取得該網址 例如:<code>新竹縣五峰鄉大隘95號</code>
會拿到以下連結</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token code keyword">`https://www.google.com/maps/place/%E6%96%B0%E7%AB%B9%E7%B8%A3%E4%BA%94%E5%B3%B0%E9%84%89%E5%85%AC%E6%89%80/@24.6320346,121.1108543,15z/data=!3m1!4b1!4m5!3m4!1s0x346845b2283b930b:0x4e8ee305f3c689a6!8m2!3d24.631984!4d121.1195496`</span>

仔細觀察會發現@後面就是經緯度了，<span class="token code keyword">`[@24.6320346,121.1108543]`</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>方法 3
<a href="https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple" target="_blank" rel="noopener noreferrer">google 團隊_ json 範例<OutboundLink/></a>
<img src="https://drive.google.com/uc?export=download&amp;id=1ckuGLbkKZp3-RKPFEO-mfHKI7Y294GQS" alt="googlemap-json"></p>
</li>
</ul>
<p><a href="https://developers-dot-devsite-v2-prod.appspot.com/maps/documentation/utils/geocoder#q%3D%25u65B0%25u5317%25u5E02%25u6C38%25u548C%25u5340%25u798F%25u548C%25u8DEF154%25u865F" target="_blank" rel="noopener noreferrer">google 團隊_經緯度範例<OutboundLink/></a>
<img src="https://drive.google.com/uc?export=download&amp;id=1r4hydBDoN6Ds0kGY5fjSLmBEhb0uHlrd" alt="googlemap-ll"></p>
<h2 id="csv-50-筆-超過-50-筆"><a class="header-anchor" href="#csv-50-筆-超過-50-筆">#</a> [CSV] 50 筆 &amp; 超過 50 筆</h2>
<p>測試過<code>1000筆</code>和<code>5000筆</code>都有通過可以轉換，看有沒有其他人一起用太多人同時用會出錯</p>
<p><img src="https://drive.google.com/uc?export=download&amp;id=1yPAzB_lKFpllwBX6pbpb0b3Pl37gd4FS" alt="geocode"></p>
<p>一律推薦<a href="https://workspace.google.com/u/0/marketplace/app/geocode_by_awesome_table/904124517349?hl=zh&amp;pann=sheets_addon_widget" target="_blank" rel="noopener noreferrer">Geocode by Awesome Table<OutboundLink/></a></p>
<p><a href="https://support.awesome-table.com/hc/en-us/sections/360000012309-Geocode" target="_blank" rel="noopener noreferrer">官網步驟教學<OutboundLink/></a></p>
<p>影片</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/KHP_D_e1aFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<h2 id="json-1-50-筆"><a class="header-anchor" href="#json-1-50-筆">#</a> [JSON] 1~50 筆</h2>
<ul>
<li>
<p>方法一: 用我寫的 js 程式，需要懂 Nodejs</p>
<ul>
<li><a href="https://github.com/dpes8693/address-to-longitude-latitude" target="_blank" rel="noopener noreferrer">github<OutboundLink/></a></li>
</ul>
</li>
<li>
<p>方法二: 用上面推推的<code>Geocode by Awesome Table</code>下載 csv 轉成 json</p>
</li>
</ul>
<h2 id="json-超過-50-筆"><a class="header-anchor" href="#json-超過-50-筆">#</a> [JSON] 超過 50 筆</h2>
<ul>
<li>
<p>方法一: 用我寫的 js 程式，需要懂 Nodejs</p>
<ul>
<li><a href="https://github.com/dpes8693/address-to-longitude-latitude" target="_blank" rel="noopener noreferrer">github<OutboundLink/></a></li>
<li>需要你自己開發 sleep 功能 否則 幾秒內超過一定數量 google 會阻擋爬蟲</li>
<li>sleep 可以參考<a href="https://juejin.cn/post/7078206989402112037" target="_blank" rel="noopener noreferrer">這篇<OutboundLink/></a></li>
</ul>
</li>
<li>
<p>方法二: 用上面推推的<code>Geocode by Awesome Table</code>下載 csv 轉成 json</p>
</li>
</ul>
<h2 id="參考資料"><a class="header-anchor" href="#參考資料">#</a> 參考資料</h2>
<p><a href="https://data.gov.tw/dataset/24333" target="_blank" rel="noopener noreferrer">https://data.gov.tw/dataset/24333<OutboundLink/></a>
<a href="https://www.letswrite.tw/json-to-csv/" target="_blank" rel="noopener noreferrer">https://www.letswrite.tw/json-to-csv/<OutboundLink/></a></p>
<h2 id="冷知識"><a class="header-anchor" href="#冷知識">#</a> 冷知識</h2>
<p>兩地經緯度相差 0.01° 距離相差約 1 km。</p>
<p>兩地經緯度相差 0.001° 距離相差約 100 m。</p>
</template>