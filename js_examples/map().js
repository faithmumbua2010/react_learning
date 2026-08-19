// .map()= accepts a callback and applies that function 
// to each element of an array, then return a new array

const numbers=[1, 2, 3, 4, 5];

const squares = numbers.map(square);

function square(element){
    return Math.pow(element, 2)
}