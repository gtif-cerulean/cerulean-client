import h from"./PopUp-BfB8s_ki.-8aceoaf.js";import g from"./EodashItemFilter-DlQiE713.CBUniLvb.js";import y from"./EodashLayoutSwitcher-CDeCV8F-.zy7kU-81.js";import{af as v,u as x,m as w,b0 as B,V as k}from"./eo-dash.D_7lCkWe.js";import{p,h as u,c as V,o as l,j as S,G as d,b as c,e as f,k as b,w as T,K as C}from"./framework.BD9sBbGn.js";import"./VOverlay-BzOdRu9h.D2EbwVNO.js";import"./forwardRefs-Bon_Kku1.DBcCEjqf.js";import"./transition-C5I57hn6.Bul_ogsM.js";import"./commonjsHelpers.BosuxZz1.js";import"./lit-element.Deg-YTNa.js";import"./map.d1LHv0EW.js";import"./directive.CvdRHFdJ.js";import"./when.BR7zwNJC.js";import"./all.style.T4I2W3dO.js";import"./repeat.PsSHA7SW.js";import"./directive-helpers.oNa9w_hR.js";import"./index.H62imwlA.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./orient2d.DArCjZZA.js";import"./index.KH_2m63C.js";import"./VTooltip-CfeefrXI.CQH0sud9.js";const $={class:"d-flex flex-row justify-space-between pa-4 align-center"},X={__name:"EodashTools",props:{showIndicatorsBtn:{type:Boolean,default:!0},showLayoutSwitcher:{type:Boolean,default:!0},layoutTarget:{type:String,default:"light"},layoutIcon:{type:String,default:v},indicatorBtnText:{type:String,default:"Select indicator"},itemFilterConfig:{type:Object,default:()=>{}}},setup(o){const t=p(!1),{smAndDown:r}=x(),n=u(()=>r.value?"80%":"1500px"),s=u(()=>r.value?"90%":"800px"),a=o,m=p(null);return w(m),(E,e)=>(l(),V("div",{ref_key:"rootEl",ref:m,class:"d-flex flex-column fill-height overflow-auto bg-primary"},[S("div",$,[a.showIndicatorsBtn?(l(),c(k,{key:0,color:"secondary",class:"text-none py-2 px-4","append-icon":[b(B)],text:o.indicatorBtnText,onClick:e[0]||(e[0]=i=>t.value=!t.value)},null,8,["append-icon","text"])):f("v-if",!0),a.showLayoutSwitcher?(l(),c(y,{key:1,target:o.layoutTarget,icon:o.layoutIcon},null,8,["target","icon"])):f("v-if",!0)]),d(h,{modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=i=>t.value=i),maxWidth:n.value,width:n.value,"max-height":s.value,height:s.value},{default:T(()=>[d(g,C({class:"pa-4","results-title":""},a.itemFilterConfig,{onSelect:e[1]||(e[1]=i=>t.value=!t.value)}),null,16)]),_:1},8,["modelValue","maxWidth","width","max-height","height"])],512))}};export{X as default};
