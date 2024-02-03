"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[89900],{43636:(e,t,n)=>{n.d(t,{Iu:()=>g,yg:()=>u});var a=n(85668);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=p(n),m=r,u=y["".concat(l,".").concat(m)]||y[m]||d[m]||i;return n?a.createElement(u,s(s({ref:t},g),{},{components:n})):a.createElement(u,s({ref:t},g))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[y]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33056:(e,t,n)=>{n.d(t,{c:()=>i});var a=n(85668),r=n(53752);function i(){const{siteConfig:e}=(0,r.default)(),t=e.customFields.currentNodeVersion;return a.createElement("span",null,t)}},34816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var a=n(15307),r=n(85668),i=n(43636),s=n(80188),o=n(5508),l=n(53752);function p(e){let{conjunction:t="and"}=e;const{siteConfig:n}=(0,l.default)(),a=n.customFields.supportedEngines.node.split("||").map((e=>e.replace(/.*?([0-9]+).*?/,"$1").trim()));return r.createElement("span",null,function(e,t){switch(e.length){case 0:return"";case 1:return e[0];case 2:return`${e[0]} ${t} ${e[1]}`;default:const n=e.slice(0,-1),a=e.slice(-1);return n.join(", ")+`, ${t}`.trim()+` ${a}`}}(a,t))}var g=n(33056),y=n(9324);const d={sidebar_position:3},m="Installing Serenity/JS",u={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installing Serenity/JS",description:"In this article, you'll learn how to create a brand-new test automation project and install Serenity/JS from scratch.",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/handbook/getting-started/installation",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/getting-started/installation.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Serenity/JS Project Templates",permalink:"/handbook/getting-started/project-templates"},next:{title:"Architecture",permalink:"/handbook/getting-started/architecture"}},c={},h=[{value:"Installing Node.js",id:"installing-nodejs",level:2},{value:"Installing Java Runtime Environment (JRE)",id:"installing-java-runtime-environment-jre",level:2},{value:"Creating a Node.js project",id:"creating-a-nodejs-project",level:2},{value:"Using WebdriverIO installation wizard",id:"using-webdriverio-installation-wizard",level:3},{value:"Using Playwright Test installation wizard",id:"using-playwright-test-installation-wizard",level:3},{value:"Using plain Node.js",id:"using-plain-nodejs",level:3},{value:"Installing a web browser",id:"installing-a-web-browser",level:2},{value:"Using Playwright browsers",id:"using-playwright-browsers",level:3},{value:"Using Selenium Webdriver",id:"using-selenium-webdriver",level:3},{value:"Using TypeScript",id:"using-typescript",level:2},{value:"Installing Serenity/JS modules",id:"installing-serenityjs-modules",level:2},{value:"Configuring a test runner",id:"configuring-a-test-runner",level:2},{value:"Examples and reference implementations",id:"examples-and-reference-implementations",level:2}],w={toc:h},f="wrapper";function b(e){let{components:t,...n}=e;return(0,i.yg)(f,(0,a.c)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"installing-serenityjs"},"Installing Serenity/JS"),(0,i.yg)("p",null,"In this article, you'll learn how to create a ",(0,i.yg)("strong",{parentName:"p"},"brand-new test automation project")," and install Serenity/JS from scratch."),(0,i.yg)("p",null,"I'll show you how to:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create a Node.js project capable of running Serenity/JS test scenarios"),(0,i.yg)("li",{parentName:"ul"},"Install runtime dependencies required to create automated tests based on Serenity/JS"),(0,i.yg)("li",{parentName:"ul"},"Configure TypeScript (if you'd like to)"),(0,i.yg)("li",{parentName:"ul"},"Choose and install appropriate Serenity/JS modules")),(0,i.yg)("admonition",{title:"Short on time? \u23f1\ufe0f",type:"info"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("strong",{parentName:"p"},"Serenity/JS Project Templates")," and ",(0,i.yg)("strong",{parentName:"p"},"Serenity/JS GitPods")," come with all the appropriate Serenity/JS modules\nand lower-level integration and test tools already configured, so you can start automating your tests straight away!"),(0,i.yg)("p",{parentName:"admonition"},"Learn more about faster ways to get started using ",(0,i.yg)("a",{parentName:"p",href:"/handbook/getting-started/project-templates/"},"Serenity/JS Project Templates"),".")),(0,i.yg)("h2",{id:"installing-nodejs"},"Installing Node.js"),(0,i.yg)("p",null,"Serenity/JS is a ",(0,i.yg)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," program. To help you ensure maximum stability of your test scenarios,\nSerenity/JS relies on a recent ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/nodejs/Release"},"Long-Term Support (LTS)")," version of the ",(0,i.yg)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js platform"),"."),(0,i.yg)("p",null,"You can get both Node.js and the Node Package Manager (npm) either from the ",(0,i.yg)("a",{parentName:"p",href:"https://nodejs.org/"},"nodejs.org")," website,\nwhich provides convenient installers for all the major operating systems, or using the ",(0,i.yg)("a",{parentName:"p",href:"http://nvm.sh"},"Node Version Manager (nvm)"),".\nThe second option is more appropriate if you need to work with several versions of the Node.js platform simultaneously."),(0,i.yg)("p",null,"To check if your machine is set up correctly, execute the following command in your terminal:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"node --version\n")),(0,i.yg)("p",null,"The version number returned by the above command should be a ",(0,i.yg)("strong",null,"recent version of Node ",(0,i.yg)(p,{conjunction:"or",mdxType:"SupportedNodeVersions"})),",\nfor example:"),(0,i.yg)(y.c,{language:"bash",mdxType:"CodeBlock"},(0,i.yg)(g.c,{mdxType:"CurrentNodeVersion"})),(0,i.yg)("h2",{id:"installing-java-runtime-environment-jre"},"Installing Java Runtime Environment (JRE)"),(0,i.yg)("p",null,"Serenity/JS delegates the work of generating the illustrated HTML reports to ",(0,i.yg)("a",{parentName:"p",href:"http://serenity-bdd.info/"},"Serenity BDD"),",\nwhich is a Java library and therefore requires\na ",(0,i.yg)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/java/javase/overview/index.html"},"Java Runtime Environment (JRE)")," ",(0,i.yg)("strong",{parentName:"p"},"version 11")," or newer."),(0,i.yg)("p",null,"You can download the JRE from ",(0,i.yg)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html"},"oracle.com"),",\n",(0,i.yg)("a",{parentName:"p",href:"https://adoptopenjdk.net/"},"adoptopenjdk.net"),",\nor by using the excellent ",(0,i.yg)("a",{parentName:"p",href:"https://sdkman.io/"},"Software Development Kit Manager (SDKMan)"),"."),(0,i.yg)("p",null,"To verify that you have the JRE installed, execute the below command in your terminal:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"java -version\n")),(0,i.yg)("p",null,"The output should look similar to the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"openjdk 21.0.1 2023-10-17 LTS\nOpenJDK Runtime Environment Temurin-21.0.1+12 (build 21.0.1+12-LTS)\nOpenJDK 64-Bit Server VM Temurin-21.0.1+12 (build 21.0.1+12-LTS, mixed mode)\n")),(0,i.yg)("p",null,"If you're working with several versions of the Java platform simultaneously, please make sure that you point\nyour ",(0,i.yg)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable at the correct version."),(0,i.yg)("p",null,"On macOS this could be:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"echo $JAVA_HOME\n/Users/jan/.sdkman/candidates/java/21.0.1-tem\n")),(0,i.yg)("h2",{id:"creating-a-nodejs-project"},"Creating a Node.js project"),(0,i.yg)("p",null,"Serenity/JS is typically installed as a ",(0,i.yg)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json#devdependencies"},"dev dependency"),"\nof a ",(0,i.yg)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json"},"Node.js project"),".\nThis way it doesn't accidentally get bundled together with your production dependencies."),(0,i.yg)("p",null,"If you're introducing Serenity/JS to an ",(0,i.yg)("strong",{parentName:"p"},"existing project")," you can skip this section as its purpose is to help you\ncreate ",(0,i.yg)("inlineCode",{parentName:"p"},"package.json")," - a Node.js project descriptor file, which would already be part of your project."),(0,i.yg)("h3",{id:"using-webdriverio-installation-wizard"},"Using WebdriverIO installation wizard"),(0,i.yg)("p",null,"If you're planning to start a new project using ",(0,i.yg)("strong",{parentName:"p"},"WebdriverIO"),", use the ",(0,i.yg)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted/#initiate-a-webdriverio-setup"},"WebdriverIO installation wizard")," to generate the initial structure:"),(0,i.yg)(s.c,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.yg)(o.c,{value:"npm",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"npm init wdio .\n"))),(0,i.yg)(o.c,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"yarn create wdio .\n")))),(0,i.yg)("p",null,"Next, follow the ",(0,i.yg)("a",{parentName:"p",href:"/handbook/getting-started/serenity-js-with-webdriverio/"},'Serenity/JS "Getting Started" guide for WebdriverIO'),"."),(0,i.yg)("h3",{id:"using-playwright-test-installation-wizard"},"Using Playwright Test installation wizard"),(0,i.yg)("p",null,"If you're planning to use ",(0,i.yg)("strong",{parentName:"p"},"Playwright Test"),", use ",(0,i.yg)("a",{parentName:"p",href:"https://playwright.dev/docs/intro#installing-playwright"},"Playwright Test installation wizard"),":"),(0,i.yg)(s.c,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.yg)(o.c,{value:"npm",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"npm init playwright@latest\n"))),(0,i.yg)(o.c,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"yarn create playwright@latest\n")))),(0,i.yg)("p",null,"Next, follow the ",(0,i.yg)("a",{parentName:"p",href:"/handbook/getting-started/serenity-js-with-playwright-test/"},'Serenity/JS "Getting Started" guide for Playwright Test')),(0,i.yg)("h3",{id:"using-plain-nodejs"},"Using plain Node.js"),(0,i.yg)("p",null,"If your chosen ",(0,i.yg)("a",{parentName:"p",href:"/handbook/test-runners/"},"test runner")," doesn't offer an installation wizard,\nor when you want to create a Node.js project from scratch, create a new directory, such as ",(0,i.yg)("inlineCode",{parentName:"p"},"serenity-js-example"),".\nNext, initialise a new Node.js project accepting the default configuration suggested by the npm with these terminal commands:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir serenity-js-example\ncd serenity-js-example\nnpm init\n")),(0,i.yg)("p",null,"Your actions should result in a basic ",(0,i.yg)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json"},(0,i.yg)("inlineCode",{parentName:"a"},"package.json")),"\nfile appearing under ",(0,i.yg)("inlineCode",{parentName:"p"},"serenity-js-example"),", with contents similar to the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="serenity-js-example/package.json"',title:'"serenity-js-example/package.json"'},'{\n  "name": "example",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC"\n}\n')),(0,i.yg)("h2",{id:"installing-a-web-browser"},"Installing a web browser"),(0,i.yg)("p",null,"If you're planning to make your acceptance tests interact with a web interface, you'll need a web browser.\nThe way you install web browsers and their associated drivers depends on whether you want to use ",(0,i.yg)("a",{parentName:"p",href:"/handbook/test-runners/playwright-test"},"Playwright"),"\nor a ",(0,i.yg)("a",{parentName:"p",href:"https://www.selenium.dev"},"Selenium Webdriver"),"-based integration library, such as ",(0,i.yg)("a",{parentName:"p",href:"/handbook/test-runners/webdriverio"},"WebdriverIO")," or ",(0,i.yg)("a",{parentName:"p",href:"/handbook/test-runners/protractor"},"Protractor"),"."),(0,i.yg)("h3",{id:"using-playwright-browsers"},"Using Playwright browsers"),(0,i.yg)("p",null,"To use Serenity/JS with ",(0,i.yg)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright")," and its default test runner - ",(0,i.yg)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-test"},"Playwright Test"),",\nuse its ",(0,i.yg)("a",{parentName:"p",href:"https://playwright.dev/docs/intro#installing-playwright"},"dedicated installation wizard")," then ",(0,i.yg)("a",{parentName:"p",href:"/handbook/getting-started/serenity-js-with-playwright-test/"},"add Serenity/JS as per the getting started guide"),":"),(0,i.yg)(s.c,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.yg)(o.c,{value:"npm",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"npm init playwright@latest\n"))),(0,i.yg)(o.c,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"yarn create playwright@latest\n")))),(0,i.yg)("p",null,"To use ",(0,i.yg)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright")," with another test runner, like ",(0,i.yg)("a",{parentName:"p",href:"/handbook/test-runners/cucumber/"},"Cucumber.js"),", install the ",(0,i.yg)("inlineCode",{parentName:"p"},"playwright")," module, as well as its browsers and operating system-level dependencies\nby running the below commands in your terminal:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh",metastring:'title="serenity-js-example/"',title:'"serenity-js-example/"'},"npm install --save-dev playwright\nnpx playwright install --with-deps\n")),(0,i.yg)("p",null,"Learn more about the ",(0,i.yg)("a",{parentName:"p",href:"https://playwright.dev/docs/ci#introduction"},"installing Playwright"),"."),(0,i.yg)("h3",{id:"using-selenium-webdriver"},"Using Selenium Webdriver"),(0,i.yg)("p",null,"For test suites using the Selenium Webdriver protocol via ",(0,i.yg)("a",{parentName:"p",href:"/handbook/test-runners/webdriverio"},"WebdriverIO")," or ",(0,i.yg)("a",{parentName:"p",href:"/handbook/test-runners/protractor"},"Protractor"),",\nyou'll need to install the appropriate web browsers and their ",(0,i.yg)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/"},"associated drivers")," on any machine running the tests."),(0,i.yg)("p",null,"If you already have ",(0,i.yg)("a",{parentName:"p",href:"https://www.google.com/chrome/"},"Google Chrome")," installed locally,\nyou can add its ",(0,i.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/chromedriver"},"driver")," to your Node project by running the following command in your terminal:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh",metastring:'title="serenity-js-example/"',title:'"serenity-js-example/"'},"npm install --save-dev chromedriver\n")),(0,i.yg)("p",null,"If you want to test with a specific version of Google Chrome,\nconsider using ",(0,i.yg)("a",{parentName:"p",href:"https://developer.chrome.com/blog/chrome-for-testing/#how-can-i-get-chrome-for-testing-binaries"},"Google Chrome for Testing"),"."),(0,i.yg)("p",null,"Consult the Selenium project documentation to learn ",(0,i.yg)("a",{parentName:"p",href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/"},"how to install other drivers"),"."),(0,i.yg)("h2",{id:"using-typescript"},"Using TypeScript"),(0,i.yg)("p",null,"Serenity/JS is written in ",(0,i.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," and offers first-class support for TypeScript projects."),(0,i.yg)("p",null,"To use TypeScript in your project, install the following dependencies:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh",metastring:'npm2yarn title="serenity-js-example/"',npm2yarn:!0,title:'"serenity-js-example/"'},"npm install typescript @types/node ts-node\n")),(0,i.yg)("p",null,"Next, create a ",(0,i.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig"},(0,i.yg)("inlineCode",{parentName:"a"},"tsconfig.json"))," file in your project root directory:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="serenity-js-example/tsconfig.json"',title:'"serenity-js-example/tsconfig.json"'},'{\n  "compilerOptions": {\n    "target": "es2019",\n    "lib": ["es2019", "dom"],\n    "module": "commonjs",\n    "moduleResolution": "node",\n    "emitDecoratorMetadata": true,\n    "experimentalDecorators": true,\n    "sourceMap": true,\n    "declaration": true,\n    "types": [\n      "node"\n    ]\n  },\n\n  "include": [\n    "features/**/*.ts",\n    "test/**/*.ts"\n  ],\n\n  "exclude": [\n    "node_modules"\n  ]\n}\n')),(0,i.yg)("p",null,"Make sure to configure the ",(0,i.yg)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#include"},(0,i.yg)("inlineCode",{parentName:"a"},"include"))," property to cover all your\ntesting-related TypeScript sources."),(0,i.yg)("h2",{id:"installing-serenityjs-modules"},"Installing Serenity/JS modules"),(0,i.yg)("p",null,"All the official ",(0,i.yg)("a",{parentName:"p",href:"/handbook/about/architecture"},"Serenity/JS modules")," are distributed\nvia the Node Package Manager registry at ",(0,i.yg)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40serenity-js"},"npmjs.com"),"\nand published under the ",(0,i.yg)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40serenity-js"},(0,i.yg)("inlineCode",{parentName:"a"},"@serenity-js/"))," namespace.\nThis is to help you distinguish the original Serenity/JS modules developed and maintained\nby the Serenity/JS Team from other modules created by the Serenity/JS Community."),(0,i.yg)("p",null,"Each ",(0,i.yg)("a",{parentName:"p",href:"/api"},"Serenity/JS module")," provides detailed installation instructions, and you can install them from your computer\nterminal by running command similar to the one below:"),(0,i.yg)(s.c,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.yg)(o.c,{value:"npm",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @serenity-js/core\n"))),(0,i.yg)(o.c,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev @serenity-js/core\n")))),(0,i.yg)("p",null,"On ",(0,i.yg)("strong",{parentName:"p"},"macOS")," and ",(0,i.yg)("strong",{parentName:"p"},"Linux")," you can save yourself some keystrokes and install several Serenity/JS modules simultaneously\nthanks to the terminal supporting ",(0,i.yg)("a",{parentName:"p",href:"https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html"},"Bash brace expansion"),":"),(0,i.yg)(s.c,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.yg)(o.c,{value:"npm",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @serenity-js/{assertions,console-reporter,core,rest,serenity-bdd}\n"))),(0,i.yg)(o.c,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev @serenity-js/{assertions,console-reporter,core,rest,serenity-bdd}\n")))),(0,i.yg)("p",null,"On ",(0,i.yg)("strong",{parentName:"p"},"Windows"),", or when your shell doesn't support Bash brace expansion, you'll need to specify each Serenity/JS module individually:"),(0,i.yg)(s.c,{groupId:"code-examples",mdxType:"Tabs"},(0,i.yg)(o.c,{value:"macos/linux",label:"macOS/Linux",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js",metastring:'tab={"label":"macOS/Linux"}',tab:'{"label":"macOS/Linux"}'},"npm install --save-dev \\\n    @serenity-js/assertions \\\n    @serenity-js/console-reporter \\\n    @serenity-js/core \\\n    @serenity-js/rest \\\n    @serenity-js/serenity-bdd\n"))),(0,i.yg)(o.c,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-ts",metastring:'tab={"label":"Windows"}',tab:'{"label":"Windows"}'},"npm install --save-dev ^\n    @serenity-js/assertions ^\n    @serenity-js/console-reporter ^\n    @serenity-js/core ^\n    @serenity-js/rest ^\n    @serenity-js/serenity-bdd\n")))),(0,i.yg)("admonition",{title:"Stay up to date",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Please make sure to always update your Serenity/JS dependencies together and use the same version number for all the ",(0,i.yg)("inlineCode",{parentName:"p"},"@serenity-js/*")," modules you depend on.\nLearn more about ",(0,i.yg)("a",{parentName:"p",href:"/handbook/getting-started/versioning/"},"versioning"),".")),(0,i.yg)("p",null,"If your machine is part of a corporate network and doesn't have direct access to npmjs.com, you should be able to download\nSerenity/JS (and other publicly available Node modules) from your company internal artifact registry:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.jfrog.com/confluence/display/JFROG/npm+Registry"},"Using NPM with JFrog Artifactory")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://help.sonatype.com/repomanager3/nexus-repository-administration/formats/npm-registry/configuring-npm"},"Using NPM with Sonatype Nexus"))),(0,i.yg)("h2",{id:"configuring-a-test-runner"},"Configuring a test runner"),(0,i.yg)("p",null,"Follow the below instructions to configure your chosen ",(0,i.yg)("a",{parentName:"p",href:"/handbook/test-runners/"},"test runner"),":"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/handbook/test-runners/cucumber"},"Cucumber")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/handbook/test-runners/jasmine"},"Jasmine")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/handbook/test-runners/mocha"},"Mocha")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/handbook/test-runners/playwright-test"},"Playwright Test")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/handbook/test-runners/protractor"},"Protractor")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/handbook/test-runners/webdriverio"},"WebdriverIO"))),(0,i.yg)("p",null,"You might also want to consult the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/tree/main/examples"},"Serenity/JS Examples and Reference Implementations")," on GitHub."),(0,i.yg)("h2",{id:"examples-and-reference-implementations"},"Examples and reference implementations"),(0,i.yg)("p",null,"If you ever get stuck setting up a Serenity/JS project from scratch, make sure to review:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/handbook/getting-started/project-templates/"},"Serenity/JS Project Templates")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/tree/main/examples"},"Serenity/JS Examples and Reference Implementations"))),(0,i.yg)("p",null,"Also, remember to join the ",(0,i.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community chat")," where you can meet fellow Serenity/JS developers who might be able to help you out."))}b.isMDXComponent=!0}}]);