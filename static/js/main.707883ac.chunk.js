(this.webpackJsonpasdlab9=this.webpackJsonpasdlab9||[]).push([[0],{312:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(56),i=r.n(c),s=r(17),u=r(314),o=r(315),j=r(319),b=r(158),h=r(24),l=r(159),O=r(161),d=function(e,t){return e%t},f=(Math.sqrt(5)-1)/2,x=function(e,t){return Math.floor(t*(e*f%1))},m=r(140),v=r(141),g=r(142),p=r(143),N=Object(p.Chance)(),y=N.unique((function(){return N.integer({min:0,max:255})}),100),A=function(e){for(var t=0,r=0;r<e.length;r++)t+=e.charCodeAt(r)^y[r%y.length];return t},k=function(e,t,r,n){return e+r*t+n*Math.pow(t,2)},C=function(){function e(t,r,n,a){Object(v.a)(this,e),this.hasher=t,this.c=r,this.d=n,this.size=a,this.arr=void 0,this.arr=Array(a),console.log(this.arr.length)}return Object(g.a)(e,[{key:"add",value:function(e){for(var t=0,r=A(e),n=this.hasher(r,this.size),a=n;void 0!==this.arr[a];){if(this.arr[a]==e)throw new Error("key is already in table");a=k(n,t+=1,this.c,this.d)%this.size}return this.arr[a]=e,t}}]),e}(),w=Object(m.a)("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",6);var S=r(11);var M=function(){var e=Object(n.useState)((function(){return d})),t=Object(s.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(200),i=Object(s.a)(c,2),f=i[0],m=i[1],v=Object(n.useState)(500),g=Object(s.a)(v,2),p=g[0],N=g[1],y=Object(n.useState)(37),A=Object(s.a)(y,2),k=A[0],M=A[1],D=Object(n.useState)(3),z=Object(s.a)(D,2),q=z[0],B=z[1],E=Object(n.useState)(void 0),G=Object(s.a)(E,2),J=G[0],F=G[1];return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)("h3",{children:"\u041c\u0435\u0442\u043e\u0434 \u0445\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{type:"radio",radioGroup:"hasher",checked:r===d,onChange:function(e){return e.target.checked&&a((function(){return d}))}}),"\u0425\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0435\u043d\u0438\u0435\u043c",Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"radio",radioGroup:"hasher",checked:r===x,onChange:function(e){return e.target.checked&&a((function(){return x}))}}),"\u0425\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435\u043c"]}),Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"number",min:2,value:k,max:1e4,onChange:function(e){return!isNaN(e.target.valueAsNumber)&&M(Math.floor(e.target.valueAsNumber))}}),"C",Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"number",min:2,value:q,max:1e4,onChange:function(e){return!isNaN(e.target.valueAsNumber)&&B(Math.floor(e.target.valueAsNumber))}}),"D",Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"number",min:2,value:p,max:1e4,onChange:function(e){return!isNaN(e.target.valueAsNumber)&&N(e.target.valueAsNumber)}}),"\u0420\u0430\u0437\u043c\u0435\u0440 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"number",min:2,value:f,max:1e4,onChange:function(e){return!isNaN(e.target.valueAsNumber)&&m(e.target.valueAsNumber)}}),"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u044e\u0447\u0435\u0439",Object(S.jsx)("br",{}),Object(S.jsx)("button",{onClick:function(){return F(function(e,t,r,n,a){var c=new Array(n),i=new C(e,t,r,a);c.fill(0);for(var s=0;s<n;s++){var u=w(),o=i.add(u);c[s]=o}return c}(r,k,q,f,p))},children:"\u0412\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c"}),J&&Object(S.jsxs)(S.Fragment,{children:[" ","(",Object(S.jsx)(u.a,{width:"100%",height:400,children:Object(S.jsxs)(o.a,{data:J,margin:{bottom:20},children:[Object(S.jsx)(j.a,{strokeDasharray:"3 3"}),Object(S.jsx)(b.a,{children:Object(S.jsx)(h.a,{value:"\u041d\u043e\u043c\u0435\u0440 \u043a\u043b\u044e\u0447\u0430",position:"bottom",offset:-5})}),Object(S.jsx)(l.a,{allowDecimals:!1,children:Object(S.jsx)(h.a,{value:"\u0414\u043b\u0438\u043d\u0430 \u043f\u043e\u0438\u0441\u043a\u0430",position:"left",angle:270,offset:-30,style:{textAnchor:"middle"}})}),Object(S.jsx)(O.a,{dataKey:function(e){return e||0},fill:"#2B2D42"})]})}),")",Object(S.jsxs)("span",{children:["\u0421\u0443\u043c\u043c\u0430 \u0434\u043b\u0438\u043d: ",J.reduce((function(e,t){return e+t}))]})]}),Object(S.jsx)("br",{})]})};i.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(M,{})}),document.getElementById("root"))}},[[312,1,2]]]);
//# sourceMappingURL=main.707883ac.chunk.js.map