function loadAbout() {

    const about = document.createElement("div")
    about.classList.add('about');

    const title = document.createElement("p");
    title.textContent = "Find us if you can, but be wary of snakes in the grass...";
    about.appendChild(title);




    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(about);
}

export default loadAbout;