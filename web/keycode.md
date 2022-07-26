# 關於鍵盤事件棄用 資訊整理

相信大家對於鍵盤事件(KeyboardEvent.keyCode)一定不陌生

- 事件都會包在 window 底下 window.event
- keydown → keypress → keyup

## keydown, keypress, keyup 的差異

懶人包: 除非是判斷鍵盤放開否則全部都用 `keydown`

| 名稱     | 可否連續觸發                  | 組合鍵偵測 | 補充               |
| -------- | ----------------------------- | ---------- | ------------------ |
| keydown  | o                             | o          |                    |
| keypress | o (僅可打出文字符號的按鍵有效) | x          | 被棄用，不推薦使用 |
| keyup    | x                             | x          |                    |

## 基本

```js
// 寫法1
window.addEventListener(
  "keydown",
  function (e) {
    console.log(e);
  },
  false
);
// 寫法2
window.onkeydown = function (e) {
  console.log(e);
};

function 常用的(e) {
  // 以下是常常在網路上看到的寫法
  console.log(e.target.value);
  console.log(e.code);
  //   下面兩個在後面會補充不推薦使用的原因
  console.log(e.which);
  console.log(e.keyCode);
}
// 印出e 發現一堆屬性
// {
//     isTrusted: true,
//     altKey: false,
//     bubbles: true,
//     cancelBubble: false,
//     cancelable: true,
//     charCode: 0,
//     code: "KeyA",
//     composed: true,
//     ctrlKey: false,
//     currentTarget: null,
//     defaultPrevented: false,
//     detail: 0,
//     eventPhase: 0,
//     isComposing: false,
//     key: "a",
//     keyCode: 65,
//     location: 0,
//     metaKey: false,
//     path: (4) [body.vsc-initialized, html, document, Window],
//     repeat: false,
//     returnValue: true,
//     shiftKey: false,
//     sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false},
//     srcElement: body.vsc-initialized,
//     target: body.vsc-initialized,
//     timeStamp: 150224.5,
//     type: "keydown",
//     view: Window {window: Window, self: Window, document: document, name: '', location: Location, …},
//     which: 65,
// };

// 複製他發現只會複製到 isTrusted
e2 = {
  isTrusted: true,
};
```

## 關於棄用

- key 系列滿多是不推薦使用的
  - 鍵盤 event.which
  - 鍵盤 event.keyCode (2016 年後建議用 event.key 或是 event.code 取代)
  - onkeypress 事件

感謝[zhangxinxu 前輩的好文章](https://www.zhangxinxu.com/wordpress/2021/01/js-keycode-deprecated/)

至於不推薦`keyCode`的原因是因為只抓鍵盤不知道用戶到底是打哪個字，例如鍵盤上的`.`和`>`都是同一個`keyCode`，如果是全形的鍵盤數字鍵那邊的`.`keyCode 居然不一樣，這對於開發者是很不友好的，當時候用是因為要支援 IE，既然 IE 被淘汰了就用心的取代吧!

- 常見的 keyCode

| 按鍵名稱        | event.key  | event.keyCode |
| --------------- | ---------- | ------------- |
| enter           | Enter      | 13            |
| delete          | Delete     | 46            |
| backspace       | Backspace  | 8             |
| esc             | Escape     | 27            |
| tab             | Tab        | 9             |
| 上              | ArrowUp    | 38            |
| 下              | ArrowDown  | 40            |
| 左              | ArrowLeft  | 37            |
| 右              | ArrowRight | 39            |
| pageDown 下一頁 | PageDown   | 34            |
| pageUp 上一頁   | PageUp     | 33            |
| home            | Home       | 36            |
| end             | End        | 35            |
| shift           | Shift      | 16            |
| control         | Control    | 17            |
| alt             | Alt        | 18            |

- 需要注意的 event.code (會有左右之分)

| 名稱    | event.code               |
| ------- | ------------------------ |
| shift   | ShiftLeft/ShiftRight     |
| control | ControlLeft/ControlRight |
| alt     | AltLeft/AltRight         |

## 參考資料

https://www.zhangxinxu.com/wordpress/2021/01/js-keycode-deprecated/

https://medium.com/@yitailin/%E6%AF%94%E8%BC%83-keydown-keypress-keyup-%E7%9A%84%E5%B7%AE%E7%95%B0-4e873ba17e81

https://www.w3schools.com/jsref/event_key_key.asp

https://www.w3schools.com/jsref/event_key_keycode.asp

https://www.toptal.com/developers/keycode
