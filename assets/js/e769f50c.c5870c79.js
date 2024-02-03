"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[96624,97336,99656],{18615:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ee});var a=n(85668),o=n(71076),l=n(71552),r=n(76828),c=n(45772),i=n(69672),s=n(31828),d=n(96496),m=n(26496),u=n(95516),p=n(104);const b={backToTopButton:"backToTopButton_z1FD",backToTopButtonShow:"backToTopButtonShow_w1wE"};function h(){const{shown:e,scrollToTop:t}=(0,p.O)({threshold:300});return a.createElement("button",{"aria-label":(0,u.G)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.c)("clean-btn",r.W.common.backToTopButton,b.backToTopButton,e&&b.backToTopButtonShow),type:"button",onClick:t})}var E=n(91340),f=n(27672),g=n(19288),v=n(38916),_=n(97352),C=n(15307);function k(e){return a.createElement("svg",(0,C.c)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_Ftvb",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_c4WT"};function I(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.G)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.G)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.c)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},a.createElement(k,{className:S.collapseSidebarButtonIcon}))}var y=n(26464),N=n(86512),x=n(87212),T=n(20088),w=n(58128),B=n(32760),A=n(49452),W=n(78136);function M(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.G)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function L(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:p,className:b,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,v.y)(),f=function(e){const t=(0,W.c)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.OQ)(e):void 0),[e,t])}(t),g=(0,i.Md)(t,l),_=(0,B.Sc)(h,l),{collapsed:k,setCollapsed:S}=(0,w.a)({initialState:()=>!!p&&(!g&&t.collapsed)}),{expandedItem:I,setExpandedItem:y}=(0,x.E)(),N=function(e){void 0===e&&(e=!k),y(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const l=(0,T.i0)(t);(0,a.useEffect)((()=>{t&&!l&&n&&o(!1)}),[t,l,n,o])}({isActive:g,collapsed:k,updateCollapsed:N}),(0,a.useEffect)((()=>{p&&null!=I&&I!==s&&E&&S(!0)}),[p,I,s,S,E]),a.createElement("li",{className:(0,o.c)(r.W.docs.docSidebarItemCategory,r.W.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},b)},a.createElement("div",{className:(0,o.c)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(A.default,(0,C.c)({className:(0,o.c)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!h&&p,"menu__link--active":g}),onClick:p?e=>{n?.(t),h?N(!1):(e.preventDefault(),N())}:()=>{n?.(t)},"aria-current":_?"page":void 0,"aria-expanded":p?!k:void 0,href:p?f??"#":f},d),u),h&&p&&a.createElement(M,{categoryLabel:u,onClick:e=>{e.preventDefault(),N()}})),a.createElement(w.U,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(j,{items:m,tabIndex:k?-1:0,onItemClick:n,activePath:l,level:c+1})))}var P=n(20024),H=n(97712);const O={menuExternalLink:"menuExternalLink_xK2O"};function F(e){let{item:t,onItemClick:n,activePath:l,level:c,index:s,...d}=e;const{href:m,label:u,className:p,autoAddBaseUrl:b}=t,h=(0,i.Md)(t,l),E=(0,P.c)(m);return a.createElement("li",{className:(0,o.c)(r.W.docs.docSidebarItemLink,r.W.docs.docSidebarItemLinkLevel(c),"menu__list-item",p),key:u},a.createElement(A.default,(0,C.c)({className:(0,o.c)("menu__link",!E&&O.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:b,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(H.c,null)))}const D={menuHtmlItem:"menuHtmlItem_anEq"};function R(e){let{item:t,level:n,index:l}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,o.c)(r.W.docs.docSidebarItemLink,r.W.docs.docSidebarItemLinkLevel(n),i&&[D.menuHtmlItem,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:c}})}function G(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(L,(0,C.c)({item:t},n));case"html":return a.createElement(R,(0,C.c)({item:t},n));default:return a.createElement(F,(0,C.c)({item:t},n))}}function U(e){let{items:t,...n}=e;return a.createElement(x.g,null,t.map(((e,t)=>a.createElement(G,(0,C.c)({key:t,item:e,index:t},n)))))}const j=(0,a.memo)(U),q={menu:"menu_qiME",menuWithAnnouncementBar:"menuWithAnnouncementBar_hRfJ"};function z(e){let{path:t,sidebar:n,className:l}=e;const c=function(){const{isActive:e}=(0,y.el)(),[t,n]=(0,a.useState)(e);return(0,N.SM)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.G)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.c)("menu thin-scrollbar",q.menu,c&&q.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,o.c)(r.W.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:n,activePath:t,level:1})))}const K="sidebar_vJCc",V="sidebarWithHideableNavbar_Fo4g",Q="sidebarHidden_vBKa",Y="sidebarLogo_nlll";function J(e){let{path:t,sidebar:n,onCollapse:l,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,v.y)();return a.createElement("div",{className:(0,o.c)(K,c&&V,r&&Q)},c&&a.createElement(_.c,{tabIndex:-1,className:Y}),a.createElement(z,{path:t,sidebar:n}),i&&a.createElement(I,{onClick:l}))}const X=a.memo(J);var Z=n(24520),$=n(92336);const ee=e=>{let{sidebar:t,path:n}=e;const l=(0,$.q)();return a.createElement("ul",{className:(0,o.c)(r.W.docs.docSidebarMenu,"menu__list")},a.createElement(j,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function te(e){return a.createElement(Z.Mx,{component:ee,props:e})}const ne=a.memo(te);function ae(e){const t=(0,g.U)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(X,e),o&&a.createElement(ne,e))}const oe={expandButton:"expandButton_qIqc",expandButtonIcon:"expandButtonIcon_aOpf"};function le(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:oe.expandButton,title:(0,u.G)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.G)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(k,{className:oe.expandButtonIcon}))}const re={docSidebarContainer:"docSidebarContainer_aIKW",docSidebarContainerHidden:"docSidebarContainerHidden_UIq3",sidebarViewport:"sidebarViewport_DwR9"};function ce(e){let{children:t}=e;const n=(0,d.m)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function ie(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:l}=e;const{pathname:c}=(0,f.IT)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),!i&&(0,E.I)()&&s(!0),l((e=>!e))}),[l,i]);return a.createElement("aside",{className:(0,o.c)(r.W.docs.docSidebarContainer,re.docSidebarContainer,n&&re.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(re.docSidebarContainer)&&n&&s(!0)}},a.createElement(ce,null,a.createElement("div",{className:(0,o.c)(re.sidebarViewport,i&&re.sidebarViewportHidden)},a.createElement(ae,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(le,{toggleSidebar:d}))))}const se={docMainContainer:"docMainContainer_fv3b",docMainContainerEnhanced:"docMainContainerEnhanced_wOQt",docItemWrapperEnhanced:"docItemWrapperEnhanced_DUiu"};function de(e){let{hiddenSidebarContainer:t,children:n}=e;const l=(0,d.m)();return a.createElement("main",{className:(0,o.c)(se.docMainContainer,(t||!l)&&se.docMainContainerEnhanced)},a.createElement("div",{className:(0,o.c)("container padding-top--md padding-bottom--lg",se.docItemWrapper,t&&se.docItemWrapperEnhanced)},n))}const me={docPage:"docPage_pOTq",docsWrapper:"docsWrapper_BqXd","themedComponent--light":"themedComponent--light_HcOG"};function ue(e){let{children:t}=e;const n=(0,d.m)(),[o,l]=(0,a.useState)(!1);return a.createElement(m.c,{wrapperClassName:me.docsWrapper},a.createElement(h,null),a.createElement("div",{className:me.docPage},n&&a.createElement(ie,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:l}),a.createElement(de,{hiddenSidebarContainer:o},t)))}var pe=n(97336),be=n(13276);function he(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(be.c,{version:t.version,tag:(0,c.SE)(t.pluginId,t.version)}),a.createElement(l.U7,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ee(e){const{versionMetadata:t}=e,n=(0,i.sr)(e);if(!n)return a.createElement(pe.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(he,e),a.createElement(l.cr,{className:(0,o.c)(r.W.wrapper.docsPages,r.W.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.Q,{version:t},a.createElement(d.y,{name:m,items:u},a.createElement(ue,null,c)))))}},97336:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(85668),o=n(95516),l=n(71552),r=n(26496);function c(){return a.createElement(a.Fragment,null,a.createElement(l.U7,{title:(0,o.G)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.c,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.c,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.c,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.c,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},87212:(e,t,n)=>{n.d(t,{E:()=>i,g:()=>c});var a=n(85668),o=n(20088);const l=Symbol("EmptyContext"),r=a.createContext(l);function c(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),l=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return a.createElement(r.Provider,{value:l},t)}function i(){const e=(0,a.useContext)(r);if(e===l)throw new o.AH("DocSidebarItemsExpandedStateProvider");return e}},104:(e,t,n)=>{n.d(t,{O:()=>r});var a=n(85668),o=n(86512),l=n(16928);function r(e){let{threshold:t}=e;const[n,r]=(0,a.useState)(!1),c=(0,a.useRef)(!1),{startScroll:i,cancelScroll:s}=(0,o.yI)();return(0,o.SM)(((e,n)=>{let{scrollY:a}=e;const o=n?.scrollY;o&&(c.current?c.current=!1:a>=o?(s(),r(!1)):a<t?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,l.c)((e=>{e.location.hash&&(c.current=!0,r(!1))})),{shown:n,scrollToTop:()=>i(0)}}},51208:(e,t,n)=>{const a=n(85668).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=a},82728:(e,t,n)=>{const a=["options","packages"];function o(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n(17388),n(82208);const l=n(85668),r=n(18615),c=n(51208),i=e=>e&&e.__esModule?e:{default:e},s=i(l),d=i(r);function m(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function u(e,t,n){return Object.entries(e).forEach((a=>{let[o,l]=a;if("id"===o){const a="type"in e;(!a||a&&"reference"!==e.type)&&(t[Number(l)]=e,n&&(e.parentId=n.id))}else Array.isArray(l)?l.forEach((n=>{m(n)&&u(n,t,e)})):m(l)&&u(l,t,e)})),t}function p(e){const t={};return e.forEach((e=>{e.entryPoints.forEach((e=>{u(e.reflection,t)}))})),t}e.exports=function(e){let t=e.options,n=e.packages,r=o(e,a);const i=l.useMemo((()=>({options:t,reflections:p(n)})),[t,n]);return s.default.createElement(c.ApiDataContext.Provider,{value:i},s.default.createElement("div",{className:"apiPage"},s.default.createElement(d.default,r)))}},17388:(e,t,n)=>{n.r(t)},82208:(e,t,n)=>{n.r(t)}}]);