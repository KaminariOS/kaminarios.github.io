---
title: My first personal blog
tags: [open source, frontend, css, JavaScript]
excerpt: "Just wanna fucjk"
cover: "/warrior-girl-katana-fantasy-art-uhdpaper.com-4K-8.1473.jpg"
---
<script>
    import ToggleButton from '$lib/widget/EffectToggler.svelte';
    import {enable_effects} from '$lib/stores';
</script>

## Disclaimer
This project is heavily inspired by [Matheus Fantinel's blog](https://fantinel.dev). I learned a lot about [SvelteKit](https://kit.svelte.dev/) and CSS by going through his source code. What' more, I also copied two button components found on [codepen](https://codepen.io/), the link to which can be fouexnd in the source code.

## Motivation

Even before learning programming, I dreamed to have a website of my own, a place where I could enjoy my freedom of speech without heavy censorship. 

CMSs like WordPress used to be my only option. Now here we are, a fully responsive blog customized with all the fancy CSS effects and DOM manipulation I have just learned in the past month. On top of blogging itself, learning by doing is my methodology, so I need a target to keep myself reading documents and practicing frontend skills alternatively. 

## Technology Selection

### Markup language

The core of a blog is its posts. Vanilla HTML combined with some CSS is the most straightforward way to implement this, but at the cost of time and readability.

Markdown is well known as a handy domain specific language for documentation. However, its simplicity is a double sword.

I envisioned that an ideal markup language for blog posts should have the following features:
- **Support for mathematical expressions**. I planned to take notes of the theoretical knowledge learned from textbooks and papers, like this: 
$$
  i \hbar \frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat H \Psi(\mathbf{r},t)
$$
- **Progressively expressive**. It should come with a few simple and useful core syntax rules like Markdown, and much more advanced features like collapsible blocks and table-of -contents(toc) left to be explored. 
As you can see, the [toc](#disclaimer) at the beginning of this post is auto-generated.
- **Highly customizable**. It would be great if I can enliven my posts with CSS and JavaScript. In fact, I can just insert a Svelte component right here: 
<p style="display: flex; justify-content: center"><ToggleButton bind:checked={$enable_effects}/></p>


