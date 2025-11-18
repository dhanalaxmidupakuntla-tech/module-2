function evaluateEmployee(employees) { 
    const filterdEmployees = employees.filter(employee => employee.tasksCompleted >= 5);

    const mapped = filterdEmployees.map(employee => {
        let performance;

        if (employee.rating >= 4.5) {
            performance = "Excellent";
        } else if (employee.rating >= 3.5 && employee.rating < 4.5) {
            performance = "Good";
        } else{
            performance = "Needs Improvement";
        }
        return { name: employee.name, performance: performance };
    });

    const order = {
        "Excellent": 3,
        "Good": 2,
        "Needs Improvement": 1
    }

    const sorted = mapped.sort((a, b) => order[b.performance] - order[a.performance]);

    return sorted;
}

const employees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
]

console.log(evaluateEmployee(employees));
// Expected Output:
// [
//     { name: "David", performance: "Excellent" },
//     { name: "Alice", performance: "Excellent" },
//     { name: "Charlie", performance: "Good" }
// ]