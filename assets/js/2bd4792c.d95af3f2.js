"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[43040],{43636:(e,t,r)=>{r.d(t,{Iu:()=>m,yg:()=>f});var a=r(85668);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(r),g=i,f=p["".concat(c,".").concat(g)]||p[g]||y[g]||s;return r?a.createElement(f,n(n({ref:t},m),{},{components:r})):a.createElement(f,n({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,n=new Array(s);n[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:i,n[1]=o;for(var l=2;l<s;l++)n[l]=r[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},23336:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>y,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=r(15307),i=(r(85668),r(43636));const s={date:"2023-02-07T20:00",title:"3.0.0-rc.41",tags:["assertions","core","playwright","protractor","web","webdriverio"]},n="3.0.0-rc.41",o={permalink:"/changelog/3.0.0-rc.41",source:"@site/changelog/source/3.0.0-rc.41.md",title:"3.0.0-rc.41",description:"Summary",date:"2023-02-07T20:00:00.000Z",formattedDate:"February 7, 2023",tags:[{label:"assertions",permalink:"/changelog/tags/assertions"},{label:"core",permalink:"/changelog/tags/core"},{label:"playwright",permalink:"/changelog/tags/playwright"},{label:"protractor",permalink:"/changelog/tags/protractor"},{label:"web",permalink:"/changelog/tags/web"},{label:"webdriverio",permalink:"/changelog/tags/webdriverio"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-02-07T20:00",title:"3.0.0-rc.41",tags:["assertions","core","playwright","protractor","web","webdriverio"]},prevItem:{title:"3.0.0-rc.42",permalink:"/changelog/3.0.0-rc.42"},nextItem:{title:"3.0.0-rc.40",permalink:"/changelog/3.0.0-rc.40"},listPageLink:"/changelog/page/48"},c={authorsImageUrls:[]},l=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],m={toc:l},p="wrapper";function y(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,a.c)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"summary"},"Summary"),(0,i.yg)("p",null,"This release addresses ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1102"},"#1102"),", ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1486"},"#1486")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/api/assertions"},(0,i.yg)("inlineCode",{parentName:"a"},"@serenity-js/assertions"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/api/core"},(0,i.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/api/playwright"},(0,i.yg)("inlineCode",{parentName:"a"},"@serenity-js/playwright"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/api/protractor"},(0,i.yg)("inlineCode",{parentName:"a"},"@serenity-js/protractor"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/api/web"},(0,i.yg)("inlineCode",{parentName:"a"},"@serenity-js/web"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/api/webdriverio"},(0,i.yg)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio")))),(0,i.yg)("p",null,"View detailed ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.40...v3.0.0-rc.41"},"code diff")," on GitHub"),(0,i.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"assertions:")," custom errors thrown via Ensure now include activity location (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/1fdf7a29aa4065d9ad23a750aa7c3cde6e36e2f1"},"1fdf7a2"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1102"},"#1102")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"assertions:")," interaction to Ensure no longer emits an AssertionReport artifact (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/db3e5ae642f63ce808f52571f5ad840c614ef624"},"db3e5ae"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1486"},"#1486")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," corrected issue in asyncMap that led lists of lists to be flat-mapped not mapped (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/d7a6f1d7281f34c56cf2b606681c8046b1cffce7"},"d7a6f1d"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," easier configuration and automatic colour support detection for AnsiDiffFormatter (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/637ed44ffb16484544ade975bcbc4c3929ffe8f9"},"637ed44"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1486"},"#1486")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," further improvements to how the expected vs received values are rendered in VS Code (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/e2101d0b11e56b1701bf75efe0d4f85ab72a6f48"},"e2101d0"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1486"},"#1486")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," improved support for Node 14 (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f828b4563a3c5165dc066fc675d4e5c2b78c3a0a"},"f828b45"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," introduced ExpectationDetails to provide more accurate info re failed expectations (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/02b8f33732341a9391192fc52a59ea8a8f5f19f0"},"02b8f33"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1102"},"#1102")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," removed AssertionReport and AssertionReportDiffer as they're no longer needed (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/a968ac57365e10b503e74db4319eb96b3430ffb0"},"a968ac5"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1480"},"#1480")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," removed the legacy Error (de-)serialisation mechanism (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/7ea2b101c6d5ba1b32e14b3f24a5bd6b9c5c97f6"},"7ea2b10"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," typeOf now correctly recognises Proxy objects (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3ca68a33524556c43d288a9131e79cb53a9f392e"},"3ca68a3"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," updated npm-failsafe to 1.0.0 (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/df807312778e9722c893a9f410e51c1b15af01ac"},"df80731"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1486"},"#1486")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"playwright:")," upgraded Playwright to 1.30.0 (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/305a2c258c06aa55685f99237cf3d3ce3c590122"},"305a2c2"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"web:")," renamed internal function ",(0,i.yg)("inlineCode",{parentName:"li"},"inspector")," to ",(0,i.yg)("inlineCode",{parentName:"li"},"inspected")," (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/4d2b14750ee2bfa3794cd0d5eba993689f1bc8b5"},"4d2b147"),")")),(0,i.yg)("h2",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"assertions:")," diffs included in RuntimeErrors are now colour-coded (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f88efb48180924351e8f7b25c44f3560b0e01b0d"},"f88efb4"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1486"},"#1486")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," assertion and synchronisation errors include location of the activity that threw them (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f06f378b9427d81a5adcea219ef01cf616a48c20"},"f06f378"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1102"},"#1102")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," assertion errors include precise information about unmet expectations and improved diffs (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/1eb09b1c1c8fb059b53bd7fcefab660581abc7bc"},"1eb09b1"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1102"},"#1102")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," better assertion errors reporting in Visual Studio Code (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3b94b7d606fae49e7ca77c2fbe09d07eeb042ea9"},"3b94b7d"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1486"},"#1486")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," error factory is now configurable, which allows for the diffs to include colours (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/dac293de5f8baed5aee3246b5467c4bcfbebbb25"},"dac293d"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1486"},"#1486")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," new ability to RaiseErrors (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/4617d39a7b0d72381834abe27ff4393cbc79d0f5"},"4617d39"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1102"},"#1102")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"core:")," overridable abilities (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/03966ccae40d102b7dbca1125beb90ceda8fbc50"},"03966cc"),")"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"protractor:")," improved assertion error reporting for Protractor (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/8f8f91c4364239b6637b35e371c31a69674b9e72"},"8f8f91c"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1102"},"#1102")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"webdriverio:")," improved assertion error reporting for WebdriverIO (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/75137526c70d92869c87a127454c5b90a9948b87"},"7513752"),"), closes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1102"},"#1102"))))}y.isMDXComponent=!0}}]);