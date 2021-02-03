export default class Player {
  constructor() {
  this.score = 0;
  this.health = 100;
  this.inventory = [];
  }

  addScore(points) {
    this.score += points;
  }
  takeDamage(hit) {
    this.health -= hit;
  }
  addItem(item) {
    this.inventory.push(item);
  }
  

}

