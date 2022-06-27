export default class PlanetAge {
  constructor() {
    this.planetAge = 0;
  }

  showPlanetAge(age, planetYear) {
    this.planetAge = Math.round(age / planetYear);
    return this.planetAge;
  }
}
