import PlanetAge from './js/PlanetAge.js';
import LifeExpectancy from './js/LifeExpectancy.js';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Planet Age UI logic
const planetAgeInterface = () => {
  const personAge = new PlanetAge();
  
  const mercuryAge = personAge.showPlanetAge(39, .24);
  const venusAge = personAge.showPlanetAge(39, .62);
  const marsAge = personAge.showPlanetAge(39, 1.88);
  const jupiterAge = personAge.showPlanetAge(39, 11.86);
  
  return `${mercuryAge}, ${venusAge}, ${marsAge}, ${jupiterAge}`;
};

console.log(planetAgeInterface()); 

// Life Expectancy UI logic
const lifeExpectInterface = () => {
  let personLife = new LifeExpectancy();

  let mercuryLife = personLife;

  return `${mercuryLife}`;
};

console.log(lifeExpectInterface);

