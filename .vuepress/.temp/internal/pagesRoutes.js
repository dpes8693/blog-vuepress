import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-1ff3cb81","/1.html","1",["/1.md"]],
  ["v-8daa1a0e","/","Hello VuePress",["/index.html","/README.md"]],
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
