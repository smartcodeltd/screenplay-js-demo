"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[88664],{43636:(e,r,t)=>{t.d(r,{Iu:()=>l,yg:()=>d});var a=t(85668);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(t),y=n,d=f["".concat(s,".").concat(y)]||f[y]||g[y]||i;return t?a.createElement(d,o(o({ref:r},l),{},{components:t})):a.createElement(d,o({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=y;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[f]="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},31224:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(15307),n=(t(85668),t(43636));const i={sidebar_position:5},o="Artifact Archiver",c={unversionedId:"reporting/artifact-archiver",id:"reporting/artifact-archiver",title:"Artifact Archiver",description:"ArtifactArchiver, available as part of the @serenity-js/core module,",source:"@site/docs/reporting/artifact-archiver.mdx",sourceDirName:"reporting",slug:"/reporting/artifact-archiver",permalink:"/handbook/reporting/artifact-archiver",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/reporting/artifact-archiver.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Photographer",permalink:"/handbook/reporting/photographer"},next:{title:"Stream Reporter",permalink:"/handbook/reporting/stream-reporter"}},s={},p=[{value:"Installation and usage",id:"installation-and-usage",level:2},{value:"Integration",id:"integration",level:2}],l={toc:p},f="wrapper";function g(e){let{components:r,...t}=e;return(0,n.yg)(f,(0,a.c)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"artifact-archiver"},"Artifact Archiver"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/api/core/class/ArtifactArchiver"},(0,n.yg)("inlineCode",{parentName:"a"},"ArtifactArchiver")),", available as part of the ",(0,n.yg)("a",{parentName:"p",href:"/api/core"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/core"))," module,\nlistens to ",(0,n.yg)("a",{parentName:"p",href:"/api/core-events/class/ArtifactGenerated"},(0,n.yg)("inlineCode",{parentName:"a"},"ArtifactGenerated"))," events generated by other ",(0,n.yg)("a",{parentName:"p",href:"/api/core/interface/StageCrewMember"},(0,n.yg)("inlineCode",{parentName:"a"},"StageCrewMembers")),"\nand saves the artifacts they contain to disk. For example, ",(0,n.yg)("inlineCode",{parentName:"p"},"ArtifactArchiver")," is responsible for persisting screenshots generated by the ",(0,n.yg)("a",{parentName:"p",href:"/api/web/class/Photographer"},(0,n.yg)("inlineCode",{parentName:"a"},"Photographer")),", as well as Serenity BDD ",(0,n.yg)("inlineCode",{parentName:"p"},"json")," reports\ngenerated by the ",(0,n.yg)("a",{parentName:"p",href:"/api/serenity-bdd/class/SerenityBDDReporter"},(0,n.yg)("inlineCode",{parentName:"a"},"SerenityBDDReporter")),"."),(0,n.yg)("h2",{id:"installation-and-usage"},"Installation and usage"),(0,n.yg)("p",null,"To learn more about the ",(0,n.yg)("inlineCode",{parentName:"p"},"ArtifactArchiver"),", please consult:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"installation instructions in ",(0,n.yg)("a",{parentName:"li",href:"/api/core"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/core")," documentation"),","),(0,n.yg)("li",{parentName:"ul"},"configuration examples in ",(0,n.yg)("a",{parentName:"li",href:"/api/core/class/ArtifactArchiver"},(0,n.yg)("inlineCode",{parentName:"a"},"ArtifactArchiver")),".")),(0,n.yg)("p",null,"You might also want to explore ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/tree/main/examples"},"Serenity/JS example projects on GitHub"),"."),(0,n.yg)("h2",{id:"integration"},"Integration"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/api/core/class/ArtifactArchiver"},(0,n.yg)("inlineCode",{parentName:"a"},"ArtifactArchiver"))," listens to ",(0,n.yg)("a",{parentName:"p",href:"/api/core-events/class/ArtifactGenerated"},(0,n.yg)("inlineCode",{parentName:"a"},"ArtifactGenerated"))," ",(0,n.yg)("a",{parentName:"p",href:"/handbook/reporting/domain-events"},"domain events"),"\nand emits ",(0,n.yg)("a",{parentName:"p",href:"/api/core-events/class/ArtifactArchived"},(0,n.yg)("inlineCode",{parentName:"a"},"ArtifactArchived"))," events when the generated artifact is successfully saved to disk."),(0,n.yg)("mermaid",{value:'graph TB\n    SCM["StageCrewMember"]\n    S["Serenity"]\n    AA["ArtifactArchiver"]\n    HDD(["File system"])\n    SCM -- "notifies<br>[ArtifactGenerated]" --\x3e S\n\n    subgraph "core"\n        S -- "notifies<br>[ArtifactArchived]" --\x3e SCM\n        S -- "notifies<br>[ArtifactGenerated]" --\x3e AA\n        AA -- "notifies<br>[ArtifactArchived]" --\x3e S\n    end\n    AA -- "writes<br />[files]" --\x3e HDD\n\n    class SCM socket\n    click S "/api/core"\n    click AA "/api/core/class/ArtifactArchiver"'}))}g.isMDXComponent=!0}}]);