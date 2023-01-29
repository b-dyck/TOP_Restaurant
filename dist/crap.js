/* Create Main content section of the page */ 

function createMain() {
    const main = document.createElement("main");
    main.setAttribute("id", "main");
    
    return main
}


content.appendChild(createMain());

import loadMenu from "./menu";
import loadContact from "./contact";
import loadHome from "./home";