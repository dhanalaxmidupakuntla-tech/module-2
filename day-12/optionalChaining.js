const student = {
    name: "Alice",
    address: {
        city: "Wonderland",
        zip: "12345"
    }
};

console.log(student?.address?.city); // Output: "Wonderland"
console.log(student?.address?.country); // Output: undefined