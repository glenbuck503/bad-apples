import Player from '../src/js/player.js';

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });
  
  test('should create a player object', () => {
    expect(player).toEqual({score: 0, health: 100})
  });
  test('should add points to player score', () => {
    player.addScore(5);
    expect(player.score).toEqual(5)
  });
  test('should minus from player health', () => {
    player.takeDamage(25);
    expect(player.health).toEqual(75)
  })
});
  

