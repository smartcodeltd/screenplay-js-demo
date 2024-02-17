"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[98927],{82247:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>f});var r=n(14041);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48225:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(14041),o=n(76829);function i(){return r.createElement(r.Fragment,null,r.createElement("hr",null),r.createElement(o.A,{type:"info",title:"Coming soon"},r.createElement("p",null,"This article is coming soon! If you'd like me to prioritise writing it, give it a thumbs up \ud83d\udc4d in the reactions section below so that I know that this topic is in demand. Also make sure to follow Serenity/JS on ",r.createElement("a",{href:"https://www.linkedin.com/company/serenity-js/",title:"Follow Serenity/JS on LinkedIn"},"LinkedIn")," or ",r.createElement("a",{href:"https://twitter.com/SerenityJS",title:"Follow Serenity/JS on Twitter"},"Twitter")," to get notified \ud83d\udd14 when new materials and releases are available."),r.createElement("p",null,"And if you appreciate the amount of effort that goes into maintaining Serenity/JS and producing all the learning materials, please ",r.createElement("a",{href:"https://github.com/sponsors/serenity-js",target:"_blank",rel:"noopener noreferrer"},"support our work on GitHub"),".")))}},76829:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(14041),o=n(9546),i=n(68844),a=n(49028);const l={admonition:"admonition_qNG0",admonitionHeading:"admonitionHeading_l909",admonitionIcon:"admonitionIcon_UNbs",admonitionContent:"admonitionContent_oUmQ"};const s={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(a.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(a.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(a.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(a.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(a.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},c={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=r.Children.toArray(e),n=t.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}function m(e){const{children:t,type:n,title:a,icon:m}=d(e),u=function(e){const t=c[e]??e,n=s[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),s.info)}(n),p=a??u.label,{iconComponent:f}=u,y=m??r.createElement(f,null);return r.createElement("div",{className:(0,o.A)(i.G.common.admonition,i.G.common.admonitionType(e.type),"alert",`alert--${u.infimaClassName}`,l.admonition)},r.createElement("div",{className:l.admonitionHeading},r.createElement("span",{className:l.admonitionIcon},y),p),r.createElement("div",{className:l.admonitionContent},t))}},66402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(89575),o=(n(14041),n(82247)),i=n(48225);const a={sidebar_position:7},l="Data structures",s={unversionedId:"design/data-structures",id:"design/data-structures",title:"Data structures",description:"All the activities performed by Serenity/JS actors are asynchronous,",source:"@site/docs/design/data-structures.mdx",sourceDirName:"design",slug:"/design/data-structures",permalink:"/handbook/design/data-structures",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/design/data-structures.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Control flow",permalink:"/handbook/design/control-flow"},next:{title:"Portable test code",permalink:"/handbook/design/portable-test-code"}},c={},d=[],m={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"data-structures"},"Data structures"),(0,o.yg)("p",null,"All the ",(0,o.yg)("a",{parentName:"p",href:"/api/core/class/Activity"},"activities")," performed by Serenity/JS actors are asynchronous,\nand so are the data structures that support them.\nSerenity/JS introduces several async-first data structures to support writing test scenarios that follow th ",(0,o.yg)("a",{parentName:"p",href:"/handbook/design/screenplay-pattern"},"Screenplay Pattern"),"."),(0,o.yg)("p",null,"In this article, I'll show you how the following idiomatic Serenity/JS data structures work and how to use them in your scenarios:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/api/core/class/Question"},(0,o.yg)("inlineCode",{parentName:"a"},"Question"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/api/core#QuestionAdapter"},(0,o.yg)("inlineCode",{parentName:"a"},"QuestionAdapter"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/api/core/class/List"},(0,o.yg)("inlineCode",{parentName:"a"},"List"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/api/core/function/notes"},(0,o.yg)("inlineCode",{parentName:"a"},"Notes")))),(0,o.yg)(i.A,{mdxType:"ArticleComingSoon"}))}p.isMDXComponent=!0}}]);