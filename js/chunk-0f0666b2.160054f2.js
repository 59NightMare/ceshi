(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f0666b2"],{"4e22":function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"search"},[a("div",{staticClass:"top"},[a("van-icon",{attrs:{name:"arrow-left"},on:{click:function(s){return t.$router.go(-1)}}}),a("van-search",{attrs:{shape:"round",placeholder:"请输入搜索关键词"},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:""==t.value,expression:"value == ''"}],staticClass:"hot"},[a("h3",[t._v("热搜榜")]),a("ul",{staticClass:"musicList"},t._l(t.hot,(function(s,n){return a("li",{key:n},[a("h1",{staticClass:"num"},[t._v(t._s(n+1))]),a("div",{staticClass:"info"},[a("h2",[t._v(t._s(s.searchWord))]),a("h3",[a("span",[t._v(t._s(s.content))])])]),a("div",{staticClass:"quantity"},[a("span",[t._v(t._s(s.score))])])])})),0)]),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=t.value,expression:"value != ''"}],staticClass:"content"},[a("ul",{staticClass:"musicList"},t._l(t.songs,(function(s){return a("li",{key:s.id},[a("h1",{staticClass:"num"},[a("van-icon",{attrs:{name:"search"}})],1),a("div",{staticClass:"info"},[a("h2",[t._v(t._s(s.name))]),a("h3",[a("span",[t._v(t._s(s.artists[0].name))])])]),a("div",{staticClass:"quantity"},[a("span",[a("van-icon",{attrs:{name:"play-circle-o"},on:{click:function(a){return t.setId(s.id)}}})],1)])])})),0)])])},e=[],i=a("a417"),c={data:function(){return{value:"",hot:[],songs:[]}},created:function(){var t=this;Object(i["f"])().then((function(s){t.hot=s.data}))},methods:{setId:function(t){var s=this;this.$emit("get-player-id",t),Object(i["b"])({ids:t}).then((function(t){s.$emit("push",t.songs[0])}))}},watch:{value:function(){var t=this;""!=this.value&&Object(i["k"])({keywords:this.value}).then((function(s){t.songs=s.result.songs}))}}},o=c,u=(a("ef77"),a("2877")),l=Object(u["a"])(o,n,e,!1,null,null,null);s["default"]=l.exports},"94ff":function(t,s,a){},ef77:function(t,s,a){"use strict";a("94ff")}}]);
//# sourceMappingURL=chunk-0f0666b2.160054f2.js.map