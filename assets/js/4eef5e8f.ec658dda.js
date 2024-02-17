"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[57455],{82247:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(14041);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),y=a,g=p["".concat(u,".").concat(y)]||p[y]||m[y]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},71949:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(14041),a=r(9546);const i={tabItem:"tabItem_OMyP"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,o),hidden:r},t)}},399:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(89575),a=r(14041),i=r(9546),o=r(91963),s=r(33480),u=r(29776);const l={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function c(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.a_)(),y=e=>{const t=e.currentTarget,r=p.indexOf(t),n=c[r].value;n!==s&&(m(t),u(n))},g=e=>{let t=null;switch(e.key){case"Enter":y(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:y},o,{className:(0,i.A)("tabs__item",l.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function p(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function m(e){const t=(0,s.u)(e);return a.createElement("div",{className:(0,i.A)("tabs-container",l.tabList)},a.createElement(c,(0,n.A)({},e,t)),a.createElement(p,(0,n.A)({},e,t)))}function y(e){const t=(0,u.A)();return a.createElement(m,(0,n.A)({key:String(t)},e))}},33480:(e,t,r)=>{r.d(t,{u:()=>m});var n=r(14041),a=r(86090),i=r(25260),o=r(99925),s=r(30559);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function l(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const o=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=l(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[m,y]=p({queryString:r,groupId:a}),[g,d]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,s.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),b=(()=>{const e=m??g;return c({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);u(e),y(e),d(e)}),[y,d,i]),tabValues:i}}},46737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(89575),a=(r(14041),r(82247)),i=r(399),o=r(71949);const s={sidebar_position:1},u="Cucumber",l={unversionedId:"test-runners/cucumber",id:"test-runners/cucumber",title:"Cucumber",description:"Cucumber is a popular",source:"@site/docs/test-runners/cucumber.mdx",sourceDirName:"test-runners",slug:"/test-runners/cucumber",permalink:"/handbook/test-runners/cucumber",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/test-runners/cucumber.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Test Runners",permalink:"/handbook/test-runners/"},next:{title:"Jasmine",permalink:"/handbook/test-runners/jasmine"}},c={},p=[{value:"Examples and Project Templates",id:"examples-and-project-templates",level:2},{value:"Using Serenity/JS reporting services",id:"using-serenityjs-reporting-services",level:2},{value:"Installing Serenity/JS test runner adapter",id:"installing-serenityjs-test-runner-adapter",level:3},{value:"Configuring Serenity/JS",id:"configuring-serenityjs",level:3},{value:"Configuring Cucumber profile",id:"configuring-cucumber-profile",level:3},{value:"Using Serenity/JS Screenplay Pattern APIs",id:"using-serenityjs-screenplay-pattern-apis",level:2},{value:"Configuring a cast of actors",id:"configuring-a-cast-of-actors",level:3},{value:"Referring to actors in test scenarios",id:"referring-to-actors-in-test-scenarios",level:3}],m={toc:p},y="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(y,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cucumber"},"Cucumber"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js"},"Cucumber")," is a popular\n",(0,a.yg)("a",{parentName:"p",href:"https://cucumber.io/blog/collaboration/the-worlds-most-misunderstood-collaboration-tool/"},"collaboration tool"),"\nand a test runner capable of executing test scenarios\nwritten in ",(0,a.yg)("a",{parentName:"p",href:"https://cucumber.io/docs/guides/overview/"},"plain language"),"."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"In this article, you will learn:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"How to use ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/"},"Serenity/JS reporting services"),", including the ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},"Serenity BDD reporter"),", even if your test scenarios don't follow the Screenplay Pattern yet"),(0,a.yg)("li",{parentName:"ul"},"How to implement Cucumber ",(0,a.yg)("a",{parentName:"li",href:"https://cucumber.io/docs/cucumber/step-definitions/?lang=javascript"},"step definitions")," using reusable ",(0,a.yg)("a",{parentName:"li",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," APIs")),(0,a.yg)("h2",{id:"examples-and-project-templates"},"Examples and Project Templates"),(0,a.yg)("p",null,"If you'd like to dive straight into the code,\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js"},"Serenity/JS GitHub repository")," provides:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js?q=cucumber+template&type=all&language=&sort="},"Serenity/JS + Cucumber project templates"),", which are the easiest way to start with the framework"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/tree/main/examples"},"Examples and reference implementations"),", demonstrating using Serenity/JS with Cucumber to write both REST API- and web-based acceptance tests")),(0,a.yg)("h2",{id:"using-serenityjs-reporting-services"},"Using Serenity/JS reporting services"),(0,a.yg)("p",null,"To use ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services")," in a Cucumber project, you need to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"attach the ",(0,a.yg)("a",{parentName:"li",href:"/api/cucumber"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/cucumber"))," test runner adapter to Cucumber"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/core/function/configure"},"configure Serenity/JS")," to use the reporting services you want to use,\nsuch as the ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/console-reporter"},(0,a.yg)("inlineCode",{parentName:"a"},"ConsoleReporter")),"\nor ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},(0,a.yg)("inlineCode",{parentName:"a"},"SerenityBDDReporter")))),(0,a.yg)("admonition",{title:"Serenity/JS test runner adapters",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Serenity/JS test runner adapters turn internal, test runner-specific events\ninto ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/domain-events"},"Serenity/JS domain events")," that can contribute to test execution reports produced\nby ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services"),".")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/api/cucumber"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/cucumber")," module")," provides a set of ",(0,a.yg)("a",{parentName:"p",href:"/handbook/about/architecture"},(0,a.yg)("strong",{parentName:"a"},"test runner adapters")),"\nyou can attach to ",(0,a.yg)("em",{parentName:"p"},(0,a.yg)("strong",{parentName:"em"},"any version"))," of Cucumber test runner.\nThe module detects the version of Cucumber you're using and picks the most appropriate adapter automatically."),(0,a.yg)("p",null,"Integration architecture depicted below applies to invoking ",(0,a.yg)("inlineCode",{parentName:"p"},"cucumber-js")," command line interface directly,\nfor example for ",(0,a.yg)("strong",{parentName:"p"},"domain-level"),", ",(0,a.yg)("a",{parentName:"p",href:"/handbook/api-testing/"},(0,a.yg)("strong",{parentName:"a"},"REST/HTTP API-level")),",\nor ",(0,a.yg)("a",{parentName:"p",href:"/handbook/web-testing/"},(0,a.yg)("strong",{parentName:"a"},"web-based testing"))," using ",(0,a.yg)("a",{parentName:"p",href:"/api/playwright"},"Playwright"),"."),(0,a.yg)("p",null,"If you want your Cucumber scenarios to interact with ",(0,a.yg)("strong",{parentName:"p"},"web interfaces")," using ",(0,a.yg)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/"},"Selenium Webdriver protocol"),",\nor connect them to a ",(0,a.yg)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/grid/"},"Selenium Grid"),",\nyou should use Cucumber via ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/protractor"},"Protractor"),"\nor ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/webdriverio"},"WebdriverIO")," instead."),(0,a.yg)("figure",null,(0,a.yg)("mermaid",{value:'graph TB\n    DEV(["\ud83d\udcbb Developer"])\n    TR(["@cucumber/cucumber"])\n    SC(["@serenity-js/core"])\n    TRA(["@serenity-js/cucumber"])\n    CF["serenity.config.ts"]\n    R(["Serenity/JS reporting services"])\n    DEV -- invokes --\x3e TR\n    TR -- loads --\x3e CF\n    TR -- notifies --\x3e TRA\n    TRA -- notifies --\x3e SC\n    CF -- configures --\x3e SC\n    SC -- notifies --\x3e R\n\n    click R "/handbook/reporting"\n    click SC "/api/core"\n    click TRA "/api/cucumber"'}),(0,a.yg)("figcaption",null,"Serenity/JS + Cucumber integration architecture")),(0,a.yg)("h3",{id:"installing-serenityjs-test-runner-adapter"},"Installing Serenity/JS test runner adapter"),(0,a.yg)("p",null,"Assuming you already have a ",(0,a.yg)("a",{parentName:"p",href:"/handbook/getting-started/installation/#creating-a-nodejs-project"},"Node.js project"),"\nand ",(0,a.yg)("a",{parentName:"p",href:"/handbook/getting-started/installation/"},"Serenity/JS runtime dependencies")," set up,\nadd the following Node modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/core"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/cucumber"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/cucumber"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/@cucumber/cucumber"},(0,a.yg)("inlineCode",{parentName:"a"},"@cucumber/cucumber")))),(0,a.yg)("p",null,"To do that, run the following command in your terminal:"),(0,a.yg)(i.A,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.yg)(o.A,{value:"npm",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @serenity-js/core @serenity-js/cucumber @cucumber/cucumber\n"))),(0,a.yg)(o.A,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev @serenity-js/core @serenity-js/cucumber @cucumber/cucumber\n")))),(0,a.yg)("p",null,"If you'd like to implement your test suite in TypeScript, also run:"),(0,a.yg)(i.A,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.yg)(o.A,{value:"npm",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev typescript ts-node @types/node\n"))),(0,a.yg)(o.A,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev typescript ts-node @types/node\n")))),(0,a.yg)("h3",{id:"configuring-serenityjs"},"Configuring Serenity/JS"),(0,a.yg)("p",null,"If you intend to run your Cucumber scenarios using the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js/blob/main/docs/cli.md"},"Cucumber CLI"),",\nthe best way to configure Serenity/JS is to invoke the Serenity/JS ",(0,a.yg)("a",{parentName:"p",href:"/api/core/function/configure"},(0,a.yg)("inlineCode",{parentName:"a"},"configure"))," function\nin the Cucumber ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/hooks.md#beforeall--afterall"},(0,a.yg)("inlineCode",{parentName:"a"},"BeforeAll")," hook"),":"),(0,a.yg)(i.A,{groupId:"code-examples",mdxType:"Tabs"},(0,a.yg)(o.A,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="features/support/serenity.config.ts" tab={"label":"TypeScript"}',title:'"features/support/serenity.config.ts"',tab:'{"label":"TypeScript"}'},"import { BeforeAll } from '@cucumber/cucumber'\nimport { configure } from '@serenity-js/core'\n\nBeforeAll(() => {\n\n    // Configure Serenity/JS\n    configure({\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            // ... any other reporting services\n        ],\n    })\n})\n"))),(0,a.yg)(o.A,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="features/support/serenity.config.js" tab={"label":"JavaScript"}',title:'"features/support/serenity.config.js"',tab:'{"label":"JavaScript"}'},"const { BeforeAll } = require('@cucumber/cucumber')\nconst { configure } = require('@serenity-js/core')\n\nBeforeAll(() => {\n\n    // Configure Serenity/JS\n    configure({\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            // ... any other reporting services\n        ],\n    })\n})\n")))),(0,a.yg)("p",null,"To learn more about installing and configuring Serenity/JS reporting services appropriate for your project,\nfollow the ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting guide"),"."),(0,a.yg)("admonition",{title:"Serenity understands Cucumber",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Serenity understands the structure of your Cucumber ",(0,a.yg)("inlineCode",{parentName:"p"},".feature")," files and will augment your test execution reports\nwith feature and scenario descriptions, detailed information about Cucumber steps, and ",(0,a.yg)("a",{parentName:"p",href:"https://serenity-bdd.github.io/docs/reporting/the_serenity_reports"},"much more"),"!")),(0,a.yg)("h3",{id:"configuring-cucumber-profile"},"Configuring Cucumber profile"),(0,a.yg)("p",null,"To make sure Cucumber loads your Serenity/JS configuration file and correctly interprets TypeScript (if you're using it),\ncreate a ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js/blob/main/docs/profiles.md"},(0,a.yg)("inlineCode",{parentName:"a"},"cucumber.js")," profile"),":"),(0,a.yg)(i.A,{groupId:"code-examples",mdxType:"Tabs"},(0,a.yg)(o.A,{value:"typescript",label:"TypeScript",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="cucumber.js" tab={"label":"TypeScript"}',title:'"cucumber.js"',tab:'{"label":"TypeScript"}'},"/**\n * This is a Cucumber.js profile\n * @see https://github.com/cucumber/cucumber-js/blob/main/docs/profiles.md\n *\n * @type {{default: string}}\n */\nmodule.exports = {\n    default: [\n        `--publish-quiet`,\n        `--require-module 'ts-node/register'`,      // use TypeScript in-memory transpiler, ts-node\n        `--format '@serenity-js/cucumber'`,         // attach Serenity/JS Cucumber adapter\n        `--require './features/**/*.steps.ts'`,     // load step definition libraries\n        `--require './features/**/*.config.ts'`     // load configuration files\n    ].join(' ')\n}\n"))),(0,a.yg)(o.A,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript",metastring:'title="cucumber.js" tab={"label":"JavaScript"}',title:'"cucumber.js"',tab:'{"label":"JavaScript"}'},"/**\n * This is a Cucumber.js profile\n * @see https://github.com/cucumber/cucumber-js/blob/main/docs/profiles.md\n *\n * @type {{default: string}}\n */\nmodule.exports = {\n    default: [\n        `--publish-quiet`,\n        `--format '@serenity-js/cucumber'`,         // attach Serenity/JS Cucumber adapter\n        `--require './features/**/*.steps.js'`,     // load step definition libraries\n        `--require './features/**/*.config.js'`     // load configuration files\n    ].join(' ')\n}\n")))),(0,a.yg)("p",null,"The above configuration works with the latest version of the ",(0,a.yg)("inlineCode",{parentName:"p"},"cucumber.Cli")," available as part of\nthe ",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/@cucumber/cucumber"},(0,a.yg)("inlineCode",{parentName:"a"},"@cucumber/cucumber"))," module.\nConsult the ",(0,a.yg)("a",{parentName:"p",href:"/api/cucumber"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/cucumber")," documentation")," to learn how to configure\nthe adapter with older versions of the runner."),(0,a.yg)("h2",{id:"using-serenityjs-screenplay-pattern-apis"},"Using Serenity/JS Screenplay Pattern APIs"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Actor"},"Serenity/JS actor model")," is a natural fit for Cucumber scenarios\nand ",(0,a.yg)("a",{parentName:"p",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," APIs can help your team implement\nCucumber step definitions that are as easy to read and understand as your ",(0,a.yg)("inlineCode",{parentName:"p"},".feature")," files."),(0,a.yg)("p",null,"The fastest way to get started with Serenity/JS and Cucumber is to use one of\nthe ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js?q=cucumber+template&type=all&language=&sort="},"Serenity/JS + Cucumber project templates"),".\nHowever, if you're adding Serenity/JS to an existing project or simply want to understand how the integration works,\nthis guide is for you."),(0,a.yg)("h3",{id:"configuring-a-cast-of-actors"},"Configuring a cast of actors"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," is an actor-centred model, so the first thing you\nneed to do is to tell Serenity/JS what ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Cast"},"cast of actors")," you want to use."),(0,a.yg)("p",null,"If you're planning to run Cucumber scenarios using the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js/blob/main/docs/cli.md"},"Cucumber CLI")," ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"directly")),",\nyou can configure the actors in a ",(0,a.yg)("a",{parentName:"p",href:"https://cucumber.io/docs/cucumber/api/?lang=javascript#beforeall"},(0,a.yg)("inlineCode",{parentName:"a"},"BeforeAll"))," hook, for example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="features/support/serenity.config.ts"',title:'"features/support/serenity.config.ts"'},"import { BeforeAll, AfterAll } from '@cucumber/cucumber'\nimport { configure, Cast } from '@serenity-js/core'\nimport { BrowseTheWebWithPlaywright } from '@serenity-js/playwright'\n\nimport * as playwright from 'playwright'\n\nlet browser: playwright.Browser;\n\nBeforeAll(async () => {\n\n    // Launch the browser once before all the tests\n    // Serenity/JS will take care of managing Playwright browser context and browser tabs.\n    browser = await playwright.chromium.launch({\n        headless: true,\n    });\n\n    // Configure Serenity/JS\n    configure({\n        actors: Cast.where(actor =>\n            actor.whoCan(BrowseTheWebWithPlaywright.using(browser, {\n                baseURL: 'https://todo-app.serenity-js.org/',\n            }))\n        ),\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            // ... any other reporting services\n        ],\n    })\n})\n\nAfterAll(async () => {\n    // Close the browser after all the tests are finished\n    await browser?.close()\n})\n")),(0,a.yg)("p",null,"Consult the respective test runner instructions if you're invoking Cucumber ",(0,a.yg)("em",{parentName:"p"},(0,a.yg)("strong",{parentName:"em"},"indirectly")),",\nso via ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/protractor"},"Protractor")," or ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/webdriverio"},"WebdriverIO"),"."),(0,a.yg)("h3",{id:"referring-to-actors-in-test-scenarios"},"Referring to actors in test scenarios"),(0,a.yg)("p",null,"When using ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Actor"},"Serenity/JS actors")," to represent user personas or important external systems\ninteracting with the system under test, a common strategy is to refer to them in your Cucumber scenarios using their name and pronouns :"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-gherkin",metastring:'title="features/todo_list.feature"',title:'"features/todo_list.feature"'},"Feature: Todo list\n\n  Scenario: Starting fresh\n\n    When Alice opens the todo app for the first time\n    Then her todo list should be empty\n")),(0,a.yg)("p",null,"To make Cucumber understand that ",(0,a.yg)("inlineCode",{parentName:"p"},"Alice")," is a name of an actor, and that ",(0,a.yg)("inlineCode",{parentName:"p"},"her")," means the most recent actor we accessed,\nyou need to define custom ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-expressions"},"parameter types"),"."),(0,a.yg)("p",null,"All the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js?q=cucumber+template&type=all&language=&sort="},"Serenity/JS + Cucumber Project Templates"),"\nuse the below definitions, which use ",(0,a.yg)("a",{parentName:"p",href:"/api/core/function/actorCalled"},(0,a.yg)("inlineCode",{parentName:"a"},"actorCalled"))," and ",(0,a.yg)("a",{parentName:"p",href:"/api/core/function/actorInTheSpotlight"},(0,a.yg)("inlineCode",{parentName:"a"},"actorInTheSpotlight")),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="features/step_definitions/parameter.steps.ts"',title:'"features/step_definitions/parameter.steps.ts"'},"import { defineParameterType } from '@cucumber/cucumber'\nimport { actorCalled, actorInTheSpotlight } from '@serenity-js/core'\n\ndefineParameterType({\n    regexp: /[A-Z][a-z]+/,\n    transformer(name: string) {\n        return actorCalled(name)\n    },\n    name: 'actor',\n})\n\ndefineParameterType({\n    regexp: /he|she|they|his|her|their/,\n    transformer() {\n        return actorInTheSpotlight()\n    },\n    name: 'pronoun',\n})\n")),(0,a.yg)("p",null,"With ",(0,a.yg)("inlineCode",{parentName:"p"},"actor")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"pronoun")," parameter types defined,\nyou can refer to them in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js?q=cucumber&type=all&language=&sort="},"Cucumber expressions"),"\ndescribing your ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/step_definitions.md"},"Cucumber steps definitions"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="features/step_definitions/todo-list.steps.ts"',title:'"features/step_definitions/todo-list.steps.ts"'},"import { When, Then } from '@cucumber/cucumber'\nimport { Ensure, equals } from '@serenity-js/assertions'\nimport { Actor } from '@serenity-js/core'\nimport { Navigate, PageElements, By } from '@serenity-js/web'\n\nWhen('{actor} opens the todo app for the first time', async (actor: Actor) => {\n    await actor.attemptsTo(\n        Navigate.to('https://todo-app.serenity-js.org/')\n    )\n})\n\nThen('{pronoun} todo list should be empty', async (actor: Actor) => {\n    const displayedItems = () =>\n        PageElements.located(By.css('.todo-list li'))\n            .describedAs('displayed items')\n\n    await actor.attemptsTo(\n        Ensure.that(displayedItems().count(), equals(0))\n    )\n})\n")))}g.isMDXComponent=!0}}]);