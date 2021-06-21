<template><h1 id="vupress架blog"><a class="header-anchor" href="#vupress架blog">#</a> Vupress架Blog</h1>
<p><img src="https://i.imgur.com/KTCnirQ.png" alt="01-github-desktop"></p>
<p><img src="https://i.imgur.com/uuVq97v.png" alt="02-file-tree"></p>
<p><img src="https://i.imgur.com/6tGd9MY.png" alt="03-script"></p>
<p><img src="https://i.imgur.com/RmBwJnm.png" alt="04-gitlab"></p>
<p><img src="https://i.imgur.com/j7ae9U6.png" alt="05-page"></p>
<p>vuepress 生成靜態SPA網站</p>
<p>0.前置作業
建立github帳號
安裝github 桌面UI版本
https://desktop.github.com/</p>
<p>安裝VS code
安裝node js
安裝npm
安裝yarn</p>
<p>建立新的repository
C:\Users&quot;你的使用者名稱&quot;\Documents\GitHub
底下會出現新的資料夾</p>
<hr>
<p>yarn init -y</p>
<p>#開始裝vuepress
yarn add -D vuepress@next</p>
<h1 id="新建一个-markdown-文件"><a class="header-anchor" href="#新建一个-markdown-文件">#</a> 新建一个 markdown 文件</h1>
<p>echo '# Hello VuePress' &gt; README.md</p>
<h1 id="开始写作"><a class="header-anchor" href="#开始写作">#</a> 开始写作</h1>
<p>yarn vuepress dev</p>
<p>http://localhost:8080/
遇到亂碼的話
是編碼問題 用Notepad++把Readme改成Unicode編碼
==================休息一下
package.json
&quot;scripts&quot;: {
&quot;serve&quot;: &quot;vuepress dev&quot;,
&quot;build&quot;: &quot;vuepress build&quot;
}
config.js 更改</p>
<p>============</p>
</template>