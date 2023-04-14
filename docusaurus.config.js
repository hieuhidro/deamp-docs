// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DEAMP',
  tagline: 'Stack for local development',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.deamp.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vinhphon', // Usually your GitHub org/user name.
  projectName: 'deamp-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vinhphon/deamp-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DEAMP',
        logo: {
          alt: 'DEAMP',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            label: 'Why DEAMP?',
          },
          {
            to: '/installation',
            label: 'Installation',
          },
          {
            to: '/usage',
            label: 'Usage',
          },
          {
            to: '/change-logs',
            label: 'Change Logs',
          },
          {
            to: '/donate',
            label: 'Donate',
            position: 'right',
          },
          {
            href: 'https://github.com/vinhphon/deamp',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/deamp',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/deamp',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/deamp',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Author Blog',
                href: 'https://www.iamphon.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/vinhphon/deamp',
              },
            ],
          },
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
