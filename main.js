//GET CANVAS
const $canvas = document.querySelector("canvas");
const context = $canvas.getContext("2d");

const width = $canvas.width;
const height = $canvas.height;

//DRAW GRID
function drawGrid() {
  context.strokeStyle = "black";
  for (let x = 0; x <= 10; x++) {
    context.beginPath();
    context.moveTo(x * 50, 0);
    context.lineTo(x * 50, $canvas.height);
    context.closePath();
    context.stroke();
  }
  for (let y = 0; y <= 10; y++) {
    context.beginPath();
    context.moveTo(0, y * 50);
    context.lineTo($canvas.width, y * 50);
    context.closePath();
    context.stroke();
  }
}

function drawPlayer() {
  context.drawImage(player.image, player.row * 50, player.col * 50);
}

function drawTreasure() {
  context.drawImage(treasure.image, treasure.row * 50, treasure.col * 50);
}

function clearCanvas() {
  context.clearRect(0, 0, $canvas.width, $canvas.height);
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

//DRAW PLAYER & TREASURE
const player = new Character(0, 0);
const treasure = new Treasure(5, 5);
treasure.setRandomPosition();

//EVENT LISTENERS
window.addEventListener("load", () => {});
drawEverything();

window.addEventListener("keydown", (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      treasure.setRandomPosition();
      clearCanvas();
      drawTreasure();
      drawEverything();
      break;
    case 38:
      player.moveUp();
      treasure.setRandomPosition();
      clearCanvas();
      drawTreasure();
      drawEverything();
      break;
    case 39:
      player.moveRight();
      treasure.setRandomPosition();
      clearCanvas();
      drawTreasure();
      drawEverything();
      break;
    case 40:
      player.moveDown();
      treasure.setRandomPosition();
      clearCanvas();
      drawTreasure();
      drawEverything();
      break;
  }
});
