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
console.log(`You are ${mercuryAge} years old on Mercury!`);
console.log(`You are ${venusAge} years old on Venus!`);
console.log(`You are ${marsAge} years old on Mars!`);
console.log(`You are ${jupiterAge} years old on Jupiter!`);

// Life Expectancy UI logic
let personLife = new LifeExpectancy();

let mercuryLifeLeft = personLife.yearsToLive(mercuryAge);
let venusLifeLeft = personLife.yearsToLive(venusAge);
let marsLifeLeft = personLife.yearsToLive(marsAge);
let jupiterLifeLeft = personLife.yearsToLive(jupiterAge);

console.log(mercuryLifeLeft, venusLifeLeft, marsLifeLeft, jupiterLifeLeft);

//Longevity UI logic
let mercuryLifeBonus = personLife.longevity(mercuryLifeLeft);
let venusLifeBonus = personLife.longevity(venusLifeLeft);
let marsLifeBonus = personLife.longevity(marsLifeLeft);
let jupiterLifeBonus = personLife.longevity(jupiterLifeLeft);


const mercuryLife = () => {
  if (mercuryLifeLeft < 0) {
    return `Congrats! You have lived ${mercuryLifeBonus} years past the average planet age of 100 on Mercury!`; 
  } else if (mercuryLifeLeft >= 0) {
    return `You have ${mercuryLifeLeft} years left to live on Mercury.`;
  } 
};

const venusLife = () => {
  if (venusLifeLeft < 0) {
    return `Congrats! You have lived ${venusLifeBonus} years past the average planet age of 100 on Venus!`; 
  } else if (venusLifeLeft >= 0) {
    return `You have ${venusLifeLeft} years left to live on Venus.`;
  }
};

const marsLife = () => {
  if (marsLifeLeft < 0) {
    return `Congrats! You have lived ${marsLifeBonus} years past the average planet age of 100 on Mars!`; 
  } else if (marsLifeLeft >= 0) {
    return `You have ${marsLifeLeft} years left to live on Mars.`;
  }
};

const jupiterLife = () => {
  if (jupiterLifeLeft < 0) {
    return `Congrats! You have lived ${jupiterLifeBonus} years past the average planet age of 100 on Jupiter!`; 
  } else if (jupiterLifeLeft >= 0) {
    return `You have ${jupiterLifeLeft} years left to live on Jupiter.`;
  }
};

console.log(mercuryLife());
console.log(venusLife());
console.log(marsLife());
console.log(jupiterLife());





