import{a8 as w,S as j,i as F,s as M,e as f,k as y,$ as q,c as g,a as x,d,m as T,Y as D,b as h,J as _,g as I,a9 as E,X as v,T as A,Z as K,v as L,G as H}from"./vendor-fabc283b.js";const J={displayMode:!1,throwOnError:!1};let N=/\\\[(.*)\\\]|\\\$(.*)\\\$|\\\((.*)\\\)/gm;function O(t){return t.replaceAll(N,function(i){return w.renderToString(i.slice(2,-2),J)})}let P=/latexmath:\[(.*)]/gm,U=/^\[latexmath][\s\n]*\+{4}[\s\n]*(.*)[\s\n]*\+{4}/gms,W=`++++
`,C="+++";function G(t){return t.replaceAll(U,function(e,r){return W+w.renderToString(r)+`
++++`}).replaceAll(P,function(e,r){return C+w.renderToString(r)+C})}var R=`= Online AsciiDoc renderer intergrated with Katex\r
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
`;function X(t){let i,l,e,r,a,s,u,c,b,k;return{c(){i=f("script"),e=f("link"),r=y(),a=f("div"),s=f("textarea"),u=y(),c=f("div"),this.h()},l(o){const n=q('[data-svelte="svelte-f28ypy"]',document.head);i=g(n,"SCRIPT",{src:!0});var p=x(i);p.forEach(d),e=g(n,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),n.forEach(d),r=T(o),a=g(o,"DIV",{class:!0});var m=x(a);s=g(m,"TEXTAREA",{placeholder:!0,class:!0}),x(s).forEach(d),u=T(m),c=g(m,"DIV",{class:!0});var S=x(c);S.forEach(d),m.forEach(d),this.h()},h(){D(i.src,l="https://cdnjs.cloudflare.com/ajax/libs/asciidoctor.js/1.5.6/asciidoctor.min.js")||h(i,"src",l),h(e,"rel","stylesheet"),h(e,"href","https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"),h(e,"integrity","sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"),h(e,"crossorigin","anonymous"),h(s,"placeholder","Enter your latex expression"),h(s,"class","svelte-12sxolj"),h(c,"class","latex_rendered_box svelte-12sxolj"),h(a,"class","container svelte-12sxolj")},m(o,n){_(document.head,i),_(document.head,e),I(o,r,n),I(o,a,n),_(a,s),E(s,t[0]),t[7](s),_(a,u),_(a,c),c.innerHTML=t[1],b||(k=[v(i,"load",t[3]),v(s,"input",t[6]),v(s,"input",t[4])],b=!0)},p(o,[n]){n&1&&E(s,o[0]),n&2&&(c.innerHTML=o[1])},i:A,o:A,d(o){d(i),d(e),o&&d(r),o&&d(a),t[7](null),b=!1,K(k)}}}function z(t,i,l){let e=String.raw`

`;e=R;let r,a={convert:(n,p)=>n,unload:!0};function s(){window.Asciidoctor&&!!a.unload&&l(5,a=new window.Asciidoctor)}let u;function c(){let n=window.getComputedStyle(u),p=n.lineHeight,m=n.padding;(40+e.split(/\r\n|\r|\n/).length*parseInt(p,10)+2*parseInt(m,10)).toString()+p.slice(-2)}L(function(){setInterval(s,1e3)});function k(){e=this.value,l(0,e)}function o(n){H[n?"unshift":"push"](()=>{u=n,l(2,u)})}return t.$$.update=()=>{t.$$.dirty&35&&(l(1,r=G(e)),l(1,r=a.convert(r,{safe:"safe",header_footer:!0})),l(1,r=O(r)))},[e,r,u,s,c,a,k,o]}class V extends j{constructor(i){super();F(this,i,z,X,M,{})}}export{V as K};
