var Oo=Object.defineProperty;var Er=t=>{throw TypeError(t)};var jo=(t,e,n)=>e in t?Oo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var be=(t,e,n)=>jo(t,typeof e!="symbol"?e+"":e,n),An=(t,e,n)=>e.has(t)||Er("Cannot "+n);var ht=(t,e,n)=>(An(t,e,"read from private field"),n?n.call(t):e.get(t)),ft=(t,e,n)=>e.has(t)?Er("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Ue=(t,e,n,r)=>(An(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),U=(t,e,n)=>(An(t,e,"access private method"),n);import{e as Do}from"./eo-dash.hPLCpXqv.js";import{r as St,x as B,E as Dt,Z as No,T as Bo}from"./lit-element.Cu4xVypU.js";import{o as Cn,a as on}from"./map.CVw10w8x.js";import{n as at}from"./when.BR7zwNJC.js";import{s as Ho}from"./all.style.BXiFe-7i.js";import{c as Ot,g as tr}from"./commonjsHelpers.BosuxZz1.js";import{_ as an}from"./index.D_Wsj7oq.js";import{e as Io,i as qo,t as Uo}from"./directive.CF8sV3Lr.js";import{p as Wo,v as Vo,c as Go,j as Rr,t as Pr,K as Ko,o as zo}from"./framework.DEQGqxs_.js";import"./theme.yZumdPIV.js";const Yo=`
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
`,Se=`
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
`;var en,ti;class Fo extends St{constructor(){super();ft(this,en);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return B`
      <style>
        ${!this.unstyled&&Se}
      </style>

      ${at(this.filterObject.featured,()=>B`<slot name="filter"></slot>`,()=>B`<details
            @toggle="${U(this,en,ti)}"
            class="details-filter"
            ?open=${this.filterObject.expanded||Dt}
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
    `}}en=new WeakSet,ti=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",Fo);function Nt(t){return Array.isArray?Array.isArray(t):ri(t)==="[object Array]"}const Zo=1/0;function Jo(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-Zo?"-0":e}function Xo(t){return t==null?"":Jo(t)}function _t(t){return typeof t=="string"}function ei(t){return typeof t=="number"}function Qo(t){return t===!0||t===!1||ta(t)&&ri(t)=="[object Boolean]"}function ni(t){return typeof t=="object"}function ta(t){return ni(t)&&t!==null}function dt(t){return t!=null}function Ln(t){return!t.trim().length}function ri(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const ea="Incorrect 'index' type",na=t=>`Invalid value for key ${t}`,ra=t=>`Pattern length exceeds max of ${t}.`,ia=t=>`Missing ${t} property in key`,sa=t=>`Property 'weight' in key '${t}' must be a positive integer`,kr=Object.prototype.hasOwnProperty;class oa{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=ii(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ii(t){let e=null,n=null,r=null,i=1,s=null;if(_t(t)||Nt(t))r=t,e=Tr(t),n=jn(t);else{if(!kr.call(t,"name"))throw new Error(ia("name"));const a=t.name;if(r=a,kr.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(sa(a));e=Tr(a),n=jn(a),s=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:s}}function Tr(t){return Nt(t)?t:t.split(".")}function jn(t){return Nt(t)?t.join("."):t}function aa(t,e){let n=[],r=!1;const i=(s,a,l)=>{if(dt(s))if(!a[l])n.push(s);else{let c=a[l];const u=s[c];if(!dt(u))return;if(l===a.length-1&&(_t(u)||ei(u)||Qo(u)))n.push(Xo(u));else if(Nt(u)){r=!0;for(let d=0,f=u.length;d<f;d+=1)i(u[d],a,l+1)}else a.length&&i(u,a,l+1)}};return i(t,_t(e)?e.split("."):e,0),r?n:n[0]}const la={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},ca={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},ua={location:0,threshold:.6,distance:100},fa={useExtendedSearch:!1,getFn:aa,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var O={...ca,...la,...ua,...fa};const ha=/[^ ]+/g;function da(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const s=i.match(ha).length;if(n.has(s))return n.get(s);const a=1/Math.pow(s,.5*t),l=parseFloat(Math.round(a*r)/r);return n.set(s,l),l},clear(){n.clear()}}}class er{constructor({getFn:e=O.getFn,fieldNormWeight:n=O.fieldNormWeight}={}){this.norm=da(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,_t(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();_t(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!dt(e)||Ln(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,s)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(dt(a)){if(Nt(a)){let l=[];const c=[{nestedArrIndex:-1,value:a}];for(;c.length;){const{nestedArrIndex:u,value:d}=c.pop();if(dt(d))if(_t(d)&&!Ln(d)){let f={v:d,i:u,n:this.norm.get(d)};l.push(f)}else Nt(d)&&d.forEach((f,p)=>{c.push({nestedArrIndex:p,value:f})})}r.$[s]=l}else if(_t(a)&&!Ln(a)){let l={v:a,n:this.norm.get(a)};r.$[s]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function si(t,e,{getFn:n=O.getFn,fieldNormWeight:r=O.fieldNormWeight}={}){const i=new er({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(ii)),i.setSources(e),i.create(),i}function pa(t,{getFn:e=O.getFn,fieldNormWeight:n=O.fieldNormWeight}={}){const{keys:r,records:i}=t,s=new er({getFn:e,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function We(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=O.distance,ignoreLocation:s=O.ignoreLocation}={}){const a=e/t.length;if(s)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function ga(t=[],e=O.minMatchCharLength){let n=[],r=-1,i=-1,s=0;for(let a=t.length;s<a;s+=1){let l=t[s];l&&r===-1?r=s:!l&&r!==-1&&(i=s-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[s-1]&&s-r>=e&&n.push([r,s-1]),n}const Jt=32;function ya(t,e,n,{location:r=O.location,distance:i=O.distance,threshold:s=O.threshold,findAllMatches:a=O.findAllMatches,minMatchCharLength:l=O.minMatchCharLength,includeMatches:c=O.includeMatches,ignoreLocation:u=O.ignoreLocation}={}){if(e.length>Jt)throw new Error(ra(Jt));const d=e.length,f=t.length,p=Math.max(0,Math.min(r,f));let g=s,m=p;const b=l>1||c,M=b?Array(f):[];let v;for(;(v=t.indexOf(e,m))>-1;){let W=We(e,{currentLocation:v,expectedLocation:p,distance:i,ignoreLocation:u});if(g=Math.min(W,g),m=v+d,b){let q=0;for(;q<d;)M[v+q]=1,q+=1}}m=-1;let C=[],L=1,T=d+f;const P=1<<d-1;for(let W=0;W<d;W+=1){let q=0,G=T;for(;q<G;)We(e,{errors:W,currentLocation:p+G,expectedLocation:p,distance:i,ignoreLocation:u})<=g?q=G:T=G,G=Math.floor((T-q)/2+q);T=G;let H=Math.max(1,p-G+1),k=a?f:Math.min(p+G,f)+d,Y=Array(k+2);Y[k+1]=(1<<W)-1;for(let A=k;A>=H;A-=1){let _=A-1,x=n[t.charAt(_)];if(b&&(M[_]=+!!x),Y[A]=(Y[A+1]<<1|1)&x,W&&(Y[A]|=(C[A+1]|C[A])<<1|1|C[A+1]),Y[A]&P&&(L=We(e,{errors:W,currentLocation:_,expectedLocation:p,distance:i,ignoreLocation:u}),L<=g)){if(g=L,m=_,m<=p)break;H=Math.max(1,2*p-m)}}if(We(e,{errors:W+1,currentLocation:p,expectedLocation:p,distance:i,ignoreLocation:u})>g)break;C=Y}const I={isMatch:m>=0,score:Math.max(.001,L)};if(b){const W=ga(M,l);W.length?c&&(I.indices=W):I.isMatch=!1}return I}function ma(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}class oi{constructor(e,{location:n=O.location,threshold:r=O.threshold,distance:i=O.distance,includeMatches:s=O.includeMatches,findAllMatches:a=O.findAllMatches,minMatchCharLength:l=O.minMatchCharLength,isCaseSensitive:c=O.isCaseSensitive,ignoreLocation:u=O.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:u},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(p,g)=>{this.chunks.push({pattern:p,alphabet:ma(p),startIndex:g})},f=this.pattern.length;if(f>Jt){let p=0;const g=f%Jt,m=f-g;for(;p<m;)d(this.pattern.substr(p,Jt),p),p+=Jt;if(g){const b=f-Jt;d(this.pattern.substr(b),b)}}else d(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,includeMatches:r}=this.options;if(n||(e=e.toLowerCase()),this.pattern===e){let m={isMatch:!0,score:0};return r&&(m.indices=[[0,e.length-1]]),m}const{location:i,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:c,ignoreLocation:u}=this.options;let d=[],f=0,p=!1;this.chunks.forEach(({pattern:m,alphabet:b,startIndex:M})=>{const{isMatch:v,score:C,indices:L}=ya(e,m,b,{location:i+M,distance:s,threshold:a,findAllMatches:l,minMatchCharLength:c,includeMatches:r,ignoreLocation:u});v&&(p=!0),f+=C,v&&L&&(d=[...d,...L])});let g={isMatch:p,score:p?f/this.chunks.length:1};return p&&r&&(g.indices=d),g}}class Vt{constructor(e){this.pattern=e}static isMultiMatch(e){return Or(e,this.multiRegex)}static isSingleMatch(e){return Or(e,this.singleRegex)}search(){}}function Or(t,e){const n=t.match(e);return n?n[1]:null}class ba extends Vt{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class wa extends Vt{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class va extends Vt{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class xa extends Vt{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class _a extends Vt{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Ma extends Vt{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ai extends Vt{constructor(e,{location:n=O.location,threshold:r=O.threshold,distance:i=O.distance,includeMatches:s=O.includeMatches,findAllMatches:a=O.findAllMatches,minMatchCharLength:l=O.minMatchCharLength,isCaseSensitive:c=O.isCaseSensitive,ignoreLocation:u=O.ignoreLocation}={}){super(e),this._bitapSearch=new oi(e,{location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class li extends Vt{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],s=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+s,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const Dn=[ba,li,va,xa,Ma,_a,wa,ai],jr=Dn.length,$a=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Sa="|";function Aa(t,e={}){return t.split(Sa).map(n=>{let r=n.trim().split($a).filter(s=>s&&!!s.trim()),i=[];for(let s=0,a=r.length;s<a;s+=1){const l=r[s];let c=!1,u=-1;for(;!c&&++u<jr;){const d=Dn[u];let f=d.isMultiMatch(l);f&&(i.push(new d(f,e)),c=!0)}if(!c)for(u=-1;++u<jr;){const d=Dn[u];let f=d.isSingleMatch(l);if(f){i.push(new d(f,e));break}}}return i})}const Ca=new Set([ai.type,li.type]);class La{constructor(e,{isCaseSensitive:n=O.isCaseSensitive,includeMatches:r=O.includeMatches,minMatchCharLength:i=O.minMatchCharLength,ignoreLocation:s=O.ignoreLocation,findAllMatches:a=O.findAllMatches,location:l=O.location,threshold:c=O.threshold,distance:u=O.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:r,minMatchCharLength:i,findAllMatches:a,ignoreLocation:s,location:l,threshold:c,distance:u},this.pattern=n?e:e.toLowerCase(),this.query=Aa(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let s=0,a=[],l=0;for(let c=0,u=n.length;c<u;c+=1){const d=n[c];a.length=0,s=0;for(let f=0,p=d.length;f<p;f+=1){const g=d[f],{isMatch:m,indices:b,score:M}=g.search(e);if(m){if(s+=1,l+=M,r){const v=g.constructor.type;Ca.has(v)?a=[...a,...b]:a.push(b)}}else{l=0,s=0,a.length=0;break}}if(s){let f={isMatch:!0,score:l/s};return r&&(f.indices=a),f}}return{isMatch:!1,score:1}}}const Nn=[];function Ea(...t){Nn.push(...t)}function Bn(t,e){for(let n=0,r=Nn.length;n<r;n+=1){let i=Nn[n];if(i.condition(t,e))return new i(t,e)}return new oi(t,e)}const Ye={AND:"$and",OR:"$or"},Hn={PATH:"$path",PATTERN:"$val"},In=t=>!!(t[Ye.AND]||t[Ye.OR]),Ra=t=>!!t[Hn.PATH],Pa=t=>!Nt(t)&&ni(t)&&!In(t),Dr=t=>({[Ye.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function ci(t,e,{auto:n=!0}={}){const r=i=>{let s=Object.keys(i);const a=Ra(i);if(!a&&s.length>1&&!In(i))return r(Dr(i));if(Pa(i)){const c=a?i[Hn.PATH]:s[0],u=a?i[Hn.PATTERN]:i[c];if(!_t(u))throw new Error(na(c));const d={keyId:jn(c),pattern:u};return n&&(d.searcher=Bn(u,e)),d}let l={children:[],operator:s[0]};return s.forEach(c=>{const u=i[c];Nt(u)&&u.forEach(d=>{l.children.push(r(d))})}),l};return In(t)||(t=Dr(t)),r(t)}function ka(t,{ignoreFieldNorm:e=O.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:s,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:s))}),n.score=r})}function Ta(t,e){const n=t.matches;e.matches=[],dt(n)&&n.forEach(r=>{if(!dt(r.indices)||!r.indices.length)return;const{indices:i,value:s}=r;let a={indices:i,value:s};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function Oa(t,e){e.score=t.score}function ja(t,e,{includeMatches:n=O.includeMatches,includeScore:r=O.includeScore}={}){const i=[];return n&&i.push(Ta),r&&i.push(Oa),t.map(s=>{const{idx:a}=s,l={item:e[a],refIndex:a};return i.length&&i.forEach(c=>{c(s,l)}),l})}class Gt{constructor(e,n={},r){this.options={...O,...n},this.options.useExtendedSearch,this._keyStore=new oa(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof er))throw new Error(ea);this._myIndex=n||si(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){dt(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,i-=1,n.push(s))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:s,sortFn:a,ignoreFieldNorm:l}=this.options;let c=_t(e)?_t(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return ka(c,{ignoreFieldNorm:l}),s&&c.sort(a),ei(n)&&n>-1&&(c=c.slice(0,n)),ja(c,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=Bn(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:s,i:a,n:l})=>{if(!dt(s))return;const{isMatch:c,score:u,indices:d}=n.searchIn(s);c&&i.push({item:s,idx:a,matches:[{score:u,value:s,norm:l,indices:d}]})}),i}_searchLogical(e){const n=ci(e,this.options),r=(l,c,u)=>{if(!l.children){const{keyId:f,searcher:p}=l,g=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(c,f),searcher:p});return g&&g.length?[{idx:u,item:c,matches:g}]:[]}const d=[];for(let f=0,p=l.children.length;f<p;f+=1){const g=l.children[f],m=r(g,c,u);if(m.length)d.push(...m);else if(l.operator===Ye.AND)return[]}return d},i=this._myIndex.records,s={},a=[];return i.forEach(({$:l,i:c})=>{if(dt(l)){let u=r(n,l,c);u.length&&(s[c]||(s[c]={idx:c,item:l,matches:[]},a.push(s[c])),u.forEach(({matches:d})=>{s[c].matches.push(...d)}))}}),a}_searchObjectList(e){const n=Bn(e,this.options),{keys:r,records:i}=this._myIndex,s=[];return i.forEach(({$:a,i:l})=>{if(!dt(a))return;let c=[];r.forEach((u,d)=>{c.push(...this._findMatches({key:u,value:a[d],searcher:n}))}),c.length&&s.push({idx:l,item:a,matches:c})}),s}_findMatches({key:e,value:n,searcher:r}){if(!dt(n))return[];let i=[];if(Nt(n))n.forEach(({v:s,i:a,n:l})=>{if(!dt(s))return;const{isMatch:c,score:u,indices:d}=r.searchIn(s);c&&i.push({score:u,key:e,value:s,idx:a,norm:l,indices:d})});else{const{v:s,n:a}=n,{isMatch:l,score:c,indices:u}=r.searchIn(s);l&&i.push({score:c,key:e,value:s,norm:a,indices:u})}return i}}Gt.version="7.0.0";Gt.createIndex=si;Gt.parseIndex=pa;Gt.config=O;Gt.parseQuery=ci;Ea(La);function ui(t,e){const n=new Gt(e.filterProperties,{keys:["title"]}),r=t.target.value,s=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=s.includes(a)||!r?"":"none"})}function Da(t,e){const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const qn=Math.min,ae=Math.max,Fe=Math.round,Ve=Math.floor,Mt=t=>({x:t,y:t});function fi(t){return t.split("-")[0]}function Na(t){return t.split("-")[1]}function Ba(t){return t==="x"?"y":"x"}function Ha(t){return t==="y"?"height":"width"}function hi(t){return["top","bottom"].includes(fi(t))?"y":"x"}function Ia(t){return Ba(hi(t))}function di(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function Nr(t,e,n){let{reference:r,floating:i}=t;const s=hi(e),a=Ia(e),l=Ha(a),c=fi(e),u=s==="y",d=r.x+r.width/2-i.width/2,f=r.y+r.height/2-i.height/2,p=r[l]/2-i[l]/2;let g;switch(c){case"top":g={x:d,y:r.y-i.height};break;case"bottom":g={x:d,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:f};break;case"left":g={x:r.x-i.width,y:f};break;default:g={x:r.x,y:r.y}}switch(Na(e)){case"start":g[a]-=p*(n&&u?-1:1);break;case"end":g[a]+=p*(n&&u?-1:1);break}return g}const qa=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:a}=n,l=s.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(e));let u=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:f}=Nr(u,r,c),p=r,g={},m=0;for(let b=0;b<l.length;b++){const{name:M,fn:v}=l[b],{x:C,y:L,data:T,reset:P}=await v({x:d,y:f,initialPlacement:r,placement:p,strategy:i,middlewareData:g,rects:u,platform:a,elements:{reference:t,floating:e}});d=C??d,f=L??f,g={...g,[M]:{...g[M],...T}},P&&m<=50&&(m++,typeof P=="object"&&(P.placement&&(p=P.placement),P.rects&&(u=P.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):P.rects),{x:d,y:f}=Nr(u,p,c)),b=-1)}return{x:d,y:f,placement:p,strategy:i,middlewareData:g}};function ln(){return typeof window<"u"}function de(t){return pi(t)?(t.nodeName||"").toLowerCase():"#document"}function pt(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function At(t){var e;return(e=(pi(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function pi(t){return ln()?t instanceof Node||t instanceof pt(t).Node:!1}function wt(t){return ln()?t instanceof Element||t instanceof pt(t).Element:!1}function $t(t){return ln()?t instanceof HTMLElement||t instanceof pt(t).HTMLElement:!1}function Br(t){return!ln()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof pt(t).ShadowRoot}function Ae(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=vt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function Ua(t){return["table","td","th"].includes(de(t))}function cn(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function nr(t){const e=rr(),n=wt(t)?vt(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function Wa(t){let e=Ut(t);for(;$t(e)&&!ue(e);){if(nr(e))return e;if(cn(e))return null;e=Ut(e)}return null}function rr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ue(t){return["html","body","#document"].includes(de(t))}function vt(t){return pt(t).getComputedStyle(t)}function un(t){return wt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ut(t){if(de(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Br(t)&&t.host||At(t);return Br(e)?e.host:e}function gi(t){const e=Ut(t);return ue(e)?t.ownerDocument?t.ownerDocument.body:t.body:$t(e)&&Ae(e)?e:gi(e)}function ve(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=gi(t),s=i===((r=t.ownerDocument)==null?void 0:r.body),a=pt(i);if(s){const l=Un(a);return e.concat(a,a.visualViewport||[],Ae(i)?i:[],l&&n?ve(l):[])}return e.concat(i,ve(i,[],n))}function Un(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function yi(t){const e=vt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=$t(t),s=i?t.offsetWidth:n,a=i?t.offsetHeight:r,l=Fe(n)!==s||Fe(r)!==a;return l&&(n=s,r=a),{width:n,height:r,$:l}}function ir(t){return wt(t)?t:t.contextElement}function le(t){const e=ir(t);if(!$t(e))return Mt(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:s}=yi(e);let a=(s?Fe(n.width):n.width)/r,l=(s?Fe(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Va=Mt(0);function mi(t){const e=pt(t);return!rr()||!e.visualViewport?Va:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Ga(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==pt(t)?!1:e}function Xt(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=ir(t);let a=Mt(1);e&&(r?wt(r)&&(a=le(r)):a=le(t));const l=Ga(s,n,r)?mi(s):Mt(0);let c=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,d=i.width/a.x,f=i.height/a.y;if(s){const p=pt(s),g=r&&wt(r)?pt(r):r;let m=p,b=Un(m);for(;b&&r&&g!==m;){const M=le(b),v=b.getBoundingClientRect(),C=vt(b),L=v.left+(b.clientLeft+parseFloat(C.paddingLeft))*M.x,T=v.top+(b.clientTop+parseFloat(C.paddingTop))*M.y;c*=M.x,u*=M.y,d*=M.x,f*=M.y,c+=L,u+=T,m=pt(b),b=Un(m)}}return di({width:d,height:f,x:c,y:u})}function sr(t,e){const n=un(t).scrollLeft;return e?e.left+n:Xt(At(t)).left+n}function bi(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:sr(t,r)),s=r.top+e.scrollTop;return{x:i,y:s}}function Ka(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const s=i==="fixed",a=At(r),l=e?cn(e.floating):!1;if(r===a||l&&s)return n;let c={scrollLeft:0,scrollTop:0},u=Mt(1);const d=Mt(0),f=$t(r);if((f||!f&&!s)&&((de(r)!=="body"||Ae(a))&&(c=un(r)),$t(r))){const g=Xt(r);u=le(r),d.x=g.x+r.clientLeft,d.y=g.y+r.clientTop}const p=a&&!f&&!s?bi(a,c,!0):Mt(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+d.x+p.x,y:n.y*u.y-c.scrollTop*u.y+d.y+p.y}}function za(t){return Array.from(t.getClientRects())}function Ya(t){const e=At(t),n=un(t),r=t.ownerDocument.body,i=ae(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),s=ae(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+sr(t);const l=-n.scrollTop;return vt(r).direction==="rtl"&&(a+=ae(e.clientWidth,r.clientWidth)-i),{width:i,height:s,x:a,y:l}}function Fa(t,e){const n=pt(t),r=At(t),i=n.visualViewport;let s=r.clientWidth,a=r.clientHeight,l=0,c=0;if(i){s=i.width,a=i.height;const u=rr();(!u||u&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:a,x:l,y:c}}function Za(t,e){const n=Xt(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,s=$t(t)?le(t):Mt(1),a=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,u=r*s.y;return{width:a,height:l,x:c,y:u}}function Hr(t,e,n){let r;if(e==="viewport")r=Fa(t,n);else if(e==="document")r=Ya(At(t));else if(wt(e))r=Za(e,n);else{const i=mi(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return di(r)}function wi(t,e){const n=Ut(t);return n===e||!wt(n)||ue(n)?!1:vt(n).position==="fixed"||wi(n,e)}function Ja(t,e){const n=e.get(t);if(n)return n;let r=ve(t,[],!1).filter(l=>wt(l)&&de(l)!=="body"),i=null;const s=vt(t).position==="fixed";let a=s?Ut(t):t;for(;wt(a)&&!ue(a);){const l=vt(a),c=nr(a);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Ae(a)&&!c&&wi(t,a))?r=r.filter(d=>d!==a):i=l,a=Ut(a)}return e.set(t,r),r}function Xa(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const a=[...n==="clippingAncestors"?cn(e)?[]:Ja(e,this._c):[].concat(n),r],l=a[0],c=a.reduce((u,d)=>{const f=Hr(e,d,i);return u.top=ae(f.top,u.top),u.right=qn(f.right,u.right),u.bottom=qn(f.bottom,u.bottom),u.left=ae(f.left,u.left),u},Hr(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Qa(t){const{width:e,height:n}=yi(t);return{width:e,height:n}}function tl(t,e,n){const r=$t(e),i=At(e),s=n==="fixed",a=Xt(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=Mt(0);if(r||!r&&!s)if((de(e)!=="body"||Ae(i))&&(l=un(e)),r){const p=Xt(e,!0,s,e);c.x=p.x+e.clientLeft,c.y=p.y+e.clientTop}else i&&(c.x=sr(i));const u=i&&!r&&!s?bi(i,l):Mt(0),d=a.left+l.scrollLeft-c.x-u.x,f=a.top+l.scrollTop-c.y-u.y;return{x:d,y:f,width:a.width,height:a.height}}function En(t){return vt(t).position==="static"}function Ir(t,e){if(!$t(t)||vt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return At(t)===n&&(n=n.ownerDocument.body),n}function vi(t,e){const n=pt(t);if(cn(t))return n;if(!$t(t)){let i=Ut(t);for(;i&&!ue(i);){if(wt(i)&&!En(i))return i;i=Ut(i)}return n}let r=Ir(t,e);for(;r&&Ua(r)&&En(r);)r=Ir(r,e);return r&&ue(r)&&En(r)&&!nr(r)?n:r||Wa(t)||n}const el=async function(t){const e=this.getOffsetParent||vi,n=this.getDimensions,r=await n(t.floating);return{reference:tl(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function nl(t){return vt(t).direction==="rtl"}const rl={convertOffsetParentRelativeRectToViewportRelativeRect:Ka,getDocumentElement:At,getClippingRect:Xa,getOffsetParent:vi,getElementRects:el,getClientRects:za,getDimensions:Qa,getScale:le,isElement:wt,isRTL:nl};function il(t,e){let n=null,r;const i=At(t);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const{left:u,top:d,width:f,height:p}=t.getBoundingClientRect();if(l||e(),!f||!p)return;const g=Ve(d),m=Ve(i.clientWidth-(u+f)),b=Ve(i.clientHeight-(d+p)),M=Ve(u),C={rootMargin:-g+"px "+-m+"px "+-b+"px "+-M+"px",threshold:ae(0,qn(1,c))||1};let L=!0;function T(P){const I=P[0].intersectionRatio;if(I!==c){if(!L)return a();I?a(!1,I):r=setTimeout(()=>{a(!1,1e-7)},1e3)}L=!1}try{n=new IntersectionObserver(T,{...C,root:i.ownerDocument})}catch{n=new IntersectionObserver(T,C)}n.observe(t)}return a(!0),s}function sl(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=ir(t),d=i||s?[...u?ve(u):[],...ve(e)]:[];d.forEach(v=>{i&&v.addEventListener("scroll",n,{passive:!0}),s&&v.addEventListener("resize",n)});const f=u&&l?il(u,n):null;let p=-1,g=null;a&&(g=new ResizeObserver(v=>{let[C]=v;C&&C.target===u&&g&&(g.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var L;(L=g)==null||L.observe(e)})),n()}),u&&!c&&g.observe(u),g.observe(e));let m,b=c?Xt(t):null;c&&M();function M(){const v=Xt(t);b&&(v.x!==b.x||v.y!==b.y||v.width!==b.width||v.height!==b.height)&&n(),b=v,m=requestAnimationFrame(M)}return n(),()=>{var v;d.forEach(C=>{i&&C.removeEventListener("scroll",n),s&&C.removeEventListener("resize",n)}),f==null||f(),(v=g)==null||v.disconnect(),g=null,c&&cancelAnimationFrame(m)}}const ol=(t,e,n)=>{const r=new Map,i={platform:rl,...n},s={...i.platform,_c:r};return qa(t,e,{...i,platform:s})};function al(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return sl(e,n,()=>{n.matches(":popover-open")&&ol(e,n,{strategy:"fixed"}).then(({x:i,y:s})=>{Object.assign(n.style,{left:`${i}px`,top:`${s}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function xi(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",ui({target:{value:""}},t)}function ll(t,e){e.inlineMode&&t.stopPropagation()}function cl(t){t.inlineMode&&(t.showDropdown=!0)}function ul(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function fl(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(xi(e),e.showDropdown=!1)}function hl(t,e){e.inlineMode&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(xi(e),e.showDropdown=!1)}const jt=11102230246251565e-32,rt=134217729,dl=(3+8*jt)*jt;function Rn(t,e,n,r,i){let s,a,l,c,u=e[0],d=r[0],f=0,p=0;d>u==d>-u?(s=u,u=e[++f]):(s=d,d=r[++p]);let g=0;if(f<t&&p<n)for(d>u==d>-u?(a=u+s,l=s-(a-u),u=e[++f]):(a=d+s,l=s-(a-d),d=r[++p]),s=a,l!==0&&(i[g++]=l);f<t&&p<n;)d>u==d>-u?(a=s+u,c=a-s,l=s-(a-c)+(u-c),u=e[++f]):(a=s+d,c=a-s,l=s-(a-c)+(d-c),d=r[++p]),s=a,l!==0&&(i[g++]=l);for(;f<t;)a=s+u,c=a-s,l=s-(a-c)+(u-c),u=e[++f],s=a,l!==0&&(i[g++]=l);for(;p<n;)a=s+d,c=a-s,l=s-(a-c)+(d-c),d=r[++p],s=a,l!==0&&(i[g++]=l);return(s!==0||g===0)&&(i[g++]=s),g}function pl(t,e){let n=e[0];for(let r=1;r<t;r++)n+=e[r];return n}function Ce(t){return new Float64Array(t)}const gl=(3+16*jt)*jt,yl=(2+12*jt)*jt,ml=(9+64*jt)*jt*jt,oe=Ce(4),qr=Ce(8),Ur=Ce(12),Wr=Ce(16),ot=Ce(4);function bl(t,e,n,r,i,s,a){let l,c,u,d,f,p,g,m,b,M,v,C,L,T,P,I,W,q;const G=t-i,H=n-i,k=e-s,Y=r-s;T=G*Y,p=rt*G,g=p-(p-G),m=G-g,p=rt*Y,b=p-(p-Y),M=Y-b,P=m*M-(T-g*b-m*b-g*M),I=k*H,p=rt*k,g=p-(p-k),m=k-g,p=rt*H,b=p-(p-H),M=H-b,W=m*M-(I-g*b-m*b-g*M),v=P-W,f=P-v,oe[0]=P-(v+f)+(f-W),C=T+v,f=C-T,L=T-(C-f)+(v-f),v=L-I,f=L-v,oe[1]=L-(v+f)+(f-I),q=C+v,f=q-C,oe[2]=C-(q-f)+(v-f),oe[3]=q;let it=pl(4,oe),A=yl*a;if(it>=A||-it>=A||(f=t-G,l=t-(G+f)+(f-i),f=n-H,u=n-(H+f)+(f-i),f=e-k,c=e-(k+f)+(f-s),f=r-Y,d=r-(Y+f)+(f-s),l===0&&c===0&&u===0&&d===0)||(A=ml*a+dl*Math.abs(it),it+=G*d+Y*l-(k*u+H*c),it>=A||-it>=A))return it;T=l*Y,p=rt*l,g=p-(p-l),m=l-g,p=rt*Y,b=p-(p-Y),M=Y-b,P=m*M-(T-g*b-m*b-g*M),I=c*H,p=rt*c,g=p-(p-c),m=c-g,p=rt*H,b=p-(p-H),M=H-b,W=m*M-(I-g*b-m*b-g*M),v=P-W,f=P-v,ot[0]=P-(v+f)+(f-W),C=T+v,f=C-T,L=T-(C-f)+(v-f),v=L-I,f=L-v,ot[1]=L-(v+f)+(f-I),q=C+v,f=q-C,ot[2]=C-(q-f)+(v-f),ot[3]=q;const _=Rn(4,oe,4,ot,qr);T=G*d,p=rt*G,g=p-(p-G),m=G-g,p=rt*d,b=p-(p-d),M=d-b,P=m*M-(T-g*b-m*b-g*M),I=k*u,p=rt*k,g=p-(p-k),m=k-g,p=rt*u,b=p-(p-u),M=u-b,W=m*M-(I-g*b-m*b-g*M),v=P-W,f=P-v,ot[0]=P-(v+f)+(f-W),C=T+v,f=C-T,L=T-(C-f)+(v-f),v=L-I,f=L-v,ot[1]=L-(v+f)+(f-I),q=C+v,f=q-C,ot[2]=C-(q-f)+(v-f),ot[3]=q;const x=Rn(_,qr,4,ot,Ur);T=l*d,p=rt*l,g=p-(p-l),m=l-g,p=rt*d,b=p-(p-d),M=d-b,P=m*M-(T-g*b-m*b-g*M),I=c*u,p=rt*c,g=p-(p-c),m=c-g,p=rt*u,b=p-(p-u),M=u-b,W=m*M-(I-g*b-m*b-g*M),v=P-W,f=P-v,ot[0]=P-(v+f)+(f-W),C=T+v,f=C-T,L=T-(C-f)+(v-f),v=L-I,f=L-v,ot[1]=L-(v+f)+(f-I),q=C+v,f=q-C,ot[2]=C-(q-f)+(v-f),ot[3]=q;const E=Rn(x,Ur,4,ot,Wr);return Wr[E-1]}function wl(t,e,n,r,i,s){const a=(e-s)*(n-i),l=(t-i)*(r-s),c=a-l,u=Math.abs(a+l);return Math.abs(c)>=gl*u?c:-bl(t,e,n,r,i,s,u)}function vl(t,e){var n,r,i=0,s,a,l,c,u,d,f,p=t[0],g=t[1],m=e.length;for(n=0;n<m;n++){r=0;var b=e[n],M=b.length-1;if(d=b[0],d[0]!==b[M][0]&&d[1]!==b[M][1])throw new Error("First and last coordinates in a ring must be the same");for(a=d[0]-p,l=d[1]-g,r;r<M;r++){if(f=b[r+1],c=f[0]-p,u=f[1]-g,l===0&&u===0){if(c<=0&&a>=0||a<=0&&c>=0)return 0}else if(u>=0&&l<0||u<0&&l>=0){if(s=wl(a,c,l,u,0,0),s===0)return 0;(s>0&&u>0&&l<=0||s<0&&u<=0&&l>0)&&i++}d=f,l=u,a=c}}return i%2!==0}function Qt(t,e,n={}){const r={type:"Feature"};return(n.id===0||n.id)&&(r.id=n.id),n.bbox&&(r.bbox=n.bbox),r.properties=e||{},r.geometry=t,r}function xl(t,e,n={}){if(!t)throw new Error("coordinates is required");if(!Array.isArray(t))throw new Error("coordinates must be an Array");if(t.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!Vr(t[0])||!Vr(t[1]))throw new Error("coordinates must contain numbers");return Qt({type:"Point",coordinates:t},e,n)}function _l(t,e,n={}){if(t.length<2)throw new Error("coordinates must be an array of two or more positions");return Qt({type:"LineString",coordinates:t},e,n)}function Wn(t,e={}){const n={type:"FeatureCollection"};return e.id&&(n.id=e.id),e.bbox&&(n.bbox=e.bbox),n.features=t,n}function Ml(t,e,n={}){return Qt({type:"MultiLineString",coordinates:t},e,n)}function Vr(t){return!isNaN(t)&&t!==null&&!Array.isArray(t)}function _i(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function $l(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function fe(t){return t.type==="Feature"?t.geometry:t}function bt(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=_i(t),i=fe(e),s=i.type,a=e.bbox;let l=i.coordinates;if(a&&Sl(r,a)===!1)return!1;s==="Polygon"&&(l=[l]);let c=!1;for(var u=0;u<l.length;++u){const d=vl(r,l[u]);if(d===0)return!n.ignoreBoundary;d&&(c=!0)}return c}function Sl(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Mi{constructor(e=[],n=Al){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const s=e-1>>1,a=n[s];if(r(i,a)>=0)break;n[e]=a,e=s}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,s=n[e];for(;e<i;){let a=(e<<1)+1,l=n[a];const c=a+1;if(c<this.length&&r(n[c],l)<0&&(a=c,l=n[c]),r(l,s)>=0)break;n[e]=l,e=a}n[e]=s}}function Al(t,e){return t<e?-1:t>e?1:0}function $i(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function Cl(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class Gr{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function Ll(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)Kr(n[r],e)}else Kr(t,e)}let Ge=0,Ke=0,ze=0;function Kr(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let s=0;s<r[i].length;s++){let a=r[i][s][0],l=null;Ke=Ke+1;for(let c=0;c<r[i][s].length-1;c++){l=r[i][s][c+1];const u=new Gr(a,Ge,Ke,ze),d=new Gr(l,Ge,Ke,ze+1);u.otherEvent=d,d.otherEvent=u,$i(u,d)>0?(d.isLeftEndpoint=!0,u.isLeftEndpoint=!1):(u.isLeftEndpoint=!0,d.isLeftEndpoint=!1),e.push(u),e.push(d),a=l,ze=ze+1}}Ge=Ge+1}class El{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function Rl(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,s=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,c=e.rightSweepEvent.p.x,u=e.rightSweepEvent.p.y,d=(u-l)*(i-n)-(c-a)*(s-r),f=(c-a)*(r-l)-(u-l)*(n-a),p=(i-n)*(r-l)-(s-r)*(n-a);if(d===0)return!1;const g=f/d,m=p/d;if(g>=0&&g<=1&&m>=0&&m<=1){const b=n+g*(i-n),M=r+g*(s-r);return[b,M]}return!1}function Pl(t,e){e=e||!1;const n=[],r=new Mi([],Cl);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const s=new El(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const c=Rl(s,l);c!==!1&&n.push(c)}r.push(s)}else i.isLeftEndpoint===!1&&r.pop()}return n}function kl(t,e){const n=new Mi([],$i);return Ll(t,n),Pl(n,e)}var Tl=kl;function or(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!1}=n;let s=[];t.type==="FeatureCollection"?s=s.concat(t.features):t.type==="Feature"?s.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&s.push(Qt(t)),e.type==="FeatureCollection"?s=s.concat(e.features):e.type==="Feature"?s.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&s.push(Qt(e));const a=Tl(Wn(s),i);let l=[];if(r){const c={};a.forEach(u=>{const d=u.join(",");c[d]||(c[d]=!0,l.push(u))})}else l=a;return Wn(l.map(c=>xl(c)))}function Si(t,e,n){if(t!==null)for(var r,i,s,a,l,c,u,d=0,f=0,p,g=t.type,m=g==="FeatureCollection",b=g==="Feature",M=m?t.features.length:1,v=0;v<M;v++){u=m?t.features[v].geometry:b?t.geometry:t,p=u?u.type==="GeometryCollection":!1,l=p?u.geometries.length:1;for(var C=0;C<l;C++){var L=0,T=0;if(a=p?u.geometries[C]:u,a!==null){c=a.coordinates;var P=a.type;switch(d=0,P){case null:break;case"Point":if(e(c,f,v,L,T)===!1)return!1;f++,L++;break;case"LineString":case"MultiPoint":for(r=0;r<c.length;r++){if(e(c[r],f,v,L,T)===!1)return!1;f++,P==="MultiPoint"&&L++}P==="LineString"&&L++;break;case"Polygon":case"MultiLineString":for(r=0;r<c.length;r++){for(i=0;i<c[r].length-d;i++){if(e(c[r][i],f,v,L,T)===!1)return!1;f++}P==="MultiLineString"&&L++,P==="Polygon"&&T++}P==="Polygon"&&L++;break;case"MultiPolygon":for(r=0;r<c.length;r++){for(T=0,i=0;i<c[r].length;i++){for(s=0;s<c[r][i].length-d;s++){if(e(c[r][i][s],f,v,L,T)===!1)return!1;f++}T++}L++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(Si(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function Ol(t,e){var n,r,i,s,a,l,c,u,d,f,p=0,g=t.type==="FeatureCollection",m=t.type==="Feature",b=g?t.features.length:1;for(n=0;n<b;n++){for(l=g?t.features[n].geometry:m?t.geometry:t,u=g?t.features[n].properties:m?t.properties:{},d=g?t.features[n].bbox:m?t.bbox:void 0,f=g?t.features[n].id:m?t.id:void 0,c=l?l.type==="GeometryCollection":!1,a=c?l.geometries.length:1,i=0;i<a;i++){if(s=c?l.geometries[i]:l,s===null){if(e(null,p,u,d,f)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,p,u,d,f)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<s.geometries.length;r++)if(e(s.geometries[r],p,u,d,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}p++}}function Ze(t,e){Ol(t,function(n,r,i,s,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Qt(n,i,{bbox:s,id:a}),r,0)===!1?!1:void 0}var c;switch(l){case"MultiPoint":c="Point";break;case"MultiLineString":c="LineString";break;case"MultiPolygon":c="Polygon";break}for(var u=0;u<n.coordinates.length;u++){var d=n.coordinates[u],f={type:c,coordinates:d};if(e(Qt(f,i),r,u)===!1)return!1}})}function Vn(t,e={}){const n=fe(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return jl(n,e);case"MultiPolygon":return Dl(n,e);default:throw new Error("invalid poly")}}function jl(t,e={}){const r=fe(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Ai(r,i)}function Dl(t,e={}){const r=fe(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},s=[];return r.forEach(a=>{s.push(Ai(a,i))}),Wn(s)}function Ai(t,e){return t.length>1?Ml(t,e):_l(t[0],e)}function Nl(t,e,n={}){var r;const i=(r=n.ignoreSelfIntersections)!=null?r:!1;let s=!0;return Ze(t,a=>{Ze(e,l=>{if(s===!1)return!1;s=Bl(a.geometry,l.geometry,i)})}),s}function Bl(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!Ul(t.coordinates,e.coordinates);case"LineString":return!zr(e,t);case"Polygon":return!bt(t,e)}break;case"LineString":switch(e.type){case"Point":return!zr(t,e);case"LineString":return!Hl(t,e,n);case"Polygon":return!Yr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!bt(e,t);case"LineString":return!Yr(t,e,n);case"Polygon":return!Il(e,t,n)}}return!1}function zr(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(ql(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function Hl(t,e,n){return or(t,e,{ignoreSelfIntersections:n}).features.length>0}function Yr(t,e,n){for(const i of e.coordinates)if(bt(i,t))return!0;return or(e,Vn(t),{ignoreSelfIntersections:n}).features.length>0}function Il(t,e,n){for(const i of t.coordinates[0])if(bt(i,e))return!0;for(const i of e.coordinates[0])if(bt(i,t))return!0;return or(Vn(t),Vn(e),{ignoreSelfIntersections:n}).features.length>0}function ql(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],s=e[0]-t[0],a=e[1]-t[1];return r*a-i*s!==0?!1:Math.abs(s)>=Math.abs(a)?s>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function Ul(t,e){return t[0]===e[0]&&t[1]===e[1]}function Wl(t,e,n={}){var r;const i=(r=n.ignoreSelfIntersections)!=null?r:!1;let s=!1;return Ze(t,a=>{Ze(e,l=>{if(s===!0)return!0;s=!Nl(a.geometry,l.geometry,{ignoreSelfIntersections:i})})}),s}var Vl=Wl;function Je(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return Si(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Xe(t,e,n={}){const r=_i(t),i=$l(e);for(let s=0;s<i.length-1;s++){let a=!1;if(n.ignoreEndVertices&&(s===0&&(a="start"),s===i.length-2&&(a="end"),s===0&&s+1===i.length-1&&(a="both")),Gl(i[s],i[s+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function Gl(t,e,n,r,i){const s=n[0],a=n[1],l=t[0],c=t[1],u=e[0],d=e[1],f=n[0]-l,p=n[1]-c,g=u-l,m=d-c,b=f*m-p*g;if(i!==null){if(Math.abs(b)>i)return!1}else if(b!==0)return!1;if(r){if(r==="start")return Math.abs(g)>=Math.abs(m)?g>0?l<s&&s<=u:u<=s&&s<l:m>0?c<a&&a<=d:d<=a&&a<c;if(r==="end")return Math.abs(g)>=Math.abs(m)?g>0?l<=s&&s<u:u<s&&s<=l:m>0?c<=a&&a<d:d<a&&a<=c;if(r==="both")return Math.abs(g)>=Math.abs(m)?g>0?l<s&&s<u:u<s&&s<l:m>0?c<a&&a<d:d<a&&a<c}else return Math.abs(g)>=Math.abs(m)?g>0?l<=s&&s<=u:u<=s&&s<=l:m>0?c<=a&&a<=d:d<=a&&a<=c;return!1}function Kl(t,e){var n=fe(t),r=fe(e),i=n.type,s=r.type;switch(i){case"Point":switch(s){case"MultiPoint":return zl(n,r);case"LineString":return Xe(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return bt(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Yl(n,r);case"LineString":return Fl(n,r);case"Polygon":case"MultiPolygon":return Zl(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return Jl(n,r);case"Polygon":case"MultiPolygon":return Xl(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return Ql(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function zl(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(Li(e.coordinates[n],t.coordinates)){r=!0;break}return r}function Yl(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)Li(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Fl(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Xe(t.coordinates[r],e))return!1;n||(n=Xe(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function Zl(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=bt(t.coordinates[i],e),!r){n=!1;break}r=bt(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function Jl(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Xe(t.coordinates[n],e))return!1;return!0}function Xl(t,e){var n=Je(e),r=Je(t);if(!Ci(n,r))return!1;for(var i=!1,s=0;s<t.coordinates.length;s++){if(!bt(t.coordinates[s],e))return!1;if(i||(i=bt(t.coordinates[s],e,{ignoreBoundary:!0})),!i&&s<t.coordinates.length-1){var a=tc(t.coordinates[s],t.coordinates[s+1]);i=bt(a,e,{ignoreBoundary:!0})}}return i}function Ql(t,e){var n=Je(t),r=Je(e);if(!Ci(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!bt(t.coordinates[0][i],e))return!1;return!0}function Ci(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function Li(t,e){return t[0]===e[0]&&t[1]===e[1]}function tc(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var ec=Kl;const nc=(t,e)=>e?Vl(t,e):!0,rc=(t,e)=>e?ec(t,e):!0;function ic(t,e="highlight",n="title"){const r=(s,a,l)=>{const c=a.split(".");let u;for(u=0;u<c.length-1;u++)s=s[c[u]];s[c[u]]=l},i=(s,a=[])=>{let l="",c=0;return a.forEach(u=>{const d=u[1]+1;l+=[s.substring(c,u[0]),`<mark class="${e}">`,s.substring(u[0],d),"</mark>"].join(""),c=d}),l+=s.substring(c),l};return t.filter(({matches:s})=>s&&s.length).map(({item:s,matches:a})=>{const l={...s};return a.forEach(c=>{c.key===n&&r(l,c.key,i(c.value,c.indices))}),l})}var Ei={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Ot,function(){var n=1e3,r=6e4,i=36e5,s="millisecond",a="second",l="minute",c="hour",u="day",d="week",f="month",p="quarter",g="year",m="date",b="Invalid Date",M=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,C={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(A){var _=["th","st","nd","rd"],x=A%100;return"["+A+(_[(x-20)%10]||_[x]||_[0])+"]"}},L=function(A,_,x){var E=String(A);return!E||E.length>=_?A:""+Array(_+1-E.length).join(x)+A},T={s:L,z:function(A){var _=-A.utcOffset(),x=Math.abs(_),E=Math.floor(x/60),$=x%60;return(_<=0?"+":"-")+L(E,2,"0")+":"+L($,2,"0")},m:function A(_,x){if(_.date()<x.date())return-A(x,_);var E=12*(x.year()-_.year())+(x.month()-_.month()),$=_.clone().add(E,f),j=x-$<0,D=_.clone().add(E+(j?-1:1),f);return+(-(E+(x-$)/(j?$-D:D-$))||0)},a:function(A){return A<0?Math.ceil(A)||0:Math.floor(A)},p:function(A){return{M:f,y:g,w:d,d:u,D:m,h:c,m:l,s:a,ms:s,Q:p}[A]||String(A||"").toLowerCase().replace(/s$/,"")},u:function(A){return A===void 0}},P="en",I={};I[P]=C;var W="$isDayjsObject",q=function(A){return A instanceof Y||!(!A||!A[W])},G=function A(_,x,E){var $;if(!_)return P;if(typeof _=="string"){var j=_.toLowerCase();I[j]&&($=j),x&&(I[j]=x,$=j);var D=_.split("-");if(!$&&D.length>1)return A(D[0])}else{var K=_.name;I[K]=_,$=K}return!E&&$&&(P=$),$||!E&&P},H=function(A,_){if(q(A))return A.clone();var x=typeof _=="object"?_:{};return x.date=A,x.args=arguments,new Y(x)},k=T;k.l=G,k.i=q,k.w=function(A,_){return H(A,{locale:_.$L,utc:_.$u,x:_.$x,$offset:_.$offset})};var Y=function(){function A(x){this.$L=G(x.locale,null,!0),this.parse(x),this.$x=this.$x||x.x||{},this[W]=!0}var _=A.prototype;return _.parse=function(x){this.$d=function(E){var $=E.date,j=E.utc;if($===null)return new Date(NaN);if(k.u($))return new Date;if($ instanceof Date)return new Date($);if(typeof $=="string"&&!/Z$/i.test($)){var D=$.match(M);if(D){var K=D[2]-1||0,F=(D[7]||"0").substring(0,3);return j?new Date(Date.UTC(D[1],K,D[3]||1,D[4]||0,D[5]||0,D[6]||0,F)):new Date(D[1],K,D[3]||1,D[4]||0,D[5]||0,D[6]||0,F)}}return new Date($)}(x),this.init()},_.init=function(){var x=this.$d;this.$y=x.getFullYear(),this.$M=x.getMonth(),this.$D=x.getDate(),this.$W=x.getDay(),this.$H=x.getHours(),this.$m=x.getMinutes(),this.$s=x.getSeconds(),this.$ms=x.getMilliseconds()},_.$utils=function(){return k},_.isValid=function(){return this.$d.toString()!==b},_.isSame=function(x,E){var $=H(x);return this.startOf(E)<=$&&$<=this.endOf(E)},_.isAfter=function(x,E){return H(x)<this.startOf(E)},_.isBefore=function(x,E){return this.endOf(E)<H(x)},_.$g=function(x,E,$){return k.u(x)?this[E]:this.set($,x)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(x,E){var $=this,j=!!k.u(E)||E,D=k.p(x),K=function(xt,et){var tt=k.w($.$u?Date.UTC($.$y,et,xt):new Date($.$y,et,xt),$);return j?tt:tt.endOf(u)},F=function(xt,et){return k.w($.toDate()[xt].apply($.toDate("s"),(j?[0,0,0,0]:[23,59,59,999]).slice(et)),$)},X=this.$W,Q=this.$M,lt=this.$D,Bt="set"+(this.$u?"UTC":"");switch(D){case g:return j?K(1,0):K(31,11);case f:return j?K(1,Q):K(0,Q+1);case d:var Ct=this.$locale().weekStart||0,V=(X<Ct?X+7:X)-Ct;return K(j?lt-V:lt+(6-V),Q);case u:case m:return F(Bt+"Hours",0);case c:return F(Bt+"Minutes",1);case l:return F(Bt+"Seconds",2);case a:return F(Bt+"Milliseconds",3);default:return this.clone()}},_.endOf=function(x){return this.startOf(x,!1)},_.$set=function(x,E){var $,j=k.p(x),D="set"+(this.$u?"UTC":""),K=($={},$[u]=D+"Date",$[m]=D+"Date",$[f]=D+"Month",$[g]=D+"FullYear",$[c]=D+"Hours",$[l]=D+"Minutes",$[a]=D+"Seconds",$[s]=D+"Milliseconds",$)[j],F=j===u?this.$D+(E-this.$W):E;if(j===f||j===g){var X=this.clone().set(m,1);X.$d[K](F),X.init(),this.$d=X.set(m,Math.min(this.$D,X.daysInMonth())).$d}else K&&this.$d[K](F);return this.init(),this},_.set=function(x,E){return this.clone().$set(x,E)},_.get=function(x){return this[k.p(x)]()},_.add=function(x,E){var $,j=this;x=Number(x);var D=k.p(E),K=function(Q){var lt=H(j);return k.w(lt.date(lt.date()+Math.round(Q*x)),j)};if(D===f)return this.set(f,this.$M+x);if(D===g)return this.set(g,this.$y+x);if(D===u)return K(1);if(D===d)return K(7);var F=($={},$[l]=r,$[c]=i,$[a]=n,$)[D]||1,X=this.$d.getTime()+x*F;return k.w(X,this)},_.subtract=function(x,E){return this.add(-1*x,E)},_.format=function(x){var E=this,$=this.$locale();if(!this.isValid())return $.invalidDate||b;var j=x||"YYYY-MM-DDTHH:mm:ssZ",D=k.z(this),K=this.$H,F=this.$m,X=this.$M,Q=$.weekdays,lt=$.months,Bt=$.meridiem,Ct=function(et,tt,Ht,Kt){return et&&(et[tt]||et(E,j))||Ht[tt].slice(0,Kt)},V=function(et){return k.s(K%12||12,et,"0")},xt=Bt||function(et,tt,Ht){var Kt=et<12?"AM":"PM";return Ht?Kt.toLowerCase():Kt};return j.replace(v,function(et,tt){return tt||function(Ht){switch(Ht){case"YY":return String(E.$y).slice(-2);case"YYYY":return k.s(E.$y,4,"0");case"M":return X+1;case"MM":return k.s(X+1,2,"0");case"MMM":return Ct($.monthsShort,X,lt,3);case"MMMM":return Ct(lt,X);case"D":return E.$D;case"DD":return k.s(E.$D,2,"0");case"d":return String(E.$W);case"dd":return Ct($.weekdaysMin,E.$W,Q,2);case"ddd":return Ct($.weekdaysShort,E.$W,Q,3);case"dddd":return Q[E.$W];case"H":return String(K);case"HH":return k.s(K,2,"0");case"h":return V(1);case"hh":return V(2);case"a":return xt(K,F,!0);case"A":return xt(K,F,!1);case"m":return String(F);case"mm":return k.s(F,2,"0");case"s":return String(E.$s);case"ss":return k.s(E.$s,2,"0");case"SSS":return k.s(E.$ms,3,"0");case"Z":return D}return null}(et)||D.replace(":","")})},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(x,E,$){var j,D=this,K=k.p(E),F=H(x),X=(F.utcOffset()-this.utcOffset())*r,Q=this-F,lt=function(){return k.m(D,F)};switch(K){case g:j=lt()/12;break;case f:j=lt();break;case p:j=lt()/3;break;case d:j=(Q-X)/6048e5;break;case u:j=(Q-X)/864e5;break;case c:j=Q/i;break;case l:j=Q/r;break;case a:j=Q/n;break;default:j=Q}return $?j:k.a(j)},_.daysInMonth=function(){return this.endOf(f).$D},_.$locale=function(){return I[this.$L]},_.locale=function(x,E){if(!x)return this.$L;var $=this.clone(),j=G(x,E,!0);return j&&($.$L=j),$},_.clone=function(){return k.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},A}(),it=Y.prototype;return H.prototype=it,[["$ms",s],["$s",a],["$m",l],["$H",c],["$W",u],["$M",f],["$y",g],["$D",m]].forEach(function(A){it[A[1]]=function(_){return this.$g(_,A[0],A[1])}}),H.extend=function(A,_){return A.$i||(A(_,Y,H),A.$i=!0),H},H.locale=G,H.isDayjs=q,H.unix=function(A){return H(1e3*A)},H.en=I[P],H.Ls=I,H.p={},H})})(Ei);var sc=Ei.exports;const xe=tr(sc);let Ri;const oc=(t,e)=>{Ri=new Gt(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},ac=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[c,u])=>{const d="$or",f=[],p=(g,m)=>{const b={};u.type==="text"?b[g]=`${m}`:b[c]=`="${g}"`,f.push(b)};return Object.entries(u.state).filter(([,g])=>g).forEach(([g,m])=>p(g,m)),f.length>0&&l.push({[d]:f}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},c=Ri.search(l);i=n.enableHighlighting?ic(c,"highlight",n.titleProperty):c.map(u=>u.item)}const s=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[c,u])=>(l[c]={min:u.state.min,max:u.state.max,format:u.format},l),{});if(Object.keys(s).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const[d,f]of Object.entries(s)){const p=m=>f.format==="date"?xe(m).unix():m,g=_e(d,i[c]);g?Array.isArray(g)?u[d]=s[d].min<=p(g[1])&&p(g[0])<=s[d].max:p(g)>=s[d].min&&p(g)<=s[d].max?u[d]=!0:u[d]=!1:u[d]=!0}Object.values(u).every(d=>!!d)&&l.push(i[c])}i=[...l]}const a=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[c,u])=>(l[c]={geometry:u.state.geometry,mode:u.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const d of Object.keys(a)){const f=_e(d,i[c]),p=a[d].mode||"within";f&&(p==="within"?rc(f,a[d].geometry):nc(f,a[d].geometry))?u[d]=!0:u[d]=!1}Object.values(u).every(d=>!!d)&&l.push(i[c])}i=[...l]}return i};function lc(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function fn(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function Fr(t,e){return t*2+e}function cc(t){return Object.keys(t).map(e=>({title:B`${t[e].title||t[e].key}:
        <strong>${t[e].stringifiedState}</strong>`,key:e})).filter(e=>t[e.key].dirty)}function Gn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function uc(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function Pi(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const s=i.shadowRoot.querySelector(".details-filter");s&&s!==r&&s.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function _e(t,e){return t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}var z,ki,Kn,zn,Ti,Yn,Fn,Oi,Zn,ji,Di;class fc extends St{constructor(){super();ft(this,z);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=U(this,z,Ti).bind(this),this._handleKeyDown=U(this,z,Yn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&U(this,z,Kn).call(this)}disconnectedCallback(){this.inlineMode&&U(this,z,zn).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?U(this,z,Kn).call(this):U(this,z,zn).call(this))}render(){return B`
      <style>
        ${!this.unstyled&&Se}
      </style>
      ${this.inlineMode?B`
            <div
              class="inline-container-wrapper"
              @click="${U(this,z,Fn)}"
            >
              <div class="inline-container" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${cc(this.filters)}
                      .controller=${{remove:n=>U(this,z,ji).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${at(Gn(this.filters),()=>B`
                      <span
                        class="chip-close"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      ></span>
                    `)}
                </div>
                <div
                  class="input-container ${Gn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${U(this,z,Fn)}"
                    @focus="${U(this,z,Oi)}"
                    @input="${U(this,z,Di)}"
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
                  @keydown="${U(this,z,Yn)}"
                  @click="${U(this,z,Zn)}"
                  @focus="${U(this,z,Zn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:B`<slot name="section"></slot>`}
    `}}z=new WeakSet,ki=function(){setTimeout(()=>this._overlayCleanup=al(this))},Kn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),U(this,z,ki).call(this)},zn=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},Ti=function(n){hl(n,this)},Yn=function(n){fl(n,this)},Fn=function(n){ul(n,this)},Oi=function(){cl(this)},Zn=function(n){ll(n,this)},ji=function(n){Da(n,this)},Di=function(n){ui(n,this)};customElements.define("eox-itemfilter-container",fc);function hc(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",fn(t.filterObject),t.requestUpdate()}function dc(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}function pc(t){if(t.filterObject=fn(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function gc(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${xe(n)} - ${xe(r)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function yc(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],s=r?xe.unix(i):i;return B`<div class="range-${e}">${s}</div>`}function mc(t){bc(-1,t),fn(t.filterObject),t.requestUpdate()}function bc(t,e){e.selectedItems=[],ar(e),Bi(e)}function Ni(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),ar(e),Bi(e)}function wc(t,e){e.query=t.target.value,e.showSuggestions=!0}function vc(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&Ni(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function xc(t,e){(t.has("suggestions")||t.has("query"))&&ar(e)}function _c(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,s)=>i.localeCompare(s));return e.sort(n).map(i=>i)}function ar(t){var n,r,i;let e;t.query&&(e=new Gt(t.suggestions,{threshold:.4}).search(t.query).map(a=>a.item)),t.filteredSuggestions=_c(t,e||t.suggestions),(n=t.filterObject)!=null&&n.filterKeys&&(t.filteredSuggestions=(r=t.filterObject)==null?void 0:r.filterKeys.map(s=>`${s}`),t.filterObject.state=(i=t.filterObject)==null?void 0:i.filterKeys.map(s=>`${s}`).reduce((s,a)=>(a in s||(s[a]=void 0),s),t.filterObject.state)),t.highlightedIndex=-1}function Bi(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function Mc(t){fn(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function $c(t){t.renderRoot.querySelector("#eox-map").innerHTML="",Hi(t)}function Sc(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function Hi(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&Ac(t.geometry),r=lc(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=s=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:s.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",s=>{i(s.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",s=>{i(s.features.getArray()[0])})},1e3)}function Ac(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var nn;class Cc extends St{constructor(){super();ft(this,nn,()=>{dc(this)});be(this,"debouncedInputHandler",an(ht(this,nn),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){hc(this)}createRenderRoot(){return this}render(){return at(this.filterObject,()=>{var n;return B`
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
      `})}}nn=new WeakMap;customElements.define("eox-itemfilter-text",Cc);function Lc(t,e,n){return t.filter(r=>{const i=r[n.config.aggregateResults];let s;return n.filters[n.config.aggregateResults]&&(s=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(s!=null&&s.length?s.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Ec}=No,Zr=()=>document.createComment(""),we=(t,e,n)=>{var s;const r=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(n===void 0){const a=r.insertBefore(Zr(),i),l=r.insertBefore(Zr(),i);n=new Ec(a,l,t,t.options)}else{const a=n._$AB.nextSibling,l=n._$AM,c=l!==t;if(c){let u;(s=n._$AQ)==null||s.call(n,t),n._$AM=t,n._$AP!==void 0&&(u=t._$AU)!==l._$AU&&n._$AP(u)}if(a!==i||c){let u=n._$AA;for(;u!==a;){const d=u.nextSibling;r.insertBefore(u,i),u=d}}}return n},Zt=(t,e,n=t)=>(t._$AI(e,n),t),Rc={},Pc=(t,e=Rc)=>t._$AH=e,kc=t=>t._$AH,Pn=t=>{var r;(r=t._$AP)==null||r.call(t,!1,!0);let e=t._$AA;const n=t._$AB.nextSibling;for(;e!==n;){const i=e.nextSibling;e.remove(),e=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jr=(t,e,n)=>{const r=new Map;for(let i=e;i<=n;i++)r.set(t[i],i);return r},Tc=Io(class extends qo{constructor(t){if(super(t),t.type!==Uo.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,n){let r;n===void 0?n=e:e!==void 0&&(r=e);const i=[],s=[];let a=0;for(const l of t)i[a]=r?r(l,a):a,s[a]=n(l,a),a++;return{values:s,keys:i}}render(t,e,n){return this.dt(t,e,n).values}update(t,[e,n,r]){const i=kc(t),{values:s,keys:a}=this.dt(e,n,r);if(!Array.isArray(i))return this.ut=a,s;const l=this.ut??(this.ut=[]),c=[];let u,d,f=0,p=i.length-1,g=0,m=s.length-1;for(;f<=p&&g<=m;)if(i[f]===null)f++;else if(i[p]===null)p--;else if(l[f]===a[g])c[g]=Zt(i[f],s[g]),f++,g++;else if(l[p]===a[m])c[m]=Zt(i[p],s[m]),p--,m--;else if(l[f]===a[m])c[m]=Zt(i[f],s[m]),we(t,c[m+1],i[f]),f++,m--;else if(l[p]===a[g])c[g]=Zt(i[p],s[g]),we(t,i[f],i[p]),p--,g++;else if(u===void 0&&(u=Jr(a,g,m),d=Jr(l,f,p)),u.has(l[f]))if(u.has(l[p])){const b=d.get(a[g]),M=b!==void 0?i[b]:null;if(M===null){const v=we(t,i[f]);Zt(v,s[g]),c[g]=v}else c[g]=Zt(M,s[g]),we(t,i[f],M),i[b]=null;g++}else Pn(i[p]),p--;else Pn(i[f]),f++;for(;g<=m;){const b=we(t,c[m+1]);Zt(b,s[g]),c[g++]=b}for(;f<=p;){const b=i[f++];b!==null&&Pn(b)}return this.ut=a,Pc(t,c),Bo}});function Oc(t,e){return B`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||Dt}
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
        ${Ii(t,e)}
      </div>
    </details>
  `}function Ii(t,e){const n=e.results,r=t?e.aggregateResults(n,t):n,i=e.config,s=a=>{var l;return((l=e.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":Dt};return B`
    <ul class=${e.resultType}>
      ${Tc(r,a=>a.id,a=>B`
          <li class=${s(a)}>
            <span
              id="${a.id}"
              @click=${()=>{e.selectedResult===a?e.selectedResult=null:e.selectedResult=a,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
            >
              ${at(i.subTitleProperty,()=>B`
                  ${_e(i.imageProperty,a)?B`
                        <img
                          class="image"
                          src="${_e(i.imageProperty,a)}"
                        />
                      `:Dt}
                  <div class="title-container">
                    <span class="title"
                      >${Cn(a[i.titleProperty])}</span
                    >
                    <span class="subtitle"
                      >${Cn(a[i.subTitleProperty])}</span
                    >
                  </div>
                `,()=>B`
                  <span class="title"
                    >${Cn(a[i.titleProperty])}</span
                  >
                `)}
            </span>
          </li>
        `)}
    </ul>
  `}var ee,Jn,qi;class jc extends St{constructor(){super();ft(this,ee);this.config=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list"}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Object},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String}}}aggregateResults(n,r){return Lc(n,r,this)}createRenderRoot(){return this}handleAccordion(n){Pi(n,this.config,this)}render(){return B`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${at(this.results.length<1,()=>B`<small class="no-results">No matching items</small>`,()=>Dt)}
          <ul id="results" part="results">
            ${at(this.config.aggregateResults,()=>on(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>B`${at(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>B`<div style="margin-left: -8px">
                          ${U(this,ee,Jn).call(this,n)}
                        </div>`,()=>U(this,ee,qi).call(this,n))}`),()=>U(this,ee,Jn).call(this))}
          </ul>
        </div>
      </section>
    `}}ee=new WeakSet,Jn=function(n){return Ii(n,this)},qi=function(n){return Oc(n,this)};customElements.define("eox-itemfilter-results",jc);const Dc=`input[type="checkbox"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}input[type="checkbox"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-blank-outline%3C/title%3E%3Cpath d='M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="checkbox"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Echeckbox-marked%3C/title%3E%3Cpath d='M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z' /%3E%3C/svg%3E");}`,Nc=`input[type="radio"] { appearance: none; -webkit-appearance: none; margin: 0; cursor: pointer; display: flex; flex-direction: row; align-items: center; width: 24px; height: 24px;}label span { font-size: small;}input[type="radio"]:after { display: block; content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-blank%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /%3E%3C/svg%3E"); width: 20px; height: 20px; margin-right: 4px;}input[type="radio"]:checked:after { content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23004170' viewBox='0 0 24 24'%3E%3Ctitle%3Eradiobox-marked%3C/title%3E%3Cpath d='M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z' /%3E%3C/svg%3E");}`;var Wt,Wi,Vi,Gi;class Ui extends St{constructor(){super();ft(this,Wt);be(this,"debouncedInputHandler",an(U(this,Wt,Gi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){xc(n,this)}reset(){mc(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow":Dt;return B`
      <style>
        ${!this.unstyled&&Se}
        ${!this.unstyled&&Dc}
        ${!this.unstyled&&Nc}
      </style>
      ${at(this.suggestions.length>10,()=>B`<div class="autocomplete-container">
            <div class="autocomplete-container-wrapper">
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||""}"
                @input=${U(this,Wt,Wi)}
                @keydown=${U(this,Wt,Vi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type}">
          ${this.filteredSuggestions.map(i=>B`
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
                    @keydown=${s=>{s.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title">${i}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}Wt=new WeakSet,Wi=function(n){wc(n,this)},Vi=function(n){vc(n,this)},Gi=function(n){Ni(n,this)},be(Ui,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",Ui);var ne,zi,Xn;class Ki extends St{constructor(){super();ft(this,ne);this.filterObject={},this.tabIndex=0,this.inputHandler=U(this,ne,zi).bind(this),this.debouncedInputHandler=an(this.inputHandler,0,{leading:!0})}reset(){pc(this)}createRenderRoot(){return this}render(){return at(this.filterObject,()=>B`
        ${U(this,ne,Xn).call(this,"min","before")}
        <tc-range-slider
          min="${this.filterObject.min}"
          max="${this.filterObject.max}"
          value1="${this.filterObject.min||this.filterObject.state.min}"
          value2="${this.filterObject.max||this.filterObject.state.max}"
          step="${this.filterObject.step||1}"
          @change=${this.debouncedInputHandler}
        ></tc-range-slider>
        ${U(this,ne,Xn).call(this,"max","after")}
      `)}}ne=new WeakSet,zi=function(n){gc(n,this)},Xn=function(n,r){return yc(n,r,this)},be(Ki,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",Ki);var rn,Yi;class Bc extends St{constructor(){super();ft(this,rn);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){Mc(this)}createRenderRoot(){return this}render(){return at(this.filterObject,()=>{var n;return B`
        <form style="display: inline">
          ${on(["intersects","within"],r=>B`
              <label>
                <input
                  tabindex=${this.tabIndex}
                  type="radio"
                  name="mode"
                  .checked="${(this.filterObject.state.mode||"")===r||Dt}"
                  value="${r}"
                  @click=${()=>U(this,rn,Yi).call(this,r)}
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
      `})}}rn=new WeakSet,Yi=function(n){Sc(n,this)};customElements.define("eox-itemfilter-spatial",Bc);var sn,Fi;class Hc extends St{constructor(){super();ft(this,sn);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){U(this,sn,Fi).call(this)}reset(){$c(this)}render(){return B`<div id="eox-map"></div>`}}sn=new WeakSet,Fi=function(){Hi(this)};customElements.define("eox-itemfilter-spatial-filter",Hc);function Ic(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target.classList.add("highlighted"),e.requestUpdate()}function qc(t,e){const{code:n,target:r}=t;r.id==="eox-itemfilter-input-search"&&(e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&Uc(n,t.target.value??"",e)))}function Uc(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const s=n.renderRoot.querySelector(".chip.highlighted");s&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var re,Qn,Zi;class Wc extends St{constructor(){super();ft(this,re);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",U(this,re,Qn).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",U(this,re,Qn).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return B`
      <style>
        ${Se}
      </style>
      <span class="chip-container">
        ${on(this.items,n=>B`
            <span class="chip" @click=${U(this,re,Zi).bind(this)}>
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
    `}}re=new WeakSet,Qn=function(n){qc(n,this)},Zi=function(n){Ic(n,this)};customElements.define("eox-itemfilter-chips",Wc);const Vc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Xr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var Gc=200,lr="__lodash_hash_undefined__",Kc=1/0,zc="[object Function]",Yc="[object GeneratorFunction]",Fc=/[\\^$.*+?()[\]{}|]/g,Zc=/^\[object .+?Constructor\]$/,Jc=typeof Ot=="object"&&Ot&&Ot.Object===Object&&Ot,Xc=typeof self=="object"&&self&&self.Object===Object&&self,cr=Jc||Xc||Function("return this")();function Qc(t,e){var n=t?t.length:0;return!!n&&eu(t,e,0)>-1}function tu(t,e,n,r){for(var i=t.length,s=n+-1;++s<i;)if(e(t[s],s,t))return s;return-1}function eu(t,e,n){if(e!==e)return tu(t,nu,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function nu(t){return t!==t}function ru(t,e){return t.has(e)}function iu(t,e){return t==null?void 0:t[e]}function su(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function Ji(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var ou=Array.prototype,au=Function.prototype,Xi=Object.prototype,kn=cr["__core-js_shared__"],Qr=function(){var t=/[^.]+$/.exec(kn&&kn.keys&&kn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Qi=au.toString,ur=Xi.hasOwnProperty,lu=Xi.toString,cu=RegExp("^"+Qi.call(ur).replace(Fc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),uu=ou.splice,fu=fr(cr,"Map"),Tn=fr(cr,"Set"),Me=fr(Object,"create");function te(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function hu(){this.__data__=Me?Me(null):{}}function du(t){return this.has(t)&&delete this.__data__[t]}function pu(t){var e=this.__data__;if(Me){var n=e[t];return n===lr?void 0:n}return ur.call(e,t)?e[t]:void 0}function gu(t){var e=this.__data__;return Me?e[t]!==void 0:ur.call(e,t)}function yu(t,e){var n=this.__data__;return n[t]=Me&&e===void 0?lr:e,this}te.prototype.clear=hu;te.prototype.delete=du;te.prototype.get=pu;te.prototype.has=gu;te.prototype.set=yu;function pe(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function mu(){this.__data__=[]}function bu(t){var e=this.__data__,n=hn(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():uu.call(e,n,1),!0}function wu(t){var e=this.__data__,n=hn(e,t);return n<0?void 0:e[n][1]}function vu(t){return hn(this.__data__,t)>-1}function xu(t,e){var n=this.__data__,r=hn(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}pe.prototype.clear=mu;pe.prototype.delete=bu;pe.prototype.get=wu;pe.prototype.has=vu;pe.prototype.set=xu;function ge(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function _u(){this.__data__={hash:new te,map:new(fu||pe),string:new te}}function Mu(t){return dn(this,t).delete(t)}function $u(t){return dn(this,t).get(t)}function Su(t){return dn(this,t).has(t)}function Au(t,e){return dn(this,t).set(t,e),this}ge.prototype.clear=_u;ge.prototype.delete=Mu;ge.prototype.get=$u;ge.prototype.has=Su;ge.prototype.set=Au;function Qe(t){var e=-1,n=t?t.length:0;for(this.__data__=new ge;++e<n;)this.add(t[e])}function Cu(t){return this.__data__.set(t,lr),this}function Lu(t){return this.__data__.has(t)}Qe.prototype.add=Qe.prototype.push=Cu;Qe.prototype.has=Lu;function hn(t,e){for(var n=t.length;n--;)if(Du(t[n][0],e))return n;return-1}function Eu(t){if(!ts(t)||Tu(t))return!1;var e=Nu(t)||su(t)?cu:Zc;return e.test(Ou(t))}function Ru(t,e,n){var r=-1,i=Qc,s=t.length,a=!0,l=[],c=l;if(s>=Gc){var u=Pu(t);if(u)return Ji(u);a=!1,i=ru,c=new Qe}else c=l;t:for(;++r<s;){var d=t[r],f=d;if(d=d!==0?d:0,a&&f===f){for(var p=c.length;p--;)if(c[p]===f)continue t;l.push(d)}else i(c,f,n)||(c!==l&&c.push(f),l.push(d))}return l}var Pu=Tn&&1/Ji(new Tn([,-0]))[1]==Kc?function(t){return new Tn(t)}:Bu;function dn(t,e){var n=t.__data__;return ku(e)?n[typeof e=="string"?"string":"hash"]:n.map}function fr(t,e){var n=iu(t,e);return Eu(n)?n:void 0}function ku(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Tu(t){return!!Qr&&Qr in t}function Ou(t){if(t!=null){try{return Qi.call(t)}catch{}try{return t+""}catch{}}return""}function ju(t){return t&&t.length?Ru(t):[]}function Du(t,e){return t===e||t!==t&&e!==e}function Nu(t){var e=ts(t)?lu.call(t):"";return e==zc||e==Yc}function ts(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Bu(){}var Hu=ju;const es=tr(Hu);var tn={exports:{}};tn.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",s=1,a=2,l=1/0,c=9007199254740991,u="[object Arguments]",d="[object Array]",f="[object Boolean]",p="[object Date]",g="[object Error]",m="[object Function]",b="[object GeneratorFunction]",M="[object Map]",v="[object Number]",C="[object Object]",L="[object Promise]",T="[object RegExp]",P="[object Set]",I="[object String]",W="[object Symbol]",q="[object WeakMap]",G="[object ArrayBuffer]",H="[object DataView]",k="[object Float32Array]",Y="[object Float64Array]",it="[object Int8Array]",A="[object Int16Array]",_="[object Int32Array]",x="[object Uint8Array]",E="[object Uint8ClampedArray]",$="[object Uint16Array]",j="[object Uint32Array]",D=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,K=/^\w*$/,F=/^\./,X=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Q=/[\\^$.*+?()[\]{}|]/g,lt=/\\(\\)?/g,Bt=/^\[object .+?Constructor\]$/,Ct=/^(?:0|[1-9]\d*)$/,V={};V[k]=V[Y]=V[it]=V[A]=V[_]=V[x]=V[E]=V[$]=V[j]=!0,V[u]=V[d]=V[G]=V[f]=V[H]=V[p]=V[g]=V[m]=V[M]=V[v]=V[C]=V[T]=V[P]=V[I]=V[q]=!1;var xt=typeof Ot=="object"&&Ot&&Ot.Object===Object&&Ot,et=typeof self=="object"&&self&&self.Object===Object&&self,tt=xt||et||Function("return this")(),Ht=e&&!e.nodeType&&e,Kt=Ht&&!0&&t&&!t.nodeType&&t,ss=Kt&&Kt.exports===Ht,hr=ss&&xt.process,dr=function(){try{return hr&&hr.binding("util")}catch{}}(),pr=dr&&dr.isTypedArray;function os(o,h){for(var y=-1,w=o?o.length:0,R=Array(w);++y<w;)R[y]=h(o[y],y,o);return R}function as(o,h){for(var y=-1,w=h.length,R=o.length;++y<w;)o[R+y]=h[y];return o}function ls(o,h){for(var y=-1,w=o?o.length:0;++y<w;)if(h(o[y],y,o))return!0;return!1}function cs(o){return function(h){return h==null?void 0:h[o]}}function us(o,h){for(var y=-1,w=Array(o);++y<o;)w[y]=h(y);return w}function fs(o){return function(h){return o(h)}}function hs(o,h){return o==null?void 0:o[h]}function pn(o){var h=!1;if(o!=null&&typeof o.toString!="function")try{h=!!(o+"")}catch{}return h}function ds(o){var h=-1,y=Array(o.size);return o.forEach(function(w,R){y[++h]=[R,w]}),y}function ps(o,h){return function(y){return o(h(y))}}function gs(o){var h=-1,y=Array(o.size);return o.forEach(function(w){y[++h]=w}),y}var ys=Array.prototype,ms=Function.prototype,Le=Object.prototype,gn=tt["__core-js_shared__"],gr=function(){var o=/[^.]+$/.exec(gn&&gn.keys&&gn.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),yr=ms.toString,Lt=Le.hasOwnProperty,ie=Le.toString,bs=RegExp("^"+yr.call(Lt).replace(Q,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ee=tt.Symbol,mr=tt.Uint8Array,ws=Le.propertyIsEnumerable,vs=ys.splice,br=Ee?Ee.isConcatSpreadable:void 0,xs=ps(Object.keys,Object),yn=se(tt,"DataView"),ye=se(tt,"Map"),mn=se(tt,"Promise"),bn=se(tt,"Set"),wn=se(tt,"WeakMap"),me=se(Object,"create"),_s=Yt(yn),Ms=Yt(ye),$s=Yt(mn),Ss=Yt(bn),As=Yt(wn),Re=Ee?Ee.prototype:void 0,vn=Re?Re.valueOf:void 0,wr=Re?Re.toString:void 0;function zt(o){var h=-1,y=o?o.length:0;for(this.clear();++h<y;){var w=o[h];this.set(w[0],w[1])}}function Cs(){this.__data__=me?me(null):{}}function Ls(o){return this.has(o)&&delete this.__data__[o]}function Es(o){var h=this.__data__;if(me){var y=h[o];return y===i?void 0:y}return Lt.call(h,o)?h[o]:void 0}function Rs(o){var h=this.__data__;return me?h[o]!==void 0:Lt.call(h,o)}function Ps(o,h){var y=this.__data__;return y[o]=me&&h===void 0?i:h,this}zt.prototype.clear=Cs,zt.prototype.delete=Ls,zt.prototype.get=Es,zt.prototype.has=Rs,zt.prototype.set=Ps;function Et(o){var h=-1,y=o?o.length:0;for(this.clear();++h<y;){var w=o[h];this.set(w[0],w[1])}}function ks(){this.__data__=[]}function Ts(o){var h=this.__data__,y=ke(h,o);if(y<0)return!1;var w=h.length-1;return y==w?h.pop():vs.call(h,y,1),!0}function Os(o){var h=this.__data__,y=ke(h,o);return y<0?void 0:h[y][1]}function js(o){return ke(this.__data__,o)>-1}function Ds(o,h){var y=this.__data__,w=ke(y,o);return w<0?y.push([o,h]):y[w][1]=h,this}Et.prototype.clear=ks,Et.prototype.delete=Ts,Et.prototype.get=Os,Et.prototype.has=js,Et.prototype.set=Ds;function Rt(o){var h=-1,y=o?o.length:0;for(this.clear();++h<y;){var w=o[h];this.set(w[0],w[1])}}function Ns(){this.__data__={hash:new zt,map:new(ye||Et),string:new zt}}function Bs(o){return Te(this,o).delete(o)}function Hs(o){return Te(this,o).get(o)}function Is(o){return Te(this,o).has(o)}function qs(o,h){return Te(this,o).set(o,h),this}Rt.prototype.clear=Ns,Rt.prototype.delete=Bs,Rt.prototype.get=Hs,Rt.prototype.has=Is,Rt.prototype.set=qs;function Pe(o){var h=-1,y=o?o.length:0;for(this.__data__=new Rt;++h<y;)this.add(o[h])}function Us(o){return this.__data__.set(o,i),this}function Ws(o){return this.__data__.has(o)}Pe.prototype.add=Pe.prototype.push=Us,Pe.prototype.has=Ws;function Pt(o){this.__data__=new Et(o)}function Vs(){this.__data__=new Et}function Gs(o){return this.__data__.delete(o)}function Ks(o){return this.__data__.get(o)}function zs(o){return this.__data__.has(o)}function Ys(o,h){var y=this.__data__;if(y instanceof Et){var w=y.__data__;if(!ye||w.length<n-1)return w.push([o,h]),this;y=this.__data__=new Rt(w)}return y.set(o,h),this}Pt.prototype.clear=Vs,Pt.prototype.delete=Gs,Pt.prototype.get=Ks,Pt.prototype.has=zs,Pt.prototype.set=Ys;function Fs(o,h){var y=kt(o)||Mn(o)?us(o.length,String):[],w=y.length,R=!!w;for(var S in o)Lt.call(o,S)&&!(R&&(S=="length"||Mr(S,w)))&&y.push(S);return y}function ke(o,h){for(var y=o.length;y--;)if(Ar(o[y][0],h))return y;return-1}var Zs=po(Qs);function Js(o,h,y,w,R){var S=-1,N=o.length;for(y||(y=vo),R||(R=[]);++S<N;){var Z=o[S];y(Z)?as(R,Z):R[R.length]=Z}return R}var Xs=go();function Qs(o,h){return o&&Xs(o,h,He)}function vr(o,h){h=Oe(h,o)?[h]:xr(h);for(var y=0,w=h.length;o!=null&&y<w;)o=o[je(h[y++])];return y&&y==w?o:void 0}function to(o){return ie.call(o)}function eo(o,h){return o!=null&&h in Object(o)}function xn(o,h,y,w,R){return o===h?!0:o==null||h==null||!Ne(o)&&!Be(h)?o!==o&&h!==h:no(o,h,xn,y,w,R)}function no(o,h,y,w,R,S){var N=kt(o),Z=kt(h),J=d,nt=d;N||(J=It(o),J=J==u?C:J),Z||(nt=It(h),nt=nt==u?C:nt);var ct=J==C&&!pn(o),ut=nt==C&&!pn(h),st=J==nt;if(st&&!ct)return S||(S=new Pt),N||Lo(o)?_r(o,h,y,w,R,S):yo(o,h,J,y,w,R,S);if(!(R&a)){var gt=ct&&Lt.call(o,"__wrapped__"),yt=ut&&Lt.call(h,"__wrapped__");if(gt||yt){var qt=gt?o.value():o,Tt=yt?h.value():h;return S||(S=new Pt),y(qt,Tt,w,R,S)}}return st?(S||(S=new Pt),mo(o,h,y,w,R,S)):!1}function ro(o,h,y,w){var R=y.length,S=R;if(o==null)return!S;for(o=Object(o);R--;){var N=y[R];if(N[2]?N[1]!==o[N[0]]:!(N[0]in o))return!1}for(;++R<S;){N=y[R];var Z=N[0],J=o[Z],nt=N[1];if(N[2]){if(J===void 0&&!(Z in o))return!1}else{var ct=new Pt,ut;if(!(ut===void 0?xn(nt,J,w,s|a,ct):ut))return!1}}return!0}function io(o){if(!Ne(o)||_o(o))return!1;var h=Cr(o)||pn(o)?bs:Bt;return h.test(Yt(o))}function so(o){return Be(o)&&$n(o.length)&&!!V[ie.call(o)]}function oo(o){return typeof o=="function"?o:o==null?ko:typeof o=="object"?kt(o)?uo(o[0],o[1]):co(o):To(o)}function ao(o){if(!Mo(o))return xs(o);var h=[];for(var y in Object(o))Lt.call(o,y)&&y!="constructor"&&h.push(y);return h}function lo(o,h){var y=-1,w=De(o)?Array(o.length):[];return Zs(o,function(R,S,N){w[++y]=h(R,S,N)}),w}function co(o){var h=bo(o);return h.length==1&&h[0][2]?Sr(h[0][0],h[0][1]):function(y){return y===o||ro(y,o,h)}}function uo(o,h){return Oe(o)&&$r(h)?Sr(je(o),h):function(y){var w=Ro(y,o);return w===void 0&&w===h?Po(y,o):xn(h,w,void 0,s|a)}}function fo(o){return function(h){return vr(h,o)}}function ho(o){if(typeof o=="string")return o;if(Sn(o))return wr?wr.call(o):"";var h=o+"";return h=="0"&&1/o==-l?"-0":h}function xr(o){return kt(o)?o:$o(o)}function po(o,h){return function(y,w){if(y==null)return y;if(!De(y))return o(y,w);for(var R=y.length,S=-1,N=Object(y);++S<R&&w(N[S],S,N)!==!1;);return y}}function go(o){return function(h,y,w){for(var R=-1,S=Object(h),N=w(h),Z=N.length;Z--;){var J=N[++R];if(y(S[J],J,S)===!1)break}return h}}function _r(o,h,y,w,R,S){var N=R&a,Z=o.length,J=h.length;if(Z!=J&&!(N&&J>Z))return!1;var nt=S.get(o);if(nt&&S.get(h))return nt==h;var ct=-1,ut=!0,st=R&s?new Pe:void 0;for(S.set(o,h),S.set(h,o);++ct<Z;){var gt=o[ct],yt=h[ct];if(w)var qt=N?w(yt,gt,ct,h,o,S):w(gt,yt,ct,o,h,S);if(qt!==void 0){if(qt)continue;ut=!1;break}if(st){if(!ls(h,function(Tt,Ft){if(!st.has(Ft)&&(gt===Tt||y(gt,Tt,w,R,S)))return st.add(Ft)})){ut=!1;break}}else if(!(gt===yt||y(gt,yt,w,R,S))){ut=!1;break}}return S.delete(o),S.delete(h),ut}function yo(o,h,y,w,R,S,N){switch(y){case H:if(o.byteLength!=h.byteLength||o.byteOffset!=h.byteOffset)return!1;o=o.buffer,h=h.buffer;case G:return!(o.byteLength!=h.byteLength||!w(new mr(o),new mr(h)));case f:case p:case v:return Ar(+o,+h);case g:return o.name==h.name&&o.message==h.message;case T:case I:return o==h+"";case M:var Z=ds;case P:var J=S&a;if(Z||(Z=gs),o.size!=h.size&&!J)return!1;var nt=N.get(o);if(nt)return nt==h;S|=s,N.set(o,h);var ct=_r(Z(o),Z(h),w,R,S,N);return N.delete(o),ct;case W:if(vn)return vn.call(o)==vn.call(h)}return!1}function mo(o,h,y,w,R,S){var N=R&a,Z=He(o),J=Z.length,nt=He(h),ct=nt.length;if(J!=ct&&!N)return!1;for(var ut=J;ut--;){var st=Z[ut];if(!(N?st in h:Lt.call(h,st)))return!1}var gt=S.get(o);if(gt&&S.get(h))return gt==h;var yt=!0;S.set(o,h),S.set(h,o);for(var qt=N;++ut<J;){st=Z[ut];var Tt=o[st],Ft=h[st];if(w)var Lr=N?w(Ft,Tt,st,h,o,S):w(Tt,Ft,st,o,h,S);if(!(Lr===void 0?Tt===Ft||y(Tt,Ft,w,R,S):Lr)){yt=!1;break}qt||(qt=st=="constructor")}if(yt&&!qt){var Ie=o.constructor,qe=h.constructor;Ie!=qe&&"constructor"in o&&"constructor"in h&&!(typeof Ie=="function"&&Ie instanceof Ie&&typeof qe=="function"&&qe instanceof qe)&&(yt=!1)}return S.delete(o),S.delete(h),yt}function Te(o,h){var y=o.__data__;return xo(h)?y[typeof h=="string"?"string":"hash"]:y.map}function bo(o){for(var h=He(o),y=h.length;y--;){var w=h[y],R=o[w];h[y]=[w,R,$r(R)]}return h}function se(o,h){var y=hs(o,h);return io(y)?y:void 0}var It=to;(yn&&It(new yn(new ArrayBuffer(1)))!=H||ye&&It(new ye)!=M||mn&&It(mn.resolve())!=L||bn&&It(new bn)!=P||wn&&It(new wn)!=q)&&(It=function(o){var h=ie.call(o),y=h==C?o.constructor:void 0,w=y?Yt(y):void 0;if(w)switch(w){case _s:return H;case Ms:return M;case $s:return L;case Ss:return P;case As:return q}return h});function wo(o,h,y){h=Oe(h,o)?[h]:xr(h);for(var w,R=-1,N=h.length;++R<N;){var S=je(h[R]);if(!(w=o!=null&&y(o,S)))break;o=o[S]}if(w)return w;var N=o?o.length:0;return!!N&&$n(N)&&Mr(S,N)&&(kt(o)||Mn(o))}function vo(o){return kt(o)||Mn(o)||!!(br&&o&&o[br])}function Mr(o,h){return h=h??c,!!h&&(typeof o=="number"||Ct.test(o))&&o>-1&&o%1==0&&o<h}function Oe(o,h){if(kt(o))return!1;var y=typeof o;return y=="number"||y=="symbol"||y=="boolean"||o==null||Sn(o)?!0:K.test(o)||!D.test(o)||h!=null&&o in Object(h)}function xo(o){var h=typeof o;return h=="string"||h=="number"||h=="symbol"||h=="boolean"?o!=="__proto__":o===null}function _o(o){return!!gr&&gr in o}function Mo(o){var h=o&&o.constructor,y=typeof h=="function"&&h.prototype||Le;return o===y}function $r(o){return o===o&&!Ne(o)}function Sr(o,h){return function(y){return y==null?!1:y[o]===h&&(h!==void 0||o in Object(y))}}var $o=_n(function(o){o=Eo(o);var h=[];return F.test(o)&&h.push(""),o.replace(X,function(y,w,R,S){h.push(R?S.replace(lt,"$1"):w||y)}),h});function je(o){if(typeof o=="string"||Sn(o))return o;var h=o+"";return h=="0"&&1/o==-l?"-0":h}function Yt(o){if(o!=null){try{return yr.call(o)}catch{}try{return o+""}catch{}}return""}function So(o,h){return Js(Ao(o,h))}function Ao(o,h){var y=kt(o)?os:lo;return y(o,oo(h))}function _n(o,h){if(typeof o!="function"||h&&typeof h!="function")throw new TypeError(r);var y=function(){var w=arguments,R=h?h.apply(this,w):w[0],S=y.cache;if(S.has(R))return S.get(R);var N=o.apply(this,w);return y.cache=S.set(R,N),N};return y.cache=new(_n.Cache||Rt),y}_n.Cache=Rt;function Ar(o,h){return o===h||o!==o&&h!==h}function Mn(o){return Co(o)&&Lt.call(o,"callee")&&(!ws.call(o,"callee")||ie.call(o)==u)}var kt=Array.isArray;function De(o){return o!=null&&$n(o.length)&&!Cr(o)}function Co(o){return Be(o)&&De(o)}function Cr(o){var h=Ne(o)?ie.call(o):"";return h==m||h==b}function $n(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=c}function Ne(o){var h=typeof o;return!!o&&(h=="object"||h=="function")}function Be(o){return!!o&&typeof o=="object"}function Sn(o){return typeof o=="symbol"||Be(o)&&ie.call(o)==W}var Lo=pr?fs(pr):so;function Eo(o){return o==null?"":ho(o)}function Ro(o,h,y){var w=o==null?void 0:vr(o,h);return w===void 0?y:w}function Po(o,h){return o!=null&&wo(o,h,eo)}function He(o){return De(o)?Fs(o):ao(o)}function ko(o){return o}function To(o){return Oe(o)?cs(je(o)):fo(o)}t.exports=So})(tn,tn.exports);var Iu=tn.exports;const ns=tr(Iu);function qu(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(s=>{const a={},l=u=>s.format==="date"?xe(u).unix():parseFloat(u);e.forEach(u=>{var d;if(s.type==="range"){const f=_e(s.key,u);if(Array.isArray(f)){const p=[l(f[0]),l(f[1])];a.min=a.min!==void 0?Math.min(a.min,p[0]):p[0],a.max=a.max!==void 0?Math.max(a.max,p[1]):p[1]}else{const p=l(f);a.min=a.min!==void 0?Math.min(a.min,p):p,a.max=a.max!==void 0?Math.max(a.max,p):p}return}Array.isArray(u[s.key])?u[s.key].forEach(f=>{a[f]=void 0}):s.type==="spatial"?(a.geometry=void 0,a.mode=s.mode||"intersects"):(d=s.key)!=null&&d.includes(".")?es(ns(n.items,s.key)).filter(f=>f).forEach(f=>{a[f]=void 0}):a[u[s.key]]=void 0});const c=s.key||s.keys.join("|");n.filters[c]=Object.assign({type:s.type||"multiselect",dirty:s.state?!1:void 0,key:c},s.type==="range"?{min:a.min,max:a.max,format:s.format}:{},s),n.filters[c].state=Object.assign({},a,s.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((s,a)=>s.concat(a[t.aggregateResults]),[]))).sort((s,a)=>s.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(s=>{s.type==="text"?s.keys.forEach(a=>{i.includes(a)||i.push(a)}):(s.type==="select"||s.type==="multiselect")&&(i.includes(s.key)||i.push(s.key))}),oc(e,Object.assign({keys:i},t.fuseConfig)),r}async function Uu(t,e,n){let r;n.externalFilter?r=await uc(e,n.filters,t):r=await ac(e,n.filters,t),n.results=n.sortResults(r)}function Wu(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return B`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return B`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${es(ns(n.items,t.key)).filter(i=>i)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return B`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return B`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return B``}}function Vu(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function Gu(t,e,n){return B`
    ${at(t.dirty,()=>B`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":Dt}
        </button>
      `)}
  `}function Ku(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var $e,ce,mt,he,rs,is;class zu extends St{constructor(){super();ft(this,he);ft(this,$e,[]);ft(this,ce,[]);ft(this,mt,Vc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=an(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},unstyled:{type:Boolean}}}apply(){Ue(this,$e,qu(ht(this,mt),ht(this,ce),this)),this.search()}async searchHandler(){await Uu(ht(this,mt),ht(this,ce),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return Vu(n,ht(this,mt))}resetFilters(){Ku(this)}firstUpdated(n){var i;let r={};Xr.map(s=>{r={...r,[s]:this[s]}}),Ue(this,mt,r),Ue(this,ce,((i=this.items)==null?void 0:i.map((s,a)=>Object.assign({id:s[this.idProperty]||`item-${a}`},s)))||[]),this.apply()}updated(n){Xr.map(r=>{if(n.has(r))return this.firstUpdated(),!0})}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}render(){var n;return B`
      <style>
        ${Yo}
        ${!this.unstyled&&Se}
        ${!this.unstyled&&Ho}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":Dt}
        @submit="${r=>r.preventDefault()}"
      >
        ${at(this.filterProperties,()=>B`
            <eox-itemfilter-container
              .filters=${this.filters}
              .filterProperties=${this.filterProperties}
              .inlineMode=${this.inlineMode||!1}
              @reset=${()=>this.resetFilters()}
              @filter=${()=>this.search()}
            >
              <section slot="section">
                ${at(!this.inlineMode,()=>B`
                    <slot name="filterstitle"
                      ><h6 class="main-heading">Filters</h6></slot
                    >
                  `)}
                <ul id="filters">
                  ${on(Object.values(this.filters),(r,i)=>B` <li>
                        <eox-itemfilter-expandcontainer
                          .filterObject=${r}
                          @details-toggled=${s=>Pi(s,ht(this,mt),this)}
                          data-details="${r.key}"
                        >
                          ${U(this,he,is).call(this,r,Fr(i,1))}
                          ${U(this,he,rs).call(this,r,Fr(i,2))}
                        </eox-itemfilter-expandcontainer>
                      </li>`)}
                </ul>
                ${at(!this.inlineMode&&ht(this,mt).filterProperties&&!this.inlineMode&&ht(this,mt).filterProperties&&Gn(this.filters),()=>B`
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
        ${at(((n=ht(this,mt))==null?void 0:n.showResults)&&this.results,()=>B`
            <eox-itemfilter-results
              .config=${ht(this,mt)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${ht(this,$e)}
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
    `}}$e=new WeakMap,ce=new WeakMap,mt=new WeakMap,he=new WeakSet,rs=function(n,r){return Wu(n,r,this)},is=function(n,r){return Gu(n,r,this)};customElements.define("eox-itemfilter",zu);const Yu={slot:"filterstitle",style:{margin:"14px 8px"}},Fu={slot:"resultstitle",style:{margin:"14px 8px"}},On="float:right; height:15px; padding:4px;  margin-top:-4px; background-color:white;",Zu="float:right; height:15px; padding:4px;  margin-top:-4px; background-color:#9bcaeb;",cf={__name:"EodashItemFilter",props:{enableCompare:{type:Boolean,default:!1},filtersTitle:{type:String,default:"Indicators"},resultsTitle:{type:String,default:""},titleProperty:{type:String,default:"title"},aggregateResults:{type:String,default:"themes"},enableHighlighting:{type:Boolean,default:!0},expandMultipleFilters:{type:Boolean,default:!0},expandMultipleResults:{type:Boolean,default:!0},filterProperties:{type:Array,default:()=>[{keys:["title","themes","description"],title:"Search",type:"text"},{key:"themes",title:"Theme Filter",type:"multiselect"}]}},setup(t){const e=t,n=async l=>{var u,d;(d=(u=i.value)==null?void 0:u.shadowRoot)==null||d.querySelectorAll(".compareMapButton").forEach(f=>f.setAttribute("style",On));const c=l.detail;c&&(s.resetSelectedCompareSTAC(),await s.loadSelectedSTAC(c.href))},r={titleProperty:e.titleProperty,filterProperties:e.filterProperties,aggregateResults:e.aggregateResults,enableHighlighting:e.enableHighlighting,expandMultipleFilters:e.expandMultipleFilters,expandMultipleResults:e.expandMultipleResults},i=Wo(null),s=Do(),a=()=>{setTimeout(()=>{var l,c;(l=i.value)==null||l.shadowRoot.querySelectorAll("details>summary").forEach(u=>u.setAttribute("style","width: 100%")),(c=i.value)==null||c.shadowRoot.querySelectorAll("details>div li").forEach(u=>{let d=document.createElement("button");d.className="compareMapButton",d.dataset.id=u.children[0].id,d.onclick=async g=>{var M,v,C;(v=(M=i.value)==null?void 0:M.shadowRoot)==null||v.querySelectorAll(".compareMapButton").forEach(L=>{L.setAttribute("style",On)});const m=g.currentTarget;m==null||m.setAttribute("style",Zu);const b=(C=i.value)==null?void 0:C.items.find(L=>L.id===(m==null?void 0:m.dataset.id));b&&await s.loadSelectedCompareSTAC(b.href)},d.setAttribute("style",On);const f=document.createElementNS("http://www.w3.org/2000/svg","svg"),p=document.createElementNS("http://www.w3.org/2000/svg","path");f.setAttribute("width","15"),f.setAttribute("height","15"),f.setAttribute("viewBox","0 0 24 24"),p.setAttribute("d","M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z"),f.appendChild(p),d.appendChild(f),u.append(d)})},100)};return Vo(()=>{var u,d,f;const l=document.createElement("style");l.innerHTML=`
    section {
      margin: 0 !important;
    }
    section button#filter-reset {
      padding: 0 8px;
      top: 8px;
      right: 8px;
    }
  `,(d=(u=i.value)==null?void 0:u.shadowRoot)==null||d.appendChild(l);const c=(f=s.stac)==null?void 0:f.filter(p=>p.rel==="child");i.value.items=c,e.enableCompare&&a()}),(l,c)=>(zo(),Go("eox-itemfilter",Ko({class:"fill-height"},r,{ref_key:"eoxItemFilter",ref:i,style:{overflow:"auto"},onSelect:n}),[Rr("h4",Yu,Pr(t.filtersTitle),1),Rr("h4",Fu,Pr(t.resultsTitle),1)],16))}};export{cf as default};
