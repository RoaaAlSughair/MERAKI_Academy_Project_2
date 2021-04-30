const body = $(`body`);
$(`#recipeDisplay`).hide();
$(`#breakfast`).hide();
$(`#lunch`).hide();
$(`#desserts`).hide();
$(`#dinner`).hide();
$(`#recipeOneIngredients`).hide();
$(`#recipeOneInstructions`).hide();

// class Recipes {
//     constructor () {
//         Ingredients;
//         Procedure;
//     }

// uploadRecipeIngredients = (array) => {
//   array.forEach((element) => {
//     const ingredient = $(`<li>${element}</li>`);
//     $(`#ingredients`).append(ingredient);
//   });
// };

// uploadRecipeProcedure = (array) => {
//   array.forEach((element) => {
//     const step = $(`<li>${element}</li>`);
//     $(`#procedure`).append(step);
//   });
// };
// }

const recipes = {
  breakfast: {
    scrambledEggs: {
      ingredients: [
        "Two eggs",
        "One small spoon of butter",
        "Salt and pepper for seasoning",
      ],
      instructions: [
        "Break the eggs in a small bowl",
        "Mix the eggs using a fork",
        "Put a small spoon of butter in a heated frying pan and let it melt",
        "Add the mixed eggs to the melted butter and stir until the mix solidifies",
        "Move the fried eggs to a plate",
        "Add salt and pepper",
        "Bon appetit",
      ],
    },
    grilledCheeseSandwich: {
      ingredients: [],
      instructions: [],
    },
  },
  lunch: {
    frenchFries: {
      ingredients: [],
      instructions: [],
    },
    tuna: {
      ingredients: [],
      instructions: [],
    },
  },
  dinner: {
    instantNoodles: {
      ingredients: [],
      instructions: [],
    },
    lentilSoup: {
      ingredients: [],
      instructions: [],
    },
  },
  snacks: {
    popcorn: {
      ingredients: [],
      instructions: [],
    },
    milkTeaAndBiscuits: {
      ingredients: [],
      instructions: [],
    },
  },
};

$(document).ready(() => {
  $("#startPoint").click(() => {
    $(`#main-categories`).append(
      `<button class="js-turnBack">Return To Home page</button>`
    );
    for (const key in recipes) {
      $("#main-categories").append(
        `<button class='js-recipes' data-index-name='${key}'>${key}</button>`
      );
      addEventToButton("js-recipes");
    }
  });
});

function addEventToButton(selector) {
  $(`.${selector}`).click(function () {
    $(`#main-categories`).hide();
    $("#category-meals").html("");
    $("#category-meals").append(
      `<button class="js-category-meals-esc">Back to main categories</button>`
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
    $("#meal-instructions").html("");

    if (
      !$.isEmptyObject(recipes[parentCategory][$(this).attr("data-index-name")])
    ) {
      for (const key in recipes[parentCategory][
        $(this).attr("data-index-name")
      ]) {
        $("#meal-instructions").append(
          `<button class="js-instruction" data-index-name='${key}'>${key}</button>`
        );
        console.log(key);
        addEventToInstructions(
          "js-instruction",
          $(this).attr("data-index-name"),
          parentCategory
        );
      }
    }
  });
}

function addEventToInstructions(selector, parentCategory, grandparentCategory) {
  if (
    !$.isEmptyObject(
      recipes[grandparentCategory][parentCategory][
        $(this).attr(`data-index-name`)
      ]
    )
  ) {
    $(`.${selector}`).click(function () {
      recipes[grandparentCategory][parentCategory][
        $(this).attr(`data-index-name`)
      ].forEach(element, function () {
        const instructionList = $(`.${selector}`).append(
          `<ul class="js-information"></ul>`
        );
        instructionList.append(
          `<li><input type="checkbox" name="checkThisItem" /></li>`
        );
        instructionList.append(`<li>${element}</li>`);
      });
    });
  }
}
// ingredientInfo = uploadRecipeIngredients;
// instructionInfo = uploadRecipeProcedure;
// const recipeOne = $(`<div id="recipeOne"></div>`);
// recipeOne.appendTo(body);
// const escapeButton = $(`<button id="recipeOne-esc">Back to recipes</button>`);
// const ingredients = $(`<ul id="ingredients"></ul>`);
// const procedure = $(`<ul id="procedure"></ul>`);
// recipeOne.append(escapeButton);
// recipeOne.append(ingredients);
// recipeOne.append(procedure);

uploadRecipeIngredients = (array) => {
  array.forEach((element) => {
    $("#ingredients").append('<input type="checkbox" name="checkThisItem" />');
    const ingredient = $(`<li>${element}</li>`);
    $(`#ingredients`).append(ingredient);
  });
};

uploadRecipeProcedure = (array) => {
  array.forEach((element) => {
    $("#procedure").append('<input type="checkbox" name="checkThisItem" />');
    const step = $(`<li>${element}</li>`);
    $(`#procedure`).append(step);
  });
};

uploadRecipeIngredients(recipes.breakfast.scrambledEggs.ingredients);
uploadRecipeProcedure(recipes.breakfast.scrambledEggs.instructions);

$(`#startPoint`).on(`click`, () => {
  $(`#homePage`).hide();
  $(`#recipeDisplay`).show();
});

$(`#returnButton`).on(`click`, () => {
  $(`#recipeDisplay`).hide();
  $(`#homePage`).show();
});

$(`#breakfast-btn`).on(`click`, () => {
  $(`#recipeDisplay`).hide();
  $(`#breakfast`).show();
});

$(`.recipeOne-esc`).on(`click`, () => {
  $(`#recipeOneIngredients`).hide();
  $(`#recipeOneInstructions`).hide();
  $(`#breakfast`).show();
});

$(`#ingrds`).on(`click`, () => {
  $(`#breakfast`).hide();
  $(`#recipeOneIngredients`).show();
});

$(`#prodc`).on(`click`, () => {
  $(`#breakfast`).hide();
  $(`#recipeOneInstructions`).show();
});

$(`#breakfast-esc`).on(`click`, () => {
  $(`#breakfast`).hide();
  $(`#recipeDisplay`).show();
});

$(`#lunch-btn`).on(`click`, () => {
  $(`#recipeDisplay`).hide();
  $(`#breakfast`).show();
});

$(`#lunch-esc`).on(`click`, () => {
  $(`#lunch`).hide();
  $(`#recipeDisplay`).show();
});

$(`#desserts-btn`).on(`click`, () => {
  $(`#recipeDisplay`).hide();
  $(`#breakfast`).show();
});

$(`#desserts-esc`).on(`click`, () => {
  $(`#desserts`).hide();
  $(`#recipeDisplay`).show();
});

$(`#dinner-btn`).on(`click`, () => {
  $(`#recipeDisplay`).hide();
  $(`#dinner`).show();
});

$(`#dinner-esc`).on(`click`, () => {
  $(`#dinner`).hide();
  $(`#recipeDisplay`).show();
});
