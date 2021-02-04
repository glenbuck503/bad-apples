import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './js/game.js';
import Player from './js/player';




$(document).ready(function() {
  $('form#playerForm').submit(function(event) {
    event.preventDefault();
    let game = new Game();
    
    
    game.action = $("select#direction").val();
    game.gameAction();

    $(".playerStats").show();
    console.log(player)

    
  
  });
});