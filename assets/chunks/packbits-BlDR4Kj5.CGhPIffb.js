import{g as s}from"./basedecoder-DHcBySSe.gdlnpIMU.js";class c extends s{decodeBlock(l){const o=new DataView(l),r=[];for(let e=0;e<l.byteLength;++e){let t=o.getInt8(e);if(t<0){const n=o.getUint8(e+1);t=-t;for(let f=0;f<=t;++f)r.push(n);e+=1}else{for(let n=0;n<=t;++n)r.push(o.getUint8(e+n+1));e+=t+1}}return new Uint8Array(r).buffer}}export{c as default};
