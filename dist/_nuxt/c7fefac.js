(window.webpackJsonp=window.webpackJsonp||[]).push([[1,19,36,48,61,67,68],{414:function(t,e,n){"use strict";n.r(e);var o={name:"BaseLink",props:{url:String,label:String,external:{type:Boolean,default:!0}}},r=(n(433),n(72)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("a",{staticClass:"u-base-link",attrs:{href:t.url,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0}},[t._t("default",(function(){return[t._v(t._s(t.label))]}))],2)}),[],!1,null,"236aa842",null);e.default=component.exports},417:function(t,e,n){"use strict";e.a={props:{fields:Object,metadata:Object,sys:Object}}},420:function(t,e,n){"use strict";n.r(e);var o=n(426),r=n(414),l=n(417),c={name:"ContentfulPageLink",components:{BaseLink:r.default},mixins:[l.a],props:{url:{type:String,required:!1},label:{type:String,required:!1}},computed:{processedLabel:function(){var t;return this.label||(null===(t=this.fields)||void 0===t?void 0:t.title)},processedUrl:function(){var t,e,n=this.url||(null===(t=this.fields)||void 0===t?void 0:t.urlSubfolder)+(null===(e=this.fields)||void 0===e?void 0:e.slug);if(n)return o.a.processLink(this.localePath({path:n}))}}},d=n(72),component=Object(d.a)(c,(function(){var t=this;return(0,t._self._c)("base-link",{class:["u-contentful-page-link"],attrs:{url:t.processedUrl,external:!1}},[t._t("default",(function(){return[t._v(t._s(t.processedLabel))]}))],2)}),[],!1,null,"e46543e8",null);e.default=component.exports;installComponents(component,{BaseLink:n(414).default})},421:function(t,e,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("49ac607e",content,!0,{sourceMap:!1})},426:function(t,e,n){"use strict";n(135);var o={processLink:function(t){return t.endsWith("/")?t:t+"/"}};e.a=o},427:function(t,e,n){"use strict";var o=n(2),r=n(269).trim;o({target:"String",proto:!0,forced:n(437)("trim")},{trim:function(){return r(this)}})},433:function(t,e,n){"use strict";n(421)},434:function(t,e,n){var o=n(86)((function(i){return i[1]}));o.push([t.i,".u-base-link[data-v-236aa842]{color:var(--pink);font-size:1.25rem;letter-spacing:.0005em;line-height:1.5em}[href].u-base-link[data-v-236aa842]:hover{color:var(--blue)}",""]),o.locals={},t.exports=o},437:function(t,e,n){"use strict";var o=n(109).PROPER,r=n(3),l=n(270);t.exports=function(t){return r((function(){return!!l[t]()||"​᠎"!=="​᠎"[t]()||o&&l[t].name!==t}))}},486:function(t,e,n){var content=n(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("7b393ce1",content,!0,{sourceMap:!1})},495:function(t,e,n){"use strict";n.r(e);var o={name:"IconCaret",props:{direction:{type:String,default:"down"}}},r=(n(525),n(72)),component=Object(r.a)(o,(function(){var t=this._self._c;return t("svg",{class:["u-icon-caret","u-icon-caret--".concat(this.direction)],staticStyle:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},attrs:{xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",width:"16",height:"9",viewBox:"0 0 32 18"}},[t("path",{staticStyle:{"fill-rule":"nonzero"},attrs:{d:"M9.336 10.182c-.173 0-.349-.033-.526-.098a1.386 1.386 0 0 1-.506-.34L.286 1.602C.092 1.405-.003 1.188 0 .951.004.715.102.498.297.301.491.104.706.005.942.005c.237 0 .452.099.646.296l7.748 7.868L17.095.291c.194-.198.407-.294.64-.291.233.004.446.104.64.301.195.197.292.416.292.656 0 .24-.097.458-.292.655l-8.007 8.132a1.435 1.435 0 0 1-.488.34 1.478 1.478 0 0 1-.544.098Z",transform:"translate(0 .273) scale(1.71428)"}})])}),[],!1,null,"82bb33ac",null);e.default=component.exports},501:function(t,e,n){var content=n(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("ead7f0ac",content,!0,{sourceMap:!1})},525:function(t,e,n){"use strict";n(486)},526:function(t,e,n){var o=n(86)((function(i){return i[1]}));o.push([t.i,".u-icon-caret[data-v-82bb33ac]{fill:currentColor;display:inline-block;height:auto;width:.8rem}.u-icon-caret--left[data-v-82bb33ac]{transform:rotate(90deg)}.u-icon-caret--right[data-v-82bb33ac]{transform:rotate(-90deg)}.u-icon-caret--up[data-v-82bb33ac]{transform:rotate(-180deg)}",""]),o.locals={},t.exports=o},544:function(t,e,n){"use strict";n.r(e);n(42),n(41),n(271),n(43),n(427);var o=n(414),r=n(420),l=n(179),c=n(417),d={name:"NavigationLink",components:{ContentfulPageLink:r.default,BaseLink:o.default},mixins:[c.a],props:{footer:Boolean,main:Boolean,area:{type:String,default:"header",validation:function(t){return["header","footer","actionBar"].includes(t)}}},computed:{isInternalPage:function(){var t;return Object.values(l.a.pages).includes(null===(t=this.sys)||void 0===t||null===(t=t.contentType)||void 0===t||null===(t=t.sys)||void 0===t?void 0:t.id)},url:function(){var t;if(this.isInternalPage){var data=this.fields,e=null==data?void 0:data.urlSubfolder,n=null==data?void 0:data.slug;return"".concat(e).concat(n)}return null===(t=this.fields)||void 0===t?void 0:t.url},label:function(){var t,e;return((null===(t=this.fields)||void 0===t?void 0:t.title)||(null===(e=this.fields)||void 0===e?void 0:e.label)).trim()}}},v=(n(551),n(72)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return t.isInternalPage?e("contentful-page-link",{staticClass:"u-navigation-link",attrs:{url:t.url,"data-area":t.area,"data-main":t.main}},[t._v("\n  "+t._s(t.label)+"\n")]):e("base-link",{staticClass:"u-navigation-link",attrs:{url:t.url,external:!0,"data-area":t.area,"data-main":t.main}},[t._v("\n  "+t._s(t.label)+"\n")])}),[],!1,null,"864be1e6",null);e.default=component.exports;installComponents(component,{ContentfulPageLink:n(420).default,BaseLink:n(414).default})},551:function(t,e,n){"use strict";n(501)},552:function(t,e,n){var o=n(86)((function(i){return i[1]}));o.push([t.i,'.u-navigation-link[data-v-864be1e6]{display:block}.u-navigation-link sup[data-v-864be1e6]{font-size:.75rem}.u-navigation-link[data-area=header][data-v-864be1e6]{color:var(--space-grey);font-size:16px;line-height:inherit;-webkit-text-decoration:none;text-decoration:none}@media(min-width:64rem){.u-navigation-link[data-area=header][data-v-864be1e6]{white-space:nowrap}}.u-navigation-link[data-area=header][data-v-864be1e6]:hover{color:var(--pink)}.u-navigation-link[data-area=header][data-main][data-v-864be1e6]{align-items:center;color:var(--space-grey);cursor:pointer;display:flex;font-family:"Good Headline Pro",sans-serif;font-size:1.125rem;font-weight:600;white-space:nowrap}@media(max-width:63.9375rem){.u-navigation-link[data-area=header][data-main][data-v-864be1e6]{justify-content:space-between}}.u-navigation-link[data-area=header][data-main][data-v-864be1e6]:hover{color:var(--blue)}.u-navigation-link[data-area=footer][data-v-864be1e6]{color:#fff!important;font-size:1rem;-webkit-text-decoration:none;text-decoration:none}.u-navigation-link[data-area=footer][data-v-864be1e6]:hover{-webkit-text-decoration:underline;text-decoration:underline}@media(max-width:63.9375rem){.u-navigation-link[data-area=footer][data-v-864be1e6]{font-size:16px;line-height:1.3125rem}}@media(min-width:64rem){.u-navigation-link[data-area=footer][data-v-864be1e6]{font-size:1rem;line-height:2rem}}.u-navigation-link[data-area=actionBar][data-v-864be1e6]{color:var(--blue);font-family:"Good Headline Pro",sans-serif;font-size:20px;-webkit-text-decoration:none;text-decoration:none}.u-navigation-link[data-area=actionBar][data-v-864be1e6]:hover{-webkit-text-decoration:underline;text-decoration:underline}.u-navigation-link[data-area=actionBar] sup[data-v-864be1e6]{color:var(--blue)}',""]),o.locals={},t.exports=o},567:function(t,e,n){var content=n(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("d29f9e82",content,!0,{sourceMap:!1})},593:function(t,e,n){"use strict";n.r(e);n(20),n(54);var o={name:"NavigationItem",components:{ContentfulPageLink:n(420).default},props:{url:String,logo:Object,title:String,description:String},computed:{logoSource:function(){var t;return null===(t=this.logo)||void 0===t||null===(t=t.file)||void 0===t?void 0:t.url}}},r=(n(602),n(72)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("contentful-page-link",{staticClass:"u-navigation-item",attrs:{url:t.url}},[e("img",{staticClass:"u-navigation-item__logo",attrs:{src:t.logoSource,width:"50",height:"50"}}),t._v(" "),e("b",{staticClass:"u-navigation-item__title"},[t._v(t._s(t.title)+" >")]),t._v(" "),e("p",{staticClass:"u-navigation-item__description"},[t._v(t._s(t.description))])])}),[],!1,null,"ab1508c4",null);e.default=component.exports;installComponents(component,{ContentfulPageLink:n(420).default})},602:function(t,e,n){"use strict";n(567)},603:function(t,e,n){var o=n(86)((function(i){return i[1]}));o.push([t.i,'.u-navigation-item[data-v-ab1508c4]{grid-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem;display:grid;grid-template:50px auto/50px auto;-webkit-text-decoration:none;text-decoration:none}.u-navigation-item[data-v-ab1508c4]:hover{--color:var(--pink)}.u-navigation-item__description[data-v-ab1508c4],.u-navigation-item__title[data-v-ab1508c4]{color:var(--color,var(--blue-darkest))}.u-navigation-item__logo[data-v-ab1508c4],.u-navigation-item__title[data-v-ab1508c4]{align-self:center}.u-navigation-item__title[data-v-ab1508c4]{font-family:"Good Headline Pro",sans-serif;font-size:1.125rem;line-height:1.5rem}.u-navigation-item__description[data-v-ab1508c4]{font-family:"Nunito",sans-serif;font-size:.9rem;grid-column-start:2;line-height:1.375rem;margin:initial;max-width:250px;width:-moz-max-content;width:max-content}@media(max-width:63.9375rem){.u-navigation-item__description[data-v-ab1508c4]{display:none}}',""]),o.locals={},t.exports=o},710:function(t,e,n){var content=n(774);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("46db9968",content,!0,{sourceMap:!1})},760:function(t,e,n){"use strict";n.r(e);n(20),n(54),n(42);var o=n(544),r=n(495),l=n(179),c=n(593),d=n(417),v=n(1),f={name:"NavigationSubSection",components:{NavigationItem:c.default,IconCaret:r.default,NavigationLink:o.default},mixins:[d.a],computed:{label:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.label},elements:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.elements},columns:function(){var t;return(null===(t=this.fields)||void 0===t?void 0:t.columns)||1},greyBackground:function(){var t;return null===(t=this.fields)||void 0===t?void 0:t.greyBackground}},methods:{isNavigationItem:function(t){var e;return(null===(e=t.sys)||void 0===e||null===(e=e.contentType)||void 0===e||null===(e=e.sys)||void 0===e?void 0:e.id)===l.a.elements.navigationItem},extractNavigationItemFields:function(t){var e,n,o,r,l;return{url:"".concat(null==t||null===(e=t.fields)||void 0===e||null===(e=e.linkedTo)||void 0===e||null===(e=e.fields)||void 0===e?void 0:e.urlSubfolder).concat(null==t||null===(n=t.fields)||void 0===n||null===(n=n.linkedTo)||void 0===n||null===(n=n.fields)||void 0===n?void 0:n.slug),title:null==t||null===(o=t.fields)||void 0===o||null===(o=o.linkedTo)||void 0===o||null===(o=o.fields)||void 0===o?void 0:o.title,logo:null==t||null===(r=t.fields)||void 0===r||null===(r=r.logo)||void 0===r?void 0:r.fields,description:null==t||null===(l=t.fields)||void 0===l?void 0:l.description}}}},m=function(){Object(v.useCssVars)((function(t,e){return{"7b3fff47":t.columns}}))},h=f.setup;f.setup=h?function(t,e){return m(),h(t,e)}:m;var _=f,k=(n(773),n(72)),component=Object(k.a)(_,(function(){var t=this,e=t._self._c;return e("div",{class:["u-navigation-sub-section",{"u-navigation-sub-section--grey":t.greyBackground}]},[e("div",{staticClass:"u-navigation-sub-section__title"},[e("span",{staticClass:"u-navigation-sub-section__label"},[t._v(t._s(t.label))])]),t._v(" "),e("div",{staticClass:"u-navigation-sub-section__elements",attrs:{"data-columns":t.columns}},[t._l(t.elements,(function(element){return[t.isNavigationItem(element)?e("navigation-item",t._b({key:"nav-subsection-link_".concat(element.sys.id)},"navigation-item",t.extractNavigationItemFields(element),!1)):e("navigation-link",t._b({key:"nav-subsection-link_".concat(element.sys.id),staticClass:"u-navigation-sub-section__link"},"navigation-link",element,!1))]}))],2)])}),[],!1,null,"30bdb66c",null);e.default=component.exports},773:function(t,e,n){"use strict";n(710)},774:function(t,e,n){var o=n(86)((function(i){return i[1]}));o.push([t.i,'.u-navigation-sub-section__title[data-v-30bdb66c]{align-items:center;color:var(--space-grey);cursor:pointer;display:flex;font-family:"Good Headline Pro",sans-serif;font-size:1.125rem;font-weight:700;margin-bottom:1rem;white-space:nowrap}.u-navigation-sub-section__title[data-v-30bdb66c] :not(:first-child){margin-left:.3125rem}@media(max-width:63.9375rem){.u-navigation-sub-section__title[data-v-30bdb66c]{justify-content:space-between}.u-navigation-sub-section__elements[data-v-30bdb66c]{margin-top:1.5rem}.u-navigation-sub-section__elements>*[data-v-30bdb66c]{margin-top:1rem}}@media(min-width:64rem){.u-navigation-sub-section--grey[data-v-30bdb66c]{background-color:var(--light-grey)}.u-navigation-sub-section__elements[data-columns][data-v-30bdb66c]{grid-gap:1rem 1rem;display:grid;gap:1rem 1rem;grid-template-columns:auto}.u-navigation-sub-section__elements[data-v-30bdb66c]:not([data-columns="1"]){grid-template-columns:repeat(2,max-content)}.u-navigation-sub-section__link[data-v-30bdb66c]:first-child{margin-top:1rem}}@media(min-width:1400px){.u-navigation-sub-section__elements[data-v-30bdb66c]:not([data-columns="1"]){grid-template-columns:repeat(var(--7b3fff47),max-content)}}',""]),o.locals={},t.exports=o}}]);