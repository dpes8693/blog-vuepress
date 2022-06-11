# 將 GoogleDrive 分享連結 to 圖片連結

[<i class="fa fa-arrow-left"></i>返回列表](./index.md)

- 範例輸入格式

```
https://drive.google.com/file/d/1FgTcxp2FPxXZD9FxlYgMABWGEYPIT3k4/view?usp=sharing
```

- 範例輸出格式

```
https://drive.google.com/uc?export=download&id=1FgTcxp2FPxXZD9FxlYgMABWGEYPIT3k4
```

<h3>作品</h3>
<iframe width="100%" height="300" src="//jsfiddle.net/dpes5407/63rxdc42/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

<!-- <iframe width="100%" height="200" src="//jsfiddle.net/dpes5407/63rxdc42/185/embedded/result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe> -->

<h3>操作方式</h3>

```md
1.點輸入框, 貼上連結

2.點產生圖片 URL 的按鈕

3.點複製按鈕複製結果(連結) => 拿去貼上做使用
```

<!-- <h3>小按鈕</h3>

![小按鈕](https://drive.google.com/uc?export=download&id=1MdMm41gsiYi4vwzAb88MBqRVIBBJ1F6a) -->

## 圖片使用教學

[巴哈文章](https://home.gamer.com.tw/artwork.php?sn=5259952)

```md
![小米](https://drive.google.com/uc?export=download&id=1FgTcxp2FPxXZD9FxlYgMABWGEYPIT3k4)
```

```html
<img
  width="50px"
  src="https://drive.google.com/uc?export=download&id=1FgTcxp2FPxXZD9FxlYgMABWGEYPIT3k4"
/>
```

成果圖

![成果](https://drive.google.com/uc?export=download&id=1FgTcxp2FPxXZD9FxlYgMABWGEYPIT3k4)

## 參考資料

[那些被忽略但很好用的 Web API / Clipboard](https://ithelp.ithome.com.tw/articles/10271977?sc=iThomeR)

[How TO - Copy Text to Clipboard](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp)

## 我學到什麼

#### 複習了

- HTMLInputElement.select(); //可以選擇文字
- HTMLInputElement.focus() //可以 focus 在輸入框

#### 第一次知道了

- Document.execCommand()語法 [mdn](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/execCommand)

文件說這個是已經過時的語法，我覺得好處是不用請求使用者同意(但有資安疑慮)，比較現代的寫法是用`Clipboard`API

- HTMLInputElement.setSelectionRange() //可以從被 focused 的 input 元素選取特定範圍



[<i class="fa fa-arrow-left"></i>返回列表](./index.md)
