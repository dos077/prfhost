(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["client-chunk-galleries"],{"0789":function(e,t,i){"use strict";i.d(t,"c",(function(){return u})),i.d(t,"d",(function(){return c})),i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return h}));var r=i("d9f7");function n(e=[],...t){return Array().concat(e,...t)}function a(e,t="top center 0",i){return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:t}},render(t,i){const a="transition"+(i.props.group?"-group":""),s={props:{name:e,mode:i.props.mode},on:{beforeEnter(e){e.style.transformOrigin=i.props.origin,e.style.webkitTransformOrigin=i.props.origin}}};return i.props.leaveAbsolute&&(s.on.leave=n(s.on.leave,e=>e.style.position="absolute")),i.props.hideOnLeave&&(s.on.leave=n(s.on.leave,e=>e.style.display="none")),t(a,Object(r["a"])(i.data,s),i.children)}}}function s(e,t,i="in-out"){return{name:e,functional:!0,props:{mode:{type:String,default:i}},render(i,n){return i("transition",Object(r["a"])(n.data,{props:{name:e},on:t}),n.children)}}}var l=i("80d2"),o=function(e="",t=!1){const i=t?"width":"height",r="offset"+Object(l["w"])(i);return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,visibility:e.style.visibility,overflow:e.style.overflow,[i]:e.style[i]}},enter(t){const n=t._initialStyle,a=t[r]+"px";t.style.setProperty("transition","none","important"),t.style.visibility="hidden",t.style.visibility=n.visibility,t.style.overflow="hidden",t.style[i]="0",t.offsetHeight,t.style.transition=n.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame(()=>{t.style[i]=a})},afterEnter:a,enterCancelled:a,leave(e){e._initialStyle={transition:"",visibility:"",overflow:e.style.overflow,[i]:e.style[i]},e.style.overflow="hidden",e.style[i]=e[r]+"px",e.offsetHeight,requestAnimationFrame(()=>e.style[i]="0")},afterLeave:n,leaveCancelled:n};function n(t){e&&t._parent&&t._parent.classList.remove(e),a(t)}function a(e){const t=e._initialStyle[i];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[i]=t),delete e._initialStyle}};a("carousel-transition"),a("carousel-reverse-transition"),a("tab-transition"),a("tab-reverse-transition"),a("menu-transition"),a("fab-transition","center center","out-in"),a("dialog-transition"),a("dialog-bottom-transition");const u=a("fade-transition"),c=(a("scale-transition"),a("scroll-x-transition"),a("scroll-x-reverse-transition"),a("scroll-y-transition"),a("scroll-y-reverse-transition"),a("slide-x-transition")),d=(a("slide-x-reverse-transition"),a("slide-y-transition"),a("slide-y-reverse-transition"),s("expand-transition",o())),h=s("expand-x-transition",o("",!0))},"166a":function(e,t,i){},"297c":function(e,t,i){"use strict";var r=i("2b0e"),n=(i("6ece"),i("0789")),a=i("a9ad"),s=i("fe6c"),l=i("a452"),o=i("7560"),u=i("80d2"),c=i("58df");const d=Object(c["a"])(a["a"],Object(s["b"])(["absolute","fixed","top","bottom"]),l["a"],o["a"]);var h=d.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(u["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(u["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.$vuetify.rtl?"right":"left"]:Object(u["f"])(this.normalizedValue,"%"),width:Object(u["f"])(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,...this.themeClasses}},computedTransition(){return this.indeterminate?n["c"]:n["d"]},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(u["f"])(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=Object(u["m"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(u["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=h;t["a"]=r["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"5bfe":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav-content",{attrs:{title:e.collectionName,"bg-color":e.color},scopedSlots:e._u([{key:"nav",fn:function(){return[i("v-tabs",{staticStyle:{"justify-content":"center"},attrs:{vertical:e.isDesktop,grow:"","background-color":"rgba(0,0,0,0)","slider-size":"0","active-class":"current"}},e._l(e.galleries,(function(t){return i("v-tab",{key:t.id,attrs:{to:"/galleries/edit/"+t.id}},[e._v(" "+e._s(t.name)+" ")])})),1)]},proxy:!0},{key:"content",fn:function(){return[i("router-view")]},proxy:!0}])})},n=[],a=i("2f62"),s=i("ed9d"),l=i("4360");function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(i,!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var d={name:"Galleries",components:{NavContent:s["a"]},computed:u({},Object(a["c"])("galleries",["isDeletionPending"]),{},Object(a["e"])("galleries",{galleries:"items",collectionName:"collectionName",color:"color"}),{},Object(a["e"])("app",["networkOnline"]),{isDesktop:function(){return this.$vuetify.breakpoint.mdAndUp}}),created:function(){l["a"].state.galleries.items||l["a"].dispatch("galleries/getAll")}},h=d,p=i("2877"),f=i("6544"),m=i.n(f),g=i("71a3"),v=i("fe57"),y=Object(p["a"])(h,r,n,!1,null,"a6fd9752",null);t["default"]=y.exports;m()(y,{VTab:g["a"],VTabs:v["a"]})},"604c":function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));i("166a");var r=i("a452"),n=i("7560"),a=i("58df"),s=i("d9bd");const l=Object(a["a"])(r["a"],n["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((e,t)=>this.toggleMethod(this.getValue(e,t)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return e=>this.internalValue===e;const e=this.internalValue;return Array.isArray(e)?t=>e.includes(t):()=>!1}},watch:{internalValue(){this.$nextTick(this.updateItemsState)}},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(s["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(e,t){return null==e.value||""===e.value?t:e.value},onClick(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register(e){const t=this.items.push(e)-1;e.$on("change",()=>this.onClick(e)),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(e,t)},unregister(e){if(this._isDestroyed)return;const t=this.items.indexOf(e),i=this.getValue(e,t);this.items.splice(t,1);const r=this.selectedValues.indexOf(i);if(!(r<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(e=>e!==i):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(e,t){const i=this.getValue(e,t);e.isActive=this.toggleMethod(i)},updateItemsState(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory(e){if(!this.items.length)return;const t=this.items.slice();e&&t.reverse();const i=t.find(e=>!e.disabled);if(!i)return;const r=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,r))},updateMultiple(e){const t=Array.isArray(this.internalValue)?this.internalValue:[],i=t.slice(),r=i.findIndex(t=>t===e);this.mandatory&&r>-1&&i.length-1<1||null!=this.max&&r<0&&i.length+1>this.max||(r>-1?i.splice(r,1):i.push(e),this.internalValue=i)},updateSingle(e){const t=e===this.internalValue;this.mandatory&&t||(this.internalValue=t?void 0:e)}},render(e){return e("div",this.genData(),this.$slots.default)}});t["b"]=l.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},"615b":function(e,t,i){},"6ece":function(e,t,i){},"99d9":function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return o}));var r=i("b0af"),n=i("80d2");const a=Object(n["g"])("v-card__actions"),s=Object(n["g"])("v-card__subtitle"),l=Object(n["g"])("v-card__text"),o=Object(n["g"])("v-card__title");r["a"]},a452:function(e,t,i){"use strict";var r=i("2b0e");function n(e="value",t="change"){return r["a"].extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const a=n();t["a"]=a},afdd:function(e,t,i){"use strict";var r=i("8336");t["a"]=r["a"]},b0af:function(e,t,i){"use strict";i("615b");var r=i("10d2"),n=i("297c"),a=i("1c87"),s=i("58df");t["a"]=Object(s["a"])(n["a"],a["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...a["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...r["a"].options.computed.classes.call(this)}},styles(){const e={...r["a"].options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=n["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress"},[e]):null}},render(e){const{tag:t,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=client-chunk-galleries.c12e17b5.js.map