(this["webpackJsonpreact-memory-card"]=this["webpackJsonpreact-memory-card"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/meme1.583d971f.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme2.dbce4431.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme3.daf0f1c0.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme4.4a1d1e74.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme5.f480d404.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme6.72300884.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme7.9ca6d326.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme8.b6630928.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme9.b43470e6.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme10.d051ab50.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme11.504bb9c9.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme12.944b1a5f.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme13.1b24ea73.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme14.ff0217b1.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme15.3f2e6f1f.jpg"},function(e,t,a){e.exports=a.p+"static/media/meme16.e9c43003.jpg"},function(e,t,a){e.exports=a.p+"static/media/winImage.9ed4063a.jpeg"},,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(5),m=a.n(i),r=a(23),o=a(2),s=(a(29),function(e){return c.a.createElement("div",{className:"score"},c.a.createElement("div",null,"Score: ",e.score),c.a.createElement("div",null,"High Score: ",e.highScore))}),p=function(e){for(var t,a,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[--n],e[n]=e[t],e[t]=a;return e},d=a(6),l=a.n(d),u=a(7),f=a.n(u),g=a(8),j=a.n(g),b=a(9),x=a.n(b),E=a(10),h=a.n(E),v=a(11),k=a.n(v),O=a(12),S=a.n(O),C=a(13),y=a.n(C),N=a(14),M=a.n(N),w=a(15),H=a.n(w),I=a(16),J=a.n(I),A=a(17),B=a.n(A),L=a(18),W=a.n(L),q=a(19),z=a.n(q),D=a(20),F=a.n(D),G=a(21),K=a.n(G),P=[l.a,f.a,j.a,x.a,h.a,k.a,S.a,y.a,M.a,H.a,J.a,B.a,W.a,z.a,F.a,K.a],Q=function(e){return p(P).map((function(t){return c.a.createElement("div",{className:"card-div",key:t,onClick:e.handleClick},c.a.createElement("img",{className:"card-image",src:t,alt:"",name:t}))}))},R=a(22),T=a.n(R),U=function(e){return c.a.createElement("div",{className:"congrats",onClick:e.onClick},c.a.createElement("img",{src:T.a,alt:"Leonardo Happy"}),c.a.createElement("div",null,"Congrats you Won!"))};var V=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1],m=Object(n.useState)(0),p=Object(o.a)(m,2),d=p[0],l=p[1],u=Object(n.useState)(0),f=Object(o.a)(u,2),g=f[0],j=f[1],b=Object(n.useState)([]),x=Object(o.a)(b,2),E=x[0],h=x[1];return a?c.a.createElement(U,{onClick:function(){i(!1),l(0),j(d),h([])}}):c.a.createElement("div",{className:"App"},c.a.createElement("header",null,"Meme Card"),c.a.createElement(s,{score:d,highScore:g}),c.a.createElement("div",{className:"game-cards"},c.a.createElement(Q,{handleClick:function(e){var t=e.target.name;d===P.length-1&&i(!0),E.includes(t)?(d>g&&j(d),l(0),h([])):(l(d+1),h([].concat(Object(r.a)(E),[t])))}})))};m.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(V,null)),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.789f196c.chunk.js.map