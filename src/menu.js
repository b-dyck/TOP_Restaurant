function loadMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const title = document.createElement("h1");
    title.textContent = "Menu";
    menu.appendChild(title);


    /* Create Drinks section of the Menu */

    const drinks = document.createElement("div");
    drinks.classList.add("drinks");


    const titleDrinks = document.createElement("h2");
    titleDrinks.textContent = "Drinks";
    drinks.appendChild(titleDrinks);


    for(let i = 0; i<5; i++) {

        const drink = document.createElement("div")
        drink.classList.add("drink");

        const drinkIcon = document.createElement("img");
        drinkIcon.src = "./images/glass-flute-24.png";
        drink.appendChild(drinkIcon);

        const drinkTitle = document.createElement("p");
        drinkTitle.textContent = "Another Drink";
        drink.appendChild(drinkTitle);

        drinks.appendChild(drink);
    }

    /* Create the food section of the menu */

    const food = document.createElement("div");
    food.classList.add("food");

    const titleFood = document.createElement("h2");
    titleFood.textContent = "Food";
    food.appendChild(titleFood);

    for(let i = 0; i<5; i++) {

        const dish = document.createElement("div")
        dish.classList.add("dish");

        const dishIcon = document.createElement("img");
        dishIcon.src = "./images/silverware-variant-24.png";
        dish.appendChild(dishIcon);

        const dishTitle = document.createElement("p");
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

