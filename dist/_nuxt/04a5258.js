(window.webpackJsonp=window.webpackJsonp||[]).push([[9,15,17,48,62],{413:function(e,t,r){"use strict";r.r(t);r(41),r(23),r(66),r(422);var n={name:"BaseHeadline",props:{tag:{type:String,default:"h1",validate:function(e){return["h1","h2","h3","h4","h5","h6"].includes(e)}},center:{type:Boolean,default:!1},text:String},computed:{_text:function(){var e;return null===(e=this.text)||void 0===e||null===(e=e.replaceAll("[[",'<span class="u-base-headline--contrast">'))||void 0===e?void 0:e.replaceAll("]]","</span>")}}},l=(r(424),r(72)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return e.text?t(e.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":e.center}],domProps:{innerHTML:e._s(e._text)}}):t(e.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":e.center}]},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},416:function(e,t,r){var content=r(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(87).default)("6f83e24a",content,!0,{sourceMap:!1})},417:function(e,t,r){"use strict";t.a={props:{fields:Object,metadata:Object,sys:Object}}},422:function(e,t,r){"use strict";r(423)},423:function(e,t,r){"use strict";var n=r(2),l=r(10),o=r(4),c=r(29),d=r(7),f=r(47),v=r(178),h=r(13),m=r(67),x=r(177),_=r(268),y=r(8),w=r(25),k=y("replace"),C=TypeError,R=o("".indexOf),A=o("".replace),B=o("".slice),M=Math.max;n({target:"String",proto:!0},{replaceAll:function(e,t){var r,n,o,y,O,S,T,j,E,I=c(this),H=0,P=0,Y="";if(!f(e)){if((r=v(e))&&(n=h(c(x(e))),!~R(n,"g")))throw new C("`.replaceAll` does not allow non-global regexes");if(o=m(e,k))return l(o,e,I,t);if(w&&r)return A(h(I),e,t)}for(y=h(I),O=h(e),(S=d(t))||(t=h(t)),T=O.length,j=M(1,T),H=R(y,O);-1!==H;)E=S?h(t(O,H,y)):_(O,y,H,[],void 0,t),Y+=B(y,P,H)+E,P=H+T,H=H+j>y.length?-1:R(y,O,H+j);return P<y.length&&(Y+=B(y,P)),Y}})},424:function(e,t,r){"use strict";r(416)},425:function(e,t,r){var n=r(86)((function(i){return i[1]}));n.push([e.i,".u-base-headline--centered{text-align:center}.u-base-headline--centered:before{margin-left:auto;margin-right:auto}.u-base-headline>.u-base-headline--contrast{-webkit-text-fill-color:transparent;background:var(--headline-contrast);-webkit-background-clip:text}@media(min-width:36rem){h2.u-base-headline--centered{margin-left:auto;margin-right:auto;max-width:66%}}@media(min-width:1440px){h2.u-base-headline--centered{max-width:792px}}",""]),n.locals={},e.exports=n},427:function(e,t,r){"use strict";var n=r(2),l=r(269).trim;n({target:"String",proto:!0,forced:r(437)("trim")},{trim:function(){return l(this)}})},437:function(e,t,r){"use strict";var n=r(109).PROPER,l=r(3),o=r(270);e.exports=function(e){return l((function(){return!!o[e]()||"​᠎"!=="​᠎"[e]()||n&&o[e].name!==e}))}},439:function(e,t,r){"use strict";r.r(t),r.d(t,"Types",(function(){return o}));r(451);var n=r(5),l=(r(46),r(32),r(55),r(41),r(12),r(43),r(33),r(427),r(455)),o={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary"},c={name:"BaseCta",components:{IconEast:l.default},props:{url:String,external:Boolean,block:Boolean,secondary:Boolean,tertiary:Boolean,small:Boolean,contras:Boolean,entryId:String,targetId:String,targetArea1:String},computed:{type:function(){return this.secondary?o.SECONDARY:this.tertiary?o.TERTIARY:o.PRIMARY},primary:function(){return!(this.secondary||this.tertiary)}},methods:{clickFunction1:function(e){e.preventDefault(),this.scrollTarget1()},clickFunction2:function(e){return e.preventDefault(),this.scrollTarget2(),!1},scrollTarget1:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=["Explore now","Jetzt erkunden"],(r=Array.from(document.querySelectorAll("*")).filter((function(e){var r=e.textContent.trim();return t.includes(r)}))).length>0?r[0].scrollIntoView({behavior:"smooth"}):console.log("No matching elements found.");case 3:case"end":return e.stop()}}),e)})))()},scrollTarget2:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=["Explore Product Guard PX now!","Product Guard PX erkunden"],(r=Array.from(document.querySelectorAll("*")).filter((function(e){var r=e.textContent.trim();return t.includes(r)}))).length>0?r[0].scrollIntoView({behavior:"smooth"}):console.log("No matching elements found.");case 3:case"end":return e.stop()}}),e)})))()}}},d=(r(458),r(72)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return"https://www.productsup.com/pharmaceutical_manufacturers"==e.url?t("a",e._g({class:["u-base-cta","u-base-cta--".concat(e.type),{"u-base-cta--small":e.small},{"u-base-cta--block":e.block}],attrs:{href:e.url,target:e.external?"_blank":void 0,rel:e.external?"noopener noreferrer":void 0},on:{click:e.clickFunction1}},e.$listeners),[e.primary&&!e.small?t("icon-east"):e._e(),e._v(" "),e._t("default")],2):"https://www.productsup.com/e-pharmacy"==e.url?t("a",e._g({class:["u-base-cta","u-base-cta--".concat(e.type),{"u-base-cta--small":e.small},{"u-base-cta--block":e.block}],attrs:{href:e.url,target:e.external?"_blank":void 0,rel:e.external?"noopener noreferrer":void 0},on:{click:e.clickFunction2}},e.$listeners),[e.primary&&!e.small?t("icon-east"):e._e(),e._v(" "),e._t("default")],2):e.url?t("a",e._g({class:["u-base-cta","u-base-cta--".concat(e.type),{"u-base-cta--small":e.small},{"u-base-cta--block":e.block}],attrs:{href:e.url,target:e.external?"_blank":void 0,rel:e.external?"noopener noreferrer":void 0}},e.$listeners),[e.primary&&!e.small?t("icon-east"):e._e(),e._v(" "),e._t("default")],2):t("button",e._g({class:["u-base-cta","u-base-cta--".concat(e.type),{"u-base-cta--small":e.small},{"u-base-cta--block":e.block}]},e.$listeners),[e.primary&&!e.small?t("icon-east"):e._e(),e._v(" "),e._t("default")],2)}),[],!1,null,"155312ff",null);t.default=component.exports},442:function(e,t,r){var content=r(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(87).default)("630502a4",content,!0,{sourceMap:!1})},443:function(e,t,r){var content=r(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(87).default)("73ade0a6",content,!0,{sourceMap:!1})},449:function(e,t,r){"use strict";var n=r(4),l=r(29),o=r(13),c=/"/g,d=n("".replace);e.exports=function(e,t,r,n){var f=o(l(e)),v="<"+t;return""!==r&&(v+=" "+r+'="'+d(o(n),c,"&quot;")+'"'),v+">"+f+"</"+t+">"}},450:function(e,t,r){"use strict";var n=r(3);e.exports=function(e){return n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},451:function(e,t,r){"use strict";var n=r(2),l=r(449);n({target:"String",proto:!0,forced:r(450)("small")},{small:function(){return l(this,"small","","")}})},453:function(e,t,r){"use strict";r(442)},454:function(e,t,r){var n=r(86)((function(i){return i[1]}));n.push([e.i,"svg[data-v-16a8718c]{fill:currentColor;height:1em;width:1em}",""]),n.locals={},e.exports=n},455:function(e,t,r){"use strict";r.r(t);var n={name:"IconEast"},l=(r(453),r(72)),component=Object(l.a)(n,(function(){var e=this._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"48",viewBox:"0 -960 960 960",width:"48"}},[e("path",{attrs:{d:"m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z"}})])}),[],!1,null,"16a8718c",null);t.default=component.exports},458:function(e,t,r){"use strict";r(443)},459:function(e,t,r){var n=r(86)((function(i){return i[1]}));n.push([e.i,".u-base-cta[data-v-155312ff]{--focus-shadow:0 0 0 3px rgba(0,169,255,.35);align-items:center;border:initial;border-radius:28px;color:#fff;display:inline-flex;font-size:20px;font-weight:700;gap:8px;letter-spacing:0;line-height:24px;min-height:56px;outline:medium none invert;outline:initial;text-decoration:none;text-decoration:initial}.u-base-cta[data-v-155312ff]:focus{box-shadow:var(--focus-shadow)}.u-base-cta--primary[data-v-155312ff]{--shadow:0 8px 18px 0 rgba(15,25,45,.2);background-color:var(--pink);box-shadow:0 8px 18px 0 rgba(15,25,45,.2);box-shadow:var(--shadow);padding-left:24px;padding-right:24px}.u-base-cta--primary[data-v-155312ff]:focus{box-shadow:var(--shadow),var(--focus-shadow)}.u-base-cta--primary.active[data-v-155312ff],.u-base-cta--primary[data-v-155312ff]:active,.u-base-cta--primary[data-v-155312ff]:hover{background-color:var(--pink-lighten)}.u-base-cta--small[data-v-155312ff]{font-size:1rem;min-height:35px;padding-left:16px;padding-right:16px}.u-base-cta--secondary[data-v-155312ff]{background-color:var(--blue-darkest);padding-left:28px;padding-right:28px}.u-base-cta--secondary.active[data-v-155312ff],.u-base-cta--secondary[data-v-155312ff]:active,.u-base-cta--secondary[data-v-155312ff]:hover{background-color:var(--blue-darkest-lighten)}.u-base-cta--tertiary[data-v-155312ff]{background-color:#fff;background-color:var(--tertiary-cta-background,#fff);border:2px solid var(--tertiary-cta-border,var(--blue-darkest));border-radius:28px;color:var(--tertiary-cta-font,var(--blue-darkest));padding-left:28px;padding-right:28px}.u-base-cta--tertiary.active[data-v-155312ff],.u-base-cta--tertiary[data-v-155312ff]:active,.u-base-cta--tertiary[data-v-155312ff]:hover{background-color:var(--tertiary-cta-background-hover,var(--blue-darkest));border-color:#fff;border-color:var(--tertiary-cta-border-hover,#fff);color:#fff;color:var(--tertiary-cta-font-hover,#fff)}",""]),n.locals={},e.exports=n},730:function(e,t,r){var content=r(845);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(87).default)("13ab8cf5",content,!0,{sourceMap:!1})},844:function(e,t,r){"use strict";r(730)},845:function(e,t,r){var n=r(86)((function(i){return i[1]}));n.push([e.i,".u-collapsable[data-v-a456c29c]{text-align:center}.u-collapsable__button[data-v-a456c29c],.u-collapsable__headline[data-v-a456c29c]{margin-top:1.25rem}.u-collapsable__element-list[data-v-a456c29c]{display:flex;flex-flow:column nowrap;gap:2rem;justify-content:center;list-style:none;margin-top:1.25rem;padding:initial}@media(min-width:36rem){.u-collapsable__element-list[data-v-a456c29c]{flex-flow:row wrap}.u-collapsable__element-list>*[data-v-a456c29c]{width:calc(50% - 2rem)}}@media(min-width:64rem){.u-collapsable__element-list>*[data-v-a456c29c]{width:calc(33.33333% - 2rem)}}",""]),n.locals={},e.exports=n},898:function(e,t,r){"use strict";r.r(t);var n=r(413),l=r(439),o=r(417),c={name:"Collapsable",components:{BaseCta:l.default,BaseHeadline:n.default},mixins:[o.a],data:function(){return{collapsed:!1}},computed:{expanded:function(){var e;return(null===(e=this.fields)||void 0===e?void 0:e.expanded)||!1},headline:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.headline},subHeadline:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.subHeadline},elements:function(){var e;return null===(e=this.fields)||void 0===e?void 0:e.elements}},methods:{toggleCollapsed:function(){this.collapsed=!this.collapsed}}},d=(r(844),r(72)),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"u-collapsable"},[e.expanded?e._e():t("base-cta",{class:["u-collapsable__button",{"u-collapsable__button--collapsed":e.collapsed}],attrs:{tertiary:""},on:{click:e.toggleCollapsed}},[e._v("\n    "+e._s(e.collapsed?e.$t("controls.showLess"):e.$t("controls.showMore"))+"\n  ")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.collapsed||e.expanded,expression:"collapsed || expanded"}],staticClass:"u-collapsable__body"},[t("base-headline",{staticClass:"u-collapsable__headline",attrs:{tag:"h3"}},[e._v(e._s(e.headline))]),e._v(" "),t("span",{staticClass:"u-headline2__sub-title u-collapsable__subHeadline"},[e._v(e._s(e.subHeadline))]),e._v(" "),t("ul",{staticClass:"u-collapsable__element-list"},e._l(e.elements,(function(element){return t("li",{staticClass:"u-collapsable__element"},[t(element.sys.contentType.sys.id,e._b({key:element.sys.id,tag:"component"},"component",element,!1))],1)})),0)],1)],1)}),[],!1,null,"a456c29c",null);t.default=component.exports;installComponents(component,{BaseCta:r(439).default,BaseHeadline:r(413).default})}}]);