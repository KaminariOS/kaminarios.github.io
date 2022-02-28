import{a8 as w,S as A,i as F,s as q,e as p,k as y,$ as M,c as f,a as k,d,m as T,Y as D,b as h,J as g,g as E,a9 as I,X as v,T as C,Z as K,G as L}from"./vendor-fabc283b.js";const H={displayMode:!1,throwOnError:!1};let J=/\\\[(.*)\\\]|\\\$(.*)\\\$|\\\((.*)\\\)/gm;function N(r){return r.replaceAll(J,function(i){return w.renderToString(i.slice(2,-2),H)})}let O=/latexmath:\[(.*)]/gm,P=/^\[latexmath][\s\n]*\+{4}[\s\n]*(.*)[\s\n]*\+{4}/gms,U=`++++
`,S="+++";function W(r){return r.replaceAll(P,function(n,t){return U+w.renderToString(t)+`
++++`}).replaceAll(O,function(n,t){return S+w.renderToString(t)+S})}var G=`= Online AsciiDoc renderer intergrated with Katex\r
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
`;function R(r){let i,l,n,t,a,s,u,c,m,_;return{c(){i=p("script"),n=p("link"),t=y(),a=p("div"),s=p("textarea"),u=y(),c=p("div"),this.h()},l(e){const o=M('[data-svelte="svelte-kb9sh7"]',document.head);i=f(o,"SCRIPT",{src:!0});var x=k(i);x.forEach(d),n=f(o,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),o.forEach(d),t=T(e),a=f(e,"DIV",{class:!0});var b=k(a);s=f(b,"TEXTAREA",{placeholder:!0,class:!0}),k(s).forEach(d),u=T(b),c=f(b,"DIV",{class:!0});var j=k(c);j.forEach(d),b.forEach(d),this.h()},h(){D(i.src,l="https://cdnjs.cloudflare.com/ajax/libs/asciidoctor.js/1.5.6/asciidoctor.min.js")||h(i,"src",l),h(n,"rel","stylesheet"),h(n,"href","https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"),h(n,"integrity","sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"),h(n,"crossorigin","anonymous"),h(s,"placeholder","Enter your latex expression"),h(s,"class","svelte-12sxolj"),h(c,"class","latex_rendered_box svelte-12sxolj"),h(a,"class","container svelte-12sxolj")},m(e,o){g(document.head,i),g(document.head,n),E(e,t,o),E(e,a,o),g(a,s),I(s,r[0]),r[7](s),g(a,u),g(a,c),c.innerHTML=r[1],m||(_=[v(i,"load",r[3]()),v(s,"input",r[6]),v(s,"input",r[4])],m=!0)},p(e,[o]){o&1&&I(s,e[0]),o&2&&(c.innerHTML=e[1])},i:C,o:C,d(e){d(i),d(n),e&&d(t),e&&d(a),r[7](null),m=!1,K(_)}}}function X(r,i,l){let n=String.raw`

`;n=G;let t,a={convert:(e,o)=>e};function s(){l(5,a=new window.Asciidoctor)}let u;function c(){let e=window.getComputedStyle(u),o=e.lineHeight,x=e.padding;(40+n.split(/\r\n|\r|\n/).length*parseInt(o,10)+2*parseInt(x,10)).toString()+o.slice(-2)}function m(){n=this.value,l(0,n)}function _(e){L[e?"unshift":"push"](()=>{u=e,l(2,u)})}return r.$$.update=()=>{r.$$.dirty&35&&(l(1,t=W(n)),l(1,t=a.convert(t,{safe:"safe",header_footer:!0})),l(1,t=N(t)))},[n,t,u,s,c,a,m,_]}class Q extends A{constructor(i){super();F(this,i,X,R,q,{})}}export{Q as K};
