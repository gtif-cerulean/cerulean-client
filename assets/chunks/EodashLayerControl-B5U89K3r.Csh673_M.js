var ro=Object.defineProperty;var Mi=e=>{throw TypeError(e)};var ao=(e,t,i)=>t in e?ro(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var P=(e,t,i)=>ao(e,typeof t!="symbol"?t+"":t,i),ii=(e,t,i)=>t.has(e)||Mi("Cannot "+i);var T=(e,t,i)=>(ii(e,t,"read from private field"),i?i.call(e):t.get(e)),_=(e,t,i)=>t.has(e)?Mi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),Ot=(e,t,i,n)=>(ii(e,t,"write to private field"),n?n.call(e,i):t.set(e,i),i),M=(e,t,i)=>(ii(e,t,"access private method"),i);import{x as y,E as st,T as Jt,r as nt,i as Ei,b as ht,u as so,f as lo}from"./lit-element.Cu4xVypU.js";import{n as N}from"./when.BR7zwNJC.js";import{c as co,d as ee}from"./repeat.BiCh9U-B.js";import{e as en,i as nn,t as Rt}from"./directive.CF8sV3Lr.js";import{f as uo,m as ho}from"./directive-helpers.Hs5M0JDY.js";import{o as ve,a as po}from"./map.Co3hxIo-.js";import{c as Ht,g as Ci}from"./commonjsHelpers.BosuxZz1.js";import{b as fo,r as go,c as on,s as mo}from"./slider.C9BfjtDw.js";import{_ as yo}from"./index.D_Wsj7oq.js";import{g as bo,s as vo,l as mi,i as rn,q as wo,t as xo,o as So,p as Eo,f as Co}from"./sequential.f1RtLyuK.js";import"./main.BrFLBcsJ.js";import{L as Oi}from"./Group.DxoWmCIb.js";import"./all.style.BXiFe-7i.js";import{d as To,e as $o,q as _o,k as Ao,r as Ii,t as Vi,v as Do}from"./eo-dash.CqKGLMER.js";import{h as Lo,p as ko,c as Bi,k as Ro,e as Po,o as Ni}from"./framework.BUHMmcSd.js";import"./extent.CiAC4MY_.js";import"./theme.B5SBmdDe.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var S=e=>e!==void 0,an=(e,t,i)=>t in e?e[t]:e[t]=i;const se={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};class Mo{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,i){return ti(t,i).join("")}}function ti(e,t){return sn(e,t,[]).join("")}function sn(e,t,i){if(e.nodeType===se.CDATA_SECTION||e.nodeType===se.TEXT)t?i.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):i.push(e.nodeValue);else{var n;for(n=e.firstChild;n;n=n.nextSibling)sn(n,t,i)}return i}function Oo(e,t,i,n){for(var o=Io(t);o;o=Vo(o)){var r=o.namespaceURI||null,a=e[r];if(S(a)){var s=a[o.localName];S(s)&&s.call(n,o,i)}}}function Io(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==se.ELEMENT;)t=t.nextSibling;return t}function Vo(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==se.ELEMENT;)t=t.nextSibling;return t}function Y(e,t,i){return Bo(e,t,i)}function Bo(e,t,i){var n=S(i)?i:{},o,r;for(o=0,r=e.length;o<r;++o)n[e[o]]=t;return n}function ln(e,t){return function(i,n){var o=e.call(S(t)?t:this,i,n);if(S(o)){var r=n[n.length-1];r.push(o)}}}function F(e,t,i,n,o){return n.push(e),Oo(t,i,n,o),n.pop()}function f(e,t,i){return function(n,o){let r=e.call(S(i)?i:this,n,o);if(S(r)){var a=o[o.length-1],s=S(t)?t:n.localName;a[s]=r}}}function et(e,t,i){return function(n,o){var r=e.call(S(i)?i:this,n,o);if(S(r)){var a=o[o.length-1],s=S(t)?t:n.localName,l=an(a,s,[]);l.push(r)}}}const No=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function Ho(e){return e.replace(No,"")}function Mt(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return S(t[1])||!1}function Ft(e){return bt(ti(e,!1))}function bt(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function ni(e){return $e(ti(e,!1))}function $e(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function $(e){return Ho(ti(e,!1))}const Fo="http://www.w3.org/1999/xlink";function Ti(e){return e.getAttributeNS(Fo,"href")}function Uo(e,t){return F({},gr,e,t)}function cn(e){return[bt(e.getAttribute("minx")),bt(e.getAttribute("miny")),bt(e.getAttribute("maxx")),bt(e.getAttribute("maxy"))]}function zo(e,t){const i=cn(e),n=[bt(e.getAttribute("resx")),bt(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:i,res:n}}function jo(e,t){const i=cn(e);if(!(!S(i[0])||!S(i[1])||!S(i[2])||!S(i[3])))return i}function Yo(e,t){const i=parseFloat(e.getAttribute("min")),n=parseFloat(e.getAttribute("max"));return{min:i,max:n}}function qo(e,t){const i=F({},mr,e,t);if(!S(i))return;const n=i.westBoundLongitude,o=i.southBoundLatitude,r=i.eastBoundLongitude,a=i.northBoundLatitude;if(!(!S(n)||!S(o)||!S(r)||!S(a)))return[n,o,r,a]}function Zo(e,t){return F({},cr,e,t)}function Xo(e,t){return F({},dr,e,t)}function Wo(e,t){return F({},ur,e,t)}function Go(e,t){return F({},hr,e,t)}function Jo(e,t){return F({},pr,e,t)}function Ko(e,t){return F([],fr,e,t)}function Qo(e,t){const i=Mt(e.getAttribute("queryable"));return F({queryable:S(i)?i:!1},hn,e,t)}function tr(e,t){var i=t[t.length-1];const n=F({},hn,e,t);if(!S(n))return;let o=Mt(e.getAttribute("queryable"));S(o)||(o=i.queryable),n.queryable=S(o)?o:!1;let r=$e(e.getAttribute("cascaded"));S(r)||(r=i.cascaded),n.cascaded=r;let a=Mt(e.getAttribute("opaque"));S(a)||(a=i.opaque),n.opaque=S(a)?a:!1;let s=Mt(e.getAttribute("noSubsets"));S(s)||(s=i.noSubsets),n.noSubsets=S(s)?s:!1;let l=bt(e.getAttribute("fixedWidth"));S(l)||(l=i.fixedWidth),n.fixedWidth=l;let c=bt(e.getAttribute("fixedHeight"));S(c)||(c=i.fixedHeight),n.fixedHeight=c;const u=["Style","CRS","AuthorityURL"];for(let p=0,m=u.length;p<m;p++){const g=u[p],b=i[g];if(S(b)){let D=an(n,g,[]);D=D.concat(b),n[g]=D}}const d=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let p=0,m=d.length;p<m;p++){const g=d[p],b=n[g];if(!S(b)){const D=i[g];n[g]=D}}return n}function er(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:Mt(e.getAttribute("multipleValues")),nearestValue:Mt(e.getAttribute("nearestValue")),current:Mt(e.getAttribute("current")),values:$(e)}}function wt(e,t){return F({},Sr,e,t)}function ir(e,t){return F({},yr,e,t)}function nr(e,t){return F({},vr,e,t)}function or(e,t){return F({},wr,e,t)}function oi(e,t){return F({},br,e,t)}function dn(e,t){var i=wt(e,t);if(S(i)){const n=[$e(e.getAttribute("width")),$e(e.getAttribute("height"))];return i.size=n,i}}function rr(e,t){var i=wt(e,t);if(S(i))return i.name=e.getAttribute("name"),i}function ar(e,t){var i=wt(e,t);if(S(i))return i.type=e.getAttribute("type"),i}function sr(e,t){return F({},xr,e,t)}function un(e,t){return F([],Er,e,t)}const q=[null,"http://www.opengis.net/wms"],lr=Y(q,{Service:f(Xo),Capability:f(Zo)}),cr=Y(q,{Request:f(ir),Exception:f(Ko),Layer:f(Qo)}),dr=Y(q,{Name:f($),Title:f($),Abstract:f($),KeywordList:f(un),OnlineResource:f(Ti),ContactInformation:f(Wo),Fees:f($),AccessConstraints:f($),LayerLimit:f(ni),MaxWidth:f(ni),MaxHeight:f(ni)}),ur=Y(q,{ContactPersonPrimary:f(Go),ContactPosition:f($),ContactAddress:f(Jo),ContactVoiceTelephone:f($),ContactFacsimileTelephone:f($),ContactElectronicMailAddress:f($)}),hr=Y(q,{ContactPerson:f($),ContactOrganization:f($)}),pr=Y(q,{AddressType:f($),Address:f($),City:f($),StateOrProvince:f($),PostCode:f($),Country:f($)}),fr=Y(q,{Format:ln($)}),hn=Y(q,{Name:f($),Title:f($),Abstract:f($),KeywordList:f(un),CRS:et($),SRS:et($),EX_GeographicBoundingBox:f(qo),LatLonBoundingBox:f(jo),BoundingBox:et(zo),Dimension:et(er),Attribution:f(Uo),AuthorityURL:et(rr),Identifier:et($),MetadataURL:et(ar),DataURL:et(wt),FeatureListURL:et(wt),Style:et(sr),MinScaleDenominator:f(Ft),MaxScaleDenominator:f(Ft),ScaleHint:f(Yo),Layer:et(tr)}),gr=Y(q,{Title:f($),OnlineResource:f(Ti),LogoURL:f(dn)}),mr=Y(q,{westBoundLongitude:f(Ft),eastBoundLongitude:f(Ft),southBoundLatitude:f(Ft),northBoundLatitude:f(Ft)}),yr=Y(q,{GetCapabilities:f(oi),GetMap:f(oi),GetFeatureInfo:f(oi)}),br=Y(q,{Format:et($),DCPType:et(nr)}),vr=Y(q,{HTTP:f(or)}),wr=Y(q,{Get:f(wt),Post:f(wt)}),xr=Y(q,{Name:f($),Title:f($),Abstract:f($),LegendURL:et(dn),StyleSheetURL:f(wt),StyleURL:f(wt)}),Sr=Y(q,{Format:f($),OnlineResource:f(Ti)}),Er=Y(q,{Keyword:ln($)});class Cr{constructor(t,i){!i&&typeof window<"u"&&(i=window.DOMParser),this.version=void 0,this._parser=new Mo(i),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let i=t.firstChild;i;i=i.nextSibling)if(i.nodeType==se.ELEMENT)return this.readFromNode(i);return null}readFromNode(t){return this.version=t.getAttribute("version"),F({version:this.version},lr,t,[])||null}}async function Tr(e){let t=new URL(e),i=t.searchParams;i.set("SERVICE","WMS"),i.set("REQUEST","GetCapabilities");let n=t.toString();const o=await fetch(n);if(o.ok){const r=await o.text();return new Cr(r).toJSON()}else throw new Error(`Error: ${o.status}`)}function $i(e){const t=/\b(?:wms|ows)\b/i,i=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":i.test(e)?"XYZ":!1}function $r(e){const i=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),n=$i(e);return!!(e&&i&&n)}function pn(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function _r(e){try{return JSON.parse(pn(e)),!!e}catch{return!1}}function Ar(e,t){const i=new URL(e).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{i.set(l,s[l])}):i.set(a,s)});const n=e.split("?")[0],o=i.toString();return`${n}?${o}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Hi(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,n)}return i}function gt(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Hi(Object(i),!0).forEach(function(n){Dr(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Hi(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function we(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?we=function(t){return typeof t}:we=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},we(e)}function Dr(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function xt(){return xt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},xt.apply(this,arguments)}function Lr(e,t){if(e==null)return{};var i={},n=Object.keys(e),o,r;for(r=0;r<n.length;r++)o=n[r],!(t.indexOf(o)>=0)&&(i[o]=e[o]);return i}function kr(e,t){if(e==null)return{};var i=Lr(e,t),n,o;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var Rr="1.15.6";function vt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var St=vt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ue=vt(/Edge/i),Fi=vt(/firefox/i),ie=vt(/safari/i)&&!vt(/chrome/i)&&!vt(/android/i),_i=vt(/iP(ad|od|hone)/i),fn=vt(/chrome/i)&&vt(/android/i),gn={capture:!1,passive:!1};function C(e,t,i){e.addEventListener(t,i,!St&&gn)}function E(e,t,i){e.removeEventListener(t,i,!St&&gn)}function _e(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function mn(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function ut(e,t,i,n){if(e){i=i||document;do{if(t!=null&&(t[0]===">"?e.parentNode===i&&_e(e,t):_e(e,t))||n&&e===i)return e;if(e===i)break}while(e=mn(e))}return null}var Ui=/\s+/g;function ot(e,t,i){if(e&&t)if(e.classList)e.classList[i?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(Ui," ").replace(" "+t+" "," ");e.className=(n+(i?" "+t:"")).replace(Ui," ")}}function v(e,t,i){var n=e&&e.style;if(n){if(i===void 0)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(i=e.currentStyle),t===void 0?i:i[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=i+(typeof i=="string"?"":"px")}}function zt(e,t){var i="";if(typeof e=="string")i=e;else do{var n=v(e,"transform");n&&n!=="none"&&(i=n+" "+i)}while(!t&&(e=e.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function yn(e,t,i){if(e){var n=e.getElementsByTagName(t),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function ft(){var e=document.scrollingElement;return e||document.documentElement}function B(e,t,i,n,o){if(!(!e.getBoundingClientRect&&e!==window)){var r,a,s,l,c,u,d;if(e!==window&&e.parentNode&&e!==ft()?(r=e.getBoundingClientRect(),a=r.top,s=r.left,l=r.bottom,c=r.right,u=r.height,d=r.width):(a=0,s=0,l=window.innerHeight,c=window.innerWidth,u=window.innerHeight,d=window.innerWidth),(t||i)&&e!==window&&(o=o||e.parentNode,!St))do if(o&&o.getBoundingClientRect&&(v(o,"transform")!=="none"||i&&v(o,"position")!=="static")){var p=o.getBoundingClientRect();a-=p.top+parseInt(v(o,"border-top-width")),s-=p.left+parseInt(v(o,"border-left-width")),l=a+r.height,c=s+r.width;break}while(o=o.parentNode);if(n&&e!==window){var m=zt(o||e),g=m&&m.a,b=m&&m.d;m&&(a/=b,s/=g,d/=g,u/=b,l=a+u,c=s+d)}return{top:a,left:s,bottom:l,right:c,width:d,height:u}}}function zi(e,t,i){for(var n=At(e,!0),o=B(e)[t];n;){var r=B(n)[i],a=void 0;if(a=o>=r,!a)return n;if(n===ft())break;n=At(n,!1)}return!1}function Yt(e,t,i,n){for(var o=0,r=0,a=e.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==w.ghost&&(n||a[r]!==w.dragged)&&ut(a[r],i.draggable,e,!1)){if(o===t)return a[r];o++}r++}return null}function Ai(e,t){for(var i=e.lastElementChild;i&&(i===w.ghost||v(i,"display")==="none"||t&&!_e(i,t));)i=i.previousElementSibling;return i||null}function at(e,t){var i=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==w.clone&&(!t||_e(e,t))&&i++;return i}function ji(e){var t=0,i=0,n=ft();if(e)do{var o=zt(e),r=o.a,a=o.d;t+=e.scrollLeft*r,i+=e.scrollTop*a}while(e!==n&&(e=e.parentNode));return[t,i]}function Pr(e,t){for(var i in e)if(e.hasOwnProperty(i)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e[i][n])return Number(i)}return-1}function At(e,t){if(!e||!e.getBoundingClientRect)return ft();var i=e,n=!1;do if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=v(i);if(i.clientWidth<i.scrollWidth&&(o.overflowX=="auto"||o.overflowX=="scroll")||i.clientHeight<i.scrollHeight&&(o.overflowY=="auto"||o.overflowY=="scroll")){if(!i.getBoundingClientRect||i===document.body)return ft();if(n||t)return i;n=!0}}while(i=i.parentNode);return ft()}function Mr(e,t){if(e&&t)for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}function ri(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var ne;function bn(e,t){return function(){if(!ne){var i=arguments,n=this;i.length===1?e.call(n,i[0]):e.apply(n,i),ne=setTimeout(function(){ne=void 0},t)}}}function Or(){clearTimeout(ne),ne=void 0}function vn(e,t,i){e.scrollLeft+=t,e.scrollTop+=i}function wn(e){var t=window.Polymer,i=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):i?i(e).clone(!0)[0]:e.cloneNode(!0)}function xn(e,t,i){var n={};return Array.from(e.children).forEach(function(o){var r,a,s,l;if(!(!ut(o,t.draggable,e,!1)||o.animated||o===i)){var c=B(o);n.left=Math.min((r=n.left)!==null&&r!==void 0?r:1/0,c.left),n.top=Math.min((a=n.top)!==null&&a!==void 0?a:1/0,c.top),n.right=Math.max((s=n.right)!==null&&s!==void 0?s:-1/0,c.right),n.bottom=Math.max((l=n.bottom)!==null&&l!==void 0?l:-1/0,c.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var it="Sortable"+new Date().getTime();function Ir(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(o){if(!(v(o,"display")==="none"||o===w.ghost)){e.push({target:o,rect:B(o)});var r=gt({},e[e.length-1].rect);if(o.thisAnimationDuration){var a=zt(o,!0);a&&(r.top-=a.f,r.left-=a.e)}o.fromRect=r}})}},addAnimationState:function(n){e.push(n)},removeAnimationState:function(n){e.splice(Pr(e,{target:n}),1)},animateAll:function(n){var o=this;if(!this.options.animation){clearTimeout(t),typeof n=="function"&&n();return}var r=!1,a=0;e.forEach(function(s){var l=0,c=s.target,u=c.fromRect,d=B(c),p=c.prevFromRect,m=c.prevToRect,g=s.rect,b=zt(c,!0);b&&(d.top-=b.f,d.left-=b.e),c.toRect=d,c.thisAnimationDuration&&ri(p,d)&&!ri(u,d)&&(g.top-d.top)/(g.left-d.left)===(u.top-d.top)/(u.left-d.left)&&(l=Br(g,p,m,o.options)),ri(d,u)||(c.prevFromRect=u,c.prevToRect=d,l||(l=o.options.animation),o.animate(c,g,d,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(c.animationResetTimer),c.animationResetTimer=setTimeout(function(){c.animationTime=0,c.prevFromRect=null,c.fromRect=null,c.prevToRect=null,c.thisAnimationDuration=null},l),c.thisAnimationDuration=l)}),clearTimeout(t),r?t=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),e=[]},animate:function(n,o,r,a){if(a){v(n,"transition",""),v(n,"transform","");var s=zt(this.el),l=s&&s.a,c=s&&s.d,u=(o.left-r.left)/(l||1),d=(o.top-r.top)/(c||1);n.animatingX=!!u,n.animatingY=!!d,v(n,"transform","translate3d("+u+"px,"+d+"px,0)"),this.forRepaintDummy=Vr(n),v(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),v(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){v(n,"transition",""),v(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function Vr(e){return e.offsetWidth}function Br(e,t,i,n){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-i.top,2)+Math.pow(t.left-i.left,2))*n.animation}var It=[],ai={initializeByDefault:!0},he={mount:function(t){for(var i in ai)ai.hasOwnProperty(i)&&!(i in t)&&(t[i]=ai[i]);It.forEach(function(n){if(n.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),It.push(t)},pluginEvent:function(t,i,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var r=t+"Global";It.forEach(function(a){i[a.pluginName]&&(i[a.pluginName][r]&&i[a.pluginName][r](gt({sortable:i},n)),i.options[a.pluginName]&&i[a.pluginName][t]&&i[a.pluginName][t](gt({sortable:i},n)))})},initializePlugins:function(t,i,n,o){It.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var c=new s(t,i,t.options);c.sortable=t,c.options=t.options,t[l]=c,xt(n,c.defaults)}});for(var r in t.options)if(t.options.hasOwnProperty(r)){var a=this.modifyOption(t,r,t.options[r]);typeof a<"u"&&(t.options[r]=a)}},getEventProperties:function(t,i){var n={};return It.forEach(function(o){typeof o.eventProperties=="function"&&xt(n,o.eventProperties.call(i[o.pluginName],t))}),n},modifyOption:function(t,i,n){var o;return It.forEach(function(r){t[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[i]=="function"&&(o=r.optionListeners[i].call(t[r.pluginName],n))}),o}};function Nr(e){var t=e.sortable,i=e.rootEl,n=e.name,o=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,c=e.newIndex,u=e.oldDraggableIndex,d=e.newDraggableIndex,p=e.originalEvent,m=e.putSortable,g=e.extraEventProperties;if(t=t||i&&i[it],!!t){var b,D=t.options,U="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!St&&!ue?b=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(b=document.createEvent("Event"),b.initEvent(n,!0,!0)),b.to=a||i,b.from=s||i,b.item=o||i,b.clone=r,b.oldIndex=l,b.newIndex=c,b.oldDraggableIndex=u,b.newDraggableIndex=d,b.originalEvent=p,b.pullMode=m?m.lastPutMode:void 0;var L=gt(gt({},g),he.getEventProperties(n,t));for(var X in L)b[X]=L[X];i&&i.dispatchEvent(b),D[U]&&D[U].call(t,b)}}var Hr=["evt"],tt=function(t,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.evt,r=kr(n,Hr);he.pluginEvent.bind(w)(t,i,gt({dragEl:h,parentEl:O,ghostEl:x,rootEl:k,nextEl:Pt,lastDownEl:xe,cloneEl:R,cloneHidden:$t,dragStarted:Kt,putSortable:z,activeSortable:w.active,originalEvent:o,oldIndex:Ut,oldDraggableIndex:oe,newIndex:rt,newDraggableIndex:Tt,hideGhostForTarget:Tn,unhideGhostForTarget:$n,cloneNowHidden:function(){$t=!0},cloneNowShown:function(){$t=!1},dispatchSortableEvent:function(s){Q({sortable:i,name:s,originalEvent:o})}},r))};function Q(e){Nr(gt({putSortable:z,cloneEl:R,targetEl:h,rootEl:k,oldIndex:Ut,oldDraggableIndex:oe,newIndex:rt,newDraggableIndex:Tt},e))}var h,O,x,k,Pt,xe,R,$t,Ut,rt,oe,Tt,fe,z,Bt=!1,Ae=!1,De=[],Lt,dt,si,li,Yi,qi,Kt,Vt,re,ae=!1,ge=!1,Se,J,ci=[],yi=!1,Le=[],ei=typeof document<"u",me=_i,Zi=ue||St?"cssFloat":"float",Fr=ei&&!fn&&!_i&&"draggable"in document.createElement("div"),Sn=function(){if(ei){if(St)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),En=function(t,i){var n=v(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=Yt(t,0,i),a=Yt(t,1,i),s=r&&v(r),l=a&&v(a),c=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+B(r).width,u=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+B(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&s.float!=="none"){var d=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===d)?"vertical":"horizontal"}return r&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||c>=o&&n[Zi]==="none"||a&&n[Zi]==="none"&&c+u>o)?"vertical":"horizontal"},Ur=function(t,i,n){var o=n?t.left:t.top,r=n?t.right:t.bottom,a=n?t.width:t.height,s=n?i.left:i.top,l=n?i.right:i.bottom,c=n?i.width:i.height;return o===s||r===l||o+a/2===s+c/2},zr=function(t,i){var n;return De.some(function(o){var r=o[it].options.emptyInsertThreshold;if(!(!r||Ai(o))){var a=B(o),s=t>=a.left-r&&t<=a.right+r,l=i>=a.top-r&&i<=a.bottom+r;if(s&&l)return n=o}}),n},Cn=function(t){function i(r,a){return function(s,l,c,u){var d=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(r==null&&(a||d))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return i(r(s,l,c,u),a)(s,l,c,u);var p=(a?s:l).options.group.name;return r===!0||typeof r=="string"&&r===p||r.join&&r.indexOf(p)>-1}}var n={},o=t.group;(!o||we(o)!="object")&&(o={name:o}),n.name=o.name,n.checkPull=i(o.pull,!0),n.checkPut=i(o.put),n.revertClone=o.revertClone,t.group=n},Tn=function(){!Sn&&x&&v(x,"display","none")},$n=function(){!Sn&&x&&v(x,"display","")};ei&&!fn&&document.addEventListener("click",function(e){if(Ae)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),Ae=!1,!1},!0);var kt=function(t){if(h){t=t.touches?t.touches[0]:t;var i=zr(t.clientX,t.clientY);if(i){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=i,n.preventDefault=void 0,n.stopPropagation=void 0,i[it]._onDragOver(n)}}},jr=function(t){h&&h.parentNode[it]._isOutsideThisEl(t.target)};function w(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=xt({},t),e[it]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return En(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:w.supportPointer!==!1&&"PointerEvent"in window&&(!ie||_i),emptyInsertThreshold:5};he.initializePlugins(this,e,i);for(var n in i)!(n in t)&&(t[n]=i[n]);Cn(t);for(var o in this)o.charAt(0)==="_"&&typeof this[o]=="function"&&(this[o]=this[o].bind(this));this.nativeDraggable=t.forceFallback?!1:Fr,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?C(e,"pointerdown",this._onTapStart):(C(e,"mousedown",this._onTapStart),C(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(C(e,"dragover",this),C(e,"dragenter",this)),De.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),xt(this,Ir())}w.prototype={constructor:w,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Vt=null)},_getDirection:function(t,i){return typeof this.options.direction=="function"?this.options.direction.call(this,t,i,h):this.options.direction},_onTapStart:function(t){if(t.cancelable){var i=this,n=this.el,o=this.options,r=o.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,u=o.filter;if(Kr(n),!h&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||o.disabled)&&!c.isContentEditable&&!(!this.nativeDraggable&&ie&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=ut(l,o.draggable,n,!1),!(l&&l.animated)&&xe!==l)){if(Ut=at(l),oe=at(l,o.draggable),typeof u=="function"){if(u.call(this,t,l,this)){Q({sortable:i,rootEl:c,name:"filter",targetEl:l,toEl:n,fromEl:n}),tt("filter",i,{evt:t}),r&&t.preventDefault();return}}else if(u&&(u=u.split(",").some(function(d){if(d=ut(c,d.trim(),n,!1),d)return Q({sortable:i,rootEl:d,name:"filter",targetEl:l,fromEl:n,toEl:n}),tt("filter",i,{evt:t}),!0}),u)){r&&t.preventDefault();return}o.handle&&!ut(c,o.handle,n,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,i,n){var o=this,r=o.el,a=o.options,s=r.ownerDocument,l;if(n&&!h&&n.parentNode===r){var c=B(n);if(k=r,h=n,O=h.parentNode,Pt=h.nextSibling,xe=n,fe=a.group,w.dragged=h,Lt={target:h,clientX:(i||t).clientX,clientY:(i||t).clientY},Yi=Lt.clientX-c.left,qi=Lt.clientY-c.top,this._lastX=(i||t).clientX,this._lastY=(i||t).clientY,h.style["will-change"]="all",l=function(){if(tt("delayEnded",o,{evt:t}),w.eventCanceled){o._onDrop();return}o._disableDelayedDragEvents(),!Fi&&o.nativeDraggable&&(h.draggable=!0),o._triggerDragStart(t,i),Q({sortable:o,name:"choose",originalEvent:t}),ot(h,a.chosenClass,!0)},a.ignore.split(",").forEach(function(u){yn(h,u.trim(),di)}),C(s,"dragover",kt),C(s,"mousemove",kt),C(s,"touchmove",kt),a.supportPointer?(C(s,"pointerup",o._onDrop),!this.nativeDraggable&&C(s,"pointercancel",o._onDrop)):(C(s,"mouseup",o._onDrop),C(s,"touchend",o._onDrop),C(s,"touchcancel",o._onDrop)),Fi&&this.nativeDraggable&&(this.options.touchStartThreshold=4,h.draggable=!0),tt("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||i)&&(!this.nativeDraggable||!(ue||St))){if(w.eventCanceled){this._onDrop();return}a.supportPointer?(C(s,"pointerup",o._disableDelayedDrag),C(s,"pointercancel",o._disableDelayedDrag)):(C(s,"mouseup",o._disableDelayedDrag),C(s,"touchend",o._disableDelayedDrag),C(s,"touchcancel",o._disableDelayedDrag)),C(s,"mousemove",o._delayedDragTouchMoveHandler),C(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&C(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var i=t.touches?t.touches[0]:t;Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){h&&di(h),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;E(t,"mouseup",this._disableDelayedDrag),E(t,"touchend",this._disableDelayedDrag),E(t,"touchcancel",this._disableDelayedDrag),E(t,"pointerup",this._disableDelayedDrag),E(t,"pointercancel",this._disableDelayedDrag),E(t,"mousemove",this._delayedDragTouchMoveHandler),E(t,"touchmove",this._delayedDragTouchMoveHandler),E(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,i){i=i||t.pointerType=="touch"&&t,!this.nativeDraggable||i?this.options.supportPointer?C(document,"pointermove",this._onTouchMove):i?C(document,"touchmove",this._onTouchMove):C(document,"mousemove",this._onTouchMove):(C(h,"dragend",this),C(k,"dragstart",this._onDragStart));try{document.selection?Ee(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,i){if(Bt=!1,k&&h){tt("dragStarted",this,{evt:i}),this.nativeDraggable&&C(document,"dragover",jr);var n=this.options;!t&&ot(h,n.dragClass,!1),ot(h,n.ghostClass,!0),w.active=this,t&&this._appendGhost(),Q({sortable:this,name:"start",originalEvent:i})}else this._nulling()},_emulateDragOver:function(){if(dt){this._lastX=dt.clientX,this._lastY=dt.clientY,Tn();for(var t=document.elementFromPoint(dt.clientX,dt.clientY),i=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(dt.clientX,dt.clientY),t!==i);)i=t;if(h.parentNode[it]._isOutsideThisEl(t),i)do{if(i[it]){var n=void 0;if(n=i[it]._onDragOver({clientX:dt.clientX,clientY:dt.clientY,target:t,rootEl:i}),n&&!this.options.dragoverBubble)break}t=i}while(i=mn(i));$n()}},_onTouchMove:function(t){if(Lt){var i=this.options,n=i.fallbackTolerance,o=i.fallbackOffset,r=t.touches?t.touches[0]:t,a=x&&zt(x,!0),s=x&&a&&a.a,l=x&&a&&a.d,c=me&&J&&ji(J),u=(r.clientX-Lt.clientX+o.x)/(s||1)+(c?c[0]-ci[0]:0)/(s||1),d=(r.clientY-Lt.clientY+o.y)/(l||1)+(c?c[1]-ci[1]:0)/(l||1);if(!w.active&&!Bt){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(x){a?(a.e+=u-(si||0),a.f+=d-(li||0)):a={a:1,b:0,c:0,d:1,e:u,f:d};var p="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");v(x,"webkitTransform",p),v(x,"mozTransform",p),v(x,"msTransform",p),v(x,"transform",p),si=u,li=d,dt=r}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!x){var t=this.options.fallbackOnBody?document.body:k,i=B(h,!0,me,!0,t),n=this.options;if(me){for(J=t;v(J,"position")==="static"&&v(J,"transform")==="none"&&J!==document;)J=J.parentNode;J!==document.body&&J!==document.documentElement?(J===document&&(J=ft()),i.top+=J.scrollTop,i.left+=J.scrollLeft):J=ft(),ci=ji(J)}x=h.cloneNode(!0),ot(x,n.ghostClass,!1),ot(x,n.fallbackClass,!0),ot(x,n.dragClass,!0),v(x,"transition",""),v(x,"transform",""),v(x,"box-sizing","border-box"),v(x,"margin",0),v(x,"top",i.top),v(x,"left",i.left),v(x,"width",i.width),v(x,"height",i.height),v(x,"opacity","0.8"),v(x,"position",me?"absolute":"fixed"),v(x,"zIndex","100000"),v(x,"pointerEvents","none"),w.ghost=x,t.appendChild(x),v(x,"transform-origin",Yi/parseInt(x.style.width)*100+"% "+qi/parseInt(x.style.height)*100+"%")}},_onDragStart:function(t,i){var n=this,o=t.dataTransfer,r=n.options;if(tt("dragStart",this,{evt:t}),w.eventCanceled){this._onDrop();return}tt("setupClone",this),w.eventCanceled||(R=wn(h),R.removeAttribute("id"),R.draggable=!1,R.style["will-change"]="",this._hideClone(),ot(R,this.options.chosenClass,!1),w.clone=R),n.cloneId=Ee(function(){tt("clone",n),!w.eventCanceled&&(n.options.removeCloneOnHide||k.insertBefore(R,h),n._hideClone(),Q({sortable:n,name:"clone"}))}),!i&&ot(h,r.dragClass,!0),i?(Ae=!0,n._loopId=setInterval(n._emulateDragOver,50)):(E(document,"mouseup",n._onDrop),E(document,"touchend",n._onDrop),E(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",r.setData&&r.setData.call(n,o,h)),C(document,"drop",n),v(h,"transform","translateZ(0)")),Bt=!0,n._dragStartId=Ee(n._dragStarted.bind(n,i,t)),C(document,"selectstart",n),Kt=!0,window.getSelection().removeAllRanges(),ie&&v(document.body,"user-select","none")},_onDragOver:function(t){var i=this.el,n=t.target,o,r,a,s=this.options,l=s.group,c=w.active,u=fe===l,d=s.sort,p=z||c,m,g=this,b=!1;if(yi)return;function D(Gt,no){tt(Gt,g,gt({evt:t,isOwner:u,axis:m?"vertical":"horizontal",revert:a,dragRect:o,targetRect:r,canSort:d,fromSortable:p,target:n,completed:L,onMove:function(Pi,oo){return ye(k,i,h,o,Pi,B(Pi),t,oo)},changed:X},no))}function U(){D("dragOverAnimationCapture"),g.captureAnimationState(),g!==p&&p.captureAnimationState()}function L(Gt){return D("dragOverCompleted",{insertion:Gt}),Gt&&(u?c._hideClone():c._showClone(g),g!==p&&(ot(h,z?z.options.ghostClass:c.options.ghostClass,!1),ot(h,s.ghostClass,!0)),z!==g&&g!==w.active?z=g:g===w.active&&z&&(z=null),p===g&&(g._ignoreWhileAnimating=n),g.animateAll(function(){D("dragOverAnimationComplete"),g._ignoreWhileAnimating=null}),g!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(n===h&&!h.animated||n===i&&!n.animated)&&(Vt=null),!s.dragoverBubble&&!t.rootEl&&n!==document&&(h.parentNode[it]._isOutsideThisEl(t.target),!Gt&&kt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),b=!0}function X(){rt=at(h),Tt=at(h,s.draggable),Q({sortable:g,name:"change",toEl:i,newIndex:rt,newDraggableIndex:Tt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),n=ut(n,s.draggable,i,!0),D("dragOver"),w.eventCanceled)return b;if(h.contains(t.target)||n.animated&&n.animatingX&&n.animatingY||g._ignoreWhileAnimating===n)return L(!1);if(Ae=!1,c&&!s.disabled&&(u?d||(a=O!==k):z===this||(this.lastPutMode=fe.checkPull(this,c,h,t))&&l.checkPut(this,c,h,t))){if(m=this._getDirection(t,n)==="vertical",o=B(h),D("dragOverValid"),w.eventCanceled)return b;if(a)return O=k,U(),this._hideClone(),D("revert"),w.eventCanceled||(Pt?k.insertBefore(h,Pt):k.appendChild(h)),L(!0);var K=Ai(i,s.draggable);if(!K||Xr(t,m,this)&&!K.animated){if(K===h)return L(!1);if(K&&i===t.target&&(n=K),n&&(r=B(n)),ye(k,i,h,o,n,r,t,!!n)!==!1)return U(),K&&K.nextSibling?i.insertBefore(h,K.nextSibling):i.appendChild(h),O=i,X(),L(!0)}else if(K&&Zr(t,m,this)){var lt=Yt(i,0,s,!0);if(lt===h)return L(!1);if(n=lt,r=B(n),ye(k,i,h,o,n,r,t,!1)!==!1)return U(),i.insertBefore(h,lt),O=i,X(),L(!0)}else if(n.parentNode===i){r=B(n);var A=0,W,ct=h.parentNode!==i,G=!Ur(h.animated&&h.toRect||o,n.animated&&n.toRect||r,m),Zt=m?"top":"left",Et=zi(n,"top","top")||zi(h,"top","top"),Xt=Et?Et.scrollTop:void 0;Vt!==n&&(W=r[Zt],ae=!1,ge=!G&&s.invertSwap||ct),A=Wr(t,n,r,m,G?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,ge,Vt===n);var mt;if(A!==0){var Dt=at(h);do Dt-=A,mt=O.children[Dt];while(mt&&(v(mt,"display")==="none"||mt===x))}if(A===0||mt===n)return L(!1);Vt=n,re=A;var Wt=n.nextElementSibling,Ct=!1;Ct=A===1;var pe=ye(k,i,h,o,n,r,t,Ct);if(pe!==!1)return(pe===1||pe===-1)&&(Ct=pe===1),yi=!0,setTimeout(qr,30),U(),Ct&&!Wt?i.appendChild(h):n.parentNode.insertBefore(h,Ct?Wt:n),Et&&vn(Et,0,Xt-Et.scrollTop),O=h.parentNode,W!==void 0&&!ge&&(Se=Math.abs(W-B(n)[Zt])),X(),L(!0)}if(i.contains(h))return L(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){E(document,"mousemove",this._onTouchMove),E(document,"touchmove",this._onTouchMove),E(document,"pointermove",this._onTouchMove),E(document,"dragover",kt),E(document,"mousemove",kt),E(document,"touchmove",kt)},_offUpEvents:function(){var t=this.el.ownerDocument;E(t,"mouseup",this._onDrop),E(t,"touchend",this._onDrop),E(t,"pointerup",this._onDrop),E(t,"pointercancel",this._onDrop),E(t,"touchcancel",this._onDrop),E(document,"selectstart",this)},_onDrop:function(t){var i=this.el,n=this.options;if(rt=at(h),Tt=at(h,n.draggable),tt("drop",this,{evt:t}),O=h&&h.parentNode,rt=at(h),Tt=at(h,n.draggable),w.eventCanceled){this._nulling();return}Bt=!1,ge=!1,ae=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),bi(this.cloneId),bi(this._dragStartId),this.nativeDraggable&&(E(document,"drop",this),E(i,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),ie&&v(document.body,"user-select",""),v(h,"transform",""),t&&(Kt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),x&&x.parentNode&&x.parentNode.removeChild(x),(k===O||z&&z.lastPutMode!=="clone")&&R&&R.parentNode&&R.parentNode.removeChild(R),h&&(this.nativeDraggable&&E(h,"dragend",this),di(h),h.style["will-change"]="",Kt&&!Bt&&ot(h,z?z.options.ghostClass:this.options.ghostClass,!1),ot(h,this.options.chosenClass,!1),Q({sortable:this,name:"unchoose",toEl:O,newIndex:null,newDraggableIndex:null,originalEvent:t}),k!==O?(rt>=0&&(Q({rootEl:O,name:"add",toEl:O,fromEl:k,originalEvent:t}),Q({sortable:this,name:"remove",toEl:O,originalEvent:t}),Q({rootEl:O,name:"sort",toEl:O,fromEl:k,originalEvent:t}),Q({sortable:this,name:"sort",toEl:O,originalEvent:t})),z&&z.save()):rt!==Ut&&rt>=0&&(Q({sortable:this,name:"update",toEl:O,originalEvent:t}),Q({sortable:this,name:"sort",toEl:O,originalEvent:t})),w.active&&((rt==null||rt===-1)&&(rt=Ut,Tt=oe),Q({sortable:this,name:"end",toEl:O,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){tt("nulling",this),k=h=O=x=Pt=R=xe=$t=Lt=dt=Kt=rt=Tt=Ut=oe=Vt=re=z=fe=w.dragged=w.ghost=w.clone=w.active=null,Le.forEach(function(t){t.checked=!0}),Le.length=si=li=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":h&&(this._onDragOver(t),Yr(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],i,n=this.el.children,o=0,r=n.length,a=this.options;o<r;o++)i=n[o],ut(i,a.draggable,this.el,!1)&&t.push(i.getAttribute(a.dataIdAttr)||Jr(i));return t},sort:function(t,i){var n={},o=this.el;this.toArray().forEach(function(r,a){var s=o.children[a];ut(s,this.options.draggable,o,!1)&&(n[r]=s)},this),i&&this.captureAnimationState(),t.forEach(function(r){n[r]&&(o.removeChild(n[r]),o.appendChild(n[r]))}),i&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,i){return ut(t,i||this.options.draggable,this.el,!1)},option:function(t,i){var n=this.options;if(i===void 0)return n[t];var o=he.modifyOption(this,t,i);typeof o<"u"?n[t]=o:n[t]=i,t==="group"&&Cn(n)},destroy:function(){tt("destroy",this);var t=this.el;t[it]=null,E(t,"mousedown",this._onTapStart),E(t,"touchstart",this._onTapStart),E(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(E(t,"dragover",this),E(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(i){i.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),De.splice(De.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!$t){if(tt("hideClone",this),w.eventCanceled)return;v(R,"display","none"),this.options.removeCloneOnHide&&R.parentNode&&R.parentNode.removeChild(R),$t=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if($t){if(tt("showClone",this),w.eventCanceled)return;h.parentNode==k&&!this.options.group.revertClone?k.insertBefore(R,h):Pt?k.insertBefore(R,Pt):k.appendChild(R),this.options.group.revertClone&&this.animate(h,R),v(R,"display",""),$t=!1}}};function Yr(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function ye(e,t,i,n,o,r,a,s){var l,c=e[it],u=c.options.onMove,d;return window.CustomEvent&&!St&&!ue?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=i,l.draggedRect=n,l.related=o||t,l.relatedRect=r||B(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),u&&(d=u.call(c,l,a)),d}function di(e){e.draggable=!1}function qr(){yi=!1}function Zr(e,t,i){var n=B(Yt(i.el,0,i.options,!0)),o=xn(i.el,i.options,x),r=10;return t?e.clientX<o.left-r||e.clientY<n.top&&e.clientX<n.right:e.clientY<o.top-r||e.clientY<n.bottom&&e.clientX<n.left}function Xr(e,t,i){var n=B(Ai(i.el,i.options.draggable)),o=xn(i.el,i.options,x),r=10;return t?e.clientX>o.right+r||e.clientY>n.bottom&&e.clientX>n.left:e.clientY>o.bottom+r||e.clientX>n.right&&e.clientY>n.top}function Wr(e,t,i,n,o,r,a,s){var l=n?e.clientY:e.clientX,c=n?i.height:i.width,u=n?i.top:i.left,d=n?i.bottom:i.right,p=!1;if(!a){if(s&&Se<c*o){if(!ae&&(re===1?l>u+c*r/2:l<d-c*r/2)&&(ae=!0),ae)p=!0;else if(re===1?l<u+Se:l>d-Se)return-re}else if(l>u+c*(1-o)/2&&l<d-c*(1-o)/2)return Gr(t)}return p=p||a,p&&(l<u+c*r/2||l>d-c*r/2)?l>u+c/2?1:-1:0}function Gr(e){return at(h)<at(e)?1:-1}function Jr(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,i=t.length,n=0;i--;)n+=t.charCodeAt(i);return n.toString(36)}function Kr(e){Le.length=0;for(var t=e.getElementsByTagName("input"),i=t.length;i--;){var n=t[i];n.checked&&Le.push(n)}}function Ee(e){return setTimeout(e,0)}function bi(e){return clearTimeout(e)}ei&&C(document,"touchmove",function(e){(w.active||Bt)&&e.cancelable&&e.preventDefault()});w.utils={on:C,off:E,css:v,find:yn,is:function(t,i){return!!ut(t,i,t,!1)},extend:Mr,throttle:bn,closest:ut,toggleClass:ot,clone:wn,index:at,nextTick:Ee,cancelNextTick:bi,detectDirection:En,getChild:Yt,expando:it};w.get=function(e){return e[it]};w.mount=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(w.utils=gt(gt({},w.utils),n.utils)),he.mount(n)})};w.create=function(e,t){return new w(e,t)};w.version=Rr;var V=[],Qt,vi,wi=!1,ui,hi,ke,te;function Qr(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(i){var n=i.originalEvent;this.sortable.nativeDraggable?C(document,"dragover",this._handleAutoScroll):this.options.supportPointer?C(document,"pointermove",this._handleFallbackAutoScroll):n.touches?C(document,"touchmove",this._handleFallbackAutoScroll):C(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(i){var n=i.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?E(document,"dragover",this._handleAutoScroll):(E(document,"pointermove",this._handleFallbackAutoScroll),E(document,"touchmove",this._handleFallbackAutoScroll),E(document,"mousemove",this._handleFallbackAutoScroll)),Xi(),Ce(),Or()},nulling:function(){ke=vi=Qt=wi=te=ui=hi=null,V.length=0},_handleFallbackAutoScroll:function(i){this._handleAutoScroll(i,!0)},_handleAutoScroll:function(i,n){var o=this,r=(i.touches?i.touches[0]:i).clientX,a=(i.touches?i.touches[0]:i).clientY,s=document.elementFromPoint(r,a);if(ke=i,n||this.options.forceAutoScrollFallback||ue||St||ie){pi(i,this.options,s,n);var l=At(s,!0);wi&&(!te||r!==ui||a!==hi)&&(te&&Xi(),te=setInterval(function(){var c=At(document.elementFromPoint(r,a),!0);c!==l&&(l=c,Ce()),pi(i,o.options,c,n)},10),ui=r,hi=a)}else{if(!this.options.bubbleScroll||At(s,!0)===ft()){Ce();return}pi(i,this.options,At(s,!1),!1)}}},xt(e,{pluginName:"scroll",initializeByDefault:!0})}function Ce(){V.forEach(function(e){clearInterval(e.pid)}),V=[]}function Xi(){clearInterval(te)}var pi=bn(function(e,t,i,n){if(t.scroll){var o=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=ft(),c=!1,u;vi!==i&&(vi=i,Ce(),Qt=t.scroll,u=t.scrollFn,Qt===!0&&(Qt=At(i,!0)));var d=0,p=Qt;do{var m=p,g=B(m),b=g.top,D=g.bottom,U=g.left,L=g.right,X=g.width,K=g.height,lt=void 0,A=void 0,W=m.scrollWidth,ct=m.scrollHeight,G=v(m),Zt=m.scrollLeft,Et=m.scrollTop;m===l?(lt=X<W&&(G.overflowX==="auto"||G.overflowX==="scroll"||G.overflowX==="visible"),A=K<ct&&(G.overflowY==="auto"||G.overflowY==="scroll"||G.overflowY==="visible")):(lt=X<W&&(G.overflowX==="auto"||G.overflowX==="scroll"),A=K<ct&&(G.overflowY==="auto"||G.overflowY==="scroll"));var Xt=lt&&(Math.abs(L-o)<=a&&Zt+X<W)-(Math.abs(U-o)<=a&&!!Zt),mt=A&&(Math.abs(D-r)<=a&&Et+K<ct)-(Math.abs(b-r)<=a&&!!Et);if(!V[d])for(var Dt=0;Dt<=d;Dt++)V[Dt]||(V[Dt]={});(V[d].vx!=Xt||V[d].vy!=mt||V[d].el!==m)&&(V[d].el=m,V[d].vx=Xt,V[d].vy=mt,clearInterval(V[d].pid),(Xt!=0||mt!=0)&&(c=!0,V[d].pid=setInterval((function(){n&&this.layer===0&&w.active._onTouchMove(ke);var Wt=V[this.layer].vy?V[this.layer].vy*s:0,Ct=V[this.layer].vx?V[this.layer].vx*s:0;typeof u=="function"&&u.call(w.dragged.parentNode[it],Ct,Wt,e,ke,V[this.layer].el)!=="continue"||vn(V[this.layer].el,Ct,Wt)}).bind({layer:d}),24))),d++}while(t.bubbleScroll&&p!==l&&(p=At(p,!1)));wi=c}},30),_n=function(t){var i=t.originalEvent,n=t.putSortable,o=t.dragEl,r=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(i){var c=n||r;s();var u=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:i,d=document.elementFromPoint(u.clientX,u.clientY);l(),c&&!c.el.contains(d)&&(a("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function Di(){}Di.prototype={startIndex:null,dragStart:function(t){var i=t.oldDraggableIndex;this.startIndex=i},onSpill:function(t){var i=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=Yt(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(i,o):this.sortable.el.appendChild(i),this.sortable.animateAll(),n&&n.animateAll()},drop:_n};xt(Di,{pluginName:"revertOnSpill"});function Li(){}Li.prototype={onSpill:function(t){var i=t.dragEl,n=t.putSortable,o=n||this.sortable;o.captureAnimationState(),i.parentNode&&i.parentNode.removeChild(i),o.animateAll()},drop:_n};xt(Li,{pluginName:"removeOnSpill"});w.mount(new Qr);w.mount(Li,Di);const ta=e=>{const t=e.item;let i=Array.prototype.slice.call(t.parentNode.childNodes);return i=i.filter(n=>n.nodeType!=Node.ELEMENT_NODE||!n.classList.contains("sortable-fallback")),i},ea=(e,t,i,n,o,r)=>{const s=e.item.parentNode;for(const b of i)s.appendChild(b);if(e.oldIndex==e.newIndex)return;const l=n.getArray(),c=e.item.querySelector("eox-layercontrol-layer").layer.get(o),u=l.find(b=>b.get(o)===c),d=r.dataset.layer,p=l.find(b=>b.get(o)==d);let m,g;for(m=0;m<l.length;m++)if(l[m]==u){n.removeAt(m);break}for(g=0;g<l.length;g++)if(l[g]===p){m>g?n.insertAt(g,u):n.insertAt(g+1,u);break}t.requestUpdate()};function ia(e,t,i,n){let o=[],r=null;e._sortable=w.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>o=ta(a),onMove:a=>{r=a.related},onEnd:a=>ea(a,n,o,t,i,r)})}function na(e,t,i,n){const o=e.getArray();let r=!1;o.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),r=!0),a.get(i)||(a.set(i,`layer ${s}`),r=!0),r&&n.requestUpdate()})}function ki(e,t,i){let n=[];const o=(r,a,s)=>{n=[...n,...r.filter(c=>c.get(a)===s)];const l=r.filter(c=>c.getLayers);return l.length>0&&l.forEach(c=>o(c.getLayers().getArray(),a,s)),n};return o(e,t,i),n}function oa(e,t,i){if(!e||!t)return!1;if(!An(e,i))return!0;const n=e.get("minZoom"),o=e.get("maxZoom"),r=t.getView().getZoom();return r>n&&r<o}function An(e,t){const i=e.get("minZoom"),n=e.get("maxZoom");return!!(t&&(i!==-1/0||n!==1/0))}function ra(e,t){var o,r,a;return!e||!t?void 0:e.getLayers?"group":((a=(o=t.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:o.ol_uid)==null?void 0:a.includes(e.getSource?(r=e.getSource())==null?void 0:r.ol_uid:void 0))?"draw":e.declutter_!==void 0?"vector":"raster"}const aa=(e,t,i)=>{let n=t;return i.layer.getSource().getTileUrlFunction()&&(n||(n=i.layer.getSource().getTileUrlFunction()),i.layer.getSource().setTileUrlFunction((...o)=>Ar(n(...o),e)),i.layer.getSource().setKey(new Date)),n};function sa(e,t,i){const n="updateStyleVariables"in t,o="setStyle"in t,r=n?t.style_:i.style;let a=r==null?void 0:r.variables;if(a){const s=Ri(e);if(r.variables={...a,...s},n)t.updateStyleVariables(s);else if(o){const l=la(r);t.setStyle(l)}}}const Ri=e=>{const t={};for(const i in e)if(typeof e[i]=="object"&&e[i]!==null){const n=Ri(e[i]);for(const o in n)t[o]=n==null?void 0:n[o]}else t[i]=e==null?void 0:e[i];return t};function la(e){let t=e;if("variables"in e){let i=JSON.stringify(e);const{variables:n}=e;for(const o in n)typeof n[o]=="number"?i=i.replaceAll(`["var","${o}"]`,n[o]):i=i.replaceAll(`["var","${o}"]`,`"${n[o]}"`);t=JSON.parse(i)}return t}const ca=(e,t)=>{var i;if(e)return!("domainProperties"in e)||"domain"in e?{...e}:(i=Object.keys(e))==null?void 0:i.reduce((n,o)=>{if(o==="domainProperties"){const r=Ri(t);n.domain=e[o].map(a=>r[a])}else n[o]=e[o];return n},{})};function Dn(e,t){var n;let i={};for(const o in e){const r=e[o].type;if(r&&r!=="object")i[o]=r==="number"?Number(t[o]):t[o];else if(typeof e[o]=="object"&&((n=e[o])!=null&&n.properties)){const a=Dn(e[o].properties,t);Object.keys(a).length>0&&(i[o]=a)}}return i}function da(e,t){var r,a,s,l,c;if(!t)return null;let i={},n="updateStyleVariables"in e?(r=e.style_)==null?void 0:r.variables:(a=t.style)==null?void 0:a.variables;if((t.type==="style"||t.style)&&n)i=n;else if((l=(s=e.getSource())==null?void 0:s.getTileUrlFunction)!=null&&l.call(s)){const u=new URL(e.getSource().getTileUrlFunction()([0,0,0]));i=Object.fromEntries(u.searchParams.entries())}else return null;const o=Dn(((c=t.schema)==null?void 0:c.properties)||t.schema,i);return Object.keys(o).length?o:null}const ua=(e,t)=>e==null?void 0:e.filter(i=>["remove","sort"].filter(n=>t!=null&&t.get("layerControlDisable")?n!=="sort":!0).includes(i)),ha=(e,t)=>e==null?void 0:e.filter(i=>{let n=!0;return["remove","sort"].includes(i)&&(n=!1),i==="info"&&(n=t.get("description")),i==="config"&&(n=t.get("layerConfig")),i==="datetime"&&(n=t.get("layerDatetime")),i==="legend"&&(n=t.get("layerLegend")),n}),pa=(e,t)=>y`
  <button slot="${e}-icon" class="icon">${t?e:st}</button>
`,fa=e=>y`
  <button
    class="remove-icon icon"
    @click=${()=>{const{layer:t}=e;t==null||t.set("layerControlOptional",!0),t==null||t.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:t,bubbles:!0}))}}
  >
    ${e.unstyled?"x":st}
  </button>
`,ga=e=>y`
  <span class="button sort-icon icon drag-handle">
    ${e?"═":st}
  </span>
`,Ln=e=>{var i;const t=["layerControlHide","layerControlOptional"];return(i=e==null?void 0:e.getArray())==null?void 0:i.filter(n=>t.every(o=>!n.get(o)))};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kn=en(class extends nn{constructor(e){if(super(e),e.type!==Rt.PROPERTY&&e.type!==Rt.ATTRIBUTE&&e.type!==Rt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!uo(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Jt||t===st)return t;const i=e.element,n=e.name;if(e.type===Rt.PROPERTY){if(t===i[n])return Jt}else if(e.type===Rt.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(n))return Jt}else if(e.type===Rt.ATTRIBUTE&&i.getAttribute(n)===t+"")return Jt;return ho(e),t}});var Rn="Expected a function",Wi=NaN,ma="[object Symbol]",ya=/^\s+|\s+$/g,ba=/^[-+]0x[0-9a-f]+$/i,va=/^0b[01]+$/i,wa=/^0o[0-7]+$/i,xa=parseInt,Sa=typeof Ht=="object"&&Ht&&Ht.Object===Object&&Ht,Ea=typeof self=="object"&&self&&self.Object===Object&&self,Ca=Sa||Ea||Function("return this")(),Ta=Object.prototype,$a=Ta.toString,_a=Math.max,Aa=Math.min,fi=function(){return Ca.Date.now()};function Da(e,t,i){var n,o,r,a,s,l,c=0,u=!1,d=!1,p=!0;if(typeof e!="function")throw new TypeError(Rn);t=Gi(t)||0,Re(i)&&(u=!!i.leading,d="maxWait"in i,r=d?_a(Gi(i.maxWait)||0,t):r,p="trailing"in i?!!i.trailing:p);function m(A){var W=n,ct=o;return n=o=void 0,c=A,a=e.apply(ct,W),a}function g(A){return c=A,s=setTimeout(U,t),u?m(A):a}function b(A){var W=A-l,ct=A-c,G=t-W;return d?Aa(G,r-ct):G}function D(A){var W=A-l,ct=A-c;return l===void 0||W>=t||W<0||d&&ct>=r}function U(){var A=fi();if(D(A))return L(A);s=setTimeout(U,b(A))}function L(A){return s=void 0,p&&n?m(A):(n=o=void 0,a)}function X(){s!==void 0&&clearTimeout(s),c=0,n=l=o=s=void 0}function K(){return s===void 0?a:L(fi())}function lt(){var A=fi(),W=D(A);if(n=arguments,o=this,l=A,W){if(s===void 0)return g(l);if(d)return s=setTimeout(U,t),m(l)}return s===void 0&&(s=setTimeout(U,t)),a}return lt.cancel=X,lt.flush=K,lt}function La(e,t,i){var n=!0,o=!0;if(typeof e!="function")throw new TypeError(Rn);return Re(i)&&(n="leading"in i?!!i.leading:n,o="trailing"in i?!!i.trailing:o),Da(e,t,{leading:n,maxWait:t,trailing:o})}function Re(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ka(e){return!!e&&typeof e=="object"}function Ra(e){return typeof e=="symbol"||ka(e)&&$a.call(e)==ma}function Gi(e){if(typeof e=="number")return e;if(Ra(e))return Wi;if(Re(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Re(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(ya,"");var i=va.test(e);return i||wa.test(e)?xa(e.slice(2),i?2:8):ba.test(e)?Wi:+e}var Pa=La;const Ji=Ci(Pa);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=e=>e??st;var Pe,Me;class Pn extends nt{constructor(){super();_(this,Pe,Ei`
    .legend-container {
      display: flex;
      justify-content: center;
    }

    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: inherit;
      --cle-font-weight: inherit --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
    }
  `);_(this,Me,"");this.unstyled=!1,this.noShadow=!1,this.layerLegend=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),y`
      <style>
        ${T(this,Pe)}
        ${!this.unstyled&&T(this,Me)}
      </style>
      ${N(this.layerLegend,()=>y`
          <div class="legend-container">
            <!-- Render color-legend-->
            <color-legend
              id="${this.layer.get("id")}"
              width=${this.layerLegend.width??325}
              scaleType="${be(this.layerLegend.scaleType)}"
              markType="${be(this.layerLegend.markType)}"
              titleText="${be(this.layerLegend.title)}"
              .range=${this.layerLegend.range}
              .domain=${this.layerLegend.domain}
              tickFormat="${be(this.layerLegend.tickFormat)}"
              .ticks=${this.layerLegend.ticks??5}
              .tickValues=${this.layerLegend.tickValues}
            >
            </color-legend>
          </div>
        `)}
    `}}Pe=new WeakMap,Me=new WeakMap,P(Pn,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",Pn);var yt,jt,le,ce,xi,Oe,Ie;class Mn extends nt{constructor(){super();_(this,ce);_(this,yt,{});_(this,jt,null);_(this,le);_(this,Oe,Ei`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: inherit;
      --cle-font-weight: inherit --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
    }
  `);_(this,Ie,"");this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=Ji(M(this,ce,xi),1e3)}updated(i){if(i.has("layerConfig")){const n=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=Ji(M(this,ce,xi),n),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){Ot(this,jt,da(this.layer,this.layerConfig)),Object.keys(T(this,yt)).length!==0&&Ot(this,jt,T(this,yt)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const i={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return y`
      <style>
        ${T(this,Oe)}
        ${!this.unstyled&&T(this,Ie)}
      </style>
      ${N(this.layerConfig,()=>y`
          ${N(this.layerConfig.legend,()=>y`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${ca(this.layerConfig.legend,T(this,yt))}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${T(this,jt)}
            .options=${i}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}yt=new WeakMap,jt=new WeakMap,le=new WeakMap,ce=new WeakSet,xi=function(i){Ot(this,yt,i.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?sa(T(this,yt),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):Ot(this,le,aa(T(this,yt),T(this,le),this)),this.requestUpdate()},Oe=new WeakMap,Ie=new WeakMap,P(Mn,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1}});customElements.define("eox-layercontrol-layerconfig",Mn);var Ve,In,Be,Ne;class On extends nt{constructor(){super();_(this,Ve);_(this,Be,"");_(this,Ne,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),y`
      <style>
        ${T(this,Be)}
        ${!this.unstyled&&T(this,Ne)}
      </style>
      ${N(this.layerDatetime,()=>y`
          <!-- Render a Timecontrol for layer date time -->
          <eox-timecontrol
            ?unstyled=${this.unstyled}
            .for=${void 0}
            .layer=${void 0}
            .slider=${this.layerDatetime.slider??!1}
            .disablePlay=${this.layerDatetime.disablePlay??!1}
            .controlValues=${this.layerDatetime.controlValues}
            .controlProperty=${void 0}
            current-step=${this.layerDatetime.currentStep}
            @stepchange=${M(this,Ve,In)}
          ></eox-timecontrol>
        `)}
    `}}Ve=new WeakSet,In=function(i){this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:i.detail.currentStep,layer:this.layer}})),this.layerDatetime.currentStep=i.detail.currentStep,this.requestUpdate()},Be=new WeakMap,Ne=new WeakMap,P(On,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",On);var de,He,Fe;class Vn extends nt{constructor(){super();_(this,de,i=>(this.selectedTab===i||this.toolsAsList)&&"highlighted");_(this,He,`
    .tabbed figure {
      margin: 0;
    }
    .tabbed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div {
      display: flex;
    }
    .tabbed .tab {
      display: none;
    }
    .tabbed .tab.highlighted {
      display: block;
    }
    .tabbed label.highlighted {
      background: lightgrey;
    }
  `);_(this,Fe,`
    .listed {
      background: #ffffff !important;
      display: flex;
      justify-content: end;
    }
    .tabbed {
      font-size: small;
    }
    .tabbed label.highlighted {
      background: #00417011;
      pointer-events: none;
    }
    nav div label,
    nav div span {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    figure {
      background: #00417011;
      border-top: 1px solid #0041701a;
    }
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.tabs,n=this.actions,o=n.length+i.length>1;return y`
      <style>
        ${T(this,He)}
        ${!this.unstyled&&T(this,Fe)}
      </style>
      <div class="tabbed">
        <!-- Navigation for tabs and actions -->
        ${N(o,()=>y`
            <nav>
              ${N(!this.toolsAsList,()=>y`
                  <div>
                    <!-- Labels for tabs -->
                    ${ve(i,(r,a)=>y`
                        <label
                          class=${T(this,de).call(this,a)}
                          @click=${()=>this.selectedTab=a}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${ve(n,r=>y`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure>
          <!-- Content for each tab -->
          ${ve(i,(r,a)=>y`
              ${N(this.toolsAsList,()=>y`
                  <label class="listed">
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${r}-icon`}>${r}</slot>
                  </label>
                `)}
              <div class="tab ${T(this,de).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${r}-content`}>${r}</slot>
              </div>
            `)}
        </figure>
      </div>
    `}}de=new WeakMap,He=new WeakMap,Fe=new WeakMap,P(Vn,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Vn);var Ue,ze;class Bn extends nt{constructor(){super();P(this,"_removeButton",()=>fa(this));P(this,"_sortButton",()=>ga(this.unstyled));P(this,"_button",i=>pa(i,this.unstyled));P(this,"_getDefaultTools",()=>{var i;return y`
      <div slot="info-content">
        ${po(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <!-- Input for opacity -->
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value=${kn((i=this.layer)==null?void 0:i.getOpacity())}
          @input=${n=>this.layer.setOpacity(parseFloat(n.target.value))}
        />
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${N(this.layer.get("layerConfig"),()=>y`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${N(this.layer.get("layerDatetime"),()=>y`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${N(this.layer.get("layerLegend"),()=>y`
            <eox-layercontrol-layer-legend
              slot="legend-content"
              .noShadow=${!0}
              .layerLegend=${this.layer.get("layerLegend")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-legend>
          `)}
      </div>
      <div slot="remove-icon">${this._removeButton()}</div>
      <div slot="sort-icon">${this._sortButton()}</div>
    `});_(this,Ue,"");_(this,ze,`
    ${fo}  
    ${go}
    ${on}
    ${mo}
    .drag-handle {
      cursor: n-resize;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    eox-layercontrol-layer details summary::before {
      content: "";
    }
    details.tools[open] {
      /*border-top: 1px solid #0041703a;*/
    }
    .single-action {
      position: relative;
    }
    details.tools summary .icon {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 0;
      top: -24px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action .icon::before,
    details.tools summary .icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edots-vertical%3C/title%3E%3Cpath d='M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z' /%3E%3C/svg%3E");
    }
    .single-action,
    details.tools summary,
    eox-layercontrol-tools-items button.icon {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    eox-layercontrol-tools-items button.icon {
      opacity: .7;
    }
    eox-layercontrol-tools-items.tools-list button.icon {
      cursor: auto;
    }
    .single-action:hover,
    details.tools summary:hover,
    eox-layercontrol-tools-items button.icon:hover {
      opacity: 1;
    }
    eox-layercontrol-tools-items.tools-list button.icon:hover {
      opacity: .7;
    }
    .tools-placeholder,
    .single-action .icon,
    .single-action .icon::before,
    details.tools summary .icon,
    details.tools summary .icon::before {
      height: 16px;
      width: 16px;
      margin-right: var(--padding);
    }
    eox-layercontrol-tools-items button.icon,
    eox-layercontrol-tools-items .button.icon {
      display: flex;
      justify-content: center;
    }
    eox-layercontrol-tools-items button.icon::before,
    eox-layercontrol-tools-items .button.icon::before {
      width: 16px;
      height: 16px;
    }
    details.tools summary .info-icon,
    button.icon[slot=info-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Einformation-outline%3C/title%3E%3Cpath d='M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z' /%3E%3C/svg%3E");
    }
    details.tools summary .opacity-icon,
    button.icon[slot=opacity-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eopacity%3C/title%3E%3Cpath d='M17.66,8L12,2.35L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8M6,14C6,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 18,12 18,14H6Z' /%3E%3C/svg%3E");
    }
    details.tools summary .config-icon,
    button.icon[slot=config-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Etune%3C/title%3E%3Cpath d='M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z' /%3E%3C/svg%3E");
    }
    details.tools summary .datetime-icon,
    button.icon[slot=datetime-icon]::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eclock-outline%3C/title%3E%3Cpath d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /%3E%3C/svg%3E");
    }
    details.tools summary .legend-icon,
    button.icon[slot=legend-icon]::before {
      content: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Ctitle%3Emap-legend%3C%2Ftitle%3E%3Cpath%20d%3D%22M9%2C3L3.36%2C4.9C3.15%2C4.97%203%2C5.15%203%2C5.38V20.5A0.5%2C0.5%200%200%2C0%203.5%2C21L3.66%2C20.97L9%2C18.9L15%2C21L20.64%2C19.1C20.85%2C19.03%2021%2C18.85%2021%2C18.62V3.5A0.5%2C0.5%200%200%2C0%2020.5%2C3L20.34%2C3.03L15%2C5.1L9%2C3M8%2C5.45V17.15L5%2C18.31V6.46L8%2C5.45M10%2C5.47L14%2C6.87V18.53L10%2C17.13V5.47M19%2C5.7V17.54L16%2C18.55V6.86L19%2C5.7M7.46%2C6.3L5.57%2C6.97V9.12L7.46%2C8.45V6.3M7.46%2C9.05L5.57%2C9.72V11.87L7.46%2C11.2V9.05M7.46%2C11.8L5.57%2C12.47V14.62L7.46%2C13.95V11.8M7.46%2C14.55L5.57%2C15.22V17.37L7.46%2C16.7V14.55Z%22%20%2F%3E%3C%2Fsvg%3E");
    }
    .single-action .remove-icon::before,
    [slot=remove-icon] button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ff0000' viewBox='0 0 24 24'%3E%3Ctitle%3Edelete-outline%3C/title%3E%3Cpath d='M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z' /%3E%3C/svg%3E");
    }
    .single-action .sort-icon::before,
    [slot=sort-icon] .button.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Edrag-horizontal-variant%3C/title%3E%3Cpath d='M21 11H3V9H21V11M21 13H3V15H21V13Z' /%3E%3C/svg%3E");
    }
    [slot=info-content],
    [slot=opacity-content] {
      padding: 12px 6px;
    }
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var l;const i=ua(this.tools,this.layer),n=ha(this.tools,this.layer),o=this[`_${i==null?void 0:i[0]}Button`]?this[`_${i==null?void 0:i[0]}Button`]():st,r=((l=this.tools)==null?void 0:l.length)===1?`${this.tools[0]}-icon`:"",a=i==null?void 0:i.length,s=n==null?void 0:n.length;return y`
      <style>
        ${T(this,Ue)}
        ${!this.unstyled&&T(this,ze)}
      </style>
      ${N(a+s>0,()=>y`
          ${N(a===1&&s===0,()=>y`
              <div class="single-action-container">
                <div class="single-action">${o}</div>
              </div>
            `,()=>y`
              <details
                class="tools"
                open=${this.layer.get("layerControlToolsExpand")||st}
              >
                <summary>
                  <button class="icon ${r}">Tools</button>
                </summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${i}
                  .tabs=${n}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${ve(n,c=>this._button(c))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools()}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}Ue=new WeakMap,ze=new WeakMap,P(Bn,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-tools",Bn);const Ma=e=>{const t=()=>{const i=oa(e.layer,e.map,e.showLayerZoomState);let n=!1;!i&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,n=!0):i&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,n=!0),n&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};An(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t()))},Oa=(e,t)=>{const i=t.layer;i.setVisible(e.target.checked),e.target.checked&&i.get("layerControlExclusive")&&t.closest(".layers > ul").querySelectorAll("eox-layercontrol-layer").forEach(o=>{var r;o.layer!==i&&((r=o.layer)!=null&&r.get("layerControlExclusive"))&&(o.layer.setVisible(!1),o.requestUpdate())}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:i})),t.requestUpdate()};var pt,Nt,Hn,je,Ye;class Nn extends nt{constructor(){super();_(this,pt);P(this,"currLayerVisibilityBasedOnZoom",!0);_(this,je,"");_(this,Ye,`
    ${on}
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      background: #d2e2ee;
      opacity: 0.3;
    }
    .layer {
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 4px 0;
      display: var(--layer-visibility);
    }
    label, span {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .title {
      display: var(--layer-title-visibility);
    }
    [data-type] .title::before {
      width: 20px;
      min-width: 20px;
      height: 20px;
      margin-right: 6px;
      display: var(--layer-type-visibility);
    }
    [data-type] .title.color-swatch::before {
      background: var(--layer-color);
      border-radius: 3px;
      content: "" !important;
      width: 16px;
      min-width: 16px;
      height: 16px;
    }
    [data-type=group] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-outline%3C/title%3E%3Cpath d='M20,18H4V8H20M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z' /%3E%3C/svg%3E");
    }
    [data-type=group] > eox-layercontrol-layer-group > details[open] > summary > eox-layercontrol-layer > .layer > label > .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-open-outline%3C/title%3E%3Cpath d='M6.1,10L4,18V8H21A2,2 0 0,0 19,6H12L10,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H19C19.9,20 20.7,19.4 20.9,18.5L23.2,10H6.1M19,18H6L7.6,12H20.6L19,18Z' /%3E%3C/svg%3E");
    }
    [data-type=raster] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckerboard%3C/title%3E%3Cpath d='M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z' /%3E%3C/svg%3E");
    }
    [data-type=vector] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Eshape-outline%3C/title%3E%3Cpath d='M11,13.5V21.5H3V13.5H11M9,15.5H5V19.5H9V15.5M12,2L17.5,11H6.5L12,2M12,5.86L10.08,9H13.92L12,5.86M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13M17.5,15A2.5,2.5 0 0,0 15,17.5A2.5,2.5 0 0,0 17.5,20A2.5,2.5 0 0,0 20,17.5A2.5,2.5 0 0,0 17.5,15Z' /%3E%3C/svg%3E");
    }
    [data-type=draw] .title::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230041703a' viewBox='0 0 24 24'%3E%3Ctitle%3Evector-square-edit%3C/title%3E%3Cpath d='M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z' /%3E%3C/svg%3E");
    }
  `);this.layer=null,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){Ma(this)}render(){var l;const i=this.layer.getVisible(),n=i?"visible":"",o=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",r=M(this,pt,Nt).call(this,"layerControlDisable")?"disabled":"",a=M(this,pt,Nt).call(this,"layerControlExclusive")?"radio":"checkbox",s=((l=this.tools)==null?void 0:l.length)>0;return y`
      <style>
        ${T(this,je)}
        ${!this.unstyled&&T(this,Ye)}
      </style>
      ${N(this.layer,()=>y`
          <!-- Render the layer -->
          <div class="layer ${n} ${o}">
            <label class="drag-handle ${r}">
              <!-- Input element for layer visibility -->
              <input
                type=${a}
                .checked=${kn(i)}
                @click=${M(this,pt,Hn)}
              />

              <!-- Layer title -->
              <span
                class="title ${M(this,pt,Nt).call(this,"color")?"color-swatch":""}"
                style="--layer-color: ${M(this,pt,Nt).call(this,"color")}"
              >
                ${M(this,pt,Nt).call(this,this.titleProperty)}
              </span>
              ${N(s,()=>y`<span class="tools-placeholder"></span>`)}
            </label>
          </div>

          <!-- Render layer tools -->
          <eox-layercontrol-layer-tools
            .noShadow=${!0}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}pt=new WeakSet,Nt=function(i){var n;return(n=this.layer)==null?void 0:n.get(i)},Hn=function(i){Oa(i,this)},je=new WeakMap,Ye=new WeakMap,P(Nn,"properties",{layer:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer",Nn);var qe,Ze;class Fn extends nt{constructor(){super();_(this,qe,"");_(this,Ze,`
    details summary {
      cursor: pointer;
      display: flex;
    }
    details summary { list-style-type: none; } /* Firefox */
    details summary::-webkit-details-marker { display: none; } /* Chrome */
    details summary::marker { display: none; }
    details summary::before {
      display: var(--layer-visibility);
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
      font-size: 13px;
      width: 24px;
      height: 24px;
      margin: 4px 0;
      transform-origin: center;
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary:before {
      transform: rotate(90deg);
    }
    details[data-children-length="0"] summary::before {
      display: none;
    }
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var o,r;const i=!!((o=this.group)!=null&&o.get("layerControlExpand")),n=(r=Ln(this.group.getLayers()))==null?void 0:r.length;return y`
      <style>
        ${T(this,qe)}
        ${!this.unstyled&&T(this,Ze)}
      </style>
      ${N(this.group,()=>y`
          <!-- Render the details element with the layer control -->
          <details
            open=${i||st}
            data-children-length=${n}
          >
            <summary>
              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${!0}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}qe=new WeakMap,Ze=new WeakMap,P(Fn,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",Fn);const Ia=e=>{const{layers:t,idProperty:i,titleProperty:n,renderRoot:o}=e,r=yo(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>r();if(t&&(t.hasListener("change:length")&&(t==null||t.un("change:length",a)),t.on("change:length",a),t)){const s=o.querySelector("ul");na(t,i,n,e),ia(s,t,i,e)}};var Xe,We;class Un extends nt{constructor(){super();_(this,Xe,"");_(this,We,`
    ul {
      padding: 0;
      margin: 0;
    }
    ul ul {
      padding-left: var(--list-padding);
    }
    li {
      list-style: none;
      padding-left: var(--padding);
    }
    li {
      border-bottom: 1px solid #0041703a;
      border: var(--layer-visibility);
    }
    li:last-child {
      border: none;
    }
    li.sortable-chosen {
      background: #eeea;
    }
    li.sortable-drag {
      opacity: 0;
    }
    li.sortable-ghost {
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}firstUpdated(){Ia(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.layers?Ln(this.layers).reverse():[];return y`
      <style>
        ${T(this,Xe)}
        ${!this.unstyled&&T(this,We)}
      </style>
      <ul>
        ${N(this.layers,()=>y`
            ${co(i,n=>n,n=>y`
                <li
                  data-layer="${n.get(this.idProperty)}"
                  data-type="${ra(n,this.map)}"
                >
                  ${n.getLayers?y`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${n}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:y`
                          <eox-layercontrol-layer
                            .noShadow=${!0}
                            .layer=${n}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}Xe=new WeakMap,We=new WeakMap,P(Un,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",Un);const Va=e=>{const t=e.querySelector("select[name=optional]"),i=t?t.value:null,n=ki(e.layers.getArray(),"layerControlOptional",!0).find(o=>(o.get(e.idProperty)||o.ol_uid)===i);n==null||n.set("layerControlOptional",!1),n==null||n.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(o=>o.requestUpdate()),e.requestUpdate()};var Ge,jn;class zn extends nt{constructor(){super();_(this,Ge);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=ki(this.layers.getArray(),"layerControlOptional",!0);return y`
      <!-- Label for the dropdown -->
      <label for="optional">Optional layers</label>

      <!-- Dropdown select element -->
      <select name="optional" data-cy="optionalLayers">
        <!-- Default placeholder option -->
        <option disabled selected value>
          -- select an optional layer to add --
        </option>

        <!-- Mapping through filtered layers list to generate dropdown options -->
        ${i.map(n=>{const o=n.get(this.idProperty)||n.ol_uid,r=n.get(this.titleProperty),a=`layer ${n.get(this.idProperty)}`;return y` <option value="${o}">${r||a}</option> `})}
      </select>

      <!-- Button to handle adding layers -->
      <button @click="${M(this,Ge,jn)}">add</button>
    `}}Ge=new WeakSet,jn=function(){Va(this)},P(zn,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",zn);const Ba=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},Ki=e=>{const t=JSON.parse(`{"data":${pn(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(i=>{e.eoxMap.addOrUpdateLayer(i)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},Na=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function Ha(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if($i(t)==="XYZ")return{Name:t};try{const i=await Tr(t);e.wmsCapabilities=i}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const Fa=(e,t)=>{const{Name:i}=e,n=$i(t.urlInput)||"XYZ",o={type:"Tile",properties:{id:i,title:i},source:{type:n,url:t.urlInput,params:{LAYERS:i}}};t.jsonInput=JSON.stringify(o)},Ua=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};var j,qn,Zn,Si,Xn,Wn,Te,Je,Ke;class Yn extends nt{constructor(){super();_(this,j);P(this,"urlInput",null);P(this,"jsonInput",null);P(this,"open",null);P(this,"searchLoad",!1);P(this,"wmsCapabilities",null);_(this,Je,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
  `);_(this,Ke,`
    .eox-add {
      background: #f0f2f5;
      border-top: 1px solid #0041701a;
      padding: 0.5rem;
      font-size: small;
    }
    .eox-add-layer-col, .eox-add-layer-tab {
      display: flex;
      width: 100%;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .eox-add-layer-main .open {
      position: relative;
    }
    button.icon.add-icon {
      flex-grow: 1;
    }
    .eox-add-layer-tab li {
      border: 0 !important;
      font-size: smaller;
      padding: 0.2rem 0.7rem;
      background: #f0f2f5;
      border-radius: 4px 4px 0px 0px;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
    }
    .eox-add-layer-tab li.active {
      background: #204270;
      color: white;
      font-weight: 700;
    }
    .relative {
      position: relative
    }
    .eox-add-layer-col.justify-end {
      justify-content: end;
    }
    .eox-add ul {
      max-height: 120px;
      overflow: scroll;
    }
    .eox-add ul li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 0.2rem;
    }
    button.icon {
      justify-content: end;
      transition: opacity .2s;
      opacity: .7;
    }
    button.icon:hover {
      opacity: 1;
    }
    button.icon.add-layer-icon::before {
      width: 16px;
      min-width: 16px;
      height: 16px;
    }
    button.icon.add-icon::before {
      width: 18px;
      min-width: 18px;
      height: 18px;
    }
    .add-icon.icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath xmlns='http://www.w3.org/2000/svg' d='M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z' fill='%23004270'/%3E%3C/svg%3E");
    }
    .add-layer-icon::before {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='%23004270' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .json-add-layer {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplus-thick%3C/title%3E%3Cpath fill='white' d='M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z' /%3E%3C/svg%3E");
    }
    .search-icon::after {
      content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Emagnify%3C/title%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' fill='white' /%3E%3C/svg%3E");
    }
    .search-icon::after, .json-add-layer::before {
      width: 14px;
      min-width: 14px;
      height: 14px;
      display:flex
      margin-right: 6px;
      color: white;
    }
    .search-icon, .json-add-layer {
      padding: 4px 6px;
      height: 28px;
      border-radius: 0px 4px 4px 0px;
      box-shadow: none;
    }
    .json-add-layer {
      position: absolute;
      bottom: 16px;
      right: 14px;
      border-radius: 4px;
      height: 24px;
      padding: 4px;
    }
    input.add-url, textarea.add-layer-input {
      box-sizing: border-box !important;
      width: 100%;
      height: 28px;
      padding: 5px 7px !important;
      border: 1px solid #0004 !important;
      font-size: smaller;
      border-radius: 4px 0px 0px 4px;
    }
    textarea.add-layer-input {
      height: 90px;
      resize: none;
      border-radius: 4px;
    }
    .divider {
      margin: 1rem 0px;
      height: 1px;
      border-top: 1.5px solid #00417059;
      text-align: center;
      position: relative;
    }
    .divider span {
      position: relative;
      top: -.6em;
      padding: 0px 0.5rem;
      background: #f0f2f5;
      color: #00417059;
      font-weight: bold;
      display: inline-block;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.open?"open":"close",n=this.open==="url",o=this.open==="json",r=!$r(this.urlInput)||this.searchLoad?!0:st;return y`
      <style>
        ${T(this,Je)}
        ${!this.unstyled&&T(this,Ke)}
      </style>
      <div class="eox-add-layer-main">
        <div class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <ul class="eox-add-layer-tab ${i}">
            <li
              @click=${()=>M(this,j,Te).call(this,"url")}
              class="${n?"active":""}"
            >
              URL
            </li>
            <li
              @click=${()=>M(this,j,Te).call(this,"json")}
              class="${o?"active":""}"
            >
              JSON
            </li>
          </ul>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon icon"
            @click=${()=>M(this,j,Te).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":""}
          </button>
        </div>
        <div class="eox-add ${i}">
          ${n?y`
              <!-- Input field for URL -->
              <div class="eox-add-layer-col">
                <input 
                  type="text" 
                  class="add-url" 
                  placeholder="Add URL (WMS/XYZ)" 
                  .value="${this.urlInput}" 
                  @input=${M(this,j,qn)}
                >
                </input>
                <!-- Search button for URL -->
                <button 
                  class="search-icon" 
                  disabled=${r} 
                  @click=${M(this,j,Zn)}
                >
                  ${this.unstyled?"Search":""}
                </button>
              </div>

              <!-- Display layers for WMS capabilities -->
              ${this.wmsCapabilities?y`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(a=>{const s=a.Name;return y`
                            <li class="search-list">
                              ${s}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>M(this,j,Si).call(this,a)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:st}
            `:y`
                <!-- Textarea for JSON input -->
                <textarea
                  class="add-layer-input"
                  placeholder="Please put a valid eox-map layer JSON."
                  @input=${M(this,j,Wn)}
                  .value=${this.jsonInput}
                ></textarea>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer"
                  disabled=${_r(this.jsonInput)?st:!0}
                  @click=${M(this,j,Xn)}
                >
                  ${this.unstyled?"Add JSON":""}
                </button>
              `}
        </div>
      </div>
    `}}j=new WeakSet,qn=function(i){Na(i,this)},Zn=async function(){const i=await Ha(this);i&&M(this,j,Si).call(this,i)},Si=function(i){Fa(i,this),Ki(this)},Xn=function(){Ki(this)},Wn=function(i){Ba(i,this)},Te=function(i){Ua(i,this)},Je=new WeakMap,Ke=new WeakMap,P(Yn,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",Yn);const za=(e,t)=>{if(t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const i=t.renderRoot.querySelector("eox-layercontrol-optional-list");i==null||i.requestUpdate()}},Qi=e=>{const t=bo(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};var _t,qt,Jn,Kn,Qe;class Gn extends nt{constructor(){super();_(this,qt);_(this,_t);_(this,Qe,`
    :host, :root {
      font-family: Roboto, sans-serif;
      --padding: 0.5rem;
      --list-padding: 48px;
      --layer-input-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: flex;
      --layer-visibility: block;
      --layer-tools-button-visibility: flex;

      display: block;
      padding: var(--padding) 0;
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1}firstUpdated(){this.eoxMap=Qi(this)}updated(i){i.has("for")&&(this.eoxMap=Qi(this))}get eoxMap(){return T(this,_t)}set eoxMap(i){const n=T(this,_t);Ot(this,_t,i),this.requestUpdate("eoxMap",n)}render(){var o,r,a;const i=(o=this.map)==null?void 0:o.getLayers().getArray(),n=i&&((r=ki(i,"layerControlOptional",!0))==null?void 0:r.length)>0;return y`
      <style>
        ${!this.unstyled&&T(this,Qe)}
        ${this.styleOverride}
      </style>

      <!-- Conditional rendering of add layers component -->
      ${N(this.addExternalLayers&&((a=T(this,_t))==null?void 0:a.addOrUpdateLayer),()=>y`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${T(this,_t)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${N(this.map,()=>y`
          <eox-layercontrol-layer-list
            .noShadow=${!0}
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .showLayerZoomState=${this.showLayerZoomState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            @changed=${M(this,qt,Jn)}
            @datetime:updated=${M(this,qt,Kn)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${N(n,()=>y`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}_t=new WeakMap,qt=new WeakSet,Jn=function(i){za(i,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:i.detail}))},Kn=function(i){this.dispatchEvent(new CustomEvent("datetime:updated",{detail:i.detail}))},Qe=new WeakMap,P(Gn,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol",Gn);const tn=e=>{let t;return typeof e=="string"?t=document.querySelector(e):t=e,t},ja=`
:host {
  display: block;
}
`,Ya=`
button,
.button {
  /* TODO: why does this only work here and not from :root? */
  --primary-color: #004170;
  --primary-color-hover: #004170CC;
  --error-color: #FF5252;

  display: inline-flex;
  position: relative;
  align-items: center;
  color: #fff;
  border-width: 0;
  outline: none;
  border-radius: 4px;
  padding: 16px;
  height: 36px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 1.25px;                           
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition-property: box-shadow, transform, opacity, background;
  transition-duration: 0.28s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

button:hover:not([disabled]):not(.icon),
.button:hover:not([disabled]):not(.icon) {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background: var(--primary-color-hover);
}

button, button:active,
.button, .button:active {
  background: var(--primary-color);
}

button[disabled],
.button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

button.block,
.button.block {
  display: block;
}

button.outline,
.button.outline {
  background: transparent;
  box-shadow: none;
  color: var(--primary-color);
  outline: 1px solid var(--primary-color);
}

button.outline:hover,
.button.outline:hover {
  background: transparent;
}

button.icon,
.button.icon {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  text-indent: -9999px;
}

button.icon-text,
.button.icon-text {
  text-indent: 26px;
}

button.icon-text.block,
.button.icon-text.block {
  text-indent: 20px;
}

button.icon:before, button.icon-text:before,
.button.icon:before, .button.icon-text:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
}

button.icon-text.block:before,
.button.icon-text.block:before {
  text-indent: -54px;
}

button.icon:before,
.button.icon:before {
  width: 24px;
  height: 24px;
  margin-right: 0;
}

button.icon-text:before,
.button.icon-text:before {
  width: 18px;
  height: 18px;
}

button.small,
.button.small {
  height: 28px;
  padding: 12.4px;
  font-size: .75rem;
}

button.smallest.icon, 
button.smallest.icon::before {
  height: 16px;
  width: 16px;
  padding: 0px;
}
`,qa=`
* {
  font-family: Roboto, sans-serif;
}

main {
  text-align: center;
}

${Ya}

button.icon-text.play:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Eplay%3C/title%3E%3Cpath d='M8,5.14V19.14L19,12.14L8,5.14Z' fill='%23fff' /%3E%3C/svg%3E");
}

button.icon-text.pause:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Epause%3C/title%3E%3Cpath d='M14,19H18V5H14M6,19H10V5H6V19Z' fill='%23fff' /%3E%3C/svg%3E");
}

button.icon.previous:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Earrow-left-drop-circle%3C/title%3E%3Cpath d='M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M14,7L9,12L14,17V7Z' fill='%23004170' /%3E%3C/svg%3E");
}

button.icon.next:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctitle%3Earrow-right-drop-circle%3C/title%3E%3Cpath d='M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M10,17L15,12L10,7V17Z' fill='%23004170' /%3E%3C/svg%3E");
}
`;class Za extends nt{static get properties(){return{width:{type:Number},steps:{type:Array}}}constructor(){super(),this.width=0,this.steps=[],this.height=6,this.svgWidth=0,this._yearMarks=[],this._years=[],this._sliderTicks=[]}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.handleResize.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.handleResize.bind(this)),super.disconnectedCallback()}firstUpdated(){this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize()}updated(t){t.has("steps")&&(this.yearMarks=this.calculateYearMarks(),this.sliderTicks=this.calculateSliderTicks(),this.handleResize())}handleResize(){this.svgWidth=this.shadowRoot.querySelector("svg").clientWidth,this.height=this.shadowRoot.querySelector("svg").clientHeight}groupDatesByYear(){const t=[];return this.steps.forEach(i=>{const o=ee(i).year();let r=t.find(a=>a.year===o);r||(r={year:o,dates:[]},t.push(r)),r.dates.push(i)}),t}preprocessDates(){const t=[];this.steps.forEach(i=>{const o=ee(i).year();let r=t.find(a=>a.year===o);r||(r={year:o,ratio:0,dates:[]},t.push(r)),r.dates.push({date:i,isYearMarker:r.dates.length===0})});for(let i of t)i.ratio=i.dates.length/this.steps.length;return t}get sliderTicks(){return this._sliderTicks}set sliderTicks(t){this._sliderTicks=t,this.requestUpdate()}calculateYearBars(){return this._years.flatMap((n,o)=>{const r=this.steps.indexOf(n.dates[0].date)/(this.steps.length-1)*this.width,a=this.steps.indexOf(n.dates[n.dates.length-1].date)/(this.steps.length-1)*this.width,s=Math.max(0,a-r-2),l=[];return l.push(ht`
            <rect
              key=${o}
              x=${r+2/2} // Add half the spacing to the start position
              y="0"
              width=${s}
              height="6"
              fill="#7596A2"
            ></rect>
        `),s>=30&&l.push(ht`
                <text
                  key=${`label-${o}`}
                  x=${r+16}
                  y="26"
                  fill="#555"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${n.year}
                </text>
            `),l})}calculateIndividualTicks(){return this._years.flatMap((t,i)=>{const n=this.steps.length,o=Math.max(1,Math.floor(n/this.width));return t.dates.filter((r,a)=>a%o===0).map((r,a)=>{const l=this.steps.indexOf(r.date)/(this.steps.length-1)*this.width,c=[];return c.push(ht`
                <line
                  key=${i}-${a}
                  x1=${l}
                  y1="0"
                  x2=${l}
                  y2=${r.isYearMarker?12:6}
                  stroke=${r.isYearMarker?"#222":"#7596A2"}
                  stroke-width="1"
                ></line>
              `),r.isYearMarker&&this.density>.03&&this.density<.5&&i%2==0&&c.push(ht`
                  <text
                    key=${`label-${i}`}
                    x=${l+16}
                    y="30"
                    fill="#555"
                    font-size="14"
                    text-anchor="middle"
                  >
                    ${t.year}
                  </text>
                `),c})})}get density(){return this.steps.length/this.width}calculateSliderTicks(){if(this.density<=.5)return this.calculateIndividualTicks();if(this.density>.5&&this.density<10)return this.calculateYearBars();if(this.density>=10)return this.calculateDecadeBars()}calculateDecadeBars(){const n=this._years.reduce((r,a)=>{const s=Math.floor(a.year/10)*10;return r[s]||(r[s]=[]),r[s].push(...a.dates),r},{});return Object.keys(n).flatMap((r,a)=>{const s=this.steps.indexOf(n[r][0].date)/(this.steps.length-1)*this.width,l=this.steps.indexOf(n[r][n[r].length-1].date)/(this.steps.length-1)*this.width,c=Math.max(0,l-s-2),u=[];return u.push(ht`
            <rect
              key=${`decade-${a}`}
              x=${s+2/2}
              y="0"
              width=${c}
              height="6"
              fill="#555"
            ></rect>
        `),c>=30&&u.push(ht`
                <text
                  key=${`decade-label-${a}`}
                  x=${s+18}
                  y="26"
                  fill="#333"
                  font-size="14"
                  text-anchor="middle"
                >
                  ${r}
                </text>
            `),u})}get lines(){const t=this.numLines>this.width/2?this.width/2:this.numLines,i=this.width/(t-1);return Array.from({length:this.numLines},(n,o)=>o*i)}get numLines(){return this.steps?this.steps.length:0}get yearMarks(){return this._yearMarks}set yearMarks(t){this._yearMarks=t,this.requestUpdate()}get years(){return this._years}set years(t){this._years=t,this.requestUpdate()}calculateYearMarks(){this._years=this.preprocessDates(),this.lines.forEach((t,i)=>{ee(this.steps[i]).year()})}isYearLine(t){return this._yearMarks.some(n=>Math.abs(n.position-t)<1)}render(){return y`
      <div class="fill-width" style="margin-top: 3px;">
        <svg
          style="width: ${this.width}px; height: 30px;"
          viewBox="-1 0 ${this.width+2} ${this.height}"
        >
          ${this.sliderTicks}
        </svg>
      </div>
    `}}customElements.define("eox-sliderticks",Za);var Qn={exports:{}};(function(e,t){(function(i,n){e.exports=n()})(Ht,function(){return function(i,n,o){n.prototype.dayOfYear=function(r){var a=Math.round((o(this).startOf("day")-o(this).startOf("year"))/864e5)+1;return r==null?a:this.add(r-a,"day")}}})})(Qn);var Xa=Qn.exports;const Wa=Ci(Xa);var to={exports:{}};(function(e,t){(function(i,n){e.exports=n()})(Ht,function(){var i="day";return function(n,o,r){var a=function(c){return c.add(4-c.isoWeekday(),i)},s=o.prototype;s.isoWeekYear=function(){return a(this).year()},s.isoWeek=function(c){if(!this.$utils().u(c))return this.add(7*(c-this.isoWeek()),i);var u,d,p,m,g=a(this),b=(u=this.isoWeekYear(),d=this.$u,p=(d?r.utc:r)().year(u).startOf("year"),m=4-p.isoWeekday(),p.isoWeekday()>4&&(m+=7),p.add(m,i));return g.diff(b,"week")+1},s.isoWeekday=function(c){return this.$utils().u(c)?this.day()||7:this.day(this.day()%7?c:c-7)};var l=s.startOf;s.startOf=function(c,u){var d=this.$utils(),p=!!d.u(u)||u;return d.p(c)==="isoweek"?p?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(c,u)}}})})(to);var Ga=to.exports;const Ja=Ci(Ga);ee.extend(Wa);ee.extend(Ja);class Ka extends nt{static get properties(){return{controlProperty:{type:String,attribute:"control-property"},controlValues:{type:Array,attribute:"control-values"},for:{type:String},layer:{type:String},slider:{type:Boolean},_originalParams:{type:Object},disablePlay:{type:Boolean,attribute:"disable-play"},currentStep:{type:String,attribute:"current-step"},_animationInterval:{state:!0},_controlSource:{state:!0},_isAnimationPlaying:{state:!0},_newStepIndex:{state:!0},_eoxMap:{state:!0},_width:{state:!0},unstyled:{type:Boolean}}}constructor(){super(),this.controlValues=[],this._newStepIndex=0,this.unstyled=!1,this.disablePlay=!1,this.slider=!1,this.for="eox-map",this.layer="",this.controlProperty=void 0,this._eoxMap=void 0,this._width=300,window.addEventListener("resize",()=>{this._width=this.clientWidth})}next(){this._updateStep(1)}previous(){this._updateStep(-1)}playAnimation(t){t?this._animationInterval=setInterval(()=>this._updateStep(1),500):clearInterval(this._animationInterval),this._isAnimationPlaying=t,this.requestUpdate()}setConfig(t){this.layer=t.layer??this.layer,this.controlProperty=t.controlProperty??this.controlProperty,this.controlValues=t.controlValues??this.controlValues,this.requestUpdate(),this._updateStep(0)}get currentStep(){return this.controlValues[this._newStepIndex]}set currentStep(t){const i=this.controlValues.findIndex(n=>n===t);i>-1?this._newStepIndex=i:console.error(`Unable to find step "${t}" in available times!`)}firstUpdated(){this.updateMap()}updated(t){t.has("for")&&this.updateMap()}updateMap(){const t=tn(this.for);if(t){const i=t;this.eoxMap=i}}get eoxMap(){return this._eoxMap}set eoxMap(t){const i=this._eoxMap;this._eoxMap=t,this.requestUpdate("eoxMap",i)}_updateStep(t=1){var i;t&&(this._newStepIndex=this._newStepIndex+t,this._newStepIndex>this.controlValues.length-1&&(this._newStepIndex=0),this._newStepIndex<0&&(this._newStepIndex=this.controlValues.length-1),this.layer&&this.for&&((i=this._controlSource)==null||i.updateParams({[this.controlProperty]:this.controlValues[this._newStepIndex]})),this.requestUpdate(),this.dispatchEvent(new CustomEvent("stepchange",{detail:{currentStep:this.currentStep}})))}getFlatLayersArray(t){const i=[];i.push(...t);let n=i.filter(o=>o instanceof Oi);for(;n.length;){const o=[];for(let r=0,a=n.length;r<a;r++){const s=n[r].getLayers().getArray();i.push(...s),o.push(...s.filter(l=>l instanceof Oi))}n=o}return i}render(){if(this.layer&&this.for){const i=tn(this.for).map;i.once("loadend",()=>{if(!this._originalParams){const o=this.getFlatLayersArray(i.getLayers().getArray()).find(r=>r.get("id")===this.layer);this._controlSource=o.getSource(),this._originalParams=this._controlSource.getParams()}})}return y`
      <style>
        ${ja}
        ${!this.unstyled&&qa}
      </style>
      <main>
        <div id="controls" part="controls">
          <button
            part="previous"
            class="icon previous"
            @click="${()=>this.previous()}"
          >
            <
          </button>
          <span part="current">${this.controlValues[this._newStepIndex]}</span>
          <button part="next" class="icon next" @click="${()=>this.next()}">
            >
          </button>
        </div>
        <div>
          ${this.disablePlay?st:y`
                <button
                  part="play"
                  class="icon-text ${this._isAnimationPlaying?"pause":"play"}"
                  @click="${()=>this.playAnimation(!this._isAnimationPlaying)}"
                >
                  ${this._isAnimationPlaying?"Pause":"Play"}
                </button>
              `}
          ${this.slider?y`
                <div class="slider-col">
                  <tc-range-slider
                    data="${this.controlValues}"
                    part="slider"
                    value="${this.controlValues[this._newStepIndex]}"
                    style="display: inline-block;"
                    @change="${t=>this._updateStep(this.controlValues.findIndex(i=>i===t.detail.value)-this._newStepIndex)}"
                  ></tc-range-slider>

                  <eox-sliderticks
                    .width="${this._width}"
                    .steps="${this.controlValues}"
                  ></eox-sliderticks>
                </div>
              `:""}
        </div>
      </main>
    `}}customElements.define("eox-timecontrol",Ka);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qa=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ts={attribute:!0,type:String,converter:so,reflect:!1,hasChanged:lo},es=(e=ts,t,i)=>{const{kind:n,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,e),n==="accessor"){const{name:a}=i;return{set(s){const l=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,l,e)},init(s){return s!==void 0&&this.P(a,void 0,e),s}}}if(n==="setter"){const{name:a}=i;return function(s){const l=this[a];t.call(this,s),this.requestUpdate(a,l,e)}}throw Error("Unsupported decorator location: "+n)};function Z(e){return(t,i)=>typeof i=="object"?es(e,t,i):((n,o,r)=>{const a=o.hasOwnProperty(r);return o.constructor.createProperty(r,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(o,r):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ns(e,t){return(i,n,o)=>{const r=a=>{var s;return((s=a.renderRoot)==null?void 0:s.querySelector(e))??null};return is(i,n,{get(){return r(this)}})}}class os{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:i,range:n}=this.cle;this.colorScale=t?vo(t).domain(i):mi().range(n).domain(i).interpolate(rn)}setDiscreteColorScale(){this.colorScale=wo().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=xo().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=So().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=en(class extends nn{constructor(e){var t;if(super(e),e.type!==Rt.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((n=this.nt)!=null&&n.has(r))&&this.st.add(r);return this.render(t)}const i=e.element.classList;for(const r of this.st)r in t||(i.remove(r),this.st.delete(r));for(const r in t){const a=!!t[r];a===this.st.has(r)||(o=this.nt)!=null&&o.has(r)||(a?(i.add(r),this.st.add(r)):(i.remove(r),this.st.delete(r)))}return Jt}});class rs{constructor(t){this.cle=t}render(){const t=this.cle.titleText?y`<p class="legend-title">${this.cle.titleText}</p>`:"",i={hidden:this.cle.scaleType==="categorical"},n={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return y`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${gi(i)}
        width=${this.cle.width}
        height=${this.cle.height}
      >
        <!-- discrete and threshold -->
        <g class="rects">${this.renderDiscreteThreshold()}</g>
        <!-- continuous -->
        ${this.renderContinuous()}
        <!-- axis ticks -->
        ${this.renderAxis()}
      </svg>
      <ul class=${gi(n)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:i,domain:n}=this.cle,o={"legend-item":!0,line:t==="line",circle:t==="circle"};return y`${n.map(r=>y`<li
          class=${gi(o)}
          style="--color:${i(r)}"
        >
          ${r}
        </li>`)}`}renderContinuous(){var d;if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:i,marginLeft:n,marginRight:o,tickSize:r,width:a,range:s}=this.cle,l=this.cle.marginBottom+r,c=this.cle.height+r,u=((d=t.interpolator)==null?void 0:d.call(t))||Eo(rn,s);return ht`<image
      x=${n}
      y=${i}
      width=${a-o-n}
      height=${c-i-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(u).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:i,marginLeft:n,colorScale:o,xScale:r}=this.cle,a=this.cle.height+t,s=this.cle.marginBottom+t,l=o.range(),c=d=>o.invertExtent(d).map(r)[0]||n,u=d=>{let[p,m]=o.invertExtent(d).map(r);return p=p||0,m=m||r.range()[1],m-p};return ht`${l.map(d=>ht`<rect x=${c(d)} y=${i} width=${u(d)} height=${a-i-s} fill=${d}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:i,tickFormat:n,tickFormatter:o,tickValues:r,xScale:a,marginTop:s}=this.cle,l=this.cle.height+i,c=this.cle.marginBottom+i,u=r!=null&&r.length?r:a.ticks.apply(a,[t,n]),d=Math.max(i,0)+3,p=()=>u.map(m=>ht`<g class="tick" transform='translate(${a(m)},0)'>
      <line stroke="currentColor" y2="${i}" y1="${s+c-l}"></line>
      <text fill="currentColor" y="${d}" dy="0.71em">${o(m)}</text>
      </g>`);return ht`<g
      class="x-axis"
      transform="translate(0, ${l-c})"
      text-anchor="middle"
    >${p()}</g>`}getColorRamp(t,i=256){const n=document.createElement("canvas");n.setAttribute("height","1"),n.setAttribute("width",`${i}`);const o=n.getContext("2d");for(let r=0;r<i;r++)o.fillStyle=t(r/(i-1)),o.fillRect(r,0,1,1);return n}}const as=325,ss=32,ls=6,cs=12,ds=16,us=12,eo=5,hs=6,io=".1f",ps=[0,1],fs=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],gs="Color Legend Element",ms="circle",ys="continuous",bs=["domain","range","interpolator","scaleType"],vs=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class ws{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:i,width:n,marginRight:o}=this.cle;switch(t){case"continuous":this.xScale=mi().domain(this.cle.domain).range([i,n-o]);break;case"discrete":case"threshold":this.xScale=mi().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([i,n-o]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,i,n;if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[o,r]=this.xScale.domain();this.cle.tickValues=[o,...((i=(t=this.cle.colorScale)==null?void 0:t.thresholds)==null?void 0:i.call(t))||this.cle.colorScale.domain(),r]}typeof this.cle.tickFormatter!="function"&&((n=this.cle.tickFormat)!=null&&n.length?this.cle.tickFormatter=Co(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||eo,this.cle.tickFormat||io))}}const xs=Ei`
  :host {
    --cle-font-family: sans-serif;
    --cle-font-family-title: var(--cle-font-family);
    --cle-font-size: 0.75rem;
    --cle-font-size-title: 0.875rem;
    --cle-letter-spacing: 0.3px;
    --cle-letter-spacing-title: 0.25px;
    --cle-font-weight: 400;
    --cle-font-weight-title: 500;
    --cle-color: currentColor;
    --cle-background: #fff;
    --cle-padding: 0.375rem;
    --cle-border: none;
    --cle-border-radius: 0;
    --cle-box-sizing: content-box;
    --cle-columns: 2;
    --cle-column-width: auto;
    --cle-item-margin: 0.375rem 0.75rem 0 0;
    --cle-line-width: 24px;
    --cle-line-height: 2px;
    --cle-swatch-size: 10px;
    --cle-swatch-width: var(--cle-swatch-size);
    --cle-swatch-height: var(--cle-swatch-size);
    --cle-swatch-margin: 0 0.5rem 0 0;
  }

  :host([hidden]),
  .hidden {
    display: none !important;
  }

  div.cle-container {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    font-weight: var(--cle-font-weight);
    letter-spacing: var(--cle-letter-spacing);
    color: var(--cle-color);
    background: var(--cle-background);
    display: inline-block;
    padding: var(--cle-padding);
    border: var(--cle-border);
    border-radius: var(--cle-border-radius);
    box-sizing: var(--cle-box-sizing);
  }

  svg {
    display: block;
    overflow: visible;
  }

  svg text {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    fill: var(--cle-color);
  }

  p.legend-title {
    margin: 0;
    font-family: var(--cle-font-family-title);
    font-size: var(--cle-font-size-title);
    font-weight: var(--cle-font-weight-title);
    letter-spacing: var(--cle-letter-spacing-title);
  }

  ul.categorical-container {
    padding: 0;
    margin: 0;
    column-count: var(--cle-columns);
    column-width: var(--cle-column-width);
  }

  .legend-item {
    display: inline-flex;
    align-items: center;
    margin: var(--cle-item-margin);
  }

  .legend-item::before {
    content: "";
    width: var(--cle-swatch-width);
    height: var(--cle-swatch-height);
    margin: var(--cle-swatch-margin);
    background: var(--color);
  }

  .legend-item.line::before {
    width: var(--cle-line-width);
    height: var(--cle-line-height);
  }

  .legend-item.circle::before {
    border-radius: 50%;
  }
`;var H=function(e,t,i,n){var o=arguments.length,r=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let I=class extends nt{constructor(){super(...arguments),this.titleText=gs,this.width=as,this.height=ss,this.marginTop=ls,this.marginRight=cs,this.marginBottom=ds,this.marginLeft=us,this.scaleType=ys,this.domain=ps,this.range=fs,this.markType=ms,this.ticks=eo,this.tickFormat=io,this.tickSize=hs,this.colorScaleSetter=new os(this),this.axisTickSetter=new ws(this),this.renderer=new rs(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const i=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",i)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const i=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",i)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){bs.some(i=>t.has(i))&&this.colorScaleSetter.setColorScale(),vs.some(i=>t.has(i))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};I.styles=[xs];H([Z({type:String})],I.prototype,"titleText",void 0);H([Z({type:Number})],I.prototype,"width",void 0);H([Z({type:Number})],I.prototype,"height",void 0);H([Z({type:Number})],I.prototype,"marginTop",void 0);H([Z({type:Number})],I.prototype,"marginRight",void 0);H([Z({type:Number})],I.prototype,"marginBottom",void 0);H([Z({type:Number})],I.prototype,"marginLeft",void 0);H([Z({type:String})],I.prototype,"scaleType",void 0);H([Z({type:Array})],I.prototype,"domain",void 0);H([Z({type:Array})],I.prototype,"range",void 0);H([Z({type:String})],I.prototype,"markType",void 0);H([Z({type:Number})],I.prototype,"ticks",void 0);H([Z({type:String})],I.prototype,"tickFormat",void 0);H([Z({type:Number})],I.prototype,"tickSize",void 0);H([Z({type:Array})],I.prototype,"tickValues",void 0);H([ns("svg")],I.prototype,"svg",void 0);H([Z({attribute:!1})],I.prototype,"interpolator",null);H([Z({attribute:!1})],I.prototype,"tickFormatter",null);I=H([Qa("color-legend")],I);const Ss={class:"d-flex flex-column fill-height overflow-auto"},Es=["for"],js={__name:"EodashLayerControl",props:{map:{type:String,default:"first"}},setup(e){const t=e,{selectedCompareStac:i,selectedStac:n}=To($o()),o=Lo(()=>t.map==="second"?Ii.value!==null&&i.value!==null:Vi.value!==null&&n.value!==null),r=t.map==="second"?_o:Ao,a=t.map==="second"?Ii:Vi,s=ko(null),l=async d=>{var U;const{layer:p,datetime:m}=d.detail,g=await Do(r,p);let b=[];g&&(await g.fetchCollection(),b=await g.updateLayerJson(m,p.get("id"),t.map));const D=(U=b==null?void 0:b.find(L=>{var X;return((X=L==null?void 0:L.properties)==null?void 0:X.id)==="AnalysisGroup"}))==null?void 0:U.layers;D!=null&&D.length&&(D==null||D.forEach(L=>{L.properties.layerControlExpand=!0,L.properties.layerControlToolsExpand=!0}),a.value.layers=b)};let c;const u=d=>{clearTimeout(c),c=setTimeout(()=>{l(d)},500)};return(d,p)=>(Ni(),Bi("span",Ss,[o.value?(Ni(),Bi("eox-layercontrol",{key:0,for:Ro(a),".tools":["datetime","info","config","legend","opacity"],"onDatetime:updated":u,class:"fill-height",toolsAsList:"true",ref_key:"eoxLayercontrol",ref:s},null,40,Es)):Po("v-if",!0)]))}};export{js as default};
