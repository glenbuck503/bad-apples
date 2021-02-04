import Player from './player.js'

let player = new Player();

export default class Game {
  constructor() {
    this.action = undefined;
  }
  gameAction(action) {
  if (action === 'left') {
    player.takeDamage(50);
    console.log(player);
  }
}
}