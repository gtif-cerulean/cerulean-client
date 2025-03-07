import{g as k}from"./commonjsHelpers.BosuxZz1.js";function _(r,g){for(var e=0;e<g.length;e++){const t=g[e];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in r)){const o=Object.getOwnPropertyDescriptor(t,n);o&&Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}};(function(r,g){ace.define("ace/mode/diff_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){var o=e("../lib/oop"),d=e("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{regex:"^(?:\\*{15}|={67}|-{3}|\\+{3})$",token:"punctuation.definition.separator.diff",name:"keyword"},{regex:"^(@@)(\\s*.+?\\s*)(@@)(.*)$",token:["constant","constant.numeric","constant","comment.doc.tag"]},{regex:"^(\\d+)([,\\d]+)(a|d|c)(\\d+)([,\\d]+)(.*)$",token:["constant.numeric","punctuation.definition.range.diff","constant.function","constant.numeric","punctuation.definition.range.diff","invalid"],name:"meta."},{regex:"^(\\-{3}|\\+{3}|\\*{3})( .+)$",token:["constant.numeric","meta.tag"]},{regex:"^([!+>])(.*?)(\\s*)$",token:["support.constant","text","invalid"]},{regex:"^([<\\-])(.*?)(\\s*)$",token:["support.function","string","invalid"]},{regex:"^(diff)(\\s+--\\w+)?(.+?)( .+)?$",token:["variable","variable","keyword","variable"]},{regex:"^Index.+$",token:"variable"},{regex:"^\\s+$",token:"text"},{regex:"\\s*$",token:"invalid"},{defaultToken:"invisible",caseInsensitive:!0}]}};o.inherits(a,d),t.DiffHighlightRules=a}),ace.define("ace/mode/folding/diff",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(e,t,n){var o=e("../../lib/oop"),d=e("./fold_mode").FoldMode,a=e("../../range").Range,s=t.FoldMode=function(i,h){this.regExpList=i,this.flag=h,this.foldingStartMarker=RegExp("^("+i.join("|")+")",this.flag)};o.inherits(s,d),(function(){this.getFoldWidgetRange=function(i,h,f){for(var l=i.getLine(f),c={row:f,column:l.length},p=this.regExpList,u=1;u<=p.length;u++){var m=RegExp("^("+p.slice(0,u).join("|")+")",this.flag);if(m.test(l))break}for(var b=i.getLength();++f<b&&(l=i.getLine(f),!m.test(l)););if(f!=c.row+1)return new a(c.row,c.column,f-1,l.length)}}).call(s.prototype)}),ace.define("ace/mode/diff",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/diff_highlight_rules","ace/mode/folding/diff"],function(e,t,n){var o=e("../lib/oop"),d=e("./text").Mode,a=e("./diff_highlight_rules").DiffHighlightRules,s=e("./folding/diff").FoldMode,i=function(){this.HighlightRules=a,this.foldingRules=new s(["diff","@@|\\*{5}"],"i")};o.inherits(i,d),(function(){this.$id="ace/mode/diff",this.snippetFileId="ace/snippets/diff"}).call(i.prototype),t.Mode=i}),function(){ace.require(["ace/mode/diff"],function(e){r&&(r.exports=e)})}()})(x);var v=x.exports;const $=k(v),y=_({__proto__:null,default:$},[v]);export{y as m};
