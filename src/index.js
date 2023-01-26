

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    header.appendChild(createNav());
    
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
        loadMenu();
    })

    /* Create Contact Button in Nav */

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.classList.add("nav-button")
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActive(contactButton);
        loadContact();
    })

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav
}


