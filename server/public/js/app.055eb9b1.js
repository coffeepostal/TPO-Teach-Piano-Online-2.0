(function(e){function t(t){for(var a,i,o=t[0],c=t[1],d=t[2],l=0,m=[];l<o.length;l++)i=o[l],r[i]&&m.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,d||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},r={app:0},n=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=n(e);return s(t)}function n(e){var t=a[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],i=(s("5c0b"),s("2877")),o={},c=Object(i["a"])(o,r,n,!1,null,null,null),d=c.exports,u=s("8c4f"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"messages"}},e._l(e.messages,function(t,a){return s("div",{key:t.id,staticClass:"message",class:t.type},[s("p",[e._v(e._s(t.text))]),s("button",{staticClass:"button",on:{click:function(t){return e.killMessage(a)}}},[e._v("X")])])}),0),s("header",{attrs:{id:"header"}},[s("div",{attrs:{id:"header-content"}},[s("h1",[e._v("Welcome!")]),s("p",[e._v("\n\t\t\t\tPlease choose between the Practice Sheet Generator and the\n\t\t\t\tRandom Number Generator.\n\t\t\t")]),s("div",{attrs:{id:"generation-form"}},[s("fieldset",{staticClass:"title"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sheet,expression:"sheet"}],staticClass:"toggle toggle-left",attrs:{id:"toggle-on",name:"toggle",type:"radio",value:"practice",checked:""},domProps:{checked:e._q(e.sheet,"practice")},on:{change:function(t){e.sheet="practice"}}}),s("label",{staticClass:"btn",attrs:{for:"toggle-on"}},[e._v("Practice Sheets")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.sheet,expression:"sheet"}],staticClass:"toggle toggle-right",attrs:{id:"toggle-off",name:"toggle",type:"radio",value:"random"},domProps:{checked:e._q(e.sheet,"random")},on:{change:function(t){e.sheet="random"}}}),s("label",{staticClass:"btn",attrs:{for:"toggle-off"}},[e._v("Random Numbers")])]),s("fieldset",[s("legend",[e._v("Piece Title:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.piece,expression:"piece"}],attrs:{type:"text",placeholder:"Input Piece Title",name:"piece"},domProps:{value:e.piece},on:{input:function(t){t.target.composing||(e.piece=t.target.value)}}})]),s("fieldset",[s("legend",[e._v("Composer")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.composer,expression:"composer"}],attrs:{type:"text",placeholder:"Input Composer's Name (optional)",name:"composer"},domProps:{value:e.composer},on:{input:function(t){t.target.composing||(e.composer=t.target.value)}}})]),s("fieldset",[s("legend",{attrs:{title:"We require an email address to track uses"}},[e._v("\n\t\t\t\t\t\tEmail Address ❓\n\t\t\t\t\t")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"user@domain.com",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),s("fieldset",[s("legend",[e._v("Starting Measure")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.startingMeasure,expression:"startingMeasure",modifiers:{number:!0}}],attrs:{type:"number",min:"1"},domProps:{value:e.startingMeasure},on:{change:e.repeatRange,input:function(t){t.target.composing||(e.startingMeasure=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),s("fieldset",[s("legend",[e._v("Ending Measure")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.endingMeasure,expression:"endingMeasure",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.endingMeasure},on:{change:e.repeatRange,input:function(t){t.target.composing||(e.endingMeasure=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),s("fieldset",[s("legend",[e._v(e._s(e.repeatType))]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.repeat,expression:"repeat",modifiers:{number:!0}}],attrs:{type:"number",min:"1"},domProps:{value:e.repeat},on:{change:e.repeatRange,input:function(t){t.target.composing||(e.repeat=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})])]),s("div",{attrs:{id:"generation-button"}},[s("button",{on:{click:e.exportPDF}},[e._v("Export PDF")])])]),s("div",{attrs:{id:"header-controls"}},[s("a",{attrs:{href:"#"},on:{click:e.showHideControls}},[e._m(0)])])]),s("div",{attrs:{id:"container"}},[s("div",{attrs:{id:"paper"}},[s("div",{attrs:{id:"page"}},[e._m(1),s("div",{attrs:{id:"info"}},[e.piece||e.composer?s("div",[s("h4",[e._v(e._s(e.piece))]),s("h4",{directives:[{name:"show",rawName:"v-show",value:e.composer,expression:"composer"}]},[e._v("by "+e._s(e.composer))])]):s("div",[s("h6",[e._v("Please input info above...")])])]),s("div",{attrs:{id:"grid"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:"practice"===e.sheet,expression:"sheet === 'practice'"}],staticClass:"grid-practice"},e._l(e.repeat,function(t){return s("div",{key:t.id,staticClass:"grid-tile"},e._l(e.rangedMeasures,function(t){return s("div",{key:t.id,staticClass:"measure"},[s("div",{staticClass:"inner-measure"},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(t)+"\n\t\t\t\t\t\t\t\t")])])}),0)}),0),s("div",{directives:[{name:"show",rawName:"v-show",value:"random"===e.sheet,expression:"sheet === 'random'"}],staticClass:"grid-random"},e._l(e.randomizedMeasures,function(t,a){return s("div",{key:t.id,staticClass:"measure"},[s("div",{staticClass:"inner-measure"},[e._v("\n\t\t\t\t\t\t\t\t"+e._s(e.randomizedMeasures[a])+"\n\t\t\t\t\t\t\t")])])}),0)]),s("div",{attrs:{id:"logo-date"}},[e._m(2),s("div",{attrs:{id:"date"}},[s("h4",[e._v(e._s(e.date))])])])])])])])},m=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"control"},[s("div",{staticClass:"header-control-bar",attrs:{id:"bar-1"}}),s("div",{staticClass:"header-control-bar",attrs:{id:"bar-2"}}),s("div",{staticClass:"header-control-bar",attrs:{id:"bar-3"}}),s("div",{staticClass:"header-control-bar",attrs:{id:"bar-4"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"copyright"}},[a("img",{attrs:{src:s("5d9c")}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"logo"}},[a("img",{attrs:{src:s("d958")}})])}],p=s("59ad"),f=s.n(p),h=(s("a481"),s("96cf"),s("3b8d")),v=(s("55dd"),s("14b9"),s("e511")),b=s.n(v),g=s("c0e9"),j=s.n(g),_=s("c1df"),y=s.n(_),w=s("bc3a"),x=s.n(w),k=function(){return x.a.create({baseURL:"http://localhost:8081"})},M={fetchPosts:function(){return k().get("posts")},addPost:function(e){return k().post("posts",e)},deletePost:function(e){return k().delete("posts/"+e)},exportCSV:function(e){return k().get("export/"+e)},downloadCSV:function(e){return k({url:"files/"+e+".csv",method:"GET",responseType:"blob"}).then(function(e){var t=window.URL.createObjectURL(new Blob([e.data])),s=document.createElement("a");s.href=t,s.setAttribute("download","file.pdf"),document.body.appendChild(s),s.click()})}},P={name:"Practice Sheet",data:function(){return{sheet:"practice",piece:"",composer:"",date:y()().format("dddd, MMMM Do YYYY"),measures:40,measuresMax:136,repeat:1,repeatMax:6,startingMeasure:13,endingMeasure:28,measureRange:[],numberOfLargemeasuresMax:210,numberOfSmallmeasuresMax:336,messages:[],email:""}},computed:{randomizedMeasures:function(){for(var e=[],t=this.repeat,s=[],a=this.startingMeasure;a<=this.endingMeasure;a++)for(var r=0;r<t;r++)e.push(a);return s=e.sort(function(){return.5-Math.random()}),s},rangedMeasures:function(){for(var e=[],t=this.startingMeasure;t<=this.endingMeasure;t++)e.push(t);return e},repeatType:function(){return"practice"===this.sheet?"Repeat Grid":"Repeat Range"}},methods:{addPost:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M.addPost({piece:this.piece,composer:this.composer,email:this.email});case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),errorMessages:function(){var e=this.repeat,t=this.repeatMax,s=this.measures,a=this.sheet,r=this.measureRange.length,n=this.startingMeasure,i=this.endingMeasure,o=this.email;if(o||this.message("error","You must provide an email address"),"practice"==a){if(e<1&&(this.repeat=1,this.message("alert","There must be at least one grid")),e>2){switch(!0){case 0<=s&&s<=8:t=18;break;case 8<s&&s<=16:t=10;break;case 16<s&&s<=32:t=6;break;case 32<s&&s<=48:t=4;break;default:t=2}e>t&&(this.repeat=t,this.message("error","With this many measures, you can only have "+t+" grids"))}s<8&&(this.measures=8,this.message("error","There can be a minimum of 8 measures")),s>96&&(this.measures=96,this.message("error","There can be a maximum of 96 measures"))}else n<1&&(this.startingMeasure=1,this.message("alert","You can't start a piece before the first measure")),i<=n&&(this.endingMeasure=n+1,this.message("alert","The Ending Measure must be larger than the Starting Measure")),r>192&&(console.log("Too big"),this.endingMeasure=n+191,this.message("error","There can only be a maximum of 192 total random measures"))},exportPDF:function(){var e=this;if(this.errorMessages(),""!=this.piece&&""!=this.email){this.addPost();var t=y()().format("YYYY-MM-DD"),s=this.piece.replace(/\s+/g,"-").toLowerCase(),a="practice"==this.sheet?this.measures+"x"+this.repeat:this.startingMeasure+"-"+this.endingMeasure+"-"+this.repeat+"x",r="".concat(t,".").concat(s,"-").concat(a),n=document.getElementById("paper");j()(n,{scale:2,useCORS:!0}).then(function(t){var s=t.toDataURL("image/jpeg",1),a=new b.a("p","pt","letter");a.addImage(s,"JPEG",0,0,612,792),a.save(r+".pdf"),e.message("success","PDF has been created.")})}else this.message("error","You must input at least the piece name")},killMessage:function(e){console.log('"index['+e+']" has been deleted'),this.$delete(this.messages,e)},limitNumber:function(e,t,s,a,r){return isNaN(e)?t:f()(Math.max(Math.min(e,r),a)).toFixed(s)},message:function(e,t){var s=this.messages;s.push({type:e,text:t})},repeatRange:function(){var e=this.repeat,t=this.measuresMax,s=this.startingMeasure,a=this.endingMeasure,r=a-s,n=r*e;n>t-1&&(this.endingMeasure=s+t-1)},showHideControls:function(){var e=document.getElementById("header-controls"),t=document.getElementById("header-content"),s="-"+t.clientHeight+"px";""==e.classList?(e.classList.add("closed"),t.style.marginTop=s):(e.classList.remove("closed"),t.style.marginTop=0)}}},C=P,R=(s("abb9"),Object(i["a"])(C,l,m,!1,null,"5f77e52f",null)),S=R.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"posts"},[s("div",{attrs:{id:"header"}},[s("div",{attrs:{id:"header-content"}},[e._m(0),s("div",{attrs:{id:"link"}},[s("router-link",{attrs:{to:{name:"Practice Sheets"}}},[e._v("Return Home")])],1)])]),s("div",{attrs:{id:"container"}},[s("div",{attrs:{id:"paper"}},[e.posts.length>0?s("div",{attrs:{id:"page"}},[s("table",[e._m(1),e._l(e.posts,function(t){return s("tr",{key:t.id},[s("td",[e._v(e._s(t.piece))]),s("td",[e._v(e._s(t.composer))]),s("td",[e._v(e._s(t.email))]),s("td",[s("a",{attrs:{href:"#"},on:{click:function(s){return e.deletePost(t._id)}}},[e._v("❌")])])])})],2)]):s("div",[e._v("\n        There are no posts.. Lets add one now\n        "),s("br"),s("br"),s("router-link",{staticClass:"button",attrs:{to:{name:"Practice Sheets"}}},[e._v("Add Post")])],1)])]),e._m(2)])},O=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"title"}},[s("h1",[e._v("Posts")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",{staticClass:"header"},[s("th",[s("h3",[e._v("Piece")])]),s("th",[s("h3",[e._v("Composer")])]),s("th",[s("h3",[e._v("Email")])]),s("th",[s("h3",[e._v("Delete")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"footer"}},[s("h2",[e._v("Download CSV File")]),s("ul",{staticClass:"link-list"},[s("li",[s("a",{staticClass:"button",attrs:{href:"http://localhost:8081/export/piece,composer"}},[e._v("Pieces/Composers CSV")])]),s("li",[s("a",{staticClass:"button",attrs:{href:"http://localhost:8081/export/email"}},[e._v("Email Addresses CSV")])])])])}],E={name:"posts",data:function(){return{posts:[]}},mounted:function(){this.getPosts()},methods:{getPosts:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M.fetchPosts();case 2:t=e.sent,this.posts=t.data.posts;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),deletePost:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M.deletePost(t);case 2:this.$router.push({name:"Results"});case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),exportCSV:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M.exportCSV(t);case 2:this.$router.push({name:"Results"});case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),downloadCSV:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,M.downloadCSV(t);case 2:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}},N=E,T=(s("c356"),Object(i["a"])(N,z,O,!1,null,"4f13ef2f",null)),$=T.exports;a["a"].use(u["a"]);var D=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Practice Sheets",component:S},{path:"/results",name:"Results",component:$}]}),L=s("2f62");a["a"].use(L["a"]);var Y=new L["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:D,store:Y,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("5e27"),r=s.n(a);r.a},"5d9c":function(e,t,s){e.exports=s.p+"img/c2ch-yellowcat.09330ac4.jpg"},"5e27":function(e,t,s){},abb9:function(e,t,s){"use strict";var a=s("f34a"),r=s.n(a);r.a},c356:function(e,t,s){"use strict";var a=s("dc00"),r=s.n(a);r.a},d958:function(e,t,s){e.exports=s.p+"img/c2ch-logo.9959778b.jpg"},dc00:function(e,t,s){},f34a:function(e,t,s){}});
//# sourceMappingURL=app.055eb9b1.js.map