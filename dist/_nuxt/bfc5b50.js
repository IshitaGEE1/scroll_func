(window.webpackJsonp=window.webpackJsonp||[]).push([[105,13,14,17,18,32],{413:function(t,e,n){"use strict";n.r(e);n(41),n(23),n(66),n(422);var r={name:"BaseHeadline",props:{tag:{type:String,default:"h1",validate:function(t){return["h1","h2","h3","h4","h5","h6"].includes(t)}},center:{type:Boolean,default:!1},text:String},computed:{_text:function(){var t;return null===(t=this.text)||void 0===t||null===(t=t.replaceAll("[[",'<span class="u-base-headline--contrast">'))||void 0===t?void 0:t.replaceAll("]]","</span>")}}},o=(n(424),n(72)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.text?e(t.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":t.center}],domProps:{innerHTML:t._s(t._text)}}):e(t.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":t.center}]},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},415:function(t,e,n){"use strict";n.r(e);n(42),n(267);var r={name:"BaseImage",props:{src:{type:String,required:!0},alt:{type:String,required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},lazy:{type:Boolean,required:!1,default:!1},cover:{type:Boolean,required:!1,default:!1}}},o=(n(429),n(72)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("picture",t._g({class:["u-base-image",{"u-base-image--cover":t.cover}]},t.$listeners),[t._t("default"),t._v(" "),e("img",{style:"max-width: ".concat(t.width,"px; max-height: ").concat(t.height,"px"),attrs:{src:t.src,alt:t.alt,width:t.width,height:t.height,loading:!!t.lazy&&"lazy"}})],2)}),[],!1,null,"664399b8",null);e.default=component.exports},416:function(t,e,n){var content=n(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("6f83e24a",content,!0,{sourceMap:!1})},419:function(t,e,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("0b314dc2",content,!0,{sourceMap:!1})},422:function(t,e,n){"use strict";n(423)},423:function(t,e,n){"use strict";var r=n(2),o=n(10),l=n(4),c=n(29),d=n(7),f=n(47),v=n(178),h=n(13),m=n(67),_=n(177),y=n(268),O=n(8),w=n(25),x=O("replace"),j=TypeError,k=l("".indexOf),C=l("".replace),P=l("".slice),S=Math.max;r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,l,O,B,M,D,A,E,z=c(this),H=0,I=0,R="";if(!f(t)){if((n=v(t))&&(r=h(c(_(t))),!~k(r,"g")))throw new j("`.replaceAll` does not allow non-global regexes");if(l=m(t,x))return o(l,t,z,e);if(w&&n)return C(h(z),t,e)}for(O=h(z),B=h(t),(M=d(e))||(e=h(e)),D=B.length,A=S(1,D),H=k(O,B);-1!==H;)E=M?h(e(B,H,O)):y(B,O,H,[],void 0,e),R+=P(O,I,H)+E,I=H+D,H=H+A>O.length?-1:k(O,B,H+A);return I<O.length&&(R+=P(O,I)),R}})},424:function(t,e,n){"use strict";n(416)},425:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,".u-base-headline--centered{text-align:center}.u-base-headline--centered:before{margin-left:auto;margin-right:auto}.u-base-headline>.u-base-headline--contrast{-webkit-text-fill-color:transparent;background:var(--headline-contrast);-webkit-background-clip:text}@media(min-width:36rem){h2.u-base-headline--centered{margin-left:auto;margin-right:auto;max-width:66%}}@media(min-width:1440px){h2.u-base-headline--centered{max-width:792px}}",""]),r.locals={},t.exports=r},427:function(t,e,n){"use strict";var r=n(2),o=n(269).trim;r({target:"String",proto:!0,forced:n(437)("trim")},{trim:function(){return o(this)}})},429:function(t,e,n){"use strict";n(419)},430:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,".u-base-image[data-v-664399b8]{display:block}.u-base-image img[data-v-664399b8]{display:block;margin:0 auto}.u-base-image:not(.u-base-image--svg) img[data-v-664399b8]{height:auto;-o-object-fit:contain;object-fit:contain;width:100%}.u-base-image.u-base-image--cover img[data-v-664399b8]{max-width:none!important;-o-object-fit:cover;object-fit:cover}",""]),r.locals={},t.exports=r},436:function(t,e,n){"use strict";e.a={props:{fields:Object,metadata:Object,sys:Object,contentType:String},computed:{data:function(){return{fields:this.fields,metadata:this.metadata,sys:this.sys}}}}},437:function(t,e,n){"use strict";var r=n(109).PROPER,o=n(3),l=n(270);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||r&&l[t].name!==t}))}},438:function(t,e,n){"use strict";n(42),n(41),n(43),n(427);var r="white",o="blue",l="dark-blue",c="blue-to-blue-vibrant-darken",d="blue-vibrant-to-purple",f="blue-dark-to-blue-darkest",v="horizontal",h="none";e.a={computed:{colors:function(){var t,e=(null===(t=this.fields)||void 0===t||null===(t=t.designOptions)||void 0===t||null===(t=t.fields)||void 0===t?void 0:t.background)||r;return e.includes("to")?e.split("-to-"):[e,e]},background:function(){var t,e,n=(null===(t=this.fields)||void 0===t||null===(t=t.designOptions)||void 0===t||null===(t=t.fields)||void 0===t?void 0:t.background)||r,o=(null===(e=this.fields)||void 0===e||null===(e=e.designOptions)||void 0===e||null===(e=e.fields)||void 0===e?void 0:e.backgroundDirection)||v;return"".concat(n).concat(n.includes("to")?"-".concat(o):"").trim()},diverShape:function(){var t,e=null===(t=this.fields)||void 0===t||null===(t=t.designOptions)||void 0===t||null===(t=t.fields)||void 0===t?void 0:t.diverShape;return e===h?void 0:e},spiderweb:function(){var t,e=null===(t=this.fields)||void 0===t||null===(t=t.designOptions)||void 0===t||null===(t=t.fields)||void 0===t?void 0:t.spiderweb;return e===h?void 0:e},theme:function(){var t;switch((null===(t=this.fields)||void 0===t||null===(t=t.designOptions)||void 0===t||null===(t=t.fields)||void 0===t?void 0:t.background)||r){case o:case l:case c:case f:return"theme-dark";case d:return"theme-colored";default:return"theme-light"}},backgroundStyles:function(){return{background:"var(--".concat(this.background,", #fff)"),"--color-left":"var(--".concat(this.colors[0],")"),"--color-right":"var(--".concat(this.colors[1],")")}},backgroundAttributes:function(){return{"data-diver-shape":this.diverShape,"data-spiderweb":this.spiderweb}}}}},456:function(t,e,n){"use strict";n.r(e);var r={name:"ContentModule",mixins:[n(438).a],props:{fields:Object,metadata:Object,sys:Object}},o=(n(476),n(72)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("section",t._b({class:["u-content-module",t.theme],style:t.backgroundStyles},"section",t.backgroundAttributes,!1),[t._t("head"),t._v(" "),e("div",{staticClass:"u-content-module__body"},[t._t("default")],2),t._v(" "),t._t("footer")],2)}),[],!1,null,null,null);e.default=component.exports},460:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("643bf3f8",content,!0,{sourceMap:!1})},476:function(t,e,n){"use strict";n(460)},477:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,".u-content-module{padding-bottom:var(--module-padding-bottom);padding-top:var(--module-padding-top)}.u-content-module__body,.u-content-module__footer,.u-content-module__header{margin-left:auto;margin-right:auto;width:83.3333333333vw}@media(min-width:36rem)and (max-width:63.9375rem){.u-content-module__body,.u-content-module__footer,.u-content-module__header{max-width:64rem}}@media(min-width:64rem){.u-content-module__body,.u-content-module__footer,.u-content-module__header{grid-column-gap:2rem;-moz-column-gap:2rem;column-gap:2rem;display:grid;grid-template-columns:repeat(12,1fr);max-width:75rem}}",""]),r.locals={},t.exports=r},572:function(t,e,n){var content=n(625);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("7c180204",content,!0,{sourceMap:!1})},595:function(t,e,n){"use strict";n.r(e);n(20),n(32),n(44),n(45),n(28),n(12),n(27);var r=n(18),o=n(592),l=n(691);n(692),n(693);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"BaseCarousel",props:{options:Object,autoplay:{type:Boolean,default:!1}},data:function(){return{defaults:{type:"loop",autoplay:"pause",interval:"7500",arrows:!1,perPage:1,gap:"2rem"}}},computed:{procssedOptions:function(){var t=this.options;return this.autoplay&&(t=d(d({},this.options),{},{intersection:{inView:{autoplay:!0},outView:{autoplay:!1}}})),Object.assign(this.defaults,t)}},mounted:function(){new o.b(this.$el,this.procssedOptions).mount({Intersection:l.a},this.transition)},methods:{transition:function(t,e){var n,r=Object(o.a)(t).bind,l=e.Move,c=e.Elements.list;function d(){c.style.transition=""}return{mount:function(){r(c,"transitionend",(function(t){t.target===c&&n&&(d(),n())}))},start:function(t,e){var r=l.toPosition(t,!0);c.style.transition="transform 800ms cubic-bezier(.44,.65,.07,1.01)",l.translate(r),n=e},cancel:d}}}},v=(n(624),n(72)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-base-carousel splide"},[e("div",{staticClass:"u-base-carousel__track splide__track"},[e("ul",{staticClass:"splide__list"},[t._t("default")],2)]),t._v(" "),e("ul",{staticClass:"u-base-carousel__pagination splide__pagination"})])}),[],!1,null,"409d0d7f",null);e.default=component.exports},596:function(t,e,n){"use strict";n.r(e);var r={name:"BaseCarouselSlide"},o=n(72),component=Object(o.a)(r,(function(){return(0,this._self._c)("li",{staticClass:"u-base-carousel-slide splide__slide"},[this._t("default")],2)}),[],!1,null,"563714e4",null);e.default=component.exports},624:function(t,e,n){"use strict";n(572)},625:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,".u-base-carousel[data-v-409d0d7f]{position:relative}.u-base-carousel__pagination[data-v-409d0d7f]{margin-top:45px;position:relative}.u-base-carousel[data-v-409d0d7f] .splide__pagination li:not(:first-child){margin-left:24px}.u-base-carousel[data-v-409d0d7f] .splide__pagination__page{transform:none}.u-base-carousel[data-v-409d0d7f] .splide__pagination__page.is-active{background:var(--blue)}.u-base-carousel[data-v-409d0d7f] .splide__pagination__page:hover{background:#343d46}",""]),r.locals={},t.exports=r},750:function(t,e,n){var content=n(885);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("f02ccd72",content,!0,{sourceMap:!1})},884:function(t,e,n){"use strict";n(750)},885:function(t,e,n){var r=n(86)((function(i){return i[1]}));r.push([t.i,".u-rating-banner[data-v-1831eb27]{--upper-spacing:2.375rem;--ratings-per-slide:6;--rating-width:150px;--rating-height:150px;--rating-gap:calc(100% - (var(--rating-width / var(--ratings-per-slide)))/(var(--ratings-per-slide) - 1))}.u-rating-banner__ratings[data-v-1831eb27]{margin-top:var(--upper-spacing)}.u-rating-banner__rating[data-v-1831eb27]{-o-object-fit:contain;object-fit:contain}@media(min-width:36rem){.u-rating-banner[data-v-1831eb27]{--upper-spacing:5.25rem;--item-width:calc(var(--max-content-width)/var(--rating-count) - var(--rating-gap))}}@media(min-width:64rem){.u-rating-banner__headline[data-v-1831eb27]{grid-column-end:span 6}.u-rating-banner__ratings[data-v-1831eb27]{grid-column-end:span 12;grid-column-start:1}}",""]),r.locals={},t.exports=r},944:function(t,e,n){"use strict";n.r(e);n(20),n(32),n(44),n(45),n(28),n(12),n(27);var r=n(18),o=(n(41),n(37),n(43),n(456)),l=n(413),c=n(436),d=n(415),f=n(595);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={name:"RatingBanner",components:{BaseCarouselSlide:n(596).default,BaseCarousel:f.default,BaseImage:d.default,BaseHeadline:l.default,ContentModule:o.default},mixins:[c.a],data:function(){return{carouselOptions:{type:"slide",gap:"60px",perPage:6,breakpoints:{768:{type:"loop",autoWidth:!0,focus:"center",perPage:1}}}}},computed:{headline:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.title},headlineCentered:function(){var t;return"center"===(null===(t=this.fields)||void 0===t?void 0:t.titleAlignment)},ratings:function(){var t;return null===(t=this.fields)||void 0===t||null===(t=t.ratings)||void 0===t?void 0:t.map((function(i){var t,e,n,r=null===(t=i.fields)||void 0===t||null===(t=t.file)||void 0===t?void 0:t.url;return h(h({},null===(e=i.fields)||void 0===e?void 0:e.file),{},{title:null===(n=i.fields)||void 0===n?void 0:n.title,url:r.includes(".svg")?r:"".concat(r,"?fm=webp&w=150")})}))},ratingsCount:function(){var t;return(null===(t=this.ratings)||void 0===t?void 0:t.length)||1}}},_=(n(884),n(72)),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("content-module",t._b({staticClass:"u-rating-banner",style:{"--rating-count":t.ratingsCount}},"content-module",t.data,!1),[e("base-headline",{staticClass:"u-rating-banner__headline",attrs:{tag:"h2",text:t.headline,center:t.headlineCentered}}),t._v(" "),e("base-carousel",{staticClass:"u-rating-banner__ratings",attrs:{options:t.carouselOptions}},t._l(t.ratings,(function(t,n){return e("base-carousel-slide",{key:"rating_".concat(n)},[e("img",{staticClass:"u-rating-banner__rating",attrs:{src:t.url,alt:t.title,width:"150",height:"150"}})])})),1)],1)}),[],!1,null,"1831eb27",null);e.default=component.exports;installComponents(component,{BaseHeadline:n(413).default,BaseCarouselSlide:n(596).default,BaseCarousel:n(595).default,ContentModule:n(456).default})}}]);