"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[66975],{82247:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>f});var i=n(14041);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return n?i.createElement(f,a(a({ref:t},m),{},{components:n})):i.createElement(f,a({ref:t},m))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48225:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(14041),o=n(76829);function r(){return i.createElement(i.Fragment,null,i.createElement("hr",null),i.createElement(o.A,{type:"info",title:"Coming soon"},i.createElement("p",null,"This article is coming soon! If you'd like me to prioritise writing it, give it a thumbs up \ud83d\udc4d in the reactions section below so that I know that this topic is in demand. Also make sure to follow Serenity/JS on ",i.createElement("a",{href:"https://www.linkedin.com/company/serenity-js/",title:"Follow Serenity/JS on LinkedIn"},"LinkedIn")," or ",i.createElement("a",{href:"https://twitter.com/SerenityJS",title:"Follow Serenity/JS on Twitter"},"Twitter")," to get notified \ud83d\udd14 when new materials and releases are available."),i.createElement("p",null,"And if you appreciate the amount of effort that goes into maintaining Serenity/JS and producing all the learning materials, please ",i.createElement("a",{href:"https://github.com/sponsors/serenity-js",target:"_blank",rel:"noopener noreferrer"},"support our work on GitHub"),".")))}},76829:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(14041),o=n(9546),r=n(68844),a=n(49028);const c={admonition:"admonition_qNG0",admonitionHeading:"admonitionHeading_l909",admonitionIcon:"admonitionIcon_UNbs",admonitionContent:"admonitionContent_oUmQ"};const l={note:{infimaClassName:"secondary",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:i.createElement(a.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:i.createElement(a.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:i.createElement(a.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:i.createElement(a.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:i.createElement(a.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},s={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=i.Children.toArray(e),n=t.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=i.createElement(i.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}function d(e){const{children:t,type:n,title:a,icon:d}=m(e),u=function(e){const t=s[e]??e,n=l[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),l.info)}(n),p=a??u.label,{iconComponent:f}=u,g=d??i.createElement(f,null);return i.createElement("div",{className:(0,o.A)(r.G.common.admonition,r.G.common.admonitionType(e.type),"alert",`alert--${u.infimaClassName}`,c.admonition)},i.createElement("div",{className:c.admonitionHeading},i.createElement("span",{className:c.admonitionIcon},g),p),i.createElement("div",{className:c.admonitionContent},t))}},53500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=n(89575),o=(n(14041),n(82247)),r=n(48225);const a={},c="GitHub Actions",l={unversionedId:"integration/github-actions",id:"integration/github-actions",title:"GitHub Actions",description:"Serenity/JS integrates with industry-standard test runners, so that your test scenarios can be executed",source:"@site/docs/integration/github-actions.mdx",sourceDirName:"integration",slug:"/integration/github-actions",permalink:"/handbook/integration/github-actions",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/integration/github-actions.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integration",permalink:"/handbook/integration/"},next:{title:"GitLab CI",permalink:"/handbook/integration/gitlab-ci"}},s={},m=[],d={toc:m},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"github-actions"},"GitHub Actions"),(0,o.yg)("p",null,"Serenity/JS integrates with ",(0,o.yg)("a",{parentName:"p",href:"/handbook/test-runners/"},"industry-standard test runners"),", so that your test scenarios can be executed\nusing your regular build tools, ",(0,o.yg)("abbr",{title:"Continuous Integration and Delivery"},"CI/CD")," pipelines, and ",(0,o.yg)("abbr",{title:"Integrated Development Environments"},"IDEs"),"."),(0,o.yg)("p",null,"In this article, I'll show you how to configure ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions CI"),",\nto run automated acceptance tests built using Serenity/JS, and publish test execution reports and living documentation."),(0,o.yg)(r.A,{mdxType:"ArticleComingSoon"}))}p.isMDXComponent=!0}}]);