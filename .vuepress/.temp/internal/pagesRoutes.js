import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","About Me",["/index.html","/README.md"]],
  ["v-6e0d8f34","/guide/1.html","用Vupress架Blog",["/guide/1.md"]],
  ["v-1d14d5cc","/guide/plugin.html","Plugin",["/guide/plugin.md"]],
  ["v-3b074cd4","/portfolio/driveUrl.html","drive分享連結導出圖片連結",["/portfolio/driveUrl.md"]],
  ["v-07f2110c","/web/common.html","小常識",["/web/common.md"]],
  ["v-7dc11caa","/web/noun.html","名詞學習與整理",["/web/noun.md"]],
  ["v-2ca18037","/web/resource.html","深入的學習link",["/web/resource.md"]],
  ["v-ec084aca","/web/vscode.html","VScode",["/web/vscode.md"]],
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
