import loadAbout from "./about";
import loadHome from "./home";
import loadMenu from "./menu";


function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    header.appendChild(createNav());
    return header;
}


function createNav() {

    /* Create Nav */ 

    const nav = document.createElement("nav");

    /* Create Home Button in Nav */

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.classList.add("nav-button")
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(homeButton);
        loadHome();
    })

    /* Create Menu Button in Nav */

    const menuButton = document.createElement("button");
    
    menuButton.textContent = "Menu";
    menuButton.classList.add("nav-button")
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(menuButton);
        loadMenu()
    })

    /* Create Contact Button in Nav */

    const aboutButton = document.createElement("button");
    aboutButton.textContent = "About";
    aboutButton.classList.add("nav-button")
    aboutButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(aboutButton);
        loadAbout()
    })

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav;
}

/* Indicate which page is loaded by setting "active" to the class list for the button corresponding to the current page */

function setActive(button) {
    const buttons = document.querySelectorAll(".nav-button");
    buttons.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");
}

/* Create Main content section of the page */ 

function createMain() {
    const main = document.createElement("main");
    main.setAttribute("id", "main");
    
    return main
}

/* Create footer of page */

function createFooter() {
    const footer = document.createElement("footer");
    
    const p = document.createElement("p");
    p.textContent = "Bryce Dyck Websites"

    footer.appendChild(p)
    
    return footer;
}

function loadWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
}

export default loadWebsite