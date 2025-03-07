import{p as W,h as T,ap as je,q as F,Y as qe,G as I,K as j,aM as $e,as as ze,aN as Ye,at as Ue,F as Ge,L as pe,ag as Le,D as K,s as ue,S as Ke,ao as V,v as Xe,T as Ze,P as fe,ah as Me,ak as Qe,V as Je}from"./framework.CidR4_Xy.js";import{O as et,Q as X,a3 as ve,a0 as tt,a4 as nt,R as ot,a5 as at,T as rt,a6 as q,a7 as it,a8 as de,U as lt,a9 as H,aa as st,Y as ct,Z as ut,ab as we,u as ft,ac as vt,ad as dt,ae as be,af as oe,ag as ae,ah as Ee,ai as Se,aj as xe,ak as mt,al as yt,am as Re,an as Be}from"./eo-dash.CM85q-wY.js";import{a as gt,u as ht,b as wt,m as bt,g as Et,B as re,c as Oe,n as St,s as xt}from"./forwardRefs-lhDuXD-N.BtU2tj7L.js";import{M as Ot,m as kt}from"./transition-DHEuQX4I.CUJ442Dj.js";const Q=new WeakMap;function Pt(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=Be(t),r=Q.get(e);if(n[t]==null)r==null||r.forEach(i=>{const[c,a]=i;c===o&&(e.removeEventListener(o,a),r.delete(i))});else if(!r||![...r].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=r||new Set;i.add([o,n[t]]),Q.has(e)||Q.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Ct(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=Be(t),r=Q.get(e);r==null||r.forEach(i=>{const[c,a]=i;c===o&&(e.removeEventListener(o,a),r.delete(i))})}else e.removeAttribute(t)})}function Fe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function At(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Tt(e):me(e))return e;e=e.parentElement}return document.scrollingElement}function ee(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(me(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function me(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Tt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function pt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function Lt(){return!0}function Ne(e,n,t){if(!e||_e(e,t)===!1)return!1;const o=Fe(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const r=(typeof t.value=="object"&&t.value.include||(()=>[]))();return r.push(n),!r.some(i=>i==null?void 0:i.contains(e.target))}function _e(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Lt)(e)}function Mt(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;e.shadowTarget=e.target,n._clickOutside.lastMousedownWasOutside&&Ne(e,n,t)&&setTimeout(()=>{_e(e,t)&&o&&o(e)},0)}function ke(e,n){const t=Fe(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Rt={mounted(e,n){const t=r=>Mt(r,e,n),o=r=>{e._clickOutside.lastMousedownWasOutside=Ne(r,e,n)};ke(e,r=>{r.addEventListener("click",t,!0),r.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},beforeUnmount(e,n){e._clickOutside&&(ke(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:r}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",r,!0)}),delete e._clickOutside[n.instance.$.uid])}};function ie(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Bt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Pe(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,r=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ie({x:r,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,r=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ie({x:r,y:i},n)}return ie({x:n.width/2,y:n.height/2},n)}const He={static:_t,connected:Vt},Ft=X({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in He},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Nt(e,n){const t=W({}),o=W();q&&de(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var c,a;F(()=>e.locationStrategy,i),V(()=>{window.removeEventListener("resize",r),o.value=void 0}),window.addEventListener("resize",r,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(c=e.locationStrategy(n,e,t))==null?void 0:c.updateLocation:o.value=(a=He[e.locationStrategy](n,e,t))==null?void 0:a.updateLocation});function r(i){var c;(c=o.value)==null||c.call(o,i)}return{contentStyles:t,updateLocation:o}}function _t(){}function Ht(e,n){const t=St(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Vt(e,n,t){(Array.isArray(e.target.value)||pt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:r,preferredOrigin:i}=dt(()=>{const d=be(n.location,e.isRtl.value),f=n.origin==="overlap"?d:n.origin==="auto"?oe(d):be(n.origin,e.isRtl.value);return d.side===f.side&&d.align===ae(f).align?{preferredAnchor:Ee(d),preferredOrigin:Ee(f)}:{preferredAnchor:d,preferredOrigin:f}}),[c,a,u,v]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>T(()=>{const f=parseFloat(n[d]);return isNaN(f)?1/0:f})),s=T(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let b=!1;const O=new ResizeObserver(()=>{b&&x()});F([e.target,e.contentEl],(d,f)=>{let[P,C]=d,[E,w]=f;E&&!Array.isArray(E)&&O.unobserve(E),P&&!Array.isArray(P)&&O.observe(P),w&&O.unobserve(w),C&&O.observe(C)},{immediate:!0}),V(()=>{O.disconnect()});function x(){if(b=!1,requestAnimationFrame(()=>b=!0),!e.target.value||!e.contentEl.value)return;const d=Et(e.target.value),f=Ht(e.contentEl.value,e.isRtl.value),P=ee(e.contentEl.value),C=12;P.length||(P.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=P.reduce((S,h)=>{const m=h.getBoundingClientRect(),g=new re({x:h===document.documentElement?0:m.x,y:h===document.documentElement?0:m.y,width:h.clientWidth,height:h.clientHeight});return S?new re({x:Math.max(S.left,g.left),y:Math.max(S.top,g.top),width:Math.min(S.right,g.right)-Math.max(S.left,g.left),height:Math.min(S.bottom,g.bottom)-Math.max(S.top,g.top)}):g},void 0);E.x+=C,E.y+=C,E.width-=C*2,E.height-=C*2;let w={anchor:r.value,origin:i.value};function p(S){const h=new re(f),m=Pe(S.anchor,d),g=Pe(S.origin,h);let{x:N,y:_}=Bt(m,g);switch(S.anchor.side){case"top":_-=s.value[0];break;case"bottom":_+=s.value[0];break;case"left":N-=s.value[0];break;case"right":N+=s.value[0];break}switch(S.anchor.align){case"top":_-=s.value[1];break;case"bottom":_+=s.value[1];break;case"left":N-=s.value[1];break;case"right":N+=s.value[1];break}return h.x+=N,h.y+=_,h.width=Math.min(h.width,u.value),h.height=Math.min(h.height,v.value),{overflows:Oe(h,E),x:N,y:_}}let M=0,B=0;const k={x:0,y:0},l={x:!1,y:!1};let L=-1;for(;!(L++>10);){const{x:S,y:h,overflows:m}=p(w);M+=S,B+=h,f.x+=S,f.y+=h;{const g=Se(w.anchor),N=m.x.before||m.x.after,_=m.y.before||m.y.after;let $=!1;if(["x","y"].forEach(A=>{if(A==="x"&&N&&!l.x||A==="y"&&_&&!l.y){const D={anchor:{...w.anchor},origin:{...w.origin}},z=A==="x"?g==="y"?ae:oe:g==="y"?oe:ae;D.anchor=z(D.anchor),D.origin=z(D.origin);const{overflows:Y}=p(D);(Y[A].before<=m[A].before&&Y[A].after<=m[A].after||Y[A].before+Y[A].after<(m[A].before+m[A].after)/2)&&(w=D,$=l[A]=!0)}}),$)continue}m.x.before&&(M+=m.x.before,f.x+=m.x.before),m.x.after&&(M-=m.x.after,f.x-=m.x.after),m.y.before&&(B+=m.y.before,f.y+=m.y.before),m.y.after&&(B-=m.y.after,f.y-=m.y.after);{const g=Oe(f,E);k.x=E.width-g.x.before-g.x.after,k.y=E.height-g.y.before-g.y.after,M+=g.x.before,f.x+=g.x.before,B+=g.y.before,f.y+=g.y.before}break}const ne=Se(w.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${w.anchor.side} ${w.anchor.align}`,transformOrigin:`${w.origin.side} ${w.origin.align}`,top:H(le(B)),left:e.isRtl.value?void 0:H(le(M)),right:e.isRtl.value?H(le(-M)):void 0,minWidth:H(ne==="y"?Math.min(c.value,d.width):c.value),maxWidth:H(Ce(xe(k.x,c.value===1/0?0:c.value,u.value))),maxHeight:H(Ce(xe(k.y,a.value===1/0?0:a.value,v.value)))}),{available:k,contentBox:f}}return F(()=>[r.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>x()),fe(()=>{const d=x();if(!d)return;const{available:f,contentBox:P}=d;P.height>f.y&&requestAnimationFrame(()=>{x(),requestAnimationFrame(()=>{x()})})}),{updateLocation:x}}function le(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ce(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let se=!0;const te=[];function Dt(e){!se||te.length?(te.push(e),ce()):(se=!1,e(),ce())}let Ae=-1;function ce(){cancelAnimationFrame(Ae),Ae=requestAnimationFrame(()=>{const e=te.shift();e&&e(),te.length?ce():se=!0})}const J={none:null,close:jt,block:qt,reposition:$t},It=X({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"VOverlay-scroll-strategies");function Wt(e,n){if(!q)return;let t;ue(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Me(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=J[e.scrollStrategy])==null||o.call(J,n,e,t)}))}),V(()=>{t==null||t.stop()})}function jt(e){function n(t){e.isActive.value=!1}Ve(e.targetEl.value??e.contentEl.value,n)}function qt(e,n){var c;const t=(c=e.root.value)==null?void 0:c.offsetParent,o=[...new Set([...ee(e.targetEl.value,n.contained?t:void 0),...ee(e.contentEl.value,n.contained?t:void 0)])].filter(a=>!a.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,i=(a=>me(a)&&a)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((a,u)=>{a.style.setProperty("--v-body-scroll-x",H(-a.scrollLeft)),a.style.setProperty("--v-body-scroll-y",H(-a.scrollTop)),a!==document.documentElement&&a.style.setProperty("--v-scrollbar-offset",H(r)),a.classList.add("v-overlay-scroll-blocked")}),V(()=>{o.forEach((a,u)=>{const v=parseFloat(a.style.getPropertyValue("--v-body-scroll-x")),s=parseFloat(a.style.getPropertyValue("--v-body-scroll-y")),b=a.style.scrollBehavior;a.style.scrollBehavior="auto",a.style.removeProperty("--v-body-scroll-x"),a.style.removeProperty("--v-body-scroll-y"),a.style.removeProperty("--v-scrollbar-offset"),a.classList.remove("v-overlay-scroll-blocked"),a.scrollLeft=-v,a.scrollTop=-s,a.style.scrollBehavior=b}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function $t(e,n,t){let o=!1,r=-1,i=-1;function c(a){Dt(()=>{var s,b;const u=performance.now();(b=(s=e.updateLocation).value)==null||b.call(s,a),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?a=>a():requestIdleCallback)(()=>{t.run(()=>{Ve(e.targetEl.value??e.contentEl.value,a=>{o?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{c(a)})})):c(a)})})}),V(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(r)})}function Ve(e,n){const t=[document,...ee(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),V(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const zt=Symbol.for("vuetify:v-menu"),Yt=X({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Ut(e,n){let t=()=>{};function o(c){t==null||t();const a=Number(c?e.openDelay:e.closeDelay);return new Promise(u=>{t=mt(a,()=>{n==null||n(c),u(c)})})}function r(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:r,runCloseDelay:i}}const Gt=X({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Yt()},"VOverlay-activator");function Kt(e,n){let{isActive:t,isTop:o,contentEl:r}=n;const i=ve("useActivator"),c=W();let a=!1,u=!1,v=!0;const s=T(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),b=T(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!s.value),{runOpenDelay:O,runCloseDelay:x}=Ut(e,l=>{l===(e.openOnHover&&a||s.value&&u)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(v=!0),t.value=l)}),d=W(),f={onClick:l=>{l.stopPropagation(),c.value=l.currentTarget||l.target,t.value||(d.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var L;(L=l.sourceCapabilities)!=null&&L.firesTouchEvents||(a=!0,c.value=l.currentTarget||l.target,O())},onMouseleave:l=>{a=!1,x()},onFocus:l=>{vt(l.target,":focus-visible")!==!1&&(u=!0,l.stopPropagation(),c.value=l.currentTarget||l.target,O())},onBlur:l=>{u=!1,l.stopPropagation(),x()}},P=T(()=>{const l={};return b.value&&(l.onClick=f.onClick),e.openOnHover&&(l.onMouseenter=f.onMouseenter,l.onMouseleave=f.onMouseleave),s.value&&(l.onFocus=f.onFocus,l.onBlur=f.onBlur),l}),C=T(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{a=!0,O()},l.onMouseleave=()=>{a=!1,x()}),s.value&&(l.onFocusin=()=>{u=!0,O()},l.onFocusout=()=>{u=!1,x()}),e.closeOnContentClick){const L=pe(zt,null);l.onClick=()=>{t.value=!1,L==null||L.closeParents()}}return l}),E=T(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{v&&(a=!0,v=!1,O())},l.onMouseleave=()=>{a=!1,x()}),l});F(o,l=>{var L;l&&(e.openOnHover&&!a&&(!s.value||!u)||s.value&&!u&&(!e.openOnHover||!a))&&!((L=r.value)!=null&&L.contains(document.activeElement))&&(t.value=!1)}),F(t,l=>{l||setTimeout(()=>{d.value=void 0})},{flush:"post"});const w=we();ue(()=>{w.value&&fe(()=>{c.value=w.el})});const p=we(),M=T(()=>e.target==="cursor"&&d.value?d.value:p.value?p.el:De(e.target,i)||c.value),B=T(()=>Array.isArray(M.value)?void 0:M.value);let k;return F(()=>!!e.activator,l=>{l&&q?(k=Me(),k.run(()=>{Xt(e,i,{activatorEl:c,activatorEvents:P})})):k&&k.stop()},{flush:"post",immediate:!0}),V(()=>{k==null||k.stop()}),{activatorEl:c,activatorRef:w,target:M,targetEl:B,targetRef:p,activatorEvents:P,contentEvents:C,scrimEvents:E}}function Xt(e,n,t){let{activatorEl:o,activatorEvents:r}=t;F(()=>e.activator,(u,v)=>{if(v&&u!==v){const s=a(v);s&&c(s)}u&&fe(()=>i())},{immediate:!0}),F(()=>e.activatorProps,()=>{i()}),V(()=>{c()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Pt(u,j(r.value,v))}function c(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ct(u,j(r.value,v))}function a(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const v=De(u,n);return o.value=(v==null?void 0:v.nodeType)===Node.ELEMENT_NODE?v:void 0,o.value}}function De(e,n){var o,r;if(!e)return;let t;if(e==="parent"){let i=(r=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:r.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Zt(){if(!q)return K(!1);const{ssr:e}=ft();if(e){const n=K(!1);return Xe(()=>{n.value=!0}),n}else return K(!0)}const Te=Symbol.for("vuetify:stack"),G=Le([]);function Qt(e,n,t){const o=ve("useStack"),r=!t,i=pe(Te,void 0),c=Le({activeChildren:new Set});Je(Te,c);const a=K(+n.value);de(e,()=>{var b;const s=(b=G.at(-1))==null?void 0:b[1];a.value=s?s+10:+n.value,r&&G.push([o.uid,a.value]),i==null||i.activeChildren.add(o.uid),V(()=>{if(r){const O=Qe(G).findIndex(x=>x[0]===o.uid);G.splice(O,1)}i==null||i.activeChildren.delete(o.uid)})});const u=K(!0);r&&ue(()=>{var b;const s=((b=G.at(-1))==null?void 0:b[0])===o.uid;setTimeout(()=>u.value=s)});const v=T(()=>!c.activeChildren.size);return{globalTop:Ke(u),localTop:v,stackStyles:T(()=>({zIndex:a.value}))}}function Jt(e){return{teleportTarget:T(()=>{const t=e();if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let r=[...o.children].find(i=>i.matches(".v-overlay-container"));return r||(r=document.createElement("div"),r.className="v-overlay-container",o.appendChild(r)),r})}}function en(e){const{modelValue:n,color:t,...o}=e;return I(Ze,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&I("div",j({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const tn=X({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Gt(),...ut(),...ct(),...bt(),...Ft(),...It(),...st(),...kt()},"VOverlay"),ln=et()({name:"VOverlay",directives:{ClickOutside:Rt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...tn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:r}=n;const i=ve("VOverlay"),c=W(),a=W(),u=W(),v=tt(e,"modelValue"),s=T({get:()=>v.value,set:y=>{y&&e.disabled||(v.value=y)}}),{themeClasses:b}=nt(e),{rtlClasses:O,isRtl:x}=ot(),{hasContent:d,onAfterLeave:f}=gt(e,s),P=at(T(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:C,localTop:E,stackStyles:w}=Qt(s,je(e,"zIndex"),e._disableGlobalStack),{activatorEl:p,activatorRef:M,target:B,targetEl:k,targetRef:l,activatorEvents:L,contentEvents:ne,scrimEvents:S}=Kt(e,{isActive:s,isTop:E,contentEl:u}),{teleportTarget:h}=Jt(()=>{var U,ge,he;const y=e.attach||e.contained;if(y)return y;const R=((U=p==null?void 0:p.value)==null?void 0:U.getRootNode())||((he=(ge=i.proxy)==null?void 0:ge.$el)==null?void 0:he.getRootNode());return R instanceof ShadowRoot?R:!1}),{dimensionStyles:m}=rt(e),g=Zt(),{scopeId:N}=ht();F(()=>e.disabled,y=>{y&&(s.value=!1)});const{contentStyles:_,updateLocation:$}=Nt(e,{isRtl:x,contentEl:u,target:B,isActive:s});Wt(e,{root:c,contentEl:u,targetEl:k,isActive:s,updateLocation:$});function A(y){r("click:outside",y),e.persistent?Z():s.value=!1}function D(y){return s.value&&C.value&&(!e.scrim||y.target===a.value||y instanceof MouseEvent&&y.shadowTarget===a.value)}q&&F(s,y=>{y?window.addEventListener("keydown",z):window.removeEventListener("keydown",z)},{immediate:!0}),qe(()=>{q&&window.removeEventListener("keydown",z)});function z(y){var R,U;y.key==="Escape"&&C.value&&(e.persistent?Z():(s.value=!1,(R=u.value)!=null&&R.contains(document.activeElement)&&((U=p.value)==null||U.focus())))}const Y=it();de(()=>e.closeOnBack,()=>{yt(Y,y=>{C.value&&s.value?(y(!1),e.persistent?Z():s.value=!1):y()})});const ye=W();F(()=>s.value&&(e.absolute||e.contained)&&h.value==null,y=>{if(y){const R=At(c.value);R&&R!==document.scrollingElement&&(ye.value=R.scrollTop)}});function Z(){e.noClickAnimation||u.value&&wt(u.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:xt})}function Ie(){r("afterEnter")}function We(){f(),r("afterLeave")}return lt(()=>{var y;return I(Ge,null,[(y=t.activator)==null?void 0:y.call(t,{isActive:s.value,targetRef:l,props:j({ref:M},L.value,e.activatorProps)}),g.value&&d.value&&I($e,{disabled:!h.value,to:h.value},{default:()=>[I("div",j({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},b.value,O.value,e.class],style:[w.value,{"--v-overlay-opacity":e.opacity,top:H(ye.value)},e.style],ref:c},N,o),[I(en,j({color:P,modelValue:s.value&&!!e.scrim,ref:a},S.value),null),I(Ot,{appear:!0,persisted:!0,transition:e.transition,target:B.value,onAfterEnter:Ie,onAfterLeave:We},{default:()=>{var R;return[ze(I("div",j({ref:u,class:["v-overlay__content",e.contentClass],style:[m.value,_.value]},ne.value,e.contentProps),[(R=t.default)==null?void 0:R.call(t,{isActive:s})]),[[Ye,s.value],[Ue("click-outside"),{handler:A,closeConditional:D,include:()=>[p.value]}]])]}})])]})])}),{activatorEl:p,scrimEl:a,target:B,animateClick:Z,contentEl:u,globalTop:C,localTop:E,updateLocation:$}}});export{ln as V,tn as m};
