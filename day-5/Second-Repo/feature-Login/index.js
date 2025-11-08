function login(userName, password) {
  let users = ["Dhana", "Laxmi", "Rani"];

  if (users.includes(userName)) {
    if (password === "Lucky@123") {
      return "Login Successful...";
    } else {
      return "Wrong Password....";
    }
  } else {
    return "User Not Found, Please Signup";
  }
}

// Example usage:
console.log(login("Dhana", "Lucky@123")); // Login Successful...
console.log(login("Laxmi", "12345"));   // Wrong Password....
console.log(login("nani", "Lucky@123")); // User Not Found, Please Signup
