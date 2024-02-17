"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[66061,1844],{44889:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(14041),l=t(45518);function r(e){let{img:n,caption:t,externalLink:r}=e;const c=r?a.createElement("figcaption",null,t," (",a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},"source"),")"):a.createElement("figcaption",null,t);return a.createElement("figure",null,a.createElement(l.A,{img:n,alt:t}),c)}},35672:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var a=t(44889),l=t(97804),r=t(71949),c=t(399);const i={...l.A,Tabs:c.A,TabItem:r.A,Figure:a.A}},56793:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a=t(14041),l=t(9546),r=t(47453),c=t(68844),i=t(84265),o=t(92737),s=t(74663);const m={mdxPageWrapper:"mdxPageWrapper_SLvB"};function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:v}=u;return a.createElement(r.e3,{className:(0,l.A)(f??c.G.wrapper.mdxPages,c.G.page.mdxPage)},a.createElement(r.be,{title:t,description:d}),a.createElement(i.A,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,l.A)("row",m.mdxPageWrapper)},a.createElement("div",{className:(0,l.A)("col",!v&&"col--8")},a.createElement("article",null,a.createElement(o.default,null,a.createElement(n,null)))),!v&&n.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(s.default,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},74663:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var a=t(89575),l=t(14041),r=t(9546),c=t(36012);const i={tableOfContents:"tableOfContents_TN1Q",docItemContainer:"docItemContainer_JtJJ"},o="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:n,...t}=e;return l.createElement("div",{className:(0,r.A)(i.tableOfContents,"thin-scrollbar",n)},l.createElement(c.A,(0,a.A)({},t,{linkClassName:o,linkActiveClassName:s})))}},36012:(e,n,t)=>{t.d(n,{A:()=>m});var a=t(89575),l=t(14041),r=t(6139),c=t(95810),i=t(87977);function o(e){let{toc:n,className:t,linkClassName:a,isChild:r}=e;return n.length?l.createElement("ul",{className:r?void 0:t},n.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const s=l.memo(o);function m(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:d,maxHeadingLevel:u,...f}=e;const v=(0,r.p)(),g=d??v.tableOfContents.minHeadingLevel,h=u??v.tableOfContents.maxHeadingLevel,p=(0,c.h)({toc:n,minHeadingLevel:g,maxHeadingLevel:h}),L=(0,l.useMemo)((()=>{if(o&&m)return{linkClassName:o,linkActiveClassName:m,minHeadingLevel:g,maxHeadingLevel:h}}),[o,m,g,h]);return(0,i.i)(L),l.createElement(s,(0,a.A)({toc:p,className:t,linkClassName:o},f))}},87977:(e,n,t)=>{t.d(n,{i:()=>o});var a=t(14041),l=t(6139);function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>r(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function i(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function o(e){const n=(0,a.useRef)(void 0),t=i();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),s=c(o,{anchorTopOffset:t.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}},95810:(e,n,t)=>{t.d(n,{h:()=>i,v:()=>r});var a=t(14041);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function r(e){return(0,a.useMemo)((()=>l(e)),[e])}function c(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=c({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>c({toc:l(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}}}]);