(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bc2a730"],{"0a6e":function(t,n,e){"use strict";e.r(n);var c=e("7a23"),a={class:"admin container-fluid row g-0 min-vh-100"},o={class:"col-lg-2 text-light"},r={class:"\n          navba navbar-dark  navbar-expand-lg\n          p-3\n          d-flex\n          flex-lg-column\n          align-items-start\n        "},i=Object(c["createTextVNode"])("Nature"),u=Object(c["createVNode"])("button",{class:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":"#nav-collapse"},[Object(c["createVNode"])("i",{class:"navbar-toggler-icon"})],-1),s={class:"collapse navbar-collapse",id:"nav-collapse"},d={class:"navbar-nav d-flex flex-column mt-lg-4"},l={class:"nav-item"},f=Object(c["createTextVNode"])("商品管理"),p={class:"nav-item"},b=Object(c["createTextVNode"])("優惠券管理"),g={class:"nav-item"},h=Object(c["createTextVNode"])("訂單管理"),m={class:"nav-item"},v=Object(c["createTextVNode"])("文章管理"),j={class:"col-lg-10 bg-light min-vh-100 shadow-md"},O={class:"p-3 bg-white d-flex justify-content-between align-items-center"},x={class:"breadcrumb m-0"},N={class:"breadcrumb-item"},V=Object(c["createVNode"])("i",{class:"fas fa-angle-right"},null,-1),w={class:"breadcrumb-item active"};function k(t,n,e,k,$,y){var C=Object(c["resolveComponent"])("router-link"),T=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])("div",a,[Object(c["createVNode"])("div",o,[Object(c["createVNode"])("nav",r,[Object(c["createVNode"])(C,{to:"/",target:"_blank",class:"navbar-brand fs-6 fw-light"},{default:Object(c["withCtx"])((function(){return[i]})),_:1}),u,Object(c["createVNode"])("div",s,[Object(c["createVNode"])("ul",d,[Object(c["createVNode"])("li",l,[Object(c["createVNode"])(C,{class:"nav-link px-0",to:"/admin/products"},{default:Object(c["withCtx"])((function(){return[f]})),_:1})]),Object(c["createVNode"])("li",p,[Object(c["createVNode"])(C,{class:"nav-link px-0",to:"/admin/coupons"},{default:Object(c["withCtx"])((function(){return[b]})),_:1})]),Object(c["createVNode"])("li",g,[Object(c["createVNode"])(C,{class:"nav-link px-0",to:"/admin/orders"},{default:Object(c["withCtx"])((function(){return[h]})),_:1})]),Object(c["createVNode"])("li",m,[Object(c["createVNode"])(C,{class:"nav-link px-0",to:"/admin/articles"},{default:Object(c["withCtx"])((function(){return[v]})),_:1})])])])])]),Object(c["createVNode"])("div",j,[Object(c["createVNode"])("nav",O,[Object(c["createVNode"])("ol",x,[Object(c["createVNode"])("li",N,[Object(c["createTextVNode"])(Object(c["toDisplayString"])($.path)+" ",1),V]),Object(c["createVNode"])("li",w,Object(c["toDisplayString"])($.page),1)]),Object(c["createVNode"])("span",{class:["ms-auto me-3","登入中"===$.status?"text-success":"text-danger"]},Object(c["toDisplayString"])($.status),3),Object(c["createVNode"])("button",{type:"button",class:"btn btn-sm btn-secondary",onClick:n[1]||(n[1]=function(){return y.logout&&y.logout.apply(y,arguments)})}," 登出 ")]),Object(c["createVNode"])(T,{class:"p-3"})])])}e("ac1f"),e("5319");var $=e("a397"),y={emits:["page-loading","push-message"],data:function(){return{path:"",page:"",status:""}},watch:{$route:function(){this.page=this.$route.meta.title}},methods:{checking:function(){var t=this,n=document.cookie.replace(/(?:(?:^|.*;\s*)natureToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$emitter.on("upload-check",(function(t){n=t})),this.$http.defaults.headers.common.Authorization=n,Object($["C"])().then((function(n){n.data.success?(t.$pushMessage(n,"已登入"),t.status=n.data.message||"登入中"):(console.log(n),t.$pushMessage(n),t.$router.push("/login"))})).catch((function(n){t.$emitter.emit("page-loading",!1),t.$pushMessage(n)}))},logout:function(){var t=this;this.$emitter.emit("page-loading",!0),Object($["E"])().then((function(n){document.cookie="natureToken= ; expires=".concat(new Date),t.$router.push("/login"),t.$pushMessage(n)})).catch((function(n){t.$emitter.emit("page-loading",!1),t.$pushMessage(n)}))}},created:function(){this.path=this.$route.matched[0].meta.title,this.page=this.$route.meta.title,this.checking()}},C=e("d959"),T=e.n(C);const M=T()(y,[["render",k]]);n["default"]=M},"1dde":function(t,n,e){var c=e("d039"),a=e("b622"),o=e("2d00"),r=a("species");t.exports=function(t){return o>=51||!c((function(){var n=[],e=n.constructor={};return e[r]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"99af":function(t,n,e){"use strict";var c=e("23e7"),a=e("d039"),o=e("e8b5"),r=e("861d"),i=e("7b0b"),u=e("50c4"),s=e("8418"),d=e("65f0"),l=e("1dde"),f=e("b622"),p=e("2d00"),b=f("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",m=p>=51||!a((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),v=l("concat"),j=function(t){if(!r(t))return!1;var n=t[b];return void 0!==n?!!n:o(t)},O=!m||!v;c({target:"Array",proto:!0,forced:O},{concat:function(t){var n,e,c,a,o,r=i(this),l=d(r,0),f=0;for(n=-1,c=arguments.length;n<c;n++)if(o=-1===n?r:arguments[n],j(o)){if(a=u(o.length),f+a>g)throw TypeError(h);for(e=0;e<a;e++,f++)e in o&&s(l,f,o[e])}else{if(f>=g)throw TypeError(h);s(l,f++,o)}return l.length=f,l}})},a397:function(t,n,e){"use strict";e.d(n,"D",(function(){return i})),e.d(n,"E",(function(){return u})),e.d(n,"C",(function(){return s})),e.d(n,"B",(function(){return d})),e.d(n,"z",(function(){return l})),e.d(n,"j",(function(){return f})),e.d(n,"A",(function(){return p})),e.d(n,"p",(function(){return b})),e.d(n,"x",(function(){return g})),e.d(n,"g",(function(){return h})),e.d(n,"r",(function(){return m})),e.d(n,"y",(function(){return v})),e.d(n,"h",(function(){return j})),e.d(n,"i",(function(){return O})),e.d(n,"n",(function(){return x})),e.d(n,"l",(function(){return N})),e.d(n,"v",(function(){return V})),e.d(n,"e",(function(){return w})),e.d(n,"b",(function(){return k})),e.d(n,"s",(function(){return $})),e.d(n,"o",(function(){return y})),e.d(n,"a",(function(){return C})),e.d(n,"w",(function(){return T})),e.d(n,"d",(function(){return M})),e.d(n,"f",(function(){return _})),e.d(n,"c",(function(){return D})),e.d(n,"q",(function(){return B})),e.d(n,"t",(function(){return E})),e.d(n,"u",(function(){return S})),e.d(n,"k",(function(){return A})),e.d(n,"m",(function(){return z}));e("99af");var c=e("bc3a"),a=e.n(c),o="https://vue3-course-api.hexschool.io",r="ear077",i=function(t){return a.a.post("".concat(o,"/admin/signin"),t)},u=function(){return a.a.post("".concat(o,"/logout"))},s=function(){return a.a.post("".concat(o,"/api/user/check"))},d=function(){return a.a.get("".concat(o,"/api/").concat(r,"/admin/products/all"))},l=function(t,n,e){return a.a[t]("".concat(o,"/api/").concat(r,"/admin/product/").concat(e),n)},f=function(t){return a.a.delete("".concat(o,"/api/").concat(r,"/admin/product/").concat(t))},p=function(t){return a.a.post("".concat(o,"/api/").concat(r,"/admin/upload"),t)},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.a.get("".concat(o,"/api/").concat(r,"/admin/coupons?page=").concat(t))},g=function(t,n,e){return a.a[t]("".concat(o,"/api/").concat(r,"/admin/coupon/").concat(e),n)},h=function(t){return a.a.delete("".concat(o,"/api/").concat(r,"/admin/coupon/").concat(t))},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.a.get("".concat(o,"/api/").concat(r,"/admin/orders?page=").concat(t))},v=function(t,n){return a.a.put("".concat(o,"/api/").concat(r,"/admin/order/").concat(t),n)},j=function(t){return a.a.delete("".concat(o,"/api/").concat(r,"/admin/order/").concat(t))},O=function(){return a.a.delete("".concat(o,"/api/").concat(r,"/admin/orders/all"))},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.a.get("".concat(o,"/api/").concat(r,"/admin/articles?page=").concat(t))},N=function(t){return a.a.get("".concat(o,"/api/").concat(r,"/admin/article/").concat(t))},V=function(t,n,e){return a.a[t]("".concat(o,"/api/").concat(r,"/admin/article/").concat(e),n)},w=function(t){return a.a.delete("".concat(o,"/api/").concat(r,"/admin/article/").concat(t))},k=function(){return a.a.get("".concat(o,"/api/").concat(r,"/products/all"))},$=function(t){return a.a.get("".concat(o,"/api/").concat(r,"/product/").concat(t))},y=function(){return a.a.get("".concat(o,"/api/").concat(r,"/cart"))},C=function(t){return a.a.post("".concat(o,"/api/").concat(r,"/cart"),t)},T=function(t,n){return a.a.put("".concat(o,"/api/").concat(r,"/cart/").concat(t),n)},M=function(){return a.a.delete("".concat(o,"/api/").concat(r,"/carts"))},_=function(t){return a.a.delete("".concat(o,"/api/").concat(r,"/cart/").concat(t))},D=function(t){return a.a.post("".concat(o,"/api/").concat(r,"/order"),t)},B=function(t){return a.a.get("".concat(o,"/api/").concat(r,"/order/").concat(t))},E=function(t){return a.a.post("".concat(o,"/api/").concat(r,"/pay/").concat(t))},S=function(t){return a.a.post("".concat(o,"/api/").concat(r,"/coupon"),t)},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.a.get("".concat(o,"/api/").concat(r,"/articles?page=").concat(t))},z=function(t){return a.a.get("".concat(o,"/api/").concat(r,"/article/").concat(t))}}}]);
//# sourceMappingURL=chunk-1bc2a730.c90bd3e8.js.map