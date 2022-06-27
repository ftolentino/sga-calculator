import PlanetAge from './js/PlanetAge.js';
import LifeExpectancy from './js/LifeExpectancy.js';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Planet Age UI logic
const personAge = new PlanetAge();

const mercuryAge = personAge.showPlanetAge(39, .24);
const venusAge = personAge.showPlanetAge(39, .62);
const marsAge = personAge.showPlanetAge(39, 1.88);
const jupiterAge = personAge.showPlanetAge(39, 11.86);

console.log(mercuryAge, venusAge, marsAge, jupiterAge); 

// Life Expectancy UI logic
let personLife = new LifeExpectancy();

let mercuryLifeLeft = personLife.yearsToLive(mercuryAge);
let venusLifeLeft = personLife.yearsToLive(venusAge);
let marsLifeLeft = personLife.yearsToLive(marsAge);
let jupiterLifeLeft = personLife.yearsToLive(jupiterAge);

console.log(mercuryLifeLeft, venusLifeLeft, marsLifeLeft, jupiterLifeLeft);

