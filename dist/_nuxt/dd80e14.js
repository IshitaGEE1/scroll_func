(window.webpackJsonp=window.webpackJsonp||[]).push([[88,17,18,35,48,65,80],{413:function(t,e,n){"use strict";n.r(e);n(41),n(23),n(66),n(422);var r={name:"BaseHeadline",props:{tag:{type:String,default:"h1",validate:function(t){return["h1","h2","h3","h4","h5","h6"].includes(t)}},center:{type:Boolean,default:!1},text:String},computed:{_text:function(){var t;return null===(t=this.text)||void 0===t||null===(t=t.replaceAll("[[",'<span class="u-base-headline--contrast">'))||void 0===t?void 0:t.replaceAll("]]","</span>")}}},o=(n(424),n(72)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.text?e(t.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":t.center}],domProps:{innerHTML:t._s(t._text)}}):e(t.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":t.center}]},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},415:function(t,e,n){"use strict";n.r(e);n(42),n(267);var r={name:"BaseImage",props:{src:{type:String,required:!0},alt:{type:String,required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},lazy:{type:Boolean,required:!1,default:!1},cover:{type:Boolean,required:!1,default:!1}}},o=(n(429),n(72)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("picture",t._g({class:["u-base-image",{"u-base-image--cover":t.cover}]},t.$listeners),[t._t("default"),t._v(" "),e("img",{style:"max-width: ".concat(t.width,"px; max-height: ").concat(t.height,"px"),attrs:{src:t.src,alt:t.alt,width:t.width,height:t.height,loading:!!t.lazy&&"lazy"}})],2)}),[],!1,null,"664399b8",null);e.default=component.exports},416:function(t,e,n){var content=n(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("6f83e24a",content,!0,{sourceMap:!1})},417:function(t,e,n){"use strict";e.a={props:{fields:Object,metadata:Object,sys:Object}}},418:function(t,e,n){"use strict";n.r(e),n.d(e,"FitOptions",(function(){return d}));n(20),n(54),n(42),n(41),n(267),n(43);var r=n(415),o=n(435),l=n(417),d={PAD:"pad",FILL:"fill",SCALE:"scale"},c={name:"ContentfulImage",components:{BaseImage:r.default},mixins:[l.a],props:{url:String,title:String,size:{type:String,required:!1,default:o.a.DEFAULT},width:{type:[String,Number],required:!1,default:800},height:{type:[String,Number],required:!1,default:450},lazy:{type:Boolean,required:!1,default:!1},cover:{type:Boolean,required:!1,default:!1},fit:{type:String,required:!1,default:void 0}},computed:{asset:function(){return this.fields},isSvg:function(){var t;return null===(t=this.asset)||void 0===t||null===(t=t.file)||void 0===t||null===(t=t.url)||void 0===t?void 0:t.includes(".svg")},processedUrl:function(){var t,e="".concat(this.url||(null===(t=this.asset)||void 0===t||null===(t=t.file)||void 0===t?void 0:t.url),"?w=").concat(this.width,"&h=").concat(this.height);return this.fit&&(e+="&fit=".concat(this.fit)),e},processedAlt:function(){var t,e,n;return this.title||(null===(t=this.asset)||void 0===t?void 0:t.description)||(null===(e=this.asset)||void 0===e?void 0:e.title)||(null===(n=this.asset)||void 0===n||null===(n=n.file)||void 0===n?void 0:n.fileName)}}},f=(n(440),n(72)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("base-image",t._g({staticClass:"u-contentful-image",class:["u-contentful-image--".concat(t.size),{"u-contentful-image--svg":t.isSvg}],attrs:{src:t.processedUrl,alt:t.processedAlt,width:t.width,height:t.height,lazy:t.lazy,cover:t.cover}},t.$listeners),[t.isSvg?t._e():e("source",{attrs:{srcset:"".concat(t.processedUrl,"&fm=webp"),type:"image/webp"}})])}),[],!1,null,"48ea15a5",null);e.default=component.exports;installComponents(component,{BaseImage:n(415).default})},419:function(t,e,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("0b314dc2",content,!0,{sourceMap:!1})},422:function(t,e,n){"use strict";n(423)},423:function(t,e,n){"use strict";var r=n(2),o=n(10),l=n(4),d=n(29),c=n(7),f=n(47),m=n(178),v=n(13),h=n(67),x=n(177),w=n(268),_=n(8),y=n(25),k=_("replace"),O=TypeError,j=l("".indexOf),S=l("".replace),A=l("".slice),L=Math.max;r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,l,_,C,M,E,z,T,P=d(this),B=0,I=0,D="";if(!f(t)){if((n=m(t))&&(r=v(d(x(t))),!~j(r,"g")))throw new O("`.replaceAll` does not allow non-global regexes");if(l=h(t,k))return o(l,t,P,e);if(y&&n)return S(v(P),t,e)}for(_=v(P),C=v(t),(M=c(e))||(e=v(e)),E=C.length,z=L(1,E),B=j(_,C);-1!==B;)T=M?v(e(C,B,_)):w(C,_,B,[],void 0,e),D+=A(_,I,B)+T,I=B+E,B=B+z>_.length?-1:j(_,C,B+z);return I<_.length&&(D+=A(_,I)),D}})},424:function(t,e,n){"use strict";n(416)},425:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,".u-base-headline--centered{text-align:center}.u-base-headline--centered:before{margin-left:auto;margin-right:auto}.u-base-headline>.u-base-headline--contrast{-webkit-text-fill-color:transparent;background:var(--headline-contrast);-webkit-background-clip:text}@media(min-width:36rem){h2.u-base-headline--centered{margin-left:auto;margin-right:auto;max-width:66%}}@media(min-width:1440px){h2.u-base-headline--centered{max-width:792px}}",""]),r.locals={},t.exports=r},427:function(t,e,n){"use strict";var r=n(2),o=n(269).trim;r({target:"String",proto:!0,forced:n(437)("trim")},{trim:function(){return o(this)}})},428:function(t,e,n){var content=n(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("7f0509d6",content,!0,{sourceMap:!1})},429:function(t,e,n){"use strict";n(419)},430:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,".u-base-image[data-v-664399b8]{display:block}.u-base-image img[data-v-664399b8]{display:block;margin:0 auto}.u-base-image:not(.u-base-image--svg) img[data-v-664399b8]{height:auto;-o-object-fit:contain;object-fit:contain;width:100%}.u-base-image.u-base-image--cover img[data-v-664399b8]{max-width:none!important;-o-object-fit:cover;object-fit:cover}",""]),r.locals={},t.exports=r},431:function(t,e,n){"use strict";n.r(e);n(55),n(267),n(12),n(33),n(110),n(27);var r=n(467),o=new(n.n(r).a.Converter),l={name:"MarkdownText",props:{text:String,center:{type:Boolean,default:!1},imageScaling:{type:Number,default:1200}},computed:{convertedText:function(){return o.makeHtml(this.text)}},mounted:function(){this.updateLists(),this.updateImageSources(),this.updateExternalLinks()},methods:{updateLists:function(){Array.from(this.$el.querySelectorAll("ul")).forEach((function(i){i.classList.add("u-base-list")}))},updateExternalLinks:function(){Array.from(this.$el.querySelectorAll("a")).forEach((function(i){i.href.startsWith("https://www.productsup.com/")||(i.target="_blank",i.rel="noopener noreferrer")}))},updateImageSources:function(){var t=this;Array.from(this.$el.querySelectorAll("img")).forEach((function(i){var e=i.src.indexOf("?");if(-1!==e){var n=i.src.substr(e).indexOf("fm")>-1,r=i.src.substr(e).indexOf("w")>-1;n||(i.src+="&fm=webp"),r||(i.src+="&w=700")}else i.src+="?fm=webp&w=".concat(t.imageScaling)}))}}},d=(n(446),n(72)),component=Object(d.a)(l,(function(){var t=this;return(0,t._self._c)("div",{class:["u-markdown",{"u-markdown--centered":t.center}],domProps:{innerHTML:t._s(t.convertedText)}})}),[],!1,null,"b683d0aa",null);e.default=component.exports},432:function(t,e,n){var content=n(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("686c03c8",content,!0,{sourceMap:!1})},435:function(t,e,n){"use strict";e.a={DEFAULT:"default",SMALL:"small",MEDIUM:"medium",LARGE:"large",X_LARGE:"xl"}},436:function(t,e,n){"use strict";e.a={props:{fields:Object,metadata:Object,sys:Object,contentType:String},computed:{data:function(){return{fields:this.fields,metadata:this.metadata,sys:this.sys}}}}},437:function(t,e,n){"use strict";var r=n(109).PROPER,o=n(3),l=n(270);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||r&&l[t].name!==t}))}},438:function(t,e,n){"use strict";n(42),n(41),n(43),n(427);var r="white",o="blue",l="dark-blue",d="blue-to-blue-vibrant-darken",c="blue-vibrant-to-purple",f="blue-dark-to-blue-darkest",m="horizontal",v="none";e.a={computed:{colors:function(){var t,e=(null===(t=this.fields)||void 0===t||null===(t=t.designOptions)||void 0===t||null===(t=t.fields)||void 0===t?void 0:t.background)||r;return e.includes("to")?e.split("-to-"):[e,e]},background:function(){var t,e,n=(null===(t=this.fields)||void 0===t||null===(t=t.designOptions)||void 0===t||null===(t=t.fields)||void 0===t?void 0:t.background)||r,o=(null===(e=this.fields)||void 0===e||null===(e=e.designOptions)||void 0===e||null===(e=e.fields)||void 0===e?void 0:e.backgroundDirection)||m;return"".concat(n).concat(n.includes("to")?"-".concat(o):"").trim()},diverShape:function(){var t,e=null===(t=this.fields)||void 0===t||null===(t=t.designOptions)||void 0===t||null===(t=t.fields)||void 0===t?void 0:t.diverShape;return e===v?void 0:e},spiderweb:function(){var t,e=null===(t=this.fields)||void 0===t||null===(t=t.designOptions)||void 0===t||null===(t=t.fields)||void 0===t?void 0:t.spiderweb;return e===v?void 0:e},theme:function(){var t;switch((null===(t=this.fields)||void 0===t||null===(t=t.designOptions)||void 0===t||null===(t=t.fields)||void 0===t?void 0:t.background)||r){case o:case l:case d:case f:return"theme-dark";case c:return"theme-colored";default:return"theme-light"}},backgroundStyles:function(){return{background:"var(--".concat(this.background,", #fff)"),"--color-left":"var(--".concat(this.colors[0],")"),"--color-right":"var(--".concat(this.colors[1],")")}},backgroundAttributes:function(){return{"data-diver-shape":this.diverShape,"data-spiderweb":this.spiderweb}}}}},440:function(t,e,n){"use strict";n(428)},441:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,".u-contentful-image--small[data-v-48ea15a5] img{max-height:4rem!important}.u-contentful-image--medium[data-v-48ea15a5] img{max-height:8rem!important}.u-contentful-image--large[data-v-48ea15a5] img{max-height:16rem!important}.u-contentful-image--xl[data-v-48ea15a5] img{max-height:32rem!important}",""]),r.locals={},t.exports=r},446:function(t,e,n){"use strict";n(432)},447:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,'.u-markdown[data-v-b683d0aa] ol,.u-markdown[data-v-b683d0aa] ul{font-size:1.25rem;letter-spacing:.005em;line-height:1.3;margin:initial}.u-markdown[data-v-b683d0aa] ol>li,.u-markdown[data-v-b683d0aa] ul>li{color:var(--text-color)}.u-markdown[data-v-b683d0aa] ol>li:not(:first-child),.u-markdown[data-v-b683d0aa] ul>li:not(:first-child){margin-top:1.25rem}.u-markdown[data-v-b683d0aa] ul:is(ul){list-style:none;padding:initial}.u-markdown[data-v-b683d0aa] ul:is(ul)>li{align-items:baseline;display:flex}.u-markdown[data-v-b683d0aa] ul:is(ul)>li:before{color:var(--pink);content:"/";flex-shrink:0;margin-right:10px}.u-markdown[data-v-b683d0aa] ol:is(ol) li::marker{color:var(--pink)}.u-markdown--centered[data-v-b683d0aa]{text-align:center}*+.u-markdown[data-v-b683d0aa] ol,*+.u-markdown[data-v-b683d0aa] ul{margin-bottom:1rem;margin-top:1rem}.u-markdown[data-v-b683d0aa] iframe,.u-markdown[data-v-b683d0aa] img,.u-markdown[data-v-b683d0aa] video{max-width:100%}.u-markdown[data-v-b683d0aa] *+h2,.u-markdown[data-v-b683d0aa] *+h3{margin-top:2.5rem}',""]),r.locals={},t.exports=r},464:function(t,e,n){"use strict";n(20),n(32),n(44),n(45),n(28);var r=n(15),o=n(18),l=(n(41),n(24),n(12),n(23),n(48),n(66),n(27),n(88));function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var c=["id","sys","metadata","image","url","file","navigateTo","navigationMenu","action","redirectTo"];e.a={computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(l.b)({kw:"keywordKw",channel:"keywordChannel",social:"keywordSocial"})),beforeMount:function(){this.processDynamicKeywords(this.fields,{kw:this.kw,channel:this.channel,social:this.social})},methods:{processDynamicKeywords:function(t,e){var n=e;function o(t,e,r){return n[e]?n[e]:r||""}function l(t,e){var n,o,d,f,m=Object(r.a)(t);if("object"!==m&&"function"!==m)return!1;if("[object Array]"!==Object.prototype.toString.call(e)){if("undefined"!==(m=Object(r.a)(e))&&null!==m)throw new TypeError("Expected attribute to be an array");e=[]}for(n in e.push(t),f=e.length-1,t)if(!c.includes(n)&&(o=t[n],"object"===(m=Object(r.a)(o))||"function"===m)){for(d=f;d>=0;d-=1)if(o===e[d])return!0;if(l(o,e))return!0}return e.pop(t),!1}!function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(l(e))return void console.warn("Circular structure detected. Abort. In module:",e.name,e);switch(Object(r.a)(e)){case"string":return void n((m=e,m.replace(/\$\$\$(kw|channel|social)\(?(((?!\().)+?(?=\)))?\)?/g,o)));case"object":if(null===e)return;if(Array.isArray(e))return void e.forEach((function(r,o){t(r,n=function(t){return e[o]=t})}));var d=function(r){if(c.includes(r))return 1;n=function(t){return e[r]=t},t(e[r],n)};for(var f in e)d(f);return;default:return}var m}(t)}}}},533:function(t,e,n){var content=n(587);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("1e170d6b",content,!0,{sourceMap:!1})},586:function(t,e,n){"use strict";n(533)},587:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,'.u-testimonial-card[data-v-23369f99]{grid-column-gap:24px;background-image:linear-gradient(90deg,var(--purple),var(--blue-vibrant));color:var(--text-color);-moz-column-gap:24px;column-gap:24px;display:grid;grid-template-areas:". logo logo logo logo ." ". quoted quoted quoted quoted ." ". text text text text .";grid-template-columns:repeat(6,1fr);grid-template-rows:auto auto auto auto;min-height:440px;padding-bottom:4rem;padding-top:4rem;position:relative}@media(min-width:36rem)and (max-width:63.9375rem){.u-testimonial-card[data-v-23369f99]{grid-template-areas:". . logo logo . ." ". . quoted quoted . ." ". text text text text ."}}@media(min-width:64rem){.u-testimonial-card[data-v-23369f99]{grid-column-gap:24px;-moz-column-gap:24px;column-gap:24px;display:grid;grid-template-areas:". . logo logo . text text text text text text ." ". . logo logo . text text text text text text ." ". . quoted quoted quoted text text text text text text ." ". . quoted quoted quoted text text text text text text .";grid-template-columns:repeat(12,1fr);grid-template-rows:auto auto auto auto}}.u-testimonial-card__logo[data-v-23369f99]{grid-area:logo;justify-self:center;margin-bottom:.6875rem}.u-testimonial-card__quoted[data-v-23369f99]{align-items:center;display:flex;gap:1.375rem;grid-area:quoted;justify-content:space-between}@media(max-width:63.9375rem){.u-testimonial-card__quoted[data-v-23369f99]{margin-top:40px}}.u-testimonial-card__author[data-v-23369f99]{flex-grow:1}.u-testimonial-card__name[data-v-23369f99]{font-weight:700}.u-testimonial-card__position[data-v-23369f99]{font-size:.75rem;line-height:1.375em}.u-testimonial-card__text[data-v-23369f99]{align-self:center;font-size:1.375rem;grid-area:text;line-height:1.18em}.u-testimonial-card__text[data-v-23369f99] p{margin-top:0}@media(max-width:63.9375rem){.u-testimonial-card__text[data-v-23369f99]{margin-top:60px}}',""]),r.locals={},t.exports=r},594:function(t,e,n){"use strict";n.r(e);var r=n(415),o=n(431),l=n(435),d=n(418),c=n(417),f={name:"TestimonialCard",components:{ContentfulImage:d.default,MarkdownText:o.default,BaseImage:r.default},mixins:[c.a],data:function(){return{imageSize:l.a.LARGE,companyLogoSize:l.a.SMALL}},computed:{image:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.image},quote:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.quote},author:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.author},position:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.position},companyLogo:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.companyLogo}}},m=(n(586),n(72)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("article",{staticClass:"u-testimonial-card cut-off-shape theme-colored"},[t.companyLogo?e("contentful-image",t._b({staticClass:"u-testimonial-card__logo",attrs:{width:"180",height:"180",lazy:"",fit:"PAD"}},"contentful-image",t.companyLogo,!1)):t._e(),t._v(" "),e("div",{staticClass:"u-testimonial-card__quoted"},[t.image?e("contentful-image",t._b({staticClass:"u-testimonial-card__avatar",attrs:{width:"80",height:"80",lazy:"",fit:"FILL"}},"contentful-image",t.image,!1)):t._e(),t._v(" "),e("div",{staticClass:"u-testimonial-card__author"},[e("div",{staticClass:"u-testimonial-card__name"},[t._v(t._s(t.author))]),t._v(" "),e("div",{staticClass:"u-testimonial-card__position"},[t._v(t._s(t.position))])])],1),t._v(" "),t.quote?e("markdown-text",{staticClass:"u-testimonial-card__text",attrs:{text:t.quote}}):t._e()],1)}),[],!1,null,"23369f99",null);e.default=component.exports;installComponents(component,{ContentfulImage:n(418).default})},738:function(t,e,n){var content=n(861);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("8ae0e774",content,!0,{sourceMap:!1})},860:function(t,e,n){"use strict";n(738)},861:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,".u-customer-quote__headline[data-v-3f7d45cb]{margin-bottom:1.25rem}@media(min-width:36rem){.u-customer-quote__headline[data-v-3f7d45cb]{margin-bottom:3.75rem;text-align:center}}@media(min-width:64rem){.u-customer-quote__headline[data-v-3f7d45cb]{margin-bottom:6.25rem}}",""]),r.locals={},t.exports=r},933:function(t,e,n){"use strict";n.r(e);var r=n(436),o=n(594),l=(n(438),n(464)),d={name:"CustomerQuote",components:{BaseHeadline:n(413).default,TestimonialCard:o.default},mixins:[r.a,l.a],computed:{headline:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.headline}}},c=(n(860),n(72)),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("section",{class:["u-content-type u-content-type--module u-customer-quote"]},[t.headline?e("base-headline",{staticClass:"u-customer-quote__headline",attrs:{tag:"h2",text:t.headline}},[t._v("\n    "+t._s(t.headline)+"\n  ")]):t._e(),t._v(" "),e("testimonial-card",t._b({staticClass:"u-customer-quote__testimonial"},"testimonial-card",t.data,!1))],1)}),[],!1,null,"3f7d45cb",null);e.default=component.exports;installComponents(component,{BaseHeadline:n(413).default})}}]);