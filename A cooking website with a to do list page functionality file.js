const body = $(`body`);
$(`#recipeDisplay`).hide();
$(`#breakfast`).hide();
$(`#lunch`).hide();
$(`#desserts`).hide();
$(`#dinner`).hide();

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
})

$(`#breakfast-esc`).on(`click`, () => {
    $(`#breakfast`).hide();
    $(`#recipeDisplay`).show();
})

$(`#lunch-btn`).on(`click`, () => {
    $(`#recipeDisplay`).hide();
    $(`#breakfast`).show();
})

$(`#lunch-esc`).on(`click`, () => {
    $(`#lunch`).hide();
    $(`#recipeDisplay`).show();
})

$(`#desserts-btn`).on(`click`, () => {
    $(`#recipeDisplay`).hide();
    $(`#breakfast`).show();
})

$(`#desserts-esc`).on(`click`, () => {
    $(`#desserts`).hide();
    $(`#recipeDisplay`).show();
})

$(`#dinner-btn`).on(`click`, () => {
    $(`#recipeDisplay`).hide();
    $(`#dinner`).show();
})

$(`#dinner-esc`).on(`click`, () => {
    $(`#dinner`).hide();
    $(`#recipeDisplay`).show();
})

