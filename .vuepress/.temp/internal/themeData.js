export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "navbar": [
    {
      "text": "Foo",
      "link": "/foo/"
    },
    {
      "text": "Group",
      "children": [
        "/group/foo.md",
        "/group/bar.md"
      ]
    },
    "/bar/README.md"
  ],
  "sidebar": [
    {
      "text": "Foo",
      "link": "/foo/",
      "children": [
        {
          "text": "github",
          "link": "https://github.com",
          "children": []
        },
        "/foo/bar.md"
      ]
    },
    {
      "isGroup": true,
      "text": "Group",
      "children": [
        "/group/foo.md",
        "/group/bar.md"
      ]
    },
    "/bar/README.md"
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
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
