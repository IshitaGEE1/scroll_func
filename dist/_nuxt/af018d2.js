(window.webpackJsonp=window.webpackJsonp||[]).push([[10,19,36,48,56,61,68],{414:function(e,t,n){"use strict";n.r(t);var o={name:"BaseLink",props:{url:String,label:String,external:{type:Boolean,default:!0}}},r=(n(433),n(72)),component=Object(r.a)(o,(function(){var e=this;return(0,e._self._c)("a",{staticClass:"u-base-link",attrs:{href:e.url,target:e.external?"_blank":void 0,rel:e.external?"noopener noreferrer":void 0}},[e._t("default",(function(){return[e._v(e._s(e.label))]}))],2)}),[],!1,null,"236aa842",null);t.default=component.exports},417:function(e,t,n){"use strict";t.a={props:{fields:Object,metadata:Object,sys:Object}}},420:function(e,t,n){"use strict";n.r(t);var o=n(426),r=n(414),l=n(417),c={name:"ContentfulPageLink",components:{BaseLink:r.default},mixins:[l.a],props:{url:{type:String,required:!1},label:{type:String,required:!1}},computed:{processedLabel:function(){var e;return this.label||(null===(e=this.fields)||void 0===e?void 0:e.title)},processedUrl:function(){var e,t,n=this.url||(null===(e=this.fields)||void 0===e?void 0:e.urlSubfolder)+(null===(t=this.fields)||void 0===t?void 0:t.slug);if(n)return o.a.processLink(this.localePath({path:n}))}}},d=n(72),component=Object(d.a)(c,(function(){var e=this;return(0,e._self._c)("base-link",{class:["u-contentful-page-link"],attrs:{url:e.processedUrl,external:!1}},[e._t("default",(function(){return[e._v(e._s(e.processedLabel))]}))],2)}),[],!1,null,"e46543e8",null);t.default=component.exports;installComponents(component,{BaseLink:n(414).default})},421:function(e,t,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("49ac607e",content,!0,{sourceMap:!1})},426:function(e,t,n){"use strict";n(135);var o={processLink:function(e){return e.endsWith("/")?e:e+"/"}};t.a=o},427:function(e,t,n){"use strict";var o=n(2),r=n(269).trim;o({target:"String",proto:!0,forced:n(437)("trim")},{trim:function(){return r(this)}})},433:function(e,t,n){"use strict";n(421)},434:function(e,t,n){var o=n(86)((function(i){return i[1]}));o.push([e.i,".u-base-link[data-v-236aa842]{color:var(--pink);font-size:1.25rem;letter-spacing:.0005em;line-height:1.5em}[href].u-base-link[data-v-236aa842]:hover{color:var(--blue)}",""]),o.locals={},e.exports=o},437:function(e,t,n){"use strict";var o=n(109).PROPER,r=n(3),l=n(270);e.exports=function(e){return r((function(){return!!l[e]()||"​᠎"!=="​᠎"[e]()||o&&l[e].name!==e}))}},486:function(e,t,n){var content=n(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("7b393ce1",content,!0,{sourceMap:!1})},495:function(e,t,n){"use strict";n.r(t);var o={name:"IconCaret",props:{direction:{type:String,default:"down"}}},r=(n(525),n(72)),component=Object(r.a)(o,(function(){var e=this._self._c;return e("svg",{class:["u-icon-caret","u-icon-caret--".concat(this.direction)],staticStyle:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},attrs:{xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",width:"16",height:"9",viewBox:"0 0 32 18"}},[e("path",{staticStyle:{"fill-rule":"nonzero"},attrs:{d:"M9.336 10.182c-.173 0-.349-.033-.526-.098a1.386 1.386 0 0 1-.506-.34L.286 1.602C.092 1.405-.003 1.188 0 .951.004.715.102.498.297.301.491.104.706.005.942.005c.237 0 .452.099.646.296l7.748 7.868L17.095.291c.194-.198.407-.294.64-.291.233.004.446.104.64.301.195.197.292.416.292.656 0 .24-.097.458-.292.655l-8.007 8.132a1.435 1.435 0 0 1-.488.34 1.478 1.478 0 0 1-.544.098Z",transform:"translate(0 .273) scale(1.71428)"}})])}),[],!1,null,"82bb33ac",null);t.default=component.exports},501:function(e,t,n){var content=n(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("ead7f0ac",content,!0,{sourceMap:!1})},525:function(e,t,n){"use strict";n(486)},526:function(e,t,n){var o=n(86)((function(i){return i[1]}));o.push([e.i,".u-icon-caret[data-v-82bb33ac]{fill:currentColor;display:inline-block;height:auto;width:.8rem}.u-icon-caret--left[data-v-82bb33ac]{transform:rotate(90deg)}.u-icon-caret--right[data-v-82bb33ac]{transform:rotate(-90deg)}.u-icon-caret--up[data-v-82bb33ac]{transform:rotate(-180deg)}",""]),o.locals={},e.exports=o},544:function(e,t,n){"use strict";n.r(t);n(42),n(41),n(271),n(43),n(427);var o=n(414),r=n(420),l=n(179),c=n(417),d={name:"NavigationLink",components:{ContentfulPageLink:r.default,BaseLink:o.default},mixins:[c.a],props:{footer:Boolean,main:Boolean,area:{type:String,default:"header",validation:function(e){return["header","footer","actionBar"].includes(e)}}},computed:{isInternalPage:function(){var e;return Object.values(l.a.pages).includes(null===(e=this.sys)||void 0===e||null===(e=e.contentType)||void 0===e||null===(e=e.sys)||void 0===e?void 0:e.id)},url:function(){var e;if(this.isInternalPage){var data=this.fields,t=null==data?void 0:data.urlSubfolder,n=null==data?void 0:data.slug;return"".concat(t).concat(n)}return null===(e=this.fields)||void 0===e?void 0:e.url},label:function(){var e,t;return((null===(e=this.fields)||void 0===e?void 0:e.title)||(null===(t=this.fields)||void 0===t?void 0:t.label)).trim()}}},f=(n(551),n(72)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return e.isInternalPage?t("contentful-page-link",{staticClass:"u-navigation-link",attrs:{url:e.url,"data-area":e.area,"data-main":e.main}},[e._v("\n  "+e._s(e.label)+"\n")]):t("base-link",{staticClass:"u-navigation-link",attrs:{url:e.url,external:!0,"data-area":e.area,"data-main":e.main}},[e._v("\n  "+e._s(e.label)+"\n")])}),[],!1,null,"864be1e6",null);t.default=component.exports;installComponents(component,{ContentfulPageLink:n(420).default,BaseLink:n(414).default})},551:function(e,t,n){"use strict";n(501)},552:function(e,t,n){var o=n(86)((function(i){return i[1]}));o.push([e.i,'.u-navigation-link[data-v-864be1e6]{display:block}.u-navigation-link sup[data-v-864be1e6]{font-size:.75rem}.u-navigation-link[data-area=header][data-v-864be1e6]{color:var(--space-grey);font-size:16px;line-height:inherit;-webkit-text-decoration:none;text-decoration:none}@media(min-width:64rem){.u-navigation-link[data-area=header][data-v-864be1e6]{white-space:nowrap}}.u-navigation-link[data-area=header][data-v-864be1e6]:hover{color:var(--pink)}.u-navigation-link[data-area=header][data-main][data-v-864be1e6]{align-items:center;color:var(--space-grey);cursor:pointer;display:flex;font-family:"Good Headline Pro",sans-serif;font-size:1.125rem;font-weight:600;white-space:nowrap}@media(max-width:63.9375rem){.u-navigation-link[data-area=header][data-main][data-v-864be1e6]{justify-content:space-between}}.u-navigation-link[data-area=header][data-main][data-v-864be1e6]:hover{color:var(--blue)}.u-navigation-link[data-area=footer][data-v-864be1e6]{color:#fff!important;font-size:1rem;-webkit-text-decoration:none;text-decoration:none}.u-navigation-link[data-area=footer][data-v-864be1e6]:hover{-webkit-text-decoration:underline;text-decoration:underline}@media(max-width:63.9375rem){.u-navigation-link[data-area=footer][data-v-864be1e6]{font-size:16px;line-height:1.3125rem}}@media(min-width:64rem){.u-navigation-link[data-area=footer][data-v-864be1e6]{font-size:1rem;line-height:2rem}}.u-navigation-link[data-area=actionBar][data-v-864be1e6]{color:var(--blue);font-family:"Good Headline Pro",sans-serif;font-size:20px;-webkit-text-decoration:none;text-decoration:none}.u-navigation-link[data-area=actionBar][data-v-864be1e6]:hover{-webkit-text-decoration:underline;text-decoration:underline}.u-navigation-link[data-area=actionBar] sup[data-v-864be1e6]{color:var(--blue)}',""]),o.locals={},e.exports=o},629:function(e,t,n){var content=n(697);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("385f2511",content,!0,{sourceMap:!1})},696:function(e,t,n){"use strict";n(629)},697:function(e,t,n){var o=n(86)((function(i){return i[1]}));o.push([e.i,'.u-footer-navigation-item[data-v-4d7f7c16]{color:var(--blue-darkest);display:block;font-family:"Nunito",sans-serif;font-size:1.0625rem;line-height:1.25rem;padding-bottom:.875rem;padding-top:.875rem;-webkit-text-decoration:none;text-decoration:none}',""]),o.locals={},e.exports=o},732:function(e,t,n){var content=n(849);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("8989d4be",content,!0,{sourceMap:!1})},768:function(e,t,n){"use strict";n.r(t);var o=n(420),r={name:"FooterNavigationItem",components:{BaseLink:n(414).default,ContentfulPageLink:o.default},props:{url:String,label:String,external:Boolean}},l=(n(696),n(72)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return e.external?t("base-link",{staticClass:"u-footer-navigation-item",attrs:{url:e.url,external:!0}},[e._v("\n  "+e._s(e.label)+"\n")]):t("contentful-page-link",{staticClass:"u-footer-navigation-item",attrs:{url:e.url}},[e._v("\n  "+e._s(e.label)+"\n")])}),[],!1,null,"4d7f7c16",null);t.default=component.exports;installComponents(component,{BaseLink:n(414).default,ContentfulPageLink:n(420).default})},848:function(e,t,n){"use strict";n(732)},849:function(e,t,n){var o=n(86)((function(i){return i[1]}));o.push([e.i,'.u-footer-section__toggle[data-v-3e8cb174]{align-items:center;background:transparent;border:none;color:var(--color,var(--blue-darkest));display:flex;padding:initial;white-space:nowrap}.u-footer-section__title[data-v-3e8cb174]{font-family:"Nunito",sans-serif;font-size:1.3rem;font-weight:800;letter-spacing:0;line-height:2.25rem}.u-footer-section__elements[data-v-3e8cb174]{display:flex;flex-direction:column;margin-top:1.3125rem}.u-footer-section__element-wrapper[data-v-3e8cb174]{padding-top:1.25rem}@media(max-width:63.9375rem){.u-footer-section:hover .u-footer-section__toggle[data-v-3e8cb174]{--color:var(--blue)}.u-footer-section__toggle[data-v-3e8cb174]{justify-content:space-between;width:100%}.u-footer-section__elements[data-v-3e8cb174]{animation:sweep .5s ease-in-out;padding-left:1.375rem}}@media(min-width:64rem){.u-footer-section__toggle>.arrow[data-v-3e8cb174]{display:none}.u-footer-section__elements[data-v-3e8cb174]{display:block!important}}',""]),o.locals={},e.exports=o},899:function(e,t,n){"use strict";n.r(t);var o=n(544),r=n(495),l={name:"FooterNavigationSection",components:{FooterNavigationItem:n(768).default,IconCaret:r.default,NavigationLink:o.default},props:{title:String,items:Array},data:function(){return{expanded:!1}}},c=(n(848),n(72)),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){return e.expanded=!1},expression:"() => expanded = false"}],staticClass:"u-footer-section"},[t("button",{staticClass:"u-footer-section__toggle",on:{click:function(t){e.expanded=!e.expanded}}},[t("span",{staticClass:"u-footer-section__title"},[e._v(e._s(e.title))]),e._v(" "),t("icon-caret",{staticClass:"arrow",attrs:{direction:e.expanded?"up":"down"}})],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.expanded,expression:"expanded"}],staticClass:"u-footer-section__elements"},e._l(e.items,(function(n){return t("footer-navigation-item",e._b({key:"footer_nav_item_".concat(n.label),staticClass:"u-footer-section__element"},"footer-navigation-item",n,!1))})),1)])}),[],!1,null,"3e8cb174",null);t.default=component.exports}}]);