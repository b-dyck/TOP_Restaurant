(()=>{"use strict";const t=function(){const t=document.createElement("div");t.classList.add("home");const e=document.createElement("h1");e.textContent="BOA";const n=document.createElement("p");n.textContent="Food | Drinks",t.appendChild(e),t.appendChild(n);const c=document.getElementById("main");c.textContent="",c.appendChild(t)};function e(){const e=document.createElement("header");return e.classList.add("header"),e.appendChild(function(){const e=document.createElement("nav"),c=document.createElement("button");c.textContent="Home",c.classList.add("nav-button"),c.addEventListener("click",(e=>{e.target.classList.contains("active")||(n(c),t())}));const d=document.createElement("button");d.textContent="Menu",d.classList.add("nav-button"),d.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(d),function(){const t=document.createElement("div");t.classList.add("menu");const e=document.createElement("div");e.classList.add("drinks");for(let t=0;t<5;t++){const t=document.createElement("div");t.classList.add("drink");const n=document.createElement("img");n.src="../dist/images/glass-flute-24.png",t.appendChild(n);const c=document.createElement("h2");c.textContent="Another Drink",t.appendChild(c),e.appendChild(t)}const n=document.createElement("div");n.classList.add("food");for(let t=0;t<5;t++){const t=document.createElement("div");t.classList.add("dish");const e=document.createElement("img");e.src="../dist/images/silverware-variant-24.png",t.appendChild(e);const c=document.createElement("h2");c.textContent="Another Dish",t.appendChild(c),n.appendChild(t)}t.appendChild(e),t.appendChild(n);const c=document.getElementById("main");c.textContent="",c.appendChild(t)}())}));const a=document.createElement("button");return a.textContent="Contact",a.classList.add("nav-button"),a.addEventListener("click",(t=>{t.target.classList.contains("active")||n(a)})),e.appendChild(c),e.appendChild(d),e.appendChild(a),e}()),e}function n(t){document.querySelectorAll(".nav-button").forEach((t=>t.classList.remove("active"))),t.classList.add("active")}!function(){const n=document.getElementById("content");n.appendChild(e()),n.appendChild(function(){const t=document.createElement("main");return t.setAttribute("id","main"),t}()),n.appendChild(function(){const t=document.createElement("footer"),e=document.createElement("p");return e.textContent="Bryce Dyck Websites",t.appendChild(e),t}()),t()}()})();