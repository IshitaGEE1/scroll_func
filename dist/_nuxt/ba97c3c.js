(window.webpackJsonp=window.webpackJsonp||[]).push([[50,15,18,19,35,48,62,65],{414:function(t,e,r){"use strict";r.r(e);var o={name:"BaseLink",props:{url:String,label:String,external:{type:Boolean,default:!0}}},n=(r(433),r(72)),component=Object(n.a)(o,(function(){var t=this;return(0,t._self._c)("a",{staticClass:"u-base-link",attrs:{href:t.url,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0}},[t._t("default",(function(){return[t._v(t._s(t.label))]}))],2)}),[],!1,null,"236aa842",null);e.default=component.exports},415:function(t,e,r){"use strict";r.r(e);r(42),r(267);var o={name:"BaseImage",props:{src:{type:String,required:!0},alt:{type:String,required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},lazy:{type:Boolean,required:!1,default:!1},cover:{type:Boolean,required:!1,default:!1}}},n=(r(429),r(72)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("picture",t._g({class:["u-base-image",{"u-base-image--cover":t.cover}]},t.$listeners),[t._t("default"),t._v(" "),e("img",{style:"max-width: ".concat(t.width,"px; max-height: ").concat(t.height,"px"),attrs:{src:t.src,alt:t.alt,width:t.width,height:t.height,loading:!!t.lazy&&"lazy"}})],2)}),[],!1,null,"664399b8",null);e.default=component.exports},417:function(t,e,r){"use strict";e.a={props:{fields:Object,metadata:Object,sys:Object}}},418:function(t,e,r){"use strict";r.r(e),r.d(e,"FitOptions",(function(){return c}));r(20),r(54),r(42),r(41),r(267),r(43);var o=r(415),n=r(435),l=r(417),c={PAD:"pad",FILL:"fill",SCALE:"scale"},d={name:"ContentfulImage",components:{BaseImage:o.default},mixins:[l.a],props:{url:String,title:String,size:{type:String,required:!1,default:n.a.DEFAULT},width:{type:[String,Number],required:!1,default:800},height:{type:[String,Number],required:!1,default:450},lazy:{type:Boolean,required:!1,default:!1},cover:{type:Boolean,required:!1,default:!1},fit:{type:String,required:!1,default:void 0}},computed:{asset:function(){return this.fields},isSvg:function(){var t;return null===(t=this.asset)||void 0===t||null===(t=t.file)||void 0===t||null===(t=t.url)||void 0===t?void 0:t.includes(".svg")},processedUrl:function(){var t,e="".concat(this.url||(null===(t=this.asset)||void 0===t||null===(t=t.file)||void 0===t?void 0:t.url),"?w=").concat(this.width,"&h=").concat(this.height);return this.fit&&(e+="&fit=".concat(this.fit)),e},processedAlt:function(){var t,e,r;return this.title||(null===(t=this.asset)||void 0===t?void 0:t.description)||(null===(e=this.asset)||void 0===e?void 0:e.title)||(null===(r=this.asset)||void 0===r||null===(r=r.file)||void 0===r?void 0:r.fileName)}}},f=(r(440),r(72)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("base-image",t._g({staticClass:"u-contentful-image",class:["u-contentful-image--".concat(t.size),{"u-contentful-image--svg":t.isSvg}],attrs:{src:t.processedUrl,alt:t.processedAlt,width:t.width,height:t.height,lazy:t.lazy,cover:t.cover}},t.$listeners),[t.isSvg?t._e():e("source",{attrs:{srcset:"".concat(t.processedUrl,"&fm=webp"),type:"image/webp"}})])}),[],!1,null,"48ea15a5",null);e.default=component.exports;installComponents(component,{BaseImage:r(415).default})},419:function(t,e,r){var content=r(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(87).default)("0b314dc2",content,!0,{sourceMap:!1})},421:function(t,e,r){var content=r(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(87).default)("49ac607e",content,!0,{sourceMap:!1})},427:function(t,e,r){"use strict";var o=r(2),n=r(269).trim;o({target:"String",proto:!0,forced:r(437)("trim")},{trim:function(){return n(this)}})},428:function(t,e,r){var content=r(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(87).default)("7f0509d6",content,!0,{sourceMap:!1})},429:function(t,e,r){"use strict";r(419)},430:function(t,e,r){var o=r(86)((function(i){return i[1]}));o.push([t.i,".u-base-image[data-v-664399b8]{display:block}.u-base-image img[data-v-664399b8]{display:block;margin:0 auto}.u-base-image:not(.u-base-image--svg) img[data-v-664399b8]{height:auto;-o-object-fit:contain;object-fit:contain;width:100%}.u-base-image.u-base-image--cover img[data-v-664399b8]{max-width:none!important;-o-object-fit:cover;object-fit:cover}",""]),o.locals={},t.exports=o},431:function(t,e,r){"use strict";r.r(e);r(55),r(267),r(12),r(33),r(110),r(27);var o=r(467),n=new(r.n(o).a.Converter),l={name:"MarkdownText",props:{text:String,center:{type:Boolean,default:!1},imageScaling:{type:Number,default:1200}},computed:{convertedText:function(){return n.makeHtml(this.text)}},mounted:function(){this.updateLists(),this.updateImageSources(),this.updateExternalLinks()},methods:{updateLists:function(){Array.from(this.$el.querySelectorAll("ul")).forEach((function(i){i.classList.add("u-base-list")}))},updateExternalLinks:function(){Array.from(this.$el.querySelectorAll("a")).forEach((function(i){i.href.startsWith("https://www.productsup.com/")||(i.target="_blank",i.rel="noopener noreferrer")}))},updateImageSources:function(){var t=this;Array.from(this.$el.querySelectorAll("img")).forEach((function(i){var e=i.src.indexOf("?");if(-1!==e){var r=i.src.substr(e).indexOf("fm")>-1,o=i.src.substr(e).indexOf("w")>-1;r||(i.src+="&fm=webp"),o||(i.src+="&w=700")}else i.src+="?fm=webp&w=".concat(t.imageScaling)}))}}},c=(r(446),r(72)),component=Object(c.a)(l,(function(){var t=this;return(0,t._self._c)("div",{class:["u-markdown",{"u-markdown--centered":t.center}],domProps:{innerHTML:t._s(t.convertedText)}})}),[],!1,null,"b683d0aa",null);e.default=component.exports},432:function(t,e,r){var content=r(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(87).default)("686c03c8",content,!0,{sourceMap:!1})},433:function(t,e,r){"use strict";r(421)},434:function(t,e,r){var o=r(86)((function(i){return i[1]}));o.push([t.i,".u-base-link[data-v-236aa842]{color:var(--pink);font-size:1.25rem;letter-spacing:.0005em;line-height:1.5em}[href].u-base-link[data-v-236aa842]:hover{color:var(--blue)}",""]),o.locals={},t.exports=o},435:function(t,e,r){"use strict";e.a={DEFAULT:"default",SMALL:"small",MEDIUM:"medium",LARGE:"large",X_LARGE:"xl"}},437:function(t,e,r){"use strict";var o=r(109).PROPER,n=r(3),l=r(270);t.exports=function(t){return n((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||o&&l[t].name!==t}))}},439:function(t,e,r){"use strict";r.r(e),r.d(e,"Types",(function(){return l}));r(451);var o=r(5),n=(r(46),r(32),r(55),r(41),r(12),r(43),r(33),r(427),r(455)),l={PRIMARY:"primary",SECONDARY:"secondary",TERTIARY:"tertiary"},c={name:"BaseCta",components:{IconEast:n.default},props:{url:String,external:Boolean,block:Boolean,secondary:Boolean,tertiary:Boolean,small:Boolean,contras:Boolean,entryId:String,targetId:String,targetArea1:String},computed:{type:function(){return this.secondary?l.SECONDARY:this.tertiary?l.TERTIARY:l.PRIMARY},primary:function(){return!(this.secondary||this.tertiary)}},methods:{clickFunction1:function(t){t.preventDefault(),this.scrollTarget1()},clickFunction2:function(t){return t.preventDefault(),this.scrollTarget2(),!1},scrollTarget1:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=["Explore now","Jetzt erkunden"],(r=Array.from(document.querySelectorAll("*")).filter((function(t){var r=t.textContent.trim();return e.includes(r)}))).length>0?r[0].scrollIntoView({behavior:"smooth"}):console.log("No matching elements found.");case 3:case"end":return t.stop()}}),t)})))()},scrollTarget2:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=["Explore Product Guard PX now!","Product Guard PX erkunden"],(r=Array.from(document.querySelectorAll("*")).filter((function(t){var r=t.textContent.trim();return e.includes(r)}))).length>0?r[0].scrollIntoView({behavior:"smooth"}):console.log("No matching elements found.");case 3:case"end":return t.stop()}}),t)})))()}}},d=(r(458),r(72)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return"https://www.productsup.com/pharmaceutical_manufacturers"==t.url?e("a",t._g({class:["u-base-cta","u-base-cta--".concat(t.type),{"u-base-cta--small":t.small},{"u-base-cta--block":t.block}],attrs:{href:t.url,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0},on:{click:t.clickFunction1}},t.$listeners),[t.primary&&!t.small?e("icon-east"):t._e(),t._v(" "),t._t("default")],2):"https://www.productsup.com/e-pharmacy"==t.url?e("a",t._g({class:["u-base-cta","u-base-cta--".concat(t.type),{"u-base-cta--small":t.small},{"u-base-cta--block":t.block}],attrs:{href:t.url,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0},on:{click:t.clickFunction2}},t.$listeners),[t.primary&&!t.small?e("icon-east"):t._e(),t._v(" "),t._t("default")],2):t.url?e("a",t._g({class:["u-base-cta","u-base-cta--".concat(t.type),{"u-base-cta--small":t.small},{"u-base-cta--block":t.block}],attrs:{href:t.url,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0}},t.$listeners),[t.primary&&!t.small?e("icon-east"):t._e(),t._v(" "),t._t("default")],2):e("button",t._g({class:["u-base-cta","u-base-cta--".concat(t.type),{"u-base-cta--small":t.small},{"u-base-cta--block":t.block}]},t.$listeners),[t.primary&&!t.small?e("icon-east"):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"155312ff",null);e.default=component.exports},440:function(t,e,r){"use strict";r(428)},441:function(t,e,r){var o=r(86)((function(i){return i[1]}));o.push([t.i,".u-contentful-image--small[data-v-48ea15a5] img{max-height:4rem!important}.u-contentful-image--medium[data-v-48ea15a5] img{max-height:8rem!important}.u-contentful-image--large[data-v-48ea15a5] img{max-height:16rem!important}.u-contentful-image--xl[data-v-48ea15a5] img{max-height:32rem!important}",""]),o.locals={},t.exports=o},442:function(t,e,r){var content=r(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(87).default)("630502a4",content,!0,{sourceMap:!1})},443:function(t,e,r){var content=r(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(87).default)("73ade0a6",content,!0,{sourceMap:!1})},446:function(t,e,r){"use strict";r(432)},447:function(t,e,r){var o=r(86)((function(i){return i[1]}));o.push([t.i,'.u-markdown[data-v-b683d0aa] ol,.u-markdown[data-v-b683d0aa] ul{font-size:1.25rem;letter-spacing:.005em;line-height:1.3;margin:initial}.u-markdown[data-v-b683d0aa] ol>li,.u-markdown[data-v-b683d0aa] ul>li{color:var(--text-color)}.u-markdown[data-v-b683d0aa] ol>li:not(:first-child),.u-markdown[data-v-b683d0aa] ul>li:not(:first-child){margin-top:1.25rem}.u-markdown[data-v-b683d0aa] ul:is(ul){list-style:none;padding:initial}.u-markdown[data-v-b683d0aa] ul:is(ul)>li{align-items:baseline;display:flex}.u-markdown[data-v-b683d0aa] ul:is(ul)>li:before{color:var(--pink);content:"/";flex-shrink:0;margin-right:10px}.u-markdown[data-v-b683d0aa] ol:is(ol) li::marker{color:var(--pink)}.u-markdown--centered[data-v-b683d0aa]{text-align:center}*+.u-markdown[data-v-b683d0aa] ol,*+.u-markdown[data-v-b683d0aa] ul{margin-bottom:1rem;margin-top:1rem}.u-markdown[data-v-b683d0aa] iframe,.u-markdown[data-v-b683d0aa] img,.u-markdown[data-v-b683d0aa] video{max-width:100%}.u-markdown[data-v-b683d0aa] *+h2,.u-markdown[data-v-b683d0aa] *+h3{margin-top:2.5rem}',""]),o.locals={},t.exports=o},449:function(t,e,r){"use strict";var o=r(4),n=r(29),l=r(13),c=/"/g,d=o("".replace);t.exports=function(t,e,r,o){var f=l(n(t)),m="<"+e;return""!==r&&(m+=" "+r+'="'+d(l(o),c,"&quot;")+'"'),m+">"+f+"</"+e+">"}},450:function(t,e,r){"use strict";var o=r(3);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},451:function(t,e,r){"use strict";var o=r(2),n=r(449);o({target:"String",proto:!0,forced:r(450)("small")},{small:function(){return n(this,"small","","")}})},453:function(t,e,r){"use strict";r(442)},454:function(t,e,r){var o=r(86)((function(i){return i[1]}));o.push([t.i,"svg[data-v-16a8718c]{fill:currentColor;height:1em;width:1em}",""]),o.locals={},t.exports=o},455:function(t,e,r){"use strict";r.r(e);var o={name:"IconEast"},n=(r(453),r(72)),component=Object(n.a)(o,(function(){var t=this._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"48",viewBox:"0 -960 960 960",width:"48"}},[t("path",{attrs:{d:"m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z"}})])}),[],!1,null,"16a8718c",null);e.default=component.exports},458:function(t,e,r){"use strict";r(443)},459:function(t,e,r){var o=r(86)((function(i){return i[1]}));o.push([t.i,".u-base-cta[data-v-155312ff]{--focus-shadow:0 0 0 3px rgba(0,169,255,.35);align-items:center;border:initial;border-radius:28px;color:#fff;display:inline-flex;font-size:20px;font-weight:700;gap:8px;letter-spacing:0;line-height:24px;min-height:56px;outline:medium none invert;outline:initial;text-decoration:none;text-decoration:initial}.u-base-cta[data-v-155312ff]:focus{box-shadow:var(--focus-shadow)}.u-base-cta--primary[data-v-155312ff]{--shadow:0 8px 18px 0 rgba(15,25,45,.2);background-color:var(--pink);box-shadow:0 8px 18px 0 rgba(15,25,45,.2);box-shadow:var(--shadow);padding-left:24px;padding-right:24px}.u-base-cta--primary[data-v-155312ff]:focus{box-shadow:var(--shadow),var(--focus-shadow)}.u-base-cta--primary.active[data-v-155312ff],.u-base-cta--primary[data-v-155312ff]:active,.u-base-cta--primary[data-v-155312ff]:hover{background-color:var(--pink-lighten)}.u-base-cta--small[data-v-155312ff]{font-size:1rem;min-height:35px;padding-left:16px;padding-right:16px}.u-base-cta--secondary[data-v-155312ff]{background-color:var(--blue-darkest);padding-left:28px;padding-right:28px}.u-base-cta--secondary.active[data-v-155312ff],.u-base-cta--secondary[data-v-155312ff]:active,.u-base-cta--secondary[data-v-155312ff]:hover{background-color:var(--blue-darkest-lighten)}.u-base-cta--tertiary[data-v-155312ff]{background-color:#fff;background-color:var(--tertiary-cta-background,#fff);border:2px solid var(--tertiary-cta-border,var(--blue-darkest));border-radius:28px;color:var(--tertiary-cta-font,var(--blue-darkest));padding-left:28px;padding-right:28px}.u-base-cta--tertiary.active[data-v-155312ff],.u-base-cta--tertiary[data-v-155312ff]:active,.u-base-cta--tertiary[data-v-155312ff]:hover{background-color:var(--tertiary-cta-background-hover,var(--blue-darkest));border-color:#fff;border-color:var(--tertiary-cta-border-hover,#fff);color:#fff;color:var(--tertiary-cta-font-hover,#fff)}",""]),o.locals={},t.exports=o},621:function(t,e,r){var content=r(685);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(87).default)("20af2348",content,!0,{sourceMap:!1})},684:function(t,e,r){"use strict";r(621)},685:function(t,e,r){var o=r(86)((function(i){return i[1]}));o.push([t.i,".u-customer-sidebar[data-v-d610a0d6]{display:flex;flex-flow:column nowrap}@media(min-width:36rem){.u-customer-sidebar[data-v-d610a0d6]{width:33.3333333333%}}.u-customer-sidebar>*[data-v-d610a0d6]{background-color:#fff;padding:2rem}.u-customer-sidebar[data-v-d610a0d6]>:not(:first-child){margin-top:2rem}.u-customer-sidebar__about[data-v-d610a0d6] :first-child,.u-customer-sidebar__profile-box[data-v-d610a0d6] :first-child,.u-customer-sidebar__story[data-v-d610a0d6] :first-child{margin-top:0}.u-customer-sidebar__button-wrapper[data-v-d610a0d6]{margin-top:1.875rem;text-align:center}",""]),o.locals={},t.exports=o},766:function(t,e,r){"use strict";r.r(e);var o=r(431),n=r(415),l=r(417),c=r(418),d=r(414),f={name:"CustomerSidebar",components:{BaseCta:r(439).default,BaseLink:d.default,ContentfulImage:c.default,BaseImage:n.default,MarkdownText:o.default},mixins:[l.a],computed:{profile:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.profile},about:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.about},homepage:function(){var t;return null===(t=this.fields)||void 0===t||null===(t=t.homepage)||void 0===t?void 0:t.fields},homepageUrl:function(){var t;return null===(t=this.homepage)||void 0===t?void 0:t.url},homepageLabel:function(){var t;return null===(t=this.homepage)||void 0===t?void 0:t.label},customerLogo:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.customerLogo},action:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.action},actionType:function(){var t;return null===(t=this.fields)||void 0===t||null===(t=t.action)||void 0===t||null===(t=t.sys)||void 0===t||null===(t=t.contentType)||void 0===t||null===(t=t.sys)||void 0===t?void 0:t.id}}},m=(r(684),r(72)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"u-customer-sidebar"},[t.customerLogo?e("contentful-image",t._b({staticClass:"u-customer-sidebar__customer-logo"},"contentful-image",t.customerLogo,!1)):t._e(),t._v(" "),t.profile||t.homepage?e("div",{staticClass:"u-customer-sidebar__profile-box"},[t.profile?e("markdown-text",{staticClass:"u-customer-sidebar__profile-text",attrs:{text:t.profile}}):t._e(),t._v(" "),t.homepage?e("base-cta",{attrs:{url:t.homepageUrl,external:"",block:""}},[t._v("\n      "+t._s(t.homepageLabel)+"\n    ")]):t._e()],1):t._e(),t._v(" "),t.about||t.action?e("div",{staticClass:"u-customer-sidebar__about"},[t.about?e("markdown-text",{attrs:{text:t.about}}):t._e(),t._v(" "),e("div",{staticClass:"u-customer-sidebar__button-wrapper"},[t.action&&t.actionType?e(t.actionType,t._b({tag:"component",staticClass:"u-customer-sidebar__action"},"component",t.action,!1)):t._e()],1)],1):t._e()],1)}),[],!1,null,"d610a0d6",null);e.default=component.exports;installComponents(component,{ContentfulImage:r(418).default,BaseCta:r(439).default})}}]);