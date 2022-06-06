<template><h1 id="如何判斷上傳檔案格式-file-type-簡介"><a class="header-anchor" href="#如何判斷上傳檔案格式-file-type-簡介">#</a> 如何判斷上傳檔案格式 file-type 簡介</h1>
<p>不知道大家有沒有和我一樣喜歡測試網站上傳檔案會不會檢查副檔名(Filename Extension)</p>
<p>如果網站很舊，後端很隨便地只有檢查 <a href="https://notfalse.net/40/http-representation" target="_blank" rel="noopener noreferrer">Content-Type<OutboundLink/></a> 就能繞過去 XD</p>
<p>舉例來說，上傳帳號頭像(大頭貼)，我拿<code>.txt</code>檔案修改副檔名成<code>.png</code>上傳上去，成功存進 DB，當下次要讀取就會出錯，畢竟編碼格式不同~</p>
<h2 id="file-type"><a class="header-anchor" href="#file-type">#</a> file-type</h2>
<p><a href="https://www.npmjs.com/package/file-type" target="_blank" rel="noopener noreferrer">NPM 官網<OutboundLink/></a></p>
<h3 id="使用方式"><a class="header-anchor" href="#使用方式">#</a> 使用方式</h3>
<ol start="0">
<li>安裝 Nodejs</li>
<li>將下面檔案分成三份存起來</li>
<li>到存檔案的資料夾<code>npm install</code>安裝依賴的模組</li>
<li><code>node file-type.js</code> 執行後端程式</li>
<li>開啟 html 檔案測試一下</li>
</ol>
<h3 id="程式碼範例"><a class="header-anchor" href="#程式碼範例">#</a> 程式碼範例</h3>
<p>引用模組</p>
<ul>
<li>express 原生
<ul>
<li>express</li>
<li>fs | file system</li>
</ul>
</li>
<li>安裝套件
<ul>
<li>file-type | 主角</li>
<li>multer | 檔案上傳套件</li>
<li>cors | 跨域請求套件</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 後端程式碼</span>
<span class="token comment">//===================== file-type.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fileTypeFromFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"file-type"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> express <span class="token keyword">from</span> <span class="token string">"express"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">"fs"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> multer <span class="token keyword">from</span> <span class="token string">"multer"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> cors <span class="token keyword">from</span> <span class="token string">"cors"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> upload <span class="token operator">=</span> <span class="token function">multer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> dest<span class="token operator">:</span> <span class="token string">"upload"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"/file"</span><span class="token punctuation">,</span> upload<span class="token punctuation">.</span><span class="token function">single</span><span class="token punctuation">(</span><span class="token string">"myFile"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> file <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 先 import { fileTypeFromFile } from "file-type";</span>
    <span class="token comment">// async 檢查檔案正確格式</span>
    <span class="token keyword">const</span> typeObject <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fileTypeFromFile</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">upload/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>file<span class="token punctuation">.</span>filename<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>typeObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"請勿上傳 串改過的附檔名"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 讀取</span>
    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>path<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 寫入 upload 資料夾</span>
      fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">upload/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>file<span class="token punctuation">.</span>originalname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 檔案寫入成功後，後續動作...</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"OK"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"OK"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 沒有上傳圖片</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"沒有上傳圖片"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3011</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"http://localhost:3011/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//===================== package.json</span>
<span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token operator">:</span> <span class="token string">"server"</span><span class="token punctuation">,</span>
  <span class="token string">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token string">"type"</span><span class="token operator">:</span> <span class="token string">"module"</span><span class="token punctuation">,</span> <span class="token comment">//注意這邊如果是用require引用要記得改 CommonJS 或 commonjs</span>
  <span class="token string">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>
  <span class="token string">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"test"</span><span class="token operator">:</span> <span class="token string">"echo \"Error: no test specified\" &amp;&amp; exit 1"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token string">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span>
  <span class="token string">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"cors"</span><span class="token operator">:</span> <span class="token string">"^2.8.5"</span><span class="token punctuation">,</span>
    <span class="token string">"express"</span><span class="token operator">:</span> <span class="token string">"^4.17.1"</span><span class="token punctuation">,</span>
    <span class="token string">"file-type"</span><span class="token operator">:</span> <span class="token string">"^17.1.2"</span><span class="token punctuation">,</span>
    <span class="token string">"multer"</span><span class="token operator">:</span> <span class="token string">"^1.4.5-lts.1"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 前端 upload-example.html --></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- https://flaviocopes.com/how-to-upload-files-fetch/ --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>MY APP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>SINGLE FILE Form版本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- action 和 enctype都要注意 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span>
      <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://localhost:3011/file<span class="token punctuation">"</span></span>
      <span class="token attr-name">enctype</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multipart/form-data<span class="token punctuation">"</span></span>
      <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POST<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- name 是key，要和後端對應 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myFile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Upload a file<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></template>