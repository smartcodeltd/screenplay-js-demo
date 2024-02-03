"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[64660],{43636:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>g});var a=n(85668);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),y=r,g=m["".concat(l,".").concat(y)]||m[y]||u[y]||s;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},98424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(15307),r=(n(85668),n(43636));const s={sidebar_position:2},i="Assertions and expectations",o={unversionedId:"design/assertions",id:"design/assertions",title:"Assertions and expectations",description:"Serenity/JS helps you model your test scenarios from the perspective of actors performing activities to accomplish their goals.",source:"@site/docs/design/assertions.mdx",sourceDirName:"design",slug:"/design/assertions",permalink:"/handbook/design/assertions",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/design/assertions.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Screenplay Pattern",permalink:"/handbook/design/screenplay-pattern"},next:{title:"Waiting and synchronisation",permalink:"/handbook/design/waiting-and-synchronisation"}},l={},p=[{value:"The anatomy of a Serenity/JS assertion",id:"the-anatomy-of-a-serenityjs-assertion",level:2},{value:"Reusable assertions",id:"reusable-assertions",level:2},{value:"Web assertions",id:"web-assertions",level:2},{value:"Fault-tolerant assertions",id:"fault-tolerant-assertions",level:2},{value:"Implementing custom expectations",id:"implementing-custom-expectations",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"assertions-and-expectations"},"Assertions and expectations"),(0,r.yg)("p",null,"Serenity/JS helps you model your test scenarios from the perspective of ",(0,r.yg)("a",{parentName:"p",href:"/api/core/class/Actor"},"actors")," performing ",(0,r.yg)("a",{parentName:"p",href:"/api/core/class/Activity"},"activities")," to accomplish their goals.\nAssertions follow this same consistent approach, with any assertions expressed using the interaction to ",(0,r.yg)("a",{parentName:"p",href:"/api/assertions/class/Ensure"},(0,r.yg)("inlineCode",{parentName:"a"},"Ensure")),"."),(0,r.yg)("p",null,"The interaction to ",(0,r.yg)("a",{parentName:"p",href:"/api/assertions/class/Ensure"},(0,r.yg)("inlineCode",{parentName:"a"},"Ensure"))," has two flavours:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/assertions/class/Ensure#that"},(0,r.yg)("inlineCode",{parentName:"a"},"Ensure.that")),", which makes the actor evaluate the expectation, and fails immediately if its condition is not met,"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/assertions/class/Ensure#eventually"},(0,r.yg)("inlineCode",{parentName:"a"},"Ensure.eventually")),", which keeps evaluating the expectation until the condition is met, or the ",(0,r.yg)("a",{parentName:"li",href:"/api/core/class/SerenityConfig#interactionTimeout"},"interaction timeout")," expires.")),(0,r.yg)("h2",{id:"the-anatomy-of-a-serenityjs-assertion"},"The anatomy of a Serenity/JS assertion"),(0,r.yg)("p",null,"Both ",(0,r.yg)("inlineCode",{parentName:"p"},"Ensure.that")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Ensure.eventually")," follow the same consistent pattern and accept two arguments:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the ",(0,r.yg)("a",{parentName:"li",href:"http://xunitpatterns.com/ResultVerification.html"},'"actual value"')," - an ",(0,r.yg)("a",{parentName:"li",href:"/api/core#Answerable"},(0,r.yg)("inlineCode",{parentName:"a"},"Answerable"))," to be evaluated in the context of the given ",(0,r.yg)("a",{parentName:"li",href:"/api/core/class/Actor"},"actor"),","),(0,r.yg)("li",{parentName:"ul"},"an ",(0,r.yg)("a",{parentName:"li",href:"/api/core/class/Expectation"},(0,r.yg)("inlineCode",{parentName:"a"},"Expectation"))," that defines the condition to be met by the actual value.")),(0,r.yg)("p",null,"An example Serenity/JS assertion might look like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled } from '@serenity-js/core'\nimport { Ensure, and, startsWith, endsWith } from '@serenity-js/assertions'\n\nawait actorCalled('Edna').attemptsTo(\n    Ensure.that('Hello world', and(startsWith('Hello'), endsWith('world'))),\n    //   actual value --^      ^-- expectation\n)\n")),(0,r.yg)("p",null,"Note that several Serenity/JS modules provide expectations you can use to define your assertions, most notably:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/assertions"},"Serenity/JS assertions module")," provides general use expectations for any type of test automation"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/api/web"},"Serenity/JS web module")," provides expectations dedicated to automating interactions with web interfaces")),(0,r.yg)("h2",{id:"reusable-assertions"},"Reusable assertions"),(0,r.yg)("p",null,'Unlike other assertion libraries, Serenity/JS allows for the "actual value" to be ',(0,r.yg)("a",{parentName:"p",href:"/api/core/class/Question"},(0,r.yg)("strong",{parentName:"a"},"determined dynamically")),"\nand resolved in the context of the actor performing the assertion.\nThis design enables ",(0,r.yg)("strong",{parentName:"p"},"great flexibility")," and helps to maximise ",(0,r.yg)("strong",{parentName:"p"},"opportunities for code reuse"),"."),(0,r.yg)("p",null,"Consider a simple test scenario, verifying that an ",(0,r.yg)("a",{parentName:"p",href:"/api/rest"},"interaction with a REST API")," returns\nthe status code of ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200"},"200 OK"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled } from '@serenity-js/core'\nimport { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\nawait actorCalled('Apisit')\n    .whoCan(CallAnApi.at('https://serenity-js.org/'))\n    .attemptsTo(\n        Send.a(GetRequest.to('/handbook/design/assertions')),\n        Ensure.that(LastResponse.status(), equals(200)),\n    )\n")),(0,r.yg)("p",null,"Since the question about the ",(0,r.yg)("a",{parentName:"p",href:"/api/rest/class/LastResponse#status"},(0,r.yg)("inlineCode",{parentName:"a"},"LastResponse.status()"))," is evaluated dynamically\nby the actor who performed the ",(0,r.yg)("a",{parentName:"p",href:"/api/rest/class/GetRequest"},(0,r.yg)("inlineCode",{parentName:"a"},"GetRequest")),",\nyou could create a custom ",(0,r.yg)("a",{parentName:"p",href:"/api/core/class/Task"},"task")," that encapsulates this operation:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { Answerable, d, Task } from '@serenity-js/rest'\nimport { Send, GetRequest, LastResponse } from '@serenity-js/rest'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\nconst checkUrl = (url: Answerable<string>) =>\n    Task.where(d`#actor checks the ${ url }`,\n        Send.a(GetRequest.to(url)),\n        Ensure.that(LastResponse.status(), equals(200)),\n    )\n")),(0,r.yg)("p",null,"You could then use such custom task to create a simple link checker:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled, List } from '@serenity-js/core'\nimport { CallAnApi } from '@serenity-js/rest'\n\nawait actorCalled('Apisit')\n    .whoCan(CallAnApi.at('https://serenity-js.org/'))\n    .attemptsTo(\n        checkUrl('/handbook/design/assertions'),\n    )\n")),(0,r.yg)("p",null,"Or even combine it with a ",(0,r.yg)("a",{parentName:"p",href:"/api/core/class/List"},"List"),"\nto check multiple URLs one after another:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled, List } from '@serenity-js/core'\nimport { CallAnApi } from '@serenity-js/rest'\n\nawait actorCalled('Apisit')\n    .whoCan(CallAnApi.at('https://serenity-js.org/'))\n    .attemptsTo(\n        List.of([\n            '/handbook/design/assertions',\n            '/handbook/design/screenplay-pattern'\n        ]).\n        forEach(({ actor, item }) =>\n            actor.attemptsTo(\n                checkUrl(item),\n            ))\n    )\n")),(0,r.yg)("h2",{id:"web-assertions"},"Web assertions"),(0,r.yg)("p",null,"Interactions to ",(0,r.yg)("a",{parentName:"p",href:"/api/assertions/class/Ensure#that"},(0,r.yg)("inlineCode",{parentName:"a"},"Ensure.that"))," and ",(0,r.yg)("a",{parentName:"p",href:"/api/assertions/class/Ensure#eventually"},(0,r.yg)("inlineCode",{parentName:"a"},"Ensure.eventually")),"\nare interface-agnostic, so you can use them to verify interactions with ",(0,r.yg)("a",{parentName:"p",href:"/handbook/api-testing/"},"REST APIs"),", ",(0,r.yg)("a",{parentName:"p",href:"/handbook/mobile-testing/"},"mobile apps"),", ",(0,r.yg)("a",{parentName:"p",href:"/handbook/web-testing/"},"web UIs"),", and so on."),(0,r.yg)("p",null,"Consider the following example web widget:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<h1 class="heading">Hello Serenity!</h1>\n')),(0,r.yg)("p",null,"To interact with such widget, you'd define a ",(0,r.yg)("a",{parentName:"p",href:"/api/web/class/PageElement"},(0,r.yg)("inlineCode",{parentName:"a"},"PageElement"))," describing how to locate it:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript"},"import { PageElement, By } from '@serenity-js/web'\n\nconst heading = () =>\n    PageElement.located(By.css('.heading'))\n")),(0,r.yg)("p",null,"Since ",(0,r.yg)("inlineCode",{parentName:"p"},"PageElement")," is an implementation of the standard Serenity/JS ",(0,r.yg)("a",{parentName:"p",href:"/api/core/class/Question"},(0,r.yg)("inlineCode",{parentName:"a"},"Question"))," interface,\nit is accepted by the interaction to ",(0,r.yg)("inlineCode",{parentName:"p"},"Ensure")," just like any other ",(0,r.yg)("a",{parentName:"p",href:"/api/core#Answerable"},(0,r.yg)("inlineCode",{parentName:"a"},"Answerable"))," value:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example web scenario interacting with the widget"',title:'"Example',web:!0,scenario:!0,interacting:!0,with:!0,the:!0,'widget"':!0},"import { actorCalled } from '@serenity-js/core'\nimport { Ensure } from '@serenity-js/assertions'\nimport { isVisible } from '@serenity-js/web'\n\nawait actorCalled('Edna').attemptsTo(\n    Ensure.that(heading(), isVisible()),\n)\n")),(0,r.yg)("h2",{id:"fault-tolerant-assertions"},"Fault-tolerant assertions"),(0,r.yg)("p",null,"What makes web testing challenging is having to deal with ",(0,r.yg)("strong",{parentName:"p"},"unpredictable delays")," typically caused by ",(0,r.yg)("strong",{parentName:"p"},"network traffic"),"\nor ",(0,r.yg)("strong",{parentName:"p"},"complex animations"),"."),(0,r.yg)("p",null,"To help you work around that, Serenity/JS offers an interaction to ",(0,r.yg)("a",{parentName:"p",href:"/api/assertions/class/Ensure#eventually"},(0,r.yg)("inlineCode",{parentName:"a"},"Ensure.eventually")),",\nwhich instead of failing the scenario immediately when the expectation is not met, instructs the actor\nto evaluate the actual value until it meets the expectation, or the ",(0,r.yg)("a",{parentName:"p",href:"/api/core/class/SerenityConfig#interactionTimeout"},"interaction timeout")," expires."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example web scenario interacting with the widget"',title:'"Example',web:!0,scenario:!0,interacting:!0,with:!0,the:!0,'widget"':!0},"import { actorCalled } from '@serenity-js/core'\nimport { Ensure } from '@serenity-js/assertions'\nimport { isVisible } from '@serenity-js/web'\n\nawait actorCalled('Edna').attemptsTo(\n    Ensure.eventually(heading(), isVisible()),\n)\n")),(0,r.yg)("p",null,"Note that while you can set the global\n",(0,r.yg)("a",{parentName:"p",href:"/api/core/class/SerenityConfig#interactionTimeout"},"interaction timeout"),"\nin Serenity/JS configuration, you can also configure it for the specific assertion:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Example web scenario interacting with the widget"',title:'"Example',web:!0,scenario:!0,interacting:!0,with:!0,the:!0,'widget"':!0},"import { actorCalled, Duration } from '@serenity-js/core'\nimport { Ensure } from '@serenity-js/assertions'\nimport { isVisible } from '@serenity-js/web'\n\nawait actorCalled('Edna').attemptsTo(\n    Ensure.eventually(heading(), isVisible())\n        .timeoutAfter(Duration.ofMilliseconds(500)),\n)\n")),(0,r.yg)("h2",{id:"implementing-custom-expectations"},"Implementing custom expectations"),(0,r.yg)("p",null,"Serenity/JS ",(0,r.yg)("a",{parentName:"p",href:"/api/assertions"},"assertions")," and ",(0,r.yg)("a",{parentName:"p",href:"/api/web"},"web")," modules provide expectations you'll need to implement\neven the most sophisticated test scenarios."),(0,r.yg)("p",null,"However, you can also implement ",(0,r.yg)("strong",{parentName:"p"},"custom expectations")," when needed. To do that, consult the examples in ",(0,r.yg)("a",{parentName:"p",href:"/api/core/class/Expectation"},(0,r.yg)("inlineCode",{parentName:"a"},"Expectation"))," API docs\nand the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js"},"Serenity/JS code base on GitHub"),"."))}u.isMDXComponent=!0}}]);