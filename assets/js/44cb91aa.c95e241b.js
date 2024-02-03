"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[94592],{43636:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>y});var r=t(85668);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,y=u["".concat(l,".").concat(m)]||u[m]||g[m]||i;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5508:(e,n,t)=>{t.d(n,{c:()=>s});var r=t(85668),a=t(71076);const i={tabItem:"tabItem_OMyP"};function s(e){let{children:n,hidden:t,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.c)(i.tabItem,s),hidden:t},n)}},80188:(e,n,t)=>{t.d(n,{c:()=>m});var r=t(15307),a=t(85668),i=t(71076),s=t(86512),o=t(9920),l=t(78136);const p={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function c(e){let{className:n,block:t,selectedValue:o,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:g}=(0,s.MV)(),m=e=>{const n=e.currentTarget,t=u.indexOf(n),r=c[t].value;r!==o&&(g(n),l(r))},y=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.c)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:s}=e;return a.createElement("li",(0,r.c)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>u.push(e),onKeyDown:y,onClick:m},s,{className:(0,i.c)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":o===n})}),t??n)})))}function u(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function g(e){const n=(0,o.a)(e);return a.createElement("div",{className:(0,i.c)("tabs-container",p.tabList)},a.createElement(c,(0,r.c)({},e,n)),a.createElement(u,(0,r.c)({},e,n)))}function m(e){const n=(0,l.c)();return a.createElement(g,(0,r.c)({key:String(n)},e))}},9920:(e,n,t)=>{t.d(n,{a:()=>g});var r=t(85668),a=t(27672),i=t(12936),s=t(65512),o=t(13264);function l(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??l(t);return function(e){const n=(0,s.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function c(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.Uz)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._M)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[g,m]=u({queryString:t,groupId:a}),[y,d]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,o.IN)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),h=(()=>{const e=g??y;return c({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),d(e)}),[m,d,i]),tabValues:i}}},63280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=t(15307),a=(t(85668),t(43636)),i=t(80188),s=t(5508);const o={sidebar_position:2},l="Jasmine",p={unversionedId:"test-runners/jasmine",id:"test-runners/jasmine",title:"Jasmine",description:"Jasmine is a universal test runner,",source:"@site/docs/test-runners/jasmine.mdx",sourceDirName:"test-runners",slug:"/test-runners/jasmine",permalink:"/handbook/test-runners/jasmine",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/test-runners/jasmine.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Cucumber",permalink:"/handbook/test-runners/cucumber"},next:{title:"Mocha",permalink:"/handbook/test-runners/mocha"}},c={},u=[{value:"Examples and Project Templates",id:"examples-and-project-templates",level:2},{value:"Using Serenity/JS reporting services",id:"using-serenityjs-reporting-services",level:2},{value:"Installing Serenity/JS test runner adapter",id:"installing-serenityjs-test-runner-adapter",level:3},{value:"Configuring Serenity/JS",id:"configuring-serenityjs",level:3},{value:"Configuring Jasmine",id:"configuring-jasmine",level:3},{value:"Defining Jasmine test scenarios",id:"defining-jasmine-test-scenarios",level:3},{value:"Attaching Serenity/JS test runner adapter",id:"attaching-serenityjs-test-runner-adapter",level:3},{value:"Using Serenity/JS Screenplay Pattern APIs",id:"using-serenityjs-screenplay-pattern-apis",level:2},{value:"Configuring a cast of actors",id:"configuring-a-cast-of-actors",level:3},{value:"Referring to actors in test scenarios",id:"referring-to-actors-in-test-scenarios",level:3}],g={toc:u},m="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.c)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"jasmine"},"Jasmine"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://jasmine.github.io/"},"Jasmine")," is a universal test runner,\nparticularly popular with projects based on ",(0,a.yg)("a",{parentName:"p",href:"https://angular.io/"},"Angular")," framework.\nIf your project already uses Jasmine to run its unit tests,\nyou can use the same runner for your acceptance tests too."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"In this article, you will learn:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"How to use ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/"},"Serenity/JS reporting services"),", including the ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},"Serenity BDD reporter"),", even if your test scenarios don't follow the Screenplay Pattern yet"),(0,a.yg)("li",{parentName:"ul"},"How to implement Jasmine test scenarios using reusable ",(0,a.yg)("a",{parentName:"li",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," APIs")),(0,a.yg)("h2",{id:"examples-and-project-templates"},"Examples and Project Templates"),(0,a.yg)("p",null,"If you'd like to dive straight into the code, ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js"},"Serenity/JS GitHub repository")," provides:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js?q=jasmine+template&type=all&language=&sort="},"Serenity/JS + Jasmine project templates"),", which are the easiest way to start with the framework,"),(0,a.yg)("li",{parentName:"ul"},"several ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/tree/main/examples"},"reference implementations"),", demonstrating using Serenity/JS with Jasmine to write both REST API- and web-based acceptance tests")),(0,a.yg)("h2",{id:"using-serenityjs-reporting-services"},"Using Serenity/JS reporting services"),(0,a.yg)("p",null,"To use ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services")," in a Jasmine project, you need to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"attach the ",(0,a.yg)("a",{parentName:"li",href:"/api/jasmine"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/jasmine"))," test runner adapter to Jasmine"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/core/function/configure"},"configure Serenity/JS")," to use the reporting services you want to use,\nsuch as the ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/console-reporter"},(0,a.yg)("inlineCode",{parentName:"a"},"ConsoleReporter")),"\nor ",(0,a.yg)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},(0,a.yg)("inlineCode",{parentName:"a"},"SerenityBDDReporter")))),(0,a.yg)("admonition",{title:"Serenity/JS test runner adapters",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Serenity/JS test runner adapters turn internal, test runner-specific events\ninto ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/domain-events"},"Serenity/JS domain events")," that can contribute to test execution reports produced\nby ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services"),".")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/api/jasmine"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/jasmine")," module")," provides a ",(0,a.yg)("a",{parentName:"p",href:"/handbook/about/architecture"},(0,a.yg)("strong",{parentName:"a"},"test runner adapter")),"\nyou can attach to your Jasmine test runner."),(0,a.yg)("p",null,"Integration architecture described in this section applies to invoking\n",(0,a.yg)("inlineCode",{parentName:"p"},"jasmine")," command line interface directly, for example for ",(0,a.yg)("strong",{parentName:"p"},"domain-level"),",\n",(0,a.yg)("a",{parentName:"p",href:"/handbook/api-testing/"},(0,a.yg)("strong",{parentName:"a"},"REST/HTTP API-level")),", or ",(0,a.yg)("a",{parentName:"p",href:"/handbook/web-testing/"},(0,a.yg)("strong",{parentName:"a"},"web-based testing")),"\nusing ",(0,a.yg)("a",{parentName:"p",href:"/api/playwright"},"Playwright"),"."),(0,a.yg)("p",null,"If you want your Jasmine scenarios to interact with ",(0,a.yg)("strong",{parentName:"p"},"web interfaces")," using ",(0,a.yg)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/"},"Selenium Webdriver protocol"),",\nor connect them to a ",(0,a.yg)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/grid/"},"Selenium Grid"),",\nyou should do so via ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/protractor"},"Protractor"),"\nor ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/webdriverio"},"WebdriverIO")," instead."),(0,a.yg)("figure",null,(0,a.yg)("mermaid",{value:'graph TB\n    DEV(["\ud83d\udcbb Developer"])\n    TR(["jasmine"])\n    SC(["@serenity-js/core"])\n    TRA(["@serenity-js/jasmine"])\n    CF["config.ts"]\n    R(["Serenity/JS reporting services"])\n    DEV -- invokes --\x3e TR\n    TR -- loads --\x3e CF\n    TR -- notifies --\x3e TRA\n    TRA -- notifies --\x3e SC\n    CF -- configures --\x3e SC\n    SC -- notifies --\x3e R\n\n    click R "/handbook/reporting"\n    click SC "/api/core"\n    click TRA "/api/jasmine"'}),(0,a.yg)("figcaption",null,"Serenity/JS + Jasmine integration architecture")),(0,a.yg)("h3",{id:"installing-serenityjs-test-runner-adapter"},"Installing Serenity/JS test runner adapter"),(0,a.yg)("p",null,"Assuming you already have a ",(0,a.yg)("a",{parentName:"p",href:"/handbook/getting-started/installation/#creating-a-nodejs-project"},"Node.js project"),"\nand ",(0,a.yg)("a",{parentName:"p",href:"/handbook/getting-started/installation/"},"Serenity/JS runtime dependencies")," set up,\nadd the following Node modules:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/core"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/api/jasmine"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/jasmine"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/jasmine"},(0,a.yg)("inlineCode",{parentName:"a"},"jasmine")))),(0,a.yg)("p",null,"To do that, run the following command in your terminal:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-npm2yarn"},"npm install --save-dev @serenity-js/core @serenity-js/jasmine jasmine\n")),(0,a.yg)("p",null,"If you'd like to implement your test suite in TypeScript, also run:"),(0,a.yg)(i.c,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.yg)(s.c,{value:"npm",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev typescript ts-node @types/jasmine @types/node\n"))),(0,a.yg)(s.c,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev typescript ts-node @types/jasmine @types/node\n")))),(0,a.yg)("h3",{id:"configuring-serenityjs"},"Configuring Serenity/JS"),(0,a.yg)("p",null,"If you intend to run your Jasmine scenarios using the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/jasmine/jasmine-npm"},"Jasmine CLI"),",\nthe best way to configure Serenity/JS is to invoke the Serenity/JS ",(0,a.yg)("a",{parentName:"p",href:"/api/core/function/configure"},(0,a.yg)("inlineCode",{parentName:"a"},"configure"))," function\nin a ",(0,a.yg)("a",{parentName:"p",href:"https://jasmine.github.io/api/edge/global.html#beforeAll"},(0,a.yg)("inlineCode",{parentName:"a"},"beforeAll")," hook"),",\ndefined in a Jasmine helper file:"),(0,a.yg)(i.c,{groupId:"code-examples",mdxType:"Tabs"},(0,a.yg)(s.c,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="spec/helpers/serenity.config.ts" tab',title:'"spec/helpers/serenity.config.ts"',tab:!0},"import 'jasmine'\n\nimport { configure } from '@serenity-js/core'\n\nbeforeAll(async () => {\n    // Configure Serenity/JS\n    configure({\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            // ... any other reporting services\n        ],\n    })\n})\n"))),(0,a.yg)(s.c,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="spec/helpers/serenity.config.js" tab',title:'"spec/helpers/serenity.config.js"',tab:!0},"const { configure } = require('@serenity-js/core')\n\nbeforeAll(async () => {\n    // Configure Serenity/JS\n    configure({\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            // ... any other reporting services\n        ],\n    })\n})\n")))),(0,a.yg)("p",null,"To learn more about installing and configuring Serenity/JS reporting services appropriate for your project,\nfollow the ",(0,a.yg)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting guide"),"."),(0,a.yg)("h3",{id:"configuring-jasmine"},"Configuring Jasmine"),(0,a.yg)("p",null,"You can initialise Jasmine configuration file at ",(0,a.yg)("inlineCode",{parentName:"p"},"spec/support/jasmine.json")," by running the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"npx jasmine init\n")),(0,a.yg)("p",null,"The resulting configuration file should look similar to the following:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="spec/support/jasmine.json"',title:'"spec/support/jasmine.json"'},'{\n  "spec_dir": "spec",\n  "spec_files": [\n    "**/*[sS]pec.js"\n  ],\n  "helpers": [\n    "helpers/**/*.js"\n  ],\n  "stopSpecOnExpectationFailure": false,\n  "random": true\n}\n')),(0,a.yg)("p",null,"For TypeScript projects, modify ",(0,a.yg)("inlineCode",{parentName:"p"},"spec/support/jasmine.json")," as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="spec/support/jasmine.json"',title:'"spec/support/jasmine.json"'},'{\n  "spec_dir": "spec",\n  "spec_files": [\n    "**/*[sS]pec.ts"\n  ],\n  "helpers": [\n    "helpers/**/*.ts"\n  ],\n  "requires": [\n    "ts-node/register"\n  ],\n  "stopSpecOnExpectationFailure": false,\n  "random": true\n}\n')),(0,a.yg)("h3",{id:"defining-jasmine-test-scenarios"},"Defining Jasmine test scenarios"),(0,a.yg)("p",null,"When Serenity/JS reports on Jasmine test scenarios, it assumes you're following a common convention\nwhere the outermost ",(0,a.yg)("a",{parentName:"p",href:"https://jasmine.github.io/api/edge/global.html#describe"},(0,a.yg)("inlineCode",{parentName:"a"},"describe")," block")," describes the name of the feature or component under test,\nand any nested ",(0,a.yg)("inlineCode",{parentName:"p"},"describe")," blocks contribute to the name of the test scenario."),(0,a.yg)("p",null,"For example, Serenity/JS will report the below scenario as:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"feature: ",(0,a.yg)("inlineCode",{parentName:"li"},"Todo List App")),(0,a.yg)("li",{parentName:"ul"},"scenario: ",(0,a.yg)("inlineCode",{parentName:"li"},"when the user is a guest their list is empty"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="spec/todo-list.spec.ts"',title:'"spec/todo-list.spec.ts"'},"import 'jasmine'\n\ndescribe('Todo List App', () => {               // - feature or component name\n\n    describe('when the user is', () => {        // - one or more nested `describe` blocks\n        describe('a guest', () => {             //   to group scenarios\n            describe('their list', () => {      //   by context in which they apply\n\n                it('is empty', async () => {    // - expected behaviour of the feature or component\n\n                })\n            })\n        })\n    })\n})\n")),(0,a.yg)("admonition",{title:"Feature coverage",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Using the same name for the outermost ",(0,a.yg)("inlineCode",{parentName:"p"},"describe"),' block in several different spec files makes\nSerenity BDD associate the different test scenarios with the same logical "feature" or "component"\nand produce ',(0,a.yg)("a",{parentName:"p",href:"https://serenity-bdd.github.io/docs/reporting/the_serenity_reports"},"feature coverage metrics"),".")),(0,a.yg)("h3",{id:"attaching-serenityjs-test-runner-adapter"},"Attaching Serenity/JS test runner adapter"),(0,a.yg)("p",null,"To attach ",(0,a.yg)("a",{parentName:"p",href:"/api/jasmine"},(0,a.yg)("inlineCode",{parentName:"a"},"@serenity-js/jasmine"))," test runner adapter to Jasmine,\nuse the ",(0,a.yg)("a",{parentName:"p",href:"https://jasmine.github.io/setup/nodejs.html#--reporter"},(0,a.yg)("inlineCode",{parentName:"a"},"--reporter"))," option when invoking the test runner:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"npx jasmine --reporter='@serenity-js/jasmine'\n")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"At the time of writing, Jasmine doesn't allow for reporters to be registered via the ",(0,a.yg)("inlineCode",{parentName:"p"},"jasmine.json")," configuration file.")),(0,a.yg)("h2",{id:"using-serenityjs-screenplay-pattern-apis"},"Using Serenity/JS Screenplay Pattern APIs"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Actor"},"Serenity/JS actor model")," works great with Jasmine\nand ",(0,a.yg)("a",{parentName:"p",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," APIs can help your team implement\nJasmine test scenarios that are easy to read and understand."),(0,a.yg)("p",null,"The fastest way to get started with Serenity/JS and Jasmine is to use one of\nthe ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/serenity-js?q=jasmine+template&type=all&language=&sort="},"Serenity/JS + Jasmine project templates"),".\nHowever, if you're adding Serenity/JS to an existing project or simply want to understand how the integration works,\nthis guide is for you."),(0,a.yg)("h3",{id:"configuring-a-cast-of-actors"},"Configuring a cast of actors"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," is an actor-centred model, so the first thing you\nneed to do is to tell Serenity/JS what ",(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Cast"},"cast of actors")," you want to use."),(0,a.yg)("p",null,"If you're planning to run Jasmine scenarios using the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/jasmine/jasmine-npm"},"Jasmine CLI")," ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"directly")),",\nyou can configure the actors in a ",(0,a.yg)("a",{parentName:"p",href:"https://jasmine.github.io/api/edge/global.html#beforeAll"},(0,a.yg)("inlineCode",{parentName:"a"},"beforeAll"))," hook, for example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="spec/helpers/serenity.config.ts"',title:'"spec/helpers/serenity.config.ts"'},"import 'jasmine'\n\nimport { configure, Cast } from '@serenity-js/core'\nimport { BrowseTheWebWithPlaywright } from '@serenity-js/playwright'\n\nimport * as playwright from 'playwright'\n\nlet browser: playwright.Browser;\n\nbeforeAll(async () => {\n\n    // Launch the browser once before all the tests\n    // Serenity/JS will take care of managing Playwright browser context and browser tabs.\n    browser = await playwright.chromium.launch({\n        headless: true,\n    });\n\n    // Configure Serenity/JS\n    configure({\n        actors: Cast.where(actor =>\n            actor.whoCan(BrowseTheWebWithPlaywright.using(browser, {\n                baseURL: 'https://todo-app.serenity-js.org/',\n            }))\n        ),\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            // ... any other reporting services\n        ],\n    })\n})\n\nafterAll(async () => {\n    // Close the browser after all the tests are finished\n    await browser?.close()\n})\n")),(0,a.yg)("p",null,"Consult the respective test runner instructions if you're invoking Jasmine ",(0,a.yg)("em",{parentName:"p"},(0,a.yg)("strong",{parentName:"em"},"indirectly")),",\nso via ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/protractor"},"Protractor")," or ",(0,a.yg)("a",{parentName:"p",href:"/handbook/test-runners/webdriverio"},"WebdriverIO"),"."),(0,a.yg)("h3",{id:"referring-to-actors-in-test-scenarios"},"Referring to actors in test scenarios"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/api/core/class/Actor"},"Serenity/JS actors")," are often used to represent user personas or important external systems\ninteracting with the system under test. In those scenarios, a common strategy is to give actors names indicating their persona,\nand refer to them in your test scenarios using functions ",(0,a.yg)("a",{parentName:"p",href:"/api/core/function/actorCalled"},(0,a.yg)("inlineCode",{parentName:"a"},"actorCalled")),"\nand ",(0,a.yg)("a",{parentName:"p",href:"/api/core/function/actorInTheSpotlight"},(0,a.yg)("inlineCode",{parentName:"a"},"actorInTheSpotlight")),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="spec/todo-list.spec.ts"',title:'"spec/todo-list.spec.ts"'},"import 'jasmine'\n\nimport { Ensure, equals } from '@serenity-js/assertions'\nimport { actorCalled } from '@serenity-js/core'\nimport { Navigate, PageElements, By } from '@serenity-js/web'\n\ndescribe('Todo List App', () => {\n\n    const displayedItems = () =>\n        PageElements.located(By.css('.todo-list li'))\n            .describedAs('displayed items')\n\n    describe('when the user is', () => {\n        describe('a guest', () => {\n            describe('their list', () => {\n\n                it('is empty', async () => {\n                    await actorCalled('Alice').attemptsTo(\n                        Navigate.to('https://todo-app.serenity-js.org/'),\n                        Ensure.that(displayedItems().count(), equals(0))\n                    )\n                })\n            })\n        })\n    })\n})\n")))}y.isMDXComponent=!0}}]);