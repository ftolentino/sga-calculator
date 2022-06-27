import PlanetAge from "../src/js/PlanetAge.js";

describe("PlanetAge", () => {
  test("it should return PlanetAge class object", () => {
    let personAge = new PlanetAge();
    expect(personAge).toEqual(personAge);
  });

  test("it should return planetAge equals 0, checking for property connection", () => {
    let personAge = new PlanetAge();
    expect(personAge.planetAge).toEqual(0);
  });

  test("showPlanetAge method should take age argument divided by planetYear argument and round to the nearest decimal", () => {
    let planetAge = new PlanetAge();
    expect(planetAge.showPlanetAge(20, 0.24)).toEqual(83);
  });
});
