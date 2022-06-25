
export default class PlanetAge {
  constructor() {
    this.planetAge = 0;
    this.yearsLeft = 0;
  }
  
  showPlanetAge(age, planetYear) {
    this.planetAge = Math.round(age / planetYear);
    
    return this.planetAge;
  }

  
}

export class LifeSpan {
  constructor(age, yearsLeft) {
    this.age = age;
    this.yearsLeft = yearsLeft;
  }
}