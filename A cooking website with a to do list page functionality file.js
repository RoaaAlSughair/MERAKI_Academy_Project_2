const body = $(`body`);

const recipes = {
  Breakfast: {
    Scrambled_Eggs: {
      Ingredients: [
        "Two eggs",
        "One spoon of olive oil",
        "Salt and pepper for seasoning",
      ],
      Instructions: [
        "Break the eggs in a small bowl",
        "Mix the eggs using a fork",
        "Put olive oil in a heated frying pan and let it heat",
        "Add the mixed eggs and stir until the mix solidifies",
        "Move the fried eggs to a plate",
        "Add salt and pepper",
        "Serve with brown toast slices, chopped tomatoes and watercress",
      ],
    },
    Oatmeal: {
      Ingredients: [
        "2 big spoons of oats",
        "1 cup of liquid milk",
        "1 big spoon of sugar",
        "1 spoon of honey",
        "fruits",
        "Nuts",
      ],
      Instructions: [
        "In a pot add oats, milk and sugar and let settle on fire for five minutes",
        "Chop the fruits",
        "Transfer the oat mix to a bowl then add fruits, honey and nuts and serve",
      ],
    },
  },
  Lunch: {
    Sheesh_Tawooq: {
      Ingredients: [
        "1 spoon of diet yoghurt",
        "2 spoons of low-fat milk",
        "1 small spoon of curry",
        "Some rosemary",
        "A pinch of grinded ginger",
        "A pinch of paprika",
        "1 lemon",
        "Salt and peppers",
        "1 small spoon of cumin",
        "2 onions",
        "2 bell peppers",
        "Garlic",
        "2 chicken breasts",
      ],
      Instructions: [
        "Chop chicken breasts into cubes and add then in one bowl",
        "In another bowl, mix the remaining components",
        "Add chicken pieces to the mix bowl and let them soak for an hour",
        "Put the chicken pieces on wooden sticks then put then in the oven until it gains a golden color",
        "Move it out of the oven and serve",
      ],
    },
    Tuna_Salad: {
      Ingredients: [
        "1 can of tuna",
        "1 cup of minced lettuce",
        "1 minced tomato",
        "4 minced leeks",
        "1/2 can of sweet corn",
        "Juice of one lemon",
        "1 small spoon of ginger",
      ],
      Instructions: [
        "Add minced ingredients to a bowl",
        "Drain the tuna then mince it and add it to the bowl",
        "If tuna was preserved in water, add two small spoons of olive oil to the mix",
        "Add sweet corn, lemon juice and ginger, and serve",
      ],
    },
  },
  Dinner: {
    Watercress_Salad: {
      Ingredients: [
        "Cherry tomatoes",
        "1 pack of watercress",
        "1 small spoon of sumac",
        "1 spoon of olive oil",
        "2 onions chopped into ribbons",
        "1 small spoon of salt",
        "Lemon juice",
      ],
      Instructions: [
        "Wash tomatoes and watercress and put them in a bowl",
        "Add chopped onion, sumac and salt to the bowl and mix",
        "Serve",
      ],
    },
    Lentil_Soup: {
      Ingredients: [
        "1 cup of yellow lentil",
        "1 medium-sized onion",
        "2 medium-sized potatoes",
        "5 cups of water",
        "Olive oil",
        "1/2 spoon of tumeric",
        "A pinch of salt and peppers",
      ],
      Instructions: [
        "Wash the lentil with water and let it drain",
        "Peel the potatoes and chop them into squares",
        "Peel the onion and chop it into small pieces",
        "Put the pot on fire then add olive oil",
        "Add lentil, onion and potatoes then stir",
        "Add water then let boil for 45 minutes",
        "Mix the components using a blender",
        "Add salt, pepper and tumeric then let boil for five minutes and serve",
      ],
    },
  },
  Snacks: {
    Oat_Cookies: {
      Ingredients: [
        "1 cup of grinded oat",
        "1 cup of whole-wheat flour",
        "1 egg",
        "100g of butter",
        "2 big spoons of vegetable oil",
        "1 small spoon of vanilla",
        "1 small spoon of baking powder",
        "1/3 cup of white or brown sugar",
      ],
      Instructions: [
        "Turn the oven on at 180 degrees celicius",
        "In a bowl, add grinded oat, whole-wheat flour and sugar, and mix them well",
        "Add vanilla and the egg and mix well using a whipper",
        "Add the rest of liquid ingredients and mix well to form a dough",
        "If it's dry, add two big spoons of liquid milk to the mix",
        "Put the dough on baking paper and roll using a rolling pin",
        "Using a cookie cutter, make the shape you like for your cookies and put them in a baking tray",
        "Put in oven until its edges start to turn red then let it cool and solidify and serve",
      ],
    },
    Fruit_Salad: {
      Ingredients: [
        "1 big banana",
        "1 apple",
        "1 orange",
        "1 pineapples",
        "1 Pomegranates",
        "Hazelnuts or cashew",
        "2 big spoons of honey",
      ],
      Instructions: [
        "Chop all the fruits into cubes and put them in a bowl",
        "Add hazelnutscashew and honey and serve",
      ],
    },
  },
};

$(document).ready(() => {
  $("#startPoint").click(() => {
    $(`#homePage`).hide();
    $("#main-categories").html("");
    $(`#main-categories`).show();

    $(`#main-categories`).append(
      `<button class="js-turnBack btn">Return To Home page</button>`
    );
    addEventToReturnToHomePage("js-turnBack");
    for (const key in recipes) {
      $("#main-categories").append(
        `<button class='js-recipes' data-index-name='${key}'>${key}</button>`
      );
      addEventToButton("js-recipes");
    }
  });
});

function addEventToReturnToHomePage(selector) {
  $(`.${selector}`).click(function () {
    $(`#main-categories`).hide();
    $(`#homePage`).show();
  });
}

function addEventToButton(selector) {
  $(`.${selector}`).click(function () {
    $(`#main-categories`).hide();
    $("#category-meals").html("");
    $("#category-meals").append(
      `<button class="js-category-meals-esc btn">Back to main categories</button>`
    );
    addEventToReturnButton(`js-category-meals-esc`);
    if (!$.isEmptyObject(recipes[$(this).attr("data-index-name")])) {
      $(`#category-meals`).show();
      for (const key in recipes[$(this).attr("data-index-name")]) {
        $("#category-meals").append(
          `<button class="js-ingredientsAndInstructions" data-index-name='${key}'>${key}</button>`
        );
        addEventToIngredient(
          "js-ingredientsAndInstructions",
          $(this).attr("data-index-name")
        );
      }
    }
  });
}

function addEventToReturnButton(selector) {
  $(`.${selector}`).click(function () {
    $(`#category-meals`).hide();
    $(`#main-categories`).show();
  });
}

function addEventToIngredient(selector, parentCategory) {
  $(`.${selector}`).click(function () {
    $(`#category-meals`).hide();
    $(`#meal-instructions`).show();
    $("#meal-instructions").html("");
    $(`#meal-instructions`).append(
      `<button class="js-meal-instructions-esc btn">Back to recipes</button>`
    );
    addEventToBackToRecipes("js-meal-instructions-esc");

    if (
      !$.isEmptyObject(recipes[parentCategory][$(this).attr("data-index-name")])
    ) {
      for (const key in recipes[parentCategory][
        $(this).attr("data-index-name")
      ]) {
        $("#meal-instructions").append(
          `<button class="js-instructions" data-index-name='${key}'>${key}</button>`
        );
        addEventToInstructions(
          "js-instructions",
          $(this).attr("data-index-name"),
          parentCategory
        );
      }
    }
  });
}

function addEventToBackToRecipes(selector) {
  $(`.${selector}`).click(function () {
    $(`#meal-instructions`).hide();
    $(`#category-meals`).show();
  });
}

function addEventToInstructions(selector, parentCategory, grandparentCategory) {
  $(`.${selector}`).click(function () {
    $(`#meal-procedure`).html("");
    $(`#meal-procedure`).show();
    if (
      !$.isEmptyObject(
        recipes[grandparentCategory][parentCategory][
          $(this).attr(`data-index-name`)
        ]
      )
    ) {
      $(`#meal-procedure`).append(
        `<ul class="js-${$(this).attr(`data-index-name`)}">`
      );

      recipes[grandparentCategory][parentCategory][
        $(this).attr(`data-index-name`)
      ].forEach(function (element) {
        $(`#meal-procedure`).append(
          `<li><label ><input type= "checkbox" name="checkThisItem" data-value=${element}/>${element}</label></li>`
        );
      });
      $(`#meal-procedure`).append(
        `<button class="js-close-procedure">Done</button>`
      );
      $(`#meal-procedure`).append(`<button class="js-like">Add to liked recipes</button>`)
      addEventToDone("js-close-procedure");
      AddEventToLikedRecipes("js-like", parentCategory);
      $(`#meal-procedure`).append(`</ul >`);
    }
  });
}

function addEventToDone(selector) {
  $(`.${selector}`).click(function () {
    $(`#meal-procedure`).hide();
  });
}

function AddEventToLikedRecipes (selector,recipe) {
  $(`.${selector}`).click(function () {
    localStorage.setItem('liked', recipe);
  })
}