class Treasure {
  constructor($canvas, context) {
    this.canvas = $canvas;
    this.context = context;

    this.row = 0;
    this.col = 0;
    this.setRandomPosition();

    this.image = new Image();
    this.image.src = "./..images/treasure.png";
  }

  setRandomPosition() {
    this.row = Math.floor(Math.random() * 10);
    this.col = Math.floor(Math.random() * 10);
  }

  drawTreasure() {
    const treasureImage = new Image();
    const width = this.canvas.width;
    const height = this.canvas.height;

    this.image.addEventListener("load", () => {
      this.context.drawImage(treasureImage, (this.col * width) / 10, (this.row * height) / 10, width / 10, height / 10);
    });
  }
}
