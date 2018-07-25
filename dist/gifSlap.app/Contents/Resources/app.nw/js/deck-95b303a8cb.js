/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
var Emitter = require('eventemitter3')
var events = new Emitter()

// updates state and emits an event for the deck to update UI
// animation modules should just read state to render frames
// control_type can be
// slider
// xy
// toggle
// null (no UI representation)
var updateState = function( control_type, control_id, value ){
  state[control_id] = value
  eventName = control_type+'Update'
  events.emit(eventName,control_id,value)
}

var updateIndicatorState = function( control_id, value ){
  if( state[control_id] == value ){ return }
  state[control_id] = value
  events.emit('indicatorUpdate',control_id,value)
}

var updateStateString = function(state_id, stateString) {
  if( state[state_id] == stateString ){ return }
  state[state_id] = stateString
}

var state = {
  
  // overall
  paused: false,
  current_mode:'chain',
  autopilot_run: false,
  zoom_level: 0,
  current_gif_src:'',
  next_gif_src:'',

  // global sliders
  max_images_amount:10,
  height:500,
  width:'auto',
  image_scale:1,
  single_opacity:1,
  single_rotate:360,
  border_radius:0,
  border_image_width:0,
  border_image_slices:0,

  // global toggles
  border_image_on:false,

  // chain sliders
  chain_speed:1,

  // chain xy
  chain_direction_x:60,
  chain_direction_y:60,
  chain_pos_x:0,
  chain_pos_y:0,

  // chain toggles
  chain_reverse_doubler_on:false,
  chain_remove_by_tail_on:false,

  // corners sliders
  corners_quadrant_rotation:0,

  //hallway sliders
  hallway_origin_divisor:0,

  // hallway xy
  hallway_top_bottom_rotation:90,
  hallway_sides_rotation:90,
  hallway_perspective_x:1,
  hallway_perspective_y:1,

  // mirror sliders
  mirror_rotation:0,
  mirror_image_spacing:0,

  // mirror toggles
  mirror_grid_on:false,

  // circle sliders
  circle_container_spin_speed:0.5,
  circle_spin_speed:0.25,

  // circle toggles
  circle_size_lock_on:false,

  // center xy
  center_horizontal_arc:50,
  center_vertical_arc:50,

  // corner box 
  corner_box_src:'',
  corner_box_opacity:0,
  corner_box_size:30,
  corner_box_position_x:0,
  corner_box_position_y:0,
  corner_box_run:false,

  // wind
  wind_speed_x:64,
  wind_speed_y:64,
  wind_intensity:1,
  wind_run:false,

  // background
  background_src:'',
  background_zoom:null,
  background_opacity:0,
  background_scroll_speed_x:10,
  background_scroll_speed_y:10,
  background_run:false,

  // midground
  midground_src:'',
  midground_zoom:1,
  midground_opacity:0,
  midground_scroll_speed_x:10,
  midground_scroll_speed_y:10,
  midground_pos_x: 100,
  midground_pos_y: 100,
  midground_rotation: 0,
  midground_scale: 1,
  midground_run:false,

  // big shrinker
  big_shrinker_src:'',
  big_shrinker_rotation:0,

  // rainbow bars
  rainbow_bars_run: false,
  rainbow_bars_opacity: 0,
  rainbow_bar_width: 33,
  rainbow_bar_speed: 0,
  rainbow_bar_rotation: 90,

  // automations
  automations:[]

}

loadState = function(newState){

  // change to selected mode  
  main.mode_changer.start(newState.current_mode)

  // load gif sources
  main.images.active_set[main.images.cursor] = newState.current_gif_src
  main.corner_box.update.source(newState.corner_box_src)
  main.bg_mod.update.source(newState.background_src)

  // load next gif into preview
  main.images.active_set[controls.get_next_gif_index()] = newState.next_gif_src
  controls.update_next_gif()

  // step through each param

  for (var key in newState) {

    // skip loop if the property is from prototype
    if (!newState.hasOwnProperty(key)) continue

    // if value is a number run the associated control function in control_registry
    // this will update state everywhere and run any functions that require running to display correctly
    // if value is not a number just assign it to state
    
    if( typeof(newState[key]) == 'number' && main.controls[key] ){
      main.controls[key].change(newState[key])
    }else{
      state[key] = newState[key]
    }

    // automations
    if( key == 'automations' ){
      for (var i = newState.automations.length - 1; i >= 0; i--) {
        automator.saveSliderElements(newState.automations[i].control_id)
      }
      
    }
  }

  // special cases for certain controls

  // if background zoom is null, clear out current background zoom
  if( newState.background_zoom == null ) main.bg_mod.reset.zoom()

}
var svgs = {
  chevron_left : '<svg version="1.1" id="svg-chevron-left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"   y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M12.452,4.516c0.446,0.436,0.481,1.043,0,1.576L8.705,10l3.747,3.908c0.481,0.533,0.446,1.141,0,1.574 c-0.445,0.436-1.197,0.408-1.615,0c-0.418-0.406-4.502-4.695-4.502-4.695C6.112,10.57,6,10.285,6,10s0.112-0.57,0.335-0.789 c0,0,4.084-4.287,4.502-4.695C11.255,4.107,12.007,4.08,12.452,4.516z"/></svg>',

  chevron_right : '<svg version="1.1" id="Chevron_right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"   y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M9.163,4.516c0.418,0.408,4.502,4.695,4.502,4.695C13.888,9.43,14,9.715,14,10s-0.112,0.57-0.335,0.787  c0,0-4.084,4.289-4.502,4.695c-0.418,0.408-1.17,0.436-1.615,0c-0.446-0.434-0.481-1.041,0-1.574L11.295,10L7.548,6.092 c-0.481-0.533-0.446-1.141,0-1.576C7.993,4.08,8.745,4.107,9.163,4.516z"/></svg>',

  refresh : '<svg version="1.1" id="svg-refresh" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M19.315,10h-2.372V9.795c-0.108-4.434-3.724-7.996-8.169-7.996C4.259,1.799,0.6,5.471,0.6,10s3.659,8.199,8.174,8.199  c1.898,0,3.645-0.65,5.033-1.738l-1.406-1.504c-1.016,0.748-2.27,1.193-3.627,1.193c-3.386,0-6.131-2.754-6.131-6.15  s2.745-6.15,6.131-6.15c3.317,0,6.018,2.643,6.125,5.945V10h-2.672l3.494,3.894L19.315,10z"/></svg>',

  cross : '<svg version="1.1" id="svg-cross" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M14.348,14.849c-0.469,0.469-1.229,0.469-1.697,0L10,11.819l-2.651,3.029c-0.469,0.469-1.229,0.469-1.697,0  c-0.469-0.469-0.469-1.229,0-1.697l2.758-3.15L5.651,6.849c-0.469-0.469-0.469-1.228,0-1.697c0.469-0.469,1.228-0.469,1.697,0 L10,8.183l2.651-3.031c0.469-0.469,1.228-0.469,1.697,0c0.469,0.469,0.469,1.229,0,1.697l-2.758,3.152l2.758,3.15 C14.817,13.62,14.817,14.38,14.348,14.849z"/></svg>',

  gear : '<svg version="1.1" id="svg-gear" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M16.783,10c0-1.049,0.646-1.875,1.617-2.443c-0.176-0.584-0.407-1.145-0.692-1.672c-1.089,0.285-1.97-0.141-2.711-0.883  c-0.741-0.74-0.968-1.621-0.683-2.711c-0.527-0.285-1.088-0.518-1.672-0.691C12.074,2.57,11.047,3.215,10,3.215 c-1.048,0-2.074-0.645-2.643-1.615C6.772,1.773,6.213,2.006,5.686,2.291c0.285,1.09,0.059,1.971-0.684,2.711  C4.262,5.744,3.381,6.17,2.291,5.885C2.006,6.412,1.774,6.973,1.6,7.557C2.57,8.125,3.215,8.951,3.215,10 c0,1.047-0.645,2.074-1.615,2.643c0.175,0.584,0.406,1.144,0.691,1.672c1.09-0.285,1.971-0.059,2.711,0.682 c0.741,0.742,0.969,1.623,0.684,2.711c0.527,0.285,1.087,0.518,1.672,0.693c0.568-0.973,1.595-1.617,2.643-1.617  c1.047,0,2.074,0.645,2.643,1.617c0.584-0.176,1.144-0.408,1.672-0.693c-0.285-1.088-0.059-1.969,0.683-2.711 c0.741-0.74,1.622-1.166,2.711-0.883c0.285-0.527,0.517-1.086,0.692-1.672C17.429,11.873,16.783,11.047,16.783,10z M10,13.652 c-2.018,0-3.653-1.635-3.653-3.652c0-2.018,1.636-3.654,3.653-3.654c2.018,0,3.652,1.637,3.652,3.654 C13.652,12.018,12.018,13.652,10,13.652z"/></svg>',

  squared_cross : '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="svg-squared-cross" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"   y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M16,2H4C2.9,2,2,2.9,2,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C18,2.9,17.1,2,16,2z M13.061,14.789L10,11.729 l-3.061,3.06l-1.729-1.728L8.271,10L5.211,6.939l1.729-1.729L10,8.271l3.059-3.061l1.729,1.729L11.729,10l3.06,3.061L13.061,14.789z "/></svg>',

  images_folder : '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="svg-images-folder" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"   y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M18.405,2.799C18.293,2.359,17.749,2,17.195,2H2.805c-0.555,0-1.099,0.359-1.21,0.799L1.394,4h17.211L18.405,2.799z   M19.412,5H0.587C0.245,5-0.022,5.294,0.01,5.635l0.923,11.669C0.971,17.698,1.303,18,1.699,18H18.3  c0.397,0,0.728-0.302,0.766-0.696l0.923-11.669C20.022,5.294,19.754,5,19.412,5z M12.438,8.375c0.518,0,0.938,0.42,0.938,0.938  c0,0.518-0.42,0.938-0.938,0.938S11.5,9.83,11.5,9.312C11.5,8.795,11.92,8.375,12.438,8.375z M5.5,14l2.486-5.714l2.827,4.576 l2.424-1.204L14.5,14H5.5z"/></svg>',

  keyboard : '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="svg-keyboard" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M18.6,4h-17.2C0.629,4,0,4.629,0,5.4V14.6C0,15.369,0.629,16,1.399,16h17.2c0.77,0,1.4-0.631,1.4-1.4V5.4  C20,4.629,19.369,4,18.6,4z M11,6h2v2h-2V6z M14,9v2h-2V9H14z M8,6h2v2H8V6z M11,9v2H9V9H11z M5,6h2v2H5V6z M8,9v2H6V9H8z M2,6h2v2  H2V6z M5,9v2H3V9H5z M4,14H2v-2h2V14z M15,14H5v-2h10V14z M18,14h-2v-2h2V14z M15,11V9h2v2H15z M18,8h-4V6h4V8z"/></svg>',

  midi : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M5,1.6C5,1.047,4.552,1,4,1C3.447,1,3,1.047,3,1.6V10h2V1.6z M3,18.4C3,18.951,3.447,19,4,19c0.552,0,1-0.049,1-0.6V15H3 V18.4z M6.399,11H1.599C1.046,11,1,11.448,1,12v1c0,0.553,0.046,1,0.599,1h4.801C6.95,14,7,13.553,7,13v-1  C7,11.448,6.95,11,6.399,11z M18.399,12h-4.801C13.046,12,13,12.448,13,13v1c0,0.553,0.046,1,0.599,1h4.801 C18.95,15,19,14.553,19,14v-1C19,12.448,18.95,12,18.399,12z M13,7c0-0.552-0.05-1-0.601-1H7.599C7.046,6,7,6.448,7,7v1 c0,0.553,0.046,1,0.599,1h4.801C12.95,9,13,8.553,13,8V7z M11,1.6C11,1.047,10.552,1,10,1C9.447,1,9,1.047,9,1.6V5h2V1.6z M9,18.4 c0,0.551,0.447,0.6,1,0.6c0.552,0,1-0.049,1-0.6V10H9V18.4z M17,1.6C17,1.047,16.552,1,16,1c-0.553,0-1,0.047-1,0.6V11h2V1.6z  M15,18.4c0,0.551,0.447,0.6,1,0.6c0.552,0,1-0.049,1-0.6V16h-2V18.4z"/></svg>',

  eye : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M10,4.4C3.439,4.4,0,9.232,0,10c0,0.766,3.439,5.6,10,5.6c6.56,0,10-4.834,10-5.6C20,9.232,16.56,4.4,10,4.4z M10,14.307 c-2.455,0-4.445-1.928-4.445-4.307c0-2.379,1.99-4.309,4.445-4.309c2.455,0,4.444,1.93,4.444,4.309 C14.444,12.379,12.455,14.307,10,14.307z M10,10c-0.407-0.447,0.663-2.154,0-2.154c-1.228,0-2.223,0.965-2.223,2.154 c0,1.189,0.995,2.154,2.223,2.154c1.227,0,2.223-0.965,2.223-2.154C12.223,9.453,10.346,10.379,10,10z"/></svg>',

  eye_with_line : '<svg version="1.1" id="svg-eye-with-line" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"   y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M18.5214844,1.4776001C18.131958,1.086853,17.4981079,1.086792,17.1074829,1.477478L1.4785156,17.1084595  c-0.390625,0.390625-0.390625,1.0244141,0.0001221,1.4140015c0.390625,0.390686,1.0233765,0.390625,1.4140015-0.000061  L18.5214233,2.8916016C18.9121704,2.5009766,18.9121704,1.8682251,18.5214844,1.4776001z M3.1083984,13.4973145l2.5593262-2.5584717 C5.5981445,10.6357422,5.5546875,10.3234863,5.5546875,10c0-2.3789062,1.9902344-4.3085938,4.4453125-4.3085938 c0.2861328,0,0.5644531,0.0314941,0.8354492,0.081665l1.2021484-1.2016602C11.394043,4.467041,10.7192383,4.4003906,10,4.4003906  C3.4394531,4.4003906,0,9.2324219,0,10C0,10.4234619,1.057373,12.0908203,3.1083984,13.4973145z M16.8950195,6.5046387  L14.3330078,9.065918C14.4018555,9.3674316,14.4443359,9.6784668,14.4443359,10  c0,2.3789062-1.9892578,4.3066406-4.4443359,4.3066406c-0.2839355,0-0.5598145-0.0317383-0.8288574-0.0810547L7.967041,15.4291992 C8.609375,15.5330811,9.2827148,15.5996094,10,15.5996094c6.5605469,0,10-4.8339844,10-5.5996094 C20,9.5756836,18.9438477,7.9101562,16.8950195,6.5046387z"/></svg>',

  squared_plus : '<svg version="1.1" id="svg-squared-plus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"  y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M16,2H4C2.9,2,2,2.9,2,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C18,2.9,17.1,2,16,2z M15,11h-4v4H9v-4H5V9h4V5h2v4h4V11z" /></svg>',

  plus : '<svg version="1.1" id="svg-plus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601  C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399  C15.952,9,16,9.447,16,10z"/></svg>',

  minus : '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="svg-minus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M16,10c0,0.553-0.048,1-0.601,1H4.601C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1h10.799C15.952,9,16,9.447,16,10z"/></svg>',

  resize_full_screen : '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="svg-resize_full_screen" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"  y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M6.987,10.987l-2.931,3.031L2,11.589V18h6.387l-2.43-2.081l3.03-2.932L6.987,10.987z M11.613,2l2.43,2.081l-3.03,2.932l2,2 l2.931-3.031L18,8.411V2H11.613z"/></svg>',

  mouse : '<svg version="1.1" id="svg-mouse" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" style="enable-background:new 0 0 20 20," xml:space="preserve"><path d="M15.402,14.402l-2.627-7.535c-0.722-2.073-2.966-3.22-5.092-2.653L5.707,0.379C5.528,0.033,5.109-0.1,4.769,0.083 C4.43,0.266,4.3,0.697,4.48,1.044l1.929,3.742C4.872,5.806,4.073,7.74,4.58,9.56l2.139,7.696c0.602,2.162,3.08,3.264,5.571,2.502  C14.749,18.895,16.14,16.521,15.402,14.402z M8.899,8.923c-0.73,0.24-1.511-0.172-1.745-0.921C6.919,7.254,7.322,6.454,8.051,6.214  c0.73-0.24,1.512,0.172,1.746,0.92S9.629,8.683,8.899,8.923z"/></svg>',

  share : '<svg version="1.1" class="svg-share" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 20 20" style="enable-background:new 0 0 20 20," xml:space="preserve"><path d="M9,13h2V4h2l-3-4L7,4h2V13z M17,7h-3v2h2v9H4V9h2V7H3C2.447,7,2,7.447,2,8v11c0,0.552,0.447,1,1,1h14c0.553,0,1-0.448,1-1V8 C18,7.448,17.553,7,17,7z"/></svg>',

  folder : '<svg version="1.1" id="svg-folder" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M18.405,4.799C18.294,4.359,17.75,4,17.195,4h-6.814C9.827,4,9.051,3.682,8.659,3.293L8.063,2.705 C7.671,2.316,6.896,2,6.342,2H3.087C2.532,2,2.028,2.447,1.967,2.994L1.675,6h16.931L18.405,4.799z M19.412,7H0.588 c-0.342,0-0.61,0.294-0.577,0.635l0.923,9.669C0.971,17.698,1.303,18,1.7,18H18.3c0.397,0,0.728-0.302,0.766-0.696l0.923-9.669  C20.022,7.294,19.754,7,19.412,7z"/></svg>',

  play : '<svg version="1.1" id="Play" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852  c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"/></svg>',

  slope : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M19,13.805C19,14.462,18.462,15,17.805,15H1.533c-0.88,0-0.982-0.371-0.229-0.822l16.323-9.055C18.382,4.67,19,5.019,19,5.9  V13.805z"/></svg>',

  document_landscape : '<svg version="1.1" id="Document_Landscape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"   y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M19,3H1C0.448,3,0,3.447,0,4v12c0,0.553,0.448,1,1,1h18c0.552,0,1-0.447,1-1V4C20,3.447,19.553,3,19,3z M18,15H2V5h16V15z" /></svg>',

  dots_three_vertical : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2c1.215,0,2.199-0.985,2.199-2.2S11.216,7.8,10.001,7.8z M10.001,5.2C11.216,5.2,12.2,4.214,12.2,3S11.216,0.8,10.001,0.8C8.786,0.8,7.8,1.785,7.8,3S8.786,5.2,10.001,5.2z M10.001,14.8 C8.786,14.8,7.8,15.785,7.8,17s0.986,2.2,2.201,2.2c1.215,0,2.199-0.985,2.199-2.2S11.216,14.8,10.001,14.8z"/></svg>',

  dots_three_horizontal : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"   x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2c1.215,0,2.199-0.985,2.199-2.2S11.216,7.8,10.001,7.8z   M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2C4.216,12.2,5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8  C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2c1.215,0,2.199-0.985,2.199-2.2S18.216,7.8,17.001,7.8z"/></svg>',

  swap : '<svg version="1.1" id="Swap" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M14,5H4V3L0,6.5L4,10V8h10V5z M20,13.5L16,10v2H6v3h10v2L20,13.5z"/></svg>',

  popup : '<svg version="1.1" id="Popup" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M16,2H7.979C6.88,2,6,2.88,6,3.98V12c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V4C18,2.9,17.1,2,16,2z M16,12H8V4h8V12z M4,10H2v6 c0,1.1,0.9,2,2,2h6v-2H4V10z"/></svg>',

  share_alternative : '<svg version="1.1" id="Share" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" style="enable-background:new 0 0 20 20," xml:space="preserve"><path d="M9,13h2V4h2l-3-4L7,4h2V13z M17,7h-3v2h2v9H4V9h2V7H3C2.447,7,2,7.447,2,8v11c0,0.552,0.447,1,1,1h14c0.553,0,1-0.448,1-1V8 C18,7.448,17.553,7,17,7z"/></svg>',

  block : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"  viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M10,0.4c-5.303,0-9.601,4.298-9.601,9.6c0,5.303,4.298,9.601,9.601,9.601c5.301,0,9.6-4.298,9.6-9.601 C19.6,4.698,15.301,0.4,10,0.4z M2.399,10c0-4.197,3.402-7.6,7.6-7.6c1.829,0,3.506,0.647,4.817,1.723L4.122,14.817 C3.046,13.505,2.399,11.829,2.399,10z M9.999,17.599c-1.828,0-3.505-0.646-4.815-1.722L15.878,5.184  C16.953,6.496,17.6,8.171,17.6,10C17.6,14.197,14.196,17.599,9.999,17.599z"/></svg>',

  knob : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M10,0.4C4.698,0.4,0.4,4.698,0.4,10C0.4,15.302,4.698,19.6,10,19.6c5.301,0,9.6-4.298,9.6-9.601 C19.6,4.698,15.301,0.4,10,0.4z M10,17.599c-4.197,0-7.6-3.402-7.6-7.6c0-4.197,3.402-7.6,7.6-7.6h0V10l6.792-3.396 C17.305,7.627,17.6,8.777,17.6,10C17.6,14.197,14.197,17.599,10,17.599z"/></svg>',

  new: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"> <path d="M18.69,12.344l-1.727-1.538c-0.5-0.445-0.5-1.174,0-1.619l1.727-1.539c0.5-0.445,0.367-0.859-0.296-0.924l-2.29-0.217 c-0.662-0.062-1.02-0.633-0.791-1.266l1.215-3.383c0.228-0.635-0.051-0.865-0.619-0.514l-2.701,1.67 c-0.568,0.354-1.303,0.16-1.631-0.426l-0.978-1.746c-0.329-0.588-0.872-0.59-1.207-0.008l-0.909,1.58 C8.146,2.999,7.375,3.247,6.77,2.97l-1.6-0.734C4.562,1.956,4.097,2.278,4.133,2.952l0.086,1.615 c0.037,0.674-0.461,1.367-1.104,1.541L1.57,6.522C0.928,6.696,0.81,7.202,1.31,7.647l1.727,1.539c0.5,0.445,0.5,1.174,0,1.619 L1.31,12.344c-0.5,0.445-0.368,0.877,0.293,0.957l2.095,0.254c0.661,0.08,1.029,0.67,0.818,1.311l-1.074,3.258 c-0.211,0.641,0.09,0.889,0.668,0.555l2.463-1.426c0.578-0.334,1.356-0.15,1.729,0.408l1.022,1.539 c0.372,0.559,0.931,0.529,1.24-0.068l0.899-1.733c0.31-0.598,1.052-0.842,1.648-0.543l1.734,0.867 c0.598,0.297,1.057-0.01,1.021-0.682l-0.087-1.617c-0.035-0.674,0.461-1.365,1.106-1.539l1.543-0.416 C19.072,13.295,19.19,12.789,18.69,12.344z M11,14H9v-2h2V14z M11,11H9V6h2V11z"/></svg>',

  level_up: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M19,9v7h-3v-6H6v3L1,8.5L6,4v3h11C18.104,7,19,7.897,19,9z"/></svg>',

  wave_saw: '<svg class="wave-saw" xmlns="http://www.w3.org/2000/svg" viewBox="102.8 91.1 586.5 425.7"><path d="M665.4 91.1H126.2c-14.2 0-23.7 9.5-23.7 23.7v378.4c0 14.2 9.5 23.6 23.7 23.6h539.2c14.2 0 23.6-9.4 23.6-23.6V114.8c0-14.2-9.5-23.7-23.6-23.7zM495.1 469.5h-37.9V214.1l-123 255.4h-37.8V214.1L178.2 469.5h-37.8l156.1-331.1h37.8v255.4l123-255.4h37.9v255.4l118.2-255.4h37.9L495.1 469.5z"/></svg>',

  wave_sine: '<svg class="wave-sine" xmlns="http://www.w3.org/2000/svg" viewBox="102.8 91.1 586.5 425.7"><path d="M665.4 91.1H126.2c-14.2 0-23.7 9.5-23.7 23.7v378.4c0 14.2 9.5 23.6 23.7 23.6h539.2c14.2 0 23.6-9.4 23.6-23.6V114.8c0-14.2-9.5-23.7-23.6-23.7zM514 469.5c-94.6 0-137.2-165.5-137.2-165.5S339 176.2 277.5 176.2s-99.3 127.7-99.3 127.7h-37.8S183 138.4 277.6 138.4s137.2 165.5 137.2 165.5 37.8 127.7 99.3 127.7 99.3-127.7 99.3-127.7h37.8S608.6 469.5 514 469.5z"/></svg>',

  wave_tri: '<svg class="wave-tri" xmlns="http://www.w3.org/2000/svg" viewBox="102.8 91.1 586.5 425.7"><path d="M664.5 91.1H126.4c-14.2 0-23.6 9.5-23.6 23.6v377.6c0 14.2 9.5 23.6 23.6 23.6h538.1c14.2 0 23.5-9.5 23.5-23.6V114.7c0-14.1-9.4-23.6-23.5-23.6zM513.4 468.7L277.5 190.2l-99.1 113.3h-37.7l136.9-165.1 236 278.5 99.1-113.3h37.7l-137 165.1z"/></svg>',

  wave_noise: '<svg class="wave-noise" xmlns="http://www.w3.org/2000/svg" viewBox="102.8 91.1 586.5 425.7"><path d="M665.7 91H126.5c-14.2 0-23.7 9.5-23.7 23.7v378.4c0 14.2 9.5 23.7 23.7 23.7h539.2c14.2 0 23.6-9.5 23.6-23.7V114.7c-.1-14.2-9.5-23.7-23.6-23.7zm-45.6 285c-19.3 0-35-15.7-35-35 0-14.4 8.7-26.7 21-32.1l-28.7-111c-.8.1-1.5.1-2.3.1-1.9 0-3.8-.2-5.6-.5L548 256.8c10.3 6.1 17.2 17.3 17.2 30.1 0 19.3-15.7 35-35 35-2.1 0-4.1-.2-6.1-.5l-20.7 54.7c10 6.2 16.8 17.2 16.8 29.9 0 19.3-15.7 35-35 35s-35-15.7-35-35c0-14.7 9.1-27.3 21.9-32.5L440.4 214h-.3c-1.3 0-2.6-.1-3.9-.2l-24.7 80.3c11.1 5.9 18.7 17.5 18.7 31 0 19.3-15.7 35-35 35s-35-15.7-35-35c0-11.1 5.1-20.9 13.2-27.4l-11-20.8c-3.8 1.4-7.9 2.2-12.2 2.2-.7 0-1.4 0-2.1-.1l-29.6 130.7c12.7 5.2 21.7 17.8 21.7 32.4 0 19.3-15.7 35-35 35s-35-15.7-35-35c0-13.2 7.3-24.7 18.1-30.7l-22.6-62.8c-1.8.3-3.7.4-5.5.4-19.3 0-35-15.7-35-35 0-13.1 7.2-24.6 18-30.6l-23.3-69.8c-1.5.2-3.1.3-4.7.3-2.3 0-4.5-.2-6.7-.6l-17.6 44.1c9.8 6.2 16.2 17.1 16.2 29.5 0 19.3-15.7 35-35 35s-35-15.7-35-35 15.7-35 35-35c2.3 0 4.5.2 6.7.6l17.6-44.1c-9.8-6.2-16.2-17.1-16.2-29.5 0-19.3 15.7-35 35-35s35 15.7 35 35c0 13.1-7.2 24.6-18 30.6l23.3 69.8c1.5-.2 3.1-.3 4.7-.3 19.3 0 35 15.7 35 35 0 12.8-6.9 24.1-17.2 30.2l22.7 63.1c1.5-.2 3-.3 4.5-.3h.6l29.7-131.3c-12-5.6-20.2-17.7-20.2-31.7 0-19.3 15.7-35 35-35s35 15.7 35 35c0 10.4-4.5 19.7-11.7 26.1l11.4 21.5c3.3-1 6.7-1.6 10.3-1.6 1.3 0 2.6.1 3.9.2l24.7-80.3c-11.1-5.9-18.7-17.5-18.7-31 0-19.3 15.7-35 35-35s35 15.7 35 35c0 14.7-9.1 27.3-21.9 32.5L484.7 371h.3c2.1 0 4.1.2 6.1.5l20.7-54.7c-10-6.2-16.8-17.2-16.8-29.9 0-19.3 15.7-35 35-35 1.9 0 3.8.2 5.6.5l21.5-59.3c-10.3-6.1-17.2-17.3-17.2-30.1 0-19.3 15.7-35 35-35s35 15.7 35 35c0 14-8.2 26.1-20.1 31.7l28.8 111.4h1.3c19.3 0 35 15.7 35 35 .2 19.3-15.5 34.9-34.8 34.9z"/></svg>',

  edit: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve"><path d="M17.561,2.439c-1.442-1.443-2.525-1.227-2.525-1.227L8.984,7.264L2.21,14.037L1.2,18.799l4.763-1.01l6.774-6.771  l6.052-6.052C18.788,4.966,19.005,3.883,17.561,2.439z M5.68,17.217l-1.624,0.35c-0.156-0.293-0.345-0.586-0.69-0.932  c-0.346-0.346-0.639-0.533-0.932-0.691l0.35-1.623l0.47-0.469c0,0,0.883,0.018,1.881,1.016c0.997,0.996,1.016,1.881,1.016,1.881  L5.68,17.217z"/></svg>',

  rocket: '<svg x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M11.933,13.069c0,0,7.059-5.094,6.276-10.924c-0.017-0.127-0.059-0.213-0.112-0.268c-0.054-0.055-0.137-0.098-0.263-0.115  C12.137,0.961,7.16,8.184,7.16,8.184C2.842,7.667,3.156,8.528,1.186,13.26c-0.377,0.902,0.234,1.213,0.904,0.959  c0.67-0.252,2.148-0.811,2.148-0.811l2.59,2.648c0,0-0.546,1.514-0.793,2.199c-0.248,0.686,0.055,1.311,0.938,0.926 C11.597,17.165,12.439,17.487,11.933,13.069z M12.942,7.153c-0.598-0.613-0.598-1.604,0-2.217c0.598-0.611,1.567-0.611,2.166,0  c0.598,0.611,0.598,1.603,0,2.217C14.509,7.764,13.539,7.764,12.942,7.153z"/></svg>',

  webcam: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"   y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M10.5,10c0,1.380249-1.119751,2.5-2.5,2.5c-1.3810425,0-2.5-1.119751-2.5-2.5S6.6189575,7.5,8,7.5  C9.380249,7.5,10.5,8.619751,10.5,10z M16,4v12c0,1.0996094-0.9003906,2-2,2H2c-1.0996094,0-2-0.9003906-2-2V4  c0-1.0996094,0.9003906-2,2-2h12C15.0996094,2,16,2.9003906,16,4z M12.5,10c0-2.4855347-2.0153809-4.5-4.5-4.5  c-2.4855347,0-4.5,2.0144653-4.5,4.5s2.0144653,4.5,4.5,4.5C10.4846191,14.5,12.5,12.4855347,12.5,10z M19.2151489,5.0856323  L17,6.5623779v7l2.2151489,1.4768066C19.5506592,15.2628174,20,15.0223389,20,14.6191406V5.5056763  C20,5.102478,19.5506592,4.8619385,19.2151489,5.0856323z"/></svg>',

  grid: '<svg version="1.1" id="Grid" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M8,4H5C4.447,4,4,4.447,4,5v3c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1V5  C9,4.448,8.553,4,8,4z M15,4h-3c-0.553,0-1,0.447-1,1v3c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1V5C16,4.448,15.553,4,15,4z M8,11  H5c-0.553,0-1,0.447-1,1v3c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1v-3C9,11.448,8.553,11,8,11z M15,11h-3c-0.553,0-1,0.447-1,1v3  c0,0.552,0.447,1,1,1h3c0.553,0,1-0.448,1-1v-3C16,11.448,15.553,11,15,11z"/></svg>' ,

  double: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"  y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve"><path d="M8.4,4c0-1.326-1.074-2.4-2.4-2.4S3.6,2.674,3.6,4c0,0.967,0.576,1.796,1.4,2.176v7.649C4.175,14.204,3.6,15.033,3.6,16  c0,1.326,1.074,2.4,2.4,2.4s2.4-1.075,2.4-2.4c0-0.967-0.576-1.796-1.4-2.176V6.176C7.825,5.796,8.4,4.967,8.4,4z M7.384,16 c0,0.764-0.62,1.385-1.384,1.385c-0.766,0-1.385-0.621-1.385-1.385c0-0.766,0.619-1.385,1.385-1.385  C6.764,14.615,7.384,15.234,7.384,16z M6,5.385C5.235,5.385,4.616,4.764,4.616,4c0-0.766,0.619-1.385,1.385-1.385 c0.764,0,1.384,0.619,1.384,1.385C7.384,4.764,6.764,5.385,6,5.385z M15,13.824V6.176c0.825-0.38,1.4-1.208,1.4-2.176 c0-1.326-1.074-2.4-2.4-2.4S11.6,2.674,11.6,4c0,0.967,0.576,1.796,1.4,2.176v7.649c-0.825,0.38-1.4,1.208-1.4,2.176  c0,1.326,1.074,2.4,2.4,2.4s2.4-1.075,2.4-2.4C16.4,15.033,15.825,14.204,15,13.824z M12.616,4c0-0.766,0.619-1.385,1.385-1.385 c0.764,0,1.384,0.619,1.384,1.385c0,0.764-0.62,1.385-1.384,1.385C13.235,5.385,12.616,4.764,12.616,4z M14,17.385  c-0.766,0-1.385-0.621-1.385-1.385c0-0.766,0.619-1.385,1.385-1.385c0.764,0,1.384,0.619,1.384,1.385 C15.384,16.764,14.764,17.385,14,17.385z"/></svg>',

  save: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.2 2H4C3 2 2 3 2 4v12c0 1 1 2 2 2h12c1 0 2-1 2-2V5l-2.8-3zM14 8c0 .5-.5 1-1 1H7c-.5 0-1-.5-1-1V3h8v5zm-1-4h-2v4h2V4z"/></svg>'
}

//Shuffle Array
var shuffle_array = function(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

/**
 * Array.prototype.[method name] allows you to define/overwrite an objects method
 * needle is the item you are searching for
 * this is a special variable that refers to "this" instance of an Array.
 * returns true if needle is in the array, and false otherwise
 */
Array.prototype.contains = function ( needle ) {
  for(i in this){
    if(this[i] == needle) return true
  }
  return false;
}

var add_css = function(css,id){
  var head = window.document.head || window.document.getElementsByTagName('head')[0],
  style = window.document.createElement('style');

  style.type = 'text/css';
  
  // Assign the id so we can remove this style if we need to.
  if( id ){ style.id = id; }

  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(window.document.createTextNode(css));
  }

  head.appendChild(style);
};

var stringToBoolean = function(string){
  switch(string.toLowerCase()){
    case "true": case "yes": case "1": return true;
    case "false": case "no": case "0": case null: return false;
    default: return Boolean(string);
  }
};

// replace <svg name='name'></svg> with the actual svg
var replace_svgs = function(){
  $('svg[name]').each(function(){
    name = $(this).attr('name');
    classes = $(this).attr('class');
    $(this).before(svgs[name]);
    $(this).prev('svg').attr('class',classes);
    $(this).remove();
  });
}

var chain_clicks = function(){
  // Chain clicks between elements
  $('[click-element]').click(function(){
    click_element_id = $(this).attr('click-element');
    $('#'+click_element_id).click();
  });
}

var copy_file = function(source, target, cb) {
  var cbCalled = false;
  var rd = fs.createReadStream(source);

  rd.on("error", function(err) {
    done(err);
  });

  var wr = fs.createWriteStream(target);
  
  wr.on("error", function(err) {
    done(err);
  });

  wr.on("close", function(ex) {
    done();
  });

  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}

function setStyles( element, stylesObject ){
 for (var property in stylesObject)
    element.style[property] = stylesObject[property]
}



// for each on array:

// array_name.forEach(function( item ){ ... });

// for each on object

// $.each(object, function(index, value) {
//     console.log(value);
// }); 



function slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// add leading zeroes
function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}
midi = {
  run: true,
  input_log: Array(), // log of last inputs
  value_log: Array(), // log of last input values
  current_type: null, // button or knob
  controls: JSON.parse( localStorage.midi_map_json ),
  edited: false, // for saving midi maps
  jazz:null, // set in init
  init:function(){

    // set up jazz html object
    if( $('#jazz').length == 0 ){
      document.write('<object id="jazz" type="audio/x-jazz" class="hidden"></object>');
      midi.jazz = document.getElementById("jazz");
    }

    // open Jazz input output
    try{
      midi.jazz.MidiInOpen(0);
      midi.jazz.MidiOutOpen(1);
    }catch(err){
      alert('There was an error connecting to your MIDI device. Restart to try again.');
      // window_ui.launch_modal("midi-error");
      return;
    }

    // var m_out = function(button,color){
    //   if(!midi){return;}
    //   switch(color){
    //     case 'off':
    //       color = 0;
    //       break
    //     case 'white':
    //       color = 1;
    //       break
    //     case 'cyan':
    //       color = 4;
    //       break
    //     case 'pink':
    //       color = 10;
    //       break
    //     case 'red':
    //       color = 20;
    //       break
    //     case 'blue':
    //       color = 35;
    //       break
    //     case 'yellow':
    //       color = 65;
    //       break
    //     case 'green':
    //       color = 127;
    //       break
    //   }

    //   midi.jazz.MidiOut(0x90,button,color);
    // }

    
      // // COLOR THE DIRECTIONAL BUTTONS
      

      // // DEFAULT COLOR OF BUTTONS

      // // GRID BUTTONS
      // // Grouped in columns
      
      // m_out(0,'red');
      // m_out(1,'cyan');
      // m_out(2,'green');
      // m_out(3,'green');

      // m_out(4,'red');
      // m_out(5,'cyan');
      // m_out(6,'green');
      // m_out(7,'green');
      
      // m_out(8,'red');
      // m_out(9,'cyan');
      // m_out(10,'green');
      // m_out(11,'white');
      
      // m_out(12,'red'); 
      // m_out(13,'cyan');
      // m_out(14,'green');
      // m_out(15,'white');

      // // ENCODERS
      // m_out(48,'white');
      // m_out(49,'white');
      // m_out(50,'yellow');
      // m_out(51,'white');
      // m_out(52,'off');
      // m_out(53,'yellow');
      // m_out(54,'off');
      // m_out(55,'off');
      // m_out(56,'off');
      // m_out(57,'off');
      // m_out(58,'off');
      // m_out(59,'off');

      // //SEQ BUTTONS

      // m_out(16,'pink');
      // m_out(32,'white');

      // m_out(17,'pink');
      // m_out(33,'white');

      // m_out(18,'pink');
      // m_out(34,'white');


      // m_out(19,'green');

      // // m_out(20,'blue'); //punches
      // // m_out(21,'blue');
      // // m_out(22,'blue');
      // // m_out(36,'blue');
      // // m_out(37,'blue');

      // m_out(38,'pink'); // WAUTO

      // m_out(39,'yellow');

      // m_out(24,'green');
      // m_out(40,'pink');

      // // m_out(26,'blue'); //bouncers
      // m_out(27,'green');
      // m_out(42,'green');
      // m_out(43,'green');
      // m_out(44,'green');
      // // m_out(28,'blue');
      // // m_out(42,'blue');
      // // m_out(43,'blue');
      // m_out(30,'blue');
      // m_out(31,'blue');
      // // m_out(45,'blue');
      // // m_out(46,'blue');
      // // m_out(47,'blue');

      // // m_out(29,'pink');
      // // m_out(30,'pink');
      // // m_out(45,'white');
      // // m_out(46,'white');
      // // m_out(31,'pink');
      // // m_out(47,'white');



  },

  listen:function(){

    if(!midi.run){ return; }

    // input signal detected
    while( signal = midi.jazz.QueryMidiIn() ){

      // to clear all midi input events that haven't been processed yet.
      // midi.jazz.ClearMidiIn();

      // cut off timestamp
      signal = signal.slice(1, signal.length);

      // input id
      input_id = signal[0].toString() + signal[1].toString();
      input_signature = signal[0].toString() + signal[1].toString() + signal[2].toString();

      // control signal blacklist. For making piano rolls behave like buttons. make interface for this
      midi_ignore = ['1284564','1441000','1441010'];

      // ignore signals on the blacklist
      if( midi_ignore.indexOf(input_signature) !== -1 ){
        return;
      }

      // reset the value log if a new midi input is touched
      // dont let the log get longer than 2
      midi.input_log.push( Array( signal[0], signal[1] ) );
      if( midi.input_log.length > 2 ){ midi.input_log.shift(); }
      if( midi.input_log.length > 1 && midi.input_log[0][1] !== midi.input_log[1][1]){
        midi.value_log = Array();
      }

      // log the midi value to determine if it's a knob or button
      // dont let the log get longer than 2 values
      midi.value_log.push( signal[2] );
      if( midi.value_log.length > 2 ){ midi.value_log.shift(); }
      log = midi.value_log;

      // determine if the control is a knob or button
      if( ((log[0] - log[1] < 10) && (log[0] - log[1] > -10) && (log[0] - log[1] !== 0)) || ( log[0] == log[1] ) ){

        // knob
        midi.current_type = 'knob';
      }else{

        // button
        midi.current_type = 'button';
      }

      // if the control deck is waiting for MIDI to map, map it and stop
      if( midi_mapper.waiting_for_midi_input == true ){
        midi_mapper.map_control(input_id);
        return;
      }

      // send the signal to the control deck
      // control deck updates the view and runs the actual control functions
      controls.update_midi( input_id, signal[2] );

    }

  },
  out:function(m1,m2,m3){
    // console.log(m1,m2,m3);
    if( m1 == undefined || m2 == undefined || m3 == undefined ){ return; }
    m1 = parseInt(m1);
    m2 = parseInt(m2);
    m3 = parseInt(m3);

    Jazz.MidiOut(m1,m2,m3);
  }
}

midi.init();
var gui = require('nw.gui');

var deck = {
  current_view: 'controls',
  win: gui.Window.get()
}

replace_svgs(); // called from helpers.js
chain_clicks(); // called from helpers.js

// handle menu item clicks
$('[menu-target]').click(function(){
  target = $(this).attr('menu-target');
  $('.panel').hide();
  $('#'+target).show();

  // set the current view. Used to make sure we don't render nonvisible data
  deck.current_view = target;
});

// open external browser 
$('a.external-link').click(function(){
  href = $(this).attr('data-href');
  gui.Shell.openExternal(href);
});

// resize this window to half the screen
window_height = window.screen.availHeight;
window_width = window.screen.availWidth;

menu_bar_height = 0;
if( localStorage.operating_system == 'mac' ){ menu_bar_height = 22; }

deck.win.resizeTo( window_width/2, window_height+5 );
deck.win.moveTo( 0, menu_bar_height );

// close all windows when this window closes
deck.win.on('close', main.window_ui.close_all_windows);

// run the check for updates
main.updater.check_for_updates();
var framerate = {
  set:function(value){
    if( deck.current_view !== 'controls' ){ return; }
    $('#current-framerate').val(value);

    if( value < main.framerate.target ){
      $('#current-framerate').css('background-color','#FF9F9F');
    }else{
      $('#current-framerate').css('background-color','#fff');
    }
  },
  init:function(){
    $('#target-framerate').change(function(){
      main.framerate.target = parseInt($(this).val());
    });
  }
}

framerate.init();
var automator = {
  // 
  // state.automations:[
  //   {
  //     control_id:"chain_speed",
  //     cursor:0,
  //     cursor_moves:1,
  //     steps:600,
  //     wave:'tri',
  //     current_value: 100,
  //     max: 100
  //   }
  // ],

  // used to hold DOM element references, rather than keep them in state
  sliderElements:[],

  get_automation_by_control_id:function(control_id){
    automation = state.automations.filter(function(automation){
      return automation.control_id == control_id;
    });
    return automation[0];
  },
  update_automation_speed: function(control_id, steps){

    automation = automator.get_automation_by_control_id(control_id)

    // if this automation exits, update it    
    if( automation !== undefined ){
      automation.steps = steps

      if( automation.cursor > steps ){
        automation.cursor = steps
      }

      return
    }

    // otherwise register the automation
    automator.register(control_id,steps)

  },

  // saves references to slider dom elements
  // also called in loadState
  saveSliderElements:function(control_id){
    automator.sliderElements[control_id] = {
      $slider:                $('[control-id='+control_id+']'),
      $slider_auto_indicator: $('[control-id='+control_id+'] .slider-auto-bar'),
      $slider_value:          $('[control-id='+control_id+'] .slider-value')
    }
  },
  
  register:function(control_id,steps){

    $automation_button = $('.auto-button[automation-control-id='+control_id+']')

    // get the wave from the DOM
    wave = $automation_button.attr('wave')

    automator.saveSliderElements(control_id)

    automation = {
      control_id: control_id,
      wave: wave,
      steps:steps,
      cursor:0,
      cursor_moves:1,
      current_value:0
    }

    state.automations.push(automation)

    // activate the automation indicator
    $automation_button.addClass('active')

  },
  stop_all:function(){
    state.automations.forEach(function(automation){
      automator.stop_automation(automation.control_id);
    });
  },
  stop_automations:function(control_ids_array){
    control_ids_array.forEach( function(control_id){
      automator.stop_automation(control_id)
      // turn off the button and automation slider
      $('[automation-control-id='+control_id+']').removeClass('active')
    })
  },
  stop_automation:function(control_id){

    // locate the object within the array of automations
    for (var i = 0; i < state.automations.length; i++) {
      if (state.automations[i].control_id === control_id) {

        auto = state.automations[i]
        sliderElements = automator.sliderElements[auto.control_id]

        // set the slider value to the automation's current value
        percent = (auto.current_value / main.controls[control_id].max) * 100
        sliderElements.$slider.find('.slider-value').html( Math.floor(auto.current_value) )
        sliderElements.$slider.find('.slider-bar').css('width', percent+"%")

        // reset the automation speed slider width
        
        sliderElements.$slider.siblings('.auto-speed-slider').width('100%')

        // now remove that object
        state.automations.splice(i, 1);


      }
    }
  },
  draw:function(){

    state.automations.forEach(function( auto ){

      control_id = auto.control_id
      control = main.controls[control_id]

      sliderElements = automator.sliderElements[auto.control_id]

      // get max value from slider
      max_value = sliderElements.$slider_value.text()
      // Sine waves
      // if this is sine wave, the automation is slower at the edges of the curve
      if( auto.wave == 'sine' ){

        // calculate the sine wave
        increase = Math.PI * 2 / auto.steps
        sine_percentage = Math.sin( auto.cursor ) / 2 + 0.5
        auto.cursor += increase

        auto.current_value = (max_value * sine_percentage).toFixed(2)

        // keep the loop going. Once we hit the top go back to 0.
        if( auto.cursor >= auto.steps ){
          auto.cursor = 0
        }

      }else if( auto.wave == 'tri' || auto.wave == 'saw' ){

        // Saw & Tri waves

        // linear distance value between each update of the automation
        slice_width = max_value / auto.steps

        // determine new value
        auto.current_value = (auto.cursor * slice_width).toFixed(2)

        // increment cursor (up or down, since cursor_moves can be negative)
        auto.cursor += auto.cursor_moves

        // when we hit the top
        if( auto.cursor >= auto.steps && auto.cursor_moves == 1 ){

          // saw: start over
          if( auto.wave == 'saw' ){
            auto.cursor = 0  
          }

          // tri: change direction
          if( auto.wave == 'tri' ){
            auto.cursor_moves = -1
          }
          
        }

        // when we hit the bottom
        if( auto.cursor <= 0 && auto.cursor_moves == -1 ){

          // saw: start over
          if( auto.wave == 'saw' ){
            auto.cursor = auto.steps
          }

          // tri: change direction
          if( auto.wave == 'tri' ){
            auto.cursor_moves = 1
          }

        }        

      }else if( auto.wave == 'noise' ){

        // Noise wave (random)

        auto.cursor += 3 // speed of automation

        if( auto.cursor >= auto.steps ){

          // make random value
          auto.current_value = (Math.random(1) * max_value).toFixed(2)

          auto.cursor = 0

        }
      }

      // send the value to the main window
      // control.change( auto.current_value )
      state[control_id] = auto.current_value

      // update the control deck view
      percent = (auto.current_value / max_value) * 100
      sliderElements.$slider_auto_indicator.css('width', percent+"%")
      
    })
  }
}
// require('nw.gui').Window.get().showDevTools()

var _controls = document.getElementById('controls')

var controls = {
  dragging: false,
  dragging_slider: null, // stores which slider is being dragged
  dragging_xy: null, // stores which xy is being dragged
  xy_top_px:null, // pixel position of the top of the current XY being dragged. Used to tell if the draghas left the box
  xy_left_px:null, // pixel position of the left of the current XY being dragged. ^^
  default_max_value: 200,
  init:function(){

    controls.update_next_gif();
    controls.initialize_xy_pads();
    controls.initialize_sliders();
    controls.initialize_buttons();
    
  },
  reset:function(){
    
    $('.xy-container .reset').click();
    $('[control-id=activate_chain_mode]').click();
    $('[menu-target=controls]').click();
    $('.toggle, .auto-button').removeClass('active');

    $('.slider').each(function(){
      control_id = $(this).attr('control-id');
      initial = main.controls[control_id].initial || 0;
      controls.update(control_id,initial);
    });

    automator.stop_all();

    // make the chain look alive
    main.controls.chain_direction_x.change(66);
    main.controls.chain_direction_y.change(66);
    
  },
  initialize_xy_pads:function(){
    
    // replace <xy> elements with full xy pads
    $('xy').each(function(){
      name = $(this).attr('name');
      control_id_x = $(this).attr('control-id-x');
      control_id_y = $(this).attr('control-id-y');
      control_id_reset = $(this).attr('control-id-reset');
      classes = $(this).attr('class');
      if( !classes ){ classes = ''; }
      if( localStorage.show_intensive_controls !== 'true' && classes.indexOf('intensive') !== -1 ){ classes+=' hidden' }
      
      xy_html = '\
        <div class="xy-container '+classes+'">\
          <span>'+name+'</span>\
          <div class="reset" map control-id="'+control_id_reset+'">'+svgs.block+'Reset</div>\
          <div class="xy-surface locked">\
            <div class="map-axis">\
              <b class="map-x-axis" map control-id="'+control_id_x+'" >&harr;</b>\
              <b class="map-y-axis" map control-id="'+control_id_y+'" >&#8597;</b>\
            </div>\
            <div class="x-axis" control-id="'+control_id_x+'"></div>\
            <div class="y-axis" control-id="'+control_id_y+'"></div>\
            <div class="xy-position"></div>\
          </div>\
        </div>'

      $(this).before(xy_html);
      $(this).remove();
    });

    var mousemove_on_xy = function(event){
      
      // the current xy being dragged
      $xy = controls.dragging_xy;

      x = event.clientX - controls.xy_left_px;
      y = event.clientY - controls.xy_top_px + window.pageYOffset;

      // maximum
      if( x >= $xy.width()  ){ x = $xy.width(); }
      if( y >= $xy.height() ){ y = $xy.height(); }

      // minimum
      if( x < 0 ){ x = 0; }
      if( y < 0 ){ y = 0; }     

      // get percents
      x_percent = x / $xy.width();
      y_percent = y / $xy.height();

      // calculate values to send
      x_control_id = $xy.children('.x-axis').attr('control-id');
      y_control_id = $xy.children('.y-axis').attr('control-id');

      x_max = main.controls[x_control_id].max;
      y_max = main.controls[y_control_id].max;

      x_value = x_max * x_percent;
      y_value = y_max * y_percent;

      // send the values to the control functions

      // send horizontal changes
      if( !event.shiftKey ){
        main.controls[x_control_id].change(x_value);
      }

      // send vertical changes
      if( !event.ctrlKey ){
        main.controls[y_control_id].change(y_value);
      }
    }

    // initialize drag on xy pads
    $('.xy-surface').mousedown(function(event){
      controls.dragging    = true;
      controls.dragging_xy = $(this);
      
      // save the xy position of the entire pad
      controls.xy_top_px   = $(this).offset().top;
      controls.xy_left_px  = $(this).offset().left;
      
      // trigger the pad
      mousemove_on_xy(event)
    });

    // drag end X/Y
    $(window).mouseup(function(){
      controls.dragging    = false;
      controls.dragging_xy = null;
      controls.xy_top_px   = null;
      controls.xy_left_px  = null;
    }) // no semicolon because chained:

    // on drag xy
    .mousemove(function(event){

      if(!controls.dragging){return}
      if(controls.dragging_xy == null){return}
      if( $('#controls').hasClass('mapping') ){return}

      mousemove_on_xy(event)
    })

    // event listener for XY state change
    events.on('xyUpdate',function(control_id,value){

      // don't even mess around with NaNs
      if( value == 'auto'){ return }
      if( isNaN(value) )  { return }

      _axis = _controls.querySelectorAll('[control-id='+control_id+']')[1]

      // update axis height or width
      percent = value / main.controls[control_id].max * 100

      dimension = 'height'
      if( _axis.classList.contains('x-axis') ){
        dimension = 'width'
      }

      _axis.style[dimension] = percent+'%'
      _axis.parentNode.querySelectorAll('.xy-position')[0].style[dimension] = percent+'%'

    })

  },
  reset_axis_view:function(control_id){

    initial = main.controls[control_id].initial;

    $axis = $('[control-id='+control_id+']');

    $axis.attr('style','');
    $axis.siblings('.xy-position').attr('style','');

  },
  initialize_sliders:function(){
    
    // replace <slider> elements with full slider html
    $('slider').each(function(){
      
      control_id        = $(this).attr('control-id');
      reset_control_id  = $(this).attr('reset-control-id');
      classes           = $(this).attr('class');
      if( !classes ){ classes = ''; }
      if( localStorage.show_intensive_controls !== 'true' && classes.indexOf('intensive') !== -1 ){ classes+=' hidden' }
      
      name              = main.controls[control_id].name;
      initial           = main.controls[control_id].initial;
      if( !initial ){ initial = 0; }

      auto_button       = '';
      auto_bar          = '';
      auto_speed_slider = '';
      
      if( main.controls[control_id].auto == true ){        
        auto_button = '<div class="auto-button" wave="sine" automation-control-id="'+control_id+'">'+svgs.wave_saw+svgs.wave_sine+svgs.wave_tri+svgs.wave_noise+'</div>';
        auto_bar = '<div class="slider-auto-bar"></div>';        
        auto_speed_slider = '<div class="auto-speed-slider" automate="'+control_id+'" control-id="automation_speed" map ><div class="auto-slider-bar"></div></div>';
      }

      reset_button = '';
      if( reset_control_id !== undefined ){
        reset_button = '<div class="reset" control-id="'+reset_control_id+'" map >'+svgs.block+'Reset</div>';
      }
      
      slider_html = '\
        <div class="slider-container '+classes+'">\
          <span>'+name+'</span>\
          '+reset_button+'\
          '+auto_button+'\
          <div class="slider" control-id="'+control_id+'" map>\
            <span class="slider-value">'+initial+'</span>\
            <div class="slider-bar">\
            '+auto_bar+'\
            </div>\
          </div>\
          '+auto_speed_slider+'\
        </div>'

      $(this).before(slider_html);
      $(this).remove();
    });

    // initialize slider bar width
    $('.slider[control-id]').each(function(){
      // value = parseInt($(this).children('.slider-value').text());
      
      control_id = $(this).attr('control-id');
      control = main.controls[control_id]
      initial = control.initial
      max     = control.max

      if( !max ){ max = controls.default_max_value }
      percent = (initial/max)*100
      $(this).children('.slider-bar').css('width',percent+'%')
    });

    // when mouse moves on slider
    var mousemove_on_slider = function(e){

      // the current slider being dragged
      $slider = controls.dragging_slider;

      // get drag value
      posX = $slider.offset().left;
      width = $slider.width();
      percent = Math.floor((event.pageX - posX)*(100/width));
      
      // maximum and minimum percent
      if( percent > 100 ){ percent = 100; }
      if( percent < 0   ){ percent = 0;   }

      // get the control id
      control_id = $slider.attr('control-id');

      // maximum sent value
      max = main.controls[control_id].max;
      if( !max ){ max = controls.default_max_value; }

      // determine whether value should be a whole number or decimal
      
      // decimal
      if( max < 50 ){
        value = (max * (percent*.01)).toFixed(2);
      }

      // whole number
      else{
        value = Math.floor(max * (percent*.01));   
      }


      // set bar width
      $slider.children('.slider-bar,.auto-slider-bar').css('width', percent+"%");

      // if this is an automation slider, pass the control id to automate and the new amount of speed percent
      if( control_id == "automation_speed" ){
        control_id_to_automate = $slider.attr('automate')
        main.controls['automation_speed'].change(percent,control_id_to_automate)
      }

      // this is a normal slider, run the control function
      else{

        // set text value
        // $slider.children('.slider-value').text(value);

        // run the actual control function
        main.controls[control_id].change(value);

      }
    }

    // drag start on sliders & automation sliders
    $('.slider[control-id], .auto-speed-slider').mousedown(function(e){
      if( $('#controls').hasClass('mapping') ){return}
      controls.dragging = true;
      controls.dragging_slider = $(this);

      mousemove_on_slider(event)
    })

    // drag end on sliders
    $(window).mouseup(function(){
      controls.dragging = false;
      controls.dragging_slider = null;
    })

    // on drag slider
    .mousemove(function(event){

      if(!controls.dragging){return}
      if(controls.dragging_slider == null){return}

      mousemove_on_slider(event)
      
    });


    // event listener for slider state change
    events.on('sliderUpdate',function(control_id,value){

      // don't even mess around with NaNs
      if(value == 'auto'){ return }
      if( isNaN(value) ) { return }

      _slider = _controls.querySelectorAll('[control-id='+control_id+']')[0]

      // update slider width
      percent = value / main.controls[control_id].max * 100
      _slider.querySelectorAll('.slider-bar, .auto-slider-bar')[0].style.width = percent+'%'

      // update slider text value
      _sliderValue = _slider.getElementsByClassName('slider-value')[0]
      _sliderValue.innerHTML = value
    })

  },
  initialize_buttons:function(){

    // click control bank activators
    $('#control-bank-activators .slim-button').click(function(){
      control_bank_id = $(this).attr('name');
      controls.activate_bank( control_bank_id );
    });

    // control button presses
    $('[control-id]:not(.slider):not(.auto-speed-slider)').click(function(){
      if( $('#controls').hasClass('mapping') ){return}
      control_id = $(this).attr('control-id');
      main.controls[control_id].press();
    });

    // automation button click
    $('.auto-button').click(function(){

      if( $('#controls').hasClass('mapping') ){return} // dont toggle when mapping

      control_id = $(this).attr('automation-control-id');
      if( !$(this).hasClass('active') ){        
        // register automation

        max_steps          = 800
        automation_percent = $(this).siblings('.auto-speed-slider').children('.auto-slider-bar').width()
        steps = max_steps * (automation_percent * 0.01)

        automator.update_automation_speed(control_id,steps)
        controls.update_automation_view(control_id, 1)
      }else{        
        automator.stop_automation(control_id);
        controls.update_automation_view(control_id, 0)
      }

    })

    // automation button right click
    .mousedown(function(e){
      if( e.which !== 3 ){ return } // filter for right click

      old_wave = $(this).attr('wave')

      if( old_wave == 'sine' ){ new_wave = 'saw'; }
      else if( old_wave == 'saw' ){ new_wave = 'tri' }
      else if( old_wave == 'tri' ){ new_wave = 'noise' }
      else if( old_wave == 'noise' ){ new_wave = 'sine' }

      $(this).attr('wave',new_wave);

      // if the automation is running, update with the new waveform
      if( $(this).hasClass('active') ){
        console.log('update automation with new waveform')
        control_id = $(this).attr('automation-control-id');
        
        automation = automator.get_automation_by_control_id(control_id);
        automation.wave = new_wave;

      }

    });

    // toggle next gif preview type
    $('#next-gif').click(function(){
      if( localStorage.next_gif_preview == "canvas" ){
        localStorage.next_gif_preview = "gif";
      }else{
        localStorage.next_gif_preview = "canvas";
      }
      controls.update_next_gif();
    });

    // event listener for toggle state change
    events.on('toggleUpdate',function(control_id,value){

      _toggle = _controls.querySelectorAll('[control-id='+control_id+']')[0]

      // if state name is different from control_id, make sure to add the state-id attribute to the HTML
      if(!_toggle){
        _toggle = _controls.querySelectorAll('[state-id='+control_id+']')[0]
      }

      if(!_toggle) return

      if( value == true ){
        _toggle.classList.add('active')
      }else{
        _toggle.classList.remove('active')
      }

    })

    // event listener for indicator state change
    events.on('indicatorUpdate',function(control_id,value){

      _indicator = _controls.querySelectorAll('[state-id='+control_id+']')[0]

      if( value == true ){
        _indicator.classList.add('running')
      }else{
        _indicator.classList.remove('running')
      }

    })

  },
  activate_bank:function(control_bank_id){

    $bank_button = $('#control-bank-activators .slim-button[name='+control_bank_id+']');

    // hide other control banks and show this one
    $('.control-bank').hide();
    
    $('[bank-id='+control_bank_id+']').show();

    // activate this button
    $bank_button.addClass('controls-showing');

    // deactivate other buttons
    $bank_button.siblings().removeClass('controls-showing');

    // if this is a mode button, dont show addon controls
    if( $bank_button.parent().attr('id') == 'mode-control-bank-activators' ){
      $('#addon-control-bank-activators .slim-button').removeClass('controls-showing');
    }
  },
  update:function(control_id, value, option_value){

    if( deck.current_view !== 'controls' ){ return; }
    
    // maximum allowed for this control
    max = main.controls[control_id].max;
    if(!max){ max = controls.default_max_value }

    if( max > 127 ){
      // round value to whole number
      value = Math.round(value);
    }else{
      // round value to 2 decimals
      value = Math.round(value * 100)/100;
    }

    percent = (value / max) * 100;

    // check for slider or XY
    $slider = $('.slider[control-id='+control_id+']');
    $x_axis = $('.x-axis[control-id='+control_id+']');
    $y_axis = $('.y-axis[control-id='+control_id+']');
    $automation_bar = $('[automate='+option_value+']');

    if( $slider.length ){ // its a slider

      // console.log(value,percent)

      // update the slider text
      $slider.children('.slider-value').text(value);
      
      // update the slider width
      $slider.children('.slider-bar').css('width', percent+"%");  
    }

    if( $automation_bar.length ){ // its an automation bar
      $automation_bar.children('.auto-slider-bar').css('width', percent+"%");   
    }

    if( $x_axis.length ){ // its an X axis 
      $xy_pos = $x_axis.siblings('.xy-position');
      $x_axis.add($xy_pos).css('width',percent+'%');

    } 

    if( $y_axis.length ){ // its a Y axis
      $xy_pos = $y_axis.siblings('.xy-position');
      $y_axis.add($xy_pos).css('height',percent+'%');
    }



  },
  toggles_state:[],
  

  // This function doesnt seem to work!!!
  update_toggle: function(control_id, active_bool){
    if( deck.current_view !== 'controls' ){ return; }

    // limit DOM queries by saving the last state of the toggle
    
    if( controls.toggles_state[control_id] == undefined ){
      controls.toggles_state[control_id] = false;
    }

    if( controls.toggles_state[control_id] == active_bool ){
      
      // same state, do nothing
      return;
    
    }else{

      // new state, set the state and continue the function
      controls.toggles_state[control_id] = active_bool;
    }

    if( active_bool == 0 || active_bool == false ){
      $('[control-id='+control_id+']').removeClass('active');
    }else{
      $('[control-id='+control_id+']').addClass('active');
    }
  },
  
  automation_toggles_state:[],
  update_automation_view: function(control_id, active_bool){
    if( deck.current_view !== 'controls' ){ return; }

    // limit DOM queries by saving the last state of the toggle
    
    if( controls.automation_toggles_state[control_id] == undefined ){
      controls.automation_toggles_state[control_id] = false;
    }

    if( controls.automation_toggles_state[control_id] == active_bool ){
      
      // same state, do nothing
      return;
    
    }else{

      // new state, set the state and continue the function
      controls.automation_toggles_state[control_id] = active_bool;
    }

    if( active_bool == 0 || active_bool == false ){
      $('[automation-control-id='+control_id+']').removeClass('active');
    }else{
      $('[automation-control-id='+control_id+']').addClass('active');
    }
  },

  // this will be populated by the function directly below
  // used to make sure we only update the state of the buttons when a new state is recieved
  addon_running_state:[], 
  update_addon_running_indicator:function(addon_id,running){
    
    // // initialize the addon_running_state with all the addon states coming in
    // if( controls.addon_running_state[addon_id] == undefined ){
    //   controls.addon_running_state[addon_id] = false;
    // }

    // if( controls.addon_running_state[addon_id] == running ){
      
    //   // same state, do nothing
    //   return;
    
    // }else{

    //   // new state, set the state and continue the function
    //   controls.addon_running_state[addon_id] = running;
    // }


    // $addon_indicator = $('[name='+addon_id+']');

    // // turn the addon running indicator on or off

    // if( running == true ){
    //   $addon_indicator.addClass('running');
    // }else{
    //   $addon_indicator.removeClass('running');
    // } 

  },

  // updates control view and runs function
  update_midi: function( input_id, value ){

    // do nothing if the control is not mapped
    if( midi.controls[input_id] == undefined ){ return; }

    // iterate over the mapped functions
    midi.controls[input_id].mapped_functions.forEach(function(control_id){

      // check if this input_id has assigned functions
      if( control_id == undefined ){ 
        console.log('no functions assigned to this input_id')
        return;
      }

      // check if this is a valid control_id
      control = main.controls[control_id];
      if( control == undefined ){
        console.log('invalid control id: '+control_id)
        return;
      }

      // if this control expects an option, get that option value from the map
      option_value = null;
      if( control.option_name !== undefined ){
        option_value = midi.controls[input_id].options[control.option_name];
        
        if(!option_value){
          console.log('option for midi control was requested but not provided;');
          return;
        }
      }

      // branch by control type
      if( control.type == 'knob' ){
      
        // determine value to send based on percent of 127
        percent = value/127;
        max = control.max || controls.default_max_value;
        knob_value = max * percent;

        // update the control view (slider or XY)
        controls.update(control_id, knob_value, option_value);

        // run the control function
        control.change(knob_value, option_value);

      }else if( control.type == 'button' && value > 0 ){

        // run the control function
        toggle_state = control.press();

        // update the controls view
        if( toggle_state == undefined ){return}
        controls.update_toggle( control_id, toggle_state );

      }

    });

    // send feedback to the MIDI Map window
    midi_mapper.illuminate_row(input_id);

  },

  get_next_gif_index:function(){
    
    // index of the next gif
    var next_gif_index = main.images.cursor + main.images.skip_cursor
    if( next_gif_index == main.images.active_set.length ){
      next_gif_index = 0
    }

    if( main.images.cursor == 0 && main.images.skip_cursor == 1 ){
      next_gif_index = 1
    }

    return next_gif_index

  },
  update_next_gif:function(){

    next_gif_index = controls.get_next_gif_index()

    // update readout
    $('#next-gif .current').html(next_gif_index+1)
    $('#next-gif .total').html(main.images.active_set.length)

    // get the src
    var next_gif_src = main.images.active_set[ next_gif_index ]

    // save the next gif src to state
    updateState( null, 'next_gif_src', next_gif_src )

    // split depending on if we are using first-frame preview or the full gif
    if( localStorage.next_gif_preview == "canvas" ){

      $canvas = $('#next-gif-canvas');

      ctx = $canvas[0].getContext('2d');
      
      // clear the canvas
      ctx.clearRect(0, 0, $canvas[0].width, $canvas[0].height);
      
      $('#next-gif-img').hide();
      $canvas.show();

      var img = new Image();
      
      img.onload = function() {

        canvas_width   = $canvas.width();
        canvas_height  = $canvas.height();
        natural_width  = img.width;
        natural_height = img.height;
        scale_ratio    = canvas_height / natural_height;
        scaled_width   = natural_width * scale_ratio;
        scaled_height  = canvas_height;

        // explicitly set canvas height and width
        $canvas.attr({
          height: scaled_height+"px",
          width:  canvas_width+"px"
        }).height(scaled_height);

        // center the image
        center_offset = (canvas_width - scaled_width) / 2;
        
        ctx.drawImage(img, 0, 0, natural_width, natural_height, center_offset, 0, scaled_width, scaled_height);

      };
      
      img.src = next_gif_src;
    
    }else{

      $('#next-gif-canvas').hide();
      $('#next-gif-img').show().attr('src', next_gif_src);

    }    
    
  },

  // used when the main window is refreshing.
  suspend:function(){

    // kill all automations
    state.automations = []

    // keep reference to this window
    deck_window = gui.Window.get().window;

    // attempt to reconnect deck to main
    deck_searching_for_main = setInterval(function(){

      // main has finished refreshing
      if(localStorage.refreshing !== true){
        main.deck = deck_window;
        controls.reset();
        clearInterval(deck_searching_for_main);
      }

    },1000);

  },

  update_show_intensive:function(){

    if( localStorage.show_intensive_controls == 'true' ){
      $('.intensive').removeClass('hidden')
    }else{
      $('.intensive').addClass('hidden')
    }    

  }
}

$(window).ready(function(){
  controls.init();  
});

midi_mapper = {
  window:null, // set below in open_map_window
  body:null, // set once window loads
  map_edited:false,
  waiting_for_midi_input: false,
  control_id_to_map:null,
  control_id_to_map_for_automation:null,
  map_folder: gui.App.dataPath + "/control_layouts/midi/",
  map_file_location: gui.App.dataPath + "/control_layouts/midi/" + localStorage.midi_map + ".json", // also updated in load_map()

  /* * * * * * * * * * * * */
  /*                       */
  /* Initialization        */
  /*                       */
  /* * * * * * * * * * * * */
  
  init:function(){
    
    // midi map mode press
    $('#map-midi').click(function(){
      $('#controls').toggleClass('mapping');
      midi_mapper.update_mapped_controls();

      // exit preset delete mode
      presets.deleteButtonActive = false
    });

    // edit midi map button
    $('#edit-map').click(function(){

      if( midi_mapper.window == null ){
        midi_mapper.open_map_window();
      }else{
        midi_mapper.window.focus();
      }

    });

    // cancel midi waiting button
    $('#cancel-midi-waiting').click(function(){
      midi_mapper.reset_map();
    });

    // click on mappable control while in mapping mode
    $('body').on('click','.mapping [map]', function(){

      $('body').addClass('modal-show');
      $(this).addClass('midi-waiting');

      midi_mapper.control_id_to_map = $(this).attr('control-id');
      if( midi_mapper.control_id_to_map == 'automation_speed' ){
        midi_mapper.control_id_to_map_for_automation = $(this).attr('automate');
      }
      
      // next step is in midi.js:
      // the midi signal is intercepted because:

      midi_mapper.waiting_for_midi_input = true;

    });

  },

  update_mapped_controls:function(){

    $('.mapped').removeClass('mapped');

    // add a "mapped" class to all mapped controls
    if( midi.controls ){
      $.each(midi.controls,function(input_id,control){
        control.mapped_functions.forEach(function(control_id){

          // special case for automation speed (checks option)
          if( control_id == 'automation_speed' ){
            control_id = control.options.control_id_to_automate;
            $('[automate='+control_id+']').addClass('mapped');
          }

          // normal mapping
          else{
            $('[control-id='+control_id+']').addClass('mapped');
          }            
        });
      });
    }
  },

  open_map_window:function(){

    if( midi_mapper.window !== null ){
      midi_mapper.window.close();      
    }

    midi_mapper.window = gui.Window.open('./midi-map.html',{
      title:'MIDI Map',
      toolbar:false,
      frame:true,
      width:650,
      min_width:650,
      height:400,
    });

    midi_mapper.window.on('loaded', function(){

      midi_mapper.body = $(midi_mapper.window.window.document.body);
      midi_mapper.init_window_ui();
      midi_mapper.update_map_view();

      midi_mapper.window.on('close',function(){      
        midi_mapper.window.close(true);
        midi_mapper.window = null;
      });

    });    
  },
  
  init_window_ui:function(){

    // map selector

    $map_selector = midi_mapper.body.find('select');
    $map_selector.change(function(){

      val = $(this).val();
      val = val.replace(/ /g, '_');

      // save the current map
      midi_mapper.save(function(){
         midi_mapper.load_map(val);          
      },function(err){
        console.log('Could not save the map: '+err);
        midi_mapper.load_map(val);
      });
    });

    // import map button

    $import_map_file = midi_mapper.body.find('#import-map-file');

    midi_mapper.body.find('#import-map').click(function(){
      $import_map_file.click();
    });

    // when map is selected to import
    $import_map_file.change( midi_mapper.import_map );

    // export map button
    
    $export_map_file = midi_mapper.body.find('#export-map-file'); 

    midi_mapper.body.find('#export-map').click(function(){
      $export_map_file.attr('nwsaveas', localStorage.midi_map+'.json').val('').click();
    });

    // when map is selected to export
    $export_map_file.change( midi_mapper.export_map );

    // new map button
    midi_mapper.body.find('#new-map').click( midi_mapper.new_map );

    // delete map button
    midi_mapper.body.find('#delete-map').click( midi_mapper.delete_map );
  },

  /* * * * * * * * * * * * */
  /*                       */
  /* State Updates         */
  /*                       */
  /* * * * * * * * * * * * */

  load_map:function(map_name){
    
    // alert('loading '+map_name)

    if( !map_name || map_name == "None" ){
      localStorage.midi_map = null;
      localStorage.midi_map_json = "{}";
      return;
    }

    localStorage.midi_map = map_name;
    midi_mapper.map_file_location = gui.App.dataPath + "/control_layouts/midi/" + localStorage.midi_map + ".json";

    fs.readFile(
      midi_mapper.map_file_location, 'utf8', function(err,data){
      if(data == "undefined" || data == undefined){ data = "{}"; }
      localStorage.midi_map_json = data;      
      midi.controls = JSON.parse( data );
      midi_mapper.update_rows();
      midi_mapper.update_mapped_controls();
      // console.log( data );
    });
  },

  save: function( success_callback, error_callback ){

    if( midi_mapper.map_edited !== true ){
      success_callback();
      return;
    }

    // sort and remove duplicates
    midi_mapper.organize_map();

    // make string from JSON
    localStorage.midi_map_json = JSON.stringify(midi.controls);

    // alert(localStorage.midi_map_json)

    fs.writeFile( 
      midi_mapper.map_file_location,
      localStorage.midi_map_json,
      function(err,data){
        if(err) {
          error_callback( err );
        }else{
          success_callback();
        }
      }
    );
  },

  organize_map:function(){

    sorted_keys = Object.keys(midi.controls).sort();
    organized_controls = {};
    sorted_keys.forEach(function(key){
      organized_controls[key] = midi.controls[key];
    });

    midi.controls = organized_controls;
    midi_mapper.map_edited = true;

  },

  /* * * * * * * * * * * * */
  /*                       */
  /* UI View Updates       */
  /*                       */
  /* * * * * * * * * * * * */

  update_map_view:function(){

    midi_mapper.update_map_selector();
    midi_mapper.update_rows();
  },

  update_map_selector:function(){

    $map_selector = midi_mapper.body.find('select');
    $map_selector.empty();

    midi_folder_contents = fs.readdirSync( localStorage.control_layouts_folder + "/midi" );
    amount_of_maps = 0;

    midi_folder_contents.forEach(function( midi_map ){
      if( midi_map.indexOf('.json') == -1 ){ return; } // only load json files
      map_name = path.basename(midi_map,'.json').replace(/_/g,' '); // make the name pretty
      if( map_name == null || map_name == '' || map_name == ' ' ){return;} // maps must have names
      $map_selector.append("<option>"+ map_name +"</option>"); // add the option
      amount_of_maps++;
    });

    if(amount_of_maps == 0){
      $map_selector.append("<option>New MIDI Map</option>");
    }

    // set to last used midi controller
    $map_selector.val( localStorage.midi_map.replace(/_/g,' ') ).trigger('change');
  },

  update_rows:function(){

    if( midi_mapper.window == null ){ return }
    if( !midi_mapper.body.is(':visible') ){ return }

    $table = midi_mapper.body.find('table');
    $table.empty();
    
    // console.log(midi.controls)

    $.each(midi.controls, function(input_id, data) {

      // used to remove duplicate control ids on the same input
      var previous_control_id = '';

      data.mapped_functions.forEach(function( control_id ){

        // remove this control_id if it is a duplicate
        if( control_id == previous_control_id ){
          console.log( 'removing duplicate '+control_id+' from '+input_id );
        //   midi_mapper.remove_mapping( input_id, control_id );
          return;
        }else{
          previous_control_id = control_id;
        }

        // remove this control if it does not exist
        if( main.controls[control_id] == undefined ){
          console.log( 'removing obsolete control: '+control_id );
          midi_mapper.remove_mapping( input_id, control_id );
          midi_mapper.map_edited = true;
          return;
        }

        control_name = main.controls[control_id].name

        $input_id       = $('<td>'+input_id+'</td>');
        $control_name   = $('<td>'+control_name+'</td>');
        $delete_control = $('<td class="remove">'+svgs.cross+'</td>');

        $delete_control.click(function(){
          midi_mapper.remove_mapping(input_id,control_id,midi_mapper.update_rows);
        });

        $control_row = $('<tr></tr>')
          .attr('input-id',input_id)
          .append($input_id)
          .append($control_name)
          .append($delete_control);

        $table.append($control_row);

      });

    });
  },

  illuminate_row:function(input_id){
    if( midi_mapper.window == null ){ return }
    if( !midi_mapper.body ){ return }
    if( !midi_mapper.body.is(':visible') ){ return }
    
    // used to make sure the row variable does not get overwritten when multiple controls are touched
    var scoped_variables = {};

    // find the row
    scoped_variables.$row = midi_mapper.body.find('[input-id='+input_id+']');
    if( scoped_variables.$row.length == 0 ){ return }

    // illuminate row
    scoped_variables.$row.addClass('active');

    // scroll to row
    midi_mapper.body.stop().animate({
      scrollTop:scoped_variables.$row.offset().top - 70
    },50);

    // fade it out
    scoped_variables.fadeout_timer = setTimeout(function(){
      scoped_variables.$row.removeClass('active');
    },1000);

  },

  /* * * * * * * * * * * * */
  /*                       */
  /* UI Button Presses     */
  /*                       */
  /* * * * * * * * * * * * */

  import_map:function(e){

    // get the file path from the input field
    import_file = e.target.value;
    e.target.value = '';

    // save the current midi map
    midi_mapper.save(function(){

      // get file name from path
      import_file_name = path.basename(import_file);

      if(import_file_name.indexOf('.json') == -1 ){
        alert('Error: '+import_file_name+' is not a MIDI map.');
        console.log('Error: '+import_file_name+' is not a MIDI map.');
        return;
      }

      // declare new destination path
      imported_file_destination = midi_mapper.map_folder + '/' + import_file_name;

      // copy in the map
      copy_file( import_file, imported_file_destination, function(err){

        if(err){
          console.log(err);
          return;
        }

        // set the "last used map" to the new one, so when the selector loads it will load the new one
        localStorage.midi_map = path.basename( import_file_name, '.json' );
        midi_mapper.update_map_selector();

        // load the new map
        midi_mapper.load_map( localStorage.midi_map );

      })

    },function(){
      alert('There was an issue saving the current map beform importing the new map.');
      console.log('There was an issue saving the current map beform importing the new map.');
    });
  },

  export_map:function(e){
    map_file = e.target.value;
    
    midi_mapper.save(function(){
      // alert('the map was saved to '+midi_mapper.map_file_location);
      // alert('copying map to '+map_file);
      copy_file(midi_mapper.map_file_location,map_file,function(err){

        if(err){
          console.log(err);
          return;
        }

        console.log('export success');

      });

    },function(){
      alert('There was an issue exporting the map.');
      console.log('There was an issue exporting the map.');
    });
  },

  new_map:function(){
    new_map_name = prompt("Name for new map:");
    if( new_map_name == null || new_map_name == undefined || new_map_name == ' ' || new_map_name == '' ){ return; }

    // save the current map
    midi_mapper.save(function(){

      // reformat new map name
      localStorage.midi_map = new_map_name.replace(/ /g, '_');

      // set the location of the new map
      midi_mapper.map_file_location = gui.App.dataPath + "/control_layouts/midi/" + localStorage.midi_map + ".json";

      // initialize the new map
      midi.controls = {};
      midi_mapper.map_edited = true;

      // save the new map
      midi_mapper.save(function(){

        // update the selector
        midi_mapper.update_map_selector();

        // load the new map rows
        midi_mapper.load_map( localStorage.midi_map );

      },function(){
        alert('there was an error saving the new map')
      });

    },function(){
      alert('There was an issue saving the current map.');
    });
  },

  delete_map:function(){
    map_name = localStorage.midi_map.replace(/_/g,' ');
    delete_confirm = confirm('Are you sure you want to delete '+map_name+'?');
    if( !delete_confirm ){return;}
    fs.unlink( midi_mapper.map_file_location, function(err){
      if(err){console.log(err)}
      
      // update the selector
      midi_mapper.map_edited = false;
      midi_mapper.update_map_selector();
      midi_mapper.body.find('select').trigger('change');

    });
  },

  remove_mapping:function(input_id,control_id,callback){

    mapped_functions = midi.controls[input_id].mapped_functions;
    control_index = mapped_functions.indexOf( control_id );
    
    if (control_index > -1) {
      midi.controls[input_id].mapped_functions.splice(control_index, 1);
      $('[control-id='+control_id+']').removeClass('mapped');
      midi_mapper.map_edited = true;
    }

    if(callback){
      callback();
    }
  },

  /* * * * * * * * * * * * */
  /*                       */
  /* Deck Control Mapping  */
  /*                       */
  /* * * * * * * * * * * * */

  map_control:function(input_id){

    control_id = midi_mapper.control_id_to_map;
    midi_mapper.map_edited = true;

    // add the input_id to the waiting element
    $('.midi-waiting').attr('map',input_id).addClass('mapped');

    // add this input_id to the loaded midi control map
    if( midi.controls[input_id] == undefined ){
      // initialize object for this midi input_id
      midi.controls[input_id] = {
        mapped_functions:[]
      }
    }

    // shortcut to the mapped functions
    mapped_functions = midi.controls[input_id].mapped_functions;

    // make sure the selected control_id is not already mapped to this input_id
    if( mapped_functions.indexOf( control_id ) == -1 ){

      // add the new control to the MIDI map
      mapped_functions.push( control_id );
    }

    // if this control_id is for automation, save the control_id to automate as an option
    if( control_id == 'automation_speed' ){
      // initialize the options object
      if( midi.controls[input_id].options == undefined ){
        midi.controls[input_id].options = {};
      }
      midi.controls[input_id].options.control_id_to_automate = midi_mapper.control_id_to_map_for_automation;
    }

    console.log('input_id: '+input_id);
    console.log('control_id: '+control_id);
    console.log('mapped_functions: '+mapped_functions);

    midi_mapper.update_rows();
    midi_mapper.reset_map();
  },

  reset_map:function(){
    // reset deck controls for new mapping
    $('body').removeClass('modal-show');
    $('.midi-waiting').removeClass('midi-waiting');
    midi_mapper.waiting_for_midi_input = false;
    midi_mapper.control_id_to_map = null;
    midi_mapper.control_id_to_map_for_automation = null;
  },

}

midi_mapper.init();

preview_screen = {
  load:function(){
    if( gui.Screen.Init !== undefined ){
      gui.Screen.Init();  
    }

    gui.Screen.chooseDesktopMedia(["window"], function(streamId) {
      var vid_constraint = {
        mandatory: {
          chromeMediaSource: 'desktop', 
          chromeMediaSourceId: streamId, 
          maxWidth: 400, 
          maxHeight: 300,
          minFrameRate: 10,
          maxFrameRate: 30
        }, 
        optional:[]
      };

      console.log(streamId);

      navigator.webkitGetUserMedia({audio:false, video:vid_constraint},
        function(stream){
          document.getElementById('preview').src = URL.createObjectURL(stream);
          $('#enable-preview').hide();
          
          stream.onended = function() {
            // $('#enable-preview').show();
          };

        },function(error){
          console.log('failure',error);
      });
    });
  }
}

$('#preview, #enable-preview').click(function(){
  preview_screen.load();
});



// used in onboarding AND on deck settings

settings_ui = {

  init_gif_folder_ui: function(){

    $('#gif-folder').change(function(){
      folder = $(this).val();
      if( localStorage.operating_system == 'win' ){
        folder = folder.replace(/\\/g,'/');
      }

      if( folder == '' ){
        folder = localStorage.gif_folder;
      }

      localStorage.gif_folder = folder;
      settings_ui.update_gif_folder_readout(folder);
      gifslap.load_gifs( settings_ui.update_gifs_amount );

      callback = $(this).attr('callback');
      if(callback){ 
        eval( callback+'();' );
      }

    });   

  },

  // makes the folder input field as wide as the content
  update_gif_folder_readout: function(folder){
    $('#gif-folder-readout').val(folder).attr('size', folder.length + 2);
  },

  update_gifs_amount: function(){
    $('#gifs-amount').html( gifslap.all_gifs.length );

    if( gifslap.all_gifs.length == 0 ){
      $('#load-gifs-continue a').addClass('disabled');
    }else{
      $('#load-gifs-continue a').removeClass('disabled');
    }

  }
}

_presetsContainer = document.getElementById('presets-container')

// presets folder created in initialize_gifSlap.js

var presets = {

  getAll:function(){
    
    var allPresets = Array()
    var presets_folder_contents = fs.readdirSync(localStorage.presets_folder)
    presets_folder_contents.forEach(function( file ){
      if( file.toLowerCase().indexOf('.txt') !== -1 ){    
        presetPath = localStorage.presets_folder + "/" + file;
        allPresets.push( presetPath )
      }    
    })
    return allPresets    
  },

  render:function(){

    _presetsContainer.innerHTML = ''

    presetFilePaths = presets.getAll()
    for (var i = presetFilePaths.length - 1; i >= 0; i--) {

      fileName = path.basename(presetFilePaths[i])

      imageFilePath = presetFilePaths[i].replace('.txt','.jpeg')

      _thumbnail = document.createElement('div')
      _thumbnail.style.backgroundImage = 'url("'+imageFilePath+'")'
      _thumbnail.setAttribute('class','preset-thumbnail')

      _presetTile = document.createElement('div')
      _presetTile.setAttribute('class','preset-tile w25')
      _presetTile.setAttribute('onclick','presets.clickPresetTile(this)')
      _presetTile.setAttribute('filename',fileName)
      _presetTile.appendChild(_thumbnail)
      _presetsContainer.appendChild(_presetTile)

    }

    // turn off delete button if no presets are rendered
    if( presetFilePaths.length == 0 ){
      presets.deleteButtonActive = false
    }
  },

  save:function(){

    // generate name of preset

    var presetName = Date.now()

    var presetStateFilePath = localStorage.presets_folder + '/' + presetName + '.txt'
    var presetImageFilePath = localStorage.presets_folder + '/' + presetName + '.jpeg'

    // get state text file
    var stateText = JSON.stringify(state)

    // write state to file
    fs.writeFile(presetStateFilePath, stateText, function(err) {
      if(err) return console.log(err)
      
      // take the screenshot
      main.gifslap.take_screenshot(presetImageFilePath,function(imageFilePath){
        presets.render()
      })
      
    })
  },
  
  deleteButtonActive:false,
  deleteFlashInterval:null,
  clickDeletePreset: function(){
    
    // return if no presets
    if( _presetsContainer.innerHTML == '' ) return

    presets.deleteButtonActive = !presets.deleteButtonActive
    clearInterval(presets.deleteFlashInterval)

    presets.deleteFlashInterval = setInterval(function(){

      window.delete_preset.classList.toggle('warn')

      if( presets.deleteButtonActive == false ){
        clearInterval(presets.deleteFlashInterval)
        window.delete_preset.classList.remove('warn')
        return
      }

    },100)

  },

  clickPresetTile: function(presetElement){

    fileName = presetElement.getAttribute('filename')
    filePath = localStorage.presets_folder+'/'+fileName

    if( presets.deleteButtonActive ){
      presets.delete(filePath)
      return
    }

    presets.load(filePath)
  },

  load:function(filePath){
    fs.readFile(filePath, 'utf8', function (err,data) {
      if(err) return console.log(err)
      data = JSON.parse(data)
      loadState(data)
    })
  },
  delete:function(filePath){

    var presetStateFile = filePath
    var presetImageFile = filePath.replace('.txt','.jpeg')

    fs.unlink(presetStateFile, function(err){
      if (err) return console.log(err) 
      fs.unlink(presetImageFile, function(err){
        if (err) return console.log(err)
          presets.render()
      })
    })
  },
}

presets.render()
/* * * * * * * * * * *
*                    *
* GIF FOLDER         *
* * * * * * * * * * **/

$('#gif-folder-readout').attr('value',localStorage.gif_folder);

settings_ui.init_gif_folder_ui();
settings_ui.update_gif_folder_readout(localStorage.gif_folder);
controls.update_next_gif();

/* * * * * * * * * * *
*                    *
* MIDI LAYOUTS       *
* * * * * * * * * * **/

// // watch the MIDI layouts folder for changes
// // midi_watch = fs.watch( localStorage.control_layouts_folder + "/midi", function(){
// //   update_midi_layouts();
// // });


// $('#midi-filesystem').click(function(){
//   gui.Shell.openItem(gui.App.dataPath + "/control_layouts/midi/");
// });

/* * * * * * * * * * *
*                    *
* RANDOMIZATION      *
* * * * * * * * * * **/

var randomize = function(randomize){

  localStorage.randomize = randomize;
  if(randomize == true || randomize == 'true'){

    // randomize the gifs
    main.images.randomize_order = true;
    main.shuffle_array( main.images.active_set );

  }else{

    // reload the gifs without randomization
    main.images.randomize_order = false;
    main.gifslap.load_gifs();

  }
}

// trigger change to randomization variable
$('#randomize').change(function(){
  randomize( $(this).prop('checked') );
});

// set the initial state of the checkbox
if( localStorage.randomize == 'true' ){
  $('#randomize').prop('checked',true);
  randomize(true);
}else{
  $('#randomize').prop('checked',false);
  randomize(false);
}

/* * * * * * * * * * *
*                    *
* GAMEPAD            *
* * * * * * * * * * **/

$('#gamepad').change(function(){
  localStorage.gamepad = $(this).prop('checked');

  if( localStorage.gamepad == 'true' ){
    main.gamepadSupport.init();
  }else{
    main.gamepadSupport.stopPolling();
  }

});

if( localStorage.gamepad == 'true' ){
  $('#gamepad').prop('checked',true);  
}else{
  $('#gamepad').prop('checked',false);
}

/* * * * * * * * * * * * * * * * *
*                                *
* PROCESSOR INTENSIVE CONTROLS   *
* * * * * * * * * * * * * * * * **/



$('#show-intensive-controls').change(function(){

  localStorage.show_intensive_controls = $(this).prop('checked');
  controls.update_show_intensive() 

})

if( localStorage.show_intensive_controls == 'true' ){
  $('#show-intensive-controls').prop('checked',true);  
}else{
  $('#show-intensive-controls').prop('checked',false);
}

/* * * * * * * * * * *
*                    *
* VERSION NUMBER     *
* * * * * * * * * * **/

// plug in version number
version = gui.App.manifest.version;
$('#version').html(version);
keyboard = {
  init:function(){
    
    $(window).keydown(function(e){
      if( keyboard.controls[e.which] && keyboard.controls[e.which]['keydown'] ){
        keyboard.controls[e.which]['keydown']()
      }      
    })

    $(window).keyup(function(e){
      if( keyboard.controls[e.which] && keyboard.controls[e.which]['keyup'] ){
        keyboard.controls[e.which]['keyup']()
      }      
    })


  },
  state:{
    shift:false,
    control:false
  },
  reset_modifiers:function(){
    keyboard.state.shift = false
    keyboard.state.control = false
    $('body').removeClass('keydown-shift')
    $('body').removeClass('keydown-control')
  },
  controls:{

    '16':{ // SHIFT
      keydown:function(){
        keyboard.state.shift = true
        $('body').addClass('keydown-shift')
      },
      keyup:function(){
        keyboard.state.shift = false
        $('body').removeClass('keydown-shift')
      }
    },

    '17':{ // CONTROL
      keydown:function(){
        keyboard.state.control = true
        $('body').addClass('keydown-control')
      },
      keyup:function(){
        keyboard.state.control = false
        $('body').removeClass('keydown-control')
      }
    },

    '27':{ // ESC
      keydown: function(){ 

        // exit preset delete mode
        presets.deleteButtonActive = false
      
        // exit midi waiting screen
        if( midi_mapper.waiting_for_midi_input ){
          midi_mapper.reset_map();
        }

        // exit midi learn mode
        else if( $('#controls').hasClass('mapping') ){
          $('#controls').removeClass('mapping');
          $('#map-midi').removeClass('active');
        }
        
      }
    },

    '32':{ // SPACE
      keydown: function(){
        main.controls.pause_play.press()
      }
    }    
  }
}

keyboard.init();
var webcam = {
  run:false,
  sources_cursor:0,
  sources:[],
  stream_src:null,
  _sourceVideo:null,
  width:480,
  height:270,

  init: function(){

    // stop any running webcams
    // webcam.die();    

    webcam.sources = []

    // get the stream
    MediaStreamTrack.getSources(function(sourceInfos){
      
      console.log(sourceInfos)

      // make new list of video sources
      for (var i = 0; i !== sourceInfos.length; ++i) {
        var sourceInfo = sourceInfos[i];
        if (sourceInfo.kind === 'video') {
          webcam.sources.push( sourceInfo.id );
        }
      }

      // choose video source from the list
      var videoSource = webcam.sources[ webcam.sources_cursor ]

      // specs of the video
      var constraints = {
        video: {
          optional: [{sourceId: videoSource}],
          // mandatory: {
          //   minWidth: webcam.width,
          //   minHeight: webcam.height
          // }
        }
      }

      // succes or error functions
      navigator.webkitGetUserMedia(constraints, webcam.successCallback, webcam.errorCallback)
    
    })
    
    
  },  
  
  successCallback: function(stream) {
    
    // remove any old source videos
    $('#source-video').remove()

    // show the send options on deck
    deck.$('#webcam-sends').removeClass('hidden');

    window.stream = stream; // make stream available to console
    webcam.stream_src = window.URL.createObjectURL(stream);
    webcam.run = true;

    // make new source video
    $webcamVideo = $('<video autoplay></video>')
      .attr('id','source-video')
      .attr('src',webcam.stream_src)
      .attr("class","locked")
      .css({
        'position':'absolute',
        'visibility':'hidden',
        'left':'-9999999px',
        'width':webcam.width+'px',
        'height':webcam.height+'px'
      })

    $('#container').append($webcamVideo)
    webcam._sourceVideo = $webcamVideo[0]

  },
  
  errorCallback: function(error){
    console.log('navigator.getUserMedia error: ', error);
  },
  
  die:function(){    
    
    // hide send options on deck
    deck.$('#webcam-sends').addClass('hidden')
    deck.$('[control-id="send_webcam_to_foreground"]').removeClass('active')
    deck.$('[control-id="send_webcam_to_background"]').removeClass('active')
    deck.$('[control-id="send_webcam_to_corner_box"]').removeClass('active')

    // turn off webcam everywhere
    corner_box.disable_webcam()
    images.disable_webcam()
    bg_mod.disable_webcam()

    // remove source video
    document.getElementById('source-video').remove()    

    if(window.stream)
      window.stream.stop()

    webcam.stream_src = null    
    webcam.run = false
  },

  next_input:function(){
    webcam.sources_cursor++
    if( webcam.sources_cursor >= webcam.sources.length ){
      webcam.sources_cursor = 0
    }
    webcam.init()
  }
}
//# sourceMappingURL=maps/deck-95b303a8cb.js.map