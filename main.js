(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain) */\n\n\n   html, body, div, span, applet, object, iframe,\n   h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n   a, abbr, acronym, address, big, cite, code,\n   del, dfn, em, img, ins, kbd, q, s, samp,\n   small, strike, strong, sub, sup, tt, var,\n   b, u, i, center,\n   dl, dt, dd, ol, ul, li,\n   fieldset, form, label, legend,\n   table, caption, tbody, tfoot, thead, tr, th, td,\n   article, aside, canvas, details, embed, \n   figure, figcaption, footer, header, hgroup, \n   menu, nav, output, ruby, section, summary,\n   time, mark, audio, video {\n       margin: 0;\n       padding: 0;\n       border: 0;\n       font-size: 100%;\n       font: inherit;\n       vertical-align: baseline;\n   }\n   /* HTML5 display-role reset for older browsers */\n   article, aside, details, figcaption, figure, \n   footer, header, hgroup, menu, nav, section {\n       display: block;\n   }\n   body {\n       line-height: 1;\n   }\n   ol, ul {\n       list-style: none;\n   }\n   blockquote, q {\n       quotes: none;\n   }\n   blockquote:before, blockquote:after,\n   q:before, q:after {\n       content: \'\';\n       content: none;\n   }\n   table {\n       border-collapse: collapse;\n       border-spacing: 0;\n   }\n\n/*////////////////////////////////////////////////*/\n\n.container {\n    display: grid;\n    grid-template: 5vh 90vh 5vh / 25vw 25vw 25vw 25vw;\n    grid-template-areas: \n    "header header header header"\n    "nav main main main"\n    "footer footer footer footer";\n}\n\n@media (max-width: 600px) {\n    .container {\n        display: grid;\n        grid-template: 5vh 5vh 85vh 5vh / 25vw 25vw 25vw 25vw;\n        grid-template-areas: \n        "header header header header"\n        "nav nav nav nav"\n        "main main main main"\n        "footer footer footer footer";\n    }\n  }\n\nheader {\n    background-color: rgb(0, 26, 255);\n    grid-area: header;\n}\n\nnav {\n    background-color: rgb(223, 223, 223);\n    grid-area: nav;\n}\n\nmain {\n    background-color: rgb(255, 255, 255);\n    grid-area: main;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    overflow: scroll;\n}\n\nfooter {\n    background-color: rgb(0, 0, 0);\n    color: white;\n    grid-area: footer;\n}\n\n/*todo item content only*/\n\n.todoItem {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: solid black 1px;\n    padding: 10px;\n    width: 80%;\n}\n\n.itemBottom {\n    display: flex;\n    justify-content: space-between;\n}\n\n.itemInfo {\n    display: flex;\n    gap: 10px;\n}\n\n/*nav category and project containers */\n\n.categoryContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n',""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),m={};function h(e,n,t,r,o){this.title=e,this.description=n,this.dueDate=t,this.priority=r,this.project=o,this.referenceNum=v.itemTicker,v.addToList(this)}m.styleTagTransform=u(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,h.prototype.getDescription=function(){console.log(`The description is ${this.description}`)},h.prototype.getTitle=function(){console.log(`The title is ${this.title}`)},h.prototype.getDueDate=function(){console.log(`The due date is ${this.dueDate}`)},h.prototype.getPriority=function(){console.log(`The priority level is ${this.priority}`)},h.prototype.getProject=function(){console.log(`The project is ${this.project}`)};const v={list:[],itemTicker:1,addToList:function(e){this.list.push(e),this.itemTicker++},removeFromList:function(e){for(let n=0;n<this.list.length;n++)this.list[n].referenceNum===e&&this.list.splice(n,1)}};Math.pow(10,8);const g={loadItem:function(e){const n=document.createElement("div");n.classList.add("todoItem"),n.innerHTML=`\n        <p>${e.title}</p>\n        <p>${e.description}</p>\n        <div class="itemBottom">\n            <div class="itemInfo">\n                <input class="itemDateInput" data-dateInput-ref="${e.referenceNum} "type="date">\n                <p>${e.priority}</p>\n                <p>${e.project}</p>\n            </div>\n            <button class="itemEditBtn" data-editBtn-ref="${e.referenceNum}">Edit</button>\n        </div>\n        `,y.main.appendChild(n)},loadItemArray:function(e){for(let n=0;n<e.length;n++)this.loadItem(e[n])}},y={main:document.querySelector("main"),todayFilterBtn:document.getElementById("todayFilterBtn")};function b(e,n){this.name=e,this.description=n}b.prototype.getTodoList=function(){return e=v.list,n=this.name,e.filter((e=>e.project===n));var e,n},b.prototype.projectOverview=function(){return`The Project is ${this.name}.\n    Project description: ${this.description}`},new h("first test title","dummy desc one","2023-01-06",3,"Project Zeus"),new h("Second title","dummy desc two","2023-01-14",2,"Brexit"),new h("third title","dummy desc three","2023-09-24",1,"Brexit"),new b("Brexit","This is a project for Britain to leave the EU"),console.log(g.loadItemArray(v.list.sort(((e,n)=>e.priority-n.priority))))})()})();