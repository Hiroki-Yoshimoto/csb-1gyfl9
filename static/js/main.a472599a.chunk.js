(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c,r,i,a,d,o,j,s,b,l,x,O,u,h,p,f,m,g,v=t(1),k=t(21),w=t(2),y=t(3),C=t(0),I=function(e){var n=e.children;return Object(C.jsx)(A,{children:n})},A=y.a.button(c||(c=Object(w.a)(["\n  background-color: #40514e;\n  color: #fff;\n  outline: none;\n  border-radius: 1000px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.8;\n  }\n"]))),M=y.a.button(r||(r=Object(w.a)(["\n  color: #fff;\n  outline: none;\n  border-radius: 1000px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.8;\n  }\n"]))),S=function(e){var n=e.children,t=e.onClick;return Object(C.jsx)(U,{onClick:t,children:n})},U=Object(y.a)(M)(i||(i=Object(w.a)(["\n  background-color: #11999e;\n"]))),E=function(e){var n=e.placeholder,t=void 0===n?"":n;return Object(C.jsx)(H,{type:"text",placeholder:t})},H=y.a.input(a||(a=Object(w.a)(["\n  padding: 8px 16px;\n  border: solid #ddd 1px;\n  border-radius: 9999px;\n  outline: none;\n"]))),B=Object(v.memo)((function(){return console.log("Serch"),Object(C.jsx)("div",{children:Object(C.jsxs)(D,{children:[Object(C.jsx)(E,{placeholder:"\u691c\u7d22\u6761\u4ef6\u3092\u5165\u529b"}),Object(C.jsx)(F,{children:Object(C.jsx)(I,{children:"\u691c\u7d22"})})]})})})),D=y.a.div(d||(d=Object(w.a)(["\n  display: flex;\n  align-items: center;\n"]))),F=y.a.div(o||(o=Object(w.a)(["\n  padding-left: 8px;\n"]))),G=function(e){var n=e.children;return Object(C.jsxs)(J,{children:[" ",n]})},J=y.a.div(j||(j=Object(w.a)(["\n  background-color: #fff;\n  box-shadow: #ddd 0px 0px 4px 2px;\n  border-radius: 8px;\n  padding: 16px;\n"]))),R=t(25),q=Object(v.createContext)({}),z=function(e){var n=e.children,t=Object(v.useState)(null),c=Object(R.a)(t,2),r=c[0],i=c[1];return Object(C.jsx)(q.Provider,{value:{userInfo:r,setUserInfo:i},children:n})},L=Object(v.memo)((function(e){var n=e.image,t=e.name,c=Object(v.useContext)(q).userInfo;console.log("aaaa");var r=!!c&&c.isAdmin;return Object(C.jsxs)(P,{children:[Object(C.jsx)(T,{src:n,height:160,width:160,alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb"}),Object(C.jsx)(V,{children:t}),r&&Object(C.jsx)(W,{children:"\u7de8\u96c6 "})]})})),P=y.a.div(s||(s=Object(w.a)(["\n  text-align: center;\n"]))),T=y.a.img(b||(b=Object(w.a)(["\n  border-radius: 100px;\n"]))),V=y.a.p(l||(l=Object(w.a)(["\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0;\n  color: #40514e;\n"]))),W=y.a.p(x||(x=Object(w.a)(["\n  text-decoration: underline;\n"]))),Y=Object(v.memo)((function(e){console.log("UserCard");var n=e.user;return Object(C.jsxs)(G,{children:[Object(C.jsx)(L,{image:n.image,name:n.name}),Object(C.jsx)(K,{children:Object(C.jsxs)("dl",{children:[Object(C.jsx)("dt",{children:" \u30e1\u30fc\u30eb"}),Object(C.jsxs)("dd",{children:[" ",n.email]}),Object(C.jsx)("dt",{children:" TEL"}),Object(C.jsx)("dd",{children:" 0120-117-177"}),Object(C.jsx)("dt",{children:" \u4f1a\u793e\u540d"}),Object(C.jsxs)("dd",{children:[" ",n.company,"\u4f1a\u793e"]})]})})]})})),K=y.a.dl(O||(O=Object(w.a)(["\n  text-align: left;\n  margin-bottom: 0px;\n  dt {\n    float: left;\n  }\n  dd {\n    padding-left: 32px;\n    padding-bottom: 8px;\n    overflow-wrap: break-word;\n  }\n"]))),N=function(){return Object(C.jsx)(Q,{children:"\xa9 2022 yoshimon Inc"})},Q=y.a.header(u||(u=Object(w.a)(["\n  background-color: #11999e;\n  color: #fff;\n  text-align: center;\n  padding: 8px 0;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n"]))),X=t(9),Z=function(){return Object(C.jsxs)($,{children:[Object(C.jsx)(_,{to:"/",children:" HOME"}),Object(C.jsx)(_,{to:"/users",children:" USERS"})]})},$=y.a.header(h||(h=Object(w.a)(["\n  background-color: #11999e;\n  color: #fff;\n  text-align: center;\n  padding: 8px 0;\n"]))),_=Object(y.a)(X.b)(p||(p=Object(w.a)(["\n  margin: 0 8px;\n"]))),ee=function(e){var n=e.children;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Z,{}),n,Object(C.jsx)(N,{})]})},ne=function(e){var n=e.children;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Z,{}),n]})},te=(t(39),t(4)),ce=function(){var e=Object(te.f)(),n=Object(v.useContext)(q).setUserInfo;return Object(C.jsxs)(re,{children:[Object(C.jsx)("h2",{children:"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u3067\u3059\u3002"}),Object(C.jsx)(S,{onClick:function(){n({isAdmin:!0}),e.push("/users")},children:"\u7ba1\u7406\u8005\u30dc\u30bf\u30f3"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)(S,{onClick:function(){n({isAdmin:!1}),e.push("/users")},children:"\u4e00\u822c\u30dc\u30bf\u30f3"})]})},re=y.a.div(f||(f=Object(w.a)(["\n  text-align: center;\n"]))),ie=t(26),ae=Object(ie.a)(Array(10).keys()).map((function(e){return{id:e,image:"https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=r-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80",name:"\u7530\u4e2d".concat(e),email:"abc@gmail.com",company:"abcCOmpany"}})),de=function(){var e=Object(v.useContext)(q),n=e.userInfo,t=e.setUserInfo;return Object(C.jsxs)(oe,{children:[Object(C.jsx)("h2",{children:"\u30e6\u30fc\u30b6\u4e00\u89a7"}),Object(C.jsx)(B,{}),Object(C.jsx)(S,{onClick:function(){return t({isAdmin:!n.isAdmin})},children:"\u5207\u308a\u66ff\u3048\u30dc\u30bf\u30f3"}),Object(C.jsx)(je,{children:ae.map((function(e){return Object(C.jsx)(Y,{user:e},e.id)}))})]})},oe=y.a.div(m||(m=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px;\n"]))),je=y.a.div(g||(g=Object(w.a)(["\n  padding-top: 40px;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1ft));\n  grid-gap: 20px;\n"]))),se=function(){return Object(C.jsx)(X.a,{children:Object(C.jsxs)(te.c,{children:[Object(C.jsx)(te.a,{exact:!0,path:"/",children:Object(C.jsx)(ee,{children:Object(C.jsx)(ce,{})})}),Object(C.jsx)(te.a,{path:"/users",children:Object(C.jsx)(ne,{children:Object(C.jsx)(de,{})})})]})})};function be(){return Object(C.jsx)(z,{children:Object(C.jsx)(se,{})})}var le=document.getElementById("root");Object(k.createRoot)(le).render(Object(C.jsx)(v.StrictMode,{children:Object(C.jsx)(be,{})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.a472599a.chunk.js.map