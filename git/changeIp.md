# Git 切換上傳的網址(url) 以win10為例

以下提供不用下指令的方式更改 git

適用情境: 公司 gitlab有阻擋ip，變成居家上班，要改成對外ip

![無法上傳會提示這樣](https://drive.google.com/uc?export=download&id=14jiYeeVLKfhkfMEQD4WFWir_k-_unbyL)

無法上傳會提示這樣

## 參考

[Domain name change on Git Server](https://stackoverflow.com/questions/39630078/domain-name-change-on-git-server)

## 文字版

建議安置安裝VScode套件 才能和我底下的截圖對上(可跳過)

[gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

1. 知道git資料夾的設定檔在哪邊
2. 用編輯器開起 `.git/config`檔案 修改 url (要記得存檔~)
3. 點上傳(push) 會要求驗證帳號身分
4. 登入後點上傳(push)  成功~

---

## 看圖做

![知道git資料夾的設定檔在哪邊](https://drive.google.com/uc?export=download&id=1dGpR1qMdfj487b6IlyekoNxFZNokHnUP)

知道git資料夾的設定檔在哪邊 => 打開

![修改ip  例如: http://192.168.0.1 ⇒ http://192.168.0.100.1](https://drive.google.com/uc?export=download&id=1CWoBSDZLTZ_G3V-8HBAPeqZdIYoFTwIV)

修改ip => 存檔 => 點上傳會要你登入

![驗證身分 請登入git的帳號](https://drive.google.com/uc?export=download&id=13fvqFe6qbDekzrdI49oM4-Aj92J0KUFz)

驗證身分，請登入帳號 => 登入成功再次上傳

![成功](https://drive.google.com/uc?export=download&id=1V8Kipi5q-UBBaQRYEHqgW_0rtbD-6FJb)

成功畫面
