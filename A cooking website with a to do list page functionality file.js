const body = $(`body`);
$(`#recipeDisplay`).hide();
const startButton = $(`#startPoint`);
startButton.on(`click`, () => {
  $(`#homePage`).hide();
  $(`#recipeDisplay`).show();
  $(`#breakfast`).hide();
  $(`#lunchMainDishes`).hide();
  $(`#desserts`).hide();
  $(`#dinner`).hide();
});

const entranceButtons = $(`.recipeEntrance`);
entranceButtons.forEach(element => {
    element.on(`click`, (event) => {
        
    })
});