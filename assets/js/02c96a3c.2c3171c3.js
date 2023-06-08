"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[18062],{30876:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>f});var r=a(2784);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),l=d(a),u=n,f=l["".concat(c,".").concat(u)]||l[u]||m[u]||i;return a?r.createElement(f,p(p({ref:t},o),{},{components:a})):r.createElement(f,p({ref:t},o))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:n,p[1]=s;for(var d=2;d<i;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16725:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(7896),n=(a(2784),a(30876));const i={date:"2023-06-08T20:00",title:"3.3.1",tags:["deps"]},p="3.3.1",s={permalink:"/changelog/3.3.1",source:"@site/changelog/source/3.3.1.md",title:"3.3.1",description:"Summary",date:"2023-06-08T20:00:00.000Z",formattedDate:"June 8, 2023",tags:[{label:"deps",permalink:"/changelog/tags/deps"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-06-08T20:00",title:"3.3.1",tags:["deps"]},nextItem:{title:"3.3.0",permalink:"/changelog/3.3.0"},listPageLink:"/changelog/"},c={authorsImageUrls:[]},d=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],o={toc:d},l="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(l,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This release introduces improvements to\nthe internal structure of Serenity/JS."),(0,n.kt)("p",null,"View detailed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.3.0...v3.3.1"},"code diff")," on GitHub"),(0,n.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency @paralleldrive/cuid2 to ^2.2.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/2aaa656edb5692844ed12321fb5ffa012b6e6df7"},"2aaa656"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency @paralleldrive/cuid2 to ^2.2.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/e7ce99f14e96d5c72002e02a30c6d3bd612d5236"},"e7ce99f"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency @paralleldrive/cuid2 to ^2.2.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/dd2148a87c25574f4a1051e7e3c19ed9a28fe89a"},"dd2148a"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency @paralleldrive/cuid2 to ^2.2.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/eb37932dcf93cff36eabb4c36c1740025467eb74"},"eb37932"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency @paralleldrive/cuid2 to ^2.2.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/1fa40c28bb6d7116c7dd3f4e85bc3ace25a1f42a"},"1fa40c2"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency @paralleldrive/cuid2 to ^2.2.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/1ccc3e4b8fae9f426b509a21de3234f974e26830"},"1ccc3e4"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency @paralleldrive/cuid2 to ^2.2.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/03a92d32cefb7e4d56eaac74a5f5906b04875c59"},"03a92d3"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency @paralleldrive/cuid2 to ^2.2.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/e01b6420142466f564898090b4fa80024ac572a5"},"e01b642"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to v7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/d2a033b1214f106cbae5f8ec8cc206a6a278f63b"},"d2a033b"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to v7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ed8a659caf7a78cc9d4708ff15d953fc3ead967f"},"ed8a659"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to v7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/2a7935c95817fabd238bd7f193bd0bf7c0ccf32a"},"2a7935c"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to v7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/beb95a3c390a4e45d1b1c52492d68570f67d3389"},"beb95a3"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to v7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/546e6e07ebe8044a99503362ce8ac9deed4c9d54"},"546e6e0"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to v7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/d52ecf6f07548c2b7dac046b87c15610f61cbf16"},"d52ecf6"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to v7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/42bdd1923107229e0f4262b12b7ac2ce98e45af7"},"42bdd19"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to v7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/dba90e41457ecd98ab969c43f3e2bfa33bf6307a"},"dba90e4"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to v7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/479d25aed2fc440e3b584fbc5a63d29bfd3b5313"},"479d25a"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to v7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/2c3043dc9b7082ca7d910139654a0c17560c6335"},"2c3043d"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to v7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/2b8f7758f09abdcd8b87030f6116c75ac221b26e"},"2b8f775"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to v7 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/243e7de4315944a4af4887f1b1d137ffb3650676"},"243e7de"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency typedoc to ^0.24.8 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/4170d138de11dbbf828a96bf63109cca54fa0b24"},"4170d13"),")")))}m.isMDXComponent=!0}}]);