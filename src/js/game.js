
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
      document.getElementById('output').innerHTML = "OUCH! You got stabbed by a stabby, but got a sweet smushy tool";
      player.takeDamage(25);
      player.addItem("Hammer");
      } else if (this.action === 'two') {
        player.removeDamage(10);
        alert("YOU DIED")
        location.reload()
      } else if (this.action === 'three') {
        if (player.inventory.includes('Hammer') === true) {
          document.getElementById('output').innerHTML = "SMUSH";
        } else {
          player.takeDamage(40)
          document.getElementById('output').innerHTML = "You don't have the smushy tool";
        }
      
      }
      player.addScore(10);
      document.getElementById('playerHealth').innerHTML = player.health;
      document.getElementById('playerInventory').innerHTML = player.inventory.join(" ");
      document.getElementById('playerScore').innerHTML = player.score;
    }
}