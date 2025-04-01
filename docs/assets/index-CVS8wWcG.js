(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const s="/assets/breaking-bad-CgBwDp5O.svg",i=async()=>(await(await fetch("https://api.breakingbadquotes.xyz/v1/quotes")).json())[0],d=async n=>{document.querySelector("#app-tittle").innerHTML="Breaking Bad App",n.innerHTML="Loading...";const r=document.createElement("blockquote"),a=document.createElement("h3"),o=document.createElement("button");o.innerText="Next Quote",n.replaceChildren(o);const e=t=>{r.innerHTML=t.quote,a.innerHTML=t.author,n.replaceChildren(r,a,o)};o.addEventListener("click",async()=>{n.innerHTML="Loading...";const t=await i();e(t)}),i().then(e)};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${s}" class="logo vanilla" alt="Breaking Bad logo" />
    </a>
    <h1 id="app-tittle">Hello Vite!</h1>
    <div class="card">
    
    </div>
    
  </div>
`;const l=document.querySelector(".card");d(l);
