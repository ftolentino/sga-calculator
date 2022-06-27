import LifeExpectancy from "../src/js/LifeExpectancy";

describe('LifeExpectancy', () => {
  test('it should return LifeExpectancy class object', () => {
    let personLife = new LifeExpectancy();
    expect(personLife).toEqual(personLife);
  });

  // test('it should return planetAge equals 0, checking for property connection', () => {
  //   let personAge = new LifeExpectancy();
  //   expect(personAge.planetAge).toEqual(0);
  // });

  // test('should take age argument divided by planetYear argument and round to the nearest decimal', () => {
  //   let planetAge = new LifeExpectancy();
  //   expect(planetAge.showPlanetAge(20, .24)).toEqual(83);
  // });

});