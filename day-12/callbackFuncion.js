function greet() {
    display()
}

function display() {
    console.log("Hello, World!");
}

greet(); // This will call greet, which in turn calls display and logs "Hello, World!" to the console.  

function get() {
    console.log("Getting");
}

function process(callback) {
    callback();
}

process(get); // This will call the process function, which in turn calls the get function and logs "Getting" to the console.


function fun(name){
    console.log("Hello " + name);
}

function fetchData(callback) {
    callback("Ani");
}

fetchData(fun); // This will call fetchData, which in turn calls fun with the argument "Ani" and logs "Hello Ani" to the console.