(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{570:function(e,t,n){var content=n(615);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("fdaa401a",content,!0,{sourceMap:!1})},614:function(e,t,n){"use strict";n(570)},615:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-category-switch[data-v-c6fbf71c]{width:100%}",""]),r.locals={},e.exports=r},650:function(e,t,n){"use strict";n.r(t);var r=n(5),o=(n(46),n(138)),c=Object(o.createClient)(),l={name:"CategorySwitch",props:{relatedType:{type:String,request:!0}},data:function(){return{categories:[]}},methods:{onChange:function(e){var t=e.target.value;t&&this.$emit("change",t)},getOptionValue:function(e){var t;return null==e||null===(t=e.fields)||void 0===t?void 0:t.slug},getOptionLabel:function(e){var t;return null==e||null===(t=e.fields)||void 0===t?void 0:t.label}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$i18n.locale,t.next=3,c.getEntries({content_type:"elementCategory","fields.relatedPageType":e.relatedType,locale:n,order:"fields.slug"}).then((function(t){e.categories=t.items})).catch(console.error);case 3:case"end":return t.stop()}}),t)})))()}},f=(n(614),n(72)),component=Object(f.a)(l,(function(){var e=this,t=e._self._c;return t("select",{staticClass:"u-category-switch",on:{change:e.onChange}},[t("option",[e._v(e._s(e.$t("controls.pleaseSelect")))]),e._v(" "),e._l(e.categories,(function(n,r){return t("option",{key:r,domProps:{value:e.getOptionValue(n)}},[e._v("\n    "+e._s(e.getOptionLabel(n))+"\n  ")])}))],2)}),[],!1,null,"c6fbf71c",null);t.default=component.exports}}]);