!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("mobx-state-tree")):"function"==typeof define&&define.amd?define(["mobx-state-tree"],e):t["trampss-mst-onaction"]=e(t.mobxStateTree)}(this,function(t){"use strict";!function(){function t(t){this.value=t}function e(e){function n(o,u){try{var i=e[o](u),a=i.value;a instanceof t?Promise.resolve(a.value).then(function(t){n("next",t)},function(t){n("throw",t)}):r(i.done?"return":"normal",i.value)}catch(t){r("throw",t)}}function r(t,e){switch(t){case"return":o.resolve({value:e,done:!0});break;case"throw":o.reject(e);break;default:o.resolve({value:e,done:!1})}(o=o.next)?n(o.key,o.arg):u=null}var o,u;this._invoke=function(t,e){return new Promise(function(r,i){var a={key:t,arg:e,resolve:r,reject:i,next:null};u?u=u.next=a:(o=u=a,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}();var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n=function(n){var r=n.name,o=n.type,u=n.context,i=n.args,a=t.getPath(u),c={fullpath:a+"/"+r,path:a,name:r,args:i};switch(o){case"process_return":return e({},c,{ended:!0});case"action":return c;default:return}};return function(t){return function(e,r){var o=n(e);return o&&t(o,e.tree),r(e)}}});
//# sourceMappingURL=index.js.map