import{w as c}from"./writeEffect-9a988acc.js";import"./sleep-b92576d7.js";import"./vendor-7c140087.js";const o=(t,e)=>{new MutationObserver(s=>{s.forEach(r=>{const i=r.type==="attributes",a=r.target.classList.contains("typing");i&&a&&e()})}).observe(t,{attributes:!0,childList:!0,subtree:!0})},d=t=>t.forEach(e=>e.currentNode.textContent=""),g=async(t,e)=>{if(e.cascade)d(t);else{const{getLongestTextElement:n}=await import("./getLongestTextElement-6c459af3.js"),s=n(t);o(s,()=>e.dispatch("done"))}for(const n of t)e.cascade?(await c(n,e),n.currentNode.classList.replace("typing","finished-typing")):c(n,e).then(()=>{n.currentNode.classList.replace("typing","finished-typing")});e.cascade&&e.dispatch("done")};export{g as mode};