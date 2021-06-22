import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","About Me",["/index.html","/README.md"]],
  ["v-6e0d8f34","/guide/1.html","用Vupress架Blog",["/guide/1.md"]],
  ["v-1d14d5cc","/guide/plugin.html","Plugin",["/guide/plugin.md"]],
  ["v-07f2110c","/web/common.html","小常識",["/web/common.md"]],
  ["v-ec084aca","/web/vscode.html","VScode",["/web/vscode.md"]],
  ["v-1f585632","/web/vue.html","Vue.js",["/web/vue.md"]],
  ["v-6d829d16","/docs/demo/test.html","",["/docs/demo/test.md"]],
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
