class Character {
  
  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.image = new Image();
    this.image.src = "images/character-down.png";
  }

  moveUp() {
    this.row -= 1
  };
  moveRight() {
    this.col += 1
  }; 
  moveDown() {
    this.row += 1
  };
  moveLeft() {
    this.col -= 1
  };
};