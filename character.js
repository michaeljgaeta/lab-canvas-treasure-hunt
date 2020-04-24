class Character {
  constructor(row, col, $canvas, context, src) {
    this.row = row;
    this.col = col;

    this.canvas = $canvas;
    this.context = context;

    this.image = new Image();
    this.image.src = "./../images/character-down.png";

    this.player = new Character(0,0, $canvas, context);
  }

  drawPlayer() {
    const playerImage = new Image();

    const height = this.canvas.height;
    const width = this.canvas.width;

    this.playerImage.addEventListener("load", () => {
      this.context.drawImage(playerImage, (this.row * width) / 10, (this.col * height) / 10, width / 10, height / 10);
    });
  }

  moveUp() {
    this.row -= 1;
  }
  moveRight() {
    this.col += 1;
  }
  moveDown() {
    this.row += 1;
  }
  moveLeft() {
    this.col -= 1;
  }
}
