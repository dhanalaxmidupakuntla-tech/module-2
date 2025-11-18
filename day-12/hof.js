let names = ['Alice', 'Bob', 'Charlie'];

names.forEach(function(name) {
    console.log('Hello, ' + name + '!');
}); 

// output:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!


let numbers = [1, 2, 3, 4, 5];

let m = numbers.filter(function(n) {
    return n % 2 === 0;
});

console.log(m); // output: [2, 4]   


let squares = numbers.map(function(n) {
    return n * n;
});

console.log(squares); // output: [1, 4, 9, 16, 25]


let sum = numbers.reduce(function(accumulator, n) {
    return accumulator + n;
});

console.log(sum); // output: 15


let multiply = numbers.reduce((accumulator, n) => n < accumulator ? accumulator * n : accumulator, 1);

console.log(multiply); // output: 1 (since 1 is the smallest number in the array)   


let sortedNumbers = numbers.sort(function(a, b) {
    return a - b;
});

console.log(sortedNumbers); // output: [1, 2, 3, 4, 5]