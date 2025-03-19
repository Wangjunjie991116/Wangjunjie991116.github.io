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
        { type: 'doc', label: '多层组件库国际化方案 🌏', id: 'scheme/comp-lib-internation' },
    ],
    noteSidebar: [
        {
            type: 'category',
            label: '阅读 & 手账 👨‍💻',
            items: [
                { type: 'doc', label: '-《你不知道的JavaScrit》', id: 'note/books/YouDonNotKnowJS' },
                { type: 'doc', label: '-《HTTP权威指南》', id: 'note/books/HTTPTheDefinitiveGuide' },
            ],
        },
        {
            type: 'category',
            label: '实践 & 踩坑 🐾',
            items: [
                { type: 'doc', label: '-Taro 跨端', id: 'note/practice/Taro' },
                { type: 'doc', label: '-H5 移动端', id: 'note/practice/WebMobile' },
                { type: 'doc', label: '-网络', id: 'note/practice/Net' },
                { type: 'doc', label: '-Git', id: 'note/practice/Git' },
                { type: 'doc', label: '-React', id: 'note/practice/React' },
                { type: 'doc', label: '-HTML/CSS/JS', id: 'note/practice/HtmlCssJs' },
            ],
        },
        {
            type: 'category',
            label: '基础 & 原理 🤔',
            items: [
                { type: 'doc', label: '-小程序', id: 'note/base/MiniApp' },
                { type: 'doc', label: '-Git', id: 'note/base/Git' },
                { type: 'doc', label: '-React', id: 'note/base/React' },
            ],
        },
    ],
    articleSidebar: [{ type: 'doc', label: '好文', id: 'article/intro' }],
    toolSidebar: [{ type: 'doc', label: '武器库', id: 'tool/package' }],
    // blogSidebar: [{ type: 'category', label: 'demo', items: ['blog/intro'] }],
};

export default sidebars;
