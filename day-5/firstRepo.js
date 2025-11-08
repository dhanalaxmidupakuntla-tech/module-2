function isPrime(num){
    if (num <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++){
        if (num % i === 0) return false;
    }
    return true;
}

function evenOdd(num) {
    return num % 2 === 0
}

let num = 3

console.log(isPrime(num))
console.log(evenOdd(num))

