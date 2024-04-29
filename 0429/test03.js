/*
const arr = [5, 7, 1, 8, 4];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log(sum); // 25
*/

const arr = [5, 7, 1, 8, 4];

const sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(sum); // 25