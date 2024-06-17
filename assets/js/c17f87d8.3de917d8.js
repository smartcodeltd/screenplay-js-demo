"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[3959],{82247:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(14041);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||s;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(89575),r=(n(14041),n(82247));const s={sidebar_position:3,title:"Sending requests"},i="Sending requests",o={unversionedId:"api-testing/sending-requests",id:"api-testing/sending-requests",title:"Sending requests",description:"To make a Serenity/JS actor send an HTTP request, you need to configure it with the ability to CallAnApi",source:"@site/docs/api-testing/sending-requests.mdx",sourceDirName:"api-testing",slug:"/api-testing/sending-requests",permalink:"/handbook/api-testing/sending-requests",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/api-testing/sending-requests.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Sending requests"},sidebar:"docs",previous:{title:"Configuring the HTTP client",permalink:"/handbook/api-testing/configuring-http-client"},next:{title:"Verifying responses",permalink:"/handbook/api-testing/verifying-responses"}},p={},l=[{value:"Using relative resource URLs",id:"using-relative-resource-urls",level:2},{value:"Using absolute resource URLs",id:"using-absolute-resource-urls",level:2},{value:"Sending data",id:"sending-data",level:2},{value:"Sending dynamic JSON data",id:"sending-dynamic-json-data",level:3},{value:"Sending form data",id:"sending-form-data",level:3},{value:"Sending dynamic form data",id:"sending-dynamic-form-data",level:3}],u={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"sending-requests"},"Sending requests"),(0,r.yg)("p",null,"To make a Serenity/JS actor send an HTTP request, you need to ",(0,r.yg)("a",{parentName:"p",href:"/handbook/api-testing/configuring-http-client/"},"configure it with the ability to ",(0,r.yg)("inlineCode",{parentName:"a"},"CallAnApi")),"\nand instruct to perform an interaction to ",(0,r.yg)("a",{parentName:"p",href:"/api/rest/class/Send/"},(0,r.yg)("inlineCode",{parentName:"a"},"Send"))," one of the available ",(0,r.yg)("a",{parentName:"p",href:"/api/rest/class/HeadRequest/"},(0,r.yg)("inlineCode",{parentName:"a"},"HTTPRequest")),"\nimplementations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/rest/class/GetRequest"},(0,r.yg)("inlineCode",{parentName:"a"},"GetRequest"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/rest/class/PostRequest"},(0,r.yg)("inlineCode",{parentName:"a"},"PostRequest"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/rest/class/DeleteRequest"},(0,r.yg)("inlineCode",{parentName:"a"},"DeleteRequest"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/rest/class/HeadRequest"},(0,r.yg)("inlineCode",{parentName:"a"},"HeadRequest"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/rest/class/PatchRequest"},(0,r.yg)("inlineCode",{parentName:"a"},"PatchRequest"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/rest/class/PutRequest"},(0,r.yg)("inlineCode",{parentName:"a"},"PutRequest"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/rest/class/OptionsRequest"},(0,r.yg)("inlineCode",{parentName:"a"},"OptionsRequest")))),(0,r.yg)("p",null,"Code listings below present some of the common usage patterns, but make sure to check the ",(0,r.yg)("a",{parentName:"p",href:"/api/rest"},"Serenity/JS REST API documentation")," for more examples."),(0,r.yg)("h2",{id:"using-relative-resource-urls"},"Using relative resource URLs"),(0,r.yg)("p",null,"When a ",(0,r.yg)("inlineCode",{parentName:"p"},"HTTPRequest")," is configured with a relative URL, such URL gets resolved against the base URL configured in the ability to ",(0,r.yg)("a",{parentName:"p",href:"/api/rest/class/CallAnApi/"},(0,r.yg)("inlineCode",{parentName:"a"},"CallAnApi")),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled } from '@serenity-js/core'\nimport { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\nawait actorCalled('Apisitt')\n    .whoCan(CallAnApi.at('https://api.example.org/v1/'))\n    .attemptsTo(\n        Send.a(GetRequest.to('users')),                        // GET https://api.example.org/v1/users\n        Ensure.that(LastResponse.status(), equals(200)),\n    )\n")),(0,r.yg)("h2",{id:"using-absolute-resource-urls"},"Using absolute resource URLs"),(0,r.yg)("p",null,"When a ",(0,r.yg)("inlineCode",{parentName:"p"},"HTTPRequest")," is configured with absolute URL, base URL configured in the ability to ",(0,r.yg)("a",{parentName:"p",href:"/api/rest/class/CallAnApi/"},(0,r.yg)("inlineCode",{parentName:"a"},"CallAnApi"))," is ignored for this request."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled } from '@serenity-js/core'\nimport { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\nawait actorCalled('Apisitt')\n    .whoCan(CallAnApi.at('https://api.example.org/v1/'))\n    .attemptsTo(\n        Send.a(GetRequest.to('https://auth.example.org/token')), // GET https://auth.example.org/token\n        Ensure.that(LastResponse.status(), equals(200)),\n    )\n")),(0,r.yg)("h2",{id:"sending-data"},"Sending data"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/api/rest/class/PostRequest"},(0,r.yg)("inlineCode",{parentName:"a"},"PostRequest")),", ",(0,r.yg)("a",{parentName:"p",href:"/api/rest/class/PatchRequest"},(0,r.yg)("inlineCode",{parentName:"a"},"PatchRequest"))," and ",(0,r.yg)("a",{parentName:"p",href:"/api/rest/class/PutRequest"},(0,r.yg)("inlineCode",{parentName:"a"},"PutRequest"))," can be configured using the ",(0,r.yg)("inlineCode",{parentName:"p"},".with(data)")," method to send data in the request body.\nSuch data can be any ",(0,r.yg)("a",{parentName:"p",href:"/api/core/#Answerable"},(0,r.yg)("inlineCode",{parentName:"a"},"Answerable"))," that resolves to a JSON object, a ",(0,r.yg)("inlineCode",{parentName:"p"},"string"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"ArrayBuffer"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"ArrayBufferView"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Buffer"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Stream"),", or ",(0,r.yg)("inlineCode",{parentName:"p"},"URLSearchParams"),".\nSee ",(0,r.yg)("a",{parentName:"p",href:"https://axios-http.com/docs/req_config"},"Axios API documentation")," for more details on supported data types."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled } from '@serenity-js/core'\nimport { LastResponse, PostRequest, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\nawait actorCalled('Apisitt')\n  .attemptsTo(\n    Send.a(PostRequest.to('/books').with({\n      isbn: '0-688-00230-7',\n      title: 'Zen and the Art of Motorcycle Maintenance: An Inquiry into Values',\n      author: 'Robert M. Pirsig',\n    })),\n    Ensure.that(LastResponse.status(), equals(201)),\n  )\n")),(0,r.yg)("h3",{id:"sending-dynamic-json-data"},"Sending dynamic JSON data"),(0,r.yg)("p",null,"If you need to send data that's determined dynamically as part of the test scenario, use ",(0,r.yg)("a",{parentName:"p",href:"/api/core/class/Question/#fromObject"},(0,r.yg)("inlineCode",{parentName:"a"},"Question.fromObject")),"\nto create a ",(0,r.yg)("a",{parentName:"p",href:"/api/core/class/Question/"},(0,r.yg)("inlineCode",{parentName:"a"},"Question"))," that resolves to a JSON object."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled, Question } from '@serenity-js/core'\nimport { LastResponse, PostRequest, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\nimport { By, Text, PageElement } from '@serenity-js/web'\n\nawait actorCalled('Apisitt')\n  .attemptsTo(\n    Send.a(PostRequest.to('/register').with(\n        Question.fromObject({                                       // Generate a Question<JSONObject>\n          token: Text.of(PageElement.located(By.id('#api-token'))), // with text of an HTML element\n        })\n    ),\n    Ensure.that(LastResponse.status(), equals(201)),\n  )\n")),(0,r.yg)("h3",{id:"sending-form-data"},"Sending form data"),(0,r.yg)("p",null,"To post ",(0,r.yg)("inlineCode",{parentName:"p"},"multipart/form-data"),", use ",(0,r.yg)("a",{parentName:"p",href:"https://axios-http.com/docs/multipart"},(0,r.yg)("inlineCode",{parentName:"a"},"axios.toFormData"))," helper."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled } from '@serenity-js/core'\nimport { LastResponse, PostRequest, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\nimport axios from 'axios'\n\nconst form = axios.toFormData({\n    grant_type: 'password',\n    username:   'alice.smith',\n    password:   'secret',\n})\n\nawait actorCalled('Apisitt')\n  .attemptsTo(\n    Send.a(PostRequest.to('/oauth/token').with(form)),\n    Ensure.that(LastResponse.status(), equals(200)),\n  )\n")),(0,r.yg)("h3",{id:"sending-dynamic-form-data"},"Sending dynamic form data"),(0,r.yg)("p",null,"To post ",(0,r.yg)("inlineCode",{parentName:"p"},"multipart/form-data")," where form data is determined dynamically as part of the test scenario,\ncombine ",(0,r.yg)("a",{parentName:"p",href:"/api/core/class/Question/#fromObject"},(0,r.yg)("inlineCode",{parentName:"a"},"Question.fromObject")),", ",(0,r.yg)("a",{parentName:"p",href:"http://localhost:3000/api/core/class/Question/#as"},(0,r.yg)("inlineCode",{parentName:"a"},"Question.as")),",\nand the ",(0,r.yg)("a",{parentName:"p",href:"https://axios-http.com/docs/multipart"},(0,r.yg)("inlineCode",{parentName:"a"},"axios.toFormData"))," helper."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled, Question } from '@serenity-js/core'\nimport { LastResponse, PostRequest, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\nimport { By, Text, PageElement } from '@serenity-js/web'\n\nimport axios from 'axios'\n\nconst form = Question\n    .fromObject({\n        grant_type: 'password',                                     // Some data can be static\n        username:   'alice.smith',\n        password:   Text.of(PageElement.located(By.id('#totp'))),   // while some can be dynamic\n    })\n    .as(data => axios.toFormData(data))\n\nawait actorCalled('Apisitt')\n  .attemptsTo(\n    Send.a(PostRequest.to('/oauth/token').with(form)),\n    Ensure.that(LastResponse.status(), equals(200)),\n  )\n")))}d.isMDXComponent=!0}}]);