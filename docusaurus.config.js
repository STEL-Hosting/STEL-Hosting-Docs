// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'STEL Docs',
  tagline: 'Documentation for STEL Hosting',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.stelhosting.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'STEL-Hosting', // Usually your GitHub org/user name.
  projectName: 'STEL-Hosting-Docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/STEL-Hosting/STEL-Hosting-Docs/blob/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'STEL Hosting Docs',
        logo: {
          alt: 'STEL Hosting Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://stelhosting.com',
            label: 'Website',
            position: 'left',
          },
          {
            href: 'https://discord.gg/GuYuEtcvBy',
            label: 'Community Discord',
            position: 'left',
          },
          {
            href: 'https://status.stelhosting.com',
            label: 'Server Status',
            position: 'left',
          },
          {
            href: 'https://github.com/STEL-Hosting/STEL-Hosting-Docs/',
            label: 'Contribute to the Docs',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} STEL Hosting, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
