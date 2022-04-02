# About Me

[ #巴哈](https://home.gamer.com.tw/creation.php?owner=dpes5407)
[ #Blog](https://dpes8693.github.io/blog-vuepress/)
[ #Medium](https://dpes5407.medium.com/)<br>
[# 文件~~~](https://v2.vuepress.vuejs.org/reference/default-theme/config.html#basic-config)
## Markdown 語法
### ``
<!-- code -->
```md
`我被框起來了`
```
`我被框起來了`
<!-- end code -->

### Code 分隔
<!-- 分隔 -->
<iframe height=370 width=100% src="/blog-vuepress/demo/EmbedTest.html"></iframe>

:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar';

```
:::
::::

---
<!-- end 分隔 -->
### YouTube
<!-- embed -->
```html
Youtube
<iframe width="100%" height="315" src="https://www.youtube.com/embed/7tdsTRV2b58" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
```
<iframe width="100%" height="315" src="https://www.youtube.com/embed/7tdsTRV2b58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<!-- end embed -->

### 項目符號+-
<!-- +- -->
---
```md
+ a
+ b
  1. OuO
  2. QuQ
  - 123

```
+ a
+ b
  1. OuO
  2. QuQ
  - 123
<!-- end +- -->  

### 引用>
<!-- > -->
---
```md
> The more I learn, the more I realize how much I don't know.  
> --- Albert Einstein
```
> The more I learn, the more I realize how much I don't know.  
> --- Albert Einstein
<!-- end > -->
### pic
<!-- pic -->
---
```md
![CAT](/blog-vuepress/images/cat.jpg)
```
![CAT](https://i.imgur.com/eRVS5qg.jpg)
<!-- end pic -->
### emoji
<!-- emoji -->
---
```md
:tada: 

:100:
```
:tada: 

:100:
<!-- end emoji -->
### tip
<!-- tip -->
---
```md
::: tip This is a tip 
456<br>
+ 123<br>
:::
```
::: tip This is a tip 
456<br>
+ 123<br>
:::
<!-- end tip -->
### table
<!-- table -->
---

```md
| Tables        | Are           | Cool  |
| ------------- |-------------| -----|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

| Tables        | Are           | Cool  |
| ------------- |-------------| -----|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
<!-- end table -->
### 展開
<!-- 展開 -->
---
```md

::: details [展開]
```js
console.log('Hello, VuePress!')
:::

```

::: details [展開]
```js
console.log('Hello, VuePress!')
```
:::
<!-- end 展開 -->

### 收合
<!-- 收合 -->
```md
<details open>
  <summary>html tag</summary>
記得空一行 

open預設展開 若要收合刪掉即可
| HTML TAG | Eng.            | X
| -------- | --------------- | ------------ |
| var      | variable        | Text         |
| q        | quotation       | Text         |

</details>
```

<details open>
  <summary>html tag</summary>

記得空一行 

open預設展開 若要收合刪掉即可
| HTML TAG | Eng.            | X
| -------- | --------------- | ------------ |
| var      | variable        | Text         |
| q        | quotation       | Text         |

</details>

<!-- end 收合 -->
