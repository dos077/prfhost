(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-firebase_storage"],{"588e":function(e,t,r){"use strict";r.r(t);var n=r("c23d"),o=r.n(n);function i(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function a(e){try{u(n.next(e))}catch(t){i(t)}}function s(e){try{u(n["throw"](e))}catch(t){i(t)}}function u(e){e.done?r(e.value):o(e.value).then(a,s)}u((n=n.apply(e,t||[])).next())}))}function a(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return u([e,t])}}function u(i){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,n&&(o=2&i[0]?n["return"]:i[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}function s(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}var u=r("4be4"),c="firebasestorage.googleapis.com",l="storageBucket",p=12e4,h=6e5,f=-9007199254740991,d=function(){function e(e,t){this.code_=v(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return v(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.message_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!1,configurable:!0}),e}(),_={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e){return"storage/"+e}function b(){var e="An unknown error occurred, please check the error payload for server response.";return new d(_.UNKNOWN,e)}function m(e){return new d(_.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function g(e){return new d(_.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function y(){var e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(_.UNAUTHENTICATED,e)}function R(e){return new d(_.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function w(){return new d(_.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function E(){return new d(_.CANCELED,"User canceled the upload/download.")}function T(e){return new d(_.INVALID_URL,"Invalid URL '"+e+"'.")}function U(e){return new d(_.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function k(){return new d(_.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function A(){return new d(_.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function N(){return new d(_.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function O(e,t,r){return new d(_.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+r)}function C(e,t,r,n){var o,i;return e===t?(o=e,i=1===e?"argument":"arguments"):(o="between "+e+" and "+t,i="arguments"),new d(_.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+r+"`: Expected "+o+" "+i+", received "+n+".")}function S(){return new d(_.APP_DELETED,"The Firebase app was deleted.")}function x(e){return new d(_.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function P(e,t){return new d(_.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function I(e){throw new d(_.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function D(e){switch(e){case L.RAW:case L.BASE64:case L.BASE64URL:case L.DATA_URL:return;default:throw"Expected one of the event types: ["+L.RAW+", "+L.BASE64+", "+L.BASE64URL+", "+L.DATA_URL+"]."}}var M=function(){function e(e,t){this.data=e,this.contentType=t||null}return e}();function W(e,t){switch(e){case L.RAW:return new M(B(t));case L.BASE64:case L.BASE64URL:return new M(q(e,t));case L.DATA_URL:return new M(F(t),H(t))}throw b()}function B(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296===(64512&n)){var o=r<e.length-1&&56320===(64512&e.charCodeAt(r+1));if(o){var i=n,a=e.charCodeAt(++r);n=65536|(1023&i)<<10|1023&a,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else 56320===(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function G(e){var t;try{t=decodeURIComponent(e)}catch(r){throw P(L.DATA_URL,"Malformed data URL.")}return B(t)}function q(e,t){switch(e){case L.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n){var o=r?"-":"_";throw P(e,"Invalid character '"+o+"' found: is it base64url encoded?")}break;case L.BASE64URL:var i=-1!==t.indexOf("+"),a=-1!==t.indexOf("/");if(i||a){o=i?"+":"/";throw P(e,"Invalid character '"+o+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}var s;try{s=atob(t)}catch(l){throw P(e,"Invalid character found")}for(var u=new Uint8Array(s.length),c=0;c<s.length;c++)u[c]=s.charCodeAt(c);return u}var j=function(){function e(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw P(L.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=t[1]||null;null!=r&&(this.base64=z(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}return e}();function F(e){var t=new j(e);return t.base64?q(L.BASE64,t.rest):G(t.rest)}function H(e){var t=new j(e);return t.contentType}function z(e,t){var r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X,V={STATE_CHANGED:"state_changed"},K={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},Z={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function J(e){switch(e){case K.RUNNING:case K.PAUSING:case K.CANCELING:return Z.RUNNING;case K.PAUSED:return Z.PAUSED;case K.SUCCESS:return Z.SUCCESS;case K.CANCELED:return Z.CANCELED;case K.ERROR:return Z.ERROR;default:return Z.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){return null!=e}function $(e){return void 0!==e}function Y(e){return"function"===typeof e}function ee(e){return"object"===typeof e}function te(e){return ee(e)&&null!==e}function re(e){return ee(e)&&!Array.isArray(e)}function ne(e){return"string"===typeof e||e instanceof String}function oe(e){return ie(e)&&Number.isInteger(e)}function ie(e){return"number"===typeof e||e instanceof Number}function ae(e){return se()&&e instanceof Blob}function se(){return"undefined"!==typeof Blob}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(X||(X={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ue=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=X.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=X.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=X.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw I("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),Q(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return Q(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw I("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw I("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw I("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){Q(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){Q(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),ce=function(){function e(){}return e.prototype.createXhrIo=function(){return new ue},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function pe(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=le();if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(se())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}function he(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe=function(){function e(e,t){var r=0,n="";ae(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(ae(this.data_)){var n=this.data_,o=he(n,t,r);return null===o?null:new e(o)}var i=new Uint8Array(this.data_.buffer,t,r-t);return new e(i,!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(se()){var n=t.map((function(t){return t instanceof e?t.data_:t}));return new e(pe.apply(null,n))}var o=t.map((function(e){return ne(e)?W(L.RAW,e).data:e.data_})),i=0;o.forEach((function(e){i+=e.byteLength}));var a=new Uint8Array(i),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]})),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}(),de=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r;try{r=e.makeFromUrl(t)}catch(n){return new e(t,"")}if(""===r.path)return r;throw U(t)},e.makeFromUrl=function(t){var r=null,n="([A-Za-z0-9.\\-_]+)";function o(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}var i="(/(.*))?$",a=new RegExp("^gs://"+n+i,"i"),s={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}for(var l="v[A-Za-z0-9_]+",p=c.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp("^https?://"+p+"/"+l+"/b/"+n+"/o"+h,"i"),d={bucket:1,path:3},_="(?:storage.googleapis.com|storage.cloud.google.com)",v="([^?#]*)",b=new RegExp("^https?://"+_+"/"+n+"/"+v,"i"),m={bucket:1,path:2},g=[{regex:a,indices:s,postModify:o},{regex:f,indices:d,postModify:u},{regex:b,indices:m,postModify:u}],y=0;y<g.length;y++){var R=g[y],w=R.regex.exec(t);if(w){var E=w[R.indices.bucket],U=w[R.indices.path];U||(U=""),r=new e(E,U),R.postModify(r);break}}if(null==r)throw T(t);return r},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(e){var t;try{t=JSON.parse(e)}catch(r){return null}return re(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){if(0===e.length)return null;var t=e.lastIndexOf("/");if(-1===t)return"";var r=e.slice(0,t);return r}function be(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}function me(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){return"https://"+c+"/v0"+e}function ye(e){var t=encodeURIComponent,r="?";for(var n in e)if(e.hasOwnProperty(n)){var o=t(n)+"="+t(e[n]);r=r+o+"&"}return r=r.slice(0,-1),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t){return t}var we=function(){function e(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||Re}return e}(),Ee=null;function Te(e){return!ne(e)||e.length<2?e:me(e)}function Ue(){if(Ee)return Ee;var e=[];function t(e,t){return Te(t)}e.push(new we("bucket")),e.push(new we("generation")),e.push(new we("metageneration")),e.push(new we("name","fullPath",!0));var r=new we("name");function n(e,t){return Q(t)?Number(t):t}r.xform=t,e.push(r);var o=new we("size");return o.xform=n,e.push(o),e.push(new we("timeCreated")),e.push(new we("updated")),e.push(new we("md5Hash",null,!0)),e.push(new we("cacheControl",null,!0)),e.push(new we("contentDisposition",null,!0)),e.push(new we("contentEncoding",null,!0)),e.push(new we("contentLanguage",null,!0)),e.push(new we("contentType",null,!0)),e.push(new we("metadata","customMetadata",!0)),Ee=e,Ee}function ke(e,t){function r(){var r=e["bucket"],n=e["fullPath"],o=new de(r,n);return t.makeStorageReference(o)}Object.defineProperty(e,"ref",{get:r})}function Ae(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return ke(n,e),n}function Ne(e,t,r){var n=_e(t);if(null===n)return null;var o=n;return Ae(e,o,r)}function Oe(e,t){var r=_e(t);if(null===r)return null;if(!ne(r["downloadTokens"]))return null;var n=r["downloadTokens"];if(0===n.length)return null;var o=encodeURIComponent,i=n.split(","),a=i.map((function(t){var r=e["bucket"],n=e["fullPath"],i="/b/"+o(r)+"/o/"+o(n),a=ge(i),s=ye({alt:"media",token:t});return a+s}));return a[0]}function Ce(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}function Se(e){if(!ee(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!ee(r))throw"Expected object for 'customMetadata' mapping."}else if(te(r))throw"Mapping for '"+t+"' cannot be an object."}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe="maxResults",Pe=1e3,Ie="pageToken",Le="prefixes",De="items";function Me(e,t,r){var n={prefixes:[],items:[],nextPageToken:r["nextPageToken"]};if(r[Le])for(var o=0,i=r[Le];o<i.length;o++){var a=i[o],s=a.replace(/\/$/,""),u=e.makeStorageReference(new de(t,s));n.prefixes.push(u)}if(r[De])for(var c=0,l=r[De];c<l.length;c++){var p=l[c];u=e.makeStorageReference(new de(t,p["name"]));n.items.push(u)}return n}function We(e,t,r){var n=_e(r);if(null===n)return null;var o=n;return Me(e,t,o)}function Be(e){if(!ee(e)||!e)throw"Expected ListOptions object.";for(var t in e)if(t===xe){if(!oe(e[xe])||e[xe]<=0)throw"Expected maxResults to be a positive number.";if(e[xe]>1e3)throw"Expected maxResults to be less than or equal to "+Pe+"."}else{if(t!==Ie)throw"Unknown option: "+t;if(e[Ie]&&!ne(e[Ie]))throw"Expected pageToken to be string."}}var Ge=function(){function e(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e){if(!e)throw b()}function je(e,t){function r(r,n){var o=Ne(e,n,t);return qe(null!==o),o}return r}function Fe(e,t){function r(r,n){var o=We(e,t,n);return qe(null!==o),o}return r}function He(e,t){function r(r,n){var o=Ne(e,n,t);return qe(null!==o),Oe(o,n)}return r}function ze(e){function t(t,r){var n;return n=401===t.getStatus()?y():402===t.getStatus()?g(e.bucket):403===t.getStatus()?R(e.path):r,n.setServerResponseProp(r.serverResponseProp()),n}return t}function Xe(e){var t=ze(e);function r(r,n){var o=t(r,n);return 404===r.getStatus()&&(o=m(e.path)),o.setServerResponseProp(n.serverResponseProp()),o}return r}function Ve(e,t,r){var n=t.fullServerUrl(),o=ge(n),i="GET",a=e.maxOperationRetryTime(),s=new Ge(o,i,je(e,r),a);return s.errorHandler=Xe(t),s}function Ke(e,t,r,n,o){var i={};t.isRoot?i["prefix"]="":i["prefix"]=t.path+"/",r&&r.length>0&&(i["delimiter"]=r),n&&(i["pageToken"]=n),o&&(i["maxResults"]=o);var a=t.bucketOnlyServerUrl(),s=ge(a),u="GET",c=e.maxOperationRetryTime(),l=new Ge(s,u,Fe(e,t.bucket),c);return l.urlParams=i,l.errorHandler=ze(t),l}function Ze(e,t,r){var n=t.fullServerUrl(),o=ge(n),i="GET",a=e.maxOperationRetryTime(),s=new Ge(o,i,He(e,r),a);return s.errorHandler=Xe(t),s}function Je(e,t,r,n){var o=t.fullServerUrl(),i=ge(o),a="PATCH",s=Ce(r,n),u={"Content-Type":"application/json; charset=utf-8"},c=e.maxOperationRetryTime(),l=new Ge(i,a,je(e,n),c);return l.headers=u,l.body=s,l.errorHandler=Xe(t),l}function Qe(e,t){var r=t.fullServerUrl(),n=ge(r),o="DELETE",i=e.maxOperationRetryTime();function a(e,t){}var s=new Ge(n,o,a,i);return s.successCodes=[200,204],s.errorHandler=Xe(t),s}function $e(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Ye(e,t,r){var n=Object.assign({},r);return n["fullPath"]=e.path,n["size"]=t.size(),n["contentType"]||(n["contentType"]=$e(null,t)),n}function et(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function s(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}var u=s();a["Content-Type"]="multipart/related; boundary="+u;var c=Ye(t,n,o),l=Ce(c,r),p="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+u+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",h="\r\n--"+u+"--",f=fe.getBlob(p,n,h);if(null===f)throw k();var d={name:c["fullPath"]},_=ge(i),v="POST",b=e.maxUploadRetryTime(),m=new Ge(_,v,je(e,r),b);return m.urlParams=d,m.headers=a,m.body=f.uploadData(),m.errorHandler=ze(t),m}var tt=function(){function e(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}return e}();function rt(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(o){qe(!1)}var n=t||["active"];return qe(!!r&&-1!==n.indexOf(r)),r}function nt(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=Ye(t,n,o),s={name:a["fullPath"]},u=ge(i),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},p=Ce(a,r),h=e.maxUploadRetryTime();function f(e){var t;rt(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(r){qe(!1)}return qe(ne(t)),t}var d=new Ge(u,c,f,h);return d.urlParams=s,d.headers=l,d.body=p,d.errorHandler=ze(t),d}function ot(e,t,r,n){var o={"X-Goog-Upload-Command":"query"};function i(e){var t=rt(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(i){qe(!1)}r||qe(!1);var o=Number(r);return qe(!isNaN(o)),new tt(o,n.size(),"final"===t)}var a="POST",s=e.maxUploadRetryTime(),u=new Ge(r,a,i,s);return u.headers=o,u.errorHandler=ze(t),u}var it=262144;function at(e,t,r,n,o,i,a,s){var u=new tt(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw A();var c=u.total-u.current,l=c;o>0&&(l=Math.min(l,o));var p=u.current,h=p+l,f=l===c?"upload, finalize":"upload",d={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":u.current},_=n.slice(p,h);if(null===_)throw k();function v(e,r){var o,a=rt(e,["active","final"]),s=u.current+l,c=n.size();return o="final"===a?je(t,i)(e,r):null,new tt(s,c,"final"===a,o)}var b="POST",m=t.maxUploadRetryTime(),g=new Ge(r,b,v,m);return g.headers=d,g.body=_.uploadData(),g.progressCallback=s||null,g.errorHandler=ze(e),g}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st=function(){function e(e,t,r){var n=Y(e)||Q(t)||Q(r);if(n)this.next=e,this.error=t||null,this.complete=r||null;else{var o=e;this.next=o.next||null,this.error=o.error||null,this.complete=o.complete||null}}return e}(),ut=function(){function e(e,t,r,n,o,i){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=i}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ct(e,t,r){for(var n=t.length,o=t.length,i=0;i<t.length;i++)if(t[i].optional){n=i;break}var a=n<=r.length&&r.length<=o;if(!a)throw C(n,o,e,r.length);for(i=0;i<r.length;i++)try{t[i].validator(r[i])}catch(s){throw s instanceof Error?O(i,e,s.message):O(i,e,s)}}var lt=function(){function e(e,t){var r=this;this.validator=function(t){r.optional&&!$(t)||e(t)},this.optional=!!t}return e}();function pt(e,t){return function(r){e(r),t(r)}}function ht(e,t){function r(e){if(!ne(e))throw"Expected string."}var n;return n=e?pt(r,e):r,new lt(n,t)}function ft(){function e(e){var t=e instanceof Uint8Array||e instanceof ArrayBuffer||se()&&e instanceof Blob;if(!t)throw"Expected Blob or File."}return new lt(e)}function dt(e){return new lt(Se,e)}function _t(e){return new lt(Be,e)}function vt(){function e(e){var t=ie(e)&&e>=0;if(!t)throw"Expected a number 0 or greater."}return new lt(e)}function bt(e,t){function r(t){var r=null===t||Q(t)&&t instanceof Object;if(!r)throw"Expected an Object.";void 0!==e&&null!==e&&e(t)}return new lt(r,t)}function mt(e){function t(e){var t=null===e||Y(e);if(!t)throw"Expected a Function."}return new lt(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt=function(){function e(e,t,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.authWrapper_=t,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=K.RUNNING,this.errorHandler_=function(e){a.request_=null,a.chunkMultiplier_=1,e.codeEquals(_.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=e,a.transition_(K.ERROR))},this.metadataErrorHandler_=function(e){a.request_=null,e.codeEquals(_.CANCELED)?a.completeTransitions_():(a.error_=e,a.transition_(K.ERROR))},this.promise_=new Promise((function(e,t){a.resolve_=e,a.reject_=t,a.start_()})),this.promise_.then(null,(function(){}))}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_;return function(r){return e.updateProgress_(t+r)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===K.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this;this.authWrapper_.getAuthToken().then((function(r){switch(t.state_){case K.RUNNING:e(r);break;case K.CANCELING:t.transition_(K.CANCELED);break;case K.PAUSING:t.transition_(K.PAUSED);break}}))},e.prototype.createResumable_=function(){var e=this;this.resolveToken_((function(t){var r=nt(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_;this.resolveToken_((function(r){var n=ot(e.authWrapper_,e.location_,t,e.blob_),o=e.authWrapper_.makeRequest(n,r);e.request_=o,o.getPromise().then((function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.continueUpload_=function(){var e=this,t=it*this.chunkMultiplier_,r=new tt(this.transferred_,this.blob_.size()),n=this.uploadUrl_;this.resolveToken_((function(o){var i;try{i=at(e.location_,e.authWrapper_,n,e.blob_,t,e.mappings_,r,e.makeProgressCallback_())}catch(s){return e.error_=s,void e.transition_(K.ERROR)}var a=e.authWrapper_.makeRequest(i,o);e.request_=a,a.getPromise().then((function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(K.SUCCESS)):e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.increaseMultiplier_=function(){var e=it*this.chunkMultiplier_;e<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this;this.resolveToken_((function(t){var r=Ve(e.authWrapper_,e.location_,e.mappings_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.transition_(K.SUCCESS)}),e.metadataErrorHandler_)}))},e.prototype.oneShotUpload_=function(){var e=this;this.resolveToken_((function(t){var r=et(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(K.SUCCESS)}),e.errorHandler_)}))},e.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case K.CANCELING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case K.PAUSING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case K.RUNNING:var t=this.state_===K.PAUSED;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case K.PAUSED:this.state_=e,this.notifyObservers_();break;case K.CANCELED:this.error_=E(),this.state_=e,this.notifyObservers_();break;case K.ERROR:this.state_=e,this.notifyObservers_();break;case K.SUCCESS:this.state_=e,this.notifyObservers_();break}},e.prototype.completeTransitions_=function(){switch(this.state_){case K.PAUSING:this.transition_(K.PAUSED);break;case K.CANCELING:this.transition_(K.CANCELED);break;case K.RUNNING:this.start_();break}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=J(this.state_);return new ut(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,r,n){function o(){if(e!==V.STATE_CHANGED)throw"Expected one of the event types: ["+V.STATE_CHANGED+"]."}var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=mt(!0).validator,s=bt(null,!0).validator;function u(e){try{return void a(e)}catch(r){}try{s(e);var t=$(e["next"])||$(e["error"])||$(e["complete"]);if(!t)throw"";return}catch(r){throw i}}var c=[ht(o),bt(u,!0),mt(!0),mt(!0)];ct("on",c,arguments);var l=this;function p(e){function t(t,r,o){null!==e&&ct("on",e,arguments);var i=new st(t,r,n);return l.addObserver_(i),function(){l.removeObserver_(i)}}return t}function h(e){if(null===e)throw i;u(e)}var f=[bt(h),mt(!0),mt(!0)],d=!($(t)||$(r)||$(n));return d?p(f):p(null)(t,r,n)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},e.prototype.notifyObservers_=function(){var e=this;this.finishPromise_();var t=this.observers_.slice();t.forEach((function(t){e.notifyObserver_(t)}))},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(J(this.state_)){case Z.SUCCESS:gt(this.resolve_.bind(null,this.snapshot))();break;case Z.CANCELED:case Z.ERROR:var t=this.reject_;gt(t.bind(null,this.error_))();break;default:e=!1;break}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){var t=J(this.state_);switch(t){case Z.RUNNING:case Z.PAUSED:e.next&&gt(e.next.bind(e,this.snapshot))();break;case Z.SUCCESS:e.complete&&gt(e.complete.bind(e))();break;case Z.CANCELED:case Z.ERROR:e.error&&gt(e.error.bind(e,this.error_))();break;default:e.error&&gt(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){ct("resume",[],arguments);var e=this.state_===K.PAUSED||this.state_===K.PAUSING;return e&&this.transition_(K.RUNNING),e},e.prototype.pause=function(){ct("pause",[],arguments);var e=this.state_===K.RUNNING;return e&&this.transition_(K.PAUSING),e},e.prototype.cancel=function(){ct("cancel",[],arguments);var e=this.state_===K.RUNNING||this.state_===K.PAUSING;return e&&this.transition_(K.CANCELING),e},e}(),Rt=function(){function e(e,t){this.authWrapper=e,this.location=t instanceof de?t:de.makeFromUrl(t)}return e.prototype.toString=function(){return ct("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,r){return new e(t,r)},e.prototype.mappings=function(){return Ue()},e.prototype.child=function(e){ct("child",[ht()],arguments);var t=be(this.location.path,e),r=new de(this.location.bucket,t);return this.newRef(this.authWrapper,r)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=ve(this.location.path);if(null===e)return null;var t=new de(this.location.bucket,e);return this.newRef(this.authWrapper,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new de(this.location.bucket,"");return this.newRef(this.authWrapper,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return me(this.location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),ct("put",[ft(),dt(!0)],arguments),this.throwIfRoot_("put"),new yt(this,this.authWrapper,this.location,this.mappings(),new fe(e),t)},e.prototype.putString=function(e,t,r){void 0===t&&(t=L.RAW),ct("putString",[ht(),ht(D,!0),dt(!0)],arguments),this.throwIfRoot_("putString");var n=W(t,e),o=Object.assign({},r);return!Q(o["contentType"])&&Q(n.contentType)&&(o["contentType"]=n.contentType),new yt(this,this.authWrapper,this.location,this.mappings(),new fe(n.data,!0),o)},e.prototype.delete=function(){var e=this;return ct("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then((function(t){var r=Qe(e.authWrapper,e.location);return e.authWrapper.makeRequest(r,t).getPromise()}))},e.prototype.listAll=function(){ct("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then((function(){return e}))},e.prototype.listAllHelper=function(e,t){return i(this,void 0,void 0,(function(){var r,n,o,i;return a(this,(function(a){switch(a.label){case 0:return r={pageToken:t},[4,this.list(r)];case 1:return n=a.sent(),(o=e.prefixes).push.apply(o,n.prefixes),(i=e.items).push.apply(i,n.items),null==n.nextPageToken?[3,3]:[4,this.listAllHelper(e,n.nextPageToken)];case 2:a.sent(),a.label=3;case 3:return[2]}}))}))},e.prototype.list=function(e){ct("list",[_t(!0)],arguments);var t=this;return this.authWrapper.getAuthToken().then((function(r){var n=e||{},o=Ke(t.authWrapper,t.location,"/",n.pageToken,n.maxResults);return t.authWrapper.makeRequest(o,r).getPromise()}))},e.prototype.getMetadata=function(){var e=this;return ct("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then((function(t){var r=Ve(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(r,t).getPromise()}))},e.prototype.updateMetadata=function(e){var t=this;return ct("updateMetadata",[dt()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then((function(r){var n=Je(t.authWrapper,t.location,e,t.mappings());return t.authWrapper.makeRequest(n,r).getPromise()}))},e.prototype.getDownloadURL=function(){var e=this;return ct("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then((function(t){var r=Ze(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(r,t).getPromise().then((function(e){if(null===e)throw N();return e}))}))},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw x(e)},e}(),wt=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}(),Et=function(){function e(){this.map=new Map,this.id=f}return e.prototype.addRequest=function(e){var t=this,r=this.id;this.id++,this.map.set(r,e),e.getPromise().then((function(){return t.map.delete(r)}),(function(){return t.map.delete(r)}))},e.prototype.clear=function(){this.map.forEach((function(e){e&&e.cancel(!0)})),this.map.clear()},e}(),Tt=function(){function e(t,r,n,o,i,a){var s;if(this.bucket_=null,this.appId_=null,this.deleted_=!1,this.app_=t,null!==this.app_){var u=this.app_.options;Q(u)&&(this.bucket_=e.extractBucket_(u),this.appId_=null!==(s=u.appId)&&void 0!==s?s:null)}this.authProvider_=r,this.storageRefMaker_=n,this.requestMaker_=o,this.pool_=a,this.service_=i,this.maxOperationRetryTime_=p,this.maxUploadRetryTime_=h,this.requestMap_=new Et}return e.extractBucket_=function(e){var t=e[l]||null;if(null==t)return null;var r=de.makeFromBucketSpec(t);return r.bucket},e.prototype.getAuthToken=function(){var e=this.authProvider_.getImmediate({optional:!0});return e?e.getToken().then((function(e){return null!==e?e.accessToken:null}),(function(){return null})):Promise.resolve(null)},e.prototype.bucket=function(){if(this.deleted_)throw S();return this.bucket_},e.prototype.service=function(){return this.service_},e.prototype.makeStorageReference=function(e){return this.storageRefMaker_(this,e)},e.prototype.makeRequest=function(e,t){if(this.deleted_)return new wt(S());var r=this.requestMaker_(e,this.appId_,t,this.pool_);return this.requestMap_.addRequest(r),r},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},e.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},e.prototype.setMaxUploadRetryTime=function(e){this.maxUploadRetryTime_=e},e.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},e.prototype.setMaxOperationRetryTime=function(e){this.maxOperationRetryTime_=e},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ut(e,t,r){var n=1,o=null,i=!1,a=0;function u(){return 2===a}var c=!1;function l(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];c||(c=!0,t.apply(null,e))}function p(t){o=setTimeout((function(){o=null,e(h,u())}),t)}function h(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(!c)if(e)l.call.apply(l,s([null,e],t));else{var o,h=u()||i;if(h)l.call.apply(l,s([null,e],t));else n<64&&(n*=2),1===a?(a=2,o=0):o=1e3*(n+Math.random()),p(o)}}var f=!1;function d(e){f||(f=!0,c||(null!==o?(e||(a=2),clearTimeout(o),p(0)):e||(a=1)))}return p(0),setTimeout((function(){i=!0,d(!0)}),r),d}function kt(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var p=this;this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise((function(e,t){p.resolve_=e,p.reject_=t,p.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,r){if(r)t(!1,new Nt(!1,null,!0));else{var n=e.pool_.createXhrIo();e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null,r=r;var n=r.getErrorCode()===X.NO_ERROR,i=r.getStatus();if(n&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new Nt(a,r))}else{var s=r.getErrorCode()===X.ABORT;t(!1,new Nt(!1,null,s))}}))}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(r,n)}}function r(t,r){var n=e.resolve_,o=e.reject_,i=r.xhr;if(r.wasSuccessCode)try{var a=e.callback_(i,i.getResponseText());$(a)?n(a):n()}catch(u){o(u)}else if(null!==i){var s=b();s.setServerResponseProp(i.getResponseText()),e.errorCallback_?o(e.errorCallback_(i,s)):o(s)}else if(r.canceled){s=e.appDelete_?S():E();o(s)}else{s=w();o(s)}}this.canceled_?r(!1,new Nt(!1,null,!0)):this.backoffId_=Ut(t,r,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&kt(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=[408,429],n=-1!==r.indexOf(e),o=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||o},e}(),Nt=function(){function e(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r}return e}();function Ot(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Ct(e){var t="undefined"!==typeof o.a?o.a.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}function St(e,t){t&&(e["X-Firebase-GMPID"]=t)}function xt(e,t,r,n){var o=ye(e.urlParams),i=e.url+o,a=Object.assign({},e.headers);return St(a,t),Ot(a,r),Ct(a),new At(i,e.method,a,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt=function(){function e(e,t,r,n){function o(e,t){return new Rt(e,t)}if(this.bucket_=null,this.authWrapper_=new Tt(e,t,o,xt,this,r),this.app_=e,null!=n)this.bucket_=de.makeFromBucketSpec(n);else{var i=this.authWrapper_.bucket();null!=i&&(this.bucket_=new de(i,""))}this.internals_=new It(this)}return e.prototype.ref=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."}if(ct("ref",[ht(t,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var r=new Rt(this.authWrapper_,this.bucket_);return null!=e?r.child(e):r},e.prototype.refFromURL=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{de.makeFromUrl(e)}catch(t){throw"Expected valid full URL but got an invalid one."}}return ct("refFromURL",[ht(t,!1)],arguments),new Rt(this.authWrapper_,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!1,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){ct("setMaxUploadRetryTime",[vt()],arguments),this.authWrapper_.setMaxUploadRetryTime(e)},e.prototype.setMaxOperationRetryTime=function(e){ct("setMaxOperationRetryTime",[vt()],arguments),this.authWrapper_.setMaxOperationRetryTime(e)},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!1,configurable:!0}),e}(),It=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},e}(),Lt="@firebase/storage",Dt="0.3.39",Mt="storage";function Wt(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new Pt(r,n,new ce,t)}function Bt(e){var t={TaskState:Z,TaskEvent:V,StringFormat:L,Storage:Pt,Reference:Rt};e.INTERNAL.registerComponent(new u["Component"](Mt,Wt,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(Lt,Dt)}Bt(o.a)}}]);
//# sourceMappingURL=chunk-firebase_storage.dd795e0a.js.map