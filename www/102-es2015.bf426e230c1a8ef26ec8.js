(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{znmF:function(l,n,t){"use strict";t.r(n);var o=t("8Y7J");class u{}var e=t("pMnS"),i=t("MKJQ"),r=t("sZkV"),a=t("tvKB");class s{constructor(l,n,t,o,u,e){this.router=l,this.orderItemsService=n,this.platform=t,this.route=o,this.toastCtrl=u,this.modalCtrl=e,this.placedOrder=[]}ngOnInit(){this.placedOrder=this.orderItemsService.placedOrder,console.log(this.placedOrder)}ionViewDidEnter(){this.subscription=this.platform.backButton.subscribe(()=>{console.log("exit"),this.router.navigateByUrl("/home"),document.location.reload()})}ionViewWillLeave(){this.subscription&&this.subscription.unsubscribe()}reorder(){this.router.navigateByUrl("/hotel/tabs/hotel-home")}settleBillLater(){this.toastCtrl.create({message:"As a safety measure to protect our guests from COVID-19 exposure, we won't be taking your signature on a physical bill and will present it during checkout only.",position:"middle",color:"warning",keyboardClose:!0,buttons:[{side:"end",text:"OKAY",role:"cancel",handler:()=>{this.router.navigateByUrl("/hotel/tabs/hotel-home")}}]}).then(l=>{l.present()})}}var c=t("iInd"),b=o.nb({encapsulation:0,styles:[[".confirmation-msg[_ngcontent-%COMP%]{color:#fff;background-image:linear-gradient(to right bottom,#0f230a,#153112,#1d3f17,#254e1d,#2e5e22);padding:20px 0;text-align:center;box-shadow:0 5px 10px #9e9e9e}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}ion-item[_ngcontent-%COMP%]{--background:transparent;margin-top:-12px}"]],data:{}});function p(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,22,"ion-content",[],null,null,null,i.K,i.h)),o.ob(1,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,8,"div",[["class","confirmation-msg ion-padding-horizontal"]],null,null,null,null,null)),(l()(),o.pb(3,0,null,null,1,"ion-icon",[["color","light"],["name","checkmark-done-outline"],["style","font-size: 80px;"]],null,null,null,i.N,i.k)),o.ob(4,49152,null,0,r.C,[o.h,o.k,o.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),o.pb(5,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Thank You!"])),(l()(),o.pb(7,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Your order has been placed."])),(l()(),o.pb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.Gb(-1,null,["You will get a confirmation call in a few minutes."])),(l()(),o.pb(11,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.pb(12,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.pb(13,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.pb(14,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.pb(15,0,null,0,6,"div",[["class","billing-buttons ion-padding-horizontal"]],null,null,null,null,null)),(l()(),o.pb(16,0,null,null,2,"ion-button",[["color","primary"],["mode","md"],["size","small"],["target","_blank"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.reorder()&&o),o}),i.H,i.e)),o.ob(17,49152,null,0,r.k,[o.h,o.k,o.x],{color:[0,"color"],mode:[1,"mode"],size:[2,"size"],target:[3,"target"]},null),(l()(),o.Gb(-1,0,["Settle Bill Now"])),(l()(),o.pb(19,0,null,null,2,"ion-button",[["color","dark"],["mode","md"],["size","small"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.settleBillLater()&&o),o}),i.H,i.e)),o.ob(20,49152,null,0,r.k,[o.h,o.k,o.x],{color:[0,"color"],mode:[1,"mode"],size:[2,"size"]},null),(l()(),o.Gb(-1,0,["Settle Bill Later"])),(l()(),o.pb(22,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){l(n,4,0,"light","checkmark-done-outline"),l(n,17,0,"primary","md","small","_blank"),l(n,20,0,"dark","md","small")}),null)}function d(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"app-confirmation",[],null,null,null,p,b)),o.ob(1,114688,null,0,s,[c.m,a.a,r.Gb,c.a,r.Lb,r.Db],null,null)],(function(l,n){l(n,1,0)}),null)}var m=o.lb("app-confirmation",s,d,{},{},[]);class g{constructor(l,n){this.modalCtrl=l,this.router=n}ngOnInit(){}messageOkay(){this.modalCtrl.dismiss(),this.router.navigateByUrl("hotel/tabs/hotel-home")}}var h=o.nb({encapsulation:0,styles:[[".confirmation-msg[_ngcontent-%COMP%]{color:#fff;background-image:linear-gradient(to right bottom,#0f230a,#153112,#1d3f17,#254e1d,#2e5e22);padding:70px 0;text-align:center;box-shadow:0 5px 10px #9e9e9e;font-size:20px}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}ion-item[_ngcontent-%COMP%]{--background:transparent;margin-top:-12px}"]],data:{}});function f(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,13,"ion-content",[],null,null,null,i.K,i.h)),o.ob(1,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,4,"div",[["class","bottom-buttons"]],null,null,null,null,null)),(l()(),o.pb(3,0,null,null,3,"div",[["class","place-order-btn ion-padding-horizontal"]],null,null,null,null,null)),(l()(),o.pb(4,0,null,null,2,"ion-button",[["color","success"],["expand","block"],["mode","md"],["style","text-transform: capitalize;"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.messageOkay()&&o),o}),i.H,i.e)),o.ob(5,49152,null,0,r.k,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"],mode:[2,"mode"]},null),(l()(),o.Gb(-1,0,[" OKAY "])),(l()(),o.pb(7,0,null,0,2,"div",[["class","confirmation-msg ion-padding-horizontal"]],null,null,null,null,null)),(l()(),o.pb(8,0,null,null,1,"p",[["class","ion-padding-horizontal"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["As a safety measure to protect our guests from COVID-19 exposure, we won't be taking your signature on a physical bill and will present it during checkout only."])),(l()(),o.pb(10,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.pb(11,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.pb(12,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.pb(13,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){l(n,5,0,"success","block","md")}),null)}function k(l){return o.Hb(0,[(l()(),o.pb(0,0,null,null,1,"app-settle-bill-covid",[],null,null,null,f,h)),o.ob(1,114688,null,0,g,[r.Db,c.m],null,null)],(function(l,n){l(n,1,0)}),null)}var x=o.lb("app-settle-bill-covid",g,k,{},{},[]),z=t("SVse"),v=t("s7LF");class y{}t.d(n,"ConfirmationPageModuleNgFactory",(function(){return w}));var w=o.mb(u,[],(function(l){return o.yb([o.zb(512,o.j,o.X,[[8,[e.a,m,x]],[3,o.j],o.v]),o.zb(4608,z.k,z.j,[o.s,[2,z.q]]),o.zb(4608,v.j,v.j,[]),o.zb(4608,r.b,r.b,[o.x,o.g]),o.zb(4608,r.Db,r.Db,[r.b,o.j,o.p]),o.zb(4608,r.Hb,r.Hb,[r.b,o.j,o.p]),o.zb(1073742336,z.b,z.b,[]),o.zb(1073742336,v.i,v.i,[]),o.zb(1073742336,v.a,v.a,[]),o.zb(1073742336,r.Bb,r.Bb,[]),o.zb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),o.zb(1073742336,y,y,[]),o.zb(1073742336,u,u,[]),o.zb(1024,c.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);