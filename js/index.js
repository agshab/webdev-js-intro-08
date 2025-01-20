// Prevent us from attempting to use variables
// that are not declared
"use strict"
"use strict";

// Experiment 1: Create an array and loop through it, logging out each value using the basic loop syntax.
let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Experiment 2: Create an array and loop through it, logging out each value using the "for...of" syntax.
let moreNumbers = [60, 70, 80, 90, 100];
for (let number of moreNumbers) {
    console.log(number);
}

// Experiment 3: Create an array and loop through it, logging out each value using the Array.forEach() method.
let evenNumbers = [2, 4, 6, 8, 10];
evenNumbers.forEach(function(number) {
    console.log(number);
});

// Experiment 4: Loop through an array using "for...of" and try assigning all the elements a new value. 
// What happens?
let numbersToModify = [1, 2, 3, 4, 5];
for (let number of numbersToModify) {
    number += 10;  // This only modifies the local variable, not the array itself.
    console.log(number);
}

// Experiment 5: Loop through an array using the Array.forEach() method and try assigning all the elements a new value.
// What happens?
let numbersForEach = [5, 10, 15, 20];
numbersForEach.forEach(function(number, index, array) {
    array[index] = number + 10;  // This modifies the array.
});
console.log(numbersForEach);
