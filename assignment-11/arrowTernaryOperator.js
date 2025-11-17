const isEven = n => n % 2 === 0;

const result = marks >= 35 ? "Pass" : "Fail";

const greet = name => `Hello, ${name ? name : "Guest"}`;
console.log(isEven(4)); // true
console.log(result); // "Pass"
console.log(greet("Alice"));    // "Hello, Alice"
console.log(greet(""));         // "Hello, Guest"
