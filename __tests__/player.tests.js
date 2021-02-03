import Player from '../src/js/player.js';

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });
  
  test('should create a player object', () => {
    expect(player).toEqual({score: 0, health: 100, inventory: []})
  });
  test('should add points to player score', () => {
    player.addScore(5);
    expect(player.score).toEqual(5)
  });
  test('should minus from player health', () => {
    player.takeDamage(25);
    expect(player.health).toEqual(75);
  });
  test('should add item to inventory', () => {
    player.addItem("sword");
    expect(player.inventory).toEqual(["sword"])
  });
  test('should remove item from inventory', () => {
    player.inventory = ['sword', 'gems', 'key']
    player.removeItem('gems')
    expect(player.inventory).toEqual(['sword', 'gems', 'key'])
  })
});
  

