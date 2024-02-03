"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[88052],{91448:(e,t,a)=>{a.d(t,{c:()=>h});var l=a(85668),r=a(71076),n=a(26496),o=a(19288),s=a(49452),c=a(95516);const i={sidebar:"sidebar_RYHo",sidebarItemTitle:"sidebarItemTitle_sRjx",sidebarItemList:"sidebarItemList_uMtB",sidebarItem:"sidebarItem_rygH",sidebarItemLink:"sidebarItemLink_EKgd",sidebarItemLinkActive:"sidebarItemLinkActive_hRXJ"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.c)(i.sidebar,"thin-scrollbar"),"aria-label":(0,c.G)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.c)(i.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.c)(i.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:i.sidebarItem},l.createElement(s.default,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title)))))))}var u=a(24520);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Mx,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,o.U)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(m,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:o,...s}=e,c=t&&t.items.length>0;return l.createElement(n.c,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,r.c)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&l.createElement("div",{className:"col col--2"},a))))}},21632:(e,t,a)=>{a.d(t,{c:()=>o});var l=a(85668),r=a(6804),n=a(75688);function o(e){let{children:t,className:a}=e;const{frontMatter:o,assets:s,metadata:{description:c}}=(0,n.g)(),{withBaseUrl:i}=(0,r.E)(),m=s.image??o.image,u=o.keywords??[];return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&l.createElement("meta",{itemProp:"description",content:c}),m&&l.createElement("link",{itemProp:"image",href:i(m,{absolute:!0})}),u.length>0&&l.createElement("meta",{itemProp:"keywords",content:u.join(",")}),t)}},80224:(e,t,a)=>{a.d(t,{c:()=>c});var l=a(85668),r=a(71076),n=a(85876),o=a(75688),s=a(77504);function c(e){let{children:t,className:a}=e;const{isBlogPostPage:c}=(0,o.g)();return l.createElement("div",{id:c?n.blogPostContainerID:void 0,className:(0,r.c)("markdown",a),itemProp:"articleBody"},l.createElement(s.default,null,t))}},61200:(e,t,a)=>{a.d(t,{c:()=>p});var l=a(85668),r=a(71076),n=a(75688),o=a(33968),s=a(18432),c=a(15307),i=a(95516),m=a(49452);function u(){return l.createElement("b",null,l.createElement(i.c,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function d(e){const{blogPostTitle:t,...a}=e;return l.createElement(m.default,(0,c.c)({"aria-label":(0,i.G)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(u,null))}const g={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_bikM"};function p(){const{metadata:e,isBlogPostPage:t}=(0,n.g)(),{tags:a,title:c,editUrl:i,hasTruncateMarker:m}=e,u=!t&&m,p=a.length>0;return p||u||i?l.createElement("footer",{className:(0,r.c)("row docusaurus-mt-lg",t&&g.blogPostFooterDetailsFull)},p&&l.createElement("div",{className:(0,r.c)("col",{"col--9":u})},l.createElement(s.c,{tags:a})),t&&i&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(o.c,{editUrl:i})),u&&l.createElement("div",{className:(0,r.c)("col text--right",{"col--3":p})},l.createElement(d,{blogPostTitle:c,to:e.permalink}))):null}},39236:(e,t,a)=>{a.d(t,{c:()=>d});var l=a(85668),r=a(71076),n=a(95516),o=a(31036),s=a(75688);const c={container:"container_PuMg"};function i(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,o.A)();return t=>{const a=Math.ceil(t);return e(a,(0,n.G)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function m(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function u(){return l.createElement(l.Fragment,null," \xb7 ")}function d(e){let{className:t}=e;const{metadata:a}=(0,s.g)(),{date:n,formattedDate:o,readingTime:d}=a;return l.createElement("div",{className:(0,r.c)(c.container,"margin-vert--md",t)},l.createElement(m,{date:n,formattedDate:o}),void 0!==d&&l.createElement(l.Fragment,null,l.createElement(u,null),l.createElement(i,{readingTime:d})))}},43572:(e,t,a)=>{a.d(t,{c:()=>c});var l=a(85668),r=a(71076),n=a(49452),o=a(75688);const s={title:"title_cIQJ"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:c}=(0,o.g)(),{permalink:i,title:m}=a,u=c?"h1":"h2";return l.createElement(u,{className:(0,r.c)(s.title,t),itemProp:"headline"},c?m:l.createElement(n.default,{itemProp:"url",to:i},m))}},17228:(e,t,a)=>{a.d(t,{c:()=>f});var l=a(85668),r=a(71076),n=a(75688),o=a(21632),s=a(43572),c=a(39236),i=a(49452);function m(e){return e.href?l.createElement(i.default,e):l.createElement(l.Fragment,null,e.children)}function u(e){let{author:t,className:a}=e;const{name:n,title:o,url:s,imageURL:c,email:i}=t,u=s||i&&`mailto:${i}`||void 0;return l.createElement("div",{className:(0,r.c)("avatar margin-bottom--sm",a)},c&&l.createElement(m,{href:u,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:c,alt:n,itemProp:"image"})),n&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(m,{href:u,itemProp:"url"},l.createElement("span",{itemProp:"name"},n))),o&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const d={authorCol:"authorCol_q_iI",imageOnlyAuthorRow:"imageOnlyAuthorRow_les7",imageOnlyAuthorCol:"imageOnlyAuthorCol_uMKf"};function g(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,n.g)();if(0===a.length)return null;const s=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.c)("margin-top--md margin-bottom--sm",s?d.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,r.c)(!s&&"col col--6",s?d.imageOnlyAuthorCol:d.authorCol),key:t},l.createElement(u,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function p(){return l.createElement("header",null,l.createElement(s.c,null),l.createElement(c.c,null),l.createElement(g,null))}var h=a(80224),E=a(61200);function f(e){let{children:t,className:a}=e;const s=function(){const{isBlogPostPage:e}=(0,n.g)();return e?void 0:"margin-bottom--xl"}();return l.createElement(o.c,{className:(0,r.c)(s,a)},l.createElement(p,null),l.createElement(h.c,null,t),l.createElement(E.c,null))}},75688:(e,t,a)=>{a.d(t,{E:()=>o,g:()=>s});var l=a(85668),r=a(20088);const n=l.createContext(null);function o(e){let{children:t,content:a,isBlogPostPage:r=!1}=e;const o=function(e){let{content:t,isBlogPostPage:a}=e;return(0,l.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:r});return l.createElement(n.Provider,{value:o},t)}function s(){const e=(0,l.useContext)(n);if(null===e)throw new r.AH("BlogPostProvider");return e}},31036:(e,t,a)=>{a.d(t,{A:()=>i});var l=a(85668),r=a(53752);const n=["zero","one","two","few","many","other"];function o(e){return n.filter((t=>e.includes(t)))}const s={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.default)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),s}}),[e])}function i(){const e=c();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);