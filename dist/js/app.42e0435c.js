(function(a){function t(t){for(var s,n,o=t[0],l=t[1],c=t[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(a[s]=l[s]);v&&v(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var a,t=0;t<i.length;t++){for(var e=i[t],s=!0,o=1;o<e.length;o++){var l=e[o];0!==r[l]&&(s=!1)}s&&(i.splice(t--,1),a=n(n.s=e[0]))}return a}var s={},r={app:0},i=[];function n(t){if(s[t])return s[t].exports;var e=s[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=a,n.c=s,n.d=function(a,t,e){n.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,t){if(1&t&&(a=n(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var s in a)n.d(e,s,function(t){return a[t]}.bind(null,s));return e},n.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(t,"a",t),t},n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},n.p="Anagrama/./";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var v=l;i.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"564d":function(a,t,e){"use strict";var s=e("586b"),r=e.n(s);r.a},"56d7":function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("nav",[e("div",{staticClass:"nav-wrapper color-change"},[e("a",{staticClass:"brand-logo center",attrs:{href:"#"}},[a._v(a._s(a.titulo))])])]),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col s12 m6 offset-m3"},[e("div",{staticClass:"card-panel hoverable center",attrs:{id:"cardGame"}},[e("form",{on:{submit:function(t){return t.preventDefault(),a.confirmaTentativa(t)}}},[e("label",[e("h5",{staticClass:"capitalizar negrito"},[a._v(a._s(a.palavraEmbaralhadaSave))])]),e("input",{directives:[{name:"model",rawName:"v-model",value:a.palavra,expression:"palavra"}],staticClass:"capitalizar",attrs:{id:"inputTentativa",type:"text",placeholder:"inserir palavra"},domProps:{value:a.palavra},on:{input:function(t){t.target.composing||(a.palavra=t.target.value)}}}),a._m(0)]),e("button",{staticClass:"waves-effect waves-light btn-small novaPalavra",on:{click:function(t){return a.novaPalavra()}}},[a._v("Nova Palavra"),e("i",{staticClass:"material-icons left"},[a._v("shuffle")])])])])])]),a._m(1)])},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"waves-effect waves-light btn-small salvarPalavra"},[a._v("Salvar"),e("i",{staticClass:"material-icons left"},[a._v("save")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"fogos"}},[e("div",{staticClass:"firework"},[e("div",{staticClass:"explosion"},[e("div",{staticClass:"spark green"})]),e("div",{staticClass:"explosion"},[e("div",{staticClass:"spark blue"})]),e("div",{staticClass:"explosion"},[e("div",{staticClass:"spark red"})]),e("div",{staticClass:"explosion"},[e("div",{staticClass:"spark red"})]),e("div",{staticClass:"explosion"},[e("div",{staticClass:"spark yellow"})]),e("div",{staticClass:"explosion"},[e("div",{staticClass:"spark blue"})]),e("div",{staticClass:"explosion"},[e("div",{staticClass:"spark green"})]),e("div",{staticClass:"explosion"},[e("div",{staticClass:"spark yellow"})])])])}],n=(e("a15b"),e("4e82"),e("ac1f"),e("1276"),e("498a"),e("ad48")),o={data:function(){return{titulo:"A N A G R A M A",palavra:"anagrama",palavraEmbaralhadaSave:"gamarana",originalWord:"anagrama",palavras:n["words"],get console(){return window.console}}},mounted:function(){},methods:{confirmaTentativa:function(){""===this.palavra?(this.console.log("%c Nenhuma Palavra Enviada!","color: orange;font-weight:bold"),this.setAlertStyle()):this.palavra.toLowerCase().trim()===this.originalWord?(this.console.log("%c Tentativa Correta!","color: green;font-weight:bold"),this.limpaStyle(),this.setWinStyle()):(this.console.log("%c Tentativa Incorreta","color: red;font-weight:bold"),this.limpaStyle(),this.setLoseStyle())},novaPalavra:function(){this.pickWord(),this.embaralha(),this.limpaStyle()},embaralha:function(){this.palavra=this.originalWord.split("").sort((function(){return.5-Math.random()})).join(""),this.palavra==this.originalWord&&this.embaralha(),this.palavraEmbaralhadaSave=this.palavra},pickWord:function(){var a=Math.floor(Math.random()*this.palavras.length);this.originalWord=this.palavras[a]},setNewClass:function(a,t){var e=document.getElementById(a);e.classList.add(t)},removeClass:function(a,t){var e=document.getElementById(a);e.classList.remove(t)},limpaStyle:function(){this.removeClass("cardGame","vitoria"),this.removeClass("cardGame","derrota"),this.removeClass("cardGame","alert"),this.removeClass("inputTentativa","alert"),this.removeClass("fogos","fireworks")},setWinStyle:function(){this.setNewClass("cardGame","vitoria"),this.setNewClass("fogos","fireworks")},setLoseStyle:function(){this.setNewClass("cardGame","derrota")},setAlertStyle:function(){this.setNewClass("cardGame","alert"),this.setNewClass("inputTentativa","alert")}}},l=o,c=(e("564d"),e("2877")),v=Object(c["a"])(l,r,i,!1,null,"786c3c42",null),u=v.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(a){return a(u)}}).$mount("#app")},"586b":function(a,t,e){},ad48:function(a){a.exports=JSON.parse('{"words":["bola","carro","manga","uva","sapo","macaco","abacate","acerola","garrafa","anagrama","pinga"]}')}});
//# sourceMappingURL=app.42e0435c.js.map