import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
	ossSidebar: [
		{ label: 'FE 通用方法库 🚀 jj-fast-utils', type: 'doc', id: 'oss/jj-fast-utils' },
		{ label: 'Lint 通用规则库 📏 jj-lint', type: 'doc', id: 'oss/jj-lint' },
	],
	schemeSidebar: [
		{ label: 'Web 会话回放方案 🎬', type: 'doc', id: 'scheme/web-sessions-replay' },
		{ label: 'Web 中后台产研规范 🖥', type: 'doc', id: 'scheme/web-admin-standard' },
		{ label: 'Taro 升级规范 🔝', type: 'doc', id: 'scheme/taro-upgrade-way' },
	],
	noteSidebar: [
		{
			label: '书籍阅读',
			type: 'category',
			items: [
				{ type: 'doc', label: '《你不知道的JavaScrit》', id: 'note/books/YouDonNotKnowJS' },
				{ type: 'doc', label: '《HTTP权威指南》', id: 'note/books/HTTPTheDefinitiveGuide' },
			],
		},
		{
			label: '实践 & 踩坑',
			type: 'category',
			items: [
				{ type: 'doc', label: '小程序', id: 'note/practice/MiniApp' },
				{ type: 'doc', label: '计算机网络', id: 'note/practice/Net' },
				{ type: 'doc', label: 'React', id: 'note/practice/React' },
				{ type: 'doc', label: 'JavaScript', id: 'note/practice/JavaScript' },
				{ type: 'doc', label: 'HTML', id: 'note/practice/HTML' },
				{ type: 'doc', label: 'CSS', id: 'note/practice/CSS' },
			],
		},
		{
			label: '原理',
			type: 'category',
			items: [
				{ type: 'doc', label: '小程序', id: 'note/theory/MiniApp' },
				{ type: 'doc', label: '计算机网络', id: 'note/theory/Net' },
				{ type: 'doc', label: 'React', id: 'note/theory/React' },
				{ type: 'doc', label: 'JavaScript', id: 'note/theory/JavaScript' },
				{ type: 'doc', label: 'HTML', id: 'note/theory/HTML' },
				{ type: 'doc', label: 'CSS', id: 'note/theory/CSS' },
			],
		},
	],
	articleSidebar: [{ label: '好文', type: 'doc', id: 'article/intro' }],
	toolSidebar: [{ type: 'category', label: 'demo', items: ['tool/intro'] }],
	// blogSidebar: [{ type: 'category', label: 'demo', items: ['blog/intro'] }],
};

export default sidebars;
