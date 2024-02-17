"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[88808],{82247:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>u});var a=r(14041);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,u=p["".concat(o,".").concat(g)]||p[g]||y[g]||s;return r?a.createElement(u,i(i({ref:t},m),{},{components:r})):a.createElement(u,i({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},83793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(89575),n=(r(14041),r(82247));const s={date:"2021-12-29T20:00",title:"3.0.0-rc.3",tags:["core","deps","examples","rest","web"]},i="3.0.0-rc.3",l={permalink:"/changelog/3.0.0-rc.3",source:"@site/changelog/source/3.0.0-rc.3.md",title:"3.0.0-rc.3",description:"Summary",date:"2021-12-29T20:00:00.000Z",formattedDate:"December 29, 2021",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"examples",permalink:"/changelog/tags/examples"},{label:"rest",permalink:"/changelog/tags/rest"},{label:"web",permalink:"/changelog/tags/web"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2021-12-29T20:00",title:"3.0.0-rc.3",tags:["core","deps","examples","rest","web"]},prevItem:{title:"3.0.0-rc.4",permalink:"/changelog/3.0.0-rc.4"},nextItem:{title:"3.0.0-rc.2",permalink:"/changelog/3.0.0-rc.2"},listPageLink:"/changelog/page/89"},o={authorsImageUrls:[]},c=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],m={toc:c},p="wrapper";function y(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"summary"},"Summary"),(0,n.yg)("p",null,"This release introduces improvements to\nthe following Serenity/JS modules:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/core"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/rest"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/rest"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/web"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/web")))),(0,n.yg)("p",null,"View detailed ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.2...v3.0.0-rc.3"},"code diff")," on GitHub"),(0,n.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," refactored Mappable so that it's easier to implement filters (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/176e0cd0303d63271477b2b7a8e7b0572dda99a0"},"176e0cd"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1074"},"#1074")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," removed interface Reducible since it's not used any more (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/1e9f23b227e3c4509dd52d6885cde5d3ecd1d102"},"1e9f23b"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," updated tiny-types to 1.17.0 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3187051594158b4b450c82e851e417fd2ed21652"},"3187051"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"examples:")," updated the examples to use the new PageElement, By, and .where APIs (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/54961a7a3af06716295a1cab56a9c0e10d5dac73"},"54961a7"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"rest:")," corrected LastResponse to wrap .status(), .body(), .header() and .headers() in Adapters (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/aab8e93a19005710d9f333756cdae5aa21c31058"},"aab8e93"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1082"},"#1082")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"web:")," corrected synchronisation in Web questions and interactions (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/c3a0ad16de311e71d7e82e4f463baa0ca6b18863"},"c3a0ad1"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"web:")," Photographer skips taking a screenshot if the Window is closed (DevTools protocol) (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b682577ad649046fc1a4cd61a7315e11d60dcf32"},"b682577"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"web:")," refactored Selector and NativeElementLocator classes to simplify the implementation (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f0c8f113433958877d36f13d0bc7f355ea68d280"},"f0c8f11"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"web:")," simplified the selectors (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b167e422eb66556845c31d5847b9fd33b707c764"},"b167e42"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1074"},"#1074"))),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," forEach for List and PageElements (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/4592fb7e700bad17fd44d91bd9db169839802d01"},"4592fb7"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/823"},"#823")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," List supports custom collectors (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/cd3f2bc1b536c8e56714aecd669bfed7ab078e0a"},"cd3f2bc"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," new implementation of List.where filters (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/45b3c8080ca467ac6362e5217e7899ca36a04cdc"},"45b3c80"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1074"},"#1074")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"core:")," support for Screenplay-style collection filters and mapping (List.where & .eachMappedTo) (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3d3c02ebe0ec5c6865f91f1991fd59ef0190a16c"},"3d3c02e"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1074"},"#1074")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"web:")," isVisible checks if the element is in viewport and not hidden behind other elements (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/429040fb32b04cd4bc7524100635203fd8128eb6"},"429040f"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"web:")," new PageElement retrieval model based on Selectors (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/48bd94f3c29707b66dcf81a7522f7529b6f9fcfb"},"48bd94f"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"web:")," re-introduced PageElements.where DSL and universal By selectors (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/39fe0a10edf7f652e93911159e4a4689c36d6876"},"39fe0a1"),"), closes ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1081"},"#1081"))))}y.isMDXComponent=!0}}]);