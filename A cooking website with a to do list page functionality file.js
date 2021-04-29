const body = $(`body`);
$(`#recipeDisplay`).hide();
$(`#breakfast`).hide();
$(`#lunch`).hide();
$(`#desserts`).hide();
$(`#dinner`).hide();
$(`#recipeOne`).hide();

// class Recipes {
//     constructor () {
//         Ingredients;
//         Procedure;
//     }

//     uploadRecipeIngredients = () => {

//     }
// }

b1_ingredients = [
  "Two eggs",
  "One small spoon of butter",
  "Salt and pepper for seasoning",
];

b1_procedure = [
  "Break the eggs in a small bowl",
  "Mix the eggs using a fork",
  "Put a small spoon of butter in a heated frying pan and let it melt",
  "Add the mixed eggs to the melted butter and stir until the mix solidifies",
  "Move the fried eggs to a plate",
  "Add salt and pepper",
  "Bon appetit",
];

uploadRecipeIngredients = (array) => {
  array.forEach((element) => {
    const ingredient = $(`<li>${element}</li>`);
    $(`#ingredients`).append(ingredient);
  });
};

uploadRecipeProcedure = (array) => {
  array.forEach((element) => {
    const step = $(`<li>${element}</li>`);
    $(`#procedure`).append(step);
  });
};

uploadRecipeIngredients(b1_ingredients);
uploadRecipeProcedure(b1_procedure);

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

$(`#ingrds`).on(`click`, () => {
    $(`#breakfast`).hide();
    $(`#recipeOne`).show();
})

$(`#recipeOne-esc`).on(`click`, () => {
    $(`#recipeOne`).hide();
    $(`#breakfast`).show();
})

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
