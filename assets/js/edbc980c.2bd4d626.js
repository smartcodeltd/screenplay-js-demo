"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[80965],{82247:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>u});var a=r(14041);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=c(r),m=n,u=g["".concat(l,".").concat(m)]||g[m]||y[m]||i;return r?a.createElement(u,s(s({ref:t},p),{},{components:r})):a.createElement(u,s({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29e3:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(89575),n=(r(14041),r(82247));const i={date:"2023-01-05T20:00",title:"3.0.0-rc.39",tags:["core","deps","playwright-test","rest"]},s="3.0.0-rc.39",o={permalink:"/changelog/3.0.0-rc.39",source:"@site/changelog/source/3.0.0-rc.39.md",title:"3.0.0-rc.39",description:"Summary",date:"2023-01-05T20:00:00.000Z",formattedDate:"January 5, 2023",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"playwright-test",permalink:"/changelog/tags/playwright-test"},{label:"rest",permalink:"/changelog/tags/rest"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-01-05T20:00",title:"3.0.0-rc.39",tags:["core","deps","playwright-test","rest"]},prevItem:{title:"3.0.0-rc.40",permalink:"/changelog/3.0.0-rc.40"},nextItem:{title:"3.0.0-rc.38",permalink:"/changelog/3.0.0-rc.38"},listPageLink:"/changelog/page/53"},l={authorsImageUrls:[]},c=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],p={toc:c},g="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"summary"},"Summary"),(0,n.yg)("p",null,"This release addresses ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1437"},"#1437")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/core"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/playwright-test"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/playwright-test"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/rest"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/rest")))),(0,n.yg)("p",null,"View detailed ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.38...v3.0.0-rc.39"},"code diff")," on GitHub"),(0,n.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," improved Duration to ensure it can't be instantiated with an invalid parameter (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/9d89014a261659ef07ee05eb9082449019f21e50"},"9d89014"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," improved error message shown when an actor doesn't have a required ability (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/753b0362ffbcc771995f711df89d1d64d4b55d76"},"753b036"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," simplified AsyncOperation events (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ac1a88f95560b5f163ac3f2302f4274f4bf99455"},"ac1a88f"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," simplified internal AsyncOperation events to separate service name from task description (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/0162d287c84a4ab716e5e655cfc2b816ba89f394"},"0162d28"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update website dependencies (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1437"},"#1437"),") (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/51ef2856a501d8d6c87e646ac8ec57464abd5836"},"51ef285"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"playwright-test:")," better names for screenshots attached to Playwright Test reports (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/8c043349165a090daf34fb1c363da47003130a53"},"8c04334"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"rest:")," support for Axios 1.2.2 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b6fa54b0d372bcf846d12bb60c91ac637015d1c6"},"b6fa54b"),")")),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"playwright-test:")," annotate Playwright Test reports with Serenity/JS tags (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/5e4a513a5cd33cbff459148f365f90847c63518c"},"5e4a513"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"playwright-test:")," custom actors can now be defined in playwright config file (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/117da340c0a9bea214b2a3ea8182d803608697dc"},"117da34"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"playwright-test:")," interoperability between Serenity/JS default ",(0,n.yg)("inlineCode",{parentName:"li"},"actor")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"page")," (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/91803de95c5bd1a8a475e5948e15cc49689a058c"},"91803de"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"playwright-test:")," support for Photographer and automated screenshots upon activity failure (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/c5527caee65cb89014ea9cb28b949cf45d7463a3"},"c5527ca"),")")))}y.isMDXComponent=!0}}]);