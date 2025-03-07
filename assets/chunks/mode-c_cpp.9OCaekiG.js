import{g as k}from"./commonjsHelpers.BosuxZz1.js";function _(x,v){for(var a=0;a<v.length;a++){const f=v[a];if(typeof f!="string"&&!Array.isArray(f)){for(const h in f)if(h!=="default"&&!(h in x)){const d=Object.getOwnPropertyDescriptor(f,h);d&&Object.defineProperty(x,h,d.get?d:{enumerable:!0,get:()=>f[h]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var w={exports:{}};(function(x,v){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(a,f,h){var d=a("../lib/oop"),p=a("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},s.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};d.inherits(s,p),s.getTagRule=function(c){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},s.getStartRule=function(c){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:c}},s.getEndRule=function(c){return{token:"comment.doc",regex:"\\*\\/",next:c}},f.DocCommentHighlightRules=s}),ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(a,f,h){var d=a("../lib/oop"),p=a("./doc_comment_highlight_rules").DocCommentHighlightRules,s=a("./text_highlight_rules").TextHighlightRules,c=f.cFunctions="hypot|hypotf|hypotl|sscanf|system|snprintf|scanf|scalbn|scalbnf|scalbnl|scalbln|scalblnf|scalblnl|sin|sinh|sinhf|sinhl|sinf|sinl|signal|signbit|strstr|strspn|strncpy|strncat|strncmp|strcspn|strchr|strcoll|strcpy|strcat|strcmp|strtoimax|strtod|strtoul|strtoull|strtoumax|strtok|strtof|strtol|strtold|strtoll|strerror|strpbrk|strftime|strlen|strrchr|strxfrm|sprintf|setjmp|setvbuf|setlocale|setbuf|sqrt|sqrtf|sqrtl|swscanf|swprintf|srand|nearbyint|nearbyintf|nearbyintl|nexttoward|nexttowardf|nexttowardl|nextafter|nextafterf|nextafterl|nan|nanf|nanl|csin|csinh|csinhf|csinhl|csinf|csinl|csqrt|csqrtf|csqrtl|ccos|ccosh|ccoshf|ccosf|ccosl|cimag|cimagf|cimagl|ctime|ctan|ctanh|ctanhf|ctanhl|ctanf|ctanl|cos|cosh|coshf|coshl|cosf|cosl|conj|conjf|conjl|copysign|copysignf|copysignl|cpow|cpowf|cpowl|cproj|cprojf|cprojl|ceil|ceilf|ceill|cexp|cexpf|cexpl|clock|clog|clogf|clogl|clearerr|casin|casinh|casinhf|casinhl|casinf|casinl|cacos|cacosh|cacoshf|cacoshl|cacosf|cacosl|catan|catanh|catanhf|catanhl|catanf|catanl|calloc|carg|cargf|cargl|cabs|cabsf|cabsl|creal|crealf|creall|cbrt|cbrtf|cbrtl|time|toupper|tolower|tan|tanh|tanhf|tanhl|tanf|tanl|trunc|truncf|truncl|tgamma|tgammaf|tgammal|tmpnam|tmpfile|isspace|isnormal|isnan|iscntrl|isinf|isdigit|isunordered|isupper|ispunct|isprint|isfinite|iswspace|iswcntrl|iswctype|iswdigit|iswupper|iswpunct|iswprint|iswlower|iswalnum|iswalpha|iswgraph|iswxdigit|iswblank|islower|isless|islessequal|islessgreater|isalnum|isalpha|isgreater|isgreaterequal|isgraph|isxdigit|isblank|ilogb|ilogbf|ilogbl|imaxdiv|imaxabs|div|difftime|_Exit|ungetc|ungetwc|pow|powf|powl|puts|putc|putchar|putwc|putwchar|perror|printf|erf|erfc|erfcf|erfcl|erff|erfl|exit|exp|exp2|exp2f|exp2l|expf|expl|expm1|expm1f|expm1l|vsscanf|vsnprintf|vscanf|vsprintf|vswscanf|vswprintf|vprintf|vfscanf|vfprintf|vfwscanf|vfwprintf|vwscanf|vwprintf|va_start|va_copy|va_end|va_arg|qsort|fscanf|fsetpos|fseek|fclose|ftell|fopen|fdim|fdimf|fdiml|fpclassify|fputs|fputc|fputws|fputwc|fprintf|feholdexcept|fesetenv|fesetexceptflag|fesetround|feclearexcept|fetestexcept|feof|feupdateenv|feraiseexcept|ferror|fegetenv|fegetexceptflag|fegetround|fflush|fwscanf|fwide|fwprintf|fwrite|floor|floorf|floorl|fabs|fabsf|fabsl|fgets|fgetc|fgetpos|fgetws|fgetwc|freopen|free|fread|frexp|frexpf|frexpl|fmin|fminf|fminl|fmod|fmodf|fmodl|fma|fmaf|fmal|fmax|fmaxf|fmaxl|ldiv|ldexp|ldexpf|ldexpl|longjmp|localtime|localeconv|log|log1p|log1pf|log1pl|log10|log10f|log10l|log2|log2f|log2l|logf|logl|logb|logbf|logbl|labs|lldiv|llabs|llrint|llrintf|llrintl|llround|llroundf|llroundl|lrint|lrintf|lrintl|lround|lroundf|lroundl|lgamma|lgammaf|lgammal|wscanf|wcsstr|wcsspn|wcsncpy|wcsncat|wcsncmp|wcscspn|wcschr|wcscoll|wcscpy|wcscat|wcscmp|wcstoimax|wcstod|wcstoul|wcstoull|wcstoumax|wcstok|wcstof|wcstol|wcstold|wcstoll|wcstombs|wcspbrk|wcsftime|wcslen|wcsrchr|wcsrtombs|wcsxfrm|wctob|wctomb|wcrtomb|wprintf|wmemset|wmemchr|wmemcpy|wmemcmp|wmemmove|assert|asctime|asin|asinh|asinhf|asinhl|asinf|asinl|acos|acosh|acoshf|acoshl|acosf|acosl|atoi|atof|atol|atoll|atexit|atan|atanh|atanhf|atanhl|atan2|atan2f|atan2l|atanf|atanl|abs|abort|gets|getc|getchar|getenv|getwc|getwchar|gmtime|rint|rintf|rintl|round|roundf|roundl|rename|realloc|rewind|remove|remquo|remquof|remquol|remainder|remainderf|remainderl|rand|raise|bsearch|btowc|modf|modff|modfl|memset|memchr|memcpy|memcmp|memmove|mktime|malloc|mbsinit|mbstowcs|mbsrtowcs|mbtowc|mblen|mbrtowc|mbrlen",e=function(n){var t="break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using",r="asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|int8_t|int16_t|int32_t|int64_t|long|short|signed|size_t|struct|typedef|uint8_t|uint16_t|uint32_t|uint64_t|union|unsigned|void|class|wchar_t|template|char16_t|char32_t",i="const|extern|register|restrict|static|volatile|inline|private|protected|public|friend|explicit|virtual|export|mutable|typename|constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local",l="and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace",g="NULL|true|false|TRUE|FALSE|nullptr",o=this.$keywords=this.createKeywordMapper(Object.assign({"keyword.control":t,"storage.type":r,"storage.modifier":i,"keyword.operator":l,"variable.language":"this","constant.language":g,"support.function.C99.c":c},n),"identifier"),u=/\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source,m="%"+/(\d+\$)?/.source+/[#0\- +']*/.source+/[,;:_]?/.source+/((-?\d+)|\*(-?\d+\$)?)?/.source+/(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source+/(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source+/(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;this.$rules={start:[{token:"comment",regex:"//$",next:"start"},{token:"comment",regex:"//",next:"singleLineComment"},p.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:"'(?:"+u+"|.)?'"},{token:"string.start",regex:'"',stateName:"qqstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:u},{token:"constant.language.escape",regex:m},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"string.start",regex:'R"\\(',stateName:"rawString",next:[{token:"string.end",regex:'\\)"',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef)\\b",next:"directive"},{token:"keyword",regex:"#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"},{token:o,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*"},{token:"keyword.operator",regex:/--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],singleLineComment:[{token:"comment",regex:/\\$/,next:"singleLineComment"},{token:"comment",regex:/$/,next:"start"},{defaultToken:"comment"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(p,"doc-",[p.getEndRule("start")]),this.normalizeRules()};d.inherits(e,s),f.c_cppHighlightRules=e}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(a,f,h){var d=a("../range").Range,p=function(){};(function(){this.checkOutdent=function(s,c){return/^\s+$/.test(s)?/^\s*\}/.test(c):!1},this.autoOutdent=function(s,c){var e=s.getLine(c),n=e.match(/^(\s*\})/);if(!n)return 0;var t=n[1].length,r=s.findMatchingBracket({row:c,column:t});if(!r||r.row==c)return 0;var i=this.$getIndent(s.getLine(r.row));s.replace(new d(c,0,c,t-1),i)},this.$getIndent=function(s){return s.match(/^\s*/)[0]}}).call(p.prototype),f.MatchingBraceOutdent=p}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(a,f,h){var d=a("../../lib/oop"),p=a("../../range").Range,s=a("./fold_mode").FoldMode,c=f.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};d.inherits(c,s),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,n,t){var r=e.getLine(t);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var i=this._getFoldWidgetBase(e,n,t);return!i&&this.startRegionRe.test(r)?"start":i},this.getFoldWidgetRange=function(e,n,t,r){var i=e.getLine(t);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,t);var o=i.match(this.foldingStartMarker);if(o){var l=o.index;if(o[1])return this.openingBracketBlock(e,o[1],t,l);var g=e.getCommentFoldRange(t,l+o[0].length,1);return g&&!g.isMultiLine()&&(r?g=this.getSectionRange(e,t):n!="all"&&(g=null)),g}if(n!=="markbegin"){var o=i.match(this.foldingStopMarker);if(o){var l=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],t,l):e.getCommentFoldRange(t,l,-1)}}},this.getSectionRange=function(e,n){var t=e.getLine(n),r=t.search(/\S/),i=n,l=t.length;n=n+1;for(var g=n,o=e.getLength();++n<o;){t=e.getLine(n);var u=t.search(/\S/);if(u!==-1){if(r>u)break;var m=this.getFoldWidgetRange(e,"all",n);if(m){if(m.start.row<=i)break;if(m.isMultiLine())n=m.end.row;else if(r==u)break}g=n}}return new p(i,l,g,e.getLine(g).length)},this.getCommentRegionBlock=function(e,n,t){for(var r=n.search(/\s*$/),i=e.getLength(),l=t,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,o=1;++t<i;){n=e.getLine(t);var u=g.exec(n);if(u&&(u[1]?o--:o++,!o))break}var m=t;if(m>l)return new p(l,r,m,n.length)}}).call(c.prototype)}),ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(a,f,h){var d=a("../lib/oop"),p=a("./text").Mode,s=a("./c_cpp_highlight_rules").c_cppHighlightRules,c=a("./matching_brace_outdent").MatchingBraceOutdent,e=a("./folding/cstyle").FoldMode,n=function(){this.HighlightRules=s,this.$outdent=new c,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new e};d.inherits(n,p),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(t,r,i){var l=this.$getIndent(r),g=this.getTokenizer().getLineTokens(r,t),o=g.tokens,u=g.state;if(o.length&&o[o.length-1].type=="comment")return l;if(t=="start"){var m=r.match(/^.*[\{\(\[]\s*$/);m&&(l+=i)}else if(t=="doc-start"){if(u=="start")return"";var m=r.match(/^\s*(\/?)\*/);m&&(m[1]&&(l+=" "),l+="* ")}return l},this.checkOutdent=function(t,r,i){return this.$outdent.checkOutdent(r,i)},this.autoOutdent=function(t,r,i){this.$outdent.autoOutdent(r,i)},this.$id="ace/mode/c_cpp",this.snippetFileId="ace/snippets/c_cpp"}).call(n.prototype),f.Mode=n}),function(){ace.require(["ace/mode/c_cpp"],function(a){x&&(x.exports=a)})}()})(w);var b=w.exports;const y=k(b),L=_({__proto__:null,default:y},[b]);export{L as m};
