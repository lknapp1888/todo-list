(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([e.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain) */\n\n\n   html, body, div, span, applet, object, iframe,\n   h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n   a, abbr, acronym, address, big, cite, code,\n   del, dfn, em, img, ins, kbd, q, s, samp,\n   small, strike, strong, sub, sup, tt, var,\n   b, u, i, center,\n   dl, dt, dd, ol, ul, li,\n   fieldset, form, label, legend,\n   table, caption, tbody, tfoot, thead, tr, th, td,\n   article, aside, canvas, details, embed, \n   figure, figcaption, footer, header, hgroup, \n   menu, nav, output, ruby, section, summary,\n   time, mark, audio, video {\n       margin: 0;\n       padding: 0;\n       border: 0;\n       font-size: 100%;\n       font: inherit;\n       vertical-align: baseline;\n   }\n   /* HTML5 display-role reset for older browsers */\n   article, aside, details, figcaption, figure, \n   footer, header, hgroup, menu, nav, section {\n       display: block;\n   }\n   body {\n       line-height: 1;\n   }\n   ol, ul {\n       list-style: none;\n   }\n   blockquote, q {\n       quotes: none;\n   }\n   blockquote:before, blockquote:after,\n   q:before, q:after {\n       content: \'\';\n       content: none;\n   }\n   table {\n       border-collapse: collapse;\n       border-spacing: 0;\n   }\n\n/*////////////////////////////////////////////////*/\n\n.container {\n    display: grid;\n    grid-template: 5vh 90vh 5vh / 25vw 25vw 25vw 25vw;\n    grid-template-areas: \n    "header header header header"\n    "nav main main main"\n    "footer footer footer footer";\n}\n\n@media (max-width: 600px) {\n    .container {\n        display: grid;\n        grid-template: 5vh 5vh 85vh 5vh / 25vw 25vw 25vw 25vw;\n        grid-template-areas: \n        "header header header header"\n        "nav nav nav nav"\n        "main main main main"\n        "footer footer footer footer";\n    }\n  }\n\nheader {\n    background-color: rgb(0, 26, 255);\n    grid-area: header;\n}\n\nnav {\n    background-color: rgb(223, 223, 223);\n    grid-area: nav;\n}\n\nmain {\n    background-color: rgb(255, 255, 255);\n    grid-area: main;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    overflow: scroll;\n    padding: 10px;\n}\n\nfooter {\n    background-color: rgb(0, 0, 0);\n    color: white;\n    grid-area: footer;\n}\n\n\n/*todo item content only*/\n\n.todoItem {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: solid black 1px;\n    padding: 10px;\n    width: 80%;\n}\n\n.itemBottom {\n    display: flex;\n    justify-content: space-between;\n}\n\n.itemInfo {\n    display: flex;\n    gap: 10px;\n}\n\n/*nav category and project containers */\n\n.categoryContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n',""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=i(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var l=r(e,i),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),o=n(569),a=n.n(o),s=n(565),l=n.n(s),c=n(216),d=n.n(c),u=n(589),p=n.n(u),f=n(426),m={};function h(e,t,n,r,i){this.title=e,this.description=t,this.dueDate=n,this.priority=r,this.project=i,this.referenceNum=v.itemTicker,v.addToList(this)}m.styleTagTransform=p(),m.setAttributes=l(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,h.prototype.getDescription=function(){console.log(`The description is ${this.description}`)},h.prototype.getTitle=function(){console.log(`The title is ${this.title}`)},h.prototype.getDueDate=function(){console.log(`The due date is ${this.dueDate}`)},h.prototype.getPriority=function(){console.log(`The priority level is ${this.priority}`)},h.prototype.getProject=function(){console.log(`The project is ${this.project}`)};const v={list:[],itemTicker:1,addToList:function(e){this.list.push(e),this.itemTicker++},removeFromList:function(e){for(let t=0;t<this.list.length;t++)this.list[t].referenceNum===e&&this.list.splice(t,1)}};function g(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e){g(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===y(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function D(e){g(1,arguments);var t=b(e);return t.setHours(0,0,0,0),t}function w(e,t){g(2,arguments);var n=D(e),r=D(t);return n.getTime()===r.getTime()}Math.pow(10,8);var N=36e5;function T(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function x(e,t){var n;g(1,arguments);var r=T(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,o=C(e);if(o.date){var a=E(o.date,r);i=P(a.restDateString,a.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var s,l=i.getTime(),c=0;if(o.time&&(c=k(o.time),isNaN(c)))return new Date(NaN);if(!o.timezone){var d=new Date(l+c),u=new Date(0);return u.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),u.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),u}return s=F(o.timezone),isNaN(s)?new Date(NaN):new Date(l+c+s)}var I={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},j=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,B=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,S=/^([+-])(\d{2})(?::?(\d{2}))?$/;function C(e){var t,n={},r=e.split(I.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],I.timeZoneDelimiter.test(n.date)&&(n.date=e.split(I.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var i=I.timezone.exec(t);i?(n.time=t.replace(i[1],""),n.timezone=i[1]):n.time=t}return n}function E(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var i=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?i:100*o,restDateString:e.slice((r[1]||r[2]).length)}}function P(e,t){if(null===t)return new Date(NaN);var n=e.match(j);if(!n)return new Date(NaN);var r=!!n[4],i=$(n[1]),o=$(n[2])-1,a=$(n[3]),s=$(n[4]),l=$(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,s,l)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var i=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+i),r}(t,s,l):new Date(NaN);var c=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(M[t]||(U(e)?29:28))}(t,o,a)&&function(e,t){return t>=1&&t<=(U(e)?366:365)}(t,i)?(c.setUTCFullYear(t,o,Math.max(i,a)),c):new Date(NaN)}function $(e){return e?parseInt(e):1}function k(e){var t=e.match(B);if(!t)return NaN;var n=L(t[1]),r=L(t[2]),i=L(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,i)?n*N+6e4*r+1e3*i:NaN}function L(e){return e&&parseFloat(e.replace(",","."))||0}function F(e){if("Z"===e)return 0;var t=e.match(S);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,i)?n*(r*N+6e4*i):NaN}var M=[31,null,31,30,31,30,31,31,30,31,30,31];function U(e){return e%400==0||e%4==0&&e%100!=0}function q(e,t){g(2,arguments);var n=b(e),r=T(t);return isNaN(r)?new Date(NaN):r?(n.setDate(n.getDate()+r),n):n}const A={filterToday:function(e){const t=e.filter((e=>function(e){return g(1,arguments),w(e,Date.now())}(x(e.dueDate))));return this.sortPriority(t)},filterSevenDay:function(e){const t=new Date,n=e.filter((e=>function(e,t){g(2,arguments);var n=b(e),r=b(t);return n.getTime()>r.getTime()}(x(e.dueDate),function(e,t){g(2,arguments);var n=T(t);return q(e,-n)}(t,1))&&function(e,t){g(2,arguments);var n=b(e),r=b(t);return n.getTime()<r.getTime()}(x(e.dueDate),q(t,6))));return this.sortDate(this.sortPriority(n))},filterAll:function(e){return this.sortDate(this.sortPriority(e))},filterProject:function(e,t){const n=e.filter((e=>e.project===t));return this.sortDate(this.sortPriority(n))},sortPriority:function(e){return e.sort(((e,t)=>e.priority-t.priority))},sortDate:function(e){return e.sort(((e,t)=>x(e.dueDate)-x(t.dueDate)))}},Z={loadPage:function(e){this.loadItemArray(e),this.initFilterBtns(),this.initEditButton(e)},loadItem:function(e){const t=document.createElement("div");t.classList.add("todoItem"),t.classList.add(`todoItem-${e.referenceNum}`),t.innerHTML=`\n        <p>${e.title}</p>\n        <p>${e.description}</p>\n        <div class="itemBottom">\n            <div class="itemInfo">\n                <input class="itemDateInput" data-dateInput-ref="${e.referenceNum} "type="date">\n                <p>${e.dueDate}<p>\n                <p>${e.priority}</p>\n                <p>${e.project}</p>\n            </div>\n            <button class="itemEditBtn editBtn${e.referenceNum}">Edit</button>\n        </div>\n        `,H.main.appendChild(t)},loadItemArray:function(e){for(;H.main.lastChild;)H.main.removeChild(H.main.lastChild);for(let t=0;t<e.length;t++){if(0===t){const n=document.createElement("h2");n.classList.add("dateSubHeading"),n.textContent=`${e[t].dueDate}`,H.main.appendChild(n)}if(this.loadItem(e[t]),e[t+1]&&e[t].dueDate!==e[t+1].dueDate){const n=document.createElement("h2");n.classList.add("dateSubHeading"),n.textContent=`${e[t+1].dueDate}`,H.main.appendChild(n)}}this.initEditButton(e)},editItem:function(e){const t=document.querySelector(`.todoItem-${e}`);for(;t.lastChild;)t.removeChild(t.lastChild);t.innerHTML=`\n        <input type="text" name="" id="" placeholder="title">\n        <textarea name="" id="" cols="30" rows="6"></textarea>\n        <div class="itemBottom">\n            <div class="itemInfo">\n                <input id="testDate" type="date">\n                <label for="priorityLevel">Priority:</label>\n                <select id="priorityLevel" name="priorityLevel">\n                  <option value=1>1</option>\n                  <option value=2>2</option>\n                  <option value=3>3</option>\n                  <option value=4>4</option>\n                </select>\n                <label for="UIProjects">Project:</label>\n                <input type="text" list="UIProjects" />\n                    <datalist id="UIProjects">\n                    <option>Proj</option>\n                    <option>project</option>\n                    <option>project 2</option>\n                    <option>fake project</option>\n                    </datalist>\n            </div>\n            <button class="itemSubmitBtn submitBtn${e}">Submit</button>\n        </div>\n        `},submitItem:function(e){},initFilterBtns:function(){H.todayFilterBtn.addEventListener("click",(()=>{Z.loadItemArray(A.filterToday(v.list))})),H.sevenDayFilterBtn.addEventListener("click",(()=>{Z.loadItemArray(A.filterSevenDay(v.list))})),H.allBtn.addEventListener("click",(()=>{Z.loadItemArray(A.filterAll(v.list))}))},initEditButton:function(e){for(let t=0;t<e.length;t++)document.querySelector(`.editBtn${e[t].referenceNum}`).addEventListener("click",(()=>{console.log(`hello ${e[t].referenceNum}`),this.editItem(e[t].referenceNum)}))}},H={main:document.querySelector("main"),overdueFilterBtn:document.getElementById("overdueFilterBtn"),todayFilterBtn:document.getElementById("todayFilterBtn"),sevenDayFilterBtn:document.getElementById("sevenDayFilterBtn"),allBtn:document.getElementById("allBtn"),projectFilterBtn:document.getElementById("projectFilterBtn"),addProjectBtn:document.getElementById("addProjectBtn")};function O(e,t){this.name=e,this.description=t}O.prototype.getTodoList=function(){return A.filterProject(v.list,this.name)},O.prototype.projectOverview=function(){return`The Project is ${this.name}.\n    Project description: ${this.description}`},new h("first test title","dummy desc one","2023-01-09",1,"Project Zeus"),new h("Second title","dummy desc two","2023-01-28",2,"Brexit"),new h("third title","dummy desc three","2023-01-10",1,"Brexit"),new O("Brexit","This is a project for Britain to leave the EU"),Z.loadPage(A.filterToday(v.list))})()})();