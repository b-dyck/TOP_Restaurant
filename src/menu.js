function loadMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    /* Create Drinks section of the Menu */

    const drinks = document.createElement("div");
    drinks.classList.add("drinks");


    for(let i = 0; i<10; i++) {

    const drink = document.createElement("div")
    drink.classList.add("drink");

    const drinkIcon = document.createElement("img");
    drinkIcon.src = "../dist/images/glass-flute-24.png";
    drink.appendChild(drinkIcon);

    const drinkTitle = document.createElement("h2");
    drinkTitle.textContent = "Another Drink";
    drink.appendChild(drinkTitle);

    drinks.appendChild(drink);
    }

    /* Create the food section of the menu */

    const food = document.createElement("div");
    food.classList.add("food");


    for(let i = 0; i<10; i++) {

    const dish = document.createElement("div")
    dish.classList.add("dish");

    const dishIcon = document.createElement("img");
    dishIcon.src = "../dist/images/silverware-variant-24.png";
    dish.appendChild(dishIcon);

    const dishTitle = document.createElement("h2");
    dishTitle.textContent = "Another Dish";
    dish.appendChild(dishTitle);

    food.appendChild(dish);
    }

    menu.appendChild(drinks);
    menu.appendChild(food);

    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(menu);
}

export default loadMenu;

