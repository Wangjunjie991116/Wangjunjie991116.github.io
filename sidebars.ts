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
	noteSidebar: [{ label: 'CSS', type: 'doc', id: 'note/intro' }],
	articleSidebar: [{ label: '好文', type: 'doc', id: 'article/intro' }],
	toolSidebar: [{ type: 'category', label: 'demo', items: ['tool/intro'] }],
	// blogSidebar: [{ type: 'category', label: 'demo', items: ['blog/intro'] }],
};

export default sidebars;
