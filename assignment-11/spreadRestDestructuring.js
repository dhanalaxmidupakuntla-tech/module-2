arr1 = [1, 2, 3];
arr2 = [4, 5];
combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5]

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}   

const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const { name, address: { city, pin } } = user;

console.log(name); // "Alice"
console.log(city); // "Bangalore"
console.log(pin);  // 560001

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum()); // 0

