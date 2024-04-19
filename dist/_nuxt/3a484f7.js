(window.webpackJsonp=window.webpackJsonp||[]).push([[108,17,18,28],{413:function(e,t,n){"use strict";n.r(t);n(41),n(23),n(66),n(422);var r={name:"BaseHeadline",props:{tag:{type:String,default:"h1",validate:function(e){return["h1","h2","h3","h4","h5","h6"].includes(e)}},center:{type:Boolean,default:!1},text:String},computed:{_text:function(){var e;return null===(e=this.text)||void 0===e||null===(e=e.replaceAll("[[",'<span class="u-base-headline--contrast">'))||void 0===e?void 0:e.replaceAll("]]","</span>")}}},l=(n(424),n(72)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return e.text?t(e.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":e.center}],domProps:{innerHTML:e._s(e._text)}}):t(e.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":e.center}]},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},415:function(e,t,n){"use strict";n.r(t);n(42),n(267);var r={name:"BaseImage",props:{src:{type:String,required:!0},alt:{type:String,required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},lazy:{type:Boolean,required:!1,default:!1},cover:{type:Boolean,required:!1,default:!1}}},l=(n(429),n(72)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("picture",e._g({class:["u-base-image",{"u-base-image--cover":e.cover}]},e.$listeners),[e._t("default"),e._v(" "),t("img",{style:"max-width: ".concat(e.width,"px; max-height: ").concat(e.height,"px"),attrs:{src:e.src,alt:e.alt,width:e.width,height:e.height,loading:!!e.lazy&&"lazy"}})],2)}),[],!1,null,"664399b8",null);t.default=component.exports},416:function(e,t,n){var content=n(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("6f83e24a",content,!0,{sourceMap:!1})},418:function(e,t,n){"use strict";n.r(t),n.d(t,"FitOptions",(function(){return c}));n(20),n(54),n(42),n(41),n(267),n(43);var r=n(415),l=n(435),o=n(417),c={PAD:"pad",FILL:"fill",SCALE:"scale"},d={name:"ContentfulImage",components:{BaseImage:r.default},mixins:[o.a],props:{url:String,title:String,size:{type:String,required:!1,default:l.a.DEFAULT},width:{type:[String,Number],required:!1,default:800},height:{type:[String,Number],required:!1,default:450},lazy:{type:Boolean,required:!1,default:!1},cover:{type:Boolean,required:!1,default:!1},fit:{type:String,required:!1,default:void 0}},computed:{asset:function(){return this.fields},isSvg:function(){var e;return null===(e=this.asset)||void 0===e||null===(e=e.file)||void 0===e||null===(e=e.url)||void 0===e?void 0:e.includes(".svg")},processedUrl:function(){var e,t="".concat(this.url||(null===(e=this.asset)||void 0===e||null===(e=e.file)||void 0===e?void 0:e.url),"?w=").concat(this.width,"&h=").concat(this.height);return this.fit&&(t+="&fit=".concat(this.fit)),t},processedAlt:function(){var e,t,n;return this.title||(null===(e=this.asset)||void 0===e?void 0:e.description)||(null===(t=this.asset)||void 0===t?void 0:t.title)||(null===(n=this.asset)||void 0===n||null===(n=n.file)||void 0===n?void 0:n.fileName)}}},f=(n(440),n(72)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("base-image",e._g({staticClass:"u-contentful-image",class:["u-contentful-image--".concat(e.size),{"u-contentful-image--svg":e.isSvg}],attrs:{src:e.processedUrl,alt:e.processedAlt,width:e.width,height:e.height,lazy:e.lazy,cover:e.cover}},e.$listeners),[e.isSvg?e._e():t("source",{attrs:{srcset:"".concat(e.processedUrl,"&fm=webp"),type:"image/webp"}})])}),[],!1,null,"48ea15a5",null);t.default=component.exports;installComponents(component,{BaseImage:n(415).default})},419:function(e,t,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("0b314dc2",content,!0,{sourceMap:!1})},422:function(e,t,n){"use strict";n(423)},423:function(e,t,n){"use strict";var r=n(2),l=n(10),o=n(4),c=n(29),d=n(7),f=n(47),v=n(178),h=n(13),m=n(67),_=n(177),y=n(268),x=n(8),w=n(25),O=x("replace"),j=TypeError,k=o("".indexOf),S=o("".replace),A=o("".slice),C=Math.max;r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,o,x,P,B,M,D,E,L=c(this),I=0,z=0,T="";if(!f(e)){if((n=v(e))&&(r=h(c(_(e))),!~k(r,"g")))throw new j("`.replaceAll` does not allow non-global regexes");if(o=m(e,O))return l(o,e,L,t);if(w&&n)return S(h(L),e,t)}for(x=h(L),P=h(e),(B=d(t))||(t=h(t)),M=P.length,D=C(1,M),I=k(x,P);-1!==I;)E=B?h(t(P,I,x)):y(P,x,I,[],void 0,t),T+=A(x,z,I)+E,z=I+M,I=I+D>x.length?-1:k(x,P,I+D);return z<x.length&&(T+=A(x,z)),T}})},424:function(e,t,n){"use strict";n(416)},425:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-base-headline--centered{text-align:center}.u-base-headline--centered:before{margin-left:auto;margin-right:auto}.u-base-headline>.u-base-headline--contrast{-webkit-text-fill-color:transparent;background:var(--headline-contrast);-webkit-background-clip:text}@media(min-width:36rem){h2.u-base-headline--centered{margin-left:auto;margin-right:auto;max-width:66%}}@media(min-width:1440px){h2.u-base-headline--centered{max-width:792px}}",""]),r.locals={},e.exports=r},428:function(e,t,n){var content=n(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("7f0509d6",content,!0,{sourceMap:!1})},429:function(e,t,n){"use strict";n(419)},430:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-base-image[data-v-664399b8]{display:block}.u-base-image img[data-v-664399b8]{display:block;margin:0 auto}.u-base-image:not(.u-base-image--svg) img[data-v-664399b8]{height:auto;-o-object-fit:contain;object-fit:contain;width:100%}.u-base-image.u-base-image--cover img[data-v-664399b8]{max-width:none!important;-o-object-fit:cover;object-fit:cover}",""]),r.locals={},e.exports=r},435:function(e,t,n){"use strict";t.a={DEFAULT:"default",SMALL:"small",MEDIUM:"medium",LARGE:"large",X_LARGE:"xl"}},436:function(e,t,n){"use strict";t.a={props:{fields:Object,metadata:Object,sys:Object,contentType:String},computed:{data:function(){return{fields:this.fields,metadata:this.metadata,sys:this.sys}}}}},438:function(e,t,n){"use strict";n(42),n(41),n(43),n(427);var r="white",l="blue",o="dark-blue",c="blue-to-blue-vibrant-darken",d="blue-vibrant-to-purple",f="blue-dark-to-blue-darkest",v="horizontal",h="none";t.a={computed:{colors:function(){var e,t=(null===(e=this.fields)||void 0===e||null===(e=e.designOptions)||void 0===e||null===(e=e.fields)||void 0===e?void 0:e.background)||r;return t.includes("to")?t.split("-to-"):[t,t]},background:function(){var e,t,n=(null===(e=this.fields)||void 0===e||null===(e=e.designOptions)||void 0===e||null===(e=e.fields)||void 0===e?void 0:e.background)||r,l=(null===(t=this.fields)||void 0===t||null===(t=t.designOptions)||void 0===t||null===(t=t.fields)||void 0===t?void 0:t.backgroundDirection)||v;return"".concat(n).concat(n.includes("to")?"-".concat(l):"").trim()},diverShape:function(){var e,t=null===(e=this.fields)||void 0===e||null===(e=e.designOptions)||void 0===e||null===(e=e.fields)||void 0===e?void 0:e.diverShape;return t===h?void 0:t},spiderweb:function(){var e,t=null===(e=this.fields)||void 0===e||null===(e=e.designOptions)||void 0===e||null===(e=e.fields)||void 0===e?void 0:e.spiderweb;return t===h?void 0:t},theme:function(){var e;switch((null===(e=this.fields)||void 0===e||null===(e=e.designOptions)||void 0===e||null===(e=e.fields)||void 0===e?void 0:e.background)||r){case l:case o:case c:case f:return"theme-dark";case d:return"theme-colored";default:return"theme-light"}},backgroundStyles:function(){return{background:"var(--".concat(this.background,", #fff)"),"--color-left":"var(--".concat(this.colors[0],")"),"--color-right":"var(--".concat(this.colors[1],")")}},backgroundAttributes:function(){return{"data-diver-shape":this.diverShape,"data-spiderweb":this.spiderweb}}}}},440:function(e,t,n){"use strict";n(428)},441:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-contentful-image--small[data-v-48ea15a5] img{max-height:4rem!important}.u-contentful-image--medium[data-v-48ea15a5] img{max-height:8rem!important}.u-contentful-image--large[data-v-48ea15a5] img{max-height:16rem!important}.u-contentful-image--xl[data-v-48ea15a5] img{max-height:32rem!important}",""]),r.locals={},e.exports=r},452:function(e,t,n){var content=n(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("2dac5afb",content,!0,{sourceMap:!1})},463:function(e,t,n){"use strict";n.r(t);var r={name:"BaseSurline",props:{center:{type:Boolean,default:!1}}},l=(n(468),n(72)),component=Object(l.a)(r,(function(){var e=this;return(0,e._self._c)("div",{class:["u-base-surline",{"u-base-surline--centered":e.center}]},[e._t("default")],2)}),[],!1,null,"6868c2fd",null);t.default=component.exports},464:function(e,t,n){"use strict";n(20),n(32),n(44),n(45),n(28);var r=n(15),l=n(18),o=(n(41),n(24),n(12),n(23),n(48),n(66),n(27),n(88));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=["id","sys","metadata","image","url","file","navigateTo","navigationMenu","action","redirectTo"];t.a={computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(o.b)({kw:"keywordKw",channel:"keywordChannel",social:"keywordSocial"})),beforeMount:function(){this.processDynamicKeywords(this.fields,{kw:this.kw,channel:this.channel,social:this.social})},methods:{processDynamicKeywords:function(e,t){var n=t;function l(e,t,r){return n[t]?n[t]:r||""}function o(e,t){var n,l,c,f,v=Object(r.a)(e);if("object"!==v&&"function"!==v)return!1;if("[object Array]"!==Object.prototype.toString.call(t)){if("undefined"!==(v=Object(r.a)(t))&&null!==v)throw new TypeError("Expected attribute to be an array");t=[]}for(n in t.push(e),f=t.length-1,e)if(!d.includes(n)&&(l=e[n],"object"===(v=Object(r.a)(l))||"function"===v)){for(c=f;c>=0;c-=1)if(l===t[c])return!0;if(o(l,t))return!0}return t.pop(e),!1}!function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(o(t))return void console.warn("Circular structure detected. Abort. In module:",t.name,t);switch(Object(r.a)(t)){case"string":return void n((v=t,v.replace(/\$\$\$(kw|channel|social)\(?(((?!\().)+?(?=\)))?\)?/g,l)));case"object":if(null===t)return;if(Array.isArray(t))return void t.forEach((function(r,l){e(r,n=function(e){return t[l]=e})}));var c=function(r){if(d.includes(r))return 1;n=function(e){return t[r]=e},e(t[r],n)};for(var f in t)c(f);return;default:return}var v}(e)}}}},468:function(e,t,n){"use strict";n(452)},469:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,"",""]),r.locals={},e.exports=r},753:function(e,t,n){var content=n(891);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("3fe19820",content,!0,{sourceMap:!1})},890:function(e,t,n){"use strict";n(753)},891:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,'.u-split-banner header[data-v-62d3e34a]{margin-top:2rem}.u-split-banner__text[data-v-62d3e34a]{line-height:1.5;margin-bottom:0}.u-split-banner__actions[data-v-62d3e34a]{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;margin-top:2rem}.u-split-banner__partner-headline[data-v-62d3e34a]{display:block;font-family:"Good Headline Pro",sans-serif;font-size:1.5625rem;margin-top:3rem;text-align:center}.u-split-banner__partners[data-v-62d3e34a]{display:flex;flex-wrap:wrap;gap:1.25rem;justify-content:center;margin-top:1.5rem}@media(min-width:64rem){.u-split-banner__body[data-v-62d3e34a]{grid-column-gap:2rem;-moz-column-gap:2rem;column-gap:2rem;display:grid;grid-template-areas:"head head head head head head image image image image image image" "text text text text text text image image image image image image" "actions actions actions actions actions actions image image image image image image" "partner-headline partner-headline partner-headline partner-headline partner-headline partner-headline image image image image image image" "logos logos logos logos logos logos logos logos . . . .";grid-template-columns:repeat(12,1fr)}.u-split-banner header[data-v-62d3e34a]{grid-area:head;margin-top:2.5rem}.u-split-banner__text[data-v-62d3e34a]{grid-area:text}.u-split-banner__actions[data-v-62d3e34a]{align-items:center;grid-area:actions;justify-content:normal;margin-top:3rem}.u-split-banner__image[data-v-62d3e34a]{grid-area:image;justify-self:center}.u-split-banner__partner-headline[data-v-62d3e34a]{display:inline;display:initial;font-family:"Good Headline Pro",sans-serif;grid-area:partner-headline;margin-top:5rem;text-align:left;text-align:initial}.u-split-banner__partners[data-v-62d3e34a]{gap:1.5rem;grid-area:logos;justify-content:normal;margin-top:1.5rem}.u-split-banner__partner[data-v-62d3e34a]{height:64px;width:96px}}',""]),r.locals={},e.exports=r},946:function(e,t,n){"use strict";n.r(t);n(20),n(32),n(44),n(45),n(28),n(12),n(27);var r=n(18),l=(n(37),n(436)),o=n(464),c=n(418),d=n(645),f=n(414),v=n(413),h=n(463),m=n(439),_=n(438);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var x={name:"SplitBanner",components:{BaseCta:m.default,BaseSurline:h.default,BaseHeadline:v.default,BaseLink:f.default,NavigationButton:d.default,ContentfulImage:c.default},mixins:[l.a,o.a,_.a],computed:{headline:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.headline},text:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.subline},surline:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.surline},foregroundImage:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.foregroundImage},action:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.action},actionType:function(){var e;return null===(e=this.fields)||void 0===e||null===(e=e.action)||void 0===e||null===(e=e.sys)||void 0===e||null===(e=e.contentType)||void 0===e||null===(e=e.sys)||void 0===e?void 0:e.id},linkAction:function(){var e,t,n,r=null===(e=this.fields)||void 0===e?void 0:e.linkAction;return r?{url:null===(t=r.fields)||void 0===t?void 0:t.url,label:null===(n=r.fields)||void 0===n?void 0:n.label}:void 0},partnerHeadline:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.partnerHeadline},partnerLogos:function(){var e;return null===(e=this.fields)||void 0===e||null===(e=e.partnerLogos)||void 0===e?void 0:e.map((function(i){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({title:i.fields.title},i.fields.file)}))}}},w=x,O=(n(890),n(72)),component=Object(O.a)(w,(function(){var e=this,t=e._self._c;return t("section",e._b({class:["u-content-type","u-content-type--banner","u-page-banner","u-split-banner","diver-shape",e.theme],style:e.backgroundStyles},"section",e.backgroundAttributes,!1),[t("div",{staticClass:"u-split-banner__body"},[t("header",[e.surline?t("base-surline",{staticClass:"u-split-banner__surline"},[e._v("\n        "+e._s(e.surline)+"\n      ")]):e._e(),e._v(" "),e.headline?t("base-headline",{staticClass:"u-split-banner__headline",attrs:{tag:"h1",text:e.headline}},[e._v("\n        "+e._s(e.headline)+"\n      ")]):e._e()],1),e._v(" "),e.text?t("p",{staticClass:"u-split-banner__text"},[e._v("\n      "+e._s(e.text)+"\n    ")]):e._e(),e._v(" "),t("div",{staticClass:"u-split-banner__actions"},[e.action?t(e.actionType,e._b({tag:"component",staticClass:"u-split-banner__action"},"component",e.action,!1)):e._e(),e._v(" "),e.linkAction?t("base-cta",{attrs:{url:e.linkAction.url,external:"",tertiary:""}},[e._v("\n        "+e._s(e.linkAction.label)+"\n      ")]):e._e()],1),e._v(" "),e.foregroundImage?t("contentful-image",e._b({staticClass:"u-split-banner__image",attrs:{height:"600",width:"600",fit:"PAD"}},"contentful-image",e.foregroundImage,!1)):e._e(),e._v(" "),t("label",{staticClass:"u-split-banner__partner-headline"},[e._v(e._s(e.partnerHeadline))]),e._v(" "),t("div",{staticClass:"u-split-banner__partners"},e._l(e.partnerLogos,(function(e,n){return t("img",{key:"banner_partner_".concat(n),staticClass:"u-split-banner__partner",attrs:{src:e.url,alt:e.title,width:"82px",height:"54px"}})})),0)],1)])}),[],!1,null,"62d3e34a",null);t.default=component.exports;installComponents(component,{BaseSurline:n(463).default,BaseHeadline:n(413).default,BaseCta:n(439).default,ContentfulImage:n(418).default})}}]);