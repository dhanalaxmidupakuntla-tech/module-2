function outer(){
    let msg = "Hello";

    function inner(){
        console.log(msg); // Accessing variable from outer function
    }
    inner(); // Calling inner function
}

outer(); // Calling outer function
// Output: Hello

let count = 0;
function increment(){
    count++;
    console.log(count);
}

increment(); // Output: 1
increment(); // Output: 1
increment(); // Output: 1
// Each call to increment() resets count to 0

increment() ; // Output: 1
increment() ; // Output: 2

function createCounter(){
    let count = 0; // Private variable
    function increment(){
        count++;
        console.log(count);
    }
    return increment;
}

let counter = createCounter();
counter(); // Output: 1
counter.increment(); // Output: 2
counter(); // Output: 3


let score = 0;
function updateScore(points)
{    function incrementScore(){
        score += points;
        console.log("Score:", score);
    }

    function decrementScore(){
        score -= points;
        console.log("Score:", score);
    }
    return { incrementScore, decrementScore };
}

incrementScore(5); // Score: 5
decrementScore(2); // Score: 3
incrementScore(10); // Score: 13
decrementScore(4); // Score: 9
let scoreManager = updateScore(5);
scoreManager.incrementScore(); // Score: 14
scoreManager.decrementScore(); // Score: 9