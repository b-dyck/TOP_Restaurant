(()=>{"use strict";const t=function(){const t=document.createElement("div");t.classList.add("home");const e=document.createElement("h1");e.textContent="BOA";const n=document.createElement("p");n.textContent="Food | Drinks",t.appendChild(e),t.appendChild(n);const c=document.getElementById("main");c.textContent="",c.appendChild(t)};function e(){const e=document.createElement("header");return e.classList.add("header"),e.appendChild(function(){const e=document.createElement("nav"),c=document.createElement("button");c.textContent="Home",c.classList.add("nav-button"),c.addEventListener("click",(e=>{e.target.classList.contains("active")||(n(c),t())}));const d=document.createElement("button");d.textContent="Menu",d.classList.add("nav-button"),d.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(d),function(){const t=document.createElement("div");t.classList.add("menu");const e=document.createElement("h1");e.textContent="Menu",t.appendChild(e);const n=document.createElement("div");n.classList.add("drinks");const c=document.createElement("h2");c.textContent="Drinks",n.appendChild(c);for(let t=0;t<5;t++){const t=document.createElement("div");t.classList.add("drink");const e=document.createElement("img");e.src="./images/glass-flute-24.png",t.appendChild(e);const c=document.createElement("p");c.textContent="Another Drink",t.appendChild(c),n.appendChild(t)}const d=document.createElement("div");d.classList.add("food");const a=document.createElement("h2");a.textContent="Food",d.appendChild(a);for(let t=0;t<5;t++){const t=document.createElement("div");t.classList.add("dish");const e=document.createElement("img");e.src="./images/silverware-variant-24.png",t.appendChild(e);const n=document.createElement("p");n.textContent="Another Dish",t.appendChild(n),d.appendChild(t)}t.appendChild(n),t.appendChild(d);const o=document.getElementById("main");o.textContent="",o.appendChild(t)}())}));const a=document.createElement("button");return a.textContent="About",a.classList.add("nav-button"),a.addEventListener("click",(t=>{t.target.classList.contains("active")||(n(a),function(){const t=document.createElement("div");t.classList.add("about");const e=document.createElement("p");e.textContent="Find us if you can, but be wary of snakes in the grass...",t.appendChild(e);const n=document.getElementById("main");n.textContent="",n.appendChild(t)}())})),e.appendChild(c),e.appendChild(d),e.appendChild(a),e}()),e}function n(t){document.querySelectorAll(".nav-button").forEach((t=>t.classList.remove("active"))),t.classList.add("active")}!function(){const n=document.getElementById("content");n.appendChild(e()),n.appendChild(function(){const t=document.createElement("main");return t.setAttribute("id","main"),t}()),n.appendChild(function(){const t=document.createElement("footer"),e=document.createElement("p");return e.textContent="Bryce Dyck Websites",t.appendChild(e),t}()),t()}()})();