(this["webpackJsonpvapor-galery"]=this["webpackJsonpvapor-galery"]||[]).push([[0],{196:function(e,t,n){e.exports=n.p+"static/media/winLogo.965be2a2.png"},197:function(e,t,n){e.exports=n(429)},202:function(e,t,n){},219:function(e,t){},221:function(e,t){},231:function(e,t){},233:function(e,t){},258:function(e,t){},260:function(e,t){},261:function(e,t){},267:function(e,t){},269:function(e,t){},287:function(e,t){},289:function(e,t){},301:function(e,t){},304:function(e,t){},309:function(e,t){},311:function(e,t){},334:function(e,t){},428:function(e,t,n){},429:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(65),l=n.n(r),o=(n(202),n(42)),i=n(188),s=n(1),m=n(189),u=n.n(m),f=n(10),h=n(193),p=n.n(h),g=n(194),d=n.n(g),E=n(195),w=n.n(E),b=(n(428),n(196)),v=n.n(b);function y(){var e=Object(i.a)(["\n  @font-face {\n    font-family: 'ms_sans_serif';\n    src: url('","') format('woff2');\n    font-weight: 400;\n    font-style: normal\n  }\n  @font-face {\n    font-family: 'ms_sans_serif';\n    src: url('","') format('woff2');\n    font-weight: bold;\n    font-style: normal\n  }\n  body {\n    font-family: 'ms_sans_serif';\n  }\n  ","\n"]);return y=function(){return e},e}var j=Object(s.b)(y(),d.a,w.a,f.k);var k=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(!1),i=Object(o.a)(l,2),m=i[0],h=i[1],g=Object(a.useState)((new Date).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})),d=Object(o.a)(g,2),E=d[0],w=d[1],b=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=(t[0],t[1]);return function(){return n((function(e){return++e}))}}(),y=Object(a.useState)(!1),k=Object(o.a)(y,2),N=k[0],O=k[1],S=[],_=["crimsondawn97","floatingheavy","lofi.icon","seerlight","depression_vaporwave","shapesoftime","vapor_waveart"];Object(a.useEffect)((function(){I(_);var e=setInterval((function(){w((new Date).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})),r(S),b(),console.log("gallery updated")}),1);return function(){return clearInterval(e)}}),[]);var I=function(e){e.forEach((function(e){u.a.scrapeUserPage(e).then((function(t){t&&t.medias.map((function(t){t.username=e,S.push(t)}))}))}))};return c.a.createElement("div",{className:"App"},c.a.createElement(j,null),c.a.createElement(s.a,{theme:p.a},c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{style:{minHeight:"100vh"}},c.a.createElement(f.h,{className:"window-info",style:N?{display:"none"}:{}},c.a.createElement(f.j,{className:"window-header"},c.a.createElement("span",{className:"headerSpan"},"VaporwaveGallery.exe"),c.a.createElement(f.b,{className:"closeBtn",onClick:function(){O(!0)}},c.a.createElement("div",{className:"closeIconLeft"},c.a.createElement("div",{className:"closeIconRight"})))),c.a.createElement(f.i,{className:"infoContent"},c.a.createElement("p",null,"Welcome to Vaporwave Gallery!"),c.a.createElement("p",null,"A digital art gallery with a vaporwave aesthetic."))),c.a.createElement("br",null),n.map((function(e,t){return c.a.createElement(f.h,{className:"window",key:t},c.a.createElement(f.j,{className:"window-header"},c.a.createElement("a",{href:"https://www.instagram.com/".concat(e.username,"/"),target:"_blank"},c.a.createElement("span",{className:"headerSpan"},e.username,".jpg")),c.a.createElement(f.b,{className:"closeBtn",onClick:function(){return function(e){console.log(e),r(n.splice(e,1)),console.log(n[e])}(t)}},c.a.createElement("div",{className:"closeIconLeft"},c.a.createElement("div",{className:"closeIconRight"})))),c.a.createElement(f.i,null,c.a.createElement("img",{src:e.display_url,width:"100%",height:"100%"})))}))),c.a.createElement(f.a,{style:{bottom:"0%",position:"sticky",width:"100%",zIndex:99}},c.a.createElement(f.g,{style:{justifyContent:"space-between"}},c.a.createElement("div",{style:{position:"relative",display:"inline-block"}},c.a.createElement(f.b,{onClick:function(){return h(!m)},active:m,style:{fontWeight:"bold"}},c.a.createElement("img",{src:v.a,alt:"",style:{height:"20px",marginRight:4}}),"Start"),m&&c.a.createElement(f.d,{style:{position:"absolute",left:"0",bottom:"100%"},onClick:function(){return h(!1)}},c.a.createElement(f.e,{disabled:!0},"Check Out The Artists"),c.a.createElement(f.c,null),_.map((function(e,t){return c.a.createElement("a",{key:t,href:"https://www.instagram.com/".concat(e,"/"),target:"_blank"},c.a.createElement(f.e,null,c.a.createElement("span",{role:"img","aria-label":"\ud83d\udcc1",style:{marginRight:"2px"}},"\ud83d\udcc1"),e))})),c.a.createElement(f.c,null),c.a.createElement("a",{href:"https://github.com/femisd",target:"_blank"},c.a.createElement(f.e,null,c.a.createElement("span",{role:"img","aria-label":"\ud83d\udcbb"},"\u2699\ufe0f"),"My Github")),c.a.createElement(f.e,{disabled:!0},c.a.createElement("span",{role:"img","aria-label":"\ud83d\udda5\ufe0f"},"\ud83d\udda5\ufe0f"),"Logout"))),c.a.createElement(f.f,{variant:"well",style:{padding:"5px"}},E))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[197,1,2]]]);
//# sourceMappingURL=main.8ea60950.chunk.js.map