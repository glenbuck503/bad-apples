import Display from './../src/js/display.js';


describe('Display', () => {
  let display;

  beforeEach(() => {
    display = new Display();
  });

  test('create display object', () => {
    expect(display).toEqual({html: '', elementId: 'display'});
  });
});