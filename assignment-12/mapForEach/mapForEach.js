function processProducts(products) {
    // 1. Use map() to extract product names
    const productNames = products.map(product => product.name).forEach(product => {
        if (product.price > 50) {
            console.log(`${product.name} is above $50`);
        } else {
            console.log(`${product.name} is below $50`);
        }
    });

    return productNames; // optional, if you need the names array
}

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Mouse', price: 20 }, 
]

processProducts(products);
// Expected console output:
// Laptop is above $50
// Mouse is below $50