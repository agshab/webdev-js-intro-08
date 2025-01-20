"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];

function findSmallestNumber(numbers) {
    let smallest = numbers[0];
    for (let number of numbers) {
        if (number < smallest) {
            smallest = number;
        }
    }
    return smallest;
}

function findLargestNumber(numbers) {
    let largest = numbers[0];
    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }
    return largest;
}

function findAverage(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}

submissionBtn.addEventListener("click", () => {
    const smallestNumber = findSmallestNumber(myNumbers);
    const largestNumber = findLargestNumber(myNumbers);
    const average = findAverage(myNumbers);

    smallestNumberElement.textContent = `Smallest Number: ${smallestNumber}`;
    largestNumberElement.textContent = `Largest Number: ${largestNumber}`;
    averageNumberElement.textContent = `Average: ${average}`;
});
