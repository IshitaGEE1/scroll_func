(window.webpackJsonp=window.webpackJsonp||[]).push([[57,15,55,62],{426:function(t,e,r){"use strict";r(135);var o={processLink:function(t){return t.endsWith("/")?t:t+"/"}};e.a=o},427:function(t,e,r){"use strict";var o=r(2),n=r(269).trim;o({target:"String",proto:!0,forced:r(437)("trim")},{trim:function(){return n(this)}})},437:function(t,e,r){"use strict";var o=r(109).PROPER,n=r(3),c=r(270);t.exports=function(t){return n((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||o&&c[t].name!==t}))}},439:function(t,e,r){"use strict";r.r(e),r.d(e,"Types",(function(){return c}));r(451);var o=r(5),n=(r(46),r(32),r(55),r(41),r(12),r(43),r(33),r(427),r(455)),c={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary"},l={name:"BaseCta",components:{IconEast:n.default},props:{url:String,external:Boolean,block:Boolean,secondary:Boolean,tertiary:Boolean,small:Boolean,contras:Boolean,entryId:String,targetId:String,targetArea1:String},computed:{type:function(){return this.secondary?c.SECONDARY:this.tertiary?c.TERTIARY:c.PRIMARY},primary:function(){return!(this.secondary||this.tertiary)}},methods:{clickFunction1:function(t){t.preventDefault(),this.scrollTarget1()},clickFunction2:function(t){return t.preventDefault(),this.scrollTarget2(),!1},scrollTarget1:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=["Explore now","Jetzt erkunden"],(r=Array.from(document.querySelectorAll("*")).filter((function(t){var r=t.textContent.trim();return e.includes(r)}))).length>0?r[0].scrollIntoView({behavior:"smooth"}):console.log("No matching elements found.");case 3:case"end":return t.stop()}}),t)})))()},scrollTarget2:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=["Explore Product Guard PX now!","Product Guard PX erkunden"],(r=Array.from(document.querySelectorAll("*")).filter((function(t){var r=t.textContent.trim();return e.includes(r)}))).length>0?r[0].scrollIntoView({behavior:"smooth"}):console.log("No matching elements found.");case 3:case"end":return t.stop()}}),t)})))()}}},f=(r(458),r(72)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return"https://www.productsup.com/pharmaceutical_manufacturers"==t.url?e("a",t._g({class:["u-base-cta","u-base-cta--".concat(t.type),{"u-base-cta--small":t.small},{"u-base-cta--block":t.block}],attrs:{href:t.url,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0},on:{click:t.clickFunction1}},t.$listeners),[t.primary&&!t.small?e("icon-east"):t._e(),t._v(" "),t._t("default")],2):"https://www.productsup.com/e-pharmacy"==t.url?e("a",t._g({class:["u-base-cta","u-base-cta--".concat(t.type),{"u-base-cta--small":t.small},{"u-base-cta--block":t.block}],attrs:{href:t.url,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0},on:{click:t.clickFunction2}},t.$listeners),[t.primary&&!t.small?e("icon-east"):t._e(),t._v(" "),t._t("default")],2):t.url?e("a",t._g({class:["u-base-cta","u-base-cta--".concat(t.type),{"u-base-cta--small":t.small},{"u-base-cta--block":t.block}],attrs:{href:t.url,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0}},t.$listeners),[t.primary&&!t.small?e("icon-east"):t._e(),t._v(" "),t._t("default")],2):e("button",t._g({class:["u-base-cta","u-base-cta--".concat(t.type),{"u-base-cta--small":t.small},{"u-base-cta--block":t.block}]},t.$listeners),[t.primary&&!t.small?e("icon-east"):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"155312ff",null);e.default=component.exports},442:function(t,e,r){var content=r(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(87).default)("630502a4",content,!0,{sourceMap:!1})},443:function(t,e,r){var content=r(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(87).default)("73ade0a6",content,!0,{sourceMap:!1})},449:function(t,e,r){"use strict";var o=r(4),n=r(29),c=r(13),l=/"/g,f=o("".replace);t.exports=function(t,e,r,o){var d=c(n(t)),v="<"+e;return""!==r&&(v+=" "+r+'="'+f(c(o),l,"&quot;")+'"'),v+">"+d+"</"+e+">"}},450:function(t,e,r){"use strict";var o=r(3);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},451:function(t,e,r){"use strict";var o=r(2),n=r(449);o({target:"String",proto:!0,forced:r(450)("small")},{small:function(){return n(this,"small","","")}})},453:function(t,e,r){"use strict";r(442)},454:function(t,e,r){var o=r(86)((function(i){return i[1]}));o.push([t.i,"svg[data-v-16a8718c]{fill:currentColor;height:1em;width:1em}",""]),o.locals={},t.exports=o},455:function(t,e,r){"use strict";r.r(e);var o={name:"IconEast"},n=(r(453),r(72)),component=Object(n.a)(o,(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"48",viewBox:"0 -960 960 960",width:"48"}},[t("path",{attrs:{d:"m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z"}})])}),[],!1,null,"16a8718c",null);e.default=component.exports},458:function(t,e,r){"use strict";r(443)},459:function(t,e,r){var o=r(86)((function(i){return i[1]}));o.push([t.i,".u-base-cta[data-v-155312ff]{--focus-shadow:0 0 0 3px rgba(0,169,255,.35);align-items:center;border:initial;border-radius:28px;color:#fff;display:inline-flex;font-size:20px;font-weight:700;gap:8px;letter-spacing:0;line-height:24px;min-height:56px;outline:medium none invert;outline:initial;text-decoration:none;text-decoration:initial}.u-base-cta[data-v-155312ff]:focus{box-shadow:var(--focus-shadow)}.u-base-cta--primary[data-v-155312ff]{--shadow:0 8px 18px 0 rgba(15,25,45,.2);background-color:var(--pink);box-shadow:0 8px 18px 0 rgba(15,25,45,.2);box-shadow:var(--shadow);padding-left:24px;padding-right:24px}.u-base-cta--primary[data-v-155312ff]:focus{box-shadow:var(--shadow),var(--focus-shadow)}.u-base-cta--primary.active[data-v-155312ff],.u-base-cta--primary[data-v-155312ff]:active,.u-base-cta--primary[data-v-155312ff]:hover{background-color:var(--pink-lighten)}.u-base-cta--small[data-v-155312ff]{font-size:1rem;min-height:35px;padding-left:16px;padding-right:16px}.u-base-cta--secondary[data-v-155312ff]{background-color:var(--blue-darkest);padding-left:28px;padding-right:28px}.u-base-cta--secondary.active[data-v-155312ff],.u-base-cta--secondary[data-v-155312ff]:active,.u-base-cta--secondary[data-v-155312ff]:hover{background-color:var(--blue-darkest-lighten)}.u-base-cta--tertiary[data-v-155312ff]{background-color:#fff;background-color:var(--tertiary-cta-background,#fff);border:2px solid var(--tertiary-cta-border,var(--blue-darkest));border-radius:28px;color:var(--tertiary-cta-font,var(--blue-darkest));padding-left:28px;padding-right:28px}.u-base-cta--tertiary.active[data-v-155312ff],.u-base-cta--tertiary[data-v-155312ff]:active,.u-base-cta--tertiary[data-v-155312ff]:hover{background-color:var(--tertiary-cta-background-hover,var(--blue-darkest));border-color:#fff;border-color:var(--tertiary-cta-border-hover,#fff);color:#fff;color:var(--tertiary-cta-font-hover,#fff)}",""]),o.locals={},t.exports=o},465:function(t,e,r){var content=r(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(87).default)("628e9d0b",content,!0,{sourceMap:!1})},483:function(t,e,r){"use strict";r(465)},484:function(t,e,r){var o=r(86)((function(i){return i[1]}));o.push([t.i,".u-filter-option-cloud[data-v-4ac40ad4]{display:flex;flex-wrap:wrap}.u-filter-option-cloud--centered[data-v-4ac40ad4]{justify-content:center}.u-filter-option-cloud>*[data-v-4ac40ad4]{margin:.375rem}",""]),o.locals={},t.exports=o},485:function(t,e,r){"use strict";r.r(e);r(20),r(32),r(44),r(45),r(28),r(27);var o=r(18),n=(r(136),r(12),r(88));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}var l={name:"FilterOptionsCloud",components:{BaseCta:r(439).default},props:{options:{type:Array,default:[]},center:{type:Boolean,default:!1}},data:function(){return{active:void 0}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(n.b)({selected:"categoryFilter"})),watch:{active:function(t){this.$emit("change",t)}},mounted:function(){var t=this;this.active=this.options.find((function(e){return e.value===t.selected}))},methods:{setActive:function(t){this.active=this.options.find((function(e){return e.value===t}))},isActive:function(t){var e;return(null===(e=this.active)||void 0===e?void 0:e.value)===t}}},f=l,d=(r(483),r(72)),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",{class:["u-filter-option-cloud",{"u-filter-option-cloud--centered":t.center}]},t._l(t.options,(function(option,r){return e("base-cta",{key:"filteroption_".concat(r),class:[{active:t.isActive(option.value)}],attrs:{tertiary:""},on:{click:function(e){return t.setActive(option.value)}}},[t._v("\n    "+t._s(option.label)+"\n  ")])})),1)}),[],!1,null,"4ac40ad4",null);e.default=component.exports;installComponents(component,{BaseCta:r(439).default})},510:function(t,e,r){"use strict";r.r(e);var o=r(485),n=r(426),c={name:"GlossaryCategoryFilter",components:{FilterOptionsCloud:o.default},props:{headline:{type:String},options:{type:Array,required:!0}},methods:{navigateToCategory:function(option){this.$router.push({path:n.a.processLink(this.localePath("/glossary/category/".concat(option.value),this.$i18n.locale))})}}},l=r(72),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"u-glossary-category-filter"},[e("h3",{staticClass:"u-glossary-category-filter__headline"},[t._v(t._s(t.headline))]),t._v(" "),e("filter-options-cloud",{attrs:{options:t.options},on:{change:t.navigateToCategory}})],1)}),[],!1,null,"f8928312",null);e.default=component.exports}}]);