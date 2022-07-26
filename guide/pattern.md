# About Software Design @@

https://youtu.be/dGbzlsBuw9M

## 如何製作軟的產品 ?
大方向來說兩點
    1.程式碼本身
    2.軟體設計的架構

### 程式碼
軟體工程師，可以很容易做出能動的程式，但不容易做出 :

-容易閱讀的程式
-容易維護的程式
-容易擴充的程式

#### 修正方案 : 一系列讓程式碼有序的動作

撰寫開發文件
    Markdown 是個好選擇

規範代碼風格
    以團隊為主，只要程式碼不要看起來像是一群意見不合的人協作，統一即可

使用單元測試
    測試驅動開發: 
        開發時，先寫測試程式 在寫產品程式

### 軟體設計 : 架構
參考前人的設計經驗

#### 物件導向設計 SOLID

SRP : 單一職責原則
OCP : 開放 - 封閉原則
LSP : 里氏替換原則
ISP : 介面隔離原則
DIP : 依賴反向原則

#### 元件內聚性原則

REP : 再使用性 - 發佈等價原則
CCP : 共同封閉原則
CRP : 共同重複使用原則

#### 元件耦合性原則

ADP : 無循環依賴原則
SDP : 穩定依賴原則
SAP : 穩定抽象原則

#### 領域驅動設計 - Domain-Driven Design

使用者介面層
應用層
領域層
基礎設施層

#### 設計模式 - Desgin Pattern

Factory Pattern
Abstract Factory Pattern
Singleton Pattern
Builder Pattern
Prototype Pattern
Adapter Pattern
Bridge Pattern
Filter Pattern
More ...

#### 架構目標

高內聚，低耦合

---
遵循上述的原則，保持軟體具有一定程度的彈性



### DDD大王

四個開發模式意思:

TDD：測試驅動開發（Test-Driven Development）

BDD：行為驅動開發（Behavior Driven Development）

ATDD：驗收測試驅動開發（Acceptance Test Driven Development）

DDD：領域驅動開發（Domain
Drive Design）



1、TDD：測試驅動開發（Test-Driven
Development）

測試驅動開發是敏捷開發中的一項核心實踐和技術，也是一種設計方法論，TDD首先考慮使用需求（物件、功能、過程、介面等）

主要是編寫測試用例框架對功能的過程和介面進行設計，而測試框架可以持續進行驗證。大行其道的一些模式對TDD的支援都非常不錯，比如MVC和MVP等

2、BDD：行為驅動開發（Behavior
Driven Development）

也就是行為驅動開發。這裡的B並非指的是Business，實際上BDD可以看作是對TDD的一種補充，讓開發、測試、BA以及客戶都能在這個基礎上達成一致，JBehave之類的BDD框架

3、ATDD：驗收測試驅動開發（Acceptance
Test Driven Development）

通過單元測試用例來驅動功能程式碼的實現，團隊需要定義出期望的質量標準和驗收細則，以明確而且達成共識的驗收測試計劃（包含一系列測試場景）來驅動開發人員的TDD實踐和測試人員的測試指令碼開發。面向開發人員，強調如何實現系統以及如何檢驗

4、DDD：領域驅動開發（Domain
Drive Design）

DDD指的是Domain
Drive Design，也就是領域驅動開發,DDD實際上也是建立在這個基礎之上，因為它關注的是Service層的設計，著重於業務的實現,將分析和設計結合起來，不再使他們處於分裂的狀態，這對於我們正確完整的實現客戶的需求，以及建立一個具有業務伸縮性的模型