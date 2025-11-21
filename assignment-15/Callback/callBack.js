function displayMessage (name){
    console.log(`Hello, ${name}!`);
}

function getUserInput(callback){
    console.log("Fetching username...");

    setTimeout(() => {
        const username = "Alica";
        callback(username)
    }, 1000)
}

getUserInput(displayMessage)