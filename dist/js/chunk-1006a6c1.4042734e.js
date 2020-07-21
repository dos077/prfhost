(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1006a6c1"],{"166a":function(t,e,n){},"169a":function(t,e,n){"use strict";n("368e");var i=n("480e"),r=n("4ad4"),a=n("b848"),s=n("75eb"),o=n("e707"),l=n("e4d3"),c=n("21be"),u=n("f2e7"),d=n("a293"),h=n("58df"),f=n("d9bd"),p=n("80d2");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=Object(h["a"])(r["a"],a["a"],s["a"],o["a"],l["a"],c["a"],u["a"]);e["a"]=y.extend({name:"v-dialog",directives:{ClickOutside:d["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},g(t,"v-dialog ".concat(this.contentClass).trim(),!0),g(t,"v-dialog--active",this.isActive),g(t,"v-dialog--persistent",this.persistent),g(t,"v-dialog--fullscreen",this.fullscreen),g(t,"v-dialog--scrollable",this.scrollable),g(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(f["d"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):o["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===p["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}}},render:function(t){var e=[],n={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}},style:{}};this.fullscreen||(n.style={maxWidth:"none"===this.maxWidth?void 0:Object(p["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["f"])(this.width)}),e.push(this.genActivator());var r=t("div",n,this.showLazyContent(this.getContentSlot()));return this.transition&&(r=t("transition",{props:{name:this.transition,origin:this.origin}},[r])),e.push(t("div",{class:this.contentClasses,attrs:m({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(i["a"],{props:{root:!0,light:this.light,dark:this.dark}},[r])])),t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},e)}})},"23a7":function(t,e,n){"use strict";n("5803");var i=n("2677"),r=n("cc20"),a=n("80d2"),s=n("d9bd");function o(t){return u(t)||c(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}e["a"]=i["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:function(){return[]},validator:function(t){return"object"===p(t)||Array.isArray(t)}}},computed:{classes:function(){return h({},i["a"].options.computed.classes.call(this),{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){return t+e.size}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(a["p"])(e,1024===this.base))},internalArrayValue:function(){return Array.isArray(this.internalValue)?this.internalValue:Object(a["x"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var n=t.truncateText(e.name);return t.showSize?"".concat(n," (").concat(Object(a["p"])(e.size,1024===t.base),")"):n})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(s["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(a["h"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,n){return t.$createElement(r["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(n,1),t.internalValue=e}}},[e])})):[]},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,i){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[i],file:n,index:i}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection},on:{click:function(){return t.$refs.input.click()}}},e)},onInput:function(t){var e=o(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,n){"use strict";var i=n("8654");e["a"]=i["a"]},"27b3":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-overlay",{attrs:{value:t.loading,absolute:""}},[n("v-progress-circular",{attrs:{indeterminate:""}})],1),n("gallery-form",{attrs:{gallery:t.gallery,loading:t.loading}}),n("image-grid",{attrs:{gallery:t.gallery,loading:t.loading}})],1)},r=[],a=n("2f62"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"ma-4",attrs:{outlined:""}},[t.gallery?n("v-dialog",{attrs:{width:"80vw","max-width":"500px"},model:{value:t.dConfirm,callback:function(e){t.dConfirm=e},expression:"dConfirm"}},[n("v-card",{attrs:{dark:""}},[n("v-card-title",[t._v(" Press confirm to delete "+t._s(t.gallery.name)+" ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dConfirm=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"red",outlined:""},on:{click:t.confirmDelete}},[t._v("Confirm")])],1)],1)],1):t._e(),t.storageError?n("v-alert",{staticClass:"ma-2",attrs:{color:"red lighten-3"}},[t._v(" "+t._s(t.storageError)+" ")]):t._e(),t.gallery?n("v-form",{on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[n("v-card-title",[n("v-text-field",{attrs:{value:t.gallery.name,label:"Title"},on:{input:t.nameInput}})],1),n("v-card-text",[n("v-file-input",{attrs:{accept:t.acceptableTypes,placeholder:"select image file for upload",disabled:t.limitReached,label:"Upload Image","prepend-icon":"mdi-camera",rules:t.imageRules},scopedSlots:t._u([{key:"append",fn:function(){return[n("span",{staticClass:"caption",class:{"red lighten-2":t.limitReached}},[t._v(" "+t._s(t.uploaderMsg)+" ")])]},proxy:!0}],null,!1,344312212),model:{value:t.imageFile,callback:function(e){t.imageFile=e},expression:"imageFile"}}),n("v-btn",{attrs:{color:"blue",text:"",disabled:t.loading||t.limitReached},on:{click:t.upload}},[t._v(" upload ")])],1)],1):t._e(),n("v-card-actions",[t.newName?n("v-btn",{attrs:{outlined:"",color:"success",disabled:t.loading},on:{click:t.save}},[t._v(" save "),n("v-icon",[t._v("mdi-content-save")])],1):t._e(),t.newName?t._e():n("v-btn",{attrs:{text:"",color:"success",disabled:t.loading},on:{click:function(e){return t.$router.push("/galleries")}}},[t._v("done")]),n("v-spacer"),n("v-btn",{attrs:{outlined:"",color:"red darken-2",disabled:t.loading},on:{click:function(e){t.dConfirm=!0}}},[t._v(" delete"),n("v-icon",[t._v("mdi-delete")])],1)],1)],1)},o=[],l=n("a34a"),c=n.n(l),u=n("55d1");function d(t,e,n,i,r,a,s){try{var o=t[a](s),l=o.value}catch(c){return void n(c)}o.done?e(l):Promise.resolve(l).then(i,r)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function s(t){d(a,i,r,s,o,"next",t)}function o(t){d(a,i,r,s,o,"throw",t)}s(void 0)}))}}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m={name:"GalleryForm",props:{gallery:Object,loading:Boolean},data:function(){return{imageFile:null,newName:null,uploading:!1,dConfirm:!1,storageError:null,imageRules:u["c"],acceptableTypes:u["a"].join(",")}},computed:p({},Object(a["e"])("authentication",["user"]),{nImages:function(){return this.gallery.images?this.gallery.images.length:0},uploaderMsg:function(){return"".concat(this.nImages,"/").concat(u["b"]," slots used")},limitReached:function(){return this.nImages>=u["b"]}}),methods:p({},Object(a["b"])("galleries",{update:"update",deleteGallery:"deleteGallery",addImage:"addImage"}),{changeFile:function(){var t=h(c.a.mark((function t(e){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.imageFile=e;case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),nameInput:function(t){this.newName=t},upload:function(){var t=h(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.imageFile){t.next=11;break}return this.storageError=null,t.prev=2,t.next=5,this.addImage(this.imageFile);case 5:this.imageFile=null,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),this.storageError=t.t0;case 11:case"end":return t.stop()}}),t,this,[[2,8]])})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=h(c.a.mark((function t(){var e,n,i,r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.newName){t.next=4;break}return e=this.gallery,n=e.id,i=e.createTimestamp,r=e.images,t.next=4,this.update({name:this.newName,id:n,createTimestamp:i,images:r});case 4:this.newName=null;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),confirmDelete:function(){var t=h(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.deleteGallery(this.gallery);case 2:this.$router.push("/galleries");case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},g=m,y=n("2877"),b=n("6544"),O=n.n(b),w=n("0798"),j=n("8336"),x=n("b0af"),V=n("99d9"),C=n("169a"),S=n("23a7"),k=n("4bd4"),P=n("132d"),I=n("2fa4"),A=n("8654"),_=Object(y["a"])(g,s,o,!1,null,null,null),$=_.exports;O()(_,{VAlert:w["a"],VBtn:j["a"],VCard:x["a"],VCardActions:V["a"],VCardText:V["c"],VCardTitle:V["d"],VDialog:C["a"],VFileInput:S["a"],VForm:k["a"],VIcon:P["a"],VSpacer:I["a"],VTextField:A["a"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mx-1"},[t.gallery?n("v-item-group",[n("v-row",t._l(t.gallery.images,(function(e){return n("v-item",{key:e.path,attrs:{loading:t.loading}},[n("v-col",{attrs:{cols:"12",sm:"6",xl:"4"}},[n("image-grid-cell",{attrs:{image:e}})],1)],1)})),1)],1):t._e()],1)},E=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{outlined:"",loading:t.loading}},[n("v-dialog",{attrs:{width:t.isDesktop?"500px":"80vw"},model:{value:t.dConfirm,callback:function(e){t.dConfirm=e},expression:"dConfirm"}},[n("v-card",{attrs:{dark:"",loading:t.loading}},[n("v-card-title",[t._v(" Press confirm to delete "+t._s(t.image.title)+" ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dConfirm=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"red",outlined:""},on:{click:t.confirmDelete}},[t._v("Confirm")])],1)],1)],1),n("v-img",{staticClass:"align-start text-right pa-1",attrs:{"aspect-ratio":t.isDesktop?"1.67":"2.2",width:"100%",src:t.image.src}},[n("v-btn",{attrs:{color:"red",dark:"",icon:"",disabled:t.loading},on:{click:function(e){t.dConfirm=!0}}},[n("v-icon",[t._v("mdi-delete")])],1)],1),n("v-card-text",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.saveImage(e)}}},[n("v-text-field",{attrs:{value:t.image.title,disabled:t.loading,label:"title"},on:{input:t.inputTitle}}),n("v-text-field",{attrs:{value:t.image.caption,label:"caption",disabled:t.loading},on:{input:t.inputCaption}})],1)],1),n("v-card-actions",[t.newTitle||t.newCap?n("v-btn",{attrs:{color:"green",disabled:t.loading,dark:""},on:{click:t.saveImage}},[t._v("save "),n("v-icon",[t._v("mdi-content-save")])],1):t._e()],1)],1)},B=[];function F(t,e,n,i,r,a,s){try{var o=t[a](s),l=o.value}catch(c){return void n(c)}o.done?e(l):Promise.resolve(l).then(i,r)}function M(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var a=t.apply(e,n);function s(t){F(a,i,r,s,o,"next",t)}function o(t){F(a,i,r,s,o,"throw",t)}s(void 0)}))}}function z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?z(n,!0).forEach((function(e){N(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var L={name:"ImageGridCell",props:{image:Object,loading:Boolean},data:function(){return{dConfirm:!1,newTitle:null,newCap:null}},computed:{isDesktop:function(){return this.$vuetify.breakpoint.lgAndUp}},methods:G({},Object(a["b"])("galleries",["deleteImage","updateImage"]),{confirmDelete:function(){this.deleteImage(this.image),this.dConfirm=!1},inputTitle:function(t){this.newTitle=t},inputCaption:function(t){this.newCap=t},saveImage:function(){var t=M(c.a.mark((function t(){var e,n,i;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.image.path,n=this.newTitle,i=this.newCap,t.next=5,this.updateImage({path:e,title:n,caption:i});case 5:this.newTitle=null,this.newCap=null;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},R=L,Z=n("adda"),W=Object(y["a"])(R,T,B,!1,null,null,null),K=W.exports;O()(W,{VBtn:j["a"],VCard:x["a"],VCardActions:V["a"],VCardText:V["c"],VCardTitle:V["d"],VDialog:C["a"],VForm:k["a"],VIcon:P["a"],VImg:Z["a"],VSpacer:I["a"],VTextField:A["a"]});var q={name:"ImageGrid",components:{ImageGridCell:K},props:{gallery:Object,loading:Boolean}},J=q,U=n("62ad"),H=n("a523"),Q=n("4e82"),X=n("58df"),Y=n("d9bd"),tt=n("2b0e");function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var nt=tt["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:et({},this.activeClass,this.isActive)}),t):(Object(Y["c"])("v-item should only contain a single element",this),t)):(Object(Y["c"])("v-item is missing a default scopedSlot",this),null);var t}}),it=Object(X["a"])(nt,Object(Q["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),rt=n("604c"),at=n("0fd9"),st=Object(y["a"])(J,D,E,!1,null,null,null),ot=st.exports;function lt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?lt(n,!0).forEach((function(e){ut(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):lt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}O()(st,{VCol:U["a"],VContainer:H["a"],VItem:it,VItemGroup:rt["b"],VRow:at["a"]});var dt={name:"GalleryEdit",components:{GalleryForm:$,ImageGrid:ot},computed:ct({},Object(a["e"])("galleries",{gallery:"current",updatePending:"updatePending",creationPending:"creationPending"}),{loading:function(){return null==this.gallery||this.creationPending||this.updatePending.includes(this.gallery.id)}}),watch:{"$route.params.gid":{handler:function(t){this.loadGallery(t)},immediate:!0}},mounted:function(){this.loadGallery(this.$route.params.gid)},methods:ct({},Object(a["b"])("galleries",{read:"read"}),{loadGallery:function(t){t?this.gallery&&this.gallery.id===t||this.read(t):this.$router.push("/galleries")}})},ht=dt,ft=n("a797"),pt=n("490a"),vt=Object(y["a"])(ht,i,r,!1,null,null,null);e["default"]=vt.exports;O()(vt,{VOverlay:ft["a"],VProgressCircular:pt["a"]})},"2fa4":function(t,e,n){"use strict";n("20f6");var i=n("80d2");e["a"]=Object(i["g"])("spacer","div","v-spacer")},"368e":function(t,e,n){},5803:function(t,e,n){},"604c":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));n("166a");var i=n("a452"),r=n("7560"),a=n("58df"),s=n("d9bd");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=Object(a["a"])(i["a"],r["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return l({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,n){return t.toggleMethod(t.getValue(e,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(s["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);var i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var n=e.find((function(t){return!t.disabled}));if(n){var i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((function(e){return e===t}));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}});e["b"]=u.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})}}]);
//# sourceMappingURL=chunk-1006a6c1.4042734e.js.map