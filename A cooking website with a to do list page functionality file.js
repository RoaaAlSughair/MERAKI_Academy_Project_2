const body = $(`body`);
$(`#recipeDisplay`).hide();
$(`#startPoint`).on(`click`, () => {
  $(`#homePage`).hide();
  $(`#recipeDisplay`).show();
  $(`#breakfast`).hide();
  $(`#lunchMainDishes`).hide();
  $(`#desserts`).hide();
  $(`#dinner`).hide();
});

$(`#returnButton`).on(`click`, () => {
  $(`#recipeDisplay`).hide();
  $(`#homePage`).show();
});

const entranceButtons = $(`.recipeEntrance`);
entranceButtons.forEach((element) => {
  element.on(`click`, (event) => {
    let tag = event.target.attr(`class`);
    $(`${tag}`).show();
    $(`.recipeEntrance`).hide();
  });
});
