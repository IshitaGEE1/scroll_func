(window.webpackJsonp=window.webpackJsonp||[]).push([[84,13,14,17],{413:function(e,t,n){"use strict";n.r(t);n(41),n(23),n(66),n(422);var r={name:"BaseHeadline",props:{tag:{type:String,default:"h1",validate:function(e){return["h1","h2","h3","h4","h5","h6"].includes(e)}},center:{type:Boolean,default:!1},text:String},computed:{_text:function(){var e;return null===(e=this.text)||void 0===e||null===(e=e.replaceAll("[[",'<span class="u-base-headline--contrast">'))||void 0===e?void 0:e.replaceAll("]]","</span>")}}},o=(n(424),n(72)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.text?t(e.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":e.center}],domProps:{innerHTML:e._s(e._text)}}):t(e.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":e.center}]},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},416:function(e,t,n){var content=n(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("6f83e24a",content,!0,{sourceMap:!1})},422:function(e,t,n){"use strict";n(423)},423:function(e,t,n){"use strict";var r=n(2),o=n(10),l=n(4),c=n(29),d=n(7),f=n(47),h=n(178),v=n(13),_=n(67),m=n(177),y=n(268),O=n(8),w=n(25),j=O("replace"),x=TypeError,k=l("".indexOf),C=l("".replace),P=l("".slice),S=Math.max;r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,l,O,B,M,D,E,A,T=c(this),H=0,$=0,K="";if(!f(e)){if((n=h(e))&&(r=v(c(m(e))),!~k(r,"g")))throw new x("`.replaceAll` does not allow non-global regexes");if(l=_(e,j))return o(l,e,T,t);if(w&&n)return C(v(T),e,t)}for(O=v(T),B=v(e),(M=d(t))||(t=v(t)),D=B.length,E=S(1,D),H=k(O,B);-1!==H;)A=M?v(t(B,H,O)):y(B,O,H,[],void 0,t),K+=P(O,$,H)+A,$=H+D,H=H+E>O.length?-1:k(O,B,H+E);return $<O.length&&(K+=P(O,$)),K}})},424:function(e,t,n){"use strict";n(416)},425:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-base-headline--centered{text-align:center}.u-base-headline--centered:before{margin-left:auto;margin-right:auto}.u-base-headline>.u-base-headline--contrast{-webkit-text-fill-color:transparent;background:var(--headline-contrast);-webkit-background-clip:text}@media(min-width:36rem){h2.u-base-headline--centered{margin-left:auto;margin-right:auto;max-width:66%}}@media(min-width:1440px){h2.u-base-headline--centered{max-width:792px}}",""]),r.locals={},e.exports=r},436:function(e,t,n){"use strict";t.a={props:{fields:Object,metadata:Object,sys:Object,contentType:String},computed:{data:function(){return{fields:this.fields,metadata:this.metadata,sys:this.sys}}}}},464:function(e,t,n){"use strict";n(20),n(32),n(44),n(45),n(28);var r=n(15),o=n(18),l=(n(41),n(24),n(12),n(23),n(48),n(66),n(27),n(88));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=["id","sys","metadata","image","url","file","navigateTo","navigationMenu","action","redirectTo"];t.a={computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(l.b)({kw:"keywordKw",channel:"keywordChannel",social:"keywordSocial"})),beforeMount:function(){this.processDynamicKeywords(this.fields,{kw:this.kw,channel:this.channel,social:this.social})},methods:{processDynamicKeywords:function(e,t){var n=t;function o(e,t,r){return n[t]?n[t]:r||""}function l(e,t){var n,o,c,f,h=Object(r.a)(e);if("object"!==h&&"function"!==h)return!1;if("[object Array]"!==Object.prototype.toString.call(t)){if("undefined"!==(h=Object(r.a)(t))&&null!==h)throw new TypeError("Expected attribute to be an array");t=[]}for(n in t.push(e),f=t.length-1,e)if(!d.includes(n)&&(o=e[n],"object"===(h=Object(r.a)(o))||"function"===h)){for(c=f;c>=0;c-=1)if(o===t[c])return!0;if(l(o,t))return!0}return t.pop(e),!1}!function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(l(t))return void console.warn("Circular structure detected. Abort. In module:",t.name,t);switch(Object(r.a)(t)){case"string":return void n((h=t,h.replace(/\$\$\$(kw|channel|social)\(?(((?!\().)+?(?=\)))?\)?/g,o)));case"object":if(null===t)return;if(Array.isArray(t))return void t.forEach((function(r,o){e(r,n=function(e){return t[o]=e})}));var c=function(r){if(d.includes(r))return 1;n=function(e){return t[r]=e},e(t[r],n)};for(var f in t)c(f);return;default:return}var h}(e)}}}},572:function(e,t,n){var content=n(625);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("7c180204",content,!0,{sourceMap:!1})},595:function(e,t,n){"use strict";n.r(t);n(20),n(32),n(44),n(45),n(28),n(12),n(27);var r=n(18),o=n(592),l=n(691);n(692),n(693);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={name:"BaseCarousel",props:{options:Object,autoplay:{type:Boolean,default:!1}},data:function(){return{defaults:{type:"loop",autoplay:"pause",interval:"7500",arrows:!1,perPage:1,gap:"2rem"}}},computed:{procssedOptions:function(){var e=this.options;return this.autoplay&&(e=d(d({},this.options),{},{intersection:{inView:{autoplay:!0},outView:{autoplay:!1}}})),Object.assign(this.defaults,e)}},mounted:function(){new o.b(this.$el,this.procssedOptions).mount({Intersection:l.a},this.transition)},methods:{transition:function(e,t){var n,r=Object(o.a)(e).bind,l=t.Move,c=t.Elements.list;function d(){c.style.transition=""}return{mount:function(){r(c,"transitionend",(function(e){e.target===c&&n&&(d(),n())}))},start:function(e,t){var r=l.toPosition(e,!0);c.style.transition="transform 800ms cubic-bezier(.44,.65,.07,1.01)",l.translate(r),n=t},cancel:d}}}},h=(n(624),n(72)),component=Object(h.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"u-base-carousel splide"},[t("div",{staticClass:"u-base-carousel__track splide__track"},[t("ul",{staticClass:"splide__list"},[e._t("default")],2)]),e._v(" "),t("ul",{staticClass:"u-base-carousel__pagination splide__pagination"})])}),[],!1,null,"409d0d7f",null);t.default=component.exports},596:function(e,t,n){"use strict";n.r(t);var r={name:"BaseCarouselSlide"},o=n(72),component=Object(o.a)(r,(function(){return(0,this._self._c)("li",{staticClass:"u-base-carousel-slide splide__slide"},[this._t("default")],2)}),[],!1,null,"563714e4",null);t.default=component.exports},624:function(e,t,n){"use strict";n(572)},625:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-base-carousel[data-v-409d0d7f]{position:relative}.u-base-carousel__pagination[data-v-409d0d7f]{margin-top:45px;position:relative}.u-base-carousel[data-v-409d0d7f] .splide__pagination li:not(:first-child){margin-left:24px}.u-base-carousel[data-v-409d0d7f] .splide__pagination__page{transform:none}.u-base-carousel[data-v-409d0d7f] .splide__pagination__page.is-active{background:var(--blue)}.u-base-carousel[data-v-409d0d7f] .splide__pagination__page:hover{background:#343d46}",""]),r.locals={},e.exports=r},735:function(e,t,n){var content=n(855);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("167c5c5c",content,!0,{sourceMap:!1})},854:function(e,t,n){"use strict";n(735)},855:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-carousel[data-v-0956e546]{position:relative}.u-carousel__items[data-v-0956e546]:not(:first-child){margin-top:1rem}.u-carousel__item[data-v-0956e546]{padding:initial}",""]),r.locals={},e.exports=r},930:function(e,t,n){"use strict";n.r(t);n(42);var r=n(436),o=n(464),l=n(413),c=n(596),d={name:"Carousel",components:{BaseCarousel:n(595).default,BaseCarouselSlide:c.default,BaseHeadline:l.default},mixins:[r.a,o.a],computed:{headline:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.headline},items:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.items},autoplay:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.autoplay}}},f=(n(854),n(72)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"u-content-type u-content-type--module u-carousel"},[e.headline?t("base-headline",{staticClass:"u-carousel__headline",attrs:{tag:"h2",text:e.headline,center:""}},[e._v(e._s(e.headline))]):e._e(),e._v(" "),e.items?t("base-carousel",e._b({staticClass:"u-carousel__items"},"base-carousel",{autoplay:e.autoplay},!1),e._l(e.items,(function(n,r){return t("base-carousel-slide",{key:"".concat(n.sys.id,"_").concat(r)},[t(n.sys.contentType.sys.id,e._b({tag:"component",staticClass:"u-carousel__item"},"component",n,!1))],1)})),1):e._e()],1)}),[],!1,null,"0956e546",null);t.default=component.exports;installComponents(component,{BaseHeadline:n(413).default,BaseCarouselSlide:n(596).default,BaseCarousel:n(595).default})}}]);