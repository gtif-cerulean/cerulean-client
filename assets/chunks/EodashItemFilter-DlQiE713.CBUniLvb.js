var bo=Object.defineProperty;var ar=t=>{throw TypeError(t)};var wo=(t,e,n)=>e in t?bo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Yt=(t,e,n)=>wo(t,typeof e!="symbol"?e+"":e,n),rn=(t,e,n)=>e.has(t)||ar("Cannot "+n);var K=(t,e,n)=>(rn(t,e,"read from private field"),n?n.call(t):e.get(t)),U=(t,e,n)=>e.has(t)?ar("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),be=(t,e,n,r)=>(rn(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),C=(t,e,n)=>(rn(t,e,"access private method"),n);import{u as vo,a as xo}from"./eo-dash.D_7lCkWe.js";import{r as it,E as xt,x as M}from"./lit-element.Deg-YTNa.js";import{a as we,o as Ie}from"./map.d1LHv0EW.js";import{n as N}from"./when.BR7zwNJC.js";import{s as _o}from"./all.style.T4I2W3dO.js";import{d as Xt,c as Mo}from"./repeat.PsSHA7SW.js";import{_ as Ne,s as So,a as Lo}from"./index.H62imwlA.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{o as $o}from"./orient2d.DArCjZZA.js";import{f as Le,a as cn,p as Co,m as Ao,l as Ro}from"./index.KH_2m63C.js";import{c as bt,g as $r}from"./commonjsHelpers.BosuxZz1.js";import{h as Eo,p as Po,c as To,o as ko,j as lr,t as cr,K as Oo,k as jo}from"./framework.BD9sBbGn.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.oNa9w_hR.js";const Do=`
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
`,te=`
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
  --background-color: var(--eox-background-color, transparent);
  --padding: 0.5rem;
  --text-transform: capitalize;
  --form-flex-direction: column;
  --filter-display: block;
  background-color: var(--background-color);
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
  flex-basis: 100%;
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
.cards .result-action {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px 12px;
  padding: 6px;
  background: white;
  border-radius: 50%;
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
  display: flex;
  justify-content: space-between;
}
ul#results li .result-action {
  display: flex;
  align-items: center;
  height: fit-content;
  line-height: 1;
  opacity: .5;
  transition: opacity .3s ease-in-out;
}
ul#results li .result-action:hover {
  opacity: 1;
}
ul#results li.highlighted .result-action > * {
  filter: invert(1);
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
  position: relative;
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
input {
  background-color: var(--background-color);
}
`;var ke,Cr;class Io extends it{constructor(){super();U(this,ke);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return M`
      <style>
        ${!this.unstyled&&te}
      </style>

      ${N(this.filterObject.featured,()=>M`<slot name="filter"></slot>`,()=>M`<details
            @toggle="${C(this,ke,Cr)}"
            class="details-filter"
            ?open=${this.filterObject.expanded||xt}
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
    `}}ke=new WeakSet,Cr=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",Io);function dt(t){return Array.isArray?Array.isArray(t):Er(t)==="[object Array]"}function No(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Bo(t){return t==null?"":No(t)}function et(t){return typeof t=="string"}function Ar(t){return typeof t=="number"}function Ho(t){return t===!0||t===!1||qo(t)&&Er(t)=="[object Boolean]"}function Rr(t){return typeof t=="object"}function qo(t){return Rr(t)&&t!==null}function V(t){return t!=null}function sn(t){return!t.trim().length}function Er(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Uo="Incorrect 'index' type",Wo=t=>`Invalid value for key ${t}`,Go=t=>`Pattern length exceeds max of ${t}.`,Ko=t=>`Missing ${t} property in key`,Vo=t=>`Property 'weight' in key '${t}' must be a positive integer`,ur=Object.prototype.hasOwnProperty;class zo{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Pr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Pr(t){let e=null,n=null,r=null,i=1,o=null;if(et(t)||dt(t))r=t,e=fr(t),n=un(t);else{if(!ur.call(t,"name"))throw new Error(Ko("name"));const a=t.name;if(r=a,ur.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Vo(a));e=fr(a),n=un(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function fr(t){return dt(t)?t:t.split(".")}function un(t){return dt(t)?t.join("."):t}function Yo(t,e){let n=[],r=!1;const i=(o,a,l)=>{if(V(o))if(!a[l])n.push(o);else{let u=a[l];const f=o[u];if(!V(f))return;if(l===a.length-1&&(et(f)||Ar(f)||Ho(f)))n.push(Bo(f));else if(dt(f)){r=!0;for(let h=0,p=f.length;h<p;h+=1)i(f[h],a,l+1)}else a.length&&i(f,a,l+1)}};return i(t,et(e)?e.split("."):e,0),r?n:n[0]}const Xo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Fo={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Jo={location:0,threshold:.6,distance:100},Zo={useExtendedSearch:!1,getFn:Yo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var _={...Fo,...Xo,...Jo,...Zo};const Qo=/[^ ]+/g;function ta(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(Qo).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Rn{constructor({getFn:e=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){this.norm=ta(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,et(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();et(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!V(e)||sn(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(V(a)){if(dt(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(V(h))if(et(h)&&!sn(h)){let p={v:h,i:f,n:this.norm.get(h)};l.push(p)}else dt(h)&&h.forEach((p,y)=>{u.push({nestedArrIndex:y,value:p})})}r.$[o]=l}else if(et(a)&&!sn(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Tr(t,e,{getFn:n=_.getFn,fieldNormWeight:r=_.fieldNormWeight}={}){const i=new Rn({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Pr)),i.setSources(e),i.create(),i}function ea(t,{getFn:e=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new Rn({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function ve(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=_.distance,ignoreLocation:o=_.ignoreLocation}={}){const a=e/t.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function na(t=[],e=_.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let l=t[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Ct=32;function ra(t,e,n,{location:r=_.location,distance:i=_.distance,threshold:o=_.threshold,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,includeMatches:u=_.includeMatches,ignoreLocation:f=_.ignoreLocation}={}){if(e.length>Ct)throw new Error(Go(Ct));const h=e.length,p=t.length,y=Math.max(0,Math.min(r,p));let g=o,b=y;const x=l>1||u,$=x?Array(p):[];let L;for(;(L=t.indexOf(e,b))>-1;){let D=ve(e,{currentLocation:L,expectedLocation:y,distance:i,ignoreLocation:f});if(g=Math.min(D,g),b=L+h,x){let Z=0;for(;Z<h;)$[L+Z]=1,Z+=1}}b=-1;let E=[],A=1,T=h+p;const O=1<<h-1;for(let D=0;D<h;D+=1){let Z=0,W=T;for(;Z<W;)ve(e,{errors:D,currentLocation:y+W,expectedLocation:y,distance:i,ignoreLocation:f})<=g?Z=W:T=W,W=Math.floor((T-Z)/2+Z);T=W;let ne=Math.max(1,y-W+1),Kt=a?p:Math.min(y+W,p)+h,pt=Array(Kt+2);pt[Kt+1]=(1<<D)-1;for(let G=Kt;G>=ne;G-=1){let kt=G-1,re=n[t.charAt(kt)];if(x&&($[kt]=+!!re),pt[G]=(pt[G+1]<<1|1)&re,D&&(pt[G]|=(E[G+1]|E[G])<<1|1|E[G+1]),pt[G]&O&&(A=ve(e,{errors:D,currentLocation:kt,expectedLocation:y,distance:i,ignoreLocation:f}),A<=g)){if(g=A,b=kt,b<=y)break;ne=Math.max(1,2*y-b)}}if(ve(e,{errors:D+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:f})>g)break;E=pt}const ot={isMatch:b>=0,score:Math.max(.001,A)};if(x){const D=na($,l);D.length?u&&(ot.indices=D):ot.isMatch=!1}return ot}function ia(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class kr{constructor(e,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreLocation:f=_.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(y,g)=>{this.chunks.push({pattern:y,alphabet:ia(y),startIndex:g})},p=this.pattern.length;if(p>Ct){let y=0;const g=p%Ct,b=p-g;for(;y<b;)h(this.pattern.substr(y,Ct),y),y+=Ct;if(g){const x=p-Ct;h(this.pattern.substr(x),x)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let b={isMatch:!0,score:0};return r&&(b.indices=[[0,e.length-1]]),b}const{location:i,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,ignoreLocation:f}=this.options;let h=[],p=0,y=!1;this.chunks.forEach(({pattern:b,alphabet:x,startIndex:$})=>{const{isMatch:L,score:E,indices:A}=ra(e,b,x,{location:i+$,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});L&&(y=!0),p+=E,L&&A&&(h=[...h,...A])});let g={isMatch:y,score:y?p/this.chunks.length:1};return y&&r&&(g.indices=h),g}}class _t{constructor(e){this.pattern=e}static isMultiMatch(e){return hr(e,this.multiRegex)}static isSingleMatch(e){return hr(e,this.singleRegex)}search(){}}function hr(t,e){const n=t.match(e);return n?n[1]:null}class sa extends _t{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class oa extends _t{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class aa extends _t{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class la extends _t{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ca extends _t{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ua extends _t{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Or extends _t{constructor(e,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreLocation:f=_.ignoreLocation}={}){super(e),this._bitapSearch=new kr(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class jr extends _t{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const fn=[sa,jr,aa,la,ua,ca,oa,Or],dr=fn.length,fa=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ha="|";function da(t,e={}){return t.split(ha).map(n=>{let r=n.trim().split(fa).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,f=-1;for(;!u&&++f<dr;){const h=fn[f];let p=h.isMultiMatch(l);p&&(i.push(new h(p,e)),u=!0)}if(!u)for(f=-1;++f<dr;){const h=fn[f];let p=h.isSingleMatch(l);if(p){i.push(new h(p,e));break}}}return i})}const pa=new Set([Or.type,jr.type]);class ga{constructor(e,{isCaseSensitive:n=_.isCaseSensitive,includeMatches:r=_.includeMatches,minMatchCharLength:i=_.minMatchCharLength,ignoreLocation:o=_.ignoreLocation,findAllMatches:a=_.findAllMatches,location:l=_.location,threshold:u=_.threshold,distance:f=_.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:l,threshold:u,distance:f},this.pattern=n?e:e.toLowerCase(),this.query=da(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],l=0;for(let u=0,f=n.length;u<f;u+=1){const h=n[u];a.length=0,o=0;for(let p=0,y=h.length;p<y;p+=1){const g=h[p],{isMatch:b,indices:x,score:$}=g.search(e);if(b){if(o+=1,l+=$,r){const L=g.constructor.type;pa.has(L)?a=[...a,...x]:a.push(x)}}else{l=0,o=0,a.length=0;break}}if(o){let p={isMatch:!0,score:l/o};return r&&(p.indices=a),p}}return{isMatch:!1,score:1}}}const hn=[];function ya(...t){hn.push(...t)}function dn(t,e){for(let n=0,r=hn.length;n<r;n+=1){let i=hn[n];if(i.condition(t,e))return new i(t,e)}return new kr(t,e)}const $e={AND:"$and",OR:"$or"},pn={PATH:"$path",PATTERN:"$val"},gn=t=>!!(t[$e.AND]||t[$e.OR]),ma=t=>!!t[pn.PATH],ba=t=>!dt(t)&&Rr(t)&&!gn(t),pr=t=>({[$e.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Dr(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=ma(i);if(!a&&o.length>1&&!gn(i))return r(pr(i));if(ba(i)){const u=a?i[pn.PATH]:o[0],f=a?i[pn.PATTERN]:i[u];if(!et(f))throw new Error(Wo(u));const h={keyId:un(u),pattern:f};return n&&(h.searcher=dn(f,e)),h}let l={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];dt(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return gn(t)||(t=pr(t)),r(t)}function wa(t,{ignoreFieldNorm:e=_.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:o))}),n.score=r})}function va(t,e){const n=t.matches;e.matches=[],V(n)&&n.forEach(r=>{if(!V(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function xa(t,e){e.score=t.score}function _a(t,e,{includeMatches:n=_.includeMatches,includeScore:r=_.includeScore}={}){const i=[];return n&&i.push(va),r&&i.push(xa),t.map(o=>{const{idx:a}=o,l={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class Mt{constructor(e,n={},r){this.options={..._,...n},this.options.useExtendedSearch,this._keyStore=new zo(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Rn))throw new Error(Uo);this._myIndex=n||Tr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){V(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=et(e)?et(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return wa(u,{ignoreFieldNorm:l}),o&&u.sort(a),Ar(n)&&n>-1&&(u=u.slice(0,n)),_a(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=dn(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!V(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:l,indices:h}]})}),i}_searchLogical(e){const n=Dr(e,this.options),r=(l,u,f)=>{if(!l.children){const{keyId:p,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(u,p),searcher:y});return g&&g.length?[{idx:f,item:u,matches:g}]:[]}const h=[];for(let p=0,y=l.children.length;p<y;p+=1){const g=l.children[p],b=r(g,u,f);if(b.length)h.push(...b);else if(l.operator===$e.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(V(l)){let f=r(n,l,u);f.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(e){const n=dn(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!V(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!V(n))return[];let i=[];if(dt(n))n.forEach(({v:o,i:a,n:l})=>{if(!V(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&i.push({score:f,key:e,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:f}=r.searchIn(o);l&&i.push({score:u,key:e,value:o,norm:a,indices:f})}return i}}Mt.version="7.0.0";Mt.createIndex=Tr;Mt.parseIndex=ea;Mt.config=_;Mt.parseQuery=Dr;ya(ga);function Ir(t,e){const n=new Mt(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const r=t.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function Ma(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const yn=Math.min,Dt=Math.max,Ce=Math.round,xe=Math.floor,nt=t=>({x:t,y:t});function Nr(t){return t.split("-")[0]}function Sa(t){return t.split("-")[1]}function La(t){return t==="x"?"y":"x"}function $a(t){return t==="y"?"height":"width"}function Br(t){return["top","bottom"].includes(Nr(t))?"y":"x"}function Ca(t){return La(Br(t))}function Hr(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function gr(t,e,n){let{reference:r,floating:i}=t;const o=Br(e),a=Ca(e),l=$a(a),u=Nr(e),f=o==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(u){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-i.width,y:p};break;default:g={x:r.x,y:r.y}}switch(Sa(e)){case"start":g[a]-=y*(n&&f?-1:1);break;case"end":g[a]+=y*(n&&f?-1:1);break}return g}const Aa=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let f=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:p}=gr(f,r,u),y=r,g={},b=0;for(let x=0;x<l.length;x++){const{name:$,fn:L}=l[x],{x:E,y:A,data:T,reset:O}=await L({x:h,y:p,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:f,platform:a,elements:{reference:t,floating:e}});h=E??h,p=A??p,g={...g,[$]:{...g[$],...T}},O&&b<=50&&(b++,typeof O=="object"&&(O.placement&&(y=O.placement),O.rects&&(f=O.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:h,y:p}=gr(f,y,u)),x=-1)}return{x:h,y:p,placement:y,strategy:i,middlewareData:g}};function Be(){return typeof window<"u"}function Ut(t){return qr(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function st(t){var e;return(e=(qr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function qr(t){return Be()?t instanceof Node||t instanceof z(t).Node:!1}function Q(t){return Be()?t instanceof Element||t instanceof z(t).Element:!1}function rt(t){return Be()?t instanceof HTMLElement||t instanceof z(t).HTMLElement:!1}function yr(t){return!Be()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}function ee(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=tt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function Ra(t){return["table","td","th"].includes(Ut(t))}function He(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function En(t){const e=Pn(),n=Q(t)?tt(t):t;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Ea(t){let e=wt(t);for(;rt(e)&&!Bt(e);){if(En(e))return e;if(He(e))return null;e=wt(e)}return null}function Pn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Bt(t){return["html","body","#document"].includes(Ut(t))}function tt(t){return z(t).getComputedStyle(t)}function qe(t){return Q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function wt(t){if(Ut(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yr(t)&&t.host||st(t);return yr(e)?e.host:e}function Ur(t){const e=wt(t);return Bt(e)?t.ownerDocument?t.ownerDocument.body:t.body:rt(e)&&ee(e)?e:Ur(e)}function Ft(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Ur(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),a=z(i);if(o){const l=mn(a);return e.concat(a,a.visualViewport||[],ee(i)?i:[],l&&n?Ft(l):[])}return e.concat(i,Ft(i,[],n))}function mn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Wr(t){const e=tt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=rt(t),o=i?t.offsetWidth:n,a=i?t.offsetHeight:r,l=Ce(n)!==o||Ce(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Tn(t){return Q(t)?t:t.contextElement}function It(t){const e=Tn(t);if(!rt(e))return nt(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=Wr(e);let a=(o?Ce(n.width):n.width)/r,l=(o?Ce(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Pa=nt(0);function Gr(t){const e=z(t);return!Pn()||!e.visualViewport?Pa:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ta(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==z(t)?!1:e}function At(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=Tn(t);let a=nt(1);e&&(r?Q(r)&&(a=It(r)):a=It(t));const l=Ta(o,n,r)?Gr(o):nt(0);let u=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(o){const y=z(o),g=r&&Q(r)?z(r):r;let b=y,x=mn(b);for(;x&&r&&g!==b;){const $=It(x),L=x.getBoundingClientRect(),E=tt(x),A=L.left+(x.clientLeft+parseFloat(E.paddingLeft))*$.x,T=L.top+(x.clientTop+parseFloat(E.paddingTop))*$.y;u*=$.x,f*=$.y,h*=$.x,p*=$.y,u+=A,f+=T,b=z(x),x=mn(b)}}return Hr({width:h,height:p,x:u,y:f})}function kn(t,e){const n=qe(t).scrollLeft;return e?e.left+n:At(st(t)).left+n}function Kr(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:kn(t,r)),o=r.top+e.scrollTop;return{x:i,y:o}}function ka(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",a=st(r),l=e?He(e.floating):!1;if(r===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},f=nt(1);const h=nt(0),p=rt(r);if((p||!p&&!o)&&((Ut(r)!=="body"||ee(a))&&(u=qe(r)),rt(r))){const g=At(r);f=It(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=a&&!p&&!o?Kr(a,u,!0):nt(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-u.scrollTop*f.y+h.y+y.y}}function Oa(t){return Array.from(t.getClientRects())}function ja(t){const e=st(t),n=qe(t),r=t.ownerDocument.body,i=Dt(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=Dt(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+kn(t);const l=-n.scrollTop;return tt(r).direction==="rtl"&&(a+=Dt(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function Da(t,e){const n=z(t),r=st(t),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const f=Pn();(!f||f&&e==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l,y:u}}function Ia(t,e){const n=At(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=rt(t)?It(t):nt(1),a=t.clientWidth*o.x,l=t.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:a,height:l,x:u,y:f}}function mr(t,e,n){let r;if(e==="viewport")r=Da(t,n);else if(e==="document")r=ja(st(t));else if(Q(e))r=Ia(e,n);else{const i=Gr(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Hr(r)}function Vr(t,e){const n=wt(t);return n===e||!Q(n)||Bt(n)?!1:tt(n).position==="fixed"||Vr(n,e)}function Na(t,e){const n=e.get(t);if(n)return n;let r=Ft(t,[],!1).filter(l=>Q(l)&&Ut(l)!=="body"),i=null;const o=tt(t).position==="fixed";let a=o?wt(t):t;for(;Q(a)&&!Bt(a);){const l=tt(a),u=En(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||ee(a)&&!u&&Vr(t,a))?r=r.filter(h=>h!==a):i=l,a=wt(a)}return e.set(t,r),r}function Ba(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const a=[...n==="clippingAncestors"?He(e)?[]:Na(e,this._c):[].concat(n),r],l=a[0],u=a.reduce((f,h)=>{const p=mr(e,h,i);return f.top=Dt(p.top,f.top),f.right=yn(p.right,f.right),f.bottom=yn(p.bottom,f.bottom),f.left=Dt(p.left,f.left),f},mr(e,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Ha(t){const{width:e,height:n}=Wr(t);return{width:e,height:n}}function qa(t,e,n){const r=rt(e),i=st(e),o=n==="fixed",a=At(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const u=nt(0);if(r||!r&&!o)if((Ut(e)!=="body"||ee(i))&&(l=qe(e)),r){const y=At(e,!0,o,e);u.x=y.x+e.clientLeft,u.y=y.y+e.clientTop}else i&&(u.x=kn(i));const f=i&&!r&&!o?Kr(i,l):nt(0),h=a.left+l.scrollLeft-u.x-f.x,p=a.top+l.scrollTop-u.y-f.y;return{x:h,y:p,width:a.width,height:a.height}}function on(t){return tt(t).position==="static"}function br(t,e){if(!rt(t)||tt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return st(t)===n&&(n=n.ownerDocument.body),n}function zr(t,e){const n=z(t);if(He(t))return n;if(!rt(t)){let i=wt(t);for(;i&&!Bt(i);){if(Q(i)&&!on(i))return i;i=wt(i)}return n}let r=br(t,e);for(;r&&Ra(r)&&on(r);)r=br(r,e);return r&&Bt(r)&&on(r)&&!En(r)?n:r||Ea(t)||n}const Ua=async function(t){const e=this.getOffsetParent||zr,n=this.getDimensions,r=await n(t.floating);return{reference:qa(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Wa(t){return tt(t).direction==="rtl"}const Ga={convertOffsetParentRelativeRectToViewportRelativeRect:ka,getDocumentElement:st,getClippingRect:Ba,getOffsetParent:zr,getElementRects:Ua,getClientRects:Oa,getDimensions:Ha,getScale:It,isElement:Q,isRTL:Wa};function Yr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ka(t,e){let n=null,r;const i=st(t);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const f=t.getBoundingClientRect(),{left:h,top:p,width:y,height:g}=f;if(l||e(),!y||!g)return;const b=xe(p),x=xe(i.clientWidth-(h+y)),$=xe(i.clientHeight-(p+g)),L=xe(h),A={rootMargin:-b+"px "+-x+"px "+-$+"px "+-L+"px",threshold:Dt(0,yn(1,u))||1};let T=!0;function O(ot){const D=ot[0].intersectionRatio;if(D!==u){if(!T)return a();D?a(!1,D):r=setTimeout(()=>{a(!1,1e-7)},1e3)}D===1&&!Yr(f,t.getBoundingClientRect())&&a(),T=!1}try{n=new IntersectionObserver(O,{...A,root:i.ownerDocument})}catch{n=new IntersectionObserver(O,A)}n.observe(t)}return a(!0),o}function Va(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=Tn(t),h=i||o?[...f?Ft(f):[],...Ft(e)]:[];h.forEach(L=>{i&&L.addEventListener("scroll",n,{passive:!0}),o&&L.addEventListener("resize",n)});const p=f&&l?Ka(f,n):null;let y=-1,g=null;a&&(g=new ResizeObserver(L=>{let[E]=L;E&&E.target===f&&g&&(g.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var A;(A=g)==null||A.observe(e)})),n()}),f&&!u&&g.observe(f),g.observe(e));let b,x=u?At(t):null;u&&$();function $(){const L=At(t);x&&!Yr(x,L)&&n(),x=L,b=requestAnimationFrame($)}return n(),()=>{var L;h.forEach(E=>{i&&E.removeEventListener("scroll",n),o&&E.removeEventListener("resize",n)}),p==null||p(),(L=g)==null||L.disconnect(),g=null,u&&cancelAnimationFrame(b)}}const za=(t,e,n)=>{const r=new Map,i={platform:Ga,...n},o={...i.platform,_c:r};return Aa(t,e,{...i,platform:o})};function Ya(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return Va(e,n,()=>{n.matches(":popover-open")&&za(e,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Xr(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Ir({target:{value:""}},t)}function Xa(t,e){e.inlineMode&&t.stopPropagation()}function Fa(t){t.inlineMode&&(t.showDropdown=!0)}function Ja(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function Za(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Xr(e),e.showDropdown=!1)}function Qa(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Xr(e),e.showDropdown=!1)}function tl(t,e){var n,r,i=0,o,a,l,u,f,h,p,y=t[0],g=t[1],b=e.length;for(n=0;n<b;n++){r=0;var x=e[n],$=x.length-1;if(h=x[0],h[0]!==x[$][0]&&h[1]!==x[$][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-g,r;r<$;r++){if(p=x[r+1],u=p[0]-y,f=p[1]-g,l===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&l<=0||f<=0&&l>=0){if(o=$o(a,u,l,f,0,0),o===0)return 0;(o>0&&f>0&&l<=0||o<0&&f<=0&&l>0)&&i++}h=p,l=f,a=u}}return i%2!==0}function Fr(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function el(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Ht(t){return t.type==="Feature"?t.geometry:t}function J(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Fr(t),i=Ht(e),o=i.type,a=e.bbox;let l=i.coordinates;if(a&&nl(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var f=0;f<l.length;++f){const h=tl(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function nl(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Jr{constructor(e=[],n=rl){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const o=e-1>>1,a=n[o];if(r(i,a)>=0)break;n[e]=a,e=o}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,o=n[e];for(;e<i;){let a=(e<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,o)>=0)break;n[e]=l,e=a}n[e]=o}}function rl(t,e){return t<e?-1:t>e?1:0}function Zr(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function il(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class wr{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function sl(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)vr(n[r],e)}else vr(t,e)}let _e=0,Me=0,Se=0;function vr(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;Me=Me+1;for(let u=0;u<r[i][o].length-1;u++){l=r[i][o][u+1];const f=new wr(a,_e,Me,Se),h=new wr(l,_e,Me,Se+1);f.otherEvent=h,h.otherEvent=f,Zr(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(f),e.push(h),a=l,Se=Se+1}}_e=_e+1}class ol{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function al(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,o=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,u=e.rightSweepEvent.p.x,f=e.rightSweepEvent.p.y,h=(f-l)*(i-n)-(u-a)*(o-r),p=(u-a)*(r-l)-(f-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const g=p/h,b=y/h;if(g>=0&&g<=1&&b>=0&&b<=1){const x=n+g*(i-n),$=r+g*(o-r);return[x,$]}return!1}function ll(t,e){e=e||!1;const n=[],r=new Jr([],il);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const o=new ol(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const u=al(o,l);u!==!1&&n.push(u)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function cl(t,e){const n=new Jr([],Zr);return sl(t,n),ll(n,e)}var ul=cl;function On(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let o=[];t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(Le(t)),e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(Le(e));const a=ul(cn(o),i);let l=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,l.push(f))})}else l=a;return cn(l.map(u=>Co(u)))}function Qr(t,e,n){if(t!==null)for(var r,i,o,a,l,u,f,h=0,p=0,y,g=t.type,b=g==="FeatureCollection",x=g==="Feature",$=b?t.features.length:1,L=0;L<$;L++){f=b?t.features[L].geometry:x?t.geometry:t,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var E=0;E<l;E++){var A=0,T=0;if(a=y?f.geometries[E]:f,a!==null){u=a.coordinates;var O=a.type;switch(h=0,O){case null:break;case"Point":if(e(u,p,L,A,T)===!1)return!1;p++,A++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],p,L,A,T)===!1)return!1;p++,O==="MultiPoint"&&A++}O==="LineString"&&A++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(e(u[r][i],p,L,A,T)===!1)return!1;p++}O==="MultiLineString"&&A++,O==="Polygon"&&T++}O==="Polygon"&&A++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(T=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(e(u[r][i][o],p,L,A,T)===!1)return!1;p++}T++}A++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(Qr(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function fl(t,e){var n,r,i,o,a,l,u,f,h,p,y=0,g=t.type==="FeatureCollection",b=t.type==="Feature",x=g?t.features.length:1;for(n=0;n<x;n++){for(l=g?t.features[n].geometry:b?t.geometry:t,f=g?t.features[n].properties:b?t.properties:{},h=g?t.features[n].bbox:b?t.bbox:void 0,p=g?t.features[n].id:b?t.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(e(null,y,f,h,p)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(o,y,f,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(e(o.geometries[r],y,f,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function Ae(t,e){fl(t,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Le(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],p={type:u,coordinates:h};if(e(Le(p,i),r,f)===!1)return!1}})}function bn(t,e={}){const n=Ht(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return hl(n,e);case"MultiPolygon":return dl(n,e);default:throw new Error("invalid poly")}}function hl(t,e={}){const r=Ht(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return ti(r,i)}function dl(t,e={}){const r=Ht(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},o=[];return r.forEach(a=>{o.push(ti(a,i))}),cn(o)}function ti(t,e){return t.length>1?Ao(t,e):Ro(t[0],e)}function pl(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Ae(t,i=>{Ae(e,o=>{if(r===!1)return!1;r=gl(i.geometry,o.geometry,n)})}),r}function gl(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!wl(t.coordinates,e.coordinates);case"LineString":return!xr(e,t);case"Polygon":return!J(t,e)}break;case"LineString":switch(e.type){case"Point":return!xr(t,e);case"LineString":return!yl(t,e,n);case"Polygon":return!_r(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!J(e,t);case"LineString":return!_r(t,e,n);case"Polygon":return!ml(e,t,n)}}return!1}function xr(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(bl(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function yl(t,e,n){return On(t,e,{ignoreSelfIntersections:n}).features.length>0}function _r(t,e,n){for(const i of e.coordinates)if(J(i,t))return!0;return On(e,bn(t),{ignoreSelfIntersections:n}).features.length>0}function ml(t,e,n){for(const i of t.coordinates[0])if(J(i,e))return!0;for(const i of e.coordinates[0])if(J(i,t))return!0;return On(bn(t),bn(e),{ignoreSelfIntersections:n}).features.length>0}function bl(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],o=e[0]-t[0],a=e[1]-t[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function wl(t,e){return t[0]===e[0]&&t[1]===e[1]}function vl(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Ae(t,i=>{Ae(e,o=>{if(r===!0)return!0;r=!pl(i.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var xl=vl;function Re(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return Qr(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Ee(t,e,n={}){const r=Fr(t),i=el(e);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),_l(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function _l(t,e,n,r,i){const o=n[0],a=n[1],l=t[0],u=t[1],f=e[0],h=e[1],p=n[0]-l,y=n[1]-u,g=f-l,b=h-u,x=p*b-y*g;if(i!==null){if(Math.abs(x)>i)return!1}else if(x!==0)return!1;if(Math.abs(g)===Math.abs(b)&&Math.abs(g)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<=f:f<=o&&o<l:b>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<f:f<o&&o<=l:b>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<f:f<o&&o<l:b>0?u<a&&a<h:h<a&&a<u}else return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<=f:f<=o&&o<=l:b>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function Ml(t,e){var n=Ht(t),r=Ht(e),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return Sl(n,r);case"LineString":return Ee(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return J(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return Ll(n,r);case"LineString":return $l(n,r);case"Polygon":case"MultiPolygon":return Cl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return Al(n,r);case"Polygon":case"MultiPolygon":return Rl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return El(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Sl(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(ni(e.coordinates[n],t.coordinates)){r=!0;break}return r}function Ll(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)ni(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function $l(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Ee(t.coordinates[r],e))return!1;n||(n=Ee(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function Cl(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=J(t.coordinates[i],e),!r){n=!1;break}r=J(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function Al(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Ee(t.coordinates[n],e))return!1;return!0}function Rl(t,e){var n=Re(e),r=Re(t);if(!ei(n,r))return!1;for(var i=!1,o=0;o<t.coordinates.length;o++){if(!J(t.coordinates[o],e))return!1;if(i||(i=J(t.coordinates[o],e,{ignoreBoundary:!0})),!i&&o<t.coordinates.length-1){var a=Pl(t.coordinates[o],t.coordinates[o+1]);i=J(a,e,{ignoreBoundary:!0})}}return i}function El(t,e){var n=Re(t),r=Re(e);if(!ei(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!J(t.coordinates[0][i],e))return!1;return!0}function ei(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function ni(t,e){return t[0]===e[0]&&t[1]===e[1]}function Pl(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Tl=Ml;const kl=(t,e)=>e?xl(t,e):!0,Ol=(t,e)=>e?Tl(t,e):!0;function jl(t,e="highlight",n="title"){const r=(o,a,l)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=l},i=(o,a=[])=>{let l="",u=0;return a.forEach(f=>{const h=f[1]+1;l+=[o.substring(u,f[0]),`<mark class="${e}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),l+=o.substring(u),l};return t.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const l={...o};return a.forEach(u=>{u.key===n&&r(l,u.key,i(u.value,u.indices))}),l})}let ri;const Dl=(t,e)=>{ri=new Mt(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},Il=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,f])=>{const h="$or",p=[],y=(g,b)=>{const x={};f.type==="text"?x[g]=`${b}`:x[u]=`="${g}"`,p.push(x)};return Object.entries(f.state).filter(([,g])=>g).forEach(([g,b])=>y(g,b)),p.length>0&&l.push({[h]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},u=ri.search(l);i=n.enableHighlighting?jl(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[u,f])=>(l[u]={min:f.state.min,max:f.state.max,format:f.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const[h,p]of Object.entries(o)){const y=b=>p.format==="date"?Xt(b).unix():b,g=Jt(h,i[u]);g?Array.isArray(g)?f[h]=o[h].min<=y(g[1])&&y(g[0])<=o[h].max:y(g)>=o[h].min&&y(g)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}const a=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[u,f])=>(l[u]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const h of Object.keys(a)){const p=Jt(h,i[u]),y=a[h].mode||"within";p&&(y==="within"?Ol(p,a[h].geometry):kl(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function Nl(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function Ue(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function Mr(t,e){return t*2+e}function Bl(t){return Object.keys(t).map(e=>({title:M`${t[e].title||t[e].key}:
        <strong>${t[e].stringifiedState}</strong>`,key:e})).filter(e=>t[e.key].dirty)}function wn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function Hl(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function ii(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Jt(t,e){return t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}var R,si,vn,xn,oi,_n,Mn,ai,Sn,li,ci;class ql extends it{constructor(){super();U(this,R);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=C(this,R,oi).bind(this),this._handleKeyDown=C(this,R,_n).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&C(this,R,vn).call(this)}disconnectedCallback(){this.inlineMode&&C(this,R,xn).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?C(this,R,vn).call(this):C(this,R,xn).call(this))}render(){return M`
      <style>
        ${!this.unstyled&&te}
      </style>
      ${this.inlineMode?M`
            <div
              class="inline-container-wrapper"
              @click="${C(this,R,Mn)}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Bl(this.filters)}
                      .controller=${{remove:n=>C(this,R,li).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${N(wn(this.filters),()=>M`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${wn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${C(this,R,Mn)}"
                    @focus="${C(this,R,ai)}"
                    @input="${C(this,R,ci)}"
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
                  @keydown="${C(this,R,_n)}"
                  @click="${C(this,R,Sn)}"
                  @focus="${C(this,R,Sn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:M`<slot name="section"></slot>`}
    `}}R=new WeakSet,si=function(){setTimeout(()=>this._overlayCleanup=Ya(this))},vn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),C(this,R,si).call(this)},xn=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},oi=function(n){Qa(n,this)},_n=function(n){Za(n,this)},Mn=function(n){Ja(n,this)},ai=function(){Fa(this)},Sn=function(n){Xa(n,this)},li=function(n){Ma(n,this)},ci=function(n){Ir(n,this)};customElements.define("eox-itemfilter-container",ql);function Ul(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",Ue(t.filterObject),t.requestUpdate()}function Wl(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const Ln="ddd, D MMM YYYY HH:mm:ss";function Gl(t){if(t.filterObject=Ue(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function Kl(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${Xt.unix(n).format(Ln)} - ${Xt.unix(r).format(Ln)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function Vl(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],o=r?Xt.unix(i).format(Ln):i;return M`<div class="range-${e}">${o}</div>`}function zl(t){Yl(-1,t),Ue(t.filterObject),t.requestUpdate()}function Yl(t,e){e.selectedItems=[],jn(e),fi(e)}function ui(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),jn(e),fi(e)}function Xl(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function Fl(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&ui(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function Jl(t,e){(t.has("suggestions")||t.has("query"))&&jn(e)}function Zl(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,o)=>i.localeCompare(o));return e.sort(n).map(i=>i)}function jn(t){var n,r,i;let e;t.query&&(e=new Mt(t.suggestions,{threshold:.4}).search(t.query).map(a=>a.item)),t.filteredSuggestions=Zl(t,e||t.suggestions),(n=t.filterObject)!=null&&n.filterKeys&&(t.filteredSuggestions=(r=t.filterObject)==null?void 0:r.filterKeys.map(o=>`${o}`),t.filterObject.state=(i=t.filterObject)==null?void 0:i.filterKeys.map(o=>`${o}`).reduce((o,a)=>(a in o||(o[a]=void 0),o),t.filterObject.state)),t.highlightedIndex=-1}function fi(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function Ql(t){Ue(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function tc(t){t.renderRoot.querySelector("#eox-map").innerHTML="",hi(t)}function ec(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function hi(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&nc(t.geometry),r=Nl(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function nc(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var Oe;class rc extends it{constructor(){super();U(this,Oe,()=>{Wl(this)});Yt(this,"debouncedInputHandler",Ne(K(this,Oe),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Ul(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>{var n;return M`
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
      `})}}Oe=new WeakMap;customElements.define("eox-itemfilter-text",rc);function ic(t,e,n){return t.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}function sc(t,e){return M`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||xt}
    >
      <summary>
        <span class="title">
          ${t}
          <span class="count"
            >${e.aggregateResults(e.results,t).length}</span
          >
        </span>
      </summary>
      <div>
        ${di(e,t)}
      </div>
    </details>
  `}function di(t,e){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,o=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":xt};return M`
    <ul class=${t.resultType}>
      ${Mo(r,a=>a.id,a=>M`
          <li
            class=${o(a)}
            @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
          >
            <span id="${a.id}">
              ${N(i.subTitleProperty||i.imageProperty,()=>M`
                  ${Jt(i.imageProperty,a)?M`
                        <img
                          class="image"
                          src="${Jt(i.imageProperty,a)}"
                        />
                      `:M`
                        <svg
                          class="image"
                          width="800"
                          height="600"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="800"
                            height="600"
                            fill="var(--primary-color)"
                          />
                        </svg>
                      `}
                  <div class="title-container">
                    <span class="title"
                      >${we(a[i.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${we(a[i.subTitleProperty])}</span
                    >
                  </div>
                `,()=>M`
                  <span class="title"
                    >${we(a[i.titleProperty])}</span
                  >
                `)}
            </span>
            ${N(t.enableResultAction,()=>M`
                <span
                  class="result-action"
                  @click=${l=>{l.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >${we(t.resultActionIcon)}</span
                >
              `)}
          </li>
        `)}
    </ul>
  `}var Et,$n,pi;class oc extends it{constructor(){super();U(this,Et);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return ic(n,r,this)}createRenderRoot(){return this}handleAccordion(n){ii(n,this.config,this)}render(){return M`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${N(this.results.length<1,()=>M`<small class="no-results">No matching items</small>`,()=>xt)}
          <ul id="results" part="results">
            ${N(this.config.aggregateResults,()=>Ie(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>M`${N(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>M`<div style="margin-left: -8px">
                          ${C(this,Et,$n).call(this,n)}
                        </div>`,()=>C(this,Et,pi).call(this,n))}`),()=>C(this,Et,$n).call(this))}
          </ul>
        </div>
      </section>
    `}}Et=new WeakSet,$n=function(n){return di(this,n)},pi=function(n){return sc(n,this)};customElements.define("eox-itemfilter-results",oc);var vt,yi,mi,bi;class gi extends it{constructor(){super();U(this,vt);Yt(this,"debouncedInputHandler",Ne(C(this,vt,bi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){Jl(n,this)}reset(){zl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow":xt;return M`
      <style>
        ${!this.unstyled&&te}
        ${!this.unstyled&&So}
        ${!this.unstyled&&Lo}
      </style>
      ${N(this.suggestions.length>10,()=>M`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${C(this,vt,yi)}
                @keydown=${C(this,vt,mi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(i=>M`
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
    `}}vt=new WeakSet,yi=function(n){Xl(n,this)},mi=function(n){Fl(n,this)},bi=function(n){ui(n,this)},Yt(gi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",gi);var Pt,vi,Cn;class wi extends it{constructor(){super();U(this,Pt);this.filterObject={},this.tabIndex=0,this.inputHandler=C(this,Pt,vi).bind(this),this.debouncedInputHandler=Ne(this.inputHandler,500,{leading:!1})}reset(){Gl(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>M`
        ${C(this,Pt,Cn).call(this,"min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min||this.filterObject.min}"
          value2="${this.filterObject.state.max||this.filterObject.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${C(this,Pt,Cn).call(this,"max","after")}
      `)}}Pt=new WeakSet,vi=function(n){Kl(n,this)},Cn=function(n,r){return Vl(n,r,this)},Yt(wi,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",wi);var je,xi;class ac extends it{constructor(){super();U(this,je);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){Ql(this)}createRenderRoot(){return this}render(){return N(this.filterObject,()=>{var n;return M`
        <form style="display: inline">
          ${Ie(["intersects","within"],r=>M`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===r||xt}"
                  value="${r}"
                  @click=${()=>C(this,je,xi).call(this,r)}
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
      `})}}je=new WeakSet,xi=function(n){ec(n,this)};customElements.define("eox-itemfilter-spatial",ac);var De,_i;class lc extends it{constructor(){super();U(this,De);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){C(this,De,_i).call(this)}reset(){tc(this)}render(){return M`<div id="eox-map"></div>`}}De=new WeakSet,_i=function(){hi(this)};customElements.define("eox-itemfilter-spatial-filter",lc);function cc(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function uc(t,e){const{code:n,target:r}=t;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&fc(n,t.target.value??"",e))}function fc(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var Tt,An,Mi;class hc extends it{constructor(){super();U(this,Tt);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",C(this,Tt,An).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",C(this,Tt,An).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return M`
      <style>
        ${te}
      </style>
      <span class="chip-container">
        ${Ie(this.items,n=>M`
            <span class="chip" @click=${C(this,Tt,Mi).bind(this)}>
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
    `}}Tt=new WeakSet,An=function(n){uc(n,this)},Mi=function(n){cc(n,this)};customElements.define("eox-itemfilter-chips",hc);const dc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Sr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var pc=200,Dn="__lodash_hash_undefined__",gc=1/0,yc="[object Function]",mc="[object GeneratorFunction]",bc=/[\\^$.*+?()[\]{}|]/g,wc=/^\[object .+?Constructor\]$/,vc=typeof bt=="object"&&bt&&bt.Object===Object&&bt,xc=typeof self=="object"&&self&&self.Object===Object&&self,In=vc||xc||Function("return this")();function _c(t,e){var n=t?t.length:0;return!!n&&Sc(t,e,0)>-1}function Mc(t,e,n,r){for(var i=t.length,o=n+-1;++o<i;)if(e(t[o],o,t))return o;return-1}function Sc(t,e,n){if(e!==e)return Mc(t,Lc,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Lc(t){return t!==t}function $c(t,e){return t.has(e)}function Cc(t,e){return t==null?void 0:t[e]}function Ac(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function Si(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var Rc=Array.prototype,Ec=Function.prototype,Li=Object.prototype,an=In["__core-js_shared__"],Lr=function(){var t=/[^.]+$/.exec(an&&an.keys&&an.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),$i=Ec.toString,Nn=Li.hasOwnProperty,Pc=Li.toString,Tc=RegExp("^"+$i.call(Nn).replace(bc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),kc=Rc.splice,Oc=Bn(In,"Map"),ln=Bn(In,"Set"),Zt=Bn(Object,"create");function Rt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function jc(){this.__data__=Zt?Zt(null):{}}function Dc(t){return this.has(t)&&delete this.__data__[t]}function Ic(t){var e=this.__data__;if(Zt){var n=e[t];return n===Dn?void 0:n}return Nn.call(e,t)?e[t]:void 0}function Nc(t){var e=this.__data__;return Zt?e[t]!==void 0:Nn.call(e,t)}function Bc(t,e){var n=this.__data__;return n[t]=Zt&&e===void 0?Dn:e,this}Rt.prototype.clear=jc;Rt.prototype.delete=Dc;Rt.prototype.get=Ic;Rt.prototype.has=Nc;Rt.prototype.set=Bc;function Wt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Hc(){this.__data__=[]}function qc(t){var e=this.__data__,n=We(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():kc.call(e,n,1),!0}function Uc(t){var e=this.__data__,n=We(e,t);return n<0?void 0:e[n][1]}function Wc(t){return We(this.__data__,t)>-1}function Gc(t,e){var n=this.__data__,r=We(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}Wt.prototype.clear=Hc;Wt.prototype.delete=qc;Wt.prototype.get=Uc;Wt.prototype.has=Wc;Wt.prototype.set=Gc;function Gt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Kc(){this.__data__={hash:new Rt,map:new(Oc||Wt),string:new Rt}}function Vc(t){return Ge(this,t).delete(t)}function zc(t){return Ge(this,t).get(t)}function Yc(t){return Ge(this,t).has(t)}function Xc(t,e){return Ge(this,t).set(t,e),this}Gt.prototype.clear=Kc;Gt.prototype.delete=Vc;Gt.prototype.get=zc;Gt.prototype.has=Yc;Gt.prototype.set=Xc;function Pe(t){var e=-1,n=t?t.length:0;for(this.__data__=new Gt;++e<n;)this.add(t[e])}function Fc(t){return this.__data__.set(t,Dn),this}function Jc(t){return this.__data__.has(t)}Pe.prototype.add=Pe.prototype.push=Fc;Pe.prototype.has=Jc;function We(t,e){for(var n=t.length;n--;)if(su(t[n][0],e))return n;return-1}function Zc(t){if(!Ci(t)||nu(t))return!1;var e=ou(t)||Ac(t)?Tc:wc;return e.test(ru(t))}function Qc(t,e,n){var r=-1,i=_c,o=t.length,a=!0,l=[],u=l;if(o>=pc){var f=tu(t);if(f)return Si(f);a=!1,i=$c,u=new Pe}else u=l;t:for(;++r<o;){var h=t[r],p=h;if(h=h!==0?h:0,a&&p===p){for(var y=u.length;y--;)if(u[y]===p)continue t;l.push(h)}else i(u,p,n)||(u!==l&&u.push(p),l.push(h))}return l}var tu=ln&&1/Si(new ln([,-0]))[1]==gc?function(t){return new ln(t)}:au;function Ge(t,e){var n=t.__data__;return eu(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Bn(t,e){var n=Cc(t,e);return Zc(n)?n:void 0}function eu(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function nu(t){return!!Lr&&Lr in t}function ru(t){if(t!=null){try{return $i.call(t)}catch{}try{return t+""}catch{}}return""}function iu(t){return t&&t.length?Qc(t):[]}function su(t,e){return t===e||t!==t&&e!==e}function ou(t){var e=Ci(t)?Pc.call(t):"";return e==yc||e==mc}function Ci(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function au(){}var lu=iu;const Ai=$r(lu);var Te={exports:{}};Te.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",p="[object Date]",y="[object Error]",g="[object Function]",b="[object GeneratorFunction]",x="[object Map]",$="[object Number]",L="[object Object]",E="[object Promise]",A="[object RegExp]",T="[object Set]",O="[object String]",ot="[object Symbol]",D="[object WeakMap]",Z="[object ArrayBuffer]",W="[object DataView]",ne="[object Float32Array]",Kt="[object Float64Array]",pt="[object Int8Array]",Hn="[object Int16Array]",G="[object Int32Array]",kt="[object Uint8Array]",re="[object Uint8ClampedArray]",Ti="[object Uint16Array]",ki="[object Uint32Array]",Oi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ji=/^\w*$/,Di=/^\./,Ii=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ni=/[\\^$.*+?()[\]{}|]/g,Bi=/\\(\\)?/g,Hi=/^\[object .+?Constructor\]$/,qi=/^(?:0|[1-9]\d*)$/,P={};P[ne]=P[Kt]=P[pt]=P[Hn]=P[G]=P[kt]=P[re]=P[Ti]=P[ki]=!0,P[u]=P[f]=P[Z]=P[h]=P[W]=P[p]=P[y]=P[g]=P[x]=P[$]=P[L]=P[A]=P[T]=P[O]=P[D]=!1;var qn=typeof bt=="object"&&bt&&bt.Object===Object&&bt,Ui=typeof self=="object"&&self&&self.Object===Object&&self,gt=qn||Ui||Function("return this")(),Un=e&&!e.nodeType&&e,Wn=Un&&!0&&t&&!t.nodeType&&t,Wi=Wn&&Wn.exports===Un,Gn=Wi&&qn.process,Kn=function(){try{return Gn&&Gn.binding("util")}catch{}}(),Vn=Kn&&Kn.isTypedArray;function Gi(s,c){for(var d=-1,m=s?s.length:0,v=Array(m);++d<m;)v[d]=c(s[d],d,s);return v}function Ki(s,c){for(var d=-1,m=c.length,v=s.length;++d<m;)s[v+d]=c[d];return s}function Vi(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function zi(s){return function(c){return c==null?void 0:c[s]}}function Yi(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function Xi(s){return function(c){return s(c)}}function Fi(s,c){return s==null?void 0:s[c]}function Ke(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function Ji(s){var c=-1,d=Array(s.size);return s.forEach(function(m,v){d[++c]=[v,m]}),d}function Zi(s,c){return function(d){return s(c(d))}}function Qi(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var ts=Array.prototype,es=Function.prototype,ie=Object.prototype,Ve=gt["__core-js_shared__"],zn=function(){var s=/[^.]+$/.exec(Ve&&Ve.keys&&Ve.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Yn=es.toString,at=ie.hasOwnProperty,Ot=ie.toString,ns=RegExp("^"+Yn.call(at).replace(Ni,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),se=gt.Symbol,Xn=gt.Uint8Array,rs=ie.propertyIsEnumerable,is=ts.splice,Fn=se?se.isConcatSpreadable:void 0,ss=Zi(Object.keys,Object),ze=jt(gt,"DataView"),Vt=jt(gt,"Map"),Ye=jt(gt,"Promise"),Xe=jt(gt,"Set"),Fe=jt(gt,"WeakMap"),zt=jt(Object,"create"),os=Lt(ze),as=Lt(Vt),ls=Lt(Ye),cs=Lt(Xe),us=Lt(Fe),oe=se?se.prototype:void 0,Je=oe?oe.valueOf:void 0,Jn=oe?oe.toString:void 0;function St(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function fs(){this.__data__=zt?zt(null):{}}function hs(s){return this.has(s)&&delete this.__data__[s]}function ds(s){var c=this.__data__;if(zt){var d=c[s];return d===i?void 0:d}return at.call(c,s)?c[s]:void 0}function ps(s){var c=this.__data__;return zt?c[s]!==void 0:at.call(c,s)}function gs(s,c){var d=this.__data__;return d[s]=zt&&c===void 0?i:c,this}St.prototype.clear=fs,St.prototype.delete=hs,St.prototype.get=ds,St.prototype.has=ps,St.prototype.set=gs;function lt(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function ys(){this.__data__=[]}function ms(s){var c=this.__data__,d=le(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():is.call(c,d,1),!0}function bs(s){var c=this.__data__,d=le(c,s);return d<0?void 0:c[d][1]}function ws(s){return le(this.__data__,s)>-1}function vs(s,c){var d=this.__data__,m=le(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}lt.prototype.clear=ys,lt.prototype.delete=ms,lt.prototype.get=bs,lt.prototype.has=ws,lt.prototype.set=vs;function ct(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function xs(){this.__data__={hash:new St,map:new(Vt||lt),string:new St}}function _s(s){return ce(this,s).delete(s)}function Ms(s){return ce(this,s).get(s)}function Ss(s){return ce(this,s).has(s)}function Ls(s,c){return ce(this,s).set(s,c),this}ct.prototype.clear=xs,ct.prototype.delete=_s,ct.prototype.get=Ms,ct.prototype.has=Ss,ct.prototype.set=Ls;function ae(s){var c=-1,d=s?s.length:0;for(this.__data__=new ct;++c<d;)this.add(s[c])}function $s(s){return this.__data__.set(s,i),this}function Cs(s){return this.__data__.has(s)}ae.prototype.add=ae.prototype.push=$s,ae.prototype.has=Cs;function ut(s){this.__data__=new lt(s)}function As(){this.__data__=new lt}function Rs(s){return this.__data__.delete(s)}function Es(s){return this.__data__.get(s)}function Ps(s){return this.__data__.has(s)}function Ts(s,c){var d=this.__data__;if(d instanceof lt){var m=d.__data__;if(!Vt||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new ct(m)}return d.set(s,c),this}ut.prototype.clear=As,ut.prototype.delete=Rs,ut.prototype.get=Es,ut.prototype.has=Ps,ut.prototype.set=Ts;function ks(s,c){var d=ft(s)||tn(s)?Yi(s.length,String):[],m=d.length,v=!!m;for(var w in s)at.call(s,w)&&!(v&&(w=="length"||er(w,m)))&&d.push(w);return d}function le(s,c){for(var d=s.length;d--;)if(ir(s[d][0],c))return d;return-1}var Os=Js(Is);function js(s,c,d,m,v){var w=-1,S=s.length;for(d||(d=ro),v||(v=[]);++w<S;){var k=s[w];d(k)?Ki(v,k):v[v.length]=k}return v}var Ds=Zs();function Is(s,c){return s&&Ds(s,c,ge)}function Zn(s,c){c=ue(c,s)?[c]:Qn(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[fe(c[d++])];return d&&d==m?s:void 0}function Ns(s){return Ot.call(s)}function Bs(s,c){return s!=null&&c in Object(s)}function Ze(s,c,d,m,v){return s===c?!0:s==null||c==null||!de(s)&&!pe(c)?s!==s&&c!==c:Hs(s,c,Ze,d,m,v)}function Hs(s,c,d,m,v,w){var S=ft(s),k=ft(c),j=f,I=f;S||(j=yt(s),j=j==u?L:j),k||(I=yt(c),I=I==u?L:I);var H=j==L&&!Ke(s),q=I==L&&!Ke(c),B=j==I;if(B&&!H)return w||(w=new ut),S||fo(s)?tr(s,c,d,m,v,w):Qs(s,c,j,d,m,v,w);if(!(v&a)){var Y=H&&at.call(s,"__wrapped__"),X=q&&at.call(c,"__wrapped__");if(Y||X){var mt=Y?s.value():s,ht=X?c.value():c;return w||(w=new ut),d(mt,ht,m,v,w)}}return B?(w||(w=new ut),to(s,c,d,m,v,w)):!1}function qs(s,c,d,m){var v=d.length,w=v;if(s==null)return!w;for(s=Object(s);v--;){var S=d[v];if(S[2]?S[1]!==s[S[0]]:!(S[0]in s))return!1}for(;++v<w;){S=d[v];var k=S[0],j=s[k],I=S[1];if(S[2]){if(j===void 0&&!(k in s))return!1}else{var H=new ut,q;if(!(q===void 0?Ze(I,j,m,o|a,H):q))return!1}}return!0}function Us(s){if(!de(s)||so(s))return!1;var c=sr(s)||Ke(s)?ns:Hi;return c.test(Lt(s))}function Ws(s){return pe(s)&&en(s.length)&&!!P[Ot.call(s)]}function Gs(s){return typeof s=="function"?s:s==null?yo:typeof s=="object"?ft(s)?Ys(s[0],s[1]):zs(s):mo(s)}function Ks(s){if(!oo(s))return ss(s);var c=[];for(var d in Object(s))at.call(s,d)&&d!="constructor"&&c.push(d);return c}function Vs(s,c){var d=-1,m=he(s)?Array(s.length):[];return Os(s,function(v,w,S){m[++d]=c(v,w,S)}),m}function zs(s){var c=eo(s);return c.length==1&&c[0][2]?rr(c[0][0],c[0][1]):function(d){return d===s||qs(d,s,c)}}function Ys(s,c){return ue(s)&&nr(c)?rr(fe(s),c):function(d){var m=po(d,s);return m===void 0&&m===c?go(d,s):Ze(c,m,void 0,o|a)}}function Xs(s){return function(c){return Zn(c,s)}}function Fs(s){if(typeof s=="string")return s;if(nn(s))return Jn?Jn.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function Qn(s){return ft(s)?s:ao(s)}function Js(s,c){return function(d,m){if(d==null)return d;if(!he(d))return s(d,m);for(var v=d.length,w=-1,S=Object(d);++w<v&&m(S[w],w,S)!==!1;);return d}}function Zs(s){return function(c,d,m){for(var v=-1,w=Object(c),S=m(c),k=S.length;k--;){var j=S[++v];if(d(w[j],j,w)===!1)break}return c}}function tr(s,c,d,m,v,w){var S=v&a,k=s.length,j=c.length;if(k!=j&&!(S&&j>k))return!1;var I=w.get(s);if(I&&w.get(c))return I==c;var H=-1,q=!0,B=v&o?new ae:void 0;for(w.set(s,c),w.set(c,s);++H<k;){var Y=s[H],X=c[H];if(m)var mt=S?m(X,Y,H,c,s,w):m(Y,X,H,s,c,w);if(mt!==void 0){if(mt)continue;q=!1;break}if(B){if(!Vi(c,function(ht,$t){if(!B.has($t)&&(Y===ht||d(Y,ht,m,v,w)))return B.add($t)})){q=!1;break}}else if(!(Y===X||d(Y,X,m,v,w))){q=!1;break}}return w.delete(s),w.delete(c),q}function Qs(s,c,d,m,v,w,S){switch(d){case W:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case Z:return!(s.byteLength!=c.byteLength||!m(new Xn(s),new Xn(c)));case h:case p:case $:return ir(+s,+c);case y:return s.name==c.name&&s.message==c.message;case A:case O:return s==c+"";case x:var k=Ji;case T:var j=w&a;if(k||(k=Qi),s.size!=c.size&&!j)return!1;var I=S.get(s);if(I)return I==c;w|=o,S.set(s,c);var H=tr(k(s),k(c),m,v,w,S);return S.delete(s),H;case ot:if(Je)return Je.call(s)==Je.call(c)}return!1}function to(s,c,d,m,v,w){var S=v&a,k=ge(s),j=k.length,I=ge(c),H=I.length;if(j!=H&&!S)return!1;for(var q=j;q--;){var B=k[q];if(!(S?B in c:at.call(c,B)))return!1}var Y=w.get(s);if(Y&&w.get(c))return Y==c;var X=!0;w.set(s,c),w.set(c,s);for(var mt=S;++q<j;){B=k[q];var ht=s[B],$t=c[B];if(m)var or=S?m($t,ht,B,c,s,w):m(ht,$t,B,s,c,w);if(!(or===void 0?ht===$t||d(ht,$t,m,v,w):or)){X=!1;break}mt||(mt=B=="constructor")}if(X&&!mt){var ye=s.constructor,me=c.constructor;ye!=me&&"constructor"in s&&"constructor"in c&&!(typeof ye=="function"&&ye instanceof ye&&typeof me=="function"&&me instanceof me)&&(X=!1)}return w.delete(s),w.delete(c),X}function ce(s,c){var d=s.__data__;return io(c)?d[typeof c=="string"?"string":"hash"]:d.map}function eo(s){for(var c=ge(s),d=c.length;d--;){var m=c[d],v=s[m];c[d]=[m,v,nr(v)]}return c}function jt(s,c){var d=Fi(s,c);return Us(d)?d:void 0}var yt=Ns;(ze&&yt(new ze(new ArrayBuffer(1)))!=W||Vt&&yt(new Vt)!=x||Ye&&yt(Ye.resolve())!=E||Xe&&yt(new Xe)!=T||Fe&&yt(new Fe)!=D)&&(yt=function(s){var c=Ot.call(s),d=c==L?s.constructor:void 0,m=d?Lt(d):void 0;if(m)switch(m){case os:return W;case as:return x;case ls:return E;case cs:return T;case us:return D}return c});function no(s,c,d){c=ue(c,s)?[c]:Qn(c);for(var m,v=-1,S=c.length;++v<S;){var w=fe(c[v]);if(!(m=s!=null&&d(s,w)))break;s=s[w]}if(m)return m;var S=s?s.length:0;return!!S&&en(S)&&er(w,S)&&(ft(s)||tn(s))}function ro(s){return ft(s)||tn(s)||!!(Fn&&s&&s[Fn])}function er(s,c){return c=c??l,!!c&&(typeof s=="number"||qi.test(s))&&s>-1&&s%1==0&&s<c}function ue(s,c){if(ft(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||nn(s)?!0:ji.test(s)||!Oi.test(s)||c!=null&&s in Object(c)}function io(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function so(s){return!!zn&&zn in s}function oo(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||ie;return s===d}function nr(s){return s===s&&!de(s)}function rr(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var ao=Qe(function(s){s=ho(s);var c=[];return Di.test(s)&&c.push(""),s.replace(Ii,function(d,m,v,w){c.push(v?w.replace(Bi,"$1"):m||d)}),c});function fe(s){if(typeof s=="string"||nn(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function Lt(s){if(s!=null){try{return Yn.call(s)}catch{}try{return s+""}catch{}}return""}function lo(s,c){return js(co(s,c))}function co(s,c){var d=ft(s)?Gi:Vs;return d(s,Gs(c))}function Qe(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,v=c?c.apply(this,m):m[0],w=d.cache;if(w.has(v))return w.get(v);var S=s.apply(this,m);return d.cache=w.set(v,S),S};return d.cache=new(Qe.Cache||ct),d}Qe.Cache=ct;function ir(s,c){return s===c||s!==s&&c!==c}function tn(s){return uo(s)&&at.call(s,"callee")&&(!rs.call(s,"callee")||Ot.call(s)==u)}var ft=Array.isArray;function he(s){return s!=null&&en(s.length)&&!sr(s)}function uo(s){return pe(s)&&he(s)}function sr(s){var c=de(s)?Ot.call(s):"";return c==g||c==b}function en(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=l}function de(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function pe(s){return!!s&&typeof s=="object"}function nn(s){return typeof s=="symbol"||pe(s)&&Ot.call(s)==ot}var fo=Vn?Xi(Vn):Ws;function ho(s){return s==null?"":Fs(s)}function po(s,c,d){var m=s==null?void 0:Zn(s,c);return m===void 0?d:m}function go(s,c){return s!=null&&no(s,c,Bs)}function ge(s){return he(s)?ks(s):Ks(s)}function yo(s){return s}function mo(s){return ue(s)?zi(fe(s)):Xs(s)}t.exports=lo})(Te,Te.exports);var cu=Te.exports;const Ri=$r(cu);function uu(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(o=>{const a={},l=f=>o.format==="date"?Xt(f).unix():parseFloat(f);e.forEach(f=>{var h,p;if(o.type==="range"){const y=Jt(o.key,f);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=l(y);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(f[o.key])?f[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(p=o.key)!=null&&p.includes(".")?Ai(Ri(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((o,a)=>o.concat(a[t.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),Dl(e,Object.assign({keys:i},t.fuseConfig)),r}async function fu(t,e,n){let r;n.externalFilter?r=await Hl(e,n.filters,t):r=await Il(e,n.filters,t),n.results=n.sortResults(r)}function hu(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return M`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return M`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${Ai(Ri(n.items,t.key)).filter(i=>i)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return M`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return M`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return M``}}function du(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function pu(t,e,n){return M`
    ${N(t.dirty,()=>M`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":xt}
        </button>
      `)}
  `}function gu(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var Qt,Nt,F,qt,Ei,Pi;class yu extends it{constructor(){super();U(this,qt);U(this,Qt,[]);U(this,Nt,[]);U(this,F,dc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Ne(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="#004170" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){be(this,Qt,uu(K(this,F),K(this,Nt),this)),this.search()}async searchHandler(){await fu(K(this,F),K(this,Nt),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return du(n,K(this,F))}resetFilters(){gu(this)}firstUpdated(n){var i;let r={};Sr.map(o=>{r={...r,[o]:this[o]}}),be(this,F,r),be(this,Nt,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){Sr.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return M`
      <style>
        ${Do}
        ${!this.unstyled&&te}
        ${!this.unstyled&&_o}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":xt}
        @submit="${r=>r.preventDefault()}"
      >
        ${N(this.filterProperties,()=>M`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${N(!this.inlineMode,()=>M`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${Ie(Object.values(this.filters),(r,i)=>M` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${r}
                          @details-toggled=${o=>ii(o,K(this,F),this)}
                          data-details="${r.key}"
                        >
                          ${C(this,qt,Pi).call(this,r,Mr(i,1))}
                          ${C(this,qt,Ei).call(this,r,Mr(i,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${N(!this.inlineMode&&K(this,F).filterProperties&&!this.inlineMode&&K(this,F).filterProperties&&wn(this.filters),()=>M`
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
        ${N(((n=K(this,F))==null?void 0:n.showResults)&&this.results,()=>M`
            <eox-itemfilter-results
              .config=${K(this,F)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${K(this,Qt)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
              @click:result-action=${this.emitResultAction}
            >
              <slot name="resultstitle"
                ><h6 class="main-heading">Results</h6></slot
              >
            </eox-itemfilter-results>
          `)}
      </form>
    `}}Qt=new WeakMap,Nt=new WeakMap,F=new WeakMap,qt=new WeakSet,Ei=function(n,r){return hu(n,r,this)},Pi=function(n,r){return pu(n,r,this)};customElements.define("eox-itemfilter",yu);const mu=[".items"],bu={slot:"filterstitle",style:{margin:"14px 8px"}},wu={slot:"resultstitle",style:{margin:"14px 8px"}},ju={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:"Results"},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:void 0},imageProperty:{type:String,default:""},subTitleProperty:{type:String,default:""},resultType:{type:String,default:""},cssVars:{type:[String,Object],default:""},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},emits:["select"],setup(t,{emit:e}){const n=e,r=t,i=async p=>{p?(h.resetSelectedCompareSTAC(),await h.loadSelectedSTAC(p.href),n("select",p)):h.selectedStac=null},o=p=>{p&&(h.loadSelectedCompareSTAC(p.href),n("select",p))},a=async p=>{const y=p.detail;r.enableCompare?o(y):i(y)},{smAndDown:l}=vo(),u=Eo(()=>({titleProperty:r.titleProperty,enableHighlighting:r.enableHighlighting,expandMultipleFilters:r.expandMultipleFilters,expandMultipleResults:r.expandMultipleResults,subTitleProperty:r.subTitleProperty,resultType:r.resultType,imageProperty:r.imageProperty,aggregateResults:r.aggregateResults,style:r.cssVars,filterProperties:l.value?"":r.filterProperties})),f=Po(null),h=xo();return(p,y)=>{var g;return ko(),To("eox-itemfilter",Oo({class:"fill-height"},u.value,{ref_key:"eoxItemFilter",ref:f,style:{overflow:"auto","--background-color":"none"},onSelect:a,".items":(g=jo(h).stac)==null?void 0:g.filter(b=>b.rel==="child")}),[lr("h4",bu,cr(t.filtersTitle),1),lr("h4",wu,cr(t.resultsTitle),1)],48,mu)}}};export{ju as default};
