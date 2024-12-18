import{p as k,R as A,ak as L,g as H,b as P,am as q,aw as z,ao as K,U as G,Z as O,ar as W,aC as X,au as Z,X as $,Y as J,aj as Q,aI as w,a5 as _,b3 as ee,u as te,a2 as ae,b4 as le,F as oe,ae as se,b1 as ne}from"./eo-dash.BmfiLz_u.js";import{V as re}from"./index-DlIO7sJ3.D5_nqaOf.js";import{V as D}from"./VImg-B8AbetCE.C5-6HEPi.js";import{u as ue}from"./ssrBoot-BP7SYRyC.DtzMQYqG.js";import{G as o,ak as C,D as T,h as i,p as U,s as ie,K as F,q as B,v as ce,Y as de,L as ve,o as me,b as ge,w as N,a as fe,t as he,k as E}from"./framework.BUHMmcSd.js";import"./commonjsHelpers.BosuxZz1.js";import"./theme.D-I-GXSD.js";import"./transition-BiR8wMn1.BAN9hUGP.js";const M=k({text:String,...A(),...L()},"VToolbarTitle"),Y=H()({name:"VToolbarTitle",props:M(),setup(e,c){let{slots:t}=c;return P(()=>{const u=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[u&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),be=[null,"prominent","default","comfortable","compact"],j=k({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>be.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...q(),...A(),...z(),...K(),...L({tag:"header"}),...G()},"VToolbar"),R=H()({name:"VToolbar",props:j(),setup(e,c){var f;let{slots:t}=c;const{backgroundColorClasses:u,backgroundColorStyles:n}=O(C(e,"color")),{borderClasses:a}=W(e),{elevationClasses:r}=X(e),{roundedClasses:d}=Z(e),{themeClasses:h}=$(e),{rtlClasses:x}=J(),v=T(!!(e.extended||(f=t.extension)!=null&&f.call(t))),m=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),y=i(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Q({VBtn:{variant:"text"}}),P(()=>{var V;const s=!!(e.title||t.title),g=!!(t.image||e.image),S=(V=t.extension)==null?void 0:V.call(t);return v.value=!!(e.extended||S),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,a.value,r.value,d.value,h.value,x.value,e.class],style:[n.value,e.style]},{default:()=>[g&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(w,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(D,{key:"image-img",cover:!0,src:e.image},null)]),o(w,{defaults:{VTabs:{height:_(m.value)}}},{default:()=>{var l,b,p;return[o("div",{class:"v-toolbar__content",style:{height:_(m.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(l=t.prepend)==null?void 0:l.call(t)]),s&&o(Y,{key:"title",text:e.title},{text:t.title}),(b=t.default)==null?void 0:b.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(p=t.append)==null?void 0:p.call(t)])])]}}),o(w,{defaults:{VTabs:{height:_(y.value)}}},{default:()=>[o(re,null,{default:()=>[v.value&&o("div",{class:"v-toolbar__extension",style:{height:_(y.value)}},[S])]})]})]})}),{contentHeight:m,extensionHeight:y}}}),ye=k({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Se(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=c;let u=0,n=0;const a=U(null),r=T(0),d=T(0),h=T(0),x=T(!1),v=T(!1),m=i(()=>Number(e.scrollThreshold)),y=i(()=>se((m.value-r.value)/m.value||0)),f=()=>{const s=a.value;if(!s||t&&!t.value)return;u=r.value,r.value="window"in s?s.pageYOffset:s.scrollTop;const g=s instanceof Window?document.documentElement.scrollHeight:s.scrollHeight;if(n!==g){n=g;return}v.value=r.value<u,h.value=Math.abs(r.value-m.value)};return B(v,()=>{d.value=d.value||r.value}),B(x,()=>{d.value=0}),ce(()=>{B(()=>e.scrollTarget,s=>{var S;const g=s?document.querySelector(s):window;g&&g!==a.value&&((S=a.value)==null||S.removeEventListener("scroll",f),a.value=g,a.value.addEventListener("scroll",f,{passive:!0}))},{immediate:!0})}),de(()=>{var s;(s=a.value)==null||s.removeEventListener("scroll",f)}),t&&B(t,f,{immediate:!0}),{scrollThreshold:m,currentScroll:r,currentThreshold:h,isScrollActive:x,scrollRatio:y,isScrollingUp:v,savedScroll:d}}const Te=k({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...j(),...ee(),...ye(),height:{type:[Number,String],default:64}},"VAppBar"),xe=H()({name:"VAppBar",props:Te(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:t}=c;const u=U(),n=te(e,"modelValue"),a=i(()=>{var b;const l=new Set(((b=e.scrollBehavior)==null?void 0:b.split(" "))??[]);return{hide:l.has("hide"),fullyHide:l.has("fully-hide"),inverted:l.has("inverted"),collapse:l.has("collapse"),elevate:l.has("elevate"),fadeImage:l.has("fade-image")}}),r=i(()=>{const l=a.value;return l.hide||l.fullyHide||l.inverted||l.collapse||l.elevate||l.fadeImage||!n.value}),{currentScroll:d,scrollThreshold:h,isScrollingUp:x,scrollRatio:v}=Se(e,{canScroll:r}),m=i(()=>a.value.hide||a.value.fullyHide),y=i(()=>e.collapse||a.value.collapse&&(a.value.inverted?v.value>0:v.value===0)),f=i(()=>e.flat||a.value.fullyHide&&!n.value||a.value.elevate&&(a.value.inverted?d.value>0:d.value===0)),s=i(()=>a.value.fadeImage?a.value.inverted?1-v.value:v.value:void 0),g=i(()=>{var p,I;if(a.value.hide&&a.value.inverted)return 0;const l=((p=u.value)==null?void 0:p.contentHeight)??0,b=((I=u.value)==null?void 0:I.extensionHeight)??0;return m.value?d.value<h.value||a.value.fullyHide?l+b:l:l+b});ae(i(()=>!!e.scrollBehavior),()=>{ie(()=>{m.value?a.value.inverted?n.value=d.value>h.value:n.value=x.value||d.value<h.value:n.value=!0})});const{ssrBootStyles:S}=ue(),{layoutItemStyles:V}=le({id:e.name,order:i(()=>parseInt(e.order,10)),position:C(e,"location"),layoutSize:g,elementSize:T(void 0),active:n,absolute:C(e,"absolute")});return P(()=>{const l=R.filterProps(e);return o(R,F({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...V.value,"--v-toolbar-image-opacity":s.value,height:void 0,...S.value},e.style]},l,{collapse:y.value,flat:f.value}),t)}),{}}}),pe=H()({name:"VAppBarTitle",props:M(),setup(e,c){let{slots:t}=c;return P(()=>o(Y,F(e,{class:"v-app-bar-title"}),t)),{}}}),Ve={__name:"Header",setup(e){var u;const c=ve(ne),t=(u=c.brand)==null?void 0:u.name;return(n,a)=>(me(),ge(xe,{color:"primary"},{default:N(()=>{var r;return[o(pe,null,{default:N(()=>[fe(he(E(t)),1)]),_:1}),o(D,{class:"mx-12 logo",src:(r=E(c).brand)==null?void 0:r.logo},null,8,["src"])]}),_:1}))}},Ne=oe(Ve,[["__scopeId","data-v-d3a5e05e"]]);export{Ne as default};