
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','c79'),
    exact: true
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','569'),
    exact: true
  },
  {
    path: '/blog/hello-world',
    component: ComponentCreator('/blog/hello-world','07a'),
    exact: true
  },
  {
    path: '/blog/hola',
    component: ComponentCreator('/blog/hola','6e6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','738'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','2fe'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','263'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','8b3'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','015'),
    exact: true
  },
  {
    path: '/casestudy',
    component: ComponentCreator('/casestudy','d17'),
    exact: true
  },
  {
    path: '/casestudy/pagesjaunes',
    component: ComponentCreator('/casestudy/pagesjaunes','4c9'),
    exact: true
  },
  {
    path: '/casestudy/resdiary',
    component: ComponentCreator('/casestudy/resdiary','883'),
    exact: true
  },
  {
    path: '/casestudy/zenika',
    component: ComponentCreator('/casestudy/zenika','95f'),
    exact: true
  },
  {
    path: '/pro',
    component: ComponentCreator('/pro','ee0'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','4ee'),
    routes: [
      {
        path: '/docs/concepts/architecture',
        component: ComponentCreator('/docs/concepts/architecture','342'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/concepts/integration-testing',
        component: ComponentCreator('/docs/concepts/integration-testing','9a5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/concepts/load-testing',
        component: ComponentCreator('/docs/concepts/load-testing','b74'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/concepts/monitoring',
        component: ComponentCreator('/docs/concepts/monitoring','215'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guides/compilation',
        component: ComponentCreator('/docs/guides/compilation','f92'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guides/development',
        component: ComponentCreator('/docs/guides/development','1e5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guides/distributed-configuration',
        component: ComponentCreator('/docs/guides/distributed-configuration','774'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guides/missing-requests',
        component: ComponentCreator('/docs/guides/missing-requests','86d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guides/network-capture',
        component: ComponentCreator('/docs/guides/network-capture','e7f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/guides/running-without-root-permissions',
        component: ComponentCreator('/docs/guides/running-without-root-permissions','046'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/installation/binaries',
        component: ComponentCreator('/docs/installation/binaries','709'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/installation/docker',
        component: ComponentCreator('/docs/installation/docker','313'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/installation/macos',
        component: ComponentCreator('/docs/installation/macos','b35'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/pro/accurate-tcp-sessions',
        component: ComponentCreator('/docs/pro/accurate-tcp-sessions','ae0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/pro/appliance-license',
        component: ComponentCreator('/docs/pro/appliance-license','3e2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/pro/custom-protocols',
        component: ComponentCreator('/docs/pro/custom-protocols','669'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/pro/getting-started',
        component: ComponentCreator('/docs/pro/getting-started','0e9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/pro/s3',
        component: ComponentCreator('/docs/pro/s3','eaf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/reference/cli',
        component: ComponentCreator('/docs/reference/cli','b89'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/reference/elasticsearch',
        component: ComponentCreator('/docs/reference/elasticsearch','b00'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/reference/file',
        component: ComponentCreator('/docs/reference/file','fc1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/reference/filter',
        component: ComponentCreator('/docs/reference/filter','54d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/reference/http',
        component: ComponentCreator('/docs/reference/http','91a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/reference/kafka',
        component: ComponentCreator('/docs/reference/kafka','0b6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/reference/limiter',
        component: ComponentCreator('/docs/reference/limiter','475'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/reference/middleware',
        component: ComponentCreator('/docs/reference/middleware','b99'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/reference/rewrite',
        component: ComponentCreator('/docs/reference/rewrite','24c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial/getting-started',
        component: ComponentCreator('/docs/tutorial/getting-started','fdc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
