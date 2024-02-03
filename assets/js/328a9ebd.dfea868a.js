"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[74348],{43636:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>m});var r=n(85668);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||y[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5508:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(85668),a=n(71076);const o={tabItem:"tabItem_OMyP"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.c)(o.tabItem,i),hidden:n},t)}},80188:(e,t,n)=>{n.d(t,{c:()=>g});var r=n(15307),a=n(85668),o=n(71076),i=n(86512),s=n(9920),l=n(78136);const c={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function p(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:y}=(0,i.MV)(),g=e=>{const t=e.currentTarget,n=u.indexOf(t),r=p[n].value;r!==s&&(y(t),l(r))},m=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.c)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.c)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:g},i,{className:(0,o.c)("tabs__item",c.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function u(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=(0,s.a)(e);return a.createElement("div",{className:(0,o.c)("tabs-container",c.tabList)},a.createElement(p,(0,r.c)({},e,t)),a.createElement(u,(0,r.c)({},e,t)))}function g(e){const t=(0,l.c)();return a.createElement(y,(0,r.c)({key:String(t)},e))}},9920:(e,t,n)=>{n.d(t,{a:()=>y});var r=n(85668),a=n(27672),o=n(12936),i=n(65512),s=n(13264);function l(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??l(n);return function(e){const t=(0,i.w)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.Uz)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._M)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[y,g]=u({queryString:n,groupId:a}),[m,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.IN)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=y??m;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),g(e),d(e)}),[g,d,o]),tabValues:o}}},15252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(15307),a=(n(85668),n(43636)),o=n(80188),i=n(5508);const s={sidebar_position:3},l="Mocha",c={unversionedId:"test-runners/mocha",id:"test-runners/mocha",title:"Mocha",description:"Mocha.js is a universal test runner providing a number of useful features,",source:"@site/docs/test-runners/mocha.mdx",sourceDirName:"test-runners",slug:"/test-runners/mocha",permalink:"/handbook/test-runners/mocha",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/test-runners/mocha.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Jasmine",permalink:"/handbook/test-runners/jasmine"},next:{title:"Playwright Test",permalink:"/handbook/test-runners/playwright-test"}},p={},u=[{value:"Examples and Project Templates",id:"examples-and-project-templates",level:2},{value:"Using Serenity/JS reporting services",id:"using-serenityjs-reporting-services",level:2},{value:"Installing Serenity/JS test runner adapter",id:"installing-serenityjs-test-runner-adapter",level:3},{value:"Configuring Serenity/JS",id:"configuring-serenityjs",level:3},{value:"Configuring Mocha",id:"configuring-mocha",level:3},{value:"Defining Mocha test scenarios",id:"defining-mocha-test-scenarios",level:3},{value:"Using Serenity/JS Screenplay Pattern APIs",id:"using-serenityjs-screenplay-pattern-apis",level:2},{value:"Configuring a cast of actors",id:"configuring-a-cast-of-actors",level:3},{value:"Referring to actors in test scenarios",id:"referring-to-actors-in-test-scenarios",level:3}],y={toc:u},g="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.c)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"mocha"},"Mocha"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha.js")," is a universal test runner providing a number of useful features,\nsuch as ",(0,a.yg)("a",{parentName:"p",href:"/api/mocha-adapter/interface/MochaConfig"},"automatic retry of failed tests"),".\nIf your project already uses Mocha to run its unit tests, you can use the same runner for your acceptance tests too."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"In this article, you will learn:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"how to use ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/"},"Serenity/JS reporting services"),", including the ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},"Serenity BDD reporter"),", even if your test scenarios don't follow the Screenplay Pattern yet"),(0,a.yg)("li",{parentName:"ul"},"how to implement Mocha test scenarios using reusable ",(0,a.yg)("a",{parentName:"li",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," APIs")),(0,a.yg)("h2",{id:"examples-and-project-templates"},"Examples and Project Templates"),(0,a.yg)("p",null,"If you'd like to dive straight into the code, ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js"},"Serenity/JS GitHub repository")," provides:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js?q=mocha+template&type=all&language=&sort="},"Serenity/JS + Mocha project templates"),", which are the easiest way to start with the framework,"),(0,a.yg)("li",{parentName:"ul"},"several ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/tree/main/examples"},"reference implementations"),", demonstrating using Serenity/JS with Mocha to write both REST API- and web-based acceptance tests")),(0,a.yg)("h2",{id:"using-serenityjs-reporting-services"},"Using Serenity/JS reporting services"),(0,a.yg)("p",null,"To use ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services")," in a Mocha project, you need to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"attach the ",(0,a.yg)("a",{parentName:"li",href:"/api/mocha"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/mocha"))," test runner adapter to Mocha"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/core/function/configure"},"configure Serenity/JS")," to use the reporting services you want to use,\nsuch as the ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/console-reporter"},(0,a.yg)("inlineCode",{parentName:"a"},"ConsoleReporter")),"\nor ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},(0,a.yg)("inlineCode",{parentName:"a"},"SerenityBDDReporter")))),(0,a.yg)("admonition",{title:"Serenity/JS test runner adapters",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Serenity/JS test runner adapters turn internal, test runner-specific events\ninto ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/domain-events"},"Serenity/JS domain events")," that can contribute to test execution reports produced\nby ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services"),".")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/api/mocha"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/mocha")," module")," provides a ",(0,a.yg)("a",{parentName:"p",href:"/handbook/about/architecture"},(0,a.yg)("strong",{parentName:"a"},"test runner adapter")),"\nyou can attach to your Mocha test runner."),(0,a.yg)("p",null,"Integration architecture described in this section applies to invoking\n",(0,a.yg)("inlineCode",{parentName:"p"},"mocha")," command line interface directly, for example for ",(0,a.yg)("strong",{parentName:"p"},"domain-level"),",\n",(0,a.yg)("a",{parentName:"p",href:"/handbook/api-testing/"},(0,a.yg)("strong",{parentName:"a"},"REST/HTTP API-level")),", or ",(0,a.yg)("a",{parentName:"p",href:"/handbook/web-testing/"},(0,a.yg)("strong",{parentName:"a"},"web-based testing")),"\nusing ",(0,a.yg)("a",{parentName:"p",href:"/api/playwright"},"Playwright"),"."),(0,a.yg)("p",null,"If you want your Mocha scenarios to interact with ",(0,a.yg)("strong",{parentName:"p"},"web interfaces")," using ",(0,a.yg)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/"},"Selenium Webdriver protocol"),",\nor connect them to a ",(0,a.yg)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/grid/"},"Selenium Grid"),",\nyou should do so via ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/protractor"},"Protractor"),"\nor ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/webdriverio"},"WebdriverIO")," instead."),(0,a.yg)("figure",null,(0,a.yg)("mermaid",{value:'graph TB\n    DEV(["\ud83d\udcbb Developer"])\n    TR(["mocha"])\n    SC(["@serenity-js/core"])\n    TRA(["@serenity-js/mocha"])\n    CF["config.ts"]\n    R(["Serenity/JS reporting services"])\n    DEV -- invokes --\x3e TR\n    TR -- loads --\x3e CF\n    TR -- notifies --\x3e TRA\n    TRA -- notifies --\x3e SC\n    CF -- configures --\x3e SC\n    SC -- notifies --\x3e R\n\n    click R "/handbook/reporting"\n    click SC "/api/core"\n    click TRA "/api/mocha"'}),(0,a.yg)("figcaption",null,"Serenity/JS + Mocha integration architecture")),(0,a.yg)("h3",{id:"installing-serenityjs-test-runner-adapter"},"Installing Serenity/JS test runner adapter"),(0,a.yg)("p",null,"Assuming you already have a ",(0,a.yg)("a",{parentName:"p",href:"/handbook/getting-started/installation/#creating-a-nodejs-project"},"Node.js project"),"\nand ",(0,a.yg)("a",{parentName:"p",href:"/handbook/getting-started/installation/"},"Serenity/JS runtime dependencies")," set up,\nadd the following Node modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/core"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/mocha"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/mocha"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/mocha"},(0,a.yg)("inlineCode",{parentName:"a"},"mocha")))),(0,a.yg)("p",null,"To do that, run the following command in your terminal:"),(0,a.yg)(o.c,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.yg)(i.c,{value:"npm",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @serenity-js/core @serenity-js/mocha mocha\n"))),(0,a.yg)(i.c,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev @serenity-js/core @serenity-js/mocha mocha\n")))),(0,a.yg)("p",null,"If you'd like to implement your test suite in TypeScript, also run:"),(0,a.yg)(o.c,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.yg)(i.c,{value:"npm",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev typescript ts-node @types/mocha @types/node\n"))),(0,a.yg)(i.c,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev typescript ts-node @types/mocha @types/node\n")))),(0,a.yg)("h3",{id:"configuring-serenityjs"},"Configuring Serenity/JS"),(0,a.yg)("p",null,"If you intend to run your Mocha scenarios using the ",(0,a.yg)("a",{parentName:"p",href:"https://mochajs.org/#command-line-usage"},"Mocha CLI"),",\nthe best way to configure Serenity/JS is to invoke the Serenity/JS ",(0,a.yg)("a",{parentName:"p",href:"/api/core/function/configure"},(0,a.yg)("inlineCode",{parentName:"a"},"configure"))," function\nin a ",(0,a.yg)("a",{parentName:"p",href:"https://mochajs.org/#available-root-hooks"},(0,a.yg)("inlineCode",{parentName:"a"},"beforeAll")," hook"),",\ndefined in a Mocha support file ",(0,a.yg)("a",{parentName:"p",href:"https://mochajs.org/#-require-module-r-module"},(0,a.yg)("inlineCode",{parentName:"a"},"required")," upon test execution"),":"),(0,a.yg)(o.c,{groupId:"code-examples",mdxType:"Tabs"},(0,a.yg)(i.c,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="spec/support/serenity.config.ts" tab',title:'"spec/support/serenity.config.ts"',tab:!0},"import 'mocha'\n\nimport { configure } from '@serenity-js/core'\n\nbeforeAll(async () => {\n    // Configure Serenity/JS\n    configure({\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            // ... any other reporting services\n        ],\n    })\n})\n"))),(0,a.yg)(i.c,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="spec/support/serenity.config.js" tab',title:'"spec/support/serenity.config.js"',tab:!0},"const { configure } = require('@serenity-js/core')\n\nbeforeAll(async () => {\n    // Configure Serenity/JS\n    configure({\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            // ... any other reporting services\n        ],\n    })\n})\n")))),(0,a.yg)("p",null,"To learn more about installing and configuring Serenity/JS reporting services appropriate for your project,\nfollow the ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting guide"),"."),(0,a.yg)("h3",{id:"configuring-mocha"},"Configuring Mocha"),(0,a.yg)("p",null,"To make sure Mocha loads your Serenity/JS configuration file and correctly interprets TypeScript (if you're using it),\ncreate one of the supported ",(0,a.yg)("a",{parentName:"p",href:"https://mochajs.org/#configuring-mocha-nodejs"},"Mocha configuration files")," in your project\nroot directory, e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},".mocharc.yml"),":"),(0,a.yg)(o.c,{groupId:"code-examples",mdxType:"Tabs"},(0,a.yg)(i.c,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".mocharc.yml" tab={"label":"TypeScript"}',title:'".mocharc.yml"',tab:'{"label":"TypeScript"}'},"check-leaks: false\nfull-trace: true\nreporter: '@serenity-js/mocha'\nrequire:\n  - ts-node/register\n  - spec/support/serenity.config.ts\nspec: 'spec/**/*.spec.ts'\ntimeout: 5000\nv8-stack-trace-limit: 100\n"))),(0,a.yg)(i.c,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".mocharc.yml" tab={"label":"JavaScript"}',title:'".mocharc.yml"',tab:'{"label":"JavaScript"}'},"check-leaks: false\nfull-trace: true\nreporter: '@serenity-js/mocha'\nrequire:\n  - spec/support/serenity.config.js\nspec: 'spec/**/*.spec.js'\ntimeout: 5000\nv8-stack-trace-limit: 100\n")))),(0,a.yg)("h3",{id:"defining-mocha-test-scenarios"},"Defining Mocha test scenarios"),(0,a.yg)("p",null,"When Serenity/JS reports on Mocha test scenarios, it assumes you're following a common convention\nwhere the outermost ",(0,a.yg)("a",{parentName:"p",href:"https://mochajs.org/#bdd"},(0,a.yg)("inlineCode",{parentName:"a"},"describe")," block")," describes the name of the feature or component under test,\nand any nested ",(0,a.yg)("inlineCode",{parentName:"p"},"describe")," blocks contribute to the name of the test scenario."),(0,a.yg)("p",null,"For example, Serenity/JS will report the below scenario as:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"feature: ",(0,a.yg)("inlineCode",{parentName:"li"},"Todo List App")),(0,a.yg)("li",{parentName:"ul"},"scenario: ",(0,a.yg)("inlineCode",{parentName:"li"},"when the user is a guest their list is empty"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript"},"import 'mocha'\n\ndescribe('Todo List App', () => {               // - feature or component name\n\n    describe('when the user is', () => {        // - one or more nested `describe` blocks\n        describe('a guest', () => {             //   to group scenarios\n            describe('their list', () => {      //   by context in which they apply\n\n                it('is empty', async () => {    // - expected behaviour of the feature or component\n\n                })\n            })\n        })\n    })\n})\n")),(0,a.yg)("admonition",{title:"Feature coverage",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Using the same name for the outermost ",(0,a.yg)("inlineCode",{parentName:"p"},"describe"),' block in several different spec files makes\nSerenity BDD associate the different test scenarios with the same logical "feature" or "component"\nand produce ',(0,a.yg)("a",{parentName:"p",href:"https://serenity-bdd.github.io/docs/reporting/the_serenity_reports"},"feature coverage metrics"),".")),(0,a.yg)("h2",{id:"using-serenityjs-screenplay-pattern-apis"},"Using Serenity/JS Screenplay Pattern APIs"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Actor"},"Serenity/JS actor model")," works great with Mocha\nand ",(0,a.yg)("a",{parentName:"p",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," APIs can help your team implement\nMocha test scenarios that are easy to read and understand."),(0,a.yg)("p",null,"The fastest way to get started with Serenity/JS and Mocha is to use one of\nthe ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js?q=mocha+template&type=all&language=&sort="},"Serenity/JS + Mocha project templates"),".\nHowever, if you're adding Serenity/JS to an existing project or simply want to understand how the integration works,\nthis guide is for you."),(0,a.yg)("h3",{id:"configuring-a-cast-of-actors"},"Configuring a cast of actors"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," is an actor-centred model, so the first thing you\nneed to do is to tell Serenity/JS what ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Cast"},"cast of actors")," you want to use."),(0,a.yg)("p",null,"If you're planning to run Mocha scenarios using the ",(0,a.yg)("a",{parentName:"p",href:"https://mochajs.org/#command-line-usage"},"Mocha CLI")," ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"directly")),",\nyou can configure the actors in a ",(0,a.yg)("a",{parentName:"p",href:"https://mochajs.org/#available-root-hooks"},(0,a.yg)("inlineCode",{parentName:"a"},"beforeAll"))," hook, for example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="spec/support/serenity.config.ts"',title:'"spec/support/serenity.config.ts"'},"import 'mocha'\n\nimport { configure, Cast } from '@serenity-js/core'\nimport { BrowseTheWebWithPlaywright } from '@serenity-js/playwright'\n\nimport * as playwright from 'playwright'\n\nlet browser: playwright.Browser;\n\nbeforeAll(async () => {\n\n    // Launch the browser once before all the tests\n    // Serenity/JS will take care of managing Playwright browser context and browser tabs.\n    browser = await playwright.chromium.launch({\n        headless: true,\n    });\n\n    // Configure Serenity/JS\n    configure({\n        actors: Cast.where(actor =>\n            actor.whoCan(BrowseTheWebWithPlaywright.using(browser, {\n                baseURL: 'https://todo-app.serenity-js.org/',\n            }))\n        ),\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            // ... any other reporting services\n        ],\n    })\n})\n\nafterAll(async () => {\n    // Close the browser after all the tests are finished\n    await browser?.close()\n})\n")),(0,a.yg)("p",null,"Consult the respective test runner instructions if you're invoking Mocha ",(0,a.yg)("em",{parentName:"p"},(0,a.yg)("strong",{parentName:"em"},"indirectly")),",\nso via ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/protractor"},"Protractor")," or ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/webdriverio"},"WebdriverIO"),"."),(0,a.yg)("h3",{id:"referring-to-actors-in-test-scenarios"},"Referring to actors in test scenarios"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Actor"},"Serenity/JS actors")," are often used to represent user personas or important external systems\ninteracting with the system under test. In those scenarios, a common strategy is to give actors names indicating their persona,\nand refer to them in your test scenarios using functions ",(0,a.yg)("a",{parentName:"p",href:"/api/core/function/actorCalled"},(0,a.yg)("inlineCode",{parentName:"a"},"actorCalled")),"\nand ",(0,a.yg)("a",{parentName:"p",href:"/api/core/function/actorInTheSpotlight"},(0,a.yg)("inlineCode",{parentName:"a"},"actorInTheSpotlight")),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="spec/todo-list.spec.ts"',title:'"spec/todo-list.spec.ts"'},"import 'mocha'\n\nimport { Ensure, equals } from '@serenity-js/assertions'\nimport { actorCalled } from '@serenity-js/core'\nimport { Navigate, PageElements, By } from '@serenity-js/web'\n\ndescribe('Todo List App', () => {\n\n    const displayedItems = () =>\n        PageElements.located(By.css('.todo-list li'))\n            .describedAs('displayed items')\n\n    describe('when the user is', () => {\n        describe('a guest', () => {\n            describe('their list', () => {\n\n                it('is empty', async () => {\n                    await actorCalled('Alice').attemptsTo(\n                        Navigate.to('https://todo-app.serenity-js.org/'),\n                        Ensure.that(displayedItems().count(), equals(0))\n                    )\n                })\n            })\n        })\n    })\n})\n")))}m.isMDXComponent=!0}}]);