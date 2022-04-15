import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","About Me",["/index.html","/README.md"]],
  ["v-926930d6","/guide/buildBlog.html","用Vupress架Blog",["/guide/buildBlog.md"]],
  ["v-1d14d5cc","/guide/plugin.html","Blog 修改的地方 Plugin",["/guide/plugin.md"]],
  ["v-3b87d144","/others/bashCommonSyntax.html","紀錄我常用的windows語法",["/others/bashCommonSyntax.md"]],
  ["v-d367aa3e","/others/testApiSyntax.html","",["/others/testApiSyntax.md"]],
  ["v-3b074cd4","/portfolio/driveUrl.html","將GoogleDrive分享連結 to 圖片連結",["/portfolio/driveUrl.md"]],
  ["v-768d2905","/portfolio/gameListTranslater.html","Steam遊戲列表 to markdown 表格語法",["/portfolio/gameListTranslater.md"]],
  ["v-2e4c18c0","/portfolio/","作品列表",["/portfolio/index.html","/portfolio/index.md"]],
  ["v-0368d985","/review/%E5%8F%8D%E6%80%9D.html","反省?",["/review/反思.html","/review/反思.md","/review/%E5%8F%8D%E6%80%9D.md"]],
  ["v-494c5c92","/tools/url.html","工具網址",["/tools/url.md"]],
  ["v-48b62e3c","/tools/vscode.html","VScode",["/tools/vscode.md"]],
  ["v-07f2110c","/web/common.html","小常識",["/web/common.md"]],
  ["v-7dc11caa","/web/noun.html","名詞學習與整理",["/web/noun.md"]],
  ["v-2ca18037","/web/resource.html","深入的學習link",["/web/resource.md"]],
  ["v-1f585632","/web/vue.html","Vue.js練功",["/web/vue.md"]],
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
