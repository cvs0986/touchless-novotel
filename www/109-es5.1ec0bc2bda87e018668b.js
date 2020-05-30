function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{MH7c:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),o=function l(){_classCallCheck(this,l)},u=e("pMnS"),i=e("MKJQ"),c=e("sZkV"),r=e("SVse"),a=e("tvKB"),s=e("yTNM"),b=function(){function l(n,e,t,o){_classCallCheck(this,l),this.router=n,this.route=e,this.orderItemService=t,this.api=o,this.showWelcomeImage=!1}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.route.paramMap.subscribe((function(n){if(n.has("hi")){var e=n.get("hi");localStorage.setItem("hi",n.get("hi")),l.orderItemService.hotelId=e,console.log(e,l.orderItemService.hotelId),l.api.getHotelType(e).subscribe((function(n){console.log(n),l.hotelDetails=n.body.details,l.propertyType=n.body.is_restaurant,l.hotelName=n.body.hotel_name,localStorage.setItem("hotelInfo",JSON.stringify(n.body))}),(function(l){console.log(l)}))}}))}},{key:"ionViewDidEnter",value:function(){var l=this;setTimeout((function(){l.redirectToHome()}),1e3)}},{key:"takeAway",value:function(){localStorage.removeItem("orderType"),localStorage.setItem("orderType","take-away"),this.router.navigateByUrl("/home")}},{key:"dineIn",value:function(){localStorage.removeItem("orderType"),localStorage.setItem("orderType","dine-in"),this.router.navigateByUrl("/home")}},{key:"redirectToHome",value:function(){this.router.navigateByUrl("/hotel/tabs/hotel-home")}}]),l}(),p=e("iInd"),h=t.nb({encapsulation:0,styles:[[".welcome-wrap[_ngcontent-%COMP%]{width:100%;height:100vh;background-image:url(welcome.76c806986dab008c581a.png);background-size:cover;background-position:top}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}.choose-action[_ngcontent-%COMP%]{width:100%;height:100vh;position:relative}.choose-action[_ngcontent-%COMP%]   .center-item[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);padding:0 30px;width:100%}.choose-action[_ngcontent-%COMP%]   .center-item[_ngcontent-%COMP%]   .welcome-msg[_ngcontent-%COMP%]{margin:30px 0;text-align:center}.hotel-logo[_ngcontent-%COMP%]{text-align:center}.hotel-logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:300;letter-spacing:2.2px;text-transform:uppercase}.hotel-logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;color:#555}.hotel-logo[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7a7a7a;font-size:14px;text-transform:uppercase;letter-spacing:1.1px;margin-top:0}.hotel-welcome-section[_ngcontent-%COMP%]{background-color:#e6e7e8;width:100%;height:100vh;text-align:center;position:relative}.hotel-welcome-section[_ngcontent-%COMP%]   .hotel-welcome-content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);width:100%;color:#3d3c3c}"]],data:{}});function g(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,27,"ion-content",[],null,null,null,i.K,i.h)),t.ob(1,49152,null,0,c.u,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,25,"div",[["class","rest-wrap-color"]],[[4,"background-color",null],[4,"color",null]],null,null,null,null)),(l()(),t.pb(3,0,null,null,15,"div",[["class","bottom-buttons"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,14,"div",[["class","place-order-btn ion-padding-horizontal"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,13,"ion-row",[],null,null,null,i.U,i.r)),t.ob(6,49152,null,0,c.gb,[t.h,t.k,t.x],null,null),(l()(),t.pb(7,0,null,0,4,"ion-col",[["size","5"]],null,null,null,i.J,i.g)),t.ob(8,49152,null,0,c.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(9,0,null,0,2,"ion-button",[["fill","clear"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.takeAway()&&t),t}),i.H,i.e)),t.ob(10,49152,null,0,c.k,[t.h,t.k,t.x],{fill:[0,"fill"]},null),(l()(),t.Gb(-1,0,["Take Away"])),(l()(),t.pb(12,0,null,0,1,"ion-col",[["size","2"]],null,null,null,i.J,i.g)),t.ob(13,49152,null,0,c.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(14,0,null,0,4,"ion-col",[["size","5"]],null,null,null,i.J,i.g)),t.ob(15,49152,null,0,c.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(l()(),t.pb(16,0,null,0,2,"ion-button",[["color","success"],["expand","block"],["fill","clear"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.dineIn()&&t),t}),i.H,i.e)),t.ob(17,49152,null,0,c.k,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),t.Gb(-1,0,["Dine In"])),(l()(),t.pb(19,0,null,null,8,"div",[["class","choose-action"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,7,"div",[["class","center-item"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,3,"div",[["class","hotel-logo"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,0,"img",[["alt",""],["srcset",""],["width","50px"]],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(23,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Gb(24,null,["",""])),(l()(),t.pb(25,0,null,null,2,"div",[["class","welcome-msg"]],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Gb(27,null,[" "," "]))],(function(l,n){l(n,8,0,"5"),l(n,10,0,"clear"),l(n,13,0,"2"),l(n,15,0,"5"),l(n,17,0,"success","block","clear")}),(function(l,n){var e=n.component;l(n,2,0,e.hotelDetails.hotel_header_color,e.hotelDetails.hotel_bc_color),l(n,22,0,t.tb(1,"",e.hotelDetails.logo,"")),l(n,24,0,e.hotelName),l(n,27,0,e.hotelDetails.welcome_msg)}))}function d(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,4,"ion-content",[],null,null,null,i.K,i.h)),t.ob(1,49152,null,0,c.u,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,2,"div",[["class","hotel-welcome-section"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,1,"div",[["class","hotel-welcome-content"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,0,"img",[["alt",""],["src","../../assets/Logo_Grey.png"],["width","200px"]],null,null,null,null,null))],null,null)}function f(l){return t.Hb(0,[(l()(),t.eb(16777216,null,null,1,null,g)),t.ob(1,16384,null,0,r.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.eb(16777216,null,null,1,null,d)),t.ob(3,16384,null,0,r.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,1,0,1===e.propertyType),l(n,3,0,0===e.propertyType)}),null)}var m=t.lb("app-welcome",b,(function(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-welcome",[],null,null,null,f,h)),t.ob(1,114688,null,0,b,[p.m,p.a,a.a,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),v=e("s7LF"),k=function l(){_classCallCheck(this,l)};e.d(n,"WelcomePageModuleNgFactory",(function(){return w}));var w=t.mb(o,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[u.a,m]],[3,t.j],t.v]),t.zb(4608,r.k,r.j,[t.s,[2,r.q]]),t.zb(4608,v.j,v.j,[]),t.zb(4608,c.b,c.b,[t.x,t.g]),t.zb(4608,c.Db,c.Db,[c.b,t.j,t.p]),t.zb(4608,c.Hb,c.Hb,[c.b,t.j,t.p]),t.zb(1073742336,r.b,r.b,[]),t.zb(1073742336,v.i,v.i,[]),t.zb(1073742336,v.a,v.a,[]),t.zb(1073742336,c.Bb,c.Bb,[]),t.zb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),t.zb(1073742336,k,k,[]),t.zb(1073742336,o,o,[]),t.zb(1024,p.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);