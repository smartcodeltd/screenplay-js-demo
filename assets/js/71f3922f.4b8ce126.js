"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[8672],{43636:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>d});var r=n(85668);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(n),y=i,d=g["".concat(p,".").concat(y)]||g[y]||u[y]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},81084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(15307),i=(n(85668),n(43636));const a={sidebar_position:5,title:"API testing"},o="API testing with Serenity/JS",s={unversionedId:"api-testing/index",id:"api-testing/index",title:"API testing",description:"Serenity/JS REST is a Screenplay Pattern-compatible library that enables your actors to interact with REST- and other",source:"@site/docs/api-testing/index.mdx",sourceDirName:"api-testing",slug:"/api-testing/",permalink:"/handbook/api-testing/",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/api-testing/index.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"API testing"},sidebar:"tutorialSidebar",previous:{title:"Serenity/JS web modules",permalink:"/handbook/web-testing/serenity-js-web-modules"},next:{title:"Your first API scenario",permalink:"/handbook/api-testing/your-first-api-scenario"}},p={},l=[],c={toc:l},g="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"api-testing-with-serenityjs"},"API testing with Serenity/JS"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/api/rest"},(0,i.yg)("strong",{parentName:"a"},"Serenity/JS REST"))," is a ",(0,i.yg)("a",{parentName:"p",href:"/handbook/design/screenplay-pattern"},"Screenplay Pattern"),"-compatible library that enables your actors to interact with REST- and other\nHTTP-based interfaces. Under the hood, Serenity/JS REST uses the popular ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/axios/axios"},"Axios HTTP client"),", allowing you to leverage its ",(0,i.yg)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=keywords:axios"},"plugin ecosystem"),",\nand adds automatic proxy server detection to ensure your API tests work smoothly, even in corporate networks."),(0,i.yg)("p",null,"In this chapter, you'll learn about:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/handbook/api-testing/your-first-api-scenario/"},(0,i.yg)("strong",{parentName:"a"},"Interacting with HTTP APIs"))," using Serenity/JS Screenplay Pattern libraries"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/handbook/api-testing/configuring-http-client/"},(0,i.yg)("strong",{parentName:"a"},"Configuring Serenity/JS HTTP client"))," for API testing"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/handbook/api-testing/sending-requests/"},(0,i.yg)("strong",{parentName:"a"},"Sending HTTP requests"))," using the Serenity/JS REST module"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/handbook/api-testing/verifying-responses/"},(0,i.yg)("strong",{parentName:"a"},"Verifying HTTP responses"))," using the Serenity/JS assertions module"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/handbook/api-testing/blended-testing/"},(0,i.yg)("strong",{parentName:"a"},"Blended Testing"))," and writing business-focused API test scenarios")))}u.isMDXComponent=!0}}]);