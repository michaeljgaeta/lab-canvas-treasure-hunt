//GET CANVAS
const $canvas = document.querySelector("canvas");
const context = $canvas.getContext("2d");

const width = $canvas.width;
const height = $canvas.height;


//START GAME
function clearCanvas() {
  context.clearRect(0, 0, $canvas.width, $canvas.height);
}

drawEverything();


//EVENT LISTENERS
window.addEventListener("keydown", (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      clearCanvas();
      game.player.moveLeft();
      treasure.setRandomPosition();
      treasure.drawTreasure();
      game.drawEverything();
      break;
    case 38:
      clearCanvas();
      game.player.moveUp();
      treasure.setRandomPosition();
      treasure.drawTreasure();
      game.drawEverything();
      break;
    case 39:
      clearCanvas();
      game.player.moveRight();
      treasure.setRandomPosition();
      treasure.drawTreasure();
      game.drawEverything();
      break;
    case 40:
      clearCanvas();
      game.player.moveDown();
      treasure.setRandomPosition();
      treasure.drawTreasure();
      game.drawEverything();
      break;
  }
});
