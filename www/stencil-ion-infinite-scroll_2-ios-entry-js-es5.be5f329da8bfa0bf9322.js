function _defineProperty(n,i,e){return i in n?Object.defineProperty(n,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[i]=e,n}function asyncGeneratorStep(n,i,e,t,r,o,s){try{var l=n[o](s),c=l.value}catch(a){return void e(a)}l.done?i(c):Promise.resolve(c).then(t,r)}function _asyncToGenerator(n){return function(){var i=this,e=arguments;return new Promise((function(t,r){var o=n.apply(i,e);function s(n){asyncGeneratorStep(o,t,r,s,l,"next",n)}function l(n){asyncGeneratorStep(o,t,r,s,l,"throw",n)}s(void 0)}))}}function _classCallCheck(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,i,e){return i&&_defineProperties(n.prototype,i),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{nf6t:function(n,i,e){"use strict";e.r(i),e.d(i,"ion_infinite_scroll",(function(){return s})),e.d(i,"ion_infinite_scroll_content",(function(){return l}));var t=e("Wbmy"),r=e("8XIS"),o=e("Uwmq"),s=function(){function n(i){var e=this;_classCallCheck(this,n),Object(t.l)(this,i),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var n=e.scrollEl;if(!n||!e.canStart())return 1;var i=e.el.offsetHeight;if(0===i)return 2;var t=n.scrollTop,r=n.offsetHeight,o=0!==e.thrPc?r*e.thrPc:e.thrPx;if(("bottom"===e.position?n.scrollHeight-i-t-o-r:t-i-o)<0){if(!e.didFire)return e.isLoading=!0,e.didFire=!0,e.ionInfinite.emit(),3}else e.didFire=!1;return 4},this.ionInfinite=Object(t.f)(this,"ionInfinite",7)}var i,e;return _createClass(n,[{key:"thresholdChanged",value:function(){var n=this.threshold;n.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(n)/100):(this.thrPx=parseFloat(n),this.thrPc=0)}},{key:"disabledChanged",value:function(){var n=this.disabled;n&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!n)}},{key:"connectedCallback",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function n(){var i,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(i=this.el.closest("ion-content"))){n.next=10;break}return n.next=4,i.getScrollElement();case 4:this.scrollEl=n.sent,this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(t.n)((function(){e.scrollEl&&(e.scrollEl.scrollTop=e.scrollEl.scrollHeight-e.scrollEl.clientHeight)})),n.next=11;break;case 10:console.error("<ion-infinite-scroll> must be used inside an <ion-content>");case 11:case"end":return n.stop()}}),n,this)}))),function(){return e.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.enableScrollEvents(!1),this.scrollEl=void 0}},{key:"complete",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function n(){var i,e,r=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=this.scrollEl,this.isLoading&&i&&(this.isLoading=!1,"top"===this.position)&&(this.isBusy=!0,e=i.scrollHeight-i.scrollTop,requestAnimationFrame((function(){Object(t.h)((function(){var n=i.scrollHeight-e;requestAnimationFrame((function(){Object(t.n)((function(){i.scrollTop=n,r.isBusy=!1}))}))}))})));case 2:case"end":return n.stop()}}),n,this)}))),function(){return i.apply(this,arguments)})},{key:"canStart",value:function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}},{key:"enableScrollEvents",value:function(n){this.scrollEl&&(n?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}},{key:"render",value:function(){var n,i=Object(r.b)(this),e=this.disabled;return Object(t.j)(t.b,{class:(n={},_defineProperty(n,i,!0),_defineProperty(n,"infinite-scroll-loading",this.isLoading),_defineProperty(n,"infinite-scroll-enabled",!e),n)})}},{key:"el",get:function(){return Object(t.g)(this)}}],[{key:"watchers",get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}}]),n}();s.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";var l=function(){function n(i){_classCallCheck(this,n),Object(t.l)(this,i)}return _createClass(n,[{key:"componentDidLoad",value:function(){if(void 0===this.loadingSpinner){var n=Object(r.b)(this);this.loadingSpinner=r.c.get("infiniteLoadingSpinner",r.c.get("spinner","ios"===n?"lines":"crescent"))}}},{key:"render",value:function(){var n,i=Object(r.b)(this);return Object(t.j)(t.b,{class:(n={},_defineProperty(n,i,!0),_defineProperty(n,"infinite-scroll-content-".concat(i),!0),n)},Object(t.j)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(t.j)("div",{class:"infinite-loading-spinner"},Object(t.j)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(t.j)("div",{class:"infinite-loading-text",innerHTML:Object(o.a)(this.loadingText)})))}}]),n}();l.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}}}]);