(window.webpackJsonp=window.webpackJsonp||[]).push([[56,19,36,48],{414:function(e,t,n){"use strict";n.r(t);var l={name:"BaseLink",props:{url:String,label:String,external:{type:Boolean,default:!0}}},r=(n(433),n(72)),component=Object(r.a)(l,(function(){var e=this;return(0,e._self._c)("a",{staticClass:"u-base-link",attrs:{href:e.url,target:e.external?"_blank":void 0,rel:e.external?"noopener noreferrer":void 0}},[e._t("default",(function(){return[e._v(e._s(e.label))]}))],2)}),[],!1,null,"236aa842",null);t.default=component.exports},417:function(e,t,n){"use strict";t.a={props:{fields:Object,metadata:Object,sys:Object}}},420:function(e,t,n){"use strict";n.r(t);var l=n(426),r=n(414),o=n(417),c={name:"ContentfulPageLink",components:{BaseLink:r.default},mixins:[o.a],props:{url:{type:String,required:!1},label:{type:String,required:!1}},computed:{processedLabel:function(){var e;return this.label||(null===(e=this.fields)||void 0===e?void 0:e.title)},processedUrl:function(){var e,t,n=this.url||(null===(e=this.fields)||void 0===e?void 0:e.urlSubfolder)+(null===(t=this.fields)||void 0===t?void 0:t.slug);if(n)return l.a.processLink(this.localePath({path:n}))}}},f=n(72),component=Object(f.a)(c,(function(){var e=this;return(0,e._self._c)("base-link",{class:["u-contentful-page-link"],attrs:{url:e.processedUrl,external:!1}},[e._t("default",(function(){return[e._v(e._s(e.processedLabel))]}))],2)}),[],!1,null,"e46543e8",null);t.default=component.exports;installComponents(component,{BaseLink:n(414).default})},421:function(e,t,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("49ac607e",content,!0,{sourceMap:!1})},426:function(e,t,n){"use strict";n(135);var l={processLink:function(e){return e.endsWith("/")?e:e+"/"}};t.a=l},433:function(e,t,n){"use strict";n(421)},434:function(e,t,n){var l=n(86)((function(i){return i[1]}));l.push([e.i,".u-base-link[data-v-236aa842]{color:var(--pink);font-size:1.25rem;letter-spacing:.0005em;line-height:1.5em}[href].u-base-link[data-v-236aa842]:hover{color:var(--blue)}",""]),l.locals={},e.exports=l},629:function(e,t,n){var content=n(697);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("385f2511",content,!0,{sourceMap:!1})},696:function(e,t,n){"use strict";n(629)},697:function(e,t,n){var l=n(86)((function(i){return i[1]}));l.push([e.i,'.u-footer-navigation-item[data-v-4d7f7c16]{color:var(--blue-darkest);display:block;font-family:"Nunito",sans-serif;font-size:1.0625rem;line-height:1.25rem;padding-bottom:.875rem;padding-top:.875rem;-webkit-text-decoration:none;text-decoration:none}',""]),l.locals={},e.exports=l},768:function(e,t,n){"use strict";n.r(t);var l=n(420),r={name:"FooterNavigationItem",components:{BaseLink:n(414).default,ContentfulPageLink:l.default},props:{url:String,label:String,external:Boolean}},o=(n(696),n(72)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return e.external?t("base-link",{staticClass:"u-footer-navigation-item",attrs:{url:e.url,external:!0}},[e._v("\n  "+e._s(e.label)+"\n")]):t("contentful-page-link",{staticClass:"u-footer-navigation-item",attrs:{url:e.url}},[e._v("\n  "+e._s(e.label)+"\n")])}),[],!1,null,"4d7f7c16",null);t.default=component.exports;installComponents(component,{BaseLink:n(414).default,ContentfulPageLink:n(420).default})}}]);