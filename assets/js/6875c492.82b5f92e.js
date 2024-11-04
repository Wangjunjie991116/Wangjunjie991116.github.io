"use strict";(self.webpackChunkjj_blog=self.webpackChunkjj_blog||[]).push([["83"],{4046:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2676);n(5271);var i=n(8241),a=n(6781);function s(e){let{metadata:t}=e,{previousPage:n,nextPage:s}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(a.Z,{permalink:n,title:(0,r.jsx)(i.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),s&&(0,r.jsx)(a.Z,{permalink:s,title:(0,r.jsx)(i.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},9678:function(e,t,n){n.d(t,{Z:()=>C});var r=n("2676");n("5271");var i=n("4461"),a=n("8828");function s(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var l=n("5222");let o="title__FyN";function c(e){let{className:t}=e,{metadata:n,isBlogPostPage:s}=(0,a.nO)(),{permalink:c,title:u}=n;return(0,r.jsx)(s?"h1":"h2",{className:(0,i.Z)(o,t),children:s?u:(0,r.jsx)(l.Z,{to:c,children:u})})}var u=n("8241"),d=n("6393"),g=n("7603");let h="container_xZ1M";function m(e){let{readingTime:t}=e,n=function(){let{selectMessage:e}=(0,d.c)();return t=>{let n=Math.ceil(t);return e(n,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function f(e){let t,{className:n}=e,{metadata:s}=(0,a.nO)(),{date:l,readingTime:o}=s,c=(0,g.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,i.Z)(h,"margin-vert--md",n),children:[(0,r.jsx)(p,{date:l,formattedDate:(t=l,c.format(new Date(t)))}),void 0!==o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(m,{readingTime:o})]})]})}var j=n("1633");let b={authorCol:"authorCol_t3V0",imageOnlyAuthorRow:"imageOnlyAuthorRow_FQDh",imageOnlyAuthorCol:"imageOnlyAuthorCol_fkHt"};function v(e){let{className:t}=e,{metadata:{authors:n},assets:s}=(0,a.nO)();if(0===n.length)return null;let l=n.every(e=>{let{name:t}=e;return!t}),o=1===n.length;return(0,r.jsx)("div",{className:(0,i.Z)("margin-top--md margin-bottom--sm",l?b.imageOnlyAuthorRow:"row",t),children:n.map((e,t)=>(0,r.jsx)("div",{className:(0,i.Z)(!l&&(o?"col col--12":"col col--6"),l?b.imageOnlyAuthorCol:b.authorCol),children:(0,r.jsx)(j.Z,{author:{...e,imageURL:s.authorsImageUrls[t]??e.imageURL}})},t))})}function Z(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(f,{}),(0,r.jsx)(v,{})]})}var T=n("2017"),w=n("3170");function N(e){let{children:t,className:n}=e,{isBlogPostPage:s}=(0,a.nO)();return(0,r.jsx)("div",{id:s?T.blogPostContainerID:void 0,className:(0,i.Z)("markdown",n),children:(0,r.jsx)(w.Z,{children:t})})}var _=n("3037"),k=n("2668"),y=n("5869");function P(){return(0,r.jsx)("b",{children:(0,r.jsx)(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function A(e){let{blogPostTitle:t,...n}=e;return(0,r.jsx)(l.Z,{"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(P,{})})}function O(){let{metadata:e,isBlogPostPage:t}=(0,a.nO)(),{tags:n,title:s,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:u}=e,d=!t&&o,g=n.length>0;if(!(g||d||l))return null;if(!t)return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,r.jsx)("div",{className:(0,i.Z)("col",{"col--9":d}),children:(0,r.jsx)(y.Z,{tags:n})}),d&&(0,r.jsx)("div",{className:(0,i.Z)("col text--right",{"col--3":g}),children:(0,r.jsx)(A,{blogPostTitle:s,to:e.permalink})})]});{let e=!!(l||u||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,r.jsx)("div",{className:(0,i.Z)("row","margin-top--sm",_.k.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(y.Z,{tags:n})})}),e&&(0,r.jsx)(k.Z,{className:(0,i.Z)("margin-top--sm",_.k.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:u,lastUpdatedBy:c})]})}}function C(e){let{children:t,className:n}=e,l=function(){let{isBlogPostPage:e}=(0,a.nO)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(s,{className:(0,i.Z)(l,n),children:[(0,r.jsx)(Z,{}),(0,r.jsx)(N,{children:t}),(0,r.jsx)(O,{})]})}},5056:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2676);n(5271);var i=n(8828),a=n(9678);function s(e){let{items:t,component:n=a.Z}=e;return(0,r.jsx)(r.Fragment,{children:t.map(e=>{let{content:t}=e;return(0,r.jsx)(i.n4,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)})})}},6357:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(2676);n(5271);var i=n(4461),a=n(8241),s=n(1797),l=n(3037),o=n(2075),c=n(5222),u=n(2153),d=n(4046),g=n(951),h=n(5056),m=n(1948),p=n(2958);function x(e){let{tag:t}=e,n=(0,o.Wi)(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.d,{title:n,description:t.description}),(0,r.jsx)(g.Z,{tag:"blog_tags_posts"})]})}function f(e){let{tag:t,items:n,sidebar:i,listMetadata:s}=e,l=(0,o.Wi)(t);return(0,r.jsxs)(u.Z,{sidebar:i,children:[t.unlisted&&(0,r.jsx)(m.Z,{}),(0,r.jsxs)("header",{className:"margin-bottom--xl",children:[(0,r.jsx)(p.Z,{as:"h1",children:l}),t.description&&(0,r.jsx)("p",{children:t.description}),(0,r.jsx)(c.Z,{href:t.allTagsPath,children:(0,r.jsx)(a.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,r.jsx)(h.Z,{items:n}),(0,r.jsx)(d.Z,{metadata:s})]})}function j(e){return(0,r.jsxs)(s.FG,{className:(0,i.Z)(l.k.wrapper.blogPages,l.k.page.blogTagPostListPage),children:[(0,r.jsx)(x,{...e}),(0,r.jsx)(f,{...e})]})}},1948:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2676);n(5271);var i=n(4461),a=n(9035),s=n(3037),l=n(4518);function o(e){let{className:t}=e;return(0,r.jsx)(l.Z,{type:"caution",title:(0,r.jsx)(a.cI,{}),className:(0,i.Z)(t,s.k.common.unlistedBanner),children:(0,r.jsx)(a.eU,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.T$,{}),(0,r.jsx)(o,{...e})]})}},6781:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2676);n(5271);var i=n(4461),a=n(5222);function s(e){let{permalink:t,title:n,subLabel:s,isNext:l}=e;return(0,r.jsxs)(a.Z,{className:(0,i.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},6071:function(e,t,n){n.d(t,{Z:()=>l});var r=n("2676");n("5271");var i=n("4461"),a=n("5222");let s={tag:"tag_VNjg",tagRegular:"tagRegular_hCKz",tagWithCount:"tagWithCount_LbWf"};function l(e){let{permalink:t,label:n,count:l,description:o}=e;return(0,r.jsxs)(a.Z,{href:t,title:o,className:(0,i.Z)(s.tag,l?s.tagWithCount:s.tagRegular),children:[n,l&&(0,r.jsx)("span",{children:l})]})}},5869:function(e,t,n){n.d(t,{Z:()=>c});var r=n("2676");n("5271");var i=n("4461"),a=n("8241"),s=n("6071");let l="tags_PJl_",o="tag_oY_j";function c(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,i.Z)(l,"padding--none","margin-left--sm"),children:t.map(e=>(0,r.jsx)("li",{className:o,children:(0,r.jsx)(s.Z,{...e})},e.permalink))})]})}},2075:function(e,t,n){n.d(t,{HV:function(){return c},J$:function(){return d},Wi:function(){return l},ds:function(){return o},fw:function(){return u}});var r=n(2676);n(5271);var i=n(8241),a=n(6393);function s(){let{selectMessage:e}=(0,a.c)();return t=>e(t,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){let t=s();return(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){let t=s();return(0,i.I)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}let c=()=>(0,i.I)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function u(){return(0,r.jsx)(i.Z,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function d(){return(0,r.jsx)(i.Z,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},9035:function(e,t,n){n.d(t,{T$:function(){return o},cI:function(){return s},eU:function(){return l},ht:function(){return c},xo:function(){return u}});var r=n(2676);n(5271);var i=n(8241),a=n(3053);function s(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(a.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);