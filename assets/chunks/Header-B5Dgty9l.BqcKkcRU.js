import{y as j,J as k,K as H,N as P,L as z,Y as F,bd as $,aj as A,a1 as L,be as G,aa as J,S as O,aq as Q,aC as W,at as Z,Q as X,R as ee,ai as te,$ as ae,am as le,aA as oe,ao as se,av as C,Z as _,bf as ne}from"./eo-dash.D_7lCkWe.js";import{V as re}from"./index-Bm9cbtx5.DAE6FjpB.js";import{V as D}from"./VImg-FD1WVphJ.DlsVG52E.js";import{u as ue}from"./ssrBoot-BP7SYRyC.BB7rUxfU.js";import{L as ie,b as ce,o as de,w as N,G as o,a as ve,t as me,k as E,K as U,p as q,h as i,ap as w,D as T,q as B,v as fe,Y as ge,s as he}from"./framework.BD9sBbGn.js";import"./commonjsHelpers.BosuxZz1.js";import"./transition-C5I57hn6.Bul_ogsM.js";const K=H({text:String,...L(),...A()},"VToolbarTitle"),M=k()({name:"VToolbarTitle",props:K(),setup(e,c){let{slots:t}=c;return P(()=>{const u=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var n;return[u&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),be=[null,"prominent","default","comfortable","compact"],Y=H({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>be.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...se(),...L(),...oe(),...le(),...A({tag:"header"}),...ae()},"VToolbar"),R=k()({name:"VToolbar",props:Y(),setup(e,c){var g;let{slots:t}=c;const{backgroundColorClasses:u,backgroundColorStyles:n}=O(w(e,"color")),{borderClasses:a}=Q(e),{elevationClasses:r}=W(e),{roundedClasses:d}=Z(e),{themeClasses:h}=X(e),{rtlClasses:x}=ee(),v=T(!!(e.extended||(g=t.extension)!=null&&g.call(t))),m=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),y=i(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return te({VBtn:{variant:"text"}}),P(()=>{var V;const s=!!(e.title||t.title),f=!!(t.image||e.image),S=(V=t.extension)==null?void 0:V.call(t);return v.value=!!(e.extended||S),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,a.value,r.value,d.value,h.value,x.value,e.class],style:[n.value,e.style]},{default:()=>[f&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(C,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(D,{key:"image-img",cover:!0,src:e.image},null)]),o(C,{defaults:{VTabs:{height:_(m.value)}}},{default:()=>{var l,b,p;return[o("div",{class:"v-toolbar__content",style:{height:_(m.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(l=t.prepend)==null?void 0:l.call(t)]),s&&o(M,{key:"title",text:e.title},{text:t.title}),(b=t.default)==null?void 0:b.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(p=t.append)==null?void 0:p.call(t)])])]}}),o(C,{defaults:{VTabs:{height:_(y.value)}}},{default:()=>[o(re,null,{default:()=>[v.value&&o("div",{class:"v-toolbar__extension",style:{height:_(y.value)}},[S])]})]})]})}),{contentHeight:m,extensionHeight:y}}}),ye=H({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Se(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=c;let u=0,n=0;const a=q(null),r=T(0),d=T(0),h=T(0),x=T(!1),v=T(!1),m=i(()=>Number(e.scrollThreshold)),y=i(()=>J((m.value-r.value)/m.value||0)),g=()=>{const s=a.value;if(!s||t&&!t.value)return;u=r.value,r.value="window"in s?s.pageYOffset:s.scrollTop;const f=s instanceof Window?document.documentElement.scrollHeight:s.scrollHeight;if(n!==f){n=f;return}v.value=r.value<u,h.value=Math.abs(r.value-m.value)};return B(v,()=>{d.value=d.value||r.value}),B(x,()=>{d.value=0}),fe(()=>{B(()=>e.scrollTarget,s=>{var S;const f=s?document.querySelector(s):window;f&&f!==a.value&&((S=a.value)==null||S.removeEventListener("scroll",g),a.value=f,a.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),ge(()=>{var s;(s=a.value)==null||s.removeEventListener("scroll",g)}),t&&B(t,g,{immediate:!0}),{scrollThreshold:m,currentScroll:r,currentThreshold:h,isScrollActive:x,scrollRatio:y,isScrollingUp:v,savedScroll:d}}const Te=H({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Y(),...G(),...ye(),height:{type:[Number,String],default:64}},"VAppBar"),xe=k()({name:"VAppBar",props:Te(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:t}=c;const u=q(),n=z(e,"modelValue"),a=i(()=>{var b;const l=new Set(((b=e.scrollBehavior)==null?void 0:b.split(" "))??[]);return{hide:l.has("hide"),fullyHide:l.has("fully-hide"),inverted:l.has("inverted"),collapse:l.has("collapse"),elevate:l.has("elevate"),fadeImage:l.has("fade-image")}}),r=i(()=>{const l=a.value;return l.hide||l.fullyHide||l.inverted||l.collapse||l.elevate||l.fadeImage||!n.value}),{currentScroll:d,scrollThreshold:h,isScrollingUp:x,scrollRatio:v}=Se(e,{canScroll:r}),m=i(()=>a.value.hide||a.value.fullyHide),y=i(()=>e.collapse||a.value.collapse&&(a.value.inverted?v.value>0:v.value===0)),g=i(()=>e.flat||a.value.fullyHide&&!n.value||a.value.elevate&&(a.value.inverted?d.value>0:d.value===0)),s=i(()=>a.value.fadeImage?a.value.inverted?1-v.value:v.value:void 0),f=i(()=>{var p,I;if(a.value.hide&&a.value.inverted)return 0;const l=((p=u.value)==null?void 0:p.contentHeight)??0,b=((I=u.value)==null?void 0:I.extensionHeight)??0;return m.value?d.value<h.value||a.value.fullyHide?l+b:l:l+b});F(i(()=>!!e.scrollBehavior),()=>{he(()=>{m.value?a.value.inverted?n.value=d.value>h.value:n.value=x.value||d.value<h.value:n.value=!0})});const{ssrBootStyles:S}=ue(),{layoutItemStyles:V}=$({id:e.name,order:i(()=>parseInt(e.order,10)),position:w(e,"location"),layoutSize:f,elementSize:T(void 0),active:n,absolute:w(e,"absolute")});return P(()=>{const l=R.filterProps(e);return o(R,U({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...V.value,"--v-toolbar-image-opacity":s.value,height:void 0,...S.value},e.style]},l,{collapse:y.value,flat:g.value}),t)}),{}}}),pe=k()({name:"VAppBarTitle",props:K(),setup(e,c){let{slots:t}=c;return P(()=>o(M,U(e,{class:"v-app-bar-title"}),t)),{}}}),Ve={__name:"Header",setup(e){var u;const c=ie(ne),t=(u=c.brand)==null?void 0:u.name;return(n,a)=>(de(),ce(xe,{color:"primary"},{default:N(()=>{var r;return[o(pe,{class:"header"},{default:N(()=>[ve(me(E(t)),1)]),_:1}),o(D,{class:"mx-12 logo",src:(r=E(c).brand)==null?void 0:r.logo},null,8,["src"])]}),_:1}))}},Ie=j(Ve,[["__scopeId","data-v-bfe4aadf"]]);export{Ie as default};
