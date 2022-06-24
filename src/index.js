import PlanetAge from './js/PlanetAge.js';
// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// $(document).ready(function () {
//   $('#selector').submit(function (event)) {
//     event.preventDefault(); //if it's a form
//     // UI code here
//   }
// });

console.log(PlanetAge);

const mercuryAge = new PlanetAge();
console.log(mercuryAge.showPlanetAge(20,.24));