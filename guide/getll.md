# 將台灣地址轉換成經緯度

::: tip 如果有更好的歡迎推薦~
`dpes8693@gmail.com`
:::

根據需求不同分成 3x2 種情況

- 不同筆數
  - 只要查 1 筆
  - 50 筆以內
  - 超過 50 筆

- 根據不同格式
  - json
  - csv(excel)

## 只要查一筆

- 方法 1
  非常簡單 google 搜尋 `address to longitude and latitude`就很多了網站可以線上找
  ex: [Get Lat Long from Address](https://www.latlong.net/convert-address-to-lat-long.html)

- 方法 2
  去 [google map](https://www.google.com/maps) 搜尋取得該網址 例如:`新竹縣五峰鄉大隘95號`
  會拿到以下連結`https://www.google.com/maps/place/%E6%96%B0%E7%AB%B9%E7%B8%A3%E4%BA%94%E5%B3%B0%E9%84%89%E5%85%AC%E6%89%80/@24.6320346,121.1108543,15z/data=!3m1!4b1!4m5!3m4!1s0x346845b2283b930b:0x4e8ee305f3c689a6!8m2!3d24.631984!4d121.1195496`

仔細觀察會發現@後面就是經緯度了，`[@24.6320346,121.1108543]`

## [CSV] 50 筆 & 超過 50 筆

測試過`1000筆`和`5000筆`都有通過可以轉換，看有沒有其他人一起用太多人同時用會出錯

![geocode](https://drive.google.com/uc?export=download&id=1yPAzB_lKFpllwBX6pbpb0b3Pl37gd4FS)

一律推薦[Geocode by Awesome Table](https://workspace.google.com/u/0/marketplace/app/geocode_by_awesome_table/904124517349?hl=zh&pann=sheets_addon_widget)

[官網步驟教學](https://support.awesome-table.com/hc/en-us/sections/360000012309-Geocode)

影片

<iframe width="560" height="315" src="https://www.youtube.com/embed/KHP_D_e1aFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## [JSON] 1~50 筆

- 方法一: 用我寫的 js 程式，需要懂 Nodejs

  - [github](https://github.com/dpes8693/address-to-longitude-latitude)

- 方法二: 用上面推推的`Geocode by Awesome Table`下載 csv 轉成 json

## [JSON] 超過 50 筆

- 方法一: 用我寫的 js 程式，需要懂 Nodejs

  - [github](https://github.com/dpes8693/address-to-longitude-latitude)
  - 需要你自己開發 sleep 功能 否則 幾秒內超過一定數量 google 會阻擋爬蟲
  - sleep 可以參考[這篇](https://juejin.cn/post/7078206989402112037)

- 方法二: 用上面推推的`Geocode by Awesome Table`下載 csv 轉成 json

## 參考資料

[https://data.gov.tw/dataset/24333](https://data.gov.tw/dataset/24333)
[https://www.letswrite.tw/json-to-csv/](https://www.letswrite.tw/json-to-csv/)

## 冷知識

兩地經緯度相差 0.01° 距離相差約 1 km。

兩地經緯度相差 0.001° 距離相差約 100 m。
