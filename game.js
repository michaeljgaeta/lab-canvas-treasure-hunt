class Game {
  constructor ($canvas, context) {
    this.canvas = $canvas;
    this.context = context;
    this.background = new Background ($canvas, context);
    this.player = new Character(0,0, $canvas, context);
  }

  drawEverything() {
    clearCanvas();
    this.background.drawGrid();
    this.player.drawPlayer();
    this.treasure.drawTreasure();
  }

}