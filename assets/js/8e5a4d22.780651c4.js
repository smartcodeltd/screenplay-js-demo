"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[9510],{30876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[p]="string"==typeof e?e:n,s[1]=m;for(var l=2;l<i;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>l});var a=r(7896),n=(r(2784),r(30876));const i={date:"2024-02-01T20:00",title:"3.16.0",tags:["core","cucumber","deps","jasmine","mocha","playwright-test","serenity-bdd"]},s="3.16.0",m={permalink:"/changelog/3.16.0",source:"@site/changelog/source/3.16.0.md",title:"3.16.0",description:"Summary",date:"2024-02-01T20:00:00.000Z",formattedDate:"February 1, 2024",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"cucumber",permalink:"/changelog/tags/cucumber"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"jasmine",permalink:"/changelog/tags/jasmine"},{label:"mocha",permalink:"/changelog/tags/mocha"},{label:"playwright-test",permalink:"/changelog/tags/playwright-test"},{label:"serenity-bdd",permalink:"/changelog/tags/serenity-bdd"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2024-02-01T20:00",title:"3.16.0",tags:["core","cucumber","deps","jasmine","mocha","playwright-test","serenity-bdd"]},nextItem:{title:"3.15.1",permalink:"/changelog/3.15.1"},listPageLink:"/changelog/"},o={authorsImageUrls:[]},l=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],c={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This release addresses ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/2165"},"#2165")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/core"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/cucumber"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/cucumber"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/jasmine"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/jasmine"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/mocha"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/mocha"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/playwright-test"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/playwright-test"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/serenity-bdd"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/serenity-bdd")))),(0,n.kt)("p",null,"View detailed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.15.1...v3.16.0"},"code diff")," on GitHub"),(0,n.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"core:")," introduced RequirementsHierarchy to centralise requirements detection logic (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/0a3d6f013a3b94ca471edc263e1157b7c41131be"},"0a3d6f0"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"core:")," recognise ",(0,n.kt)("inlineCode",{parentName:"li"},"specs")," as a potential requirements hierarchy root (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/d95d85058fd5e4e01aec689b7196989ece5e303f"},"d95d850"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"core:")," removed dependency on Moment.js (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/edd1d64f30893983b92bd600d102c81577c0ecb1"},"edd1d64"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"core:")," simplified the Timestampt validation regex and improved error messages (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b453a23de419dbd811927b9447c17678e39f8cc8"},"b453a23"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"core:")," support for timezones and simplified date time strings when creating Timestamps (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/754f8e260d2fc5130075a78ec58084eafcf2c83f"},"754f8e2"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"cucumber:")," ensure Cucumber adapter emits events with absolute file paths (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f93d9cc5c405811e5ed1b7ef31b788f2fa92b329"},"f93d9cc"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"cucumber:")," support for Cucumber 10.3.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/8f41a03cab5a3c1d46ea2037769e01c101a1e762"},"8f41a03"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency lru-cache to v10.2.0 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/a580d1e301b7901e78ea87b5a273438562880533"},"a580d1e"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency typedoc-plugin-mdn-links to v3.1.13 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/92c86521ecffc344cd31f70c1583a3807cf5d393"},"92c8652"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency typedoc-plugin-mdn-links to v3.1.14 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/fdb261639bcfcfcb0843b5ad177adfed3833a29b"},"fdb2616"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update playwright dependencies to v1.41.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/a1a39ee2e30506849d4589a9588a5ac7dfb0adb8"},"a1a39ee"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"serenity-bdd:")," upgraded Serenity BDD CLI to 4.0.46 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/218c08ffeef6fc1f51654782d896a03b048dca6d"},"218c08f"),")")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"core:")," added Masked.valueOf() Question (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/e9ff5ab62e8b305aa7ef2238f482be5369d890c1"},"e9ff5ab"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/2165"},"#2165")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"cucumber:")," support for nested requirements reporting (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/40f884273bfac96bde1b028a819d9641e861dc3b"},"40f8842"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"cucumber:")," support for nested requirements reporting (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/2d0b885d61d7e63445a68d4a14c34240ed4c304e"},"2d0b885"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"jasmine:")," support for nested requirements reporting (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/137fef786dfb147576032e171fa0646695b7051e"},"137fef7"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"jasmine:")," support for using specDir to indicate the requirements hierarchy root (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/585cb810a9b312be080549b823bfc586fbd8b3cc"},"585cb81"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"mocha:")," support for nested requirements reporting (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f8e70ce8a317ab6e8bdf4d058110f110b4c8deda"},"f8e70ce"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"playwright-test:")," improved requirements reporting (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3b99112b2eb0add2440d88a6485ee23e7acac75e"},"3b99112"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"playwright-test:")," support for nested requirements reporting (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/37ef679bde723af856d94bc64781f189a59213ed"},"37ef679"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"serenity-bdd:")," upgraded Serenity BDD to 4.0.44 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/4e2f1e3b273712c44a7f749ba9570f121520cdd5"},"4e2f1e3"),")")))}u.isMDXComponent=!0}}]);