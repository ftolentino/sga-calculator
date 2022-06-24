import PlanetAge from '../src/js/PlanetAge.js';

describe('PlanetAge', () => {
  test('it should return PlanetAge class object', () => {
    const personAge = new PlanetAge();
    expect(personAge).toEqual(personAge);
  });

  test('it should return planetAge', () => {
    const personAge = new PlanetAge(20, .24);
    expect(personAge.showPlanetAge()).toEqual(0);
  });
});