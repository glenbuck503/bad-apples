import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './js/game.js';


let game = new Game();

$(document).ready(function() {
  $('form#playerForm').submit(function(event) {
    event.preventDefault();
    
    let playerTurn = $("select#direction").val();
    playerTurn.gameAction();
    
  
  });
});