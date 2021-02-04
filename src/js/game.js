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
    } else if (this.action === 'right') {
      player.removeDamage(10);
    }
    player.addScore(10);
    document.getElementById('playerHealth').innerHTML = player.health;
    document.getElementById('playerInventory').innerHTML = player.inventory.join(" ");
    document.getElementById('playerScore').innerHTML = player.score;
  }

  gameAction2() {

    if (this.action === 'one') {
      player.takeDamage(25);
      player.addItem("Hammer");
      } else if (this.action === 'two') {
        player.removeDamage(10);
      } else if (this.action === 'three') {
        player.takeDamage(10);
      player.addItem("blah");
      }
      player.addScore(10);
      document.getElementById('playerHealth').innerHTML = player.health;
      document.getElementById('playerInventory').innerHTML = player.inventory.join(" ");
      document.getElementById('playerScore').innerHTML = player.score;
    }
}