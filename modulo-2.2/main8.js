'use strict';

const firstDogImage = 'https://www.fundacion-affinity.org/sites/default/files/styles/home_618x307_/public/categorias-affinity/tengo-un-perro-sh.jpg?itok=71Xj5Rgq';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/bouvier/n02106382_1381.jpg';
const thirdDogName = 'Lana';

const item1 = document.querySelector(".li1");

item1.innerHTML = `
<img src="${firstDogImage}" /> 
<p>${firstDogName}</p>`;

const item2 = document.querySelector(".li2");

item2.innerHTML = `
<img src="${secondDogImage}" /> 
<p>${secondDogName}</p>`;


const item3 = document.querySelector(".li3");

item3.innerHTML = `
<img src="${thirdDogImage}" /> 
<p>${thirdDogName}</p>`;