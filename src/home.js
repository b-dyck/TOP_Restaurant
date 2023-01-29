function loadHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const header = document.createElement("h1");
    header.textContent = "BOA";

    const info = document.createElement("p");
    info.textContent = "Food | Drinks";

    home.appendChild(header);
    home.appendChild(info);

    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(home);
}

export default loadHome;