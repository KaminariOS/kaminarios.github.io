import{S as g,i as v,s as $,w as y,x as k,y as w,q as f,o as _,B as b,k as B,e as j,$ as q,d as u,m as x,c as C,a as E,b as S,g as h,p as D,aa as I,n as P}from"../chunks/vendor-fabc283b.js";import{B as R}from"../chunks/BlogCard-961608dd.js";function d(c,o,n){const s=c.slice();return s[1]=o[n],s[3]=n,s}function m(c){let o,n;return o=new R({props:{post:c[1],i:c[3]}}),{c(){y(o.$$.fragment)},l(s){k(o.$$.fragment,s)},m(s,r){w(o,s,r),n=!0},p(s,r){const t={};r&1&&(t.post=s[1]),o.$set(t)},i(s){n||(f(o.$$.fragment,s),n=!0)},o(s){_(o.$$.fragment,s),n=!1},d(s){b(o,s)}}}function V(c){let o,n,s,r=c[0],t=[];for(let e=0;e<r.length;e+=1)t[e]=m(d(c,r,e));const p=e=>_(t[e],1,1,()=>{t[e]=null});return{c(){o=B(),n=j("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){q('[data-svelte="svelte-1nhltcj"]',document.head).forEach(u),o=x(e),n=C(e,"DIV",{class:!0});var a=E(n);for(let i=0;i<t.length;i+=1)t[i].l(a);a.forEach(u),this.h()},h(){document.title="\u9032\u6483\u306ERustacean",S(n,"class","grid-container svelte-1rhf0ke")},m(e,l){h(e,o,l),h(e,n,l);for(let a=0;a<t.length;a+=1)t[a].m(n,null);s=!0},p(e,[l]){if(l&1){r=e[0];let a;for(a=0;a<r.length;a+=1){const i=d(e,r,a);t[a]?(t[a].p(i,l),f(t[a],1)):(t[a]=m(i),t[a].c(),f(t[a],1),t[a].m(n,null))}for(P(),a=r.length;a<t.length;a+=1)p(a);D()}},i(e){if(!s){for(let l=0;l<r.length;l+=1)f(t[l]);s=!0}},o(e){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)_(t[l]);s=!1},d(e){e&&u(o),e&&u(n),I(t,e)}}}async function G({fetch:c}){const o="/blog.json",n=await c(o);return n.ok?{props:{posts:await n.json()}}:{status:n.status,error:new Error(`Could not load ${o}`)}}function z(c,o,n){let{posts:s}=o;return c.$$set=r=>{"posts"in r&&n(0,s=r.posts)},[s]}class H extends g{constructor(o){super();v(this,o,z,V,$,{posts:0})}}export{H as default,G as load};
