// let x = 10; // This 'x' is in the global scope

// function fun() {
//     let x = 9;  //local to the function
//     console.log(x);
// }

// function fun2() {
//     let x = 15;
//     console.log(x);
// }

// fun();  // Outputs: 9
// fun2(); // Outputs: 15
// console.log(x); // ReferenceError: x is not defined
// // 'x' is not accessible here because it is block-scoped within the functions
// // To access the global 'x', we can log it directly

// let y = 10 ; // This 'y' is in the global scope

// function fun3() {
//     let y = 9;  // modifies the global 'y'
//     console.log(y);
// }

// function fun4() {
//     let y = 15; //local to the function
//     console.log(y);
// }

// fun3();  // Outputs: 9
// fun4(); // Outputs: 15
// console.log(y); // Outputs: 10

function deep(){
    var n = 9;
    console.log(n);
}

console.log(n); // ReferenceError: n is not defined
deep(); // Outputs: 9