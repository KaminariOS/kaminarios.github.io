import{sleep as f}from"./sleep-b92576d7.js";import{ad as p}from"./vendor-42c869db.js";const m=(t,e)=>Math.floor(Math.random()*(e-t))+t,w=()=>{const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=t.length,s=m(0,e);return t[s]},g=(t,e)=>{const s=e/3;return t.map(()=>m(s,e-100))},I=async(t,e)=>{const s=typeof e.scramble=="number"?e.scramble:3e3;await new Promise(i=>{t.forEach(async({currentNode:a,text:r})=>{let o=r.split("");const L=g(o,s),c=Date.now();for(p(a,e.parentElement,n=>{n.classList.add("finished-typing")});Date.now()-c<s;){const n=m(0,o.length),h=L[n],u=o[n]===" ",d=()=>Date.now()-c;if((()=>d()>=h)()||u)if(!(o[n]===r[n]))o[n]=r[n];else continue;else o[n]=w();const l=o.join("");a.innerHTML=l;const T=l===r,b=e.scrambleSlowdown?Math.round(d()/100):1;if(await f(b),T){i();break}}a.innerHTML=r})}),e.dispatch("done")};export{I as mode};
