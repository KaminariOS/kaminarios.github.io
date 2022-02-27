import{S as k,i as w,s as H,e as _,k as x,$ as j,c as m,d as u,m as y,a as v,b as f,J as h,g as E,T as b,a8 as C,w as q,x as L,f as I,a9 as K,y as N,X as A,q as R,o as V,B as X,Z as M,G as B,t as P,h as S}from"../chunks/vendor-42c869db.js";const G=!0,J=!1;function U(o){let t,e,n;return{c(){t=_("link"),e=x(),n=_("div"),this.h()},l(s){const a=j('[data-svelte="svelte-1sunfh9"]',document.head);t=m(a,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),a.forEach(u),e=y(s),n=m(s,"DIV",{class:!0});var l=v(n);l.forEach(u),this.h()},h(){f(t,"rel","stylesheet"),f(t,"href","https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"),f(t,"integrity","sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"),f(t,"crossorigin","anonymous"),f(n,"class","latex_rendered")},m(s,a){h(document.head,t),E(s,e,a),E(s,n,a),n.innerHTML=o[0]},p(s,[a]){a&1&&(n.innerHTML=s[0])},i:b,o:b,d(s){u(t),s&&u(e),s&&u(n)}}}function F(o,t,e){let n,{latex:s=""}=t;const a={throwOnError:!1};return o.$$set=l=>{"latex"in l&&e(1,s=l.latex)},o.$$.update=()=>{o.$$.dirty&2&&e(0,n=C.renderToString(s,a))},[n,s]}class O extends k{constructor(t){super();w(this,t,F,U,H,{latex:1})}}function Q(o){let t,e,n,s,a,l,p,d;return a=new O({props:{latex:o[0]}}),{c(){t=_("div"),e=_("textarea"),n=x(),s=_("div"),q(a.$$.fragment),this.h()},l(r){t=m(r,"DIV",{class:!0});var c=v(t);e=m(c,"TEXTAREA",{style:!0,placeholder:!0,class:!0}),v(e).forEach(u),n=y(c),s=m(c,"DIV",{class:!0});var i=v(s);L(a.$$.fragment,i),i.forEach(u),c.forEach(u),this.h()},h(){I(e,"height",o[1]),f(e,"placeholder","Enter your latex expression"),f(e,"class","svelte-1ipf9js"),f(s,"class","latex_rendered_box svelte-1ipf9js"),f(t,"class","container svelte-1ipf9js")},m(r,c){E(r,t,c),h(t,e),K(e,o[0]),o[5](e),h(t,n),h(t,s),N(a,s,null),l=!0,p||(d=[A(e,"input",o[4]),A(e,"input",o[3])],p=!0)},p(r,[c]){(!l||c&2)&&I(e,"height",r[1]),c&1&&K(e,r[0]);const i={};c&1&&(i.latex=r[0]),a.$set(i)},i(r){l||(R(a.$$.fragment,r),l=!0)},o(r){V(a.$$.fragment,r),l=!1},d(r){r&&u(t),o[5](null),X(a),p=!1,M(d)}}}function W(o,t,e){let n=String.raw`i \hbar \frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat H \Psi(\mathbf{r},t)`,s="2em",a;function l(){let r=window.getComputedStyle(a),c=r.lineHeight,i=r.padding;e(1,s=(n.split(/\r\n|\r|\n/).length*parseInt(c,10)+2*parseInt(i,10)).toString()+c.slice(-2))}function p(){n=this.value,e(0,n)}function d(r){B[r?"unshift":"push"](()=>{a=r,e(2,a)})}return[n,s,a,l,p,d]}class Y extends k{constructor(t){super();w(this,t,W,Q,H,{})}}function Z(o){let t,e,n,s,a,l,p,d,r,c;return l=new Y({}),{c(){t=x(),e=_("div"),n=_("h1"),s=P("About this app"),a=x(),q(l.$$.fragment),p=x(),d=_("pre"),r=P("npm init svelte@next"),this.h()},l(i){j('[data-svelte="svelte-1ine71f"]',document.head).forEach(u),t=y(i),e=m(i,"DIV",{class:!0});var g=v(e);n=m(g,"H1",{});var T=v(n);s=S(T,"About this app"),T.forEach(u),a=y(g),L(l.$$.fragment,g),p=y(g),d=m(g,"PRE",{});var D=v(d);r=S(D,"npm init svelte@next"),D.forEach(u),g.forEach(u),this.h()},h(){document.title="About",f(e,"class","content svelte-vomwv8")},m(i,$){E(i,t,$),E(i,e,$),h(e,n),h(n,s),h(e,a),N(l,e,null),h(e,p),h(e,d),h(d,r),c=!0},p:b,i(i){c||(R(l.$$.fragment,i),c=!0)},o(i){V(l.$$.fragment,i),c=!1},d(i){i&&u(t),i&&u(e),X(l)}}}const ee=J,te=G,se=!0;class ae extends k{constructor(t){super();w(this,t,null,Z,H,{})}}export{ae as default,ee as hydrate,se as prerender,te as router};
