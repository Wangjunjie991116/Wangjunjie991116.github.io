"use strict";(self.webpackChunkjj_blog=self.webpackChunkjj_blog||[]).push([[212],{417:(t,e,s)=>{s.r(e),s.d(e,{default:()=>m});s(758);var a=s(3526),o=s(3254),r=s(3405),l=s(1159),n=s(8144),u=s(267),i=s(7707),h=s(8430);const c={authorListItem:"authorListItem_Xn67"};var g=s(6070);function p(t){let{author:e}=t;return(0,g.jsx)("li",{className:c.authorListItem,children:(0,g.jsx)(h.A,{as:"h2",author:e,count:e.count})})}function d(t){let{authors:e}=t;return(0,g.jsx)("section",{className:(0,a.A)("margin-vert--lg",c.authorsListSection),children:(0,g.jsx)("ul",{children:e.map((t=>(0,g.jsx)(p,{author:t},t.key)))})})}function m(t){let{authors:e,sidebar:s}=t;const h=(0,l.uz)();return(0,g.jsxs)(o.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogAuthorsListPage),children:[(0,g.jsx)(o.be,{title:h}),(0,g.jsx)(u.A,{tag:"blog_authors_list"}),(0,g.jsxs)(n.A,{sidebar:s,children:[(0,g.jsx)(i.A,{as:"h1",children:h}),(0,g.jsx)(d,{authors:e})]})]})}},1159:(t,e,s)=>{s.d(e,{ZD:()=>n,np:()=>h,uz:()=>i,wI:()=>u});s(758);var a=s(7011),o=s(8839),r=s(6070);function l(){const{selectMessage:t}=(0,o.W)();return e=>t(e,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}function n(t){const e=l();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:e(t.count),tagName:t.label})}function u(t){const e=l();return(0,a.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:e(t.count),authorName:t.name||t.key})}const i=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function h(){return(0,r.jsx)(a.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}}}]);