(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{628:function(e,t,n){var content=n(695);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(87).default)("74d077fb",content,!0,{sourceMap:!1})},694:function(e,t,n){"use strict";n(628)},695:function(e,t,n){var r=n(86)((function(i){return i[1]}));r.push([e.i,".u-base-marquee[data-v-3568e255]{--fading-width:300px;--gap:4rem;--marquee-width:100%;--marquee-element-width:180px;overflow:hidden;position:relative;width:100%;width:var(--marquee-width)}@media(max-width:35.9375rem){.u-base-marquee[data-v-3568e255]{--displayed-elements:4!important}}@media(min-width:36rem)and (max-width:63.9375rem){.u-base-marquee[data-v-3568e255]{--displayed-elements:6!important}}.u-base-marquee__content[data-v-3568e255]{animation:scrolling-3568e255 var(--marquee-animation-duration) linear infinite;display:flex;height:100%;margin:initial;padding:initial}.u-base-marquee--reverse .u-base-marquee__content[data-v-3568e255]{animation:scrolling-3568e255 var(--marquee-animation-duration) linear infinite reverse}.u-base-marquee--fading[data-v-3568e255]{--webkit-mask-image:linear-gradient(to left,transparent 0%,#000 100px,#000 calc(100% - var(--fading-width)),transparent 100%);-webkit-mask-image:linear-gradient(to left,transparent 0,#000 100px,#000 calc(100% - var(--fading-width)),transparent 100%);mask-image:linear-gradient(to left,transparent 0,#000 100px,#000 calc(100% - var(--fading-width)),transparent 100%)}.u-base-marquee__content[data-v-3568e255] li{align-items:center;display:flex;flex-shrink:0;font-size:calc(var(--marquee-height)*3/4);justify-content:center;margin-left:var(--gap);max-height:100%;white-space:nowrap;width:var(--marquee-element-width)}.u-base-marquee__content[data-v-3568e255] img{width:100%}@keyframes scrolling-3568e255{0%{transform:translateX(0)}to{transform:translateX(calc((var(--marquee-element-width) + var(--gap))*-1*var(--marquee-elements)))}}",""]),r.locals={},e.exports=r},707:function(e,t,n){"use strict";n.r(t);n(267);var r={name:"Marquee",props:{duration:{type:Number,default:10},displayCount:{type:Number,default:10},reverse:{type:Boolean,default:!1},fading:{type:Boolean,default:!1}},mounted:function(){var e=getComputedStyle(this.$el).getPropertyValue("--displayed-elements"),t=this.$refs.content;this.$el.style.setProperty("--marquee-elements",t.children.length);for(var i=0;i<e;i++)t.appendChild(t.children[i].cloneNode(!0))}},l=(n(694),n(72)),component=Object(l.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:["u-base-marquee",{"u-base-marquee--reverse":e.reverse,"u-base-marquee--fading":e.fading}],style:{"--displayed-elements":e.displayCount,"--marquee-animation-duration":"".concat(e.duration,"s")}},[t("ul",{ref:"content",staticClass:"u-base-marquee__content"},[e._t("default")],2)])}),[],!1,null,"3568e255",null);t.default=component.exports}}]);