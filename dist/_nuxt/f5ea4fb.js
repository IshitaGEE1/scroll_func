(window.webpackJsonp=window.webpackJsonp||[]).push([[15,62],{427:function(t,r,e){"use strict";var o=e(2),n=e(269).trim;o({target:"String",proto:!0,forced:e(437)("trim")},{trim:function(){return n(this)}})},437:function(t,r,e){"use strict";var o=e(109).PROPER,n=e(3),c=e(270);t.exports=function(t){return n((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||o&&c[t].name!==t}))}},439:function(t,r,e){"use strict";e.r(r),e.d(r,"Types",(function(){return c}));e(451);var o=e(5),n=(e(46),e(32),e(55),e(41),e(12),e(43),e(33),e(427),e(455)),c={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary"},l={name:"BaseCta",components:{IconEast:n.default},props:{url:String,external:Boolean,block:Boolean,secondary:Boolean,tertiary:Boolean,small:Boolean,contras:Boolean,entryId:String,targetId:String,targetArea1:String},computed:{type:function(){return this.secondary?c.SECONDARY:this.tertiary?c.TERTIARY:c.PRIMARY},primary:function(){return!(this.secondary||this.tertiary)}},methods:{clickFunction1:function(t){t.preventDefault(),this.scrollTarget1()},clickFunction2:function(t){return t.preventDefault(),this.scrollTarget2(),!1},scrollTarget1:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=["Explore now","Jetzt erkunden"],(e=Array.from(document.querySelectorAll("*")).filter((function(t){var e=t.textContent.trim();return r.includes(e)}))).length>0?e[0].scrollIntoView({behavior:"smooth"}):console.log("No matching elements found.");case 3:case"end":return t.stop()}}),t)})))()},scrollTarget2:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var r,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=["Explore Product Guard PX now!","Product Guard PX erkunden"],(e=Array.from(document.querySelectorAll("*")).filter((function(t){var e=t.textContent.trim();return r.includes(e)}))).length>0?e[0].scrollIntoView({behavior:"smooth"}):console.log("No matching elements found.");case 3:case"end":return t.stop()}}),t)})))()}}},f=(e(458),e(72)),component=Object(f.a)(l,(function(){var t=this,r=t._self._c;return"https://www.productsup.com/pharmaceutical_manufacturers"==t.url?r("a",t._g({class:["u-base-cta","u-base-cta--".concat(t.type),{"u-base-cta--small":t.small},{"u-base-cta--block":t.block}],attrs:{href:t.url,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0},on:{click:t.clickFunction1}},t.$listeners),[t.primary&&!t.small?r("icon-east"):t._e(),t._v(" "),t._t("default")],2):"https://www.productsup.com/e-pharmacy"==t.url?r("a",t._g({class:["u-base-cta","u-base-cta--".concat(t.type),{"u-base-cta--small":t.small},{"u-base-cta--block":t.block}],attrs:{href:t.url,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0},on:{click:t.clickFunction2}},t.$listeners),[t.primary&&!t.small?r("icon-east"):t._e(),t._v(" "),t._t("default")],2):t.url?r("a",t._g({class:["u-base-cta","u-base-cta--".concat(t.type),{"u-base-cta--small":t.small},{"u-base-cta--block":t.block}],attrs:{href:t.url,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0}},t.$listeners),[t.primary&&!t.small?r("icon-east"):t._e(),t._v(" "),t._t("default")],2):r("button",t._g({class:["u-base-cta","u-base-cta--".concat(t.type),{"u-base-cta--small":t.small},{"u-base-cta--block":t.block}]},t.$listeners),[t.primary&&!t.small?r("icon-east"):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"155312ff",null);r.default=component.exports},442:function(t,r,e){var content=e(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(87).default)("630502a4",content,!0,{sourceMap:!1})},443:function(t,r,e){var content=e(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(87).default)("73ade0a6",content,!0,{sourceMap:!1})},449:function(t,r,e){"use strict";var o=e(4),n=e(29),c=e(13),l=/"/g,f=o("".replace);t.exports=function(t,r,e,o){var d=c(n(t)),v="<"+r;return""!==e&&(v+=" "+e+'="'+f(c(o),l,"&quot;")+'"'),v+">"+d+"</"+r+">"}},450:function(t,r,e){"use strict";var o=e(3);t.exports=function(t){return o((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},451:function(t,r,e){"use strict";var o=e(2),n=e(449);o({target:"String",proto:!0,forced:e(450)("small")},{small:function(){return n(this,"small","","")}})},453:function(t,r,e){"use strict";e(442)},454:function(t,r,e){var o=e(86)((function(i){return i[1]}));o.push([t.i,"svg[data-v-16a8718c]{fill:currentColor;height:1em;width:1em}",""]),o.locals={},t.exports=o},455:function(t,r,e){"use strict";e.r(r);var o={name:"IconEast"},n=(e(453),e(72)),component=Object(n.a)(o,(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"48",viewBox:"0 -960 960 960",width:"48"}},[t("path",{attrs:{d:"m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z"}})])}),[],!1,null,"16a8718c",null);r.default=component.exports},458:function(t,r,e){"use strict";e(443)},459:function(t,r,e){var o=e(86)((function(i){return i[1]}));o.push([t.i,".u-base-cta[data-v-155312ff]{--focus-shadow:0 0 0 3px rgba(0,169,255,.35);align-items:center;border:initial;border-radius:28px;color:#fff;display:inline-flex;font-size:20px;font-weight:700;gap:8px;letter-spacing:0;line-height:24px;min-height:56px;outline:medium none invert;outline:initial;text-decoration:none;text-decoration:initial}.u-base-cta[data-v-155312ff]:focus{box-shadow:var(--focus-shadow)}.u-base-cta--primary[data-v-155312ff]{--shadow:0 8px 18px 0 rgba(15,25,45,.2);background-color:var(--pink);box-shadow:0 8px 18px 0 rgba(15,25,45,.2);box-shadow:var(--shadow);padding-left:24px;padding-right:24px}.u-base-cta--primary[data-v-155312ff]:focus{box-shadow:var(--shadow),var(--focus-shadow)}.u-base-cta--primary.active[data-v-155312ff],.u-base-cta--primary[data-v-155312ff]:active,.u-base-cta--primary[data-v-155312ff]:hover{background-color:var(--pink-lighten)}.u-base-cta--small[data-v-155312ff]{font-size:1rem;min-height:35px;padding-left:16px;padding-right:16px}.u-base-cta--secondary[data-v-155312ff]{background-color:var(--blue-darkest);padding-left:28px;padding-right:28px}.u-base-cta--secondary.active[data-v-155312ff],.u-base-cta--secondary[data-v-155312ff]:active,.u-base-cta--secondary[data-v-155312ff]:hover{background-color:var(--blue-darkest-lighten)}.u-base-cta--tertiary[data-v-155312ff]{background-color:#fff;background-color:var(--tertiary-cta-background,#fff);border:2px solid var(--tertiary-cta-border,var(--blue-darkest));border-radius:28px;color:var(--tertiary-cta-font,var(--blue-darkest));padding-left:28px;padding-right:28px}.u-base-cta--tertiary.active[data-v-155312ff],.u-base-cta--tertiary[data-v-155312ff]:active,.u-base-cta--tertiary[data-v-155312ff]:hover{background-color:var(--tertiary-cta-background-hover,var(--blue-darkest));border-color:#fff;border-color:var(--tertiary-cta-border-hover,#fff);color:#fff;color:var(--tertiary-cta-font-hover,#fff)}",""]),o.locals={},t.exports=o}}]);