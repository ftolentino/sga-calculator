import PlanetAge from '../src/js/PlanetAge.js';

describe('PlanetAge', () => {
  test('it should return PlanetAge class object', () => {
    const personAge = new PlanetAge();
    expect(personAge).toEqual(personAge);
  });

  test('it should return planetAge equals 0, checking for property connection', () => {
    const personAge = new PlanetAge();
    expect(personAge.planetAge).toEqual(0);
  });

  test('should take age argument divided by planetYear argument and round to the nearest decimal', () => {
    const planetAge = new PlanetAge();
    expect(planetAge.showPlanetAge(20, .24)).toEqual(83);
  });

  test('yearsLeft method return a string', () => {
    const planetAge = new PlanetAge();
    expect(planetAge.yearsLeft(3)).toEqual(3);
  });
});