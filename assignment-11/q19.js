//1. Template Literals + Expressions

//a)

let a = 5;
let b = 10;

console.log(`The sum of ${a} and ${b} is ${a + b}.`);

//b)

const multiline = `This is line one.
This is line two.
This is line three.`;

console.log(multiline);

//c)

const firstName = "John";
const lastName = "Doe"; 

console.log(`Fullname: ${firstName} ${lastName}.`);

//2. Arrow Functions & this Keyword

//a)

function square(n) {
    return n * n;
}

const squareArrow = n => n * n;

//b)

const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();

// The output will be 'undefined' because arrow functions do not have their own 'this' context.

//c)

const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test();

// The output will be '50' because regular functions have their own 'this' context which refers to the object itself.

//3. Rest, Spread & Copying Objects

//a)

const product = { name: "Pen", price: 10 };
const copiedProduct = { ...product, price: 12 };

console.log(copiedProduct);
// Output: { name: 'Pen', price: 12 }

//b)

const a = { x: 1 };
const b = { y: 2 };

const merged = { ...a, ...b };

console.log(merged);
// Output: { x: 1, y: 2 }   

//c)

function maxValue(...num) {
    return Math.max(...num);
}   

console.log(maxValue(3, 5, 1, 8, 2)); // Output: 8

//4. Destructuring & Optional Chaining

//a)

const arr = [10, 20, 30];
const [first, , third] = arr;

console.log(first, third); // Output: 10 30

//b)

const laptop = { brand: "Dell", ram: "8GB" };
const { brand, ram } = laptop;

console.log(brand, ram); // Output: Dell 8GB    

//c)

const info = {};
console.log(info?.address?.city); // Output: undefined

//5. Scoping (let, const, var)

//a)

for (var i = 0; i < 3; i++) {}
console.log(i);

// Output: 3 (var is function-scoped)

//b)

for (let j = 0; j < 3; j++) {}
console.log(j);

// Output: ReferenceError: j is not defined (let is block-scoped)

//c)

// const is used so that the variable cannot be reassigned,
// improving safety and preventing accidental overwrites.


//6. Ternary Operator - Practice

//a)

let speed;
if (kmph > 60) {
  speed = "Fast";
} else {
  speed = "Normal";
}

speed = kmph > 60 ? "Fast" : "Normal";

//b)

const ageGroup = age < 18 ? "Minor" : "Adult";
console.log(ageGroup);

//c)

const num = 0;
const sign = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(sign);


//7. Spread, Rest & Arrays

//a)

const nums = [1,2,3];
const newNums = [...nums, 4, 5];
console.log(newNums); // Output: [1, 2, 3, 4, 5]

//b)

a = ["x","y"];
b = ["z"];

const combined = [...a, ...b];
console.log(combined); // Output: ['x', 'y', 'z']

//c)

const printNames = ("A","B","C") => {
    return console.log(`Names: ${"A"}, ${"B"}, ${"C"}`);   
};

printNames("A","B","C");
// Output: Names: A, B, C

//8. Object Destructuring & Shorthand

//a)
const user = { id: 101, status: "active" };

const { id, status } = user;
console.log(id, status); // Output: 101 active

//b)

const id = 101;
const role = "admin";
const user = {
  id: id,
  role: role
};

const userShorthand = { id, role };
console.log(userShorthand); // Output: { id: 101, role: 'admin' }

//c)

const name = "Alice";
const age = 25;

const person = {
    name,
    age,
    describe(){
        return `${this.name} is ${this.age} years old.`;
    }
}

console.log(person.describe()); // Output: Alice is 25 years old.

//9. Template Literals (More Practice)

//a)

const dateStr = `Today's date is: ${new Date().toDateString()}`;
console.log(dateStr);

//b)

const greet = (name, score) => `Hello ${name}, your score is ${score}/100`;
console.log(greet("Bob", 85));

//10. Arrow Functions Shorthands

//a)

const add = (x, y) => x + y;

//b)

const isAdult = age => age >= 18;

//c)

const double = n => n * 2;


//11. Spread Operator (Array & Object)

//a)

const arrClone = [...originalArray];
console.log(arrClone);  // Output: [1, 2, 3]

//b)    

const newArray = [100, ...old];
console.log(newArray);  // Output: [100, 1, 2, 3]

//c)

const a1 = { a: 1, b: 2 };
const a2 = { b: 3, c: 4 };
const mergedObj = { ...a1, ...a2 };
console.log(mergedObj);  // Output: { a: 1, b: 3, c: 4 }

//12. Optional Chaining (More Practice)

//a)

const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

console.log(user.address?.city); // Output: Bangalore

//b)

console(user.job.title); // Output: undefined

//c)
const data = { product: { name: "Mobile" } };
console.log(data?.product?.specs?.ram);