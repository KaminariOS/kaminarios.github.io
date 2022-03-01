import{a8 as b,S as T,i as E,s as I,e as p,k as A,$ as j,c as f,a as _,d as h,m as C,W as S,b as u,J as g,g as x,X as k,T as v,v as F,w as q,x as M,a9 as y,y as D,q as K,o as $,B as L,Y as H,G as W}from"./vendor-4599503f.js";const J={displayMode:!1,throwOnError:!1};let N=/\\\[(.*)\\\]|\\\$(.*)\\\$|\\\((.*)\\\)/gm;function O(s){return s.replaceAll(N,function(e){return b.renderToString(e.slice(2,-2),J)})}let P=/latexmath:\[(.*)]/gm,U=/^\[latexmath][\s\n]*\+{4}[\s\n]*(.*)[\s\n]*\+{4}/gms,G=`++++
`,w="+++";function R(s){return s.replaceAll(U,function(r,t){return G+b.renderToString(t)+`
++++`}).replaceAll(P,function(r,t){return w+b.renderToString(t)+w})}function V(s){let e,n,r,t,i,l,c;return{c(){e=p("script"),r=p("link"),t=A(),i=p("div"),this.h()},l(o){const a=j('[data-svelte="svelte-f28ypy"]',document.head);e=f(a,"SCRIPT",{src:!0});var d=_(e);d.forEach(h),r=f(a,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),a.forEach(h),t=C(o),i=f(o,"DIV",{class:!0});var m=_(i);m.forEach(h),this.h()},h(){S(e.src,n="https://cdnjs.cloudflare.com/ajax/libs/asciidoctor.js/1.5.6/asciidoctor.min.js")||u(e,"src",n),u(r,"rel","stylesheet"),u(r,"href","https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"),u(r,"integrity","sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"),u(r,"crossorigin","anonymous"),u(i,"class","latex_rendered")},m(o,a){g(document.head,e),g(document.head,r),x(o,t,a),x(o,i,a),i.innerHTML=s[0],l||(c=k(e,"load",s[1]),l=!0)},p(o,[a]){a&1&&(i.innerHTML=o[0])},i:v,o:v,d(o){h(e),h(r),o&&h(t),o&&h(i),l=!1,c()}}}function X(s,e,n){let{doc:r=""}=e,t,i={convert:(c,o)=>c,unload:!0};function l(){window.Asciidoctor&&!!i.unload&&n(3,i=new window.Asciidoctor)}return F(l),s.$$set=c=>{"doc"in c&&n(2,r=c.doc)},s.$$.update=()=>{s.$$.dirty&13&&(n(0,t=R(r)),n(0,t=i.convert(t,{safe:"safe",header_footer:!0})),n(0,t=O(t)))},[t,l,r,i]}class z extends T{constructor(e){super();E(this,e,X,V,I,{doc:2})}}var Q=`= Online AsciiDoc renderer intergrated with Katex
kaminarios <charnkouha@gmail.com>
3.0, July 29, 2022: AsciiDoc article template
:toc:
:icons: font
:url-quickref: https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/
:nofooter:

== Usage
First, you can write Latex  or part of Markdown in this renderer without any knowledge in AsciiDoc.
For example, \\$\\theta(n)\\$, \\[\\theta(n)\\], \\(\\theta(n)\\).

- Markdown unordered list
    - fsdg
- mark

## Markdown header

Markdown break
---

For more information about Markdown compatibility. refer to https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/#markdown-compatibility[here].


The syntax of this render is almost 100% compatible with AsciiDoc syntax. In terms of Science, Technology, Engineering and Math (STEM) expressions, only \`[latexmath]\` is supported (\`:stem:\` header not needed).

For example: inline latexmath:[\\theta(n)] and block
[latexmath]
++++
	i \\hbar \\frac{\\partial}{\\partial t}\\Psi(\\mathbf{r},t) = \\hat H \\Psi(\\mathbf{r},t)
++++


Content entered directly below the header but before the first section heading is called the preamble.


== First level heading

This is a paragraph with a *bold* word and an _italicized_ word.

.Image caption
image::warrior-girl-katana-fantasy-art-uhdpaper.com-4K-8.1473.jpg[I am the image alt text.]

This is another paragraph.footnote:[I am footnote text and will be displayed at the bottom of the article.]

=== Second level heading

.Unordered list title
* list item 1
** nested list item
*** nested nested list item 1
*** nested nested list item 2
* list item 2

This is a paragraph.

.Example block title
====
Content in an example block is subject to normal substitutions.
====

.Sidebar title
****
Sidebars contain aside text and are subject to normal substitutions.
****

==== Third level heading

[#id-for-listing-block]
.Listing block title
----
Content in a listing block is subject to verbatim substitutions.
Listing block content is commonly used to preserve code input.
----

===== Fourth level heading

.Table title
|===
|Column heading 1 |Column heading 2

|Column 1, row 1
|Column 2, row 1

|Column 1, row 2
|Column 2, row 2
|===

====== Fifth level heading

[quote,firstname lastname,movie title]
____
I am a block quote or a prose excerpt.
I am subject to normal substitutions.
____

[verse,firstname lastname,poem title and more]
____
I am a verse block.
  Indents and endlines are preserved in verse blocks.
____

== First level heading

TIP: There are five admonition labels: Tip, Note, Important, Caution and Warning.

// I am a comment and won't be rendered.

. ordered list item
.. nested ordered list item
. ordered list item

The text at the end of this sentence is cross referenced to <<_third_level_heading,the third level heading>>

== First level heading

This is a link to the https://docs.asciidoctor.org/home/[Asciidoctor documentation].
This is an attribute reference {url-quickref}[that links this text to the AsciiDoc Syntax Quick Reference].
`;function Y(s){let e,n,r,t,i,l,c,o;return i=new z({props:{doc:s[0]}}),{c(){e=p("div"),n=p("textarea"),r=A(),t=p("div"),q(i.$$.fragment),this.h()},l(a){e=f(a,"DIV",{class:!0});var d=_(e);n=f(d,"TEXTAREA",{placeholder:!0,class:!0}),_(n).forEach(h),r=C(d),t=f(d,"DIV",{class:!0});var m=_(t);M(i.$$.fragment,m),m.forEach(h),d.forEach(h),this.h()},h(){u(n,"placeholder","Enter your latex expression"),u(n,"class","svelte-12sxolj"),u(t,"class","latex_rendered_box svelte-12sxolj"),u(e,"class","container svelte-12sxolj")},m(a,d){x(a,e,d),g(e,n),y(n,s[0]),s[4](n),g(e,r),g(e,t),D(i,t,null),l=!0,c||(o=[k(n,"input",s[3]),k(n,"input",s[2])],c=!0)},p(a,[d]){d&1&&y(n,a[0]);const m={};d&1&&(m.doc=a[0]),i.$set(m)},i(a){l||(K(i.$$.fragment,a),l=!0)},o(a){$(i.$$.fragment,a),l=!1},d(a){a&&h(e),s[4](null),L(i),c=!1,H(o)}}}function B(s,e,n){let r=Q,t;function i(){let o=window.getComputedStyle(t),a=o.lineHeight,d=o.padding;(40+r.split(/\r\n|\r|\n/).length*parseInt(a,10)+2*parseInt(d,10)).toString()+a.slice(-2)}function l(){r=this.value,n(0,r)}function c(o){W[o?"unshift":"push"](()=>{t=o,n(1,t)})}return[r,t,i,l,c]}class ee extends T{constructor(e){super();E(this,e,B,Y,I,{})}}export{ee as K};
