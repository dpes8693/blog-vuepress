# 名詞學習與整理

- (縮寫) //補充 {階層關係}
<br>



<details open>
  <summary>Web基本名詞</summary>

```js

大分類{
    
    通用() {
        陳述式 
        表達式

        正規表達式(Regular Expression)
    }    
    frontend()//前端 畫面和邏輯
    {
        框架{
            Vue(){
                mixins
                好兄弟{
                    vue-axios
                    vue-router
                    vuex                    
                }
                大家族{
                    Vite
                    Nuxt
                }
            }
            React()
            Angular()
        }
        套件{
            打包(){
                webpack
                babel
            }
            動畫(){
                velocity.js
                GSAP
            }
            彈窗提示(){
                popper js //alert 輕量級的套件
                sweetalert2 //漂亮的 alert 自訂
            }
            時間(){
                moment.js //https://ithelp.ithome.com.tw/articles/10208995
            }
        }
    }
    backend(){//後端 操作資料庫
         GraphQL//是一種為 API 設計的資料query(修改)的語言 FB開始使用
    }

    [Regex](`https://www.fooish.com/regex-regular-expression/`)
}

網路{
    http()//獨立拉出來講
    request()//向後端請求
    query(ex:'https://home.gamer.com.tw/creation.php'+ ?owner=dpes5407)//請求攜帶參數

    URL(Uniform Resource Locator)//統一資源定位符 ex: https://zh.wikipedia.org/
    IP(Internet Protocol Address)//網際網路協定位址 ex: 203.11.65.4
    IPv4(Internet Protocol version 4)//8*4組 bits 2進位 如192.168.100.1
    IPv6(Internet Protocol version 6)//16*8組 bits 16進位 如2001:0db8:86a3:08d3:1319:8a2e:0370:7344

    DNS(Domain Name System){ //www.google.com >> 74.125.19.147 一個轉譯Domain名稱的系統
        Record{
            MX(Mail Exchange) //
            CName(Canonical Name)
            A(Address) //IPv4  ==host record
            NS(Name server)
            TXT(Text) //驗證
            AAAA //IPv6 
            PTR(Pointer)//IP >> FQDN
            SOA(Start Of Authority)//只能有一個
        }
        FQDN(Fully Qualified Domain Name)
        TTL(Time TO Live)
    }

    response()//後端回應
    status_code(ex:404)//回應的狀態碼

    API(Application Programming Interface){
        廣義//使用別人開發的產品方式
        狹義//對某個address請求資料  下圖
    }

}

網頁{
    SEO(Search Engine Optimization)//搜尋引擎最佳化 搜尋排名高在第一頁
    RWD(Responsive Web Design)//響應式網頁 自動排版手機體驗好

    進階{
        SPA(Single Page Application)//單頁式應用 不刷新體驗好
        SSR(Server-Side Rendering)//伺服器端渲染 加載速度快 SEO佳
    }
}

```

![api](https://drive.google.com/uc?export=download&id=1Q9TW06Xf7AzS_d0MmdMbRcRyRelK_vfk)
![DNS](https://drive.google.com/uc?export=download&id=12oFm4dk-3guNnHwOco7xNS9MCaSc-JPK)

</details>




<details open>
  <summary>API相關名詞</summary>
  
```js
AJAX(Asynchronous JavaScript and XML){
// ajax技術出現解決了很早期和伺服器要資料要重新整理的問題

    XHR(XMLHttpRequest)//最早做法

    $.ajax()//中期 jQuery作法

    axios()//

    fetch()// ES6 js原生操做api方法

    RESTful(Representational State Transfer){
        get post put patch delete
    }

}

```
</details>




<details>
  <summary>https CA證書</summary>
  
```js
HTTP(HyperText Transfer Protocol){//超文本傳輸協定 往返“瀏覽器”與“伺服器”的通訊協議
    //定義了不同Request方法 
    //因為沒加密(=明文) 很容易被串改&攻擊
    HTTPS(){//S是Secure的意思 需要SSL/TLS加密
        TLS(Transport Layer Security){//傳輸層安全性協定
            //前身為SSL
            SSL(Secure Sockets Layer){//安全通訊協定
                X.509 認證
            }
            //都是透過交握溝通(Handshake )以及公私鑰加密的動作，來達到資料保密的溝通。
            Key{
                公鑰(public key)
                私鑰(private key)
                'PKI系統'
            }
        }
        `Let's Encrypt` //免費服務
        SSL購買種類{
            Personal 個人 = 一般使用者或是小型公司

            Business 商業 = 大型公司

            ECOMMERCE 電子商務 = 購物平台

            One Domain = 一個網域網址, 包含 domain 自己與 www.domain

            Muti-Domain = 同一個憑證可以給不同的domain一起使用，提升彼此之間的關係信賴度(下面例子有會有提到)

            Sub Domain = 子網域使用一樣的憑證，例如常見的api.domain 或是 demo.domain 測試用站台的HTTPS

            萬用字元憑證(Wildcard)

            頒發憑證{
                'Lets Encrypt'
                'DigiCert'
            }
        }
    }
}

PKI(ublic Key Infrastructure){//公開金鑰基礎建設
    數位憑證
    公私鑰加密解密
    CA(Certificate Authority){//數位憑證認證機構
        根憑證(root certificate)
        根憑證權威單位(Root Certificate Authority)
        自簽數位簽章(Self-Signed CA)

        中介證書()

        CRL()// 伺服器清單
    }    
}


```

[ssl wiki](https://zh.wikipedia.org/wiki/%E5%82%B3%E8%BC%B8%E5%B1%A4%E5%AE%89%E5%85%A8%E6%80%A7%E5%8D%94%E5%AE%9A)
[https progressbar](https://progressbar.tw/posts/98)
[SSL觀念 iT](https://ithelp.ithome.com.tw/questions/10193796)
![CA chain](https://upload.wikimedia.org/wikipedia/commons/d/d1/Chain_of_trust.svg)
</details>




<details>
  <summary>網頁攻擊</summary>
  
```js
DDoS(){

}

```
</details>



其他慢慢整理

+ Core-js
+ crypto-js 加密
+ nodejs dotenv 套件 環境變數
+ [env](https://dwatow.github.io/2019/01-26-node-with-env-first/)
+ uuid 不重複
+ [Lo-Dash 函式庫](https://medium.com/itsems-frontend/javascript-lodash-9e6833cb1158)
+ [Polyfill 實現瀏覽器並不支援的原生API的程式碼](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/29473/)
+ Regex //正則表達
+ SKU //單品 最小單位
+ ORM // 物件關聯映射
+ ngrok //轉址 後端開發
+ jQuery
+ Hexo
+ Hugo
+ GatsbyJS
+ Wyam
+ typescript RxJS
+ Debounce Throttling 限制連續請求的機制
+ Lodash 做事件延遲
+ macrotask microtask -> single thread callback time
+ raster 光柵 小格子
+ http header分成4種: request general entity  
+ Axios Instance 
+ 名詞理解(snow pack/vite/eslint/e2e test/circleCI/alias/swagger
/vuex/vuerouter/nuxt/axios/i18n/polyfill)
+ CIDR
+ BGP border gateway protocol
<!-- JavaScript
jQuery(JavaScript 函式庫)
初衷是用來簡化 HTML 與 JavaScript 之間的溝通與操作 -->
```
