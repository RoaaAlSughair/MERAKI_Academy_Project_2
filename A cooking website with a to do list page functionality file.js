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
    eggs: {
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
      ingredients: [
        "Two eggs111",
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
  },
  lunch: {},
  dinner: {},
  dessert: {},
};

// $(document).ready(() => {
//   $("#startPoint").click(() => {
//     for (const key in recipes) {
//       $("#main").append(
//         `<button class='js-recipes' data-index-name='${key}'>${key}</button>`
//       );
//     }
//     $(".js-recipes").click(() => {
//       $(`#main`).append(
//         `<button class="js-turnBack">Return to recipe types</button>`
//       );
//       $(`.js-turnBack`).on(`click`, () => {
//         $(`#main`).hide();
//         $(`#homepage`).show();
//       });
//       if (!$.isEmptyObject(recipes[$(this).attr("data-index-name")])) {
//         for (const key in recipes[$(this).attr("data-index-name")]) {
//           const recipeInfo = key;
//           for (const key in recipeInfo) {
//             const recipeSection = $(`<ul class="js-recipe"></ul>`);
//             recipeSection.append(
//               `<button class="js-ingredients">Ingredients</button>`
//             );
//             recipeSection.append(
//               `<button class="js-instructions">Instructions</button>`
//             );
//             key.forEach(element, () => {
//               // $('.js-recipe').append('<input type="checkbox" name="checkThisItem" />');
//               // $(`.js-recipe`).append(`<li>${element}</li>`);
//             });
//             $(`#main`).append(recipeSection);
//           }
//         }
//       }
//     });
//   });
// });

uploadRecipeIngredients = (array) => {
  array.forEach((element) => {
    $('#ingredients').append('<input type="checkbox" name="checkThisItem" />');
    const ingredient = $(`<li>${element}</li>`);
    $(`#ingredients`).append(ingredient);
  });
};

uploadRecipeProcedure = (array) => {
  array.forEach((element) => {
    $('#procedure').append('<input type="checkbox" name="checkThisItem" />');
    const step = $(`<li>${element}</li>`);
    $(`#procedure`).append(step);
  });
};

uploadRecipeIngredients(recipes.breakfast.eggs.ingredients);
uploadRecipeProcedure(recipes.breakfast.eggs.instructions);

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

$(`#prodc`).on(`click`, ()=> {
  $(`#breakfast`).hide();
  $(`#recipeOneInstructions`).show();
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
