export default {
  "title": "Modern performance and integration testing",
  "tagline": "GoReplay is an open-source product which allows you to capture your existing users traffic and re-use it for testing your application.",
  "url": "https://goreplay.org",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "GoReplay",
  "projectName": "GoReplay",
  "plugins": [
    "/Users/leonidbugaev/go/src/goreplay/node_modules/@cmfcmf/docusaurus-search-local/lib/server/index.js"
  ],
  "themeConfig": {
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "announcementBar": {
      "id": "support_us",
      "content": "If you like GoReplay, <a href=\"https://github.com/buger/goreplay\" rel=\"noopener noreferrer\" target=\"_blank\">give us a star on GitHub</a>! ⭐️",
      "backgroundColor": "#4B8FE2",
      "textColor": "#FFF",
      "isCloseable": false
    },
    "colorMode": {
      "disableSwitch": true,
      "defaultMode": "light",
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "logo": {
        "alt": "GoReplay",
        "src": "img/goreplay.svg"
      },
      "items": [
        {
          "label": "Get Started",
          "position": "left",
          "items": [
            {
              "type": "doc",
              "docId": "intro",
              "label": "Docker",
              "activeSidebarClassName": "navbar__link--active"
            },
            {
              "type": "doc",
              "docId": "intro",
              "label": "Binaries",
              "activeSidebarClassName": "navbar__link--active"
            },
            {
              "type": "doc",
              "docId": "intro",
              "label": "Homebrew",
              "activeSidebarClassName": "navbar__link--active"
            }
          ]
        },
        {
          "label": "Resources",
          "position": "left",
          "items": [
            {
              "type": "doc",
              "docId": "intro",
              "label": "Customers",
              "activeSidebarClassName": "navbar__link--active"
            },
            {
              "type": "doc",
              "docId": "intro",
              "label": "Enterprise",
              "activeSidebarClassName": "navbar__link--active"
            },
            {
              "type": "doc",
              "docId": "intro",
              "label": "Blog",
              "activeSidebarClassName": "navbar__link--active"
            },
            {
              "type": "doc",
              "docId": "intro",
              "label": "Tutorials",
              "activeSidebarClassName": "navbar__link--active"
            },
            {
              "type": "doc",
              "docId": "intro",
              "label": "Videos",
              "activeSidebarClassName": "navbar__link--active"
            }
          ]
        },
        {
          "label": "Community",
          "position": "left",
          "items": [
            {
              "type": "doc",
              "docId": "intro",
              "label": "Github",
              "activeSidebarClassName": "navbar__link--active"
            },
            {
              "type": "doc",
              "docId": "intro",
              "label": "Slack",
              "url": "https://join.slack.com/t/goreplayhq/shared_invite/zt-vccekafo-W5jz_iKSDdVCUV_49KXelw",
              "activeSidebarClassName": "navbar__link--active"
            },
            {
              "type": "doc",
              "docId": "intro",
              "label": "Discussions",
              "activeSidebarClassName": "navbar__link--active"
            }
          ]
        },
        {
          "label": "Documentation",
          "position": "left",
          "type": "doc",
          "docId": "intro",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "label": "GET GOREPLAY",
          "position": "right",
          "type": "doc",
          "docId": "intro",
          "className": "nav__doc button button--secondary",
          "activeSidebarClassName": "navbar__link--active"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/intro"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Github Issue Tracker",
              "href": "https://github.com/buger/goreplay/issues"
            },
            {
              "label": "Github Discussions",
              "href": "https://github.com/buger/goreplay/discussions"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/buger/goreplay"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 GoReplay."
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/leonidbugaev/go/src/goreplay/sidebars.js",
          "editUrl": "https://github.com/buger/goreplay-website/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/buger/goreplay-website/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/leonidbugaev/go/src/goreplay/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};