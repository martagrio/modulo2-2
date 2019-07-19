'use strict';

const userAge = document.querySelector('.edad').innerHTML;

const age = parseInt(userAge);


const daysPerYear = 365;
const hoursPerDay = 24;
const hoursPerYear = daysPerYear * hoursPerDay;
const hoursLived = age * hoursPerYear;

/* console.log('He vivido ' + hoursLived + ' horas en mi corta vida'); */

console.log(`En total, he vivido en toda mi corta vida ${hoursLived} horas.`);