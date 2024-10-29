import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '王俊杰',
  tagline: 'Never Knows Best',
  favicon: 'img/favicon.ico',
  url: 'https://Wangjunjie991116.github.io/',
  baseUrl: '/',
  organizationName: 'Wangjunjie991116', // Usually your GitHub org/user name.
  projectName: 'Wangjunjie991116.github.io', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'referrer',
        content: 'no-referrer'
      }
    }
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    announcementBar: {
      id: 'support_us',
      content: '如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wangjunjie991116">GitHub</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    }, 
    navbar: {
      title: '王俊杰的前端小记',
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'search',
          position: 'right',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Wangjunjie991116',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'javascript',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
