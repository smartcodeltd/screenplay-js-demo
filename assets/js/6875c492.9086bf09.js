"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[84813,1844],{44889:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(14041),l=a(45518);function r(e){let{img:t,caption:a,externalLink:r}=e;const o=r?n.createElement("figcaption",null,a," (",n.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"source"),")"):n.createElement("figcaption",null,a);return n.createElement("figure",null,n.createElement(l.A,{img:t,alt:a}),o)}},10039:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(14041),l=a(69076),r=a(58588),o=a(44634),s=a(89252);function i(e){const{colorMode:t}=(0,l.G)(),{isBlogPostPage:a}=(0,r.e)();return n.createElement(n.Fragment,null,n.createElement(s.A,e),a&&n.createElement(o.A,{id:"giscus-comments",repo:"serenity-js/serenity-js",repoId:"MDEwOlJlcG9zaXRvcnk2MTMwODcxNA==",category:"Comments",categoryId:"DIC_kwDOA6d_Ks4CSdtl",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:t,lang:"en",strict:"1",loading:"lazy"}))}},35672:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(44889),l=a(97804),r=a(71949),o=a(399);const s={...l.A,Tabs:o.A,TabItem:r.A,Figure:n.A}},79784:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(14041),l=a(49028),r=a(14297);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.A,{permalink:a,title:n.createElement(l.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(r.A,{permalink:o,title:n.createElement(l.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},84725:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(14041),l=a(58588),r=a(10039);function o(e){let{items:t,component:a=r.A}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(l.i,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},6764:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(14041),l=a(9546),r=a(49028),o=a(13014),s=a(47453),i=a(68844),c=a(75460),g=a(36031),m=a(79784),u=a(96964),p=a(84725);function d(e){const t=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,r.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,r.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function E(e){let{tag:t}=e;const a=d(t);return n.createElement(n.Fragment,null,n.createElement(s.be,{title:a}),n.createElement(u.A,{tag:"blog_tags_posts"}))}function h(e){let{tag:t,items:a,sidebar:l,listMetadata:o}=e;const s=d(t);return n.createElement(g.A,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,s),n.createElement(c.default,{href:t.allTagsPath},n.createElement(r.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.A,{items:a}),n.createElement(m.A,{metadata:o}))}function b(e){return n.createElement(s.e3,{className:(0,l.A)(i.G.wrapper.blogPages,i.G.page.blogTagPostListPage)},n.createElement(E,e),n.createElement(h,e))}}}]);