import PlanetAge from '../src/js/PlanetAge.js';

describe('PlanetAge', () => {
  test('it should return PlanetAge class object', () => {
    const ageObject = new PlanetAge();
    expect(ageObject).toEqual({});
  });
});