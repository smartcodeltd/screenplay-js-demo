"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[82608],{43636:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>m});var n=r(85668);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,m=u["".concat(l,".").concat(g)]||u[g]||y[g]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},82312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(15307),a=(r(85668),r(43636));const i={date:"2023-08-01T20:00",title:"3.8.0",tags:["core","serenity-bdd","webdriverio"]},o="3.8.0",s={permalink:"/changelog/3.8.0",source:"@site/changelog/source/3.8.0.md",title:"3.8.0",description:"Summary",date:"2023-08-01T20:00:00.000Z",formattedDate:"August 1, 2023",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"serenity-bdd",permalink:"/changelog/tags/serenity-bdd"},{label:"webdriverio",permalink:"/changelog/tags/webdriverio"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-08-01T20:00",title:"3.8.0",tags:["core","serenity-bdd","webdriverio"]},prevItem:{title:"3.9.0",permalink:"/changelog/3.9.0"},nextItem:{title:"3.7.2",permalink:"/changelog/3.7.2"},listPageLink:"/changelog/page/21"},l={authorsImageUrls:[]},c=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],p={toc:c},u="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"This release addresses ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1790"},"#1790")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/core"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/serenity-bdd"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/serenity-bdd"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/webdriverio"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio")))),(0,a.yg)("p",null,"View detailed ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.7.2...v3.8.0"},"code diff")," on GitHub"),(0,a.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"serenity-bdd:")," corrected screenshot sort order in screenshot detail viewer (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/7537622d41193e3cf358a1b939c7422bcc3b207f"},"7537622"),"), closes ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1790"},"#1790")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"webdriverio:")," updated WebdriverIO to 8.13 (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b8916df65a18fd820578b1fd522f4e52119a79db"},"b8916df"),")")),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"core:")," allow for easier debugging of Serenity/JS domain events using StreamReporter (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/108677e213423004127b6752301e73f66231030e"},"108677e"),"), closes ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1790"},"#1790")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"webdriverio:")," support for WebdriverIO 8.14 (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/27c5cec56be405bd729ab6b69170645e582248f1"},"27c5cec"),")")))}y.isMDXComponent=!0}}]);