function greet(){
    console.log("Hello, World!");
}

function executeFunction(callback){
    callback();
}   

executeFunction(greet); // This will call executeFunction, which in turn calls greet and logs "Hello, World!" to the console.

let numbers = [1, 2, 3, 4, 5];

let r = numbers.map(num => numn > 2 ? num * 2 : num);

console.log(r); // This will log [1, 2, 6, 8, 10] to the console.