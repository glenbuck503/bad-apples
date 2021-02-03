export default class Player {
  constructor() {
  this.score = 0;
  this.health = 100;
  }

  addScore(points) {
    this.score += points;
  }
  takeDamage(hit) {
    this.health -= hit;
  }
  

}

