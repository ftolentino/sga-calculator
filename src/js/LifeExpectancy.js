export default class LifeExpectancy {
  constructor() {
    this.yearsLeft = 0;
  }

  yearsToLive(planetAge) {
    const averagePlanetLife = 100;
    this.yearsLeft = Math.floor(averagePlanetLife - planetAge);
    return this.yearsLeft;
  }
}
