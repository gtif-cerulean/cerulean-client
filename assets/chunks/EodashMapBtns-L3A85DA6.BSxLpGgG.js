var V=e=>{throw TypeError(e)};var T=(e,i,t)=>i.has(e)||V("Cannot "+t);var k=(e,i,t)=>(T(e,i,"read from private field"),t?t.call(e):i.get(e)),E=(e,i,t)=>i.has(e)?V("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(e):i.set(e,t),L=(e,i,t,a)=>(T(e,i,"write to private field"),a?a.call(e,t):i.set(e,t),t);import{_ as H,s as F,a as P,u as K,bn as W,bo as Y,a9 as B,b as X,bp as J,V as f,bq as Q,br as ee,b2 as q,bs as te,bt as oe,H as se,G as ie,bu as ae,k as S,bv as _}from"./eo-dash.BfXnrxyB.js";import re from"./ExportState-Cip-UQEf.DUtiyuXa.js";import ne from"./PopUp-B12eDZck.D2faxJVe.js";import le from"./EodashItemFilter-C5OPsLyg.D-nQ329Y.js";import{l as ce}from"./handling-C_il519l.Dz4ZZ9hG.js";import{i as ue,r as pe,x as l}from"./lit-element.Deg-YTNa.js";import{e as me}from"./directive.CvdRHFdJ.js";import{e as de}from"./unsafe-html.q2xQv78y.js";import{p as j}from"./index.DK02avya.js";import{_ as he}from"./index.BUIxO2d3.js";import{a as fe,e as ge}from"./addCommonStyleSheet.zOcQQLUh.js";import{g as be}from"./getElement.CdRlZPdn.js";import{T as g}from"./index-DiW6YH3L.CVgMNpLr.js";import{h as C,p as $,c as O,o as u,al as b,e as m,b as h,G as Z,k as n,w as ye,aD as ve}from"./framework.zZXfd1Xh.js";import"./item.CC2Khh23.js";import"./commonjsHelpers.BosuxZz1.js";import"./index-Bn6EoGHh.C-L8kH9P.js";import"./VImg-DWbM65HQ.B4T5uVsf.js";import"./transition-BldkGQTb.C6xYlF90.js";import"./VOverlay-CzUTRzQ4.CRh5DT2N.js";import"./forwardRefs-BdnUHnn3.nhyb9eII.js";import"./main.CboE5_zC.js";import"./when.BR7zwNJC.js";import"./dayjs.min.Ba62AOpW.js";import"./static.3li6NsVA.js";import"./repeat.DqtNkz5O.js";import"./directive-helpers.oNa9w_hR.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./orient2d.DArCjZZA.js";import"./index.BSpBAx16.js";import"./async-t3zo8KaO.B_dhxMFA.js";import"./utils.DZj92Qv1.js";import"./VTooltip-T9BN-hpi.DlfX9Q2N.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class I extends de{}I.directiveName="unsafeSVG",I.resultType=2;const xe=me(I),we=ue`
  .hidden {
    display: none;
  }
  .search-container.hidden {
    opacity: 0;
  }
`;fe();const ke=`
  ${ge}
`,Se=`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    width="50"
    height="50"
    style="shape-rendering: auto; display: block; background: transparent;"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <circle
        stroke-dasharray="164.93361431346415 56.97787143782138"
        r="35"
        stroke-width="12"
        stroke="#1a467c"
        fill="none"
        cy="50"
        cx="50"
      >
        <animateTransform
          keyTimes="0;1"
          values="0 50 50;360 50 50"
          dur="1.2222222222222223s"
          repeatCount="indefinite"
          type="rotate"
          attributeName="transform"
        ></animateTransform>
      </circle>
      <g></g>
    </g>
  </svg>
`;var y;class Ce extends pe{constructor(){super();E(this,y);this._data=[],this._isListVisible=!1,this._isInputVisible=!1,this._query="",this._isLoading=!1,this.endpoint=void 0,this.for="eox-map",this.queryParameter="q",this.button=!1,this.label=void 0,this.direction="right",this.resultsDirection="down",this.interval=800,this.small=!1,this.unstyled=!1,this.loaderSvg=Se,this.fetchDebounced=he(async()=>{if(!(this._query.length<2)){this._isLoading=!0;try{const t=`${this.endpoint}${this.endpoint.includes("?")?"&":"?"}${this.queryParameter??"q"}=${this._query}`,c=await(await fetch(encodeURI(t))).json();this._data=c.results,this._isLoading=!1}catch{console.log("Error setting up or requesting from geosearch endpoint")}}},this.interval)}static get properties(){return{_data:{attribute:!1},_isListVisible:{attribute:!1},_isInputVisible:{attribute:!1},_query:{attribute:!1},_isLoading:{attribute:!1},endpoint:{type:String},for:{type:String},queryParameter:{type:String,default:"q"},button:{type:Boolean},interval:{type:Number,default:800},small:{type:Boolean},label:{type:String},direction:{type:String,attribute:"list-direction"},resultsDirection:{type:String,attribute:"results-direction"},unstyled:{type:Boolean},loaderSvg:{type:String,attribute:"loader-svg"}}}async onInput(t){if(this._query=t.target.value,this._query.length==0){this._isListVisible=!1;return}else this._query.length>=2&&(this._isLoading=!0),this._isListVisible=!0;this.fetchDebounced()}onInputBlur(){this._isInputVisible=!1,this._isListVisible=!1,this._query=""}handleSelect(t){this._isInputVisible=!1,this._isListVisible=!1,this._query="";const a=this.eoxMap.map.getView().getProjection().getCode();let c=j("EPSG:4326",a,[t.bounds.southwest.lng,t.bounds.southwest.lat]),p=j("EPSG:4326",a,[t.bounds.northeast.lng,t.bounds.northeast.lat]);const x=[c[0],c[1],p[0],p[1]];this.eoxMap.zoomExtent=x,this.dispatchEvent(new CustomEvent("geosearchSelect",t))}updateMap(){const t=be(this.for);if(t){const a=t;this.eoxMap=a}}firstUpdated(){this.updateMap()}updated(t){t.has("for")&&this.updateMap()}get eoxMap(){return k(this,y)}set eoxMap(t){const a=k(this,y);L(this,y,t),this.requestUpdate("eoxMap",a)}render(){const t=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>magnify</title>
      <path
        d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
      />
    </svg>`,a=l`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>arrow-left</title>
      <path
        d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
      />
    </svg>`,c=l`
      <li>
        <div class="field small prefix surface border">
          ${this.unstyled?"":this._isLoading?this.loaderSvg?l`<i>${xe(this.loaderSvg)}</i>`:l`<progress class="circle"></progress>`:l`<i class="front">${a}</i>`}
          <input
            placeholder="Type to search"
            @input="${this.onInput}"
            @blur="${this.onInputBlur}"
          />
        </div>
      </li>
    `;return l`
      <style>
        ${we}
        ${!this.unstyled&&ke}
      </style>
      <div
        class="geosearch"
      >
      
        <div class="${this.button?this.small?"button small circle small-elevate":"button extra circle":"field small prefix round surface border active"}" data-ui="#search"
        @click=${()=>{this._isListVisible=!0,setTimeout(()=>{this.renderRoot.querySelector("menu#search input").focus()},500)}}
        >
        ${this.unstyled?"":l`<i class="front small">${t}</i>`}

  ${this.button||this.unstyled?"":l`<input placeholder="Type to search" />`}
  <menu id="search" class="surface ${this.button?`no-wrap ${this.direction} ${this.resultsDirection==="up"?"top":"bottom"}`:""} min${this._isListVisible?" active":""}">
${this.resultsDirection==="up"?"":c}
    ${this._query&&this._query.length<2?l`<li class="surface"><small>Enter at least two characters to search</small></li>`:""}
${this._data.map(p=>l`
    <li
      data-ui="#search"
      class="surface"
      @click="${()=>{this.handleSelect(p)}}"
    >
      ${p.formatted}
    </li>
  `)}
          ${this.resultsDirection==="up"?c:""}
</div>
      </div>
    `}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}}y=new WeakMap;customElements.define("eox-geosearch",Ce);function $e(e){return Math.pow(e,3)}function z(e){return 1-$e(1-e)}function pt(e){return 3*e*e-2*e*e*e}const Ie=".map-btn{width:36px;height:36px;border-radius:25%;margin:4px}eox-geosearch{position:relative!important;overflow:visible!important;z-index:10}",Me=["for"],Ve={__name:"EodashMapBtns",props:{exportMap:{type:Boolean,default:!0},changeProjection:{type:Boolean,default:!0},compareIndicators:{type:[Boolean,Object],default:!0},backToPOIs:{type:Boolean,default:!0},enableSearch:{type:Boolean,default:!0},enableZoom:{type:Boolean,default:!0}},setup(e){const{selectedStac:i,selectedCompareStac:t}=F(P()),{resetSelectedCompareSTAC:a}=P(),{smAndDown:c}=K(),p=C(()=>c.value?"80%":"70%"),x=C(()=>c.value?"90%":"70%"),w=$(!1),v=$(!1),D=C(()=>{var o;return B.value===(typeof e.compareIndicators=="object"&&((o=e.compareIndicators)==null?void 0:o.compareTemplate)||"compare")?W:Y}),A=()=>{v.value=B.value!==(typeof e.compareIndicators=="object"&&e.compareIndicators.compareTemplate||"compare");const o=typeof e.compareIndicators=="object"&&e.compareIndicators.fallbackTemplate||"expert";t.value=null,a(),_(o),ve(i)},M=$(null),R=()=>{const o=typeof e.compareIndicators=="object"&&e.compareIndicators.compareTemplate||"compare";_(o),v.value=!v.value};X(M);const N=()=>{var r;const o=(r=S.value)==null?void 0:r.map,s=o==null?void 0:o.getView().getZoom();if(s!=null){const d=o==null?void 0:o.getView();d!==void 0&&d.getZoom()&&d.animate({zoom:s-1,duration:250,easing:z})}},U=()=>{var r;const o=(r=S.value)==null?void 0:r.map,s=o==null?void 0:o.getView().getZoom();if(s!=null){const d=o==null?void 0:o.getView();d!==void 0&&d.getZoom()&&d.animate({zoom:s+1,duration:250,easing:z})}},G="https://api.opencagedata.com/geocode/v1/json?key=NO_KEY_FOUND";return(o,s)=>(u(),O("div",{ref_key:"rootRef",ref:M,class:"d-flex flex-column align-end"},[e.enableZoom?b((u(),h(f,{key:0,class:"map-btn",icon:[n(J)],size:"small",onClick:U},null,8,["icon"])),[[g,"Zoom in","bottom"]]):m("v-if",!0),e.enableZoom?b((u(),h(f,{key:1,class:"map-btn",icon:[n(Q)],size:"small",onClick:N},null,8,["icon"])),[[g,"Zoom out","bottom"]]):m("v-if",!0),e.exportMap?b((u(),h(f,{key:2,class:"map-btn",icon:[n(ee)],size:"small",onClick:s[0]||(s[0]=r=>w.value=!w.value)},null,8,["icon"])),[[g,"Extract Storytelling configuration","bottom"]]):m("v-if",!0),e.exportMap?(u(),h(re,{key:3,modelValue:w.value,"onUpdate:modelValue":s[1]||(s[1]=r=>w.value=r)},null,8,["modelValue"])):m("v-if",!0),e.changeProjection&&n(q)?b((u(),h(f,{key:4,class:"map-btn",icon:[n(oe)],size:"small",onClick:s[2]||(s[2]=r=>n(te)(n(q)))},null,8,["icon"])),[[g,"Change map projection","bottom"]]):m("v-if",!0),e.compareIndicators?b((u(),h(f,{key:5,class:"map-btn",icon:[D.value],size:"small",onClick:A},null,8,["icon"])),[[g,"Compare mode","bottom"]]):m("v-if",!0),e.backToPOIs&&(n(se)||n(ie))?b((u(),h(f,{key:6,class:"map-btn",icon:[n(ae)],size:"small",onClick:s[3]||(s[3]=r=>n(ce)())},null,8,["icon"])),[[g,"back to POIs","bottom"]]):m("v-if",!0),e.enableSearch?(u(),O("eox-geosearch",{key:7,for:n(S),endpoint:G,class:"geosearch-detached",label:"Search",small:"",button:"","list-direction":"left","results-direction":"down"},null,8,Me)):m("v-if",!0),Z(ne,{modelValue:v.value,"onUpdate:modelValue":s[4]||(s[4]=r=>v.value=r),maxWidth:p.value,width:p.value,"max-height":x.value,height:x.value},{default:ye(()=>[Z(le,{enableCompare:!0,enableHighlighting:!1,resultType:"cards",style:{"--select-filter-max-items":"8"},"filters-title":"Select an indicator to compare",subTitleProperty:"subtitle",imageProperty:"thumbnail",aggregateResults:"collection_group","results-title":"",onSelect:R})]),_:1},8,["modelValue","maxWidth","width","max-height","height"])],512))}},Te=H(Ve,[["styles",[Ie]]]),mt=Object.freeze(Object.defineProperty({__proto__:null,default:Te},Symbol.toStringTag,{value:"Module"}));export{Te as E,mt as a,pt as i};
