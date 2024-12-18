var xo=Object.defineProperty;var lr=t=>{throw TypeError(t)};var vo=(t,e,n)=>e in t?xo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Xt=(t,e,n)=>vo(t,typeof e!="symbol"?e+"":e,n),nn=(t,e,n)=>e.has(t)||lr("Cannot "+n);var G=(t,e,n)=>(nn(t,e,"read from private field"),n?n.call(t):e.get(t)),U=(t,e,n)=>e.has(t)?lr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),we=(t,e,n,r)=>(nn(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),E=(t,e,n)=>(nn(t,e,"access private method"),n);import{c as _o}from"./eo-dash.BmfiLz_u.js";import{r as st,x as A,E as dt}from"./lit-element.Cu4xVypU.js";import{a as rn,o as Ne}from"./map.Co3hxIo-.js";import{n as I}from"./when.BR7zwNJC.js";import{s as Mo}from"./all.style.BXiFe-7i.js";import{d as Zt,c as So}from"./repeat.BiCh9U-B.js";import{_ as De}from"./index.D_Wsj7oq.js";import{o as Ao}from"./orient2d.DArCjZZA.js";import{c as wt,g as Lr}from"./commonjsHelpers.BosuxZz1.js";import{p as Co,v as $o,c as Lo,j as cr,t as ur,K as Eo,o as Ro}from"./framework.BUHMmcSd.js";import"./theme.D-I-GXSD.js";import"./directive.CF8sV3Lr.js";import"./directive-helpers.Hs5M0JDY.js";const Po=`
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
`,ne=`
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
`;var ke,Er;class ko extends st{constructor(){super();U(this,ke);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return A`
      <style>
        ${!this.unstyled&&ne}
      </style>

      ${I(this.filterObject.featured,()=>A`<slot name="filter"></slot>`,()=>A`<details
            @toggle="${E(this,ke,Er)}"
            class="details-filter"
            ?open=${this.filterObject.expanded||dt}
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
    `}}ke=new WeakSet,Er=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",ko);function pt(t){return Array.isArray?Array.isArray(t):kr(t)==="[object Array]"}const To=1/0;function Oo(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-To?"-0":e}function jo(t){return t==null?"":Oo(t)}function nt(t){return typeof t=="string"}function Rr(t){return typeof t=="number"}function No(t){return t===!0||t===!1||Do(t)&&kr(t)=="[object Boolean]"}function Pr(t){return typeof t=="object"}function Do(t){return Pr(t)&&t!==null}function V(t){return t!=null}function sn(t){return!t.trim().length}function kr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Bo="Incorrect 'index' type",Io=t=>`Invalid value for key ${t}`,Ho=t=>`Pattern length exceeds max of ${t}.`,qo=t=>`Missing ${t} property in key`,Uo=t=>`Property 'weight' in key '${t}' must be a positive integer`,fr=Object.prototype.hasOwnProperty;class Wo{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Tr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Tr(t){let e=null,n=null,r=null,i=1,o=null;if(nt(t)||pt(t))r=t,e=hr(t),n=un(t);else{if(!fr.call(t,"name"))throw new Error(qo("name"));const a=t.name;if(r=a,fr.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Uo(a));e=hr(a),n=un(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function hr(t){return pt(t)?t:t.split(".")}function un(t){return pt(t)?t.join("."):t}function Go(t,e){let n=[],r=!1;const i=(o,a,l)=>{if(V(o))if(!a[l])n.push(o);else{let u=a[l];const f=o[u];if(!V(f))return;if(l===a.length-1&&(nt(f)||Rr(f)||No(f)))n.push(jo(f));else if(pt(f)){r=!0;for(let h=0,p=f.length;h<p;h+=1)i(f[h],a,l+1)}else a.length&&i(f,a,l+1)}};return i(t,nt(e)?e.split("."):e,0),r?n:n[0]}const Vo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ko={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},zo={location:0,threshold:.6,distance:100},Yo={useExtendedSearch:!1,getFn:Go,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var _={...Ko,...Vo,...zo,...Yo};const Fo=/[^ ]+/g;function Xo(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(Fo).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Rn{constructor({getFn:e=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){this.norm=Xo(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,nt(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();nt(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!V(e)||sn(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(V(a)){if(pt(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(V(h))if(nt(h)&&!sn(h)){let p={v:h,i:f,n:this.norm.get(h)};l.push(p)}else pt(h)&&h.forEach((p,y)=>{u.push({nestedArrIndex:y,value:p})})}r.$[o]=l}else if(nt(a)&&!sn(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Or(t,e,{getFn:n=_.getFn,fieldNormWeight:r=_.fieldNormWeight}={}){const i=new Rn({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Tr)),i.setSources(e),i.create(),i}function Zo(t,{getFn:e=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new Rn({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function xe(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=_.distance,ignoreLocation:o=_.ignoreLocation}={}){const a=e/t.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function Jo(t=[],e=_.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let l=t[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const Lt=32;function Qo(t,e,n,{location:r=_.location,distance:i=_.distance,threshold:o=_.threshold,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,includeMatches:u=_.includeMatches,ignoreLocation:f=_.ignoreLocation}={}){if(e.length>Lt)throw new Error(Ho(Lt));const h=e.length,p=t.length,y=Math.max(0,Math.min(r,p));let g=o,b=y;const x=l>1||u,C=x?Array(p):[];let M;for(;(M=t.indexOf(e,b))>-1;){let D=xe(e,{currentLocation:M,expectedLocation:y,distance:i,ignoreLocation:f});if(g=Math.min(D,g),b=M+h,x){let z=0;for(;z<h;)C[M+z]=1,z+=1}}b=-1;let L=[],$=1,O=h+p;const k=1<<h-1;for(let D=0;D<h;D+=1){let z=0,J=O;for(;z<J;)xe(e,{errors:D,currentLocation:y+J,expectedLocation:y,distance:i,ignoreLocation:f})<=g?z=J:O=J,J=Math.floor((O-z)/2+z);O=J;let St=Math.max(1,y-J+1),zt=a?p:Math.min(y+J,p)+h,gt=Array(zt+2);gt[zt+1]=(1<<D)-1;for(let W=zt;W>=St;W-=1){let jt=W-1,ie=n[t.charAt(jt)];if(x&&(C[jt]=+!!ie),gt[W]=(gt[W+1]<<1|1)&ie,D&&(gt[W]|=(L[W+1]|L[W])<<1|1|L[W+1]),gt[W]&k&&($=xe(e,{errors:D,currentLocation:jt,expectedLocation:y,distance:i,ignoreLocation:f}),$<=g)){if(g=$,b=jt,b<=y)break;St=Math.max(1,2*y-b)}}if(xe(e,{errors:D+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:f})>g)break;L=gt}const et={isMatch:b>=0,score:Math.max(.001,$)};if(x){const D=Jo(C,l);D.length?u&&(et.indices=D):et.isMatch=!1}return et}function ta(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class jr{constructor(e,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreLocation:f=_.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f},this.pattern=u?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const h=(y,g)=>{this.chunks.push({pattern:y,alphabet:ta(y),startIndex:g})},p=this.pattern.length;if(p>Lt){let y=0;const g=p%Lt,b=p-g;for(;y<b;)h(this.pattern.substr(y,Lt),y),y+=Lt;if(g){const x=p-Lt;h(this.pattern.substr(x),x)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let b={isMatch:!0,score:0};return r&&(b.indices=[[0,e.length-1]]),b}const{location:i,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,ignoreLocation:f}=this.options;let h=[],p=0,y=!1;this.chunks.forEach(({pattern:b,alphabet:x,startIndex:C})=>{const{isMatch:M,score:L,indices:$}=Qo(e,b,x,{location:i+C,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});M&&(y=!0),p+=L,M&&$&&(h=[...h,...$])});let g={isMatch:y,score:y?p/this.chunks.length:1};return y&&r&&(g.indices=h),g}}class _t{constructor(e){this.pattern=e}static isMultiMatch(e){return dr(e,this.multiRegex)}static isSingleMatch(e){return dr(e,this.singleRegex)}search(){}}function dr(t,e){const n=t.match(e);return n?n[1]:null}class ea extends _t{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class na extends _t{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class ra extends _t{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ia extends _t{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class sa extends _t{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class oa extends _t{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Nr extends _t{constructor(e,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreLocation:f=_.ignoreLocation}={}){super(e),this._bitapSearch=new jr(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Dr extends _t{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const fn=[ea,Dr,ra,ia,oa,sa,na,Nr],pr=fn.length,aa=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,la="|";function ca(t,e={}){return t.split(la).map(n=>{let r=n.trim().split(aa).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,f=-1;for(;!u&&++f<pr;){const h=fn[f];let p=h.isMultiMatch(l);p&&(i.push(new h(p,e)),u=!0)}if(!u)for(f=-1;++f<pr;){const h=fn[f];let p=h.isSingleMatch(l);if(p){i.push(new h(p,e));break}}}return i})}const ua=new Set([Nr.type,Dr.type]);class fa{constructor(e,{isCaseSensitive:n=_.isCaseSensitive,includeMatches:r=_.includeMatches,minMatchCharLength:i=_.minMatchCharLength,ignoreLocation:o=_.ignoreLocation,findAllMatches:a=_.findAllMatches,location:l=_.location,threshold:u=_.threshold,distance:f=_.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:o,location:l,threshold:u,distance:f},this.pattern=n?e:e.toLowerCase(),this.query=ca(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let o=0,a=[],l=0;for(let u=0,f=n.length;u<f;u+=1){const h=n[u];a.length=0,o=0;for(let p=0,y=h.length;p<y;p+=1){const g=h[p],{isMatch:b,indices:x,score:C}=g.search(e);if(b){if(o+=1,l+=C,r){const M=g.constructor.type;ua.has(M)?a=[...a,...x]:a.push(x)}}else{l=0,o=0,a.length=0;break}}if(o){let p={isMatch:!0,score:l/o};return r&&(p.indices=a),p}}return{isMatch:!1,score:1}}}const hn=[];function ha(...t){hn.push(...t)}function dn(t,e){for(let n=0,r=hn.length;n<r;n+=1){let i=hn[n];if(i.condition(t,e))return new i(t,e)}return new jr(t,e)}const Ae={AND:"$and",OR:"$or"},pn={PATH:"$path",PATTERN:"$val"},gn=t=>!!(t[Ae.AND]||t[Ae.OR]),da=t=>!!t[pn.PATH],pa=t=>!pt(t)&&Pr(t)&&!gn(t),gr=t=>({[Ae.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Br(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=da(i);if(!a&&o.length>1&&!gn(i))return r(gr(i));if(pa(i)){const u=a?i[pn.PATH]:o[0],f=a?i[pn.PATTERN]:i[u];if(!nt(f))throw new Error(Io(u));const h={keyId:un(u),pattern:f};return n&&(h.searcher=dn(f,e)),h}let l={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];pt(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return gn(t)||(t=gr(t)),r(t)}function ga(t,{ignoreFieldNorm:e=_.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:o))}),n.score=r})}function ya(t,e){const n=t.matches;e.matches=[],V(n)&&n.forEach(r=>{if(!V(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function ma(t,e){e.score=t.score}function ba(t,e,{includeMatches:n=_.includeMatches,includeScore:r=_.includeScore}={}){const i=[];return n&&i.push(ya),r&&i.push(ma),t.map(o=>{const{idx:a}=o,l={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class Mt{constructor(e,n={},r){this.options={..._,...n},this.options.useExtendedSearch,this._keyStore=new Wo(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Rn))throw new Error(Bo);this._myIndex=n||Or(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){V(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=nt(e)?nt(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return ga(u,{ignoreFieldNorm:l}),o&&u.sort(a),Rr(n)&&n>-1&&(u=u.slice(0,n)),ba(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=dn(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!V(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:l,indices:h}]})}),i}_searchLogical(e){const n=Br(e,this.options),r=(l,u,f)=>{if(!l.children){const{keyId:p,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(u,p),searcher:y});return g&&g.length?[{idx:f,item:u,matches:g}]:[]}const h=[];for(let p=0,y=l.children.length;p<y;p+=1){const g=l.children[p],b=r(g,u,f);if(b.length)h.push(...b);else if(l.operator===Ae.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(V(l)){let f=r(n,l,u);f.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(e){const n=dn(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!V(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!V(n))return[];let i=[];if(pt(n))n.forEach(({v:o,i:a,n:l})=>{if(!V(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&i.push({score:f,key:e,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:f}=r.searchIn(o);l&&i.push({score:u,key:e,value:o,norm:a,indices:f})}return i}}Mt.version="7.0.0";Mt.createIndex=Or;Mt.parseIndex=Zo;Mt.config=_;Mt.parseQuery=Br;ha(fa);function Ir(t,e){const n=new Mt(e.filterProperties,{keys:["title"]}),r=t.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function wa(t,e){const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const yn=Math.min,Bt=Math.max,Ce=Math.round,ve=Math.floor,rt=t=>({x:t,y:t});function Hr(t){return t.split("-")[0]}function xa(t){return t.split("-")[1]}function va(t){return t==="x"?"y":"x"}function _a(t){return t==="y"?"height":"width"}function qr(t){return["top","bottom"].includes(Hr(t))?"y":"x"}function Ma(t){return va(qr(t))}function Ur(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function yr(t,e,n){let{reference:r,floating:i}=t;const o=qr(e),a=Ma(e),l=_a(a),u=Hr(e),f=o==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(u){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-i.width,y:p};break;default:g={x:r.x,y:r.y}}switch(xa(e)){case"start":g[a]-=y*(n&&f?-1:1);break;case"end":g[a]+=y*(n&&f?-1:1);break}return g}const Sa=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let f=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:p}=yr(f,r,u),y=r,g={},b=0;for(let x=0;x<l.length;x++){const{name:C,fn:M}=l[x],{x:L,y:$,data:O,reset:k}=await M({x:h,y:p,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:f,platform:a,elements:{reference:t,floating:e}});h=L??h,p=$??p,g={...g,[C]:{...g[C],...O}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(y=k.placement),k.rects&&(f=k.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):k.rects),{x:h,y:p}=yr(f,y,u)),x=-1)}return{x:h,y:p,placement:y,strategy:i,middlewareData:g}};function Be(){return typeof window<"u"}function Gt(t){return Wr(t)?(t.nodeName||"").toLowerCase():"#document"}function K(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ot(t){var e;return(e=(Wr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Wr(t){return Be()?t instanceof Node||t instanceof K(t).Node:!1}function Q(t){return Be()?t instanceof Element||t instanceof K(t).Element:!1}function it(t){return Be()?t instanceof HTMLElement||t instanceof K(t).HTMLElement:!1}function mr(t){return!Be()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof K(t).ShadowRoot}function re(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=tt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function Aa(t){return["table","td","th"].includes(Gt(t))}function Ie(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Pn(t){const e=kn(),n=Q(t)?tt(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Ca(t){let e=xt(t);for(;it(e)&&!qt(e);){if(Pn(e))return e;if(Ie(e))return null;e=xt(e)}return null}function kn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function qt(t){return["html","body","#document"].includes(Gt(t))}function tt(t){return K(t).getComputedStyle(t)}function He(t){return Q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function xt(t){if(Gt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||mr(t)&&t.host||ot(t);return mr(e)?e.host:e}function Gr(t){const e=xt(t);return qt(e)?t.ownerDocument?t.ownerDocument.body:t.body:it(e)&&re(e)?e:Gr(e)}function Jt(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Gr(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),a=K(i);if(o){const l=mn(a);return e.concat(a,a.visualViewport||[],re(i)?i:[],l&&n?Jt(l):[])}return e.concat(i,Jt(i,[],n))}function mn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Vr(t){const e=tt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=it(t),o=i?t.offsetWidth:n,a=i?t.offsetHeight:r,l=Ce(n)!==o||Ce(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Tn(t){return Q(t)?t:t.contextElement}function It(t){const e=Tn(t);if(!it(e))return rt(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=Vr(e);let a=(o?Ce(n.width):n.width)/r,l=(o?Ce(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const $a=rt(0);function Kr(t){const e=K(t);return!kn()||!e.visualViewport?$a:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function La(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==K(t)?!1:e}function Et(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=Tn(t);let a=rt(1);e&&(r?Q(r)&&(a=It(r)):a=It(t));const l=La(o,n,r)?Kr(o):rt(0);let u=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(o){const y=K(o),g=r&&Q(r)?K(r):r;let b=y,x=mn(b);for(;x&&r&&g!==b;){const C=It(x),M=x.getBoundingClientRect(),L=tt(x),$=M.left+(x.clientLeft+parseFloat(L.paddingLeft))*C.x,O=M.top+(x.clientTop+parseFloat(L.paddingTop))*C.y;u*=C.x,f*=C.y,h*=C.x,p*=C.y,u+=$,f+=O,b=K(x),x=mn(b)}}return Ur({width:h,height:p,x:u,y:f})}function On(t,e){const n=He(t).scrollLeft;return e?e.left+n:Et(ot(t)).left+n}function zr(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:On(t,r)),o=r.top+e.scrollTop;return{x:i,y:o}}function Ea(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",a=ot(r),l=e?Ie(e.floating):!1;if(r===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},f=rt(1);const h=rt(0),p=it(r);if((p||!p&&!o)&&((Gt(r)!=="body"||re(a))&&(u=He(r)),it(r))){const g=Et(r);f=It(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=a&&!p&&!o?zr(a,u,!0):rt(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-u.scrollTop*f.y+h.y+y.y}}function Ra(t){return Array.from(t.getClientRects())}function Pa(t){const e=ot(t),n=He(t),r=t.ownerDocument.body,i=Bt(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=Bt(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+On(t);const l=-n.scrollTop;return tt(r).direction==="rtl"&&(a+=Bt(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function ka(t,e){const n=K(t),r=ot(t),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const f=kn();(!f||f&&e==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l,y:u}}function Ta(t,e){const n=Et(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=it(t)?It(t):rt(1),a=t.clientWidth*o.x,l=t.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:a,height:l,x:u,y:f}}function br(t,e,n){let r;if(e==="viewport")r=ka(t,n);else if(e==="document")r=Pa(ot(t));else if(Q(e))r=Ta(e,n);else{const i=Kr(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Ur(r)}function Yr(t,e){const n=xt(t);return n===e||!Q(n)||qt(n)?!1:tt(n).position==="fixed"||Yr(n,e)}function Oa(t,e){const n=e.get(t);if(n)return n;let r=Jt(t,[],!1).filter(l=>Q(l)&&Gt(l)!=="body"),i=null;const o=tt(t).position==="fixed";let a=o?xt(t):t;for(;Q(a)&&!qt(a);){const l=tt(a),u=Pn(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||re(a)&&!u&&Yr(t,a))?r=r.filter(h=>h!==a):i=l,a=xt(a)}return e.set(t,r),r}function ja(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const a=[...n==="clippingAncestors"?Ie(e)?[]:Oa(e,this._c):[].concat(n),r],l=a[0],u=a.reduce((f,h)=>{const p=br(e,h,i);return f.top=Bt(p.top,f.top),f.right=yn(p.right,f.right),f.bottom=yn(p.bottom,f.bottom),f.left=Bt(p.left,f.left),f},br(e,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Na(t){const{width:e,height:n}=Vr(t);return{width:e,height:n}}function Da(t,e,n){const r=it(e),i=ot(e),o=n==="fixed",a=Et(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const u=rt(0);if(r||!r&&!o)if((Gt(e)!=="body"||re(i))&&(l=He(e)),r){const y=Et(e,!0,o,e);u.x=y.x+e.clientLeft,u.y=y.y+e.clientTop}else i&&(u.x=On(i));const f=i&&!r&&!o?zr(i,l):rt(0),h=a.left+l.scrollLeft-u.x-f.x,p=a.top+l.scrollTop-u.y-f.y;return{x:h,y:p,width:a.width,height:a.height}}function on(t){return tt(t).position==="static"}function wr(t,e){if(!it(t)||tt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return ot(t)===n&&(n=n.ownerDocument.body),n}function Fr(t,e){const n=K(t);if(Ie(t))return n;if(!it(t)){let i=xt(t);for(;i&&!qt(i);){if(Q(i)&&!on(i))return i;i=xt(i)}return n}let r=wr(t,e);for(;r&&Aa(r)&&on(r);)r=wr(r,e);return r&&qt(r)&&on(r)&&!Pn(r)?n:r||Ca(t)||n}const Ba=async function(t){const e=this.getOffsetParent||Fr,n=this.getDimensions,r=await n(t.floating);return{reference:Da(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ia(t){return tt(t).direction==="rtl"}const Ha={convertOffsetParentRelativeRectToViewportRelativeRect:Ea,getDocumentElement:ot,getClippingRect:ja,getOffsetParent:Fr,getElementRects:Ba,getClientRects:Ra,getDimensions:Na,getScale:It,isElement:Q,isRTL:Ia};function qa(t,e){let n=null,r;const i=ot(t);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const{left:f,top:h,width:p,height:y}=t.getBoundingClientRect();if(l||e(),!p||!y)return;const g=ve(h),b=ve(i.clientWidth-(f+p)),x=ve(i.clientHeight-(h+y)),C=ve(f),L={rootMargin:-g+"px "+-b+"px "+-x+"px "+-C+"px",threshold:Bt(0,yn(1,u))||1};let $=!0;function O(k){const et=k[0].intersectionRatio;if(et!==u){if(!$)return a();et?a(!1,et):r=setTimeout(()=>{a(!1,1e-7)},1e3)}$=!1}try{n=new IntersectionObserver(O,{...L,root:i.ownerDocument})}catch{n=new IntersectionObserver(O,L)}n.observe(t)}return a(!0),o}function Ua(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=Tn(t),h=i||o?[...f?Jt(f):[],...Jt(e)]:[];h.forEach(M=>{i&&M.addEventListener("scroll",n,{passive:!0}),o&&M.addEventListener("resize",n)});const p=f&&l?qa(f,n):null;let y=-1,g=null;a&&(g=new ResizeObserver(M=>{let[L]=M;L&&L.target===f&&g&&(g.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var $;($=g)==null||$.observe(e)})),n()}),f&&!u&&g.observe(f),g.observe(e));let b,x=u?Et(t):null;u&&C();function C(){const M=Et(t);x&&(M.x!==x.x||M.y!==x.y||M.width!==x.width||M.height!==x.height)&&n(),x=M,b=requestAnimationFrame(C)}return n(),()=>{var M;h.forEach(L=>{i&&L.removeEventListener("scroll",n),o&&L.removeEventListener("resize",n)}),p==null||p(),(M=g)==null||M.disconnect(),g=null,u&&cancelAnimationFrame(b)}}const Wa=(t,e,n)=>{const r=new Map,i={platform:Ha,...n},o={...i.platform,_c:r};return Sa(t,e,{...i,platform:o})};function Ga(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return Ua(e,n,()=>{n.matches(":popover-open")&&Wa(e,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Xr(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Ir({target:{value:""}},t)}function Va(t,e){e.inlineMode&&t.stopPropagation()}function Ka(t){t.inlineMode&&(t.showDropdown=!0)}function za(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function Ya(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Xr(e),e.showDropdown=!1)}function Fa(t,e){e.inlineMode&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Xr(e),e.showDropdown=!1)}function Xa(t,e){var n,r,i=0,o,a,l,u,f,h,p,y=t[0],g=t[1],b=e.length;for(n=0;n<b;n++){r=0;var x=e[n],C=x.length-1;if(h=x[0],h[0]!==x[C][0]&&h[1]!==x[C][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-g,r;r<C;r++){if(p=x[r+1],u=p[0]-y,f=p[1]-g,l===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&l<0||f<0&&l>=0){if(o=Ao(a,u,l,f,0,0),o===0)return 0;(o>0&&f>0&&l<=0||o<0&&f<=0&&l>0)&&i++}h=p,l=f,a=u}}return i%2!==0}function Rt(t,e,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=e||{},r.geometry=t,r}function Za(t,e,n={}){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!xr(t[0])||!xr(t[1]))throw new Error("coordinates must contain numbers");return Rt({type:"Point",coordinates:t},e,n)}function Ja(t,e,n={}){if(t.length<2)throw new Error("coordinates must be an array of two or more positions");return Rt({type:"LineString",coordinates:t},e,n)}function bn(t,e={}){const n={type:"FeatureCollection"};return e.id&&(n.id=e.id),e.bbox&&(n.bbox=e.bbox),n.features=t,n}function Qa(t,e,n={}){return Rt({type:"MultiLineString",coordinates:t},e,n)}function xr(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function Zr(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function tl(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Ut(t){return t.type==="Feature"?t.geometry:t}function Z(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Zr(t),i=Ut(e),o=i.type,a=e.bbox;let l=i.coordinates;if(a&&el(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var f=0;f<l.length;++f){const h=Xa(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function el(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Jr{constructor(e=[],n=nl){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const o=e-1>>1,a=n[o];if(r(i,a)>=0)break;n[e]=a,e=o}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,o=n[e];for(;e<i;){let a=(e<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,o)>=0)break;n[e]=l,e=a}n[e]=o}}function nl(t,e){return t<e?-1:t>e?1:0}function Qr(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function rl(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class vr{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function il(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)_r(n[r],e)}else _r(t,e)}let _e=0,Me=0,Se=0;function _r(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;Me=Me+1;for(let u=0;u<r[i][o].length-1;u++){l=r[i][o][u+1];const f=new vr(a,_e,Me,Se),h=new vr(l,_e,Me,Se+1);f.otherEvent=h,h.otherEvent=f,Qr(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(f),e.push(h),a=l,Se=Se+1}}_e=_e+1}class sl{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function ol(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,o=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,u=e.rightSweepEvent.p.x,f=e.rightSweepEvent.p.y,h=(f-l)*(i-n)-(u-a)*(o-r),p=(u-a)*(r-l)-(f-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const g=p/h,b=y/h;if(g>=0&&g<=1&&b>=0&&b<=1){const x=n+g*(i-n),C=r+g*(o-r);return[x,C]}return!1}function al(t,e){e=e||!1;const n=[],r=new Jr([],rl);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const o=new sl(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const u=ol(o,l);u!==!1&&n.push(u)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function ll(t,e){const n=new Jr([],Qr);return il(t,n),al(n,e)}var cl=ll;function jn(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!1}=n;let o=[];t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(Rt(t)),e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(Rt(e));const a=cl(bn(o),i);let l=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,l.push(f))})}else l=a;return bn(l.map(u=>Za(u)))}function ti(t,e,n){if(t!==null)for(var r,i,o,a,l,u,f,h=0,p=0,y,g=t.type,b=g==="FeatureCollection",x=g==="Feature",C=b?t.features.length:1,M=0;M<C;M++){f=b?t.features[M].geometry:x?t.geometry:t,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var L=0;L<l;L++){var $=0,O=0;if(a=y?f.geometries[L]:f,a!==null){u=a.coordinates;var k=a.type;switch(h=0,k){case null:break;case"Point":if(e(u,p,M,$,O)===!1)return!1;p++,$++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],p,M,$,O)===!1)return!1;p++,k==="MultiPoint"&&$++}k==="LineString"&&$++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(e(u[r][i],p,M,$,O)===!1)return!1;p++}k==="MultiLineString"&&$++,k==="Polygon"&&O++}k==="Polygon"&&$++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(O=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(e(u[r][i][o],p,M,$,O)===!1)return!1;p++}O++}$++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(ti(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function ul(t,e){var n,r,i,o,a,l,u,f,h,p,y=0,g=t.type==="FeatureCollection",b=t.type==="Feature",x=g?t.features.length:1;for(n=0;n<x;n++){for(l=g?t.features[n].geometry:b?t.geometry:t,f=g?t.features[n].properties:b?t.properties:{},h=g?t.features[n].bbox:b?t.bbox:void 0,p=g?t.features[n].id:b?t.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(e(null,y,f,h,p)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(o,y,f,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(e(o.geometries[r],y,f,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function $e(t,e){ul(t,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Rt(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],p={type:u,coordinates:h};if(e(Rt(p,i),r,f)===!1)return!1}})}function wn(t,e={}){const n=Ut(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return fl(n,e);case"MultiPolygon":return hl(n,e);default:throw new Error("invalid poly")}}function fl(t,e={}){const r=Ut(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return ei(r,i)}function hl(t,e={}){const r=Ut(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},o=[];return r.forEach(a=>{o.push(ei(a,i))}),bn(o)}function ei(t,e){return t.length>1?Qa(t,e):Ja(t[0],e)}function dl(t,e,n={}){var r;const i=(r=n.ignoreSelfIntersections)!=null?r:!1;let o=!0;return $e(t,a=>{$e(e,l=>{if(o===!1)return!1;o=pl(a.geometry,l.geometry,i)})}),o}function pl(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!bl(t.coordinates,e.coordinates);case"LineString":return!Mr(e,t);case"Polygon":return!Z(t,e)}break;case"LineString":switch(e.type){case"Point":return!Mr(t,e);case"LineString":return!gl(t,e,n);case"Polygon":return!Sr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!Z(e,t);case"LineString":return!Sr(t,e,n);case"Polygon":return!yl(e,t,n)}}return!1}function Mr(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(ml(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function gl(t,e,n){return jn(t,e,{ignoreSelfIntersections:n}).features.length>0}function Sr(t,e,n){for(const i of e.coordinates)if(Z(i,t))return!0;return jn(e,wn(t),{ignoreSelfIntersections:n}).features.length>0}function yl(t,e,n){for(const i of t.coordinates[0])if(Z(i,e))return!0;for(const i of e.coordinates[0])if(Z(i,t))return!0;return jn(wn(t),wn(e),{ignoreSelfIntersections:n}).features.length>0}function ml(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],o=e[0]-t[0],a=e[1]-t[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function bl(t,e){return t[0]===e[0]&&t[1]===e[1]}function wl(t,e,n={}){var r;const i=(r=n.ignoreSelfIntersections)!=null?r:!1;let o=!1;return $e(t,a=>{$e(e,l=>{if(o===!0)return!0;o=!dl(a.geometry,l.geometry,{ignoreSelfIntersections:i})})}),o}var xl=wl;function Le(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return ti(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Ee(t,e,n={}){const r=Zr(t),i=tl(e);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),vl(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function vl(t,e,n,r,i){const o=n[0],a=n[1],l=t[0],u=t[1],f=e[0],h=e[1],p=n[0]-l,y=n[1]-u,g=f-l,b=h-u,x=p*b-y*g;if(i!==null){if(Math.abs(x)>i)return!1}else if(x!==0)return!1;if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<=f:f<=o&&o<l:b>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<f:f<o&&o<=l:b>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<f:f<o&&o<l:b>0?u<a&&a<h:h<a&&a<u}else return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<=f:f<=o&&o<=l:b>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function _l(t,e){var n=Ut(t),r=Ut(e),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return Ml(n,r);case"LineString":return Ee(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return Z(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return Sl(n,r);case"LineString":return Al(n,r);case"Polygon":case"MultiPolygon":return Cl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return $l(n,r);case"Polygon":case"MultiPolygon":return Ll(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return El(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Ml(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(ri(e.coordinates[n],t.coordinates)){r=!0;break}return r}function Sl(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)ri(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Al(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Ee(t.coordinates[r],e))return!1;n||(n=Ee(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function Cl(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=Z(t.coordinates[i],e),!r){n=!1;break}r=Z(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function $l(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Ee(t.coordinates[n],e))return!1;return!0}function Ll(t,e){var n=Le(e),r=Le(t);if(!ni(n,r))return!1;for(var i=!1,o=0;o<t.coordinates.length;o++){if(!Z(t.coordinates[o],e))return!1;if(i||(i=Z(t.coordinates[o],e,{ignoreBoundary:!0})),!i&&o<t.coordinates.length-1){var a=Rl(t.coordinates[o],t.coordinates[o+1]);i=Z(a,e,{ignoreBoundary:!0})}}return i}function El(t,e){var n=Le(t),r=Le(e);if(!ni(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!Z(t.coordinates[0][i],e))return!1;return!0}function ni(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function ri(t,e){return t[0]===e[0]&&t[1]===e[1]}function Rl(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Pl=_l;const kl=(t,e)=>e?xl(t,e):!0,Tl=(t,e)=>e?Pl(t,e):!0;function Ol(t,e="highlight",n="title"){const r=(o,a,l)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=l},i=(o,a=[])=>{let l="",u=0;return a.forEach(f=>{const h=f[1]+1;l+=[o.substring(u,f[0]),`<mark class="${e}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),l+=o.substring(u),l};return t.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const l={...o};return a.forEach(u=>{u.key===n&&r(l,u.key,i(u.value,u.indices))}),l})}let ii;const jl=(t,e)=>{ii=new Mt(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},Nl=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,f])=>{const h="$or",p=[],y=(g,b)=>{const x={};f.type==="text"?x[g]=`${b}`:x[u]=`="${g}"`,p.push(x)};return Object.entries(f.state).filter(([,g])=>g).forEach(([g,b])=>y(g,b)),p.length>0&&l.push({[h]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},u=ii.search(l);i=n.enableHighlighting?Ol(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[u,f])=>(l[u]={min:f.state.min,max:f.state.max,format:f.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const[h,p]of Object.entries(o)){const y=b=>p.format==="date"?Zt(b).unix():b,g=Qt(h,i[u]);g?Array.isArray(g)?f[h]=o[h].min<=y(g[1])&&y(g[0])<=o[h].max:y(g)>=o[h].min&&y(g)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}const a=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[u,f])=>(l[u]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const h of Object.keys(a)){const p=Qt(h,i[u]),y=a[h].mode||"within";p&&(y==="within"?Tl(p,a[h].geometry):kl(p,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function Dl(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function qe(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function Ar(t,e){return t*2+e}function Bl(t){return Object.keys(t).map(e=>({title:A`${t[e].title||t[e].key}:
        <strong>${t[e].stringifiedState}</strong>`,key:e})).filter(e=>t[e.key].dirty)}function xn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function Il(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function si(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Qt(t,e){return t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}var R,oi,vn,_n,ai,Mn,Sn,li,An,ci,ui;class Hl extends st{constructor(){super();U(this,R);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=E(this,R,ai).bind(this),this._handleKeyDown=E(this,R,Mn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&E(this,R,vn).call(this)}disconnectedCallback(){this.inlineMode&&E(this,R,_n).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?E(this,R,vn).call(this):E(this,R,_n).call(this))}render(){return A`
      <style>
        ${!this.unstyled&&ne}
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
    `}}R=new WeakSet,oi=function(){setTimeout(()=>this._overlayCleanup=Ga(this))},vn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),E(this,R,oi).call(this)},_n=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},ai=function(n){Fa(n,this)},Mn=function(n){Ya(n,this)},Sn=function(n){za(n,this)},li=function(){Ka(this)},An=function(n){Va(n,this)},ci=function(n){wa(n,this)},ui=function(n){Ir(n,this)};customElements.define("eox-itemfilter-container",Hl);function ql(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",qe(t.filterObject),t.requestUpdate()}function Ul(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const Cn="ddd, D MMM YYYY HH:mm:ss";function Wl(t){if(t.filterObject=qe(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function Gl(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${Zt.unix(n).format(Cn)} - ${Zt.unix(r).format(Cn)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function Vl(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],o=r?Zt.unix(i).format(Cn):i;return A`<div class="range-${e}">${o}</div>`}function Kl(t){zl(-1,t),qe(t.filterObject),t.requestUpdate()}function zl(t,e){e.selectedItems=[],Nn(e),hi(e)}function fi(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),Nn(e),hi(e)}function Yl(t,e){e.query=t.target.value,e.showSuggestions=!0}function Fl(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&fi(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function Xl(t,e){(t.has("suggestions")||t.has("query"))&&Nn(e)}function Zl(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,o)=>i.localeCompare(o));return e.sort(n).map(i=>i)}function Nn(t){var n,r,i;let e;t.query&&(e=new Mt(t.suggestions,{threshold:.4}).search(t.query).map(a=>a.item)),t.filteredSuggestions=Zl(t,e||t.suggestions),(n=t.filterObject)!=null&&n.filterKeys&&(t.filteredSuggestions=(r=t.filterObject)==null?void 0:r.filterKeys.map(o=>`${o}`),t.filterObject.state=(i=t.filterObject)==null?void 0:i.filterKeys.map(o=>`${o}`).reduce((o,a)=>(a in o||(o[a]=void 0),o),t.filterObject.state)),t.highlightedIndex=-1}function hi(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function Jl(t){qe(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function Ql(t){t.renderRoot.querySelector("#eox-map").innerHTML="",di(t)}function tc(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function di(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&ec(t.geometry),r=Dl(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function ec(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var Te;class nc extends st{constructor(){super();U(this,Te,()=>{Ul(this)});Xt(this,"debouncedInputHandler",De(G(this,Te),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){ql(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return A`
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
      `})}}Te=new WeakMap;customElements.define("eox-itemfilter-text",nc);function rc(t,e,n){return t.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}function ic(t,e){return A`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||dt}
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
        ${pi(t,e)}
      </div>
    </details>
  `}function pi(t,e){const n=e.results,r=t?e.aggregateResults(n,t):n,i=e.config,o=a=>{var l;return((l=e.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":dt};return A`
    <ul class=${e.resultType}>
      ${So(r,a=>a.id,a=>A`
          <li
            class=${o(a)}
            @click=${()=>{e.selectedResult===a?e.selectedResult=null:e.selectedResult=a,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
          >
            <span id="${a.id}">
              ${I(i.subTitleProperty||i.imageProperty,()=>A`
                  ${Qt(i.imageProperty,a)?A`
                        <img
                          class="image"
                          src="${Qt(i.imageProperty,a)}"
                        />
                      `:dt}
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
  `}var kt,$n,gi;class sc extends st{constructor(){super();U(this,kt);this.config=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list"}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Object},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String}}}aggregateResults(n,r){return rc(n,r,this)}createRenderRoot(){return this}handleAccordion(n){si(n,this.config,this)}render(){return A`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${I(this.results.length<1,()=>A`<small class="no-results">No matching items</small>`,()=>dt)}
          <ul id="results" part="results">
            ${I(this.config.aggregateResults,()=>Ne(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>A`${I(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>A`<div style="margin-left: -8px">
                          ${E(this,kt,$n).call(this,n)}
                        </div>`,()=>E(this,kt,gi).call(this,n))}`),()=>E(this,kt,$n).call(this))}
          </ul>
        </div>
      </section>
    `}}kt=new WeakSet,$n=function(n){return pi(n,this)},gi=function(n){return ic(n,this)};customElements.define("eox-itemfilter-results",sc);const oc=`input[type="checkbox"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}input[type="checkbox"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="checkbox"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");}`,ac=`input[type="radio"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}label span { font-size: small;}input[type="radio"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-blank%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="radio"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-marked%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' /%3E%3C/svg%3E");}`;var vt,mi,bi,wi;class yi extends st{constructor(){super();U(this,vt);Xt(this,"debouncedInputHandler",De(E(this,vt,wi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){Xl(n,this)}reset(){Kl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow":dt;return A`
      <style>
        ${!this.unstyled&&ne}
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
                @input=${E(this,vt,mi)}
                @keydown=${E(this,vt,bi)}
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
    `}}vt=new WeakSet,mi=function(n){Yl(n,this)},bi=function(n){Fl(n,this)},wi=function(n){fi(n,this)},Xt(yi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",yi);var Tt,vi,Ln;class xi extends st{constructor(){super();U(this,Tt);this.filterObject={},this.tabIndex=0,this.inputHandler=E(this,Tt,vi).bind(this),this.debouncedInputHandler=De(this.inputHandler,500,{leading:!1})}reset(){Wl(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>A`
        ${E(this,Tt,Ln).call(this,"min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.state.min||this.filterObject.min}"
          value2="${this.filterObject.state.max||this.filterObject.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${E(this,Tt,Ln).call(this,"max","after")}
      `)}}Tt=new WeakSet,vi=function(n){Gl(n,this)},Ln=function(n,r){return Vl(n,r,this)},Xt(xi,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",xi);var Oe,_i;class lc extends st{constructor(){super();U(this,Oe);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){Jl(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return A`
        <form style="display: inline">
          ${Ne(["intersects","within"],r=>A`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===r||dt}"
                  value="${r}"
                  @click=${()=>E(this,Oe,_i).call(this,r)}
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
      `})}}Oe=new WeakSet,_i=function(n){tc(n,this)};customElements.define("eox-itemfilter-spatial",lc);var je,Mi;class cc extends st{constructor(){super();U(this,je);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){E(this,je,Mi).call(this)}reset(){Ql(this)}render(){return A`<div id="eox-map"></div>`}}je=new WeakSet,Mi=function(){di(this)};customElements.define("eox-itemfilter-spatial-filter",cc);function uc(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target.classList.add("highlighted"),e.requestUpdate()}function fc(t,e){const{code:n,target:r}=t;r.id==="eox-itemfilter-input-search"&&(e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&hc(n,t.target.value??"",e)))}function hc(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var Ot,En,Si;class dc extends st{constructor(){super();U(this,Ot);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",E(this,Ot,En).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",E(this,Ot,En).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return A`
      <style>
        ${ne}
      </style>
      <span class="chip-container">
        ${Ne(this.items,n=>A`
            <span class="chip" @click=${E(this,Ot,Si).bind(this)}>
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
    `}}Ot=new WeakSet,En=function(n){fc(n,this)},Si=function(n){uc(n,this)};customElements.define("eox-itemfilter-chips",dc);const pc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Cr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var gc=200,Dn="__lodash_hash_undefined__",yc=1/0,mc="[object Function]",bc="[object GeneratorFunction]",wc=/[\\^$.*+?()[\]{}|]/g,xc=/^\[object .+?Constructor\]$/,vc=typeof wt=="object"&&wt&&wt.Object===Object&&wt,_c=typeof self=="object"&&self&&self.Object===Object&&self,Bn=vc||_c||Function("return this")();function Mc(t,e){var n=t?t.length:0;return!!n&&Ac(t,e,0)>-1}function Sc(t,e,n,r){for(var i=t.length,o=n+-1;++o<i;)if(e(t[o],o,t))return o;return-1}function Ac(t,e,n){if(e!==e)return Sc(t,Cc,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Cc(t){return t!==t}function $c(t,e){return t.has(e)}function Lc(t,e){return t==null?void 0:t[e]}function Ec(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function Ai(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var Rc=Array.prototype,Pc=Function.prototype,Ci=Object.prototype,an=Bn["__core-js_shared__"],$r=function(){var t=/[^.]+$/.exec(an&&an.keys&&an.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),$i=Pc.toString,In=Ci.hasOwnProperty,kc=Ci.toString,Tc=RegExp("^"+$i.call(In).replace(wc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Oc=Rc.splice,jc=Hn(Bn,"Map"),ln=Hn(Bn,"Set"),te=Hn(Object,"create");function Pt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Nc(){this.__data__=te?te(null):{}}function Dc(t){return this.has(t)&&delete this.__data__[t]}function Bc(t){var e=this.__data__;if(te){var n=e[t];return n===Dn?void 0:n}return In.call(e,t)?e[t]:void 0}function Ic(t){var e=this.__data__;return te?e[t]!==void 0:In.call(e,t)}function Hc(t,e){var n=this.__data__;return n[t]=te&&e===void 0?Dn:e,this}Pt.prototype.clear=Nc;Pt.prototype.delete=Dc;Pt.prototype.get=Bc;Pt.prototype.has=Ic;Pt.prototype.set=Hc;function Vt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function qc(){this.__data__=[]}function Uc(t){var e=this.__data__,n=Ue(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Oc.call(e,n,1),!0}function Wc(t){var e=this.__data__,n=Ue(e,t);return n<0?void 0:e[n][1]}function Gc(t){return Ue(this.__data__,t)>-1}function Vc(t,e){var n=this.__data__,r=Ue(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}Vt.prototype.clear=qc;Vt.prototype.delete=Uc;Vt.prototype.get=Wc;Vt.prototype.has=Gc;Vt.prototype.set=Vc;function Kt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Kc(){this.__data__={hash:new Pt,map:new(jc||Vt),string:new Pt}}function zc(t){return We(this,t).delete(t)}function Yc(t){return We(this,t).get(t)}function Fc(t){return We(this,t).has(t)}function Xc(t,e){return We(this,t).set(t,e),this}Kt.prototype.clear=Kc;Kt.prototype.delete=zc;Kt.prototype.get=Yc;Kt.prototype.has=Fc;Kt.prototype.set=Xc;function Re(t){var e=-1,n=t?t.length:0;for(this.__data__=new Kt;++e<n;)this.add(t[e])}function Zc(t){return this.__data__.set(t,Dn),this}function Jc(t){return this.__data__.has(t)}Re.prototype.add=Re.prototype.push=Zc;Re.prototype.has=Jc;function Ue(t,e){for(var n=t.length;n--;)if(ou(t[n][0],e))return n;return-1}function Qc(t){if(!Li(t)||ru(t))return!1;var e=au(t)||Ec(t)?Tc:xc;return e.test(iu(t))}function tu(t,e,n){var r=-1,i=Mc,o=t.length,a=!0,l=[],u=l;if(o>=gc){var f=eu(t);if(f)return Ai(f);a=!1,i=$c,u=new Re}else u=l;t:for(;++r<o;){var h=t[r],p=h;if(h=h!==0?h:0,a&&p===p){for(var y=u.length;y--;)if(u[y]===p)continue t;l.push(h)}else i(u,p,n)||(u!==l&&u.push(p),l.push(h))}return l}var eu=ln&&1/Ai(new ln([,-0]))[1]==yc?function(t){return new ln(t)}:lu;function We(t,e){var n=t.__data__;return nu(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Hn(t,e){var n=Lc(t,e);return Qc(n)?n:void 0}function nu(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function ru(t){return!!$r&&$r in t}function iu(t){if(t!=null){try{return $i.call(t)}catch{}try{return t+""}catch{}}return""}function su(t){return t&&t.length?tu(t):[]}function ou(t,e){return t===e||t!==t&&e!==e}function au(t){var e=Li(t)?kc.call(t):"";return e==mc||e==bc}function Li(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function lu(){}var cu=su;const Ei=Lr(cu);var Pe={exports:{}};Pe.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=1/0,u=9007199254740991,f="[object Arguments]",h="[object Array]",p="[object Boolean]",y="[object Date]",g="[object Error]",b="[object Function]",x="[object GeneratorFunction]",C="[object Map]",M="[object Number]",L="[object Object]",$="[object Promise]",O="[object RegExp]",k="[object Set]",et="[object String]",D="[object Symbol]",z="[object WeakMap]",J="[object ArrayBuffer]",St="[object DataView]",zt="[object Float32Array]",gt="[object Float64Array]",qn="[object Int8Array]",W="[object Int16Array]",jt="[object Int32Array]",ie="[object Uint8Array]",Ti="[object Uint8ClampedArray]",Oi="[object Uint16Array]",ji="[object Uint32Array]",Ni=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Di=/^\w*$/,Bi=/^\./,Ii=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hi=/[\\^$.*+?()[\]{}|]/g,qi=/\\(\\)?/g,Ui=/^\[object .+?Constructor\]$/,Wi=/^(?:0|[1-9]\d*)$/,P={};P[zt]=P[gt]=P[qn]=P[W]=P[jt]=P[ie]=P[Ti]=P[Oi]=P[ji]=!0,P[f]=P[h]=P[J]=P[p]=P[St]=P[y]=P[g]=P[b]=P[C]=P[M]=P[L]=P[O]=P[k]=P[et]=P[z]=!1;var Un=typeof wt=="object"&&wt&&wt.Object===Object&&wt,Gi=typeof self=="object"&&self&&self.Object===Object&&self,yt=Un||Gi||Function("return this")(),Wn=e&&!e.nodeType&&e,Gn=Wn&&!0&&t&&!t.nodeType&&t,Vi=Gn&&Gn.exports===Wn,Vn=Vi&&Un.process,Kn=function(){try{return Vn&&Vn.binding("util")}catch{}}(),zn=Kn&&Kn.isTypedArray;function Ki(s,c){for(var d=-1,m=s?s.length:0,v=Array(m);++d<m;)v[d]=c(s[d],d,s);return v}function zi(s,c){for(var d=-1,m=c.length,v=s.length;++d<m;)s[v+d]=c[d];return s}function Yi(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function Fi(s){return function(c){return c==null?void 0:c[s]}}function Xi(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function Zi(s){return function(c){return s(c)}}function Ji(s,c){return s==null?void 0:s[c]}function Ge(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function Qi(s){var c=-1,d=Array(s.size);return s.forEach(function(m,v){d[++c]=[v,m]}),d}function ts(s,c){return function(d){return s(c(d))}}function es(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var ns=Array.prototype,rs=Function.prototype,se=Object.prototype,Ve=yt["__core-js_shared__"],Yn=function(){var s=/[^.]+$/.exec(Ve&&Ve.keys&&Ve.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Fn=rs.toString,at=se.hasOwnProperty,Nt=se.toString,is=RegExp("^"+Fn.call(at).replace(Hi,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),oe=yt.Symbol,Xn=yt.Uint8Array,ss=se.propertyIsEnumerable,os=ns.splice,Zn=oe?oe.isConcatSpreadable:void 0,as=ts(Object.keys,Object),Ke=Dt(yt,"DataView"),Yt=Dt(yt,"Map"),ze=Dt(yt,"Promise"),Ye=Dt(yt,"Set"),Fe=Dt(yt,"WeakMap"),Ft=Dt(Object,"create"),ls=Ct(Ke),cs=Ct(Yt),us=Ct(ze),fs=Ct(Ye),hs=Ct(Fe),ae=oe?oe.prototype:void 0,Xe=ae?ae.valueOf:void 0,Jn=ae?ae.toString:void 0;function At(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function ds(){this.__data__=Ft?Ft(null):{}}function ps(s){return this.has(s)&&delete this.__data__[s]}function gs(s){var c=this.__data__;if(Ft){var d=c[s];return d===i?void 0:d}return at.call(c,s)?c[s]:void 0}function ys(s){var c=this.__data__;return Ft?c[s]!==void 0:at.call(c,s)}function ms(s,c){var d=this.__data__;return d[s]=Ft&&c===void 0?i:c,this}At.prototype.clear=ds,At.prototype.delete=ps,At.prototype.get=gs,At.prototype.has=ys,At.prototype.set=ms;function lt(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function bs(){this.__data__=[]}function ws(s){var c=this.__data__,d=ce(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():os.call(c,d,1),!0}function xs(s){var c=this.__data__,d=ce(c,s);return d<0?void 0:c[d][1]}function vs(s){return ce(this.__data__,s)>-1}function _s(s,c){var d=this.__data__,m=ce(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}lt.prototype.clear=bs,lt.prototype.delete=ws,lt.prototype.get=xs,lt.prototype.has=vs,lt.prototype.set=_s;function ct(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function Ms(){this.__data__={hash:new At,map:new(Yt||lt),string:new At}}function Ss(s){return ue(this,s).delete(s)}function As(s){return ue(this,s).get(s)}function Cs(s){return ue(this,s).has(s)}function $s(s,c){return ue(this,s).set(s,c),this}ct.prototype.clear=Ms,ct.prototype.delete=Ss,ct.prototype.get=As,ct.prototype.has=Cs,ct.prototype.set=$s;function le(s){var c=-1,d=s?s.length:0;for(this.__data__=new ct;++c<d;)this.add(s[c])}function Ls(s){return this.__data__.set(s,i),this}function Es(s){return this.__data__.has(s)}le.prototype.add=le.prototype.push=Ls,le.prototype.has=Es;function ut(s){this.__data__=new lt(s)}function Rs(){this.__data__=new lt}function Ps(s){return this.__data__.delete(s)}function ks(s){return this.__data__.get(s)}function Ts(s){return this.__data__.has(s)}function Os(s,c){var d=this.__data__;if(d instanceof lt){var m=d.__data__;if(!Yt||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new ct(m)}return d.set(s,c),this}ut.prototype.clear=Rs,ut.prototype.delete=Ps,ut.prototype.get=ks,ut.prototype.has=Ts,ut.prototype.set=Os;function js(s,c){var d=ft(s)||Qe(s)?Xi(s.length,String):[],m=d.length,v=!!m;for(var w in s)at.call(s,w)&&!(v&&(w=="length"||nr(w,m)))&&d.push(w);return d}function ce(s,c){for(var d=s.length;d--;)if(sr(s[d][0],c))return d;return-1}var Ns=Qs(Is);function Ds(s,c,d,m,v){var w=-1,S=s.length;for(d||(d=so),v||(v=[]);++w<S;){var T=s[w];d(T)?zi(v,T):v[v.length]=T}return v}var Bs=to();function Is(s,c){return s&&Bs(s,c,ye)}function Qn(s,c){c=fe(c,s)?[c]:tr(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[he(c[d++])];return d&&d==m?s:void 0}function Hs(s){return Nt.call(s)}function qs(s,c){return s!=null&&c in Object(s)}function Ze(s,c,d,m,v){return s===c?!0:s==null||c==null||!pe(s)&&!ge(c)?s!==s&&c!==c:Us(s,c,Ze,d,m,v)}function Us(s,c,d,m,v,w){var S=ft(s),T=ft(c),j=h,N=h;S||(j=mt(s),j=j==f?L:j),T||(N=mt(c),N=N==f?L:N);var H=j==L&&!Ge(s),q=N==L&&!Ge(c),B=j==N;if(B&&!H)return w||(w=new ut),S||po(s)?er(s,c,d,m,v,w):eo(s,c,j,d,m,v,w);if(!(v&a)){var Y=H&&at.call(s,"__wrapped__"),F=q&&at.call(c,"__wrapped__");if(Y||F){var bt=Y?s.value():s,ht=F?c.value():c;return w||(w=new ut),d(bt,ht,m,v,w)}}return B?(w||(w=new ut),no(s,c,d,m,v,w)):!1}function Ws(s,c,d,m){var v=d.length,w=v;if(s==null)return!w;for(s=Object(s);v--;){var S=d[v];if(S[2]?S[1]!==s[S[0]]:!(S[0]in s))return!1}for(;++v<w;){S=d[v];var T=S[0],j=s[T],N=S[1];if(S[2]){if(j===void 0&&!(T in s))return!1}else{var H=new ut,q;if(!(q===void 0?Ze(N,j,m,o|a,H):q))return!1}}return!0}function Gs(s){if(!pe(s)||ao(s))return!1;var c=or(s)||Ge(s)?is:Ui;return c.test(Ct(s))}function Vs(s){return ge(s)&&tn(s.length)&&!!P[Nt.call(s)]}function Ks(s){return typeof s=="function"?s:s==null?bo:typeof s=="object"?ft(s)?Xs(s[0],s[1]):Fs(s):wo(s)}function zs(s){if(!lo(s))return as(s);var c=[];for(var d in Object(s))at.call(s,d)&&d!="constructor"&&c.push(d);return c}function Ys(s,c){var d=-1,m=de(s)?Array(s.length):[];return Ns(s,function(v,w,S){m[++d]=c(v,w,S)}),m}function Fs(s){var c=ro(s);return c.length==1&&c[0][2]?ir(c[0][0],c[0][1]):function(d){return d===s||Ws(d,s,c)}}function Xs(s,c){return fe(s)&&rr(c)?ir(he(s),c):function(d){var m=yo(d,s);return m===void 0&&m===c?mo(d,s):Ze(c,m,void 0,o|a)}}function Zs(s){return function(c){return Qn(c,s)}}function Js(s){if(typeof s=="string")return s;if(en(s))return Jn?Jn.call(s):"";var c=s+"";return c=="0"&&1/s==-l?"-0":c}function tr(s){return ft(s)?s:co(s)}function Qs(s,c){return function(d,m){if(d==null)return d;if(!de(d))return s(d,m);for(var v=d.length,w=-1,S=Object(d);++w<v&&m(S[w],w,S)!==!1;);return d}}function to(s){return function(c,d,m){for(var v=-1,w=Object(c),S=m(c),T=S.length;T--;){var j=S[++v];if(d(w[j],j,w)===!1)break}return c}}function er(s,c,d,m,v,w){var S=v&a,T=s.length,j=c.length;if(T!=j&&!(S&&j>T))return!1;var N=w.get(s);if(N&&w.get(c))return N==c;var H=-1,q=!0,B=v&o?new le:void 0;for(w.set(s,c),w.set(c,s);++H<T;){var Y=s[H],F=c[H];if(m)var bt=S?m(F,Y,H,c,s,w):m(Y,F,H,s,c,w);if(bt!==void 0){if(bt)continue;q=!1;break}if(B){if(!Yi(c,function(ht,$t){if(!B.has($t)&&(Y===ht||d(Y,ht,m,v,w)))return B.add($t)})){q=!1;break}}else if(!(Y===F||d(Y,F,m,v,w))){q=!1;break}}return w.delete(s),w.delete(c),q}function eo(s,c,d,m,v,w,S){switch(d){case St:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case J:return!(s.byteLength!=c.byteLength||!m(new Xn(s),new Xn(c)));case p:case y:case M:return sr(+s,+c);case g:return s.name==c.name&&s.message==c.message;case O:case et:return s==c+"";case C:var T=Qi;case k:var j=w&a;if(T||(T=es),s.size!=c.size&&!j)return!1;var N=S.get(s);if(N)return N==c;w|=o,S.set(s,c);var H=er(T(s),T(c),m,v,w,S);return S.delete(s),H;case D:if(Xe)return Xe.call(s)==Xe.call(c)}return!1}function no(s,c,d,m,v,w){var S=v&a,T=ye(s),j=T.length,N=ye(c),H=N.length;if(j!=H&&!S)return!1;for(var q=j;q--;){var B=T[q];if(!(S?B in c:at.call(c,B)))return!1}var Y=w.get(s);if(Y&&w.get(c))return Y==c;var F=!0;w.set(s,c),w.set(c,s);for(var bt=S;++q<j;){B=T[q];var ht=s[B],$t=c[B];if(m)var ar=S?m($t,ht,B,c,s,w):m(ht,$t,B,s,c,w);if(!(ar===void 0?ht===$t||d(ht,$t,m,v,w):ar)){F=!1;break}bt||(bt=B=="constructor")}if(F&&!bt){var me=s.constructor,be=c.constructor;me!=be&&"constructor"in s&&"constructor"in c&&!(typeof me=="function"&&me instanceof me&&typeof be=="function"&&be instanceof be)&&(F=!1)}return w.delete(s),w.delete(c),F}function ue(s,c){var d=s.__data__;return oo(c)?d[typeof c=="string"?"string":"hash"]:d.map}function ro(s){for(var c=ye(s),d=c.length;d--;){var m=c[d],v=s[m];c[d]=[m,v,rr(v)]}return c}function Dt(s,c){var d=Ji(s,c);return Gs(d)?d:void 0}var mt=Hs;(Ke&&mt(new Ke(new ArrayBuffer(1)))!=St||Yt&&mt(new Yt)!=C||ze&&mt(ze.resolve())!=$||Ye&&mt(new Ye)!=k||Fe&&mt(new Fe)!=z)&&(mt=function(s){var c=Nt.call(s),d=c==L?s.constructor:void 0,m=d?Ct(d):void 0;if(m)switch(m){case ls:return St;case cs:return C;case us:return $;case fs:return k;case hs:return z}return c});function io(s,c,d){c=fe(c,s)?[c]:tr(c);for(var m,v=-1,S=c.length;++v<S;){var w=he(c[v]);if(!(m=s!=null&&d(s,w)))break;s=s[w]}if(m)return m;var S=s?s.length:0;return!!S&&tn(S)&&nr(w,S)&&(ft(s)||Qe(s))}function so(s){return ft(s)||Qe(s)||!!(Zn&&s&&s[Zn])}function nr(s,c){return c=c??u,!!c&&(typeof s=="number"||Wi.test(s))&&s>-1&&s%1==0&&s<c}function fe(s,c){if(ft(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||en(s)?!0:Di.test(s)||!Ni.test(s)||c!=null&&s in Object(c)}function oo(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function ao(s){return!!Yn&&Yn in s}function lo(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||se;return s===d}function rr(s){return s===s&&!pe(s)}function ir(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var co=Je(function(s){s=go(s);var c=[];return Bi.test(s)&&c.push(""),s.replace(Ii,function(d,m,v,w){c.push(v?w.replace(qi,"$1"):m||d)}),c});function he(s){if(typeof s=="string"||en(s))return s;var c=s+"";return c=="0"&&1/s==-l?"-0":c}function Ct(s){if(s!=null){try{return Fn.call(s)}catch{}try{return s+""}catch{}}return""}function uo(s,c){return Ds(fo(s,c))}function fo(s,c){var d=ft(s)?Ki:Ys;return d(s,Ks(c))}function Je(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,v=c?c.apply(this,m):m[0],w=d.cache;if(w.has(v))return w.get(v);var S=s.apply(this,m);return d.cache=w.set(v,S),S};return d.cache=new(Je.Cache||ct),d}Je.Cache=ct;function sr(s,c){return s===c||s!==s&&c!==c}function Qe(s){return ho(s)&&at.call(s,"callee")&&(!ss.call(s,"callee")||Nt.call(s)==f)}var ft=Array.isArray;function de(s){return s!=null&&tn(s.length)&&!or(s)}function ho(s){return ge(s)&&de(s)}function or(s){var c=pe(s)?Nt.call(s):"";return c==b||c==x}function tn(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=u}function pe(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function ge(s){return!!s&&typeof s=="object"}function en(s){return typeof s=="symbol"||ge(s)&&Nt.call(s)==D}var po=zn?Zi(zn):Vs;function go(s){return s==null?"":Js(s)}function yo(s,c,d){var m=s==null?void 0:Qn(s,c);return m===void 0?d:m}function mo(s,c){return s!=null&&io(s,c,qs)}function ye(s){return de(s)?js(s):zs(s)}function bo(s){return s}function wo(s){return fe(s)?Fi(he(s)):Zs(s)}t.exports=uo})(Pe,Pe.exports);var uu=Pe.exports;const Ri=Lr(uu);function fu(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(o=>{const a={},l=f=>o.format==="date"?Zt(f).unix():parseFloat(f);e.forEach(f=>{var h,p;if(o.type==="range"){const y=Qt(o.key,f);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=l(y);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(f[o.key])?f[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(p=o.key)!=null&&p.includes(".")?Ei(Ri(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((o,a)=>o.concat(a[t.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),jl(e,Object.assign({keys:i},t.fuseConfig)),r}async function hu(t,e,n){let r;n.externalFilter?r=await Il(e,n.filters,t):r=await Nl(e,n.filters,t),n.results=n.sortResults(r)}function du(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return A`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return A`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${Ei(Ri(n.items,t.key)).filter(i=>i)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return A`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return A`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return A``}}function pu(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function gu(t,e,n){return A`
    ${I(t.dirty,()=>A`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":dt}
        </button>
      `)}
  `}function yu(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var ee,Ht,X,Wt,Pi,ki;class mu extends st{constructor(){super();U(this,Wt);U(this,ee,[]);U(this,Ht,[]);U(this,X,pc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=De(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},unstyled:{type:Boolean}}}apply(){we(this,ee,fu(G(this,X),G(this,Ht),this)),this.search()}async searchHandler(){await hu(G(this,X),G(this,Ht),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return pu(n,G(this,X))}resetFilters(){yu(this)}firstUpdated(n){var i;let r={};Cr.map(o=>{r={...r,[o]:this[o]}}),we(this,X,r),we(this,Ht,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){Cr.map(r=>{if(n.has(r))return this.firstUpdated(),!0})}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}render(){var n;return A`
      <style>
        ${Po}
        ${!this.unstyled&&ne}
        ${!this.unstyled&&Mo}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":dt}
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
                  ${Ne(Object.values(this.filters),(r,i)=>A` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${r}
                          @details-toggled=${o=>si(o,G(this,X),this)}
                          data-details="${r.key}"
                        >
                          ${E(this,Wt,ki).call(this,r,Ar(i,1))}
                          ${E(this,Wt,Pi).call(this,r,Ar(i,2))}
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
              .resultAggregation=${G(this,ee)}
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
    `}}ee=new WeakMap,Ht=new WeakMap,X=new WeakMap,Wt=new WeakSet,Pi=function(n,r){return du(n,r,this)},ki=function(n,r){return gu(n,r,this)};customElements.define("eox-itemfilter",mu);const bu={slot:"filterstitle",style:{margin:"14px 8px"}},wu={slot:"resultstitle",style:{margin:"14px 8px"}},cn="float:right; height:15px; padding:4px;  margin-top:-4px; background-color:white;",xu="float:right; height:15px; padding:4px;  margin-top:-4px; background-color:#9bcaeb;",ju={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:""},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:"themes"},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},setup(t){const e=t,n=async l=>{var f,h;(h=(f=i.value)==null?void 0:f.shadowRoot)==null||h.querySelectorAll(".compareMapButton").forEach(p=>p.setAttribute("style",cn));const u=l.detail;u&&(o.resetSelectedCompareSTAC(),await o.loadSelectedSTAC(u.href))},r={titleProperty:e.titleProperty,filterProperties:e.filterProperties,aggregateResults:e.aggregateResults,enableHighlighting:e.enableHighlighting,expandMultipleFilters:e.expandMultipleFilters,expandMultipleResults:e.expandMultipleResults},i=Co(null),o=_o(),a=()=>{setTimeout(()=>{var l,u;(l=i.value)==null||l.shadowRoot.querySelectorAll("details>summary").forEach(f=>f.setAttribute("style","width: 100%")),(u=i.value)==null||u.shadowRoot.querySelectorAll("details>div li").forEach(f=>{let h=document.createElement("button");h.className="compareMapButton",h.dataset.id=f.children[0].id,h.onclick=async g=>{var C,M,L;(M=(C=i.value)==null?void 0:C.shadowRoot)==null||M.querySelectorAll(".compareMapButton").forEach($=>{$.setAttribute("style",cn)});const b=g.currentTarget;b==null||b.setAttribute("style",xu);const x=(L=i.value)==null?void 0:L.items.find($=>$.id===(b==null?void 0:b.dataset.id));x&&await o.loadSelectedCompareSTAC(x.href)},h.setAttribute("style",cn);const p=document.createElementNS("http://www.w3.org/2000/svg","svg"),y=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("width","15"),p.setAttribute("height","15"),p.setAttribute("viewBox","0 0 24 24"),y.setAttribute("d","M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z"),p.appendChild(y),h.appendChild(p),f.append(h)})},100)};return $o(()=>{var f,h,p;const l=document.createElement("style");l.innerHTML=`
    section {
      margin: 0 !important;
    }
    section button#filter-reset {
      padding: 0 8px;
      top: 8px;
      right: 8px;
    }
  `,(h=(f=i.value)==null?void 0:f.shadowRoot)==null||h.appendChild(l);const u=(p=o.stac)==null?void 0:p.filter(y=>y.rel==="child");i.value.items=u,e.enableCompare&&a()}),(l,u)=>(Ro(),Lo("eox-itemfilter",Eo({class:"fill-height"},r,{ref_key:"eoxItemFilter",ref:i,style:{overflow:"auto"},onSelect:n}),[cr("h4",bu,ur(t.filtersTitle),1),cr("h4",wu,ur(t.resultsTitle),1)],16))}};export{ju as default};
