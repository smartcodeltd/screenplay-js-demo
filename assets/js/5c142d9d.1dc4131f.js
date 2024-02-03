"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[5860],{43636:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>y});var n=t(85668);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),g=a,y=p["".concat(l,".").concat(g)]||p[g]||m[g]||c;return t?n.createElement(y,o(o({ref:r},u),{},{components:t})):n.createElement(y,o({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=g;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},73912:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=t(15307),a=(t(85668),t(43636));const c={date:"2022-11-28T20:00",title:"3.0.0-rc.36",tags:["core","cucumber"]},o="3.0.0-rc.36",i={permalink:"/changelog/3.0.0-rc.36",source:"@site/changelog/source/3.0.0-rc.36.md",title:"3.0.0-rc.36",description:"Summary",date:"2022-11-28T20:00:00.000Z",formattedDate:"November 28, 2022",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"cucumber",permalink:"/changelog/tags/cucumber"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-11-28T20:00",title:"3.0.0-rc.36",tags:["core","cucumber"]},prevItem:{title:"3.0.0-rc.37",permalink:"/changelog/3.0.0-rc.37"},nextItem:{title:"3.0.0-rc.35",permalink:"/changelog/3.0.0-rc.35"},listPageLink:"/changelog/page/53"},l={authorsImageUrls:[]},s=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],u={toc:s},p="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"This release addresses ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1403"},"#1403")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/core"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/cucumber"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/cucumber")))),(0,a.yg)("p",null,"View detailed ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.35...v3.0.0-rc.36"},"code diff")," on GitHub"),(0,a.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"core:")," reverted the change to List.get and marked method as deprecated, to be removed in 3.0 (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/5ac8c69a5ddb2cbb62a76f5e25cfdeae11135b45"},"5ac8c69"),"), closes ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1403"},"#1403"))),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"cucumber:")," support for Cucumber 8.9.0 (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/67dcc711549eee1d75d9cac1e4a3e4c7b4165080"},"67dcc71"),")")))}m.isMDXComponent=!0}}]);