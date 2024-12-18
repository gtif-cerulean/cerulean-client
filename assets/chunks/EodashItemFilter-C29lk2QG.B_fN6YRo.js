var xo=Object.defineProperty;var lr=e=>{throw TypeError(e)};var vo=(e,t,n)=>t in e?xo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Xe=(e,t,n)=>vo(e,typeof t!="symbol"?t+"":t,n),nn=(e,t,n)=>t.has(e)||lr("Cannot "+n);var G=(e,t,n)=>(nn(e,t,"read from private field"),n?n.call(e):t.get(e)),U=(e,t,n)=>t.has(e)?lr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),wt=(e,t,n,r)=>(nn(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),E=(e,t,n)=>(nn(e,t,"access private method"),n);import{e as _o}from"./eo-dash.CqKGLMER.js";import{r as se,x as A,E as de}from"./lit-element.Cu4xVypU.js";import{a as rn,o as Nt}from"./map.Co3hxIo-.js";import{n as I}from"./when.BR7zwNJC.js";import{s as Mo}from"./all.style.BXiFe-7i.js";import{d as Ze,c as So}from"./repeat.BiCh9U-B.js";import{_ as Dt}from"./index.D_Wsj7oq.js";import{o as Ao}from"./orient2d.DArCjZZA.js";import{c as we,g as Lr}from"./commonjsHelpers.BosuxZz1.js";import{p as Co,v as $o,c as Lo,j as cr,t as ur,K as Eo,o as Ro}from"./framework.BUHMmcSd.js";import"./theme.B5SBmdDe.js";import"./directive.CF8sV3Lr.js";import"./directive-helpers.Hs5M0JDY.js";const Po=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  overflow-y: auto;
}
details {
  width: 100%;
}
`,nt=`
:host, :root {
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--secondary-color) 30%,
    transparent
  );
  --item-select-color: var(--primary-color);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --background-color: #fff;
  --padding: 0.5rem;
  --text-transform: capitalize;
  --form-flex-direction: column;
  --filter-display: block;
}
* {
  font-family: Roboto, sans-serif;
}
form#itemfilter {
  flex-direction: var(--form-flex-direction);
}
eox-itemfilter-container {
  min-width: 200px;
  display: var(--filter-display);
}
eox-itemfilter-results {
  flex-grow: 1;
}
ul {
  padding-left: 0;
  margin-top: 0;
}
li {
  list-style: none;
}
li span {
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  align-items: center;
}
.cards li span {
  display: block;
}
li label {
  display: flex;
  align-items: center;
}
details summary > * {
  display: inline;
}
details summary {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #0002;
  padding: .5rem var(--padding);
}

details > summary::-webkit-details-marker {
  display: none;
}

.title {
  font-size: 13px;
  align-items: center;
  text-transform: var(--text-transform);
}
.cards .title {
  font-size: 16px;
  font-weight: 600;
  text-wrap: auto;
  line-height: 19px;
}
.subtitle {
  font-size: 11px;
  opacity: .7;
  margin-top: 6px;
}
.cards .subtitle {
  font-size: 14px;
  color: #757575;
  text-wrap: auto;
  line-height: 19px;
}
.image {
  width: 24px;
  height: 24px;
  object-fit: cover;
  overflow: hidden;
  margin-right: 8px;
}
.cards .image {
  width: 100%;
  height: 190px;
  margin-bottom: 8px;
}
.title-container {
  display: flex;
  flex-direction: column;
}
h6.main-heading {
  font-size: 1rem;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-top: var(--padding);
  padding: 0 var(--padding);
}
details summary .title {
  display: flex;
  font-weight: 500;
}
details.details-filter summary::after,
details.details-results summary::before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%230009' viewBox='0 0 24 24'%3E%3Ctitle%3Echevron-right%3C/title%3E%3Cpath d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /%3E%3C/svg%3E");
  height: 24px;
  width: 24px;
}
details.details-filter summary::after {
  margin-left: auto;
  transform: rotate(90deg);
}
details[open] summary::before {
  transform: rotate(90deg);
}
details[open] summary::after {
  transform: rotate(270deg);
}
eox-itemfilter-expandcontainer {
  max-height: 200px;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 var(--padding);
}
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
li,
label,
details,
input[type="checkbox"],
input[type="radio"] {
  cursor: pointer;
}
input[type="checkbox"],
input[type="radio"] {
  margin: 0;
}
input[type="text"] {
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 5px 7px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
}
ul:not(#filters) > li {
  padding: 5px 0;
}
ul#results li {
  padding: 5px var(--padding);
}
ul#results ul.cards {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
  margin: 20px 0;
  cursor: initial;
}
ul#results ul.cards li {
  flex-basis: calc(33.3% - 77px);
  min-width: 0;
  align-self: flex-start;
}
@media screen and (max-width: 768px) {
  ul#results ul.cards li {
    flex-basis: calc(50% - 70px);
  }
}
@media screen and (max-width: 480px) {
  ul#results ul.cards li {
    flex-basis: 100%;
  }
}
section {
  position: relative;
  background-color: var(--background-color);
}
button#filter-reset {
  position: absolute;
  top: 0;
  right: var(--padding);
  padding: 2px 10px;
}
.count {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary-color);
  padding: 0 12px;
  height: 20px;
  border-radius: 10px;
  color: var(--primary-color);
  font-weight: 500;
  margin-left: 9px;
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 16px);
  margin-left: 8px;
  margin-right: 8px;
  --width: 100%;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
}

button.reset-icon:before {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
eox-itemfilter-expandcontainer button.reset-icon {
  margin-left: 4px;
  margin-top: -5px;
  height: 14px;
  width: 14px;
}
eox-itemfilter-expandcontainer button.reset-icon:before {
  height: 14px;
  width: 14px;
}
.inline-content {
  border: 1.5px solid var(--secondary-color);
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
  background: var(--inline-bg-color);
  margin-top: 4px;
  padding: 8px;
}
.inline-container {
  position: relative;
  align-items: center;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
}
.inline-container {
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  height: 24px;
  padding: 8px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
}
.inline-container:hover {
  border: 1px solid var(--primary-color);
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
.inline-container::-webkit-scrollbar {
  height: 2px;
}
.inline-container::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 2px;
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.chip-title {
  pointer-events: none;
  text-transform: var(--text-transform);
}
.chip {
  display: flex;
  align-items: center;
  background: var(--item-color);
  border-radius: 30px;
  margin-right: 4px;
  padding: 5px 10px;
  font-size: small;
  cursor: default;
  white-space: nowrap;
}
.chip.highlighted {
  background: var(--primary-color);
  color: white;
}
.chip-close {
  cursor: pointer;
  font-weight: 600;
  position: absolute;
  right: -25px;
  background: white;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  height: 24px;
  width: 24px;
}
.chip-close:before {
  position: absolute;
  text-indent: 0;
  line-height: initial;
  height: 24px;
  width: 24px;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' /%3E%3C/svg%3E");
}
.chip-container {
  position: relative;
  max-width: 75%;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:hover,
.autocomplete-input:hover {
  border: 1px solid var(--primary-color);
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  color: var(--background-color);
  background: var(--item-select-color);
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
}
.select-overflow {
  max-height: 185px;
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: red;
  font-size: x-small;
  top: -8px;
}
`;var kt,Er;class ko extends se{constructor(){super();U(this,kt);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return A`
      <style>
        ${!this.unstyled&&nt}
      </style>

      ${I(this.filterObject.featured,()=>A`<slot name="filter"></slot>`,()=>A`<details
            @toggle="${E(this,kt,Er)}"
            class="details-filter"
            ?open=${this.filterObject.expanded||de}
          >
            <summary>
              <span
                class="title"
                style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
              >
                ${this.filterObject.title||this.filterObject.key||"Filter"}
                <slot name="reset-button"></slot>
              </span>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}kt=new WeakSet,Er=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",ko);function pe(e){return Array.isArray?Array.isArray(e):kr(e)==="[object Array]"}const To=1/0;function Oo(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-To?"-0":t}function jo(e){return e==null?"":Oo(e)}function ne(e){return typeof e=="string"}function Rr(e){return typeof e=="number"}function No(e){return e===!0||e===!1||Do(e)&&kr(e)=="[object Boolean]"}function Pr(e){return typeof e=="object"}function Do(e){return Pr(e)&&e!==null}function V(e){return e!=null}function sn(e){return!e.trim().length}function kr(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const Bo="Incorrect 'index' type",Io=e=>`Invalid value for key ${e}`,Ho=e=>`Pattern length exceeds max of ${e}.`,qo=e=>`Missing ${e} property in key`,Uo=e=>`Property 'weight' in key '${e}' must be a positive integer`,fr=Object.prototype.hasOwnProperty;class Wo{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(r=>{let i=Tr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Tr(e){let t=null,n=null,r=null,i=1,o=null;if(ne(e)||pe(e))r=e,t=hr(e),n=un(e);else{if(!fr.call(e,"name"))throw new Error(qo("name"));const a=e.name;if(r=a,fr.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(Uo(a));t=hr(a),n=un(a),o=e.getFn}return{path:t,id:n,weight:i,src:r,getFn:o}}function hr(e){return pe(e)?e:e.split(".")}function un(e){return pe(e)?e.join("."):e}function Go(e,t){let n=[],r=!1;const i=(o,a,l)=>{if(V(o))if(!a[l])n.push(o);else{let u=a[l];const f=o[u];if(!V(f))return;if(l===a.length-1&&(ne(f)||Rr(f)||No(f)))n.push(jo(f));else if(pe(f)){r=!0;for(let h=0,p=f.length;h<p;h+=1)i(f[h],a,l+1)}else a.length&&i(f,a,l+1)}};return i(e,ne(t)?t.split("."):t,0),r?n:n[0]}const Vo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ko={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},zo={location:0,threshold:.6,distance:100},Yo={useExtendedSearch:!1,getFn:Go,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var _={...Ko,...Vo,...zo,...Yo};const Fo=/[^ ]+/g;function Xo(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(i){const o=i.match(Fo).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*e),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Rn{constructor({getFn:t=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){this.norm=Xo(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,ne(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();ne(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!V(t)||sn(t))return;let r={v:t,i:n,n:this.norm.get(t)};this.records.push(r)}_addObject(t,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(t):this.getFn(t,i.path);if(V(a)){if(pe(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(V(h))if(ne(h)&&!sn(h)){let p={v:h,i:f,n:this.norm.get(h)};l.push(p)}else pe(h)&&h.forEach((p,y)=>{u.push({nestedArrIndex:y,value:p})})}r.$[o]=l}else if(ne(a)&&!sn(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Or(e,t,{getFn:n=_.getFn,fieldNormWeight:r=_.fieldNormWeight}={}){const i=new Rn({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(Tr)),i.setSources(t),i.create(),i}function Zo(e,{getFn:t=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){const{keys:r,records:i}=e,o=new Rn({getFn:t,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function xt(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:i=_.distance,ignoreLocation:o=_.ignoreLocation}={}){const a=t/e.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function Jo(e=[],t=_.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=e.length;o<a;o+=1){let l=e[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[o-1]&&o-r>=t&&n.push([r,o-1]),n}const Le=32;function Qo(e,t,n,{location:r=_.location,distance:i=_.distance,threshold:o=_.threshold,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,includeMatches:u=_.includeMatches,ignoreLocation:f=_.ignoreLocation}={}){if(t.length>Le)throw new Error(Ho(Le));const h=t.length,p=e.length,y=Math.max(0,Math.min(r,p));let g=o,b=y;const x=l>1||u,C=x?Array(p):[];let M;for(;(M=e.indexOf(t,b))>-1;){let D=xt(t,{currentLocation:M,expectedLocation:y,distance:i,ignoreLocation:f});if(g=Math.min(D,g),b=M+h,x){let z=0;for(;z<h;)C[M+z]=1,z+=1}}b=-1;let L=[],$=1,O=h+p;const k=1<<h-1;for(let D=0;D<h;D+=1){let z=0,J=O;for(;z<J;)xt(t,{errors:D,currentLocation:y+J,expectedLocation:y,distance:i,ignoreLocation:f})<=g?z=J:O=J,J=Math.floor((O-z)/2+z);O=J;let Se=Math.max(1,y-J+1),ze=a?p:Math.min(y+J,p)+h,ge=Array(ze+2);ge[ze+1]=(1<<D)-1;for(let W=ze;W>=Se;W-=1){let je=W-1,it=n[e.charAt(je)];if(x&&(C[je]=+!!it),ge[W]=(ge[W+1]<<1|1)&it,D&&(ge[W]|=(L[W+1]|L[W])<<1|1|L[W+1]),ge[W]&k&&($=xt(t,{errors:D,currentLocation:je,expectedLocation:y,distance:i,ignoreLocation:f}),$<=g)){if(g=$,b=je,b<=y)break;Se=Math.max(1,2*y-b)}}if(xt(t,{errors:D+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:f})>g)break;L=ge}const te={isMatch:b>=0,score:Math.max(.001,$)};if(x){const D=Jo(C,l);D.length?u&&(te.indices=D):te.isMatch=!1}return te}function ea(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}class jr{constructor(t,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreLocation:f=_.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(y,g)=>{this.chunks.push({pattern:y,alphabet:ea(y),startIndex:g})},p=this.pattern.length;if(p>Le){let y=0;const g=p%Le,b=p-g;for(;y<b;)h(this.pattern.substr(y,Le),y),y+=Le;if(g){const x=p-Le;h(this.pattern.substr(x),x)}}else h(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let b={isMatch:!0,score:0};return r&&(b.indices=[[0,t.length-1]]),b}const{location:i,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,ignoreLocation:f}=this.options;let h=[],p=0,y=!1;this.chunks.forEach(({pattern:b,alphabet:x,startIndex:C})=>{const{isMatch:M,score:L,indices:$}=Qo(t,b,x,{location:i+C,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});M&&(y=!0),p+=L,M&&$&&(h=[...h,...$])});let g={isMatch:y,score:y?p/this.chunks.length:1};return y&&r&&(g.indices=h),g}}class _e{constructor(t){this.pattern=t}static isMultiMatch(t){return dr(t,this.multiRegex)}static isSingleMatch(t){return dr(t,this.singleRegex)}search(){}}function dr(e,t){const n=e.match(t);return n?n[1]:null}class ta extends _e{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class na extends _e{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const r=t.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,t.length-1]}}}class ra extends _e{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ia extends _e{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class sa extends _e{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class oa extends _e{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Nr extends _e{constructor(t,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreLocation:f=_.ignoreLocation}={}){super(t),this._bitapSearch=new jr(t,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Dr extends _e{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,r;const i=[],o=this.pattern.length;for(;(r=t.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const fn=[ta,Dr,ra,ia,oa,sa,na,Nr],pr=fn.length,aa=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,la="|";function ca(e,t={}){return e.split(la).map(n=>{let r=n.trim().split(aa).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,f=-1;for(;!u&&++f<pr;){const h=fn[f];let p=h.isMultiMatch(l);p&&(i.push(new h(p,t)),u=!0)}if(!u)for(f=-1;++f<pr;){const h=fn[f];let p=h.isSingleMatch(l);if(p){i.push(new h(p,t));break}}}return i})}const ua=new Set([Nr.type,Dr.type]);class fa{constructor(t,{isCaseSensitive:n=_.isCaseSensitive,includeMatches:r=_.includeMatches,minMatchCharLength:i=_.minMatchCharLength,ignoreLocation:o=_.ignoreLocation,findAllMatches:a=_.findAllMatches,location:l=_.location,threshold:u=_.threshold,distance:f=_.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:l,threshold:u,distance:f},this.pattern=n?t:t.toLowerCase(),this.query=ca(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;t=i?t:t.toLowerCase();let o=0,a=[],l=0;for(let u=0,f=n.length;u<f;u+=1){const h=n[u];a.length=0,o=0;for(let p=0,y=h.length;p<y;p+=1){const g=h[p],{isMatch:b,indices:x,score:C}=g.search(t);if(b){if(o+=1,l+=C,r){const M=g.constructor.type;ua.has(M)?a=[...a,...x]:a.push(x)}}else{l=0,o=0,a.length=0;break}}if(o){let p={isMatch:!0,score:l/o};return r&&(p.indices=a),p}}return{isMatch:!1,score:1}}}const hn=[];function ha(...e){hn.push(...e)}function dn(e,t){for(let n=0,r=hn.length;n<r;n+=1){let i=hn[n];if(i.condition(e,t))return new i(e,t)}return new jr(e,t)}const At={AND:"$and",OR:"$or"},pn={PATH:"$path",PATTERN:"$val"},gn=e=>!!(e[At.AND]||e[At.OR]),da=e=>!!e[pn.PATH],pa=e=>!pe(e)&&Pr(e)&&!gn(e),gr=e=>({[At.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Br(e,t,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=da(i);if(!a&&o.length>1&&!gn(i))return r(gr(i));if(pa(i)){const u=a?i[pn.PATH]:o[0],f=a?i[pn.PATTERN]:i[u];if(!ne(f))throw new Error(Io(u));const h={keyId:un(u),pattern:f};return n&&(h.searcher=dn(f,t)),h}let l={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];pe(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return gn(e)||(e=gr(e)),r(e)}function ga(e,{ignoreFieldNorm:t=_.ignoreFieldNorm}){e.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(t?1:o))}),n.score=r})}function ya(e,t){const n=e.matches;t.matches=[],V(n)&&n.forEach(r=>{if(!V(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),t.matches.push(a)})}function ma(e,t){t.score=e.score}function ba(e,t,{includeMatches:n=_.includeMatches,includeScore:r=_.includeScore}={}){const i=[];return n&&i.push(ya),r&&i.push(ma),e.map(o=>{const{idx:a}=o,l={item:t[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class Me{constructor(t,n={},r){this.options={..._,...n},this.options.useExtendedSearch,this._keyStore=new Wo(this.options.keys),this.setCollection(t,r)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Rn))throw new Error(Bo);this._myIndex=n||Or(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){V(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];t(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=ne(t)?ne(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return ga(u,{ignoreFieldNorm:l}),o&&u.sort(a),Rr(n)&&n>-1&&(u=u.slice(0,n)),ba(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(t){const n=dn(t,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!V(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:l,indices:h}]})}),i}_searchLogical(t){const n=Br(t,this.options),r=(l,u,f)=>{if(!l.children){const{keyId:p,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(u,p),searcher:y});return g&&g.length?[{idx:f,item:u,matches:g}]:[]}const h=[];for(let p=0,y=l.children.length;p<y;p+=1){const g=l.children[p],b=r(g,u,f);if(b.length)h.push(...b);else if(l.operator===At.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(V(l)){let f=r(n,l,u);f.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(t){const n=dn(t,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!V(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:t,value:n,searcher:r}){if(!V(n))return[];let i=[];if(pe(n))n.forEach(({v:o,i:a,n:l})=>{if(!V(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&i.push({score:f,key:t,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:f}=r.searchIn(o);l&&i.push({score:u,key:t,value:o,norm:a,indices:f})}return i}}Me.version="7.0.0";Me.createIndex=Or;Me.parseIndex=Zo;Me.config=_;Me.parseQuery=Br;ha(fa);function Ir(e,t){const n=new Me(t.filterProperties,{keys:["title"]}),r=e.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(t.filters).forEach(a=>{t.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function wa(e,t){const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${n}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const yn=Math.min,Be=Math.max,Ct=Math.round,vt=Math.floor,re=e=>({x:e,y:e});function Hr(e){return e.split("-")[0]}function xa(e){return e.split("-")[1]}function va(e){return e==="x"?"y":"x"}function _a(e){return e==="y"?"height":"width"}function qr(e){return["top","bottom"].includes(Hr(e))?"y":"x"}function Ma(e){return va(qr(e))}function Ur(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function yr(e,t,n){let{reference:r,floating:i}=e;const o=qr(t),a=Ma(t),l=_a(a),u=Hr(t),f=o==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(u){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-i.width,y:p};break;default:g={x:r.x,y:r.y}}switch(xa(t)){case"start":g[a]-=y*(n&&f?-1:1);break;case"end":g[a]+=y*(n&&f?-1:1);break}return g}const Sa=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(t));let f=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:p}=yr(f,r,u),y=r,g={},b=0;for(let x=0;x<l.length;x++){const{name:C,fn:M}=l[x],{x:L,y:$,data:O,reset:k}=await M({x:h,y:p,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:f,platform:a,elements:{reference:e,floating:t}});h=L??h,p=$??p,g={...g,[C]:{...g[C],...O}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(y=k.placement),k.rects&&(f=k.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):k.rects),{x:h,y:p}=yr(f,y,u)),x=-1)}return{x:h,y:p,placement:y,strategy:i,middlewareData:g}};function Bt(){return typeof window<"u"}function Ge(e){return Wr(e)?(e.nodeName||"").toLowerCase():"#document"}function K(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function oe(e){var t;return(t=(Wr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Wr(e){return Bt()?e instanceof Node||e instanceof K(e).Node:!1}function Q(e){return Bt()?e instanceof Element||e instanceof K(e).Element:!1}function ie(e){return Bt()?e instanceof HTMLElement||e instanceof K(e).HTMLElement:!1}function mr(e){return!Bt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof K(e).ShadowRoot}function rt(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=ee(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function Aa(e){return["table","td","th"].includes(Ge(e))}function It(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Pn(e){const t=kn(),n=Q(e)?ee(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Ca(e){let t=xe(e);for(;ie(t)&&!qe(t);){if(Pn(t))return t;if(It(t))return null;t=xe(t)}return null}function kn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function qe(e){return["html","body","#document"].includes(Ge(e))}function ee(e){return K(e).getComputedStyle(e)}function Ht(e){return Q(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function xe(e){if(Ge(e)==="html")return e;const t=e.assignedSlot||e.parentNode||mr(e)&&e.host||oe(e);return mr(t)?t.host:t}function Gr(e){const t=xe(e);return qe(t)?e.ownerDocument?e.ownerDocument.body:e.body:ie(t)&&rt(t)?t:Gr(t)}function Je(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Gr(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=K(i);if(o){const l=mn(a);return t.concat(a,a.visualViewport||[],rt(i)?i:[],l&&n?Je(l):[])}return t.concat(i,Je(i,[],n))}function mn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Vr(e){const t=ee(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=ie(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Ct(n)!==o||Ct(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Tn(e){return Q(e)?e:e.contextElement}function Ie(e){const t=Tn(e);if(!ie(t))return re(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Vr(t);let a=(o?Ct(n.width):n.width)/r,l=(o?Ct(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const $a=re(0);function Kr(e){const t=K(e);return!kn()||!t.visualViewport?$a:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function La(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==K(e)?!1:t}function Ee(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Tn(e);let a=re(1);t&&(r?Q(r)&&(a=Ie(r)):a=Ie(e));const l=La(o,n,r)?Kr(o):re(0);let u=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(o){const y=K(o),g=r&&Q(r)?K(r):r;let b=y,x=mn(b);for(;x&&r&&g!==b;){const C=Ie(x),M=x.getBoundingClientRect(),L=ee(x),$=M.left+(x.clientLeft+parseFloat(L.paddingLeft))*C.x,O=M.top+(x.clientTop+parseFloat(L.paddingTop))*C.y;u*=C.x,f*=C.y,h*=C.x,p*=C.y,u+=$,f+=O,b=K(x),x=mn(b)}}return Ur({width:h,height:p,x:u,y:f})}function On(e,t){const n=Ht(e).scrollLeft;return t?t.left+n:Ee(oe(e)).left+n}function zr(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:On(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function Ea(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",a=oe(r),l=t?It(t.floating):!1;if(r===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},f=re(1);const h=re(0),p=ie(r);if((p||!p&&!o)&&((Ge(r)!=="body"||rt(a))&&(u=Ht(r)),ie(r))){const g=Ee(r);f=Ie(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=a&&!p&&!o?zr(a,u,!0):re(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-u.scrollTop*f.y+h.y+y.y}}function Ra(e){return Array.from(e.getClientRects())}function Pa(e){const t=oe(e),n=Ht(e),r=e.ownerDocument.body,i=Be(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Be(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+On(e);const l=-n.scrollTop;return ee(r).direction==="rtl"&&(a+=Be(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function ka(e,t){const n=K(e),r=oe(e),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const f=kn();(!f||f&&t==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l,y:u}}function Ta(e,t){const n=Ee(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=ie(e)?Ie(e):re(1),a=e.clientWidth*o.x,l=e.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:a,height:l,x:u,y:f}}function br(e,t,n){let r;if(t==="viewport")r=ka(e,n);else if(t==="document")r=Pa(oe(e));else if(Q(t))r=Ta(t,n);else{const i=Kr(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ur(r)}function Yr(e,t){const n=xe(e);return n===t||!Q(n)||qe(n)?!1:ee(n).position==="fixed"||Yr(n,t)}function Oa(e,t){const n=t.get(e);if(n)return n;let r=Je(e,[],!1).filter(l=>Q(l)&&Ge(l)!=="body"),i=null;const o=ee(e).position==="fixed";let a=o?xe(e):e;for(;Q(a)&&!qe(a);){const l=ee(a),u=Pn(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||rt(a)&&!u&&Yr(e,a))?r=r.filter(h=>h!==a):i=l,a=xe(a)}return t.set(e,r),r}function ja(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?It(t)?[]:Oa(t,this._c):[].concat(n),r],l=a[0],u=a.reduce((f,h)=>{const p=br(t,h,i);return f.top=Be(p.top,f.top),f.right=yn(p.right,f.right),f.bottom=yn(p.bottom,f.bottom),f.left=Be(p.left,f.left),f},br(t,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Na(e){const{width:t,height:n}=Vr(e);return{width:t,height:n}}function Da(e,t,n){const r=ie(t),i=oe(t),o=n==="fixed",a=Ee(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const u=re(0);if(r||!r&&!o)if((Ge(t)!=="body"||rt(i))&&(l=Ht(t)),r){const y=Ee(t,!0,o,t);u.x=y.x+t.clientLeft,u.y=y.y+t.clientTop}else i&&(u.x=On(i));const f=i&&!r&&!o?zr(i,l):re(0),h=a.left+l.scrollLeft-u.x-f.x,p=a.top+l.scrollTop-u.y-f.y;return{x:h,y:p,width:a.width,height:a.height}}function on(e){return ee(e).position==="static"}function wr(e,t){if(!ie(e)||ee(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return oe(e)===n&&(n=n.ownerDocument.body),n}function Fr(e,t){const n=K(e);if(It(e))return n;if(!ie(e)){let i=xe(e);for(;i&&!qe(i);){if(Q(i)&&!on(i))return i;i=xe(i)}return n}let r=wr(e,t);for(;r&&Aa(r)&&on(r);)r=wr(r,t);return r&&qe(r)&&on(r)&&!Pn(r)?n:r||Ca(e)||n}const Ba=async function(e){const t=this.getOffsetParent||Fr,n=this.getDimensions,r=await n(e.floating);return{reference:Da(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ia(e){return ee(e).direction==="rtl"}const Ha={convertOffsetParentRelativeRectToViewportRelativeRect:Ea,getDocumentElement:oe,getClippingRect:ja,getOffsetParent:Fr,getElementRects:Ba,getClientRects:Ra,getDimensions:Na,getScale:Ie,isElement:Q,isRTL:Ia};function qa(e,t){let n=null,r;const i=oe(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const{left:f,top:h,width:p,height:y}=e.getBoundingClientRect();if(l||t(),!p||!y)return;const g=vt(h),b=vt(i.clientWidth-(f+p)),x=vt(i.clientHeight-(h+y)),C=vt(f),L={rootMargin:-g+"px "+-b+"px "+-x+"px "+-C+"px",threshold:Be(0,yn(1,u))||1};let $=!0;function O(k){const te=k[0].intersectionRatio;if(te!==u){if(!$)return a();te?a(!1,te):r=setTimeout(()=>{a(!1,1e-7)},1e3)}$=!1}try{n=new IntersectionObserver(O,{...L,root:i.ownerDocument})}catch{n=new IntersectionObserver(O,L)}n.observe(e)}return a(!0),o}function Ua(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=Tn(e),h=i||o?[...f?Je(f):[],...Je(t)]:[];h.forEach(M=>{i&&M.addEventListener("scroll",n,{passive:!0}),o&&M.addEventListener("resize",n)});const p=f&&l?qa(f,n):null;let y=-1,g=null;a&&(g=new ResizeObserver(M=>{let[L]=M;L&&L.target===f&&g&&(g.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var $;($=g)==null||$.observe(t)})),n()}),f&&!u&&g.observe(f),g.observe(t));let b,x=u?Ee(e):null;u&&C();function C(){const M=Ee(e);x&&(M.x!==x.x||M.y!==x.y||M.width!==x.width||M.height!==x.height)&&n(),x=M,b=requestAnimationFrame(C)}return n(),()=>{var M;h.forEach(L=>{i&&L.removeEventListener("scroll",n),o&&L.removeEventListener("resize",n)}),p==null||p(),(M=g)==null||M.disconnect(),g=null,u&&cancelAnimationFrame(b)}}const Wa=(e,t,n)=>{const r=new Map,i={platform:Ha,...n},o={...i.platform,_c:r};return Sa(e,t,{...i,platform:o})};function Ga(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return Ua(t,n,()=>{n.matches(":popover-open")&&Wa(t,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Xr(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Ir({target:{value:""}},e)}function Va(e,t){t.inlineMode&&e.stopPropagation()}function Ka(e){e.inlineMode&&(e.showDropdown=!0)}function za(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function Ya(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(Xr(t),t.showDropdown=!1)}function Fa(e,t){t.inlineMode&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(Xr(t),t.showDropdown=!1)}function Xa(e,t){var n,r,i=0,o,a,l,u,f,h,p,y=e[0],g=e[1],b=t.length;for(n=0;n<b;n++){r=0;var x=t[n],C=x.length-1;if(h=x[0],h[0]!==x[C][0]&&h[1]!==x[C][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-g,r;r<C;r++){if(p=x[r+1],u=p[0]-y,f=p[1]-g,l===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&l<0||f<0&&l>=0){if(o=Ao(a,u,l,f,0,0),o===0)return 0;(o>0&&f>0&&l<=0||o<0&&f<=0&&l>0)&&i++}h=p,l=f,a=u}}return i%2!==0}function Re(e,t,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=t||{},r.geometry=e,r}function Za(e,t,n={}){if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(e.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!xr(e[0])||!xr(e[1]))throw new Error("coordinates must contain numbers");return Re({type:"Point",coordinates:e},t,n)}function Ja(e,t,n={}){if(e.length<2)throw new Error("coordinates must be an array of two or more positions");return Re({type:"LineString",coordinates:e},t,n)}function bn(e,t={}){const n={type:"FeatureCollection"};return t.id&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.features=e,n}function Qa(e,t,n={}){return Re({type:"MultiLineString",coordinates:e},t,n)}function xr(e){return!isNaN(e)&&e!==null&&!Array.isArray(e)}function Zr(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function el(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Ue(e){return e.type==="Feature"?e.geometry:e}function Z(e,t,n={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const r=Zr(e),i=Ue(t),o=i.type,a=t.bbox;let l=i.coordinates;if(a&&tl(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var f=0;f<l.length;++f){const h=Xa(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function tl(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}class Jr{constructor(t=[],n=nl){if(this.data=t,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const t=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:n,compare:r}=this,i=n[t];for(;t>0;){const o=t-1>>1,a=n[o];if(r(i,a)>=0)break;n[t]=a,t=o}n[t]=i}_down(t){const{data:n,compare:r}=this,i=this.length>>1,o=n[t];for(;t<i;){let a=(t<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,o)>=0)break;n[t]=l,t=a}n[t]=o}}function nl(e,t){return e<t?-1:e>t?1:0}function Qr(e,t){return e.p.x>t.p.x?1:e.p.x<t.p.x?-1:e.p.y!==t.p.y?e.p.y>t.p.y?1:-1:1}function rl(e,t){return e.rightSweepEvent.p.x>t.rightSweepEvent.p.x?1:e.rightSweepEvent.p.x<t.rightSweepEvent.p.x?-1:e.rightSweepEvent.p.y!==t.rightSweepEvent.p.y?e.rightSweepEvent.p.y<t.rightSweepEvent.p.y?1:-1:1}class vr{constructor(t,n,r,i){this.p={x:t[0],y:t[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(t){return this.p.x===t.p.x&&this.p.y===t.p.y}}function il(e,t){if(e.type==="FeatureCollection"){const n=e.features;for(let r=0;r<n.length;r++)_r(n[r],t)}else _r(e,t)}let _t=0,Mt=0,St=0;function _r(e,t){const n=e.type==="Feature"?e.geometry:e;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;Mt=Mt+1;for(let u=0;u<r[i][o].length-1;u++){l=r[i][o][u+1];const f=new vr(a,_t,Mt,St),h=new vr(l,_t,Mt,St+1);f.otherEvent=h,h.otherEvent=f,Qr(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),t.push(f),t.push(h),a=l,St=St+1}}_t=_t+1}class sl{constructor(t){this.leftSweepEvent=t,this.rightSweepEvent=t.otherEvent}}function ol(e,t){if(e===null||t===null||e.leftSweepEvent.ringId===t.leftSweepEvent.ringId&&(e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.rightSweepEvent)||e.leftSweepEvent.isSamePoint(t.leftSweepEvent)||e.leftSweepEvent.isSamePoint(t.rightSweepEvent)))return!1;const n=e.leftSweepEvent.p.x,r=e.leftSweepEvent.p.y,i=e.rightSweepEvent.p.x,o=e.rightSweepEvent.p.y,a=t.leftSweepEvent.p.x,l=t.leftSweepEvent.p.y,u=t.rightSweepEvent.p.x,f=t.rightSweepEvent.p.y,h=(f-l)*(i-n)-(u-a)*(o-r),p=(u-a)*(r-l)-(f-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const g=p/h,b=y/h;if(g>=0&&g<=1&&b>=0&&b<=1){const x=n+g*(i-n),C=r+g*(o-r);return[x,C]}return!1}function al(e,t){t=t||!1;const n=[],r=new Jr([],rl);for(;e.length;){const i=e.pop();if(i.isLeftEndpoint){const o=new sl(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(t&&l.leftSweepEvent.featureId===i.featureId)continue;const u=ol(o,l);u!==!1&&n.push(u)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function ll(e,t){const n=new Jr([],Qr);return il(e,n),al(n,t)}var cl=ll;function jn(e,t,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!1}=n;let o=[];e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(Re(e)),t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(Re(t));const a=cl(bn(o),i);let l=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,l.push(f))})}else l=a;return bn(l.map(u=>Za(u)))}function ei(e,t,n){if(e!==null)for(var r,i,o,a,l,u,f,h=0,p=0,y,g=e.type,b=g==="FeatureCollection",x=g==="Feature",C=b?e.features.length:1,M=0;M<C;M++){f=b?e.features[M].geometry:x?e.geometry:e,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var L=0;L<l;L++){var $=0,O=0;if(a=y?f.geometries[L]:f,a!==null){u=a.coordinates;var k=a.type;switch(h=0,k){case null:break;case"Point":if(t(u,p,M,$,O)===!1)return!1;p++,$++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(t(u[r],p,M,$,O)===!1)return!1;p++,k==="MultiPoint"&&$++}k==="LineString"&&$++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(t(u[r][i],p,M,$,O)===!1)return!1;p++}k==="MultiLineString"&&$++,k==="Polygon"&&O++}k==="Polygon"&&$++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(O=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(t(u[r][i][o],p,M,$,O)===!1)return!1;p++}O++}$++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(ei(a.geometries[r],t)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function ul(e,t){var n,r,i,o,a,l,u,f,h,p,y=0,g=e.type==="FeatureCollection",b=e.type==="Feature",x=g?e.features.length:1;for(n=0;n<x;n++){for(l=g?e.features[n].geometry:b?e.geometry:e,f=g?e.features[n].properties:b?e.properties:{},h=g?e.features[n].bbox:b?e.bbox:void 0,p=g?e.features[n].id:b?e.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(t(null,y,f,h,p)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(o,y,f,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(t(o.geometries[r],y,f,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function $t(e,t){ul(e,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return t(Re(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],p={type:u,coordinates:h};if(t(Re(p,i),r,f)===!1)return!1}})}function wn(e,t={}){const n=Ue(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return fl(n,t);case"MultiPolygon":return hl(n,t);default:throw new Error("invalid poly")}}function fl(e,t={}){const r=Ue(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{};return ti(r,i)}function hl(e,t={}){const r=Ue(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{},o=[];return r.forEach(a=>{o.push(ti(a,i))}),bn(o)}function ti(e,t){return e.length>1?Qa(e,t):Ja(e[0],t)}function dl(e,t,n={}){var r;const i=(r=n.ignoreSelfIntersections)!=null?r:!1;let o=!0;return $t(e,a=>{$t(t,l=>{if(o===!1)return!1;o=pl(a.geometry,l.geometry,i)})}),o}function pl(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!bl(e.coordinates,t.coordinates);case"LineString":return!Mr(t,e);case"Polygon":return!Z(e,t)}break;case"LineString":switch(t.type){case"Point":return!Mr(e,t);case"LineString":return!gl(e,t,n);case"Polygon":return!Sr(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!Z(t,e);case"LineString":return!Sr(e,t,n);case"Polygon":return!yl(t,e,n)}}return!1}function Mr(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(ml(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function gl(e,t,n){return jn(e,t,{ignoreSelfIntersections:n}).features.length>0}function Sr(e,t,n){for(const i of t.coordinates)if(Z(i,e))return!0;return jn(t,wn(e),{ignoreSelfIntersections:n}).features.length>0}function yl(e,t,n){for(const i of e.coordinates[0])if(Z(i,t))return!0;for(const i of t.coordinates[0])if(Z(i,e))return!0;return jn(wn(e),wn(t),{ignoreSelfIntersections:n}).features.length>0}function ml(e,t,n){const r=n[0]-e[0],i=n[1]-e[1],o=t[0]-e[0],a=t[1]-e[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:a>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function bl(e,t){return e[0]===t[0]&&e[1]===t[1]}function wl(e,t,n={}){var r;const i=(r=n.ignoreSelfIntersections)!=null?r:!1;let o=!1;return $t(e,a=>{$t(t,l=>{if(o===!0)return!0;o=!dl(a.geometry,l.geometry,{ignoreSelfIntersections:i})})}),o}var xl=wl;function Lt(e,t={}){if(e.bbox!=null&&t.recompute!==!0)return e.bbox;const n=[1/0,1/0,-1/0,-1/0];return ei(e,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Et(e,t,n={}){const r=Zr(e),i=el(t);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),vl(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function vl(e,t,n,r,i){const o=n[0],a=n[1],l=e[0],u=e[1],f=t[0],h=t[1],p=n[0]-l,y=n[1]-u,g=f-l,b=h-u,x=p*b-y*g;if(i!==null){if(Math.abs(x)>i)return!1}else if(x!==0)return!1;if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<=f:f<=o&&o<l:b>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<f:f<o&&o<=l:b>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<f:f<o&&o<l:b>0?u<a&&a<h:h<a&&a<u}else return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<=f:f<=o&&o<=l:b>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function _l(e,t){var n=Ue(e),r=Ue(t),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return Ml(n,r);case"LineString":return Et(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return Z(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return Sl(n,r);case"LineString":return Al(n,r);case"Polygon":case"MultiPolygon":return Cl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return $l(n,r);case"Polygon":case"MultiPolygon":return Ll(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return El(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Ml(e,t){var n,r=!1;for(n=0;n<t.coordinates.length;n++)if(ri(t.coordinates[n],e.coordinates)){r=!0;break}return r}function Sl(e,t){for(var n=0;n<e.coordinates.length;n++){for(var r=!1,i=0;i<t.coordinates.length;i++)ri(e.coordinates[n],t.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Al(e,t){for(var n=!1,r=0;r<e.coordinates.length;r++){if(!Et(e.coordinates[r],t))return!1;n||(n=Et(e.coordinates[r],t,{ignoreEndVertices:!0}))}return n}function Cl(e,t){for(var n=!0,r=!1,i=0;i<e.coordinates.length;i++){if(r=Z(e.coordinates[i],t),!r){n=!1;break}r=Z(e.coordinates[i],t,{ignoreBoundary:!0})}return n&&r}function $l(e,t){for(var n=0;n<e.coordinates.length;n++)if(!Et(e.coordinates[n],t))return!1;return!0}function Ll(e,t){var n=Lt(t),r=Lt(e);if(!ni(n,r))return!1;for(var i=!1,o=0;o<e.coordinates.length;o++){if(!Z(e.coordinates[o],t))return!1;if(i||(i=Z(e.coordinates[o],t,{ignoreBoundary:!0})),!i&&o<e.coordinates.length-1){var a=Rl(e.coordinates[o],e.coordinates[o+1]);i=Z(a,t,{ignoreBoundary:!0})}}return i}function El(e,t){var n=Lt(e),r=Lt(t);if(!ni(r,n))return!1;for(var i=0;i<e.coordinates[0].length;i++)if(!Z(e.coordinates[0][i],t))return!1;return!0}function ni(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function ri(e,t){return e[0]===t[0]&&e[1]===t[1]}function Rl(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var Pl=_l;const kl=(e,t)=>t?xl(e,t):!0,Tl=(e,t)=>t?Pl(e,t):!0;function Ol(e,t="highlight",n="title"){const r=(o,a,l)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=l},i=(o,a=[])=>{let l="",u=0;return a.forEach(f=>{const h=f[1]+1;l+=[o.substring(u,f[0]),`<mark class="${t}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),l+=o.substring(u),l};return e.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const l={...o};return a.forEach(u=>{u.key===n&&r(l,u.key,i(u.value,u.indices))}),l})}let ii;const jl=(e,t)=>{ii=new Me(e,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...t})},Nl=async(e,t,n)=>{const r=Object.entries(t).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,f])=>{const h="$or",p=[],y=(g,b)=>{const x={};f.type==="text"?x[g]=`${b}`:x[u]=`="${g}"`,p.push(x)};return Object.entries(f.state).filter(([,g])=>g).forEach(([g,b])=>y(g,b)),p.length>0&&l.push({[h]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=e;else{const l={$and:[...r]},u=ii.search(l);i=n.enableHighlighting?Ol(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(t).filter(([,l])=>l.type==="range").reduce((l,[u,f])=>(l[u]={min:f.state.min,max:f.state.max,format:f.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const[h,p]of Object.entries(o)){const y=b=>p.format==="date"?Ze(b).unix():b,g=Qe(h,i[u]);g?Array.isArray(g)?f[h]=o[h].min<=y(g[1])&&y(g[0])<=o[h].max:y(g)>=o[h].min&&y(g)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}const a=Object.entries(t).filter(([,l])=>l.type==="spatial").reduce((l,[u,f])=>(l[u]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const h of Object.keys(a)){const p=Qe(h,i[u]),y=a[h].mode||"within";p&&(y==="within"?Tl(p,a[h].geometry):kl(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function Dl(e,t){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function qt(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function Ar(e,t){return e*2+t}function Bl(e){return Object.keys(e).map(t=>({title:A`${e[t].title||e[t].key}:
        <strong>${e[t].stringifiedState}</strong>`,key:t})).filter(t=>e[t.key].dirty)}function xn(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function Il(e,t,n){return await(await fetch(`${n.externalFilter(e,t)}`)).json()}function si(e,t,n){let r;if(e.detail?r=e.detail.target:r=e.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||t!=null&&t.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||t!=null&&t.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Qe(e,t){return e!=null&&e.includes(".")?e.split(".").reduce((n,r)=>n&&n[r],t):t[e]}var R,oi,vn,_n,ai,Mn,Sn,li,An,ci,ui;class Hl extends se{constructor(){super();U(this,R);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=E(this,R,ai).bind(this),this._handleKeyDown=E(this,R,Mn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&E(this,R,vn).call(this)}disconnectedCallback(){this.inlineMode&&E(this,R,_n).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?E(this,R,vn).call(this):E(this,R,_n).call(this))}render(){return A`
      <style>
        ${!this.unstyled&&nt}
      </style>
      ${this.inlineMode?A`
            <div
              class="inline-container-wrapper"
              @click="${E(this,R,Sn)}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Bl(this.filters)}
                      .controller=${{remove:n=>E(this,R,ci).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${I(xn(this.filters),()=>A`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${xn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${E(this,R,Sn)}"
                    @focus="${E(this,R,li)}"
                    @input="${E(this,R,ui)}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div popover="manual">
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${E(this,R,Mn)}"
                  @click="${E(this,R,An)}"
                  @focus="${E(this,R,An)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:A`<slot name="section"></slot>`}
    `}}R=new WeakSet,oi=function(){setTimeout(()=>this._overlayCleanup=Ga(this))},vn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),E(this,R,oi).call(this)},_n=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},ai=function(n){Fa(n,this)},Mn=function(n){Ya(n,this)},Sn=function(n){za(n,this)},li=function(){Ka(this)},An=function(n){Va(n,this)},ci=function(n){wa(n,this)},ui=function(n){Ir(n,this)};customElements.define("eox-itemfilter-container",Hl);function ql(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",qt(e.filterObject),e.requestUpdate()}function Ul(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}const Cn="ddd, D MMM YYYY HH:mm:ss";function Wl(e){if(e.filterObject=qt(e.filterObject),e.filterObject){const t=e.querySelector("tc-range-slider"),n=e.filterObject.min,r=e.filterObject.max;t.value1!==n&&(t.value1=n),t.value2!==r&&(t.value2=r)}e.requestUpdate()}function Gl(e,t){const[n,r]=e.detail.values;(n!==t.filterObject.state.min||r!==t.filterObject.state.max)&&([t.filterObject.state.min,t.filterObject.state.max]=[n,r],t.filterObject.dirty=!0),t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${Ze.unix(n).format(Cn)} - ${Ze.unix(r).format(Cn)}`:`${n} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),n===t.filterObject.min&&r===t.filterObject.max?t.reset():t.requestUpdate()}function Vl(e,t,n){const r=n.filterObject.format==="date",i=n.filterObject.state[e],o=r?Ze.unix(i).format(Cn):i;return A`<div class="range-${t}">${o}</div>`}function Kl(e){zl(-1,e),qt(e.filterObject),e.requestUpdate()}function zl(e,t){t.selectedItems=[],Nn(t),hi(t)}function fi(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((r,i)=>i!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),Nn(t),hi(t)}function Yl(e,t){t.query=e.target.value,t.showSuggestions=!0}function Fl(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&fi(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function Xl(e,t){(e.has("suggestions")||e.has("query"))&&Nn(t)}function Zl(e,t){var r;const n=((r=e.filterObject)==null?void 0:r.sort)||((i,o)=>i.localeCompare(o));return t.sort(n).map(i=>i)}function Nn(e){var n,r,i;let t;e.query&&(t=new Me(e.suggestions,{threshold:.4}).search(e.query).map(a=>a.item)),e.filteredSuggestions=Zl(e,t||e.suggestions),(n=e.filterObject)!=null&&n.filterKeys&&(e.filteredSuggestions=(r=e.filterObject)==null?void 0:r.filterKeys.map(o=>`${o}`),e.filterObject.state=(i=e.filterObject)==null?void 0:i.filterKeys.map(o=>`${o}`).reduce((o,a)=>(a in o||(o[a]=void 0),o),e.filterObject.state)),e.highlightedIndex=-1}function hi(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function Jl(e){qt(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function Ql(e){e.renderRoot.querySelector("#eox-map").innerHTML="",di(e)}function ec(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function di(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&tc(e.geometry),r=Dl(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(a)};e.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function tc(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}var Tt;class nc extends se{constructor(){super();U(this,Tt,()=>{Ul(this)});Xe(this,"debouncedInputHandler",Dt(G(this,Tt),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){ql(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return A`
        <style></style>
        <div class="text-container">
          <div class="text-container-wrapper">
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${((n=this.filterObject.validation)==null?void 0:n.pattern)||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${r=>r.stopPropagation()}
            />
          </div>
        </div>
        <small class="error-validation"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}Tt=new WeakMap;customElements.define("eox-itemfilter-text",nc);function rc(e,t,n){return e.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(t):!0)&&Array.isArray(i)?i.includes(t):i===t})}function ic(e,t){return A`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||de}
    >
      <summary>
        <span class="title">
          ${e}
          <span class="count"
            >${t.aggregateResults(t.results,e).length}</span
          >
        </span>
      </summary>
      <div>
        ${pi(e,t)}
      </div>
    </details>
  `}function pi(e,t){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,o=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":de};return A`
    <ul class=${t.resultType}>
      ${So(r,a=>a.id,a=>A`
          <li
            class=${o(a)}
            @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
          >
            <span id="${a.id}">
              ${I(i.subTitleProperty||i.imageProperty,()=>A`
                  ${Qe(i.imageProperty,a)?A`
                        <img
                          class="image"
                          src="${Qe(i.imageProperty,a)}"
                        />
                      `:de}
                  <div class="title-container">
                    <span class="title"
                      >${rn(a[i.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${rn(a[i.subTitleProperty])}</span
                    >
                  </div>
                `,()=>A`
                  <span class="title"
                    >${rn(a[i.titleProperty])}</span
                  >
                `)}
            </span>
          </li>
        `)}
    </ul>
  `}var ke,$n,gi;class sc extends se{constructor(){super();U(this,ke);this.config=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list"}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Object},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String}}}aggregateResults(n,r){return rc(n,r,this)}createRenderRoot(){return this}handleAccordion(n){si(n,this.config,this)}render(){return A`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${I(this.results.length<1,()=>A`<small class="no-results">No matching items</small>`,()=>de)}
          <ul id="results" part="results">
            ${I(this.config.aggregateResults,()=>Nt(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>A`${I(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>A`<div style="margin-left: -8px">
                          ${E(this,ke,$n).call(this,n)}
                        </div>`,()=>E(this,ke,gi).call(this,n))}`),()=>E(this,ke,$n).call(this))}
          </ul>
        </div>
      </section>
    `}}ke=new WeakSet,$n=function(n){return pi(n,this)},gi=function(n){return ic(n,this)};customElements.define("eox-itemfilter-results",sc);const oc=`input[type="checkbox"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}input[type="checkbox"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="checkbox"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");}`,ac=`input[type="radio"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}label span { font-size: small;}input[type="radio"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-blank%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="radio"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-marked%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' /%3E%3C/svg%3E");}`;var ve,mi,bi,wi;class yi extends se{constructor(){super();U(this,ve);Xe(this,"debouncedInputHandler",Dt(E(this,ve,wi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){Xl(n,this)}reset(){Kl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow":de;return A`
      <style>
        ${!this.unstyled&&nt}
        ${!this.unstyled&&oc}
        ${!this.unstyled&&ac}
      </style>
      ${I(this.suggestions.length>10,()=>A`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${E(this,ve,mi)}
                @keydown=${E(this,ve,bi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(i=>A`
              <li
                data-identifier="${i.toString().toLowerCase()}"
                data-title="${i}"
              >
                <label>
                  <input
                    type="${n}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${o=>{o.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title">${i}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}ve=new WeakSet,mi=function(n){Yl(n,this)},bi=function(n){Fl(n,this)},wi=function(n){fi(n,this)},Xe(yi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",yi);var Te,vi,Ln;class xi extends se{constructor(){super();U(this,Te);this.filterObject={},this.tabIndex=0,this.inputHandler=E(this,Te,vi).bind(this),this.debouncedInputHandler=Dt(this.inputHandler,500,{leading:!1})}reset(){Wl(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>A`
        ${E(this,Te,Ln).call(this,"min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min||this.filterObject.min}"
          value2="${this.filterObject.state.max||this.filterObject.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${E(this,Te,Ln).call(this,"max","after")}
      `)}}Te=new WeakSet,vi=function(n){Gl(n,this)},Ln=function(n,r){return Vl(n,r,this)},Xe(xi,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",xi);var Ot,_i;class lc extends se{constructor(){super();U(this,Ot);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){Jl(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return A`
        <form style="display: inline">
          ${Nt(["intersects","within"],r=>A`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===r||de}"
                  value="${r}"
                  @click=${()=>E(this,Ot,_i).call(this,r)}
                />
                <small>${r} filter geometry</small>
              </label>
            `)}
        </form>
        <eox-itemfilter-spatial-filter
          exportparts="map: spatial-filter-map"
          .geometry="${(n=this.filterObject.state)==null?void 0:n.geometry}"
          @filter="${r=>{this.filterObject.state.geometry=r.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
        ></eox-itemfilter-spatial>
      `})}}Ot=new WeakSet,_i=function(n){ec(n,this)};customElements.define("eox-itemfilter-spatial",lc);var jt,Mi;class cc extends se{constructor(){super();U(this,jt);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){E(this,jt,Mi).call(this)}reset(){Ql(this)}render(){return A`<div id="eox-map"></div>`}}jt=new WeakSet,Mi=function(){di(this)};customElements.define("eox-itemfilter-spatial-filter",cc);function uc(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target.classList.add("highlighted"),t.requestUpdate()}function fc(e,t){const{code:n,target:r}=e;r.id==="eox-itemfilter-input-search"&&(t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&hc(n,e.target.value??"",t)))}function hc(e,t,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&r&&r.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var Oe,En,Si;class dc extends se{constructor(){super();U(this,Oe);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",E(this,Oe,En).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",E(this,Oe,En).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return A`
      <style>
        ${nt}
      </style>
      <span class="chip-container">
        ${Nt(this.items,n=>A`
            <span class="chip" @click=${E(this,Oe,Si).bind(this)}>
              <span class="chip-title">${n.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${n.key}
                  @click=${r=>{r.stopPropagation(),this.controller.remove(r),this.requestUpdate()}}
                ></span>
            </span>
            </span>
          `)}
      </span>
    `}}Oe=new WeakSet,En=function(n){fc(n,this)},Si=function(n){uc(n,this)};customElements.define("eox-itemfilter-chips",dc);const pc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Cr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var gc=200,Dn="__lodash_hash_undefined__",yc=1/0,mc="[object Function]",bc="[object GeneratorFunction]",wc=/[\\^$.*+?()[\]{}|]/g,xc=/^\[object .+?Constructor\]$/,vc=typeof we=="object"&&we&&we.Object===Object&&we,_c=typeof self=="object"&&self&&self.Object===Object&&self,Bn=vc||_c||Function("return this")();function Mc(e,t){var n=e?e.length:0;return!!n&&Ac(e,t,0)>-1}function Sc(e,t,n,r){for(var i=e.length,o=n+-1;++o<i;)if(t(e[o],o,e))return o;return-1}function Ac(e,t,n){if(t!==t)return Sc(e,Cc,n);for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}function Cc(e){return e!==e}function $c(e,t){return e.has(t)}function Lc(e,t){return e==null?void 0:e[t]}function Ec(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function Ai(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Rc=Array.prototype,Pc=Function.prototype,Ci=Object.prototype,an=Bn["__core-js_shared__"],$r=function(){var e=/[^.]+$/.exec(an&&an.keys&&an.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),$i=Pc.toString,In=Ci.hasOwnProperty,kc=Ci.toString,Tc=RegExp("^"+$i.call(In).replace(wc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Oc=Rc.splice,jc=Hn(Bn,"Map"),ln=Hn(Bn,"Set"),et=Hn(Object,"create");function Pe(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Nc(){this.__data__=et?et(null):{}}function Dc(e){return this.has(e)&&delete this.__data__[e]}function Bc(e){var t=this.__data__;if(et){var n=t[e];return n===Dn?void 0:n}return In.call(t,e)?t[e]:void 0}function Ic(e){var t=this.__data__;return et?t[e]!==void 0:In.call(t,e)}function Hc(e,t){var n=this.__data__;return n[e]=et&&t===void 0?Dn:t,this}Pe.prototype.clear=Nc;Pe.prototype.delete=Dc;Pe.prototype.get=Bc;Pe.prototype.has=Ic;Pe.prototype.set=Hc;function Ve(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function qc(){this.__data__=[]}function Uc(e){var t=this.__data__,n=Ut(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Oc.call(t,n,1),!0}function Wc(e){var t=this.__data__,n=Ut(t,e);return n<0?void 0:t[n][1]}function Gc(e){return Ut(this.__data__,e)>-1}function Vc(e,t){var n=this.__data__,r=Ut(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}Ve.prototype.clear=qc;Ve.prototype.delete=Uc;Ve.prototype.get=Wc;Ve.prototype.has=Gc;Ve.prototype.set=Vc;function Ke(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Kc(){this.__data__={hash:new Pe,map:new(jc||Ve),string:new Pe}}function zc(e){return Wt(this,e).delete(e)}function Yc(e){return Wt(this,e).get(e)}function Fc(e){return Wt(this,e).has(e)}function Xc(e,t){return Wt(this,e).set(e,t),this}Ke.prototype.clear=Kc;Ke.prototype.delete=zc;Ke.prototype.get=Yc;Ke.prototype.has=Fc;Ke.prototype.set=Xc;function Rt(e){var t=-1,n=e?e.length:0;for(this.__data__=new Ke;++t<n;)this.add(e[t])}function Zc(e){return this.__data__.set(e,Dn),this}function Jc(e){return this.__data__.has(e)}Rt.prototype.add=Rt.prototype.push=Zc;Rt.prototype.has=Jc;function Ut(e,t){for(var n=e.length;n--;)if(ou(e[n][0],t))return n;return-1}function Qc(e){if(!Li(e)||ru(e))return!1;var t=au(e)||Ec(e)?Tc:xc;return t.test(iu(e))}function eu(e,t,n){var r=-1,i=Mc,o=e.length,a=!0,l=[],u=l;if(o>=gc){var f=tu(e);if(f)return Ai(f);a=!1,i=$c,u=new Rt}else u=l;e:for(;++r<o;){var h=e[r],p=h;if(h=h!==0?h:0,a&&p===p){for(var y=u.length;y--;)if(u[y]===p)continue e;l.push(h)}else i(u,p,n)||(u!==l&&u.push(p),l.push(h))}return l}var tu=ln&&1/Ai(new ln([,-0]))[1]==yc?function(e){return new ln(e)}:lu;function Wt(e,t){var n=e.__data__;return nu(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Hn(e,t){var n=Lc(e,t);return Qc(n)?n:void 0}function nu(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ru(e){return!!$r&&$r in e}function iu(e){if(e!=null){try{return $i.call(e)}catch{}try{return e+""}catch{}}return""}function su(e){return e&&e.length?eu(e):[]}function ou(e,t){return e===t||e!==e&&t!==t}function au(e){var t=Li(e)?kc.call(e):"";return t==mc||t==bc}function Li(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function lu(){}var cu=su;const Ei=Lr(cu);var Pt={exports:{}};Pt.exports;(function(e,t){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=1/0,u=9007199254740991,f="[object Arguments]",h="[object Array]",p="[object Boolean]",y="[object Date]",g="[object Error]",b="[object Function]",x="[object GeneratorFunction]",C="[object Map]",M="[object Number]",L="[object Object]",$="[object Promise]",O="[object RegExp]",k="[object Set]",te="[object String]",D="[object Symbol]",z="[object WeakMap]",J="[object ArrayBuffer]",Se="[object DataView]",ze="[object Float32Array]",ge="[object Float64Array]",qn="[object Int8Array]",W="[object Int16Array]",je="[object Int32Array]",it="[object Uint8Array]",Ti="[object Uint8ClampedArray]",Oi="[object Uint16Array]",ji="[object Uint32Array]",Ni=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Di=/^\w*$/,Bi=/^\./,Ii=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hi=/[\\^$.*+?()[\]{}|]/g,qi=/\\(\\)?/g,Ui=/^\[object .+?Constructor\]$/,Wi=/^(?:0|[1-9]\d*)$/,P={};P[ze]=P[ge]=P[qn]=P[W]=P[je]=P[it]=P[Ti]=P[Oi]=P[ji]=!0,P[f]=P[h]=P[J]=P[p]=P[Se]=P[y]=P[g]=P[b]=P[C]=P[M]=P[L]=P[O]=P[k]=P[te]=P[z]=!1;var Un=typeof we=="object"&&we&&we.Object===Object&&we,Gi=typeof self=="object"&&self&&self.Object===Object&&self,ye=Un||Gi||Function("return this")(),Wn=t&&!t.nodeType&&t,Gn=Wn&&!0&&e&&!e.nodeType&&e,Vi=Gn&&Gn.exports===Wn,Vn=Vi&&Un.process,Kn=function(){try{return Vn&&Vn.binding("util")}catch{}}(),zn=Kn&&Kn.isTypedArray;function Ki(s,c){for(var d=-1,m=s?s.length:0,v=Array(m);++d<m;)v[d]=c(s[d],d,s);return v}function zi(s,c){for(var d=-1,m=c.length,v=s.length;++d<m;)s[v+d]=c[d];return s}function Yi(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function Fi(s){return function(c){return c==null?void 0:c[s]}}function Xi(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function Zi(s){return function(c){return s(c)}}function Ji(s,c){return s==null?void 0:s[c]}function Gt(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function Qi(s){var c=-1,d=Array(s.size);return s.forEach(function(m,v){d[++c]=[v,m]}),d}function es(s,c){return function(d){return s(c(d))}}function ts(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var ns=Array.prototype,rs=Function.prototype,st=Object.prototype,Vt=ye["__core-js_shared__"],Yn=function(){var s=/[^.]+$/.exec(Vt&&Vt.keys&&Vt.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Fn=rs.toString,ae=st.hasOwnProperty,Ne=st.toString,is=RegExp("^"+Fn.call(ae).replace(Hi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=ye.Symbol,Xn=ye.Uint8Array,ss=st.propertyIsEnumerable,os=ns.splice,Zn=ot?ot.isConcatSpreadable:void 0,as=es(Object.keys,Object),Kt=De(ye,"DataView"),Ye=De(ye,"Map"),zt=De(ye,"Promise"),Yt=De(ye,"Set"),Ft=De(ye,"WeakMap"),Fe=De(Object,"create"),ls=Ce(Kt),cs=Ce(Ye),us=Ce(zt),fs=Ce(Yt),hs=Ce(Ft),at=ot?ot.prototype:void 0,Xt=at?at.valueOf:void 0,Jn=at?at.toString:void 0;function Ae(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function ds(){this.__data__=Fe?Fe(null):{}}function ps(s){return this.has(s)&&delete this.__data__[s]}function gs(s){var c=this.__data__;if(Fe){var d=c[s];return d===i?void 0:d}return ae.call(c,s)?c[s]:void 0}function ys(s){var c=this.__data__;return Fe?c[s]!==void 0:ae.call(c,s)}function ms(s,c){var d=this.__data__;return d[s]=Fe&&c===void 0?i:c,this}Ae.prototype.clear=ds,Ae.prototype.delete=ps,Ae.prototype.get=gs,Ae.prototype.has=ys,Ae.prototype.set=ms;function le(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function bs(){this.__data__=[]}function ws(s){var c=this.__data__,d=ct(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():os.call(c,d,1),!0}function xs(s){var c=this.__data__,d=ct(c,s);return d<0?void 0:c[d][1]}function vs(s){return ct(this.__data__,s)>-1}function _s(s,c){var d=this.__data__,m=ct(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}le.prototype.clear=bs,le.prototype.delete=ws,le.prototype.get=xs,le.prototype.has=vs,le.prototype.set=_s;function ce(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function Ms(){this.__data__={hash:new Ae,map:new(Ye||le),string:new Ae}}function Ss(s){return ut(this,s).delete(s)}function As(s){return ut(this,s).get(s)}function Cs(s){return ut(this,s).has(s)}function $s(s,c){return ut(this,s).set(s,c),this}ce.prototype.clear=Ms,ce.prototype.delete=Ss,ce.prototype.get=As,ce.prototype.has=Cs,ce.prototype.set=$s;function lt(s){var c=-1,d=s?s.length:0;for(this.__data__=new ce;++c<d;)this.add(s[c])}function Ls(s){return this.__data__.set(s,i),this}function Es(s){return this.__data__.has(s)}lt.prototype.add=lt.prototype.push=Ls,lt.prototype.has=Es;function ue(s){this.__data__=new le(s)}function Rs(){this.__data__=new le}function Ps(s){return this.__data__.delete(s)}function ks(s){return this.__data__.get(s)}function Ts(s){return this.__data__.has(s)}function Os(s,c){var d=this.__data__;if(d instanceof le){var m=d.__data__;if(!Ye||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new ce(m)}return d.set(s,c),this}ue.prototype.clear=Rs,ue.prototype.delete=Ps,ue.prototype.get=ks,ue.prototype.has=Ts,ue.prototype.set=Os;function js(s,c){var d=fe(s)||Qt(s)?Xi(s.length,String):[],m=d.length,v=!!m;for(var w in s)ae.call(s,w)&&!(v&&(w=="length"||nr(w,m)))&&d.push(w);return d}function ct(s,c){for(var d=s.length;d--;)if(sr(s[d][0],c))return d;return-1}var Ns=Qs(Is);function Ds(s,c,d,m,v){var w=-1,S=s.length;for(d||(d=so),v||(v=[]);++w<S;){var T=s[w];d(T)?zi(v,T):v[v.length]=T}return v}var Bs=eo();function Is(s,c){return s&&Bs(s,c,yt)}function Qn(s,c){c=ft(c,s)?[c]:er(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[ht(c[d++])];return d&&d==m?s:void 0}function Hs(s){return Ne.call(s)}function qs(s,c){return s!=null&&c in Object(s)}function Zt(s,c,d,m,v){return s===c?!0:s==null||c==null||!pt(s)&&!gt(c)?s!==s&&c!==c:Us(s,c,Zt,d,m,v)}function Us(s,c,d,m,v,w){var S=fe(s),T=fe(c),j=h,N=h;S||(j=me(s),j=j==f?L:j),T||(N=me(c),N=N==f?L:N);var H=j==L&&!Gt(s),q=N==L&&!Gt(c),B=j==N;if(B&&!H)return w||(w=new ue),S||po(s)?tr(s,c,d,m,v,w):to(s,c,j,d,m,v,w);if(!(v&a)){var Y=H&&ae.call(s,"__wrapped__"),F=q&&ae.call(c,"__wrapped__");if(Y||F){var be=Y?s.value():s,he=F?c.value():c;return w||(w=new ue),d(be,he,m,v,w)}}return B?(w||(w=new ue),no(s,c,d,m,v,w)):!1}function Ws(s,c,d,m){var v=d.length,w=v;if(s==null)return!w;for(s=Object(s);v--;){var S=d[v];if(S[2]?S[1]!==s[S[0]]:!(S[0]in s))return!1}for(;++v<w;){S=d[v];var T=S[0],j=s[T],N=S[1];if(S[2]){if(j===void 0&&!(T in s))return!1}else{var H=new ue,q;if(!(q===void 0?Zt(N,j,m,o|a,H):q))return!1}}return!0}function Gs(s){if(!pt(s)||ao(s))return!1;var c=or(s)||Gt(s)?is:Ui;return c.test(Ce(s))}function Vs(s){return gt(s)&&en(s.length)&&!!P[Ne.call(s)]}function Ks(s){return typeof s=="function"?s:s==null?bo:typeof s=="object"?fe(s)?Xs(s[0],s[1]):Fs(s):wo(s)}function zs(s){if(!lo(s))return as(s);var c=[];for(var d in Object(s))ae.call(s,d)&&d!="constructor"&&c.push(d);return c}function Ys(s,c){var d=-1,m=dt(s)?Array(s.length):[];return Ns(s,function(v,w,S){m[++d]=c(v,w,S)}),m}function Fs(s){var c=ro(s);return c.length==1&&c[0][2]?ir(c[0][0],c[0][1]):function(d){return d===s||Ws(d,s,c)}}function Xs(s,c){return ft(s)&&rr(c)?ir(ht(s),c):function(d){var m=yo(d,s);return m===void 0&&m===c?mo(d,s):Zt(c,m,void 0,o|a)}}function Zs(s){return function(c){return Qn(c,s)}}function Js(s){if(typeof s=="string")return s;if(tn(s))return Jn?Jn.call(s):"";var c=s+"";return c=="0"&&1/s==-l?"-0":c}function er(s){return fe(s)?s:co(s)}function Qs(s,c){return function(d,m){if(d==null)return d;if(!dt(d))return s(d,m);for(var v=d.length,w=-1,S=Object(d);++w<v&&m(S[w],w,S)!==!1;);return d}}function eo(s){return function(c,d,m){for(var v=-1,w=Object(c),S=m(c),T=S.length;T--;){var j=S[++v];if(d(w[j],j,w)===!1)break}return c}}function tr(s,c,d,m,v,w){var S=v&a,T=s.length,j=c.length;if(T!=j&&!(S&&j>T))return!1;var N=w.get(s);if(N&&w.get(c))return N==c;var H=-1,q=!0,B=v&o?new lt:void 0;for(w.set(s,c),w.set(c,s);++H<T;){var Y=s[H],F=c[H];if(m)var be=S?m(F,Y,H,c,s,w):m(Y,F,H,s,c,w);if(be!==void 0){if(be)continue;q=!1;break}if(B){if(!Yi(c,function(he,$e){if(!B.has($e)&&(Y===he||d(Y,he,m,v,w)))return B.add($e)})){q=!1;break}}else if(!(Y===F||d(Y,F,m,v,w))){q=!1;break}}return w.delete(s),w.delete(c),q}function to(s,c,d,m,v,w,S){switch(d){case Se:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case J:return!(s.byteLength!=c.byteLength||!m(new Xn(s),new Xn(c)));case p:case y:case M:return sr(+s,+c);case g:return s.name==c.name&&s.message==c.message;case O:case te:return s==c+"";case C:var T=Qi;case k:var j=w&a;if(T||(T=ts),s.size!=c.size&&!j)return!1;var N=S.get(s);if(N)return N==c;w|=o,S.set(s,c);var H=tr(T(s),T(c),m,v,w,S);return S.delete(s),H;case D:if(Xt)return Xt.call(s)==Xt.call(c)}return!1}function no(s,c,d,m,v,w){var S=v&a,T=yt(s),j=T.length,N=yt(c),H=N.length;if(j!=H&&!S)return!1;for(var q=j;q--;){var B=T[q];if(!(S?B in c:ae.call(c,B)))return!1}var Y=w.get(s);if(Y&&w.get(c))return Y==c;var F=!0;w.set(s,c),w.set(c,s);for(var be=S;++q<j;){B=T[q];var he=s[B],$e=c[B];if(m)var ar=S?m($e,he,B,c,s,w):m(he,$e,B,s,c,w);if(!(ar===void 0?he===$e||d(he,$e,m,v,w):ar)){F=!1;break}be||(be=B=="constructor")}if(F&&!be){var mt=s.constructor,bt=c.constructor;mt!=bt&&"constructor"in s&&"constructor"in c&&!(typeof mt=="function"&&mt instanceof mt&&typeof bt=="function"&&bt instanceof bt)&&(F=!1)}return w.delete(s),w.delete(c),F}function ut(s,c){var d=s.__data__;return oo(c)?d[typeof c=="string"?"string":"hash"]:d.map}function ro(s){for(var c=yt(s),d=c.length;d--;){var m=c[d],v=s[m];c[d]=[m,v,rr(v)]}return c}function De(s,c){var d=Ji(s,c);return Gs(d)?d:void 0}var me=Hs;(Kt&&me(new Kt(new ArrayBuffer(1)))!=Se||Ye&&me(new Ye)!=C||zt&&me(zt.resolve())!=$||Yt&&me(new Yt)!=k||Ft&&me(new Ft)!=z)&&(me=function(s){var c=Ne.call(s),d=c==L?s.constructor:void 0,m=d?Ce(d):void 0;if(m)switch(m){case ls:return Se;case cs:return C;case us:return $;case fs:return k;case hs:return z}return c});function io(s,c,d){c=ft(c,s)?[c]:er(c);for(var m,v=-1,S=c.length;++v<S;){var w=ht(c[v]);if(!(m=s!=null&&d(s,w)))break;s=s[w]}if(m)return m;var S=s?s.length:0;return!!S&&en(S)&&nr(w,S)&&(fe(s)||Qt(s))}function so(s){return fe(s)||Qt(s)||!!(Zn&&s&&s[Zn])}function nr(s,c){return c=c??u,!!c&&(typeof s=="number"||Wi.test(s))&&s>-1&&s%1==0&&s<c}function ft(s,c){if(fe(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||tn(s)?!0:Di.test(s)||!Ni.test(s)||c!=null&&s in Object(c)}function oo(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function ao(s){return!!Yn&&Yn in s}function lo(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||st;return s===d}function rr(s){return s===s&&!pt(s)}function ir(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var co=Jt(function(s){s=go(s);var c=[];return Bi.test(s)&&c.push(""),s.replace(Ii,function(d,m,v,w){c.push(v?w.replace(qi,"$1"):m||d)}),c});function ht(s){if(typeof s=="string"||tn(s))return s;var c=s+"";return c=="0"&&1/s==-l?"-0":c}function Ce(s){if(s!=null){try{return Fn.call(s)}catch{}try{return s+""}catch{}}return""}function uo(s,c){return Ds(fo(s,c))}function fo(s,c){var d=fe(s)?Ki:Ys;return d(s,Ks(c))}function Jt(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,v=c?c.apply(this,m):m[0],w=d.cache;if(w.has(v))return w.get(v);var S=s.apply(this,m);return d.cache=w.set(v,S),S};return d.cache=new(Jt.Cache||ce),d}Jt.Cache=ce;function sr(s,c){return s===c||s!==s&&c!==c}function Qt(s){return ho(s)&&ae.call(s,"callee")&&(!ss.call(s,"callee")||Ne.call(s)==f)}var fe=Array.isArray;function dt(s){return s!=null&&en(s.length)&&!or(s)}function ho(s){return gt(s)&&dt(s)}function or(s){var c=pt(s)?Ne.call(s):"";return c==b||c==x}function en(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=u}function pt(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function gt(s){return!!s&&typeof s=="object"}function tn(s){return typeof s=="symbol"||gt(s)&&Ne.call(s)==D}var po=zn?Zi(zn):Vs;function go(s){return s==null?"":Js(s)}function yo(s,c,d){var m=s==null?void 0:Qn(s,c);return m===void 0?d:m}function mo(s,c){return s!=null&&io(s,c,qs)}function yt(s){return dt(s)?js(s):zs(s)}function bo(s){return s}function wo(s){return ft(s)?Fi(ht(s)):Zs(s)}e.exports=uo})(Pt,Pt.exports);var uu=Pt.exports;const Ri=Lr(uu);function fu(e,t,n){let r=[];e.filterProperties.length&&e.filterProperties.forEach(o=>{const a={},l=f=>o.format==="date"?Ze(f).unix():parseFloat(f);t.forEach(f=>{var h,p;if(o.type==="range"){const y=Qe(o.key,f);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=l(y);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(f[o.key])?f[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(p=o.key)!=null&&p.includes(".")?Ei(Ri(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(r=Array.from(new Set(t.reduce((o,a)=>o.concat(a[e.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),jl(t,Object.assign({keys:i},e.fuseConfig)),r}async function hu(e,t,n){let r;n.externalFilter?r=await Il(t,n.filters,e):r=await Nl(t,n.filters,e),n.results=n.sortResults(r)}function du(e,t,n){const r=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return A`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${t}
        .filterObject=${e}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return A`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${Ei(Ri(n.items,e.key)).filter(i=>i)}"
          type="${e.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return A`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return A`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return A``}}function pu(e,t){return[...e].sort((n,r)=>n[t.titleProperty].localeCompare(r[t.titleProperty]))}function gu(e,t,n){return A`
    ${I(e.dirty,()=>A`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":de}
        </button>
      `)}
  `}function yu(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}var tt,He,X,We,Pi,ki;class mu extends se{constructor(){super();U(this,We);U(this,tt,[]);U(this,He,[]);U(this,X,pc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Dt(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},unstyled:{type:Boolean}}}apply(){wt(this,tt,fu(G(this,X),G(this,He),this)),this.search()}async searchHandler(){await hu(G(this,X),G(this,He),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return pu(n,G(this,X))}resetFilters(){yu(this)}firstUpdated(n){var i;let r={};Cr.map(o=>{r={...r,[o]:this[o]}}),wt(this,X,r),wt(this,He,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){Cr.map(r=>{if(n.has(r))return this.firstUpdated(),!0})}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}render(){var n;return A`
      <style>
        ${Po}
        ${!this.unstyled&&nt}
        ${!this.unstyled&&Mo}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":de}
        @submit="${r=>r.preventDefault()}"
      >
        ${I(this.filterProperties,()=>A`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${I(!this.inlineMode,()=>A`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${Nt(Object.values(this.filters),(r,i)=>A` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${r}
                          @details-toggled=${o=>si(o,G(this,X),this)}
                          data-details="${r.key}"
                        >
                          ${E(this,We,ki).call(this,r,Ar(i,1))}
                          ${E(this,We,Pi).call(this,r,Ar(i,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${I(!this.inlineMode&&G(this,X).filterProperties&&!this.inlineMode&&G(this,X).filterProperties&&xn(this.filters),()=>A`
                    <button
                      type="button"
                      id="filter-reset"
                      class="outline small icon-text reset-icon"
                      data-cy="filter-reset"
                      @click=${()=>this.resetFilters()}
                    >
                      Reset all
                    </a>
                  `)}
              </section>
            </eox-itemfilter-container>
          `)}
        ${I(((n=G(this,X))==null?void 0:n.showResults)&&this.results,()=>A`
            <eox-itemfilter-results
              .config=${G(this,X)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${G(this,tt)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              @result=${this.updateResult}
            >
              <slot name="resultstitle"
                ><h6 class="main-heading">Results</h6></slot
              >
            </eox-itemfilter-results>
          `)}
      </form>
    `}}tt=new WeakMap,He=new WeakMap,X=new WeakMap,We=new WeakSet,Pi=function(n,r){return du(n,r,this)},ki=function(n,r){return gu(n,r,this)};customElements.define("eox-itemfilter",mu);const bu={slot:"filterstitle",style:{margin:"14px 8px"}},wu={slot:"resultstitle",style:{margin:"14px 8px"}},cn="float:right; height:15px; padding:4px;  margin-top:-4px; background-color:white;",xu="float:right; height:15px; padding:4px;  margin-top:-4px; background-color:#9bcaeb;",ju={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:""},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:"themes"},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},setup(e){const t=e,n=async l=>{var f,h;(h=(f=i.value)==null?void 0:f.shadowRoot)==null||h.querySelectorAll(".compareMapButton").forEach(p=>p.setAttribute("style",cn));const u=l.detail;u&&(o.resetSelectedCompareSTAC(),await o.loadSelectedSTAC(u.href))},r={titleProperty:t.titleProperty,filterProperties:t.filterProperties,aggregateResults:t.aggregateResults,enableHighlighting:t.enableHighlighting,expandMultipleFilters:t.expandMultipleFilters,expandMultipleResults:t.expandMultipleResults},i=Co(null),o=_o(),a=()=>{setTimeout(()=>{var l,u;(l=i.value)==null||l.shadowRoot.querySelectorAll("details>summary").forEach(f=>f.setAttribute("style","width: 100%")),(u=i.value)==null||u.shadowRoot.querySelectorAll("details>div li").forEach(f=>{let h=document.createElement("button");h.className="compareMapButton",h.dataset.id=f.children[0].id,h.onclick=async g=>{var C,M,L;(M=(C=i.value)==null?void 0:C.shadowRoot)==null||M.querySelectorAll(".compareMapButton").forEach($=>{$.setAttribute("style",cn)});const b=g.currentTarget;b==null||b.setAttribute("style",xu);const x=(L=i.value)==null?void 0:L.items.find($=>$.id===(b==null?void 0:b.dataset.id));x&&await o.loadSelectedCompareSTAC(x.href)},h.setAttribute("style",cn);const p=document.createElementNS("http://www.w3.org/2000/svg","svg"),y=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("width","15"),p.setAttribute("height","15"),p.setAttribute("viewBox","0 0 24 24"),y.setAttribute("d","M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z"),p.appendChild(y),h.appendChild(p),f.append(h)})},100)};return $o(()=>{var f,h,p;const l=document.createElement("style");l.innerHTML=`
    section {
      margin: 0 !important;
    }
    section button#filter-reset {
      padding: 0 8px;
      top: 8px;
      right: 8px;
    }
  `,(h=(f=i.value)==null?void 0:f.shadowRoot)==null||h.appendChild(l);const u=(p=o.stac)==null?void 0:p.filter(y=>y.rel==="child");i.value.items=u,t.enableCompare&&a()}),(l,u)=>(Ro(),Lo("eox-itemfilter",Eo({class:"fill-height"},r,{ref_key:"eoxItemFilter",ref:i,style:{overflow:"auto"},onSelect:n}),[cr("h4",bu,ur(e.filtersTitle),1),cr("h4",wu,ur(e.resultsTitle),1)],16))}};export{ju as default};