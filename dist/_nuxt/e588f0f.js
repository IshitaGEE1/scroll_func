(window.webpackJsonp=window.webpackJsonp||[]).push([[30,17,18,24],{413:function(e,t,o){"use strict";o.r(t);o(41),o(23),o(66),o(422);var r={name:"BaseHeadline",props:{tag:{type:String,default:"h1",validate:function(e){return["h1","h2","h3","h4","h5","h6"].includes(e)}},center:{type:Boolean,default:!1},text:String},computed:{_text:function(){var e;return null===(e=this.text)||void 0===e||null===(e=e.replaceAll("[[",'<span class="u-base-headline--contrast">'))||void 0===e?void 0:e.replaceAll("]]","</span>")}}},n=(o(424),o(72)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return e.text?t(e.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":e.center}],domProps:{innerHTML:e._s(e._text)}}):t(e.tag,{tag:"component",class:["u-base-headline",{"u-base-headline--centered":e.center}]},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},415:function(e,t,o){"use strict";o.r(t);o(42),o(267);var r={name:"BaseImage",props:{src:{type:String,required:!0},alt:{type:String,required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},lazy:{type:Boolean,required:!1,default:!1},cover:{type:Boolean,required:!1,default:!1}}},n=(o(429),o(72)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("picture",e._g({class:["u-base-image",{"u-base-image--cover":e.cover}]},e.$listeners),[e._t("default"),e._v(" "),t("img",{style:"max-width: ".concat(e.width,"px; max-height: ").concat(e.height,"px"),attrs:{src:e.src,alt:e.alt,width:e.width,height:e.height,loading:!!e.lazy&&"lazy"}})],2)}),[],!1,null,"664399b8",null);t.default=component.exports},416:function(e,t,o){var content=o(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(87).default)("6f83e24a",content,!0,{sourceMap:!1})},419:function(e,t,o){var content=o(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(87).default)("0b314dc2",content,!0,{sourceMap:!1})},422:function(e,t,o){"use strict";o(423)},423:function(e,t,o){"use strict";var r=o(2),n=o(10),l=o(4),d=o(29),c=o(7),m=o(47),f=o(178),h=o(13),v=o(67),w=o(177),I=o(268),y=o(8),x=o(25),_=y("replace"),M=TypeError,C=l("".indexOf),D=l("".replace),S=l("".slice),N=Math.max;r({target:"String",proto:!0},{replaceAll:function(e,t){var o,r,l,y,j,H,B,k,A,Z=d(this),L=0,T=0,z="";if(!m(e)){if((o=f(e))&&(r=h(d(w(e))),!~C(r,"g")))throw new M("`.replaceAll` does not allow non-global regexes");if(l=v(e,_))return n(l,e,Z,t);if(x&&o)return D(h(Z),e,t)}for(y=h(Z),j=h(e),(H=c(t))||(t=h(t)),B=j.length,k=N(1,B),L=C(y,j);-1!==L;)A=H?h(t(j,L,y)):I(j,y,L,[],void 0,t),z+=S(y,T,L)+A,T=L+B,L=L+k>y.length?-1:C(y,j,L+k);return T<y.length&&(z+=S(y,T)),z}})},424:function(e,t,o){"use strict";o(416)},425:function(e,t,o){var r=o(86)((function(i){return i[1]}));r.push([e.i,".u-base-headline--centered{text-align:center}.u-base-headline--centered:before{margin-left:auto;margin-right:auto}.u-base-headline>.u-base-headline--contrast{-webkit-text-fill-color:transparent;background:var(--headline-contrast);-webkit-background-clip:text}@media(min-width:36rem){h2.u-base-headline--centered{margin-left:auto;margin-right:auto;max-width:66%}}@media(min-width:1440px){h2.u-base-headline--centered{max-width:792px}}",""]),r.locals={},e.exports=r},429:function(e,t,o){"use strict";o(419)},430:function(e,t,o){var r=o(86)((function(i){return i[1]}));r.push([e.i,".u-base-image[data-v-664399b8]{display:block}.u-base-image img[data-v-664399b8]{display:block;margin:0 auto}.u-base-image:not(.u-base-image--svg) img[data-v-664399b8]{height:auto;-o-object-fit:contain;object-fit:contain;width:100%}.u-base-image.u-base-image--cover img[data-v-664399b8]{max-width:none!important;-o-object-fit:cover;object-fit:cover}",""]),r.locals={},e.exports=r},470:function(e,t,o){"use strict";o.r(t);var r={name:"BaseModalDialog",components:{BaseHeadline:o(413).default},props:{type:{type:String,default:"default"},maxWidth:{type:String,default:void 0}},methods:{closeModal:function(e){(e.target.matches(".u-base-modal-dialog")||e.target.closest(".u-base-modal-dialog__close-button"))&&this.$emit("close")}},mounted:function(){document.body.classList.add("u-force-overflow-hidden")},destroyed:function(){document.body.classList.remove("u-force-overflow-hidden")}},n=(o(517),o(72)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("div",{class:["u-base-modal-dialog","u-base-modal-dialog--".concat(e.type)],on:{click:e.closeModal}},[t("button",{staticClass:"u-base-modal-dialog__close-button",attrs:{type:"button"}},[t("svg",{staticClass:"u-base-modal-dialog__button-icon",attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M16.4166 3.58334C16.0832 3.25001 15.5832 3.25001 15.2499 3.58334L9.99992 8.83334L4.74992 3.58334C4.41658 3.25001 3.91659 3.25001 3.58325 3.58334C3.24992 3.91668 3.24992 4.41668 3.58325 4.75001L8.83325 10L3.58325 15.25C3.24992 15.5833 3.24992 16.0833 3.58325 16.4167C3.74992 16.5833 3.91658 16.6667 4.16658 16.6667C4.41658 16.6667 4.58325 16.5833 4.74992 16.4167L9.99992 11.1667L15.2499 16.4167C15.4166 16.5833 15.6666 16.6667 15.8332 16.6667C15.9999 16.6667 16.2499 16.5833 16.4166 16.4167C16.7499 16.0833 16.7499 15.5833 16.4166 15.25L11.1666 10L16.4166 4.75001C16.7499 4.41668 16.7499 3.91668 16.4166 3.58334Z",fill:"#353332"}})])]),e._v(" "),t("div",{staticClass:"u-base-modal-dialog__content",style:{"max-width":e.maxWidth}},[e._t("default",(function(){return[t("base-headline",{attrs:{tag:"h3"}},[e._v("FILL IN YOUR CONTENT")])]}))],2)])}),[],!1,null,"c832b194",null);t.default=component.exports;installComponents(component,{BaseHeadline:o(413).default})},482:function(e,t,o){var content=o(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(87).default)("366db168",content,!0,{sourceMap:!1})},499:function(e,t,o){"use strict";t.a={DIMENSIONS_850x478:{WIDTH:850,HEIGHT:478},DIMENSIONS_1200x675:{WIDTH:1200,HEIGHT:675}}},517:function(e,t,o){"use strict";o(482)},518:function(e,t,o){var r=o(86),n=o(519),l=o(520),d=r((function(i){return i[1]})),c=n(l);d.push([e.i,".u-base-modal-dialog[data-v-c832b194]{align-items:center;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0,0,0,.8);bottom:0;display:flex;justify-content:center;left:0;overflow-x:hidden;overflow-y:auto;position:fixed;right:0;top:0;transition:opacity .3s ease;z-index:1000}.u-base-modal-dialog__close-button[data-v-c832b194]{background:no-repeat 50% url("+c+");border:initial;box-shadow:none;height:1.5625rem;padding:0;position:absolute;right:0;top:0;transform:translate(-50%,50%);width:1.5625rem;z-index:1}.u-base-modal-dialog__button-icon *[data-v-c832b194]{stroke:#ed362b;fill:#ed362b}.u-base-modal-dialog .u-hubspot-form[data-v-c832b194]{padding:2rem 0}.u-base-modal-dialog--wrapped .u-base-modal-dialog__content[data-v-c832b194]{background-color:#fff;border-radius:.5rem;box-shadow:0 .125rem .5rem rgba(0,0,0,.33);max-height:calc(100vh - 5rem);overflow:auto;padding:1.25rem 1.875rem 1.875rem;width:calc(100vw - 3.75rem)}",""]),d.locals={},e.exports=d},519:function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},520:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMjIgMjIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbnMvaWNvX2Nsb3NlPC90aXRsZT4KICAgIDxnIGlkPSJJY29ucy9pY29fY2xvc2UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cC00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjUxNDcxOSwgMi41MTQ3MTkpIiBmaWxsPSIjMzUzMzMyIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC40ODUyODEsIDguNDg1MjgxKSByb3RhdGUoNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTguNDg1MjgxLCAtOC40ODUyODEpICIgeD0iLTIuNTE0NzE4NjMiIHk9IjcuNDg1MjgxMzciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyIiByeD0iMSI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjQ4NTI4MSwgOC40ODUyODEpIHJvdGF0ZSgtNDUuMDAwMDAwKSB0cmFuc2xhdGUoLTguNDg1MjgxLCAtOC40ODUyODEpICIgeD0iLTIuNTE0NzE4NjMiIHk9IjcuNDg1MjgxMzciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyIiByeD0iMSI+PC9yZWN0PgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},543:function(e,t,o){var content=o(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(87).default)("43ed74d7",content,!0,{sourceMap:!1})},546:function(e,t,o){"use strict";o.r(t);var r=o(5),n=(o(46),o(42),o(12),o(48),o(415)),l=o(470),d=o(499),c={name:"BaseVimeoWrapper",components:{BaseModalDialog:l.default,BaseImage:n.default},props:{videoId:{type:String,required:!0},maxres:{type:Boolean,required:!1,default:!1},inline:{type:Boolean,required:!1,default:!1},videoDimensions:{type:Object,required:!1,default:function(){return d.a.DIMENSIONS_850x478}}},data:function(){return{showModal:!1,started:!1,thumbnailUrl:""}},computed:{videoIdEncoded:function(){return this.videoId},videoUrl:function(){return"https://player.vimeo.com/video/".concat(this.videoIdEncoded,"?autoplay=1")}},fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://vimeo.com/api/oembed.json?url=https://vimeo.com/".concat(e.videoIdEncoded)).then((function(e){return e.json()})).then((function(t){return e.thumbnailUrl="".concat(t.thumbnail_url.split("_")[0],"_").concat(e.videoDimensions.WIDTH,"x").concat(e.videoDimensions.HEIGHT)})).catch((function(e){return console.error("Error ocurred when fetching Thumbnail: ",e)}));case 2:case"end":return t.stop()}}),t)})))()})),methods:{toggleModal:function(){this.started=this.inline&&!this.started,this.showModal=!this.inline&&!this.showModal}}},m=c,f=(o(590),o(72)),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"u-base-vimeo-wrapper",class:{"u-base-vimeo-wrapper--inline":e.inline},style:"--video-max-width: ".concat(e.videoDimensions.WIDTH,"px")},[!e.started&&e.thumbnailUrl?t("base-image",{staticClass:"u-base-vimeo-wrapper__thumbnail",staticStyle:{"background-color":"#CCCCCC"},attrs:{src:e.thumbnailUrl,width:e.videoDimensions.WIDTH,height:e.videoDimensions.HEIGHT,lazy:""},on:{click:e.toggleModal}}):e._e(),e._v(" "),e._m(0),e._v(" "),e.inline&&e.started?t("div",{staticClass:"u-base-vimeo-wrapper__video-wrapper"},[t("iframe",{attrs:{src:e.videoUrl,title:"Vimeo video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}})]):e._e(),e._v(" "),e.showModal?t("base-modal-dialog",{on:{close:e.toggleModal}},[t("div",{staticClass:"u-base-vimeo-wrapper__video-wrapper"},[t("iframe",{attrs:{src:e.videoUrl,title:"Vimeo video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}})])]):e._e()],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"u-base-vimeo-wrapper__play-wrapper"},[e("span",{staticClass:"u-base-vimeo-wrapper__play"})])}],!1,null,"4952df1b",null);t.default=component.exports;installComponents(component,{BaseImage:o(415).default,BaseModalDialog:o(470).default})},590:function(e,t,o){"use strict";o(543)},591:function(e,t,o){var r=o(86)((function(i){return i[1]}));r.push([e.i,'.u-base-vimeo-wrapper[data-v-4952df1b]{cursor:pointer;position:relative}.u-base-vimeo-wrapper__thumbnail[data-v-4952df1b]{margin:0 auto;max-width:var(--video-max-width)}.u-base-vimeo-wrapper__play-wrapper[data-v-4952df1b]{left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%) scale(.7)}.u-base-vimeo-wrapper__play[data-v-4952df1b]{background:hsla(0,0%,39%,.8);border-radius:.3125rem;color:#fff;display:inline-block;font-size:2em;height:2em;margin:1.25rem auto;padding:0;position:relative;text-align:center;text-indent:.1em;transition:all .15s ease-out;width:3em}.u-base-vimeo-wrapper__play[data-v-4952df1b]:after{border-color:transparent transparent transparent #fff;border-style:solid;border-width:.5em 0 .5em .9em;content:"";font-size:.75em;height:0;left:52%;position:absolute;top:50%;transform:translate(-50%,-50%);width:0}.u-base-vimeo-wrapper:hover .u-base-vimeo-wrapper__play[data-v-4952df1b]{background:#00adef}.u-base-vimeo-wrapper__video-wrapper[data-v-4952df1b]{margin:0 auto;max-width:var(--video-max-width);position:relative}.u-base-vimeo-wrapper__video-wrapper[data-v-4952df1b]:before{content:"";display:block;padding-bottom:56.25%;width:100%}.u-base-vimeo-wrapper__video-wrapper iframe[data-v-4952df1b]{height:100%;left:0;position:absolute;top:0;width:100%}',""]),r.locals={},e.exports=r}}]);