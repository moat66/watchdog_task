(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cd43cc7"],{2917:function(t,n,a){"use strict";var e=a("34a9"),i=a.n(e);i.a},"34a9":function(t,n,a){},bc09:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"example"},[a("a-spin",{attrs:{size:"large",tip:"服务加载中，请稍候。。。"}})],1)},i=[],c=(a("ac1f"),a("5319"),a("c3e4")),o={name:"Loading",data:function(){return{flag:!0}},mounted:function(){this.getInitData()},beforeDestroy:function(){this.flag=!1},methods:{getInitData:function(){var t=this;Object(c["b"])().then((function(n){var a,e,i=null!==(a=null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.data)&&void 0!==a?a:null;i?(t.$store.commit("setting/setSystemInitData",i),t.$router.replace(i.initialize?"/log":"/initialize")):t.delayedGetInitData()})).catch((function(){t.delayedGetInitData()}))},delayedGetInitData:function(){var t=this;this.flag&&setTimeout((function(){t.getInitData()}),3e3)}}},l=o,s=(a("2917"),a("0c7c")),u=Object(s["a"])(l,e,i,!1,null,"0cb570db",null);n["default"]=u.exports}}]);