import PlanetAge from './js/PlanetAge.js';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

const tempUI = () => {
  const personAge = new PlanetAge();
  
  const mercuryAge = personAge.showPlanetAge(39, .24);
  const venusAge = personAge.showPlanetAge(39, .62);
  const marsAge = personAge.showPlanetAge(39, 1.88);
  const jupiterAge = personAge.showPlanetAge(39, 11.86);
  
  return `${mercuryAge}, ${venusAge}, ${marsAge}, ${jupiterAge}`;
};

console.log(tempUI()); 
