import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","About Me",["/index.html","/README.md"]],
  ["v-167f0e70","/backend/normalization.html","資料庫正規化",["/backend/normalization.md"]],
  ["v-311f716b","/backend/noun.html","後端要懂得知識",["/backend/noun.md"]],
  ["v-926930d6","/guide/buildBlog.html","用Vupress架Blog",["/guide/buildBlog.md"]],
  ["v-162b492f","/guide/getll.html","將台灣地址轉換成經緯度",["/guide/getll.md"]],
  ["v-0978b044","/guide/markdown.html","Markdown 語法",["/guide/markdown.md"]],
  ["v-1d14d5cc","/guide/plugin.html","Blog 修改的地方 Plugin",["/guide/plugin.md"]],
  ["v-3b87d144","/others/bashCommonSyntax.html","紀錄我用到的windows語法",["/others/bashCommonSyntax.md"]],
  ["v-d367aa3e","/others/testApiSyntax.html","",["/others/testApiSyntax.md"]],
  ["v-beeb84f4","/portfolio/axie.html","Axie Infinity Origin Cards",["/portfolio/axie.md"]],
  ["v-3b074cd4","/portfolio/driveUrl.html","將 GoogleDrive 分享連結 to 圖片連結",["/portfolio/driveUrl.md"]],
  ["v-768d2905","/portfolio/gameListTranslater.html","Steam 遊戲列表 to markdown 表格語法",["/portfolio/gameListTranslater.md"]],
  ["v-2e4c18c0","/portfolio/","作品列表",["/portfolio/index.html","/portfolio/index.md"]],
  ["v-0368d985","/review/%E5%8F%8D%E6%80%9D.html","反省?",["/review/反思.html","/review/反思.md","/review/%E5%8F%8D%E6%80%9D.md"]],
  ["v-1b629b01","/review/%E6%8C%96%E5%9D%91.html","主題列表",["/review/挖坑.html","/review/挖坑.md","/review/%E6%8C%96%E5%9D%91.md"]],
  ["v-494c5c92","/tools/url.html","工具網址",["/tools/url.md"]],
  ["v-48b62e3c","/tools/vscode.html","VScode",["/tools/vscode.md"]],
  ["v-07f2110c","/web/common.html","學習資源1",["/web/common.md"]],
  ["v-7dc11caa","/web/noun.html","名詞學習與整理",["/web/noun.md"]],
  ["v-2ca18037","/web/resource.html","學習資源2",["/web/resource.md"]],
  ["v-1f585632","/web/vue.html","Vue.js練功筆記",["/web/vue.md"]],
  ["v-2eeca661","/backend/express/file-type.html","如何判斷上傳檔案格式 file-type 簡介",["/backend/express/file-type.md"]],
  ["v-58947e5a","/backend/express/","Express code example",["/backend/express/index.html","/backend/express/index.md"]],
  ["v-6d829d16","/docs/demo/test.html","",["/docs/demo/test.md"]],
  ["v-dca0311a","/others/tangram/gov20201029.html","企業智動化與數位轉型研討會",["/others/tangram/gov20201029.md"]],
  ["v-376756ca","/others/tangram/","公司活動列表",["/others/tangram/index.html","/others/tangram/index.md"]],
  ["v-19ca2bb0","/others/tangram/ms20201006.html","微軟新創加速器 DEMO Day",["/others/tangram/ms20201006.md"]],
  ["v-3706649a","/404.html","",[]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
