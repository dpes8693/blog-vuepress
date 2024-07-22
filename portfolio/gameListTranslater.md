# Steam 遊戲列表 to markdown 表格語法

[<i class="fa fa-arrow-left"></i>返回列表](./index.md)

<h3>作品</h3>

::: tip 解說
Markdown 是一種易讀易寫的標記式語言，可以快速產生文檔。

目前巴哈的哈啦區可以從 Hackmd 複製表格到回復區(寄信和小屋文章不能)。

:::
::: danger 巴哈哈啦區有一些 bug

- 1.複製轉換時有一些特殊符號會導致出錯，例如: `'`

- 2.文末會多一段文字`選擇repo`，需要以編輯文章的方式用空白消除。若直接刪除會導致表格一起不見。

- 3.demo 請見下面

:::

<iframe width="100%" height="500" src="//jsfiddle.net/dpes5407/pcd82euq/17/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<!-- <iframe width="100%" height="500" src="//jsfiddle.net/dpes5407/pcd82euq/3/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe> -->

## 功能統整

- 輸入:
  - 表格名稱，巴哈 id，遊戲列表
- 核取方塊
  - 是否開啟自動加入 Steam 超連結
- 轉換:
  - 將遊戲列表從一列轉成三攔式表格，並且加上 Steam 搜尋的連結
- 複製 (目前提示文字已經拿掉了):
  - 複製轉換後的文字，之後可以貼到 Hackmd 轉成網頁表格
  - 最後複製網頁表格貼在巴哈姆特哈拉區


範例輸入:
```md
Lacuna
Orwell: Ignorance is Strength
Heaven's Vault
FRAMED Collection
We Need To Go Deeper
```

## DEMO

![DEMO](https://drive.google.com/thumbnail?id=19FSsqNrBGUNZZh21vXkZDa2xASShB4L1&sz=w1366)

![editArticle](https://drive.google.com/thumbnail?id=1xT-PRxE36V769VJOt9D44aWbO3GdTDqL&sz=w1366)

![article](https://drive.google.com/thumbnail?id=19j8XMXcqffbOnL8yDXuWkrruZQj1AIUY&sz=w1366)

## 實作中練了什麼

- 熟悉 js 語法怎麼用迴圈實現符合 markdown 語法，有練習到找規律
- Vuetify 框架語法
- 了解 Steam URL 規則

[<i class="fa fa-arrow-left"></i>返回列表](./index.md)
