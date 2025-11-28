const user = {
    n: "ani",
    age: 22,
    greet : function() {
        console.log("hello");
    }
}

console.log(user);

console.log(JSON.stringify(user))


// JSON - JavaScript Object Notation
// used to store and exchange data  between server and client
// it is in string format

// JSON syntax rules


// Data is in name/value pairs
// Data is separated by commas
// Curly braces hold objects
// Square brackets hold arrays
// Example
// {
//     "name": "ani",
//     "age": 22,
//     "city": "bangalore"
// }

// Converting JS object to JSON string
// JSON.stringify()



// Converting JSON string to JS object
// JSON.parse()
let jsonData = '{"name": "ani", "age": 22, "city": "bangalore"}';

let jsObj = JSON.parse(jsonData);
console.log(jsObj);
console.log(jsObj.name);
console.log(jsObj.age);

//output
// { n: 'ani', age: 22, greet: [Function: greet] }
// {"n":"ani","age":22,"greet":{}}

// { name: 'ani', age: 22, city: 'bangalore' }
// ani
// 22

