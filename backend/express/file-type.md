# 如何判斷上傳檔案格式 file-type 簡介

不知道大家有沒有和我一樣喜歡測試網站上傳檔案會不會檢查副檔名(Filename Extension)

如果網站很舊，後端很隨便地只有檢查 [Content-Type](https://notfalse.net/40/http-representation) 就能繞過去 XD

舉例來說，上傳帳號頭像(大頭貼)，我拿`.txt`檔案修改副檔名成`.png`上傳上去，成功存進 DB，當下次要讀取就會出錯，畢竟編碼格式不同~

## file-type

[NPM 官網](https://www.npmjs.com/package/file-type)

### 使用方式

0. 安裝 Nodejs
1. 將下面檔案分成三份存起來
2. 到存檔案的資料夾`npm install`安裝依賴的模組
3. `node file-type.js` 執行後端程式
4. 開啟 html 檔案測試一下

### 程式碼範例

引用模組

- express 原生
  - express
  - fs | file system
- 安裝套件
  - file-type | 主角
  - multer | 檔案上傳套件
  - cors | 跨域請求套件

```js
// 後端程式碼
//===================== file-type.js
import { fileTypeFromFile } from "file-type";
import express from "express";
import fs from "fs";
import multer from "multer";
import cors from "cors";

const upload = multer({ dest: "upload" });
const app = express();
app.use(cors());

app.post("/file", upload.single("myFile"), async function (req, res, next) {
  const { file } = req;
  if (file) {
    // 先 import { fileTypeFromFile } from "file-type";
    // async 檢查檔案正確格式
    const typeObject = await fileTypeFromFile(`upload/${file.filename}`);
    if (!typeObject) {
      res.send("請勿上傳 串改過的附檔名");
      return;
    }
    // 讀取
    fs.readFile(file.path, (err, data) => {
      if (err) return console.error(err);
      // 寫入 upload 資料夾
      fs.writeFile(`upload/${file.originalname}`, data, () => {
        // 檔案寫入成功後，後續動作...
        console.log("OK");
      });
    });

    res.send("OK");

  } else {
    // 沒有上傳圖片
    res.send("沒有上傳圖片");
  }
});

app.listen(3011, () => {
  console.log("http://localhost:3011/");
});
//===================== package.json
{
  "name": "server",
  "version": "1.0.0",
  "type": "module", //注意這邊如果是用require引用要記得改 CommonJS 或 commonjs
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "file-type": "^17.1.2",
    "multer": "^1.4.5-lts.1",
  }
}

```

```html
<!-- 前端 upload-example.html -->
<!DOCTYPE html>
<!-- https://flaviocopes.com/how-to-upload-files-fetch/ -->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>MY APP</title>
  </head>
  <body>
    <h1>SINGLE FILE Form版本</h1>
    <!-- action 和 enctype都要注意 -->
    <form
      action="http://localhost:3011/file"
      enctype="multipart/form-data"
      method="POST"
    >
      <!-- name 是key，要和後端對應 -->
      <input type="file" name="myFile" />
      <input type="submit" value="Upload a file" />
    </form>
  </body>
</html>
```
