if (true){
    let city = "New York";
}

console.log(city); // ReferenceError: city is not defined

if (true){
    var country = "USA";
}

console.log(country); // Outputs: USA

if (true){
    const continent = "North America";
    console.log(continent); // Outputs: North America
}

console.log(continent); // ReferenceError: continent is not defined

if (true){
    var language = "JavaScript";
    console.log(language); // Outputs: JavaScript
}

console.log(language); // Outputs: JavaScript


console.log(a);
var a = 10; // Outputs: undefined

console.log(b);
let b = 20; // ReferenceError: Cannot access 'b' before initialization  

