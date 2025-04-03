import{aH as N,aI as T,aJ as q,p as V,h as H,ag as K,ap as G,q as J,v as O,c as b,o as r,G as f,aK as U,w as d,j as y,as as p,e as u,b as h,k as n,K as W,W as L}from"./framework.BD9sBbGn.js";import{u as Q,l as D,d as C,a as X,m as Z,V as v,b as w,c as M,e as z,_ as ee,f as x,g as B}from"./eo-dash.D_7lCkWe.js";import{T as k}from"./index-4CT7Tz83.CGbJTc_W.js";import"./commonjsHelpers.BosuxZz1.js";import"./VTooltip-CfeefrXI.CQH0sud9.js";import"./VOverlay-BzOdRu9h.D2EbwVNO.js";import"./forwardRefs-Bon_Kku1.DBcCEjqf.js";import"./transition-C5I57hn6.Bul_ogsM.js";const te={ref:"rootRef",class:"datePicker"},ae={class:"bg-surface d-flex flex-row align-center justify-center pb-1",style:{overflow:"hidden",width:"100%"}},se={class:"flex rounded-lg border border-gray-300 dark:border-gray-600",style:{margin:"2px","min-width":"0"}},ne=["value"],oe={class:"d-flex flex-row align-center justify-center pb-1",style:{overflow:"hidden",width:"100%"}},le={class:"flex rounded-lg border border-gray-300 dark:border-gray-600",style:{margin:"2px","min-width":"0"}},re=["value"],pe={__name:"EodashDatePicker",props:{hintText:{type:String,default:null},hideArrows:{type:Boolean,default:!1},hideInputField:{type:Boolean,default:!1},toggleCalendar:{type:Boolean,default:!1}},setup(o){N(s=>({f4706d8a:S.value}));const{lgAndDown:m}=Q(),P=T("rootRef"),R=T("datePicker"),c=q((s,e)=>({get(){return s(),new Date(C.value).getTime()},set(a){var l;e(),D.debug("Datepicker setting currentDate",C.value);const t=new Date(a);C.value=t.toISOString(),(l=R.value)==null||l.move({month:t.getMonth()+1,year:t.getFullYear()})}})),$=V({input:"YYYY-MM-DD"}),E=s=>{const e=s.getFullYear(),a=s.getMonth()+1,t=s.getDate();return`${e}-${a<10?"0"+a:a}-${t<10?"0"+t:t}`},F=s=>{var e;c.value=new Date((e=s.target)==null?void 0:e.value).getTime()},_=H(()=>E(new Date(c.value))),i=K([]),Y=G(X(),"selectedStac");J(Y,async(s,e)=>{var a;if(s&&(e==null?void 0:e.id)!==s.id){D.debug("Datepicker selected STAC change triggered"),i.splice(0,i.length);for(let t=0;t<x.length;t++){D.debug("Retrieving dates",x[t]),await x[t].fetchCollection();const l=[...new Set((a=x[t].getItems())==null?void 0:a.reduce((I,j)=>{const A=Date.parse(j.datetime);return A&&I.push(new Date(A)),I},[]))];i.push({key:"id-"+t.toString()+Math.random().toString(16).slice(2),dot:{style:{backgroundColor:B[t%B.length]}},dates:l,content:{style:{color:"#000000","font-weight":"bold"}}})}}},{immediate:!0});function g(s){if(i.length){let e=s?1/0:-1/0;i.forEach(a=>{a!=null&&a.dates&&a.dates.forEach(t=>{t instanceof Date&&(e=Math[s?"min":"max"](e,t.getTime()))})}),c.value=e===-1/0?Date.now():e===1/0?0:e}}const S=V("");return O(()=>{S.value=document.querySelector("eo-dash")?"translate3d(50px,-80px,0)":"translate3d(0px,-80px,0)"}),Z(P),(s,e)=>(r(),b("div",te,[f(n(ee),{ref:"datePicker",modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=a=>c.value=a),modelModifiers:{number:!0},attributes:i,masks:$.value,expanded:"",class:"bg-surface overflow-auto",style:{"background-color":"transparent","max-width":"100%"}},U({_:2},[o.toggleCalendar?{name:"default",fn:d(({inputValue:a,inputEvents:t})=>[y("div",ae,[o.hideArrows?u("v-if",!0):p((r(),h(v,{key:0,density:"compact",size:n(m)?"x-small":"large",variant:"text",onClick:e[0]||(e[0]=l=>g(!0)),class:"py-2",style:{"flex-shrink":"1"}},{default:d(()=>[f(w,{icon:[n(M)]},null,8,["icon"])]),_:1},8,["size"])),[[k,"Set date to oldest available dataset","bottom"]]),y("div",se,[o.hideInputField?u("v-if",!0):(r(),b("input",W({key:0,value:a},L(t,!0),{class:"flex-grow px-1 py-1 dark:bg-gray-700",style:{margin:"1px",width:"100%","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}}),null,16,ne))]),o.hideArrows?u("v-if",!0):p((r(),h(v,{key:1,density:"compact",size:n(m)?"x-small":"large",variant:"text",onClick:e[1]||(e[1]=l=>g(!1)),class:"py-2",style:{"flex-shrink":"1"}},{default:d(()=>[f(w,{icon:[n(z)]},null,8,["icon"])]),_:1},8,["size"])),[[k,"Set date to latest available dataset","bottom"]])])]),key:"0"}:{name:"footer",fn:d(()=>[y("div",oe,[o.hideArrows?u("v-if",!0):p((r(),h(v,{key:0,density:"compact",size:n(m)?"x-small":"large",variant:"text",onClick:e[2]||(e[2]=a=>g(!0)),class:"py-2",style:{"flex-shrink":"1"}},{default:d(()=>[f(w,{icon:[n(M)]},null,8,["icon"])]),_:1},8,["size"])),[[k,"Set date to oldest available dataset","bottom"]]),y("div",le,[o.hideInputField?u("v-if",!0):(r(),b("input",{key:0,value:_.value,onChange:F,class:"flex-grow px-1 py-1 dark:bg-gray-700",style:{margin:"1px",width:"100%","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},null,40,re))]),o.hideArrows?u("v-if",!0):p((r(),h(v,{key:1,density:"compact",size:n(m)?"x-small":"large",variant:"text",onClick:e[3]||(e[3]=a=>g(!1)),class:"py-2",style:{"flex-shrink":"1"}},{default:d(()=>[f(w,{icon:[n(z)]},null,8,["icon"])]),_:1},8,["size"])),[[k,"Set date to latest available dataset","bottom"]])])]),key:"1"}]),1032,["modelValue","attributes","masks"])],512))}};export{pe as default};
