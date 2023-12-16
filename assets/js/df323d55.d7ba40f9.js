"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[33922],{30876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(7896),n=(r(2784),r(30876));const i={date:"2023-07-20T20:00",title:"3.7.0",tags:["core","deps","playwright","protractor","web","webdriverio"]},l="3.7.0",o={permalink:"/changelog/3.7.0",source:"@site/changelog/source/3.7.0.md",title:"3.7.0",description:"Summary",date:"2023-07-20T20:00:00.000Z",formattedDate:"July 20, 2023",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"playwright",permalink:"/changelog/tags/playwright"},{label:"protractor",permalink:"/changelog/tags/protractor"},{label:"web",permalink:"/changelog/tags/web"},{label:"webdriverio",permalink:"/changelog/tags/webdriverio"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-07-20T20:00",title:"3.7.0",tags:["core","deps","playwright","protractor","web","webdriverio"]},prevItem:{title:"3.7.1",permalink:"/changelog/3.7.1"},nextItem:{title:"3.6.1",permalink:"/changelog/3.6.1"},listPageLink:"/changelog/page/21"},s={authorsImageUrls:[]},p=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This release addresses ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1784"},"#1784")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/core"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/playwright"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/playwright"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/protractor"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/protractor"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/web"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/web"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/webdriverio"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio")))),(0,n.kt)("p",null,"View detailed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.6.1...v3.7.0"},"code diff")," on GitHub"),(0,n.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"core:")," support for proxying String.replace in QuestionAdapter (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/251113d50002f2be175ca8e17466a8c5a8e9418d"},"251113d"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update playwright dependencies to ^1.36.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b86289b3f6d703baa9867ad167502de102591545"},"b86289b"),")")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"playwright:")," support for parentElement.closestTo(childElement) API (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/cee2c48e63cc8edbfc9daece57e9966f8833beeb"},"cee2c48"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1784"},"#1784")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"protractor:")," support for parentElement.closestTo(childElement) API (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ec21e18acf670cd090eb5b666e78d29b2943fd61"},"ec21e18"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"webdriverio:")," support for parentElement.closestTo(childElement) API (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ee1b3c47180c384b2109cee3bac43ce7bfaff5e8"},"ee1b3c4"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"web:")," new PageElement Query Language API - parentElement.closestTo(childElement) (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/7d48fd8c1dcda6cbd5f8d0579e4cce129b24618f"},"7d48fd8"),")")))}u.isMDXComponent=!0}}]);