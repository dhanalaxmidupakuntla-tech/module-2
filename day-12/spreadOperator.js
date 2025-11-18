const numbers = [1, 2, 3];

console.log(...numbers); // Output: 1 2 3

const n =  [2, 3,4, 5, 6];

console.log(...n); // Output: 2 3 4 5 6

const user = {
    name: 'Alice',
    age: 30
}; 

const updatedUser = {
    ...user,
    age: 31,
    city: 'New York'
};

console.log(updatedUser);
// Output: { name: 'Alice', age: 31, city: 'New York' }

function sum(x, y, z) {
    return x + y + z;
}

const nums = [1, 2, 3];

console.log(sum(...nums)); // Output: 6

function add(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

console.log(add(1, 2, 3, 4)); // Output: 10