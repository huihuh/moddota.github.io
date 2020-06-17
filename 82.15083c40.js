/*! For license information please see 82.15083c40.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[82,83],{178:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},200:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(184);t.a=function(e){const{metadata:t}=e;return a.a.createElement("nav",{className:"pagination-nav"},a.a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.a.createElement(o.a,{className:"pagination-nav__link",to:t.previous.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),a.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.a.createElement(o.a,{className:"pagination-nav__link",to:t.next.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),a.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))}},201:function(e,t,n){"use strict";var r=n(0);t.a=function(e,t,n){const[a,o]=Object(r.useState)(void 0);Object(r.useEffect)(()=>{let r=[],i=[];function l(){const l=function(){let e=0,t=null;for(r=document.getElementsByClassName("anchor");e<r.length&&!t;){const a=r[e],{top:o}=a.getBoundingClientRect();o>=0&&o<=n&&(t=a),e+=1}return t}();if(l){let n=0,r=!1;for(i=document.getElementsByClassName(e);n<i.length&&!r;){const e=i[n],{href:c}=e,s=decodeURIComponent(c.substring(c.indexOf("#")+1));l.id===s&&(a&&a.classList.remove(t),e.classList.add(t),o(e),r=!0),n+=1}}}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}})}},208:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(197);t.default=function(){return a.a.createElement(o.a,{title:"Page Not Found"},a.a.createElement("div",{className:"container margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col--6 col--offset-3"},a.a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.a.createElement("p",null,"We could not find what you were looking for."),a.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},241:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),i=n(182),l=n.n(i),c=n(181),s=n(211),u=n(212),p=n(184),f=n(183),d=n(105),m=n.n(d);function h({item:e,onItemClick:t,collapsible:n,activePath:i,...c}){const{items:s,href:u,label:d,type:m}=e,[y,g]=Object(a.useState)(e.collapsed),[b,v]=Object(a.useState)(null);e.collapsed!==b&&(v(e.collapsed),g(e.collapsed));const k=Object(a.useCallback)(e=>{e.preventDefault(),e.target.blur(),g(e=>!e)});switch(m){case"category":return s.length>0&&o.a.createElement("li",{className:l()("menu__list-item",{"menu__list-item--collapsed":y}),key:d},o.a.createElement("a",Object(r.a)({className:l()("menu__link",{"menu__link--sublist":n,"menu__link--active":n&&!e.collapsed}),href:"#!",onClick:n?k:void 0},c),d),o.a.createElement("ul",{className:"menu__list"},s.map(e=>o.a.createElement(h,{tabIndex:y?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:n,activePath:i}))));case"link":default:return o.a.createElement("li",{className:"menu__list-item",key:d},o.a.createElement(p.a,Object(r.a)({className:l()("menu__link",{"menu__link--active":u===i}),to:u},Object(f.a)(u)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},c),d))}}t.a=function(e){const[t,n]=Object(a.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:i,hideOnScroll:f=!1}={}}}={},isClient:d}=Object(c.a)(),{logoLink:y,logoLinkProps:g,logoImageUrl:b,logoAlt:v}=Object(u.a)(),{docsSidebars:k,path:E,sidebar:j,sidebarCollapsible:O}=e;if(Object(s.a)(t),!j)return null;const w=k[j];if(!w)throw new Error(`Cannot find the sidebar "${j}" in the sidebar config!`);return O&&w.forEach(e=>function e(t,n){const{items:r,href:a,type:o}=t;switch(o){case"category":{const a=r.map(t=>e(t,n)).filter(e=>e).length>0;return t.collapsed=!a,a}case"link":default:return a===n}}(e,E)),o.a.createElement("div",{className:m.a.sidebar},f&&o.a.createElement(p.a,Object(r.a)({tabIndex:"-1",className:m.a.sidebarLogo,to:y},g),null!=b&&o.a.createElement("img",{key:d,src:b,alt:v}),null!=i&&o.a.createElement("strong",null,i)),o.a.createElement("div",{className:l()("menu","menu--responsive",m.a.menu,{"menu--show":t})},o.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{n(!t)}},t?o.a.createElement("span",{className:l()(m.a.sidebarMenuIcon,m.a.sidebarMenuCloseIcon)},"\xd7"):o.a.createElement("svg",{"aria-label":"Menu",className:m.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),o.a.createElement("ul",{className:"menu__list"},w.map(e=>o.a.createElement(h,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),n(!1)},collapsible:O,activePath:E})))))}},242:function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),a=document.createRange();a.selectNodeContents(e),r.removeAllRanges(),r.addRange(a),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function a(){r.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,a=n.length;r<a;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],a=[];if(r&&t)for(var o=0,i=r.length;o<i;o++)r[o].fn!==t&&r[o].fn._!==t&&a.push(r[o]);return a.length?n[e]=a:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),a=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return a(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);function a(e,t,n,r,a){var i=o.apply(this,arguments);return e.addEventListener(n,i,a),{destroy:function(){e.removeEventListener(n,i,a)}}}function o(e,t,n,a){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&a.call(e,n)}}e.exports=function(e,t,n,r,o){return"function"==typeof e.addEventListener?a.apply(null,arguments):"function"==typeof n?a.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return a(e,t,n,r,o)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=a()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=a()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),c=n(1),s=n.n(c),u=n(2),p=n.n(u),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),d(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===f(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=p()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return h("action",e)}},{key:"defaultTarget",value:function(e){var t=h("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return h("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(s.a);function h(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=m}]).default},e.exports=r()},243:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],a=t[3];if(n&&a){var o=[],i=(n=parseInt(n))<(a=parseInt(a))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(a+=i);for(var l=n;l!=a;l+=i)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},298:function(e,t,n){"use strict";var r=n(2),a=n(0),o=n.n(a),i=n(184),l=n(182),c=n.n(l),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:n(34).a,theme:s};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},h=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},y=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=f({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=f({},n,{backgroundColor:null}),a};function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var b=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?y(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=f({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?f({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),p(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(l))}})),p(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=f({},g(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?f({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,l=[],c=[l];i>-1;){for(;(o=r[i]++)<a[i];){var s=void 0,u=t[i],p=n[i][o];if("string"==typeof p?(u=i>0?u:["plain"],s=p):(u=h(u,p.type),p.alias&&(u=h(u,p.alias)),s=p.content),"string"==typeof s){var f=s.split(d),y=f.length;l.push({types:u,content:f[0]});for(var g=1;g<y;g++)m(l),c.push(l=[]),l.push({types:u,content:f[g]})}else i++,t.push(u),n.push(s),r.push(0),a.push(s.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return m(l),c}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),v=n(242),k=n.n(v),E=n(243),j=n.n(E),O=n(181),w={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},x=n(199);var _=()=>{const{siteConfig:{themeConfig:{prism:e={}}}}=Object(O.a)(),{isDarkTheme:t}=Object(x.a)(),n=e.theme||w,r=e.darkTheme||n;return t?r:n},T=n(106),N=n.n(T);const S=/{([\d,-]+)}/,C=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map(e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`).join("|");return new RegExp(`^\\s*(?:${r})\\s*$`)},P=/title=".*"/;var L=({children:e,className:t,metastring:n})=>{const{siteConfig:{themeConfig:{prism:i={}}}}=Object(O.a)(),[l,s]=Object(a.useState)(!1),[p,f]=Object(a.useState)(!1);Object(a.useEffect)(()=>{f(!0)},[]);const d=Object(a.useRef)(null),m=Object(a.useRef)(null);let h=[],y="";const g=_();if(n&&S.test(n)){const e=n.match(S)[1];h=j.a.parse(e).filter(e=>e>0)}n&&P.test(n)&&(y=n.match(P)[0].split("title=")[1].replace(/"+/g,"")),Object(a.useEffect)(()=>{let e;return m.current&&(e=new k.a(m.current,{target:()=>d.current})),()=>{e&&e.destroy()}},[m.current,d.current]);let v=t&&t.replace(/language-/,"");!v&&i.defaultLanguage&&(v=i.defaultLanguage);let E=e.replace(/\n$/,"");if(0===h.length&&void 0!==v){let t="";const n=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}})(v),r=e.replace(/\n$/,"").split("\n");let a;for(let e=0;e<r.length;){const o=e+1,i=r[e].match(n);if(null!==i){switch(i.slice(1).reduce((e,t)=>e||t,void 0)){case"highlight-next-line":t+=o+",";break;case"highlight-start":a=o;break;case"highlight-end":t+=`${a}-${o-1},`}r.splice(e,1)}else e+=1}h=j.a.parse(t),E=r.join("\n")}const w=()=>{window.getSelection().empty(),s(!0),setTimeout(()=>s(!1),2e3)};return o.a.createElement(b,Object(r.a)({},u,{key:p,theme:g,code:E,language:v}),({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:i})=>o.a.createElement(o.a.Fragment,null,y&&o.a.createElement("div",{style:t,className:N.a.codeBlockTitle},y),o.a.createElement("div",{className:N.a.codeBlockContent},o.a.createElement("button",{ref:m,type:"button","aria-label":"Copy code to clipboard",className:c()(N.a.copyButton,{[N.a.copyButtonWithTitle]:y}),onClick:w},l?"Copied":"Copy"),o.a.createElement("div",{tabIndex:"0",className:c()(e,N.a.codeBlock,{[N.a.codeBlockWithTitle]:y})},o.a.createElement("div",{ref:d,className:N.a.codeBlockLines,style:t},n.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return h.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(r.a)({key:t},n),e.map((e,t)=>o.a.createElement("span",Object(r.a)({key:t},i({token:e,key:t})))))}))))))},A=(n(107),n(108)),M=n.n(A);var I=e=>function({id:t,...n}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:r=!1}={}}={}}={}}=Object(O.a)();return t?o.a.createElement(e,n,o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:c()("anchor",{[M.a.enhancedAnchor]:!r}),id:t}),n.children,o.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#")):o.a.createElement(e,n)},B=n(109),D=n.n(B);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?o.a.createElement(L,e):t},a:e=>/\.[^./]+$/.test(e.href)?o.a.createElement("a",e):o.a.createElement(i.a,e),pre:e=>o.a.createElement("div",Object(r.a)({className:D.a.mdxCodeBlock},e)),h1:I("h1"),h2:I("h2"),h3:I("h3"),h4:I("h4"),h5:I("h5"),h6:I("h6")}}}]);