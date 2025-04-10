const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

const numbersEl = document.querySelector('#numbers');
const squareEl = document.querySelector('#square');
const negativeEl = document.querySelector('#negative');
const absoluteEl = document.querySelector('#absolute');
const evenEl = document.querySelector('#even');
const divisibleBy3El = document.querySelector('#divisibleBy3');
const distanceEl = document.querySelector('#distance');
const squareDistanceEl = document.querySelector('#squareDistance');
const negativeCountEl = document.querySelector('#negativeCount');
const sumEl = document.querySelector('#sum');
const meanEl = document.querySelector('#mean');
const sumPositiveEl = document.querySelector('#sumPositive');


numbers.forEach(number => numbersEl.innerHTML += `${number}, `);

numbers.forEach(number => squareEl.innerHTML += `${number ** 2}, `);

numbers.forEach((number) => {
  if (number < 0) {
    negativeEl.innerHTML += `${number}, `;
  };
});

numbers.forEach(number => absoluteEl.innerHTML += `${Math.abs(number)}, `);

numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenEl.innerHTML += `${number}, `;
  };
});

numbers.forEach((number) => {
  if (Math.abs(number) % 3 === 0) {
    divisibleBy3El.innerHTML += `${number}, `;
  };
});

//Kód k bodu 6 a bodu 7 zvlášť:

/*
numbers.forEach(number => distanceEl.innerHTML += `Číslo ${number} je o ${Math.abs(number - 5)} čísel dál. `);

numbers.forEach(number => squareDistanceEl.innerHTML += `Druhá mocnina vzdálenosti čísla ${number} od čísla 5 je ${(Math.abs(number - 5)) ** 2}. `);
*/

//Kód k bodu 6 a bodu 7 dohromady:

numbers.forEach((number) => {
  const distance = Math.abs(number - 5);
  
  distanceEl.innerHTML += `Číslo ${number} je o ${distance} čísel dál. `;
  squareDistanceEl.innerHTML += `Druhá mocnina vzdálenosti čísla ${number} od čísla 5 je ${distance ** 2}. `;
});


let countNeg = 0
numbers.forEach((number) => {
  if (number < 0) {
    countNeg += 1;
  };
});
negativeCountEl.textContent += countNeg;


//Ukládám si tu pro sebe ještě kratší řešení (ale je bez použití forEach): 
/*
const countNeg = numbers.filter(number => number < 0).length;
negativeCountEl.textContent += countNeg;
*/

let sum = 0;
numbers.forEach(number => sum += number);
sumEl.textContent += sum;

const mean = sum / numbers.length;
meanEl.textContent += mean;

let sumPositive = 0;
numbers.forEach((number) => {
  if (number > 0) {
    sumPositive += number;
  };
});
sumPositiveEl.textContent += sumPositive;
