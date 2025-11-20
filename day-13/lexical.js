let z = 99;

function test() {
    let y = 100;

    function inner() {
        var x = 101;
    }
    console.log(x+y+z); // ReferenceError: x is not defined
}

console.log(y); // ReferenceError: y is not defined
console.log(z); // Outputs: 99

test(); // Calls the function test which will throw an error when trying to access x 
test() 
