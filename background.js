class Background {
  constructor ($canvas, context) {
    this.canvas = $canvas;
    this.context = context;
  }
}

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