'use strict';

function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function 
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const  appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

function calsAge1(birthYear) {
    // const age = 2037 -  birthYear;
    // return age;
    return 2037 - birthYear;
}

//  Function declaration
const age1 = calsAge1(1991);
console.log(age1);

// Function expression 
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);