"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[25750],{43636:(e,t,r)=>{r.d(t,{Iu:()=>m,yg:()=>y});var a=r(85668);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(r),g=n,y=c["".concat(l,".").concat(g)]||c[g]||u[g]||i;return r?a.createElement(y,s(s({ref:t},m),{},{components:r})):a.createElement(y,s({ref:t},m))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(15307),n=(r(85668),r(43636));const i={date:"2023-10-09T20:00",title:"3.12.0",tags:["deps","jasmine","protractor","webdriverio"]},s="3.12.0",o={permalink:"/changelog/3.12.0",source:"@site/changelog/source/3.12.0.md",title:"3.12.0",description:"Summary",date:"2023-10-09T20:00:00.000Z",formattedDate:"October 9, 2023",tags:[{label:"deps",permalink:"/changelog/tags/deps"},{label:"jasmine",permalink:"/changelog/tags/jasmine"},{label:"protractor",permalink:"/changelog/tags/protractor"},{label:"webdriverio",permalink:"/changelog/tags/webdriverio"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-10-09T20:00",title:"3.12.0",tags:["deps","jasmine","protractor","webdriverio"]},prevItem:{title:"3.13.0",permalink:"/changelog/3.13.0"},nextItem:{title:"3.11.1",permalink:"/changelog/3.11.1"},listPageLink:"/changelog/page/11"},l={authorsImageUrls:[]},p=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.c)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"summary"},"Summary"),(0,n.yg)("p",null,"This release addresses ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/913"},"#913"),", ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1088"},"#1088")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/jasmine"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/jasmine"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/protractor"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/protractor"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/webdriverio"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio")))),(0,n.yg)("p",null,"View detailed ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.11.1...v3.12.0"},"code diff")," on GitHub"),(0,n.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update dependency typedoc to ^0.25.2 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/95dfd3d4d9c83df5ba4f6314ada0e560610f12b6"},"95dfd3d"),")")),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"jasmine:")," support for Jasmine 5 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ee802152d1af7a50665def985fd946fc04e6399d"},"ee80215"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1088"},"#1088")," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/913"},"#913")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"jasmine:")," support for Jasmine 5 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/9b34e1eb9bfe1a1ad507fff569083da429b10f30"},"9b34e1e"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"protractor:")," support for Jasmine 5 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f638532da48b56dcc997605175141c67fbeb231e"},"f638532"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"webdriverio:")," support for Jasmine 5 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/881196f8ab869230e4bc791db7a54cdb685b2e08"},"881196f"),")")))}u.isMDXComponent=!0}}]);