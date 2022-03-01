import{a8 as b,S as T,i as E,s as I,e as p,k as A,$ as j,c as f,a as _,d as h,m as C,Y as S,b as u,J as g,g as x,X as k,T as v,v as F,w as q,x as M,a9 as y,y as D,q as K,o as $,B as L,Z as H,G as J}from"./vendor-fabc283b.js";const N={displayMode:!1,throwOnError:!1};let O=/\\\[(.*)\\\]|\\\$(.*)\\\$|\\\((.*)\\\)/gm;function P(s){return s.replaceAll(O,function(e){return b.renderToString(e.slice(2,-2),N)})}let U=/latexmath:\[(.*)]/gm,W=/^\[latexmath][\s\n]*\+{4}[\s\n]*(.*)[\s\n]*\+{4}/gms,G=`++++
`,w="+++";function R(s){return s.replaceAll(W,function(a,t){return G+b.renderToString(t)+`
++++`}).replaceAll(U,function(a,t){return w+b.renderToString(t)+w})}function V(s){let e,n,a,t,r,l,c;return{c(){e=p("script"),a=p("link"),t=A(),r=p("div"),this.h()},l(o){const i=j('[data-svelte="svelte-f28ypy"]',document.head);e=f(i,"SCRIPT",{src:!0});var d=_(e);d.forEach(h),a=f(i,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),i.forEach(h),t=C(o),r=f(o,"DIV",{class:!0});var m=_(r);m.forEach(h),this.h()},h(){S(e.src,n="https://cdnjs.cloudflare.com/ajax/libs/asciidoctor.js/1.5.6/asciidoctor.min.js")||u(e,"src",n),u(a,"rel","stylesheet"),u(a,"href","https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"),u(a,"integrity","sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"),u(a,"crossorigin","anonymous"),u(r,"class","latex_rendered")},m(o,i){g(document.head,e),g(document.head,a),x(o,t,i),x(o,r,i),r.innerHTML=s[0],l||(c=k(e,"load",s[1]),l=!0)},p(o,[i]){i&1&&(r.innerHTML=o[0])},i:v,o:v,d(o){h(e),h(a),o&&h(t),o&&h(r),l=!1,c()}}}function X(s,e,n){let{doc:a=""}=e,t,r={convert:(c,o)=>c,unload:!0};function l(){window.Asciidoctor&&!!r.unload&&n(3,r=new window.Asciidoctor)}return F(l),s.$$set=c=>{"doc"in c&&n(2,a=c.doc)},s.$$.update=()=>{s.$$.dirty&13&&(n(0,t=R(a)),n(0,t=r.convert(t,{safe:"safe",header_footer:!0})),n(0,t=P(t)))},[t,l,a,r]}class z extends T{constructor(e){super();E(this,e,X,V,I,{doc:2})}}var Q=`= Online AsciiDoc renderer intergrated with Katex\r
kaminarios <charnkouha@gmail.com>\r
3.0, July 29, 2022: AsciiDoc article template\r
:toc:\r
:icons: font\r
:url-quickref: https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/\r
:nofooter:\r
\r
== Usage\r
First, you can write Latex  or part of Markdown in this renderer without any knowledge in AsciiDoc.\r
For example, \\$\\theta(n)\\$, \\[\\theta(n)\\], \\(\\theta(n)\\).\r
\r
- Markdown unordered list\r
    - fsdg\r
- mark\r
\r
## Markdown header\r
\r
Markdown break\r
---\r
\r
For more information about Markdown compatibility. refer to https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/#markdown-compatibility[here].\r
\r
\r
The syntax of this render is almost 100% compatible with AsciiDoc syntax. In terms of Science, Technology, Engineering and Math (STEM) expressions, only \`[latexmath]\` is supported (\`:stem:\` header not needed).\r
\r
For example: inline latexmath:[\\theta(n)] and block\r
[latexmath]\r
++++\r
	i \\hbar \\frac{\\partial}{\\partial t}\\Psi(\\mathbf{r},t) = \\hat H \\Psi(\\mathbf{r},t)\r
++++\r
\r
\r
Content entered directly below the header but before the first section heading is called the preamble.\r
\r
\r
== First level heading\r
\r
This is a paragraph with a *bold* word and an _italicized_ word.\r
\r
.Image caption\r
image::warrior-girl-katana-fantasy-art-uhdpaper.com-4K-8.1473.jpg[I am the image alt text.]\r
\r
This is another paragraph.footnote:[I am footnote text and will be displayed at the bottom of the article.]\r
\r
=== Second level heading\r
\r
.Unordered list title\r
* list item 1\r
** nested list item\r
*** nested nested list item 1\r
*** nested nested list item 2\r
* list item 2\r
\r
This is a paragraph.\r
\r
.Example block title\r
====\r
Content in an example block is subject to normal substitutions.\r
====\r
\r
.Sidebar title\r
****\r
Sidebars contain aside text and are subject to normal substitutions.\r
****\r
\r
==== Third level heading\r
\r
[#id-for-listing-block]\r
.Listing block title\r
----\r
Content in a listing block is subject to verbatim substitutions.\r
Listing block content is commonly used to preserve code input.\r
----\r
\r
===== Fourth level heading\r
\r
.Table title\r
|===\r
|Column heading 1 |Column heading 2\r
\r
|Column 1, row 1\r
|Column 2, row 1\r
\r
|Column 1, row 2\r
|Column 2, row 2\r
|===\r
\r
====== Fifth level heading\r
\r
[quote,firstname lastname,movie title]\r
____\r
I am a block quote or a prose excerpt.\r
I am subject to normal substitutions.\r
____\r
\r
[verse,firstname lastname,poem title and more]\r
____\r
I am a verse block.\r
  Indents and endlines are preserved in verse blocks.\r
____\r
\r
== First level heading\r
\r
TIP: There are five admonition labels: Tip, Note, Important, Caution and Warning.\r
\r
// I am a comment and won't be rendered.\r
\r
. ordered list item\r
.. nested ordered list item\r
. ordered list item\r
\r
The text at the end of this sentence is cross referenced to <<_third_level_heading,the third level heading>>\r
\r
== First level heading\r
\r
This is a link to the https://docs.asciidoctor.org/home/[Asciidoctor documentation].\r
This is an attribute reference {url-quickref}[that links this text to the AsciiDoc Syntax Quick Reference].\r
`;function Y(s){let e,n,a,t,r,l,c,o;return r=new z({props:{doc:s[0]}}),{c(){e=p("div"),n=p("textarea"),a=A(),t=p("div"),q(r.$$.fragment),this.h()},l(i){e=f(i,"DIV",{class:!0});var d=_(e);n=f(d,"TEXTAREA",{placeholder:!0,class:!0}),_(n).forEach(h),a=C(d),t=f(d,"DIV",{class:!0});var m=_(t);M(r.$$.fragment,m),m.forEach(h),d.forEach(h),this.h()},h(){u(n,"placeholder","Enter your latex expression"),u(n,"class","svelte-12sxolj"),u(t,"class","latex_rendered_box svelte-12sxolj"),u(e,"class","container svelte-12sxolj")},m(i,d){x(i,e,d),g(e,n),y(n,s[0]),s[4](n),g(e,a),g(e,t),D(r,t,null),l=!0,c||(o=[k(n,"input",s[3]),k(n,"input",s[2])],c=!0)},p(i,[d]){d&1&&y(n,i[0]);const m={};d&1&&(m.doc=i[0]),r.$set(m)},i(i){l||(K(r.$$.fragment,i),l=!0)},o(i){$(r.$$.fragment,i),l=!1},d(i){i&&h(e),s[4](null),L(r),c=!1,H(o)}}}function B(s,e,n){let a=Q,t;function r(){let o=window.getComputedStyle(t),i=o.lineHeight,d=o.padding;(40+a.split(/\r\n|\r|\n/).length*parseInt(i,10)+2*parseInt(d,10)).toString()+i.slice(-2)}function l(){a=this.value,n(0,a)}function c(o){J[o?"unshift":"push"](()=>{t=o,n(1,t)})}return[a,t,r,l,c]}class ee extends T{constructor(e){super();E(this,e,B,Y,I,{})}}export{ee as K};
