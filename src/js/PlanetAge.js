
class PlanetAge {
  constructor() {
    this.planetAge = 0;
    this.yearsLeft = 0;
  }
  
  showPlanetAge(age, planetYear) {
    this.planetAge = Math.round(age / planetYear);
    
    return this.planetAge;
  }

  yearsLeft(age) {
    this.yearsLeft = age;
    return this.yearsLeft;
  }
}

export default PlanetAge;