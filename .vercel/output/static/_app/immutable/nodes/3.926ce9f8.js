import{s as W,n as j,o as X,r as Y}from"../chunks/scheduler.6a4f3e46.js";import{S as Z,i as $,g as v,s as k,m as F,C as ee,h,f as a,c as L,j as E,n as G,x as K,k as u,y as n,a as H,H as te,A as ae,z as N}from"../chunks/index.6d7721eb.js";import{S as le}from"../chunks/siema.min.5638367e.js";const se=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{document:O}=se;function J(i){let o,l,r,f,p="×",b,_,x=i[1].acf.text+"",I,w;return{c(){o=v("div"),l=v("div"),r=v("p"),f=v("button"),f.textContent=p,b=k(),_=new te(!1),this.h()},l(c){o=h(c,"DIV",{class:!0});var T=E(o);l=h(T,"DIV",{});var g=E(l);r=h(g,"P",{class:!0});var m=E(r);f=h(m,"BUTTON",{["data-svelte-h"]:!0}),K(f)!=="svelte-a5ex69"&&(f.textContent=p),m.forEach(a),b=L(g),_=ae(g,!1),g.forEach(a),T.forEach(a),this.h()},h(){u(r,"class","w100 center"),_.a=null,u(o,"class","modal p25")},m(c,T){H(c,o,T),n(o,l),n(l,r),n(r,f),n(l,b),_.m(x,l),I||(w=[N(f,"click",i[2]),N(l,"click",i[2]),N(l,"keydown",i[2])],I=!0)},p:j,d(c){c&&a(o),I=!1,Y(w)}}}function ne(i){let o,l,r,f,p,b,_,x=i[1].title.rendered+"",I,w,c,T,g,m,t,S,z,s,A,C,V,D,B='<span class="index-current"></span><span>/</span><span class="index-total"></span>';O.title=o=i[1].title.rendered+" - Maxime Delvaux";let d=i[0]&&J(i);return{c(){l=v("meta"),r=v("meta"),f=k(),p=v("header"),b=v("div"),_=v("h1"),I=F(x),w=k(),c=v("a"),T=F("×"),g=k(),d&&d.c(),m=k(),t=v("main"),S=v("div"),z=k(),s=v("button"),A=k(),C=v("button"),V=k(),D=v("div"),D.innerHTML=B,this.h()},l(e){const y=ee("svelte-10z843j",O.head);l=h(y,"META",{name:!0,content:!0}),r=h(y,"META",{name:!0,content:!0}),y.forEach(a),f=L(e),p=h(e,"HEADER",{class:!0});var U=E(p);b=h(U,"DIV",{class:!0});var q=E(b);_=h(q,"H1",{class:!0});var P=E(_);I=G(P,x),P.forEach(a),w=L(q),c=h(q,"A",{"data-sveltekit-preload-data":!0,class:!0,href:!0});var R=E(c);T=G(R,"×"),R.forEach(a),q.forEach(a),U.forEach(a),g=L(e),d&&d.l(e),m=L(e),t=h(e,"MAIN",{});var M=E(t);S=h(M,"DIV",{class:!0});var Q=E(S);Q.forEach(a),z=L(M),s=h(M,"BUTTON",{class:!0}),E(s).forEach(a),A=L(M),C=h(M,"BUTTON",{class:!0}),E(C).forEach(a),V=L(M),D=h(M,"DIV",{class:!0,["data-svelte-h"]:!0}),K(D)!=="svelte-zzb94y"&&(D.innerHTML=B),M.forEach(a),this.h()},h(){u(l,"name","og:title"),u(l,"content",i[1].title.rendered+" - Maxime Delvaux"),u(r,"name","twitter:title"),u(r,"content",i[1].title.rendered+" - Maxime Delvaux"),u(_,"class","p25"),u(c,"data-sveltekit-preload-data","hover"),u(c,"class","block p25"),u(c,"href","./#"+i[1].id),u(b,"class","flex jc-sb w100"),u(p,"class","fixed t0 l0 r0 z10"),u(S,"class","siema"),u(s,"class","prev fixed b0 l0"),u(C,"class","next fixed b0 r0"),u(D,"class","fixed b0 l0 p25")},m(e,y){n(O.head,l),n(O.head,r),H(e,f,y),H(e,p,y),n(p,b),n(b,_),n(_,I),n(b,w),n(b,c),n(c,T),H(e,g,y),d&&d.m(e,y),H(e,m,y),H(e,t,y),n(t,S),S.innerHTML=i[3],n(t,z),n(t,s),n(t,A),n(t,C),n(t,V),n(t,D)},p(e,[y]){y&2&&o!==(o=e[1].title.rendered+" - Maxime Delvaux")&&(O.title=o),e[0]?d?d.p(e,y):(d=J(e),d.c(),d.m(m.parentNode,m)):d&&(d.d(1),d=null)},i:j,o:j,d(e){e&&(a(f),a(p),a(g),a(m),a(t)),a(l),a(r),d&&d.d(e)}}}function re(i,o,l){let{data:r}=o;const{post:f}=r;let p;function b(){l(0,p=!p)}let _=f.content.rendered.replace(/src/gi,"data-src").replace(/wp-image-/gi,"lazy img-");return X(()=>{function x(){document.querySelector(".index-current").innerHTML=this.currentSlide+1}document.querySelector(".index-total").innerHTML=document.querySelector(".siema").childElementCount;const I=new le({duration:0,draggable:!0,loop:!0,onInit:x,onChange:x}),w=document.querySelector(".prev"),c=document.querySelector(".next");w.addEventListener("click",()=>I.prev()),c.addEventListener("click",()=>I.next());var T=[].slice.call(document.querySelectorAll("img"));if(typeof IntersectionObserver<"u"){let m=new IntersectionObserver(function(t,S){t.forEach(function(z){if(z.isIntersecting){let s=z.target;s.src=s.dataset.src,s.srcset=s.dataset.srcset,s.classList.remove("lazy"),s.classList.add("loaded"),m.unobserve(s)}})});T.forEach(function(t){m.observe(t)})}var g=[].slice.call(document.querySelectorAll("video"));if(typeof IntersectionObserver<"u"){let m=new IntersectionObserver(function(t,S){t.forEach(function(z){if(z.isIntersecting){let s=z.target;s.src=s.dataset.src,s.classList.remove("lazy"),s.classList.add("loaded"),m.unobserve(s)}})});g.forEach(function(t){m.observe(t)})}}),i.$$set=x=>{"data"in x&&l(4,r=x.data)},[p,f,b,_,r]}class de extends Z{constructor(o){super(),$(this,o,re,ne,W,{data:4})}}export{de as component};
