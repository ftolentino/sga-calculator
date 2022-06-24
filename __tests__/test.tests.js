import PlanetAge from '../src/js/PlanetAge.js';

describe('test message', () => {
  test('return string', () => {
    expect(PlanetAge()).toEqual(`hi, i'm a test!'`);
  });
});