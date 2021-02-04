import Player from './player.js'

let player = new Player();

export default class Game {
  constructor() {
    this.action = undefined;
  }
  gameAction() {
  if (this.action === 'left') {
    player.takeDamage(50);
    player.addItem("SWORD");
    }
    document.getElementById('playerHealth').innerHTML = player.health;
    document.getElementById('playerInventory').innerHTML = player.inventory.join(" ");
  }
}