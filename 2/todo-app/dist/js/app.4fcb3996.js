(function(e){function t(t){for(var n,r,d=t[0],o=t[1],b=t[2],f=0,i=[];f<d.length;f++)r=d[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&i.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);j&&j(t);while(i.length)i.shift()();return c.push.apply(c,b||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,d=1;d<a.length;d++){var o=a[d];0!==s[o]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},c=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/Praktyka/2/todo-app/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],o=d.push.bind(d);d.push=t,d=d.slice();for(var b=0;b<d.length;b++)t(d[b]);var j=o;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"07af":function(e,t,a){},"1bee":function(e,t,a){e.exports=a.p+"img/github_mark.0f4a9689.svg"},"29f8":function(e,t,a){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=c,e.exports=s,s.id="4678"},5134:function(e,t,a){"use strict";a("ccb4")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),s={class:"wrapper"};function c(e,t,a,c,r,d){var o=Object(n["v"])("navbar"),b=Object(n["v"])("router-view");return Object(n["n"])(),Object(n["d"])(n["a"],null,[Object(n["D"])(Object(n["e"])(o,null,null,512),[[n["B"],"/"!==e.$route.path]]),Object(n["e"])("main",s,[Object(n["e"])(b)])],64)}var r=a("1bee"),d=a.n(r),o=Object(n["E"])("data-v-1f2334d8");Object(n["q"])("data-v-1f2334d8");var b={class:"navbar py-3"},j=Object(n["e"])("div",{class:"container d-flex justify-content-between align-items-center"},[Object(n["e"])("a",{href:"/",class:"nav-link text-dark"},[Object(n["e"])("h1",{class:"app-name"},"ToDoApp")]),Object(n["e"])("a",{href:"https://github.com/piotrfijol",class:"nav-link"},[Object(n["e"])("img",{src:d.a,alt:"github mark",class:"github-link d-block"})])],-1);Object(n["o"])();var f=o((function(e,t,a,s,c,r){return Object(n["n"])(),Object(n["d"])("nav",b,[j])})),i={name:"navbar"};a("66eb");i.render=f,i.__scopeId="data-v-1f2334d8";var u=i,l={name:"App",components:{Navbar:u}};a("d40f");l.render=c;var m=l,p=a("6c02"),v=Object(n["E"])("data-v-c837fb94");Object(n["q"])("data-v-c837fb94");var k={class:"container d-flex flex-column justify-content-center align-items-center"},O=Object(n["e"])("h1",{class:"app-name animate__animated animate__bounceIn"},"ToDoApp",-1),h=Object(n["e"])("p",{class:"main__caption"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",-1),y=Object(n["e"])("button",{class:"btn btn-dark py-3 px-5"},"Get Started",-1);Object(n["o"])();var g=v((function(e,t,a,s,c,r){var d=Object(n["v"])("router-link");return Object(n["n"])(),Object(n["d"])("div",k,[O,h,Object(n["e"])(d,{to:"/todo"},{default:v((function(){return[y]})),_:1})])})),w={name:"Home"};a("ce3c");w.render=g,w.__scopeId="data-v-c837fb94";var _=w,x=(a("b0c0"),Object(n["E"])("data-v-012eb360"));Object(n["q"])("data-v-012eb360");var T={class:"container"};Object(n["o"])();var z=x((function(e,t,a,s,c,r){var d=Object(n["v"])("add-task"),o=Object(n["v"])("task"),b=Object(n["v"])("tasks");return Object(n["n"])(),Object(n["d"])("div",T,[Object(n["e"])(d,{onAddTask:r.addTask},null,8,["onAddTask"]),(Object(n["n"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(c.tasks,(function(e){return Object(n["n"])(),Object(n["d"])(b,{key:e.id},{default:x((function(){return[Object(n["e"])(o,{onRemove:r.removeTask,taskId:e.id,title:e.name,date:e.date},null,8,["onRemove","taskId","title","date"])]})),_:2},1024)})),128))])})),D=(a("4de4"),Object(n["E"])("data-v-0abbad0c"));Object(n["q"])("data-v-0abbad0c");var P={class:"tasks"};Object(n["o"])();var I=D((function(e,t,a,s,c,r){return Object(n["n"])(),Object(n["d"])("div",P,[Object(n["u"])(e.$slots,"default",{},void 0,!0)])})),M={name:"tasks",components:{}};M.render=I,M.__scopeId="data-v-0abbad0c";var A=M,q=Object(n["E"])("data-v-1b8ccd18");Object(n["q"])("data-v-1b8ccd18");var E={class:"info d-flex flex-column text-start"},S={class:"text-secondary date"},N={class:"buttons d-flex align-items-center"},C={class:"form-check form-switch"};Object(n["o"])();var H=q((function(e,t,a,s,c,r){return Object(n["n"])(),Object(n["d"])("div",{class:["task d-flex justify-content-between pr-5 mb-2",c.isDone?"task-done":""]},[Object(n["e"])("div",E,[Object(n["e"])("p",S,"Added on "+Object(n["x"])(r.dateFormatted),1),Object(n["e"])("p",null,Object(n["x"])(a.title),1)]),Object(n["e"])("div",N,[Object(n["e"])("div",C,[Object(n["D"])(Object(n["e"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.isDone=e})},null,512),[[n["z"],c.isDone]])]),Object(n["e"])("button",{onClick:t[2]||(t[2]=function(t){return e.$emit("remove",a.taskId)}),class:"btn btn-danger"},"X")])],2)})),K=(a("a9e3"),a("c1df")),U=a.n(K),Y={name:"task",data:function(){return{isDone:!1}},props:{taskId:Number,title:String,date:Date},computed:{dateFormatted:function(){return U()(this.date).format("MMM, Do YYYY | HH:mm:ss")}}};a("5134");Y.render=H,Y.__scopeId="data-v-1b8ccd18";var $=Y,F=Object(n["E"])("data-v-0f058648");Object(n["q"])("data-v-0f058648");var J={class:"container mt-5"},L={class:"input-group mb-5"};Object(n["o"])();var R=F((function(e,t,a,s,c,r){return Object(n["n"])(),Object(n["d"])("div",J,[Object(n["e"])("div",L,[Object(n["D"])(Object(n["e"])("input",{onKeypress:t[1]||(t[1]=function(){return r.handleKeyPress&&r.handleKeyPress.apply(r,arguments)}),"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.newTask.name=e}),type:"text",class:"form-control py-3",placeholder:"New task"},null,544),[[n["A"],c.newTask.name]]),Object(n["e"])("button",{onClick:t[3]||(t[3]=function(){return r.addTask&&r.addTask.apply(r,arguments)}),class:"btn btn-success px-4",type:"button",id:"button-addon2"},"Add")])])})),V={name:"add-task",data:function(){return{newTask:{name:""}}},methods:{handleKeyPress:function(e){13===e.keyCode&&this.addTask()},addTask:function(){this.$emit("addTask",this.newTask)}}};a("833a");V.render=R,V.__scopeId="data-v-0f058648";var B=V,G={name:"todo",data:function(){return{tasks:[{id:1,name:"Taskk",date:new Date},{id:2,name:"Taskkkkk",date:new Date}]}},components:{Tasks:A,Task:$,AddTask:B},methods:{addTask:function(e){var t=e.name;this.tasks.push({id:Math.floor(1e4*Math.random()),date:new Date,name:t})},removeTask:function(e){console.log(e),this.tasks=this.tasks.filter((function(t){return t.id!=e}))}}};G.render=z,G.__scopeId="data-v-012eb360";var X=G,Q=[{path:"/",name:"Home",component:_},{path:"/todo",name:"Todo",component:X}],W=Object(p["a"])({history:Object(p["b"])("/Praktyka/2/"),routes:Q}),Z=W;Object(n["c"])(m).use(Z).mount("#app")},"66eb":function(e,t,a){"use strict";a("29f8")},"678d":function(e,t,a){},"833a":function(e,t,a){"use strict";a("ded1")},ccb4:function(e,t,a){},ce3c:function(e,t,a){"use strict";a("678d")},d40f:function(e,t,a){"use strict";a("07af")},ded1:function(e,t,a){}});
//# sourceMappingURL=app.4fcb3996.js.map