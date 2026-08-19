// .map()= accepts a callback and applies that function 
// to each element of an array, then return a new array

const numbers=[1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element){
    return Math.pow(element, 2)
}

function cube(element){
    return Math.pow(element, 3)
}

//Example 2
const students= ["spongebob", "patrick", "squidward", "sandy"];
const studentsUpper= students.map(upperCase);

console.log(studentsUpper);

function upperCase(element){
    return element.toUpperCase();
}

//example 3
const pupils= ["SPONGEBOB", "PATRICK", "SQUIDWARD", "SANDY"];
const pupilslower= pupils.map(lowerCase);

console.log(pupilslower);

function lowerCase(element){
    return element.toLowerCase();
}

//example 4