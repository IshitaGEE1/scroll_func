(window.webpackJsonp=window.webpackJsonp||[]).push([[106,17,18,27,35,48],{413:function(e,t,n){"use strict";n.r(t);n(41),n(23),n(66),n(422);var r={name:"BaseHeadline",props:{tag:{type:String,default:"h1",validate:function(e){return["h1","h2","h3","h4","h5","h6"].includes(e)}},center:{type:Boolean,default:!1},text:String},computed:{_text:function(){var e;return null===(e=this.text)||void 0===e||null===(e=e.replaceAll("[[",'<span class="u-base-headline--contrast">'))||void 0===e?void 0:e.replaceAll("]]","</span>")}}},l=(n(424),n(72)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return e.text?t(e.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":e.center}],domProps:{innerHTML:e._s(e._text)}}):t(e.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":e.center}]},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},415:function(e,t,n){"use strict";n.r(t);n(42),n(267);var r={name:"BaseImage",props:{src:{type:String,required:!0},alt:{type:String,required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},lazy:{type:Boolean,required:!1,default:!1},cover:{type:Boolean,required:!1,default:!1}}},l=(n(429),n(72)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("picture",e._g({class:["u-base-image",{"u-base-image--cover":e.cover}]},e.$listeners),[e._t("default"),e._v(" "),t("img",{style:"max-width: ".concat(e.width,"px; max-height: ").concat(e.height,"px"),attrs:{src:e.src,alt:e.alt,width:e.width,height:e.height,loading:!!e.lazy&&"lazy"}})],2)}),[],!1,null,"664399b8",null);t.default=component.exports},416:function(e,t,n){var content=n(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("6f83e24a",content,!0,{sourceMap:!1})},417:function(e,t,n){"use strict";t.a={props:{fields:Object,metadata:Object,sys:Object}}},418:function(e,t,n){"use strict";n.r(t),n.d(t,"FitOptions",(function(){return c}));n(20),n(54),n(42),n(41),n(267),n(43);var r=n(415),l=n(435),o=n(417),c={PAD:"pad",FILL:"fill",SCALE:"scale"},d={name:"ContentfulImage",components:{BaseImage:r.default},mixins:[o.a],props:{url:String,title:String,size:{type:String,required:!1,default:l.a.DEFAULT},width:{type:[String,Number],required:!1,default:800},height:{type:[String,Number],required:!1,default:450},lazy:{type:Boolean,required:!1,default:!1},cover:{type:Boolean,required:!1,default:!1},fit:{type:String,required:!1,default:void 0}},computed:{asset:function(){return this.fields},isSvg:function(){var e;return null===(e=this.asset)||void 0===e||null===(e=e.file)||void 0===e||null===(e=e.url)||void 0===e?void 0:e.includes(".svg")},processedUrl:function(){var e,t="".concat(this.url||(null===(e=this.asset)||void 0===e||null===(e=e.file)||void 0===e?void 0:e.url),"?w=").concat(this.width,"&h=").concat(this.height);return this.fit&&(t+="&fit=".concat(this.fit)),t},processedAlt:function(){var e,t,n;return this.title||(null===(e=this.asset)||void 0===e?void 0:e.description)||(null===(t=this.asset)||void 0===t?void 0:t.title)||(null===(n=this.asset)||void 0===n||null===(n=n.file)||void 0===n?void 0:n.fileName)}}},f=(n(440),n(72)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("base-image",e._g({staticClass:"u-contentful-image",class:["u-contentful-image--".concat(e.size),{"u-contentful-image--svg":e.isSvg}],attrs:{src:e.processedUrl,alt:e.processedAlt,width:e.width,height:e.height,lazy:e.lazy,cover:e.cover}},e.$listeners),[e.isSvg?e._e():t("source",{attrs:{srcset:"".concat(e.processedUrl,"&fm=webp"),type:"image/webp"}})])}),[],!1,null,"48ea15a5",null);t.default=component.exports;installComponents(component,{BaseImage:n(415).default})},419:function(e,t,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("0b314dc2",content,!0,{sourceMap:!1})},422:function(e,t,n){"use strict";n(423)},423:function(e,t,n){"use strict";var r=n(2),l=n(10),o=n(4),c=n(29),d=n(7),f=n(47),h=n(178),m=n(13),v=n(67),y=n(177),w=n(268),_=n(8),x=n(25),j=_("replace"),O=TypeError,S=o("".indexOf),k=o("".replace),B=o("".slice),A=Math.max;r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,o,_,M,C,E,P,D,I=c(this),L=0,z=0,H="";if(!f(e)){if((n=h(e))&&(r=m(c(y(e))),!~S(r,"g")))throw new O("`.replaceAll` does not allow non-global regexes");if(o=v(e,j))return l(o,e,I,t);if(x&&n)return k(m(I),e,t)}for(_=m(I),M=m(e),(C=d(t))||(t=m(t)),E=M.length,P=A(1,E),L=S(_,M);-1!==L;)D=C?m(t(M,L,_)):w(M,_,L,[],void 0,t),H+=B(_,z,L)+D,z=L+E,L=L+P>_.length?-1:S(_,M,L+P);return z<_.length&&(H+=B(_,z)),H}})},424:function(e,t,n){"use strict";n(416)},425:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-base-headline--centered{text-align:center}.u-base-headline--centered:before{margin-left:auto;margin-right:auto}.u-base-headline>.u-base-headline--contrast{-webkit-text-fill-color:transparent;background:var(--headline-contrast);-webkit-background-clip:text}@media(min-width:36rem){h2.u-base-headline--centered{margin-left:auto;margin-right:auto;max-width:66%}}@media(min-width:1440px){h2.u-base-headline--centered{max-width:792px}}",""]),r.locals={},e.exports=r},428:function(e,t,n){var content=n(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("7f0509d6",content,!0,{sourceMap:!1})},429:function(e,t,n){"use strict";n(419)},430:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-base-image[data-v-664399b8]{display:block}.u-base-image img[data-v-664399b8]{display:block;margin:0 auto}.u-base-image:not(.u-base-image--svg) img[data-v-664399b8]{height:auto;-o-object-fit:contain;object-fit:contain;width:100%}.u-base-image.u-base-image--cover img[data-v-664399b8]{max-width:none!important;-o-object-fit:cover;object-fit:cover}",""]),r.locals={},e.exports=r},435:function(e,t,n){"use strict";t.a={DEFAULT:"default",SMALL:"small",MEDIUM:"medium",LARGE:"large",X_LARGE:"xl"}},436:function(e,t,n){"use strict";t.a={props:{fields:Object,metadata:Object,sys:Object,contentType:String},computed:{data:function(){return{fields:this.fields,metadata:this.metadata,sys:this.sys}}}}},440:function(e,t,n){"use strict";n(428)},441:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-contentful-image--small[data-v-48ea15a5] img{max-height:4rem!important}.u-contentful-image--medium[data-v-48ea15a5] img{max-height:8rem!important}.u-contentful-image--large[data-v-48ea15a5] img{max-height:16rem!important}.u-contentful-image--xl[data-v-48ea15a5] img{max-height:32rem!important}",""]),r.locals={},e.exports=r},444:function(e,t,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("680bfa48",content,!0,{sourceMap:!1})},445:function(e,t,n){"use strict";n.r(t);var r={name:"BaseSubline",props:{center:{type:Boolean,default:!1}}},l=(n(461),n(72)),component=Object(l.a)(r,(function(){var e=this;return(0,e._self._c)("div",{class:["u-base-subline",{"u-base-subline--centered":e.center}]},[e._t("default")],2)}),[],!1,null,"15c3f98c",null);t.default=component.exports},461:function(e,t,n){"use strict";n(444)},462:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-base-subline[data-v-15c3f98c]{color:var(--subline-color);font-size:1.25rem;font-weight:700;letter-spacing:.005em;line-height:1.3;margin-bottom:1.5rem}.u-base-subline--centered[data-v-15c3f98c]{text-align:center}",""]),r.locals={},e.exports=r},464:function(e,t,n){"use strict";n(20),n(32),n(44),n(45),n(28);var r=n(15),l=n(18),o=(n(41),n(24),n(12),n(23),n(48),n(66),n(27),n(88));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=["id","sys","metadata","image","url","file","navigateTo","navigationMenu","action","redirectTo"];t.a={computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(o.b)({kw:"keywordKw",channel:"keywordChannel",social:"keywordSocial"})),beforeMount:function(){this.processDynamicKeywords(this.fields,{kw:this.kw,channel:this.channel,social:this.social})},methods:{processDynamicKeywords:function(e,t){var n=t;function l(e,t,r){return n[t]?n[t]:r||""}function o(e,t){var n,l,c,f,h=Object(r.a)(e);if("object"!==h&&"function"!==h)return!1;if("[object Array]"!==Object.prototype.toString.call(t)){if("undefined"!==(h=Object(r.a)(t))&&null!==h)throw new TypeError("Expected attribute to be an array");t=[]}for(n in t.push(e),f=t.length-1,e)if(!d.includes(n)&&(l=e[n],"object"===(h=Object(r.a)(l))||"function"===h)){for(c=f;c>=0;c-=1)if(l===t[c])return!0;if(o(l,t))return!0}return t.pop(e),!1}!function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(o(t))return void console.warn("Circular structure detected. Abort. In module:",t.name,t);switch(Object(r.a)(t)){case"string":return void n((h=t,h.replace(/\$\$\$(kw|channel|social)\(?(((?!\().)+?(?=\)))?\)?/g,l)));case"object":if(null===t)return;if(Array.isArray(t))return void t.forEach((function(r,l){e(r,n=function(e){return t[l]=e})}));var c=function(r){if(d.includes(r))return 1;n=function(e){return t[r]=e},e(t[r],n)};for(var f in t)c(f);return;default:return}var h}(e)}}}},751:function(e,t,n){var content=n(887);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("52e8a1d8",content,!0,{sourceMap:!1})},886:function(e,t,n){"use strict";n(751)},887:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-simple-page-banner__image-wrapper[data-v-371dc4f6]{margin-top:3rem}",""]),r.locals={},e.exports=r},945:function(e,t,n){"use strict";n.r(t);var r=n(415),l=n(436),o=n(418),c=n(464),d=n(413),f={name:"SimplePageBanner",components:{BaseSubline:n(445).default,BaseHeadline:d.default,ContentfulImage:o.default,BaseImage:r.default},mixins:[l.a,c.a],computed:{image:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.image},headline:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.headline},subHeadline:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.subHeadline},disableBackground:function(){var e;return(null===(e=this.fields)||void 0===e?void 0:e.disableBackground)||!1}}},h=(n(886),n(72)),component=Object(h.a)(f,(function(){var e=this,t=e._self._c;return t("section",{class:["u-content-type","u-content-type--banner","u-page-banner","u-simple-page-banner"],style:e.disableBackground?void 0:"background: var(--page-banner);"},[t("div",{staticClass:"u-simple-page-banner__body"},[e.headline?t("base-headline",{staticClass:"u-simple-page-banner__headline",attrs:{tag:"h1",center:"",text:e.headline}},[e._v("\n      "+e._s(e.headline)+"\n    ")]):e._e(),e._v(" "),e.subHeadline?t("base-subline",{staticClass:"u-simple-page-banner__sub-headline",attrs:{center:""}},[e._v("\n      "+e._s(e.subHeadline)+"\n    ")]):e._e(),e._v(" "),e.image?t("contentful-image",e._b({staticClass:"u-simple-page-banner__image-wrapper",attrs:{width:"1200",height:"675"}},"contentful-image",e.image,!1)):e._e()],1)])}),[],!1,null,"371dc4f6",null);t.default=component.exports;installComponents(component,{BaseHeadline:n(413).default,BaseSubline:n(445).default,ContentfulImage:n(418).default})}}]);