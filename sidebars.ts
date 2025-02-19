import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
	ossSidebar: [
		{ type: 'doc', label: 'FE 通用方法库 🚀 jj-fast-utils', id: 'oss/jj-fast-utils' },
		{ type: 'doc', label: 'Lint 通用规则库 📏 jj-lint', id: 'oss/jj-lint' },
	],
	schemeSidebar: [
		{ type: 'doc', label: 'Web 会话回放方案 🎬', id: 'scheme/web-sessions-replay' },
		{ type: 'doc', label: 'Web 中后台产研规范 🖥', id: 'scheme/web-admin-standard' },
		{ type: 'doc', label: 'Taro 项目版本升级规范 🔝', id: 'scheme/taro-upgrade-way' },
	],
	noteSidebar: [
		{
			type: 'category',
			label: '阅读 & 手账 👨‍💻',
			items: [
				{ type: 'doc', label: '《你不知道的JavaScrit》', id: 'note/books/YouDonNotKnowJS' },
				{ type: 'doc', label: '《HTTP权威指南》', id: 'note/books/HTTPTheDefinitiveGuide' },
			],
		},
		{
			type: 'category',
			label: '实践 & 踩坑 🐾',
			items: [
				{ type: 'doc', label: 'Taro', id: 'note/practice/Taro' },
				{ type: 'doc', label: 'H5', id: 'note/practice/H5' },
				{ type: 'doc', label: '小程序', id: 'note/practice/MiniApp' },
				{ type: 'doc', label: '计算机网络', id: 'note/practice/Net' },
				{ type: 'doc', label: 'React', id: 'note/practice/React' },
				{ type: 'doc', label: 'JavaScript', id: 'note/practice/JavaScript' },
				{ type: 'doc', label: 'HTML', id: 'note/practice/HTML' },
				{ type: 'doc', label: 'CSS', id: 'note/practice/CSS' },
			],
		},
		{
			type: 'category',
			label: '基础 & 原理 🤔',
			items: [
				{ type: 'doc', label: '小程序', id: 'note/base/MiniApp' },
				{ type: 'doc', label: '计算机网络', id: 'note/base/Net' },
				{ type: 'doc', label: 'Git', id: 'note/base/Git' },
				{ type: 'doc', label: 'React', id: 'note/base/React' },
				{ type: 'doc', label: 'JavaScript', id: 'note/base/JavaScript' },
				{ type: 'doc', label: 'HTML', id: 'note/base/HTML' },
				{ type: 'doc', label: 'CSS', id: 'note/base/CSS' },
			],
		},
	],
	articleSidebar: [{ type: 'doc', label: '好文', id: 'article/intro' }],
	toolSidebar: [{ type: 'category', label: 'demo', items: ['tool/intro'] }],
	// blogSidebar: [{ type: 'category', label: 'demo', items: ['blog/intro'] }],
};

export default sidebars;
