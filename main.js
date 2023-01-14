(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(81),r=n.n(i),o=n(645),a=n.n(o)()(r());a.push([e.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain) */\n\n\n   html, body, div, span, applet, object, iframe,\n   h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n   a, abbr, acronym, address, big, cite, code,\n   del, dfn, em, img, ins, kbd, q, s, samp,\n   small, strike, strong, sub, sup, tt, var,\n   b, u, i, center,\n   dl, dt, dd, ol, ul, li,\n   fieldset, form, label, legend,\n   table, caption, tbody, tfoot, thead, tr, th, td,\n   article, aside, canvas, details, embed, \n   figure, figcaption, footer, header, hgroup, \n   menu, nav, output, ruby, section, summary,\n   time, mark, audio, video {\n       margin: 0;\n       padding: 0;\n       border: 0;\n       font-size: 100%;\n       font: inherit;\n       vertical-align: baseline;\n   }\n   /* HTML5 display-role reset for older browsers */\n   article, aside, details, figcaption, figure, \n   footer, header, hgroup, menu, nav, section {\n       display: block;\n   }\n   body {\n       line-height: 1;\n   }\n   ol, ul {\n       list-style: none;\n   }\n   blockquote, q {\n       quotes: none;\n   }\n   blockquote:before, blockquote:after,\n   q:before, q:after {\n       content: \'\';\n       content: none;\n   }\n   table {\n       border-collapse: collapse;\n       border-spacing: 0;\n   }\n\n/*////////////////////////////////////////////////*/\n\n.container {\n    display: grid;\n    grid-template: 5vh 90vh 5vh / 25vw 25vw 25vw 25vw;\n    grid-template-areas: \n    "header header header header"\n    "nav main main main"\n    "footer footer footer footer";\n}\n\n@media (max-width: 600px) {\n    .container {\n        display: grid;\n        grid-template: 5vh 5vh 85vh 5vh / 25vw 25vw 25vw 25vw;\n        grid-template-areas: \n        "header header header header"\n        "nav nav nav nav"\n        "main main main main"\n        "footer footer footer footer";\n    }\n  }\n\nheader {\n    background-color: rgb(0, 26, 255);\n    grid-area: header;\n}\n\nnav {\n    background-color: rgb(223, 223, 223);\n    grid-area: nav;\n}\n\nmain {\n    background-color: rgb(255, 255, 255);\n    grid-area: main;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n    overflow: scroll;\n    padding: 10px;\n}\n\nfooter {\n    background-color: rgb(0, 0, 0);\n    color: white;\n    grid-area: footer;\n}\n\n\n/*todo item content only*/\n\n.todoItem {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border: solid black 1px;\n    padding: 10px;\n    width: 80%;\n}\n\n.itemTopRowContainer {\n    display: flex;\n    justify-content: space-between;\n}\n\n.itemBottom {\n    display: flex;\n    justify-content: space-between;\n}\n\n.itemInfo {\n    display: flex;\n    gap: 10px;\n}\n\n/*nav category and project containers */\n\n.categoryContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.selectedFilter {\n    background-color: rgb(255, 0, 191);\n}\n\n',""]);const l=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},a=[],l=0;l<e.length;l++){var s=e[l],c=i.base?s[0]+i.base:s[0],d=o[c]||0,u="".concat(c," ").concat(d);o[c]=d+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=r(p,i);i.byIndex=l,t.splice(l,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var l=n(o[a]);t[l].references--}for(var s=i(e,r),c=0;c<o.length;c++){var d=n(o[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),r=n.n(i),o=n(569),a=n.n(o),l=n(565),s=n.n(l),c=n(216),d=n.n(c),u=n(589),m=n.n(u),p=n(426),f={};function v(e,t,n,i,r){this.title=e,this.description=t,this.dueDate=n,this.priority=i,this.project=r,this.referenceNum=h.itemTicker,this.completionStatus=!1,this.archiveStatus=!1,h.addToList(this)}f.styleTagTransform=m(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,v.prototype.getDescription=function(){console.log(`The description is ${this.description}`)},v.prototype.getTitle=function(){console.log(`The title is ${this.title}`)},v.prototype.getDueDate=function(){console.log(`The due date is ${this.dueDate}`)},v.prototype.getPriority=function(){console.log(`The priority level is ${this.priority}`)},v.prototype.getProject=function(){console.log(`The project is ${this.project}`)};const h={list:[],itemTicker:1,addToList:function(e){this.list.push(e),this.itemTicker++},removeFromList:function(e){for(let t=0;t<this.list.length;t++)this.list[t].referenceNum===e&&this.list.splice(t,1)},getIndexNum:function(e){for(let t=0;t<this.list.length;t++)if(this.list[t].referenceNum===e)return t}};function g(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e){g(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===y(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function B(e){g(1,arguments);var t=b(e);return t.setHours(0,0,0,0),t}function D(e,t){g(2,arguments);var n=B(e),i=B(t);return n.getTime()===i.getTime()}Math.pow(10,8);var N=36e5;function j(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function w(e,t){var n;g(1,arguments);var i=j(null!==(n=null==t?void 0:t.additionalDigits)&&void 0!==n?n:2);if(2!==i&&1!==i&&0!==i)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var r,o=L(e);if(o.date){var a=I(o.date,i);r=S(a.restDateString,a.year)}if(!r||isNaN(r.getTime()))return new Date(NaN);var l,s=r.getTime(),c=0;if(o.time&&(c=x(o.time),isNaN(c)))return new Date(NaN);if(!o.timezone){var d=new Date(s+c),u=new Date(0);return u.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),u.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),u}return l=k(o.timezone),isNaN(l)?new Date(NaN):new Date(s+c+l)}var P={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},F=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,T=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,C=/^([+-])(\d{2})(?::?(\d{2}))?$/;function L(e){var t,n={},i=e.split(P.dateTimeDelimiter);if(i.length>2)return n;if(/:/.test(i[0])?t=i[0]:(n.date=i[0],t=i[1],P.timeZoneDelimiter.test(n.date)&&(n.date=e.split(P.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var r=P.timezone.exec(t);r?(n.time=t.replace(r[1],""),n.timezone=r[1]):n.time=t}return n}function I(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),i=e.match(n);if(!i)return{year:NaN,restDateString:""};var r=i[1]?parseInt(i[1]):null,o=i[2]?parseInt(i[2]):null;return{year:null===o?r:100*o,restDateString:e.slice((i[1]||i[2]).length)}}function S(e,t){if(null===t)return new Date(NaN);var n=e.match(F);if(!n)return new Date(NaN);var i=!!n[4],r=$(n[1]),o=$(n[2])-1,a=$(n[3]),l=$(n[4]),s=$(n[5])-1;if(i)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,l,s)?function(e,t,n){var i=new Date(0);i.setUTCFullYear(e,0,4);var r=7*(t-1)+n+1-(i.getUTCDay()||7);return i.setUTCDate(i.getUTCDate()+r),i}(t,l,s):new Date(NaN);var c=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(q[t]||(A(e)?29:28))}(t,o,a)&&function(e,t){return t>=1&&t<=(A(e)?366:365)}(t,r)?(c.setUTCFullYear(t,o,Math.max(r,a)),c):new Date(NaN)}function $(e){return e?parseInt(e):1}function x(e){var t=e.match(T);if(!t)return NaN;var n=E(t[1]),i=E(t[2]),r=E(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,i,r)?n*N+6e4*i+1e3*r:NaN}function E(e){return e&&parseFloat(e.replace(",","."))||0}function k(e){if("Z"===e)return 0;var t=e.match(C);if(!t)return 0;var n="+"===t[1]?-1:1,i=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,r)?n*(i*N+6e4*r):NaN}var q=[31,null,31,30,31,30,31,31,30,31,30,31];function A(e){return e%400==0||e%4==0&&e%100!=0}function M(e,t){g(2,arguments);var n=b(e),i=j(t);return isNaN(i)?new Date(NaN):i?(n.setDate(n.getDate()+i),n):n}const U={filterOverdue:function(e){const t=e.filter((e=>function(e){return g(1,arguments),b(e).getTime()<Date.now()}(M(w(e.dueDate),1))));return this.sortPriority(t)},filterToday:function(e){const t=e.filter((e=>function(e){return g(1,arguments),D(e,Date.now())}(w(e.dueDate))));return this.sortPriority(t)},filterSevenDay:function(e){const t=new Date,n=e.filter((e=>function(e,t){g(2,arguments);var n=b(e),i=b(t);return n.getTime()>i.getTime()}(w(e.dueDate),function(e,t){g(2,arguments);var n=j(t);return M(e,-n)}(t,1))&&function(e,t){g(2,arguments);var n=b(e),i=b(t);return n.getTime()<i.getTime()}(w(e.dueDate),M(t,6))));return this.sortDate(this.sortPriority(n))},filterAll:function(e){return this.sortDate(this.sortPriority(e))},filterProject:function(e,t){if("all"===t)return this.sortDate(this.sortPriority(e));const n=e.filter((e=>this.getProjectClassName(e.project)===t));return this.sortDate(this.sortPriority(n))},filterDateAndProject:function(e,t,n){let i="";return"overdue"===n&&(i=this.filterOverdue(e)),"today"===n&&(i=this.filterToday(e)),"sevenDay"===n&&(i=this.filterSevenDay(e)),"all"===n&&(i=this.filterAll(e)),""===this.activeProjectFilter||"all"===this.activeProjectFilter?i:this.filterProject(i,t)},sortPriority:function(e){return e.sort(((e,t)=>e.priority-t.priority))},sortDate:function(e){return e.sort(((e,t)=>w(e.dueDate)-w(t.dueDate)))},filterUnique:function(e,t,n){return n.indexOf(e)===t},getProjectArray:function(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].project);return t.filter(U.filterUnique).sort((function(e,t){let n=e.toLowerCase(),i=t.toLowerCase();return n<i?-1:n>i?1:0}))},getProjectClassName:function(e){let t=e;return t=t.replace(/\s+/g,"-").toLowerCase(),t},activeFilter:"today",activeProjectFilter:""},O={loadPage:function(e){this.loadItemArray(e),this.initCompleteBtn(e),this.initEditButton(e),this.initDeleteBtn(e),this.toggleActiveFilterBtn(U.activeFilter),this.loadProjects(h.list),this.initProjectFilterBtns(h.list),O.initNewItemBtn()},reloadPage:function(){const e=U.activeFilter,t=U.activeProjectFilter;O.loadPage(U.filterDateAndProject(h.list,t,e))},loadProjects:function(e){for(;H.projectNavBar.lastChild;)H.projectNavBar.removeChild(H.projectNavBar.lastChild);const t=U.getProjectArray(e);console.log("hello");const n=document.createElement("h1");n.innerText="Projects",H.projectNavBar.appendChild(n);for(let e=0;e<=t.length;e++){if(""===t[e])continue;const n=document.createElement("button");n.classList.add("projectBtn"),e<t.length&&(n.classList.add(`projectBtn-${U.getProjectClassName(t[e])}`),U.getProjectClassName(t[e])===U.activeProjectFilter&&n.classList.add("selectedFilter"),n.innerText=t[e]),e===t.length&&(n.classList.add("projectBtn-all"),"all"===U.activeProjectFilter&&n.classList.add("selectedFilter"),n.innerText="all projects"),H.projectNavBar.appendChild(n)}},loadItem:function(e){const t=document.createElement("div");t.classList.add("todoItem"),t.classList.add(`todoItem-${e.referenceNum}`),t.innerHTML=`\n        <div class="itemTopRowContainer">\n            <p>${e.title}</p>\n            <input type="button" id="completeBtn" value="COMPLETE TASK" class="completeBtnIncomplete completeBtn${e.referenceNum}">  \n        </div>\n        <p>${e.description}</p>\n        <div class="itemBottom">\n            <div class="itemInfo">\n                <p>${e.dueDate}<p>\n                <p>${e.priority}</p>\n                <p>${e.project}</p>\n            </div>\n            <div class="itemBtnContainer">\n                <button class="itemEditBtn editBtn${e.referenceNum}">Edit</button>\n                <button class="itemDeleteBtn deleteBtn${e.referenceNum}">Delete</button>\n            </div>\n        </div>\n        `,H.main.appendChild(t)},loadItemArray:function(e){for(;H.main.lastChild;)H.main.removeChild(H.main.lastChild);const t=document.createElement("div");t.id="newItemContainer",t.classList.add("todoItem"),t.classList.add("todoItem-0");const n=document.createElement("button");n.classList.add("newItemBtn"),n.innerText="SUBMIT NEW ITEM",t.appendChild(n),H.main.appendChild(t);for(let t=0;t<e.length;t++){if(0===t){const n=document.createElement("h2");n.classList.add("dateSubHeading"),n.textContent=`${e[t].dueDate}`,H.main.appendChild(n)}if(this.loadItem(e[t]),e[t].completionStatus&&this.markComplete(e[t].referenceNum),e[t+1]&&e[t].dueDate!==e[t+1].dueDate){const n=document.createElement("h2");n.classList.add("dateSubHeading"),n.textContent=`${e[t+1].dueDate}`,H.main.appendChild(n)}}},editNewItem:function(){const e=document.querySelector(".todoItem-0");for(;e.lastChild;)e.removeChild(e.lastChild);e.innerHTML=`\n        <div class="itemTopRowContainer"> \n            <input type="text" name="title" id="title" class="itemTitle-0" placeholder="title">">\n            <input type="button" id="completeBtn" value="COMPLETE TASK" class="completeBtnIncomplete completeBtn0">  \n        </div>\n        <textarea name="description" id="description" cols="30" rows="6" class="itemDescription-0"></textarea>\n        <div class="itemBottom">\n            <div class="itemInfo">\n                <input id="testDate" type="date" class="itemDate-0"">\n                <label for="priorityLevel">Priority:</label>\n                <select id="priorityLevel" name="priorityLevel" class="itemPriority-0">\n                  <option value=1>1</option>\n                  <option value=2>2</option>\n                  <option value=3>3</option>\n                  <option value=4>4</option>\n                </select>\n                <label for="UIProjects">Project:</label>\n                <input type="text" list="UIProjects" class="itemProject-0" value="${U.activeProjectFilter}"/>\n                    <datalist id="UIProjects">\n                        ${this.generateArrayOptionList(U.getProjectArray(h.list))}\n                    </datalist>\n            </div>\n            <button class="itemSubmitBtn submitBtn0">Submit</button>\n        </div>\n        `,this.initSubmitNewItemButton()},editItem:function(e){const t=document.querySelector(`.todoItem-${e}`),n=h.getIndexNum(e),i=h.list[n];for(;t.lastChild;)t.removeChild(t.lastChild);t.innerHTML=`\n        <div class="itemTopRowContainer"> \n            <input type="text" name="title" id="title" class="itemTitle-${e}" placeholder="title" value="${i.title}">\n            <input type="button" id="completeBtn" value="COMPLETE TASK" class="completeBtnIncomplete completeBtn${e}">  \n        </div>\n        <textarea name="description" id="description" cols="30" rows="6" class="itemDescription-${e}">${i.description}</textarea>\n        <div class="itemBottom">\n            <div class="itemInfo">  \n            <input id="testDate" type="date" class="itemDate-${e}" value="${i.dueDate}">\n                <label for="priorityLevel">Priority:</label>\n                <select id="priorityLevel" name="priorityLevel" class="itemPriority-${e}" value="${i.priority}">\n                  <option value=1>1</option>\n                  <option value=2>2</option>\n                  <option value=3>3</option>\n                  <option value=4>4</option>\n                </select>\n                <label for="UIProjects">Project:</label>\n                <input type="text" list="UIProjects" class="itemProject-${e}" value="${i.project}"/>\n                    <datalist id="UIProjects">\n                        ${this.generateArrayOptionList(U.getProjectArray(h.list))}\n                    </datalist>\n            </div>\n            <button class="itemSubmitBtn submitBtn${e}">Submit</button>\n        </div>\n        `,this.initSubmitButton(e)},generateArrayOptionList(e){let t="";for(let n=0;n<e.length;n++)t+=`<option>${e[n]}</option>`;return t},submitItem:function(e){const t=document.querySelector(`.itemTitle-${e}`).value,n=document.querySelector(`.itemDescription-${e}`).value,i=document.querySelector(`.itemDate-${e}`).value,r=document.querySelector(`.itemPriority-${e}`).value,o=document.querySelector(`.itemProject-${e}`).value;if(e>0){const a=h.getIndexNum(e);h.list[a].title=t,h.list[a].description=n,h.list[a].dueDate=i,h.list[a].priority=r,h.list[a].project=o}0===e&&new v(t,n,i,r,o),this.reloadPage()},markComplete:function(e){const t=document.querySelector(`.todoItem-${e}`),n=h.getIndexNum(e),i=h.list[n];t.innerHTML=`\n        <div class="itemTopRowContainer">\n            <p><s>${i.title}</s></p>\n            <input type="button" id="completeBtn" value="REOPEN" class="completeBtnComplete completeBtn${i.referenceNum}">  \n        </div>\n        <p><s>${i.description}</s></p>\n        <div class="itemBottom">\n            <div class="itemInfo">\n                <p><s>${i.dueDate}</s><p>\n                <p><s>${i.priority}</s></p>\n                <p><s>${i.project}</s></p>\n            </div>\n            <div class="itemBtnContainer">\n                <button class="archiveBtn archiveBtn${i.referenceNum}">Archive (not functional)</button>\n                <button class="itemDeleteBtn deleteBtn${i.referenceNum}">Delete</button>\n            </div>\n        </div>\n        `},initFilterBtns:function(){H.overdueFilterBtn.addEventListener("click",(()=>{U.activeFilter="overdue",this.reloadPage()})),H.todayFilterBtn.addEventListener("click",(()=>{U.activeFilter="today",this.reloadPage()})),H.sevenDayFilterBtn.addEventListener("click",(()=>{U.activeFilter="sevenDay",this.reloadPage()})),H.allBtn.addEventListener("click",(()=>{U.activeFilter="all",this.reloadPage()}))},initProjectFilterBtns:function(e){const t=U.getProjectArray(h.list);t.push("all");for(let e=0;e<t.length;e++){const n=U.getProjectClassName(t[e]);document.querySelector(`.projectBtn-${n}`).addEventListener("click",(()=>{U.activeProjectFilter=`${n}`,console.log(`${n} button is working`),this.toggleActiveProjectFilterBtn(n),this.reloadPage()}))}},toggleActiveProjectFilterBtn:function(e){const t=document.querySelectorAll(".projectBtn");console.log(t[0].classList[1]);for(let n=0;n<t.length;n++)t[n].classList[1]===`projectBtn-${e}`?t[n].classList.add("selectedFilter"):t[n].classList.remove("selectedFilter")},toggleActiveFilterBtn:function(e){"overdue"===e&&(overdueFilterBtn.classList.add("selectedFilter"),todayFilterBtn.classList.remove("selectedFilter"),sevenDayFilterBtn.classList.remove("selectedFilter"),allBtn.classList.remove("selectedFilter")),"today"===e&&(overdueFilterBtn.classList.remove("selectedFilter"),todayFilterBtn.classList.add("selectedFilter"),sevenDayFilterBtn.classList.remove("selectedFilter"),allBtn.classList.remove("selectedFilter")),"sevenDay"===e&&(overdueFilterBtn.classList.remove("selectedFilter"),todayFilterBtn.classList.remove("selectedFilter"),sevenDayFilterBtn.classList.add("selectedFilter"),allBtn.classList.remove("selectedFilter")),"all"===e&&(overdueFilterBtn.classList.remove("selectedFilter"),todayFilterBtn.classList.remove("selectedFilter"),sevenDayFilterBtn.classList.remove("selectedFilter"),allBtn.classList.add("selectedFilter"))},initEditButton:function(e){for(let t=0;t<e.length;t++)e[t].completionStatus||document.querySelector(`.editBtn${e[t].referenceNum}`).addEventListener("click",(()=>{this.editItem(e[t].referenceNum)}))},initCompleteBtn:function(e){for(let t=0;t<e.length;t++)document.querySelector(`.completeBtn${e[t].referenceNum}`).addEventListener("click",(()=>{const n=h.getIndexNum(e[t].referenceNum);h.list[n].completionStatus=!h.list[n].completionStatus,console.log(h.list[n]),h.list[n].completionStatus?this.markComplete(e[t].referenceNum):this.editItem(e[t].referenceNum),this.initCompleteBtn([h.list[n]]),e[t].completionStatus&&this.initDeleteBtn([e[t]])}))},initDeleteBtn:function(e){for(let t=0;t<e.length;t++)document.querySelector(`.deleteBtn${e[t].referenceNum}`).addEventListener("click",(()=>{h.removeFromList(e[t].referenceNum),this.reloadPage()}))},initSubmitButton:function(e){document.querySelector(`.submitBtn${e}`).addEventListener("click",(()=>{O.submitItem(e)}))},initSubmitNewItemButton:function(){document.querySelector(".submitBtn0").addEventListener("click",(()=>{this.submitItem(0)}))},initNewItemBtn:function(){document.querySelector(".newItemBtn").addEventListener("click",(()=>{this.editNewItem(),console.log("please do not multiply")}))}},H={main:document.querySelector("main"),projectNavBar:document.querySelector(".projectNavContainer"),newItemContainer:document.getElementById("newItemContainer"),overdueFilterBtn:document.getElementById("overdueFilterBtn"),todayFilterBtn:document.getElementById("todayFilterBtn"),sevenDayFilterBtn:document.getElementById("sevenDayFilterBtn"),allBtn:document.getElementById("allBtn"),addProjectBtn:document.getElementById("addProjectBtn")};new v("first test title","dummy desc one","2023-01-12",1,"Project Zeus"),new v("Second title","dummy desc two","2023-01-28",2,"Brexit"),new v("third title","dummy desc three","2023-01-14",1,"Bridge construction"),new v("fourth title","desc 4","2023-01-11",1,"Brexit"),O.loadPage(U.filterToday(h.list)),O.initFilterBtns(),console.log(U.getProjectArray(h.list))})()})();