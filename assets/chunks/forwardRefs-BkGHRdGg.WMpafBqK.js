import{p as v,H as w}from"./eo-dash.BIm2sYY-.js";import{D as x,h as R,q as b}from"./framework.CxY9FQpQ.js";class p{constructor(r){let{x:n,y:i,width:s,height:t}=r;this.x=n,this.y=i,this.width=s,this.height=t}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function O(e,r){return{x:{before:Math.max(0,r.left-e.left),after:Math.max(0,e.right-r.right)},y:{before:Math.max(0,r.top-e.top),after:Math.max(0,e.bottom-r.bottom)}}}function P(e){return Array.isArray(e)?new p({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function B(e){const r=e.getBoundingClientRect(),n=getComputedStyle(e),i=n.transform;if(i){let s,t,o,a,f;if(i.startsWith("matrix3d("))s=i.slice(9,-1).split(/, /),t=+s[0],o=+s[5],a=+s[12],f=+s[13];else if(i.startsWith("matrix("))s=i.slice(7,-1).split(/, /),t=+s[0],o=+s[3],a=+s[4],f=+s[5];else return new p(r);const c=n.transformOrigin,u=r.x-a-(1-t)*parseFloat(c),l=r.y-f-(1-o)*parseFloat(c.slice(c.indexOf(" ")+1)),h=t?r.width/t:e.offsetWidth+1,d=o?r.height/o:e.offsetHeight+1;return new p({x:u,y:l,width:h,height:d})}else return new p(r)}function z(e,r,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(r,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(s=>{i.onfinish=()=>{s(i)}})),i}const I="cubic-bezier(0.4, 0, 0.2, 1)",C="cubic-bezier(0.0, 0, 0.2, 1)",D="cubic-bezier(0.4, 0, 1, 1)",S=v({eager:Boolean},"lazy");function _(e,r){const n=x(!1),i=R(()=>n.value||e.eager||r.value);b(r,()=>n.value=!0);function s(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:i,onAfterLeave:s}}function A(){const r=w("useScopeId").vnode.scopeId;return{scopeId:r?{[r]:""}:void 0}}const g=Symbol("Forwarded refs");function m(e,r){let n=e;for(;n;){const i=Reflect.getOwnPropertyDescriptor(n,r);if(i)return i;n=Object.getPrototypeOf(n)}}function F(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return e[g]=n,new Proxy(e,{get(s,t){if(Reflect.has(s,t))return Reflect.get(s,t);if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const o of n)if(o.value&&Reflect.has(o.value,t)){const a=Reflect.get(o.value,t);return typeof a=="function"?a.bind(o.value):a}}},has(s,t){if(Reflect.has(s,t))return!0;if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const o of n)if(o.value&&Reflect.has(o.value,t))return!0;return!1},set(s,t,o){if(Reflect.has(s,t))return Reflect.set(s,t,o);if(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))return!1;for(const a of n)if(a.value&&Reflect.has(a.value,t))return Reflect.set(a.value,t,o);return!1},getOwnPropertyDescriptor(s,t){var a;const o=Reflect.getOwnPropertyDescriptor(s,t);if(o)return o;if(!(typeof t=="symbol"||t.startsWith("$")||t.startsWith("__"))){for(const f of n){if(!f.value)continue;const c=m(f.value,t)??("_"in f.value?m((a=f.value._)==null?void 0:a.setupState,t):void 0);if(c)return c}for(const f of n){const c=f.value&&f.value[g];if(!c)continue;const u=c.slice();for(;u.length;){const l=u.shift(),h=m(l.value,t);if(h)return h;const d=l.value&&l.value[g];d&&u.push(...d)}}}}})}export{p as B,_ as a,z as b,O as c,C as d,D as e,F as f,P as g,S as m,B as n,I as s,A as u};
