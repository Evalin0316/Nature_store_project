(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfb23"],{"658f":function(t,e,c){"use strict";c.r(e);c("a4d3"),c("e01a");var o=c("7a23"),r={class:"container-fluid"},a={class:"product container row g-0 px-md-3 mx-auto"},i={class:"product-photos col-md-6 row g-0 align-self-start p-3 p-md-0"},n={class:"photo-lg col-12"},d={class:"product-content col-md-6 text-center text-md-start"},s={class:"path d-block mb-4 fs-7"},u=Object(o["createTextVNode"])("首頁"),l=Object(o["createTextVNode"])("  /  "),p=Object(o["createTextVNode"])("New Collection"),b=Object(o["createTextVNode"])("  /  "),m={class:"active"},g={class:"product-desc"},h={key:0,class:"product-price mt-4"},j={key:0},f={class:"fs-7 ms-2 text-secondary"},O={class:"product-btns col-md-9 d-md-flex"},N=Object(o["createTextVNode"])(" 加入購物車 "),x={key:1,class:"d-block text-danger mt-1"},y={class:"product-page row g-0 justify-content-between py-4 px-3 px-md-0"},v=Object(o["createVNode"])("i",{class:"material-icons fs-6"},"west",-1),V=Object(o["createVNode"])("i",{class:"material-icons fs-6"},"east",-1),k=Object(o["createVNode"])("i",{class:"material-icons fs-6"},"east",-1),w={class:"product-info"},D={class:"container row g-0 mx-auto p-3 pe-md-0 py-md-0"},_={class:"col-md-6 p-3 px-md-0 py-md-5 lh-lg"},$=Object(o["createVNode"])("h2",{class:"fs-5 text-primary"},"注意事項",-1),S={class:"mb-4"},C=Object(o["createVNode"])("div",{class:"bg-notice col-6"},[Object(o["createVNode"])("span",{style:{"background-image":"url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80')"}})],-1),T={class:"container px-3"},B=Object(o["createVNode"])("div",{id:"target",class:"position-fixed vw-100 bottom-10"},null,-1);function P(t,e,c,P,M,q){var I=Object(o["resolveComponent"])("router-link"),F=Object(o["resolveComponent"])("Spinner"),A=Object(o["resolveComponent"])("FrontSwiper");return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[Object(o["withDirectives"])(Object(o["createVNode"])("div",a,[Object(o["createVNode"])("div",i,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("span",{style:{"background-image":"url(".concat(M.enterImage,")")}},null,4)]),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(M.product.imagesUrl,(function(t,e){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:["photo-sm col-4",t===M.enterImage?"active":""],role:"button",key:e,onMouseover:function(e){return M.enterImage=t},onClick:function(e){return M.enterImage=t}},[Object(o["createVNode"])("span",{style:{"background-image":"url(".concat(t,")")}},null,4)],42,["onMouseover","onClick"])})),128))]),Object(o["createVNode"])("div",d,[Object(o["createVNode"])("span",s,[Object(o["createVNode"])(I,{to:"/"},{default:Object(o["withCtx"])((function(){return[u]})),_:1}),l,Object(o["createVNode"])(I,{to:"/products?category=all&page=1"},{default:Object(o["withCtx"])((function(){return[p]})),_:1}),b,Object(o["createVNode"])("span",m,Object(o["toDisplayString"])(M.product.category),1)]),Object(o["createVNode"])("h1",null,Object(o["toDisplayString"])(M.product.title),1),Object(o["createVNode"])("p",g,"商品資訊："+Object(o["toDisplayString"])(M.product.description),1),M.product.price?(Object(o["openBlock"])(),Object(o["createBlock"])("p",h,[M.product.price<M.product.origin_price?(Object(o["openBlock"])(),Object(o["createBlock"])("span",j,"$"+Object(o["toDisplayString"])(t.$cash(M.product.price)),1)):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("small",{class:M.product.price<M.product.origin_price?"del":""},"$ "+Object(o["toDisplayString"])(t.$cash(M.product.origin_price))+" NTD",3),Object(o["createVNode"])("small",f,"/ "+Object(o["toDisplayString"])(M.product.unit),1)])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])("div",O,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",min:"1",max:M.maxNum,class:"form-control panya-input text-center text-md-start","onUpdate:modelValue":e[1]||(e[1]=function(t){return M.product.qty=t}),inputmode:"numeric",disabled:c.isDisabled===M.product.id||M.product.is_max,onFocus:e[2]||(e[2]=function(t){return M.tempNum=M.product}),onBlur:e[3]||(e[3]=function(){return q.blurInput&&q.blurInput.apply(q,arguments)})},null,40,["max","disabled"]),[[o["vModelText"],M.product.qty,void 0,{number:!0}]]),Object(o["createVNode"])("button",{class:"btn btn-primary col-12 col-md-7 ms-md-2 p-3 mt-3 mt-md-0",type:"button",disabled:c.isDisabled===M.product.id||M.product.is_max,onClick:e[4]||(e[4]=function(t){return q.addToCart(M.product)})},[N,Object(o["createVNode"])(F,{"spin-item":M.product.id},null,8,["spin-item"])],8,["disabled"])]),M.product.is_max?(Object(o["openBlock"])(),Object(o["createBlock"])("small",x,"已達可購買最大數量")):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("div",y,[Object(o["createVNode"])("button",{class:"col-6 col-md-2 btn btn-outline-secondary fs-7",type:"button",onClick:e[5]||(e[5]=function(t){return q.goToProduct(M.prev_product)})},[v,Object(o["createTextVNode"])(Object(o["toDisplayString"])(M.prev_product.title),1)]),Object(o["createVNode"])("button",{class:"col-6 col-md-2 btn btn-outline-secondary fs-7\n          border-start-0 d-md-none",type:"button",onClick:e[6]||(e[6]=function(t){return q.goToProduct(M.next_product)})},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(M.next_product.title),1),V]),Object(o["createVNode"])("button",{class:"col-6 col-md-2 btn btn-outline-secondary fs-7\n          d-none d-md-flex",type:"button",onClick:e[7]||(e[7]=function(t){return q.goToProduct(M.next_product)})},[Object(o["createTextVNode"])(Object(o["toDisplayString"])(M.next_product.title),1),k])])],512),[[o["vShow"],M.filterDatas.length>0]]),Object(o["withDirectives"])(Object(o["createVNode"])("div",w,[Object(o["createVNode"])("div",D,[Object(o["createVNode"])("div",_,[$,Object(o["createVNode"])("p",S,Object(o["toDisplayString"])(M.product.content),1)]),C])],512),[[o["vShow"],M.filterDatas.length>0]]),Object(o["withDirectives"])(Object(o["createVNode"])("div",T,[Object(o["createVNode"])(A,{datas:M.filterDatas,"is-disabled":c.isDisabled,title:"相關商品"},null,8,["datas","is-disabled"])],512),[[o["vShow"],M.filterDatas.length>0]]),B])}c("4de4"),c("d3b7"),c("6062"),c("3ca3"),c("ddb0"),c("159b"),c("b0c0");var M=c("a397"),q=c("a0bc"),I={emits:["page-loading","push-message","toggle-spinner","add-cart"],props:["isDisabled","datas"],components:{FrontSwiper:q["a"]},data:function(){return{id:"",category:"",products:[],product:{},enterImage:"",prev_product:{},next_product:{},filterDatas:[],tempNum:{},maxNum:0}},methods:{getProduct:function(){var t=this;Object(M["s"])(this.id).then((function(e){e.data.success||(t.$pushMessage(e),t.$router.push("/error")),t.product=e.data.product,t.product.qty=1,t.category=t.product.category;var c=t.product.imagesUrl[0];t.enterImage=c,document.title="".concat(t.product.title," - Nature"),t.filterProducts(),t.getSiblingProduct(t.products),t.getMaxNum(),setTimeout((function(){t.$emitter.emit("page-loading",!1)}),1e3)})).catch((function(e){t.$emitter.emit("page-loading",!1),t.$pushMessage(e)}))},getAllProducts:function(){var t=this;Object(M["b"])().then((function(e){e.data.success||t.$pushMessage(e),t.products=e.data.products.reverse(),t.getProduct()})).catch((function(e){t.$emitter.emit("page-loading",!1),t.$pushMessage(e)}))},filterProducts:function(){for(var t=this,e=this.product,c=e.category,o=e.id,r=this.products.filter((function(t){return t.category===c&&t.id!==o})),a=r.length<6?r.length:6,i=new Set([]),n=0;i.size<a;n+1){var d=Math.floor(Math.random()*r.length);i.add(d)}this.filterDatas=[],i.forEach((function(e){t.filterDatas.push(r[e])}))},getSiblingProduct:function(t){var e=this;t.forEach((function(c,o){var r=c.id;if(r===e.id){var a=t[o-1]||t[t.length-1],i=t[o+1]||t[0];e.prev_product=!!a&&{id:a.id,title:a.title},e.next_product=!!i&&{id:i.id,title:i.title}}}))},getMaxNum:function(){var t=this,e=this.datas.carts.filter((function(e){return t.product.id===e.product_id}));e?(e.length>0?this.maxNum=30-e[0].qty:this.maxNum=30,this.maxNum<=0?this.product.is_max=!0:this.product.is_max=!1):this.maxNum=30},blurInput:function(){this.product=this.tempNum,this.tempNum.qty<1&&(this.product.qty=1),this.tempNum={}},addToCart:function(t){this.$emitter.emit("add-cart",{item:t,qty:t.qty}),this.$emitter.emit("toggle-spinner",{id:t.id})},goToProduct:function(t){t.id&&this.$router.push("./".concat(t.id))}},watch:{$route:{handler:function(t){"Product"===t.name&&(this.$emitter.emit("page-loading",!0),this.id=this.$route.params.id,this.getProduct())},deep:!0},tempNum:{handler:function(t){var e=t.qty,c=t;e>=this.maxNum&&(c.qty=this.maxNum),e<1&&(c.qty="")},deep:!0},datas:function(){this.getProduct()}},mounted:function(){this.$emitter.emit("page-loading",!0),this.id=this.$route.params.id,this.getAllProducts()}},F=c("d959"),A=c.n(F);const H=A()(I,[["render",P]]);e["default"]=H}}]);
//# sourceMappingURL=chunk-2d0cfb23.a178b574.js.map