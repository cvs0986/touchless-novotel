function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[108,107],{sk6g:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var s=function(){function e(t,n,s){_classCallCheck(this,e),this.modalCtrl=t,this.router=n,this.toastCtrl=s,this.guestQty=0}return _createClass(e,[{key:"ngOnInit",value:function(){console.log(this.spaItem)}},{key:"dismissCart",value:function(){this.modalCtrl.dismiss()}},{key:"incrementQty",value:function(){this.guestQty+=1}},{key:"decrementQty",value:function(){this.guestQty-1<1?this.guestQty=0:this.guestQty-=1}},{key:"placedOrder",value:function(){this.dismissCart(),this.toastCtrl.create({header:"Thank you!",message:"Your spa session has been booked!",keyboardClose:!0,position:"bottom",color:"success",buttons:[{side:"end",text:"OKAY",handler:function(){}}]}).then((function(e){e.present()}))}}]),e}()}}]);