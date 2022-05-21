import{ab as x,S as w,i as y,s as T,e as p,k as E,$ as A,c as f,a as _,d as u,m as I,W as K,b as h,J as g,g as b,X as k,T as v,v as L,w as C,x as S,ac as $,y as F,q,o as M,B as D,Y as H,G as W}from"../chunks/vendor-7c140087.js";const J={displayMode:!1,throwOnError:!1};let N=/\\\[(.*)\\\]|\\\$(.*)\\\$|\\\((.*)\\\)/gm;function O(s){return s.replaceAll(N,function(t){return x.renderToString(t.slice(2,-2),J)})}let P=/latexmath:\[(.*)]/gm,R=/^\[latexmath][\s\n]*\+{4}[\s\n]*(.*)[\s\n]*\+{4}/gms,U=`++++
`,j="+++";function G(s){return s.replaceAll(R,function(a,e){return U+x.renderToString(e)+`
++++`}).replaceAll(P,function(a,e){return j+x.renderToString(e)+j})}function V(s){let t,n,a,e,r,l,c;return{c(){t=p("script"),a=p("link"),e=E(),r=p("div"),this.h()},l(o){const i=A('[data-svelte="svelte-f28ypy"]',document.head);t=f(i,"SCRIPT",{src:!0});var d=_(t);d.forEach(u),a=f(i,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),i.forEach(u),e=I(o),r=f(o,"DIV",{class:!0});var m=_(r);m.forEach(u),this.h()},h(){K(t.src,n="https://cdnjs.cloudflare.com/ajax/libs/asciidoctor.js/1.5.6/asciidoctor.min.js")||h(t,"src",n),h(a,"rel","stylesheet"),h(a,"href","https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"),h(a,"integrity","sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"),h(a,"crossorigin","anonymous"),h(r,"class","latex_rendered")},m(o,i){g(document.head,t),g(document.head,a),b(o,e,i),b(o,r,i),r.innerHTML=s[0],l||(c=k(t,"load",s[1]),l=!0)},p(o,[i]){i&1&&(r.innerHTML=o[0])},i:v,o:v,d(o){u(t),u(a),o&&u(e),o&&u(r),l=!1,c()}}}function X(s,t,n){let{doc:a=""}=t,e,r={convert:(c,o)=>c,unload:!0};function l(){window.Asciidoctor&&!!r.unload&&n(3,r=new window.Asciidoctor)}return L(l),s.$$set=c=>{"doc"in c&&n(2,a=c.doc)},s.$$.update=()=>{s.$$.dirty&13&&(n(0,e=G(a)),n(0,e=r.convert(e,{safe:"safe",header_footer:!0})),n(0,e=O(e)))},[e,l,a,r]}class z extends w{constructor(t){super();y(this,t,X,V,T,{doc:2})}}var Q=`= Online AsciiDoc renderer intergrated with Katex
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
`;function Y(s){let t,n,a,e,r,l,c,o;return r=new z({props:{doc:s[0]}}),{c(){t=p("div"),n=p("textarea"),a=E(),e=p("div"),C(r.$$.fragment),this.h()},l(i){t=f(i,"DIV",{class:!0});var d=_(t);n=f(d,"TEXTAREA",{placeholder:!0,class:!0}),_(n).forEach(u),a=I(d),e=f(d,"DIV",{class:!0});var m=_(e);S(r.$$.fragment,m),m.forEach(u),d.forEach(u),this.h()},h(){h(n,"placeholder","Enter your latex expression"),h(n,"class","svelte-12sxolj"),h(e,"class","latex_rendered_box svelte-12sxolj"),h(t,"class","container svelte-12sxolj")},m(i,d){b(i,t,d),g(t,n),$(n,s[0]),s[4](n),g(t,a),g(t,e),F(r,e,null),l=!0,c||(o=[k(n,"input",s[3]),k(n,"input",s[2])],c=!0)},p(i,[d]){d&1&&$(n,i[0]);const m={};d&1&&(m.doc=i[0]),r.$set(m)},i(i){l||(q(r.$$.fragment,i),l=!0)},o(i){M(r.$$.fragment,i),l=!1},d(i){i&&u(t),s[4](null),D(r),c=!1,H(o)}}}function B(s,t,n){let a=Q,e;function r(){let o=window.getComputedStyle(e),i=o.lineHeight,d=o.padding;(40+a.split(/\r\n|\r|\n/).length*parseInt(i,10)+2*parseInt(d,10)).toString()+i.slice(-2)}function l(){a=this.value,n(0,a)}function c(o){W[o?"unshift":"push"](()=>{e=o,n(1,e)})}return[a,e,r,l,c]}class Z extends w{constructor(t){super();y(this,t,B,Y,T,{})}}function ee(s){let t,n,a;return n=new Z({}),{c(){t=E(),C(n.$$.fragment),this.h()},l(e){A('[data-svelte="svelte-1n2ju3c"]',document.head).forEach(u),t=I(e),S(n.$$.fragment,e),this.h()},h(){document.title="Render"},m(e,r){b(e,t,r),F(n,e,r),a=!0},p:v,i(e){a||(q(n.$$.fragment,e),a=!0)},o(e){M(n.$$.fragment,e),a=!1},d(e){e&&u(t),D(n,e)}}}class ne extends w{constructor(t){super();y(this,t,null,ee,T,{})}}export{ne as default};
