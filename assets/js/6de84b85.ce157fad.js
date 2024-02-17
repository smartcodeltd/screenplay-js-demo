"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[32061],{82247:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(14041);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},35:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(89575),a=(r(14041),r(82247));const o={date:"2022-04-15T20:00",title:"3.0.0-rc.16",tags:["core"]},i="3.0.0-rc.16",c={permalink:"/changelog/3.0.0-rc.16",source:"@site/changelog/source/3.0.0-rc.16.md",title:"3.0.0-rc.16",description:"Summary",date:"2022-04-15T20:00:00.000Z",formattedDate:"April 15, 2022",tags:[{label:"core",permalink:"/changelog/tags/core"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-04-15T20:00",title:"3.0.0-rc.16",tags:["core"]},prevItem:{title:"3.0.0-rc.17",permalink:"/changelog/3.0.0-rc.17"},nextItem:{title:"3.0.0-rc.15",permalink:"/changelog/3.0.0-rc.15"},listPageLink:"/changelog/page/76"},s={authorsImageUrls:[]},l=[{value:"Summary",id:"summary",level:2},{value:"Features",id:"features",level:2},{value:"BREAKING CHANGES",id:"breaking-changes",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"This release addresses ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/817"},"#817")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/core"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/core")))),(0,a.yg)("p",null,"View detailed ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v2.33.6...v3.0.0-rc.16"},"code diff")," on GitHub"),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"core:")," get the number of notes stored in the notepad with Notepad#size() (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/a5c00b9b5cef455ec1410039137e5c79aa9d9460"},"a5c00b9"),")"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"core:")," improved support for recording and reading notes (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/6afc6104d808866dbcabe92bbd64eb97fa104f7a"},"6afc610"),"), closes ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/817"},"#817"))),(0,a.yg)("h2",{id:"breaking-changes"},"BREAKING CHANGES"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"core:")," This implementation replaces the previous implementations of TakeNote, TakeNotes\nand Note, so tests using those interfaces will need to be updated.")))}m.isMDXComponent=!0}}]);