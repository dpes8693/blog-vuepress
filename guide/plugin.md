# Blog 修改的地方 Plugin

1. 修改 scrollbar

```css

<style>
html {
    overflow: -moz-hidden-unscrollable;
    height: 100%;
}

body::-webkit-scrollbar {
    display: none;
}

body {
    -ms-overflow-style: none;
    height: 100%;
	width: calc(100vw + 18px);
	overflow: auto;
}
</style>

```

2. 引用 fontawesome 4

[https://www.codesprogram.com/icons/font-awesome-4](https://www.codesprogram.com/icons/font-awesome-4)

[https://www.codesprogram.com/icons/Font-awesome-meteor-icon](https://www.codesprogram.com/icons/Font-awesome-meteor-icon)