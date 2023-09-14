(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("@keyframes filling{0%{stroke-dashoffset:var(--c8087d6a)}to{stroke-dashoffset:var(--0a9c183e)}}.circle-progress__circle{fill:transparent;stroke-width:var(--241f3b58)}.circle-progress__line--back{stroke:var(--fa170f60);stroke-dashoffset:0}.circle-progress__line--top{animation-name:filling;animation-duration:var(--72ad7c9e);animation-timing-function:ease-in;transition:.5s all}.circle-progress__line--top--rounded{stroke-linecap:round}.circle-progress{display:flex;position:relative;justify-content:center;align-items:center}.circle-progress__line--filled{stroke:var(--c2002aea)}.circle-progress__line--unfilled{stroke:var(--1a0787b8)}.circle-progress__content{position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;flex-direction:column}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function(l,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(l=typeof globalThis<"u"?globalThis:l||self,e(l.MCircleProgressBar={},l.Vue))})(this,function(l,e){"use strict";const x="",d={class:"circle-progress"},u=["width","height"],f=["r"],p=["r"],_={class:"circle-progress__content"},g={key:0,class:"circle-progress__percentage"},m={__name:"CircleProgressBar",props:{max:{type:Number,required:!0},value:{type:Number,required:!0},colorFilled:{type:String,required:!1,default:"#FF5533"},colorUnfilled:{type:String,required:!1,default:"#3BB44A"},colorBack:{type:String,required:!1,default:"#ECEEF1"},percentage:{type:Boolean,required:!1,default:!1},rounded:{type:Boolean,required:!1,default:!1},animationDuration:{type:String,required:!1,default:"0.5s"},strokeWidth:{type:String,required:!1,default:"5px"},reversedFilling:{type:Boolean,required:!1,default:!1},size:{type:[String,Number],required:!1,default:"124"}},setup(s){const r=s;e.useCssVars(n=>({c8087d6a:t.value,"0a9c183e":i.value,"241f3b58":r.strokeWidth,fa170f60:r.colorBack,"72ad7c9e":r.animationDuration,c2002aea:r.colorFilled,"1a0787b8":r.colorUnfilled}));const a=e.computed(()=>r.max<=r.value),y=e.computed(()=>({"circle-progress__line--top--rounded":r.rounded,"circle-progress__line--filled":a.value,"circle-progress__line--unfilled":!a.value})),h=e.computed(()=>({strokeDashoffset:i.value,strokeDasharray:t.value})),c=e.computed(()=>a.value?r.max:r.value),B=e.ref(null),o=e.ref(48),t=e.computed(()=>o.value*Math.PI*2),i=e.computed(()=>r.reversedFilling?t.value-t.value*(r.max-c.value)/r.max:t.value-t.value*c.value/r.max),k=e.computed(()=>Math.floor(r.value/r.max*100)+"%");return(n,C)=>(e.openBlock(),e.createElementBlock("div",d,[(e.openBlock(),e.createElementBlock("svg",{class:"circle-progress__svg",viewBox:"0 0 104 104",width:s.size,height:s.size},[e.createElementVNode("circle",{class:"circle-progress__circle circle-progress__line--back",r:o.value,cx:"52",cy:"52"},null,8,f),e.createElementVNode("circle",{class:e.normalizeClass(["circle-progress__circle circle-progress__line--top",y.value]),style:e.normalizeStyle(h.value),ref_key:"fillingCircle",ref:B,r:o.value,cx:"52",cy:"52",transform:"rotate(-270 52 52)"},null,14,p)],8,u)),e.createElementVNode("div",_,[s.percentage?(e.openBlock(),e.createElementBlock("span",g,e.toDisplayString(k.value),1)):e.createCommentVNode("",!0),e.renderSlot(n.$slots,"default")])]))}};l.CircleProgressBar=m,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
