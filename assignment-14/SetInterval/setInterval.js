const loadingInterval = setInterval(() => {
    console.log("Loading...")
}, 1000);

setTimeout(() => {
    clearInterval(loadingInterval)
    console.log("Loading successfully!")
},5000)