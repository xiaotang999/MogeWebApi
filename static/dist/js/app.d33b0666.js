(function(e){function t(t){for(var a,i,r=t[0],c=t[1],l=t[2],d=0,m=[];d<r.length;d++)i=r[d],n[i]&&m.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},n={app:0},o=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"23e2":function(e,t,s){},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=o(e);return s(t)}function o(e){var t=a[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}n.keys=function(){return Object.keys(a)},n.resolve=o,e.exports=n,n.id="4678"},"4ec3":function(e,t,s){"use strict";s.r(t),s.d(t,"getSetting",function(){return i}),s.d(t,"login",function(){return r}),s.d(t,"getUserDetail",function(){return c}),s.d(t,"register",function(){return l}),s.d(t,"getRoom",function(){return u}),s.d(t,"getRoomKEY",function(){return d}),s.d(t,"getRoomUSER",function(){return m}),s.d(t,"get_pk10_alls",function(){return f}),s.d(t,"get_pk10_news",function(){return p}),s.d(t,"api_pk10_color",function(){return v}),s.d(t,"api_pk10_small_color",function(){return b}),s.d(t,"api_pk10_ds",function(){return h}),s.d(t,"api_pk10_dx",function(){return g}),s.d(t,"get_time",function(){return k});var a=s("bc3a"),n=s.n(a),o="http://127.0.0.1:8000/api";o="http://192.168.31.176:8000/api";var i=function(){return n.a.get("".concat(o,"/setting/"))},r=function(e){return n.a.post("".concat(o,"/login/"),e)},c=function(){return n.a.get("".concat(o,"/users/1/"))},l=function(e){return n.a.post("".concat(o,"/users/"),e)},u=function(){return n.a.get("".concat(o,"/room/"))},d=function(e){return n.a.get("".concat(o,"/room/?url=").concat(e))},m=function(e){return n.a.get("".concat(o,"/roomusers/?key=").concat(e))},f=function(e){return n.a.get("".concat(o,"/pk10/open/?format=json&now_day_id=").concat(e))},p=function(){return n.a.get("".concat(o,"/pk10/news/?format=json"))},v={1:"color1",2:"color2",3:"color3",4:"color4",5:"color5",6:"color6",7:"color7",8:"color8",9:"color9",10:"color10"},b={1:"small_color1",2:"small_color2",3:"small_color3",4:"small_color4",5:"small_color5",6:"small_color6",7:"small_color7",8:"small_color8",9:"small_color9",10:"small_color10"},h={dan:"dan",shuang:"shuang"},g={da:"da",xiao:"xiao"},k=7777},"4ec3f":function(e,t,s){e.exports=s.p+"img/pk10.e46a9370.png"},"56d7":function(e,t,s){"use strict";s.r(t);var a={};s.r(a),s.d(a,"setInfo",function(){return pe}),s.d(a,"setNav",function(){return ve}),s.d(a,"setShopList",function(){return be});var n={};s.r(n),s.d(n,"userInfo",function(){return he}),s.d(n,"goods_list",function(){return ge});s("cadf"),s("551c"),s("097d");var o=s("2b0e"),i=s("76a0"),r=s.n(i),c=(s("aa35"),s("739f"),s("5aea"),s("8c4f")),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.load?s("div",{staticClass:"loading"},[s("mt-spinner",{attrs:{type:"double-bounce",size:60,color:"#26a2ff"}})],1):e._e(),s("mt-header",{attrs:{fixed:"",title:"首页"}}),s("div",{staticClass:"main"},[s("div",{staticClass:"rooms"},e._l(e.rooms,function(t){return s("div",{staticClass:"rooms-info",on:{click:function(s){e.goCHAT(t.url)}}},[s("img",{attrs:{src:t.avatar,alt:""}}),s("div",{staticClass:"rooms-name"},[e._v(e._s(t.name))])])}))]),s("mt-tabbar",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[s("mt-tab-item",{attrs:{id:"home"}},[s("i",{staticClass:"fa fa-home fa-fw"}),s("br"),e._v("聊天室\n        ")]),e.userInfo.nickname?s("mt-tab-item",{attrs:{id:"member"}},[s("i",{staticClass:"fa fa-user fa-fw"}),s("br"),e._v("我的\n        ")]):s("mt-tab-item",{attrs:{id:"login"}},[s("i",{staticClass:"fa fa-user fa-fw"}),s("br"),e._v("我的\n        ")]),s("mt-tab-item",{attrs:{id:"member1"}},[s("i",{staticClass:"fa fa-html5"}),s("br"),e._v("APP\n        ")])],1)],1)},u=[],d=s("be94"),m=s("2f62"),f=(s("4917"),s("3b2b"),{setCookie:function(e,t,s){var a=new Date;a.setTime(a.getTime()+s),a.setDate(a.getDate()+s),document.cookie=e+"="+escape(t)+(null==s?"":";expires="+a.toGMTString())},getCookie:function(e){var t,s=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(s))?t[2]:null},delCookie:function(e){var t=new Date;t.setTime(t.getTime()-1);var s=f.getCookie(e);null!=s&&(document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")}}),p=f,v=s("4ec3"),b={name:"home",components:{},computed:Object(d["a"])({},Object(m["b"])({userInfo:"userInfo"})),data:function(){return{load:!0,selected:"home",rooms:[]}},methods:{getRooms:function(){var e=this,t=this;Object(v["getRoom"])().then(function(s){t.rooms=s.data,e.load=!1}).catch(function(e){Object(i["MessageBox"])("提示","网络异常，请联系客服人员～")})},goCHAT:function(e){this.userInfo.nickname?this.$router.push({name:"chat",path:"/chat/"+e,params:{url:e}}):Object(i["MessageBox"])("提示","请先登录!")}},mounted:function(){this.getRooms()},watch:{selected:function(){var e=this;e.$router.push({name:e.selected})}}},h=b,g=s("2877"),k=Object(g["a"])(h,l,u,!1,null,null,null);k.options.__file="Home.vue";var j=k.exports,_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.load?s("div",{staticClass:"loading"},[s("mt-spinner",{attrs:{type:"double-bounce",size:60,color:"#26a2ff"}})],1):e._e(),s("mt-header",{attrs:{fixed:"",title:"会员中心"}},[s("mt-button",{attrs:{slot:"right"},on:{click:e.LOGINOUT},slot:"right"},[e._v("退出")])],1),s("div",{staticClass:"main"},[s("div",{staticClass:"members"},[s("img",{attrs:{src:e.us.avatar,alt:""}}),s("div",{staticClass:"members-name"},[e._v("PK开奖网会员"),s("br"),s("br"),s("i",[e._v(e._s(e.us.nickname))])]),s("div",{staticClass:"members-bottom"},[e._v("\n                PK开奖网 - wwww.pk5866.com\n            ")])])]),s("mt-tabbar",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[s("mt-tab-item",{attrs:{id:"home"}},[s("i",{staticClass:"fa fa-home fa-fw"}),s("br"),e._v("聊天室\n        ")]),s("mt-tab-item",{attrs:{id:"member"}},[s("i",{staticClass:"fa fa-user fa-fw"}),s("br"),e._v("我的\n        ")]),s("mt-tab-item",{attrs:{id:"member1"}},[s("i",{staticClass:"fa fa-html5"}),s("br"),e._v("APP\n        ")])],1)],1)},C=[],y={name:"member",components:{},data:function(){return{load:!0,selected:"member",us:{id:"",username:"",nickname:"",avatar:"",token:""}}},methods:{LOGINOUT:function(){this.$router.push({name:"login"})},getMembers:function(){var e=this;e.us["id"]=p.getCookie("id"),e.us["username"]=p.getCookie("username"),e.us["nickname"]=unescape(p.getCookie("nickname")),e.us["avatar"]=unescape(p.getCookie("avatar")),p.getCookie("token")?(e.us["token"]=p.getCookie("token"),this.load=!1):e.$router.push({name:"home"})}},mounted:function(){this.getMembers()},watch:{selected:function(){var e=this;e.$router.push({name:e.selected})}}},w=y,x=Object(g["a"])(w,_,C,!1,null,null,null);x.options.__file="Member.vue";var O=x.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.load?a("div",{staticClass:"loading"},[a("mt-spinner",{attrs:{type:"double-bounce",color:"#26a2ff",size:60}})],1):e._e(),a("mt-header",{attrs:{fixed:"",title:"注册"}},[a("router-link",{attrs:{slot:"left",to:"/login"},slot:"left"},[a("mt-button",{attrs:{icon:"back"}},[e._v("返回")])],1)],1),a("div",{staticClass:"main"},[a("div",{staticClass:"members"},[a("img",{attrs:{src:s("cf05"),alt:""}}),a("mt-field",{attrs:{label:"昵称",placeholder:"请输入用户名",state:""},model:{value:e.nickname,callback:function(t){e.nickname=t},expression:"nickname"}}),a("mt-field",{attrs:{label:"手机号",placeholder:"请输入手机号",state:"",type:"tel"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),a("mt-field",{attrs:{label:"密码",placeholder:"请输入密码",state:"",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("mt-button",{attrs:{type:"primary",size:"large",plain:""},on:{click:e.onSubmit}},[e._v("注册")])],1)])],1)},T=[],S=(s("6b54"),{name:"reg",components:{},data:function(){return{load:!0,nickname:"",mobile:"",password:""}},methods:{onSubmit:function(){var e=this;e.load=!0;var t=e.nickname.length,s=e.mobile;s=s.toString();var a=e.password.length;t>10||t<1?(e.load=!1,Object(i["MessageBox"])("提示","昵称长度必须在1到10位～")):11!=s.length?(e.load=!1,Object(i["MessageBox"])("提示","账户必须位手机号～")):a>16||a<6?(e.load=!1,Object(i["MessageBox"])("提示","请输入6至16位长度的密码～")):Object(v["register"])({nick_name:e.nickname,mobile:e.mobile,username:e.mobile,password:e.password}).then(function(t){p.setCookie("username",e.username,1),p.setCookie("nickname",t.data.nick_name,1),p.setCookie("token",t.data.token,1),e.$store.dispatch("setInfo"),Object(v["getUserDetail"])().then(function(t){p.setCookie("id",t.data.id,1),p.setCookie("avatar",t.data.avatar,1),e.$store.dispatch("setInfo"),e.load=!1,e.$router.push({name:"home"})}).catch(function(t){e.load=!1,e.$router.push({name:"login"})})}).catch(function(t){"username"in t?(e.load=!1,Object(i["MessageBox"])("提示","用户已经存在")):"nick_name"in t?(e.load=!1,Object(i["MessageBox"])("提示","昵称已经存在")):(e.load=!1,Object(i["MessageBox"])("提示","请输入正确的账号信息！"))})}},mounted:function(){this.load=!1},created:function(){p.delCookie("token"),p.delCookie("username"),p.delCookie("id"),p.delCookie("nickname"),p.delCookie("avatar"),this.$store.dispatch("setInfo")},watch:{selected:function(){var e=this;e.$router.push({name:e.selected})}}}),I=S,Y=Object(g["a"])(I,M,T,!1,null,null,null);Y.options.__file="Reg.vue";var D=Y.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.load?a("div",{staticClass:"loading"},[a("mt-spinner",{attrs:{type:"double-bounce",size:60,color:"#26a2ff"}})],1):e._e(),a("mt-header",{attrs:{fixed:"",title:"登录"}},[a("mt-button",{attrs:{slot:"right"},on:{click:e.REG},slot:"right"},[e._v("注册")])],1),a("div",{staticClass:"main"},[a("div",{staticClass:"members"},[a("img",{attrs:{src:s("cf05"),alt:""}}),a("mt-field",{attrs:{label:"手机号",placeholder:"请输入手机号",state:"",type:"tel"},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),a("mt-field",{attrs:{label:"密码",placeholder:"请输入密码",state:"",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("mt-button",{attrs:{type:"primary",size:"large",plain:""},on:{click:e.onSubmit}},[e._v("登录")])],1)]),a("mt-tabbar",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[a("mt-tab-item",{attrs:{id:"home"}},[a("i",{staticClass:"fa fa-home fa-fw"}),a("br"),e._v("聊天室\n        ")]),a("mt-tab-item",{attrs:{id:"login"}},[a("i",{staticClass:"fa fa-user fa-fw"}),a("br"),e._v("我的\n        ")]),a("mt-tab-item",{attrs:{id:"member1"}},[a("i",{staticClass:"fa fa-html5"}),a("br"),e._v("APP\n        ")])],1)],1)},E=[],z={name:"login",components:{},data:function(){return{load:!0,selected:"login",mobile:"",password:""}},methods:{REG:function(){this.$router.push({name:"reg"})},onSubmit:function(){var e=this;e.load=!0;var t=e.mobile;t=t.toString(),11==t.length&&0!=e.password.length?Object(v["login"])({username:e.mobile,password:e.password}).then(function(t){p.setCookie("username",e.mobile,1),p.setCookie("token",t.data.token,1),e.$store.dispatch("setInfo"),Object(v["getUserDetail"])().then(function(t){p.setCookie("id",t.data.id,1),p.setCookie("nickname",t.data.nick_name,1),p.setCookie("avatar",t.data.avatar,1),e.$store.dispatch("setInfo"),e.load=!1,e.$router.push({name:"home"})}).catch(function(t){p.delCookie("token"),p.delCookie("username"),p.delCookie("id"),p.delCookie("nickname"),p.delCookie("avatar"),e.$store.dispatch("setInfo"),e.load=!1,Object(i["MessageBox"])("提示","网络异常，请重新登录～")})}).catch(function(t){e.load=!1,Object(i["MessageBox"])("提示","请输入正确的账号信息！")}):(e.load=!1,Object(i["MessageBox"])("提示","请输入正确的账号信息！"))}},mounted:function(){this.load=!1},created:function(){p.delCookie("token"),p.delCookie("username"),p.delCookie("id"),p.delCookie("nickname"),p.delCookie("avatar"),this.$store.dispatch("setInfo")},watch:{selected:function(){var e=this;e.$router.push({name:e.selected})}}},$=z,P=Object(g["a"])($,H,E,!1,null,null,null);P.options.__file="Login.vue";var A=P.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{height:"100%",overflow:"hidden"}},[e.load?s("div",{staticClass:"loading"},[s("mt-spinner",{attrs:{type:"double-bounce",size:60,color:"#26a2ff"}})],1):e._e(),s("mt-header",{attrs:{fixed:"",title:"聊天室"}},[s("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[s("mt-button",{attrs:{icon:"back"}},[e._v("返回")])],1)],1),s("div",{staticClass:"main"},[s("div",{staticClass:"chats"},[s("div",{staticClass:"open"},[s("OpenPk10")],1),s("div",{staticClass:"msg-bg",style:{height:e.fullHeight+"px"}},[s("div",{staticClass:"msg",attrs:{id:"MSG"}},e._l(e.MSGDATA,function(t){return s("div",{staticClass:"msgs"},["join"===t.type?s("div",[s("div",{class:t.type},[e._v(e._s(t.nickname)+" 加入聊天室")])]):"out"===t.type?s("div",[s("div",{class:t.type},[e._v(e._s(t.nickname)+" 离开聊天室")])]):"other"===t.type?s("div",[s("div",{class:t.type},[s("div",{staticClass:"msgs-name"},[e._v(e._s(t.nickname))]),s("div",{staticClass:"msgs-main"},[s("div",{staticClass:"msgs-pic"},[s("img",{attrs:{src:t.avatar,alt:""}})]),s("div",{staticClass:"msgs-message"},[e._v(e._s(t.message))])])])]):"us"===t.type?s("div",[s("div",{class:t.type},[s("div",{staticClass:"msgs-main"},[s("div",{staticClass:"msgs-message"},[e._v(e._s(t.message))])])])]):e._e()])}))]),s("div",{staticClass:"push-bg"},[s("div",{staticClass:"push"},[s("div",{staticClass:"txt"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.sendMSG,expression:"sendMSG"}],attrs:{type:"text",maxlength:"100",placeholder:"请输入发送消息..."},domProps:{value:e.sendMSG},on:{input:function(t){t.target.composing||(e.sendMSG=t.target.value)}},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.SEND(t):null}}})]),s("div",{staticClass:"send",on:{click:function(t){e.SEND()}}},[e._v("发送")])])])])])],1)},N=[],R=(s("ac6a"),s("7f7f"),s("28a5"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"open-bg"},[a("div",{staticClass:"opens"},[a("img",{attrs:{src:s("4ec3f"),alt:""}}),a("div",{staticClass:"other"},[""!=e.tops.opens_all?a("div",{staticClass:"nos"},e._l(e.tops.opens_all,function(t){return a("i",{class:t.opens_color},[e._v("\n                    "+e._s(t.opens_no)+"\n                ")])})):a("div",{staticClass:"nos opening"},[e._v("正在获取数据中...")]),a("div",{staticClass:"times"},[e._v("\n                当前期号"),a("i",[e._v(e._s(e.tops.issue))]),e._v(",距离下期开奖时间:"),a("i",[e._v(e._s(e.tops.next_M))]),e._v(" 分"),a("i",[e._v(e._s(e.tops.next_S))]),e._v(" 秒\n            ")])])]),a("div",{staticClass:"plans"})])}),B=[],U=s("c1df"),J=s.n(U),L=s("6565"),q=s("4ec3"),K="pk10",F={name:"toppk10",data:function(){return{tops:{day_id:1,issue:1e5,opens_all:"",opened:"000",next_M:"00",next_S:"00"}}},methods:{get_Time:function(){var e=J()().format("YYYY/MM/DD HH:mm:ss"),t=L.opens(K)[0],s=L.opens(K)[1];e=J()(e,"YYYY/MM/DD HH:mm:ss").valueOf(),e-=3e4,s=J()(s,"YYYY/MM/DD HH:mm:ss").valueOf();var a=s-e;return[t,a,e]},update_Tops:function(){this.tops.opens_all=""},get_News:function(){var e=this;window.getNews=setInterval(function(){Object(v["get_pk10_news"])().then(function(t){1==e.tops.day_id?e.Tops(t.data):e.tops.day_id!=parseInt(t.data[0].day_id)?(e.Tops(t.data),clearInterval(window.getNews)):console.log("没有采集到正确数据！继续采集")}).catch(function(e){console.log(e)})},q.get_time)},next_Time:function(){var e=this,t=(this.get_Time()[0],this.get_Time()[1]),s=this.get_Time()[2];window.setNextTime=setInterval(function(){if(t<=0)clearInterval(window.setNextTime),console.log("nextTime,如果出现1次以上就可能会出现问题！！！---[严重错误！]"),e.next_Time(),e.update_Tops(),e.get_News();else{var a=parseInt(t/60/60/1e3);e.tops["next_M"]=J()(t).format("mm"),e.tops["next_S"]=J()(t).format("ss");var n=J()(s).format("HH:mm:ss");n=n.split(":"),a>0&&(e.tops["next_M"]=parseInt(J()(t).format("mm"))+60*a),t-=1e3}},1e3)},Tops:function(e){if(e.length>0){var t=e[0].day_id,s=parseInt(e[0].issue),a=[],n=e[0].opens.split(",");n.forEach(function(e,t){var s=parseInt(e);a[t]={opens_no:s,opens_color:q.api_pk10_color[s]}});var o=parseInt(t.slice(8));this.tops["day_id"]=parseInt(t),this.tops["issue"]=s,this.tops["opens_all"]=a,this.tops["opened"]=o}},checkPage:function(){var e=this,t=parseInt(this.get_Time()[0]);Object(v["get_pk10_news"])().then(function(s){parseInt(s.data[0].day_id)==t?(e.Tops(s.data),clearInterval(window.getTops)):console.log("没有采集到正确数据！继续采集")}).catch(function(e){console.log(e)})},TintPage:function(){this.checkPage(),this.next_Time()}},mounted:function(){this.TintPage()},beforeDestroy:function(){clearInterval(window.setNextTime),clearInterval(window.getNews)}},W=F,V=(s("6cba"),Object(g["a"])(W,R,B,!1,null,null,null));V.options.__file="OpenPk10.vue";var Q,X=V.exports,Z="ws://127.0.0.1:8000/ws";Z="ws://192.168.31.176:8000/ws";var ee={name:"chat",components:{OpenPk10:X},data:function(){return{load:!0,sended:!1,fullHeight:document.documentElement.clientHeight-165,picurl:"",room:{roomname:"",roomkey:"",roomavatar:""},us:{id:"",username:"",nickname:"",avatar:"",token:""},tt:[],sendMSG:"",MSGDATA:[]}},methods:{initHeight:function(){var e=this;window.onresize=function(){return function(){window.fullHeight=document.documentElement.clientHeight,e.fullHeight=window.fullHeight}()},e.load=!1},SEND:function(){console.log("发送信息");var e=this;if(""!=e.sendMSG){var t={id:e.us["id"],message:e.sendMSG};e.sendMSG="",Q.send(JSON.stringify({message:t}))}},checkCookie:function(){var e=this;if(e.us["id"]=p.getCookie("id"),e.us["username"]=p.getCookie("username"),e.us["nickname"]=unescape(p.getCookie("nickname")),e.us["avatar"]=unescape(p.getCookie("avatar")),p.getCookie("token")){var t=unescape(p.getCookie("avatar"));e.picurl=t.split("media")[0]+"media/",e.us["token"]=p.getCookie("token"),e.room["roomkey"]="".concat(e.$route.params.url),e.getRooms(e.room["roomkey"])}else e.$router.push({name:"home"})},getRooms:function(e){var t=this;Object(v["getRoomKEY"])(e).then(function(e){t.room["roomname"]=e.data[0].name,t.room["roomavatar"]=e.data[0].avatar,t.ws()}).catch(function(e){console.log(e)})},ws:function(e){var t=this,s=Z+"/chat/"+t.room["roomkey"]+"/?token="+t.us["token"];Q=new WebSocket(s),this.getTTUsers(),Q.onmessage=function(e){var s=JSON.parse(e.data).message;if("join"==s["type"])s["avatar"]=t.picurl+s["avatar"],t.tt.unshift(s);else if("out"==s["type"])t.tt.forEach(function(e,a){e["id"]==s["id"]&&t.tt.splice(a,1)});else if("other"==s["type"]){var a,n;if(console.log("获取到消息了"),s["id"]==t.us["id"])s["type"]="us";else t.tt.forEach(function(e,t){e["id"]==s["id"]&&(a=e["avatar"],n=e["nickname"])}),s={type:s["type"],message:s["message"],avatar:a,nickname:n}}t.MSGDATA.push(s)},Q.onclose=function(e){console.log("Chat 关闭了链接,发消息给所有人")}},getTTUsers:function(){console.log("请求服务器在线会员数据数据～");var e=this;Object(v["getRoomUSER"])(e.room["roomkey"]).then(function(t){t.data.forEach(function(t){if(console.log(t["_id"]),t["_id"]==e.us["id"]);else{var s={type:"join",nickname:t["nickname"],avatar:e.picurl+t["avatar"],id:t["_id"]};e.tt.push(s)}})}).catch(function(e){console.log(e)})}},mounted:function(){this.initHeight(),this.checkCookie(),console.log(this.room["roomkey"])},beforeDestroy:function(){console.log("正常切换页面时候，主动关闭socket连接..."),Q.close()},watch:{MSGDATA:function(){setTimeout(function(){document.getElementById("MSG").scrollTop=document.getElementById("MSG").scrollHeight},1)},fullHeight:function(e){if(!this.timer){this.fullHeight=e,this.timer=!0;var t=this;setTimeout(function(){t.timer=!1},333)}}}},te=ee,se=(s("f196"),Object(g["a"])(te,G,N,!1,null,null,null));se.options.__file="Chat.vue";var ae=se.exports;o["default"].use(c["a"]);var ne=new c["a"]({routes:[{path:"/",name:"home",component:j,meta:{title:"首页"}},{path:"/member",name:"member",component:O,meta:{title:"会员中心"}},{path:"/reg",name:"reg",component:D,meta:{title:"注册"}},{path:"/login",name:"login",component:A,meta:{title:"登录"}},{path:"/chat/:url",name:"chat",component:ae,meta:{title:"聊天室"}}]}),oe=ne,ie=s("ade3"),re="SET_INFO",ce="SET_NAV",le="SET_SHOPLIST",ue=s("bc3a"),de=s.n(ue);o["default"].prototype.$http=de.a;var me=Object(ie["a"])({},re,function(e){e.userInfo={id:p.getCookie("id"),username:p.getCookie("username"),nickname:p.getCookie("nickname"),avatar:p.getCookie("avatar"),token:p.getCookie("token")}});function fe(e){return function(t){for(var s=t.commit,a=arguments.length,n=new Array(a>1?a-1:0),o=1;o<a;o++)n[o-1]=arguments[o];return s.apply(void 0,[e].concat(n))}}var pe=fe(re),ve=fe(ce),be=fe(le),he=function(e){return e.userInfo},ge=function(e){return console.log(e.goods_list),e.goods_list};o["default"].use(m["a"]);var ke={id:p.getCookie("id")||"",username:p.getCookie("username")||"",nickname:p.getCookie("nickname")||"",avatar:p.getCookie("avatar")||"",token:p.getCookie("token")||""},je={totalPrice:"",goods_list:[]},_e={userInfo:ke,goods_list:je},Ce=new m["a"].Store({state:_e,mutations:me,actions:a,getters:n});de.a.interceptors.request.use(function(e){return Ce.state.userInfo.token&&(e.headers.Authorization="JWT ".concat(Ce.state.userInfo.token)),e},function(e){return Promise.reject(e)}),de.a.interceptors.response.use(void 0,function(e){var t=e.response;switch(t.status){case 401:console.log("未登录");case 403:console.log("您没有该操作权限");case 500:console.log("服务器错误")}return Promise.reject(e.response.data)});var ye=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[s("router-view")],1)},we=[],xe={name:"app",components:{}},Oe=xe,Me=Object(g["a"])(Oe,ye,we,!1,null,null,null);Me.options.__file="App.vue";var Te=Me.exports;o["default"].use(r.a),o["default"].config.productionTip=!1,o["default"].prototype.$http=de.a,new o["default"]({el:"#app",router:oe,store:Ce,render:function(e){return e(Te)}})},"5aea":function(e,t,s){},6565:function(e,t,s){var a=s("c1df");function n(){var e=["09:07:00","09:12:00","09:17:00","09:22:00","09:27:00","09:32:00","09:37:00","09:42:00","09:47:00","09:52:00","09:57:00","10:02:00","10:07:00","10:12:00","10:17:00","10:22:00","10:27:00","10:32:00","10:37:00","10:42:00","10:47:00","10:52:00","10:57:00","11:02:00","11:07:00","11:12:00","11:17:00","11:22:00","11:27:00","11:32:00","11:37:00","11:42:00","11:47:00","11:52:00","11:57:00","12:02:00","12:07:00","12:12:00","12:17:00","12:22:00","12:27:00","12:32:00","12:37:00","12:42:00","12:47:00","12:52:00","12:57:00","13:02:00","13:07:00","13:12:00","13:17:00","13:22:00","13:27:00","13:32:00","13:37:00","13:42:00","13:47:00","13:52:00","13:57:00","14:02:00","14:07:00","14:12:00","14:17:00","14:22:00","14:27:00","14:32:00","14:37:00","14:42:00","14:47:00","14:52:00","14:57:00","15:02:00","15:07:00","15:12:00","15:17:00","15:22:00","15:27:00","15:32:00","15:37:00","15:42:00","15:47:00","15:52:00","15:57:00","16:02:00","16:07:00","16:12:00","16:17:00","16:22:00","16:27:00","16:32:00","16:37:00","16:42:00","16:47:00","16:52:00","16:57:00","17:02:00","17:07:00","17:12:00","17:17:00","17:22:00","17:27:00","17:32:00","17:37:00","17:42:00","17:47:00","17:52:00","17:57:00","18:02:00","18:07:00","18:12:00","18:17:00","18:22:00","18:27:00","18:32:00","18:37:00","18:42:00","18:47:00","18:52:00","18:57:00","19:02:00","19:07:00","19:12:00","19:17:00","19:22:00","19:27:00","19:32:00","19:37:00","19:42:00","19:47:00","19:52:00","19:57:00","20:02:00","20:07:00","20:12:00","20:17:00","20:22:00","20:27:00","20:32:00","20:37:00","20:42:00","20:47:00","20:52:00","20:57:00","21:02:00","21:07:00","21:12:00","21:17:00","21:22:00","21:27:00","21:32:00","21:37:00","21:42:00","21:47:00","21:52:00","21:57:00","22:02:00","22:07:00","22:12:00","22:17:00","22:22:00","22:27:00","22:32:00","22:37:00","22:42:00","22:47:00","22:52:00","22:57:00","23:02:00","23:07:00","23:12:00","23:17:00","23:22:00","23:27:00","23:32:00","23:37:00","23:42:00","23:47:00","23:52:00","23:57:00","23:59:59"],t=a().valueOf()-3e4,s=!1,n=1,o=1;e.forEach(function(e,i){if(!s){var r=a(e,"HH:mm:ss").valueOf();t<r&&(o=e,n=i,s=!0)}}),0==n?(n=179,n=a().subtract(1,"days").format("YYYYMMDD")+(Array(3).join("0")+n).slice(-3)):n=a().format("YYYYMMDD")+(Array(3).join("0")+n).slice(-3),o=a(o,"HH:mm:ss").format("YYYY/MM/DD HH:mm:ss");var i=[n,o];return i}function o(){var e=["00:05:00","00:10:00","00:15:00","00:20:00","00:25:00","00:30:00","00:35:00","00:40:00","00:45:00","00:50:00","00:55:00","01:00:00","01:05:00","01:10:00","01:15:00","01:20:00","01:25:00","01:30:00","01:35:00","01:40:00","01:45:00","01:50:00","01:55:00","10:00:00","10:10:00","10:20:00","10:30:00","10:40:00","10:50:00","11:00:00","11:10:00","11:20:00","11:30:00","11:40:00","11:50:00","12:00:00","12:10:00","12:20:00","12:30:00","12:40:00","12:50:00","13:00:00","13:10:00","13:20:00","13:30:00","13:40:00","13:50:00","14:00:00","14:10:00","14:20:00","14:30:00","14:40:00","14:50:00","15:00:00","15:10:00","15:20:00","15:30:00","15:40:00","15:50:00","16:00:00","16:10:00","16:20:00","16:30:00","16:40:00","16:50:00","17:00:00","17:10:00","17:20:00","17:30:00","17:40:00","17:50:00","18:00:00","18:10:00","18:20:00","18:30:00","18:40:00","18:50:00","19:00:00","19:10:00","19:20:00","19:30:00","19:40:00","19:50:00","20:00:00","20:10:00","20:20:00","20:30:00","20:40:00","20:50:00","21:00:00","21:10:00","21:20:00","21:30:00","21:40:00","21:50:00","22:00:00","22:05:00","22:10:00","22:15:00","22:20:00","22:25:00","22:30:00","22:35:00","22:40:00","22:45:00","22:50:00","22:55:00","23:00:00","23:05:00","23:10:00","23:15:00","23:20:00","23:25:00","23:30:00","23:35:00","23:40:00","23:45:00","23:50:00","23:55:00","23:59:59"],t=a().valueOf()+2e4,s=!1,n=1,o=1;e.forEach(function(e,i){if(!s){var r=a(e,"HH:mm:ss").valueOf();0==i&&(i=120),t<r&&(o=e,n=i,s=!0)}}),n=120==n?a().subtract(1,"days").format("YYYYMMDD")+(Array(3).join("0")+n).slice(-3):a().format("YYYYMMDD")+(Array(3).join("0")+n).slice(-3),o=a(o,"HH:mm:ss").format("YYYY/MM/DD HH:mm:ss");var i=[n,o];return i}t.opens=function(e){switch(e){case"pk10":return n();case"cqssc":return o();default:console.log(" 未匹配到！")}}},"6cba":function(e,t,s){"use strict";var a=s("9062"),n=s.n(a);n.a},"739f":function(e,t,s){},9062:function(e,t,s){},cf05:function(e,t,s){e.exports=s.p+"img/logo.f61cd332.png"},f196:function(e,t,s){"use strict";var a=s("23e2"),n=s.n(a);n.a}});
//# sourceMappingURL=app.d33b0666.js.map