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
    if (this.health > 0) {
      this.health -= hit;
    } else if (this.health <= 0) {
      alert("YOU DEAD");
      location.reload();
    }
  }
  removeDamage(hit) {
    this.health += hit;
  }
  addItem(item) {
    this.inventory.push(item);
  }
  removeItem(item) {
    this.inventory.splice(this.inventory.indexOf(item), 1);
  }

}

