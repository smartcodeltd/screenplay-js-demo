"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[86523],{82247:(e,t,r)=>{r.d(t,{xA:()=>y,yg:()=>m});var n=r(14041);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},y=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,y=o(e,["components","mdxType","originalType","parentName"]),g=l(r),u=i,m=g["".concat(p,".").concat(u)]||g[u]||c[u]||a;return r?n.createElement(m,s(s({ref:t},y),{},{components:r})):n.createElement(m,s({ref:t},y))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5136:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>y,frontMatter:()=>a,toc:()=>o});var n=r(89575),i=(r(14041),r(82247));const a={},s=void 0,o=[{value:"Serenity/JS WebdriverIO",id:"serenityjs-webdriverio",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage with Cucumber.js",id:"usage-with-cucumberjs",level:4},{value:"Usage with Jasmine",id:"usage-with-jasmine",level:4},{value:"Usage with Mocha",id:"usage-with-mocha",level:4},{value:"Configuring WebdriverIO",id:"configuring-webdriverio",level:3},{value:"Using custom Serenity/JS Actors",id:"using-custom-serenityjs-actors",level:4},{value:"Using Serenity/JS with WebdriverIO and Mocha",id:"using-serenityjs-with-webdriverio-and-mocha",level:3},{value:"Template Repositories",id:"template-repositories",level:3},{value:"\ud83d\udce3 Stay up to date",id:"-stay-up-to-date",level:2},{value:"\ud83d\udc9b Support Serenity/JS",id:"-support-serenityjs",level:2}],p={toc:o},l="wrapper";function y(e){let{components:t,...r}=e;return(0,i.yg)(l,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})),"\n",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})),"\n",(0,i.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})),"\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/sponsors/serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github",alt:"Support Serenity/JS on GitHub"}))),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org"},"Serenity/JS")," is an innovative open-source framework designed to make acceptance and regression testing\nof complex software systems faster, more collaborative and easier to scale."),(0,i.yg)("p",null,"\u2b50\ufe0f Get started with Serenity/JS!"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/handbook/web-testing/your-first-web-scenario"},"Serenity/JS web testing tutorial")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/handbook"},"Serenity/JS Handbook")," and ",(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/handbook/getting-started/"},"Getting Started guides")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/api/core"},"API documentation")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/handbook/getting-started/project-templates/"},"Serenity/JS Project Templates on GitHub"))),(0,i.yg)("p",null,"\ud83d\udc4b Join the Serenity/JS Community!"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Meet other Serenity/JS developers and maintainers on the ",(0,i.yg)("a",{parentName:"li",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community chat channel"),","),(0,i.yg)("li",{parentName:"ul"},"Find answers to your Serenity/JS questions on the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/orgs/serenity-js/discussions/categories/how-do-i"},"Serenity/JS Forum"),","),(0,i.yg)("li",{parentName:"ul"},"Learn how to ",(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/contributing"},"contribute to Serenity/JS"),","),(0,i.yg)("li",{parentName:"ul"},"Support the project and gain access to ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/playbooks"},"Serenity/JS Playbooks")," by becoming a ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/sponsors/serenity-js"},"Serenity/JS GitHub Sponsor"),"!")),(0,i.yg)("h2",{id:"serenityjs-webdriverio"},"Serenity/JS WebdriverIO"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org/api/webdriverio/"},(0,i.yg)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio"))," module is a ",(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org/handbook/thinking-in-serenity-js/screenplay-pattern.html"},"Screenplay Pattern"),"-style adapter\nfor ",(0,i.yg)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," that will help you with testing Web and mobile apps."),(0,i.yg)("h3",{id:"installation"},"Installation"),(0,i.yg)("p",null,"To install this module, use an ",(0,i.yg)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted/"},"existing WebdriverIO project")," or generate a new one by running:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"npm init wdio .\n")),(0,i.yg)("p",null,"Install the below Serenity/JS modules in your WebdriverIO project directory:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @serenity-js/assertions @serenity-js/console-reporter @serenity-js/core @serenity-js/serenity-bdd @serenity-js/web @serenity-js/webdriverio\n")),(0,i.yg)("p",null,"To learn more about Serenity/JS and how to use it on your project, follow the ",(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org/handbook/getting-started/serenity-js-with-webdriverio/"},"Serenity/JS Getting Started guide fpr WebdriverIO"),"."),(0,i.yg)("h4",{id:"usage-with-cucumberjs"},"Usage with Cucumber.js"),(0,i.yg)("p",null,"To use Serenity/JS WebdriverIO with Cucumber.js, install the following adapter:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @serenity-js/cucumber\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Please note")," that Serenity/JS WebdriverIO / Cucumber integration supports both ",(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org/handbook/reporting/index.html"},"Serenity/JS reporting services")," and ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js/blob/main/docs/cli.md#built-in-formatters"},"native Cucumber.js reporters"),"."),(0,i.yg)("h4",{id:"usage-with-jasmine"},"Usage with Jasmine"),(0,i.yg)("p",null,"To use Serenity/JS WebdriverIO with Jasmine, install the following adapter:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @serenity-js/jasmine\n")),(0,i.yg)("h4",{id:"usage-with-mocha"},"Usage with Mocha"),(0,i.yg)("p",null,"To use Serenity/JS WebdriverIO with Mocha, install the following adapter:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @serenity-js/mocha\n")),(0,i.yg)("h3",{id:"configuring-webdriverio"},"Configuring WebdriverIO"),(0,i.yg)("p",null,"To integrate Serenity/JS with WebdriverIO,\nconfigure your ",(0,i.yg)("inlineCode",{parentName:"p"},"wdio.conf.ts")," to specify ",(0,i.yg)("inlineCode",{parentName:"p"},"framework: '@serenity-js/webdriverio'"),".\nYou can ",(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org/api/core/class/SerenityConfig"},"configure Serenity/JS")," in the same file."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="wdio.conf.ts"',title:'"wdio.conf.ts"'},"// wdio.conf.ts\n\n// Optional, import custom Actors if needed; More on this below.\nimport { Actors } from './serenity/Actors.ts'\n\nexport const config: WebdriverIOConfig = {\n    \n    // Tell WebdriverIO to use Serenity/JS framework\n    framework: '@serenity-js/webdriverio',\n\n    // Serenity/JS configuration\n    serenity: {\n        // Configure Serenity/JS to use an appropriate test runner adapter\n        runner: 'cucumber',\n        // runner: 'mocha',\n        // runner: 'jasmine',\n\n        // Optional, register custom Cast to configure your Serenity/JS actors\n        actors: new Actors(`https://api.example.org`),\n        \n        // Register Serenity/JS reporting services, a.k.a. the \"stage crew\"\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            [ '@serenity-js/web:Photographer', { \n                strategy: 'TakePhotosOfFailures', // or: 'TakePhotosOfInteractions'\n            } ],\n        ]\n    },\n\n    // configure Cucumber runner\n    cucumberOpts: {\n        // see the Cucumber configuration options below\n    },\n\n    // or Jasmine runner\n    jasmineOpts: {\n        // see the Jasmine configuration options below\n    },\n\n    // or Mocha runner\n    mochaOpts: {\n        // see the Mocha configuration options below\n    },\n\n    specs: [\n        // load Cucumber feature files\n        './features/**/*.feature',\n        // or Mocha/Jasmine spec files \n        // './spec/**/*.spec.ts',\n    ],\n    \n    // add any additional native WebdriverIO reports\n    // reporters: [\n    //     'spec',\n    // ],\n\n    // ... other WebdriverIO-specific configuration   \n}\n")),(0,i.yg)("p",null,"Learn more about:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/api/cucumber-adapter/interface/CucumberConfig/"},"Cucumber configuration options")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/api/jasmine-adapter/interface/JasmineConfig/"},"Jasmine configuration options")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/api/mocha-adapter/interface/MochaConfig/"},"Mocha configuration options")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://webdriver.io/docs/configurationfile/"},"WebdriverIO configuration file"))),(0,i.yg)("h4",{id:"using-custom-serenityjs-actors"},"Using custom Serenity/JS Actors"),(0,i.yg)("p",null,"By default, Serenity/JS uses a default ",(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org/api/core/class/Cast"},"cast of actors")," where every actor can:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/api/webdriverio/class/BrowseTheWebWithWebdriverIO"},(0,i.yg)("inlineCode",{parentName:"a"},"BrowseTheWebWithWebdriverIO"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/api/core/class/TakeNotes"},(0,i.yg)("inlineCode",{parentName:"a"},"TakeNotes.usingAnEmptyNotepad()")))),(0,i.yg)("p",null,"If you're planning to implement scenarios where ",(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org/api/core/class/Actor"},"actors")," have\nadditional ",(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org/api/core/class/Ability"},"abilities"),", you can replace this default setup\nwith a custom ",(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org/api/core/class/Cast"},(0,i.yg)("inlineCode",{parentName:"a"},"Cast")),", like this one:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="serenity/Actors.ts"',title:'"serenity/Actors.ts"'},"// serenity/Actors.ts\nimport { Actor, Cast, TakeNotes } from '@serenity-js/core'\nimport { CallAnApi } from '@serenity-js/rest'\nimport { BrowseTheWebWithWebdriverIO } from '@serenity-js/webdriverio'\nimport type { Browser } from 'webdriverio'\n\nexport class Actors implements Cast {\n\n    // Inject custom parameters via constructor\n    constructor(private readonly apiUrl: string) {\n    }\n    \n    prepare(actor: Actor): Actor {\n        // You can assign abilities based on actor name, env variables, and so on\n        switch (actor.name) {\n            \n            case 'Apisitt':\n                return actor.whoCan(\n                    CallAnApi.at(this.apiUrl)\n                )\n                \n            default:\n                return actor.whoCan(\n                    BrowseTheWebWithWebdriverIO.using(browser), // global WDIO browser\n                    TakeNotes.usingAnEmptyNotepad(),\n                )\n        }\n\n    }\n}\n")),(0,i.yg)("h3",{id:"using-serenityjs-with-webdriverio-and-mocha"},"Using Serenity/JS with WebdriverIO and Mocha"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="specs/example.spec.ts"',title:'"specs/example.spec.ts"'},"// specs/example.spec.ts\nimport { actorCalled } from '@serenity-js/core'\nimport { Ensure, equals } from '@serenity-js/assertions'\nimport { By, Navigate, PageElement, Text } from '@serenity-js/web'\nimport { BrowseTheWebWithWebdriverIO } from '@serenity-js/webdriverio'\n\n// example Lean Page Object describing a widget we interact with in the test\nclass SerenityJSWebsite {\n    static header = () =>\n        PageElement.located(By.css('h1'))   // selector to identify the interactable element\n            .describedAs('header')          // description to be used in reports\n}\n\ndescribe('Serenity/JS', () => {\n    \n    it('works with WebdriverIO and Mocha', async () => {\n        // actorCalled(name) instantiates or retrieves an existing actor identified by name\n        // Actors class configures the actors to use WebdriverIO \n        await actorCalled('Wendy')\n            .attemptsTo(\n                Navigate.to('https://serenity-js.org'),\n                Ensure.that(\n                    Text.of(SerenityJSWebsite.header()),\n                    equals('Enable collaborative test automation at any scale!')\n                ),\n            )\n    })\n})\n")),(0,i.yg)("p",null,"To learn more, check out the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/tree/main/examples"},"example projects"),"."),(0,i.yg)("h3",{id:"template-repositories"},"Template Repositories"),(0,i.yg)("p",null,"The easiest way for you to start writing web-based acceptance tests using Serenity/JS, WebdriverIO and either ",(0,i.yg)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha"),", ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js"},"Cucumber")," or ",(0,i.yg)("a",{parentName:"p",href:"https://jasmine.github.io/"},"Jasmine")," is by using one of the below template repositories:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js-mocha-webdriverio-template"},"Serenity/JS, Mocha, and WebdriverIO template")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js-cucumber-webdriverio-template"},"Serenity/JS, Cucumber, and WebdriverIO template")),(0,i.yg)("li",{parentName:"ul"},"Serenity/JS, Jasmine, and WebdriverIO template (coming soon!)")),(0,i.yg)("h2",{id:"-stay-up-to-date"},"\ud83d\udce3 Stay up to date"),(0,i.yg)("p",null,"New features, tutorials, and demos are coming soon!\nFollow ",(0,i.yg)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},"Serenity/JS on LinkedIn"),",\nsubscribe to ",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},"Serenity/JS channel on YouTube")," and join the ",(0,i.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community Chat")," to stay up to date!\nPlease also make sure to star \u2b50\ufe0f ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js"},"Serenity/JS on GitHub")," to help others discover the framework!"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})),"\n",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})),"\n",(0,i.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})),"\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge",alt:"GitHub stars"}))),(0,i.yg)("h2",{id:"-support-serenityjs"},"\ud83d\udc9b Support Serenity/JS"),(0,i.yg)("p",null,"If you appreciate all the effort that goes into making sophisticated tools easy to work with, please support our work and become a Serenity/JS GitHub Sponsor today!"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/sponsors/serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"}))))}y.isMDXComponent=!0}}]);