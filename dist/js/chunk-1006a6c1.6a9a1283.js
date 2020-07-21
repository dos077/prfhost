(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1006a6c1"],{"166a":function(t,e,i){},"169a":function(t,e,i){"use strict";i("368e");var n=i("480e"),a=i("4ad4"),s=i("b848"),r=i("75eb"),l=i("e707"),o=i("e4d3"),c=i("21be"),u=i("f2e7"),d=i("a293"),h=i("58df"),p=i("d9bd"),m=i("80d2");const g=Object(h["a"])(a["a"],s["a"],r["a"],l["a"],o["a"],c["a"],u["a"]);e["a"]=g.extend({name:"v-dialog",directives:{ClickOutside:d["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(p["d"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$refs.content.focus(),this.bind()})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===m["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t.length&&t[0].focus()}}},render(t){const e=[],i={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:t=>{t.stopPropagation()}},style:{}};this.fullscreen||(i.style={maxWidth:"none"===this.maxWidth?void 0:Object(m["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(m["f"])(this.width)}),e.push(this.genActivator());let a=t("div",i,this.showLazyContent(this.getContentSlot()));return this.transition&&(a=t("transition",{props:{name:this.transition,origin:this.origin}},[a])),e.push(t("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(n["a"],{props:{root:!0,light:this.light,dark:this.dark}},[a])])),t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},e)}})},"23a7":function(t,e,i){"use strict";i("5803");var n=i("2677"),a=i("cc20"),s=i("80d2"),r=i("d9bd");e["a"]=n["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:()=>[],validator:t=>"object"===typeof t||Array.isArray(t)}},computed:{classes(){return{...n["a"].options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce((t,e)=>t+e.size,0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(s["p"])(e,1024===this.base))},internalArrayValue(){return Array.isArray(this.internalValue)?this.internalValue:Object(s["x"])(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},isMultiple(){return this.$attrs.hasOwnProperty("multiple")},text(){return this.isDirty?this.internalArrayValue.map(t=>{const e=this.truncateText(t.name);return this.showSize?`${e} (${Object(s["p"])(t.size,1024===this.base)})`:e}):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&Object(r["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.isMultiple?t:t?[t]:[];Object(s["h"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map((t,e)=>this.$createElement(a["a"],{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t])):[]},genInput(){const t=n["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((e,i)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[i],file:e,index:i}))}):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection},on:{click:()=>this.$refs.input.click()}},t)},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},2677:function(t,e,i){"use strict";var n=i("8654");e["a"]=n["a"]},"27b3":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-overlay",{attrs:{value:t.loading,absolute:""}},[i("v-progress-circular",{attrs:{indeterminate:""}})],1),i("gallery-form",{attrs:{gallery:t.gallery,loading:t.loading}}),i("image-grid",{attrs:{gallery:t.gallery,loading:t.loading}})],1)},a=[],s=i("2f62"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"ma-4",attrs:{outlined:""}},[t.gallery?i("v-dialog",{attrs:{width:"80vw","max-width":"500px"},model:{value:t.dConfirm,callback:function(e){t.dConfirm=e},expression:"dConfirm"}},[i("v-card",{attrs:{dark:""}},[i("v-card-title",[t._v(" Press confirm to delete "+t._s(t.gallery.name)+" ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:function(e){t.dConfirm=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"red",outlined:""},on:{click:t.confirmDelete}},[t._v("Confirm")])],1)],1)],1):t._e(),t.storageError?i("v-alert",{staticClass:"ma-2",attrs:{color:"red lighten-3"}},[t._v(" "+t._s(t.storageError)+" ")]):t._e(),t.gallery?i("v-form",{on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[i("v-card-title",[i("v-text-field",{attrs:{value:t.gallery.name,label:"Title"},on:{input:t.nameInput}})],1),i("v-card-text",[i("v-file-input",{attrs:{accept:t.acceptableTypes,placeholder:"select image file for upload",disabled:t.limitReached,label:"Upload Image","prepend-icon":"mdi-camera",rules:t.imageRules},scopedSlots:t._u([{key:"append",fn:function(){return[i("span",{staticClass:"caption",class:{"red lighten-2":t.limitReached}},[t._v(" "+t._s(t.uploaderMsg)+" ")])]},proxy:!0}],null,!1,344312212),model:{value:t.imageFile,callback:function(e){t.imageFile=e},expression:"imageFile"}}),i("v-btn",{attrs:{color:"blue",text:"",disabled:t.loading||t.limitReached},on:{click:t.upload}},[t._v(" upload ")])],1)],1):t._e(),i("v-card-actions",[t.newName?i("v-btn",{attrs:{outlined:"",color:"success",disabled:t.loading},on:{click:t.save}},[t._v(" save "),i("v-icon",[t._v("mdi-content-save")])],1):t._e(),t.newName?t._e():i("v-btn",{attrs:{text:"",color:"success",disabled:t.loading},on:{click:function(e){return t.$router.push("/galleries")}}},[t._v("done")]),i("v-spacer"),i("v-btn",{attrs:{outlined:"",color:"red darken-2",disabled:t.loading},on:{click:function(e){t.dConfirm=!0}}},[t._v(" delete"),i("v-icon",[t._v("mdi-delete")])],1)],1)],1)},l=[],o=i("a34a"),c=i.n(o),u=i("55d1");function d(t,e,i,n,a,s,r){try{var l=t[s](r),o=l.value}catch(c){return void i(c)}l.done?e(o):Promise.resolve(o).then(n,a)}function h(t){return function(){var e=this,i=arguments;return new Promise((function(n,a){var s=t.apply(e,i);function r(t){d(s,n,a,r,l,"next",t)}function l(t){d(s,n,a,r,l,"throw",t)}r(void 0)}))}}function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(i,!0).forEach((function(e){g(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={name:"GalleryForm",props:{gallery:Object,loading:Boolean},data:function(){return{imageFile:null,newName:null,uploading:!1,dConfirm:!1,storageError:null,imageRules:u["c"],acceptableTypes:u["a"].join(",")}},computed:m({},Object(s["e"])("authentication",["user"]),{nImages:function(){return this.gallery.images?this.gallery.images.length:0},uploaderMsg:function(){return"".concat(this.nImages,"/").concat(u["b"]," slots used")},limitReached:function(){return this.nImages>=u["b"]}}),methods:m({},Object(s["b"])("galleries",{update:"update",deleteGallery:"deleteGallery",addImage:"addImage"}),{changeFile:function(){var t=h(c.a.mark((function t(e){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.imageFile=e;case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),nameInput:function(t){this.newName=t},upload:function(){var t=h(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.imageFile){t.next=11;break}return this.storageError=null,t.prev=2,t.next=5,this.addImage(this.imageFile);case 5:this.imageFile=null,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),this.storageError=t.t0;case 11:case"end":return t.stop()}}),t,this,[[2,8]])})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=h(c.a.mark((function t(){var e,i,n,a;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.newName){t.next=4;break}return e=this.gallery,i=e.id,n=e.createTimestamp,a=e.images,t.next=4,this.update({name:this.newName,id:i,createTimestamp:n,images:a});case 4:this.newName=null;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),confirmDelete:function(){var t=h(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.deleteGallery(this.gallery);case 2:this.$router.push("/galleries");case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},v=f,y=i("2877"),b=i("6544"),w=i.n(b),O=i("0798"),x=i("8336"),V=i("b0af"),C=i("99d9"),k=i("169a"),S=i("23a7"),I=i("4bd4"),j=i("132d"),$=i("2fa4"),_=i("8654"),A=Object(y["a"])(v,r,l,!1,null,null,null),P=A.exports;w()(A,{VAlert:O["a"],VBtn:x["a"],VCard:V["a"],VCardActions:C["a"],VCardText:C["c"],VCardTitle:C["d"],VDialog:k["a"],VFileInput:S["a"],VForm:I["a"],VIcon:j["a"],VSpacer:$["a"],VTextField:_["a"]});var D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"mx-1"},[t.gallery?i("v-item-group",[i("v-row",t._l(t.gallery.images,(function(e){return i("v-item",{key:e.path,attrs:{loading:t.loading}},[i("v-col",{attrs:{cols:"12",sm:"6",xl:"4"}},[i("image-grid-cell",{attrs:{image:e}})],1)],1)})),1)],1):t._e()],1)},T=[],E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{outlined:"",loading:t.loading}},[i("v-dialog",{attrs:{width:t.isDesktop?"500px":"80vw"},model:{value:t.dConfirm,callback:function(e){t.dConfirm=e},expression:"dConfirm"}},[i("v-card",{attrs:{dark:"",loading:t.loading}},[i("v-card-title",[t._v(" Press confirm to delete "+t._s(t.image.title)+" ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:function(e){t.dConfirm=!1}}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"red",outlined:""},on:{click:t.confirmDelete}},[t._v("Confirm")])],1)],1)],1),i("v-img",{staticClass:"align-start text-right pa-1",attrs:{"aspect-ratio":t.isDesktop?"1.67":"2.2",width:"100%",src:t.image.src}},[i("v-btn",{attrs:{color:"red",dark:"",icon:"",disabled:t.loading},on:{click:function(e){t.dConfirm=!0}}},[i("v-icon",[t._v("mdi-delete")])],1)],1),i("v-card-text",[i("v-form",{on:{submit:function(e){return e.preventDefault(),t.saveImage(e)}}},[i("v-text-field",{attrs:{value:t.image.title,disabled:t.loading,label:"title"},on:{input:t.inputTitle}}),i("v-text-field",{attrs:{value:t.image.caption,label:"caption",disabled:t.loading},on:{input:t.inputCaption}})],1)],1),i("v-card-actions",[t.newTitle||t.newCap?i("v-btn",{attrs:{color:"green",disabled:t.loading,dark:""},on:{click:t.saveImage}},[t._v("save "),i("v-icon",[t._v("mdi-content-save")])],1):t._e()],1)],1)},B=[];function F(t,e,i,n,a,s,r){try{var l=t[s](r),o=l.value}catch(c){return void i(c)}l.done?e(o):Promise.resolve(o).then(n,a)}function M(t){return function(){var e=this,i=arguments;return new Promise((function(n,a){var s=t.apply(e,i);function r(t){F(s,n,a,r,l,"next",t)}function l(t){F(s,n,a,r,l,"throw",t)}r(void 0)}))}}function z(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function G(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?z(i,!0).forEach((function(e){N(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):z(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function N(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var L={name:"ImageGridCell",props:{image:Object,loading:Boolean},data:function(){return{dConfirm:!1,newTitle:null,newCap:null}},computed:{isDesktop:function(){return this.$vuetify.breakpoint.lgAndUp}},methods:G({},Object(s["b"])("galleries",["deleteImage","updateImage"]),{confirmDelete:function(){this.deleteImage(this.image),this.dConfirm=!1},inputTitle:function(t){this.newTitle=t},inputCaption:function(t){this.newCap=t},saveImage:function(){var t=M(c.a.mark((function t(){var e,i,n;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.image.path,i=this.newTitle,n=this.newCap,t.next=5,this.updateImage({path:e,title:i,caption:n});case 5:this.newTitle=null,this.newCap=null;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},R=L,Z=i("adda"),W=Object(y["a"])(R,E,B,!1,null,null,null),K=W.exports;w()(W,{VBtn:x["a"],VCard:V["a"],VCardActions:C["a"],VCardText:C["c"],VCardTitle:C["d"],VDialog:k["a"],VForm:I["a"],VIcon:j["a"],VImg:Z["a"],VSpacer:$["a"],VTextField:_["a"]});var q={name:"ImageGrid",components:{ImageGridCell:K},props:{gallery:Object,loading:Boolean}},J=q,U=i("62ad"),H=i("a523"),Q=i("4e82"),X=i("58df"),Y=i("d9bd"),tt=i("2b0e");const et=tt["a"].extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return Object(Y["c"])("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):(Object(Y["c"])("v-item should only contain a single element",this),t)}});var it=Object(X["a"])(et,Object(Q["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),nt=i("604c"),at=i("0fd9"),st=Object(y["a"])(J,D,T,!1,null,null,null),rt=st.exports;function lt(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function ot(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?lt(i,!0).forEach((function(e){ct(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):lt(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function ct(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}w()(st,{VCol:U["a"],VContainer:H["a"],VItem:it,VItemGroup:nt["b"],VRow:at["a"]});var ut={name:"GalleryEdit",components:{GalleryForm:P,ImageGrid:rt},computed:ot({},Object(s["e"])("galleries",{gallery:"current",updatePending:"updatePending",creationPending:"creationPending"}),{loading:function(){return null==this.gallery||this.creationPending||this.updatePending.includes(this.gallery.id)}}),watch:{"$route.params.gid":{handler:function(t){this.loadGallery(t)},immediate:!0}},mounted:function(){this.loadGallery(this.$route.params.gid)},methods:ot({},Object(s["b"])("galleries",{read:"read"}),{loadGallery:function(t){t?this.gallery&&this.gallery.id===t||this.read(t):this.$router.push("/galleries")}})},dt=ut,ht=i("a797"),pt=i("490a"),mt=Object(y["a"])(dt,n,a,!1,null,null,null);e["default"]=mt.exports;w()(mt,{VOverlay:ht["a"],VProgressCircular:pt["a"]})},"2fa4":function(t,e,i){"use strict";i("20f6");var n=i("80d2");e["a"]=Object(n["g"])("spacer","div","v-spacer")},"368e":function(t,e,i){},5803:function(t,e,i){},"604c":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));i("166a");var n=i("a452"),a=i("7560"),s=i("58df"),r=i("d9bd");const l=Object(s["a"])(n["a"],a["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((t,e)=>this.toggleMethod(this.getValue(t,e)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.internalValue===t;const t=this.internalValue;return Array.isArray(t)?e=>t.includes(e):()=>!1}},watch:{internalValue(){this.$nextTick(this.updateItemsState)}},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(r["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return null==t.value||""===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",()=>this.onClick(t)),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);const n=this.selectedValues.indexOf(i);if(!(n<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(t=>t!==i):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const i=e.find(t=>!t.disabled);if(!i)return;const n=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,n))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),n=i.findIndex(e=>e===t);this.mandatory&&n>-1&&i.length-1<1||null!=this.max&&n<0&&i.length+1>this.max||(n>-1?i.splice(n,1):i.push(t),this.internalValue=i)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t("div",this.genData(),this.$slots.default)}});e["b"]=l.extend({name:"v-item-group",provide(){return{itemGroup:this}}})}}]);
//# sourceMappingURL=chunk-1006a6c1.6a9a1283.js.map