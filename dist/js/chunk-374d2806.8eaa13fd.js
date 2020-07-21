(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-374d2806"],{1681:function(t,e,n){},"169a":function(t,e,n){"use strict";n("368e");var i=n("480e"),r=n("4ad4"),o=n("b848"),a=n("75eb"),s=n("e707"),c=n("e4d3"),l=n("21be"),u=n("f2e7"),h=n("a293"),d=n("58df"),p=n("d9bd"),f=n("80d2");function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(n,!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b=Object(d["a"])(r["a"],o["a"],a["a"],s["a"],c["a"],l["a"],u["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:h["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var t;return t={},g(t,"v-dialog ".concat(this.contentClass).trim(),!0),g(t,"v-dialog--active",this.isActive),g(t,"v-dialog--persistent",this.persistent),g(t,"v-dialog--fullscreen",this.fullscreen),g(t,"v-dialog--scrollable",this.scrollable),g(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["d"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):s["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$refs.content.focus(),t.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===f["r"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}}},render:function(t){var e=[],n={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}},style:{}};this.fullscreen||(n.style={maxWidth:"none"===this.maxWidth?void 0:Object(f["f"])(this.maxWidth),width:"auto"===this.width?void 0:Object(f["f"])(this.width)}),e.push(this.genActivator());var r=t("div",n,this.showLazyContent(this.getContentSlot()));return this.transition&&(r=t("transition",{props:{name:this.transition,origin:this.origin}},[r])),e.push(t("div",{class:this.contentClasses,attrs:m({role:"document",tabindex:this.isActive?0:void 0},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(i["a"],{props:{root:!0,light:this.light,dark:this.dark}},[r])])),t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},e)}})},1974:function(t,e,n){"use strict";var i=n("5d6b"),r=n.n(i);r.a},"23a7":function(t,e,n){"use strict";n("5803");var i=n("2677"),r=n("cc20"),o=n("80d2"),a=n("d9bd");function s(t){return u(t)||l(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}e["a"]=i["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:function(){return[]},validator:function(t){return"object"===f(t)||Array.isArray(t)}}},computed:{classes:function(){return d({},i["a"].options.computed.classes.call(this),{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){return t+e.size}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(o["p"])(e,1024===this.base))},internalArrayValue:function(){return Array.isArray(this.internalValue)?this.internalValue:Object(o["x"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty?this.internalArrayValue.map((function(e){var n=t.truncateText(e.name);return t.showSize?"".concat(n," (").concat(Object(o["p"])(e.size,1024===t.base),")"):n})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(a["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(o["h"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,n){return t.$createElement(r["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(n,1),t.internalValue=e}}},[e])})):[]},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(n,i){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[i],file:n,index:i}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection},on:{click:function(){return t.$refs.input.click()}}},e)},onInput:function(t){var e=s(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,n){"use strict";var i=n("8654");e["a"]=i["a"]},"2fa4":function(t,e,n){"use strict";n("20f6");var i=n("80d2");e["a"]=Object(i["g"])("spacer","div","v-spacer")},"368e":function(t,e,n){},"54bc":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.project?n("div",[n("v-overlay",{attrs:{value:t.loading,absolute:""}},[n("v-progress-circular",{attrs:{indeterminate:""}})],1),t.project.bannerImage?n("v-img",{staticClass:"banner",attrs:{width:"100%","aspect-ratio":t.$vuetify.breakpoint.lgAndUp?2.2:1.89,src:t.project.bannerImage.src}}):t._e(),n("project-form",{attrs:{project:t.project,loading:t.loading}}),n("project-sections",{attrs:{project:t.project,loading:t.loading}})],1):t._e()},r=[],o=n("a34a"),a=n.n(o),s=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"ma-4",attrs:{outlined:""}},[t.project?n("v-dialog",{attrs:{width:"80vw","max-width":"500px"},model:{value:t.dConfirm,callback:function(e){t.dConfirm=e},expression:"dConfirm"}},[n("v-card",{attrs:{dark:""}},[n("v-card-title",[t._v(" Press confirm to delete "+t._s(t.project.name)+" ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dConfirm=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"red",outlined:""},on:{click:t.confirmDelete}},[t._v("Confirm")])],1)],1)],1):t._e(),t.project?n("v-form",{on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[t.storageError?n("v-alert",{staticClass:"ma-2",attrs:{color:"red lighten-4"}},[t._v(" "+t._s(t.storageError)+" ")]):t._e(),n("v-card-title",[n("v-text-field",{attrs:{value:t.project.name,label:"Title"},on:{input:t.nameInput}})],1),n("v-card-text",[n("v-file-input",{ref:"imgFileInput",attrs:{accept:t.acceptableTypes,placeholder:"select a file for upload",label:"Change Banner Image","prepend-icon":"mdi-camera",rules:t.imageRules},model:{value:t.imageFile,callback:function(e){t.imageFile=e},expression:"imageFile"}}),n("v-btn",{attrs:{color:"blue",text:"",disabled:t.loading||!t.imageFile},on:{click:t.upload}},[t._v(" upload ")]),n("v-text-field",{attrs:{value:t.project.github,label:"Github",disabled:t.loading},on:{input:t.githubInput}}),n("v-text-field",{attrs:{value:t.project.demo,label:"Demo Link",disabled:t.loading},on:{input:t.demoInput}})],1)],1):t._e(),n("v-card-actions",[t.changes?n("v-btn",{attrs:{color:"success",dark:"",disabled:t.loading},on:{click:t.save}},[t._v(" save "),n("v-icon",[t._v("mdi-content-save")])],1):t._e(),t.changes?t._e():n("v-btn",{attrs:{text:"",color:"success",disabled:t.loading},on:{click:function(e){return t.$router.push("/profolio")}}},[t._v(" done ")]),n("v-spacer"),n("v-btn",{attrs:{outlined:"",color:"red darken-2",disabled:t.loading},on:{click:function(e){t.dConfirm=!0}}},[t._v(" delete"),n("v-icon",[t._v("mdi-delete")])],1)],1)],1)},l=[],u=n("55d1");function h(t,e,n,i,r,o,a){try{var s=t[o](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(i,r)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function a(t){h(o,i,r,a,s,"next",t)}function s(t){h(o,i,r,a,s,"throw",t)}a(void 0)}))}}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m={name:"ProjectForm",props:{project:Object,loading:Boolean},data:function(){return{imageFile:null,newName:null,newDemo:null,newGithub:null,uploading:!1,dConfirm:!1,imageRules:u["c"],storageError:null,acceptableTypes:u["a"].join(",")}},computed:f({},Object(s["e"])("authentication",["user"]),{changes:function(){return this.newName||this.newGithub||this.newDemo}}),methods:f({},Object(s["b"])("profolio",{update:"update",deleteProject:"deleteProject",addBanner:"addBanner"}),{nameInput:function(t){this.newName=t},githubInput:function(t){this.newGithub=t},demoInput:function(t){this.newDemo=t},upload:function(){var t=d(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.imageFile){t.next=11;break}return t.prev=1,this.storageError=null,t.next=5,this.addBanner(this.imageFile);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),this.storageError=t.t0;case 10:this.imageFile=null;case 11:case"end":return t.stop()}}),t,this,[[1,7]])})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=d(a.a.mark((function t(){var e;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.newName||this.newDemo||this.newGithub)){t.next=7;break}return e=f({},this.project),this.newName&&(e.name=this.newName),this.newDemo&&(e.demo=this.newDemo),this.newGithub&&(e.github=this.newGithub),t.next=7,this.update(e);case 7:this.newName=null,this.newDemo=null,this.newGithub=null;case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),confirmDelete:function(){var t=d(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.deleteProject(this.project);case 2:this.$router.push("/profolio");case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},g=m,b=n("2877"),y=n("6544"),w=n.n(y),O=n("0798"),j=n("8336"),x=n("b0af"),P=n("99d9"),S=n("169a"),k=n("23a7"),C=n("4bd4"),_=n("132d"),I=n("2fa4"),D=n("8654"),$=Object(b["a"])(g,c,l,!1,null,null,null),V=$.exports;w()($,{VAlert:O["a"],VBtn:j["a"],VCard:x["a"],VCardActions:P["a"],VCardText:P["c"],VCardTitle:P["d"],VDialog:S["a"],VFileInput:k["a"],VForm:C["a"],VIcon:_["a"],VSpacer:I["a"],VTextField:D["a"]});var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mx-2"},[n("v-row",[n("v-col",[n("v-btn",{attrs:{color:"green",dark:"",disabled:t.loading},on:{click:t.preAdd}},[t._v(" new section "),n("v-icon",[t._v("mdi-plus")])],1)],1)],1),t.project?n("v-row",t._l(t.project.sections,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12"}},[n("section-form",{attrs:{section:e,loading:t.loading}})],1)})),1):t._e()],1)},A=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mr-2"},[n("v-dialog",{attrs:{"max-width":"500px",width:"90%"},model:{value:t.dConfirm,callback:function(e){t.dConfirm=e},expression:"dConfirm"}},[n("v-card",[n("v-card-title",[t._v("Remove Section?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{outlined:"",color:"red"},on:{click:t.confirmDelete}},[t._v(" confirm ")])],1)],1)],1),n("v-toolbar",{attrs:{color:"primary",dark:""}},[n("v-file-input",{staticClass:"mr-4",attrs:{disabled:t.imageLimitReached||t.sectionLimitReached,"prepend-icon":"mdi-camera","single-line":"","hide-details":"",label:"Add Image",rules:t.imageRules},scopedSlots:t._u([{key:"append",fn:function(){return[n("span",{staticClass:"caption"},[t._v(" "+t._s(t.uploaderMsg)+" ")])]},proxy:!0}]),model:{value:t.newFile,callback:function(e){t.newFile=e},expression:"newFile"}}),n("v-btn",{attrs:{outlined:"",disabled:t.loading||t.imageLimitReached||t.sectionLimitReached},on:{click:t.upload}},[t._v("upload")])],1),t.storageError?n("v-alert",{staticClass:"ma-2",attrs:{color:"red lighten-4"}},[t._v(" "+t._s(t.storageError)+" ")]):t._e(),n("v-card-text",[t.section.images?n("v-container",[n("v-row",t._l(t.section.images,(function(e){return n("v-col",{key:e.path,attrs:{cols:t.imageOnly?"6":"12"}},[n("v-img",{attrs:{src:e.src,"aspect-ratio":t.imageOnly?4/3:16/9}},[n("v-btn",{staticClass:"my-2",attrs:{fab:"",absolute:"",right:"",small:"",color:"red darken-1",dark:""},on:{click:function(n){return t.confirmImageDelete(e.path)}}},[n("v-icon",[t._v("mdi-trash-can")])],1)],1)],1)})),1)],1):t._e(),n("v-textarea",{attrs:{value:t.section.text,disabled:t.imageOnly,label:"Body Text"},on:{input:t.textInput}})],1),n("v-card-actions",[t.newText?n("v-btn",{attrs:{color:"green",disabled:t.loading,outlined:""},on:{click:t.save}},[t._v(" save "),n("v-icon",[t._v("mdi-content-save")])],1):t._e(),n("v-spacer"),n("v-btn",{attrs:{color:"red",outlined:"",disabled:t.loading},on:{click:function(e){t.dConfirm=!0}}},[t._v(" remove section "),n("v-icon",[t._v("mdi-trash-can")])],1)],1)],1)},T=[];function F(t,e,n,i,r,o,a){try{var s=t[o](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(i,r)}function z(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function a(t){F(o,i,r,a,s,"next",t)}function s(t){F(o,i,r,a,s,"throw",t)}a(void 0)}))}}function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(n,!0).forEach((function(e){R(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var L={name:"SectionForm",props:{section:Object,loading:Boolean},data:function(){return{newFile:null,newText:null,dConfirm:!1,imageRules:u["c"],storageError:null}},computed:H({},Object(s["e"])("profolio",{project:"current"}),{imageOnly:function(){return this.section.images&&this.section.images.length>1},nImages:function(){return this.section.images?this.section.images.length:0},imageLimitReached:function(){return this.nImages>=u["e"]},nImageSections:function(){if(!this.project||!this.project.sections)return 0;var t=this.project.sections.filter((function(t){return t.images&&t.images.length>0}));return t.length||0},sectionLimitReached:function(){return this.nImageSections>=u["f"]&&(!this.section.images||0===this.section.images.length)},uploaderMsg:function(){return this.sectionLimitReached?"maximum of ".concat(u["f"]," sections with image limit"):"".concat(this.nImages,"/").concat(u["e"]," slots")}}),methods:H({},Object(s["b"])("profolio",{addImage:"addImage",deleteImage:"deleteImage",updateSection:"updateSection",deleteSection:"deleteSection",verify:"verifyImage"}),{textInput:function(t){this.newText=t},upload:function(){var t=z(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.newFile){t.next=11;break}return t.prev=1,this.storageError=null,t.next=5,this.addImage({imgFile:this.newFile,section:this.section});case 5:this.newFile=null,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),this.storageError=t.t0;case 11:case"end":return t.stop()}}),t,this,[[1,8]])})));function e(){return t.apply(this,arguments)}return e}(),save:function(){var t=z(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.updateSection({section:this.section,newText:this.newText});case 2:this.newText=null;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),confirmDelete:function(){var t=z(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.deleteSection(this.section);case 2:this.dConfirm=!1;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),confirmImageDelete:function(t){this.deleteImage({path:t,section:this.section})}})},G=L,M=n("62ad"),Z=n("a523"),K=n("adda"),W=n("0fd9"),J=(n("1681"),n("58df"));function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(n,!0).forEach((function(e){Q(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var X=Object(J["a"])(D["a"]),Y=X.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return U({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},D["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=D["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){D["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),tt=n("71d9"),et=Object(b["a"])(G,B,T,!1,null,null,null),nt=et.exports;function it(t,e,n,i,r,o,a){try{var s=t[o](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(i,r)}function rt(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function a(t){it(o,i,r,a,s,"next",t)}function s(t){it(o,i,r,a,s,"throw",t)}a(void 0)}))}}function ot(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function at(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ot(n,!0).forEach((function(e){st(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ot(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function st(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}w()(et,{VAlert:O["a"],VBtn:j["a"],VCard:x["a"],VCardActions:P["a"],VCardText:P["c"],VCardTitle:P["d"],VCol:M["a"],VContainer:Z["a"],VDialog:S["a"],VFileInput:k["a"],VIcon:_["a"],VImg:K["a"],VRow:W["a"],VSpacer:I["a"],VTextarea:Y,VToolbar:tt["a"]});var ct={name:"ProjectSections",components:{SectionForm:nt},props:{project:Object,loading:Boolean},methods:at({},Object(s["b"])("profolio",{addSection:"addSection",deleteProject:"deleteProject"}),{preAdd:function(){var t=rt(a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.addSection();case 2:this.$vuetify.goTo(999999);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},lt=ct,ut=Object(b["a"])(lt,E,A,!1,null,null,null),ht=ut.exports;function dt(t,e,n,i,r,o,a){try{var s=t[o](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(i,r)}function pt(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function a(t){dt(o,i,r,a,s,"next",t)}function s(t){dt(o,i,r,a,s,"throw",t)}a(void 0)}))}}function ft(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function vt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ft(n,!0).forEach((function(e){mt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ft(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function mt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}w()(ut,{VBtn:j["a"],VCol:M["a"],VContainer:Z["a"],VIcon:_["a"],VRow:W["a"]});var gt={name:"ProjectEdit",components:{ProjectForm:V,ProjectSections:ht},computed:vt({},Object(s["e"])("profolio",{project:"current",updatePending:"updatePending",creationPending:"creationPending",deletionPending:"deletionPending"}),{loading:function(){return null==this.project||this.creationPending||this.updatePending.includes(this.project.id)||this.deletionPending.includes(this.project.id)}}),watch:{"$route.params.pid":{handler:function(t){this.loadProject(t)},immediate:!0}},mounted:function(){this.loadProject(this.$route.params.pid)},methods:vt({},Object(s["b"])("profolio",{read:"read"}),{loadProject:function(){var t=pt(a.a.mark((function t(e){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e){t.next=4;break}this.$router.push("/profolio"),t.next=8;break;case 4:if(this.project&&this.project.id===e){t.next=8;break}return t.next=7,this.read(e);case 7:this.project||this.$router.push("/profolio");case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()})},bt=gt,yt=(n("1974"),n("a797")),wt=n("490a"),Ot=Object(b["a"])(bt,i,r,!1,null,"5b0e2b01",null);e["default"]=Ot.exports;w()(Ot,{VImg:K["a"],VOverlay:yt["a"],VProgressCircular:wt["a"]})},5803:function(t,e,n){},"5d6b":function(t,e,n){},"5e23":function(t,e,n){},"71d9":function(t,e,n){"use strict";n("5e23");var i=n("8dd9"),r=n("adda"),o=n("80d2"),a=n("d9bd");function s(t,e){return u(t)||l(t,e)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){r=!0,o=c}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}}function u(t){if(Array.isArray(t))return t}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(n,!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e["a"]=i["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return d({},i["a"].options.computed.classes.call(this),{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return d({},this.measurableStyles,{height:Object(o["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var n=s(e,2),i=n[0],r=n[1];t.$attrs.hasOwnProperty(i)&&Object(a["a"])(i,r,t)}))},methods:{genBackground:function(){var t={height:Object(o["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(o["f"])(this.computedContentHeight)}},Object(o["m"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(o["f"])(this.extensionHeight)}},Object(o["m"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,n,e)}})}}]);
//# sourceMappingURL=chunk-374d2806.8eaa13fd.js.map