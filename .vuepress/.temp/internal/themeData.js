export const themeData = {
  "navbar": [],
  "sidebar": [
    {
      "text": "Home",
      "link": "/",
      "children": [
        {
          "text": "github原始碼",
          "link": "https://github.com/dpes8693/blog-vuepress",
          "children": []
        }
      ]
    },
    {
      "isGroup": true,
      "text": "Guide",
      "children": [
        "/guide/plugin.md",
        "/guide/1.md"
      ]
    },
    {
      "isGroup": true,
      "text": "Web",
      "children": [
        "/web/common.md",
        "/web/vue.md",
        "/web/vscode.md",
        "/web/resource.md"
      ]
    },
    {
      "isGroup": true,
      "text": "Proper Noun",
      "children": [
        "/web/noun.md"
      ]
    },
    {
      "isGroup": true,
      "text": "Portfolio",
      "children": [
        "/portfolio/google.md"
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
