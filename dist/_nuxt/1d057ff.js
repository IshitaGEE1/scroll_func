(window.webpackJsonp=window.webpackJsonp||[]).push([[36,19,48],{414:function(e,t,n){"use strict";n.r(t);var r={name:"BaseLink",props:{url:String,label:String,external:{type:Boolean,default:!0}}},l=(n(433),n(72)),component=Object(l.a)(r,(function(){var e=this;return(0,e._self._c)("a",{staticClass:"u-base-link",attrs:{href:e.url,target:e.external?"_blank":void 0,rel:e.external?"noopener noreferrer":void 0}},[e._t("default",(function(){return[e._v(e._s(e.label))]}))],2)}),[],!1,null,"236aa842",null);t.default=component.exports},417:function(e,t,n){"use strict";t.a={props:{fields:Object,metadata:Object,sys:Object}}},420:function(e,t,n){"use strict";n.r(t);var r=n(426),l=n(414),o=n(417),c={name:"ContentfulPageLink",components:{BaseLink:l.default},mixins:[o.a],props:{url:{type:String,required:!1},label:{type:String,required:!1}},computed:{processedLabel:function(){var e;return this.label||(null===(e=this.fields)||void 0===e?void 0:e.title)},processedUrl:function(){var e,t,n=this.url||(null===(e=this.fields)||void 0===e?void 0:e.urlSubfolder)+(null===(t=this.fields)||void 0===t?void 0:t.slug);if(n)return r.a.processLink(this.localePath({path:n}))}}},f=n(72),component=Object(f.a)(c,(function(){var e=this;return(0,e._self._c)("base-link",{class:["u-contentful-page-link"],attrs:{url:e.processedUrl,external:!1}},[e._t("default",(function(){return[e._v(e._s(e.processedLabel))]}))],2)}),[],!1,null,"e46543e8",null);t.default=component.exports;installComponents(component,{BaseLink:n(414).default})},421:function(e,t,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("49ac607e",content,!0,{sourceMap:!1})},426:function(e,t,n){"use strict";n(135);var r={processLink:function(e){return e.endsWith("/")?e:e+"/"}};t.a=r},433:function(e,t,n){"use strict";n(421)},434:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-base-link[data-v-236aa842]{color:var(--pink);font-size:1.25rem;letter-spacing:.0005em;line-height:1.5em}[href].u-base-link[data-v-236aa842]:hover{color:var(--blue)}",""]),r.locals={},e.exports=r}}]);