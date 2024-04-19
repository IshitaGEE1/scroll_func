(window.webpackJsonp=window.webpackJsonp||[]).push([[67,19,36,48],{414:function(t,e,n){"use strict";n.r(e);var o={name:"BaseLink",props:{url:String,label:String,external:{type:Boolean,default:!0}}},r=(n(433),n(72)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("a",{staticClass:"u-base-link",attrs:{href:t.url,target:t.external?"_blank":void 0,rel:t.external?"noopener noreferrer":void 0}},[t._t("default",(function(){return[t._v(t._s(t.label))]}))],2)}),[],!1,null,"236aa842",null);e.default=component.exports},417:function(t,e,n){"use strict";e.a={props:{fields:Object,metadata:Object,sys:Object}}},420:function(t,e,n){"use strict";n.r(e);var o=n(426),r=n(414),l=n(417),c={name:"ContentfulPageLink",components:{BaseLink:r.default},mixins:[l.a],props:{url:{type:String,required:!1},label:{type:String,required:!1}},computed:{processedLabel:function(){var t;return this.label||(null===(t=this.fields)||void 0===t?void 0:t.title)},processedUrl:function(){var t,e,n=this.url||(null===(t=this.fields)||void 0===t?void 0:t.urlSubfolder)+(null===(e=this.fields)||void 0===e?void 0:e.slug);if(n)return o.a.processLink(this.localePath({path:n}))}}},d=n(72),component=Object(d.a)(c,(function(){var t=this;return(0,t._self._c)("base-link",{class:["u-contentful-page-link"],attrs:{url:t.processedUrl,external:!1}},[t._t("default",(function(){return[t._v(t._s(t.processedLabel))]}))],2)}),[],!1,null,"e46543e8",null);e.default=component.exports;installComponents(component,{BaseLink:n(414).default})},421:function(t,e,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("49ac607e",content,!0,{sourceMap:!1})},426:function(t,e,n){"use strict";n(135);var o={processLink:function(t){return t.endsWith("/")?t:t+"/"}};e.a=o},433:function(t,e,n){"use strict";n(421)},434:function(t,e,n){var o=n(86)((function(i){return i[1]}));o.push([t.i,".u-base-link[data-v-236aa842]{color:var(--pink);font-size:1.25rem;letter-spacing:.0005em;line-height:1.5em}[href].u-base-link[data-v-236aa842]:hover{color:var(--blue)}",""]),o.locals={},t.exports=o},567:function(t,e,n){var content=n(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(87).default)("d29f9e82",content,!0,{sourceMap:!1})},593:function(t,e,n){"use strict";n.r(e);n(20),n(54);var o={name:"NavigationItem",components:{ContentfulPageLink:n(420).default},props:{url:String,logo:Object,title:String,description:String},computed:{logoSource:function(){var t;return null===(t=this.logo)||void 0===t||null===(t=t.file)||void 0===t?void 0:t.url}}},r=(n(602),n(72)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("contentful-page-link",{staticClass:"u-navigation-item",attrs:{url:t.url}},[e("img",{staticClass:"u-navigation-item__logo",attrs:{src:t.logoSource,width:"50",height:"50"}}),t._v(" "),e("b",{staticClass:"u-navigation-item__title"},[t._v(t._s(t.title)+" >")]),t._v(" "),e("p",{staticClass:"u-navigation-item__description"},[t._v(t._s(t.description))])])}),[],!1,null,"ab1508c4",null);e.default=component.exports;installComponents(component,{ContentfulPageLink:n(420).default})},602:function(t,e,n){"use strict";n(567)},603:function(t,e,n){var o=n(86)((function(i){return i[1]}));o.push([t.i,'.u-navigation-item[data-v-ab1508c4]{grid-column-gap:1rem;-moz-column-gap:1rem;column-gap:1rem;display:grid;grid-template:50px auto/50px auto;-webkit-text-decoration:none;text-decoration:none}.u-navigation-item[data-v-ab1508c4]:hover{--color:var(--pink)}.u-navigation-item__description[data-v-ab1508c4],.u-navigation-item__title[data-v-ab1508c4]{color:var(--color,var(--blue-darkest))}.u-navigation-item__logo[data-v-ab1508c4],.u-navigation-item__title[data-v-ab1508c4]{align-self:center}.u-navigation-item__title[data-v-ab1508c4]{font-family:"Good Headline Pro",sans-serif;font-size:1.125rem;line-height:1.5rem}.u-navigation-item__description[data-v-ab1508c4]{font-family:"Nunito",sans-serif;font-size:.9rem;grid-column-start:2;line-height:1.375rem;margin:initial;max-width:250px;width:-moz-max-content;width:max-content}@media(max-width:63.9375rem){.u-navigation-item__description[data-v-ab1508c4]{display:none}}',""]),o.locals={},t.exports=o}}]);