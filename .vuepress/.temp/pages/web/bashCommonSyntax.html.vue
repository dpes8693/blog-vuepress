<template><h1 id="紀錄我常用的windows語法"><a class="header-anchor" href="#紀錄我常用的windows語法">#</a> 紀錄我常用的windows語法</h1>
<h2 id="run-執行"><a class="header-anchor" href="#run-執行">#</a> Run 執行</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#查詢剩餘的激活天數</span>
slmgr.vbs -xpr 

<span class="token comment">#顯卡相關 direcrX(Direct eXtension)</span>
dxdiag

<span class="token comment">## MS Console(.msc)：</span>
<span class="token comment">#電腦管理</span>
compmgmt.msc
	<span class="token comment">#事件檢視器</span>
	eventvwr.msc
	<span class="token comment">#磁碟管理</span>
	diskmgmt.msc
<span class="token comment">#裝置管理員</span>
devmgmt.msc	
<span class="token comment">#本機 群組原則編輯器</span>
gpedit.msc


<span class="token comment">#註冊檔案</span>
regedit
<span class="token comment">#系統資訊</span>
msinfo32
<span class="token comment">#命令字元</span>
cmd

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><img src="https://drive.google.com/uc?export=download&amp;id=1Qas3DIHzRj1tPMKV2Z7Rt77b8p6779rp" alt="稽核原則追蹤"></p>
<h2 id="cmd-命令"><a class="header-anchor" href="#cmd-命令">#</a> cmd 命令</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>cmd:<span class="token punctuation">{</span>
	<span class="token function">nslookup</span>
	ipconfig
	arp -all <span class="token punctuation">{</span>
		查詢目標設備的MAC地址
	<span class="token punctuation">}</span>
	nbtstat -n
	tracert <span class="token number">192</span>.xxx.xxx.xxx 
	<span class="token function">ping</span> <span class="token number">192</span>.xxx.xxx.xxx <span class="token punctuation">{</span>
		<span class="token punctuation">(</span>Time To Live<span class="token punctuation">)</span>
		TCP/IP工具
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="其他筆記"><a class="header-anchor" href="#其他筆記">#</a> 其他筆記</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>VHD 虛擬hard disk
BCD boot configuration data 開機選項easyBCD
雙系統開機引導

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>