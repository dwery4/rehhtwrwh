const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Modern performance and integration testing',
  tagline: 'GoReplay is an open-source product which allows you to capture your existing users traffic and re-use it for testing your application.',
  url: 'https://goreplay.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GoReplay', // Usually your GitHub org/user name.
  projectName: 'GoReplay', // Usually your repo name.
  plugins: [
    require.resolve('@cmfcmf/docusaurus-search-local')
  ],
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'If you like GoReplay, <a href="https://github.com/buger/goreplay" rel="noopener noreferrer" target="_blank">give us a star on GitHub</a>! ⭐️',
      backgroundColor: '#4B8FE2', // Defaults to `#fff`.
      textColor: '#FFF', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    colorMode: {
       disableSwitch: true,
    },
    navbar: {
      // title: 'GoReplay',
      logo: {
        alt: 'GoReplay',
        src: 'img/goreplay.svg',
      },
      items: [
        {
          label: 'Get Started',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'intro',
              label: 'Docker'
            },
            {
              type: 'doc',
              docId: 'intro',
              label: 'Binaries'
            },
            {
              type: 'doc',
              docId: 'intro',
              label: 'Homebrew'
            }
          ]
        },
        {
          label: 'Resources',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'intro',
              label: 'Customers'
            },
            {
              type: 'doc',
              docId: 'intro',
              label: 'Enterprise'
            },
            {
              type: 'doc',
              docId: 'intro',
              label: 'Blog'
            },
            {
              type: 'doc',
              docId: 'intro',
              label: 'Tutorials'
            },
            {
              type: 'doc',
              docId: 'intro',
              label: 'Videos'
            }
          ]
        },
        {
          label: 'Community',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'intro',
              label: 'Github'
            },
            {
              type: 'doc',
              docId: 'intro',
              label: 'Slack',
              url: "https://join.slack.com/t/goreplayhq/shared_invite/zt-vccekafo-W5jz_iKSDdVCUV_49KXelw"
            },
            {
              type: 'doc',
              docId: 'intro',
              label: 'Discussions'
            }
          ]
        },
        {
          label: 'Documentation',
          position: 'left',
          type: 'doc',
          docId: 'intro'
        },
        {
          label: 'GET GOREPLAY',
          position: 'right',
          type: 'doc',
          docId: 'intro',
          className: 'nav__doc button button--secondary'
        }
      ]
      // items: [
      //   {
      //     type: 'doc',
      //     docId: 'intro',
      //     position: 'left',
      //     label: 'Tutorial',
      //   },
      //   {to: '/blog', label: 'Blog', position: 'left'},
      //   {
      //     href: 'https://github.com/facebook/docusaurus',
      //     label: 'GitHub',
      //     position: 'left',
      //   },
      //   {
      //     type: 'search',
      //     position: 'right',
      //   },
      // ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github Issue Tracker',
              href: 'https://github.com/buger/goreplay/issues',
            },
            {
              label: 'Github Discussions',
              href: 'https://github.com/buger/goreplay/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/buger/goreplay',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GoReplay.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/buger/goreplay-website/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/buger/goreplay-website/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
