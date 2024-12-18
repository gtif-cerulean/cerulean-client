import{L as x,o as a,b as n,w as l,j as _,k as r,N as d,c as i,aD as h,I as m,K as g,e as y,F as v,C as w,T as k}from"./framework.BUHMmcSd.js";import{H as L,b3 as A,aP as b}from"./eo-dash.CqKGLMER.js";import{V as C}from"./VMain-CEH72tEj.C1IFgROL.js";import"./commonjsHelpers.BosuxZz1.js";import"./theme.B5SBmdDe.js";import"./ssrBoot-BP7SYRyC.DtzMQYqG.js";class $ extends HTMLElement{static get observedAttributes(){return["gap"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(e,s,o){s!==o&&(this[e]=o),this.render()}}class E extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;

          grid-column: ${parseInt(this.getAttribute("x"))+1} / span ${this.getAttribute("w")};
          grid-row: ${parseInt(this.getAttribute("y"))+1} / span ${this.getAttribute("h")};
        }
      </style>
      <slot></slot>
    `}attributeChangedCallback(e,s,o){s!==o&&(this[e]=o),this.render()}}customElements.define("eox-layout",$);customElements.define("eox-layout-item",E);const T=["gap"],D=["h","w","x","y"],H={__name:"DashboardLayout",setup(u){var p,c;const e=x(A),[s]=b([(p=e.template)==null?void 0:p.background]),o=b((c=e.template)==null?void 0:c.widgets);return(I,M)=>(a(),n(C,null,{default:l(()=>[_("eox-layout",{gap:r(e).template.gap??16,style:d(`padding: ${r(e).template.gap||16}px`)},[r(s).component?(a(),i("eox-layout-item",{key:0,class:"bg-panel bg-surface",style:d(`margin: -${r(e).template.gap??16}px;`),x:"0",y:"0",h:"12",w:"12"},[(a(),n(h,{suspensible:""},{default:l(()=>[(a(),n(m(r(s).component),g({id:"bg-widget"},r(s).props),null,16))]),_:1}))],4)):y("v-if",!0),(a(!0),i(v,null,w(r(o),(t,f)=>(a(),n(k,{key:f,name:"fade"},{default:l(()=>[t.value.component?(a(),i("eox-layout-item",{key:t.value.id,class:"panel bg-surface",h:t.value.layout.h,w:t.value.layout.w,x:t.value.layout.x,y:t.value.layout.y},[(a(),n(h,{suspensible:""},{default:l(()=>[(a(),n(m(t.value.component),g({key:t.value.id,ref_for:!0},t.value.props),null,16))]),_:2},1024))],8,D)):y("v-if",!0)]),_:2},1024))),128))],12,T)]),_:1}))}},K=L(H,[["__scopeId","data-v-c4bc74b1"]]);export{K as default};
