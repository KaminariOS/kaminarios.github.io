---
title: My personal reduced Vim & Jetbrains cheatsheet
tags: [Vim, Linux, cheatsheet]
excerpt: An opinionated collection of handy Vim operations and Jetbrains shortcut
cover: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Vimlogo.svg"
---

## Foreword

Neovim is my favorite editor in ZSH. However, in a desktop environment I mostly write code in a Jetbrains IDE with IdeaVim plugin. Plus, some operations can be achieved in multiple ways, only one of which is preferred. Therefore, not all Vim keys are relevant to me. On top of that, it's not necessary to document basic keys like `hjkl` so they won't be included, either. For the full Vim cheatsheet, refer to [here](https://devhints.io/vim).

## Vim 

### Page scroll
`<C-U> / <C-D>`     Half-page up/down

`<C-B> / <C-F>`     Page up/down

### Insert mode 

`<Ctrl + w>` delete word before the cursor during insert mode

### Jump to character

`fc`    Go forward to character c

`Fc`    Go backward to character c

### Editing

`s` Delete char and insert

### Indentation

`>` 	Indent right

`<` 	Indent left

`=` 	Autoindent

### Delete

`db` 	Delete to beginning of word
`cc`  change (replace) entire line

### Text objects

`p` 	Paragraph

`w` 	Word

`s` 	Sentence

`[ ( { <` 	A block

`b` 	A block

`t` 	A XML tag block

``' ` " `` 	A quoted string

### Folds

`zo / zO` 	Open
`zc / zC` 	Close
`za / zA` 	Toggle

### Jump 

`<C-O>` 	Go back to previous location

### Misc 

`.` 	Repeat last command

`]p` 	Paste under the current indentation level

`daw`  delete (cut) word under the cursor and the space after or before it

### Replace 

`:%s/old/new/g`  replace all old with new throughout file
`:%s/old/new/gc`  replace all old with new throughout file with confirmations

## Jetbrains

`<C-Shift-N`> Open file

`<Alt-F12` Open terminal

`F2` Show next error

`<C-Q>` show documentation

`<C-B`> Jump to definition

`<C-Shift-I>` Show definition

`<C-0>` File structure







