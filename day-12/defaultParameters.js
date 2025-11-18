function greet(name){
    console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, undefined!

function greetWithDefault(name = "Guest"){
    console.log("Hello, " + name + "!");
}

greetWithDefault(); // Output: Hello, Guest!