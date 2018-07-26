/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);

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
/* * * * * * * * * * * *
*                      *
* initialization       *
* * * * * * * * * * * **/

// function to declare configuration variables
init_storage = function(key,default_value){
  if( localStorage[key] == undefined || localStorage[key] == "undefined" ){
    console.log("initializing "+key+" as "+default_value);
    localStorage[key] = default_value;
  }
}

// folder path containing the users gifs
init_storage('gif_folder',null);

// name of last selected MIDI map
init_storage('midi_map', 'New_MIDI_Map');

// stringified JSON of midi map
init_storage('midi_map_json',"{}");

// randomization of gifs
init_storage('randomize','true');

// type of next-gif preview
init_storage('next_gif_preview','canvas');

// gamepad usage
init_storage('gamepad','false');

// refreshing state
init_storage('refreshing','false');

// platform this is running on
var isWin = /^win/.test(process.platform);
if( isWin ){
  init_storage('operating_system','win');
}else{
  init_storage('operating_system','mac');
}

// Make folders

// function to create a folder if it doesnt exist
init_folder = function(folder_path,callback){
  fs.exists( folder_path, function(exists) {
    if( !exists) {
      fs.mkdir(folder_path,function(err){
        if(err){console.log(err)}
        if(callback){callback();}
      });      
    }
  });
}

// create control_layouts folder
localStorage.control_layouts_folder = gui.App.dataPath + "/control_layouts";
init_folder(localStorage.control_layouts_folder,function(){

  // create MIDI controls folder
  init_folder( localStorage.control_layouts_folder+"/midi",function(){
    
    // copy over included midi maps

  });

  // we must reload because the control folders must be fully initialized before checking their contents.
  location.reload();
});


// create presets folder
localStorage.presets_folder = gui.App.dataPath + "/presets";
init_folder(localStorage.presets_folder)


// global var, links to deck.state in loop.js
var state;
// load Window controls API
var win = gui.Window.get();
win.showDevTools()

// initialize menu bar
var menubar = new gui.Menu({type:"menubar"});

/* * * * * * * * * **
*                   *
*   MENU BAR MAC    *
*                   *
* * * * * * * * * * */

if( localStorage.operating_system == 'mac' ){
  menubar.createMacBuiltin("gifSlap");
  win.menu = menubar;

  // menubar.items[0] gifSlap =====================

  gifslap_submenu = menubar.items[0].submenu;

  // remove "About gifSlap" because it is wrong
  gifslap_submenu.remove(gifslap_submenu.items[0]);

  // insert to the gifSlap menu dropdown
  
  // nothing

  // menubar.items[1] Edit =====================

  // nothing yet

  // menubar.items[2] Window =====================

  window_submenu = menubar.items[2].submenu;

  // remove separator
  window_submenu.remove(window_submenu.items[2]);

  // remove "Bring All to Front"
  window_submenu.remove(window_submenu.items[2]);

  // insert to the Window menu dropdown
  window_submenu.insert( new gui.MenuItem({
    label:"Toggle Fullscreen",
    click: function(){
      win.isFullscreen = !win.isFullscreen;
    }
  }));

  // menubar.items[3] Help  =====================

  help = new gui.Menu();
  help.append( new gui.MenuItem({
    label:"Open Docs Webpage",
    click:function(){
      gui.Shell.openExternal('http://gifslap.com/docs');
    }
  }));
  // extra space after "Help" prevents a search bar from appearing in the dropdown.
  win.menu.append(new gui.MenuItem({ label: 'Help ', submenu: help}));

  // settings = new gui.Menu();
  // settings.append( new gui.MenuItem({
  //   label:"Change GIF Folder",
  //   click:function(){
      
  //   }
  // }));
  // win.menu.append(new gui.MenuItem({ label: 'Settings', submenu: settings}));
  

  // win.menu.insert(new gui.MenuItem({ label: 'File', submenu: file}), 1);

}

/* * * * * * * * * * *
*                    *
*  MENU BAR WINDOWS  *
*                    *
* * * * * * * * * * */

if( localStorage.operating_system == 'win' ){
  
  window_menu = new gui.Menu();
  window_menu.append( new gui.MenuItem({
    label:"Fullscreen",
    click:function(){
      win.isFullscreen = !win.isFullscreen;
      $('.leave-fullscreen').show();
    }
  }));
  menubar.append(new gui.MenuItem({ label: 'Window', submenu: window_menu}));  

  help = new gui.Menu();
  help.append( new gui.MenuItem({
    label:"Open Docs Webpage",
    click:function(){
      gui.Shell.openExternal('http://gifslap.com/docs');
    }
  }));
  menubar.append(new gui.MenuItem({ label: 'Help', submenu: help}));

  win.menu = menubar;

}

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
// object for high level functions and variables.
gifslap = {

  toggle:{
    paused:function(){
      deck.updateState( 'toggle', 'paused', !state.paused )
    }
  },

  update:{
    zoom:function(zoomLevel){
      deck.updateState(null,'zoom_level',zoomLevel)
      win.zoomLevel = zoomLevel
    }
  },









  all_gifs: Array(), // set in gifslap.load_gifs();
  r:function(max){
    return Math.round(Math.random() * max);
  },
  
  take_screenshot:function(filePath, callback){  
    win.capturePage(function(img){
      var base64Data = img.replace(/^data:image\/(png|jpg|jpeg);base64/,'')
      fs.writeFile(filePath, base64Data, 'base64',function(err){
        if(err) console.log(err)
        callback(filePath)
      })
    },{ format: "jpeg", datatype: 'raw' })
  },

  load_gifs: function(callback){

    if( localStorage.gif_folder == 'null' || localStorage.gif_folder == "No Folder Selected" ){ return; }

    // if folder has moved return
    if( !fs.existsSync(localStorage.gif_folder) ){ return }

    gifslap.all_gifs = Array();
    gifs_folder_contents = fs.readdirSync(localStorage.gif_folder);
    gifs_folder_contents.forEach(function( item ){
      if( item.toLowerCase().indexOf('.gif') !== -1 ){    
        item = localStorage.gif_folder + "/" + item;
        item = item.replace(/ /g,'%20');
        gifslap.all_gifs.push( item );
      }
    });

    // randomize
    if( localStorage.randomize == 'true' ){
      shuffle_array(gifslap.all_gifs);
    }

    if( callback ){ callback(); }
  }
}

gifslap.load_gifs();
// onboarding flow.

// 1 -> GIF files
// 2 -> Registration

// for testing the onboarding flow:

// localStorage.gif_folder = 'null';

onboard = {
  steps:[],
  step_cursor:0,
  step_functions:{
    'load-gifs':function(){
      settings_ui.init_gif_folder_ui();
      chain_clicks(); // called from helpers.js
      onboard.show_modal_content('load-gifs');
      onboard.enter_function = function(){
        $('#gif-folder').click();
      }
    }
  },
  next_step:function(){

    // if there are still steps in the queue, show them
    if( onboard.step_cursor < onboard.steps.length ){
      onboard.step_functions[ onboard.steps[ onboard.step_cursor ] ]();
      onboard.step_cursor++;
    }else{
      location.reload();
    }
  },
  show_modal_content:function(id,callback){
    
    // hide all the modal contents
    $('.modal-content').hide();

    // show the specific one
    $('#onboard #'+id).fadeIn(200,callback);

  },
  load_gifs_continue:function(){ // called by callback html attribute on file picker element
    
    $('#gifs-amount-message').fadeIn(200);
    $('#load-gifs-continue').fadeIn(200);
    
    // allow enter button to press the continue button
    onboard.enter_function = function(){
      $('#onboard .continue-button').click();
    }

    $('#onboard .continue-button').not('.disabled').click(function(){
      onboard.next_step();
      onboard.enter_function = null;
    });
  },
  enter_function:null,
  enter_handler:function(e){

    if( e.which !== 13 ){ return; }
    if( onboard.enter_function == null ){ return; }
    onboard.enter_function();
  }
}

// set up enter key handler
$('body').on('keyup',onboard.enter_handler)

// push step ids to the array of steps
if( localStorage.gif_folder == 'null' ){ onboard.steps.push('load-gifs'); }

// show the modal if any of the onboarding items need to be done
if( onboard.steps.length ){

  // show the modal
  $('#onboard-modal').show(200,function(){

    // show the step based on step ID
    onboard.next_step();

  });
  
  throw new Error('Onboarding');
}

// they made it past onboarding!

$('#onboard').remove();

// remove key handlers set in onboarding
$('body').off()
updater = {
  // debug:true,
  debug:false,
  check_for_updates:function(){

    running_version  = gui.App.manifest.version;
    platform         = localStorage.operating_system;

    return http.get({
      host: 'gifslap.com',
      path: '/api/check_for_updates.php',
      headers: {
        'platform'       : platform,
        'gifslap_version': running_version,
        'nwjs_version'   : process.versions['node-webkit'],
        'debug'          : updater.debug
      }
    },function(response){

      // Continuously update stream with data
      var body = '';
      response.on('data', function(d) {
          body += d;
      });
      response.on('end', function() {

        // try to parse the message as json
        try{
          var data = JSON.parse(body);          
        }catch (err){
          // can't parse server response. This should not happen
          console.log(err);
        }

        // fail silently. again this should not happen
        if( data == undefined ){return;}
        
        $update_bar = deck.window.$('#update-bar');

        // gifslap update is available
        if( data.valid == true && data.update == true && data.update_url !== null){

          // mac - initiate normal update
          if( localStorage.operating_system == 'mac' ){
            
            $update_bar
            .addClass('active')
            .text("Update to version "+data.newest_version)
            .click(function(){
              localStorage.update_url = data.update_url;
              window_ui.restart();
            });

          }

          // windows: initiate download of setup file
          else{

            $update_bar
            .addClass('active')
            .text("Update to version "+data.newest_version)
            .click(function(){
              gui.Shell.openExternal('http://gifslap.com/api/latest_release.php?platform=win')
            });

          }

        }

        // new release (with new version of nwjs) is available (Mac only)
        if( data.valid == true && data.update == true && data.release_url !== null){

          $update_bar
          .addClass('active')
          .text("Update to version "+data.newest_version)
          .click(function(){
            gui.Shell.openExternal(data.release_url);
          });

        }

        // no update available
        else if( data.valid == true && data.update == false ){
          // do nothing
          console.log('no update available')
          return;
        }

      });
    }).on('error', function(err) {
        
      // handle errors with the request itself
      // do nothing
      console.log('could not check for updates without network connectivity')

    });
  },
  run: function(){

    update_url = localStorage.update_url;

    // show the modal
    $('#updater-modal').show(200,function(){
      $('#updater .modal-content').fadeIn(200);
    });

    // FIRST DOWNLOAD

    updater.download( update_url )
    .then(function(zip_path){

      $('[step=download]').hide();
      $('[step=extract]').show();

      // THEN UNZIP

      updater.unzip(zip_path);

    }).then(function(){

      $('[step=extract],#progress-bar-container').hide();

      // THEN RELOAD
      updater.reload();

    }).catch(function(err){
      console.log('error:'+err)
    });
    
  },
  download:function(update_url){
    return new Promise(function(resolve, reject){

      zip_path = updater.get_zip_path();
      if( !zip_path ){ reject('No zip path given') }

      zip_file = fs.createWriteStream( zip_path );
      if( !zip_file ){ reject('Zip file cannot be created') }

      bytes_downloaded = 0;
      zip_size = 75697400; // default value around 7 mb

      $progress_bar = $('#progress-bar');

      request
        .get(update_url)
        .on('error', function(err) {

          reject("Request error: "+err)

        }).on('data', function(chunk) {
          
          bytes_downloaded += chunk.length;
          percent_downloaded = ((bytes_downloaded / zip_size) * 100).toFixed() + "%";
          $progress_bar.css('width',percent_downloaded).text(percent_downloaded);

        }).on('response',function(data){

          zip_size = data.headers['content-length']
          zip_size_mb = ( zip_size / 1048576).toFixed(2);
          $('#download-size b').text(zip_size_mb);          

        }).on('end',function(){

          resolve(zip_path);

        }).pipe(zip_file);      

    });
  },

  get_zip_path:function(){

    if( localStorage.operating_system == 'mac' ){

      zip_path = "../gifSlap_update.zip";

    }else if( localStorage.operating_system == 'win' ){

      execPath = path.dirname( process.execPath );
      zip_path = execPath + '/gifSlap_update.zip';

    }

    return zip_path;

  },
  unzip:function(){
    return new Promise(function(resolve, reject){
      
      var unzipper = new DecompressZip(zip_path);
      var unzipped_path = updater.get_unzipped_path();
      $progress_bar = $('#progress-bar');

      $progress_bar.css('width','0%').text("0%");

      unzipper.extract({
        
        path: unzipped_path,
        filter: function (file) {
          return file.type !== "SymbolicLink";
        }

      }).on('error', function (err) {
        
        reject(err);

      }).on('extract', function (log) {

        resolve();

      }).on('progress', function (fileIndex, fileCount) {
        
        percent_unzipped = (((fileIndex+1) / fileCount) * 100).toFixed(1) + "%";
        $progress_bar.css('width',percent_unzipped).text(percent_unzipped);

      });
      
    });
  },
  get_unzipped_path:function(){

    if( localStorage.operating_system == 'mac' ){

      unzipped_path = "../";

    }else if( localStorage.operating_system == 'win' ){

      unzipped_path = path.dirname( process.execPath );

    }

    return unzipped_path;
  },
  reload:function(){
    
    if( localStorage.operating_system == 'mac' ){

      // reload the Mac way

      $('[step=reload-mac]').show();

      $('#close').click(function(){
        win.close();
      });

      localStorage.gifSlap_updated = "true";
      localStorage.update_url = "null";
      

    }else if( localStorage.operating_system == 'win' ){

      // reload the PC way

      $('[step=reload-win]').show();

      execPath = path.dirname( process.execPath );
      
      new_gifslap_exec_path = '"'+execPath+'/gifSlap_update.exe"';
      new_gifslap_exec_path = new_gifslap_exec_path.replace(/\//g,'\\'); // replace slashes for windows

      localStorage.update_url = "null";
      localStorage.gifSlap_updated = "true";

      // open new gifslap via command line
      // new gifSlap will close the old one based on localStorage.gifSlap_updated
      setTimeout(function(){
        exec(new_gifslap_exec_path,function(err){
          if(err){ console.log(err); }
        });  
      },1500);      

    }    
  },
  cleanup:function(){

    // mac & win

    // delete the zip file
    zip_path = updater.get_zip_path();
    fs.unlink(zip_path,function(err){
      if(err){
        // stop here if the update zip does not exist
        console.log(err);
        localStorage.gifSlap_updated = 'false';
        win.reloadDev();
        return;
      }
      console.log(zip_path);
    });

    // Mac Only
    if( localStorage.operating_system == 'mac' ){
      localStorage.gifSlap_updated = 'false';
      setTimeout(function(){
        win.reloadDev();
      },500);
    }

    // PC only
    if( localStorage.operating_system == 'win'){

      // close the old version of gifSlap and leave this one running

      exe_name = process.execPath.split('\\').reverse()[0];
      execPath = path.dirname( process.execPath );

      if( exe_name !== 'gifSlap_update.exe'){
        localStorage.gifSlap_updated = 'false';
        win.reloadDev();
        return;
      }

      // kill the old running exe
      exec('taskkill /im gifSlap.exe /f',function(err){
        if(err){
          console.log(err);
          localStorage.gifSlap_updated = 'false';
          localStorage.win_update_error = 'true';
          win.reloadDev();
          return;
        }

        // delete the old exe
        exec('del '+execPath+'\\gifSlap.exe',function(err){
          if(err){
            console.log(err);
            localStorage.gifSlap_updated = 'false';
            localStorage.win_update_error = 'true';
            win.reloadDev();
            return;
          }
          
          // copy gifSlap_update.exe to gifSlap.exe
          exec('copy '+execPath+'\\gifSlap_update.exe '+execPath+'\\gifSlap.exe',function(err){
            if(err){
              console.log(err);
              localStorage.gifSlap_updated = 'false';
              localStorage.win_update_error = 'true';
              win.reloadDev();
              return;
            }

            localStorage.gifSlap_updated = 'false';

            // run the fresh copy of gifSlap.exe
            exec(execPath+'\\gifSlap.exe',function(err){
              if(err){
                console.log(err);
                updater.kill_update_exes();
                return;
              }

            });
          });
        });
      });
    }
  },
  kill_update_exes:function(){
    if( localStorage.operating_system !== 'win'){ return }
    exec('taskkill /f /im gifSlap_update.exe',function(err){
      if(err){ 
        return; // no exes to kill 
      }else{ 
        console.log('Killed exes like a boss.') 
      }
    });
  },
  delete_update_exe:function(){
    if( localStorage.operating_system !== 'win'){ return }
    execPath = path.dirname( process.execPath );
    exec('del '+execPath+'\\gifSlap_update.exe',function(err){
      if(err){ 
        return; // no exes to kill
      }else{ 
        console.log('Deleted an update exe like a boss.') 
      }
    });
  },
  show_win_error:function(){
    
    // open external browser 
    $('.external-link').click(function(){
      href = $(this).attr('data-href');
      gui.Shell.openExternal(href);
    });

    // show the modal

    $('[step=download]').hide();
    $('#progress-bar-container').hide();
    $('[step=win-error]').show();

    $('#updater-modal').show(200,function(){
      $('#updater .modal-content').fadeIn(200);
      localStorage.win_update_error = "false";
      localStorage.gifSlap_updated = "false";
      localStorage.update_url = "null";
    });
  }
}

// if we need to update, initialize that
if( localStorage.operating_system == 'mac' && localStorage.update_url !== "null" && localStorage.update_url !== undefined ){

  win.show();
  updater.run();
  updater.kill_update_exes();
  throw new Error('Updating');

}

// if gifSlap was updated, run some cleanup tasks
if( localStorage.operating_system == 'mac' && localStorage.gifSlap_updated == "true" ){

  updater.cleanup();
  throw new Error('Cleaning Up Update');

}

// some post cleanup cleanup

// updater.delete_update_exe();
// updater.kill_update_exes();  
// declare deck variable
var deck = null;

var window_ui = {
  init:function(){

    // show window
    win.show();

    // show loading screen if not refreshing
    if( localStorage.refreshing !== 'true' ){
      $('#loading').show();

      // resize this window to half the screen
      window_height = window.screen.availHeight;
      window_width = window.screen.availWidth;

      menu_bar_height = 0;
      if( localStorage.operating_system == 'mac' ){ menu_bar_height = 22; }

      win.resizeTo( window_width/2, window_height+5 );
      win.moveTo( window_width/2, menu_bar_height );

    }    

    // Listen to main window's close event
    win.on('close', window_ui.close_all_windows);

    // prevent default behavior from changing page on dropped file
    window.ondragover = function(e) { e.preventDefault(); return false };
    window.ondrop = function(e) { e.preventDefault(); return false };

  },
  
  closing:false,
  close_all_windows:function(){

    if( window_ui.closing == true ){ return; }
    window_ui.closing = true;

    main_win = win;
    deck_win = deck.window;
    midi_win = deck.midi_mapper.window;

    deck.midi_mapper.save(function(){

      // success, or save not needed
      if( midi_win ){ midi_win.close(true); }
      deck_win.close(true);
      main_win.close(true);

      // close the hell out of it
      if(localStorage.operating_system == 'win'){
        exec('taskkill /f /im gifSlap.exe');
      }

    },function(err){

      // save failed
      console.log('Window not closing. Save failed: '+err);
      window_ui.closing = false;

    });    

  },

  deck:null,
  launch_deck: function(){
    if( localStorage.refreshing == 'true' ){

      // refreshing means deck is already open. Don't open the deck
      localStorage.refreshing = 'false';

    }else{

      // Deck is not open yet so open it
      window_ui.deck = gui.Window.open('./deck.html',{
        title:'gifSlap Control Deck',
        toolbar:false,
        frame:true,
        width:1000,
        min_width:600,
        height:500,
        // show: false // shown in loop.js once the deck has loaded
      });

      // set the global "deck" variable for access to decks variables and functions
      window_ui.deck.on('document-start',function(){
        deck = window_ui.deck.window;
      })

      // deck blur handler
      window_ui.deck.on('blur',function(){
        deck.keyboard.reset_modifiers()
      })

    }
  },
  restart:function(){

    var child;
    var child_process = require("child_process");
    
    if (process.platform == "darwin")  {
      child = child_process.spawn("open", ["-n", "-a", process.execPath.match(/^([^\0]+?\.app)\//)[1]], {detached:true});
    }else{
      child = child_process.spawn(process.execPath, [], {detached: true});
    }

    setTimeout(function(){
      child.unref();
      window_ui.close_all_windows();
    },500);    

  }
}

window_ui.init();
window_ui.launch_deck();
// control registry

var controls = {

  // GLOBAL

  pause_play : {
    name: "Pause / Play",
    type: 'button',
    desc: 'Pause or resume the main loop.',
    group: 'global',
    press: function(){
      gifslap.toggle.paused()
    }
  },

  save_preset : {
    name: "Save Preset",
    type: 'button',
    desc: 'Save a preset to load later.',
    group: 'global',
    press: function(){
      deck.presets.save()
    }
  },

  next_image : {
    name: "Next Image",
    type: 'button',
    desc: 'Advance the image cursor by 1.',
    group: 'global',
    press: function(){
      images.next();
    }
  },

  previous_image : {
    name: "Previous Image",
    type: 'button',
    desc: 'Move back the image cursor by 1.',
    group: 'global',
    press: function(){
      images.prev();
    }
  },

  skip_next_gif : {
    name: "Skip Next GIF",
    type: 'button',
    desc: 'Skip the next GIF.',
    group: 'global',
    press: function(){
      images.preview_skip()
    }
  },

  unskip_next_gif : {
    name: "Unskip Next GIF",
    type: 'button',
    desc: 'Unskip the next GIF.',
    group: 'global',
    press: function(){
      images.preview_unskip()
    }
  },

  automation_speed:{
    name: "Automation Speed",
    type: 'knob',
    desc: 'Speed of automation for selected control.',
    option_name: 'control_id_to_automate',
    max: 100,
    initial:100,
    change:function(steps, control_id_to_automate){

      if( steps > 0 ){

        steps = steps * 8

        // register/update the automation
        deck.automator.update_automation_speed(control_id_to_automate,steps)

        // update view of automation
        deck.controls.update_automation_view(control_id_to_automate,1)

      }else{

        // remove the automation
        deck.automator.stop_automation(control_id_to_automate)
        deck.controls.update_automation_view(control_id_to_automate,0)
      }
      
    }
  },

  max_images_amount : {
    name:   'Max Image Amount',
    type:   'knob',
    desc:   'Maximum amount of images allowed on screen. High values slow down the program!',
    group:  'global',
    max:     200,
    initial: 10,
    auto:true,
    change: function( value ){
      images.update.max_images_amount(value)        
    }
  },
  increase_max_images : { // used by autopilot
    name: "Increase Max Images by 1",
    type: 'button',
    desc: 'Increases the max amount of images by 1.',
    group: 'global',
    press: function(){
      controls.max_images_amount.change( state.max_images_amount + 1 )
    }
  },
  decrease_max_images : { // used by autopilot
    name: "Decrease Max Images by 1",
    type: 'button',
    desc: 'Decreases the max amount of images allowed by 1.',
    group: 'global',
    press: function(){
      controls.max_images_amount.change( state.max_images_amount - 1 )
    }
  },

  // IMAGE DIMENSIONS
  height : {
    name: "Height",
    type: 'knob',
    desc: 'Height of the leading image. Adjusts image size proportionately until Width is changed.',
    max: 2000,
    initial:500,
    auto:true,
    group: 'image-manipulation',
    change: function( value ){
      images.update.height(value)      
    }
  },

  shrink_all_images : {
    name: "Shrink All Images",
    type: 'button',
    desc: 'Animates shrinking of all images.',
    group: 'image-manipulation',
    press: function(){
      images.shrink_all();
    }
  },

  image_scale : {
    name: "Image Scale",
    type: 'knob',
    desc: 'Size multiplier for images. Scales from center of image.',
    group: 'image-manipulation',
    max:5,
    initial:1,
    auto:true,
    change: function( value){
      images.update.scale(value)
    }
  },

  reset_scale : {
    name: "Scale Reset",
    type: 'button',
    desc: 'Resets image scale to 1x.',
    group: 'image-manipulation',
    press: function( value, input_type ){
      images.update.scale(1)
    }
  },

  width : {
    name: "Width",
    type: 'knob',
    desc: 'Width of the leading image.',
    group: 'image-manipulation',
    max:2000,
    initial:300,
    auto:true,
    change: function( value ){
      images.update.width(value)
    }
  },

  reset_width : {
    name: "Width Reset",
    type: 'button',
    desc: 'Resets width of the leading image.',
    group: 'image-manipulation',
    press: function( value, input_type ){

      images.update.width('auto')

      images.get_current_size(function(width,height,ratio){
        width_px = Math.round(state.height * ratio)
        // nonstandard way to update slider position independent of state value!
        deck.events.emit( 'sliderUpdate', 'width', width_px )
      })
        
    }
  },

  single_opacity : {
    name: "Opactiy",
    type: 'knob',
    desc: 'Opacity of the leading image.',
    group: 'image-manipulation',
    max:1,
    initial:1,
    auto:true,
    change: function( value ){
      images.update.opacity(value)        
    }
  },

  single_rotate : {
    name: "Single Rotate",
    type: 'knob',
    desc: 'Rotation of the leading image.',
    group: 'image-manipulation',
    max:360,
    initial:360,
    auto:true,
    change: function( value ){
      images.update.rotation(value)        
    }
  },

  toggle_threaded_rotation: {
    name: "Toggle Threaded Rotation",
    type: 'button',
    desc: 'Alternates rotation degrees.',
    group: 'image-manipulation',
    press: function(){
      images.toggle_threaded_rotation();
    }
  },

  border_radius : {
    name: "Border Radius",
    type: 'knob',
    desc: 'Roundness of the leading image\'s corners.',
    group: 'image-manipulation',
    max:50,
    initial:0,
    auto:true,
    change: function( value ){
      images.update.border_radius(value)        
    }
  },
  
  border_image_width : {
    name: "Border Image Width",
    type: 'knob',
    desc: 'Width of the Border Image. The border image is the next image in the list of images, applied as the border of the leading image.',
    group: 'image-manipulation',
    max:100,
    auto:true,
    change: function( value ){
      images.update.border_image_width(value)
    }
  },

  border_image_slices : {
    name: "Border Image Slices",
    type: 'knob',
    desc: 'Controls how many slices of the next image are shown in the Border Image.',
    group: 'image-manipulation',
    max:50,
    auto:true,
    change: function( value ){
      images.update.border_image_slices(value)        
    }
  },

  // BORDER BOXES

  toggle_border_boxes : {
    name: "Toggle Border Boxes",
    type: 'button',
    desc: 'Turn on/off the border boxes addon.',
    group: 'border-boxes',
    press: function(){
      if(border_boxes.run){
        border_boxes.die();
      }else{
        border_boxes.init();
      }
    }
  },

  // WIND
  
  wind_speed_x:{
    name: "Wind Speed X",
    type: 'knob',
    desc: 'Direction of Wind on X-Axis',
    max:128,
    initial: 64,
    change: function( value ){
      wind.update.speed_x(value)
    },
    group:'wind'
  },
  wind_speed_y:{
    name: "Wind Speed Y",
    type: 'knob',
    desc: 'Direction of Wind on Y-Axis',
    max:128,
    initial: 64,
    change: function( value ){
      wind.update.speed_y(value)
    },
    group:'wind'
  },

  wind_speed_reset:{
    name:"Wind Speed Reset",
    type:'button',
    desc:'Reset direction of wind',
    press:function(){
      controls.wind_speed_x.change( controls.wind_speed_x.initial )
      controls.wind_speed_y.change( controls.wind_speed_y.initial )
    },
    group:'wind'
  },

  wind_intensity:{
    name: "Wind Intensity",
    type: 'knob',
    desc: 'Multiplier for Wind Speed',
    max:  10,
    initial: 1,
    auto:true,
    change: function( value ){
      wind.update.intensity(value)
    }
  },
  reset_wind_x : {
    name: "Reset Wind X",
    type: 'button',
    desc: 'Stops wind movement on X-Axis.',
    press: function(){
      wind.x_offset = 0;
    },
    group:'wind'
  },
  reset_wind_y : {
    name: "Reset Wind Y",
    type: 'button',
    desc: 'Stops wind movement on Y-Axis.',
    press: function(){
      wind.y_offset = 0;
    },
    group:'wind'
  },
  wind_direction_up : {
    name: "Wind Direction Up",
    type: 'button',
    desc: 'Blows images upwards.',
    press: function(){

      if( wind.direction !== "up" ){
        wind.direction = "up";
        wind.x_offset = 0;
        wind.y_offset = -15;
      }else{
        wind.y_offset = 0;
        wind.direction = null;
      }
      
    },
    group:'wind'
  },
  wind_direction_left : {
    name: "Wind Direction Left",
    type: 'button',
    desc: 'Blows images to the left.',
    press: function(){
      if(wind.direction!=='left'){
        wind.direction = "left";
        wind.x_offset = -15;
        wind.y_offset = 0;
      }else{
        wind.x_offset = 0;
        wind.direction = null;
      }
    },
    group:'wind'
  },
  wind_direction_down : {
    name: "Wind Direction Down",
    type: 'button',
    desc: 'Blows images downward.',
    press: function(){
      if(wind.direction!=='down'){
        wind.direction = "down";
        wind.x_offset = 0;
        wind.y_offset = 15;
      }else{
        wind.y_offset = 0;
        wind.direction = null;
      }
    },
    group:'wind'
  },
  wind_direction_right : {
    name: "Wind Direction Right",
    type: 'button',
    desc: 'Blows images to the right.',
    press: function(){
      if(wind.direction!=='right'){
        wind.direction = "right";
        wind.x_offset = 15;
        wind.y_offset = 0;
      }else{
        wind.x_offset = 0;
        wind.direction = null;
      }
    },
    group:'wind'
  },

  // MODE CONTROL

  next_mode : {
    name: "Next Mode",
    type: 'button',
    desc: 'Turn off the current mode and activate the next one.',
    group: 'mode-control',
    press: function(){
      mode_changer.step();
    }
  },

  // activate_set : {
  //   name: "Activate Set",
  //   type: 'button',
  //   desc: 'Places the cursor at [0] in the chosen set of images.',
  //   option:{
  //     type:'select',
  //     name:'Set Name:',
  //     list:'sets'
  //   },
  //   press: function(){
      
  //   }
  // },
  // flag_images : {
  //   name: "Flag Images for Deletion",
  //   type: 'button',
  //   desc: 'Moves all onscreen image files to sets/-delete',
  //   press: function(){
  //     image_flagger.run();  
  //   }
  // },
  // save_scene : {
  //   name: "Save Scene",
  //   type: 'button',
  //   desc: 'Save the composition to reactivate later.',
  //   press: function(){
  //     save_out.save_scene();        
  //   }
  // },
  // activate_scene : {
  //   name: "Activate Scene",
  //   type: 'button',
  //   desc: 'Activate a Scene.',
  //   option:{
  //     type:'select',
  //     name:'Scene Name:',
  //     list:'scenes'
  //   },
  //   press: function(){
      
  //   }
  // },
  // save_still : {
  //   name: "Save Still",
  //   type: 'button',
  //   desc: 'Save an HTML copy of the composition. ',
  //   press: function(){
  //     save_out.save_still();
  //   }
  // },

  // CORNERS

  activate_corners_mode : {
    name: "Activate Corners Mode",
    type: 'button',
    group:'corners',
    desc: 'Activates the Corners mode.',
    press: function(){
      mode_changer.start('corners');      
    }
  },

  corners_quadrant_rotation:{
    name: "Rotate Quadrants",
    type: 'knob',
    group: 'corners',
    desc: 'Rotates all four quadrants of Corners mode.',
    auto: true,
    initial: 360,
    max: 360,
    change:function(value){
      corners.update.quads_rotation(value)
    }
  },

  equalize_quadrants : {
    name: "Equalize Quadrants",
    type: 'button',
    group:'corners',
    desc: 'Makes all 4 corners the same size.',
    press: function(){
      corners.equalize_quadrants()
    }
  },

  // CHAIN

  activate_chain_mode : {
    name: "Activate Chain Mode",
    type: 'button',
    group:'chain',
    desc: 'Activates the Chain mode.',
    press: function(){
      mode_changer.start('chain');      
    }
  },
  chain_speed : {
    name:    "Chain Speed",
    type:    'knob',
    group:   'chain',
    desc:    'Changes the speed of the chain movement.',
    max:     20,
    initial: 1,
    auto:true,
    change: function( value ){      
      chain.update.speed(value)      
    }
  },
  
  chain_direction_x : {
    name: "Chain Direction X",
    type: 'knob',
    group:'chain',
    desc: 'Fine control of the X axis of chain movement.',
    max:128,
    initial:64,
    change: function( value ){
      chain.update.direction_x(value)
    }
  },

  chain_direction_y : {
    name: "Chain Direction Y",
    type: 'knob',
    group:'chain',
    desc: 'Fine control of the Y axis of chain movement.',
    max:128,
    initial:64,
    change: function( value ){
      chain.update.direction_y(value)
    }
  },

  chain_direction_reset : {
    name: "Chain Direction Reset",
    type: 'button',
    group:'chain',
    desc: 'Sets chain direction to 0.',
    press: function(){
      chain.reset.direction()
    }
  },

  toggle_chain_reverse_doubler:{
    name:"Toggle Chain Reverse Doubler",
    type:'button',
    group:'chain',
    desc:'Creates a mirror image in chain mode.',
    press:function(){
      chain.toggle.reverse_doubler()
    }
  },

  toggle_chain_remove_by_tail:{
    name:"Toggle Chain Remove By Tail",
    type:'button',
    group:'chain',
    desc:'Toggles between random removal and end-of-tail removal.',
    press:function(){
      chain.toggle.remove_by_tail()
    }
  },

  chain_direction_up : {
    name: "Chain Direction Up",
    type: 'button',
    group:'chain',
    desc: 'Change chain movement direction to up.',
    press: function(){
      
      if(!chain.run){return;}

      // add up to the direction pressed array if it is not already there
      index_in_array = chain.direction_pressed.indexOf("up");
      if( index_in_array == -1 ){
        chain.direction_pressed.push("up");
      }

      // remove down
      index_in_array = chain.direction_pressed.indexOf("down");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }
      
    },
    release: function(){

      // remove up from the direction pressed array
      index_in_array = chain.direction_pressed.indexOf("up");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

    }
  },
  chain_direction_left : {
    name: "Chain Direction Left",
    type: 'button',
    group:'chain',
    desc: 'Change chain movement direction to left.',
    press: function(){
      
      if(!chain.run){return;}

      // remove right
      index_in_array = chain.direction_pressed.indexOf("right");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

      // add left to the direction pressed array if it is not already there
      index_in_array = chain.direction_pressed.indexOf("left");
      if( index_in_array == -1 ){
        chain.direction_pressed.push("left");
      }
      
    },
    release: function(){
      
      // remove left from the direction pressed array
      index_in_array = chain.direction_pressed.indexOf("left");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

    }
  },
  chain_direction_down : {
    name: "Chain Direction Down",
    type: 'button',
    group:'chain',
    desc: 'Change chain movement direction to down.',
    press: function(){
      
      if(!chain.run){return;}

      // remove up
      index_in_array = chain.direction_pressed.indexOf("up");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

      // add down to the direction pressed array if it is not already there
      index_in_array = chain.direction_pressed.indexOf("down");
      if( index_in_array == -1 ){
        chain.direction_pressed.push("down");
      }
      
    },
    release: function(){
      
      // remove down from the direction pressed array
      index_in_array = chain.direction_pressed.indexOf("down");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

    }
  },
  chain_direction_right : {
    name: "Chain Direction Right",
    type: 'button',
    group:'chain',
    desc: 'Change chain movement direction to right.',
    press: function(){

      if(!chain.run){return;}

      // remove left
      index_in_array = chain.direction_pressed.indexOf("left");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

      // add right to the direction pressed array if it is not already there
      index_in_array = chain.direction_pressed.indexOf("right");
      if( index_in_array == -1 ){
        chain.direction_pressed.push("right");
      }
      
    },
    release: function(){
      
      // remove right from the direction pressed array
      index_in_array = chain.direction_pressed.indexOf("right");
      if( index_in_array > -1 ){
        chain.direction_pressed.splice(index_in_array,1);
      }

    }
  },
  
  // HALLWAY

  activate_hallway_mode : {
    name: "Activate Hallway Mode",
    type: 'button',
    group:'hallway',
    desc: 'Activates the Hallway mode.',
    press: function(){
      mode_changer.start('hallway');
    }
  },
  hallway_top_bottom_rotation : {
    name: "Hallway Top Bottom Rotation",
    type: 'knob',
    group:'hallway',
    desc: 'Rotates the top and bottom walls of the Hallway.',
    max:180,
    initial:90,
    change: function( value ){
      hallway.update.top_bottom_rotation(value)
    }
  },

  hallway_sides_rotation : {
    name: "Hallway Sides Rotation",
    type: 'knob',
    group:'hallway',
    desc: 'Rotates the sides of the Hallway.',
    max:180,
    initial:90,
    change: function( value ){
      hallway.update.sides_rotation(value)     
    }
  },

  hallway_sides_rotation_reset : {
    name: "Hallway Sides Rotation Reset",
    type: 'button',
    group:'hallway',
    desc: 'Sets hallway sides, top, bottom rotation to 0.',
    press: function(){
      hallway.reset.top_bottom_sides_rotation()
    }
  },

  hallway_origin_divisor: {
    name: "Hallway Stretch",
    type: 'knob',
    group:'hallway',
    desc: 'Intensity of the Hallway warp.',
    max:   100,
    initial: 0,
    auto:true,
    change: function( value ){
      hallway.update.origin_divisor(value)
    }
  },

  hallway_perspective_x : {
    name: "Hallway Perspective X",
    type: 'knob',
    group:'hallway',
    desc: 'Horizontal direction of the hallway perspective.',
    max: 2,
    initial:1,
    change: function( value, input_type ){
      hallway.update.perspective_x(value)
    }
  },
  hallway_perspective_y : {
    name: "Hallway Perspective Y",
    type: 'knob',
    group:'hallway',
    desc: 'Vertical direction of the hallway perspective.',
    max:2,
    initial:1,
    change: function( value, input_type ){
      hallway.update.perspective_y(value)
    }
  },

  hallway_perspective_reset : {
    name: "Hallway Perspective Reset",
    type: 'button',
    group:'hallway',
    desc: 'Resets hallway perspective.',
    press: function(){
      controls.hallway_perspective_x.change( controls.hallway_perspective_x.initial );
      controls.hallway_perspective_y.change( controls.hallway_perspective_y.initial );
      deck.controls.reset_axis_view('hallway_perspective_x');
      deck.controls.reset_axis_view('hallway_perspective_y');
    }
  },

  // MIRROR 

  activate_mirror_mode : {
    name: "Activate Mirror Mode",
    type: 'button',
    group:'mirror',
    desc: 'Activates the Mirror mode.',
    press: function(){
      mode_changer.start('mirror_gif');
      
    }
  },
  mirror_rotation : {
    name: "Mirror Rotation",
    type: 'knob',
    group:'mirror',
    desc: 'Rotates the entire Mirror mode.',
    max: 360,
    initial:0,
    change: function( value ){
      mirror_gif.update.rotation(value)        
    }
  },

  toggle_mirror_vertical_stream : {
    name: "Toggle Grid",
    type: 'button',
    group:'mirror',
    desc: 'Toggles between a vertical-only stream and allowing images to stack side-by-side.',
    press: function(){
      mirror_gif.toggle.grid()
    }
  },
  mirror_image_spacing : {
    name: "Mirror Image Spacing",
    type: 'knob',
    group:'mirror',
    desc: 'Width of the gap between streams, and space between images.',
    max: 200,
    initial: 0,
    auto:true,
    change: function( value ){
      mirror_gif.update.margin(value)        
    }
  },

  // BACKGROUND  

  send_to_background : {
    name: "Send To Background",
    type: 'button',
    group:'background',
    desc: 'Send previewed GIF to background.',
    press: function(){
      src = images.active_set[ images.cursor + images.skip_cursor ]
      bg_mod.update.source(src)
      controls.skip_next_gif.press()
    }
  },

  background_zoom : {
    name: "Background Zoom",
    type: 'knob',
    group:'background',
    desc: 'Zoom in or out of the background image.',
    max:500,
    initial:50,
    auto:true,
    change: function( value ){
      bg_mod.update.zoom(value)
    }
  },
  background_scroll_speed_x : {
    name: "Background Scroll Speed X",
    type: 'knob',
    group:'background',
    desc: 'Speed of background horizontal scrolling.',
    max: 20,
    initial: 10,
    change: function( value ){
      bg_mod.update.scroll_speed_x(value)
    }
  },

  background_scroll_speed_y : {
    name: "Background Scroll Speed Y",
    type: 'knob',
    group:'background',
    desc: 'Speed of background vertical scrolling.',
    max: 20,
    initial: 10,
    change: function( value ){
      bg_mod.update.scroll_speed_y(value)
    }
  },

  background_scroll_reset:{
    name:"Background Scroll Reset",
    type:'button',
    desc:'Turn off background scrolling.',
    press:function(){
      controls.background_scroll_speed_x.change( controls.background_scroll_speed_x.initial );
      controls.background_scroll_speed_y.change( controls.background_scroll_speed_y.initial )
    }
  },
 
  background_opacity : {
    name: "Background Opacity",
    type: 'knob',
    group:'background',
    desc: 'Controls the opacity of the background.',
    max:100,
    initial:0,
    auto:true,
    change: function( value ){
      bg_mod.update.opacity(value)   
    }
  },
  toggle_bg_opacity : {
    name: "Toggle Background Opacity",
    type: 'button',
    group:'background',
    desc: 'Toggles background visibility.',
    press: function(){
      if( state.background_opacity < 0.2 ){
        controls.background_opacity.change(100)
      }else{
        controls.background_opacity.change(0)
      }
    }
  },

  // toggle_bg_zoomer:{
  //   name: "Toggle Background Zoomer",
  //   type: 'button',
  //   group:'background',
  //   press: function(){
  //     bg_mod.zoomer_on = !bg_mod.zoomer_on;
  //   }
  // },
  // add_bg_zoomer:{
  //   name: "Add Background Zoomer",
  //   type: 'button',
  //   group:'background',
  //   press: function(){
  //     bg_mod.zoomer_on = true;
  //     bg_mod.zoomer_add();
  //   }
  // },  


  // MIDGROUND

  send_to_midground : {
    name: "Send To Midground",
    type: 'button',
    group:'background',
    desc: 'Send previewed GIF to midground.',
    press: function(){
      src = images.active_set[ images.cursor + images.skip_cursor ]
      midground.update.source(src)
      controls.skip_next_gif.press()
    }
  },
  midground_zoom : {
    name: "Midground Zoom",
    type: 'knob',
    group: 'midground',
    desc: 'Zoom in or out of the midground image.',
    max:500,
    initial:50,
    auto:true,
    change: function( value ){
      midground.update.zoom(value)
    }
  },
  midground_scroll_speed_x : {
    name: "Midground Autoscroll Speed X",
    type: 'knob',
    group: 'midground',
    desc: 'Speed of midground horizontal scrolling.',
    max: 20,
    initial: 10,
    change: function( value ){
      midground.update.scroll_speed_x(value)
    }
  },
  midground_scroll_speed_y : {
    name: "Midground Autoscroll Speed Y",
    type: 'knob',
    group: 'midground',
    desc: 'Speed of midground vertical scrolling.',
    max: 20,
    initial: 10,
    change: function( value ){
      midground.update.scroll_speed_y(value)
    }
  },
  midground_scroll_reset:{
    name:"Midground Scroll Reset",
    type:'button',
    desc:'Turn off midground scrolling.',
    press:function(){
      controls.midground_scroll_speed_x.change( controls.midground_scroll_speed_x.initial );
      controls.midground_scroll_speed_y.change( controls.midground_scroll_speed_y.initial );
    }
  },
  midground_opacity : {
    name: "Midground Opacity",
    type: 'knob',
    group: 'midground',
    desc: 'Opacity of the midground.',
    max:100,
    auto:true,
    change: function( value ){
      midground.update.opacity(value)
    }
  },
  toggle_midground_opacity : {
    name: "Toggle Midground Opacity",
    type: 'button',
    group: 'midground',
    desc: 'Toggles midground visibility.',
    press: function(){
      if( state.midground_opacity < 0.2 ){
        controls.midground_opacity.change(100)
      }else{
        controls.midground_opacity.change(0)
      }
    }
  },
  
  midground_pos_y : {
    name: "Midground Position Y",
    type: 'knob',
    group: 'midground',
    desc: 'Vertical position of the midground',
    max:200,
    initial:100,
    change: function( value ){
      midground.update.position_y(value)
    }
  },
  midground_pos_x : {
    name: "Midground Position X",
    type: 'knob',
    group: 'midground',
    desc: 'Horizontal position of the midground',
    max:200,
    initial:100,
    change: function( value ){
      midground.update.position_x(value)
    }
  },
  midground_pos_reset:{
    name:"Midground Position Reset",
    type:'button',
    desc:'Reset midground position to center of screen.',
    press:function(){
      controls.midground_pos_x.change( controls.midground_pos_x.initial )
      controls.midground_pos_y.change( controls.midground_pos_y.initial )
    }
  },
  midground_rotation : {
    name: "Midground Rotation",
    type: 'knob',
    group: 'midground',
    desc: 'Rotation of the entire midground',
    max:360,
    initial:0,
    auto:true,
    change: function( value ){
      midground.update.rotation(value)
    }
  },
  midground_scale : {
    name: "Midground Scale",
    type: 'knob',
    group: 'midground',
    desc: 'Scale of the entire midground',
    max:3,
    initial:1,
    auto:true,
    change: function( value ){
      midground.update.scale(value)        
    }
  },
  
  // BIG SHRINKER

  activate_big_shrinker : {
    name: "Activate Big Shrinker",
    type: 'button',
    group: 'big-shrinker',
    desc: 'A giant image appears and shrinks into nothing.',
    press: function(){
      big_shrinker.go()
    }
  },
  
  big_shrinker_rotation : {
    name: "Big Shrinker Rotation",
    type: 'knob',
    group: 'big-shrinker',
    desc: 'Rotate the Big Shrinker image.',
    max:360,
    initial:0,
    auto:true,
    change: function( value ){
      big_shrinker.update.rotation(value)        
    }
  },
  send_preview_to_big_shrinker : {
    name: "Send Preview To Big Shrinker",
    type: 'button',
    group:'big-shrinker',
    desc: 'Send previewed GIF to Big Shrinker.',
    press: function(){
      src = images.active_set[ images.cursor + images.skip_cursor ]
      big_shrinker.update.source(src)
      controls.skip_next_gif.press()
    }
  },

  // PUNCHER

  activate_puncher:{
    name: "Activate Puncher",
    type: 'button',
    group: 'puncher',
    desc: 'Adds a GIF to the screen that falls down out of view.',
    press: function(){
      puncher.punch();
    }
  },

  send_preview_to_puncher : {
    name: "Send Preview To Puncher",
    type: 'button',
    group:'puncher',
    desc: 'Send previewed GIF to Puncher.',
    press: function(){
      src = images.active_set[ images.cursor + images.skip_cursor ];
      puncher.set(src);
      controls.skip_next_gif.press();
    }
  },

  puncher_vertical_destination:{
    name: "Puncher Vertical Destination",
    type: 'knob',
    group: 'puncher',
    desc: 'Sets the vertical position that Punch GIFs move to.',
    max: 127,
    change: function( value, input_type ){

      if( input_type == 'knob' ){

        value = ((value/8)*window.innerHeight) - (window.innerHeight*8);

      }else{
        value = (value - ( window.innerHeight * .5 ))*100;
      }

      puncher.vertical_destination = value;

    }
  },

  puncher_horizontal_destination:{
    name: "Puncher Horizontal Destination",
    type: 'knob',
    group: 'puncher',
    desc: 'Sets the horizontal position that Punch GIFs move to.',
    max: 127,
    change: function( value, input_type ){

      // if( input_type == 'knob' ){
        value = ((value/8)*window.innerWidth) - (window.innerWidth*8);
      // }else{
        // value = (value - ( window.innerWidth * .5 ))*100;
      // }

      puncher.horizontal_destination = value;

    }
  },

  // RAINBOW BARS
  
  toggle_rainbow_bars : {
    name: "Toggle Rainbow Bars",
    type: 'button',
    group:'rainbow-bars',
    desc: 'Turn the Rainbow Bars on/off.',
    press: function(){

      if( state.rainbow_bars_opacity < 0.2 ){
        controls.rainbow_bars_opacity.change(100)
      }else{
        controls.rainbow_bars_opacity.change(0)
      }
    }
  },

  rainbow_bars_opacity : {
    name: "Rainbow Bars Opacity",
    type: 'knob',
    group:'rainbow-bars',
    desc: 'Opacity of the rainbow bars',
    max:100,
    initial:0,
    auto:true,
    change: function( value ){
      rainbow_bars.update.opacity(value)        
    }
  },
  
  rainbow_bar_width : {
    name: "Rainbow Bar Width",
    type: 'knob',
    group:'rainbow-bars',
    desc: 'Width of each Rainbow Bar.',
    max:500,
    initial:33,
    auto:true,
    change: function( value ){
      rainbow_bars.update.bar_width(value)
    }
  },
  rainbow_bar_speed : {
    name: "Rainbow Bars Speed",
    type: 'knob',
    group:'rainbow-bars',
    desc: 'Speed of the Rainbow Bars movement.',
    max: 500,
    initial:1,
    auto:true,
    change: function( value ){
      rainbow_bars.update.speed(value)
    }
  },
  rainbow_bar_rotation : {
    name: "Rainbow Bar Rotation",
    type: 'knob',
    group:'rainbow-bars',
    desc: 'Rotation of the leading Rainbow Bar.',
    max:180,
    initial:0,
    auto:true,
    change: function( value ){
      rainbow_bars.update.rotation(value)
    }
  },

  // CIRCLE

  activate_circle_mode : {
    name: "Activate Circle Mode",
    type: 'button',
    group:'circle',
    desc: 'Activates the Circle mode.',
    press: function(){
      mode_changer.start('circle');
    }
  },

  toggle_circle_size_lock : {
    name: "Toggle Circle Size Lock",
    type: 'button',
    group:'circle',
    desc: 'Prevent or allow the size/opacity of the leading circle image to change.',
    press: function(){
      circle.toggle.size_lock()
    }
  },

  circle_container_spin_speed : {
    name: "Circle Container Spin Speed",
    type: 'knob',
    group:'circle',
    desc: 'Rotation speed of the entire Circle mode.',
    max:1,
    initial:0.25,
    auto:true,
    change: function( value ){
      circle.update.container_spin_speed(value)
    }
  },

  circle_spin_speed : {
    name: "Circle Images Spin Speed",
    type: 'knob',
    group:'circle',
    desc: 'Rotation speed of the images in the Circle mode.',
    max:1,
    initial:0.25,
    auto:true,
    change: function( value ){
      circle.update.spin_speed(value)
    }
  },
  
  // CENTER MODE
  
  activate_center_mode : {
    name: "Activate Center Mode",
    type: 'button',
    group: 'center',
    desc: 'Activates the Center mode.',
    press: function(){
      mode_changer.start('center_pix');
    }
  },

  center_horizontal_arc:{
    name: "Center Horizontal Arc",
    type: "knob",
    group: "center",
    desc: 'Creates a horizontal arc in Center Mode.',
    max:100,
    initial:50,
    change: function(value,input_type){
      center_pix.update.horizontal_arc(value)
    }
  },

  center_vertical_arc:{
    name: "Center Vertical Arc",
    type: "knob",
    group: "center",
    desc: 'Creates a vertical arc in Center Mode.',
    max:100,
    initial:50,
    change: function(value,input_type){
      center_pix.update.vertical_arc(value)
    }
  },

  center_arc_reset:{
    name: "Reset Center Arcs",
    type: "button",
    group: "center",
    desc: "Resets arcs and centers all images in Center Mode.",
    press: function(){
      if( !center_pix.run ){ return }
      controls.center_horizontal_arc.change( controls.center_horizontal_arc.initial )
      controls.center_vertical_arc.change( controls.center_vertical_arc.initial )
    }
  },

  // CORNER BOX

  toggle_corner_box : {
    name: "Toggle Corner Box",
    type: 'button',
    group: 'corner-box',
    desc: 'Turns on/off the corner box.',
    press: function(){
      if( state.corner_box_opacity < 0.2 ){
        controls.corner_box_opacity.change(100)
      }else{
        controls.corner_box_opacity.change(0)
      }
    }
  },
  send_preview_to_corner_box : {
    name: "Send Preview To Corner Box",
    type: 'button',
    group:'corner-box',
    desc: 'Send previewed GIF to Corner Box.',
    press: function(){
      corner_box.set_from_preview()
    }
  },
  corner_box_opacity : {
    name: "Corner Box Opacity",
    type: 'knob',
    group:'corner-box',
    desc: 'Controls the opacity of the corner box.',
    max:100,
    initial:0,
    auto:true,
    change: function( value ){
      corner_box.update.opacity(value)
    }
  },
  corner_box_size : {
    name: "Corner Box Size",
    type: 'knob',
    group:'corner-box',
    desc: 'Controls the size of the corner box.',
    max:100,
    initial:30,
    auto:true,
    change: function( value ){
      corner_box.update.size(value)
    }
  },
  corner_box_position_x : {
    name: "Corner Box Position X",
    type: 'knob',
    group:'corner-box',
    desc: 'Moves the corner box horizontally.',
    max:100,
    initial:0,
    change: function( value ){
      corner_box.update.position_x(value)
    }
  },
  corner_box_position_y : {
    name: "Corner Box Position Y",
    type: 'knob',
    group:'corner-box',
    desc: 'Moves the corner box vertically.',
    max:100,
    initial:0,
    change: function( value ){
      corner_box.update.position_y(value)
    }
  },
  corner_box_position_reset :{
    name:"Corner Box Position Reset",
    type:'button',
    group:'corner-box',
    desc:'Reset corner box position.',
    press:function(){
      corner_box.update.position_x( controls.corner_box_position_x.initial );
      corner_box.update.position_y( controls.corner_box_position_y.initial );
      deck.controls.reset_axis_view('corner_box_position_x');
      deck.controls.reset_axis_view('corner_box_position_y');
    }
  },

  // AUTOPILOT

  toggle_autopilot : {
    name: "Toggle Autopilot",
    type: 'button',
    desc: 'Turns on/off autopilot.',
    group: 'autopilot',
    press: function(){
      autopilot.toggle()
    }
  },
  // tap_tempo : {
  //   name: "Tap Tempo",
  //   type: 'button',
  //   desc: 'Tap repeatedly to define the tempo for certain modes. (Autopilot)',
  //   press: function(){
  //     bpm_sync.tap_for_bpm();
  //   }
  // },

  // WINDOW
  
  // take_screenshot : {
  //   name: "Take Screenshot",
  //   type: 'button',
  //   desc: 'Takes a screensot, saved to the user folder.',
  //   group: 'window',
  //   press: function(){
  //     gifslap.take_screenshot();
  //   }
  // },

  refresh : {
    name: "Refresh Page",
    type: 'button',
    desc: 'Refresh the browser',
    group: 'window',
    press: function(){
      deck.controls.suspend()
      localStorage.refreshing = true
      location.reload()
    }
  },
  zoom_in : {
    name: "Zoom In",
    type: 'button',
    desc: 'Zooms page, increases performance.',
    group: 'window',
    press: function(){
      if( state.zoom_level >= 9 ) return
      gifslap.update.zoom( state.zoom_level + 1 )
    }
  },
  zoom_out : {
    name: "Zoom Out",
    type: 'button',
    desc: 'Zooms page out, but can decrease performance.',
    group: 'window',
    press: function(){
      if( state.zoom_level <= -7 ) return
      gifslap.update.zoom( state.zoom_level - 1 )
    }
  },
  zoom_level:{
    name: "Zoom Level",
    type: 'knob',
    group:'window',
    desc: 'Changes the zoom amount',
    max:20,
    initial:0,
    change: function( value ){
      gifslap.update.zoom( value )
    }
  },
  reset_zoom : {
    name: "Reset Zoom",
    type: 'button',
    desc: 'Sets zoom level to 0',
    group: 'window',
    press: function(){
      gifslap.update.zoom( 0 )
    }
  },

  // MIDI

  send_midi : {
    name: "Send MIDI Signals",
    type: 'button',
    desc: 'Send MIDI signals out. One signal per line. Format: 144,10,127',
    group: 'MIDI',
    options:{
      1:{
        type:'textarea',
        id:'signal',
        placeholder:'One signal per line. Example:\n144,10,127'
      }
    },
    press: function(options){
      if(!options){return}
      midi_signals = options.signal.split('\n');
      midi_signals.forEach(function( midi_signal ){
        midi_bytes = midi_signal.split(',');
        midi.out( midi_bytes[0], midi_bytes[1], midi_bytes[2]);
      });
    }
  },

  // WEBCAM

  toggle_webcam: {
    name: "Toggle Webcam",
    type: 'button',
    desc: 'Turns webcam on or off',
    group: 'webcam',
    press: function(){
      if( !webcam.run ){
        webcam.init();
      }else{
        webcam.die();
      }
    }
  },

  next_webcam_input: {
    name: "Next Webcam Input",
    type: 'button',
    desc: 'Switches to the next available webcam',
    group: 'webcam',
    press: function(){
      if( !webcam.run ){ return; }
      webcam.next_input()
    }
  },

  send_webcam_to_corner_box: {
    name: "Send Webcam to Corner Box",
    type: 'button',
    desc: 'Sets webcam as corner box image',
    group: 'webcam',
    press: function(){
      if( !webcam.run ){ return; }
      corner_box.toggle_webcam();
    }
  },

  send_webcam_to_background: {
    name: "Send Webcam to Background",
    type: 'button',
    desc: 'Sets webcam as background',
    group: 'webcam',
    press: function(){
      if( !webcam.run ){ return; }
      bg_mod.toggle_webcam();
    }
  },

  send_webcam_to_foreground: {
    name: "Send Webcam to Foreground",
    type: 'button',
    desc: 'Sets webcam as foreground',
    group: 'webcam',
    press: function(){
      if( !webcam.run ){ return; }
      images.toggle_webcam();
    }
  },

  // toggle_midi : {
  //   name: "Toggle MIDI",
  //   type: 'button',
  //   desc: 'Sends one of two MIDI signals, alternating when pressed. Used to light up or turn off LEDs on MIDI controllers. One signal per line. Requires exactly two lines. Format: 144,10,127',
  //   options:{
  //     1:{
  //       type:'textarea',
  //       id:'toggle_signals',
  //       placeholder:'One signal per line. Example:\n144,10,127\n144,10,0'
  //     }
  //   },
  //   press: function(options, input_id){
  //     if(!options){return}
  //     midi_signals = options.signal.split('\n');
  //     midi_signals.forEach(function( midi_signal ){
  //       midi_bytes = midi_signal.split(',');
  //       midi.out( midi_bytes[0], midi_bytes[1], midi_bytes[2]);
  //     });
  //   }
  // },

  // depracated

  hallway_layer_width : {
    name: "Hallway Layer Width",
    type: 'knob',
    group:'hallway',
    desc: 'Deprecated: Controls width of hallway top/bottom images.',
    max:100,
    initial:100,
    change: function( value ){
    }
  },
  hallway_layer_height : {
    name: "Hallway Layer Height",
    type: 'knob',
    group:'hallway',
    desc: 'Deprecated: Controls height of hallway side images.',
    max:100,
    initial:100,
    change: function( value ){
    }
  },
  
  // renamed the following sliders for v0.8.0

  single_height : {
    change: function( value ){
      controls.height.change(value)
    }
  },

  single_width : {
    change: function( value ){
      controls.width.change(value)
    }
  },

  rotate_quads:{
    change:function(value){
      controls.corners_quadrant_rotation.change(value)
    }
  },

}
var images = {

  update:{

    /*************************

    For performance reasons...
    Do any rounding to incoming values before they get here.

    *************************/
    
    max_images_amount:function(amount){
      
      // force whole numbers
      amount = Math.round(amount)

      // min max
      max = controls.max_images_amount.max
      if( amount > max ){ amount = max }
      if( amount < 0   ){ amount = 0 }

      // send new value to state
      deck.updateState( 'slider', 'max_images_amount', amount )

    },

    height:function(value){

      if( value < 10 ){
        value = 10
      }else if( value > controls.height.max ){
        value = controls.height.max
      }

      // update width if it is auto
      if( state.width == "auto" ){
        controls.reset_width.press()
      }

      // send to state
      deck.updateState( 'slider', 'height', value )

    },

    width:function(value){

      if( value !== 'auto' && isNaN(value) ){
        controls.reset_width.press()
      }

      if( value < 10 ){
        value = 10
      }else if( value > controls.width.max ){
        value = controls.width.max
      }

      // send to state
      deck.updateState( 'slider', 'width', value )
    },

    scale:function(value){
      // send to state
      deck.updateState( 'slider', 'image_scale', value )
    },

    opacity:function(value){
      // send to state
      deck.updateState( 'slider', 'single_opacity', value )
    },

    rotation:function(value){
      // send to state
      deck.updateState( 'slider', 'single_rotate', value )
    },

    border_radius:function(value){
      // send to state
      deck.updateState( 'slider', 'border_radius', value )
    },

    border_image_width:function(value){

      border_image_on = value !== 0
      deck.updateState( 'toggle', 'border_image_on', border_image_on)
      deck.updateState( 'slider', 'border_image_width', value )      

    },

    border_image_slices:function(value){

      border_image_on = value !== 0
      deck.updateState( 'toggle', 'border_image_on', border_image_on)
      deck.updateState( 'slider', 'border_image_slices', value )

    }



  },

  

    

  
















  cursor: 0,
  skip_cursor:1, // when seeking for the next gif, this is how many it will skip
  active_set: gifslap.all_gifs, //all the gifs
  // set_array: null, // this is declared after the object is fully declared
  threaded_rotation:false,
  margin: 0,
  randomize_order: false, // value is set in deck-settings.js
  border_slice: 0, // used in border-image
  using_webcam: false,
  
  reset_set:function(){
    images.active_set = gifslap.all_gifs;
    images.cursor = 0;
    images.skip_cursor = 1;

    // save the current gif to state
    deck.updateState( null, 'current_gif_src', images.active_set[images.cursor] )
  },
  // get_sources: function(){
  //   _images = [];
  //   $('#container *').each(function(){
      
  //     if( $(this).attr('src') )
  //       _images.push( $(this).attr('src') );

  //     if( $(this).css('background-image') !== 'none' ){
  //       bg = $(this).css('background-image');
  //       bg = bg.replace('url(','').replace(')','');
  //       _images.push( bg );
  //     }

  //     if( $(this).css('border-image') !== 'none' ){
  //       _border_img = $(this).css('border-image');
  //       _border_img = _border_img.replace('url(','').replace(')','');
  //       alert(_border_img);
  //       _images.push( _border_img );
  //     }

  //   });
  //   unique_images = _images.filter(function(elem, pos) {
  //       return _images.indexOf(elem) == pos;
  //   })
  //   return unique_images;
  // },
  remove_random: function(){
    
    images_collection = document.getElementsByClassName('gif')
    random_index = Math.floor( Math.random() * images_collection.length )
    
    if( (random_index < 5) && (state.single_opacity !== 0) ){ random_index = 6 }

    if( images_collection[random_index] ){
      images_collection[random_index].remove()
    }    

  },
  clear: function(){
    $('.gif').remove();
    chain.amount = 0;
  },
  preview_skip:function(){
    images.skip_cursor++
    if( images.skip_cursor + images.cursor >= images.active_set.length ){
      images.skip_cursor = images.cursor * -1
    }
    deck.controls.update_next_gif()
  },
  preview_unskip:function(){
    images.skip_cursor--
    if( images.cursor + images.skip_cursor < 0 ){
      images.skip_cursor = images.active_set.length - images.cursor - 1
    }
    deck.controls.update_next_gif()
  },
  next: function(){

    // dont skip if paused
    if( state.paused ){ return; }

    if( images.skip_cursor !== 1 ){
      images.cursor = images.cursor + images.skip_cursor;
      images.skip_cursor = 1;
    }else{
      images.cursor++;
    }
    
    // Restart the set sequence if we've reached the end.
    if(images.cursor > images.active_set.length-1){ images.cursor = 0; }

    deck.controls.update_next_gif();

    // if width is auto, set the deck width bar to the right number
    if( state.width == 'auto' ){ controls.reset_width.press() }

    // if webcam is to foreground, change from webcam to gif
    images.disable_webcam()
    circle.restart()

    // save the current gif to state
    deck.updateState( null, 'current_gif_src', images.active_set[images.cursor] )

  },
  prev: function(){
    images.cursor--;

    // Restart the set sequence if we've reached the end.
    if(images.cursor <= 0){ images.cursor = images.active_set.length-1; }
    circle.restart();
    
  },
  shrink_all: function(){
    $('img').stop().animate({"height":"0px","width":"0px"},2000);
  },
  get_property:function(prop){ // remove this and replace calls with direct calls to the value
    return images[prop];
  },
  toggle_threaded_rotation: function(){
    images.threaded_rotation = !images.threaded_rotation;
  },
  toggle_webcam:function(){

    if( images.using_webcam ){
      images.disable_webcam()
    }else{
      images.enable_webcam()
    }

  },
  enable_webcam:function(){
    images.using_webcam = true
    deck.$('[control-id="send_webcam_to_foreground"]').addClass('active')
  },
  disable_webcam:function(){
    images.using_webcam = false
    deck.$('[control-id="send_webcam_to_foreground"]').removeClass('active')
  },
  get_current_size:function( callback ){

    var newImg = new Image()

    newImg.onload = function() {
      var height = newImg.height
      var width = newImg.width
      var ratio = width / height
      callback(width,height,ratio)      
    }

    newImg.src = images.active_set[images.cursor] // this must be done AFTER setting onload
  }

}
var framerate = {

  target: 30,
  current: 0,
  average: 0,
  this_loop_time: new Date,
  last_loop_time: new Date,
  buffer_length: 15,
  buffer: Array(),
  viewUpdateCounter:0,
  update:function(){

    // check framerate
    framerate.this_loop_time = new Date;
    framerate.current = Math.round( 1000 / ( framerate.this_loop_time - framerate.last_loop_time) );
    framerate.last_loop_time = framerate.this_loop_time;
    
    // determine average
    framerate.buffer.push( framerate.current );

    if( framerate.buffer.length > framerate.buffer_length ){
      framerate.buffer.shift();
    }

    sum = 0;
    for( var i = 0; i < framerate.buffer.length; i++ ){
      sum += framerate.buffer[i];
    }

    framerate.average = Math.round( sum/framerate.buffer.length, 1 );

    // limit the amount of view updates
    framerate.viewUpdateCounter++
    if( framerate.viewUpdateCounter >= framerate.buffer_length ){
      framerate.viewUpdateCounter = 0

      // update framerate in deck
      if(deck !== null){
        deck.framerate.set( framerate.average );
      }
    }   

  }
}

// Setup commands
$center_pix = $("<div id='center-pix'></div>").css({
	'position': 'absolute',
	'height': '100%',
	'width': '100%',
	'left': '50%',
	'top': '0px',
	'z-index': '3',
	'text-align': 'center'
});

$('#container').append($center_pix);

add_css( '#center-pix div {position: absolute;}' );

var center_pix = {

	update:{
		horizontal_arc:function(value){
			if( !center_pix.run ){ return }
			deck.updateState( 'xy', 'center_horizontal_arc', value )
		},
		vertical_arc:function(value){
			if( !center_pix.run ){ return }
			deck.updateState( 'xy', 'center_vertical_arc', value )
		}
	},

	run: false,
	current_amount: 0,
	max_scale:3,
	box: $('#center-pix'),
	init: function(){
		center_pix.run = !center_pix.run;

		if(center_pix.run){
			
			images.clear();
			center_pix.current_amount = 0;

			controls.width.change( window.innerWidth / 3 )
			controls.height.change( window.innerWidth / 3 )

		}
	},
	stop:function(){
		center_pix.run = false
		// turn off center automations
		// no automations yet, but here's a placeholder
		// deck.automator.stop_automations(['chain_speed'])
	},
	draw: function(){

		if(!center_pix.run){ return; }

		// generate CSS for nth-child scaling
		css = '';
		i = 1;
		scale_fraction = center_pix.max_scale / state.max_images_amount;
		while( i < state.max_images_amount ){
			
			scale = i * scale_fraction

			horizontal_arc = state.center_horizontal_arc - (controls.center_horizontal_arc.max/2)
			vertical_arc   = state.center_vertical_arc   - (controls.center_vertical_arc.max / 2)

			margin_top  = (state.max_images_amount - (i+1)) * vertical_arc
			margin_left = (state.max_images_amount - (i+1)) * horizontal_arc

			// allow threaded rotation
			threaded_rotation = '';
			if( images.threaded_rotation ){
				if( i%2 == 0 ){ flop = -1 }else{ flop = 1 }
				threaded_rotation = 'rotate('+state.single_rotate*flop+'deg)';	
			}		

			css = css + " #center-pix div:nth-child("+i+"){";
				css = css + "-webkit-transform:scale("+scale+") translateX("+margin_left+"px) translateY("+margin_top+"px) "+threaded_rotation+";";
				css = css + "z-index:"+ (state.max_images_amount - i) +";";
			css = css + "}";
			
			i++;
		}

		// replace the stylesheet
		$('#center-pix-style').remove();
		add_css(css,'center-pix-style');

		mtop = -1*(state.height/2);
		mleft = -1*(state.width/2);

		rotation = 'rotate('+state.single_rotate+'deg)';
		if( images.threaded_rotation ){
			rotation = '';
		}

		elementType = '<img />'

		if( images.using_webcam ){
			elementType = "<canvas />"
		}

		$img = $(elementType)
			.attr("src",images.active_set[images.cursor])
			.css({
				'height':state.height,
				'width':state.width,
				'opacity':state.single_opacity,
				'-webkit-transform': rotation,
				'border-radius': state.border_radius+"%",
				'left':'50%',
				'top': '50%',
				'position':'absolute',
				'margin-top': mtop,
				'margin-left': mleft
			});

		// draw video image to canvas
		if( images.using_webcam ){
			$img
				.attr('height',webcam.height)
				.attr('width',webcam.width)

			ctx = $img[0].getContext('2d')
			ctx.drawImage(webcam._sourceVideo, 0, 0, webcam.width, webcam.height)
		}

		$div = $('<div style="height:100%" class="blowable gif" />').append( $img );
		center_pix.box.prepend( $div );
		center_pix.current_amount++;

		if(center_pix.current_amount >= state.max_images_amount){
			center_pix.box.find('div:gt('+state.max_images_amount+')').remove();
			center_pix.current_amount = state.max_images_amount;			
		}

	}
};
$('#container').append('<div id="chain"></div>')
$chain_reverse_container = $('<div id="chain-reverse"></div>')
$chain_reverse_container.css({
	'transform':'scaleX(-1)'
})
$('#container').append($chain_reverse_container)



var chain = {

	update:{
		speed:function(value){
			if(!chain.run){return}
			deck.updateState( 'slider', 'chain_speed', value )
		},
		direction_x:function(value){
			if(!chain.run){return}
			deck.updateState( 'xy', 'chain_direction_x', value )
		},
		direction_y:function(value){
			if(!chain.run){return}
			deck.updateState( 'xy', 'chain_direction_y', value )
		},
	},

	toggle:{
		reverse_doubler:function(){
			deck.updateState( 'toggle', 'chain_reverse_doubler_on', !state.chain_reverse_doubler_on )
		},
		remove_by_tail:function(){
			deck.updateState( 'toggle', 'chain_remove_by_tail_on', !state.chain_remove_by_tail_on )
			if(!state.chain_remove_by_tail_on){
				chain.container_reverse[0].innerHTML = ''
			}
		},
	},

	reset:{
		direction:function(){
			if(!chain.run){return;}
			zero_x = (controls.chain_direction_x.max/2)
			zero_y = (controls.chain_direction_y.max/2)
			deck.updateState( 'xy', 'chain_direction_x', zero_x )
			deck.updateState( 'xy', 'chain_direction_y', zero_y )
		}
	},



	run: true,
	restart: false,
	container: $('#chain'),
	container_reverse: $('#chain-reverse'),
	direction_pressed:Array(),
	amount: 0, //THE AMOUNT OF IMAGES SHOWN FROM THE CURRENT CHAIN, ALSO USED FOR Z-INDEX
	images: [], // updated on frame, holds all the images in chain
	reverse_doubler_images: [], // updated on frame, holds all the images in reverse doubler
	pos_x: 100,
	pos_y: 100,
	// direction_x: 5,
	// direction_y: 5,
	z: 0, // Z INDEX
	init: function(){
		chain.run = true;
		chain.restart = false;

		controls.height.change( 220 )
		controls.reset_width.press()

		//if the image overlaps the right edge, bring it in
		if( state.chain_pos_x + state.height > window.innerWidth ){ state.chain_pos_x = state.chain_pos_x - state.height; }

	},
	stop:function(){
		chain.run = false
		// turn off chain automations
		deck.automator.stop_automations(['chain_speed'])
	},

	draw: function(){

		if(!chain.run){ return; }

		if( state.single_opacity == 0 ){
			chain.cleanup()
			return
		}

		chain.z++;
		
		direction_x = state.chain_direction_x - (controls.chain_direction_x.max/2)
		direction_y = state.chain_direction_y - (controls.chain_direction_y.max/2)

		state.chain_pos_x = state.chain_pos_x + ( direction_x * state.chain_speed );
		state.chain_pos_y = state.chain_pos_y + ( direction_y * state.chain_speed );
		
		//PREVENT IMAGE FROM GOING OFFSCREEN
		
		//get width of images
		if( isNaN( state.width ) ){
			var estimated_width = $('img').eq(0).width();
		}else{
			var estimated_width = state.width;
		}
		
		//prevent image from going offscreen
		if( state.chain_pos_x > $('#container').width() - (estimated_width*.25)){ //right side
			state.chain_pos_x = 0 - (estimated_width*.75);
		}else if( state.chain_pos_y > $('#container').height() -(state.height*.4)){ //bottom
			state.chain_pos_y = 0 - (state.height*.6);
		}else if(state.chain_pos_x < 0 - (estimated_width*.75) ){ //left
			state.chain_pos_x = $('#container').width() - (estimated_width*.25);
		}if(state.chain_pos_y < 0 - (state.height*.6)){ //top
			state.chain_pos_y = $('#container').height() - (state.height*.4);
		}

		elementType = "<img />"
		src = images.active_set[images.cursor]

		if( images.using_webcam ){
			elementType = "<canvas />"
		}

		// generate the new image
		$add_image = $(elementType)
			.attr("src",src)
			.attr("class","gif chain blowable")
			.css({
				'position': 'absolute',
				'height':  state.height,
				'width':   state.width,
				'top':     state.chain_pos_y,
				'left':    state.chain_pos_x,
				'z-index': chain.z,
				'opacity': state.single_opacity,
				'border-radius': state.border_radius+"%",
				'-webkit-transform': 'rotate('+state.single_rotate+'deg) scale('+state.image_scale+')'
			});

		if( state.border_image_on ){
			next_src = images.active_set[images.cursor+images.skip_cursor]
			$add_image.css({
				'border-width':state.border_image_width,
				'border-image':'url('+next_src+') 48% repeat',
				"border-image-slice":state.border_image_slices+"%"
			});
		}

		// draw video image to canvas
		if( images.using_webcam ){
			chain.drawToCanvas($add_image)
		}

		//ADD THE NEW IMAGE!
		chain.container.prepend( $add_image )

	  // add the doubled image
		if( state.chain_reverse_doubler_on ){
			
			$double_image = $add_image.clone()

			// if we are using webcam, draw the canvas
			if( images.using_webcam ){
				chain.drawToCanvas($double_image)
			}			

			chain.container_reverse.prepend( $double_image )
		}

		//REMOVE IMAGES (CLEAN UP PHASE)
		chain.cleanup()
		
	},

	drawToCanvas:function($canvas){
		$canvas
			.attr('height',webcam.height)
			.attr('width',webcam.width)

		ctx = $canvas[0].getContext('2d')
		ctx.drawImage(webcam._sourceVideo, 0, 0, webcam.width, webcam.height)
	},

	cleanup:function(){
		chain.images                = chain.container[0].childNodes
		chain.reverse_doubler_images = chain.container_reverse[0].childNodes

		// default remove function is remove randomly
		remove_function = chain.remove_random

		// or alternatively remove by tail
		if( state.chain_remove_by_tail_on ){ remove_function = chain.remove_tail }

		// run the remove function for each excess gif
		remove_amount = chain.amount - state.max_images_amount

		i = 0
		while( i < remove_amount ){
			remove_function()
			i++
		}

		// get accurate amount of gifs on the screen
		chain.amount = chain.images.length + chain.reverse_doubler_images.length
	},

	remove_tail: function(){

		images_collection = chain.images

		if( !state.chain_reverse_doubler_on && chain.reverse_doubler_images.length > 0 ){
			images_collection = chain.reverse_doubler_images
		}else if( chain.images.length < chain.reverse_doubler_images.length ){
			images_collection = chain.reverse_doubler_images
		}

		index = images_collection.length-1
		if(images_collection[index]){
			images_collection[index].remove()
		}

	},

	remove_random:function(){

		// if there reverse doubler is on, choose randomly which image group to remove from
		if( state.chain_reverse_doubler_on ){
			// random one or the other
			images_collection = Math.round(Math.random()) ? chain.images : chain.reverse_doubler_images	
		}else{
			// choose from all gifs on screen

			// must convert these node lists into arrays to concatenate them
			chain.images = Array.prototype.slice.call(chain.images)
			chain.reverse_doubler_images = Array.prototype.slice.call(chain.reverse_doubler_images)

			images_collection = chain.images.concat( chain.reverse_doubler_images )
		}
		
		random_index = Math.floor( Math.random() * images_collection.length )
		
		if( (random_index < 5) && (state.single_opacity !== 0) ){ random_index = 6 }

		if( images_collection[random_index] ){
		  images_collection[random_index].remove()
		} 
	}
}
// set up the corners

$corners = $("<div id='corners'></div>").css({
  'position': 'absolute',
  'height': '100%',
  'width': '100%',
  'left': '0px',
  'top': '0px',
  'z-index': '3'
});

$quad1 = $("<div id='corners-quad1' class='corners-quad'>").css({
  'position':'absolute',
  'left':'0',
  'top':'0',
  'width':'50%',
  'height':'50%'
});

$quad2 = $quad1.clone().attr('id','corners-quad2').css({
  'left':'50%',
  '-webkit-transform': 'scaleX(-1)'
});

$quad3 = $("<div id='corners-quad3' class='corners-quad'>").css({
  'position':'absolute',
  'left':'0',
  'bottom':'0',
  'width':'50%',
  'height':'50%',
  '-webkit-transform': 'scaleY(-1)'
});

$quad4 = $quad3.clone().attr('id','corners-quad4').css({
  'left':'50%',
  '-webkit-transform': 'scaleX(-1) scaleY(-1)'
});

$corners.append( $quad1 );
$corners.append( $quad2 );
$corners.append( $quad3 );
$corners.append( $quad4 );

$('#container').append($corners);

var corners = {

  update:{
    quads_rotation:function(value){
      deck.updateState( 'slider', 'corners_quadrant_rotation', value )
      corners.rotate_quads(value)
    }
  },

  run:false,
  image_amount: 0,
  box:$corners,
  z:0,
  previous_height:0,
  init:function(){
    if( corners.run == false ){ corners.run = true; }
    corners.image_amount = 0;
  },
  stop:function(){
    corners.run = false
    // turn off corners automations
    deck.automator.stop_automations(['rotate_quads'])
  },
  draw:function(){

    if(!corners.run){return;}

    height = images.get_property('height');
    if( height < corners.previous_height ){ corners.z++; }
    corners.previous_height = height;
    
    
    opacity = state.single_opacity

    elementType = "<img />"
    src = images.active_set[images.cursor]

    if( images.using_webcam ){
      elementType = "<canvas />"
      src = webcam.stream_src
    }

    // generate the new image
    $new_image = $(elementType)
      .attr("src",src)
      .attr("class","gif corners blowable")
      .css({
        'height':        state.height,
        'width':         state.width,
        'top':           '0px',
        'left':          '0px',
        'z-index':       corners.z,
        'opacity':       opacity,
        'position':      'absolute',
        'border-radius': state.border_radius+"%",
        '-webkit-transform': 'rotate('+state.single_rotate+'deg) scale('+state.image_scale+')'
      });

    if( state.border_image_on ){
      $new_image.css({
        'border-width':state.border_image_width,
        'border-image':'url('+images.active_set[images.cursor+images.skip_cursor]+') 48% repeat',
        "border-image-slice":state.border_image_slices+"%"
      });
    }

    // prepare webcam canvas size
    if( images.using_webcam ){
      $new_image
        .attr('height',webcam.height)
        .attr('width',webcam.width)
    }

    clones = []
    clones[0] = $new_image.clone()
    clones[1] = $new_image.clone()
    clones[2] = $new_image.clone()
    clones[3] = $new_image.clone()

    // draw video image to canvases
    if( images.using_webcam ){
      for (var i = 0; i < clones.length; i++) {
        ctx = clones[i][0].getContext('2d')
        ctx.drawImage(webcam._sourceVideo, 0, 0, webcam.width, webcam.height)
      }
    }

    // quad 1,2,3,4
    clones[0].prependTo( $('#corners-quad1') )
    clones[1].prependTo( $('#corners-quad2') )
    clones[2].prependTo( $('#corners-quad3') )
    clones[3].prependTo( $('#corners-quad4') )

    // cleanup
    corners.image_amount = $('#corners .gif').length;
    while( corners.image_amount > state.max_images_amount && corners.image_amount > 4 ){

      $('.corners-quad').each(function(){
        if( $(this).find('.gif').length > 1 ){
          $(this).find('.gif').last().remove();
        }
      });
      
      corners.image_amount = $('#corners .gif').length;
    }
  },
  rotate_quads:function(degrees){
    $quad1.css('-webkit-transform','rotate('+degrees+'deg)');
    $quad2.css('-webkit-transform','scaleX(-1) rotate('+degrees+'deg)');
    $quad3.css('-webkit-transform','scaleY(-1) rotate('+degrees+'deg)');
    $quad4.css('-webkit-transform','scaleX(-1) scaleY(-1) rotate('+degrees+'deg)');
  },
  equalize_quadrants:function(){
    controls.height.change( window.innerHeight/2 )
    controls.width.change( window.innerWidth/2 )
  }
}
//CIRCLE GIFS

var circle_container = document.createElement('div');
circle_container.setAttribute("style","width:100%;height:100%;z-index:999999999999999;position:absolute;top:0px;-webkit-transform-origin:center 50% 0px;");
circle_container.setAttribute('id','circle');
document.getElementById('container').appendChild( circle_container );

var circle = {

  update:{
    container_spin_speed:function(value){
      if( !circle.run ){ return }
      deck.updateState( 'slider', 'circle_container_spin_speed', value )
    },

    spin_speed:function(value){
      if( !circle.run ){ return }
      value = +(value)
      deck.updateState( 'slider', 'circle_spin_speed', value )
      // circle.spin_speed = value*.005;
    }
  },

  toggle:{
    size_lock:function(){
      if(!circle.run){ return }
      deck.updateState( 'toggle', 'circle_size_lock_on', !state.circle_size_lock_on )
    }
  },

  run: false,
  refresh: false,
  refresh_cursor: 0,
  _images: null, // set in init()
  points: 41,
  radius: 350,
  theta_length: .15,
  center_x: (window.innerWidth / 2),
  center_y: (window.innerHeight / 2),
  angle: 0,
  container_angle: 0,
  spin_speed: .02,
  cursor: 0,
  draw_interval: null,
  draw_i: 0, // used to count the number of images that have been drawn
  stop: function(){
    circle.run = false
    // turn off circle automations
    deck.automator.stop_automations(['circle_spin_speed','circle_container_spin_speed'])
  },
  init: function(){

    controls.height.change(100)
    controls.width.change(100)
    controls.image_scale.change(1)
    controls.wind_speed_reset.press()

    circle._images = null
    _circle = document.getElementById('circle')

    circle.run = true;

    $('#circle .gif').remove();
    
    circle.center_x = (window.innerWidth / 2)
    circle.center_y = (window.innerHeight / 2)

    perim = circle.get_perim()

    circle.draw_i = 0

    // draw images around the perimeter until all points have an image

    circle.draw_interval = setInterval(function(){

      // stop when we have enough images
      if( circle.draw_i == perim.length || !circle.run ){ 
        clearInterval( circle.draw_interval )
        return
      }

      // _circlePic = document.createElement('img')
      // _circlePic.style.height = '100%'
      // _circlePic.style.width  = '100%'

      // _circlePic.setAttribute('src',images.active_set[images.cursor])

      _wrapper = document.createElement('div')
      _wrapper.setAttribute('class','circle gif')

      
      _wrapper.style.backgroundImage = 'url('+images.active_set[images.cursor]+')'
      _wrapper.style.backgroundSize = '100% 100%'

      _wrapper.style.position     = 'absolute'
      _wrapper.style.overflow     = 'hidden'
      _wrapper.style.height       = state.height
      _wrapper.style.width        = state.width
      _wrapper.style.opacity      = state.single_opacity
      _wrapper.style.borderRadius = state.border_radius+"px"
      _wrapper.style.left         = perim[circle.draw_i][0]
      _wrapper.style.top          = perim[circle.draw_i][1]
      _wrapper.style.transform    = 'rotate('+state.single_rotate+'deg)'

      // _wrapper.appendChild(_circlePic)      
      _circle.appendChild(_wrapper)

      circle.draw_i++
      circle._images = _circle.getElementsByClassName('gif')

    },20)
    
  },
  get_perim: function(){
    i = 0;
    theta = 0;
    perim = new Array();
    while( i <= circle.points){
      x = circle.center_x + circle.radius * Math.cos(theta);
      y = circle.center_y + circle.radius * Math.sin(theta);
      perim[i] = [x,y];
      i++;
      theta = theta+circle.theta_length;
    }
    return perim;
  },
  restart:function(){
    circle.refresh = true;
    circle.refresh_cursor = 0;
  },
  resize:function(){
    if( !circle.run ){ return; }
    circle.center_x = (window.innerWidth / 2);
    circle.center_y = (window.innerHeight / 2);
    circle.init();
  },

  draw: function(){

    if( !circle.run ){ return }
    if( circle._images == null ){ return }

    //Spin the whole circle
    circle.container_angle           = circle.container_angle - state.circle_container_spin_speed
    circle_container.style.transform = "rotate("+circle.container_angle+"deg)"    

    //Apply styles to every image simultaneously (rotate, scale)
    for (var i = 0; i < circle._images.length; i++){

      spin_speed = state.circle_spin_speed * 0.1

      circle.angle = +(( circle.angle + spin_speed ).toFixed(4)) // round to 4 decimals
      circle.angle = circle.angle%360

      circle._images[i].style.transform = "rotate("+circle.angle+"deg) scale("+state.image_scale+")"
    }

    // set a new source image
    if( circle.refresh ){
      circle._images[circle.refresh_cursor].style.backgroundImage = 'url('+images.active_set[images.cursor]+')'
      circle.refresh_cursor++
      if( circle.refresh_cursor >= circle._images.length ){
        circle.refresh = false
      }
    }

    //Apply stlyes frame by frame
    _imgWrap = circle._images[circle.cursor]

    if( typeof(_imgWrap) == "undefined" ){ return }

    // insert canvases if we're using webcam
    if( images.using_webcam ){

      _canvas = _imgWrap.getElementsByTagName('canvas')[0]
      if( _canvas == undefined ){

      	// add canvas
      	_canvas = document.createElement('canvas')

      	_canvas.setAttribute('height',webcam.height)
	      _canvas.setAttribute('width',webcam.width)
	      _canvas.style.width = '100%'
	      _canvas.style.height = '100%'

	      _imgWrap.appendChild(_canvas)

	      ctx = _canvas.getContext('2d')
	      ctx.drawImage(webcam._sourceVideo, 0, 0, webcam.width, webcam.height)

      }else{
      	// update canvas
      	console.log('update canvas')
      	ctx = _canvas.getContext('2d')
	      ctx.fillRect(0, 0, webcam.width, webcam.height)
	      ctx.drawImage(webcam._sourceVideo, 0, 0, webcam.width, webcam.height)
      }

    }else{
    	_canvas = _imgWrap.getElementsByTagName('canvas')[0]
    	if( _canvas ){
    		_canvas.remove()
    	}
    }

    _imgWrap.style.opacity          = state.single_opacity
    _imgWrap.style.borderRadius     = state.border_radius+'px'

    if( state.border_image_on ){
	    _imgWrap.style.borderWidth      = state.border_image_width
	    _imgWrap.style.borderImage      = 'url('+images.active_set[images.cursor+images.skip_cursor]+') 48% repeat'
	    _imgWrap.style.borderImageSlice = state.border_image_slices+"%"
	  }else{
	  	_imgWrap.style.borderWidth      = 0
	  	_imgWrap.style.borderImage      = 'none'
	  }

    if( !state.circle_size_lock_on ){

      // calculate pixel value of auto width
      if( state.width == 'auto' ){        
        images.get_current_size(function(width,height,ratio){
          controls.width.change( state.height * ratio )
        })
      }

      _imgWrap.style.height         = state.height
      _imgWrap.style.width          = state.width
    }

    circle.cursor++
    if( circle.cursor >= circle._images.length ){
      circle.cursor = 0
    }
  }
}
var hallway={

  update:{
    top_bottom_rotation:function(value){
      if( !hallway.run ){ return }
      if( value < 0 ){ value = 0 }
      if( value > controls.hallway_top_bottom_rotation.max ){ value = controls.hallway_top_bottom_rotation.max }
      deck.updateState( 'xy', 'hallway_top_bottom_rotation', value )
    },
    sides_rotation:function(value){
      if( !hallway.run ){ return }
      if( value < 0 ){ value = 0 }
      if( value > controls.hallway_sides_rotation.max ){ value = controls.hallway_sides_rotation.max }
      deck.updateState( 'xy', 'hallway_sides_rotation', value )
    },
    perspective_x:function(value){
      if( !hallway.run ){ return }
      if( value < 0 ){ value = 0 }
      if( value > controls.hallway_perspective_x.max ){ value = controls.hallway_perspective_x.max }
      deck.updateState( 'xy', 'hallway_perspective_x', value )
    },
    perspective_y:function(value){
      if( !hallway.run ){ return }
      if( value < 0 ){ value = 0 }
      if( value > controls.hallway_perspective_y.max ){ value = controls.hallway_perspective_y.max }
      deck.updateState( 'xy', 'hallway_perspective_y', value )
    },
    origin_divisor:function(value){
      if( !hallway.run ){ return }
      if( value < 0 ){ value = 0 }
      deck.updateState( 'slider', 'hallway_origin_divisor', value )
    },

    
  },

  reset:{
    top_bottom_sides_rotation:function(){
      controls.hallway_sides_rotation.change( controls.hallway_sides_rotation.initial )
      controls.hallway_top_bottom_rotation.change( controls.hallway_top_bottom_rotation.initial )
    }
  },







  run: false,
	refresh_pics: false,
	layers: 5,
	_layer: null, // set in init()
	layer_rot: 0,
	layer_sides_auto_rot: 0,
	layer_top_bottom_auto_rot: 0,
	perspective: 250,
	_box: null, // set in init()
	initialized: false,
	ripple_cursor: 0,
	strobe_cursor: 0,
  canvasInLayer: false,

	init: function(){

    controls.height.change( controls.height.max )
    controls.width.change( controls.width.max )
		
		hallway.run = true;
		if( hallway.initialized==true ){ return; }

		css = '\
		.hallway-layer:nth-child(1){\
      width:100%;\
      height:100%;\
  	}\
  	.hallway-layer:nth-child(2){\
      width:80%;\
      height:80%;\
      margin-top:10%;\
      margin-left:10%;\
  	}\
  	.hallway-layer:nth-child(3){\
      width:60%;\
      height:60%;\
      margin-top:20%;\
      margin-left:20%;\
  	}\
  	.hallway-layer:nth-child(4){\
      width:40%;\
      height:40%;\
      margin-top:30%;\
      margin-left:30%;\
  	}\
  	.hallway-layer:nth-child(5){\
      width:20%;\
      height:20%;\
      margin-top:40%;\
      margin-left:40%;\
  	}\
    #hallway img,#hallway canvas{\
      width:100%;\
      height:100%;\
    }';

  	add_css(css);

  	_hallway               = document.createElement('div')
  	_hallway.id            = 'hallway'
  	_hallway.style.cssText = 'position:absolute; height:100%; width:100%; left:0px;	top:0px; z-index:3'

  	_layer                 = document.createElement('div')
  	_layer.className       = 'hallway-layer blowable'
  	_layer.style.cssText   = 'position:absolute; z-index:0 -webkit-perspective-origin-x: 50%; -webkit-perspective-origin-y: 50% -webkit-perspective: ' + hallway.perspective

  	_top                   = document.createElement('div')
  	_top.className         = 'hallway-top'
  	_top.style.cssText     = 'width:100%; height:20%; margin:0px auto; -webkit-transform:rotateX(-63deg);'
    _top.appendChild( document.createElement('img') )

  	_left                  = document.createElement('div')
  	_left.className        = 'hallway-left'
  	_left.style.cssText    = 'float:left; width:50%; height:80%; -webkit-transform: rotateY(-90deg);box-sizing:border-box;'
    _left.appendChild( document.createElement('img') )

		_right                 = document.createElement('div')
  	_right.className       = 'hallway-right'
  	_right.style.cssText   = 'float:left; width:50%; height:80%; -webkit-transform: rotateY(-90deg);box-sizing:border-box;'
    _right.appendChild( document.createElement('img') )


  	_bottom                = document.createElement('div')
  	_bottom.className      = 'hallway-bottom'
  	_bottom.style.cssText  = 'width: 100%; height: 37%; -webkit-transform: rotateX(63deg); position: absolute; bottom: 0px; z-index: -1; box-sizing:border-box'
    _bottom.appendChild( document.createElement('img') )

  	// make the layer from the walls
  	_layer.appendChild( _top )
  	_layer.appendChild( _left )
  	_layer.appendChild( _right )
  	_layer.appendChild( _bottom )

  	// declare THIS IS THE PERFECT LAYER
  	hallway._layer = _layer

		// put the hallway element on the screen
  	_container = document.getElementById('container')
  	_container.appendChild(_hallway)

  	// save reference to the hallway box
  	hallway._box = _hallway

  	// we good
		hallway.initialized = true

	},
	stop: function(){
    if( !hallway.run ){ return }
		hallway.run = false
		hallway._box.innerHTML = ''
    // turn off hallway automations
    deck.automator.stop_automations(['hallway_origin_divisor'])
	},

	draw: function(){

		if(!hallway.run){return;}

		// check if it has been initiallized yet
		if(!hallway._layer){
			hallway.initialized = false;
			hallway.init()
			return;
		}

		// top bottom rotation string
		rotate_x = 'rotateX('+state.hallway_top_bottom_rotation+'deg)'
		
		// sides rotation string
		rotate_y = 'rotateY('+state.hallway_sides_rotation+'deg)'

		// get styles from main image object
    opacity       = images.get_property('opacity')
		border_radius = state.border_radius
    scale         = ( state.image_scale / controls.image_scale.max) * 3 + .85
    rotation      = state.single_rotate
    sidesPadding  = ((((state.height - 10) / controls.width.max * 100) - 100) * -1 / 2)
    layer_width   = ((state.width-10) / controls.width.max) * 100

    // if we are using webcam, initialize canvases
    if( images.using_webcam && hallway.canvasInLayer == false ){

      for( var i=0; i < hallway._layer.childNodes.length; i++ ){
        hallway._layer.childNodes[i].firstElementChild.remove()
        _canvas = document.createElement('canvas')
        _canvas.setAttribute('height',webcam.height)
        _canvas.setAttribute('width',webcam.width)
        hallway._layer.childNodes[i].appendChild(_canvas)
      }

      hallway.canvasInLayer = true
    }

    // if we not using webcam, remove the canvases and reinstate the images
    if( !images.using_webcam && hallway.canvasInLayer == true ){
      for( var i=0; i < hallway._layer.childNodes.length; i++ ){
        hallway._layer.childNodes[i].firstElementChild.remove()
        hallway._layer.childNodes[i].appendChild(document.createElement('img'))
      }
      hallway.canvasInLayer = false
    }

    // NOTE: this updates the prototypical layer, not a new instance

		// set the new CSS on the hallway layers
		// there are 4 walls per layer
		// step through the walls to set the new css and update image sources
		for( var i=0; i < hallway._layer.childNodes.length; i++ ){

			// get the wall element
			_wall = hallway._layer.childNodes[i]

			_wall.style.opacity = opacity
      
      _wall.firstElementChild.style.borderRadius = border_radius + '%'
      _wall.firstElementChild.style.transform = 'rotate('+rotation+'deg) scale('+scale+')'

			if( _wall.classList.contains('hallway-bottom') || _wall.classList.contains('hallway-top') ){
				_wall.style.webkitTransform = rotate_x
        _wall.firstElementChild.src = images.active_set[images.cursor+images.skip_cursor]
			}

      if( _wall.classList.contains('hallway-top')){
        _wall.style.width  = layer_width+'%'
      }

      if( _wall.classList.contains('hallway-bottom')){
        _wall.style.padding = '0 '+((100-layer_width)/2)+'%'
      }

			if( _wall.classList.contains('hallway-left') || _wall.classList.contains('hallway-right') ){
				_wall.style.webkitTransform = rotate_y
        // _wall.style.height          = layer_height+'%'
				_wall.style.padding         = sidesPadding+'% 0'
        _wall.firstElementChild.src = images.active_set[images.cursor]
			}

		}

		// make a copy of the newly edited layer
		new_Layer = hallway._layer.cloneNode(true)

    origin_divisor = (state.hallway_origin_divisor * state.hallway_origin_divisor) + 100

		// get the origin of the perspective for the new layer
		origin_x = (state.hallway_perspective_x * origin_divisor) - (origin_divisor/2);
		origin_y = (state.hallway_perspective_y * origin_divisor) - (origin_divisor/2);		

		// update the new layer CSS

		new_Layer.style.opacity                  = 1
		new_Layer.style.webkitTransform          = 'rotate('+hallway.layer_rot+'deg)'
		new_Layer.style.webkitPerspective        = hallway.perspective
		new_Layer.style.webkitPerspectiveOriginX = origin_x+"%"
		new_Layer.style.webkitPerspectiveOriginY = origin_y+"%"

    if( state.border_image_on ){

      new_Layer.style.borderWidth      = state.border_image_width
      new_Layer.style.borderImage      = 'url('+images.active_set[images.cursor+images.skip_cursor]+') 48% repeat'
      new_Layer.style.borderImageSlice = state.border_image_slices+"%"
      new_Layer.style.left             = (-1 * (state.border_image_width))+"px"
      new_Layer.style.top              = (-1 * (state.border_image_width))+"px"

    }

    // draw all the canvases
    if( images.using_webcam ){
      for( var i=0; i < new_Layer.childNodes.length; i++ ){
        _canvas = new_Layer.childNodes[i].firstElementChild
        ctx = _canvas.getContext('2d')
        ctx.fillRect(0, 0, webcam.width, webcam.height)
        ctx.drawImage(webcam._sourceVideo, 0, 0, webcam.width, webcam.height)
      }
    }

		// finally append the new layer to the hallway

		hallway._box.appendChild( new_Layer )

		// remove a layer if there are too many
		if( hallway._box.childNodes.length > hallway.layers ){
			hallway._box.removeChild( hallway._box.childNodes[0] )
		}

	}
};
// Set up boxes
(function(){
  $mirror_box = $("<div id='mirror-box'></div>").css({
    'position': 'absolute',
    'height': '100%',
    'width': '100%',
    'left': '0px',
    'top': '0px',
    'z-index': '3'
  });

  $mirror_left = $("<div id='mirror-left'></div>").css({
    'height': '100%',
    'width': '50%',
    'float': 'left'
  });

  $mirror_right = $("<div id='mirror-right'></div>").css({
    'height': '100%',
    'width': '50%',
    'float': 'left',
    'transform': 'scaleX(-1)'
  });

  $mirror_left.append( $('<img />') ) // draw function requires one image minimum
  $mirror_box.append($mirror_left);
  $mirror_box.append($mirror_right);
  $('#container').append($mirror_box);

  // add_css('#mirror-left.reflect{-webkit-box-reflect:right 0px}#mirror-left .gif{position:relative;}')
  add_css('#mirror-right .gif{position:relative;}')

}());

var mirror_gif = {

  update:{
    rotation:function(value){
      if( !mirror_gif.run ){ return }
      deck.updateState( 'slider', 'mirror_rotation', value )
      mirror_gif.rotate(value)
    },
    margin:function(value){
      if( !mirror_gif.run ){ return }
      deck.updateState( 'slider', 'mirror_image_spacing', value )
    },
  },

  toggle:{
    grid:function(){
      if( !mirror_gif.run ){ return }
      deck.updateState( 'toggle', 'mirror_grid_on', !state.mirror_grid_on )      
    },
  },

  box: document.getElementById('mirror-box'),
  run: false,
  current_amount: 0,
  _leftBox: document.getElementById('mirror-left'),
  _rightBox: document.getElementById('mirror-right'),
  init: function(){
    mirror_gif.run = !mirror_gif.run;
    if(mirror_gif.run){
      controls.height.change(200)
      controls.reset_width.press()
      images.clear()
      mirror_gif.current_amount = 0
    }
  },
  stop: function(){
    if(!mirror_gif.run){ return }
    mirror_gif.run = false
    mirror_gif._leftBox.innerHTML = ''
    // turn off mirror automations
    deck.automator.stop_automations(['mirror_image_spacing'])
  },
  draw: function(){

    if(!mirror_gif.run){return;}

    elementType = 'img'
    if( images.using_webcam ){
      elementType = 'canvas'
    }

    _newImage = document.createElement(elementType)

    if( !images.using_webcam ){
      _newImage.setAttribute('src',images.active_set[images.cursor])
    }    

    _newImage.style.height          = state.height
    _newImage.style.width           = state.width
    _newImage.style.opacity         = state.single_opacity
    _newImage.style.marginRight     = state.mirror_image_spacing+'px'
    _newImage.style.borderRadius    = state.border_radius+'%'
    _newImage.style.transform       = 'rotate('+state.single_rotate+'deg)'

    if( state.border_image_on ){
      _newImage.style.borderWidth      = state.border_image_width
      _newImage.style.borderImage      = 'url('+images.active_set[images.cursor+images.skip_cursor]+') 48% repeat'
      _newImage.style.borderImageSlice = state.border_image_slices+"%"
    }

    // split into two image nodes for left and right
    // we are splitting here because a cloned canvas does not carry over its bitmap
    _rightImage = _newImage.cloneNode()
    _leftImage  = _newImage

    // draw video image to canvas
    if( images.using_webcam ){

      _leftImage.setAttribute('height',webcam.height)
      _leftImage.setAttribute('width',webcam.width)

      _leftImage.getContext('2d').drawImage( webcam._sourceVideo, 0, 0)

      _rightImage.setAttribute('height',webcam.height)
      _rightImage.setAttribute('width',webcam.width)

      _rightImage.getContext('2d').drawImage( _leftImage, 0, 0 )
    }

    clear = 'both'
    if( state.mirror_grid_on ){
      clear = 'none'
    }

    // create a container which allows image scaling
    _imageScaleBox                       = document.createElement('div')
    _imageScaleBox.style.transform       = 'scale('+state.image_scale+')'
    _imageScaleBox.style.transformOrigin = '100%'
    _imageScaleBox.style.float           = 'right'
    _imageScaleBox.style.clear           = clear
    _imageScaleBox.style.position        = 'relative'
    _imageScaleBox.setAttribute('class','gif blowable')

    // split into two nodes for left and right    
    _rightScaleBox = _imageScaleBox.cloneNode()
    _leftScaleBox  = _imageScaleBox

    _leftScaleBox.appendChild(_leftImage)
    _rightScaleBox.appendChild(_rightImage)

    mirror_gif._leftBox.insertBefore( _leftScaleBox, mirror_gif._leftBox.firstElementChild )
    mirror_gif._rightBox.insertBefore( _rightScaleBox, mirror_gif._rightBox.firstElementChild )

    // webcam framerate correction
    if( images.using_webcam && framerate.average < framerate.target && state.max_images_amount > 10 ){
      controls.decrease_max_images.press()

      // if framerate is really low, remove again
      if( framerate.average < framerate.target * 0.7 ){
        controls.decrease_max_images.press()        
      }
    }


    mirror_gif.current_amount = mirror_gif._leftBox.childNodes.length + mirror_gif._rightBox.childNodes.length

    // Cleanup
    if(mirror_gif.current_amount >= state.max_images_amount){

      mirror_gif.removeLastImage(mirror_gif._leftBox)
      mirror_gif.removeLastImage(mirror_gif._rightBox)

      // mirror_gif.current_amount = state.max_images_amount;
    }

  },

  removeLastImage: function( _parent ){
    _lastImg = _parent.childNodes[state.max_images_amount]
    if( typeof(_lastImg) !== 'undefined' ){
      while( _trash = _lastImg.nextSibling ){
        _trash.remove()
      }  
    }
  },

  rotate: function(deg){
    mirror_gif.box.style.transform = 'rotate('+(-1*deg)+'deg)'
  }
}
// add the BG Box to the DOM
$bg_box = $("<div id='bg-box'></div>").css({
	'position': 'absolute',
	'height': '100%',
	'width': '100%',
	'z-index': '-1',
	'left': '0px',
	'top': '0px',
	'opacity':'0',
	'-webkit-transform':'translate(0px)',
	'image-rendering':'pixelated',
	'background-image':'url('+images.active_set[images.cursor]+')'
})

$('#container').append($bg_box);


// Module properties and functions
var bg_mod = {

	box: $('#bg-box'),

	update:{
    zoom:function(value){
      deck.updateState( 'slider', 'background_zoom', value )
			bg_mod.zoom(value)
    },
    scroll_speed_x:function(value){
    	deck.updateState( 'xy', 'background_scroll_speed_x', value )  	
    },
    scroll_speed_y:function(value){
    	deck.updateState( 'xy', 'background_scroll_speed_y', value )  	
    },
    opacity:function(value){
    	deck.updateState( 'slider', 'background_opacity', value )
    	bg_mod.box.css("opacity", value*.01)
    	deck.updateIndicatorState('background_run',!!value)
    },
    source:function(src) {
      deck.updateStateString('background_src',src)
      bg_mod.box.css('background-image','url('+src+')')
    }
  },

  reset:{
    zoom:function(){
      deck.updateState( null, 'background_zoom', null )
      bg_mod.box.css({"background-size": ''})
    }
  },


	// CALLED FROM THE MAIN LOOP. RUNS EVERY FRAME
	draw:function(){

		if( !state.background_run ){ return }

		// if the background is running, do other BG stuff too
		bg_mod.vscroll();
		bg_mod.hscroll();
		bg_mod.zoomer_zoom();

	},

	//CLEAR THE BG
	clear: function(){
		bg_mod.box.css('opacity','0')
		deck.automator.stop_automations(['background_opacity','background_zoom'])
		deck.controls.update('background_opacity',0)		
	},

	//SHOW THE BG
	show: function(){
		bg_mod.box.css('background-image','url('+bg_mod.active_set[bg_mod.cursor]+')');
		bg_mod.box.css('opacity','1')
	},

	//GO TO THE NEXT IMAGE
	next: function(){
		//restart if cursor is at the end
		if (bg_mod.cursor >= bg_mod.active_set.length){ bg_mod.cursor = 1; }
		
		// set the cursor
		// if( _3up.bg_offset == 1 ){
      bg_mod.cursor++;
  //   }else{
  //     bg_mod.cursor = bg_mod.cursor + _3up.bg_offset;
  //     _3up.bg_offset =1;
  //   }

		//set the new bg
		bg_mod.box.css('background-image','url('+bg_mod.active_set[bg_mod.cursor]+')');
		
		if( bg_mod.box.css('opacity') == 0 ){
			bg_mod.box.css('opacity',1);
		}

	},

	vscrolling_speed: 0,
	vscroll_invert: false,
	vscroll: function(){		
		
		scroll_speed_y = state.background_scroll_speed_y - (controls.background_scroll_speed_y.max / 2)

		vpos = bg_mod.box.css('backgroundPosition').split(' ')[1] 
		vpos = parseInt(vpos)
		bg_mod.box.css("background-position-y",vpos+scroll_speed_y+"px")
		
	},

	hscrolling_speed: 0,
	hscroll_invert: false,
	hscroll: function(){		
		
		scroll_speed_x = state.background_scroll_speed_x - (controls.background_scroll_speed_x.max / 2)

		hpos = bg_mod.box.css('backgroundPosition').split(' ')[0]
		hpos = parseInt(hpos)
		bg_mod.box.css("background-position-x",hpos+scroll_speed_x+"px")
		
	},

	zoom:function(value){
		if( value == 0 ){ value = 1 }
		value = value+"%"
		bg_mod.box.css({"background-size": value})	
	},

	zoomer_on: false,
	zoomer_add:function(){
		$zoom_pic = $("<img />").css({
			'position':'absolute',
			'top':'50%',
			'left':'50%',
			'height':'10px',
			'width':'auto',
			'-webkit-transform':'scale(0)'
		}).attr({
			'class':'bg-zoomer locked',
			'src':bg_mod.active_set[bg_mod.cursor]
		});

		bg_mod.box.append($zoom_pic);
	},
	zoomer_zoom: function(){

		if(!bg_mod.zoomer_on){return;}

		$('.bg-zoomer').each(function(){

			node = $(this)[0];
			var curTransform = new WebKitCSSMatrix(window.getComputedStyle(node).webkitTransform);
			console.log(curTransform.a); // curTransform is an object,
			console.log(curTransform.d); // a through

			// size = $(this).css('-webkit-transform');
			// console.log(size);
			
			if( curTransform.d > 100 ){ $(this).remove(); }

			$(this).css('-webkit-transform','scale('+(curTransform.d+1)+')');

		});
	},
	using_webcam:false,
  toggle_webcam:function(){

    if( bg_mod.using_webcam ){
      bg_mod.disable_webcam()
    }else{
      bg_mod.enable_webcam()
    }

  },
  enable_webcam:function(){

  	$webcamVideo = $('<video autoplay src="'+webcam.stream_src+'"></video>').css({
  		'width':      'auto',
  		'min-height': '100%',
  		'min-width':  '100%'
  	})

    bg_mod.box.html($webcamVideo);
    bg_mod.using_webcam = true

  },
  disable_webcam:function(){
    bg_mod.box.html('');
    bg_mod.using_webcam = false
  }
}

$("<div id='big-shrinker-box'></div>").css({
	'width':'100%',
	'height':'100%',
	'position':'absolute',
	'top':'0',
	'left':'0'
}).appendTo( $('#container') );

big_shrinker = {

	box: $('#big-shrinker-box'),
	update:{
		rotation:function(value){
			deck.updateState( 'slider', 'big_shrinker_rotation', value )
			big_shrinker.rotate(value)
		},
    source:function(src) {
      deck.updateStateString('big_shrinker_src',src)
    }
	},
	
	go: function(){

		if( state.big_shrinker_src == '' ){
			big_shrinker.update.source(images.active_set[images.cursor])
		}

		// set active indicator on deck
		deck.controls.update_addon_running_indicator('big-shrinker',true);

		$big_shrinker = $('<img />')
			.attr('src',state.big_shrinker_src)
			.addClass('locked')
			.css({
				'position': 'absolute',
			    'top': '0px',
			    'left': '0px',
			    'width': '100%',
			    'height': '100%'
			});
		big_shrinker.box.prepend($big_shrinker);
		$big_shrinker.hide(5000,function(){
			$(this).remove();
			
			// remove active indicator on deck
			deck.controls.update_addon_running_indicator('big-shrinker',false);

		});
	},
	rotate: function(deg){
		big_shrinker.box.css('-webkit-transform','rotate('+(-1*deg)+'deg)');
	}
}
//setup

$border_boxes_box = $('<div id="border-boxes-box"></div>').css({
  'position': 'absolute',
  'top':'0px',
  'height': '100%',
  'width': '100%',
  'z-index': '2',
  'box-sizing':'border-box'
});

$('#container').append($border_boxes_box);

var border_boxes = {
  run: false,
  box: $('#border-boxes-box'),
  current_cursor: 0,
  init: function(){
    border_boxes.run = true;
    border_boxes.set_boxes();

    // set active indicator on deck
    deck.controls.update_addon_running_indicator('border-boxes',true);
  },
  set_boxes:function(){
    i=0;
    while(i<4){
      $border_boxes_square = $("<div class='border-boxes-box'></div>")
      .css({
        'border-image':'url('+images.active_set[images.cursor+i]+') 48% repeat',
        'background-image':'url('+images.active_set[images.cursor+i+1]+')',
        'background-size':'cover',
        'width':'50%',
        'height':'50%',
        'float':'left',
        'border-width':'50px',
        'box-sizing':'border-box'
      });
      border_boxes.box.append($border_boxes_square);
      i++;
    }
  },
  draw: function(){
    if( !border_boxes.run ){ return; }
    if( images.cursor !== border_boxes.current_cursor ){
      border_boxes.box.empty();
      border_boxes.set_boxes();
      border_boxes.current_cursor = images.cursor;
    }

    $('.border-boxes-box').css({
      "border-image-slice":(state.width/42)+"%"
    });
    border_boxes.box.css('padding', state.height/10+"px");

  },
  die: function(){
    border_boxes.run = false;
    border_boxes.box.empty();
    deck.controls.update_addon_running_indicator('border-boxes',false);
  }
}
var corner_box = {

  update:{
    opacity:function(value){
      deck.updateState( 'slider', 'corner_box_opacity', value )
      deck.updateIndicatorState('corner_box_run',!!value)
      corner_box.draw()
    },
    size:function(value){
      deck.updateState( 'slider', 'corner_box_size', value )
      corner_box.draw()
    },
    position_x:function(value){
      deck.updateState( 'xy', 'corner_box_position_x', value )
      corner_box.draw()
    },
    position_y:function(value){
      deck.updateState( 'xy', 'corner_box_position_y', value )
      corner_box.draw()
    },
    source:function(src) {
      deck.updateStateString('corner_box_src',src)
      corner_box.refreshImage()
    }

  },

  draw:function(){

    width   = state.corner_box_size
    posX    = state.corner_box_position_x
    posY    = state.corner_box_position_y
    opacity = state.corner_box_opacity

    setStyles(corner_box.box,{
      opacity:   opacity * .01,
      width:     width+'%',
      left:      posX+'%',
      top:       posY+'%',
      transform: 'translate(-'+posX+'%,-'+posY+'%)'
    })

    // remove image when opacity is 0
    if( !corner_box.using_webcam ){
      if(opacity == 0 ){
        corner_box.box.innerHTML = ''
      }else if( !corner_box.box.innerHTML ){
        corner_box.refreshImage()
      }
    }
  },

  refreshImage:function() {

    src = state.corner_box_src
    if(src == null){
      src = images.active_set[images.cursor]
    }

    corner_box.box.innerHTML = '<img class="locked" src="'+src+'" style="width:100%" />'
  },
  
  box:null, // set in init()
  init:function(){
  
    $corner_box = $('<div id="corner-box" ></div>').css({
      'width': "30%",
      'position': 'absolute',
      'top': '0px',
      'left': '0px;',
      'z-index':'100000000000',
      'opacity':'0'
    })

    $('#container').append($corner_box)

    corner_box.box = $corner_box[0]
    
  },
  
  set_from_preview(){
    
    src = images.active_set[ images.cursor + images.skip_cursor ]
    corner_box.update.source(src)
    
    controls.skip_next_gif.press()
    corner_box.disable_webcam()
    deck.$('[control-id="send_cam_to_corner_box"]').removeClass('active')
  },

  using_webcam:false,
  toggle_webcam:function(){
    if( corner_box.using_webcam ){
      corner_box.disable_webcam()
    }else{
      corner_box.enable_webcam()
    }

  },
  enable_webcam:function(){
    corner_box.box.innerHTML = '<video autoplay src="'+webcam.stream_src+'" style="width:100%" ></video>'
    corner_box.using_webcam = true
  },
  disable_webcam:function(){
    corner_box.refreshImage()
    corner_box.using_webcam = false
  }
}

corner_box.init();

// Setup commands

$midground_box = $("<div id='midground-box'></div>").css({
	'height': '80%',
	'width': '80%',
	'margin-top': '5%',
	'opacity':'0',
	'background-size': 'cover',
	'display': 'inline-block',
	'z-index':'1',
	'image-rendering':'pixelated'
});

$('#container').append($midground_box);

// Module properties and functions
var midground = {

	run: false,
	active_set: JSON.parse(JSON.stringify( gifslap.all_gifs )),
	cursor: 0,

	box: $('#midground-box'),

	update:{
    zoom:function(value){
      deck.updateState( 'slider', 'midground_zoom', value )
			midground.zoom(value)
    },
    scroll_speed_x:function(value){
    	deck.updateState( 'xy', 'midground_scroll_speed_x', value )  	
    },
    scroll_speed_y:function(value){
    	deck.updateState( 'xy', 'midground_scroll_speed_y', value )  	
    },
    opacity:function(value){
    	deck.updateState( 'slider', 'midground_opacity', value )
    	midground.box.css("opacity", value*.01)
    	deck.updateIndicatorState('midground_run',!!value)
    },
    position_x:function(value){
    	deck.updateState( 'xy', 'midground_pos_x', value )
      midground.update_transform()
    },
    position_y:function(value){
    	deck.updateState( 'xy', 'midground_pos_y', value )
      midground.update_transform()
    },
    rotation:function(value){
    	deck.updateState( 'slider', 'midground_rotation', value )
      midground.update_transform()
    },
    scale:function(value){
    	deck.updateState( 'slider', 'midground_scale', value )
      midground.update_transform()
    },
    source:function(src) {
      deck.updateStateString('midground_src',src)
      midground.box.css('background-image','url('+src+')')
    }
  },


	draw: function(){

		if( midground.box.css('opacity') == 0 ){

			midground.run = false;

		}else{

			midground.run = true;
			midground.vscroll();
  		midground.hscroll();

		}

		deck.controls.update_addon_running_indicator('midground',midground.run);

	},

	//CLEAR THE MIDGROUND
	clear: function(){
		midground.box.css('opacity','0')
		deck.automator.stop_automations(['midground_opacity','midground_zoom','midground_rotation','midground_scale'])
		deck.controls.update('midground_opacity',0)
	},

	//SHOW THE MIDGOROUND
	show: function(){
		midground.box.css('background-image','url('+midground.active_set[midground.cursor]+')');
		midground.box.css('opacity','1')
	},

	//GO TO THE NEXT IMAGE
	next: function(){
		//restart if cursor is at the end
		if (midground.cursor >= midground.active_set.length){ midground.cursor = 1; }
		
		midground.cursor++;

		//set the new bg
		midground.box.css('background-image','url('+midground.active_set[midground.cursor]+')');
		
		if( midground.box.css('opacity') == 0 ){
			midground.box.css('opacity',1);
		}
	},

	//GO TO THE PREVIOUS IMAGE
	prev: function(){
		//restart if cursor is at 0
		if (midground.cursor <= 0){ midground.cursor = midground.active_set.length-1; }
		//set the new bg
		midground.cursor--;
		midground.box.css('background-image','url('+midground.active_set[midground.cursor]+')');
		if( midground.box.css('opacity') == 0 ){
			midground.box.css('opacity',1);
		}
	},

	vscrolling_speed: 0,
	// vscroll_invert: false,
	vscroll: function(){

		scroll_speed_y = state.midground_scroll_speed_y - (controls.midground_scroll_speed_y.max / 2)

		vpos = midground.box.css('backgroundPosition').split(' ')[1];
		vpos = parseInt(vpos);
		midground.box.css("background-position-y",vpos+scroll_speed_y+"px");
	},

	hscrolling_speed: 0,
	hscroll_invert: false,
	hscroll: function(){
		scroll_speed_x = state.midground_scroll_speed_x - (controls.midground_scroll_speed_x.max / 2)
		hpos = midground.box.css('backgroundPosition').split(' ')[0];
		hpos = parseInt(hpos);
		midground.box.css("background-position-x",hpos+scroll_speed_x+"px");
	},
	
	update_transform:function(){

		rotation   = state.midground_rotation
		scale      = state.midground_scale
		position_x = state.midground_pos_x - 100
		position_y = state.midground_pos_y - 100

		midground.box.css('-webkit-transform','rotate('+rotation+'deg) scale('+scale+') translateX('+position_x+'%) translateY('+position_y+'%)')
		
	},
	zoom:function(value){
		midground.box.css({"background-size": value+"%"})
	}
}

var puncher = {
  set_array: images.active_set,
  cursor: 0,
  vertical_destination: 5000,
  horizontal_destination: 0,
  src: images.active_set[images.cursor],
  set:function(src){
    puncher.src = src;
  },
  punch: function(index){

    // set active indicator on deck
    deck.controls.update_addon_running_indicator('puncher',true);
  
    pos_y = Math.floor(Math.random()*window.innerHeight);
    pos_x = Math.floor(Math.random()*window.innerWidth);
    height = Math.floor(Math.random()*300)+100;
    
    $p_img = $('<img src="'+puncher.src+'" class="gif" height="'+height+'" />').css({
      'top':pos_y,
      'left':pos_x,
      'z-index':'1000000000000'
    });

    $('#container').prepend( $p_img );

    $p_img.animate({
      'top':puncher.vertical_destination,
      'left':puncher.horizontal_destination
    },5000,function(){
      $(this).remove();
      
      // remove active indicator on deck
      deck.controls.update_addon_running_indicator('puncher',false);

    });
  }
}
var rainbow_bars_container = document.createElement('div');
rainbow_bars_container.setAttribute("style","position:absolute;top:0");
rainbow_bars_container.setAttribute('id','rainbow_bars');
document.getElementById('container').appendChild( rainbow_bars_container );

var rainbow_bars = {

	container: document.getElementById('rainbow_bars'),

	update:{

		opacity:function(value){
			deck.updateState( 'slider', 'rainbow_bars_opacity', value )
    	rainbow_bars.container.style.opacity = value*.01
    	deck.updateIndicatorState('rainbow_bars_run',!!value)
		},

		bar_width:function(value){
			deck.updateState( 'slider', 'rainbow_bar_width', value )
		},

		speed:function(value){
			deck.updateState( 'slider', 'rainbow_bar_speed', value )
		},

		rotation:function(value){
			deck.updateState( 'slider', 'rainbow_bar_rotation', value )
		},

	},


	max_size: 100,
	current_size: 0,
	sky_height: 0,
	color: 0,
	


	makeChaos: function(){
		text = "";
		possible  ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for( var i=0; i < 25; i++ ){
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	},
	modColor: function(currentColor,a,frequency){
		red   = Math.floor(Math.sin(frequency*currentColor + 0) * 127 + 128);
		green = Math.floor(Math.sin(frequency*currentColor + 2) * 127 + 128);
		blue  = Math.floor(Math.sin(frequency*currentColor + 4) * 127 + 128);
		a = a;
		return ("rgba("+red+","+green+","+blue+","+a+")");	
	},
	draw: function(){
		
		if( !state.rainbow_bars_run){ return; }

		if( rainbow_bars.current_size > rainbow_bars.max_size ){ 
			rainbow_bars.container.removeChild( document.getElementsByClassName('chroma_bar')[0] );
			//clearInterval(loop);
		}
		
		var chaos = rainbow_bars.makeChaos();
		
		a = chaos[0];
		b = chaos.lastIndexOf(a);
		//if( b>sky_height ){ b = 1; }
		
		if( b>0 ){ rainbow_bars.sky_height = rainbow_bars.sky_height-b; }
		if( rainbow_bars.sky_height<0 ){ rainbow_bars.sky_height = -rainbow_bars.sky_height; }
		
		chroma_bar = document.createElement('p');
		chroma_bar.setAttribute("class","chroma_bar");
		chroma_bar.style.webkitTransform = "rotate("+state.rainbow_bar_rotation+"deg)";
		chroma_bar.style.margin = state.rainbow_bar_speed*-.5;
		chroma_bar.style.backgroundColor = rainbow_bars.modColor(rainbow_bars.color,(rainbow_bars.sky_height/14),.01);
		chroma_bar.style.paddingTop = (rainbow_bars.sky_height*30).toString()+"px";
		chroma_bar.style.borderLeft = "1px dotted yellow";
		chroma_bar.style.display = "inline-block";
		chroma_bar.style.width = state.rainbow_bar_width;
		chroma_bar.style.height = 80;

		
		rainbow_bars.sky_height++;
		rainbow_bars.container.appendChild(chroma_bar);
		rainbow_bars.current_size++;
		rainbow_bars.color++;
	}
}
var wind={

  update:{
    speed_x:function(value){
      deck.updateState( 'xy', 'wind_speed_x', value )
    },
    speed_y:function(value){
      deck.updateState( 'xy', 'wind_speed_y', value )
    },
    intensity:function(value){
      deck.updateState( 'slider', 'wind_intensity', value )
    },
  },

  draw: function(){

    if( state.wind_run == true && state.wind_speed_x == 64 && state.wind_speed_y == 64 ){
      deck.updateIndicatorState('wind_run',false)
      deck.automator.stop_automations(['wind_intensity'])
    }else if( state.wind_speed_x !== 64 || state.wind_speed_y !== 64 ){
      deck.updateIndicatorState('wind_run',true)
    }

    if( !state.wind_run ){ return }

    _blowable_images = document.getElementsByClassName('blowable')
    
    for( var i=0; i < _blowable_images.length; i++ ){

      // get the image
      _blowable_image = _blowable_images[i]

      // get css values of image

      css_left = parseInt( _blowable_image.style.left );
      if( !css_left ){ css_left = 0 }

      css_top = parseInt( _blowable_image.style.top );
      if(!css_top){ css_top = 0 }

      // remove images that go offscreen in chain
      if( chain.run ){

        css_width  = parseInt( _blowable_image.style.width )
        css_height = parseInt( _blowable_image.style.height )

        if( css_left < 0 - css_width || css_left > window.innerWidth || css_top < 0 - css_height || css_top > window.innerHeight ){
          _blowable_image.remove()
          chain.amount--

          // reduce i because we are removing an element from the array. If we dont reduce it the for loop skips an image
          i--
          continue;
        }
      }     

      // center the value, produce negatives if needed
      x_offset = state.wind_speed_x - (controls.wind_speed_x.max / 2)
      y_offset = state.wind_speed_y - (controls.wind_speed_y.max / 2)

      // adjust for intensity
      x_offset = Math.floor(x_offset * state.wind_intensity)
      y_offset = Math.floor(y_offset * state.wind_intensity)

      unit = 'px'

      // apply new styles
      _blowable_image.style.left = css_left + x_offset + unit
      _blowable_image.style.top  = css_top  + y_offset + unit

    }
  }
}
mode_changer = {
	current: 0,
	modes:['chain','corners','hallway','circle','mirror_gif','center_pix'],
	kill_all: function(){
		
    images.clear()
    chain.stop()
    hallway.stop()
    circle.stop()
    mirror_gif.stop()
		corners.stop()
		center_pix.stop()
		
	},
	step: function(){

		// don't change mode when paused
		if( state.paused ){ return }

		mode_changer.current++;

		if(mode_changer.current == mode_changer.modes.length){ 
			mode_changer.current = 0;
		}

		mode_changer.start( mode_changer.modes[mode_changer.current] );
	},
	start:function(mode){

		// don't change if the mode is already on
		if( state.current_mode == mode ){ return }

		state.current_mode = mode
		mode_changer.kill_all();
		switch (mode) {
	    case 'circle':
          circle.init()
          deck.controls.activate_bank( 'circle' )
          autopilot.turn_off()
      break;
	    case 'chain':
          chain.init()
          deck.controls.activate_bank( 'chain' )
      break;
	    case 'hallway':
      		deck.controls.activate_bank( 'hallway' )
          hallway.init()
          autopilot.turn_off()
      break;
	    case 'mirror_gif':
    	   	deck.controls.activate_bank( 'mirror' )
          mirror_gif.init()
          autopilot.turn_off()
      break;
	    case 'corners':
          corners.init()
    	    deck.controls.activate_bank( 'corners' )
    	 	  autopilot.turn_off()
          controls.equalize_quadrants.press()
      break;
	    case 'center_pix':
    	    deck.controls.activate_bank( 'center' )
          center_pix.init()
          autopilot.turn_off()
      break;
		}
	}
}
var autopilot = {

  run:false,

  // rotation
  rotation_speed: 0,
  size_multiplier: 1,

  // direction
  chain_x_mod: 0,
  chain_y_mod: 0,

  // speed
  speed_mod: 1,

  // counter counts up, when it reaches frequency it draws.
  counter:0,
  frequency:10,

  toggle:function(){
    deck.updateState( 'toggle', 'autopilot_run', !state.autopilot_run )
    if(state.autopilot_run){
      mode_changer.start('chain');
    }
  },

  turn_off:function(){
    deck.updateState( 'toggle', 'autopilot_run', false )
  },

  // outputs actions to the screen
  show_log: false,
  log: function(message){
    if(!autopilot.show_log){ return }
    $('#text').prepend('<div>'+message+'</div>');
  },

  percent_chance:function(total,max,callback){
    if( gifslap.r(total) < max ){
      callback();
    }
  },

  

  // function runs inside the main loop
  modify_params:function(){

    if( !state.autopilot_run ) return

    // rotation
    rotation_value = (state.single_rotate + autopilot.rotation_speed) % 360
    if( rotation_value < 0 ){ rotation_value = 360 + rotation_value }
    images.update.rotation( rotation_value )

    // size
    newHeight = Math.round(state.height * autopilot.size_multiplier)
    controls.height.change( newHeight )

    // change images amount based on size and current amount
    if( state.height > 300 || state.max_images_amount > 80){

      autopilot.percent_chance(100,50,function(){
        controls.decrease_max_images.press();
      });

      
    }
    if( state.height < 200 && state.max_images_amount < 90 ){
      controls.increase_max_images.press();
    }

    // speed
    if( autopilot.speed_mod !== 0 ){
      newSpeed = +(state.chain_speed * autopilot.speed_mod).toFixed(2)
      controls.chain_speed.change( newSpeed )
    }

    // direction
    chain.update.direction_x( state.chain_direction_x + autopilot.chain_x_mod )
    chain.update.direction_y( state.chain_direction_y + autopilot.chain_y_mod )

    if( autopilot.chain_x_mod > window.innerWidth ){
      autopilot.chain_x_mod * -1;
    }

    if( autopilot.chain_y_mod > window.innerHeight ){
      autopilot.chain_y_mod * -1;
    }

    // wind
    if( autopilot.wind_multiplier !== 0 ){
      images.fly_off_dist = images.fly_off_dist * autopilot.wind_multiplier;
      if( images.fly_off_dist > 300 ){
        autopilot.wind_multiplier = .99
      }
    }

  },

  draw:function(){
    
    if( !state.autopilot_run ) return
    if( state.paused ) return 

    autopilot.counter++;
    if( autopilot.counter < autopilot.frequency ) return
    autopilot.counter = 0;

    if( autopilot.show_log ){
      $('#text div:nth-child(50)').nextAll().remove();
    }
    
    if( chain.run ){

      // reverse doubler
      if( state.chain_reverse_doubler_on ){

        // change to turn off reverse doubler
        autopilot.percent_chance(100,2,function(){
          controls.toggle_chain_reverse_doubler.press()
        })

      }else{

        // chance to turn on reverse doubler
        autopilot.percent_chance(100,5,function(){
          controls.toggle_chain_reverse_doubler.press()
        })
      }

      // remove by tail
      if( state.chain_remove_by_tail_on ){

        // chance to turn off remove by tail
        autopilot.percent_chance(100,2,function(){
          controls.toggle_chain_remove_by_tail.press()
        })

      }else{

        // chance to turn on remove by tail
        autopilot.percent_chance(100,5,function(){
          controls.toggle_chain_remove_by_tail.press()
        })

      }      

      // rotation
      if( autopilot.rotation_speed ){

        // chance to stop rotating
        autopilot.percent_chance(100,2,function(){

          autopilot.log('stopped rotating');
          autopilot.rotation_speed = 0;
        });
        

      }else{

        autopilot.percent_chance(100,2,function(){

          autopilot.log('started rotating');

          // degrees of rotation
          autopilot.rotation_speed = gifslap.r(4);

          // chance for negative rotation
          autopilot.percent_chance(100,50,function(){
            autopilot.rotation_speed = autopilot.rotation_speed * -1;
          });
        });
      }

      // Size
      if( autopilot.size_multiplier !== 1 ){

        // chance to stop grow/shrinking
        chance_to_stop_size_change = gifslap.r(100);
        if( chance_to_stop_size_change > 95 || state.height > 400 || state.height < 200 ){
          
          autopilot.log('stopped size change');
          autopilot.size_multiplier = 1;
        }

      }else{

        // chance to start size change
        autopilot.percent_chance(100,10,function(){

          autopilot.log('started size change');

          // grow or shrink
          grow_or_shrink = gifslap.r(1);
          if( grow_or_shrink == 0 && state.height < 400 ){
            
            // grow
            autopilot.size_multiplier = gifslap.r(2) * .01 + 1;  

          }else if( state.height > 200 ){

            // shrink
            autopilot.size_multiplier = 1 - gifslap.r(5) * .01;  

          }

        });

      }

      // Speed
      // chance to slow down
      if( autopilot.speed_mod == 1 ){
        autopilot.percent_chance(100,3,function(){
  
          autopilot.log('slowing down');


          // slow down.
          // how slow?
          autopilot.speed_mod = 1 - (gifslap.r(3)*.01);
  
        });
      }else{

        // chance to remove speed mod
        autopilot.percent_chance(100,10,function(){
  
          autopilot.log('full speed');


          autopilot.speed_mod = 1;
          newSpeed = +(gifslap.r(100) * .01).toFixed(2)
          controls.chain_speed.change( newSpeed )
  
        });
      }

      // opacity
      if( state.single_opacity == 1 ){

        // chance to change opacity
        autopilot.percent_chance(100,3,function(){

          autopilot.log('reduced opacity');
          controls.single_opacity.change( +((gifslap.r(90) + 10) * 0.01).toFixed(2) )

        })

      }else{

        // opacity is not 1. chance to bring it back to 1
        autopilot.percent_chance(100,3,function(){

          autopilot.log('restored opacity');

          controls.single_opacity.change(1)

        });

      }

      // wind
      if( autopilot.wind_multiplier !== 0 ){

        // chance to stop wind
        autopilot.percent_chance(100,3,function(){

          autopilot.log('stopped wind');

          autopilot.wind_multiplier = 0;
          images.fly_direction = null;

        });

      }else{

        // chance to start wind
        autopilot.percent_chance(100,10,function(){

          autopilot.log('started wind');

          // start wind
          
          images.fly_off_dist = 1;
          images.fly_direction = null;
          autopilot.wind_multiplier = 1.005;

          wind_direction = gifslap.r(4);
          if( wind_direction == 0 ){

            // up
            controls.wind_direction_up.press()

          }else if( wind_direction == 1 ){

            // left
            controls.wind_direction_left.press()

          }else if( wind_direction == 2 ){

            // down
            controls.wind_direction_down.press()

          }else if( wind_direction == 3 ){

            // right
            controls.wind_direction_right.press()

          }
          
        });

      }

      // Direction
      (function(){

        same_direction_chance = gifslap.r(100);

        if( autopilot.chain_x_mod !== 0 || autopilot.chain_y_mod !== 0 ){

          // chance for same direction is smaller for gradual arc directions
          if( same_direction_chance < 93 ){ 
            return;
          }  

        }else{

          // chance for same direction is greater if we are doing a straight direction
          if( same_direction_chance < 90 ){ 
            return;
          }  

        }

        

        direction = gifslap.r(8) + 1;
      
        controls.chain_direction_right.release();
        controls.chain_direction_up.release();
        controls.chain_direction_down.release();
        controls.chain_direction_left.release();
        autopilot.chain_x_mod = 0;
        autopilot.chain_y_mod = 0;

        autopilot.log('changing direction');

        if( direction == 1 ){

          // up

          // full speed up or gradual up
          chance_for_gradual_direction = gifslap.r(100);
          if( chance_for_gradual_direction  < 80 ){
            autopilot.chain_y_mod = gifslap.r(100) * .01 + 1;
            
          }else{
            controls.chain_direction_up.press();  
          }

          

        }else if( direction == 2 ){

          // down

          // full speed down or gradual down
          chance_for_gradual_direction = gifslap.r(100);
          if( chance_for_gradual_direction  < 80 ){
            autopilot.chain_y_mod = gifslap.r(100) * .01;
            
          }else{
            controls.chain_direction_down.press();  
          }

        }else if( direction == 3 ){

          // left
          
          // full speed left or gradual left
          chance_for_gradual_direction = gifslap.r(100);
          if( chance_for_gradual_direction  < 80 ){
            autopilot.chain_x_mod = gifslap.r(100) * .01 + 1;
            
          }else{
            controls.chain_direction_left.press();  
          }

        }else if( direction == 4 ){

          // right
          
          // full speed right or gradual right
          chance_for_gradual_direction = gifslap.r(100);
          if( chance_for_gradual_direction  < 80 ){
            autopilot.chain_x_mod = gifslap.r(100) * .01;
            
          }else{
            controls.chain_direction_right.press();  
          }

        }else if( direction == 5 ){

          // up right

          // straight diagonal or curved
          chance_for_angle = gifslap.r(100);
          if( chance_for_angle < 50 ){

            // angled direction
            chain.update.direction_x(gifslap.r(20))
            chain.update.direction_y(gifslap.r(20) * -1)

          }else{

            // straight diagonal
            controls.chain_direction_right.press();
            controls.chain_direction_up.press();

          }

        }else if( direction == 6 ){

          // down right

          // straight diagonal or curved
          chance_for_angle = gifslap.r(100);
          if( chance_for_angle < 50 ){

            // angled direction
            chain.update.direction_x(gifslap.r(20))
            chain.update.direction_y(gifslap.r(20))

          }else{          

            controls.chain_direction_right.press();
            controls.chain_direction_down.press();

          }

        }else if( direction == 7 ){

          // down left

          // straight diagonal or curved
          chance_for_angle = gifslap.r(100);
          if( chance_for_angle < 50 ){

            // angled direction
            chain.update.direction_x( gifslap.r(20) * -1 )
            chain.update.direction_y( gifslap.r(20) )

          }else{

            controls.chain_direction_left.press();
            controls.chain_direction_down.press();

          }

        }else if( direction == 8 ){

          // up left

          // straight diagonal or curved
          chance_for_angle = gifslap.r(100);
          if( chance_for_angle < 50 ){

            // angled direction
            chain.update.direction_x( gifslap.r(20) * -1 )
            chain.update.direction_y( gifslap.r(20) * -1 )

          }else{

            controls.chain_direction_left.press();
            controls.chain_direction_up.press();

          }

        }


      })();
    }

    else if( hallway.run ){


    }

  }
}
var gamepadSupport = {
  TYPICAL_BUTTON_COUNT: 16,
  TYPICAL_AXIS_COUNT: 4,
  ticking: false, // Whether we’re requestAnimationFrameing like it’s 1999.

  // The canonical list of attached gamepads, without “holes” (always starting at [0])
  gamepads: [],

  // Remembers the connected gamepads at the last check; used 
  // to figure out when gamepads get connected or disconnected, since no
  // events are fired.
  prevRawGamepadTypes: [],

  // Previous timestamps for gamepad state; used to not bother with
  // analyzing the polled data if nothing changed (timestamp is the same as last time).
  prevTimestamps: [],

  /**
   * Initialize support for Gamepad API.
   */

  init: function() {
    
    gamepadSupport.startPolling();    
    
  },

  /*
  * Starts a polling loop to check for gamepad state.
  */
  startPolling: function() {
    // Don’t accidentally start a second loop, man.
    if (!gamepadSupport.ticking) {
      gamepadSupport.ticking = true;
      gamepadSupport.tick();
    }
  },

  /**
   * Stops a polling loop by setting a flag which will prevent the next
   * requestAnimationFrame() from being scheduled.
   */
  stopPolling: function() {
    gamepadSupport.ticking = false;
  },

  /**
   * A function called with each requestAnimationFrame(). Polls the gamepad
   * status and schedules another poll.
   */
  tick: function() {
    gamepadSupport.pollStatus();
    gamepadSupport.scheduleNextTick();
  },

  scheduleNextTick: function() {
    // Only schedule the next frame if we haven’t decided to stop via
    // stopPolling() before.
    if (gamepadSupport.ticking) {
      window.requestAnimationFrame(gamepadSupport.tick);
    }
  },

  /**
   * Checks for the gamepad status. Monitors the necessary data and notices
   * the differences from previous state (buttons for Chrome/Firefox,
   * new connects/disconnects for Chrome). If differences are noticed, asks
   * to update the display accordingly. Should run as close to 60 frames per
   * second as possible.
   */
  pollStatus: function() {
    // Poll to see if gamepads are connected or disconnected. Necessary
    // only on Chrome.
    gamepadSupport.pollGamepads();

    for (var i in gamepadSupport.gamepads) {
      var gamepad = gamepadSupport.gamepads[i];

      // Don’t do anything if the current timestamp is the same as previous
      // one, which means that the state of the gamepad hasn’t changed.
      // This is only supported by Chrome right now, so the first check
      // makes sure we’re not doing anything if the timestamps are empty
      // or undefined.
      if (gamepad.timestamp && (gamepad.timestamp == gamepadSupport.prevTimestamps[i])) {
        continue;
      }

      gamepadSupport.prevTimestamps[i] = gamepad.timestamp;
      gamepadSupport.updateDisplay(i);
    }
  },

  // This function is called only on Chrome, which does not yet support
  // connection/disconnection events, but requires you to monitor
  // an array for changes.
  pollGamepads: function() {
    
    // Get the array of gamepads – the first method (getGamepads)
    // is the most modern one and is supported by Firefox 28+ and
    // Chrome 35+. The second one (webkitGetGamepads) is a deprecated method
    // used by older Chrome builds.
    var rawGamepads =
        (navigator.getGamepads && navigator.getGamepads() );

    if (rawGamepads) {
      // We don’t want to use rawGamepads coming straight from the browser,
      // since it can have “holes” (e.g. if you plug two gamepads, and then
      // unplug the first one, the remaining one will be at index [1]).
      gamepadSupport.gamepads = [];

      // We only refresh the display when we detect some gamepads are new
      // or removed; we do it by comparing raw gamepad table entries to
      // “undefined.”
      var gamepadsChanged = false;

      for (var i = 0; i < rawGamepads.length; i++) {
        if (typeof rawGamepads[i] != gamepadSupport.prevRawGamepadTypes[i]) {
          gamepadsChanged = true;
          gamepadSupport.prevRawGamepadTypes[i] = typeof rawGamepads[i];
        }

        if (rawGamepads[i]) {
          gamepadSupport.gamepads.push(rawGamepads[i]);
        }
      }

      // Ask the tester to refresh the visual representations of gamepads
      // on the screen.
      if (gamepadsChanged) {
        // amount of gamepads plugged in has changed

      }
    }
  },

  // run functions based on control states

  updateDisplay: function(gamepadId) {

    var gamepad = gamepadSupport.gamepads[gamepadId];

    
    if(gamepad.buttons){
     

      if(gamepad.buttons[0].pressed){ // A
        console.log('a')

       if(chain.run){

          controls.height.change( state.height - 10 )
          
          if (state.height <= 10){
            controls.height.change(300)
          }

          if( state.height > 50 ){ 
            controls.max_images_amount.change(170)
          }
          if( state.height > 100 ){ 
            controls.max_images_amount.change(100)
          }
          if( state.height > 200 ){ 
            controls.max_images_amount.change(50)            
          }
          if( state.height > 300 ){
            controls.max_images_amount.change(45)            
          }
        }

        if( mirror_gif.run ){
          controls.toggle_mirror_vertical_stream.press()
        }

        if( corners.run ){
          if( state.border_radius == 500 ){
            images.update.border_radius(0)            
          }else{
            images.update.border_radius(50)
            controls.width.change(state.height)
          }
        }

        if( hallway.run ){
          hallway.update.origin_divisor( (state.hallway_origin_divisor + 10) % controls.hallway_origin_divisor.max )
        }

      }
      
      if(gamepad.buttons[1].pressed){ // B
       console.log('b')

       if(chain.run){
          controls.height.change( state.height + 10)
          
          if( state.height > 300){
            controls.height.change(10)
          }

          if( state.height > 50 ){
            controls.max_images_amount.change(200)
          }
          if( state.height > 100 ){ 
            controls.max_images_amount.change(100)            
          }
          if( state.height > 200 ){ 
            controls.max_images_amount.change(50)            
          }
          if( state.height > 300 ){ 
            controls.max_images_amount.change(45)            
          }
        }

        if( mirror_gif.run ){
          mirror_gif.toggle.grid()
        }

        if( corners.run ){
          if( state.border_radius == 500 ){
            images.update.border_radius(0)
          }else{
            images.update.border_radius(50)
            controls.width.change(state.height)
          }
        }

        if( hallway.run ){
          newDivisor = state.hallway_origin_divisor - 10
          if( newDivisor < 0 ){ newDivisor = controls.hallway_origin_divisor.max }
          hallway.update.origin_divisor( newDivisor )
        }


      }

      if(gamepad.buttons[2].pressed){ // X
        console.log('x')

        rotation_value = state.single_rotate - 5
        if( rotation_value < 0 ){ rotation_value = 360 + rotation_value }
        images.update.rotation( rotation_value )

        if( hallway.run ){
          hallway.update.origin_divisor( (state.hallway_origin_divisor + 20) % controls.hallway_origin_divisor.max )
        }

      }

      if(gamepad.buttons[3].pressed){ // Y
        console.log('y')
        
        rotation_value = (state.single_rotate + 5)%360        
        images.update.rotation( rotation_value )

        if( hallway.run ){
          newDivisor = state.hallway_origin_divisor - 20
          if( newDivisor < 0 ){ newDivisor = controls.hallway_origin_divisor.max }
          hallway.update.origin_divisor( newDivisor )
        }

      }

      

      if(gamepad.buttons[4].pressed){ // left bumper
            console.log('l bump')
            images.prev();
          }



      if(gamepad.buttons[5].pressed){ // right bumper
          console.log('r bump')
          images.next();
        }

      if(gamepad.buttons[6].pressed){ // left trigger
        console.log('l trig')
        if( bg_mod.box.css('opacity') == 0 ){
          bg_mod.next();
          bg_mod.show();
        }else{
          bg_mod.clear();
        }
        
      }

      if(gamepad.buttons[7].pressed){ // right trigger
        console.log('r trig')
        bg_mod.next();
        
      }

      

      // PAUSE
      if( gamepad.buttons[9].pressed){
        console.log('pause')

        if(chain.run){
          mode_changer.start('mirror_gif');
        }else if(mirror_gif.run){
          mode_changer.start('corners');
        }else if(corners.run){
          mode_changer.start('hallway');
        }else if(hallway.run){
          mode_changer.start('chain');
        }

      }

      // next mode
      if( gamepad.buttons[8].pressed){
        console.log('select')
        if(chain.run){
          mode_changer.start('mirror_gif');
        }else if(mirror_gif.run){
          mode_changer.start('corners');
        }else if(corners.run){
          mode_changer.start('hallway');
        }else if(hallway.run){
          mode_changer.start('chain');
        }
        

      }

      // D PAD
      if(gamepad.buttons[12].pressed){ // up
        console.log('up');

        if( chain.run ){
          controls.chain_direction_up.press();
          setTimeout(function(){
            controls.chain_direction_up.release();
          },100);
        }

        if( mirror_gif.run ){
          controls.height.change( state.height - 10 )
          
          if( state.height <= 10 ){
            controls.height.change( 100 )
          }

        }

        if( corners.run ){
          images.update.scale( +(state.image_scale + 0.1).toFixed(2) )
          if( state.image_scale > 2 ){ 
            images.update.scale(0.1)
          }
        }

      }
      if(gamepad.buttons[13].pressed){ // down
        console.log('down')
        if( chain.run ){
          controls.chain_direction_down.press();
          setTimeout(function(){
            controls.chain_direction_down.release();
          },100);
        }

        if( mirror_gif.run ){
          controls.height.change( state.height + 10 )
          if( state.height >= 100 ){
            controls.height.change(10)
          }
        }

        if( corners.run ){
          images.update.scale( +(state.image_scale - 0.1 ).toFixed(2) )
          if( state.image_scale <= 0 ){ 
            images.update.scale(2)
          }
        }
        
      }
      if(gamepad.buttons[15].pressed){ // right
        console.log('right')
        if( chain.run ){
          controls.chain_direction_right.press();
          setTimeout(function(){
            controls.chain_direction_right.release();
          },100);
        }

        if( mirror_gif.run ){
          if( state.width == "auto" ){ controls.width.change(200) }
          controls.width.change(state.width + 10)
        }

        if( corners.run ){
          images.update.scale( +(state.image_scale + 0.1).toFixed(2) )
          if( state.image_scale > 2 ){ 
            images.update.scale(0.1)
          }
        }

      }
      if(gamepad.buttons[14].pressed){ // left
        console.log('left')
        if( chain.run ){
          controls.chain_direction_left.press();
          setTimeout(function(){
            controls.chain_direction_left.release();
          },100);
        }

        if( mirror_gif.run ){
          if( state.width == "auto" ){ controls.width.change(200) }
          controls.width.change(state.width - 10)
          if( state.width <= 10 ){ controls.width.change(200) }
        }

        if( corners.run ){
          images.update.scale( +(state.image_scale - 0.1).toFixed(2))
          if( state.image_scale <= 0 ){ 
            images.update.scale(2)
          }
        }
      }

      // analog stick press in
      if(gamepad.buttons[10].pressed){
        console.log(' L stick press')
        chain.update.direction_x(0)
        chain.update.direction_y(0)
        
      }
      if(gamepad.buttons[11].pressed){
        console.log(' R stick press')
        wind.x_offset = 0;
        wind.y_offset = 0;
        
      }

    }
    
    // Update all the analog sticks.
    if(gamepad.axes){
                
      // console.log(gamepad.axes[0],gamepad.axes[1]);
      // console.log(gamepad.axes[2],gamepad.axes[3]);
          

      if( chain.run){

        directionX = ((gamepad.axes[0] + 1) * controls.chain_direction_x.max/2).toFixed(2)
        directionY = ((gamepad.axes[1] + 1) * controls.chain_direction_y.max/2).toFixed(2)

        chain.update.direction_x( directionX )
        chain.update.direction_y( directionY )

      }

      if( chain.run || mirror_gif.run ){
        wind_x = gamepad.axes[2] * 25;
        wind_y = gamepad.axes[3] * 25;

        if( ( wind_x > 5 || wind_x < -5 ) || ( wind_y > 5 || wind_y < -5 ) ){
          wind.run = true;
          wind.x_offset = wind_x;
          wind.y_offset = wind_y;
        }else{
          wind.x_offset = 0;
          wind.y_offset = 0;
        }
      }


      if( mirror_gif.run ){

        

        rotation_value = (Math.floor(state.single_rotate + (gamepad.axes[3] * 10)))%360
        if(rotation_value < 0){ rotation_value = 360 }

        images.update.rotation( rotation_value )

        width = Math.round(state.width + (gamepad.axes[0]*10))
        controls.width.change(width)

        if( gamepad.axes[0] == -1 ){ controls.width.change(state.width-1) }
        if( gamepad.axes[0] == 1 ){ controls.width.change(state.width+1) }

        
      }

      if( corners.run ){

        width = Math.round(state.width + (gamepad.axes[0]*10))
        controls.width.change(width)

        if( gamepad.axes[0] == -1 ){ controls.width.change(state.width + 5) }
        if( gamepad.axes[0] == 1 ){ controls.width.change(state.width - 5) }

        height = Math.round(state.height + (gamepad.axes[1]*10))
        controls.height.change( height )

        if( gamepad.axes[1] == -1 ){ controls.height.change( state.height + 5 ) }
        if( gamepad.axes[1] == 1 ){ controls.height.change( state.height - 5 ) }

        wind_x = gamepad.axes[2] * 50;
        wind_y = gamepad.axes[3] * 50;
        if( ( wind_x > 5 || wind_x < -5 ) || ( wind_y > 5 || wind_y < -5 ) ){

          if( wind_x < 0 ){ wind_x = wind_x * -1 }
          if( wind_y < 0 ){ wind_y = wind_y * -1 }

          wind.run = true;
          wind.x_offset = wind_x;
          wind.y_offset = wind_y;
        }else{
          wind.x_offset = 0;
          wind.y_offset = 0;
        }

      }
    
      if( hallway.run ){

        // hallway_perspective_x_joystick = (gamepad.axes[0]*200)+ 100;
        // controls.hallway_perspective_x.change( hallway_perspective_x_joystick, 'gamepad' );

        // hallway_perspective_y_joystick = (gamepad.axes[1]*200)+ 100;
        // controls.hallway_perspective_y.change( hallway_perspective_y_joystick, 'gamepad' );

        hallway.update.perspective_x( state.hallway_perspective_x + gamepad.axes[0]*.10 )
        hallway.update.perspective_y( state.hallway_perspective_y + gamepad.axes[1]*.10 )

        hallway.update.sides_rotation( state.hallway_sides_rotation + gamepad.axes[2]*10 )
        hallway.update.top_bottom_rotation( state.hallway_top_bottom_rotation + gamepad.axes[3]*10 )
        
      }
    }
  }
}


if( localStorage.gamepad == 'true' ){
  gamepadSupport.init();
}

var bpm_sync = {

  timeoutWaitSeconds: 4,
  count: 0,
  msecsFirst: 0,
  msecsPrevious: 0,
  averageBPM: null,
  averageMS: 461.53,
  refreshInterval: '',

  run_on_beat:function(){

    // this function is defined in run.php

  },

  show_bpm_indicator:function(){
    
    $bpm_indicator = $('<div></div>').css({
      width:'10px',
      height:'10px',
      background:'#fff',
      position:'absolute',
      right:'0px',
      bottom:'0px'
    });

    $('#container').append($bpm_indicator);
    setTimeout(function(){
      $bpm_indicator.remove();
    },500);

  },

  ResetCount: function(){
    bpm_sync.count = 0;
    bpm_sync.averageBPM = null;
  },

  tap_for_bpm: function(e){

    window.clearInterval(bpm_sync.refreshInterval);
    timeSeconds = new Date;
    msecs = timeSeconds.getTime();
    if ((msecs - bpm_sync.msecsPrevious) > 1000 * bpm_sync.timeoutWaitSeconds)
    {
      bpm_sync.count = 0;
    }

    if (bpm_sync.count == 0)
    {
      bpm_sync.averageBPM = null;
      bpm_sync.msecsFirst = msecs;
      bpm_sync.count = 1;
    }
    else
    {
      bpmAvg = 60000 * bpm_sync.count / (msecs - bpm_sync.msecsFirst);
      bpm_sync.averageMS = 60000 / bpmAvg;
      bpm_sync.averageBPM = Math.round(bpmAvg * 100) / 100;
      bpm_sync.count++;
      bpm_sync.refreshInterval = setInterval( "bpm_sync.run_on_beat()" , bpm_sync.averageMS);
    }
    bpm_sync.msecsPrevious = msecs;
    return true;
  }

}







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


// START THE LOOP!!!
run_loop = function(){

  // MIDI listen
  deck.midi.listen();

  // do nothing if gifSlap is paused
  if ( state.paused == true ){
    requestAnimationFrame(run_loop);
    return;
  }

  framerate.update();

  // Addons
  rainbow_bars.draw();
  wind.draw();  
  bg_mod.draw();
  midground.draw();
  
  // Modules
  hallway.draw();
  mirror_gif.draw();
  center_pix.draw();
  circle.draw();  
  chain.draw();
  border_boxes.draw();
  corners.draw();
  
  // Autopilot
  autopilot.modify_params();
  autopilot.draw();

  // Automator
  deck.automator.draw();

  requestAnimationFrame(run_loop);
};

// kick off the loop once the deck has loaded
var loop_waiting = setInterval(function(){

  if( deck !== null ){

    // establish connection to state
    state = deck.state

    // reveal the deck
    deck.deck.win.show();

    // clear the loading message
    $('#loading').remove();

    // kick off the loop
    requestAnimationFrame(run_loop)
    clearInterval(loop_waiting)   

    // save the current gif to state
    deck.updateState( null, 'current_gif_src', images.active_set[images.cursor] )

  }

},100);


// Functions to run on the BPM
bpm_sync.run_on_beat = function(){

  bpm_sync.show_bpm_indicator();
  autopilot.draw();
  bg_mod.zoomer_add();

};
//# sourceMappingURL=maps/main-36032ac219.js.map