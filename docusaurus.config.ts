import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
	title: 'junjie‘s Home 🏠',
	tagline: `Love and desire are the spirit's wings to great deeds`,
	favicon: 'img/favicon.ico',
	url: 'https://Wangjunjie991116.github.io/',
	baseUrl: '/',
	organizationName: 'Wangjunjie991116', // Usually your GitHub org/user name.
	projectName: 'Wangjunjie991116.github.io', // Usually your repo name.
	deploymentBranch: 'gh-pages', // 默认部署分支
	trailingSlash: false,
	staticDirectories: ['static'],
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	headTags: [{ tagName: 'meta', attributes: { name: 'referrer', content: 'no-referrer' } }],
	future: { experimental_faster: true }, // 一次性全开启下述配置
	// future: {
	// 	experimental_faster: {
	// 		swcJsLoader: true, // 使用SWC转译 JS（而不是Babel）
	// 		swcJsMinimizer: true, // 使用SWC压缩 JS（而不是Terser）
	// 		swcHtmlMinimizer: true, // 使用SWC压缩 HTML 和内联 JS/CSS（而不是html-minifier-terser）
	// 		lightningCssMinimizer: true, // 使用Lightning CSS压缩 CSS（而不是cssnano和clean-css）
	// 		rspackBundler: true, // 使用Rspack打包你的应用（而不是webpack）
	// 		mdxCrossCompilerCache: true, // 为浏览器/Node.js 环境编译一次 MDX 文件，而不是两次
	// 	},
	// },
	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
					sidebarCollapsible: false, // 所有目录默认不可折叠，可对单独目录配置 collapsible:true 开启折叠
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
		image: 'img/docusaurus-social-card.jpg',
		announcementBar: {
			id: 'support_us',
			content:
				'🎉 如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wangjunjie991116">GitHub</a> 🥳️',
			backgroundColor: '#fafbfc',
			textColor: '#091E42',
			isCloseable: true,
		},
		navbar: {
			title: 'junjie‘s Home',
			hideOnScroll: true,
			logo: { alt: 'My Site Logo', src: 'img/logo.svg' },
			items: [
				{ label: ' 🤝🏻 开源 ', position: 'right', sidebarId: 'ossSidebar', type: 'docSidebar' },
				{ label: ' 📚 方案 ', position: 'right', sidebarId: 'schemeSidebar', type: 'docSidebar' },
				{ label: ' 📝 笔记 ', position: 'right', sidebarId: 'noteSidebar', type: 'docSidebar' },
				// { label: '博客', position: 'right', sidebarId: 'blogSidebar', type: 'docSidebar' },
				{ label: ' 📖 好文 ', position: 'right', sidebarId: 'articleSidebar', type: 'docSidebar' },
				{ label: ' 🔧 工具 ', position: 'right', sidebarId: 'toolSidebar', type: 'docSidebar' },
				{ label: ' GitHub ', position: 'right', href: 'https://github.com/Wangjunjie991116' },
			],
		},
		// footer: {
		// 	copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		// },
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
			defaultLanguage: 'javascript',
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
