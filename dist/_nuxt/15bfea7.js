(window.webpackJsonp=window.webpackJsonp||[]).push([[35,18,48],{415:function(t,e,r){"use strict";r.r(e);r(42),r(267);var n={name:"BaseImage",props:{src:{type:String,required:!0},alt:{type:String,required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},lazy:{type:Boolean,required:!1,default:!1},cover:{type:Boolean,required:!1,default:!1}}},l=(r(429),r(72)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("picture",t._g({class:["u-base-image",{"u-base-image--cover":t.cover}]},t.$listeners),[t._t("default"),t._v(" "),e("img",{style:"max-width: ".concat(t.width,"px; max-height: ").concat(t.height,"px"),attrs:{src:t.src,alt:t.alt,width:t.width,height:t.height,loading:!!t.lazy&&"lazy"}})],2)}),[],!1,null,"664399b8",null);e.default=component.exports},417:function(t,e,r){"use strict";e.a={props:{fields:Object,metadata:Object,sys:Object}}},418:function(t,e,r){"use strict";r.r(e),r.d(e,"FitOptions",(function(){return c}));r(20),r(54),r(42),r(41),r(267),r(43);var n=r(415),l=r(435),o=r(417),c={PAD:"pad",FILL:"fill",SCALE:"scale"},d={name:"ContentfulImage",components:{BaseImage:n.default},mixins:[o.a],props:{url:String,title:String,size:{type:String,required:!1,default:l.a.DEFAULT},width:{type:[String,Number],required:!1,default:800},height:{type:[String,Number],required:!1,default:450},lazy:{type:Boolean,required:!1,default:!1},cover:{type:Boolean,required:!1,default:!1},fit:{type:String,required:!1,default:void 0}},computed:{asset:function(){return this.fields},isSvg:function(){var t;return null===(t=this.asset)||void 0===t||null===(t=t.file)||void 0===t||null===(t=t.url)||void 0===t?void 0:t.includes(".svg")},processedUrl:function(){var t,e="".concat(this.url||(null===(t=this.asset)||void 0===t||null===(t=t.file)||void 0===t?void 0:t.url),"?w=").concat(this.width,"&h=").concat(this.height);return this.fit&&(e+="&fit=".concat(this.fit)),e},processedAlt:function(){var t,e,r;return this.title||(null===(t=this.asset)||void 0===t?void 0:t.description)||(null===(e=this.asset)||void 0===e?void 0:e.title)||(null===(r=this.asset)||void 0===r||null===(r=r.file)||void 0===r?void 0:r.fileName)}}},f=(r(440),r(72)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("base-image",t._g({staticClass:"u-contentful-image",class:["u-contentful-image--".concat(t.size),{"u-contentful-image--svg":t.isSvg}],attrs:{src:t.processedUrl,alt:t.processedAlt,width:t.width,height:t.height,lazy:t.lazy,cover:t.cover}},t.$listeners),[t.isSvg?t._e():e("source",{attrs:{srcset:"".concat(t.processedUrl,"&fm=webp"),type:"image/webp"}})])}),[],!1,null,"48ea15a5",null);e.default=component.exports;installComponents(component,{BaseImage:r(415).default})},419:function(t,e,r){var content=r(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(87).default)("0b314dc2",content,!0,{sourceMap:!1})},428:function(t,e,r){var content=r(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(87).default)("7f0509d6",content,!0,{sourceMap:!1})},429:function(t,e,r){"use strict";r(419)},430:function(t,e,r){var n=r(86)((function(i){return i[1]}));n.push([t.i,".u-base-image[data-v-664399b8]{display:block}.u-base-image img[data-v-664399b8]{display:block;margin:0 auto}.u-base-image:not(.u-base-image--svg) img[data-v-664399b8]{height:auto;-o-object-fit:contain;object-fit:contain;width:100%}.u-base-image.u-base-image--cover img[data-v-664399b8]{max-width:none!important;-o-object-fit:cover;object-fit:cover}",""]),n.locals={},t.exports=n},435:function(t,e,r){"use strict";e.a={DEFAULT:"default",SMALL:"small",MEDIUM:"medium",LARGE:"large",X_LARGE:"xl"}},440:function(t,e,r){"use strict";r(428)},441:function(t,e,r){var n=r(86)((function(i){return i[1]}));n.push([t.i,".u-contentful-image--small[data-v-48ea15a5] img{max-height:4rem!important}.u-contentful-image--medium[data-v-48ea15a5] img{max-height:8rem!important}.u-contentful-image--large[data-v-48ea15a5] img{max-height:16rem!important}.u-contentful-image--xl[data-v-48ea15a5] img{max-height:32rem!important}",""]),n.locals={},t.exports=n}}]);