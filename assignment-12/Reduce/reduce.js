function countCategories(categories) {
    return categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});
}

// Example usage:
const data = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(data));
// Output: { electronics: 2, clothing: 2, toys: 3 }