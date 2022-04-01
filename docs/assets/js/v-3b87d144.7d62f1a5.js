(self.webpackChunkblog_vuepress=self.webpackChunkblog_vuepress||[]).push([[554],{7689:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-3b87d144",path:"/others/bashCommonSyntax.html",title:"紀錄我常用的windows語法",lang:"zh-tw",frontmatter:{},excerpt:"",headers:[{level:2,title:"Run 執行",slug:"run-執行",children:[]},{level:2,title:"cmd 命令",slug:"cmd-命令",children:[]},{level:2,title:"其他筆記",slug:"其他筆記",children:[]}],filePathRelative:"others/bashCommonSyntax.md",git:{updatedTime:1648657295e3,contributors:[{name:"Richard Lin",email:"33016870+dpes8693@users.noreply.github.com",commits:1}]}}},5961:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="紀錄我常用的windows語法"><a class="header-anchor" href="#紀錄我常用的windows語法">#</a> 紀錄我常用的windows語法</h1><h2 id="run-執行"><a class="header-anchor" href="#run-執行">#</a> Run 執行</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#查詢剩餘的激活天數</span>\nslmgr.vbs -xpr \n\n<span class="token comment">#顯卡相關 direcrX(Direct eXtension)</span>\ndxdiag\n\n<span class="token comment">## MS Console(.msc)：</span>\n<span class="token comment">#電腦管理</span>\ncompmgmt.msc\n\t<span class="token comment">#事件檢視器</span>\n\teventvwr.msc\n\t<span class="token comment">#磁碟管理</span>\n\tdiskmgmt.msc\n<span class="token comment">#裝置管理員</span>\ndevmgmt.msc\t\n<span class="token comment">#本機 群組原則編輯器</span>\ngpedit.msc\n\n\n<span class="token comment">#註冊檔案</span>\nregedit\n<span class="token comment">#系統資訊</span>\nmsinfo32\n<span class="token comment">#命令字元</span>\ncmd\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><img src="https://drive.google.com/uc?export=download&amp;id=1Qas3DIHzRj1tPMKV2Z7Rt77b8p6779rp" alt="稽核原則追蹤"></p><h2 id="cmd-命令"><a class="header-anchor" href="#cmd-命令">#</a> cmd 命令</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cmd:<span class="token punctuation">{</span>\n\t<span class="token function">nslookup</span>\n\tipconfig\n\tarp -all <span class="token punctuation">{</span>\n\t\t查詢目標設備的MAC地址\n\t<span class="token punctuation">}</span>\n\tnbtstat -n\n\ttracert <span class="token number">192</span>.xxx.xxx.xxx \n\t<span class="token function">ping</span> <span class="token number">192</span>.xxx.xxx.xxx <span class="token punctuation">{</span>\n\t\t<span class="token punctuation">(</span>Time To Live<span class="token punctuation">)</span>\n\t\tTCP/IP工具\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="其他筆記"><a class="header-anchor" href="#其他筆記">#</a> 其他筆記</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>VHD 虛擬hard disk\nBCD boot configuration data 開機選項easyBCD\n雙系統開機引導\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>查詢開機關機 <code>事件碼30,7002</code></p>',9),p={render:function(n,s){return e}}}}]);