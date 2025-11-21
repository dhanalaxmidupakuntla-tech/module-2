function breakfast(callback){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const breakfst = true;
            if (breakfst){
                resolve("Done with breakfast!");
            }
            else{
                reject("Didn't")
            }
        }, 1500)
    });
}

function cleanKitchen(callback){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const kitchen = false;
            if (kitchen){
                resolve("Clean the kitchen!");
            }
            else{
                reject("Clean it")
            }
        }, 2500);
    });
}

function takeOutTrash(callback){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const trash = false;
            if (trash){
                resolve("Take out dustbin!");
            }
            else{
                reject("go to dustbin!")
            }
        }, 500);
    });
}

breakfast().then(value => {
    console.log(value);
    return cleanKitchen()
})
.then(value => {
    console.log(value);
    return takeOutTrash()
})
.then(value => {
    console.log(value);
    console.log("You fininshed")
})
.catch(error => {
    console.error(error)
})
.finally(() => {
    console.log("Take finished(success or fail)")
})