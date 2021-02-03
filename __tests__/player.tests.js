import Player from '../src/js/player.js';

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });
  
  test('should create a player object', () => {
    expect(player).toEqual({score: 0, health: 100})
    
  });
});
  

