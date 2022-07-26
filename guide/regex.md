## pattern flag
符號

/^\d{3}$/g
特色都被斜線包住的叫做 pattern //
尾部叫做flag

^\d{3}$ 是 pattern
g 是 flag
## 危險
已經發展20幾年了 用不好會造成部分機器卡住(無窮迴圈)，記憶體塞滿

## 字元種類

```js
首先先介紹 陣列符號 
    `單選的下拉式選單`
/[abc]/  
    abc 只有匹配a
/[^abc]/ 
    abcde 只有匹配d
.
接下來介紹 插入符號 錢符號
    `頭部^ 尾部$`
/^1/ 
    123451 只有匹配第一個1
/1$/ 
    123451 只有匹配尾部1
/^123$/ ...
.
接下來介紹 加號 
    `1~無限`
/a+/ 
    aaabcbaa 匹配前面aaa
.
接下來介紹 星號
    `0~無限`
/a+/ ...    
.
接下來介紹 問號
    `可有可無 若有只會匹配一次`
/ab?/
    abb 匹配前面ab
    aaa 匹配前面a
.
接下來介紹 花刮號{}
    `出現次數`
/ab{3}/
    abbbbb 匹配前面abbb
/ab{3,4}/
    abbbbb 匹配前面abbbb
/ab{3,}/
    abbbbb 匹配前面abbbbb 無限b
.
接下來介紹 or符號|
    `2選1`
/a|b/
    cba 匹配b   
    cab 匹配a        
.
接下來介紹 反斜線
就是逃脫字元
```
\. 所有不包含換行
\w word字母和數字還有_底線
\W w相反 有包換行 `小心特殊符號`
\d digit數字 
\D d相反 有包換行 `小心`
\s 空白和換行和tab和各式各樣空白
\S s相反

---
/.../ 不寫 第一個就返回 且 是單行模式
/.../g global `匹配到不能匹配為止`
/.../m multiline `多行模式`
/.../i case insensitive `忽略大小寫`
/.../s single line `都當一行`

\p{L} `屬於letter的字`

正則.test(文字)
文字.match(正則)

---
正則 預設式
*貪婪greedy
*?懶惰lazy

let str = titanic
let regxGreedy = /t[a-z]*i/ 
let regxLazy = /t[a-z]*?i/ 

貪婪我都要符合 ["titani"]
懶惰大概就好 ["ti"]

注意不要拿來比對HTML元素

/<.*?>/gi
意思是 角括號裡面隨便啦

```js
介紹UTF-8八進制 
    \127
parsInt('101',8) //65
(65).toString(8) //A的碼是65(10)，101(8)
    /\101/ 可以找到 'A'

介紹UTF-8十六進制 
    \x57 可以找到 'W'
介紹十六進制 C/C++/Java source code 
    \u0057 可以找到 'W'

    
```    


先行斷言
    () capturing group
    ?:  is for non capturing group

    ?=  is for positive look ahead
    ?!  is for negative look ahead
    
    ?<= is for positive look behind
    ?<! is for negative look behind