---
title: My first personal blog
tags: [open source, frontend, css, JavaScript]
excerpt: My first non-trivial frontend project in one month
cover: "/warrior-girl-katana-fantasy-art-uhdpaper.com-4K-8.1473.jpg"
---
<script>
    import ToggleButton from '$lib/widget/EffectToggler.svelte';
    import {enable_effects} from '$lib/stores';
    import Image from '$lib/Image.svelte';
</script>

## Disclaimer
This project is heavily inspired by [Matheus Fantinel's blog](https://fantinel.dev). I learned a lot about [SvelteKit](https://kit.svelte.dev/) and CSS by going through his source code. What' more, I also copied two button components found on [codepen](https://codepen.io/), the link to which can be found in the source code.

## Motivation

Even before learning programming, I dreamed to have a website of my own, a place where I could enjoy my freedom of speech without heavy censorship. 

CMSs like WordPress used to be my only option. Now here we are, a fully responsive blog customized with all the fancy CSS effects and DOM manipulation I have just learned in the past month. On top of blogging itself, learning by doing is my methodology, so I need a target to keep myself reading documents and practicing frontend skills alternatively. 

## Technology Selection

### Markup language

The core of a blog is its posts. Vanilla HTML combined with some CSS is the most straightforward way to implement this, but at the cost of time and readability.

#### Markdown

Markdown is well known as a handy domain specific language for documentation. However, its simplicity is a double sword. When it comes to complicated documents like a book, Markdown is kind of overstretched.
 

I envisioned that an ideal markup language for blog posts should have the following features:
- **Support for mathematical expressions**. I planned to take notes of the theoretical knowledge learned from textbooks and papers, like this: 
$$
  i \hbar \frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat H \Psi(\mathbf{r},t)
$$
- **Progressively expressive**. It should come with a few simple and useful core syntax rules like Markdown, and much more advanced features like collapsible blocks and table-of-contents(toc) left to be explored. 
As you can see, the [toc](#disclaimer) at the beginning of this post is auto-generated.
- **Highly customizable**. It would be great if I can enliven my posts with CSS and JavaScript. In fact, I can just insert a Svelte component right here: 

<p style="display: flex; justify-content: center; background: rgba(0,0,0,0.2)">
  <ToggleButton bind:checked={$enable_effects}/>
</p>

#### Asciidoc

At first I tried Asciidoc, which almost meets my expectations. It supports `latexmath` & and `asciimath`, and provides a myriad of advanced macros. Custom stylesheet can also be imported. It's definitely powerful enough for someone who wants to write a book or something. 

Everything works fine locally until moving into the browser. Currently, the only implementation of Asciidoc---[Asciidoctor](https://asciidoctor.org/) is written in Ruby, and Asciidoctor.js is transpiled from the Rudy version.
Therefore, it's not surprising that I met with some unresolved build-time [issue](https://github.com/asciidoctor/asciidoctor.js/issues/1587).
I did find a workaround, that was to load the minified script from CDN at run time, at the cost of ~1s slow loading time.

What's worse is that Asciidoctor.js doesn't support `latexmath` by default, not without [MathJax](https://www.mathjax.org/) configured. I just can't get it work. Again I found another workaround---[Katex](https://katex.org/).
After some debugging I discovered that Asciidoctor was just doing one simple thing:convert the input Asciidoc string to the output HTML string. The styling is decoupled from JS code and done by an external stylesheet. So does Katex. Therefore, I wrote some glue code to concatenate the string processing pipelines. Finally, I got an [Asciidoc renderer](/tex) with Latex support in browser!

#### MDsvex

Now Asciidoc works, but in a hacky way. In the meantime, I read about a markdown preprocessor called [MDsvex](https://mdsvex.pngwn.io/) from [Matt Fantinel' s post](https://fantinel.dev/blog-development-sveltekit), which turns Markdown files into ASTs(abstract syntax trees) and enables users to enhance Markdown with various plugins. 

First Asciidoc renderer and then Markdown ASTs, god I wish I knew more about compilers so that I can be a master of language manipulation. Had I got enough time and knowledge, I would love to write a Rust implementation of Asciidoc and even compile it to WebAssembly. 

I ended up choosing MDsvex to be one of the bedstones of my blog, by which this very post you are reading is generated.

### Frontend tech stack

#### Yew(Rust) 
> The programming language that empowers everyone to become a systems programmer
> <footer> Rust</footer>

<Image src="https://rustacean.net/more-crabby-things/dancing-ferris.gif" alt="Unofficial Rust mascot: Dancing Ferris"/>

For the record, [Rust](https://www.rust-lang.org/) is my favorite programming language, and I proudly declare myself as a Rustacean. It' s Java that introduced me into the world of algorithms and object-oriented programming, but it's Rust that taught me more about low-level computer science. Rust is trying to accomplish safety, efficiency and ergonomics at the same time, which is really an eye-opener. I believe even if Rust somehow flops(unlikely) in the future, the spirit behind it will still persist. 

Back to the topic, at the beginning I picked [Yew](https://yew.rs/), a React-like Rust frontend framework to build my website, because I'd like to write everything in Rust exclusively. 

However, the frontend ecosystem in Rust is far from maturity and everything is more or less hacky. For example, WebAssembly, the compilation target of frontend Rust, can't access any browser API without intermediary JavaScript. In addition, important features like CSS scoping and debugging with sourcemap are not supported.

I wish I had the time and energy to reinvent frontend wheels in Rust but time is always limited. I had to switch to a JavaScript framework so that my blog would get online in a month. Nevertheless, Rust and WebAssembly are worth exploring, and I may develop some WebGL project with them in the future.

#### Svelte and SvelteKit 

I have some experience with Vue, with which and [D3.js](https://d3js.org/) I used to build a data visualization tool. 

Vue is great, but I always tend to try something new. Many in the community are talking about a rising star, so I decided to give it a shot.

Technically, Svelte is not a framework but a compiler. However, constructing components with Svelte feels natural and smooth, and there is less boilerplate code. The community, documentation and REPL are fantastic. I think every frontend developer should try it out. 

### CSS 

For me, the hardest part of a blog project is not programming but styling. It took me almost a week to read articles about CSS and tweaking the layout to make my website fully responsive. The haunting horizontal scrollbar almost drove me crazy. I practiced using devtools heavily and learned the principle of mobile-first. 

## Conclusion

So that's it, my first non-trivial project. It's far from perfection but my goal here has been achieved. I have to move on to learn more about computer science. I' m not satisfied with being an ordinary library user but aspire to be able to implement anything by myself if needed. I missed the old college days studying physics and mathematics, trying to break down the basic working principles of everything.

Thanks for reading!




