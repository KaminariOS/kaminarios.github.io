import{D as t}from"./vendor-4599503f.js";const o=localStorage,s="v_effects",n=t((o.getItem(s)||"true")==="true");n.subscribe(e=>o.setItem(s,e.toString()));const u=t(!0),c="theme",r=!1,a=t(l());function l(){let e=localStorage.getItem(c),m="light";return e?e==="true":window.matchMedia&&window.matchMedia(`(prefers-color-scheme: ${m})`).matches?!r:r}a.subscribe(e=>{o.setItem(c,e.toString()),document.documentElement.setAttribute("data-theme",e?"light":"dark")});export{n as e,a as l,u as m};
